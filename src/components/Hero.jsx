import Mascot from './Mascot'

const stats = [
  { num: '۲۰۰+', label: 'عضو مچ شده' },
  { num: '۱۰K+', label: 'عضو تایید شده' },
  { num: '۵۶', label: 'فعالیت تایید شده' },
  { num: '۹۸٪', label: 'رضایت کاربران' },
]

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="hero-inner">
        <div className="hero-text">
          <span className="hero-badge glass">🐱 گارفی، رفیق تو تو</span>
          <h1 className="hero-title">
            همراه و خدمات<br />
            مناسبت رو با<br />
            <span className="hero-title-accent">گارفی</span> پیدا کن
          </h1>
          <p className="hero-desc">
            از رفیق ورزشی و گیمینگ تا خدمات زیبایی و آشپزی —
            همه‌جا یه گارفی هست که منتظرته. امن، دوستانه، رایگان.
          </p>
          <div className="hero-cta">
            <button className="btn btn-primary">شروع کن، رایگانه 🚀</button>
            <button className="btn btn-outline">حساب دارم</button>
          </div>
        </div>

        <div className="hero-mascot">
          <div className="hero-mascot-glow" />
          <Mascot variant="laptop" size={340} className="hero-mascot-svg" />
        </div>
      </div>

      <div className="hero-stats">
        {stats.map((s) => (
          <div key={s.label} className="hero-stat glass">
            <span className="hero-stat-num">{s.num}</span>
            <span className="hero-stat-label">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
