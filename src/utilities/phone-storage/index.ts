import AsyncStorage from '@react-native-async-storage/async-storage'

import STORAGE_ITEMS from './names'

export { STORAGE_ITEMS }

/**
 *
 * @param name - name of data to be stored in async storage
 * @param item - data to be stored in async storage
 * @returns
 */
export async function setItem(
  name: STORAGE_ITEMS[number],
  item: object | string | number | boolean | null,
) {
  try {
    return await AsyncStorage.setItem(name, JSON.stringify(item))
  } catch (error) {
    console.warn('setItem: error =', error)
    return false
  }
}

/**
 *
 * @param name - name of data to be retrieved from async storage
 * @returns data from async storage
 */
export async function getItem(name: STORAGE_ITEMS[number]) {
  try {
    return await AsyncStorage.getItem(name)
  } catch (error) {
    console.warn('getItem: error =', error)
    return false
  }
}

/**
 *
 * @param name - name of data to be removed from async storage
 * @returns
 */
export async function removeItem(name: string) {
  try {
    return await AsyncStorage.removeItem(name)
  } catch (error) {
    console.warn('removeItem: error =', error)
    return false
  }
}

// /**
//  *
//  * @returns all data from async storage
//  */
// export async function getAll() {
//   try {
//     const getAllKeys = await AsyncStorage.getAllKeys(),
//       allKeys = [...getAllKeys],
//       multiGet = await AsyncStorage.multiGet(allKeys),
//       newObj: {
//         [key: string]:
//       } = new Object()

//     multiGet?.forEach(([key, val] : {

//     }) => {
//       const value = JSON.parse(val)
//       newObj[key] = value
//     })
//     return newObj
//   } catch (error) {
//     console.warn('getAll: error =', error)
//     return false
//   }
// }

/**
 *
 * @returns removes all data from async storage
 */
export async function removeAll() {
  try {
    const getAllKeys = await AsyncStorage.getAllKeys(),
      allKeys = [...getAllKeys]
    await AsyncStorage.multiRemove(allKeys)
    await AsyncStorage.clear()
    return true
  } catch (error) {
    console.warn('removeAll: error =', error)
    return false
  }
}
