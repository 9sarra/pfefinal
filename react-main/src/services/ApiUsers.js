import axios from "axios";

const apiUrl = 'http://localhost:5000/users/'

export async function getAllUsers() 
{
     return await axios.get(`${apiUrl}`)
}
