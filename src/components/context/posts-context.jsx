import { createContext } from "react";
import { usePosts } from "../hooks/usePosts";

export const postsContext = createContext({
  posts: [],
  onsubmitHandler: () => {},
  formDisplayedHandler: () => {},
  formIsDisplayed: {},
  addPostHandler: () => {},
});

export const PostsContextProvider = ({ children }) => {
  const postsHook = usePosts();

  return (
    <postsContext.Provider value={postsHook}>{children}</postsContext.Provider>
  );
};