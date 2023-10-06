"use client"
import { createContext, useState } from "react";

export const AppContext = createContext()

export const CurrentPageProvider = ({children}) =>{
    const [currentPage, setCurrentPage]= useState ('Home')

    const serDetailPage = () =>{
        setCurrentPage('Detail')
    }
    const setHomePage = () => {
        setCurrentPage('Home')
    }

    return(
        <AppContext.Provider value={{currentPage, serDetailPage, setHomePage}}>
            {children}
        </AppContext.Provider>
    )
}