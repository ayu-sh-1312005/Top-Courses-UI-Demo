/*jshint esversion: 6 */
import React, { useEffect } from 'react'
import "./Cards.css"
import Card from './Card';

function Cards({courses,category,likedCourse,setLikedCourse}) {
  var allCourses=[];
  const getCourses= () => {
    if(category==="All"){
      if(courses){
    Object.values(courses).forEach((categories) => {
      Object.values(categories).forEach((course) => {
        allCourses.push(course);
      })
    });
    return allCourses;
  }
  }else{
    return courses[category];
  }
  };
  useEffect(() => {
    console.log("qwerty: ",getCourses());
  });
  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>
      {!courses ? (
        <p>No Courses Available</p>
      ):(
        getCourses()?.map((course) => <Card id={course.id} likedCourse={likedCourse} setLikedCourse={setLikedCourse} course={course} />)
      )}
      
    </div>
  )
}

export default Cards