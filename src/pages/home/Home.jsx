import React from 'react'
import "./home.scss"
import Sidebar from '../../components/sidebar/Sidebar'
import SearchIcon from '@mui/icons-material/Search';
import Navbar from '../../components/navbar/Navbar'
import Chart from '../../components/charts/Chart'
import Piechart from '../../components/piechart/Piechart';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import UserTable from '../../components/usertables/UserTable';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


function Home() {
    return (
        <>
            <div className="home">
                <Sidebar />
                <div className="homeContainer">
                    <Navbar />
                    <div className="searchArea">
                        <div className="searchBar">
                            <SearchIcon className='searchIcon' />
                            <input type="text" placeholder='Search' />
                        </div>
                    </div>
                    <div className="graphs">
                        <div className="piechart">
                            <div className="top">
                                <h1 className="title">Total Revenue</h1>
                                <MoreVertIcon fontSize='small' />
                            </div>
                            <div className="bottom">
                                <Piechart />
                                <div className="summary">
                                    <div className="item">
                                        <div className="itemTitle">Target</div>
                                        <div className="itemResult positive">
                                            <KeyboardArrowUpIcon />
                                            <div className="resultAmount">$12.45k</div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="itemTitle">Last Week</div>
                                        <div className="itemResult negative">
                                            <KeyboardArrowDownIcon />
                                            <div className="resultAmount">$12.45k</div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="itemTitle">Last Month</div>
                                        <div className="itemResult positive">
                                            <KeyboardArrowUpIcon />
                                            <div className="resultAmount">$12.45k</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="chart">
                            <Chart />
                        </div>
                    </div>
                    <div className="userlists">
                        <UserTable />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home