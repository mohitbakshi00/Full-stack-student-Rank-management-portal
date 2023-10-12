import React from 'react'

import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardFooter,
  Button,
  Container,
} from "reactstrap";

function Course ({course}){
   
    return (
      <Card>
        <CardBody className="text-center">
          <CardSubtitle className="fw-bold p-2 text-[20px]">Name: {course.name}</CardSubtitle>
          <CardText>Score: {course.score}</CardText>
          <CardText>Address: {course.address}</CardText>
          <CardText>City: {course.city}</CardText>
          <CardText>Country: {course.country}</CardText>
          <CardText>Pincode: {course.pincode}</CardText>
        </CardBody>
      </Card>
    );
}

export default Course;