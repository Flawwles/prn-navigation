'use client';

import { useRef, useState } from 'react';
import Header from './header';
import SubHeader from './subheader';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useSize } from '@/hooks/useSize';
import { SearchInput } from '@/components/filters/SearchInput';
import { SidebarInline } from '@/components/sidebar/SidebarInline';
import { SidebarSheet } from '@/components/sidebar/SidebarSheet';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function Home() {
  const target = useRef(null);
  const secondTarget = useRef(null); // Add new ref

  const size = useSize(target);
  const secondSize = useSize(secondTarget); // Add new size observer

  const [searchValue, setSearchValue] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [selectedSort, setSelectedSort] = useState('recommended');

  return (
    <div className="flex flex-col h-screen w-screen fixed">
      <Header />
      <SubHeader SidebarSheet={SidebarSheet} size={size} />
      <main ref={target}>
        <ResizablePanelGroup
          direction="horizontal"
          className={
            secondSize?.width >= 800
              ? 'flex-1 grid grid-cols-[1fr_340px]'
              : 'flex-1'
          }
          onLayout={() => {
            // Force resize observer to update
            if (secondTarget.current) {
              const resizeEvent = new Event('resize');
              window.dispatchEvent(resizeEvent);
            }
          }}
        >
          <ResizablePanel defaultSize={75}>
            <ScrollArea
              className="w-full  bg-neutral-50 h-[calc(100vh-142px)]"
              ref={secondTarget}
            >
              <div className="max-w-[1400px] m-auto">
                <div className="p-5 ">
                  <h2 className="text-5xl font-semibold">Audience</h2>
                  <p className="text-sm pt-2 pb-4">
                    Where should we send the release{' '}
                  </p>

                  <div
                    className={`flex w-full justify-between gap-2 ${
                      secondSize?.width >= 1104 ? 'flex-row' : 'flex-col'
                    }`}
                  >
                    <SearchInput
                      searchValue={searchValue}
                      setSearchValue={setSearchValue}
                    />
                    <Select
                      value={selectedSort}
                      className="h-10 flex-shrink"
                      onValueChange={setSelectedSort}
                    >
                      <SelectTrigger className="h-10 bg-white">
                        <SelectValue>
                          {`Sorting: ${
                            selectedSort.charAt(0).toUpperCase() +
                            selectedSort.slice(1)
                          }`}
                        </SelectValue>
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="recommended">Recommended</SelectItem>
                        <SelectItem value="price-low">
                          Price, low - high
                        </SelectItem>
                        <SelectItem value="price-high">
                          Price, high - low
                        </SelectItem>
                      </SelectContent>
                    </Select>

                    {(() => {
                      return secondSize?.width >= 1104 ? (
                        <Tabs
                          value={selectedRegion}
                          onValueChange={setSelectedRegion}
                        >
                          <TabsList className="h-10">
                            <TabsTrigger value="all" className="h-8">
                              All
                            </TabsTrigger>
                            <TabsTrigger value="nationwide" className="h-8">
                              Nationwide
                            </TabsTrigger>
                            <TabsTrigger value="northwest" className="h-8">
                              Northwest
                            </TabsTrigger>
                            <TabsTrigger value="southeast" className="h-8">
                              Southeast
                            </TabsTrigger>
                            <TabsTrigger value="westsw" className="h-8">
                              West / Southwest
                            </TabsTrigger>
                            <TabsTrigger value="midwest" className="h-8">
                              Midwest
                            </TabsTrigger>
                          </TabsList>
                        </Tabs>
                      ) : (
                        <Select
                          value={selectedRegion}
                          className="h-10 flex-shrink"
                          onValueChange={setSelectedRegion}
                        >
                          <SelectTrigger className="h-10 bg-white">
                            <SelectValue placeholder="Select region" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All</SelectItem>
                            <SelectItem value="nationwide">
                              Nationwide
                            </SelectItem>
                            <SelectItem value="northwest">Northwest</SelectItem>
                            <SelectItem value="southeast">Southeast</SelectItem>
                            <SelectItem value="westsw">
                              West / Southwest
                            </SelectItem>
                            <SelectItem value="midwest">Midwest</SelectItem>
                          </SelectContent>
                        </Select>
                      );
                    })()}
                  </div>
                </div>

                <div className="flex flex-col gap-3 pb-20">
                  <div className="mx-5 bg-white border rounded">
                    <div className="p-5">
                      <h3 className="text-lg font-bold">
                        US1 National Newsline
                      </h3>
                      <p>
                        Includes Press Release Highlight. Includes industry
                        targeting. Newsrooms in all 50 states
                      </p>
                    </div>
                  </div>

                  <div className="mx-5 bg-white border rounded">
                    <div className="p-5">
                      <h3 className="text-lg font-bold">
                        US1 National Newsline
                      </h3>
                      <p>
                        Includes Press Release Highlight. Includes industry
                        targeting. Newsrooms in all 50 states
                      </p>
                    </div>
                  </div>

                  <div className="mx-5 bg-white border rounded">
                    <div className="p-5">
                      <h3 className="text-lg font-bold">
                        US1 National Newsline
                      </h3>
                      <p>
                        Includes Press Release Highlight. Includes industry
                        targeting. Newsrooms in all 50 states
                      </p>
                    </div>
                  </div>

                  <div className="mx-5 bg-white border rounded">
                    <div className="p-5">
                      <h3 className="text-lg font-bold">
                        US1 National Newsline
                      </h3>
                      <p>
                        Includes Press Release Highlight. Includes industry
                        targeting. Newsrooms in all 50 states
                      </p>
                    </div>
                  </div>

                  <div className="mx-5 bg-white border rounded">
                    <div className="p-5">
                      <h3 className="text-lg font-bold">
                        US1 National Newsline
                      </h3>
                      <p>
                        Includes Press Release Highlight. Includes industry
                        targeting. Newsrooms in all 50 states
                      </p>
                    </div>
                  </div>

                  <div className="mx-5 bg-white border rounded">
                    <div className="p-5">
                      <h3 className="text-lg font-bold">
                        US1 National Newsline
                      </h3>
                      <p>
                        Includes Press Release Highlight. Includes industry
                        targeting. Newsrooms in all 50 states
                      </p>
                    </div>
                  </div>

                  <div className="mx-5 bg-white border rounded">
                    <div className="p-5">
                      <h3 className="text-lg font-bold">
                        US1 National Newsline
                      </h3>
                      <p>
                        Includes Press Release Highlight. Includes industry
                        targeting. Newsrooms in all 50 states
                      </p>
                    </div>
                  </div>

                  <div className="mx-5 bg-white border rounded">
                    <div className="p-5">
                      <h3 className="text-lg font-bold">
                        US1 National Newsline
                      </h3>
                      <p>
                        Includes Press Release Highlight. Includes industry
                        targeting. Newsrooms in all 50 states
                      </p>
                    </div>
                  </div>

                  <div className="mx-5 bg-white border rounded">
                    <div className="p-5">
                      <h3 className="text-lg font-bold">
                        US1 National Newsline
                      </h3>
                      <p>
                        Includes Press Release Highlight. Includes industry
                        targeting. Newsrooms in all 50 states
                      </p>
                    </div>
                  </div>

                  <div className="mx-5 bg-white border rounded">
                    <div className="p-5">
                      <h3 className="text-lg font-bold">
                        US1 National Newsline
                      </h3>
                      <p>
                        Includes Press Release Highlight. Includes industry
                        targeting. Newsrooms in all 50 states
                      </p>
                    </div>
                  </div>

                  <div className="mx-5 bg-white border rounded">
                    <div className="p-5">
                      <h3 className="text-lg font-bold">
                        US1 National Newsline
                      </h3>
                      <p>
                        Includes Press Release Highlight. Includes industry
                        targeting. Newsrooms in all 50 states
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollArea>
          </ResizablePanel>
          {size?.width >= 800 ? (
            <>
              <ResizableHandle withHandle />
              <ResizablePanel defaultSize={25} minSize={25} maxSize={50}>
                <SidebarInline />
              </ResizablePanel>
            </>
          ) : null}
        </ResizablePanelGroup>
      </main>
    </div>
  );
}
