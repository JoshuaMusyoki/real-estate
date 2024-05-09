import React from "react";

const Footer = () =>{
    return(
        <footer style={{ position: 'fixed', bottom: 0, left: 0, width: '100%', padding: '1rem', backgroundColor: '#f0f0f0'}}>
            <p>&copy; {new Date().getFullYear}Donation Platform</p>
        </footer>
    );
};
export default Footer;