export const hotelRooms = (rooms)=>{
    if (rooms <=10) {
        return'smal'
    }else if(rooms<=30){
        return 'medium'
    }else {
        return 'large'
    }
}