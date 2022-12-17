import React from 'react'
import "./Sidebar.css"
import ChatIcon from '@mui/icons-material/Chat';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import {Avatar,IconButton} from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SidebarChat from './SidebarChat';

function Sidebar() {
  return (
    <div className="sidebar">
      
      <div className='sidebar_header'>
        <Avatar src="https://media.licdn.com/dms/image/D4D35AQElU6bEeGwtjA/profile-framedphoto-shrink_400_400/0/1667932248792?e=1671876000&v=beta&t=Qjkb54_TJYaQ4bFMvNlgydDqiSQqs-bg5S6zXLub8-o" />
        <div className='sidebar_headerRight'>
          <IconButton>
                <DonutLargeIcon/>
          </IconButton>
          <IconButton>
                <ChatIcon/>
          </IconButton>
          <IconButton>
                <MoreVertIcon/>  
          </IconButton>
        </div>
      </div>

      <div className='sidebar_search'>
        <div className='sidebar_searchContainer'>
          <SearchOutlinedIcon/>
          <input placeholder='Search or start new chat' type='text'/>
        </div>
      </div>

      

      <div className='sidebar_chats'>
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  )
}

export default Sidebar
