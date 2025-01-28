import type React from "react"
import GrapesJSPlugin from "../components/GrapesJSPlugin"
import KitchenDesigner from "../components/KitchenDesigner"
import APIEndpointManager from "../components/APIEndpointManager"
import SnippetBuilder from "../components/SnippetBuilder"
import UnitValidator from "../components/UnitValidator"

const WidgetShowcase: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Widget Showcase</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <GrapesJSPlugin />
        <KitchenDesigner />
        <APIEndpointManager />
        <SnippetBuilder />
        <UnitValidator />
      </div>
    </div>
  )
}

export default WidgetShowcase

