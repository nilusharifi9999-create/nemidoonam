import Reveal from './Reveal'

const categories = [
  { icon: '⚽', label: 'ورزش' },
  { icon: '🎮', label: 'گیمینگ' },
  { icon: '💅', label: 'زیبایی و ناخن' },
  { icon: '🍳', label: 'آشپزی' },
  { icon: '🎨', label: 'هنر و دست‌ساز' },
  { icon: '✈️', label: 'سفر' },
  { icon: '🎵', label: 'موسیقی' },
  { icon: '📚', label: 'مطالعه' },
  { icon: '📷', label: 'عکاسی' },
  { icon: '🏋️', label: 'بدنسازی' },
]

export default function Categories() {
  return (
    <section className="section categories" id="categories">
      <div className="section-inner">
        <Reveal>
          <h2 className="section-title">دسته‌بندی‌ها</h2>
          <p className="section-subtitle">هر چی دنبالش هستی، گارفی برات پیدا می‌کنه</p>
        </Reveal>

        <Reveal>
          <div className="categories-grid">
            {categories.map((c) => (
              <button key={c.label} className="category-chip glass">
                <span className="category-icon">{c.icon}</span>
                <span className="category-label">{c.label}</span>
              </button>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
