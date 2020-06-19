import React, {useState} from 'react';
import BasicTextFields from "../../utls/input/textfield/basictextfields";
import style from './Sidebar.module.css';
import TextField from "@material-ui/core/TextField";
import {Label} from "@material-ui/icons";
import Button from "@material-ui/core/Button";

const AddStudent = (props) => {

    return(
        <div className={style.addStudent}>
            <h3>Add Student</h3>
            <BasicTextFields label="First Name" />
            <BasicTextFields label="Last Name" />
            <BasicTextFields label="Social Security Number" />
            <BasicTextFields label="Email" />
            <Button variant="contained" color="primary">
                Primary
            </Button>
        </div>
    )
}

export default AddStudent;