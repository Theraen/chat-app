import React from 'react';
import './Contact.css';


const avatar = "https://randomuser.me/api/portraits/men/0.jpg";
const name = "Kevin Lynch";
const isOnline = true;

function Contact() {
  return (
    <div className="Contact">
          <img className="avatar" src={avatar} alt={name} />
          <div>
              <h4 className="name">{name}</h4>
              <div className="status">
                  <i className="status-online"></i>
                  <p className="status-text">{isOnline ? "En ligne" : "Hors ligne"}</p>
              </div>
              
          </div>
    </div>
  );
}

export default Contact;
