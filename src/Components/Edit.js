import React from 'react';
import { useEffect ,useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../context/Url';





function Edit() {
const [id,setId]=useState("");
  const [productName,setProductName]=useState("");
  const [priceName,setPriceName]=useState("");
  const [oldPrice,setOldPrice]=useState("");
  const [catagoryType,setCatagoryType]=useState("");
  const [active,setActive]=useState("");
  const [description,setDescription]=useState("");
const navigate=useNavigate()

const updateUser= async ()=>{
  await axios.put(API_URL+id,{
    productName,
  priceName,
  oldPrice,
  catagoryType,
  active,
  description
  })
  navigate("/list")
}


  
useEffect(() => {
  setId(localStorage.getItem('id'))
  setProductName(localStorage.getItem('productName'))
  setPriceName(localStorage.getItem('priceName'))
  setOldPrice(localStorage.getItem('oldPrice'))
  setCatagoryType(localStorage.getItem('catagoryType'))
  setActive(localStorage.getItem('active'))
  setDescription(localStorage.getItem('description'))





},[])

  return <>
  <h2>Update the edits </h2>
  <div className='for-form'>

  <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>productName</Form.Label>
        <Form.Control value={productName} onChange={event=>setProductName(event.target.value)} type="Firstname" placeholder="Productname" /><br/>
        <Form.Label>priceName</Form.Label>
        <Form.Control value={priceName} onChange={event=>setPriceName(event.target.value)} type="LastName" placeholder="Price" /><br/>
        <Form.Label>oldPrice</Form.Label>
        <Form.Control value={oldPrice} onChange={event=>setOldPrice(event.target.value)} type="LastName" placeholder="oldPrice" /><br/>
        <Form.Label>catagoryType</Form.Label>
        <Form.Control value={catagoryType} onChange={event=>setCatagoryType(event.target.value)} type="LastName" placeholder="Category" /><br/>
        <Form.Check 
        type="switch"
        id="custom-switch"
        label="active" onChange={event=>setActive()}></Form.Check>
        <Form.Label>description</Form.Label>
        <Form.Control value={description} onChange={event=>setDescription(event.target.value)} type="LastName" placeholder="Description" /><br/>
        
        <Button variant="primary" onClick={updateUser}>Submit</Button>
      </Form.Group>
      </Form>

  </div>

  </>
}

export default Edit