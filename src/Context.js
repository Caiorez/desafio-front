import React, { createContext } from 'react'

const Context = createContext({})

const charContext = () => {
    return (
        <Context.Provider value={data} >

        </Context.Provider>
    )
}

export default charContext;