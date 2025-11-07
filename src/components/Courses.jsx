import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Table, Monitor, Code2, Palette } from 'lucide-react';

const packages = [
  {
    key: 'word',
    title: 'Microsoft Word',
    desc: 'Menguasai penulisan profesional: format, style, mail merge, dan template.',
    color: 'from-sky-500 to-indigo-500',
    icon: FileText,
    price: 'Rp249.000/bulan',
    highlights: ['Layout & Style', 'Tabel & Gambar', 'Mail Merge'],
  },
  {
    key: 'excel',
    title: 'Microsoft Excel',
    desc: 'Analisis data praktis: rumus, fungsi, chart, dan pivot table.',
    color: 'from-emerald-500 to-teal-500',
    icon: Table,
    price: 'Rp299.000/bulan',
    highlights: ['Fungsi Dasar-Lanjut', 'Chart & Visual', 'Pivot Table'],
  },
  {
    key: 'powerpoint',
    title: 'PowerPoint Presentasi',
    desc: 'Buat presentasi memukau dengan desain, animasi, dan storytelling.',
    color: 'from-amber-500 to-orange-500',
    icon: Monitor,
    price: 'Rp249.000/bulan',
    highlights: ['Desain Slide', 'Animasi Efektif', 'Template Profesional'],
  },
  {
    key: 'programming',
    title: 'Pemrograman Dasar',
    desc: 'Logika dan dasar coding untuk pemula dengan proyek mini.',
    color: 'from-fuchsia-500 to-purple-500',
    icon: Code2,
    price: 'Rp349.000/bulan',
    highlights: ['Dasar Algoritma', 'JavaScript/Python', 'Proyek Mini'],
  },
  {
    key: 'canva',
    title: 'Desain Canva',
    desc: 'Konten visual cepat dan cantik untuk sosial media & bisnis.',
    color: 'from-rose-500 to-pink-500',
    icon: Palette,
    price: 'Rp229.000/bulan',
    highlights: ['Brand Kit', 'Template & Layout', 'Export & Optimasi'],
  },
];

export default function Courses() {
  return (
    <section id="paket" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900">Kursus Komputer</h2>
          <p className="mt-3 text-slate-600">Paket praktis untuk produktivitas kerja, studi, dan bisnis.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((p, idx) => (
            <motion.div
              key={p.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group rounded-2xl border border-slate-200 p-6 bg-gradient-to-br from-white to-slate-50 hover:shadow-xl transition-shadow"
            >
              <div className={`h-12 w-12 rounded-lg bg-gradient-to-tr ${p.color} text-white grid place-content-center`}>
                <p.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-900">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{p.desc}</p>
              <ul className="mt-4 space-y-1 text-sm text-slate-700">
                {p.highlights.map((h) => (
                  <li key={h}>• {h}</li>
                ))}
              </ul>
              <div className="mt-5 flex items-center justify-between">
                <span className="font-semibold text-indigo-600">{p.price}</span>
                <a href="#kontak" className="text-sm font-medium text-indigo-600 hover:text-indigo-700">Daftar Sekarang →</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
