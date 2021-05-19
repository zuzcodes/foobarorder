export default function Product(props) {

    return (
      <article className={props.soldOut ? "Product soldout" : "Product"}>
         <h3>{props.name}</h3>
        <p>{props.category}</p>
        <p>Alcohol: {props.alc}%</p>
        <p>{props.description.overallImpression}</p>
        <button onClick={() => props.addToCart(props)}> Add to Cart </button>
      </article>
    );
  }