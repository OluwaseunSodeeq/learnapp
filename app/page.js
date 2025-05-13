export default function Home() {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-rows-[auto_1fr] min-h-screen">
      {/* Header - full width on all screens */}
      <div className="bg-gray-200 p-4 border border-dotted">Header</div>

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,20rem)_1fr] xl:grid-cols-[minmax(0,19rem)_1fr] gap-4">
        <div className="text-orange p-4 border border-dotted">Sidebar</div>

        <div className="bg-blue-200 p-4 border border-dotted">
          Center
      </div>
      </div>
    </div>
  );
}
