"use client"

import { useState } from "react"
import { ChevronRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSidebar } from "@/components/ui/sidebar";
import { MobileNavMenu } from "@/components/mobile-nav-menu";
import { CreateReleaseModal } from "@/components/create-release-modal";
import { SendReleaseModal } from "@/components/send-release-modal";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"

export function NavMain({ items }) {
  const pathname = usePathname()
  const { state } = useSidebar()
  const isCollapsed = state === "collapsed"
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
  const [isSendModalOpen, setIsSendModalOpen] = useState(false)

  const isItemActive = (item) => {
    // For parent items with subitems
    if (item.items) {
      const basePath = item.title.toLowerCase();
      // Check if the pathname starts with the base path or is exactly the base path
      return pathname.startsWith(`/${basePath}/`) || pathname === `/${basePath}`;
    }

    // For items without subitems or subitems themselves
    return item.url === pathname;
  }

  const handleMenuItemClick = (subItem) => {
    // Check if this is the "Create new release" item
    if (subItem.url === "/create/ai" && subItem.title === "Create new release") {
      setIsCreateModalOpen(true)
      return true // Prevent default navigation
    }
    
    // Check if this is the "Send release" item
    if (subItem.url === "/distribute/send-release" && subItem.title === "Send Release") {
      setIsSendModalOpen(true)
      return true // Prevent default navigation
    }
    
    return false // Allow default navigation
  }

  return (
    <SidebarGroup>
      <SidebarMenu>
        {items.map((item) => (
          <Collapsible
            key={item.title}
            asChild
            defaultOpen={isItemActive(item) || (item.items?.some(subItem => subItem.url === pathname))}
            className="group/collapsible">
            <SidebarMenuItem>
              {item.topLevel ? (
                <Link href={item.url}>
                  <SidebarMenuButton 
                    tooltip={item.title} 
                    isActive={isItemActive(item)}
                  >
                    {item.icon && <item.icon />}
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </Link>
              ) : isCollapsed && item.items ? (
                <MobileNavMenu 
                  item={item} 
                  isActive={isItemActive(item)}
                  pathname={pathname}
                  onSubItemClick={handleMenuItemClick}
                />
              ) : (
                <>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton 
                      tooltip={item.title} 
                      isActive={isItemActive(item)}
                    >
                      {item.icon && <item.icon />}
                      <span>{item.title}</span>
                      {item.items && (
                        <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                      )}
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  {item.items && (
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {item.items.map((subItem) => (
                          <SidebarMenuSubItem key={subItem.title}>
                            <SidebarMenuSubButton 
                              asChild
                              isActive={subItem.url === pathname || pathname.startsWith(subItem.url + '/')}
                            >
                              {subItem.title === "Create new release" ? (
                                <button 
                                  onClick={() => setIsCreateModalOpen(true)}
                                  className="w-full text-left flex items-center"
                                >
                                  <span>{subItem.title}</span>
                                  {subItem.count && <SidebarMenuBadge className="bg-blue-100 text-blue-900">{subItem.count}</SidebarMenuBadge>}
                                </button>
                              ) : subItem.title === "Send Release" ? (
                                <button 
                                  onClick={() => setIsSendModalOpen(true)}
                                  className="w-full text-left flex items-center"
                                >
                                  <span>{subItem.title}</span>
                                  {subItem.count && <SidebarMenuBadge className="bg-blue-100 text-blue-900">{subItem.count}</SidebarMenuBadge>}
                                </button>
                              ) : (
                                <Link href={subItem.url}>
                                  <span>{subItem.title}</span>
                                  {subItem.url === "/report/knowledge-base" && <ExternalLink className='stroke-gray-600' />}
                                  {subItem.count && <SidebarMenuBadge className="bg-blue-100 text-blue-900">{subItem.count}</SidebarMenuBadge>}
                                </Link>
                              )}
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  )}
                </>
              )}
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
      <CreateReleaseModal 
        isOpen={isCreateModalOpen} 
        onClose={() => setIsCreateModalOpen(false)} 
      />
      <SendReleaseModal 
        isOpen={isSendModalOpen} 
        onClose={() => setIsSendModalOpen(false)} 
      />
    </SidebarGroup>
  );
}
