// MoonIcons.tsx

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "./ui/tooltip"



import {
  ChartLine,
  TrendingUp,
  BookOpen,
  Settings,
  LifeBuoy,
  LogOut,
  User,
  Shield,
  Moon
} from "lucide-react"

import React from "react"

const iconItems = [
  { icon: <User />, label: "Profile" },
  { icon: <ChartLine />, label: "Analytics" },
  { icon: <TrendingUp />, label: "Trends" },
  { icon: <BookOpen />, label: "Docs" },
  { icon: <Settings />, label: "Settings" },
  { icon: <LifeBuoy />, label: "Support" },
  { icon: <Shield />, label: "Security" },
  { icon: <LogOut />, label: "Logout" },
]


const radius = 120
const iconCount = iconItems.length
const angleStart = 180
const angleEnd = 360
const angles = Array.from({ length: iconCount }, (_, i) =>
  angleStart + ((angleEnd - angleStart) / (iconCount - 1)) * i
)

export function MoonIcons() {
    const radius = 120
    const iconCount = iconItems.length
    const angleStart = 45       // begin at right
    const angleEnd = 360      // sweep upward left

    const angles = Array.from({ length: iconCount }, (_, i) =>
    angleStart + ((angleEnd - angleStart) / (iconCount - 1)) * i
    )

    const centerX = 130         // near left drawer edge
    const centerY = 300         // lower vertical start point

return (
  <div className="absolute inset-0">
    {iconItems.map((item, index) => {
      const angleRad = (angles[index] * Math.PI) / 180
      const x = centerX + radius * Math.cos(angleRad)
      const y = centerY + radius * Math.sin(angleRad)

      return (
        <TooltipProvider delayDuration={200} key={index}>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                className="absolute bg-white text-black p-2 rounded-full shadow-lg transition backdrop-blur-sm hover:scale-110 hover:ring-2 hover:ring-blue-400 hover:ring-offset-2 hover:shadow-xl"

                style={{
                  left: `${x}px`,
                  top: `${y - 80}px`,
                  transform: "translate(-50%, -50%)",
                  boxShadow: "0 0 10px rgba(255,255,255,0.4)",
                }}
                aria-label={item.label}
                onClick={() => console.log(item.label)}
              >
                {item.icon}
              </button>
            </TooltipTrigger>
            <TooltipContent side="top" sideOffset={10}>
              {item.label}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )
    })}
  </div>
)

}
