<template>
    <router-link to="/publish" class="publish-btn">
      <i class="fas fa-plus"></i>
    </router-link>
  </template>
  
  <script>
  export default {
    name: 'PublishButton'
  }
  </script>
  
  <style scoped>
  .publish-btn {
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: linear-gradient(45deg, #ff2e63, #ff8ba0);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    box-shadow: 0 6px 20px rgba(255, 46, 99, 0.4);
    cursor: pointer;
    z-index: 100;
    transition: transform 0.3s;
    text-decoration: none;
  }
  
  .publish-btn:hover {
    transform: scale(1.1);
  }
  
  @media (max-width: 768px) {
    .publish-btn {
      bottom: 20px;
      right: 20px;
      width: 50px;
      height: 50px;
      font-size: 20px;
    }
  }
  </style>