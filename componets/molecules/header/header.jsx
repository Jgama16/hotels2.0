import styles from "./header.module.css"

export const Header = ({
    updateCity, 
    updatePrice, 
    updateSizes, 
    changeDateFrom,
    changeDateTo,
    }) =>{
        const fecha = new Date().setHours(0,0,0)
        const today = new Date(fecha).toISOString().split("T")[0];
    return ( 
    <>
        <header className={styles.header}>
        <h1 className={styles.header__title}>Book It </h1>
        <div className={styles.filtersBox}>

            <select 
                    onChange={(e)=> updateCity(e.target.value)}
                    name="" 
                    id=""      
                    className={`${styles.filtersBox__country} ${styles.input}`} >
                <option value="all">All country</option>
                <option value="argentina">Argentina</option>
                <option value="brasil">Brazil</option>
                <option value="chile">Chile</option>
                <option value="uruguay">Uruguay</option>
            </select>

            <input
            min = {today}
             onChange={(e)=> changeDateFrom(e.target.value)}
            type="date" className={`${styles.filtersBox__input} ${styles.input}`}
            />

            <input
            min ={today}
             onChange={(e)=> changeDateTo(e.target.value)}
            type="date" className={`${styles.filtersBox__input} ${styles.input}`}
            />
            

            <select 
            onChange={(e)=>updatePrice(e.target.value)}
            name="" 
            id="" 
            className={`${styles.filtersBox__input} ${styles.input}`} >

                <option value="all">All Prices</option>
                <option value="1">$</option>
                <option value="2">$$</option>
                <option value="3">$$$</option>
                <option value="4">$$$$</option>
            </select>

            <select 
            onChange={(e)=>updateSizes(e.target.value)}
            name="" 
            id="" 
            className={`${styles.filtersBox__input} ${styles.input}`} >

                <option value="all">All sizes</option>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
            </select>
            <button className={styles.filtersBox__btn}>Clear</button>
            
            {/* <h2 className={styles.header__subtitle}>We have hound for  you ...</h2> */}
        </div>
        </header>
    </>
    );
};