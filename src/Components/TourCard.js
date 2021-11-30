import React, {useState, useEffect } from 'react'


function TourCard({ tour, id, handleRemove }) {
    // console.log(id)
    
    return (
        <section className="w-10/12 md:w-4/6 border-2 min-h-0 flex flex-col rounded-md overflow-hidden shadow-md">
            <img 
                src={tour.image} 
                className="w-full h-96 object-cover" 
                alt="Tour pic" 
            /> 
            <div className="w-full min-h-0 p-10 flex flex-col">
                <div className="flex justify-between w-full mb-5">

                    <h2 className="text-2xl font-bold"> 
                        {tour.name} 
                    </h2>

                    <button className="text-green-900 bg-green-100 rounded-md py-1 px-2"> 
                        {tour.price} 
                    </button>
                </div>
                <p>
                    {tour.info}
                </p>
                <button className="border-red-500 text-red-500 border w-60 self-center m-5 rounded-md shadow p-1" onClick={() => handleRemove(id)}>
                    NOT INTERESTED
                </button>
            </div>
            
        </section>
    )
}

export default TourCard
