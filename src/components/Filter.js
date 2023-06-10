/*jshint esversion: 6 */
import React from 'react';
import "./Filter.css";
function Filter({filterData,category,setCategory}) {
  function filterHandler(title){
    setCategory(title)
  }
  return (
    <div className='w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center'>
      {filterData.map((data) => <button onClick={() => filterHandler(data.title)} onMouseOver={() => filterHandler(data.title)}
        className={`text-lg px-2 py-1 rounded-md border-black font-medium text-white bg-black hover:bg-opacity-10 border-2 trasition-all duration-300 ${category===data.title ?  "border-white":null}`}
      >{data.title}
      </button>)}
    </div>
  )
}

export default Filter