export default function HomePage() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-8">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl bg-muted/50 p-4 aspect-square" />
        <div className="rounded-xl bg-muted/50 p-4 aspect-square" />
        <div className="rounded-xl bg-muted/50 p-4 aspect-square" />
        <div className="rounded-xl bg-muted/50 p-4 aspect-square" />
      </div>
    </div>
  )
}
