export default function ThankYouPage() {
  return (
    <article className="thanks">
      <img alt="color wave" className="wave-color-top" src="../wave-top.svg" />
      <div className="thanks-content">
        <h1>Thank You!</h1>
        <p>Your Foo Order will be at your table in just few minutes.</p>
        <p>Your Order Number is: 00</p>
        <button className="thanks-btn" onClick={refreshPage}>
          Back to Start
        </button>
      </div>
      <img alt="color wave" className="wave-color-bottom" src="../wave-bottom.svg" />
    </article>
  );
}

function refreshPage() {
  window.location.reload();
}
