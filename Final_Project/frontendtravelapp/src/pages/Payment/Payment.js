import { Fragment, useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";
import { useDate } from "../../context";
import './Payment.css'
import axios from 'axios';

export const Payment = () => {

  const params = useParams();
  const { id } = params;
  const [singleHotel, setSingleHotel] = useState([]);


useEffect (() => {
    (async () => {
        try {
            const {data} = await axios.get(`https://real-goat-stole.cyclic.app/api/hotels/${id}`)
            console.log(data)
            setSingleHotel(data)
        } catch (error) {
            console.log(error);
        }
    })()
}, [id])

const { image, name, address, state, rating, price } = singleHotel;
const { guests, checkInDate, checkOutDate } = useDate();

const numberOfNights =
checkInDate && checkOutDate
  ? (checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 3600 * 24)
  : 0;

  const totalPayableAmount = price * numberOfNights + 150;

    return (
        <Fragment>
            <header className="heading">
                <h1 className="heading-1">
                    <Link className="link" to="/">Travel App</Link>
                </h1>
            </header>
            <main className="payment-page d-flex justify-center">
                <div className="final-details-container d-flex direction-column gap-md">
                    <h2>Trip Details</h2>
                    <div className="dates-and-guests d-flex direction-column gap-md">
                        <h3>Your Trip</h3>
                        <div>
                            <p>Dates</p>
                            <span> {checkInDate.toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "short",
                })}{" "}
                -
                {checkOutDate.toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "short",
                })}</span>
                        </div>
                        <div>
                            <p>Guests</p>
                            <span>{guests} Guests</span>
                        </div>
                    </div>
                    <div className="d-flex direction-column gap-sm">
                        <p>Pay With</p>
                        <span>Credit/Debit Card</span>
                    </div>
                    <button className="button btn-primary btn-reserve cursor btn-pay">
                        Confirm Booking
                    </button>
                </div>
                <div className="final-details d-flex direction-column gap-large">
          <div className="d-flex gap-sm">
            <img className="image"  src={image} alt={name} />
            <div className="d-flex direction-column">
              <div className="d-flex direction-column grow-shrink-basis">
                <span>  {name} </span>
                <span>
                  {address}, {state}
                </span>
              </div>
              <div className="rating-container">
                <span className="rating d-flex align-center">
                  <span className="material-icons-outlined">star</span>
                  <span>{rating}</span>
                </span>
              </div>
            </div>
          </div>
          <div className="tag">
            Your booking is protected by{" "}
            <strong className="strong">TravelApp</strong> cover
          </div>
          <div className="price-detail-container">
            <div className="price-distribution d-flex direction-column">
              <h3>Price Details</h3>
              <div className="final-price d-flex align-center justify-space-between">
                <span className="span">
                  Rs. {price} x {numberOfNights} nights
                </span>
                <span className="span">Rs. {price} * {numberOfNights}</span>
              </div>
              <div className="final-price d-flex align-center justify-space-between">
                <span className="span">Service fee</span>
                <span className="span">Rs. 200</span>
              </div>
              <div className="final-price d-flex align-center justify-space-between">
                <span className="span">Total</span>
                <span className="span">Rs. {totalPayableAmount}</span>
              </div>
            </div>
          </div>
        </div>
            </main>
        </Fragment>
    )
}