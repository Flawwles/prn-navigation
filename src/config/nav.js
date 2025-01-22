import { ChartArea, Home, CirclePlus, Calendar, Megaphone } from 'lucide-react';

export const navItems = [
  {
    title: 'Dashboard',
    url: '/',
    icon: Home,
    isActive: true,
  },
  {
    title: 'Plan',
    url: '#',
    icon: Calendar,
    items: [
      {
        title: 'Content research',
        url: '/plan/content-research',
      },
      {
        title: 'Campaign builder',
        url: '/plan/campaign-builder',
      },
      {
        title: 'Content calendar',
        url: '/plan/content-calendar',
      },
    ],
  },
  // ... rest of your navigation items
];
