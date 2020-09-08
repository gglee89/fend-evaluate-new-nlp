const baseURL = API_BASE_URL;

const fetchData = async (txt) => {
  return await fetch(`${baseURL}/meaningCloudAPI`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ text: txt }),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    });
};

export { fetchData };
