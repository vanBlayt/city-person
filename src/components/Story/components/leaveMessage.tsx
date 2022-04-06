import React, { useState, useRef, useEffect, useCallback } from 'react'
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Toast, Card, Dialog } from 'antd-mobile'
import { AntOutline, RightOutline, UserOutline, DeleteOutline } from 'antd-mobile-icons'

// 引入库
import { get, post, del } from '@/axios'
import { getLeaveMessage, postLeaveMessage, deleteLeaveMessage } from '@/axios/API'
import { GetLocalStorage } from '@/utils/cache';
interface Props {
  id: string;
}
export default function LeaveMessage(props: Props) {
  const [comments, setComments] = useState([] as any);
  const [flag, setFlag] = useState(false as any);
  const commentTextarea = useRef<any>(null);
  const { id: storyId } = props;
  const loginUser = GetLocalStorage('user');
  useEffect(() => {
    // 获取所有留言
    get(getLeaveMessage, { storyId }).then((res) => {
      if (res && res.data) {
        const { comments = [] } = res.data;
        setComments(comments);
        commentTextarea.current.value = '';
      }
    }).catch((err) => {
      Toast.show({
        content: '发生错误，联系管理员'
      })
    })
  }, [flag])

  const handlePostMessage = useCallback(() => {
    const value = commentTextarea?.current.value || '';

    if (value === '') {
      Toast.show({
        content: '输入内容不能为空'
      })
      return;
    }
    post(postLeaveMessage, { storyId }, { message: value })
      .then((res) => {
        Toast.show({ content: '添加成功' })
        setFlag(!flag);

      })
      .catch((err) => {
        console.log('postMessage err', err);
      })
  }, [commentTextarea, flag])

  const handleDeleteLeaveMessage = useCallback((commentId, e) => {
    Dialog.confirm({
      title: '确定删除吗该条留言吗?',
      confirmText: '删除',
      cancelText: '取消',
      onConfirm: async () => {
        del(deleteLeaveMessage, { storyId, commentId })
          .then((res) => {
            Toast.show({ content: '删除成功' })
            setFlag(!flag);
          })
          .catch((err) => {
            Toast.show({ content: '出现错误，请联系管理员' })
          })
      },
    })

  }, [flag])
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
        <Button variant="contained" onClick={handlePostMessage}>发布</Button>
      </Stack>
      <div>
        {
          comments.map(function (comment: any) {
            const { id, words, username, time } = comment;
            return (
              <Card
                title={
                  <div style={{ fontWeight: 'normal' }}>
                    <UserOutline style={{ marginRight: '4px', color: '#1677ff' }} />
                    {`${username}: `}
                  </div>
                }
                key={id}
                headerStyle={{
                  color: '#1677ff',
                }}
                extra={loginUser === username && <DeleteOutline onClick={(e) => handleDeleteLeaveMessage(id, e)} />}
                style={{ border: '1px solid #ccc', margin: '10px 0', boxShadow: '0,0,0,rgba(0,0,0,.1)' }}
              >
                {words}
              </Card>
            )
          })
        }
      </div>
    </div>
  )
}
