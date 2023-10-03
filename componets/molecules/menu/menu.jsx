import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import styles from "./Menus.module.css";
// import MenuIcon from '@mui/icons-material/Menu';

export const Menu = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className={styles.containerMenu}>
        <Toolbar variat="dense" className={styles.contentOptionMenu}>
            {/* <MenuIcon /> */}
          
          <Typography variant="h6" color="inherit" component="div">
            Home 
          </Typography>
          <Typography variant="h6" color="inherit" component="div">
            Reservas
          </Typography>
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}