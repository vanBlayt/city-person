import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import defaultImage from 'static/images/contemplative-reptile.jpg'
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
export default function cards() {
  return (
    <Card sx={{ maxWidth: 325 }}>
      <CardActionArea>
        <CardContent sx={{padding: '10px 16px',border: '1px solid #ccc',borderRadius: '3px'}}>
          <Typography  variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
          <Typography variant="body2" color="#8590a6">
            123 赞同     79 评论
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
