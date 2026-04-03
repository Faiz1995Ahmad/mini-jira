
export default function ProjectsHeader() {
    return (
        <div className="flex flex-wrap lg:items-center justify-between items-center gap-4 lg:gap-8 w-full bg-red-300 px-2">
            <ul className="flex items-center justify-center gap-4">
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
            <div className="text-center">
                <button className="py-1 px-4 border-2 border-solid border-black rounded-md">Add</button>
            </div>
            <div className="bg-pink-400 flex justify-center items-center">
                <input type="text" placeholder="search..." className="border-solid border-2 p-1"></input>
            </div>
        </div>
    )
}