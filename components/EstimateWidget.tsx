import * as React from 'react';
import { motion } from 'framer-motion';

export default function EstimateWidget() {
  const [photo, setPhoto] = React.useState<File | null>(null);
  const [preview, setPreview] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [result, setResult] = React.useState<string | null>(null);
  const [error, setError] = React.useState<string | null>(null);

  function handlePhotoChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      setPhoto(file);
      setPreview(URL.createObjectURL(file));
      setResult(null);
      setError(null);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!photo) return;
    setLoading(true);
    setResult(null);
    setError(null);
    try {
      const formData = new FormData();
      formData.append('photo', photo);
      const res = await fetch('/api/estimate', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      if (data.estimate) {
        setResult(`Estimated Offer: $${data.estimate}`);
      } else {
        setResult(null);
        setError('No instant offer available. Please schedule an appraisal.');
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="py-sectionY px-sectionX bg-white dark:bg-secondary transition-all">
      <div className="max-w-xl mx-auto card p-8 rounded-card shadow-card flex flex-col items-center text-center">
        <h2 className="text-2xl font-bold mb-4 text-secondary font-sans">Get a Real-Time Quote</h2>
        <p className="mb-6 text-secondary/80">Upload a photo of your item and get an instant AI-powered offer. If we can't price it instantly, you can schedule an in-person appraisal.</p>
        <form onSubmit={handleSubmit} className="w-full flex flex-col items-center gap-4">
          <label className="w-full cursor-pointer flex flex-col items-center gap-2 p-4 border-2 border-dashed border-primary rounded-card hover:bg-neutral-50 transition">
            <input
              type="file"
              accept="image/*"
              onChange={handlePhotoChange}
              className="hidden"
              aria-label="Upload item photo"
            />
            {preview ? (
              <img src={preview} alt="Preview" className="w-32 h-32 object-cover rounded-card border border-neutral-200" />
            ) : (
              <span className="text-primary font-semibold">Click to upload photo</span>
            )}
          </label>
          <motion.button
            whileTap={{ scale: 0.97 }}
            type="submit"
            disabled={!photo || loading}
            className="px-6 py-3 bg-primary text-white font-bold rounded-card shadow hover:bg-secondary transition disabled:opacity-50"
          >
            {loading ? 'Estimating...' : 'Get Instant Offer'}
          </motion.button>
        </form>
        {result && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 text-lg font-bold text-primary"
          >
            {result}
          </motion.div>
        )}
        {error && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 text-red-600 font-semibold"
          >
            {error} <a href="#schedule-appraisal" className="underline text-primary ml-2">Schedule Appraisal</a>
          </motion.div>
        )}
      </div>
    </section>
  );
} 