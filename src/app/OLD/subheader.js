import { Button } from '@/components/ui/button';

const data = {
  user: {
    name: 'Matthew Evans',
    email: 'matt@prnewswire.com',
    avatar: '/matthew-evans.jpg',
  },
};

export default function SubHeader({ SidebarSheet, size }) {
  return (
    <div className="p-4 border-b border-neutral-300 border-solid flex justify-between">
      <div>
        <Button variant="outline">Previous</Button>
      </div>
      <div className="flex items-center gap-3">
        {size?.width <= 800 ? <SidebarSheet /> : null}
        <Button>
          Next <span className="material-symbols-outlined">chevron_right</span>
        </Button>
      </div>
    </div>
  );
}
