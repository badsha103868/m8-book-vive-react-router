import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoreDB } from '../../Utilities/addToDB';
 import Swal from 'sweetalert2'
 import withReactContent from 'sweetalert2-react-content'
  import { ToastContainer, toast } from 'react-toastify';

 const MySwal = withReactContent(Swal)


const BookDetails = () => {
  const {id} = useParams();
  const singleBookId = parseInt(id);
  // console.log(id)

  const data = useLoaderData();
  const singleBook = data.find(book=> book.bookId === singleBookId)
  // console.log(singleBook)

     const {bookName,image, category,publisher,rating,yearOfPublishing, tags,totalPages,  review} = singleBook
        
  
    
    //  handleMark as Read
    const handleMarkAsRead = id =>{

    //   MySwal.fire({
    // title: "Good job!",
    // text: "You clicked the button!",
    // icon: "success"
    //  });

      
         toast("Wow so easy!");
      addToStoreDB(id)
    }


  return (
    <div className='mx-auto flex flex-col md:flex-row justify-between items-center   gap-5 mt-5 mb-20 p-2'>
     <div className='px-10 py-24 bg-[#5e14140d] rounded-2xl md:w-1/2 w-full h-full'>
      <img className='w-[300px] h-[400px] rounded-2xl mx-auto' src={image} alt="" />
     </div>


     <div className='md:w-1/2 w-full'>
      <h1 className='font-bold text-4xl mb-2'>{bookName}</h1>

         <ToastContainer />

      <p>Book By: {publisher}</p>

      <div className='mt-2 border-t-1 border-gray-300'></div>

      <p className='font-medium my-2'>{category}</p>

      <div className='mt-2 border-t-1 border-gray-300'></div>

      <p className='font-semibold text-xl mt-2'>Review: <span className='text-base text-gray-600'>{review}</span></p>

        <div className='flex mt-2'>
          <h3 className='font-bold'>Tags:</h3>
     {
      tags.map(tag=><button className='ml-5 text-green-500 '>{tag}</button>)
    }
     </div>
       
      <div className='mt-2 border-t-1 border-gray-300'></div>
      
        <table className="w-full border-collapse mt-2">
         <tbody>
           <tr>
            <td className="text-gray-600">Number of Pages:</td>
            <td className="font-semibold">{totalPages}</td>
           </tr>
          <tr>
            <td className="text-gray-600">Publisher:</td>
            <td className="font-semibold">{publisher}</td>
          </tr>
          <tr>
            <td className="text-gray-600">Year of Publishing:</td>
            <td className="font-semibold">{yearOfPublishing}</td>
          </tr>
          <tr>
            <td className="text-gray-600">Rating:</td>
            <td className="font-semibold">{rating}</td>
          </tr>
        </tbody>
      </table>

      
     <button onClick={()=>handleMarkAsRead(id)} className="btn btn-accent m-2">Mark as Read</button>
    <button className="btn btn-info m-2">Add to  Wish List</button>
     </div>
    </div>
  );
};

export default BookDetails;