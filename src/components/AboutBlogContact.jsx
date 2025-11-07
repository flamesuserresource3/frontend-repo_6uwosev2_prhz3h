import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, PenSquare, Mail } from 'lucide-react';

export default function AboutBlogContact() {
  return (
    <>
      <section id="tentang" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <h2 className="text-3xl font-bold text-slate-900">Tentang Kami</h2>
              <p className="mt-4 text-slate-700 leading-relaxed">
                RZF Academy adalah lembaga pendidikan modern yang menggabungkan pembelajaran tatap muka dan daring. Kami percaya setiap pelajar unik, sehingga kurikulum kami dirancang adaptif dengan pendekatan berbasis data dan mentoring personal.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2"><Award className="h-5 w-5 text-amber-500" /><span>Mentor Tersertifikasi</span></div>
                <div className="flex items-center gap-2"><Users className="h-5 w-5 text-emerald-500" /><span>Komunitas Aktif</span></div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-white">
                <img src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1600&auto=format&fit=crop" alt="Tentang RZF Academy" className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="blog" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center">Blog</h2>
          <p className="mt-2 text-slate-600 text-center">Insight belajar, tips ujian, dan cerita alumni.</p>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[1,2,3].map((i) => (
              <motion.article key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="rounded-2xl overflow-hidden border border-slate-200 hover:shadow-xl transition-shadow">
                <img src={`https://picsum.photos/seed/rzf${i}/640/360`} alt={`Blog ${i}`} className="w-full h-44 object-cover" />
                <div className="p-5">
                  <h3 className="font-semibold text-slate-900">Strategi Belajar Efektif #{i}</h3>
                  <p className="mt-2 text-sm text-slate-600">Teknik fokus 25 menit, ringkasan aktif, dan latihan terukur.</p>
                  <button className="mt-3 text-sm text-indigo-600 font-medium hover:text-indigo-700">Baca Selengkapnya →</button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="kontak" className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Kontak</h2>
              <p className="mt-3 text-slate-700">Ada pertanyaan? Tim kami siap membantu. Isi formulir dan kami akan menghubungi Anda.</p>
              <div className="mt-6 space-y-2 text-slate-700 text-sm">
                <div className="flex items-center gap-2"><Mail className="h-5 w-5 text-indigo-600" /><span>admin@rzf.academy</span></div>
                <div className="flex items-center gap-2"><span className="font-medium">Telepon:</span><span>+62 812-3456-7890</span></div>
                <div className="flex items-center gap-2"><span className="font-medium">Alamat:</span><span>Jl. Pendidikan No. 7, Jakarta</span></div>
              </div>
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 sm:col-span-1">
                  <label className="block text-sm text-slate-600">Nama</label>
                  <input className="mt-1 w-full rounded-md border-slate-300 focus:border-indigo-500 focus:ring-indigo-500" placeholder="Nama lengkap" />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label className="block text-sm text-slate-600">Email</label>
                  <input type="email" className="mt-1 w-full rounded-md border-slate-300 focus:border-indigo-500 focus:ring-indigo-500" placeholder="email@domain.com" />
                </div>
                <div className="col-span-2">
                  <label className="block text-sm text-slate-600">Pesan</label>
                  <textarea rows={4} className="mt-1 w-full rounded-md border-slate-300 focus:border-indigo-500 focus:ring-indigo-500" placeholder="Tulis pertanyaan Anda..." />
                </div>
              </div>
              <button className="mt-4 inline-flex items-center justify-center px-4 py-2 rounded-md bg-indigo-600 text-white font-medium hover:bg-indigo-700">Kirim</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
