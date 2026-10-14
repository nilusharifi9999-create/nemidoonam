import { useEffect, useState } from 'react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { label: 'قوانین و امنیت', href: '#trust' },
    { label: 'سوالات متداول', href: '#faq' },
    { label: 'پشتیبانی', href: '#footer' },
  ]

  return (
    <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="header-inner">
        <a href="#" className="header-logo">
          <svg width="36" height="36" viewBox="0 0 100 100">
            <circle cx="50" cy="48" r="26" fill="#ff8c42" />
            <path d="M 30 32 L 24 16 L 40 30 Z" fill="#ff8c42" />
            <path d="M 70 32 L 76 16 L 60 30 Z" fill="#ff8c42" />
            <path d="M 38 46 Q 44 41 50 46" stroke="#1a1a1a" strokeWidth="3" fill="none" strokeLinecap="round" />
            <path d="M 50 46 Q 56 41 62 46" stroke="#1a1a1a" strokeWidth="3" fill="none" strokeLinecap="round" />
            <path d="M 47 54 L 53 54 L 50 58 Z" fill="#ff3e7a" />
          </svg>
          <span>GARFI</span>
        </a>

        <nav className="header-nav">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </nav>

        <div className="header-actions">
          <button className="btn btn-outline header-login">ورود | ثبت‌نام</button>
          <button
            className="header-burger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="منو"
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="header-mobile-menu glass">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>
          ))}
          <button className="btn btn-primary">ورود | ثبت‌نام</button>
        </div>
      )}
    </header>
  )
}
