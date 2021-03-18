import React from 'react';
import {Link} from 'react-router-dom';
const SearchResult = (props) =>{
    const searchItems  = props.searchArray.map((item) =>
        <div><Link to={'/country/'+ item._id} className='search-result__item'>
            { props.langValue === 'EN' ?
                item.lang.EN.country :
                props.langValue === 'RU' ?
                    item.lang.RU.country :
                    props.langValue === 'DE' ?
                        item.lang.DE.country : ''
            }
        </Link></div>
    );


    return(
        <div className='search-result'>
            <div className='search-result__title'>
                { props.langValue === 'EN' ?
                    'Search results' :
                    props.langValue === 'RU' ?
                        'Результаты поиска' :
                        props.langValue === 'DE' ?
                            'Suchergebnisse' : ''
                }
            </div>
            {props.searchArray.length != 0?
                searchItems :
                <i>

                    { props.langValue === 'EN' ?
                        'Nothing found' :
                        props.langValue === 'RU' ?
                            'Результаты поиска' :
                            props.langValue === 'DE' ?
                                'Suchergebnisse' : ''
                    }
                </i>
            }

        </div>
    )
}
export default SearchResult;