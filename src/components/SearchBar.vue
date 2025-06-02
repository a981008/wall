<template>
    <div class="search-bar">
      <i class="search-icon fas fa-search"></i>
      <input 
        type="text" 
        placeholder="搜索表白内容或用户..." 
        :value="searchQuery"
        @input="$emit('update:searchQuery', $event.target.value)"
      >
    </div>
  </template>
  
  <script>
  export default {
    name: 'SearchBar',
    props: {
      searchQuery: String
    }
  }
  </script>
  
  <style scoped>
  .search-bar {
    margin: 20px 0;
    background: white;
    border-radius: 30px;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  }
  
  .search-bar input {
    border: none;
    outline: none;
    width: 100%;
    padding: 8px 15px;
    font-size: 16px;
    background: transparent;
  }
  
  .search-icon {
    color: #777;
    font-size: 18px;
  }
  </style>