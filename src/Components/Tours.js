import React, { useState, useEffect } from 'react'
import TourCard from '../Components/TourCard'

function Tours() {
    const [tourData, setTourData] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const getTours = async() => {
            try {
                setLoading(true)
                const data = await (await fetch('https://course-api.com/react-tours-project')).json()
                // console.log(data)
                setTourData(data)
                setLoading(false)
            } catch (error) {
                return error
            }
        }
        getTours()
    }, [])

    return (
        <div>
            {tourData.map((tour) => {
                <TourCard key={tour.id} tour={tour}/>
            })}
        </div>
    )
}

export default Tours