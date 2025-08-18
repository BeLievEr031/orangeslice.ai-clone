import Navbar from "./components/Navbar"
import Features from "./sections/Features"
import Footer from "./sections/Footer"
import Hero from "./sections/Hero"
import InsightHighlight from "./sections/InsightHighlight"
import SalesAgentSection from "./sections/SalesAgentSection"

function App() {
  return (
    <main className="min-h-screen">
      <div className="bg-background text-primary">
        <Navbar />
        <Hero />
        <Features />
        <div className="h-px w-full bg-neutral-700"></div>
        <SalesAgentSection />
        <InsightHighlight />
        <Footer />
      </div>
    </main>
  )
}

export default App