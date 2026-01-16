import { useEffect, useState } from "react"

export const useLocalStoarage = (key, initialValue) => {
    const [value, setValue] = useState(() => {
        try {
            const val = localStorage.getItem(key);

            return val ? JSON.parse(val) : initialValue
        } catch (error) {
            console.log('Error while setting localstorage value')
        }
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    },[key, value])

    return [value, setValue]
}


//https://nodejs.medium.com/an-interview-with-opentable-make-your-reservations-with-node-6df3c63c95b7