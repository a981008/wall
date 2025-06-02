import axios from 'axios'

export async function getConfessions({ lastId, pageSize }) {
  const response = await axios.get('/api/confessions', {
    params: { lastId, pageSize }
  })

  const json = response.data

  if (json.code !== 0) {
    throw new Error(json.message || '加载失败')
  }

  return json.data
}
