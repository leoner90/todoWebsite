
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse,faCalendarWeek,faCreditCard,faCakeCandles,faBagShopping } from '@fortawesome/free-solid-svg-icons'

function NavBar () {
    return (
        <div className='NavBarWrapper'>
                
                <NavLink 
                    to={`${process.env.PUBLIC_URL}/`} 
                    onClick = {()=> { window.scrollTo(0, 0);}}
                >
                    <FontAwesomeIcon icon={faHouse} className="faHouse" />   
                    DAY PLANNER 
                 </NavLink>
                <NavLink 
                    to={`${process.env.PUBLIC_URL}/weekplaner`}
                    onClick = {()=> {  window.scrollTo(0, 0);}}
                > 
                    <FontAwesomeIcon icon={faCalendarWeek} className="faCalendarWeek" />   
                    LONG PLANNER
                </NavLink>
                <NavLink 
                    to={`${process.env.PUBLIC_URL}/Debts`}
                    onClick = {()=> {  window.scrollTo(0, 0);}}
                > 
                    <FontAwesomeIcon icon={faCreditCard} className="faCreditCard" />   
                    DEBTS
                </NavLink>
                <NavLink 
                    to={`${process.env.PUBLIC_URL}/Birthdays`}
                    onClick = {()=> {  window.scrollTo(0, 0);}}
                > 
                    <FontAwesomeIcon icon={faCakeCandles} className="faCakeCandles" />   
                     BIRTHDAYS
                </NavLink>
                <NavLink 
                    to={`${process.env.PUBLIC_URL}/Buyings`}
                    onClick = {()=> {  window.scrollTo(0, 0);}}
                > 
                    <FontAwesomeIcon icon={faBagShopping} className="faBagShopping" />   
                    BUYINGS
                </NavLink>
        </div>
    )
}

export default NavBar;