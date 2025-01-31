import { ReportsContent } from "./components/reports-content"

export default function ReleaseReportsPage() {
  const reports = [
    {
      id: 1,
      title: "Breaking News: AI Revolutionizes Content Creation",
      meta: "Release meta data",
      image: "https://picsum.photos/200",
      stats: {
        views: 100,
        shares: 50,
        clicks: 200,
        engagement: 30
      }
    },
    {
      id: 2,
      title: "Groundbreaking Research Uncovers the Far-Reaching Effects of Digital Marketing Strategies",
      meta: "Release meta data",
      image: "https://picsum.photos/201",
      stats: {
        views: 150,
        shares: 75,
        clicks: 300,
        engagement: 45
      }
    },
    {
      id: 3,
      title: "New Study Reveals Emerging Trends in Social Media Marketing",
      meta: "Industry insights",
      image: "https://picsum.photos/202",
      stats: {
        views: 320,
        shares: 180,
        clicks: 450,
        engagement: 89
      }
    },
    {
      id: 4,
      title: "Global Survey Shows Shift in Consumer Behavior Post-Pandemic",
      meta: "Market research",
      image: "https://picsum.photos/203",
      stats: {
        views: 280,
        shares: 120,
        clicks: 380,
        engagement: 67
      }
    },
    {
      id: 5,
      title: "Tech Giants Announce Collaborative Initiative for Sustainable Innovation",
      meta: "Technology news",
      image: "https://picsum.photos/204",
      stats: {
        views: 420,
        shares: 230,
        clicks: 560,
        engagement: 95
      }
    },
    {
      id: 6,
      title: "Innovative Startups Reshape the Future of E-commerce",
      meta: "Business trends",
      image: "https://picsum.photos/205",
      stats: {
        views: 190,
        shares: 85,
        clicks: 270,
        engagement: 42
      }
    },
    {
      id: 7,
      title: "Healthcare Industry Embraces Digital Transformation",
      meta: "Healthcare news",
      image: "https://picsum.photos/206",
      stats: {
        views: 250,
        shares: 140,
        clicks: 320,
        engagement: 58
      }
    }
  ]

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-8">Release Reports</h1>
      <ReportsContent reports={reports} />
    </div>
  )
}