'use client';

import Link from 'next/link';
import { BottomNav } from '@/components/BottomNav';
import { useState } from 'react';

type Camera = {
  id: string;
  name: string;
  angle: string;
  status: 'active' | 'standby';
  signal: number;
  x: number;
  y: number;
};

const cameras: Camera[] = [
  { id: 'cam1', name: 'Pitch Wide', angle: '90°', status: 'active', signal: 98, x: 12, y: 18 },
  { id: 'cam2', name: 'Goal LT', angle: '45°', status: 'active', signal: 96, x: 84, y: 20 },
  { id: 'cam3', name: 'Corner Cam', angle: '135°', status: 'active', signal: 94, x: 14, y: 82 },
  { id: 'cam4', name: 'Behind Goal', angle: '0°', status: 'active', signal: 99, x: 86, y: 82 },
  { id: 'cam5', name: 'Aerial Drone', angle: '180°', status: 'active', signal: 97, x: 50, y: 32 },
  { id: 'cam6', name: 'Bench View', angle: '270°', status: 'active', signal: 92, x: 25, y: 68 },
  { id: 'cam7', name: 'Crowd Cam', angle: '225°', status: 'standby', signal: 88, x: 75, y: 68 },
];

const commentators = [
  { name: 'James Mwangi', role: 'Main Commentator', status: 'Live' },
  { name: 'Samuel Osei', role: 'Color Analyst', status: 'Active' },
  { name: 'Amara Diallo', role: 'Sideline Reporter', status: 'Standby' },
];

export default function DLS2026LiveStudioPage() {
  const [activeCamera, setActiveCamera] = useState('cam1');
  const [isRecording, setIsRecording] = useState(true);
  const [viewers, setViewers] = useState(285430);
  const [bitrate, setBitrate] = useState(25.6);
  const [fps, setFps] = useState(60);
  const [resolution, setResolution] = useState('4K UHD');
  const [overlayMode, setOverlayMode] = useState('standard');
  const [audioLevel, setAudioLevel] = useState(92);
  const [latency, setLatency] = useState(2.3);

  const activeCam = cameras.find((camera) => camera.id === activeCamera) ?? cameras[0];

  return (
    <main className="min-h-screen bg-uaal-dark text-uaal-text">
      <div className="mx-auto max-w-md border-x border-uaal-gold/40 bg-uaal-dark px-0 pb-32">
        <header className="sticky top-0 z-50 border-b border-uaal-gold/70 bg-uaal-dark px-5 py-3">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl text-white">←</Link>
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1 rounded-full bg-uaal-red/30 px-2 py-1 text-xs font-black text-uaal-red">
                <span className="h-2 w-2 rounded-full bg-uaal-red animate-pulse" />
                LIVE
              </span>
              <h1 className="text-lg font-black text-uaal-gold">DLS 2026</h1>
            </div>
            <div className="text-xs font-bold text-uaal-green">{resolution}</div>
          </div>
        </header>

        <section className="space-y-4 px-4 py-4">
          <div className="relative overflow-hidden rounded-2xl border-2 border-uaal-gold/60 bg-black shadow-[0_0_50px_rgba(217,180,93,0.3)]">
            <div className="relative aspect-video bg-gradient-to-br from-[#0a1f2e] via-[#051117] to-black">
              <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice">
                <defs>
                  <linearGradient id="pitchGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#1a5a1a', stopOpacity: 1 }} />
                    <stop offset="50%" style={{ stopColor: '#0f3d0f', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#0a240a', stopOpacity: 1 }} />
                  </linearGradient>
                </defs>

                <rect x="50" y="50" width="900" height="500" fill="url(#pitchGradient)" stroke="#22aa22" strokeWidth="3" opacity="0.9" />
                <line x1="500" y1="50" x2="500" y2="550" stroke="#ffffff" strokeWidth="2" opacity="0.4" strokeDasharray="10,10" />
                <circle cx="500" cy="300" r="80" fill="none" stroke="#ffffff" strokeWidth="2" opacity="0.3" />
                <rect x="50" y="150" width="150" height="300" fill="none" stroke="#ffffff" strokeWidth="2" opacity="0.2" />
                <rect x="800" y="150" width="150" height="300" fill="none" stroke="#ffffff" strokeWidth="2" opacity="0.2" />
                <rect x="50" y="200" width="80" height="200" fill="none" stroke="#ffaa00" strokeWidth="1" opacity="0.3" />
                <rect x="870" y="200" width="80" height="200" fill="none" stroke="#ffaa00" strokeWidth="1" opacity="0.3" />
              </svg>

              <div className="absolute inset-0 opacity-80">
                {cameras.slice(0, 6).map((camera) => (
                  <button
                    key={camera.id}
                    onClick={() => setActiveCamera(camera.id)}
                    className={`absolute transition-all duration-300 ${
                      activeCamera === camera.id
                        ? 'h-10 w-10 scale-125 border-3 border-uaal-gold bg-uaal-gold/40 shadow-[0_0_20px_rgba(217,180,93,0.8)]'
                        : camera.status === 'active'
                          ? 'h-8 w-8 border-2 border-uaal-green/70 bg-uaal-green/20'
                          : 'h-7 w-7 border-2 border-uaal-muted/40 bg-[#0d1720]/60'
                    }`}
                    style={{
                      left: `${camera.x}%`,
                      top: `${camera.y}%`,
                      transform: 'translate(-50%, -50%)',
                    }}
                    title={camera.name}
                  >
                    <div className="flex h-full w-full items-center justify-center text-[10px] font-black text-white">📹</div>
                  </button>
                ))}
              </div>

              <div className="absolute left-4 top-4 flex items-center gap-2 rounded-xl border border-uaal-red/50 bg-black/80 px-3 py-2 backdrop-blur">
                <span className="h-3 w-3 rounded-full bg-uaal-red animate-pulse" />
                <span className="text-xs font-black text-uaal-red">LIVE</span>
                <span className="text-xs text-uaal-muted">27m 34s</span>
              </div>

              <div className="absolute right-4 top-4 space-y-1 rounded-xl border border-uaal-gold/30 bg-black/80 px-3 py-2 text-[10px] text-uaal-muted backdrop-blur">
                <div>🎬 {fps}FPS</div>
                <div>📡 {bitrate}Mbps</div>
                <div>👥 {viewers.toLocaleString()}</div>
                <div>⏱ {latency}ms</div>
              </div>

              <div className="absolute bottom-4 left-4 rounded-lg border border-uaal-gold/40 bg-black/80 px-3 py-2 backdrop-blur">
                <div className="text-xs font-bold text-white">{activeCam.name}</div>
                <div className="mt-1 text-[10px] text-uaal-gold">
                  {activeCam.angle} • Signal {activeCam.signal}%
                </div>
              </div>

              <div className="absolute bottom-4 right-4 rounded-lg border border-uaal-gold/60 bg-black/90 px-4 py-3 backdrop-blur">
                <div className="text-center">
                  <div className="text-[10px] uppercase tracking-widest text-uaal-muted">Match Day 15</div>
                  <div className="mt-1 flex items-center gap-3">
                    <div className="text-right">
                      <div className="text-xs font-bold text-white">Al Ahly</div>
                      <div className="text-lg font-black text-uaal-gold">1</div>
                    </div>
                    <div className="text-xs text-uaal-muted">64'</div>
                    <div className="text-left">
                      <div className="text-xs font-bold text-white">Enyimba</div>
                      <div className="text-lg font-black text-uaal-gold">1</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-uaal-gold/30 bg-uaal-soft/90 p-3">
            <div className="mb-2 text-sm font-bold text-white">Overlay Layers</div>
            <div className="flex gap-2">
              {['standard', 'stats', 'tactical', 'graphics'].map((mode) => (
                <button
                  key={mode}
                  onClick={() => setOverlayMode(mode)}
                  className={`flex-1 rounded-lg px-2 py-2 text-xs font-bold transition ${
                    overlayMode === mode
                      ? 'border border-uaal-gold bg-uaal-gold/20 text-uaal-gold'
                      : 'border border-white/15 bg-[#0d1720] text-uaal-muted hover:text-white'
                  }`}
                >
                  {mode.charAt(0).toUpperCase() + mode.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-uaal-gold/30 bg-uaal-soft/90 p-3">
            <div className="mb-2 text-sm font-bold text-white">6+ Wireless Cameras</div>
            <div className="grid grid-cols-3 gap-2">
              {cameras.map((camera) => (
                <button
                  key={camera.id}
                  onClick={() => setActiveCamera(camera.id)}
                  className={`rounded-lg border-2 p-2 text-center transition-all ${
                    activeCamera === camera.id
                      ? 'border-uaal-gold bg-uaal-gold/20 shadow-[0_0_15px_rgba(217,180,93,0.5)]'
                      : camera.status === 'active'
                        ? 'border-uaal-green/50 bg-uaal-green/10'
                        : 'border-uaal-muted/30 bg-[#0d1720]'
                  }`}
                >
                  <div className="truncate text-[10px] font-bold text-white">{camera.name}</div>
                  <div className="mt-1 text-[9px] text-uaal-muted">{camera.angle}</div>
                  <div className="mt-2 flex items-center justify-center gap-1">
                    <span className={`h-2 w-2 rounded-full ${camera.status === 'active' ? 'bg-uaal-green' : 'bg-uaal-muted/60'}`} />
                    <span className="text-[9px]">{camera.signal}%</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-uaal-gold/30 bg-uaal-soft/90 p-3">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm font-bold text-white">Live Commentary</span>
              <span className="rounded-full bg-uaal-red/20 px-2 py-1 text-[10px] font-bold text-uaal-red">LIVE</span>
            </div>
            <div className="space-y-2">
              {commentators.map((person) => (
                <div key={person.name} className="flex items-center justify-between rounded-lg border border-white/10 bg-[#0d1720] p-2">
                  <div>
                    <div className="text-xs font-bold text-white">{person.name}</div>
                    <div className="text-[10px] text-uaal-muted">{person.role}</div>
                  </div>
                  <div className={`rounded px-2 py-1 text-[10px] font-bold ${person.status === 'Live' ? 'bg-uaal-red/20 text-uaal-red' : 'bg-uaal-green/20 text-uaal-green'}`}>
                    {person.status}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-uaal-gold/30 bg-uaal-soft/90 p-3">
            <div className="mb-3 text-sm font-bold text-white">Broadcast Control</div>
            <div className="space-y-3">
              <div>
                <div className="mb-1 flex items-center justify-between">
                  <span className="text-xs text-uaal-muted">Audio Level</span>
                  <span className="text-xs font-bold text-uaal-gold">{audioLevel}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={audioLevel}
                  onChange={(event) => setAudioLevel(Number(event.target.value))}
                  className="w-full accent-uaal-gold"
                />
              </div>

              <div>
                <div className="mb-1 flex items-center justify-between">
                  <span className="text-xs text-uaal-muted">Bitrate (Mbps)</span>
                  <span className="text-xs font-bold text-uaal-green">{bitrate}Mbps</span>
                </div>
                <div className="flex gap-2">
                  {[8, 12.5, 16, 25.6].map((rate) => (
                    <button
                      key={rate}
                      onClick={() => setBitrate(rate)}
                      className={`rounded border px-2 py-1 text-xs transition ${
                        bitrate === rate
                          ? 'border-uaal-green bg-uaal-green/20 text-uaal-green font-bold'
                          : 'border-white/10 text-uaal-muted hover:text-white'
                      }`}
                    >
                      {rate}M
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-xs text-uaal-muted">Frame Rate</span>
                  <span className="text-xs font-bold text-uaal-gold">{fps}FPS</span>
                </div>
                <div className="flex gap-2">
                  {[30, 60].map((value) => (
                    <button
                      key={value}
                      onClick={() => setFps(value)}
                      className={`flex-1 rounded border px-2 py-1 text-xs transition ${
                        fps === value
                          ? 'border-uaal-gold bg-uaal-gold/20 text-uaal-gold font-bold'
                          : 'border-white/10 text-uaal-muted hover:text-white'
                      }`}
                    >
                      {value}FPS
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-uaal-gold/30 bg-uaal-soft/90 p-3">
            <div className="mb-3 text-sm font-bold text-white">Metrics</div>
            <div className="grid grid-cols-2 gap-2">
              <div className="rounded-lg border border-white/10 bg-[#0d1720] p-2">
                <div className="text-[10px] text-uaal-muted">Connected Cams</div>
                <div className="mt-1 text-lg font-black text-uaal-green">7/7</div>
              </div>
              <div className="rounded-lg border border-white/10 bg-[#0d1720] p-2">
                <div className="text-[10px] text-uaal-muted">Latency</div>
                <div className="mt-1 text-lg font-black text-uaal-gold">{latency}ms</div>
              </div>
              <div className="rounded-lg border border-white/10 bg-[#0d1720] p-2">
                <div className="text-[10px] text-uaal-muted">Stream Quality</div>
                <div className="mt-1 text-lg font-black text-uaal-green">{resolution}</div>
              </div>
              <div className="rounded-lg border border-white/10 bg-[#0d1720] p-2">
                <div className="text-[10px] text-uaal-muted">Total Viewers</div>
                <div className="mt-1 text-sm font-black text-uaal-gold">{(viewers / 1000).toFixed(0)}K</div>
              </div>
            </div>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setIsRecording(!isRecording)}
              className={`flex-1 rounded-lg border px-4 py-3 font-bold transition ${
                isRecording
                  ? 'border-uaal-red/80 bg-uaal-red/20 text-uaal-red hover:bg-uaal-red/30'
                  : 'border-uaal-gold/80 bg-uaal-gold/20 text-uaal-gold hover:bg-uaal-gold/30'
              }`}
            >
              {isRecording ? '⏹ Stop Recording' : '● Start Recording'}
            </button>
            <button
              onClick={() => setViewers((value) => value + Math.floor(Math.random() * 5000))}
              className="flex-1 rounded-lg border border-uaal-green/80 bg-uaal-green/20 px-4 py-3 font-bold text-uaal-green hover:bg-uaal-green/30"
            >
              📡 Go Live
            </button>
          </div>
        </section>

        <BottomNav active="Matches" />
      </div>
    </main>
  );
}
