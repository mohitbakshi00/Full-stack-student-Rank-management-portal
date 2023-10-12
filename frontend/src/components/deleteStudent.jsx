import { React,useState,useEffect } from 'react'
import axios from 'axios'
import { Button } from "reactstrap";
import { toast } from 'react-toastify'
import base_path from '../api/bootapi';

function DeleteCourse() {

    const [name, setName] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const deleteCourse =(name)=>{
        axios.delete(`${base_path}/courses/${name}`).then(
          (response) => {
            console.log("Success");
            toast.success("Course deleted successfully");
            setIsLoading(false);
          
          },
          (error) => {
            console.log(error);
            toast.error("Error deleting course");
          }
          
        );
      }

    const [course, setCourse] = useState([]);

    const handleInputChange = (event) => {
        setCourse(event.target.value);
      };
    
    const updateCourses = (name)=>{
    setCourse(course.filter((c) => c.name != name));
  }
    return (
        <div className="flex flex-col mx-auto">
        <h2 className="mx-auto p-3">Delete the record</h2>
        <div className='flex flex-col bg-gray-100 border-1 p-3 border-black w-[300px] mx-auto '>
        <label className="mx-auto p-1 font-bold">Name: </label>
        <input type="text" value={name} className="mx-auto border-1 p-1 border-black w-[210px]" placeholder="Enter name (Case Sensitive)" onChange={(e) => setName(e.target.value)} />       
         <Button type ="submit" onClick={deleteCourse(name)}  color="success"  className="mx-auto mt-2">
           Delete
        </Button>
        {isLoading && <p>Deleting...</p>}
      {error && <p>Error: {error}</p>}
        </div>
    </div>
    )
}

export default DeleteCourse