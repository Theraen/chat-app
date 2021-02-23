import React from 'react';
import './Contact.css';
import PropTypes from 'prop-types';

class Contact extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      online: this.props.online,
    }
  }

  render() {
    return (
      <div className="Contact">
            <img className="avatar" src={this.props.avatar} alt={this.props.name} />
            <div>
                <h4 className="name">{this.props.name}</h4>
          <div onClick={event => {
            let newStatus = !this.state.online;
            this.setState({ online: newStatus });
                }} className="status">
            <i className={this.state.online ? "status-online" : "status-offline"}></i>
                    <p className="status-text">{this.state.online ? "Online" : "Offline"}</p>
                </div>
                
            </div>
      </div>
    );
  }
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  online: PropTypes.bool,
};


export default Contact;
