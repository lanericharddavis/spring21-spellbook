export const sandboxApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/class/spells',
  timeout: 3000
})


export const dndApi = axios.create({
  baseURL: 'https://www.dnd5eapi.co/api/spells/',
  timeout: 3000
})