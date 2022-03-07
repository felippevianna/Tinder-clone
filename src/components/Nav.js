import logo from '../images/Tinder-Emblema2.png'
import logo2 from '../images/tinder_logo_white.png'
const Nav = ( { minimal, authToken }) => {
    return (
        <nav>
            <div className= "logo-container">
                <img alt="logo" className="logo" src={minimal ? logo : logo2}/>
            </div>

            {!authToken && !minimal && <button className="nav-button">Log in</button>}
        </nav>
    )
}

export default Nav