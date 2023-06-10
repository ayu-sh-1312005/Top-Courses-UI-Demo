/*jshint esversion: 6 */
import React, { useState } from 'react';
import "./Card.css";
import {FcLike,FcLikePlaceholder} from "react-icons/fc";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Card({course,likedCourse,setLikedCourse,id}) {

  function handleToast(){
    if(likedCourse.includes(id)){
      setLikedCourse((prev) => prev.filter((cid) => cid!=id));
      toast.warning("Like removed");
    }else{
      if(likedCourse.length===0){
        setLikedCourse([id])
      }else{
        setLikedCourse((prev) => [...prev,id])
      }
      toast.success("Like added");
    }
  }

  return (
    <div className='w-[300px] bg-bgDark bg-opacity-70 rounded-md overflow-hidden text-white'>
      <div className='relative'>
        <img src={course.image.url} alt={course.image.alt}></img>
        <div className='h-[30px] w-[30px] bg-white rounded-full absolute right-2 bottom-0.5 grid place-items-center bottom-[-12px]' onClick={handleToast}>
          {likedCourse.includes(id) ? (<FcLike fontSize="1.5rem" />) : (<FcLikePlaceholder fontSize="1.5rem" />)}
        </div>
      </div>
      <div className='p-4'>
        <p className='text-white font-semibold text-lg leading-6'>{course.title}</p>
        <p className='text-white mt-2'>
          {
            course.description.length > 100 ? (course.description.substr(0,100)+"...") : (course.description)
          }
        </p>
      </div>
    </div>
  )
}

export default Card