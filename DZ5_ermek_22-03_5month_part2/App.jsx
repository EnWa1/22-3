import { useState } from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchPosts } from './components/postsReducer'
import { CommentsDispatch, fetchComments } from './components/commentsReducer'

function App() {
  const posts = useSelector(state => state.posts.posts)
  const comments = useSelector(state => state.comments.currentComments)
  const dispatch = useDispatch()

  const [openedPost, setOpenedPost] = useState(null)

  const getComment = (clickedPost) => {
    console.log(clickedPost, "clicked");
    console.log(openedPost);
    if(clickedPost === openedPost) {
      setOpenedPost(null)
      dispatch(CommentsDispatch(null))
    } else {
      setOpenedPost(clickedPost)
      dispatch(fetchComments(`https://jsonplaceholder.typicode.com/posts/${clickedPost}/comments`))
    }
  }

  useEffect(() => {
    dispatch(fetchPosts("https://jsonplaceholder.typicode.com/posts/"))
  }, [  ])

  return (
      <div className='wrapper'>
        <div className='postsBlock'>
          <ul>
            {posts != null ?
                posts.map(post =>
                    <div key={post.id} onClick={() => getComment(post.id)} className="post">
                      <div className="postWrapper">
                        <div className="postTitle">{post.title}</div>
                        <div className="postBody">{post.body}</div>
                      </div>
                    </div>
                )
                :
                <li>Loading...</li>
            }
          </ul>
        </div>

        <div>
          <div className='commentsBlock'>
            <ul>
              {comments != null ?
                  comments.map(comment => <li key={comment.id} className="commentsLi">
                    <span className='email'>{comment.email}</span>
                    <span className='commentBody'>{comment.body}</span>
                  </li>)
                  :
                  <span className="choosepost">choose post and click</span>
              }
            </ul>
          </div>
        </div>
      </div>
  )
}

export default App
