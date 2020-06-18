import React, {useState} from 'react';
import style from './Sidebar.module.css';
import Modal from "../../utls/modal/Modal";
import Forum from '../../utls/forum/Forum';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Sidebar = (props) => {

    /* const [show, setshow] = useState(false);

    const open = () => {
        setshow(true)
    };


    const close = () => {
        setshow(false)
    }; */


    const arrowIcon = [
        'fas', 'arrow-right'
    ];

    const minusIcon = [
        'fas', 'minus-circle'
    ];

    const plusIcon = [
        'fas', 'plus-circle'
    ];
    
    return (
        <div className={style.sidebar}>
         <h2>Admine Page</h2>
            <div className={style.container}>
                <Forum icon = {plusIcon} text = {"Add Student"} className={style.f} />
                <Forum icon = {plusIcon} text = {"Add Book"} className={style.f} />
                <Forum icon = {minusIcon} text = {"Remove Student"} className={style.f} />
                <Forum icon = {minusIcon} text = {"Remove Book"} className={style.f} />
            </div>
        <Forum icon = {minusIcon} text = {"Remove Student"} className={style.f} />
        </div>


    )
};


export default Sidebar;