import React, { useState } from "react";
import Login from "./Login";

export default function AdminPanel(props) {
    let accounts = props.accounts;
    const [devlogs, setDevlogs] = useState([]);

    function AddDevlog() {
        let devlog = {
            date: new Date().getFullYear() + "-" + (new Date().getMonth() + 1) + "-" + new Date().getDate(),
            title: document.getElementById("title").value,
            content: document.getElementById("content").value
        };
        setDevlogs(d => [...d, devlog]);
        document.getElementById("title").value = " ";
        document.getElementById("content").value = " ";
    }

    const renderAccounts = () => {
        return accounts.map((account) => (
            <div key={account.id}>
                <h2>{account.username}</h2>
                <p>{account.role}</p>
            </div>
        ));
    };

    const renderDevlogHistory = () => {
        return devlogs.map((devlog, index) => (
            <div key={index}>
                <h2>{devlog.title}</h2>
                <p>{devlog.date}</p>
                <p>{devlog.content}</p>
            </div>
        ));
    };

    if (props.isLoggedIn === false) {
        return <Login />;
    }

    return (
        <div>
            <h1>Admin Panel</h1>
            <h2>Accounts</h2>
            {renderAccounts()}
            <h2>Add Devlog</h2>
            <input type="text" id="title" placeholder="Title" />
            <textarea id="content" placeholder="Content"></textarea>
            <button onClick={AddDevlog}>Add Devlog</button>
            <h2>Devlog History</h2>
            {renderDevlogHistory()}
        </div>
    );
}