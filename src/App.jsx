import { useEffect, useState } from 'react'
import { capabilities, process, projectCategories, projects } from './data'

function ArrowIcon({ external = false }) {
  return external ? (
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5H5v14h14v-3M13 5h6v6M19 5l-9 9" /></svg>
  ) : (
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 5 7 7-7 7" /></svg>
  )
}

function CapabilityIcon({ type }) {
  const paths = {
    game: <><path d="M8 9h8a5 5 0 0 1 4.7 6.7l-.6 1.7a2.3 2.3 0 0 1-3.8.9L14.7 17H9.3l-1.6 1.3a2.3 2.3 0 0 1-3.8-.9l-.6-1.7A5 5 0 0 1 8 9Z"/><path d="M8 12v3M6.5 13.5h3M16.5 12.5h.01M18 15h.01"/></>,
    ai: <><path d="M9 4a3 3 0 0 0-3 3v1a3 3 0 0 0-2 2.8A3 3 0 0 0 6 14v1a3 3 0 0 0 3 3M15 4a3 3 0 0 1 3 3v1a3 3 0 0 1 2 2.8A3 3 0 0 1 18 14v1a3 3 0 0 1-3 3M12 3v18M9 8h3M12 13h3"/></>,
    launch: <><path d="M14 5c2.5-1.5 4.6-1.2 5-1 .2.4.5 2.5-1 5l-6 6-4-4 6-6Z"/><path d="m8 11-3 1-2 3 5 1 1 5 3-2 1-4M6 18l-2 2M16 8h.01"/></>,
    web: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 9h18M7 7h.01M10 7h.01"/></>,
  }
  return <svg className="line-icon" viewBox="0 0 24 24" aria-hidden="true">{paths[type]}</svg>
}

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="返回顶部">OPC</a>
      <nav aria-label="主导航">
        <a href="#capabilities">能力</a>
        <a href="#projects">项目</a>
        <a href="#process">合作</a>
      </nav>
      <a className="button button-small" href="#contact">联系合作</a>
    </header>
  )
}

function HeroVisual() {
  return (
    <div className="hero-visual" aria-hidden="true">
      <div className="product-plane plane-game">
        <div className="plane-bar"><i /><i /><span /></div>
        <div className="game-stage"><span /><span /><span /></div>
      </div>
      <div className="product-plane plane-ai">
        <div className="plane-sidebar"><i /><i /><i /><i /></div>
        <div className="ai-core"><span /><span /><span /></div>
      </div>
      <div className="product-plane plane-web">
        <div className="web-chart" />
        <div className="web-copy"><i /><i /><i /></div>
      </div>
      <div className="validation-line"><i /><i /><i /></div>
    </div>
  )
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-copy reveal">
        <h1>OPC</h1>
        <h2>AI驱动的快速产品验证开发者</h2>
        <p>1–3天完成可运行Demo（小游戏 / AI工具 / Web应用）</p>
        <div className="hero-actions">
          <a className="button" href="#projects">查看项目</a>
          <a className="button button-secondary" href="#contact">联系合作</a>
        </div>
      </div>
      <HeroVisual />
      <div className="scroll-cue" aria-hidden="true"><span />向下浏览</div>
    </section>
  )
}

function Capabilities() {
  return (
    <section className="section capabilities" id="capabilities">
      <div className="section-heading reveal">
        <span className="section-number">01</span>
        <div><h2>核心能力</h2><p>从想法到可运行产品，优先验证最关键的一步。</p></div>
      </div>
      <div className="capability-layout reveal">
        <article className="capability-feature">
          <div className="mini-planes" aria-hidden="true"><i /><i /><i /></div>
          <div>
            <span className="feature-orbit" aria-hidden="true" />
            <h3>快速产品验证</h3>
            <p>1–3天Demo</p>
          </div>
        </article>
        <div className="capability-list">
          {capabilities.map((item) => (
            <div className="capability-row" key={item.title}>
              <span className="icon-wrap"><CapabilityIcon type={item.icon} /></span>
              <div><h3>{item.title}</h3>{item.detail && <p>{item.detail}</p>}</div>
              <ArrowIcon />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Projects() {
  const [active, setActive] = useState(0)
  const [activeCategory, setActiveCategory] = useState('all')
  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter((item) => item.category === activeCategory)
  const project = filteredProjects[active] ?? filteredProjects[0]

  useEffect(() => {
    setActive(0)
  }, [activeCategory])

  return (
    <section className="section projects" id="projects">
      <div className="section-heading reveal">
        <span className="section-number">02</span>
        <div><h2>项目展示</h2><p>用可运行的产品，而不是文档，验证想法。</p></div>
      </div>
      <div className="project-filters reveal" aria-label="项目分类">
        {projectCategories.map((category) => (
          <button
            className={category.id === activeCategory ? 'category-pill active' : 'category-pill'}
            key={category.id}
            type="button"
            onClick={() => setActiveCategory(category.id)}
          >
            {category.label}
          </button>
        ))}
      </div>
      <div className="project-showcase reveal">
        <div className="project-index" role="tablist" aria-label="项目列表">
          {filteredProjects.map((item, index) => (
            <button
              className={index === active ? 'project-tab active' : 'project-tab'}
              key={item.title}
              role="tab"
              aria-selected={index === active}
              aria-controls="project-panel"
              onClick={() => setActive(index)}
            >
              <span>{item.number}</span><div><strong>{item.title}</strong><small>{item.categoryLabel} · {item.type}</small></div>
            </button>
          ))}
        </div>
        <article className="project-panel" id="project-panel" role="tabpanel" key={project.title}>
          <div className={`project-image-wrap media-${project.number}`}>
            <div className="project-image-frame">
              <img src={project.image} alt={project.alt} />
            </div>
          </div>
          <div className="project-copy">
            <span className="project-count">PROJECT / {project.number}</span>
            <h3>{project.title}</h3>
            <em>{project.categoryLabel}</em>
            <p>{project.type}</p>
            <ul>{project.points.map((point) => <li key={point}>{point}</li>)}</ul>
            <a className="project-link" href={project.url} target="_blank" rel="noreferrer">
              打开项目 <ArrowIcon external />
            </a>
          </div>
        </article>
      </div>
    </section>
  )
}

function Process() {
  return (
    <section className="section process" id="process">
      <div className="section-heading reveal">
        <span className="section-number">03</span>
        <div><h2>合作方式</h2><p>从需求到可运行Demo，最快1天进入验证。</p></div>
      </div>
      <div className="timeline reveal">
        <div className="timeline-line" aria-hidden="true" />
        {process.map(([number, label], index) => (
          <div className={index === 2 ? 'timeline-step focal' : 'timeline-step'} key={number}>
            <span className="timeline-number">{number}</span>
            <span className="timeline-dot" aria-hidden="true" />
            <h3>{label}</h3>
          </div>
        ))}
      </div>
      <a className="button process-cta reveal" href="#contact">联系合作</a>
    </section>
  )
}

function Contact() {
  const [copied, setCopied] = useState(false)
  const copyWechat = async () => {
    try {
      await navigator.clipboard.writeText('sangmujun')
    } catch {
      const input = document.createElement('textarea')
      input.value = 'sangmujun'; document.body.appendChild(input); input.select(); document.execCommand('copy'); input.remove()
    }
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }
  return (
    <section className="contact" id="contact">
      <div className="contact-line" aria-hidden="true"><i /></div>
      <div className="contact-copy reveal">
        <h2>有想法，<br />就先做一个能跑的Demo。</h2>
        <p>小游戏、AI工具或Web应用，1–3天开始验证。</p>
      </div>
      <div className="wechat reveal">
        <span>微信</span>
        <div className="wechat-control"><strong>sangmujun</strong><button onClick={copyWechat}>{copied ? '已复制' : '复制微信号'}</button></div>
        <small className={copied ? 'visible' : ''} aria-live="polite">✓ 已复制</small>
      </div>
    </section>
  )
}

function Footer() {
  return <footer><strong>OPC</strong><span>AI驱动的快速产品验证开发者</span><a href="#top">返回顶部 ↑</a></footer>
}

export default function App() {
  useEffect(() => {
    const nodes = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible'))
    }, { threshold: 0.12 })
    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [])

  return <><Header /><main><Hero /><Capabilities /><Projects /><Process /><Contact /></main><Footer /></>
}
