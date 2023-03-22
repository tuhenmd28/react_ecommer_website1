import React from 'react'
import {Helmet} from "react-helmet";

import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { delCart } from '../component/redux/action';
import { addCart } from '../component/redux/action';
const Cart = () => {
    const state = useSelector(state=>state.handleCart);
    const dispatch = useDispatch();
    const handleButton = (product)=>{
        dispatch(delCart(product))
    }
    const add = (product)=>{
        dispatch(addCart(product))
    }
  return (
    <>
    <Helmet>
          <title>Cart page</title>
    </Helmet>
      <div className="container my-5 py-5">
        {state.length ? (
            state.map(p=>(
                <div className="row py-5 shadow mb-5" key={p.id}>
                    <div className="col-md-6 text-center">
                        <img src={p.image} alt={p.title} width='200' height='200' />
                    </div>
                    <div className="col-md-6 row">
                        <div className="col-md-8">
                            <h3>{p.title}</h3>
                            <p className="lead fw-bold">
                                {p.qty} X ${p.price} = ${(p.qty*p.price).toFixed(2)}
                            </p>
                            <button className="btn btn-outline-dark me-4" onClick={()=>handleButton(p)}> <i className="fa fa-minus"></i> </button>
                            <button className="btn btn-outline-dark " onClick={()=>add(p)}> <i className="fa fa-plus"></i> </button>
                        </div>
                    </div>
                </div>
            ))
        ):(<h1>No Product</h1>) }
      </div>
    </>
  )
}

export default Cart
