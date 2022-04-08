import React, { createContext, useContext, useState } from 'react'

const DEFAULT_VALUE = {
    search: "",
    pageNumber: "1",
    character: {},
    characterList: [],
    loading: true,
}

export const CharacterContext = createContext(DEFAULT_VALUE)

const useCharacterContext = () => useContext(CharacterContext)

const CharacterContextProvider = ({ children }) => {
    const [ search, setSearch ] = useState(DEFAULT_VALUE.search)
    const [ pageNumber, setPageNumber ] = useState(DEFAULT_VALUE.pageNumber)
    const [ characterList, setCharacterList ] = useState(DEFAULT_VALUE.characterList)
    const [ character, setCharacter ] = useState(DEFAULT_VALUE.character)
    const [ loading, setLoading ] = useState(DEFAULT_VALUE.loading)
    

    return (
        <CharacterContext.Provider
            value={{
                search,
                setSearch,
                pageNumber,
                setPageNumber,
                characterList,
                setCharacterList,
                character,
                setCharacter,
                loading,
                setLoading,
            }}
        >
            { children }
        </CharacterContext.Provider>
    )
}
export { CharacterContextProvider, useCharacterContext }
export default CharacterContext

