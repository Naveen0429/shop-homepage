import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Card from "./Card";
import Cart from "./Cart";
import { useState } from "react";

function App() {
  const productDetails = [
    {
      id: 1,
      name: "Samsung Galaxy M13",
      detail:
        "(Aqua Green, 4GB, 64GB Storage) | 6000mAh Battery | Upto 8GB RAM with RAM Plus",
      price: 9499,
      image: "https://m.media-amazon.com/images/I/81AQybT5k6L._SX679_.jpg",
    },
    {
      id: 2,
      name: "Redmi 9 Activ",
      detail:
        "(Coral Green, 4GB RAM, 64GB Storage)| Octa-core Helio G35 | 5000 mAh Battery",
      price: 8099,
      image: "https://m.media-amazon.com/images/I/91kAtEXPIeL._AC_SS450_.jpg",
    },
    {
      id: 3,
      name: "boAt Smart Watch",
      detail:
        "Smart Talk with Advanced Dedicated Bluetooth Calling Chip, 1.69” HD Display with 550",
      price: 1799,
      image:
        "http://cdn.shopify.com/s/files/1/0057/8938/4802/products/black2.png?v=1654312291",
    },
    {
      id: 4,
      name: "Mivi Play Speaker ",
      detail:
        "Wireless Speaker Made in India with Exceptional Sound Quality, Portable and Built in Mic-Black",
      price: 699,
      image: "https://m.media-amazon.com/images/I/61UJnlIHF9S._SL1500_.jpg",
    },
    {
      id: 5,
      name: "OnePlus Nord",
      detail:
        "OnePlus Nord CE 2 Lite 5G (Black Dusk, 6GB RAM, 128GB Storage),1.69” HD Display",
      price: 18999,
      image: "https://m.media-amazon.com/images/I/71V--WZVUIL._SL1500_.jpg",
    },
    {
      id: 6,
      name: "Apple iPhone 12",
      detail:
        "IPhone 12 128GB Blue|6.1-inch (15.5 cm diagonal) Super Retina XDR display",
      price: 54490,
      image:
        "https://www.apple.com/newsroom/images/product/iphone/geo/apple_iphone-12_2-up_geo_10132020_inline.jpg.large.jpg",
    },
  ];
  const [cartItems, setCartitems] = useState([]);
  let addTocart = (product) => {
    setCartitems([...cartItems, product]);
  };
  let removeFromCart = (product) => {
    let indexValue = cartItems.findIndex((obj) => obj.id === product.id);
    cartItems.splice(indexValue, 1);
    setCartitems([...cartItems]);
  };

  return (
    <div className="container">
      <div className="row mt-1">
        <div className="head">
        <h4>
          <b>Ecom Prime - </b>electronic gadgets
        </h4>
        </div>        
        <div className="col-lg-8 ">
          <div className="row">
            {productDetails.map((product) => {
              return (
                <Card
                  product={product}
                  addTocart={addTocart}
                  cartItems={cartItems}
                />
              );
            })}
          </div>
        </div>
        <div className="col-lg-4 mt-4">
          <h4>Cart</h4>
          <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
        </div>
      </div>
    </div>
  );
}

export default App;