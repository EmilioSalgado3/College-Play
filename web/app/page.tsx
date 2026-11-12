export default function Home() 
{
    return (
        <main className="min-h-screen flex flex-col items-center justify-center gap-6">
            <h1 className="text-3xl font-bold">
                College Play
            </h1>

            <p className = "text-gray-600">
                Connecting students with college coaches.
            </p>

           <div className="flex gap-4">{/* make the buttons be next to each other */}
             <button className="bg-blue-700 text-white px-6 py-3 rounded">
                I'm a player
            </button>
            <button className="bg-gray-700 text-white px-6 py-3 rounded">
                I'm a coach
            </button>
           </div>
        </main>
    );
}