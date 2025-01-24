export default function ContentCalendarPage() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-8">
      <h1 className="text-2xl font-bold">Content Calendar</h1>
      <div className="flex-1 rounded-xl bg-muted/50 p-4">
        <div className="grid grid-cols-7 gap-4 h-full">
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
            <div key={index} className="text-center">{day}</div>
          ))}
          {[...Array(31)].map((_, index) => (
            <div key={index} className={`p-2 items-center ${index === 0 ? 'bg-blue-50 border rounded-xl' : ''}`}>
              {index + 1}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 