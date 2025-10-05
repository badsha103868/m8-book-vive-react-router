import React from 'react';
import bookImg from '../../assets/books.jpg'

const Banner = () => {
  return (
    <div className='flex flex-col md:flex-row justify-around items-center gap-7 p-16 w-full m-auto bg-[#1313130d] my-20 rounded-2xl'>
      <div >
        <h1 className='font-bold text-5xl text-[#131313] mb-10'>Books to freshen up your bookshelf</h1>
        <button className='btn btn-primary'>View The List</button>
      </div>
      <div>
        <img className='w-full md:p-5' src={bookImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;