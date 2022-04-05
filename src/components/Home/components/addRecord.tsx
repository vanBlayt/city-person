import React from 'react'
import Fab from '@mui/material/Fab';
import Tooltip from '@mui/material/Tooltip';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom'

export default function Test() {
  const fabStyle = {
    position: 'absolute',
    bottom: 16,
    right: 16,
  };

  const navigate = useNavigate();

  const navagateToAddStory = () => {
    navigate('/addStory')
  }

  return (
    <Fab sx={fabStyle} aria-label="Add" color="primary" onClick={navagateToAddStory}>
      <Tooltip title="添加记录">
        <AddIcon />
      </Tooltip>
    </Fab>
  )
}
