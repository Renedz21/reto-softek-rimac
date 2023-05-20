const axios = require('axios');
const { transformarModelo, url } = require('../lib/constants');

const handler = async (event) => {

    const data = await axios
        .get(`${url}planets`)
        .then((res) => {
            return res.data.results.map(transformarModelo);
        })
        .catch((err) => {
            return err
        })

    if (data.length === 0) {
        return {
            statusCode: 404,
            body: JSON.stringify({ message: 'No Planets found' })
        }
    }
    return data;
}

module.exports = {
    handler
}