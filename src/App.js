import React from 'react';
import './App.css';
import Post from './components/post.js'
import PostForm from './components/postform.js'
function App() {
  return (
    <div className="App">
      <PostForm />
      <Post />
    </div>
  );
}

export default App;
