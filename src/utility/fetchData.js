export const fetchData = async (url, body) => {
  const response = await fetch(url, body)
  if(!response.ok){
    throw new Error('Error')
  } else {
    return await response.json()
  }
}