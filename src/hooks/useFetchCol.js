import { collection, getDocs, query } from "firebase/firestore"
import React, { useCallback, useContext, useState } from 'react'
import { FirebaseContext } from "../context/FirebaseContext"

const useFetchCol = (colName) => {

  const { db } = useContext(FirebaseContext)

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [data, setData] = useState(null)

  const getData = useCallback(async () => {
    setLoading(true)
    try {
      const colRef = collection(db, colName)
      const q = query(colRef)
      const res = await getDocs(q)

      const resData = res.docs.map(doc => {
        const docData = doc.data()
        return {
          id: doc.id,
          ...docData,
          createdAt: docData.createdAt.toDate()
        }
      })

      setData(resData)


      console.log(resData)
    } catch (error) {
      setError(error.message)
    }
    setLoading(false)


  }, [])



  return { loading, error, data, getData }
}

export default useFetchCol