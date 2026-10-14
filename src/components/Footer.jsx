const linkGroups = [
  {
    title: 'صفحات',
    links: ['خانه', 'درباره ما', 'وبلاگ', 'سوالات متداول'],
  },
  {
    title: 'حساب کاربری',
    links: ['ورود', 'ثبت‌نام', 'پروفایل من', 'تنظیمات'],
  },
  {
    title: 'تماس با ما',
    links: ['پشتیبانی', 'قوانین و امنیت', 'حریم خصوصی', 'گزارش مشکل'],
  },
]

const socials = ['Instagram', 'Twitter', 'LinkedIn', 'Facebook']

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <svg width="36" height="36" viewBox="0 0 100 100">
                <circle cx="50" cy="48" r="26" fill="#ff8c42" />
                <path d="M 30 32 L 24 16 L 40 30 Z" fill="#ff8c42" />
                <path d="M 70 32 L 76 16 L 60 30 Z" fill="#ff8c42" />
                <path d="M 38 46 Q 44 41 50 46" stroke="#1a1a1a" strokeWidth="3" fill="none" strokeLinecap="round" />
                <path d="M 50 46 Q 56 41 62 46" stroke="#1a1a1a" strokeWidth="3" fill="none" strokeLinecap="round" />
                <path d="M 47 54 L 53 54 L 50 58 Z" fill="#ff3e7a" />
              </svg>
              <span>GARFI</span>
            </div>
            <p className="footer-tagline">رفیق تو تو، از همراه تا خدمات.</p>
            <div className="footer-newsletter">
              <input type="email" placeholder="ایمیلت رو وارد کن" />
              <button className="btn btn-primary">عضویت</button>
            </div>
          </div>

          <div className="footer-links">
            {linkGroups.map((g) => (
              <div key={g.title} className="footer-link-group">
                <h4>{g.title}</h4>
                {g.links.map((l) => (
                  <a key={l} href="#">{l}</a>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <span>© ۲۰۲۶ گارفی — تمام حقوق محفوظ است</span>
          <div className="footer-socials">
            {socials.map((s) => (
              <a key={s} href="#" aria-label={s} className="footer-social">
                {s[0]}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
