import { Fragment } from "react"
import classes from './Layout.module.css'
import Header from "../header/Header"
import Sidebar from "../sidebar/Sidebar";

const Layout = (props) => {
    return (
        <div>
            <Header/>
            <div className={classes.container}>
                <div className={classes.sidebar}>
                    <Sidebar />
                </div>
                <div className={classes.main}>
                    <main >{props.children}</main>
                </div>
            </div>
        </div>
    )
}

export default Layout;