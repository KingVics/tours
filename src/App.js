import TourCard from "./Components/TourCard";

function App() {
    return (
        <main className="flex items-center w-full min-h-screen flex-col my-10 md:my-24 text-gray-700">

            <h1 className="font-black text-4xl border-b-4 border-blue-400 mb-10"> 
                Our Tours 
            </h1>

            <TourCard />

        </main>
    );
}

export default App;
