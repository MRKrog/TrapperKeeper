export const fetchData = async (url, body) => {
  const response = await fetch(url, body)
  const data = await response.json();
  if(!response.ok){
    throw new Error(data)
  } else {
    return data;
  }
}