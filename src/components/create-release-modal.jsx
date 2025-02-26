"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"


export function CreateReleaseModal({ isOpen, onClose }) {
  const router = useRouter()

  const handleCreateWithAI = () => {
    router.push("/create/ai")
    onClose()
  }

  const handleUpload = () => {
    router.push("/create/upload")
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[480px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Create New Release</DialogTitle>
          <DialogDescription>
            How do you want to create your release?
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div 
            onClick={handleCreateWithAI} 
            className="flex flex-col p-4 h-auto border rounded-lg cursor-pointer hover:bg-accent"
          >
            <div className=" max-w-[300px]">
              <span className="font-semibold block">Create with AI</span>
              <span className="text-xs text-muted-foreground">Generate a release from scratch using Al, then edit and optimize it before distribution.</span>
            </div>
          </div>
          
          <div 
            onClick={handleUpload} 
            className="flex flex-col p-4 h-auto border rounded-lg cursor-pointer hover:bg-accent"
          >
            <div className="max-w-[300px]">
              <span className="font-semibold block">Enhance an existing release</span>
              <span className="text-xs text-muted-foreground">Upload your release, then refine your content with Al-driven insights before distribution.</span>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
} 