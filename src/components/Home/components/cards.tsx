import React, { useCallback } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, CardHeader } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useNavigate } from 'react-router-dom';
import { StoriesIntro } from '@/types'
import { Toast, Dialog } from 'antd-mobile';

import { del } from '@/axios';
import { deleteStory } from '@/axios/API';
interface Props {
  story: StoriesIntro;
  updateData: any;
}



export default function Cards(props: Props) {
  const { story, updateData } = props;
  const { id, title, content, comments } = story;
  const navigate = useNavigate();

  const handleStoryClick = useCallback(() => {
    const func: () => void = () => {
      navigate('/story', { state: { id } })
    }
    func()
  }, [story])

  const handleClickStory = useCallback((e) => {
    e.stopPropagation()
    Dialog.confirm({
      title: '确定删除吗该条记录吗?',
      confirmText: '删除',
      cancelText: '取消',
      onConfirm: async () => {
        del(deleteStory, { id }).then((res) => {
          updateData();
          Toast.show({ content: '删除成功' })
        }).catch((err) => {
          console.log('err fail del', err);
          Toast.show({ content: '删除失败' })
        })
      },
    })
  }, [])

  return (
    <div onClick={handleStoryClick} style={{ display: 'flex', justifyContent: 'center' }}>
      <Card sx={{ maxWidth: 325, minWidth: 325, marginTop: 3 }}>
        <CardHeader title={title} action={
          <IconButton aria-label="settings" onClick={handleClickStory}>
            <MoreVertIcon />
          </IconButton>
        } />
        {/* <CardActionArea>
          <CardContent sx={{ padding: '10px 16px', border: '1px solid #ccc', borderRadius: '3px' }}>
            <Typography variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              {content}
            </Typography>
            <Typography variant="body2" color="#8590a6">
              {comments} 评论
            </Typography>
          </CardContent>
        </CardActionArea> */}
      </Card>
    </div>
  );
}
