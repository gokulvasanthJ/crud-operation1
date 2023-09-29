import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { API_URL } from '../context/Url';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate} from 'react-router-dom';


function Add() {
const [productName,setProductName]=useState("");
const [priceName,setPriceName]=useState("");
const [oldPrice,setOldPrice]=useState("");
const [catagoryType,setCatagoryType]=useState("");
const [active,setActive]=useState("");
const [description,setDescription]=useState("");



  const navigate=useNavigate();

const handleSubmit=async()=>{
await axios.post(API_URL,{
  productName,
  priceName,
  oldPrice,
  catagoryType,
  active,
  description
});
navigate("/list");
}

  return<>
  <h2>Add The Items</h2>
  <div className='for-form'>

  <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>productName</Form.Label><br/>
        <Form.Control value={productName} onChange={event=>setProductName(event.target.value)} type="Firstname" placeholder="ProductName" /><br/>
        <Form.Label>priceName</Form.Label><br/>
        <Form.Control value={priceName} onChange={event=>setPriceName(event.target.value)} type="LastName" placeholder="Price" /><br/>
        <Form.Label>oldPrice</Form.Label><br/>
        <Form.Control value={oldPrice} onChange={event=>setOldPrice(event.target.value)} type="LastName" placeholder="oldprice" /><br/>
        <Form.Label>catagoryType</Form.Label><br/>
        <Form.Control value={catagoryType} onChange={event=>setCatagoryType(event.target.value)} type="LastName" placeholder="catagory" /><br/>
        <Form.Check 
        type="switch"
        id="custom-switch"
        label="active" onChange={event=>setActive()}></Form.Check><br/><br/>
      
        <Form.Label>description</Form.Label>
        <Form.Control value={description} onChange={event=>setDescription(event.target.value)} type="LastName" placeholder="Description" /><br/>
        
        <Button variant="primary" onClick={handleSubmit}>Submit</Button>
      </Form.Group>
      </Form>

  </div>
  
  </>
}

export default Add