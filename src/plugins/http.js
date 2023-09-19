import axios from 'axios'

const basicAuth = btoa(`${process.env.NEXT_PUBLIC_BELVO_SECRET_ID}:${process.env.NEXT_PUBLIC_BELVO_SECRET_PASSWORD}`)

export default axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Basic ${basicAuth}`
    }
})
