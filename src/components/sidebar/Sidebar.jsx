import React from 'react'
import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import TimelineIcon from '@mui/icons-material/Timeline';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PublicIcon from '@mui/icons-material/Public';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import {Link} from "react-router-dom"
function Sidebar() {
    return (
        <>
            <div className="sidebar">
                <div className="top">
                    <span className='logo'>Logo</span>
                    </div>
                <div className="center">
                    <ul>
                        <Link to="/" style={{textDecoration:"none", color:"white"}}>
                        <li className='icon'>
                            <DashboardIcon/>
                        </li>
                        </Link>
                        <Link to="/users" style={{textDecoration:"none", color:"white"}}>
                        <li className='icon'>
                            <PersonAddIcon/>
                        </li>
                        </Link>
                        <Link to="/ship" style={{textDecoration:"none", color:"white"}}>
                        <li className='icon'>
                            <LocalShippingIcon />
                        </li>
                        </Link>
                        <li className='icon'>
                            <TimelineIcon />
                        </li>
                        <li className='icon'>
                            <LocalShippingIcon />
                        </li>
                        <li className='icon'>
                        <LocalShippingIcon />
                        </li>
                        <li className='icon'>
                            < AccountBalanceIcon/>
                        </li>
                        <li className='icon'>
                            <PublicIcon />
                        </li>
                        <li className='icon'>
                         <SettingsSuggestIcon/>
                        </li>
                    </ul>
                </div>
                <div className="bottom">V2</div>

            </div>
        </>
    ) 
}

export default Sidebar