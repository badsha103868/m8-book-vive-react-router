import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../Utilities/addToDB';
import Book from '../Book/Book';
  
const ReadList = () => {
  // ata holo worst case

  const [readList , setReadList] = useState([])

  const [sort ,setSort] =useState("")

  const data = useLoaderData();
  console.log(data)
  
  useEffect(()=>{

     const storedBookData = getStoredBook()
     const convertedBookData = storedBookData.map(id => parseInt(id))

    //  console.log(convertedBookData);
    const myReadList = data.filter(book =>convertedBookData.includes(book.bookId))
    // console.log(myReadList)
         setReadList(myReadList)
  }, [])

  // sort by functionility
  const handleSort = (type) =>{

    setSort(type)
    if(type === "pages"){
      const sortedByPage = [...readList].sort((a,b)=> a.totalPages - b.totalPages)
      setReadList(sortedByPage)

      console.log(sortedByPage)
    }

    if(type === "ratings"){
      const sortedByRating = [...readList].sort((a,b)=> a.rating - b.rating)
      setReadList(sortedByRating)

      console.log(sortedByRating)
    }
  }

  return (
    <div>
      {/* dropdown */}
     <div className=' flex justify-center'>
       <details className="dropdown ">
      <summary className="btn m-1 text-green-500">Sort By: {sort?sort:""}</summary>
      <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm text-green-500">
      <li><a onClick={()=>handleSort("pages")}>pages</a></li>
      <li><a onClick={()=>handleSort("ratings")}>ratings</a></li>
     </ul>
     </details>
     </div>
     <Tabs>
    <TabList>
      <Tab>Read Books</Tab>
      <Tab>Wishlist Books</Tab>
    </TabList>

    <TabPanel>
      <h2>Book I read :{readList.length}</h2>
      {
        readList.map(b=><Book key={b.bookId} singleBook={b}></Book>)
      }
    </TabPanel>
    <TabPanel>
      <h2>My Wishlist Books</h2>
    </TabPanel>
  </Tabs>
    </div>
  );
};

export default ReadList;