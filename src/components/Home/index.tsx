import React, { useEffect, useState } from 'react';
import AddRecord from './components/addRecord'
import Card from './components/cards'
import { get } from '@/axios';
import { GetStories } from '@/axios/API'
import { StoriesIntro } from '@/types'

function Home() {
  const [stories, setStories] = useState<Array<StoriesIntro>>([])
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
  }, [])

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <AddRecord></AddRecord>
      {
        stories?.length > 0 && stories.map((story, index) => {
          return (
            <Card story={story}></Card>
          )
        })
      }

    </div>
  );
}

export default Home;
