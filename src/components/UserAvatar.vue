<template>
    <div class="avatar" :style="{ backgroundColor: bgColor }">
      {{ initials }}
    </div>
  </template>
  
  <script>
  export default {
    name: 'UserAvatar',
    props: {
      name: String
    },
    computed: {
      initials() {
        if (!this.name) return "匿";
        const names = this.name.split(" ");
        let initials = "";
        for (const n of names) {
          if (n.length > 0) {
            initials += n[0];
          }
        }
        return initials.substring(0, 2) || "匿";
      },
      bgColor() {
        const colors = [
          '#ff9ff3', '#feca57', '#ff6b6b', '#48dbfb', '#1dd1a1',
          '#ff7979', '#badc58', '#7ed6df', '#e056fd', '#686de0'
        ];
        return colors[Math.floor(Math.random() * colors.length)];
      }
    }
  }
  </script>
  
  <style scoped>
  .avatar {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: bold;
  }
  </style>