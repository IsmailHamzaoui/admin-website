/* import React from 'react';
import style from './Listitem.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Listitem = (props) => {

    return(
        <li onClick={props.onClick}>
            <div className={style.item}>
                <a href={props.url}>
                    <FontAwesomeIcon  icon={props.icon}  size="lg"  fixedWidth className={style.icon}/>
                    {props.value}
                </a>
            </div>
        </li>
    )
};

export default Listitem; */