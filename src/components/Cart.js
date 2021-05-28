import CartContent from "../components/CartContent";
import PaymentForm from "../components/PaymentForm";

export default function Cart(props) {
  return (
    <section className="Cart">
      <CartContent cart={props.cart} />
      {props.cart.length > 0 ? <PaymentForm/> : null}
    </section>
  );
}
