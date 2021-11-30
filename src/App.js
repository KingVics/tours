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
            } catch (error) {
                return error
            }
        }
        getTours()
    }, [])


    const handleRemove = (id) => {
        let newTours = tourData.slice(); //copy the array
        newTours.splice(id, 1); //remove the element
        setTourData(newTours); //update the state
        //setTourData(tourData.filter(tour => tour.id !== id)) // this is the same as the line above
    }
    return (
        <main className="flex items-center w-full min-h-screen flex-col my-10 md:my-24 text-gray-700">

            <h1 className="font-black text-4xl border-b-4 border-blue-400 mb-10"> 
                Our Tours 
            </h1>

            {tourData ? <Tours tours={tourData} handleRemove={handleRemove}/> : null}
        </main>
    );
}

export default App;
