import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Courses from './components/Courses';
import AboutBlogContact from './components/AboutBlogContact';
import AdminPanel from './components/AdminPanel';

function App() {
  const [adminOpen, setAdminOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar onOpenAdmin={() => setAdminOpen(true)} />
      <main>
        <Hero />
        <Courses />
        <AboutBlogContact />
      </main>

      <footer className="border-t bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} RZF Academy. All rights reserved.</p>
          <div className="text-sm text-slate-600">Made with ❤️ for better education.</div>
        </div>
      </footer>

      <AdminPanel open={adminOpen} onClose={() => setAdminOpen(false)} />
    </div>
  );
}

export default App;
