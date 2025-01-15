import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'
import Bockmarks from './Components/Bockmarks/Bockmarks'

function App() {
 const [bookmarks,setBookmarks]=useState([])
const [readingTime,setReadingTime]=useState(0);


const handleAddToBookmark= blog =>{
 const newBookmarks=[...bookmarks,blog];
 setBookmarks(newBookmarks);
}

const handleMarkAsRead=(id,time)=>{
 setReadingTime(readingTime+time);
 const remainingBookmarks=bookmarks.filter(bookmark=> bookmark.id !== id);
 setBookmarks(remainingBookmarks); 
}

  return (
    <>
     <Header></Header>
     <div className='md:flex max-w-5xl mx-auto'>
      <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead} ></Blogs>
      <Bockmarks bookmarks={bookmarks} readingTime={readingTime}></Bockmarks>
     </div>
   
    </>
  )
}

export default App
