import NavigationBar from "./components/NavigationBar";
import About from "./components/sections/About";
import Awards from "./components/sections/Awards";
import Education from "./components/sections/Education";
import Experience from "./components/sections/Experience";
import Header from "./components/sections/Header";
import Skills from "./components/sections/Skills";
import BackToTopButton from "./components/ui/BackToTopButton";
import { resumeData } from "./data/resumeData";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 dark:bg-gray-950 dark:text-gray-300">
      <NavigationBar />
      <main className="container mx-auto max-w-4xl p-4 sm:p-6 md:p-8">
        <Header />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Awards />

      </main>
      <footer className="text-center py-4 text-sm text-gray-500 dark:text-gray-400">
        <p>© {new Date().getFullYear()} {resumeData.name}. All rights reserved.</p>
      </footer>
      <BackToTopButton />
    </div>
  )
}

export default App
