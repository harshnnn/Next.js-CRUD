import { addWatch } from "../server-actions/addWatch";

export default function WatchForm(){
    return(
        <form action={addWatch} className="bg-gray-900 text-white p-6 rounded-lg">
        <div className="mb-4">
            <label htmlFor="brand" className="block mb-1">Brand</label>
            <input type="text" id="brand" name="brand" className="w-full bg-gray-800 text-white border border-gray-600 rounded-md px-3 py-2" required />
        </div>
        <div className="mb-4">
            <label htmlFor="model" className="block mb-1">Model</label>
            <input type="text" id="model" name="model" className="w-full bg-gray-800 text-white border border-gray-600 rounded-md px-3 py-2" required />
        </div>
        <div className="mb-4">
            <label htmlFor="referenceNumber" className="block mb-1">Reference Number</label>
            <input type="text" id="referenceNumber" name="referenceNumber" className="w-full bg-gray-800 text-white border border-gray-600 rounded-md px-3 py-2" required />
        </div>
        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add Watch
        </button>
    </form>
    )
}