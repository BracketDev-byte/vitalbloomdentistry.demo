async function test() {
  try {
    const response = await fetch('http://localhost:1337/api/blogs');
    const data = await response.json();
    console.log(JSON.stringify(data, null, 2));
  } catch (error) {
    console.error('Error:', error.message);
  }
}

test();
