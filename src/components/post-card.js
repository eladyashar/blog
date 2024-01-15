import {Link} from "react-router-dom";

export function PostCard({ singlePost }) {
  return (
      <div className='card'>
        <div className='card-header'>
          {singlePost.title}
        </div>
        <div className='card-body'>
          {singlePost.content}
        </div>
        <Link to={ `/posts/${singlePost.id}` }
              className='btn btn-primary'>
          Read more
        </Link>
      </div>
  )
}
