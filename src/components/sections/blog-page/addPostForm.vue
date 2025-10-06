<template>
    <div v-if="addPostForm" class="modal" @click="closeModal">
        <div v-if="!isSending" class="modal-content" @click.stop>
            <span class="modal-content-title ">Adding a post</span>
            <form @submit.prevent="addPost">
                <span class="modal-content-rows">Title:</span>
                <input type="text" v-model="newPost.title"
                    :style="{ borderColor: validationError && !newPost.title ? 'red' : 'black' }" required />

                <span class="modal-content-rows">Content:</span>
                <textarea v-model="newPost.content"
                    :style="{ borderColor: validationError && !newPost.content ? 'red' : 'black' }" required></textarea>

                <span class="modal-content-rows">Read Time:</span>
                <input v-model="newPost.readTime"
                    :style="{ borderColor: validationError && !newPost.readTime ? 'red' : 'black' }" required />

                <span class="modal-content-rows">Tags:</span>
                <div class="multiselect">
                    <div class="selected-options">
                        <div v-for="(option, index) in newPost.selectedTags" :key="index" class="selected-option">
                            {{ option }}
                            <span @click="removeOption(index)" class="remove-option">×</span>
                        </div>
                    </div>
                    <input type="text" v-model="searchText" @input="filterOptions" @keydown.enter.prevent="addOption"
                        @click="toggleDropdown"
                        :style="{ borderColor: validationError && newPost.selectedTags.length === 0 ? 'red' : 'black' }"
                        class="w-full">
                    <div class="options" v-show="isOpen">
                        <button type="button" class="w-full modal-content-tags-buttons" :style="{ backgroundColor: 'green' }"
                            @click="startAddingTag()">Add Tag</button>
                        <div v-for="(option, index) in filteredOptions" :key="index" @click="toggleOption(option)"
                            class="option">
                            <div v-if="editingTagIndex !== index" class="flex justify-between">
                                <span class="flex flex-col justify-center">{{ option }}</span>
                                <div v-if="!isDeletingTagFromFirestore">
                                    <button @click.stop="startEditingTag(option, index)" class="modal-content-tags-buttons mr-2"
                                        :style="{ backgroundColor: '#007BFF' }">Edit Tag</button>
                                    <button @click.stop="deleteTag(option)" class="modal-content-tags-buttons"
                                        :style="{ backgroundColor: 'red' }">Delete Tag</button>
                                </div>
                                <div v-else-if="isDeletingTagFromFirestore && deletingTagName === option"
                                    class="loading-animation-tag"></div>
                            </div>

                            <div v-if="isEditingTag && editingTagIndex === index" class="flex justify-between">
                                <input v-model="editedTagName" type="text" class="form-control" @click.stop>
                                <div v-if="!isAddingEditedTagToFirestore">
                                    <button @click.stop="saveEditedTag(option)" class="modal-content-tags-buttons mr-2"
                                        :disabled="!editedTagName" :style="{ backgroundColor: 'green' }">Save</button>
                                    <button @click.stop="cancelEditingTag"
                                        class="modal-content-tags-buttons" :style="{ backgroundColor: 'red' }">Cancel</button>
                                </div>
                                <div v-else-if="isAddingEditedTagToFirestore"
                                    class="loading-animation-tag"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div v-if="isAddingTag" class="modal">
                    <div v-if="!isSendingNewTag" class="modal-content" @click.stop>
                        <div class="flex justify-between">
                            <span class="modal-content-title ">Adding a tag</span>
                            <span @click="isAddingTag = false" class="cursor-pointer">&#10006;</span>
                        </div>
                        <form @submit.prevent="addNewTag" class="my-2">
                            <span class="modal-content-rows">Tag name:</span>
                            <input type="text" v-model="newTagName"
                                :style="{ borderColor: tagValidationError && newTagName ? 'red' : 'black' }" required />
                        </form>
                        <Button v-if="!isAddingTagToFirestore" @click="addNewTag">Add New Tag</Button>
                        <div v-else class="loading-animation-tag"></div>
                    </div>
                    <div v-if="tagValidationError" class="error-message">{{ tagValidationError }}</div>
                </div>

                <span class="modal-content-rows">Image:</span>
                <label for="fileInput" class="modal-content-file-upload-label">
                    <i class="fas fa-cloud-upload-alt"></i> {{ selectedImage ? `Uploaded file name:
                    ${selectedImage.name}` : 'Upload the file' }}
                </label>
                <input type="file" id="fileInput" @change="handleImageUpload" accept="image/*" style="display: none;" />

                <Button @click="addPost" class="modal-content-form-button">Add Post</Button>

                <div v-if="validationError" class="error-message">{{ validationError }}</div>
            </form>
        </div>
        <div v-else class="loading-animation"></div>
    </div>
</template>

<script>
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import Button from "../../buttons";
import { v4 as uuidv4 } from 'uuid';
import { mapGetters } from 'vuex';

export default {
    name: "BlogPageAddPostFormComponent",
    props: {
        addPostForm: {
            type: Boolean
        },
        isSending: {
            type: Boolean
        }
    },
    components: {
        Button
    },
    data: function () {
        return {
            newPost: {
                title: '',
                content: '',
                readTime: '',
                selectedTags: [],
            },
            searchText: '',
            isOpen: false,
            selectedImage: null,
            validationError: '',
            ////////adding tag///////////
            isAddingTag: false,
            newTagName: '#',
            isAddingTagToFirestore: false,
            tagValidationError: '',
            ////////deleting tag/////////
            deletingTagName: null,
            isDeletingTagFromFirestore: false,
            ////////editing tag//////////
            isEditingTag: false,
            editedTagName: '',
            isAddingEditedTagToFirestore: false,
            editingTagIndex: null,
        };
    },
    computed: {
        ...mapGetters(['getTags']),
        filteredOptions() {
            if (this.getTags) {
                return this.getTags.filter(option =>
                    option.toLowerCase().includes(this.searchText.toLowerCase())
                );
            } else {
                return [];
            }
        }
    },
    mounted() {
        this.$store.dispatch('fetchTags');
    },
    methods: {
        closeModal() {
            this.$emit('closeModal')
            this.validationError = ''
        },
        handleImageUpload(event) {
            this.selectedImage = event.target.files[0];
        },
        async addPost(event) {
            event.preventDefault();

            if (!this.newPost.title || !this.newPost.content || !this.newPost.readTime || !this.selectedImage || this.newPost.selectedTags.length === 0) {
                this.validationError = 'Please fill in all fields and upload an image.';
                return;
            } else {
                const storage = getStorage();
                const uniqueFileName = uuidv4() + '-' + this.selectedImage.name;
                const storageRef = ref(storage, 'images/' + uniqueFileName);

                const uploadTask = uploadBytes(storageRef, this.selectedImage);

                await uploadTask;

                const downloadURL = await getDownloadURL(storageRef);

                const db = getFirestore();
                const postsCollection = collection(db, 'posts');

                const postData = {
                    title: this.newPost.title,
                    content: this.newPost.content,
                    article: this.newPost.content,
                    readTime: this.newPost.readTime,
                    tags: this.newPost.selectedTags,
                    img: downloadURL,
                    author: 'Hypedriven',
                    date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
                    timestamp: new Date().getTime(),
                };

                try {
                    this.$emit('updateIsSending', true);
                    const docRef = await addDoc(postsCollection, postData);
                    console.log('Document added with ID: ', docRef.id);

                    this.newPost = {
                        title: '',
                        content: '',
                        readTime: '',
                        selectedTags: []
                    };
                    this.selectedImage = null;

                    this.validationError = '';

                    this.$emit('updateAddPostForm', false);
                    this.$emit('updatePosts');
                } catch (e) {
                    console.error('Error adding document: ', e);
                } finally {
                    this.$emit('updateIsSending', false);
                }
            }
        },
        addOption() {
            if (this.searchText && !this.newPost.selectedTags.includes(this.searchText)) {
                this.newPost.selectedTags.push(this.searchText);
                this.searchText = '';
            }
        },
        removeOption(index) {
            this.newPost.selectedTags.splice(index, 1);
        },
        toggleOption(option) {
            if (!this.newPost.selectedTags.includes(option)) {
                this.newPost.selectedTags.push(option);
            } else {
                this.newPost.selectedTags = this.newPost.selectedTags.filter(selectedOption => selectedOption !== option);
            }
        },
        filterOptions() {
            this.isOpen = true;
        },
        toggleDropdown() {
            this.isOpen = !this.isOpen;
        },
        startAddingTag() {
            this.isAddingTag = true;
        },
        async addNewTag() {
            if (this.newTagName.length <= 1) {
                this.tagValidationError = 'Please fill in the Tag name.';
                return;
            } else {
                try {
                    this.isAddingTagToFirestore = true;
                    await this.$store.dispatch('addTag', this.newTagName);
                    this.newTagName = '#';
                    this.tagValidationError = '';
                    this.isAddingTag = false;
                } catch (e) {
                    console.error('Error adding document: ', e);
                } finally {
                    this.isAddingTagToFirestore = false;
                }
            }
        },
        async deleteTag(tagName) {
            try {
                this.deletingTagName = tagName;
                this.isDeletingTagFromFirestore = true;
                await this.$store.dispatch('deleteTag', tagName);
            } catch (e) {
                console.error('Error deleting document: ', e);
            } finally {
                this.isDeletingTagFromFirestore = false;
                this.deletingTagName = null;
            }
        },
        startEditingTag(oldTagName, index) {
            this.isEditingTag = true;
            this.editedTagName = oldTagName;
            this.editingTagIndex = index; // Заповнюємо поле для введення нового значення тегу поточним значенням тегу
        },
        cancelEditingTag() {
            this.isEditingTag = false;
            this.editedTagName = ''; // Скидаємо значення нового тегу при скасуванні редагування
            this.editingTagIndex = null; 
        },
        async saveEditedTag(oldTagName) {
            if (this.editedTagName.length === 1) {
                this.validationError = 'Please fill in the Tag name.';
                return;
            } else {
                try {
                    this.isAddingEditedTagToFirestore = true;
                    const newTagName = this.editedTagName;
                    await this.$store.dispatch('editTag', { oldTagName, newTagName });
                    this.cancelEditingTag(); // Скасуємо режим редагування після збереження тегу
                    this.validationError = '';
                } catch (e) {
                    console.error('Error editing tag: ', e);
                } finally {
                    this.isAddingEditedTagToFirestore = false;
                }
            }
        }
    }
}
</script>

<style scoped>
.modal {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    justify-content: center;
    align-items: center;
}

.modal-content {
    background-color: white;
    padding: 40px;
    border-radius: 8px;
    max-width: 600px;
    width: 100%;
}

.modal-content-title {
    font-size: 22px;
    font-weight: 700;
}

.modal-content form {
    display: flex;
    flex-direction: column;
}

.modal-content-form-button {
    margin-top: 10px;
    padding: 10px;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.modal-content-tags-buttons {
    padding: 5px;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.modal-content form label {
    margin-bottom: 5px;
    font-weight: bold;
}

.modal-content-file-upload-label {
    display: inline-block;
    padding: 10px 15px;
    background-color: #3498db;
    color: #fff;
    cursor: pointer;
    border-radius: 5px;
}

.modal-content-file-upload-label i {
    margin-right: 5px;
}

.modal-content form input {
    border: 1px solid black;
    border-radius: 5px;
    padding: 2px;
}

.modal-content form textarea {
    border: 1px solid black;
    border-radius: 5px;
    padding: 2px;
}

.modal-content-rows {
    font-size: 18px;
    font-weight: 700;
}

.loading-animation {
    /* Додайте стилі для анімації завантаження */
    width: 80px;
    height: 80px;
    border: 6px solid #e4e4e4;
    border-top: 6px solid #150DCE;
    border-radius: 50%;
    animation: spin 1s infinite linear;
    margin: 0 auto;
}

.loading-animation-tag {
    width: 40px;
    height: 40px;
    border: 4px solid #e4e4e4;
    border-top: 4px solid #150DCE;
    border-radius: 50%;
    animation: spin 1s infinite linear;
    margin: 0 auto;
}

.error-message {
    color: red;
    font-size: 18px;
    font-weight: 700;
    text-align: center;
    margin-top: 20px;
}

.multiselect {
    position: relative;
}

.selected-options {
    display: flex;
    flex-wrap: wrap;
}

.selected-option {
    background-color: #66C3CD;
    padding: 5px;
    margin: 2px;
    border-radius: 5px;
    color: white;
}

.remove-option {
    cursor: pointer;
    margin-left: 5px;
}

.options {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    max-height: 150px;
    overflow-y: auto;
    background-color: #fff;
    border: 1px solid #ccc;
    border-top: none;
}

.option {
    padding: 5px;
    cursor: pointer;
}

.option:hover {
    background-color: #f0f0f0;
}
</style>
