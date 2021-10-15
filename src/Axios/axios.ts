import axios from "axios";

const instance = axios.create({
    baseURL: 'https://rickandmortyapi.com/api',
})

let API = {
    getItems(currPage: any) {
        return instance.get(`/character/?page=${currPage}`)
    },
    getFavouriteItems(ids: Array<number>) {
        return instance.get(`/character/${ids}`)
    }
}

export default API

