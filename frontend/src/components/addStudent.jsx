import React, { Fragment, useEffect, useState } from 'react'
import { Form, FormGroup,Input, Button, Container } from 'reactstrap';
import axios from 'axios';
import base_path from '../api/bootapi';

const AddCourse=()=>{

  useEffect(()=>{
    document.title="Add Course || Code Master";
  },[]);

  const [course, setCourse]=useState({});

  //form handler
  const handleForm=(e)=>{
    console.log(course);
    postData(course);
    e.preventDefault();
  }

  // function to post data on server
  const postData=(data)=>{
          axios.post(`${base_path}/courses`,data).then(
            (response)=>{
               console.log(response);
               return alert("Student added!");
            },
            (error)=>{
                 console.log(error);
                 return alert("Student added!");
            }
          )
  }

    return (
      <Fragment >
        <h1 className="text-center my-3" >
          Fill Student Details
        </h1>
        <Form onSubmit={handleForm} className='w-[400px] flex flex-col mx-auto border-1 border-black p-3 bg-gray-100 my-4'>
          <FormGroup >
            <label for="name">
              Name
            </label>
            <Input
              type="text"
              placeholder="Enter Name"
              name="name"
              id="name"
              onChange={(e)=>{setCourse({...course,name: e.target.value});}}
            ></Input>
          </FormGroup>
          <FormGroup>
            <label for="score">Score</label>
            <Input
              type="text"
              placeholder="Enter Score"
              name="score"
              id="score"
              onChange={(e)=>{setCourse({...course,score: e.target.value})}}
            ></Input>
          </FormGroup>
          <FormGroup>
            <label for="address" >Address</label>
            <Input
              type="text"
              placeholder="Enter address"
              name="address"
              id="address"
              onChange={(e)=>{setCourse({...course, address: e.target.value})}}
            ></Input>
          </FormGroup>
          <FormGroup>
            <label for="city" >City</label>
            <Input
              type="text"
              placeholder="Enter city"
              name="city"
              id="city"
              onChange={(e)=>{setCourse({...course, city: e.target.value})}}
            ></Input>
          </FormGroup>
          <FormGroup>
            <label for="country" >Country</label>
            <Input
              type="text"
              placeholder="Enter Country"
              name="country"
              id="country"
              onChange={(e)=>{setCourse({...course, country: e.target.value})}}
            ></Input>
          </FormGroup>
          <FormGroup>
            <label for="pincode" >Pincode</label>
            <Input
              type="text"
              placeholder="Enter pincode"
              name="pincode"
              id="pincode"
              onChange={(e)=>{setCourse({...course, pincode: e.target.value})}}
            ></Input>
          </FormGroup>
          <Container className="text-center">
            <Button type ="submit"  color="success" style={{ width: 120 }} className="me-3">
              Add Student
            </Button>
          </Container>
        </Form>
      </Fragment>
    );
}

export default AddCourse;