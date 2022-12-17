import { Avatar, IconButton } from '@mui/material'
import React from 'react'
import './Chat.css'
import SearchIcon from '@mui/icons-material/Search';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function Chat() {
  return (
    <div className='chat'>
      
      <div className="chat_header">
        <Avatar />
      </div>
      <div className="chat_headerInfo">
        <h2>Room name</h2>
        <p>Last seen at xxxx</p>
      </div>
      <div>
      <IconButton>
        <SearchIcon/>
      </IconButton>
      <IconButton>
        <AttachFileIcon/>
      </IconButton>
      <IconButton> 
        <MoreVertIcon/>
      </IconButton>
  
      </div>
    </div>
  )
}

export default Chat