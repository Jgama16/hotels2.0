"use client";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import styles from "./Menus.module.css";
import Link from 'next/link';
import { useContext } from 'react';
import { AppContext } from '@/app/store/CurrentProvider';
// import MenuIcon from '@mui/icons-material/Menu';

export const Menu = () => {

  const {currentPage} = useContext(AppContext);

  const title = (current) => {
    switch (current){
      case "Detail":
        return "detalle del Hotel";
      case "Home":
        return "Buscar Hotel";
      default:
        return "Bienvenidos";
    }
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className={styles.containerMenu}>
        <Toolbar variat="dense" className={styles.contentOptionMenu}>
            {/* <MenuIcon /> */}
          <h3>{currentPage}</h3>
          
          <Link href={'/'}>
            <Typography variant="h6" 
              component="div" 
              className={styles.labelMenu}>
                Home 
            </Typography>
          </Link>

          <Link href={('/reservas')}>
            <Typography 
              variant="h6"  
              component="div" 
              className={styles.labelMenu}>
              Reservas
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}