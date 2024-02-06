import { createContext, useCallback } from "react";
import useFetchCol from "../hooks/useFetchCol";


export const PostsContext = createContext()

export const PostsProvider = ({ children }) => {

  const { getData, data } = useFetchCol('posts')

  const fetch = useCallback(() => {

    if (!data) {
      getData()
    }
  }, [data, getData])


  return <PostsContext.Provider value={{ fetch }}>
    {children}
  </PostsContext.Provider>
}