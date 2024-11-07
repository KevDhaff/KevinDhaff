import React, { useState } from "react";

export default function AdminPanel(props) {
  let accounts = props.accounts;
  const [devlogs, setDevlogs] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function AddDevlog() {
    let devlog = {
      date: new Date().getFullYear() + "-" + (new Date().getMonth() + 1) + "-" + new Date().getDate(),
      title: title,
      content: content
    };
    setDevlogs(d => [...d, devlog]);
    setTitle("");
    setContent("");
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
        <p>{devlog.content.split('\n').map((line, i) => (
          <span key={i}>{line}<br /></span>
        ))}</p>
      </div>
    ));
  };

  if (props.isLoggedIn === false) {
    return <div>Login to access the admin panel</div>;
  }

  return (
    <div>
      <h1>Admin Panel</h1>
      <h2>Accounts</h2>
      {renderAccounts()}
      <h2>Add Devlog</h2>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
      <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Content"></textarea>
      <button className="devbutton" onClick={AddDevlog}>Add Devlog</button>
      <h2>Devlog History</h2>
      {renderDevlogHistory()}
    </div>
  );
}