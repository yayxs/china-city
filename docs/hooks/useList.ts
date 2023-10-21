import { ref } from 'vue'
const useList = () => {
  const list = ref([])
  return {
    list
  }
}
