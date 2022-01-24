import { useState } from 'react';
import classes from './Sidebar.module.css';
import user from '../../assets/images/user.png'


const Sidebar = () => {
    const [showList, setShowList] = useState(false);

    const showHandler = () => {
        setShowList((prevState)=>{
            return !prevState;
        })
    }

    return (
        <div className={classes.container}>
            <div className={classes.profile}>
                <img src={user} />
                <p>demo@demios.com</p>
                <p><span style={{'color':'#817d7d'}}>Your Tier :</span><span style={{'color':'blue'}}> Premium</span></p>
            </div>
            <div className={classes.list}>
                <ul>
                    <li>Reports
                        <ul>
                            <li style={{'color' :'rgb(91, 91, 236)'}}>
                                Dashboard
                            </li>
                            <li>
                                Dashboard Alternative
                            </li>
                        </ul>
                    </li>
                    <li>Management
                        <ul>
                            <li onClick={showHandler}>
                                Customers
                                <select disabled/>
                                    {showList && (<ul>
                                        <li>
                                            List Customers
                                        </li>
                                        <li>
                                            View Customers
                                        </li>
                                    </ul>)}
                            </li>
                            <li>
                                Products
                            </li>
                            <li>
                                Orders
                            </li>
                            <li>
                                Invoices
                            </li>
                        </ul>
                    </li>
                    <li>Applications
                        <ul>
                            <li>
                                Projects Platform
                            </li>
                            <li>
                                Social Platform
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar;