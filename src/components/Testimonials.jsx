import Reveal from './Reveal'

const testimonials = [
  {
    text: 'از وقتی گارفی رو پیدا کردم، یه رفیق ورزشی عالی پیدا کردم که هر صبح با هم می‌دویم! خیلی امن و راحت.',
    name: 'سارا دشتی',
    role: 'عضو گارفی',
    color: '#ff3e7a',
  },
  {
    text: 'خدمات ناخن که از طریق گارفی گرفتم فوق‌العاده بود. راحت سفارش دادم و خوشم اومد. واقعا قابل اعتماده.',
    name: 'نگار محمدی',
    role: 'مشتری خدمات',
    color: '#ff8c42',
  },
]

export default function Testimonials() {
  return (
    <section className="section testimonials" id="testimonials">
      <div className="section-inner">
        <Reveal>
          <h2 className="section-title">نظرات شما</h2>
          <p className="section-subtitle">گارفی‌باز‌ها چی می‌گن؟</p>
        </Reveal>

        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 120}>
              <div className="testimonial-card glass">
                <div className="testimonial-quote">❝</div>
                <p className="testimonial-text">{t.text}</p>
                <div className="testimonial-author">
                  <div
                    className="avatar avatar-sm"
                    style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}aa)` }}
                  >
                    {t.name.split(' ').map(w => w[0]).join('')}
                  </div>
                  <div>
                    <div className="testimonial-name">{t.name}</div>
                    <div className="testimonial-role">{t.role}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
