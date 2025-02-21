"use client"

import * as React from "react"
import {
  CirclePlus,
  Bell,
  CircleHelp,
  ExternalLink
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import Image from "next/image"


const Home = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M6 19H9V13H15V19H18V10L12 5.5L6 10V19ZM4 21V9L12 3L20 9V21H13V15H11V21H4Z" fill="currentColor"/>
  </svg>
)
const Plan = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 22C4.45 22 3.97917 21.8042 3.5875 21.4125C3.19583 21.0208 3 20.55 3 20V6C3 5.45 3.19583 4.97917 3.5875 4.5875C3.97917 4.19583 4.45 4 5 4H6V2H8V4H16V2H18V4H19C19.55 4 20.0208 4.19583 20.4125 4.5875C20.8042 4.97917 21 5.45 21 6V20C21 20.55 20.8042 21.0208 20.4125 21.4125C20.0208 21.8042 19.55 22 19 22H5ZM5 20H19V10H5V20ZM5 8H19V6H5V8Z" fill="currentColor"/>
</svg>

)
const Megaphone = () => (
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.88883 19V13.8149H5.59256C4.8796 13.8149 4.26927 13.561 3.76156 13.0533C3.25385 12.5456 3 11.9353 3 11.2223V8.62977C3 7.91681 3.25385 7.30648 3.76156 6.79877C4.26927 6.29107 4.8796 6.03721 5.59256 6.03721H10.7777L17.2591 2.14838V17.7037L10.7777 13.8149H9.48139V19H6.88883ZM14.6665 13.1019V6.75016L11.4906 8.62977H5.59256V11.2223H11.4906L14.6665 13.1019ZM18.5553 14.2686V5.58351C19.1387 6.10202 19.6086 6.73396 19.965 7.47932C20.3215 8.22468 20.4998 9.04025 20.4998 9.92604C20.4998 10.8118 20.3215 11.6274 19.965 12.3728C19.6086 13.1181 19.1387 13.7501 18.5553 14.2686Z" fill="currentColor"/>
</svg>
)
const ChartArea = () => (
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 21V19H22V21H2ZM3 18V11H6V18H3ZM8 18V6H11V18H8ZM13 18V9H16V18H13ZM18 18V3H21V18H18Z" fill="currentColor"/>
</svg>
)

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
      icon: Plan,
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
          title: "Draft Content",
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
          title: "Draft orders",
          url: "/distribute/draft-orders",
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
          title: "Account performance",
          url: "/report/account-performance",
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
          title: "Help",
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
import { DropdownMenuGroup } from "./ui/dropdown-menu"


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

        <div className="pb-4 border-b border-sidebar-border">
        <ExpandedLogo className="group-data-[collapsible=icon]:hidden" /> 
        <CollapsedLogo className="hidden group-data-[collapsible=icon]:block pb-3" />

        {state === 'expanded' ? null : (
          <SidebarMenu className="pt-2">
            
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
        </div>
          
        
        <NavUser user={data.user} />
        
      </SidebarHeader>
      <SidebarContent>
      
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
     <DropdownMenuGroup className="mb-4">
     <SidebarMenu >
      <SidebarMenuItem>
        <SidebarMenuButton>
          <Bell /> <span className="group-data-[collapsible=icon]:hiden">Notifications</span></SidebarMenuButton>
        <SidebarMenuButton><CircleHelp /><span className="group-data-[collapsible=icon]:hiden">Help and support</span></SidebarMenuButton>
      </SidebarMenuItem>
      </SidebarMenu>
      </DropdownMenuGroup>
      
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

