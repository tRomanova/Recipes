import axios from "axios";

const basUrl = "http://localhost:3001"

async function getRecipes () {
    let url = `${basUrl}/recipes`

    let response = await axios.get(url)
    return response
}

export {
    getRecipes
}
