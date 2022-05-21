import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useHistory, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'


const EditProudct = () => {

    const {id} = useParams();
    const history = useHistory();

    let [thisProduct, setThisProduct] = useState({});


    useEffect(()=>{
        axios.get(`http://localhost:8000/api/Products/${id}`)
        .then (res=>{
            console.log(res)
            console.log(res.data.Product)
            setThisProduct(res.data.Product)
            
        })
    }, [])


    const submitHandler = (e) =>{

        e.preventDefault();
        axios.put(`http://localhost:8000/api/Products/${id}`, thisProduct)
            .then(res=>{
                console.log(res)
                history.push('/')
            })
            
            .catch(err=>console.log(err))
    }
    const deleteHandler = (e) =>{

        e.preventDefault();
        axios.delete(`http://localhost:8000/api/Products/${id}`, thisProduct)
            .then(res=>{
                console.log(res)
                history.push("/");
                
            })
            
            .catch(err=>console.log(err))
    }
    const changeHandler = (e) =>{
        setThisProduct({
            ...thisProduct,
            [e.target.name]: e.target.value
        })
    }
  return (
    <div className='row justify-content-center'>
        <div className='col-4 mx-3' >
        <h2>Edit Product</h2>
            <form onSubmit={submitHandler}>
                <div className='form-group'>
                <label htmlFor=''>Title</label>
                <input className= 'form-control' name="title" onChange={changeHandler} value={thisProduct.title} type="text"></input>
                </div>
                <div className='form-group'>
                <label htmlFor=''>Price</label>
                <input className= 'form-control' name="price" onChange={changeHandler} value={thisProduct.price} type="text"></input>
                </div>
                <div className='form-group'>
                <label htmlFor=''>Description</label>
                <input className= 'form-control'  name="description" onChange={changeHandler} value={thisProduct.description} type="text"></input>
                </div>
                <input type="submit" className='btn btn-primary mt-3' value="Update"></input>
            </form>
            <button className="btn btn-danger" onClick={deleteHandler}>Delete</button>
            </div>
    </div>
  )
}

export default EditProudct;