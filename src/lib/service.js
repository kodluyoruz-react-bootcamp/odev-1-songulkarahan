import axios from "axios";

const ENDPOINT = "https://jsonplaceholder.typicode.com";

async function getData(userId) {
  try {
    const { data: user } = await axios.get(`${ENDPOINT}/users/${userId}`);
    const { data: posts } = await axios.get(
      `${ENDPOINT}/posts/?userId=${userId}`
    );
    user.posts = posts;
    console.log(user);
  } catch (e) {
    console.log(e);
  }
}

export { getData };

//export default olarak düzenle
