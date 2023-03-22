import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import {Link} from "react-router-dom"
const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState([])
  
  useEffect(() => {
    
    setLoading(true);
    fetch("https://fakestoreapi.com/products").then(response=>{
      if(response.ok){
        return response.json();
      }
      throw response;
    }).then(data =>{
      setData(data);
      setFilter(data);
    }).catch(error=>{
      console.log("Can not fetch products",error);
      setError(error);
    }).finally(()=>{
      setLoading(false)
    })
    
  }, []);
  useEffect(()=>{
    let ca = data.map(d=>d.category);
    let cate =  ['All',...new Set(ca)];
    setCategory(cate)
  },[data])
  const Loading = () => {
    <>
      <div className="col-md-3">
        <Skeleton height={350} />
        <Skeleton height={350} />
        <Skeleton height={350} />
        <Skeleton height={350} />
        <Skeleton height={350} />
      </div>
    </>;
  };
  const filterProduct = (c)=>{
    if(c !== 'All'){
      const updateproduct = data.filter(d=>d.category===c)
      setFilter(updateproduct);
    }else{
      setFilter(data);
    }
  }
  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          {category?.map((ca,index)=>{
            return(
              <button onClick={()=>filterProduct(ca)} key={index} className="btn btn-outline-dark text-capitalize mx-1">{ca}</button>
            )
          })}

        </div>
        {filter.map((product,index) => {
          return (
            
              <div className="col-md-3 mb-4" key={index}>
                <div className="card shadow h-100 text-center " key={index}>
                  <img height='250px' src={product.image} className="card-img-top" alt={product.title} />
                  <div className="card-body">
                    <h5 className="card-title">{product.title.substring(0,15)}...</h5>
                    <p className="card-text">
                      ${product.price}
                    </p>
                    <Link to={`product/${product.id}`} className="btn btn-outline-dark">
                      Buy Now
                    </Link>
                  </div>
                </div>
              </div>
            
          );
        })}
      </>
    );
  };
  return (
    <>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="text-center display-6 fw-bolder">Latest Product</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-contain-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </>
  );
};

export default Products;
