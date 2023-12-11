import { useEffect, useState } from 'react';
import './SingleHotel.css'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FinalPrice, HotelDetails, HotelImages, Navbar } from "../../components"
import './SingleHotel.css'

export const SingleHotel = () => {
const {id} = useParams();
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

const {name, state} = singleHotel;

    return (<>
        <Navbar/>
       
        <main className='single-hotel-page'>
            <p className='hotel-name-add'>{name}, {state}</p>
            <HotelImages singleHotel={singleHotel}/>
            <div className='d-flex'>
                <HotelDetails singleHotel= {singleHotel}/>
                <FinalPrice singleHotel= {singleHotel}/>
            </div>

        </main>

        
    </>);
};