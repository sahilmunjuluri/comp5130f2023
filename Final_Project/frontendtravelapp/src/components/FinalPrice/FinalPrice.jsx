import './FinalPrice.css'
import { useDate } from "../../context";
import { DateSelector } from "../DateSelector/DateSelector";
import { useNavigate } from 'react-router-dom';

export const FinalPrice = ({singleHotel}) => {

  const naviagate = useNavigate();

    const handleGuestChange = (event) => { 
        dateDispatch({
          type: "GUESTS",
          payload: event.target.value,
        });
      };

      const { guests, dateDispatch, checkInDate, checkOutDate } = useDate();
    const {_id, price, rating} = singleHotel;

    console.log(price, rating, singleHotel);

    const handleReserveClick = () => {
      naviagate(`/confirm-booking/stay/${_id}`);
    }

    return (
    <div className="price-details-container d-flex direction-column gap shadow">
        <div className="price-rating d-flex align-center justify-space-between">
            <p> <span className="fs-bold fs-large">$ {price}</span> Night</p>
            <span className="rating d-flex align-center">
                <span className="material-icons-outlined">star</span><span>{rating}</span>
            </span>
        </div>
       <div>
         <div className='grid-container-two-col selected-dates'>
            <div className='checkin loc-container'>
                <label className="label">Check In</label>
                <DateSelector checkInType="in" />
            </div>
            <div className='checkin loc-container'>
                <label className="label">Check Out</label>
                <DateSelector checkInType="out" />
            </div>
         </div>
         <div className='guests gutter-sm'>
            <p>GUESTS</p>
            {guests <= 0 ? (
            <input
              className="guest-count-input"
              type="number"
              placeholder="Add Guests"
              value={guests}
              onChange={handleGuestChange}
            />
          ) : (
            <span>{guests} guests</span>
          )}
         </div>
       </div>
       <div>
        <button className="button btn-reserve btn-primary cursor" onClick={handleReserveClick}
        disabled = {checkInDate && checkOutDate && guests >0 ? false : true }
        >
            Reserve
        </button>
       </div>
       <div className='price-distribution d-flex direction-column'>
        <div className='final-price d-flex align-center justify-space-between'>
            <span className='span'>$ {price} * 2 nights</span>
            <span className='span'>${price *2}</span>
        </div>
        <div className='final-price d-flex align-center justify-space-between'>
            <span className='span'>Service Fee</span>
            <span className='span'>$ 100</span>
        </div>
        <div className='final-price d-flex align-center justify-space-between'>
            <span className='span'>Total</span>
            <span className='span'>$ {price *2 +100}</span>
        </div>
       </div>
    </div>
    );
}