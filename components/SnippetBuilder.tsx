import type React from "react"
import { useState } from "react"
import { v4 as uuidv4 } from "uuid"

interface Snippet {
  id: string
  title: string
  code: string
}

const SnippetBuilder: React.FC = () => {
  const [snippets, setSnippets] = useState<Snippet[]>([])
  const [title, setTitle] = useState("")
  const [code, setCode] = useState("")

  const addSnippet = () => {
    if (title && code) {
      setSnippets([...snippets, { id: uuidv4(), title, code }])
      setTitle("")
      setCode("")
    }
  }

  const copySnippet = (code: string) => {
    navigator.clipboard.writeText(code).then(() => {
      alert("Snippet copied to clipboard!")
    })
  }

  return (
    <div className="border p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-2">Snippet Builder</h2>
      <div className="space-y-2">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Snippet Title"
          className="w-full p-2 border rounded"
        />
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Snippet Code"
          className="w-full p-2 border rounded h-24"
        />
        <button onClick={addSnippet} className="bg-green-500 text-white px-4 py-2 rounded">
          Add Snippet
        </button>
      </div>
      <div className="mt-4">
        <h3 className="font-semibold">Snippets:</h3>
        {snippets.map((snippet) => (
          <div key={snippet.id} className="mt-2 p-2 border rounded">
            <h4 className="font-medium">{snippet.title}</h4>
            <pre className="bg-gray-100 p-2 rounded mt-1">{snippet.code}</pre>
            <button
              onClick={() => copySnippet(snippet.code)}
              className="mt-2 bg-blue-500 text-white px-2 py-1 rounded text-sm"
            >
              Copy
            </button>
          </div>
        ))}
      </div>
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Deploy Snippet Builder
      </button>
    </div>
  )
}

export default SnippetBuilder

