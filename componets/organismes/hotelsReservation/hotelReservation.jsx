'use client';
import { useSelector } from "react-redux";
import { CardHotel } from "../../molecules/card/card"

export const HotelsReservation = () => {
    const listHotelsReservation = useSelector(
        (state) => state.reservation.hotelsReservation
      )
  return <div> 
    {listHotelsReservation.map((hotel,index) =>(
     <CardHotel key={index} hotel={hotel}/>
  ))}
  </div>
}   
