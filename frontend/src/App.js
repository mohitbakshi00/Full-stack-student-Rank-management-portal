import React from "react";
import Home from "./components/home";
import DeleteCourse from "./components/deleteStudent";
import AllStudents from "./components/allStudents";
import AddCourse from "./components/addStudent";
import Header from "./components/header";
import Menu from "./components/menu";
import Ranklist from "./components/ranklist";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom"

function App() {
  return (
    <div>
        <Header />
        <Menu/>
       
        <Router>
        <Routes>
          <Route path='/' element ={<Home/>} exact/>
          <Route path='/add-course' element={<AddCourse/>}/>
          <Route path='/view-courses' element={<AllStudents/>} exact/>
          <Route path='/rank-list' element={<Ranklist/>} exact/>
          <Route path='/delete-course' element={<DeleteCourse/>} exact/>
          </Routes>
          </Router>
    </div>
  );
}

export default App