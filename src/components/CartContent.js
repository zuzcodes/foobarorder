export default function CartContent({ cart }) {
  return (
    <section className="CartContent">
      <h3>MY FOO ORDER</h3>
      <p>
        You have {cart.length} item{cart.length === 1 ? "" : "s"} in your cart.
      </p>
      <ul>
        <li>Product</li>
        <li>Amount</li>
        <li>Unit Price</li>
      </ul>
      {cart.map((item) => (
        <CartItem name={item.name} amount={item.amount} price={item.amount * 49} key={item.id} />
      ))}
      <hr />
      <li>
        TOTAL {cart.length} {cart.length * 49} DKK{" "}
      </li>
    </section>
  );
}

function CartItem(props) {
  console.log(props);
  return (
    <li>
      {props.name} {props.amount} {props.price} DKK
    </li>
  );
}
