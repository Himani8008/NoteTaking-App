import React from 'react';

const Header = ({handleToggleDarkMode}) => {
    return(
        <div className = "header">
            <h1>Notes</h1>
            <button onClick={()=> handleToggleDarkMode(
            (previousDarkMode) => !previousDarkMode 
            )} 
            className='save toggle'>&#x263C;/&#x263d;</button>
        </div>
    )
}

export default Header;