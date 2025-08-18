import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import SalesAgentSection from "./sections/SalesAgentSection"

function App() {
  return (
    <main className="min-h-screen">
      <div className="bg-background text-primary">
        <Navbar />
        <Hero />
        <div className="h-px w-full bg-neutral-700"></div>
        <SalesAgentSection />
      </div>
    </main>
  )
}

export default App