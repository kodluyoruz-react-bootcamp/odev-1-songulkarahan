import axios from "axios";

const ENDPOINT = "https://jsonplaceholder.typicode.com";

export default async function getData(userId) {
  try {
    if (typeof userId === "number") {
      const { data: user } = await axios.get(`${ENDPOINT}/users/${userId}`);
      const { data: posts } = await axios.get(
        `${ENDPOINT}/posts/?userId=${userId}`
      );
      user.posts = posts;
      console.log(user);
    }
  } catch (e) {
    console.log("Error!");
  }
}
//export default { getData };
//export { getData as default };

//export default olarak düzenle
