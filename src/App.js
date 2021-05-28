import { useState, useEffect} from "react";
import "./App.css";
import Landing from "./pages/Landing";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket, faTimes } from '@fortawesome/free-solid-svg-icons'


function App() {
  const [isActive, setActive] = useState("false");
  const [products, setProducts] = useState([]);
  const [availableProducts, setAvailablePrtoducts] = useState([]);
  const [cart, setCart] = useState([]);
  
  const all = [...products];
  const available = [...availableProducts];

  useEffect(getAvailableProducts, []);
  useEffect(getProducts, []);
  
  const handleToggle = () => {
    setActive(!isActive);
  };

  function getAvailableProducts() {
    fetch("https://carrotsfoobar.herokuapp.com/")
      .then((res) => res.json())
      .then((data) => {
        setAvailablePrtoducts(data.taps);
      });
  }

  function getProducts() {
    fetch("https://carrotsfoobar.herokuapp.com/beertypes")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }

  function addToCart(payload) {
    const inCart = cart.findIndex((item) => item.name === payload.id);
    if (inCart === -1) {
      //add amount
      console.log(payload)
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
    setCartFeedback();
  }

  function setCartFeedback() {
    const cart= document.getElementById("cart");
    cart.classList.toggle("isgreen");
  }

  function post() {
    const data = cart.map((item) => {
      return { name: item.name, amount: item.amount };
    });
    console.log(data);
    const postData = JSON.stringify(data);
    fetch("https://carrotsfoobar.herokuapp.com/order", {
      method: "post",
      body: postData,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    })
    .then(res=>res.json()).then(console.log)
    setCart([]);
  }

  return (
    <div className="App">
      <Landing/>
      <div className={isActive ? "hide" : "show"}>
        <Cart cart={cart} />
        <FontAwesomeIcon icon={faTimes} onClick={handleToggle} className="x-btn"/>
        <button className="tryout" onClick={post}>POST BTN</button>
      </div>
      <img alt="craft beers" className="header-image" src="../crafts.jpg" />
      <img alt="orange wave" className="orange-wave" src="../orange-wave.svg" />
      <img alt="foobar logo" className="foobar-logo" src="../foobar-logo.png" />
      <FontAwesomeIcon id="cart" icon={faShoppingBasket} onClick={handleToggle} className="cart-btn"/>
      <h1>On Tap</h1>
      <ProductList product={all} availableProducts={available} addToCart={addToCart} />
      <footer>
        <h2>Cheers</h2>
      </footer>
    </div>
  );
}

export default App;
