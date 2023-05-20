const axios = require('axios');
const { transformarModelo, url } = require('../lib/constants');

const index = async (event) => {

    const { search } = event.queryStringParameters || {};

    const query = search ? `${url}people?search=${search}` : `${url}people`;

    const data = await axios
        .get(query)
        .then((res) => {
            return res.data.results.map(transformarModelo);
        })
        .catch((err) => {
            return err
        })


    if (!data) {
        return {
            statusCode: 404,
            body: JSON.stringify({ message: 'No People found' })
        }
    }

    return data;
}

const getById = async (event) => {

    const { id } = event.pathParameters;
    const data = await axios
        .get(`${url}people/${id}`)
        .then((res) => {
            return transformarModelo(res.data);
        })
        .catch((err) => {
            return err
        })

    if (data.code === "ERR_BAD_REQUEST") {
        return {
            statusCode: 404,
            body: JSON.stringify({ message: 'No Person found' })
        }
    }
    return {
        statusCode: 200,
        body: JSON.stringify(data)
    };
}

module.exports = {
    index,
    getById,
}