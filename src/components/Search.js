import React from 'react';

const Search = ({handleSearchNote}) => {
    return <div className='search'>
        <span className='search-icon'>&#x1F50D;</span>
        <input onChange={(event)=>
        handleSearchNote(event.target.value)} 
        type='text' placeholder='Type to search...' />
    </div>;
};

export default Search;