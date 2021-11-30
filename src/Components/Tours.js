import React from 'react'
import TourCard from '../Components/TourCard'

function Tours({tours, onDelete}) {

    return (
      <div className="flex flex-col items-center gap-8 md:gap-12">
        {tours.length > 0 ? (
          tours.map((tour) => (
            <TourCard key={tour.id} tour={tour} onDelete={onDelete} />
          ))
        ) : (
          <h1>No More Tours Remaining</h1>
        )}
      </div>
    );
}

export default Tours