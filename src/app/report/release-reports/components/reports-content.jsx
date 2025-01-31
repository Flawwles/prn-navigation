"use client"

import { useRef, useEffect, useState } from "react"
import ResizeObserver from "resize-observer-polyfill"
import Link from "next/link"
import { cn } from "@/lib/utils"

const DESKTOP_BREAKPOINT = 1000

export function ReportsContent({ reports }) {
  const containerRef = useRef(null)
  const [width, setWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : DESKTOP_BREAKPOINT
  )
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    setWidth(window.innerWidth)

    // Handle window resize
    const handleResize = () => {
      setWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)

    // Handle container resize
    const resizeObserver = new ResizeObserver((entries) => {
      if (entries[0]) {
        const containerWidth = entries[0].contentRect.width
        setWidth(containerWidth)
      }
    })

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current)
    }

    return () => {
      window.removeEventListener('resize', handleResize)
      resizeObserver.disconnect()
    }
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <div ref={containerRef} className="w-full">
      {width >= DESKTOP_BREAKPOINT ? (
        // Table view for desktop
        <div className="rounded-lg border bg-card">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left rounded-tl-lg bg-gray-50 text-gray-800 text-sm px-8 py-4 uppercase leading-relaxed">Release</th>
                <th className="text-left bg-gray-50 text-gray-800 text-sm px-8 py-4 uppercase leading-relaxed">Views</th>
                <th className="text-left bg-gray-50 text-gray-800 text-sm px-8 py-4 uppercase leading-relaxed">Shares</th>
                <th className="text-left bg-gray-50 text-gray-800 text-sm px-8 py-4 uppercase leading-relaxed">Clicks</th>
                <th className="text-left rounded-tr-lg bg-gray-50 text-gray-800 text-sm px-8 py-4 uppercase leading-relaxed">Engagement</th>
              </tr>
            </thead>
            <tbody>
              {reports.map((report) => (
                <tr 
                  key={report.id}
                  className={cn(
                    "border-b last:border-0 hover:bg-muted/50 cursor-pointer transition-colors",
                    "group relative"
                  )}
                 
                >
                  <td className="px-8 py-4">
                  <Link href="/report/release-reports/report">
                    <div className="flex items-center gap-4">
                      <img 
                        src={report.image} 
                        alt="" 
                        className="w-12 h-12 rounded object-cover"
                      />
                      <div>
                        <div className="font-medium group-hover:text-blue-600">
                          {report.title}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {report.meta}
                        </div>
                      </div>
                    </div>
                  </Link>
                  </td>
                  <td className="px-8 py-4 text-right">
                  <Link href={`/report/release-reports/report`}>{report.stats.views}</Link>
                  </td>
                  <td className="px-8 py-4 text-right">
                  <Link href={`/report/release-reports/report`}>{report.stats.shares}</Link>
                  </td>
                  <td className="px-8 py-4 text-right">
                  <Link href={`/report/release-reports/report`}>{report.stats.clicks}</Link>
                  </td>
                  <td className="px-8 py-4 text-right">
                  <Link href={`/report/release-reports/report`}>{report.stats.engagement}</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        // Card view for mobile
        <div className="grid gap-4">
          {reports.map((report) => (
            <Link
              key={report.id}
              href="/report/release-reports/report"
              className={cn(
                "block rounded-lg border bg-card p-4",
                "hover:bg-muted/50 transition-colors"
              )}
            >
              <div className="flex gap-4 mb-4">
                <img 
                  src={report.image} 
                  alt="" 
                  className="w-20 h-20 rounded object-cover"
                />
                <div>
                  <div className="font-medium group-hover:text-blue-600">
                    {report.title}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {report.meta}
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-sm">
                  <div className="text-muted-foreground">Views</div>
                  <div className="font-medium">{report.stats.views}</div>
                </div>
                <div className="text-sm">
                  <div className="text-muted-foreground">Shares</div>
                  <div className="font-medium">{report.stats.shares}</div>
                </div>
                <div className="text-sm">
                  <div className="text-muted-foreground">Clicks</div>
                  <div className="font-medium">{report.stats.clicks}</div>
                </div>
                <div className="text-sm">
                  <div className="text-muted-foreground">Engagement</div>
                  <div className="font-medium">{report.stats.engagement}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
} 