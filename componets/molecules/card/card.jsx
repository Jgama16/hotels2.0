

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import styles from './card.module.css'
import { MainButton } from '../../atoms/button/Button';

import { useDispatch, useSelector } from 'react-redux';
import { addReservation } from '@/app/store/reservasSlice';
import Link from 'next/link';

export const  CardHotel = ({hotel, snackbar}) => {
  const dispactch = useDispatch();

  const listHotelsReservation = useSelector(
    (state) => state.reservation.hotelsReservation
  )
    
  const handleClick = () =>{

    localStorage.setItem('selectedHotel', JSON.stringify(hotel));
  };
  const handleReservation = () => {
    const hotelExistentes = listHotelsReservation.some(
      (hotels) => hotels.name === hotel.name
      );
        if (hotelExistentes) {
          alert('El hotel ya esta agregado')
        } else {
          console.log('Hotel agregado');
          dispactch(addReservation(hotel));
          snackbar(true);
        };
    
  }
  return (
    <>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
      className={styles.imageHotel}
        sx={{ height: 140 }}
        image={hotel.photo}
        title={hotel.name}
      />
      <CardContent className={styles.containerInfo}>
        
        <Typography gutterBottom 
        variant="h5" 
        component="div" 
        className={styles.titleHotel}>
          {hotel.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" className={styles.descriptionHotel}>
          {hotel.description}
        </Typography>

        <Typography 
          variant="body2" 
          color="text.secondary" 
          className={styles.priceHotel}>
          {hotel.price}
        </Typography>

        <Typography 
          variant="body2" 
          color="text.secondary" 
          className={styles.coutryCityHotel}>
          Country: {hotel.country}, City: {hotel.city}
        </Typography>

      </CardContent>
      <CardActions className={styles.containerButton}>
        <Link href={`/detail/${hotel.name}`}>
          <MainButton 
          className={styles.buttonCardHotel} 
          onClick={handleClick} 
        >
         Detalles
        </MainButton >
        </Link>
        
        <MainButton 
        className={styles.buttonCardHotel}
          onClick={handleReservation}>
          Reservas
        </MainButton>
        
      </CardActions>
    </Card>
    </>
  );
}
