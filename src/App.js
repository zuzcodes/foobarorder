import { useState, useEffect } from "react";
import "./App.css";
import ProductList from "./ProductList";
import Cart from "./Cart";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket, faTimes } from '@fortawesome/free-solid-svg-icons'


function App() {
  const [isActive, setActive] = useState("false");
  const [isVisible, setVisible] = useState("true");
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const copy = [...products];
  

  const handleToggle = () => {
    setActive(!isActive);
  };

  const openMenu = () => {
    setVisible(!isVisible);
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
    });
    setCart([]);
  }

  return (
    <div className="App">
      <div className={isVisible ? null : "hide" }>
        <div className="landing">
        <img alt="foobar logo" className="foobar-logo-landing" src="../foobar-logo.png" />
        <img onClick={openMenu} alt="sample qr code" className="qr-sample" src="../qr-sample.png" />
        <img alt="blue wave" className="blue-wave" src="../blue-wave.svg" />
        <img alt="beer taps by adam wilson from unspalsh" className="landing-image" src="../adam-wilson-ANK5zq-g_-g-unsplash.jpg" />
        </div>
      </div>
      <div className={isActive ? "hide" : "show"}>
        <Cart cart={cart} />
        <FontAwesomeIcon icon={faTimes} onClick={handleToggle} className="x-btn"/>
        <button className="tryout" onClick={post}>POST BTN</button>
      </div>
      <img alt="craft beers" className="header-image" src="../crafts.jpg" />
      <img alt="orange wave" className="orange-wave" src="../orange-wave.svg" />
      <img alt="foobar logo" className="foobar-logo" src="../foobar-logo.png" />
      <FontAwesomeIcon icon={faShoppingBasket} onClick={handleToggle} className="cart-btn"/>
      <h1>On Tap</h1>
      <ProductList product={copy} addToCart={addToCart} />
      <footer>
        <h2>Cheers</h2>
      </footer>
    </div>
  );
}

export default App;
