import axios from "axios";
const  ACCESS_KEY = "hz6DtNu86WDq2eHwrs231CdhsA0ERXri0mKKnpcZtbI";
axios.defaults.baseURL="https://api.unsplash.com"
export const fetchArticles = async(serchtopic, currenPage) => {
const response = await axios.get("/search/photos", {
    params:{
        query: serchtopic,
        page: currenPage,
        per_page: 7,
        client_id:  ACCESS_KEY,

    },})
    return response.data.results
}