import { ScrollArea } from '@/components/ui/scroll-area';
import { SidebarContent } from './SidebarContent';

export const SidebarInline = () => {
  return (
    <div className="h-full border-l border-solid border-neutral-300 ">
      <ScrollArea className="h-[calc(100vh-142px)] ">
        <div className="p-4">
          <SidebarContent />
        </div>
      </ScrollArea>
    </div>
  );
}; 