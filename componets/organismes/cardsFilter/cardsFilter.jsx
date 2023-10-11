'use client'

import { useContext, useEffect, useState } from "react"
// import { hotelData } from "../../../services/getHotelsServices"
import { CardHotel } from "../../molecules/card/card"
import { Header } from "../../molecules/header/header"
import styles from './cardsFilter.module.css'
import { hotelRooms } from "@/utils/helper"
import { Alert, AlertTitle, Snackbar } from "@mui/material"
import { AppContext } from "@/app/store/CurrentProvider"

export const CardsFilter = ({getDataHotels}) => {
    const [selectedCountry, setSelectedCountry] = useState ("all");
    const [selectedPrice, setSelectedPrice] = useState('all');
    const [selectedSizes, setSelectedSizes] = useState('all');
    const [dateFrom, setDateFrom] = useState("all")
    const [dateTo, setDateTo] = useState("all")
    const [filterHotels, setFilterHotels] = useState([]);
    const [setshowSnackbar, setShowSnackbar] = useState(false);
    const {setHomePage} = useContext(AppContext);

    useEffect(()=>{
        setHomePage();
    }, []);
    // const [hotelsData, setHotelsData] = useState([]);
    

    // const fetchHotels = async() => {
    //     try {
    //         const data = await hotelData();
    //         setHotelsData(data);
    //     } catch (error) {
    //         console.error("error en los hoteles")
    //     }
        
    // };
    // useEffect (()=> {
    //     fetchHotels();
    // }, []);


    useEffect(()=>{
        const dateFromH = new Date(dateFrom);
        const dateToH = new Date(dateTo);
        const todayDate = new Date().setHours(0,0,0,0);
        const dateCheckInLocal = new Date(
            dateFromH.getTime()+ dateFromH.getTimezoneOffset() * 60000
        );
        const dateCheckOutLocal = new Date (
            dateToH.getTime() + dateToH.getTimezoneOffset() * 60000 
        );
        

        const filteredHotels = getDataHotels.filter((hotel) => {
            const availabilityHotels = todayDate + hotel.availabilityFrom;
            const availabilityDays = availabilityHotels + hotel.availabilityTo;

            
            const isCountryMatch = selectedCountry === 'all' || selectedCountry.toLocaleLowerCase() === hotel.country.toLocaleLowerCase()
            
            const isPriceMatch = selectedPrice === 'all' || selectedPrice.toString() === hotel.price.toString()

            const isSizeMatch = selectedSizes === 'all' || selectedSizes === hotelRooms(hotel.rooms)
            
            const availability = (dateFrom === 'all' && dateTo === 'all') || ( dateCheckInLocal.getTime()>=availabilityHotels && dateCheckOutLocal.getTime()  <= availabilityDays);

            return isCountryMatch && isPriceMatch && isSizeMatch && availability;
        });
        setFilterHotels(filteredHotels);
    }, [
        selectedCountry,
        selectedPrice,
        selectedSizes,
        dateFrom,
        dateTo,
        
    ])

    // const filterHotels = () => {

    //     const dateFromH = new Date(dateFrom);
    //     const dateToH = new Date(dateTo);
    //     const todayDate = new Date().setHours(0,0,0,0);
    //     const dateCheckInLocal = new Date(
    //         dateFromH.getTime()+ dateFromH.getTimezoneOffset() * 60000
    //     );
    //     const dateCheckOutLocal = new Date (
    //         dateToH.getTime() + dateToH.getTimezoneOffset() * 60000 
    //     );
        

    //     const filteredHotels = getDataHotels.filter((hotel) => {
    //         const availabilityHotels = todayDate + hotel.availabilityFrom;
    //         const availabilityDays = availabilityHotels + hotel.availabilityTo;

            
    //         const isCountryMatch = selectedCountry === 'all' || selectedCountry.toLocaleLowerCase() === hotel.country.toLocaleLowerCase()
            
    //         const isPriceMatch = selectedPrice === 'all' || selectedPrice.toString() === hotel.price.toString()

    //         const isSizeMatch = selectedSizes === 'all' || selectedSizes === hotelRooms(hotel.rooms)
            
    //         const availability = (dateFrom === 'all' && dateTo === 'all') || ( dateCheckInLocal.getTime()>=availabilityHotels && dateCheckOutLocal.getTime()  <= availabilityDays);

    //         return isCountryMatch && isPriceMatch && isSizeMatch && availability;
    //     })

    //         return filteredHotels
    //     };
        

        
    return(
        <>
            <Header 
            updateCity ={setSelectedCountry}
            updatePrice ={setSelectedPrice}
            updateSizes ={setSelectedSizes}
            changeDateFrom= {setDateFrom}
            changeDateTo= {setDateTo}
            />
            
            {filterHotels.length > 0 ? (
                <div className={styles.cardsContainer}>
                {filterHotels.map((hotel, index) => (
                   <CardHotel key ={index} hotel={hotel} snackbar={setShowSnackbar}/>
                ))}
           </div>
            ) : (
                <Alert severity="info">
                <AlertTitle>Info</AlertTitle>
                No se a Encontrado el Resultado para Su Busqueda— 
                <strong>Pr favor utilice otros filtros gracias!</strong>
                </Alert>
            )}
            <Snackbar
            open={setshowSnackbar}
            autoHideDuration={2000}
            onClose={setShowSnackbar}
            >
                <Alert  severity="success" sx={{width: "300%"}}>
                    Hotel agregado correctamente
                </Alert>
        </Snackbar>
        </>
    );
};