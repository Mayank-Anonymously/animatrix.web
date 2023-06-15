import React from "react";
import state from "../../utils/state.json";
import { useFormik } from "formik";
import * as Yup from "yup";
import { host } from "static";
import Link from "next/link";

const Information = ({ cartData }) => {
  console.log("cartData:", cartData);
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      address2: "",
      country: "",
      state: "",
      zip: "",
      phone: "",
      city: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      lastName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      address: Yup.string().required("Required"),
      zip: Yup.string()
        .required("Zipcode is required")
        .min(6, "Zipcode should not be long less than 6 digits")
        .max(6, "Zipcode should not be long more than 6 digits"),
      phone: Yup.string()
        .required("Phone is required")
        .min(10, "Phone should not be long less than 10 digits")
        .max(10, "Phone should not be long more than 10 digits"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  //validation**************************************************************************
  const { values } = formik;
  const Product = cartData.map((item, index) => {
    return {
      name: item.title,
    };
  });
  const ProductObj = {
    firstName: values.firstName,
    lastName: values.lastName,
    email: values.email,
    address: values.address,
    address2: values.address2,
    country: values.country,
    state: values.state,
    zip: values.zip,
    phone: values.phone,
    city: values.city,
    Product: Product,
  };
  const data = JSON.stringify(Product);
  const right = data.replaceAll("[{", "");
  const left = right.replace("}]", "");
  return (
    <>
      <div className="container" style={{ marginTop: "20px" }}>
        <div className="row">
          <div className="col-md-4 order-md-2 mb-4">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-muted">Your cart</span>
              <span className="badge badge-secondary badge-pill">3</span>
            </h4>
            <ul className="list-group mb-3">
              {cartData.map((item, index) => {
                return (
                  <li className="list-group-item d-flex justify-content-between align-items-center lh-condensed bill-image">
                    <div>
                      <img src={`${host}resources/${item.image}`} />
                    </div>
                    <div className="bill-product">
                      <h6 className="my-0">{item.title}</h6>
                      <small className="text-muted">Size</small>
                    </div>
                    <span className="text-muted">₹{item.priceSale}</span>
                  </li>
                );
              })}

              {/* <li className="list-group-item d-flex justify-content-between bg-light">
                <div className="text-success">
                  <h6 className="my-0">Promo code</h6>
                  <small>EXAMPLECODE</small>
                </div>
                <span className="text-success">-$5</span>
              </li> */}

              <li className="list-group-item d-flex justify-content-between">
                <span>Total Price</span>
                {cartData.length !== 0 ? (
                  <strong>
                    ₹
                    {cartData.reduce(function (prev, current) {
                      return prev + current.priceSale;
                    }, 0)}
                  </strong>
                ) : (
                  0
                )}
              </li>
            </ul>

            <form className="card p-2">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Promo code"
                />
                <div className="input-group-append">
                  <button type="submit" className="btn btn-secondary">
                    Redeem
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-md-8 order-md-1">
            <h4 className="mb-3 billing-header">
              1. Billing and Contact Details
            </h4>
            <form className="needs-validation" onSubmit={formik.handleSubmit}>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label for="firstName">First name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    name="firstName"
                    placeholder=""
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.firstName}
                    controlId="firstName"
                  />
                  <span className="text-danger">
                    {formik.touched.firstName && formik.errors.firstName ? (
                      <div className="text-danger">
                        {formik.errors.firstName}
                      </div>
                    ) : null}
                  </span>
                </div>
                <div className="col-md-6 mb-3">
                  <label for="lastName">Last name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    name="lastName"
                    placeholder=""
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.lastName}
                    controlId="lastName"
                  />
                  <span className="text-danger">
                    {formik.touched.lastName && formik.errors.lastName ? (
                      <div className="text-danger">
                        {formik.errors.lastName}
                      </div>
                    ) : null}
                  </span>
                </div>
              </div>

              <div className="mb-3">
                <label for="email">
                  Email <span className="text-muted">(Optional)</span>
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  controlId="email"
                />
                <span className="text-danger">
                  {formik.touched.email && formik.errors.email ? (
                    <div className="text-danger">{formik.errors.email}</div>
                  ) : null}
                </span>
              </div>

              <div className="mb-3">
                <label for="address">Address</label>
                <input
                  type="text"
                  name="address"
                  className="form-control"
                  id="address"
                  placeholder="1234 Main St"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.address}
                  controlId="address"
                />
                <span className="text-danger">
                  {formik.touched.address && formik.errors.address ? (
                    <div className="text-danger">{formik.errors.address}</div>
                  ) : null}
                </span>
              </div>

              <div className="mb-3">
                <label for="address2">Address 2</label>
                <input
                  type="text"
                  className="form-control"
                  id="address2"
                  name="address2"
                  placeholder="Apartment or suite"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.address2}
                  controlId="address2"
                />
              </div>

              <div className="row">
                <div className="col-md-5 mb-3">
                  <label for="country">Country</label>

                  <select
                    class="form-select"
                    aria-label="Default select example"
                    onChange={(e) =>
                      formik.setFieldValue("country", e.target.value)
                    }
                    required
                    name="country"
                    onBlur={formik.handleBlur}
                    value={formik.values.country}
                  >
                    <option value="Select Country">Select</option>
                    <option value={"India"}>India</option>
                  </select>
                  <div className="invalid-feedback">
                    Please select a valid country.
                  </div>
                </div>
                <div className="col-md-3 mb-3">
                  <label for="city">city</label>
                  <input
                    type="text"
                    className="form-control"
                    id="city"
                    name="city"
                    placeholder="city"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.city}
                    controlId="city"
                  />
                </div>
                <div className="col-md-4 mb-3">
                  <label for="state">State</label>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    id="state"
                    name="state"
                    onChange={(e) =>
                      formik.setFieldValue("state", e.target.value)
                    }
                  >
                    <option selected>Choose...</option>
                    {state.map((item, index) => {
                      return <option value={item.name}>{item.name}</option>;
                    })}
                  </select>
                  <div className="invalid-feedback">
                    Please provide a valid state.
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <label for="zip">Zip</label>
                  <input
                    type="text"
                    className="form-control"
                    id="zip"
                    name="zip"
                    placeholder=""
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.zip}
                    controlId="zip"
                  />
                  <span className="text-danger">
                    {formik.touched.zip && formik.errors.zip ? (
                      <div className="text-danger">{formik.errors.zip}</div>
                    ) : null}
                  </span>
                </div>
                <div className="col-md-6 mb-3">
                  <label for="zip">Phone No.</label>
                  <input
                    type="number"
                    className="form-control"
                    id="phone"
                    name="phone"
                    placeholder=""
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phone}
                    controlId="phone"
                  />
                  <span className="text-danger">
                    {formik.touched.phone && formik.errors.phone ? (
                      <div className="text-danger">{formik.errors.phone}</div>
                    ) : null}
                  </span>
                </div>
              </div>
              {/* <hr className="mb-4" />
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="same-address"
                />
                <label className="custom-control-label" for="same-address">
                  Shipping address is the same as my billing address
                </label>
              </div>
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="save-info"
                />
                <label className="custom-control-label" for="save-info">
                  Save this I for next time
                </label>
              </div> */}
              <hr className="mb-4" />

              <h4 className="mb-3">Payment method</h4>

              {/* <div className="d-block my-3">
                <div className="custom-control custom-radio">
                  <input
                    id="credit"
                    name="paymentMethod"
                    type="radio"
                    className="custom-control-input"
                    checked
                    required
                  />
                  <label className="custom-control-label" for="credit">
                    Credit card
                  </label>
                </div>
                <div className="custom-control custom-radio">
                  <input
                    id="debit"
                    name="paymentMethod"
                    type="radio"
                    className="custom-control-input"
                    required
                  />
                  <label className="custom-control-label" for="debit">
                    Debit card
                  </label>
                </div>
                <div className="custom-control custom-radio">
                  <input
                    id="paypal"
                    name="paymentMethod"
                    type="radio"
                    className="custom-control-input"
                    required
                  />
                  <label className="custom-control-label" for="paypal">
                    PayPalw
                  </label>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label for="cc-name">Name on card</label>
                  <input
                    type="text"
                    className="form-control"
                    id="cc-name"
                    placeholder=""
                    required
                  />
                  <small className="text-muted">
                    Full name as displayed on card
                  </small>
                  <div className="invalid-feedback">
                    Name on card is required
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <label for="cc-number">Credit card number</label>
                  <input
                    type="text"
                    className="form-control"
                    id="cc-number"
                    placeholder=""
                    required
                  />
                  <div className="invalid-feedback">
                    Credit card number is required
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3 mb-3">
                  <label for="cc-expiration">Expiration</label>
                  <input
                    type="text"
                    className="form-control"
                    id="cc-expiration"
                    placeholder=""
                    required
                  />
                  <div className="invalid-feedback">
                    Expiration date required
                  </div>
                </div>
                <div className="col-md-3 mb-3">
                  <label for="cc-cvv">CVV</label>
                  <input
                    type="text"
                    className="form-control"
                    id="cc-cvv"
                    placeholder=""
                    required
                  />
                  <div className="invalid-feedback">Security code required</div>
                </div>
              </div> */}

              <hr className="mb-4" />
              <Link
                // className="btn btn-p rimary btn-lg btn-block"
                target="__blank"
                // href={{
                //   pathname: `https://api.whatsapp.com/send?phone=919711360687&text=details:${data}}`,
                //   query: formik.values, // the data
                // }}
                className="payment-btn"
                href={`https://api.whatsapp.com/send?phone=919971790511&text=Name:${
                  values.firstName
                }-${values.lastName},email:${values.email},address:${
                  values.address + values.address2
                },state:${values.state},zip:${values.zip},city:${
                  values.city
                },phone:${values.phone},ProductDetails:${left}`}
              >
                Continue to checkout
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Information;
