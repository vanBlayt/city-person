import React, { useCallback, useEffect, useState } from 'react';
import AddRecord from './components/addRecord'
import Card from './components/cards'
import { get } from '@/axios';
import { GetStories } from '@/axios/API'
import { StoriesIntro } from '@/types'
import './index.scss';

function Home() {
  const [stories, setStories] = useState<Array<StoriesIntro>>([])
  const [refresh, setRefresh] = useState(false);
  const getStories = () => {
    get(GetStories).then((res) => {
      if (res && res.data) {
        setStories(res.data);
      }
    }).catch((err) => {
      throw new Error('getStoriesErr' + err);
    })
  }
  // 获取 stories 
  useEffect(() => {
    getStories();
  }, [refresh])

  // 刷新数据
  const updateData = useCallback(() => {
    setRefresh(!refresh)
  }, [refresh])

  return (
    <div className='home'>
      <AddRecord></AddRecord>
      {
        stories?.length > 0 && stories.map((story, index) => {
          return (
            <Card story={story} key={index} updateData={updateData}></Card>
          )
        })
      }

    </div>
  );
}

export default Home;
