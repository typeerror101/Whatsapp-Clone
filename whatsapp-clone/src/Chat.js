import { Avatar, IconButton } from '@mui/material'
import React from 'react'
import './Chat.css'
import InsertEmoticonOutlinedIcon from '@mui/icons-material/InsertEmoticonOutlined';
import SearchIcon from '@mui/icons-material/Search';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MicNoneIcon from '@mui/icons-material/MicNone';

function Chat() {
  return (
    <div className='chat'>
      
      <div className="chat_header">
        <Avatar />
      
      <div className="chat_headerInfo">
        <h2>Room name</h2>
        <p>Last seen at xxxx</p>
      </div>

      <div className='chat_headerRight'>
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

      <div className="chat_body">
        <p className='chat_message'>
          <span className="chat_name">Larosh </span>
          This is a message
          <span className="chat_timestamp">
          {new Date().toUTCString()}</span>
        </p>

        <p className='chat_message chat_reciever'>
          <span className="chat_name">Larosh </span>
          This is a message
          <span className="chat_timestamp">
          {new Date().toUTCString()}</span>
        </p>

        <p className='chat_message'>
          <span className="chat_name">Larosh </span>
          This is a message
          <span className="chat_timestamp">
          {new Date().toUTCString()}</span>
        </p>
      </div>
      
      <div className="chat_footer">
       <InsertEmoticonOutlinedIcon/> 

       <form>
          <input type="text" placeholder='Type a message' />
          <button type='submit'>
            Send a message
          </button>
       </form>

      <MicNoneIcon/> 
      </div>
    </div>
  )
}

export default Chat