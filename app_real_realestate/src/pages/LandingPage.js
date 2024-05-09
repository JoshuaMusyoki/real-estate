import React from 'react'

function LandingPage () {
    return (
        <div className="landing-page"
        style={{display:'flex', marginTop:'10%', flexDirection:'column', alignItems:'center'}}>
            <h1>Donation Platform</h1>
            <p>Welcome! Let us know how you can contribute.</p>
        <div className="button-container">
            <button style={{marginBottom:'10%', border:'solid 1px gray', color: 'white', backgroundColor: 'blue', padding: '8px', borderRadius: '8px' }}>
                <a href='/donors'>Donor</a>
            </button> <br/>
            <button 
            style={{border:'solid 1px gray', marginBottom:'10%', color: 'white', backgroundColor: 'orange', padding: '8px', borderRadius: '8px' }}>
                <a href='/victims'>Victim</a>
            </button><br/>
            <button 
            style={{border:'solid 1px gray', color: 'white', backgroundColor: 'green', padding: '8px', borderRadius: '8px' }}>
                <a href='/property-owners'>Property Owner</a>
                </button>
        </div>
       </div>
    );
};

export default LandingPage;