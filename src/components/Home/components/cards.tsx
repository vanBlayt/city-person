import React, { useCallback } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import defaultImage from 'static/images/contemplative-reptile.jpg'
import { StoriesIntro } from '@/types'
interface Props {
  story: StoriesIntro;
}



export default function Cards(props: Props) {
  const { story } = props;
  const { _id, title, content, comments } = story;
  const navigate = useNavigate();

  const handleStoryClick = useCallback(() => {
    const func: () => void = () => {
      navigate('/story', { state: { _id } })
    }
    func()
  }, [story])

  return (
    <div onClick={handleStoryClick}>
      <Card sx={{ maxWidth: 325 }}>
        <CardActionArea>
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
        </CardActionArea>
      </Card>
    </div>
  );
}
