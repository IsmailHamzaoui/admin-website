import React, {useState} from 'react';
import style from './Sidebar.module.css';
import Modal from "../../utls/modal/Modal";
import Forum from '../../utls/forum/Forum';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AddStudent from "./AddStudent";

const Sidebar = (props) => {

    const [show, setShow] = useState(false);

    const minusIcon = [
        'fas', 'minus-circle'
    ];

    const plusIcon = [
        'fas', 'plus-circle'
    ];

    const handleShow = () => {
        setShow(s => !s);
    }
    console.log(show);
    return (
        <>
            <div className={style.sidebar}>
             <h2>Admine Page</h2>
                <div className={style.container}>
                    <Forum icon = {plusIcon} text = {"Add Student"} className={style.f} onClick={handleShow} />
                    <Forum icon = {plusIcon} text = {"Add Book"} className={style.f} onClick={handleShow} />
                    <Forum icon = {minusIcon} text = {"Remove Student"} className={style.f} onClick={handleShow} />
                    <Forum icon = {minusIcon} text = {"Remove Book"} className={style.f} onClick={handleShow} />
                </div>
            <Forum icon = {minusIcon} text = {"Remove Student"} className={style.f} />
            </div>
            {
                show && (
                    <Modal close={handleShow}>
                        <AddStudent />
                    </Modal>
                )
            }
        </>
    )
};


export default Sidebar;