import { useEffect, useRef, useState } from 'react'
import posUiImage from './assets/pos-ui.png'

const featureGroups = [
  {
    icon: '◈',
    title: '全鏈路穩定優化',
    items: [
      '高效收款：多通道整合收款，效能更流暢',
      '智慧對帳管理：自動對帳稽核，帳務更清晰',
      '多終端適配：支援手機、平板、電腦、智能終端',
      '高可用架構：高併發穩定支撐，營運更安心',
    ],
  },
  {
    icon: '⚡',
    title: '更高效的操作',
    items: [
      '商品 / 訂單管理：靈活管理商品與訂單，快速查找處理',
      '即收即清：交易快速入帳，資金流動更有效率',
      '組合支付 / 拆分付款：滿足多種收款場景',
      '掛單 / 先收後結：匹配多場景經營模式，收款更靈活',
    ],
  },
  {
    icon: '↗',
    title: '行銷場景深度優化',
    items: [
      '付款方案：支援刷卡、行動支付與多元付款',
      '促銷 / 分銷管理：促銷、分銷一體化，提升銷售效率',
      '會員 / 儲值 / 積分：整合會員全流程，提升回購黏性',
      '安全合規保障：符合支付安全標準，交易全程加密',
    ],
  },
]

const stats = [
  { value: '4 年+', label: '行業深耕', desc: '穩定支援多場景收款' },
  { value: '21 項+', label: '交易檢核', desc: '降低錯誤與操作風險' },
  { value: '4,352 筆+', label: '測試案例', desc: '覆蓋多種交易情境' },
  { value: '99.9%', label: '系統穩定性', desc: '提升營運可靠度' },
]

const advantages = [
  { icon: '📱', title: '跨場景操作', desc: '手機 / 平板雙端同步，多終端收款更自由', highlight: true },
  { icon: '📦', title: '高效庫存', desc: '庫存即時同步與預警，管理更輕鬆' },
  { icon: '🔒', title: '會員與安全', desc: '會員資料與交易保護，合規營運更放心' },
  { icon: '🚀', title: '快速部署', desc: '快速接入與配置，縮短上線時間' },
]

const trustBadges = ['安全合規', '穩定可靠', '多場景支持', '即時結算']

function Reveal({ children, className = '', delay = 0, direction = 'up' }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current

    if (!node) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.16,
        rootMargin: '0px 0px -8% 0px',
      },
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`reveal reveal-${direction} ${visible ? 'is-visible' : ''} ${className}`.trim()}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const closeMenu = () => setMobileMenuOpen(false)

  return (
    <div className="page-shell">
      <header className="site-header">
        <div className="container nav-row">
          <a className="brand" href="#hero" onClick={closeMenu}>
            <span className="brand-mark">⌁</span>
            <span className="brand-text">mPOS</span>
          </a>

          <nav className="desktop-nav">
            <a href="#features">產品功能</a>
            <a href="#trust">安全保障</a>
            <a href="#growth">成長引擎</a>
            <button className="btn btn-emerald" type="button">立即申請</button>
          </nav>

          <button
            className="menu-toggle"
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="切換選單"
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="mobile-panel">
            <nav className="mobile-nav">
              <a href="#features" onClick={closeMenu}>產品功能</a>
              <a href="#trust" onClick={closeMenu}>安全保障</a>
              <a href="#growth" onClick={closeMenu}>成長引擎</a>
              <button className="btn btn-emerald" type="button" onClick={closeMenu}>
                立即申請
              </button>
            </nav>
          </div>
        )}
      </header>

      <main>
        <section className="hero-section" id="hero">
          <div className="hero-grid container">
            <Reveal className="hero-copy" direction="left">
              <Reveal className="hero-tag" delay={100}>數字化收款・智慧經營更省心</Reveal>
              <Reveal delay={180}>
                <h1>
                  新一代 mPOS，
                  <br />
                  讓收款更快，銷售更順，
                  <br />
                  <span>商機更大</span>
                </h1>
              </Reveal>
              <Reveal delay={260}>
                <p>
                  支援刷卡收款、多元支付渠道、智慧對帳與全店數據管理，
                  打造高效收款、靈活經營的全場景解決方案。
                </p>
              </Reveal>

              <Reveal className="hero-actions" delay={340}>
                <button className="btn btn-primary" type="button">了解 mPOS 產品</button>
                <button className="btn btn-secondary" type="button">立即線上申請</button>
              </Reveal>

              <div className="badge-grid">
                {trustBadges.map((item, index) => (
                  <Reveal className="badge-item" key={item} delay={420 + index * 80}>
                    <span className="check-dot">✓</span>
                    <span>{item}</span>
                  </Reveal>
                ))}
              </div>
            </Reveal>

            <Reveal className="hero-visual" direction="right" delay={120}>
              <div className="floating-note note-left animate-float">
                <strong>交易更靈活</strong>
                <span>多場景全通路</span>
              </div>
              <div className="floating-note note-right animate-float delay-2">
                <strong>快速入帳</strong>
                <span>智慧對帳更安心</span>
              </div>
              <div className="floating-note note-bottom animate-float delay-4">
                <strong>經營更分析</strong>
                <span>數據驅動決策</span>
              </div>
              <div className="laptop animate-float-soft">
                <div className="laptop-screen">
                  <img src={posUiImage} alt="mPOS 操作畫面" />
                </div>
                <div className="laptop-base" />
              </div>
            </Reveal>
          </div>
        </section>

        <section className="feature-section" id="features">
          <div className="container">
            <Reveal className="section-heading">
              <h2>架構更強，驅動更精準</h2>
              <p>
                以穩定、可擴充的系統架構為基礎，結合智慧數據能力，
                協助門市更好地收款、營運與決策。
              </p>
            </Reveal>

            <div className="feature-grid">
              {featureGroups.map((group, index) => (
                <Reveal key={group.title} delay={index * 120}>
                  <article className="feature-card">
                    <div className="feature-icon">{group.icon}</div>
                    <h3>{group.title}</h3>
                    <ul>
                      {group.items.map((item) => (
                        <li key={item}>
                          <span className="list-dot">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="trust-section" id="trust">
          <div className="container trust-grid">
            <Reveal className="trust-copy" direction="left">
              <h2>
                超越多重驗證標準，
                <br />
                <span>為商家穩健保駕護航</span>
              </h2>
              <p>
                經過多場景交易驗證，從系統穩定、交易安全到營運效率，
                協助商家建立更可靠的收款體驗。
              </p>

              <div className="stat-grid">
                {stats.map((stat, index) => (
                  <Reveal key={stat.label} delay={index * 100}>
                    <article className="stat-card">
                      <strong>{stat.value}</strong>
                      <h3>{stat.label}</h3>
                      <p>{stat.desc}</p>
                    </article>
                  </Reveal>
                ))}
              </div>
            </Reveal>

            <Reveal className="trust-visual" direction="right" delay={120}>
              <div className="halo halo-gold" />
              <div className="laptop dark animate-float-soft">
                <div className="laptop-screen">
                  <img src={posUiImage} alt="mPOS 交易畫面" />
                </div>
                <div className="laptop-base" />
              </div>
            </Reveal>
          </div>
        </section>

        <section className="growth-section" id="growth">
          <div className="container">
            <Reveal className="section-heading">
              <h2>
                不只是 POS，
                <br />
                <span>更是驅動生意成長的引擎</span>
              </h2>
              <p>
                從收款、訂單、庫存到經營分析，讓資料互通、流程更順，
                協助商家提升效率與成長動能。
              </p>
            </Reveal>

            <div className="growth-grid">
              <Reveal className="device-showcase" direction="left">
                <div className="device device-tablet animate-float-soft">
                  <div className="device-frame">
                    <img src={posUiImage} alt="平板版 mPOS" />
                  </div>
                </div>
                <div className="device device-phone animate-float delay-2">
                  <div className="device-frame">
                    <img src={posUiImage} alt="手機版 mPOS" />
                  </div>
                </div>
              </Reveal>

              <div className="advantage-list">
                {advantages.map((item, index) => (
                  <Reveal key={item.title} delay={index * 100} direction="right">
                    <article
                      className={`advantage-card${item.highlight ? ' highlight' : ''}`}
                    >
                      {item.highlight && <div className="adv-badge">核心優勢</div>}
                      <div className="adv-icon">{item.icon}</div>
                      <div>
                        <h3>{item.title}</h3>
                        <p>{item.desc}</p>
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <Reveal>
            <div>
              <div className="brand footer-brand">
                <span className="brand-mark">⌁</span>
                <span className="brand-text">mPOS</span>
              </div>
              <p>
                mPOS 是為免稅零售與門市收款場景打造的智慧收銀系統，
                整合多元支付、會員經營、商品管理與數據分析，
                協助商家提升營運效率與顧客體驗。
              </p>
              <small>© 2026 mPOS. All rights reserved.</small>
            </div>
          </Reveal>

          <Reveal className="footer-links" delay={120} direction="right">
            <div>
              <h4>產品資訊</h4>
              <a href="#features">產品功能</a>
              <a href="#trust">安全保障</a>
              <a href="#growth">成長引擎</a>
            </div>
            <div>
              <h4>支援服務</h4>
              <a href="#">隱私政策</a>
              <a href="#">服務條款</a>
              <a href="#">幫助中心</a>
            </div>
          </Reveal>
        </div>
      </footer>
    </div>
  )
}

export default App
