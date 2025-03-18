import { BookOpen, GraduationCap, Lightbulb, Mail, Menu, ScrollText } from 'lucide-react';
import Navbar from './components/Navbar';
import ScrollingAnnouncements from './components/ScrollingAnnouncements';
import AboutSection from './components/AboutSection';
import FounderSection from './components/FounderSection';
import VisionMission from './components/VisionMission';
// Import the logo images
import leftLogo from '/sspmcoe-social-removebg-preview.png';
import rightLogo from '/WhatsApp_Image_2025-03-18_at_19.48.12-removebg-preview.png';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Header */}
      <header className="bg-gray-800 py-8 px-8 flex items-center justify-between">
        <img 
          src={leftLogo} 
          alt="SSPMCOE Logo" 
          className="w-24 h-24 md:w-32 md:h-32 object-contain" 
        />
        <h1
          className="text-xl md:text-2xl lg:text-3xl font-bold text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mx-4 leading-loose"
          style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 700 }}
        >
          Sindhudurg Shikshan Prasarak Mandal's<br></br>College of Engineering, Kankavli
        </h1>
        <img 
          src={rightLogo} 
          alt="College Logo" 
          className="w-24 h-24 md:w-32 md:h-32 object-contain" 
        />
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