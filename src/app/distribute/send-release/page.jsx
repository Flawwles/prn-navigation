import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SendReleasePage() {
  return (
    <div className="flex h-[calc(100vh-64px)] flex-col">
      <header className="flex h-16 shrink-0 items-center gap-2 border-b border-neutral-200 px-4 justify-between">
        <Button variant="outline">
         Previous
        </Button>
        <Button>
          Next
          <ChevronRight className="h-4 w-4" />
        </Button>
      </header>
      <ResizablePanelGroup direction="horizontal" className="flex-1">
        <ResizablePanel className="flex flex-col gap-4 p-8">
          <h1 className="text-2xl font-bold">Send Release</h1>
          <div className="flex-1 rounded-xl bg-muted/50 p-4">
            Content goes here
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel 
          className="bg-neutral-50" 
          defaultSize={25} 
          maxSize={50} 
          minSize={20}
        >
          <div className="p-4">
            Preview / Order details
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>   
    </div>
  )
} 