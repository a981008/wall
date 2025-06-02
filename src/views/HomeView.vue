<template>
  <div class="home-view">
    <SearchBar 
      :searchQuery="searchQuery" 
      @update:searchQuery="val => searchQuery = val"
    />
    
    <div class="confession-grid">
      <ConfessionCard 
        v-for="(confession, index) in filteredConfessions"
        :key="confession.id"
        :confession="confession"
        :index="index"
        @toggle-like="toggleLike"
      />
    </div>

    <div v-if="loading" class="loading-text">加载中...</div>
    <div v-if="!hasMore && confessions.length > 0" class="end-text">没有更多内容了</div>
    <PublishButton />
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { getConfessions } from '@/api/confession'
import SearchBar from '@/components/SearchBar.vue'
import ConfessionCard from '@/components/ConfessionCard.vue'
import PublishButton from '@/components/PublishButton.vue'
import { onMounted, onUnmounted } from 'vue'


const confessions = ref([])
const lastId = ref(null)
const loading = ref(false)
const hasMore = ref(true)
const pageSize = 10
const searchQuery = ref('')

// 加载数据
async function loadMore() {
  if (loading.value || !hasMore.value) return
  loading.value = true
  try {
    const data = await getConfessions({ lastId: lastId.value, pageSize })
    confessions.value.push(...data.confessions)
    if (data.confessions.length > 0) {
      lastId.value = data.confessions[data.confessions.length - 1].id
    }
    hasMore.value = data.hasMore
  } catch (error) {
    console.error('加载失败', error)
  } finally {
    loading.value = false
  }
}

// 点赞切换，简单实现，假设本地更新
function toggleLike(id) {
  const item = confessions.value.find(c => c.id === id)
  if (item) {
    if (item.liked) {
      item.likes--
    } else {
      item.likes++
    }
    item.liked = !item.liked
  }
}

// 过滤搜索内容
const filteredConfessions = computed(() => {
  if (!searchQuery.value) return confessions.value
  const q = searchQuery.value.toLowerCase()
  return confessions.value.filter(c =>
    c.title.toLowerCase().includes(q) ||
    c.content.toLowerCase().includes(q) ||
    c.author.toLowerCase().includes(q)
  )
})

// 滚动监听
function onScroll() {
  if (loading.value || !hasMore.value) return
  const scrollTop = window.scrollY || document.documentElement.scrollTop
  const viewportHeight = window.innerHeight
  const fullHeight = document.documentElement.scrollHeight

  if (scrollTop + viewportHeight + 100 >= fullHeight) {
    loadMore()
  }
}

// 初次加载
loadMore()

onMounted(() => {
  loadMore()
  window.addEventListener('scroll', onScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<style scoped>
.home-view {
  padding-bottom: 40px;
}

.confession-grid {
  column-width: 250px;
  column-gap: 10px;
}

.confession-grid > * {
  break-inside: avoid;
  margin-bottom: 10px;
}

@media (max-width: 768px) {
  .confession-grid {
    column-width: 150px;
    column-gap: 10px;
  }
}

.loading-text,
.end-text {
  text-align: center;
  margin: 15px 0;
  color: #888;
}

.load-more-btn {
  display: block;
  margin: 20px auto;
  padding: 8px 20px;
  border: none;
  background-color: #ff2e63;
  color: white;
  border-radius: 20px;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.3s;
}

.load-more-btn:hover {
  background-color: #e02658;
}
</style>
