import { ref } from 'vue'
import { fetchUsers } from '@/services/apiService.js'
import { createApiUser } from '@/models/ApiUser.js'

export function useApiController() {
  const users    = ref([])
  const loading  = ref(false)
  const error    = ref(null)
  const fetched  = ref(false)

  async function loadUsers() {
    loading.value = true
    error.value   = null
    users.value   = []
    fetched.value = true

    try {
      const raw = await fetchUsers()
      users.value = raw.map(createApiUser)
    } catch (err) {
      error.value = err.message ?? 'An unexpected error occurred.'
    } finally {
      loading.value = false
    }
  }

  return {
    users,
    loading,
    error,
    fetched,
    loadUsers,
  }
}