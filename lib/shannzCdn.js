/*[ FREE UPLOADER ]*

* no expired
* unlimited storage 
* support all file
* visit: https://whatsapp.com/channel/0029VagBdZ49MF92BygaM53t

*[ shannzCdn.js ]*/

const axios = require("axios");
const fs = require("fs");
const FormData = require("form-data");

async function shannzCdn(path) {
  const form = new FormData();

  const fileStream = fs.createReadStream(path);
  form.append("file", fileStream);

  try {
    const response = await axios.post("https://api.shannmoderz.xyz/server/upload", form, {
      headers: {
        ...form.getHeaders(), 
      },
    });

    return response.data
  } catch (error) {
    return error.message
  }
}

module.exports = { shannzCdn }
