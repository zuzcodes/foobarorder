export default function Product(props) {
  return (
    <article className="Product">
      <h3>{props.name}</h3>
      <div className="beer-logo">
      <img src={`/images/${props.label}`} alt="beer brand logo"></img>
      </div>
      <h4>{props.category}</h4>
      <p>Alcohol: {props.alc}%</p>
      <p>{props.description.overallImpression}</p>
      <p>Price: 49 DKK</p>
      <button onClick={() => props.addToCart(props)}> Add to Cart </button>
    </article>
  );
}
