import { Button } from 'bootstrap';
import React from 'react'

const LandingPage =()=>{
    const handleButtonClick = (userType) =>{
        console.log(`User selected: ${userType}`);
    };
    return (
        <div className="landing-page" 
        style={{display:'flex', flexDirection:'column', alignItems:'center', marginTop:"10%"}}>
            <h1>Donation Platform</h1>
            <p>Welcome! Let us know how you can contribute.</p>
        <div className="button-container"
        style={{padding:'2%', alignItems:'center'}}
        >
            <button 
            style={{border: 'solid 1px gray', color: 'white',padding: '8px', backgroundColor: 'green', borderRadius: '8px'}}
            onClick={() => handleButtonClick('Donor')}>Donor</button> 
            <br/>

            <button
            style={{border: 'solid 1px gray', color: 'white', padding: '8px', backgroundColor: 'maroon', borderRadius: '8px'}}
             onClick={() => handleButtonClick('Victim')}>Victim</button><br/>
            <button 
            style={{border: 'solid 1px gray', color: 'white', padding: '8px', backgroundColor: 'maroon', borderRadius: '8px'}}
            onClick={() => handleButtonClick('Property Owner')}>Property Owner</button>
        </div>
       </div>
    );
};

export default LandingPage;