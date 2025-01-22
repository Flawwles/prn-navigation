"use client"

import * as React from "react"
import {
  ChartArea,
  Home,
  CirclePlus,
  Calendar,
  Megaphone
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import Image from "next/image"

const data = {
  user: {
    name: "Matthew Evans",
    account: "PRN Account",
    avatar: "/matthew-evans.jpg",
  },
  
  navMain: [
    {
      title: "Dashboard",
      url: "/",
      topLevel: true,
      icon: Home,
      isActive: true,
    },
    {
      title: "Plan",
      icon: Calendar,
      isActive: false,
      items: [
        {
          title: "Content research",
          url: "/plan/content-research",
        },
        {
          title: "Campaign builder",
          url: "/plan/campaign-builder",
        },
        {
          title: "Content calendar",
          url: "/plan/content-calendar",
        },
      ],
    },
    {
      title: "Create",
      icon: CirclePlus,
      items: [
        {
          title: "Create with AI",
          url: "/create/ai",
        },
        {
          title: "Upload and edit with AI",
          url: "/create/upload",
        },
        {
          title: "Drafts",
          url: "/create/drafts",
          count: 15
        },
      ],
    },
    {
      title: "Distribute",
      icon: Megaphone,
      items: [
        {
          title: "Send Release",
          url: "/distribute/send-release",
        },
        {
          title: "Orders and Approvals",
          url: "/distribute/approvals",
          count: 3,
        },
      ],
    },
    {
      title: "Report",
      icon: ChartArea,
      items: [
        {
          title: "Release reports",
          url: "/report/release-reports",
        },
        {
          title: "Broadcast reports",
          url: "/report/broadcast-reports",
        },
        {
          title: "Report settings",
          url: "/report/report-settings",
        },
        {
          title: "Knowledge base",
          url: "/report/knowledge-base",
        },
      ],
    },
  ],
}

import { useSidebar } from "@/components/ui/sidebar"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"


export function AppSidebar({
  ...props
}) {
  const { state, isMobile, openMobile, setOpenMobile } = useSidebar()

  React.useEffect(() => {
    if (isMobile && openMobile) {
      setOpenMobile(false);
    }
  }, [isMobile, openMobile]);

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <ExpandedLogo className="group-data-[collapsible=icon]:hidden" /> 
        <CollapsedLogo className="hidden group-data-[collapsible=icon]:block" />
      </SidebarHeader>
      <SidebarContent>
        {state === 'expanded' ? null : (
          <SidebarMenu className="p-2">
            <SidebarMenuItem>
              {!isMobile && (
                    <TooltipProvider delayDuration={0}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                      <SidebarTrigger className="w-8" />
                      </TooltipTrigger>
                      <TooltipContent  side="right" align="center">
                        <p>Open sidebar</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
              )}
            </SidebarMenuItem>
          </SidebarMenu>
        )}
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}

const ExpandedLogo = ({className}) => (
  <div className={className}>
  <div className="flex justify-between items-center pl-3 pt-2">
    <Image src='/prn-logo.svg' width={156} height={18} alt="PRN Logo" />
    <SidebarTrigger className="-ml-1" />
    
  </div>
  </div>
);

const CollapsedLogo = ({className}) => (
  <div className={className}>
  <div className="flex justify-between items-center pl-1 pt-2">
    <Image src='/prn-icon.svg' width={24} height={24} alt="PRN Logo"/>
  </div>
  </div>
);

