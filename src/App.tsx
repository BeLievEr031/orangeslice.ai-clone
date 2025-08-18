import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"

function App() {
  return (
    <main className="min-h-screen">
      <div className="bg-background text-primary">
        <Navbar />
        <Hero />
      </div>
    </main>
  )
}

export default App