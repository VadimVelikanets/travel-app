import React from 'react';
const SearchResult = (props) =>{
    const searchItems  = props.searchArray.map((item) =>
     <div><a href={'/country/',item._id} className='search-result__item'>{item.lang.EN.country}</a></div>
     );


    return(
        <div className='search-result'>
            <div className='search-result__title'>Search results:</div>
            {props.searchArray.length != 0?
                searchItems :
                <i>Nothing found</i>
            }

        </div>
    )
}
export default SearchResult;