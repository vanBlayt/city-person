import React, { useState, useRef, useCallback } from 'react'
import { Form, Button, Input, ImageUploader, Toast } from 'antd-mobile'
import { ImageUploadItem } from 'antd-mobile/es/components/image-uploader'
import { post } from '@/axios';
import { UploadImg, CreateStory } from '@/axios/API';
import { useNavigate } from 'react-router';
export default function Index() {

  const [fileList, setFileList] = useState<ImageUploadItem[]>([])
  const formRef = useRef<any>(null);
  const navigate = useNavigate();

  const onFinish = useCallback((values: any) => {
    values.images = values.images?.map(function (img: any) {
      return img.url
    });
    console.log(values)
    post(CreateStory, {}, values).then((res) => {
      console.log(res)
      if (res && res.data) {
        // add 成功
        Toast.show({
          content: '添加成功'
        })
        if (formRef.current !== null) {
          formRef.current?.resetFields()
        }
        navigate('/')
      }
    }).catch((err) => {
      console.log(err)
      // fail
      Toast.show({
        content: '添加失败' + err
      })
    })
  }, [formRef])

  const uploadimage: (file: any) => any = async (file) => {
    // const res = URL.createObjectURL(file)
    const formdata = new FormData();
    formdata.append("file", file);
    return post(UploadImg, {}, formdata)
      .then((res) => {
        console.log('res=>', res)
        if (res && res.data) {
          console.log('res=>', res);
          return { url: res.data.url }
        }
      }).catch((err) => {
        Toast.show({
          content: '图片上传失败'
        })
        console.log('err=>', err)
      })
  }

  const onChange: (fileList: any) => any = (fileList) => {
    console.log(fileList);
  }


  return (
    <div>
      <Form
        ref={formRef}
        name='form'
        onFinish={onFinish}
        // requiredMarkStyle="asterisk"
        footer={
          <Button block type='submit' color='primary' size='large'>
            提交
          </Button>
        }
      >
        <Form.Item name="title" label="标题" rules={[{ required: true }]}><Input></Input></Form.Item>
        <Form.Item name="content" label="摘记" rules={[{ required: false }]}><Input></Input></Form.Item>
        <Form.Item name="images" label="图片"><ImageUploader
          value={fileList}
          onChange={onChange}
          upload={uploadimage as any}
        /></Form.Item>
      </Form>
    </div>
  )
}
