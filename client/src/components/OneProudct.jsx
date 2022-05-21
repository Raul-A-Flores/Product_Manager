import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const OneProudct = () => {

    const {id} = useParams();

    let [thisProduct, setThisProduct] = useState({});


    useEffect(()=>{
        axios.get(`http://localhost:8000/api/Products/${id}`)
        .then (res=>{
            console.log(res)
            console.log(res.data.Product)
            setThisProduct(res.data.Product)
        })
    }, [])
  return (
    <div>
        <h2>Product: {thisProduct.title}</h2>
        <h2>Price: ${thisProduct.price}</h2>
        <h2>Description: {thisProduct.description}</h2>
        <p><Link to={`/${thisProduct._id}/edit`} className="btn btn-warning">Edit</Link></p>
    
    
    
    </div>
  )
}

export default OneProudct;