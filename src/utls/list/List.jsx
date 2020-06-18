/* import React from 'react';
import style from './List.module.css';
import Listitem from './listitem/Listitem';

const List = (props) => {

    return(
        <ul>
            {props.items.map((item, i) =>{
                return<Listitem key={i} url={item.url} value={item.value} icon={props.icon} onClick = {props.open} />
            })}
        </ul>
    )
};

export default List; */