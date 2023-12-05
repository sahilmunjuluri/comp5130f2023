import './HotelCard.css'
import { useNavigate } from "react-router-dom";

export const HotelCard = ({hotel}) => {

    const { _id, name, image, address, state, rating, price } = hotel;

    const navigate = useNavigate();
    const handleHotelCardClick = () => {
        navigate(`/hotels/${name}/${address}-${state}/${_id}/reserve`)
    }

    return (
        <div className="hotelcard-container shadow cursor-pointer relative">
            <div onClick={handleHotelCardClick}>
                    <img className='img' src={image}/>
                    <div className="hotelcard-details">
                        <div className='d-flex align-center'>
                            <span className="location">{address}, {state}</span>
                            <span className="rating d-flex align-center">
                                <span className="material-icons-outlined">star</span>
                                <span>{rating}</span>
                            </span>
                        </div>
                        
                        <p className="hotel-name">{name}</p>
                        <p className="price-details d-flex align-center">
                            <span className="price">$ {price}</span>
                            <span className="details">night</span>
                        </p>
                    </div>
                    
            </div>
           
                <button className="button btn-wishlist absolute">
                <span className="material-icons-outlined favorite cursor">favorite</span>
                </button>
        </div>
    )
}