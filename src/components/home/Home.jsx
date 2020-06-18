import React, {useEffect, useState} from 'react';
import style from './Home.module.css';
import Table from '../../utls/table/Table'


const Home = (props) => {

    const [word, setWord] = useState("");
    const [text, setText] = useState("hamza above the tree");

    const timer = () => {
        fetch('http://192.168.1.12:5560')
        .then(response => response.json())
        .then(data => setText(data));
        setTimeout(() => {

            console.log("test inside fetch" + text)
        }, 5000);
        console.log("test after fetch")
        return () => clearTimeout(timer);
    };

    /*
    useEffect(() => {
        const connection = new WebSocket('ws://192.168.1.13:5560');
        connection.onopen = () => {
            console.log("another thing")
            // on connecting, do nothing but log it to the console
            console.log('connected')
        }
        console.log("something")
        connection.onmessage = evt => {
            // listen to data sent from the websocket server
            const message = JSON.parse(evt.data);
            console.log("something" + message)
            setText(message);
        }

    }, []);
    */


    return (
        <div className={style.home}>
            <p>
                {props.text}
                <input type="text" onChange={event => setWord(event.target.value)} />
                <button onClick={timer}>Send</button>
            </p>
            <Table />
        </div>

        );

};

export default Home;