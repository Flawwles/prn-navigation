"use client"

import { Home, Layout, Calendar } from 'lucide-react';
import { NavMain } from '@/components/nav-main';

const navItems = [
  {
    title: 'Dashboard',
    icon: Home,
    url: '/',
    isActive: true,
  },
  {
    title: 'Demo',
    icon: Layout,
    items: [
      {
        title: 'Sidebar Demo',
        url: '/sidebar-demo',
      },
    ],
  },
  {
    title: 'Planning',
    icon: Calendar,
    items: [
      {
        title: 'Content Calendar',
        url: '/plan/content-calendar',
        count: '5',
      },
    ],
  },
];

export function SidebarContent() {
  return <NavMain items={navItems} />;
} 