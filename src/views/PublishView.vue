<template>
    <div class="publish-view">
      <h2 class="publish-title">发布表白</h2>
      
      <div class="form-group">
        <label>标题</label>
        <input 
          type="text" 
          v-model="form.title" 
          placeholder="给你的表白起个标题"
        >
      </div>
      
      <div class="form-group">
        <label>内容</label>
        <textarea 
          v-model="form.content" 
          placeholder="写下你的表白内容..."
          rows="5"
        ></textarea>
      </div>
      
      <div class="form-group">
        <label>图片 (可选)</label>
        <div class="image-upload">
          <div class="upload-placeholder">
            <i class="fas fa-camera"></i>
            <span>点击上传图片</span>
          </div>
        </div>
      </div>
      
      <div class="form-group">
        <label>你的昵称</label>
        <input 
          type="text" 
          v-model="form.author" 
          placeholder="匿名用户"
        >
      </div>
      
      <div class="form-actions">
        <button class="btn cancel" @click="cancel">取消</button>
        <button class="btn submit" @click="submit">发布</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { useConfessionStore } from '@/store/confessionStore'
  
  const router = useRouter()
  const store = useConfessionStore()
  
  const form = ref({
    title: '',
    content: '',
    author: '匿名用户',
    image: ''
  })
  
  const submit = () => {
    if (!form.value.title || !form.value.content) {
      alert('请填写标题和内容')
      return
    }
    
    store.addConfession(form.value)
    router.push('/')
  }
  
  const cancel = () => {
    router.push('/')
  }
  </script>
  
  <style scoped>
  .publish-view {
    background: white;
    border-radius: 12px;
    padding: 30px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  }
  
  .publish-title {
    text-align: center;
    margin-bottom: 25px;
    color: #ff2e63;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  .form-group label {
    display: block;
    margin-bottom: 8px;
    font-weight: 500;
    color: #333;
  }
  
  .form-group input,
  .form-group textarea {
    width: 100%;
    padding: 12px 15px;
    border: 1px solid #eee;
    border-radius: 8px;
    font-size: 16px;
    transition: border-color 0.3s;
  }
  
  .form-group input:focus,
  .form-group textarea:focus {
    border-color: #ff2e63;
    outline: none;
  }
  
  .form-group textarea {
    min-height: 120px;
    resize: vertical;
  }
  
  .image-upload {
    border: 2px dashed #eee;
    border-radius: 8px;
    padding: 20px;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s;
  }
  
  .image-upload:hover {
    border-color: #ff2e63;
    background-color: #fff5f7;
  }
  
  .upload-placeholder {
    color: #777;
    font-size: 14px;
  }
  
  .upload-placeholder i {
    font-size: 24px;
    display: block;
    margin-bottom: 10px;
  }
  
  .form-actions {
    display: flex;
    gap: 15px;
    margin-top: 25px;
  }
  
  .btn {
    flex: 1;
    padding: 12px 20px;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s;
    border: none;
  }
  
  .btn.cancel {
    background: #f5f5f5;
    color: #777;
  }
  
  .btn.cancel:hover {
    background: #eaeaea;
  }
  
  .btn.submit {
    background: linear-gradient(45deg, #ff2e63, #ff8ba0);
    color: white;
    box-shadow: 0 4px 15px rgba(255, 46, 99, 0.3);
  }
  
  .btn.submit:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(255, 46, 99, 0.4);
  }
  </style>