<template>
  <div class="card" :style="{ 'animation-delay': `${index * 0.05}s` }">
    <div
      class="card-image"
      v-if="confession.image"
      :style="{ paddingTop: paddingTop }"
    >
      <div v-show="!imageLoaded" class="image-placeholder">
        Loading...
      </div>
      <img
        :src="confession.image"
        alt="Confession Image"
        @load="onImageLoad"
        v-show="imageLoaded"
      />
    </div>
    <div class="card-content">
      <h1 class="card-title">{{ confession.title }}</h1>
      <p class="card-text">{{ confession.content }}</p>
    </div>
    <div class="card-footer">
      <div class="user-info">
        <UserAvatar :name="confession.author" />
        <span class="username">{{ confession.author }}</span>
      </div>
      <div class="actions">
        <div
          class="action-btn"
          :class="{ liked: confession.liked }"
          @click="$emit('toggle-like', confession.id)"
        >
          <i class="fas fa-heart" :class="{ 'like-animation': confession.liked }"></i>
          <span>{{ confession.likes }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserAvatar from './UserAvatar.vue'

export default {
  name: 'ConfessionCard',
  components: {
    UserAvatar
  },
  props: {
    confession: Object,
    index: Number
  },
  data() {
    return {
      imageLoaded: false,
      paddingTop: '56.25%' // 默认16:9比例
    }
  },
  watch: {
    confession: {
      immediate: true,
      handler(newVal) {
        this.imageLoaded = false
        if (newVal && newVal.image) {
          this.setImageRatio(newVal.image)
        } else {
          this.paddingTop = '56.25%'
        }
      }
    }
  },
  methods: {
    onImageLoad() {
      this.imageLoaded = true
    },
    setImageRatio(src) {
      const img = new Image()
      img.onload = () => {
        const ratio = (img.height / img.width) * 100
        this.paddingTop = ratio + '%'
      }
      img.src = src
    }
  }
}
</script>

<style scoped>
.card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
  animation: fadeIn 0.5s ease-out;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.card-image {
  width: 100%;
  position: relative;
  overflow: hidden;
  margin-bottom: 5px;
  /* padding-top 动态设置 */
}

.card-image img,
.image-placeholder {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

.card-image img {
  display: block;
  object-fit: cover;
}

.image-placeholder {
  background: linear-gradient(45deg, #ff9ff3, #feca57);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  user-select: none;
  font-size: 1.2rem;
}

.card-content {
  padding: 10px;
}

.card-title {
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 5px;
  color: #3e3a3a;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-text {
  color: #777;
  font-size: 15px;
  margin-bottom: 15px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  min-height: 60px;
}

.card-footer {
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 12px;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 10px;
}

.username {
  font-size: 12px;
  font-weight: 450;
}

.actions {
  display: flex;
  gap: 15px;
}

.action-btn {
  display: flex;
  align-items: center;
  gap: 5px;
  color: #777;
  font-size: 14px;
  cursor: pointer;
  transition: color 0.3s;
}

.action-btn:hover {
  color: #ff2e63;
}

.action-btn.liked {
  color: #ff2e63;
}

.like-animation {
  animation: likeEffect 0.6s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes likeEffect {
  0% {
    transform: scale(1);
  }

  25% {
    transform: scale(1.3);
  }

  50% {
    transform: scale(0.9);
  }

  75% {
    transform: scale(1.2);
  }

  100% {
    transform: scale(1);
  }
}
</style>
