import React from 'react'
import "./Sidebar.css"
import ChatIcon from '@mui/icons-material/Chat';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import {Avatar,IconButton} from "@material-ui/core";

function Sidebar() {
  return (
    <div className="sidebar">
      
      <div className='sidebar_header'>

        <div className='sidebar_headerRight'>
          <IconButton>
                <ChatIcon/>
                <DonutLargeIcon/>
          </IconButton>
        </div>

      </div>
    </div>
  )
}

export default Sidebar
