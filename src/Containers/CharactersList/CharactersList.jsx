import React from "react"
import './CharactersList.scss'
import { useState, useEffect, createContext } from "react";
import { RickMortyService } from "../../services/RickMortyService";
import CharacterCard from "../../Components/CharacterCard/CharacterCard";
export const UserContext = createContext()

export const CharactersList = () => {

    const [ characters, setCharacters ] = useState([])
    const value = React.useContext(UserContext);  

    useEffect(() => {
        getAllCharacters()
    }, [])

    const getAllCharacters = async () => {
        try {
            const resp = await RickMortyService.getAllCharacters()
            setCharacters(resp.data.results)
        } catch (err) {
            console.log(err)
        }
    }

    const ejemploEmit = (dato) => {
        console.log(dato)
    }

    return (

        <div className="CharactersList">
            <h1>CharactersList</h1>
            <h1>{value}</h1> 


            { characters.length === 0 && 
                <h1>Loading...</h1>
            }
        
            { characters.length > 0 &&
                characters.map((char) => (
                    <CharacterCard
                        func={ejemploEmit}
                      data={char}
                      key={char.id}
                    />
                ))
            }
        </div>
    )
}
