import './Contact.css';
function Contact() {
    return (
   <div className="Contact">
       <img className="avatar" src="https://randomuser.me/api/portraits/women/34.jpg"/>
       <div>
       <p className="name">Sara Ramos</p>
       <div className="status">
           <div className="status-online"></div>
           <p className="status-text">online</p>
           </div>
       </div>
   </div>
    );
  }
  
  export default Contact;
  