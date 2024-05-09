import logo from "../iconz/logo.png"
import wallet from "../iconz/wallet.png"
const Header = () =>{
    return(
        <header style={{position: 'fixed', top: 0, left: 0, width: '100%', padding: '1rem', backgroundColor: '#f0f0f8', display: 'flex', gap: '60%' }}>
            <h1 style={{width: '400px'}} ><img style={{float: 'left', marginRight: '10px'}} src={logo} alt="logo" />Donation Platform</h1>
            <nav style={{display: 'flex', justifyContent: 'space-around', width: '800px', padding: '5px'}}>
                <button><img style={{float: 'right', marginLeft: '10px'}} src={wallet} alt="logo" />Connect</button>
                <a href="/donors">Donors</a>
                <a href="/victims">Victims</a>
                <a href="/property-owners">Property Owners</a> 
            </nav>
    </header>
    );
};
export default Header;


