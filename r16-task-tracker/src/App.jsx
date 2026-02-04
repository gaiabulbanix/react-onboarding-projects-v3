export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold mb-4">Vite + React + Tailwind</h1>
        <p className="text-sm text-slate-600">
          If you can see this styled card, Tailwind is working.
        </p>
        <div className="mt-6">
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Nice — Tailwind working
          </button>
        </div>
      </div>
    </div>
  );
}
