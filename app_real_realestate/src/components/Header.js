
const Header = () =>{
    return(
        <header style={{position: 'fixed', top: 0, left: 0, width: '100%', padding: '1rem', backgroundColor: '#f0f0f0', display: 'flex', gap: '60%' }}>
            <h1 style={{width: '200px'}} >Donation Platform</h1>
            <nav style={{display: 'flex', justifyContent: 'space-around', width: '500px'}}>
                <a style={{}} href="/">Connect Wallet</a>
                <a href="/donors">Donors</a>
                <a href="/victims">Victims</a>
                <a href="/property-owners">Property Owners</a> 
            </nav>
    </header>
    );
};
export default Header;


