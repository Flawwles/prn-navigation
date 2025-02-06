import { SidebarGroup, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider } from "@/components/ui/sidebar";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function ReleaseReportsPage() {
  const items = [
    { title: "Wire", active: true },
    { title: "Amplification" },
    { title: "Multi news channel" },
  ];

  return (
    <div className="grid grid-cols-[250px_1fr]">
      <div className=" h-screen border-r">

      <SidebarGroup>
        <SidebarMenu>
        <Link href="/report/release-reports">
            <SidebarMenuItem>
              <SidebarMenuButton size="lg" className="text-xl font-bold">
               <ChevronLeft className="mr-2" /> <h1>Release Reports</h1>
              </SidebarMenuButton>
            </SidebarMenuItem>
            </Link>
        
          </SidebarMenu>
        </SidebarGroup>
         <SidebarGroup>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton tooltip={item.title} isActive={item.active}>
                <span>{item.title}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
          </SidebarMenu>
        </SidebarGroup>
       
      
      </div>
      <div className="p-8">
        <h1 className="text-2xl font-bold"></h1>
      </div>
    </div>
  );
}