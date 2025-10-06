import {
    fetchTagsFromFirestore,
    addTagToFirestore,
    deleteTagFromFirestore,
    updateTagInFirestore
} from "@/api/blog-our-posts-api.js"

export default {
    state: {
        posts: [],
        selectedPost: null,
        isLoading: false,
        tags: []
    },
    mutations: {
        SET_LOADING(state, isLoading) {
            state.isLoading = isLoading;
        },
        SET_TAGS(state, tags) {
            state.tags = tags;
        },
        ADD_TAG(state, tag) {
            state.tags.push(tag);
        },
        DELETE_TAG(state, tagName) {
            state.tags = state.tags.filter(tag => tag !== tagName);
        },
        EDIT_TAG(state, { oldTagName, newTagName }) {
            const index = state.tags.indexOf(oldTagName);
            if (index !== -1) {
                state.tags.splice(index, 1, newTagName); // Замінюємо старий тег на новий
            }
        }
    },
    getters: {
        getTags: (state) => state.tags
    },
    actions: {
        async fetchTags({
            commit
        }) {
            // commit('SET_LOADING', true);
            try {
                const tags = await fetchTagsFromFirestore();
                commit('SET_TAGS', tags);
                // console.log(tags);
            } catch (error) {
                console.error('Error fetching tags', error);
            }
            //   finally {
            //     commit('SET_LOADING', false);
            //   }
        },
        async addTag({
            commit
        }, tagName) {
            try {
                await addTagToFirestore(tagName);
                commit('ADD_TAG', tagName);
            } catch (error) {
                console.error('Error adding tag', error);
            }
        },
        async deleteTag({
            commit
        }, tagName) {
            try {
                await deleteTagFromFirestore(tagName);
                commit('DELETE_TAG', tagName);
            } catch (error) {
                console.error('Error adding tag', error);
            }
        },
        async editTag({
            commit
        }, {
            oldTagName,
            newTagName
        }) {
            try {
                await updateTagInFirestore(oldTagName, newTagName);
                commit('EDIT_TAG', {
                    oldTagName,
                    newTagName
                })
                // Оновіть стан магазину або викличте інші необхідні дії
                console.log('Tag edited successfully!');
            } catch (error) {
                console.error('Error editing tag', error);
            }
        }
    }
}