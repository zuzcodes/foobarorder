import { useState, useEffect} from "react";
import "./App.css";
import ProductList from "./ProductList";
import Cart from "./Cart";


function App() {
  
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const copy = [...products];

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
      <div>
        <h1>FOO BAR</h1>
      </div>
      <ProductList product={copy} addToCart={addToCart} />
      <Cart cart={cart} />
    </div>
  );
}

export default App;