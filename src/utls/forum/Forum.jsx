import React from 'react';
import style from './Forum.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Forum = (props) => {

return (
    <div className={style.forum}>
        <FontAwesomeIcon  icon={props.icon}  size="med"  fixedWidth className={style.icon} />
        <button>
            {props.text}
        </button>
    </div>
    
)
};


export default Forum;