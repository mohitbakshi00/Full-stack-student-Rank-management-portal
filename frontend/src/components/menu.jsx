import React from 'react'

function Menu(){
    return (
      <div className="">
       <div className="flex flex-col  py-2 mx-auto md:flex-row items-center text-white  bg-gray-700">
          <ul className="flex flex-col justify-center py-2 mx-auto text-white md:flex-row items-center bg-gray-700">
            <li className='text-xl py-2 mx-4 hover:scale-105'><a className='no-underline text-white' href="/" >Home</a></li>
            <li className='text-xl py-2 mx-4 hover:scale-105'><a className='no-underline text-white' href="/add-course">Insert</a></li>
            <li className='text-xl py-2 mx-4 hover:scale-105'><a className='no-underline text-white' href="/view-courses">All Students</a></li>
            <li className='text-xl py-2 mx-4 hover:scale-105'><a className='no-underline text-white' href="/rank-list" >Rank List</a></li>
            <li className='text-xl py-2 mx-4 hover:scale-105'><a className='no-underline text-white' href="/delete-course" >Delete</a></li>
          </ul>
        </div>
      </div>
    ); 
}

export default Menu;