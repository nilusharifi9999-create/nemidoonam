import Reveal from './Reveal'

export default function FinalCTA() {
  return (
    <section className="section final-cta" id="cta">
      <div className="section-inner">
        <Reveal>
          <div className="final-cta-card">
            <div className="final-cta-glow" />
            <img src="/mascot/cta-thumbsup.png" alt="گارفی" className="final-cta-mascot" />
            <h2 className="final-cta-title">آماده‌ای؟ بزن بریم!</h2>
            <p className="final-cta-desc">
              همین الان شروع کن. رایگانه، امنه، و یه گارفی منتظرته.
            </p>
            <button className="btn btn-primary final-cta-btn">شروع کن، رایگانه 🚀</button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
