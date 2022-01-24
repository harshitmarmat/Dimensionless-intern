import classes from './Header.module.css'
import friends from '../../assets/images/friends.png'
import search from '../../assets/images/search.png'
import notification from '../../assets/images/bell.png'
import setting from '../../assets/images/setting.png'
import navuser from '../../assets/images/navuser.png'
import logo from '../../assets/images/logo.png'


const Header = () => {
    return (
        <header>
            <div className={classes.icon}>
                <img src={logo}/>
            </div>
            <div className={classes.list}>
                <ul>
                    <li><img src={search}/></li>
                    <li><img src={friends}/></li>
                    <li><img src={notification}/></li>
                    <li><img src={setting}/></li>
                    <li><img src={navuser}/><span>demo@demois.com</span></li>
                </ul>
            </div>
        </header>
    )
}

export default Header;