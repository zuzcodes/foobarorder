
export default function CartItem(props) {
    
    return (
      <div className="CartItems">
      <p className="p-width">{props.name}</p>
      <p>{props.amount}</p>
      <p>{props.price},-</p>
      <button onClick={()=>props.removeFromCart({id:props.name})}>Delete</button>
      </div>
    );
  }