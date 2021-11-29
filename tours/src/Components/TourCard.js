import React from 'react'

function TourCard() {
    return (
        <section className="w-10/12 md:w-4/6 border-2 min-h-0 flex flex-col rounded-md overflow-hidden shadow-md">

            <img 
                src="/images/image.jpg" 
                className="w-full h-96 object-cover" 
                alt="Tour pic" 
            /> 

            <div className="w-full min-h-0 p-10 flex flex-col">
                <div className="flex justify-between w-full mb-5">

                    <h2 className="text-2xl font-bold"> 
                        Destination full name 
                    </h2>

                    <button className="text-green-900 bg-green-100 rounded-md py-1 px-2"> 
                        N120,000 
                    </button>
                </div>

                <p>
                    It is a long established fact that a reader will be distracted by the 
                    readable content of a page when looking at its layout. The point of using 
                    Lorem Ipsum is that it has a more-or-less normal distribution of letters, 
                    as opposed to using 'Content here, content here', making it look like 
                    readable English. Many desktop publishing packages and web page editors 
                    now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' 
                    will uncover many web sites still in their infancy. Various versions have evolved 
                    over the years, sometimes by accident, sometimes on purpose (injected humour and 
                    the like).
                </p>

                <button className="border-red-500 text-red-500 border w-60 self-center m-5 rounded-md shadow p-1">
                    NOT INTERESTED
                </button>
            </div>
            
        </section>
    )
}

export default TourCard
