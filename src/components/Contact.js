import './Contact.css';
import PropTypes from 'prop-types';
function Contact(props) {
    const myPropTypes = {
        name: PropTypes.string,
        avatar: PropTypes.string,
        online: PropTypes.bool,
      };
      PropTypes.checkPropTypes(myPropTypes, props, 'online', 'Contact');
      PropTypes.checkPropTypes(myPropTypes, props, 'avatar', 'Contact');
      PropTypes.checkPropTypes(myPropTypes, props, 'name', 'Contact');
    return (
   <div className="Contact">
       <img className="avatar" 
       src={props.avatar}
       alt={props.name}
       />
       <div>
       <p className="name">{props.name}</p>
       <div className="status">
           <div className={
          props.online ? 'status-online' : 'status-offline'
        }></div>
           <p className="status-text">{
          props.online ? 'Online' : 'Offline'
        }</p>
        
           </div>
       </div>
   </div>
    );
  }
  
  export default Contact;
  