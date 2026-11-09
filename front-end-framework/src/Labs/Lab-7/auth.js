import { ref } from 'vue'

export const token = ref(localStorage.getItem('token'))
export const currentUser = ref(JSON.parse(localStorage.getItem('user') || 'null'))

export function setAuth(newToken, user) {
  localStorage.setItem('token', newToken)
  localStorage.setItem('user', JSON.stringify(user))
  token.value = newToken
  currentUser.value = user
}

export function clearAuth() {
  localStorage.removeItem('token')
  localStorage.removeItem('user')
  token.value = null
  currentUser.value = null
}
