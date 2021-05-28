import { useState, useRef } from "react";
export default function PaymentForm() {
  const formEl = useRef(null);
  const ccEl = useRef(null);
  const [name, setName] = useState("");
  const [cc, setCC] = useState("");
  const [ccError, setCCError] = useState("");
  const [dayMonth, setDayMonth] = useState("");

  function onSubmit(evt) {
    evt.preventDefault();
    if (!ccEl.current.checkValidity()) {
      setCCError("Required");
    }
    if (formEl.current.checkValidity()) {
      console.log("Form is valid!");
    } else {
      console.log("Form is not valid!");
    }
  }

  return (
    <section className="CheckoutForm">
      <form ref={formEl} noValidate onSubmit={onSubmit}>
        <h3>PAYMENT</h3>
        <label htmlFor="form_name">Name</label>
        <input type="text" ref={ccEl} id="form_name" value={name} onChange={(e) => setName(e.target.value)} required />

        <label htmlFor="form_cc">Card Number</label>
        <input
          type="text"
          id="form_cc"
          ref={ccEl}
          value={cc}
          onChange={(e) => setCC(e.target.value.replace(/\D/g, ""))}
          required
          pattern="[0-9]{16}"
          minLength="16"
          maxLength="16"
        />
        <span>{ccError}</span>
        <label htmlFor="form_day_month">Day / Month</label>
        <input
          type="text"
          id="form_day_month"
          ref={ccEl}
          value={dayMonth}
          onChange={(e) => setDayMonth(e.target.value.replace(/\D\//g, ""))}
          required
          pattern="[0-1][0-9]/[0-9]{2}"
          minLength="5"
          maxLength="5"
        />
        <span>{ccError}</span>
        <button type="submit" className="submit-btn">
          Confirm & Pay
        </button>
      </form>
    </section>
  );
}
