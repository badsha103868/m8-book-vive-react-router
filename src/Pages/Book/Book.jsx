import React, { use } from 'react';

const Book = ({singleBook}) => {
  // const data = use(bookPromise)
  // console.log(data)
  // console.log(singleBook)
 
  const {bookName,image,author,publisher,rating,review,yearOfPublishing} = singleBook

  return (
   <div className="card bg-gray-400  w-96 shadow-sm p-6">
  <figure className='p-5 bg-[#1313130d]'>
    <img className='w-full h-[400px]'
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      Card Title
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div>
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>
  );
};

export default Book;