import React, {useState} from 'react';
import style from './Navbar.module.css';
import BasicTextFields from '../../utls/input/textfield/basictextfields'
import SimpleSelect from '../../utls/input/sorter/SimpleSelect'

const Navbar = (props) => {

    return (
        <div className={style.navbar}>

            <div className={style.container}>
                <h2>
                    {props.text}
                </h2>
                <BasicTextFields />
                <SimpleSelect />
            </div>
        </div>
)
};

export default Navbar;