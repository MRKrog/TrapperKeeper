export const fetchData = async (url, body) => {
  const response = await fetch(url, body)
  const result = await response.json()
  if(!response.ok){
    throw new Error(result)
  } else {
    return result
  }
}