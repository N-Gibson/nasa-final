export const dailyImage = async () => {
  const url = process.env.VUE_APP_NASA_ROUTE;
  const key = process.env.VUE_APP_NASA_KEY;
  try {
    const response = await fetch(`${url}${key}`)
    if(!response.ok) {
      throw new Error('There was an error getting todays photo.')
    }
    const photo = response.json();
    return photo;
  } catch(error) {
    throw new Error(error);
  }
}