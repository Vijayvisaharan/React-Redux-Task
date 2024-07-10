import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import {
    removeItem,
    decreaseItemQuantity,
    increaseItemQuantity,
} from "./reducers/counter-reducer";
import { Carousel } from 'react-bootstrap';
import { BiPlus, BiMinus } from 'react-icons/bi';


function Card() {

    const dispatch = useDispatch();
    const items = useSelector((state) => state.allCart.items);
    const totalQuantity = useSelector((state) => state.allCart.totalQuantity);
    const totalPrice = useSelector((state) => state.allCart.totalPrice);

    // const [data, setData] = useState(productData)
    // const totalQuantity  = data.reduce((total, data) => total + (data.quantity || 1), 0)
    // const totalPrice= data.reduce((total, data) => total + data.price * (data.quantity || 1), 0)

    return (
        <div>
            <div className='container-fluid h-10  d-flex justify-content-evenly align-items-center p-3 mt-5 ' style={{ backgroundColor: "#18874d", color: "white", borderRadius: "20px" }}>
                <h3>Total Price: ₹{totalPrice}</h3>
                <h3>Total Quantity: {totalQuantity || 1}</h3>
                <button className="btn btn-danger">proceed to pay</button>
            </div>
            <div className="container" >
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="d-flex flex-column">

                        {items.map((item) => {
                            return (
                                <div key={item.id} style={{ margin: "2em 0em" }}>
                                    <div className="card p-5 mb-5 " id='card-w' style={{ backgroundColor: "#eaeaea" }}>
                                        <div className="row g-0">
                                            <div className="col-md-4">
                                                <div >
                                                    <Carousel id={`carouselExample${item.id}`}>
                                                        {item.images.map((imageItem, i) => (
                                                            <Carousel.Item key={i}>
                                                                <img
                                                                    src={imageItem.image} height={420}
                                                                    className="d-block w-100"
                                                                    alt={`Slide ${i}`}
                                                                    id='carousel-img'
                                                                />
                                                            </Carousel.Item>
                                                        ))}
                                                    </Carousel>
                                                </div>
                                            </div>
                                            <div className="col-md-8">
                                                <div className="card-body" style={{ backgroundColor: "#ccb7bf" }} >

                                                    <div className="d-flex justify-content-between">
                                                        <h4 className="card-title w-50">{item.title}</h4>
                                                        <h4 className="card-title">₹{item.price}</h4>
                                                    </div>

                                                    <div className="w-50">
                                                        <p className="card-text">{item.description}</p>
                                                        <p className="card-text"><b>Brand:</b> {item.brand}</p>
                                                        <p className="card-text" style={{ color: "red" }}><span className='stock'> In Stock: {item.stock}</span></p>
                                                    </div>

                                                    <div className="d-flex justify-content-between mt-3">
                                                        <p className="card-text"> <b>Rating: {item.rating}</b></p>
                                                        <div className="d-flex align-items-center">
                                                            <button className="mx-2 quantity-btn p-2" onClick={() => dispatch(increaseItemQuantity(item.id))}><BiPlus /></button>
                                                            <h6 className="mx-2">{item.quantity || 1}</h6>
                                                            <button className="mx-2 quantity-btn p-2" onClick={() => dispatch(decreaseItemQuantity(item.id))} disabled={item.quantity <= 0}><BiMinus /></button>
                                                        </div>
                                                    </div>
                                                    <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                                                    <div className="d-flex justify-content-end" id="btn-div">
                                                        <button className="btn btn-danger" id="btn" onClick={() => dispatch(removeItem(item.id))} >Remove from Cart</button>
                                                    </div>
                                                    <hr />
                                                    <span className='d-flex justify-content-end'> <h1>Total: Rs. <span className="Text" style={{ color: 'blue' }}>{item.price * item.quantity || item.price}</span></h1> </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
