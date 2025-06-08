import { useState } from "react";
import BookMarkList from "./BookMarkList";

const BookMark = () => {
 const [originalBookmarkData, setOriginalBookMarkList] = useState(bookMarkData);
 const [bookmarkList, setBookmarkList] = useState(bookMarkData)
 const [page, setPage] = useState(1);
 const handleSaveBookMark = (item) => {
    const updatedBookmarkList = bookmarkList.map((bookmark) => {
        if(bookmark.id == item.id) {
            return {
                ...bookmark,
                saved : !bookmark.saved
            }
        }
        return bookmark;
    })

    setBookmarkList(updatedBookmarkList)
 }

 const showonlyBookmarked = (e) => {
    const flag = e.target.checked; // Get the checked state of the checkbox
    setPage(1)
    if (flag) {
      // Filter bookmarks that are saved (saved === true)
      const filterSavedBookmark = bookmarkList.filter(bookmark => bookmark.saved === true);
      console.log({filterSavedBookmark})
      setOriginalBookMarkList(bookmarkList);
      setBookmarkList(filterSavedBookmark); // Update the state to show only bookmarked
    } else {
      // If unchecked, show all bookmarks again
      setBookmarkList(originalBookmarkData); // Reset to original data
    }
  };
 return (
    <div style={{padding: '20px 100px'}}>
        <div>
            <header><h1>Articles</h1></header>
        </div>
        <div>
            <span><input type="checkbox" onChange={showonlyBookmarked} /> Show bookmarked only</span>
            <BookMarkList bookmarkList={bookmarkList} page={page} setPage={setPage} handleSaveBookMark={handleSaveBookMark}/>
        </div>
    </div>
 )
}

export default BookMark;


//list {name:"", desc:"", saved:""}


const bookMarkData = [
  {
    id: 1,
    name: "React TODO",
    desc: "Build a React TODO application with hooks and context.",
    saved: false,
  },
  {
    id: 2,
    name: "JavaScript Mastery",
    desc: "An online YouTube channel to learn JavaScript, covering beginner to advanced topics.",
    saved: false,
  },
  {
    id: 3,

    name: "React Interview Prep",
    desc: "A comprehensive guide to prepare for React-related interview questions and exercises.",
    saved: false,
  },
  {
    id: 4,

    name: "Frontend Mentor",
    desc: "A platform with real-world front-end challenges to help improve your skills.",
    saved: false,
  },
  {
    id: 5,

    name: "FreeCodeCamp",
    desc: "A free online coding platform offering full-stack development tutorials and certifications.",
    saved: false,
  },
  {
    id: 6,

    name: "CSS Tricks",
    desc: "A comprehensive resource for CSS techniques, tips, and tutorials.",
    saved: false,
  },
  {
    id: 7,

    name: "Dev.to",
    desc: "A community of developers sharing articles, tutorials, and advice on various programming topics.",
    saved: false,
  },
  {
    id: 8,

    name: "MDN Web Docs",
    desc: "Mozilla's official documentation for web technologies like HTML, CSS, and JavaScript.",
    saved: false,
  },
  {
    id: 9,

    name: "JavaScript30",
    desc: "A 30-day challenge to build 30 different projects using vanilla JavaScript.",
    saved: false,
  },
];
  