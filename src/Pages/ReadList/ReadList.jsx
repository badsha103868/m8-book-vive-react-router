import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../Utilities/addToDB';
import Book from '../Book/Book';
  
const ReadList = () => {
  // ata holo worst case

  const [readList , setReadList] = useState([])

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

  return (
    <div>
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