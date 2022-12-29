import axios from "axios";
export let getTrending = async (mediaType) =>{
    let {data} = await axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=79a6d25335117ec7af0350219b7d6017`)
    return data.results
}
export let getDetails = async (id,mediaType) =>{
    let {data} = await axios.get(`https://api.themoviedb.org/3/${mediaType}/${id}?api_key=79a6d25335117ec7af0350219b7d6017`)
    return data
}
// export let getPeople = async () =>{
//     let {data} = await axios.get(`https://api.themoviedb.org/3/person/popular?api_key=79a6d25335117ec7af0350219b7d6017`)
// return data.results
// }
