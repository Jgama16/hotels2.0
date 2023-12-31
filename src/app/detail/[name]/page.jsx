'use client'
import React, { useEffect, useState, useContext } from 'react'
import { MainButton } from '../../../../componets/atoms/button/Button'
import { AppContext } from '@/app/store/CurrentProvider'
import styles from "./page.module.css"


const Detail = () => {
    const [selectedHotel, setSelecteddHotel] = useState({
      name: "", 
      description: "", 
      photo: "", 
      country:"",
      city:"",
    });

      const{setDetailPage} = useContext(AppContext);

      useEffect(()=> {
      const storedHotel = localStorage.getItem('selectedHotel')
      if (storedHotel) {
          setSelecteddHotel(JSON.parse(storedHotel))
      }
      setDetailPage;
    }, []);

    const {name, photo, description, city, country} = selectedHotel;
      console.log(selectedHotel);
    return (
      <div className={styles.container}>
        <img src={photo} width={300} height={300} className={styles.detailImage}></img>
          <h2>el nombre es {name}</h2>
          <h2 className={styles.text}>{description} <br/>
          City:{city} <br />
          Country :{country}</h2>
          <MainButton className={styles.buttonCardHotel}>Reservar</MainButton>
          <MainButton className={styles.buttonSecondary}>Favoritos</MainButton>
      </div>
    )
}

export default Detail

