import React from 'react'
import Fab from '@mui/material/Fab';
import Tooltip from '@mui/material/Tooltip';
import AddIcon from '@mui/icons-material/Add';

export default function test() {
  const fabStyle = {
    position: 'absolute',
    bottom: 16,
    right: 16,
  };

  return (
    <Fab sx={fabStyle} aria-label="Add" color="primary">
      <Tooltip title="添加记录">
        <AddIcon />
      </Tooltip>
    </Fab>
  )
}
