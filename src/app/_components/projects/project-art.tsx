'use client';

import { useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import {
  IconBolt,
  IconMapPin,
  IconCheck,
  IconCalendar,
  IconCode,
  IconBrandTelegram,
  IconBatteryCharging,
  IconGridDots,
} from '@tabler/icons-react';
import { usePageMotion } from '../motion/motion';

function Phone({ mode = 'charge' }: { mode?: 'charge' | 'queue' | 'telegram' }) {
  return (
    <div className={`demo-phone phone-${mode}`}>
      <div className="phone-camera" />
      <div className="phone-status">
        <span>9:41</span>
        <span>••• ▰</span>
      </div>
      {mode === 'charge' ? (
        <>
          <div className="phone-app-name">
            tok bor
            <span>
              <IconGridDots size={18} />
            </span>
          </div>
          <div className="phone-map">
            <div className="map-road road-a" />
            <div className="map-road road-b" />
            <div className="map-road road-c" />
            <div className="map-river" />
            <span className="map-pin pin-one">
              <IconBolt size={18} />
            </span>
            <span className="map-pin pin-two">
              <IconBolt size={14} />
            </span>
            <span className="map-pin pin-three">
              <IconBolt size={14} />
            </span>
          </div>
          <div className="phone-sheet">
            <span className="tiny-label">Your next stop</span>
            <h4>A little more energy.</h4>
            <div className="charger-row">
              <span className="charger-icon">
                <IconBatteryCharging size={26} />
              </span>
              <div>
                <b>Charger 07</b>
                <span>Ready when you are</span>
              </div>
              <IconMapPin size={18} />
            </div>
            <span className="demo-cta">Start charging</span>
          </div>
        </>
      ) : (
        <>
          <div className="queue-brand">
            {mode === 'telegram' ? (
              <>
                <IconBrandTelegram size={22} /> Jonli navbat
              </>
            ) : (
              'navbat.'
            )}
          </div>
          <span className="tiny-label">
            {mode === 'telegram' ? 'YOUR PLACE IN LINE' : 'MAKE TIME FOR YOU'}
          </span>
          <h4>
            {mode === 'telegram'
              ? 'Your turn,\nwithout the wait.'
              : 'A fresh cut.\nA clear schedule.'}
          </h4>
          <div className="queue-ticket">
            <span>{mode === 'telegram' ? 'You’re in the queue' : 'Your appointment'}</span>
            <strong>{mode === 'telegram' ? 'A–07' : '10:30'}</strong>
            <span>{mode === 'telegram' ? 'We’ll keep you updated' : 'Tuesday · Demo booking'}</span>
          </div>
          <div className="queue-days">
            {['M', 'T', 'W', 'T', 'F'].map((d, i) => (
              <span className={i === 1 ? 'selected' : ''} key={i}>
                {d}
                <b>{12 + i}</b>
              </span>
            ))}
          </div>
          <div className="queue-confirm">
            <IconCheck size={16} /> {mode === 'telegram' ? 'Place reserved' : 'You’re all set'}
          </div>
        </>
      )}
      <div className="phone-home" />
    </div>
  );
}

function Dashboard() {
  return (
    <div className="demo-dashboard">
      <aside className="dashboard-sidebar">
        <b>
          beon<span>◔</span>
        </b>
        <span className="sidebar-active">Overview</span>
        <span>Stations</span>
        <span>Charging</span>
        <span>Payments</span>
        <span>Reports</span>
        <div className="sidebar-bottom">
          Workspace
          <br />
          <strong>Demo network</strong>
        </div>
      </aside>
      <div className="dashboard-content">
        <header>
          <span>Network overview</span>
          <span className="dashboard-avatar">XR</span>
        </header>
        <div className="dashboard-welcome">
          <span className="tiny-label">A CLEARER PICTURE</span>
          <h4>
            Every connection,
            <br />
            in one place.
          </h4>
        </div>
        <div className="dashboard-panels">
          <div className="dashboard-chart">
            <div>
              <b>Charging activity</b>
              <span>Sample data</span>
            </div>
            <div className="chart-bars">
              {[32, 55, 42, 76, 61, 88, 70, 96, 78, 100, 84, 110].map((h, i) => (
                <i key={i} style={{ height: `${h}px`, animationDelay: `${i * 65}ms` }} />
              ))}
            </div>
            <div className="chart-labels">
              <span>Mon</span>
              <span>Wed</span>
              <span>Fri</span>
              <span>Sun</span>
            </div>
          </div>
          <div className="dashboard-ring">
            <div className="ring">
              <IconBolt size={26} />
            </div>
            <b>Connected</b>
            <span>Network status</span>
          </div>
        </div>
        <div className="dashboard-table">
          <span>Station</span>
          <span>Connection</span>
          <span>Session</span>
          {['Demo station A', 'Demo station B'].map((n) => (
            <div key={n}>
              <b>{n}</b>
              <span className="table-status">Available</span>
              <span>Ready</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PetScene() {
  return (
    <div className="pet-scene">
      <div className="pet-window">
        <span>coucou.</span>
        <span>– &nbsp; + &nbsp; ×</span>
        <div className="pet-greeting">
          A little company.
          <br />
          <em>A little curiosity.</em>
        </div>
      </div>
      <div className="speech-bubble">What are we building today?</div>
      <div className="pet pet-white">
        <i />
        <i />
        <span />
      </div>
      <div className="pet pet-peach">
        <i />
        <i />
        <span />
      </div>
      <div className="pet-shadow" />
      <div className="pet-dock">
        <span>✳</span>
        <span>✎</span>
        <span>♡</span>
        <span>☀</span>
      </div>
    </div>
  );
}

function CodeScene() {
  return (
    <div className="code-scene">
      <div className="code-tab">
        <span>● ● ●</span>
        <span>from client to server</span>
      </div>
      <div className="code-heading">
        Less glue.
        <br />
        <em>More building.</em>
      </div>
      <div className="code-flow">
        <span>
          <IconCode />
          React
        </span>
        <i />
        <span>tRPC</span>
        <i />
        <span>Prisma</span>
      </div>
      <div className="code-snippet">
        <span>const</span> product = <span>await</span> api
        <br />
        &nbsp; .ideas.<b>build</b>({'{'}
        <br />
        &nbsp;&nbsp;&nbsp; types: <b>"end-to-end"</b>
        <br />
        &nbsp; {'}'});
      </div>
    </div>
  );
}

export default function ProjectArt({ id }: { id: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: '80px' });
  const { paused } = usePageMotion();
  const x = useMotionValue(0),
    y = useMotionValue(0);
  const rotateX = useSpring(x, { stiffness: 110, damping: 25 });
  const rotateY = useSpring(y, { stiffness: 110, damping: 25 });
  return (
    <div
      ref={ref}
      className={`project-art art-${id}`}
      data-active={inView && !paused ? 'true' : 'false'}
      onPointerMove={(event) => {
        if (paused || event.pointerType !== 'mouse') return;
        const box = event.currentTarget.getBoundingClientRect();
        x.set((-(event.clientY - box.top - box.height / 2) / box.height) * 5);
        y.set(((event.clientX - box.left - box.width / 2) / box.width) * 5);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      <div className="art-label">
        <span>
          {id === 'tokbor'
            ? 'ENERGY, CONNECTED.'
            : id === 'beon'
              ? 'CLARITY AT EVERY LEVEL.'
              : id === 'navbat'
                ? 'TIME, WELL SPENT.'
                : id === 'mobile'
                  ? 'GOOD TO GO.'
                  : id === 'jonli-navbat'
                    ? 'YOUR TURN IS COMING.'
                    : id === 'coucoupet'
                      ? 'SMALL FRIENDS. BIG PERSONALITY.'
                      : id === 'tokbor-web'
                        ? 'A NETWORK IN MOTION.'
                        : 'ONE CONNECTED WORKSPACE.'}
        </span>
        <span className="art-mark">✳</span>
      </div>
      <motion.div
        className="art-composition"
        style={{ rotateX: paused ? 0 : rotateX, rotateY: paused ? 0 : rotateY }}
        aria-hidden="true"
      >
        {id === 'tokbor' && (
          <>
            <div className="hero-art-copy">
              <span>tok bor</span>
              <strong>
                Go further.
                <br />
                Stay connected.
              </strong>
              <span className="art-copy-tag">
                <IconBolt size={18} /> Charging, made simple.
              </span>
            </div>
            <div className="phone-stage">
              <Phone />
            </div>
            <div className="floating-message">
              <span className="message-icon">
                <IconCheck size={20} />
              </span>
              <div>
                <b>You’re connected.</b>
                <span>A better journey starts here.</span>
              </div>
            </div>
          </>
        )}
        {id === 'beon' && <Dashboard />}
        {id === 'navbat' && (
          <>
            <div className="queue-orbit" />
            <div className="phone-stage">
              <Phone mode="queue" />
            </div>
            <div className="appointment-chip">
              <IconCalendar size={20} />
              <span>
                Your time.
                <br />
                <b>Reserved.</b>
              </span>
            </div>
          </>
        )}
        {id === 'mobile' && (
          <>
            <div className="mobile-headline">
              A better journey.
              <br />
              In your pocket.
            </div>
            <div className="phone-stage">
              <Phone />
            </div>
          </>
        )}
        {id === 'jonli-navbat' && (
          <>
            <div className="telegram-glyph">
              <IconBrandTelegram size={80} stroke={1.2} />
            </div>
            <div className="phone-stage">
              <Phone mode="telegram" />
            </div>
          </>
        )}
        {id === 'coucoupet' && <PetScene />}
        {id === 'tokbor-web' && (
          <div className="website-scene">
            <div className="website-toolbar">
              <b>tok bor</b>
              <span>Network &nbsp; Business &nbsp; Contact</span>
            </div>
            <div className="website-title">
              More energy.
              <br />
              More possibilities.
            </div>
            <div className="charger-object">
              <div className="charger-face">
                <span>tok bor</span>
                <IconBolt size={48} stroke={1.5} />
                <i />
              </div>
              <div className="charger-cable" />
            </div>
            <span className="website-caption">A connected charging network.</span>
          </div>
        )}
        {id === 'turborepo' && <CodeScene />}
      </motion.div>
      <span className="art-disclaimer">Illustrative UI · demo content</span>
    </div>
  );
}
