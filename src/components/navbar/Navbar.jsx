import React from 'react'
import "./navbar.scss";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import HelpIcon from '@mui/icons-material/Help';
import PersonIcon from '@mui/icons-material/Person';
function Navbar() {
  return (
    <div className="navbar">
      <div className="items">
        <div className="item">
          <span className="help">{<HelpIcon />}Help</span>
        </div>
        <div className="item">
          <span className="chat">{<ChatBubbleOutlineIcon />}</span>
        </div>
        <div className="item">
          <span className="notification">{<NotificationsNoneIcon />}</span>
        </div>
        <div className="item">
          <div className="user">
            <span className="userIcon">
              {<PersonIcon />}
            </span>
            <div className="">
              <div className="userdetails">
                <div className="username">UserName</div>
              <div className='designation'>Designation</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar