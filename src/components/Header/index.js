import React from 'react'

            //

const Header = ({ children, headerComponent, headerTitle}) => {
    return (
        <header>
            <div className="header-title-box">
                <h1>{headerTitle}</h1>
                {headerComponent} 
            </div>
        </header>
    )
}
export default Header
