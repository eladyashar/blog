import {createContext, useEffect, useState, useContext} from "react";
import {AuthContext} from "./auth-provider";

// Create special context Object
export const BlogContext = createContext(null);

export function BlogProvider({children}) {
  const [posts, setPosts] = useState([]);
  const {user} = useContext(AuthContext);
 
  const fetchPosts = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_SERVER_URL}/posts`);
      setPosts(await response.json());
    } catch {
      alert("there was an error while fetching posts from the server");
    }
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  const addPost = (post) => {
    const newPost = {
      "title" : post.title,
      "content": post.content,
      "postedBy": user.id
    };

    fetch(`${process.env.REACT_APP_API_SERVER_URL}/posts`, {
      method: "POST",
      body : JSON.stringify(newPost),
      headers: {
        'Content-Type': 'application/json'
      },
    }).then(() => {
      alert("post created");
      fetchPosts();
    })
  }

  const value = { posts, addPost, setPosts };

  return (
      <BlogContext.Provider value={value}>
        {children}
      </BlogContext.Provider>
  )
}
