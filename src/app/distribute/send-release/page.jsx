"use client"

import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef, useEffect, useState } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

import ResizeObserver from "resize-observer-polyfill";

const COLLAPSE_WIDTH = 900;

export default function SendReleasePage() {
  const [mainWidth, setMainWidth] = useState(0);
  const main = useRef(null);

  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      setMainWidth(main.current.offsetWidth);
    });
    resizeObserver.observe(main.current);
    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div className="flex flex-col h-screen" ref={main}>
      <Sheet>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b border-neutral-200 px-4 justify-between">
          <Button variant="outline">Previous</Button>
          <div className="flex gap-2">
            {mainWidth <= COLLAPSE_WIDTH && (
              <SheetTrigger asChild>
                <Button variant="outline">Preview and Order Details</Button>
              </SheetTrigger>
            )}
            <Button>
              Next
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </header>
        <ResizablePanelGroup direction="horizontal" className="flex-1 h-[calc(100vh-64px)]">
          <ResizablePanel className="flex flex-col gap-4 p-8">
            <h1 className="text-2xl font-bold">Send Release</h1>
            <div className="flex-1 rounded-xl bg-muted/50 p-4">Content goes here</div>
          </ResizablePanel>
          <PreviewPanel width={mainWidth} />
        </ResizablePanelGroup>   
      </Sheet>
    </div>
  )
} 

const PreviewPanelContents = () => {
  return (
    <div>Sidebar / Sheet contents here</div>
  )
}

const PreviewPanel = ({width}) => {
  if (width > COLLAPSE_WIDTH) {
    return (
      <>
        <ResizableHandle />
        <ResizablePanel 
          className="bg-neutral-50 p-4" 
          defaultSize={25} 
          maxSize={50} 
          minSize={30}
        >
          <PreviewPanelContents />
        </ResizablePanel>
      </>
    )
  } else {
    return (
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Preview and Order Details</SheetTitle>
          <PreviewPanelContents />
        </SheetHeader>
      </SheetContent>
    )
  }
}