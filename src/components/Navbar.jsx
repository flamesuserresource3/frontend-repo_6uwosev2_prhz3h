import React from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Beranda', href: '#beranda' },
  { label: 'Paket Kursus', href: '#paket' },
  { label: 'Tentang Kami', href: '#tentang' },
  { label: 'Blog', href: '#blog' },
  { label: 'Kontak', href: '#kontak' },
  { label: 'Admin', href: '#admin' },
];

export default function Navbar({ onOpenAdmin }) {
  const [open, setOpen] = React.useState(false);

  const handleClick = (href) => {
    if (href === '#admin') {
      onOpenAdmin?.();
      setOpen(false);
      return;
    }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-white/70 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 grid place-content-center rounded-md bg-gradient-to-tr from-indigo-600 to-purple-600 text-white font-bold">R</div>
            <span className="font-semibold text-slate-900 text-lg">RZF Academy</span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-slate-700">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleClick(item.href)}
                className="hover:text-indigo-600 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md hover:bg-slate-100"
            onClick={() => setOpen((s) => !s)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleClick(item.href)}
                  className="text-left px-2 py-2 rounded hover:bg-slate-100"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
