import React from "react";

function Card({ product,addTocart,cartItems }) {
  return (
    <div className="col-lg-4 border border-2 mt-2 mb-2 ">
      <div className="row">
        <div className="col-lg-12 text-center">
          <img
            src={product.image}
            className="img-fluid"
            style={{
              width: "150px",
              height: "100px",
            }}
          />
        </div>
        <div className="col-lg-12">
          <h5>{product.name}</h5>
          <p>{product.detail}</p>

          <h5>₹{product.price}</h5>
          <hr />
          <div className="col-lg-12">
            <div className="d-grid gap-2 col-6 mx-auto">
              <button disabled={cartItems.some(obj=>obj.id === product.id)} onClick={()=>{
                 addTocart(product)
              }}type="button" className="btn btn-warning mb-2" >{
                cartItems.some(obj=>obj.id === product.id) ? "Added":"Add to Cart"
              }
                
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;