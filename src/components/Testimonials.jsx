import Reveal from './Reveal'

const testimonials = [
  {
    text: 'از وقتی گارفی رو پیدا کردم، یه رفیق پیاده‌روی عالی پیدا کردم که هر هفته با هم به طبیعت می‌ریم. هویتش تایید شده بود و خیالم راحت بود. واقعاً امن و دوستانه.',
    name: 'سارا دشتی',
    role: 'عضو گارفی از تهران',
    color: '#ff3e7a',
  },
  {
    text: 'برای جشن تولدم کیک سفارشی سفارش دادم. ارائه‌دهنده خیلی حرفه‌ای بود و کیک دقیقاً همون چیزی بود که می‌خواستم. کل فرآیند از سفارش تا تحویل راحت و بی‌دردسر بود.',
    name: 'نگین عطایی',
    role: 'مشتری خدمات گارفی',
    color: '#ff8c42',
  },
  {
    text: 'یه هم‌کلاسی گیتار پیدا کردم از طریق گارفی. هر دو هفته یه بار با هم تمرین می‌کنیم. سیستم چت گارفی خیلی راحته و گزارش‌دهی هم سریعه.',
    name: 'یاسمن احمدی',
    role: 'عضو گارفی از اصفهان',
    color: '#e91e63',
  },
  {
    text: 'خدمات نقاشی دیواری برای اتاق بچه‌ام گرفتم. کارشون فوق‌العاده بود و قیمت منصفانه‌ای داشت. از اینکه می‌تونم قبل از سفارش پروفایل و نمونه کارهاشون رو ببینم خیلی خوشحالم.',
    name: 'دنیا موسوی',
    role: 'مشتری خدمات گارفی',
    color: '#00bcd4',
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
