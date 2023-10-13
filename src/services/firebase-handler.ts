import auth from '@react-native-firebase/auth'
import firestore, { FirebaseFirestoreTypes } from '@react-native-firebase/firestore'

// { FirebaseFirestore }

import COLLECTIONS from '../constants/collection-names'

const UsersRef = firestore().collection(COLLECTIONS.USERS)

export async function registerUser(email: string, password: string) {
  // console.log('resisterin ' + email + ' ' + password)
  try {
    // console.log('in')
    return await auth().createUserWithEmailAndPassword(email, password)
  } catch (error) {
    // console.log('error =', error)
    return false
  }
}

export async function createUser(email: string) {
  try {
    return await UsersRef.add({
      email,
    })
  } catch (error) {
    console.log('error =', error)
    console.log('test')
    return false
  }
}

export async function checkIfUser(email: string) {
  try {
    const check = await UsersRef.where('email', '==', email).get()
    console.log('check =', check)
    return check.docs.map((doc) => {
      return doc.data()
    })
  } catch (error) {
    console.error('error =', error)
    return []
  }
}

export async function logout() {
  return await auth().signOut()
}

export async function loginWithEmailAndPassword(email: string, password: string) {
  try {
    return await auth().signInWithEmailAndPassword(email, password)
  } catch (error) {
    console.log('error =', error)
    return false
  }
}

export async function onSnapshot(
  collectionName: COLLECTIONS[number],
  callback: (doc: FirebaseFirestoreTypes.DocumentSnapshot) => void,
) {
  try {
    return firestore().collection(collectionName).onSnapshot(callback)
  } catch (error) {
    console.log('error =', error)
  }
}
