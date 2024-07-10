import React from 'react'
import { Dropdown } from 'react-bootstrap'
import { useSelector, useDispatch } from "react-redux";

function Topbar() {
    // const dispatch = useDispatch();
    // const items = useSelector((state) => state.allCart.items);
    const totalQuantity = useSelector((state) => state.allCart.totalQuantity);

    return (
        <div>
            <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#b7ccbf" }}>
                <div className="container">
                    <a className="navbar-brand" href="#!" id="nav-title">A Mobile Store</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                    <div className="navbar-collapse collapse show" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4" id="ul-texts">
                            <li className="nav-item"><a className="nav-link active" aria-current="page" href="#!">Home</a></li>
                            <li className="nav-item"><a className="nav-link" href="#!">About</a></li>
                            <li className="nav-item dropdown">
                                <Dropdown>
                                    <Dropdown.Toggle variant="none" id="navbarDropdown">
                                        Shop
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#!">All Products</Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item href="#!">Popular Items</Dropdown.Item>
                                        <Dropdown.Item href="#!">New Arrivals</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </li>
                        </ul>
                        <form className="d-flex justify-content-end">
                            <button className="btn btn-outline-dark" type="submit">
                                <span style={{ marginRight: "0.6em" }}><i className="fa-solid fa-cart-shopping"></i></span>
                                <span style={{ marginRight: "0.3em" }}>Cart</span>
                                <span className="badge bg-dark text-white ms-1 rounded-pill" id="count">{totalQuantity}</span>
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Topbar
