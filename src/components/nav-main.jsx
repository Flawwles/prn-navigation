"use client"

import { ChevronRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSidebar } from "@/components/ui/sidebar";
import { MobileNavMenu } from "@/components/mobile-nav-menu";

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
                              <Link href={subItem.url}>
                                <span>{subItem.title}</span>
                                {subItem.url === "/report/knowledge-base" && <ExternalLink className='stroke-gray-600' />}
                                {subItem.count && <SidebarMenuBadge className="bg-blue-100 text-blue-900">{subItem.count}</SidebarMenuBadge>}
                              </Link>
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
    </SidebarGroup>
  );
}
