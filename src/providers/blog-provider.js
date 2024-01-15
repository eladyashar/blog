import {createContext, useEffect, useState, useContext} from "react";
import {AuthContext} from "./auth-provider";

// Create special context Object
export const BlogContext = createContext(null);

export function BlogProvider({children}) {
  const [posts, setPosts] = useState([]);
  const {user} = useContext(AuthContext);
 
  const fetchPosts = async () => {
    try {
      const response = await fetch('/posts');
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

    fetch('/posts', {
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



// const fetchPosts = async () => {
//   try {
//       const response = await fetch('http://127.0.0.1:4000/posts');
//       if (!response.ok) {
//           throw new Error('Network response was not ok');
//       }
//       const data = await response.json();
//       setPosts(data); // Update state with fetched posts
//   } catch (error) {
//       console.error('There was a problem with the fetch operation:', error);
//   }
// };
// fetchPosts();