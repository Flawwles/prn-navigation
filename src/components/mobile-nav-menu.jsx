"use client"

import * as React from "react"
import Link from "next/link"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"

export function MobileNavMenu({ item, isActive, pathname }) {
  const [open, setOpen] = React.useState(false)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger asChild>
            <PopoverTrigger asChild>
              <button
                className={cn(
                  "flex w-full items-center gap-2 rounded-md p-2 text-sm outline-none transition-colors",
                  isActive && "bg-sidebar-accent font-medium text-sidebar-accent-foreground",
                  "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                )}
              >
                {item.icon && <item.icon className="h-4 w-4" />}
              </button>
            </PopoverTrigger>
          </TooltipTrigger>
          <TooltipContent side="right" align="center">
            {item.title}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <PopoverContent className="w-56 p-1" side="right" align="start">
        <nav className="flex flex-col gap-1">
          {item.items.map((subItem) => (
            <Link
              key={subItem.title}
              href={subItem.url}
              onClick={() => setOpen(false)}
              className={cn(
                "flex items-center justify-between rounded-md px-2 py-1.5 text-sm outline-none transition-colors",
                subItem.url === pathname && "bg-accent font-medium text-accent-foreground",
                "hover:bg-accent hover:text-accent-foreground"
              )}
            >
              <span>{subItem.title}</span>
              {subItem.count && (
                <span className="ml-2 rounded bg-primary/10 px-1.5 py-0.5 text-xs font-medium text-primary">
                  {subItem.count}
                </span>
              )}
            </Link>
          ))}
        </nav>
      </PopoverContent>
    </Popover>
  )
} 