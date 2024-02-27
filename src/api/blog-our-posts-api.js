// import { getFirestore, collection, getDocs } from 'firebase/firestore';

import {
  getFirestore,
  collection,
  getDocs,
  orderBy,
  query,
  limit,
  startAfter,
  getDoc,
  doc,
  updateDoc,
  addDoc,
  deleteDoc,
  where /*onSnapshot*/
} from 'firebase/firestore';

export async function fetchPostsFromFirestore(pageSize, lastVisiblePost) {
  const db = getFirestore();
  const postsCollection = collection(db, 'posts');
  let q = query(postsCollection, orderBy('timestamp', 'desc'), limit(pageSize));

  if (lastVisiblePost) {
    q = query(postsCollection, orderBy('timestamp', 'desc'), startAfter(lastVisiblePost.timestamp), limit(pageSize));
  }

  try {
    const querySnapshot = await getDocs(q);
    const posts = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    return posts;
  } catch (error) {
    console.error('Error fetching posts from Firestore', error);
    throw error;
  }
}

export async function fetchPostByIdFromFirestore(postId) {
  const db = getFirestore();
  const postDocRef = doc(db, 'posts', postId);

  try {
    const postDoc = await getDoc(postDocRef);

    if (postDoc.exists()) {
      return {
        id: postDoc.id,
        ...postDoc.data()
      };
    } else {
      console.error('Post not found with id:', postId);
      return null;
    }
  } catch (error) {
    console.error('Error fetching post by id from Firestore', error);
    throw error;
  }
}

export async function updatePostOnFirestore(postId, postData) {
  const db = getFirestore();
  const postsCollection = collection(db, 'posts');
  const postDoc = doc(postsCollection, postId);

  try {
    await updateDoc(postDoc, postData);
    console.log('Post updated successfully');
  } catch (error) {
    console.error('Error updating post:', error);
    throw error;
  }
}

export async function fetchLastThreePostsFromFirestore() {
  const db = getFirestore();
  const postsCollection = collection(db, 'posts');
  const q = query(postsCollection, orderBy('timestamp', 'desc'), limit(3));

  try {
    const querySnapshot = await getDocs(q);
    const lastThreePosts = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    return lastThreePosts;
  } catch (error) {
    console.error('Error fetching last three posts from Firestore', error);
    throw error;
  }
}

export async function fetchTagsFromFirestore() {
  const db = getFirestore();
  const tagsCollection = collection(db, 'tags');

  try {
    const querySnapshot = await getDocs(tagsCollection);
    const tags = querySnapshot.docs.map(doc => doc.data().tag);
    return tags;
  } catch (error) {
    console.error('Error fetching tags from Firestore', error);
    throw error;
  }
}

export async function addTagToFirestore(tag) {
  const db = getFirestore();
  const tagsCollection = collection(db, 'tags');

  try {
    const docRef = await addDoc(tagsCollection, {
      tag
    });
    console.log(`Tag is succefully added: ${docRef}`)
  } catch (e) {
    console.error('Error adding Tag: ', e);
  } 
}

export async function deleteTagFromFirestore(tag) {
  const db = getFirestore();
  const tagsCollection = collection(db, 'tags');

  try {
      const q = query(tagsCollection, where('tag', '==', tag));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        // Якщо так, видаляємо перший знайдений документ
        const docSnapshot = querySnapshot.docs[0];
        await deleteDoc(docSnapshot.ref);
        console.log('Tag successfully deleted!');
      } else {
        console.log('Tag with uniqueId', tag, 'not found.');
      }
  } catch (e) {
      console.error('Error deleting document: ', e);
  } 
}

export async function updateTagInFirestore(oldTagName, newTagName) {
  const db = getFirestore();
  const tagsCollection = collection(db, 'tags');

  try {
    // Знайдіть тег за його назвою
    const q = query(tagsCollection, where('tag', '==', oldTagName));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      // Якщо тег знайдено, оновіть його назву
      const docSnapshot = querySnapshot.docs[0];
      await updateDoc(docSnapshot.ref, { tag: newTagName });
      console.log('Tag successfully updated!');
    } else {
      console.log('Tag not found.');
    }
  } catch (e) {
    console.error('Error updating document: ', e);
  } 
}