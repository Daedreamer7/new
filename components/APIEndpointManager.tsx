import type React from "react"
import { useState } from "react"
import { v4 as uuidv4 } from "uuid"

const APIEndpointManager: React.FC = () => {
  const [endpoints, setEndpoints] = useState<string[]>([])

  const addEndpoint = (endpoint: string) => {
    setEndpoints([...endpoints, endpoint])
  }

  return (
    <div className="border p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-2">API Endpoint Manager</h2>
      <div className="space-y-2">
        <button onClick={() => addEndpoint("/preview")} className="bg-green-500 text-white px-2 py-1 rounded mr-2">
          Add Preview Endpoint
        </button>
        <button onClick={() => addEndpoint("/live-edit")} className="bg-yellow-500 text-white px-2 py-1 rounded mr-2">
          Add Live Edit Endpoint
        </button>
        <button onClick={() => addEndpoint("/analytics")} className="bg-purple-500 text-white px-2 py-1 rounded">
          Add Analytics Endpoint
        </button>
      </div>
      <div className="mt-4">
        <h3 className="font-semibold">Configured Endpoints:</h3>
        <ul className="list-disc list-inside">
          {endpoints.map((endpoint, index) => (
            <li key={index}>{endpoint}</li>
          ))}
        </ul>
      </div>
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Deploy API Endpoint Manager
      </button>
    </div>
  )
}

export default APIEndpointManager

