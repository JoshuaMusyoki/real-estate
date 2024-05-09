import React from "react";
const Header =() =>{
    return(
        <header className="App-header">
            <h1>Donation Platform</h1>
            <nav>
                <a href="/">Home</a>
                <a href="/donors">Donors</a>
                <a href="/victims">Victims</a>
                <a href="/property-owners">Property Owners</a> 
            </nav>
    </header>
    );
};
export default Header;