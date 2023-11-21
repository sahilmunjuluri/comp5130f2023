import './Navbar.css';

export const Navbar = () => {
    return (
        <header className="heading d-flex align-center">
           
                <h1 className="heading-1">
                    <a className="link" href="/">Travel App</a>
                </h1>
                <div className='form-container d-flex align-center cursor-pointer shadow'>
                        <span className='form-option'>Add Location</span>
                        <span className = 'boarder-right-1px'></span>
                        <span className='form-option'>Add Time</span>
                        <span className = 'boarder-right-1px'></span>
                        <span className='form-option'>Add Guests</span>
                        <span className="search material-icons-outlined">manage_search</span>
                </div>
            <nav className="d-flex align center gap-large">
                <div className="nav d-flex align-center cursor-pointer">
                <span className="material-icons-outlined profile-option menu">list</span>
                <span className="material-icons-outlined profile-option person">person</span>
                </div>
            </nav>
        </header>
    );
};