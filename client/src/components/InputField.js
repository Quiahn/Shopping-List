import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react';

export default function InputField() {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const onButtonClick = (event) => {
        event.preventDefault()
        axios.post("http://localhost:3001/create-user", { username, password })
            .then((res) => {
                console.log(res.data)
            })
    }
    return (
        <div>
            <form id="user-form">
                <input type="text" placeholder="User Name" onChange={(event) => setUsername(event.target.value)} />
                <input type="password" placeholder="Password" onChange={(event) => setPassword(event.target.value)} />
                <button className="send-post" onClick={onButtonClick}>Click to send POST</button>
            </form>
            <h3>{username}</h3>
            <h3>{password}</h3>
        </div>
    )
}
