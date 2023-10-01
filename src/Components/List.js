import React from 'react';
import Table from 'react-bootstrap/Table';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../context/Url';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function List() {

const [apiData,setApiData]=useState([])
const navigate=useNavigate()
const navigation=useNavigate()

const updateUser= ({productName,priceName,oldPrice,catagoryType,active,description,id})=>{
localStorage.setItem("id",id)
localStorage.setItem("productName",productName)
localStorage.setItem("priceName",priceName)
localStorage.setItem("oldPrice",oldPrice)
localStorage.setItem("catagoryType",catagoryType)
localStorage.setItem("active",active)
localStorage.setItem("description",description)
navigate("/edit")

}

const deleteUser = async(id)=>{
  await axios.delete(API_URL+id);
  callApi();
}

// const deleteUser = async (id) => {
//   const confirmed = alert("Are you sure you want to delete this item?");
//   if (confirmed) {
//     await axios.delete(API_URL + id);
//     callApi();
//   }
// }

// for add

const handleAdd=()=>{
  navigation("/add")
}


const callApi=async()=>{
  const res=await axios.get(API_URL)
  setApiData(res.data);
}
useEffect(()=>{
  callApi();
},[]);

  return <>
  <h2>List of Items</h2>
  <div className='for-table'>

  <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>S:No</th>
          <th>productName</th>
          <th>Price</th>
          <th>oldPrice</th>
          <th>categoryType</th>
          <th>Active</th>
          <th>Description</th>
          <th>Actions</th>


          
        </tr>
      </thead>
      <tbody>
        {
        apiData.map((data,i)=>{
          return(
            <tr key={i}>
              <td>{i+1}</td>
             <td>{data.productName}</td>
             <td>{data.priceName}</td>
             <td>{data.oldPrice}</td>
             <td>{data.catagoryType}</td>
             <td>{data.active}</td>
             <td>{data.description}</td>


             <td>
              <Button variant="danger" onClick={()=>deleteUser(data.id)}>Delete</Button>
              &nbsp; &nbsp;
              <Button variant="primary" onClick={()=>updateUser(data)}>Update</Button>
              &nbsp;&nbsp;
              <Button variant="primary" onClick={handleAdd}>add</Button>


             </td>
            </tr>
          )
        })
          
        }
        
        </tbody>
        </Table>

  </div>
  </>
}

export default List