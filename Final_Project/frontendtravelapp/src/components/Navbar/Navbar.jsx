import './Navbar.css';
import { useDate, useAuth } from '../../context';

export const Navbar = () => {
    const { destination, dateDispatch, checkInDate, checkOutDate, guests } =
    useDate();

    const {authDispatch} = useAuth();

    const handleAuthClick = () => {
        authDispatch({
            type: "SHOW_AUTH_MODAL",
        });
    };

    const handleSearchClick = () => {
        dateDispatch({
            type: "OPEN_SEARCH_MODAL",
          });
        };

    return (
        <header className="heading d-flex align-center">
           
                <h1 className="heading-1">
                    <a className="link" href="/">Travel App</a>
                </h1>
                <div className='form-container d-flex align-center cursor-pointer shadow' onClick={handleSearchClick}>
                        <span className='form-option'>{destination || "Add Location"}</span>
                        <span className = 'boarder-right-1px'></span>
                        <span className='form-option'>{checkInDate && checkOutDate?  `${checkInDate.toLocaleDateString("en-US", {
              day: "numeric",
              month: "short",
            })} - ${checkOutDate.toLocaleDateString("en-US", {
              day: "numeric",
              month: "short",
            })}`
            :"Add Time"}</span>
                        <span className = 'boarder-right-1px'></span>
                        <span className='form-option'>{guests > 0 ? `${guests} guests` : "Add Guests"}</span>
                        <span className="search material-icons-outlined">manage_search</span>
                </div>
            <nav className="d-flex align center gap-large" onClick={handleAuthClick}>
                <div className="nav d-flex align-center cursor-pointer">
                <span className="material-icons-outlined profile-option menu">list</span>
                <span className="material-icons-outlined profile-option person">person</span>
                </div>
            </nav>
        </header>
    );
};