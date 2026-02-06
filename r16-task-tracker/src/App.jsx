import Panel from "./components/Panel"

export default function App() {
  // color scheme
  // -dark mode: bg-slate-900 text-slate-100
  // -dark mode accent: border-teal-800
  // -light mode: bg-slate-100 text-slate-900

  return (
    <div className="p-8 min-h-screen bg-slate-900 text-slate-100">
      <Panel>
        <h1>Task Tracker</h1>
      </Panel>
      <Panel className='mt-6'>
        <p>the main task tracker cards go here</p>
      </Panel>
    </div >
  )
}
