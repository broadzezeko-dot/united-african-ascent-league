'use client';

import { useState } from 'react';
import Link from 'next/link';

const password = '2580';

export default function ManagerSettingsPage() {
  const [enteredPassword, setEnteredPassword] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);

  const handleUnlock = () => {
    if (enteredPassword === password) {
      setIsUnlocked(true);
      return;
    }
    alert('Invalid manager password');
  };

  const handleAction = (action: 'reset' | 'delete' | 'upload') => {
    if (!isUnlocked) {
      alert('Enter the manager password first');
      return;
    }

    const confirmText =
      action === 'reset'
        ? 'Reset all app data?'
        : action === 'delete'
          ? 'Delete the entire app data permanently?'
          : 'Upload new app data and replace current state?';

    if (window.confirm(confirmText)) {
      alert(`${action.toUpperCase()} action executed by manager.`);
    }
  };

  if (!isUnlocked) {
    return (
      <main className="min-h-screen bg-uaal-dark text-uaal-text">
        <div className="mx-auto max-w-md border-x border-uaal-gold/40 bg-uaal-dark px-0 pb-24">
          <header className="flex items-center justify-between border-b border-uaal-gold/70 px-5 py-4">
            <Link href="/manager" className="text-2xl text-white">←</Link>
            <h1 className="text-2xl font-bold text-uaal-gold">Manager Settings</h1>
            <div className="w-8" />
          </header>

          <section className="space-y-5 px-5 py-8">
            <div className="rounded-3xl border border-uaal-gold/30 bg-uaal-soft/90 p-4">
              <div className="mb-3 text-lg font-bold text-white">Admin Access</div>
              <input
                type="password"
                value={enteredPassword}
                onChange={(e) => setEnteredPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full rounded-xl border border-uaal-gold/50 bg-[#0d1720] px-3 py-3 text-white"
              />
              <button
                onClick={handleUnlock}
                className="mt-4 w-full rounded-xl border border-uaal-gold/80 bg-uaal-gold px-4 py-3 font-black text-[#07131d]"
              >
                Unlock
              </button>
            </div>
          </section>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-uaal-dark text-uaal-text">
      <div className="mx-auto max-w-md border-x border-uaal-gold/40 bg-uaal-dark px-0 pb-24">
        <header className="flex items-center justify-between border-b border-uaal-gold/70 px-5 py-4">
          <Link href="/manager" className="text-2xl text-white">←</Link>
          <h1 className="text-2xl font-bold text-uaal-gold">Secure Settings</h1>
          <div className="w-8" />
        </header>

        <section className="space-y-4 px-5 py-5">
          <div className="rounded-3xl border border-uaal-gold/30 bg-uaal-soft/90 p-4">
            <div className="mb-3 text-lg font-bold text-white">System Control</div>
            <div className="space-y-3">
              <button
                onClick={() => handleAction('reset')}
                className="w-full rounded-xl border border-uaal-gold/50 bg-uaal-gold/10 px-4 py-3 text-left font-bold text-uaal-gold"
              >
                Reset all app data
              </button>

              <button
                onClick={() => handleAction('delete')}
                className="w-full rounded-xl border border-uaal-red/60 bg-uaal-red/10 px-4 py-3 text-left font-bold text-uaal-red"
              >
                Delete everything on the app
              </button>

              <button
                onClick={() => handleAction('upload')}
                className="w-full rounded-xl border border-uaal-green/60 bg-uaal-green/10 px-4 py-3 text-left font-bold text-uaal-green"
              >
                Upload new app data / restore platform
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
