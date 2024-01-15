import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {setSelectionRange} from "@testing-library/user-event/dist/utils";

const post = {
  title: '',
  body: '',
  likes: 1,
  comments: [],
  createdAt: Date
}

export function PostPage() {
  const { id } = useParams();
  const [post, setPost] = useState();

  useEffect(() => {
    fetch(`/posts/${id}`)
        .then(response => response.json())
        .then(json => setPost(json))
  }, []);

  return (
      <div className='container'>
        {post ? (
            <div>
              <h1>{post.title}</h1>
              <p>
                {post.content}
              </p>
            </div>
          ) : (
            <div className="spinner-border"
                 style={{width: '3rem', height: '3rem',}}
                 role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
        )}
      </div>
  )
}
