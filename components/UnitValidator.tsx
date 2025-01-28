import type React from "react"
import { useState } from "react"
import { v4 as uuidv4 } from "uuid"

interface Room {
  id: string
  name: string
  sqFt: number
}

const UnitValidator: React.FC = () => {
  const [unitSqFt, setUnitSqFt] = useState(0)
  const [rooms, setRooms] = useState<Room[]>([])
  const [roomName, setRoomName] = useState("")
  const [roomSqFt, setRoomSqFt] = useState(0)

  const addRoom = () => {
    if (roomName && roomSqFt > 0) {
      setRooms([...rooms, { id: uuidv4(), name: roomName, sqFt: roomSqFt }])
      setRoomName("")
      setRoomSqFt(0)
    }
  }

  const totalRoomSqFt = rooms.reduce((total, room) => total + room.sqFt, 0)
  const isValid = totalRoomSqFt === unitSqFt

  return (
    <div className="border p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-2">Unit Validator</h2>
      <div className="space-y-2">
        <input
          type="number"
          value={unitSqFt}
          onChange={(e) => setUnitSqFt(Number(e.target.value))}
          placeholder="Total Unit Sq Ft"
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          value={roomName}
          onChange={(e) => setRoomName(e.target.value)}
          placeholder="Room Name"
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          value={roomSqFt}
          onChange={(e) => setRoomSqFt(Number(e.target.value))}
          placeholder="Room Sq Ft"
          className="w-full p-2 border rounded"
        />
        <button onClick={addRoom} className="bg-green-500 text-white px-4 py-2 rounded">
          Add Room
        </button>
      </div>
      <div className="mt-4">
        <h3 className="font-semibold">Rooms:</h3>
        {rooms.map((room) => (
          <div key={room.id} className="mt-2">
            {room.name}: {room.sqFt} sq ft
          </div>
        ))}
        <div className="mt-2 font-bold">Total Room Sq Ft: {totalRoomSqFt}</div>
        <div className={`mt-2 font-bold ${isValid ? "text-green-500" : "text-red-500"}`}>
          {isValid ? "Valid" : "Mismatch"}
        </div>
      </div>
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Deploy Unit Validator</button>
    </div>
  )
}

export default UnitValidator

