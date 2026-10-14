import Reveal from './Reveal'

const pillars = [
  {
    icon: '🤝',
    title: 'پیدا کردن همراه',
    desc: 'همراه ورزشی، گیمینگ، دوست یا حتی شریک زندگی‌ت رو پیدا کن. با خیال راحت چت کن و قرار بذار.',
    tag: 'رفیق پیدا کن',
  },
  {
    icon: '💅',
    title: 'درخواست خدمات',
    desc: 'از خدمات زیبایی و ناخن تا آشپزی و کارهای هنری — گارفی بهترین‌ها رو بهت معرفی می‌کنه.',
    tag: 'سفارش بده',
  },
]

export default function Pillars() {
  return (
    <section className="section pillars" id="pillars">
      <div className="section-inner">
        <Reveal>
          <div className="pillars-intro">
            <img src="/mascot/pillars-waving.png" alt="گارفی" className="pillars-mascot" />
            <h2 className="section-title">گارفـی چیه؟</h2>
            <p className="section-subtitle">
              گارفی یه پلتفرم دوست‌داشتنیه که دو کار اصلی انجام می‌ده: تو رو به همراه مناسب وصل می‌کنه،
              و خدمات مورد نیازت رو از بهترین‌ها برات پیدا می‌کنه. ساده، امن، با یه گربه‌ی باحالا!
            </p>
          </div>
        </Reveal>

        <div className="pillars-grid">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 120}>
              <div className="pillar-card glass">
                <span className="pillar-icon">{p.icon}</span>
                <h3 className="pillar-title">{p.title}</h3>
                <p className="pillar-desc">{p.desc}</p>
                <span className="pillar-tag">{p.tag}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
