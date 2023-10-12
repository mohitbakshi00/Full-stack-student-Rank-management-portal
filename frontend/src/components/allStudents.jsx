import React, { useEffect, useState } from 'react'
import Course from './student'
import axios from 'axios'
import base_path from '../api/bootapi'
import { toast } from 'react-toastify'

function AllStudents() {

  const [course, setCourse] = useState([]);
  useEffect(() => {
    document.title = "All courses || Code Master";
  }, []);

  const getAllCoursesFromServer = () => {
    axios.get(`${base_path}/courses`).then(
      (response) => {
        console.log(response.data);
        toast.success("Success");
        setCourse(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  useEffect(() => {
    getAllCoursesFromServer()
  },[]);

 
  const updateCourses = (name)=>{
    setCourse(course.filter((c) => c.name != name));
  }

  return (
    <div className="" >
      <h1 className='text-center py-auto'>Student list</h1>
      {course.length > 0
        ? course.map((item) => (
            <div key={item.name} className='w-[400px] mx-auto my-3'>
              <Course course={item} update ={updateCourses}/>
            </div>
          ))
        : "No course available"}
    </div>
  );
}

export default AllStudents;