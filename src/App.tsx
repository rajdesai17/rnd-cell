import { BookOpen, GraduationCap, Lightbulb, Mail, Menu, ScrollText } from 'lucide-react';
import Navbar from './components/Navbar';
import ScrollingAnnouncements from './components/ScrollingAnnouncements';
import AboutSection from './components/AboutSection';
import FounderSection from './components/FounderSection';
import VisionMission from './components/VisionMission';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Header */}
      <header className="bg-gray-800 py-4 px-6 flex items-center justify-between">
        <GraduationCap className="w-10 h-10 text-blue-400" />
        <h1
          className="text-3xl font-bold text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
          style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 700 }}
        >
          Sindhudurg Shikshan Prasarak Mandal's College of Engineering, Kankavli
        </h1>
        <BookOpen className="w-10 h-10 text-blue-400" />
      </header>

      {/* Navigation */}
      <Navbar />

      {/* Announcements */}
      <ScrollingAnnouncements />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 space-y-16">
        <AboutSection />
        <FounderSection />
        <VisionMission />
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-8 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <p className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                contact@innovationuniversity.edu
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Research Papers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Publications
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a href="#" className="hover:text-blue-400 transition-colors">
                  LinkedIn
                </a>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;