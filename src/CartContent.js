export default function CartContent({ cart }) {
  return (
    <section className="CartContent hidden">
      <h3>MY FOO ORDER</h3>
      <p>
        You have {cart.length} item{cart.length === 1 ? "" : "s"} in your cart.
      </p>
      <ul>
        {cart.map((item) => (
          <CartItem name={item.name} amount={item.amount} key={item.name} />
        ))}
      </ul>
    </section>
  );
}

function CartItem(props) {
  console.log(props);
  return (
    <li>
      {props.amount} {props.name}
    </li>
  );
}