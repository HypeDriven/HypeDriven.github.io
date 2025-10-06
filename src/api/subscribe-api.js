import { getFirestore, collection, getDocs, query, addDoc, deleteDoc, where} from 'firebase/firestore';

export async function saveSubscriptionToFirestore(subscription) {
  const db = getFirestore();
  const subscriptionsCollection = collection(db, 'subscriptions');

  try {
    // Додайте новий документ із електронною поштою підписника
    await addDoc(subscriptionsCollection, {
      subscription
    });
    console.log('Subscription saved successfully');
  } catch (error) {
    console.error('Error saving subscription:', error);
    throw error;
  }
}

export async function deleteSubscriptionFromFirestore(uniqueId) {
  const db = getFirestore();
  const subscriptionsCollection = collection(db, 'subscriptions');

  try {
    // Створюємо запит для пошуку документа з вказаним унікальним ідентифікатором
    const q = query(subscriptionsCollection, where('subscription.uniqueId', '==', uniqueId));
    const querySnapshot = await getDocs(q);

    // Перевіряємо, чи знайдено хоча б один документ
    if (!querySnapshot.empty) {
      // Якщо так, видаляємо перший знайдений документ
      const docSnapshot = querySnapshot.docs[0];
      await deleteDoc(docSnapshot.ref);
      console.log('Subscription successfully deleted!');
    } else {
      console.log('Subscription with uniqueId', uniqueId, 'not found.');
    }
  } catch (error) {
    console.error('Error deleting subscription:', error);
    throw error;
  }
}

export async function checkIfEmailExistsInFirestore(email) {
  const db = getFirestore();
  const subscriptionsCollection = collection(db, 'subscriptions');

  const q = query(subscriptionsCollection, where('subscription.email', '==', email));

  try {
    const querySnapshot = await getDocs(q);
    return !querySnapshot.empty;
  } catch (error) {
    console.error('Error checking email existence in Firestore:', error);
    throw error;
  }
}

export async function checkIfSubscriptionWithUniqueIdExistsInFirestore(uniqueId) {
  const db = getFirestore();
  const subscriptionsCollection = collection(db, 'subscriptions');

  const q = query(subscriptionsCollection, where('subscription.uniqueId', '==', uniqueId));

  try {
    const querySnapshot = await getDocs(q);
    return !querySnapshot.empty;
  } catch (error) {
    console.error('Error checking email existence in Firestore:', error);
    throw error;
  }
}

export async function getSubscribersEmails() {
  const db = getFirestore();
  const subscriptionsCollection = collection(db, 'subscriptions');

  try {
    const querySnapshot = await getDocs(subscriptionsCollection);
    const subscriptions = querySnapshot.docs.map(doc => doc.data().subscription);
    return subscriptions;
  } catch (error) {
    console.error('Error fetching subscribers from Firestore', error);
    throw error;
  }
}