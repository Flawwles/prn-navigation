"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { RadioGroup, RadioGroupItem } from "./ui/radio-group"
import { Label } from "./ui/label"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "./ui/select"
import { Button } from "./ui/button"

export function SendReleaseModal({ isOpen, onClose }) {
  const router = useRouter()
  const [selectedOption, setSelectedOption] = React.useState("new")

  const handleNewRelease = () => {
    router.push("/distribute/send-release")
    onClose()
  }

  const handleDraftOrders = () => {
    router.push("/distribute/send-release")
    onClose()
  }

  const handleNext = () => {
    if (selectedOption === "new") {
      handleNewRelease()
    } else {
      handleDraftOrders()
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[480px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Send Release</DialogTitle>
          <DialogDescription>
            Would you like to use a saved distribution?
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
        <RadioGroup defaultValue="comfortable" onValueChange={setSelectedOption} value={selectedOption}>

        <Label htmlFor="r1" className="flex flex-row gap-4 items-center p-4 h-auto border rounded-lg cursor-pointer hover:bg-accent">
            <RadioGroupItem value="new" id="r1" />
            <div className="flex flex-col">
              <span className="font-semibold block mb-2">No, start new</span>
              <span className="text-xs text-muted-foreground">Start from scratch</span>
            </div>
          </Label>
          
        <Label htmlFor="r2" className="flex flex-row gap-4 items-center p-4 h-auto border rounded-lg cursor-pointer hover:bg-accent">
            <RadioGroupItem value="saved" id="r2" />
            <div className="flex flex-col">
              <span className="font-semibold block mb-2">Yes, used saved distribution</span>
              <span className="text-xs text-muted-foreground">Continue working on a previously saved distribution order.</span>
              <div className="pt-2">
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select saved distribution" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Fruits</SelectLabel>
                      <SelectItem value="apple">PRN Media Release</SelectItem>
                      <SelectItem value="banana">PRN CEO Interview</SelectItem>
                      <SelectItem value="blueberry">Generic Media Release</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </Label>
        </RadioGroup>
        </div>
        <DialogFooter>
          <Button onClick={handleNext}>Next</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
} 