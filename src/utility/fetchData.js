export const fetchData = async (url, body) => {
  const response = await fetch(url, body)
  if(!response.ok){
    throw new Error(response.statusText)
  } else {
    return await response.json()
  }
}