import { useRef } from 'react'
import Reveal from './Reveal'

const companions = [
  { name: 'سارا دشتی', age: 24, interest: 'پیاده‌روی', color: '#ff3e7a', verified: true },
  { name: 'نگار محمدی', age: 27, interest: 'گیمینگ', color: '#ff8c42', verified: true },
  { name: 'الناز رضایی', age: 22, interest: 'ورزش', color: '#9b59b6', verified: true },
  { name: 'مهسا کریمی', age: 29, interest: 'سفر', color: '#3498db', verified: false },
  { name: 'یاسمن احمدی', age: 26, interest: 'موسیقی', color: '#e91e63', verified: true },
  { name: 'دنیا موسوی', age: 23, interest: 'هنر', color: '#00bcd4', verified: true },
]

function Avatar({ name, color }) {
  const initials = name.split(' ').map(w => w[0]).join('')
  return (
    <div className="avatar" style={{ background: `linear-gradient(135deg, ${color}, ${color}aa)` }}>
      {initials}
    </div>
  )
}

export default function Companions() {
  const trackRef = useRef(null)

  const scroll = (dir) => {
    const el = trackRef.current
    if (!el) return
    el.scrollBy({ left: dir * 300, behavior: 'smooth' })
  }

  return (
    <section className="section companions" id="companions">
      <div className="section-inner">
        <Reveal>
          <h2 className="section-title">همراهان گارفی</h2>
          <p className="section-subtitle">آدم‌هایی که الان دنبال یه رفیق می‌گردن</p>
        </Reveal>

        <Reveal>
          <div className="carousel">
            <button className="carousel-btn" onClick={() => scroll(-1)} aria-label="قبلی">›</button>
            <div className="carousel-track" ref={trackRef}>
              {companions.map((c) => (
                <div key={c.name} className="companion-card glass">
                  <Avatar name={c.name} color={c.color} />
                  <div className="companion-info">
                    <div className="companion-name-row">
                      <h3 className="companion-name">{c.name}</h3>
                      {c.verified && (
                        <span className="badge-verify">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.4 4.8 5.3.8-3.8 3.7.9 5.3L12 14.2 7.2 16.6l.9-5.3L4.3 7.6l5.3-.8z"/></svg>
                          تایید شده
                        </span>
                      )}
                    </div>
                    <span className="companion-age">{c.age} ساله</span>
                    <span className="companion-interest">{c.interest}</span>
                  </div>
                  <button className="btn btn-primary companion-btn">پروفایل</button>
                </div>
              ))}
            </div>
            <button className="carousel-btn" onClick={() => scroll(1)} aria-label="بعدی">‹</button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
