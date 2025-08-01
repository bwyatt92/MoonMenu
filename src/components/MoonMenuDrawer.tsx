import * as React from "react"
import { Drawer, DrawerContent, DrawerTrigger } from "./ui/drawer"
import { Button } from "./ui/button"
import { MoonIcons } from "./MoonIcons"

export function MoonMenuDrawer() {
return (
    <Drawer direction="left">
      <DrawerTrigger asChild>
        <Button variant="outline">Menu</Button>
      </DrawerTrigger>

      {/* ✅ This must be inside the Drawer */}
      <DrawerContent className="h-[300px] sm:h-[400px] bg-transparent shadow-none border-none">
        <div className="w-full h-full relative flex items-end sm:items-center justify-start sm:justify-center overflow-visible px-4">
          <div className="relative w-[80vw] max-w-[300px] h-[200px] sm:h-[250px]">
            <MoonIcons />
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )

}
