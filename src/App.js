import { useState, useEffect } from "react";
import "./App.css";
import ProductList from "./ProductList";
import Cart from "./Cart";

function App() {
  const [isActive, setActive] = useState("false");
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const copy = [...products];

  const handleToggle = () => {
    setActive(!isActive);
  };

  useEffect(() => {
    fetch(`https://carrotsfoobar.herokuapp.com/beertypes`)
      .then((res) => res.json())
      .then(setProducts);
  }, []);

  function addToCart(payload) {
    const inCart = cart.findIndex((item) => item.name === payload.id);
    if (inCart === -1) {
      //add amount
      const nextPayload = { ...payload };
      nextPayload.amount = 1;
      setCart((prevState) => [...prevState, nextPayload]);
    } else {
      //item already exists in the basket - modify the amount
      const nextCart = cart.map((item) => {
        if (item.name === payload.id) {
          item.amount += 1;
        }
        return item;
      });
      setCart(nextCart);
    }
  }

  return (
    <div className="App">
      <div className={isActive ? "hide" : "show"}>
        <Cart cart={cart} />
      </div>
      <img alt="craft beers" className="header-image" src="../crafts.jpg" />
      <img alt="orange wave" className="orange-wave" src="../orange-wave.svg" />
      <img alt="foobar logo" className="foobar-logo" src="../foobar-logo.png" />
      <img onClick={handleToggle} alt="shopping cart" className="cart-btn" src="../shopping-cart.png" />
      <h1>On Tap</h1>
      <ProductList product={copy} addToCart={addToCart} />
      <footer>
        <h2>Cheers</h2>
      </footer>
    </div>
  );
}

export default App;
