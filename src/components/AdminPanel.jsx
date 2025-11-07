import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings, Save, X, Plus, Trash2 } from 'lucide-react';

export default function AdminPanel({ open, onClose }) {
  const [posts, setPosts] = React.useState([
    { id: 1, title: 'Strategi Belajar Efektif', content: 'Ringkas poin utama, latihan terfokus.' },
  ]);
  const [newPost, setNewPost] = React.useState({ title: '', content: '' });

  const addPost = () => {
    if (!newPost.title) return;
    setPosts((p) => [...p, { id: Date.now(), ...newPost }]);
    setNewPost({ title: '', content: '' });
  };

  const removePost = (id) => setPosts((p) => p.filter((x) => x.id !== id));

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] bg-black/40"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 120, damping: 16 }}
            className="absolute right-0 top-0 h-full w-full sm:w-[520px] bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 h-14 border-b">
              <div className="flex items-center gap-2 text-slate-800 font-semibold"><Settings className="h-5 w-5 text-indigo-600" /> Admin Panel</div>
              <button onClick={onClose} className="h-8 w-8 grid place-content-center rounded-md hover:bg-slate-100"><X className="h-4 w-4" /></button>
            </div>

            <div className="p-5 space-y-8 overflow-y-auto h-[calc(100%-56px)]">
              <section>
                <h3 className="font-semibold text-slate-900">Edit Konten Hero</h3>
                <div className="mt-3 grid grid-cols-1 gap-3">
                  <input className="rounded-md border-slate-300 focus:border-indigo-500 focus:ring-indigo-500" placeholder="Judul utama" defaultValue="RZF Academy" />
                  <textarea rows={3} className="rounded-md border-slate-300 focus:border-indigo-500 focus:ring-indigo-500" placeholder="Deskripsi">Platform kursus modern untuk SD, SMP, SMA, dan Umum.</textarea>
                  <button className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700"><Save className="h-4 w-4" /> Simpan Perubahan</button>
                </div>
              </section>

              <section>
                <h3 className="font-semibold text-slate-900">Kelola Blog</h3>
                <div className="mt-3 space-y-3">
                  {posts.map((p) => (
                    <div key={p.id} className="border rounded-lg p-3">
                      <div className="flex items-center justify-between">
                        <div className="font-medium text-slate-800">{p.title}</div>
                        <button onClick={() => removePost(p.id)} className="text-red-600 hover:text-red-700"><Trash2 className="h-4 w-4" /></button>
                      </div>
                      <p className="text-sm text-slate-600 mt-1">{p.content}</p>
                    </div>
                  ))}

                  <div className="border rounded-lg p-3 space-y-2">
                    <input value={newPost.title} onChange={(e) => setNewPost({ ...newPost, title: e.target.value })} placeholder="Judul baru" className="w-full rounded-md border-slate-300 focus:border-indigo-500 focus:ring-indigo-500" />
                    <textarea value={newPost.content} onChange={(e) => setNewPost({ ...newPost, content: e.target.value })} rows={2} placeholder="Ringkasan" className="w-full rounded-md border-slate-300 focus:border-indigo-500 focus:ring-indigo-500" />
                    <button onClick={addPost} className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-emerald-600 text-white text-sm font-medium hover:bg-emerald-700"><Plus className="h-4 w-4" /> Tambah</button>
                  </div>
                </div>
              </section>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
