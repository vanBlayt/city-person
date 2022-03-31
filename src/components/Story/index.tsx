import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { get } from '@/axios';
import { getSingleStory } from '@/axios/API';
import { StoriesIntro } from '@/types'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import 'swiper/swiper-bundle.css';
import defaultImg from 'static/images/contemplative-reptile.jpg';
import './index.scss'


export default function Index() {

  const location = useLocation();
  useEffect(() => {
    const id = location.state._id;
    const getStory: (id: string) => any = async (id) => {
      get(getSingleStory, { id }).then((res) => {
        if (res && res.data) {
          setStoryData(res.data);
        }
      }).catch((err) => {
        // TODO single Story get error
        console.log(err);
      });
    }
    getStory(id);
  }, [])
  const [storyData, setStoryData] = useState<StoriesIntro>({} as StoriesIntro)
  return (
    < Box sx={{ width: '100%', maxWidth: 500, padding: '8px' }
    }>
      {
        storyData.title !== '' ? (
          <div>
            <Typography variant="h4" align="center" component="div" gutterBottom>{storyData.title}</Typography>
            {storyData.content && <Typography variant="body2" component="div">{storyData.content}</Typography>}
            {(
              storyData.images?.length > 0 && (
                <div className='img-swiper'>
                  <Swiper
                    spaceBetween={162}
                    slidesPerView={3}
                    loop
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                  >
                    <SwiperSlide><img className="img-item" src={defaultImg} alt="" /></SwiperSlide>
                    <SwiperSlide><img className="img-item" src={defaultImg} alt="" /></SwiperSlide>
                    <SwiperSlide><img className="img-item" src={defaultImg} alt="" /></SwiperSlide>
                    <SwiperSlide><img className="img-item" src={defaultImg} alt="" /></SwiperSlide>
                  </Swiper>
                </div>
              )
            )}
          </div>
        ) : (
          <Typography variant="h6" component="div">loading...</Typography>
        )
      }
    </Box >
  )
}
