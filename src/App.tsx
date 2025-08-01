import * as React from "react"
import { Drawer, DrawerContent, DrawerTrigger } from "./components/ui/drawer"
import { Button } from "./components/ui/button"
import { MoonMenuDrawer } from "./components/MoonMenuDrawer"


function App() {

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <MoonMenuDrawer />
    </div>
  )  
 
}

export default App
