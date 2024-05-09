
const Header =() =>{
    return(
        <header style={{position: 'fixed', top: 0, left: 0, width: '100%', padding: '1rem', backgroundColor: '#f0f0f0' }}>
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


