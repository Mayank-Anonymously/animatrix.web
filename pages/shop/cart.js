import { useRouter } from "next/router";
import Counter from "../../components/Common/Counter";
import Footer from "../../components/Common/Footer";
import NavbarSection from "../../components/_home/NavbarSection";
import React, { useEffect, useState } from "react";
import { Alert, Table } from "react-bootstrap";
import GetCart from "components/api/GetCart";
import { host } from "static";
import { BsTrash } from "react-icons/bs";
const Cart = () => {
  const router = useRouter();
  const { id } = router.query;
  const [cartData, setCartData] = useState([]);
  const [discount, setDiscount] = useState("");
  const [qtyUpdate, setQtyUpdate] = useState(false);
  useEffect(() => {
    GetCart({ setCartData, id, setQtyUpdate });
  }, [GetCart({ setCartData, setQtyUpdate })]);

  return (
    <>
      {qtyUpdate === true ? (
        <div class="overlay">
          <div class="overlay__inner">
            <div class="overlay__content">
              <span class="spinner"></span>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="navbar-black">
            <NavbarSection />
          </div>
          <section id="cart-section">
            <div class="auto-container">
              <div class="cart-container">
                <div>
                  <span>
                    <h3>Cart ({cartData.length})</h3>
                  </span>
                </div>

                <div class="table-div">
                  <Table>
                    <thead>
                      <tr>
                        <th>Item</th>
                        <th>Price</th>
                        <th>Quanity</th>
                        <th>Total</th>
                        <th>Remove</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartData.map((item, index) => {
                        return (
                          <tr>
                            <td>
                              <div class="table-item-data">
                                <img
                                  src={`${host}resources/${item.image}`}
                                  class="image"
                                />
                                <span>
                                  <p class="m-3">
                                    {item.title} - {item.categoryName}
                                  </p>
                                </span>
                              </div>
                            </td>

                            <td>
                              <div class="table-content">
                                <p class="mt-4">₹{item.price}</p>
                              </div>
                            </td>
                            <td>
                              <span class="quantity">
                                <Counter
                                  qty={item.quantity}
                                  id={item.ProductId}
                                  setQtyUpdate={setQtyUpdate}
                                />
                              </span>
                            </td>
                            <td>
                              <div class="table-content">
                                <p class="mt-4">₹{item.priceSale}</p>
                              </div>
                            </td>
                            <td>
                              <div class="table-content">
                                <BsTrash
                                  size={20}
                                  color={"darkred"}
                                  className="mt-4"
                                  // onClick={() => DeleteCartItem()}
                                />
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                </div>
                {cartData.map((item, index) => (
                  <div class="tile">
                    <img src={`${host}resources/${item.image}`} class="image" />
                    <div class="img-title">
                      <span class="tile-text">
                        {item.title} - {item.categoryName}
                      </span>
                      <div class="price-and-qty">
                        <span class="tile-text-price">Rs.{item.priceSale}</span>
                        <span class="quantity">
                          <Counter
                            qty={item.quantity}
                            id={item.ProductId}
                            setQtyUpdate={setQtyUpdate}
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <div class="seperator" />
          <section id="bill-section">
            <div class="auto-container">
              <div class="bill-container">
                <div>
                  <Alert key={"primary"} variant={"primary"}>
                    <span class="alert-info">
                      Free Shipping On Domestic Orders!
                    </span>
                  </Alert>
                </div>
                <div class="d-flex">
                  <div class="col col-lg-6 col-md-8 col-sm-8 receipt-view">
                    <div class="mb-3">
                      <span class="discount-code">
                        <input
                          placeholder="Enter Coupon Code"
                          value={discount}
                          onChange={(e) => setDiscount(e.target.value)}
                          class="form-control"
                        />
                        <button class="btn btn-dark">Apply</button>
                      </span>
                    </div>
                    <span class="price-detail">
                      <h5>Subtotal</h5>
                      <h5>258.00</h5>
                    </span>
                    <span class="price-detail">
                      <p>Shipping</p>
                      <p>0.00</p>
                    </span>
                    <span class="price-detail">
                      <h4>Total</h4>
                      <h4>258.00</h4>
                    </span>
                    <span class="checkout-button">
                      <button class="btn btn-dark ">Continue Shopping</button>
                      <button class="btn btn-dark">Go To Checkout</button>
                    </span>
                  </div>
                  <div class="col col-lg-5 col-md-8 col-sm-8 receipt-view">
                    Work In Progress
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      <Footer />
    </>
  );
};

export default Cart;