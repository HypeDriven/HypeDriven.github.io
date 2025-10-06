<template>
    <div v-if="editPostForm" class="modal" @click="closeModal">
        <div v-if="!isUpdating" class="modal-content" @click.stop>
            <span class="modal-content-title ">Editing a post</span>
            <form @submit.prevent="saveEditedPost">
                <span class="modal-content-rows">Title:</span>
                <input type="text" v-model="editedPost.title"
                    :style="{ borderColor: validationError && !editedPost.title ? 'red' : 'black' }" required />

                <span class="modal-content-rows">Content:</span>
                <textarea v-model="editedPost.content"
                    :style="{ borderColor: validationError && !editedPost.content ? 'red' : 'black' }" required></textarea>

                <span class="modal-content-rows">Read Time:</span>
                <input v-model="editedPost.readTime"
                    :style="{ borderColor: validationError && !editedPost.readTime ? 'red' : 'black' }" required />

                <span class="modal-content-rows">Tags:</span>
                <div class="multiselect">
                    <div class="selected-options">
                        <div v-for="(option, index) in editedPost.selectedTags" :key="index" class="selected-option">
                            {{ option }}
                            <span @click="removeOption(index)" class="remove-option">×</span>
                        </div>
                    </div>
                    <input type="text" v-model="searchText" @input="filterOptions" @keydown.enter.prevent="addOption"
                        @click="toggleDropdown"
                        :style="{ borderColor: validationError && editedPost.selectedTags.length === 0  ? 'red' : 'black' }" class="w-full">
                    <div class="options" v-show="isOpen">
                        <div v-for="(option, index) in filteredOptions" :key="index" @click="toggleOption(option)"
                            class="option">
                            {{ option }}
                        </div>
                    </div>
                </div>

                <span class="modal-content-rows">Image:</span>
                <label for="fileInput" class="modal-content-file-upload-label">
                    <i class="fas fa-cloud-upload-alt"></i> {{ imageForUpdate ? `New image: ${imageForUpdate.name}`
                        : 'Update the image' }}
                </label>
                <input type="file" id="fileInput" @change="handleImageUpload" accept="image/*" style="display: none;" />

                <Button @click="saveEditedPost">Update Post</Button>

                <div v-if="validationError" class="error-message">{{ validationError }}</div>
            </form>
        </div>
        <div v-else class="loading-animation"></div>
    </div>
</template>

<script>
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { getFirestore, collection, doc, updateDoc, getDoc } from 'firebase/firestore';
import Button from "../../buttons";
import { v4 as uuidv4 } from 'uuid';
import { mapGetters } from 'vuex';

export default {
    name: "BlogPageEditPostFormComponent",
    props: {
        editPostForm: {
            type: Boolean
        },
        isUpdating: {
            type: Boolean
        },
        postToEdit: {
            type: Object
        }
    },
    components: {
        Button
    },
    data: function () {
        return {
            editedPost: {
                id: '',
                title: '',
                content: '',
                readTime: '',
                selectedTags: []
            },
            // options: ['#Game', '#Outstaffing', '#Game development'], 
            searchText: '', // Текст для пошуку
            isOpen: false,
            imageForUpdate: null,
            validationError: '',
        };
    },
    watch: {
        postToEdit: {
            handler(newVal) {
                if (newVal) {
                    this.editPost();
                }
            },
            deep: true,
        },
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
            this.imageForUpdate = event.target.files[0];
        },
        editPost() {
            this.editedPost.id = this.postToEdit.id;
            this.editedPost.title = this.postToEdit.title;
            this.editedPost.content = this.postToEdit.content;
            this.editedPost.readTime = this.postToEdit.readTime;
            this.editedPost.selectedTags = [...this.postToEdit.tags];
        },
        async saveEditedPost(event) {
            event.preventDefault();

            if (!this.editedPost.title || !this.editedPost.content || !this.editedPost.readTime || this.editedPost.selectedTags.length === 0) {
                this.validationError = 'Do not leave blank fields when editing.';
                return;
            }

            try {
                this.$emit('updateIsUpdating', true)
                const db = getFirestore();
                const postsCollection = collection(db, 'posts');
                const postDoc = doc(postsCollection, this.editedPost.id);
                const oldPostData = await getDoc(postDoc);

                const oldImageURL = oldPostData.data().img;

                let downloadURL = null;

                if (this.imageForUpdate && oldImageURL) {
                    const storage = getStorage();
                    const oldImageRef = ref(storage, oldImageURL);
                    await deleteObject(oldImageRef);
                }

                if (this.imageForUpdate) {
                    const storage = getStorage();
                    const uniqueFileName = uuidv4() + '-' + this.imageForUpdate.name;
                    const storageRef = ref(storage, 'images/' + uniqueFileName);
                    // const storageRef = ref(storage, 'images/' + this.imageForUpdate.name);
                    await uploadBytes(storageRef, this.imageForUpdate);

                    downloadURL = await getDownloadURL(storageRef);
                }

                let changes = {};
                if (downloadURL) {
                    changes = {
                        title: this.editedPost.title,
                        content: this.editedPost.content,
                        readTime: this.editedPost.readTime,
                        tags: this.editedPost.selectedTags,
                        img: downloadURL
                    };
                } else {
                    changes = {
                        title: this.editedPost.title,
                        content: this.editedPost.content,
                        readTime: this.editedPost.readTime,
                        tags: this.editedPost.selectedTags
                    };
                }

                await updateDoc(postDoc, changes);

                this.$emit('updatePosts');

                this.imageForUpdate = null;

                this.validationError = '';

                this.$emit('updateEditPostForm', false)

            } catch (error) {
                console.error('Error updating post:', error);
            } finally {
                this.$emit('updateIsUpdating', false)
            }
        },
        addOption() {
            if (this.searchText && !this.editedPost.selectedTags.includes(this.searchText)) {
                this.editedPost.selectedTags.push(this.searchText);
                this.searchText = '';
            }
        },
        removeOption(index) {
            this.editedPost.selectedTags.splice(index, 1);
        },
        toggleOption(option) {
            if (!this.editedPost.selectedTags.includes(option)) {
                this.editedPost.selectedTags.push(option);
            } else {
                this.editedPost.selectedTags = this.editedPost.selectedTags.filter(selectedOption => selectedOption !== option);
            }
        },
        filterOptions() {
            this.isOpen = true;
        },
        toggleDropdown() {
            this.isOpen = !this.isOpen;
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

.modal-content form button {
    margin-top: 10px;
    padding: 10px;
    background-color: #007BFF;
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