'use client';
import { CardsFilterTemplate } from "../../componets/tamplates/cardsFilter-template/CardsFiltersTemplate";
import { hotelData } from "../../services/getHotelsServices";


export default async function Home() {

  const getDataHotels = await hotelData();
  return (
    <>
      <CardsFilterTemplate getDataHotels ={getDataHotels}/>
     </>
  )
}