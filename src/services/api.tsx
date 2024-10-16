import { address } from "./config";
import axios from 'axios';

const baseUrl = `${address}`

const getHeader = {
    'accept': 'application/json',
    'content-type': 'application/json'
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

