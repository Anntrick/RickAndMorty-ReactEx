import "./Header.scss"
import React from "react"
import { NavLink } from "react-router-dom"
import { useContext } from 'react'
import { userContext } from '../../Context/userContext';

export const Header = () => {
    const user = useContext(userContext)
    return (
        <div className="Header">         
        {user.name}
            <NavLink to="/">Home</NavLink>
            <NavLink to="/characters">Personajes</NavLink>
            
        </div>
    );
}
