import { useState, useEffect, useRef } from "react";
import { Input, Button } from "antd";
import InputMask from "react-input-mask";

export default function PaymentForm() {
  const [name, setName] = useState("");
  const [cardnumber, setCardnumber] = useState("");
  const [monthYear, setMonthYear] = useState("");
  const [isValid, setIsValid] = useState(false);
  

  const form = useRef(null);

  useEffect(() => {
    const isCreditCardValid = cardnumber.replaceAll(" ", "").length === 16;
    const isMonthYearValid = monthYear.replace("/", "").length === 4;
    setIsValid(
      form.current.checkValidity() && isMonthYearValid && isCreditCardValid
    );
  }, [name, cardnumber, monthYear]);

  function onSubmit(e) {
    e.preventDefault();
    
  }

  return (
    <section className="CheckoutForm">
      <form onSubmit={onSubmit} ref={form}>
          <div className="form-control">
            <label htmlFor="name">Name</label>
            <Input
              id="name"
              type="text"
              required
              minLength="2"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
         
          <div className="form-control">
            <label htmlFor="cardnumber">Card number</label>
            <InputMask
              mask="9999 9999 9999 9999"
              value={cardnumber}
              maskChar=""
              className="ant-input"
              onChange={(e) => setCardnumber(e.target.value)}
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="monthyear">Month/Year</label>
            <InputMask
              mask="99/99"
              maskChar=""
              className="ant-input"
              required
              value={monthYear}
              onChange={(e) => setMonthYear(e.target.value)}
              minLength="17"
            ></InputMask>
          </div>
          <Button type="primary" htmlType="submit" disabled={!isValid}>
            Submit
          </Button>
        </form>
    </section>
  );
}
