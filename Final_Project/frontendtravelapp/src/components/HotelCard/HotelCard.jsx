import './HotelCard.css'
import { useNavigate } from "react-router-dom";
import { useWishlist, useAuth } from '../../context';
import {findHotelInWishlist} from '../../utils';

export const HotelCard = ({hotel}) => {

    const { _id, name, image, address, state, rating, price } = hotel;
    const { wishlistDispatch, wishlist } = useWishlist();
    const {accessToken, authDispatch} = useAuth();
    console.log({accessToken});
    const isHotelInWishlist = findHotelInWishlist(wishlist, _id);

    console.log(wishlist);

    const navigate = useNavigate();
    const handleHotelCardClick = () => {
        navigate(`/hotels/${name}/${address}-${state}/${_id}/reserve`)
    }

    const handleWishlistClick = () => {
        if(accessToken){
            if(!isHotelInWishlist){
                wishlistDispatch({
                    type: "ADD_TO_WISHLIST",
                    payload: hotel,
                  });
                  navigate("/wishlist")
            }else {
                wishlistDispatch({
                  type: "REMOVE_FROM_WISHLIST",
                  payload: _id,
                });
            }
        }else {
            authDispatch({
              type: "SHOW_AUTH_MODAL",
            });
          }
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
           
                <button className="button btn-wishlist absolute d-flex align-center"
        onClick={handleWishlistClick}>
               <span
          className={`material-icons favorite cursor ${isHotelInWishlist ? "fav-selected" : ""
            }`}
        >
          favorite
        </span>
                </button>
        </div>
    )
}