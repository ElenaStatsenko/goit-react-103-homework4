import axios from "axios";
const  ACCESS_KEY = "hz6DtNu86WDq2eHwrs231CdhsA0ERXri0mKKnpcZtbI";
axios.defaults.baseURL="https://api.unsplash.com"
export const fetchArticles = async(serchtopic, page=1) => {
const response = await axios.get("/search/photos", {
    params:{
        query: serchtopic,
        page: page,
        client_id:  ACCESS_KEY,

    },})
    return response.data.results
}