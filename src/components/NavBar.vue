<template>
    <header class="header">
      <div class="logo">校园<span>星愿墙</span></div>
      <div class="nav-icons">
        <i class="nav-icon fas fa-bell"></i>
        <i class="nav-icon fas fa-envelope"></i>
        <i class="nav-icon fas fa-user"></i>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    name: 'NavBar'
  }
  </script>
  
  <style scoped>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0;
    margin-bottom: 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  }
  
  .logo {
    font-size: 24px;
    font-weight: bold;
    color: #ff2e63;
  }
  
  .logo span {
    color: #333;
  }
  
  .nav-icons {
    display: flex;
    gap: 20px;
  }
  
  .nav-icon {
    font-size: 20px;
    color: #777;
    cursor: pointer;
    transition: color 0.3s;
  }
  
  .nav-icon:hover {
    color: #ff2e63;
  }

  
  </style>