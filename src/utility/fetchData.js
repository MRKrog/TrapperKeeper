export const fetchData = async (url, body) => {
  const response = await fetch(url, body)
  if(!response.ok){
    const errorMessage = await response.json();
    throw new Error(errorMessage)
  } else {
    return await response.json()
  }
}