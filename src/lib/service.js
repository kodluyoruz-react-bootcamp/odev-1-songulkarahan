import axios from "axios";

const ENDPOINT = "https://jsonplaceholder.typicode.com";

async function getData(userId) {
  try {
    const { data: users } = await axios.get(`${ENDPOINT}/users/${userId}`);
    const { data: posts } = await axios.get(
      `${ENDPOINT}/posts/?userId=${userId}`
    );
    users.posts = posts;
    console.log(users);
  } catch (e) {
    console.log(e);
  }
}

export { getData };
