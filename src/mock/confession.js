import Mock from 'mockjs'

const mockConfessions = [
    {
        "id": 1,
        "title": "致那个穿白衬衫的男孩的秘密",
        "content": "每次在图书馆看到你认真看书的样子，我的心跳都会加速。",
        "author": "思考者",
        "likes": 49,
        "comments": 16,
        "liked": false,
        "image": "https://picsum.photos/300/500"
    },
    {
        "id": 2,
        "title": "给教学楼C区的那位女孩的故事",
        "content": "上周三在咖啡厅，你帮我捡起了掉在地上的书。",
        "author": "匿名小迷妹",
        "likes": 20,
        "comments": 3,
        "liked": true,
        "image": "https://picsum.photos/518/410"
    },
    {
        "id": 3,
        "title": "篮球场上的10号球员的回忆",
        "content": "每次路过篮球场，都会看到你矫健的身影。",
        "author": "默默关注你的人",
        "likes": 31,
        "comments": 19,
        "liked": false,
        "image": "https://picsum.photos/453/455"
    },
    {
        "id": 4,
        "title": "校园里的陌生人的告白",
        "content": "看到你笑容的那一刻，整个世界都亮了起来。",
        "author": "匿名",
        "likes": 44,
        "comments": 14,
        "liked": false,
        "image": "https://picsum.photos/661/485"
    },
    {
        "id": 5,
        "title": "午后咖啡时光的日记",
        "content": "那杯咖啡的味道，像极了你的温柔。",
        "author": "小确幸",
        "likes": 40,
        "comments": 18,
        "liked": true,
        "image": "https://picsum.photos/679/453"
    },
    {
        "id": 6,
        "title": "图书馆的秘密的时光",
        "content": "每一本书都藏着我们未说出口的故事。",
        "author": "追梦者",
        "likes": 50,
        "comments": 7,
        "liked": true,
        "image": "https://picsum.photos/398/536"
    },
    {
        "id": 7,
        "title": "致那个穿白衬衫的男孩的回忆",
        "content": "每次在图书馆看到你认真看书的样子，我的心跳都会加速。",
        "author": "匿名",
        "likes": 69,
        "comments": 5,
        "liked": true,
        "image": "https://picsum.photos/587/462"
    },
    {
        "id": 8,
        "title": "给教学楼C区的那位女孩的秘密",
        "content": "上周三在咖啡厅，你帮我捡起了掉在地上的书。",
        "author": "思考者",
        "likes": 31,
        "comments": 16,
        "liked": false,
        "image": "https://picsum.photos/690/445"
    },
    {
        "id": 9,
        "title": "篮球场上的10号球员的故事",
        "content": "每次路过篮球场，都会看到你矫健的身影。",
        "author": "球场边的观众",
        "likes": 56,
        "comments": 8,
        "liked": true,
        "image": "https://picsum.photos/579/478"
    },
    {
        "id": 10,
        "title": "校园里的陌生人的回忆",
        "content": "看到你笑容的那一刻，整个世界都亮了起来。",
        "author": "默默关注你的人",
        "likes": 43,
        "comments": 12,
        "liked": false,
        "image": "https://picsum.photos/547/483"
    },
    {
        "id": 11,
        "title": "午后咖啡时光的故事",
        "content": "那杯咖啡的味道，像极了你的温柔。",
        "author": "书虫",
        "likes": 29,
        "comments": 9,
        "liked": true,
        "image": "https://picsum.photos/521/468"
    },
    {
        "id": 12,
        "title": "图书馆的秘密的秘密",
        "content": "每一本书都藏着我们未说出口的故事。",
        "author": "匿名小迷妹",
        "likes": 24,
        "comments": 17,
        "liked": false,
        "image": "https://picsum.photos/526/551"
    },
    {
        "id": 13,
        "title": "致那个穿白衬衫的男孩的日记",
        "content": "每次在图书馆看到你认真看书的样子，我的心跳都会加速。",
        "author": "追梦者",
        "likes": 31,
        "comments": 4,
        "liked": false,
        "image": "https://picsum.photos/493/406"
    },
    {
        "id": 14,
        "title": "给教学楼C区的那位女孩的日记",
        "content": "上周三在咖啡厅，你帮我捡起了掉在地上的书。",
        "author": "思考者",
        "likes": 64,
        "comments": 11,
        "liked": false,
        "image": "https://picsum.photos/618/552"
    },
    {
        "id": 15,
        "title": "篮球场上的10号球员的时光",
        "content": "每次路过篮球场，都会看到你矫健的身影。",
        "author": "匿名小迷妹",
        "likes": 17,
        "comments": 7,
        "liked": true,
        "image": "https://picsum.photos/526/415"
    },
    {
        "id": 16,
        "title": "校园里的陌生人的故事",
        "content": "看到你笑容的那一刻，整个世界都亮了起来。",
        "author": "匿名",
        "likes": 56,
        "comments": 10,
        "liked": false,
        "image": "https://picsum.photos/643/391"
    },
    {
        "id": 17,
        "title": "午后咖啡时光的告白",
        "content": "那杯咖啡的味道，像极了你的温柔。",
        "author": "球场边的观众",
        "likes": 38,
        "comments": 1,
        "liked": false,
        "image": "https://picsum.photos/456/542"
    },
    {
        "id": 18,
        "title": "图书馆的秘密的故事",
        "content": "每一本书都藏着我们未说出口的故事。",
        "author": "小确幸",
        "likes": 68,
        "comments": 18,
        "liked": true,
        "image": "https://picsum.photos/671/391"
    },
    {
        "id": 19,
        "title": "致那个穿白衬衫的男孩的告白",
        "content": "每次在图书馆看到你认真看书的样子，我的心跳都会加速。",
        "author": "追梦者",
        "likes": 31,
        "comments": 6,
        "liked": false,
        "image": "https://picsum.photos/661/533"
    },
    {
        "id": 20,
        "title": "给教学楼C区的那位女孩的告白",
        "content": "上周三在咖啡厅，你帮我捡起了掉在地上的书。",
        "author": "书虫",
        "likes": 48,
        "comments": 15,
        "liked": true,
        "image": "https://picsum.photos/579/415"
    }
]

// 模拟接口，支持分页，lastId 和 pageSize
Mock.mock(/\/api\/confessions/, 'get', (options) => {
    const url = new URL('http://dummy.com' + options.url)
    const lastId = Number(url.searchParams.get('lastId')) || 0
    const pageSize = Number(url.searchParams.get('pageSize')) || 10
  
    const filtered = mockConfessions.filter(item => item.id > lastId).slice(0, pageSize)
  
    return {
      code: 0,
      data: {
        confessions: filtered,
        hasMore: lastId + pageSize < mockConfessions.length
      }
    }
  })