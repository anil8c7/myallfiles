import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import "./users.scss"
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import UserTable from '../../components/usertables/UserTable';
function Users() {
    return (
        <div className='users'>
            <Sidebar />
            <div className="userContainer">
                <Navbar />
                <div className="searchArea">
                    <div className="searchBar">
                        <SearchIcon className='searchIcon' />
                        <input type="text" placeholder='User Name' />
                    </div>
                </div>
                <div className="userlists">
                        <UserTable />
                </div>
            </div>
        </div>
    )
}

export default Users