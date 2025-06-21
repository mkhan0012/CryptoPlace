import React, { useContext } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import arrow_icon from '../../assets/arrow_icon.png'
import { CoinContext } from '../../context/CoinContext'
import { Link } from 'react-router-dom'

const Navbar = () => {
    // Destructure setCurrency from CoinContext
    const { setCurrency } = useContext(CoinContext)

    // Function to handle currency change
    const currencyHandler = (event) => {
        switch (event.target.value) {
            case "usd": {
                setCurrency({ name: "usd", symbol: "$" });
                break;
            }
            case "eur": {
                setCurrency({ name: "eur", symbol: "€" });
                break;
            }
            case "inr": {
                setCurrency({ name: "inr", symbol: "₹" });
                break;
            }
            default: {
                setCurrency({ name: "usd", symbol: "$" });
                break;
            }
        }
    }

    return (
        <div className='navbar'>
            {/* Logo linking to home */}
            <Link to={'/'}>
                <img src={logo} alt="" className='logo' />
            </Link>
            {/* Navigation links */}
            <ul>
                <Link to={'/'}> <li>Home</li></Link>
                <Link to={'/features'}> <li>Features</li></Link>
                <Link to={'/pricing'}> <li>Pricing</li></Link>
                <Link to={'/blog'}> <li>Blog</li></Link>
            </ul>
            <div className="nav-right">
                {/* Currency selection dropdown */}
                <select onChange={currencyHandler}>
                    <option value="usd">USD</option>
                    <option value="eur">EUR</option>
                    <option value="inr">INR</option>
                </select>
                {/* Sign up button */}
                <Link to="/signup">
                    <button>Sign up <img src={arrow_icon} alt="" /></button>
                </Link>
            </div>
        </div>
    )
}

export default Navbar