import axios from 'axios'

export const uploadImageBb = async imageFileData => {
  const formData = new FormData()
  formData.append('image', imageFileData)

  const { data } = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_imgbb_api}`, formData)
  return data?.data?.display_url
}
