async function fetchData() {
  try {
    const response = await fetch(
      "https://restcountries.com/v3.1/name/deutschland"
    );

    if (!response.ok) {
      throw new Error("NOT OK");
    }

    const data = await response.json();
    console.log(data[0]);

  } catch (err) {
    console.error(err);
  }
}

fetchData()
