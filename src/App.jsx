import { useState } from 'react'
import './App.css'
import Blogs from './components/blogs/Blogs'
import Bookmark from './components/bookmark/Bookmark'
import Header from './components/Header/Header'
import SpentTime from './components/spendTime/SpentTime'

function App() {
  const [bookmarks, setBookmark] = useState([])
  const handleBookmark = blog => {
    const newBookmark = [...bookmarks, blog]
    setBookmark(newBookmark)
  }


  const [time, setTime] = useState(0)

  const handleMarkAsRead = (times, id) => {
    const newTime = time + times;
    setTime(newTime)
    const reaminingBookMark = bookmarks.filter(bookmark => bookmark.id !== id)
    setBookmark(reaminingBookMark)
  }

  return (
    <>
      <Header></Header>
      <div className=' lg:flex justify-between gap-5 mx-4 lg:mx-0'>
        <div className=' w-full lg:w-2/3 lg:ml-80'>
          <Blogs handleBookmark={handleBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
        </div>
        <div className=' w-full lg:w-1/3 lg:mr-80'>
          <SpentTime time={time}></SpentTime>
          <Bookmark bookmarks={bookmarks}></Bookmark>
        </div>
      </div>
    </>
  )
}

export default App
