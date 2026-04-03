
export default function ProjectsHeader() {
    return (
        <div className="flex md:flex-row flex-col gap-4 justify-center w-full h-1/14 bg-red-300">
            <ul className="w-3/6 flex items-center justify-center gap-4 bg-blue-600">
                <li>
                    <button className="py-1 px-6 border-2 border-solid border-black rounded-md">All</button>
                </li>
                <li>
                    <span>/</span>
                </li>
                <li>
                    <button className="py-1 px-2 border-2 border-solid border-black rounded-md">In-Progress</button>
                </li>
                <li>
                    <span>/</span>
                </li>
                <li>
                    <button className="py-1 px-4 border-2 border-solid border-black rounded-md">Completed</button>
                </li>
            </ul>
            <div className="bg-green-400 w-1/6 text-center">
                <button className="py-1 px-4 border-2 border-solid border-black rounded-md">Add</button>
            </div>
            <div className="bg-pink-400 w-2/6 flex justify-center items-center">
                <input type="text" placeholder="search..." className="border-solid border-2 p-1"></input>
            </div>
        </div>
    )
}