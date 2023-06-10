/*jshint esversion: 6 */
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import {filterData,apiUrl} from "./data";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from "./components/Spinner";


const App = () => {
  
  const [courses,setCourses]=useState([]);
  const [loading,setLoading]=useState(true);
  const [category,setCategory]=useState(filterData[0].title);
  const [likedCourse,setLikedCourse]=useState([]);
  useEffect(()=>{
    setLoading(true);
    const fetchData=async() => {
      try{
        const res=await fetch(apiUrl);
        const data=await res.json();
        setCourses(data.data);
        console.log(data.data);
        toast.success("Wow so easy!");
      }catch(error){
        console.log(error);
        toast.error("Something went wrong!");
      }
      setLoading(false);
    };
    return () => {
      fetchData();
    }
  },[]);
 


  return (
    <div className="min-h-screen flex flex-col bg-bgDark2">
      <div>
        <Navbar />
      </div>
      <div className="bg-bgDark2">
        <div>
          <Filter filterData={filterData} category={category} setCategory={setCategory} />
        </div>
        <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
          {loading ? (<Spinner />) : (<Cards likedCourse={likedCourse} setLikedCourse={setLikedCourse} category={category} courses={courses}/>)}
        </div>  
      </div>
      <ToastContainer />

    </div>);
};

export default App;
