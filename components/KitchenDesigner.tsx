import type React from "react"
import { useState } from "react"
import { v4 as uuidv4 } from "uuid"

const KitchenDesigner: React.FC = () => {
  const [walls, setWalls] = useState<{ id: number; length: number; height: number }[]>([])
  const [appliances, setAppliances] = useState<{ id: number; type: string; position: string }[]>([])
  const [cabinets, setCabinets] = useState<{ id: number; type: string; position: string; length: number }[]>([])

  const addWall = (length: number, height: number) => {
    setWalls([...walls, { id: walls.length + 1, length, height }])
  }

  const addAppliance = (type: string, position: string) => {
    setAppliances([...appliances, { id: appliances.length + 1, type, position }])
  }

  const addCabinet = (type: string, position: string, length: number) => {
    setCabinets([...cabinets, { id: cabinets.length + 1, type, position, length }])
  }

  return (
    <div className="border p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-2">Kitchen Designer Widget</h2>
      <div className="space-y-2">
        <button onClick={() => addWall(12, 8)} className="bg-green-500 text-white px-2 py-1 rounded mr-2">
          Add Wall (12' x 8')
        </button>
        <button
          onClick={() => addAppliance("Stove", "Wall A")}
          className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
        >
          Add Stove
        </button>
        <button onClick={() => addCabinet("Base", "Wall A", 6)} className="bg-purple-500 text-white px-2 py-1 rounded">
          Add Base Cabinet (6')
        </button>
      </div>
      <div className="mt-4">
        <h3 className="font-semibold">Walls: {walls.length}</h3>
        <h3 className="font-semibold">Appliances: {appliances.length}</h3>
        <h3 className="font-semibold">Cabinets: {cabinets.length}</h3>
      </div>
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Deploy Kitchen Designer
      </button>
    </div>
  )
}

export default KitchenDesigner

