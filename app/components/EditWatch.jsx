'use client'
import { useState } from "react";
import { updateWatch } from "../server-actions/updateWatch";

export default function EditWatch({ watch }) {
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        brand: watch.brand,
        model: watch.model,
        referenceNumber: watch.reference_number
    })

    const handleChange = (e) => setFormData({...formData, [e.target.name]: e.target.value })

    return (
        <div>
        <button onClick={() => setShowModal(true)} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Edit
        </button>
        {showModal && (
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-75">
                <div className="bg-gray-800 text-white p-6 rounded-lg">
                    <span onClick={() => setShowModal(false)} className="text-3xl absolute top-0 right-0 cursor-pointer">&times;</span>
                    <form action={updateWatch} onSubmit={() => setShowModal(false)}>
                        <input type="hidden" name="id" value={watch.id} />
                        <div className="mb-4">
                            <label htmlFor="brand" className="block mb-1">Brand</label>
                            <input
                                type="text"
                                id="brand"
                                name="brand"
                                value={formData.brand}
                                onChange={handleChange}
                                className="w-full bg-gray-800 text-white border border-gray-600 rounded-md px-3 py-2"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="model" className="block mb-1">Model</label>
                            <input
                                type="text"
                                id="model"
                                name="model"
                                value={formData.model}
                                onChange={handleChange}
                                className="w-full bg-gray-800 text-white border border-gray-600 rounded-md px-3 py-2"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="referenceNumber" className="block mb-1">Reference Number</label>
                            <input
                                type="text"
                                id="referenceNumber"
                                name="referenceNumber"
                                value={formData.referenceNumber}
                                onChange={handleChange}
                                className="w-full bg-gray-800 text-white border border-gray-600 rounded-md px-3 py-2"
                            />
                        </div>
                        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Save
                        </button>
                    </form>
                </div>
            </div>
        )}
    </div>
    
    )
}