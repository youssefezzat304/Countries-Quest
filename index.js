

async function fetchData() {
  const code = 8;

  try {
    const response = await fetch(
      "https://restcountries.com/v3.1/independent?status=true"
    );

    if (!response.ok) {
      throw new Error("NOT OK");
    }

    const data = await response.json();
    console.log(data);

  } catch (err) {
    console.error(err);
  }
}

fetchData()
