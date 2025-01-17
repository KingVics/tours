import React, { useState, useEffect } from 'react'

import Tours from "./Components/Tours";

function App() {

    const [tourData, setTourData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        const getTours = async() => {
            try {
                setLoading(true)
                const data = await (await fetch('https://course-api.com/react-tours-project')).json()
                setTourData(data)
                setLoading(false)
                console.log(data)
            } catch (error) {
                return error
            }
        }
        getTours()
    }, [])

    return (
        <main className="flex items-center w-full min-h-screen flex-col my-10 md:my-24 text-gray-700">

            <h1 className="font-black text-4xl border-b-4 border-blue-400 mb-10"> 
                Our Tours 
            </h1>

            {tourData ? <Tours tours={tourData} /> : null}
        </main>
    );
}

export default App;
