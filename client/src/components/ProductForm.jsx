import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'







const ProductForm = (props) => {


  let [title, setTitle] =useState("");
  let [price, setPrice] =useState("");
  let [description, setDescription] =useState("");
  let [allProducts, setAllProducts] =useState([]);
  




  const submitProduct=(e)=>{
    e.preventDefault();
    let formInfo ={title, price, description}

    axios.post("http://localhost:8000/api/Products", formInfo)
          .then(res=>{
            console.log(res)


            setTitle("");
            setPrice("");
            setDescription("");
            props.setNewProductToggle(!props.newProductToggle)
          })


          .catch(err=>{
            console.log(err)
          })


  };


  useEffect(()=>{

    axios.get("http://localhost:8000/api/Products")
      .then(res=>{
        console.log(res)
        setAllProducts(res.data.Products)
      })
      .catch(err=>
        console.log(err))

  },[props.newProductToggle]);

  return (
    <div>
      <div className='row justify-content-center'>
        <div className='col-4 mx-3' >
          <form onSubmit={submitProduct}>
            <div className='form-group'>
              <label htmlFor=''>Title</label>
              <input className= 'form-control' value={title} onChange={(e)=>setTitle(e.target.value)}type="text"></input>
            </div>
            <div className='form-group'>
              <label htmlFor=''>Price</label>
              <input className= 'form-control' value={price}  onChange={(e)=>setPrice(e.target.value)} type="text"></input>
            </div>
            <div className='form-group'>
              <label htmlFor=''>Description</label>
              <input className= 'form-control'  value={description} onChange={(e)=>setDescription(e.target.value)} type="text"></input>
            </div>
            <input type="submit" className='btn btn-primary mt-3' value="Create"></input>
          </form>
        </div>
      </div>
      <hr/>
      <div>
        <div>
          <div>
            <h2>All Products</h2>
                {

                  allProducts.map((oneProduct, index)=>{

                    return(
                      <div key={oneProduct.id}>
                        <h3>Product: <Link to={`/Products/${oneProduct._id}`}>{oneProduct.title}</Link>
                        , Price: ${oneProduct.price}
                        </h3>
                       
                        
                        
                
                  
                      </div>
                    )
                  })
                }  
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductForm