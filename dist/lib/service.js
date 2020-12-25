"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _axios = require('axios'); var _axios2 = _interopRequireDefault(_axios);

const ENDPOINT = "https://jsonplaceholder.typicode.com";

 async function getData(userId) {
  try {
    if (typeof userId === "number") {
      const { data: user } = await _axios2.default.get(`${ENDPOINT}/users/${userId}`);
      const { data: posts } = await _axios2.default.get(
        `${ENDPOINT}/posts/?userId=${userId}`
      );
      user.posts = posts;
      console.log(user);
    }
  } catch (e) {
    console.log("Error!");
  }
} exports.default = getData;
//export default { getData };
//export { getData as default };

//export default olarak düzenle
