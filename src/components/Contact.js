import React from 'react';
import './Contact.css';
import PropTypes from 'prop-types';


const avatar = "https://randomuser.me/api/portraits/men/0.jpg";
const name = "Kevin Lynch";
const isOnline = true;

function Contact(props) {
  return (
    <div className="Contact">
          <img className="avatar" src={props.avatar} alt={props.name} />
          <div>
              <h4 className="name">{props.name}</h4>
              <div className="status">
          <i className={props.online ? "status-online" : "status-offline"}></i>
                  <p className="status-text">{props.online ? "Online" : "Offline"}</p>
              </div>
              
          </div>
    </div>
  );
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  online: PropTypes.bool,
};


export default Contact;
