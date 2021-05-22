import CartContent from "./CartContent";
import PaymentForm from "./PaymentForm";

export default function Cart(props) {
  return (
    <aside className="Cart hidden">
      <CartContent cart={props.cart} />
      {props.cart.length > 0 ? <PaymentForm /> : <p>Your cart is empty..</p>}
    </aside>
  );
}