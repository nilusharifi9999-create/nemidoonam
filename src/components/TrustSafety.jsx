import Reveal from './Reveal'
import Mascot from './Mascot'

const features = [
  {
    icon: '🪪',
    title: 'تایید هویت',
    desc: 'تمام اعضا هویتشون رو تایید می‌کنن. کسی که می‌بینی واقعیه، نه یه فیک.',
  },
  {
    icon: '🚩',
    title: 'گزارش‌دهی سریع',
    desc: 'هر رفتار نامناسب رو با یک کلیک گزارش کن. تیم ما سریع واکنش نشون می‌ده.',
  },
  {
    icon: '🔒',
    title: 'حریم خصوصی',
    desc: 'اطلاعات شخصی تو محفوظ می‌مونه. هیچ‌کس بدون اجازه بهشون دسترسی نداره.',
  },
]

export default function TrustSafety() {
  return (
    <section className="section trust" id="trust">
      <div className="section-inner">
        <div className="trust-layout">
          <Reveal>
            <div className="trust-mascot-wrap">
              <div className="trust-mascot-glow" />
              <Mascot variant="shield" size={220} className="trust-mascot" />
            </div>
          </Reveal>

          <div className="trust-content">
            <Reveal>
              <h2 className="section-title trust-title">اهراز هویت گارفی</h2>
              <p className="section-subtitle trust-sub">
                امنیت تو برای ما اولویت اوله. گارفی با سیستم تایید هویت،
                گزارش‌دهی و حریم خصوصی، محیطی امن برای همه فراهم می‌کنه.
              </p>
            </Reveal>

            <div className="trust-features">
              {features.map((f, i) => (
                <Reveal key={f.title} delay={i * 100}>
                  <div className="trust-feature glass">
                    <span className="trust-feature-icon">{f.icon}</span>
                    <div>
                      <h3 className="trust-feature-title">{f.title}</h3>
                      <p className="trust-feature-desc">{f.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
