import React from 'react'
import TourCard from '../Components/TourCard'

function Tours({tours, handleRemove}) {

    return (
        <div className="flex flex-col items-center gap-8 md:gap-12">
            {(tours.length > 0) ? tours.map((tour) => (
                <TourCard key={tour.id} tour={tour} id={tour.id} handleRemove={handleRemove}/>
            )) 
            : null
            }
        </div>
    )
}

export default Tours