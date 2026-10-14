import { useRef } from 'react'
import Reveal from './Reveal'

const services = [
  { icon: '💅', title: 'طراحی ناخن و کاشت', provider: 'مریم اصغری', city: 'تهران، سعادت‌آباد', verified: true },
  { icon: '🍳', title: 'آشپزی و غذای خانگی', provider: 'فاطمه نوری', city: 'اصفهان', verified: true },
  { icon: '🎨', title: 'نقاشی دیواری و بوم', provider: 'زهرا قاسمی', city: 'شیراز', verified: true },
  { icon: '✂️', title: 'خیاطی و طراحی لباس', provider: 'سمیرا تابش', city: 'تهران، پاسداران', verified: false },
  { icon: '🍰', title: 'کیک و شیرینی سفارشی', provider: 'الهام سلطانی', city: 'مشهد', verified: true },
  { icon: '📸', title: 'عکاسی پرتره و مراسم', provider: 'پریسا جوادی', city: 'تبریز', verified: true },
  { icon: '💄', title: 'آرایش و گریم حرفه‌ای', provider: 'نرگس شریفی', city: 'تهران، فرشته', verified: true },
  { icon: '🧶', title: 'ساخت صنایع دستی و بافت', provider: 'الهه مرادی', city: 'یزد', verified: true },
]

export default function Services() {
  const trackRef = useRef(null)

  const scroll = (dir) => {
    const el = trackRef.current
    if (!el) return
    el.scrollBy({ left: dir * 300, behavior: 'smooth' })
  }

  return (
    <section className="section services" id="services">
      <div className="section-inner">
        <Reveal>
          <h2 className="section-title">خدمات</h2>
          <p className="section-subtitle">بهترین ارائه‌دهنده‌های خدمات رو کشف کن</p>
        </Reveal>

        <Reveal>
          <div className="carousel">
            <button className="carousel-btn" onClick={() => scroll(-1)} aria-label="قبلی">›</button>
            <div className="carousel-track" ref={trackRef}>
              {services.map((s) => (
                <div key={s.title} className="service-card glass">
                  <div className="service-icon-wrap">
                    <span className="service-icon">{s.icon}</span>
                    {s.verified && <span className="service-verified">✓</span>}
                  </div>
                  <h3 className="service-title">{s.title}</h3>
                  <p className="service-provider">{s.provider}</p>
                  <div className="service-meta">
                    <span className="service-city">📍 {s.city}</span>
                    {s.verified && <span className="badge-verify">تایید شده</span>}
                  </div>
                  <button className="btn btn-outline service-btn">دیدن پروفایل</button>
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
