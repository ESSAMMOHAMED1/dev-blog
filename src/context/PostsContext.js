import { createContext, useCallback } from "react";
import useFetchCol from "../hooks/useFetchCol";


export const PostsContext = createContext()

export const PostsProvider = ({ children }) => {

  const { getData, data, loading, error } = useFetchCol('posts')

  const fetch = useCallback(() => {

    if (!data) {
      getData()
    }
  }, [data, getData])


  return <PostsContext.Provider value={{ fetch, data, loading, error }}>
    {children}
  </PostsContext.Provider>
}