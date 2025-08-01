import * as React from "react"
import { Drawer, DrawerContent, DrawerTrigger } from "./ui/drawer"
import { Button } from "./ui/button"
import { MoonIcons } from "./MoonIcons"

export function MoonMenuDrawer() {
return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Menu</Button>
      </DrawerTrigger>

      {/* ✅ This must be inside the Drawer */}
      <DrawerContent
      className="h-[250px] bg-transparent shadow-none border-none"
    >
      <div className="w-full h-full relative flex items-end justify-center overflow-hidden">
        <div className="w-[300px] h-[150px] relative">
            <MoonIcons />
          </div>
      </div>
    </DrawerContent>
    </Drawer>
  )

}
