import Product from "./Product";

export default function ProductList(props) {
  console.log(props);
  return (
    <main className="ProductList">
      {props.product.length === 0 && <p>Loading...</p>}
      {props.product.map((item) => (
        <Product addToCart={props.addToCart} {...item} key={item.name} />
      ))}
    </main>
  );
}