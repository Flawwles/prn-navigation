import { SidebarGroup, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider } from "@/components/ui/sidebar";

export default function ReleaseReportsPage() {
  const items = [
    { title: "Wire", active: true },
    { title: "Amplification" },
    { title: "Multi news channel" },
  ];

  return (
    <div className="grid grid-cols-[250px_1fr]">
      <div className="bg-neutral-50 h-screen border-r">

      <h1 className="text-xl font-bold p-4">Release Reports</h1>
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