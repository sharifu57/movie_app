import { address } from "./config";
import axios from 'axios';

const baseUrl = `${address}`
// const bearerToken = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1N2M1ZTkxNjUzODRmMGRjNGQzNGQ2MmRhYWNkZmI0NyIsIm5iZiI6MTcyOTE1MDQyOC40NDU2MDEsInN1YiI6IjY3MTBiYzgyZGI3OWM5Y2VhZTBlZGI0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0lug1DSowwQY_SEt5ouFsAONqvuog_dMIKEjAq_oXlI"

const getHeader = {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1N2M1ZTkxNjUzODRmMGRjNGQzNGQ2MmRhYWNkZmI0NyIsIm5iZiI6MTcyOTE1MDQyOC40NDU2MDEsInN1YiI6IjY3MTBiYzgyZGI3OWM5Y2VhZTBlZGI0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0lug1DSowwQY_SEt5ouFsAONqvuog_dMIKEjAq_oXlI'
}

export const fetchData = async(endpoint: string) => {
    try{
        const response = await axios.get(
            `${baseUrl}/${endpoint}}`,
            { headers: getHeader}
        )

        return response.data
    }catch(err){
        throw err
    }
}

export const postData = async(endpoint: string, data: any)=>{
    try{
        const response = await axios.post(
            `${baseUrl}/${endpoint}`,
            data,
            { headers: getHeader}
        )

        return response.data
    }catch(err){
        throw err
    }
}

export const putData = async(endpoint: string, data: any)=>{
    try{
        const response = await axios.put(
            `${baseUrl}/${endpoint}`,
            data,
            { headers: getHeader}
        )
        return response.data
    }catch(err){
        throw err
    }
}

export const deleteData = async(endpoint: string)=>{
    try{
        const response = await axios.delete(
            `${baseUrl}/${endpoint}`,
            { headers: getHeader}
        )
        return response.data
    }catch(err){
        throw err
    }
}

