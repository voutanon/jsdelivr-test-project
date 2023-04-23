import apiRegistry from "@/services/api/apiRegistry"
import apiJsdelivr from "@/services/api/apiJsdelivr"

export async function apiGetSearch(searchParams) {
  try {
    const response = await apiRegistry.get('/search', {
      params: {
        ...searchParams
      }
    })
    return response.data
  } catch(error) {
    console.error(error)
  }
}

export async function apiGetPackage(packageName) {
  try {
    const response = await apiJsdelivr.get(`/packages/npm/${packageName}`)
    return response.data
  } catch(error) {
    console.error(error)
  }
}
