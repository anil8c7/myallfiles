import React from 'react'
import "./ship.scss"
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Pending from '../../components/tables/Pending'
import Today from '../../components/tables/Today'
import Delayed from '../../components/tables/Delayed'
import Completed from '../../components/tables/Completed'

function Ship() {

  const [activeIndex, setActiveIndex] = useState(0);
  const [usertable, setUsertable] = useState(<Pending/>);

  const addClassActive = (index,component) => {
    setActiveIndex(index === activeIndex ? null : index);
    setUsertable(component===usertable?null:component);
  };


  const [paname, setPaname] = React.useState('');

  const handleChange = (event) => {
    setPaname(event.target.value);
  }
  return (
    <>
      <div className='ship'>
        <Sidebar />
        <div className="shipContainer">
          <Navbar />
          <div className="searchArea">
            <div className="logistic">
              <span className='logisticText'>Logistic</span>
              <span className='greaterSign'>&gt;</span>
              <span className='delivery'>Delivery</span>
            </div>
            <div className="searchBar">
              <SearchIcon className='searchIcon' />
              <input type="text" placeholder='SO Number,Buyer Name' />
            </div>
          </div>
          <div className="details">
            <div className="lists">
              <ul>
                <li
                  className={activeIndex === 0 ? 'active' : ''}
                  onClick={() => addClassActive(0,<Pending/>)}
                >Pending</li>
                <li
                  className={activeIndex === 1 ? 'active' : ''}
                  onClick={() => addClassActive(1,<Today/>)}
                >Todays Delivery</li>
                <li
                  className={activeIndex === 2 ? 'active' : ''}
                  onClick={() => addClassActive(2,<Delayed/>)}
                >Delayed</li>
                <li
                  className={activeIndex === 3 ? 'active' : ''}
                  onClick={() => addClassActive(3,<Completed/>)}
                >Completed</li>
              </ul>
            </div>
          </div>
          <div className="paButton">
            <Box sx={{ minWidth: 320 }}>
              <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="demo-select-small-label">PA Name</InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value={paname}
                  label="PA Name"
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={1}>Deep</MenuItem>
                  <MenuItem value={2}>Sunil</MenuItem>
                  <MenuItem value={3}>Gourav</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
          <div className="listContainer">
            {usertable}
          </div>
        </div>
      </div>
    </>

  )
}

export default Ship