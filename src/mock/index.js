import Mock from 'mockjs'

// 引入子模块
import './confession' // 这个是你写的带 mockConfessions 的文件

Mock.setup({
  timeout: '1-50' // 可选，模拟延迟
})
