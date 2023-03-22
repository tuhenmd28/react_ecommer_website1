import React, { useEffect, useState } from 'react'
import {Helmet} from "react-helmet";

import Skeleton from 'react-loading-skeleton';
import { useParams } from 'react-router-dom';
import {Link} from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addCart } from '../component/redux/action';
const ProductDetails = () => {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false)
    const {id} = useParams();

    const dispatch = useDispatch();
    const addProduct = (product)=>{
        dispatch(addCart(product))
    }


    useEffect(()=>{
        setLoading(true)
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then(response=>{
            if(response.ok){
              return  response.json()
            }
            throw response;
        })
        .then(data=>{
            setProduct(data)
        }).catch(error=>{
            console.log('product details error: ',error);
        }).finally(()=>setLoading(false))
    },[])

    const Loading = ()=>{
        return(
           <>
           <div className="col-md-6">
            <Skeleton  height={400} />
           </div>
           <div className="col-md-6">
            <Skeleton className={`my-2`} height={50} width='100%'  />
            <Skeleton className={`my-2`} height={150} width='100%'  />
            <Skeleton className={`my-2`} height={30} width={50}  />
            <Skeleton className={`my-2`} height={70} width={100}  />
            <Skeleton className={`my-2`} height={100} width='100%'  />
           </div>
           
           </>
        )
    }


  return (
    <>
     <Helmet>
          <title>Product Details page</title>
    </Helmet>
      <div className="container my-5 py-5">
        <div className="row">
            {loading?<Loading/>:(
                <>
                    <div className="col-md-6 text-center">
                        <img src={product.image} alt={product.title} height='400px' width='400px' />
                    </div>
                    <div className="col-md-6">
                        <h4 className='text-uppercase text-black-50'>{product.category}</h4>
                        <h1 className="display-5">{product.title}</h1>
                        <p className="lead">{product.rating && product.rating.rate }  
                         <i className="fa fa-star"></i>
                        </p>
                        <h3 className="display-6 fw-bold my-4">$ {product.price}</h3>
                        <p className="lead">{product.description}</p>
                        <button onClick={()=>addProduct(product)} className="btn btn-outline-dark px-4 py-2">Add to Cart</button>
                        <Link to='/cart' className="btn btn-dark px-3 py-2 ms-2">Go to cart </Link>
                    </div>
                </>
            )}
        </div>
      </div>
    </>
  )
}

export default ProductDetails
