import { Navbar, Categories, SearchStayWithDate, AuthModal } from "../../components"
import { HotelCard, Filter } from "../../components"
import "./Home.css"
import axios from "axios"
import { useEffect, useState, Fragment } from "react"
import InfiniteScroll from "react-infinite-scroll-component";
import { useCategory, useDate, useFilter, useAuth } from "../../context"

import {getHotelsByPrice, getHotelsByRoomsAndBeds, getHotelsByPropertyType, getHotelsByRatings, getHotelsByCancelation} from "../../utils";


export const Home = () => {

    const [hotels, setHotels] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(16);
    const [testData, setTestData] = useState([]);
    const {hotelCategory} = useCategory();
    const { isSearchModalOpen } = useDate();
    const {
        isFilterModalOpen,
        priceRange,
        noOfBathrooms,
        noOfBedrooms,
        noOfBeds,
        propertyType,
        traveloRating,
        isCancelable,
      } = useFilter();

      const {isAuthModalOpen} = useAuth();

    useEffect(() => {
        (async  () => {
            try {
                const {data} = await axios.get(
                    `https://real-goat-stole.cyclic.app/api/hotels?category=${hotelCategory}`
                    );
                console.log(data)
                setTestData(data);
                setHotels(data ? data.slice(0,16): []);
                
            } catch (error) {
                console.log(error)
            }
        })();
    }, [hotelCategory])

    const fetchMoreData = () => {
        if(hotels.length >= testData.length){
            setHasMore(false);
            return
        }
        setTimeout(()=> {
            if(hotels && hotels.length> 0){
                setHotels(hotels.concat(testData.slice(currentIndex,currentIndex+16)))
                setCurrentIndex(prev => prev+16);
            }else{
                setHotels([])
            }
        }, 1000)
    }

    const filteredHotelsByPrice = getHotelsByPrice(hotels, priceRange);
    const filteredHotelsByBedsAndRooms = getHotelsByRoomsAndBeds(
        filteredHotelsByPrice,
        noOfBathrooms,
        noOfBedrooms,
        noOfBeds
      );
      const filteredHotelsByPropertyType = getHotelsByPropertyType(
        filteredHotelsByBedsAndRooms,
        propertyType
      );

      const filteredHotelsByRatings = getHotelsByRatings(
        filteredHotelsByPropertyType,
        traveloRating
      );

      const filteredHotelsByCancelation = getHotelsByCancelation(
        filteredHotelsByRatings,
        isCancelable
      );

    return (
        <div className="relative">
            
        <Navbar/>
        {isAuthModalOpen && <AuthModal/>}
        <Categories/>
       
            {
                hotels && hotels.length > 0 ? (
                    <InfiniteScroll dataLength={hotels.length}
                    next={fetchMoreData}
                    hasMore = {hasMore}
                    loader = { hotels.length >0 && <h3 className="alert-text">Loading...</h3>}
                    endMessage= {<p className="alert-text"> No more Hotels</p>}>

                <main className="main d-flex align-center wrap gap-larger">
                    {
                        filteredHotelsByCancelation && filteredHotelsByCancelation.map((hotel) => <HotelCard key={hotel._id} hotel= {hotel}/>)
                    }
                </main>

                    </InfiniteScroll>
                ) : (<></>)

                // hotels && hotels.map((hotel) => <HotelCard key={hotel._id} hotel= {hotel}/>)
            }
            {
                 isSearchModalOpen && <SearchStayWithDate />
            }
            
             {isFilterModalOpen && <Filter />}

             
        </div>
        
    )
}