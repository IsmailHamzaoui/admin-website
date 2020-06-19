import React, {Component, useState} from 'react';
import style from "./Modal.module.css";


class Modal extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={style.container}>
                <div className={style.cover}>
                    <div className={style.modal}>
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
};

export default Modal;