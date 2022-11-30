import React from "react";

function Cart({ cartItems, removeFromCart }) {
  return (
    <>
      {cartItems.length === 0 ? (
        <>No items Added</>
      ) : (
        <>
          <ol class="list-group list-group-numbered">
            {cartItems.map((items) => {
              return (
                <li className="list-group-item d-flex justify-content-between align-items-start">
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">{items.name}</div>₹{items.price}
                  </div>
                  <button
                    onClick={() => {
                      removeFromCart(items);
                    }}
                    className="badge bg-primary rounded-pill"
                  >
                    X
                  </button>
                </li>
              );
            })}
          </ol>
          <h4>
            Total : ₹
            {cartItems.reduce((prev, curr) => {
              console.log(prev, curr.price);
              return (prev = prev + curr.price);
            }, 0)}
          </h4>
        </>
      )}
    </>
  );
}

export default Cart;