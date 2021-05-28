export default function CartContent({ cart }) {
  return (
    <section className="CartContent">
      <h3>MY FOO ORDER</h3>
      <p>
        You have {cart.length} item{cart.length === 1 ? "" : "s"} in your cart.
      </p>
      <div className="CartHeader">
        <p className="p-width">Product</p>
        <p>Amount</p>
        <p>Unit Price</p>
        <p>Delete</p>
      </div>
      {cart.map((item) => (
        <CartItem name={item.name} amount={item.amount} price={item.amount * 49} key={item.id} />
      ))}
      <hr />
      <div className="CartSummary">
        <p className="p-width">Total</p>
        <p>{cart.length}</p>
        <p>{cart.length * 49},-</p>
        <p>KRONE</p>
      </div>
    </section>
  );
}

function CartItem(props) {
  console.log(props);
  return (
    <div className="CartItems">
    <p className="p-width">{props.name}</p>
    <p>{props.amount}</p>
    <p>{props.price},-</p>
    <button>Delete</button>
    </div>
  );
}
