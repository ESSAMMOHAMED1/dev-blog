import { createContext, useCallback } from "react";

export const PostsContext = createContext();

export const PostsProvider = ({ children }) => {
  const fetch = useCallback(() => {
    return (
      <PostsContext.Provider value={{}}>
        {children}
      </PostsContext.Provider>
    );
  });
};
