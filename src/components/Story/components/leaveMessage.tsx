import React, { useState, useRef } from 'react'
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
export default function LeaveMessage() {
  const [comments, setComments] = useState([] as any);
  const commentTextarea = useRef(null);
  return (
    <div className='comments'>
      {/* Comments */}
      <Typography variant="h3" component="div">
        留言板
      </Typography>
      <Stack spacing={2} direction="row">
        <TextareaAutosize aria-label="empty textarea"
          placeholder="Empty"
          minRows={3}
          maxRows={3}
          style={{ width: 200 }} ref={commentTextarea}></TextareaAutosize>
        <Button variant="contained">发布</Button>
      </Stack>

    </div>
  )
}
