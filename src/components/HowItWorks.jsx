import Reveal from './Reveal'

const steps = [
  { num: '۱', title: 'ثبت‌نام کن', desc: 'کافیه حساب بسازی و پروفایلت رو کامل کنی. کمتر از دو دقیقه!' },
  { num: '۲', title: 'جستجو کن', desc: 'همراه یا خدمات مورد نظرت رو با فیلترهای هوشمند پیدا کن.' },
  { num: '۳', title: 'ارتباط بگیر', desc: 'با خیال راحت چت کن، آشنا شو و اولین قرارت رو بذار.' },
]

export default function HowItWorks() {
  return (
    <section className="section how" id="how">
      <div className="section-inner">
        <Reveal>
          <h2 className="section-title">سه قدم تا اولین قرار</h2>
          <p className="section-subtitle">ساده‌تر از اونی که فکر می‌کنی!</p>
        </Reveal>

        <div className="how-grid">
          {steps.map((s, i) => (
            <Reveal key={s.num} delay={i * 140}>
              <div className="how-card glass">
                <span className="how-num">{s.num}</span>
                <h3 className="how-title">{s.title}</h3>
                <p className="how-desc">{s.desc}</p>
                {i < steps.length - 1 && <span className="how-arrow">←</span>}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
