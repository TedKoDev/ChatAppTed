import { useEffect } from 'react'

import { onSnapshot } from '../services/firebase-handler'
import COLLECTIONS from '../constants/collection-names'

export default function useOnSnapshot(
  collectionName: COLLECTIONS[number],
  callback: (data: object) => void,
) {
  useEffect(() => {
    const unsubscribe = onSnapshot(collectionName, callback)
    return () => unsubscribe()
  }, [])
}
