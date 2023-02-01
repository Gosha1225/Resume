import React from 'react';
import classes from './classes.module.css'
import Header from "../../Hok/Header/Header";
import {useLanguage} from "../../../Providers/LanguageProvider";

const MyWork = () => {
    const {l} = useLanguage();
    const {title} = l.myWork
    return (
        <div className={classes.root}>
            <header>
                <Header title={title}/>
            </header>
            <div className={classes.content}>

            </div>
        </div>
    );
};

export default MyWork;