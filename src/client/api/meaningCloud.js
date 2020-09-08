const baseURL = API_BASE_URL;

const fetchData = async (txt) => {
  let response = await fetch(`${baseURL}/meaningCloudAPI`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ text: txt }),
  });

  return await response.json();
};

export { fetchData };
