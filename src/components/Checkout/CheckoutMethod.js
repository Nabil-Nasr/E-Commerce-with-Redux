import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const CheckoutMethod = () => {
  return (
    <div className="d-grid row-gap-2">
      <h3 className="fw-bold">اختر طريقة الدفع</h3>
      <div className="bg-white px-3 py-4 btn-outline-dark d-grid row-gap-3">
        <Form.Check type="radio" name="paymentMethod" id="card" label="الدفع بالبطاقة الائتمانية" />
        <Form.Check type="radio" name="paymentMethod" id="bank-card" label="الدفع عند الإستلام" />
      </div>
      <div className="ms-auto mt-2 d-flex column-gap-2 ">
        <Button className="bg-white text-black border py-2 rounded-0 ">34000 جنيه</Button>
        <Link to="/payment-method" ><Button variant="dark" className="py-2 rounded-0">إتمام الشراء</Button></Link>
      </div>
    </div>
  );
}

export default CheckoutMethod;
