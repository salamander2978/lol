interface Player {
  id: number;
  name: string;
  nickname: string;
  role: string;
  hero: string;
  avatar: string;
  steamLink: string;
  stats: {
    matches: number;
    winRate: number;
    avgKDA: number;
  };
}



class DotaTeamApp {
  private players: Player[] = [
    {
      id: 1,
      name: "Сэргей",
      nickname: "kefteme",
      role: "Carry",
      hero: "Juggernaut",
      avatar: "👤",
      steamLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      stats: { matches: 0, winRate: 0, avgKDA: 0 }
    },
    {
      id: 2,
      name: "Тимофей",
      nickname: "шаломандра",
      role: "Mid",
      hero: "Pudge",
      avatar: "👤",
      steamLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      stats: { matches: 0, winRate: 0, avgKDA: 0 }
    },
    {
      id: 3,
      name: "Яхор",
      nickname: "pika4y",
      role: "Offlane",
      hero: "Legion Commander",
      avatar: "👤",
      steamLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      stats: { matches: -1, winRate: -1, avgKDA: 0 }
    },
    {
      id: 4,
      name: "ванечка",
      nickname: "saitor",
      role: "Support",
      hero: "Monkey King",
      avatar: "👤",
      steamLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      stats: { matches: -2, winRate: -2, avgKDA: 0 }
    },
    {
      id: 5,
      name: "Малек",
      nickname: "ℤ-ℕ",
      role: "Hard Support",
      hero: "Undying",
      avatar: "👤",
      steamLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      stats: { matches: -3, winRate: -3, avgKDA: 0 }
    }
  ];



  constructor() {
    this.init();
  }

  private init(): void {
    this.renderHeader();
    this.renderHero();
    this.renderPlayers();
    this.renderFooter();
    this.setupEventListeners();
  }

  private renderHeader(): void {
    const header = document.createElement('header');
    header.className = 'header';
    header.innerHTML = `
      <nav class="nav">
        <div class="nav-brand">
          <img src="https://wow.zamimg.com/modelviewer/classic/webthumbs/npc/144/6032.png" alt="Logo" class="logo">
          <h1>alley muggers</h1>
        </div>
        <ul class="nav-menu">
          <li><a href="#home" class="nav-link active">Главная</a></li>
          <li><a href="#players" class="nav-link">Игроки</a></li>
        </ul>
        <div class="nav-toggle">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    `;
    document.body.appendChild(header);
  }

  private renderHero(): void {
    const hero = document.createElement('section');
    hero.className = 'hero';
    hero.id = 'home';
    hero.innerHTML = `
      <div class="hero-content">
        <h1 class="hero-title">alley muggers</h1>
        <p class="hero-subtitle">гопники в дота 3</p>
        <p class="hero-description">
          Мы - гопники и быдло.
        </p>
        <div class="hero-stats">
          <div class="stat">
            <span class="stat-number">${this.players.length}</span>
            <span class="stat-label">Игроков</span>
          </div>
          <div class="stat">
            <span class="stat-number">0</span>
            <span class="stat-label">Побед</span>
          </div>
          <div class="stat">
            <span class="stat-number">0</span>
            <span class="stat-label">Достижений</span>
          </div>
        </div>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" class="cta-button">Присоединиться к команде</a>
      </div>
      <div class="hero-image">
        <img src="https://wow.zamimg.com/modelviewer/classic/webthumbs/npc/144/6032.png" alt="Hero Logo" class="dota-logo">
      </div>
    `;
    document.body.appendChild(hero);
  }

  private renderPlayers(): void {
    const section = document.createElement('section');
    section.className = 'players-section';
    section.id = 'players';
    section.innerHTML = `
      <div class="container">
        <h2 class="section-title">Наша Команда</h2>
        <div class="players-grid">
          ${this.players.map(player => `
            <div class="player-card">
              <div class="player-avatar">${player.avatar}</div>
              <div class="player-info">
                <h3 class="player-name">${player.name}</h3>
                <p class="player-nickname">${player.nickname}</p>
                <p class="player-role">${player.role}</p>
                <p class="player-hero">Любимый герой: ${player.hero}</p>
                ${player.steamLink ? `<a href="${player.steamLink}" target="_blank" class="steam-link">Steam профиль</a>` : ''}
              </div>
              <div class="player-stats">
                <div class="stat-item">
                  <span class="stat-value">${player.stats.matches}</span>
                  <span class="stat-label">Матчей</span>
                </div>
                <div class="stat-item">
                  <span class="stat-value">${player.stats.winRate}%</span>
                  <span class="stat-label">Винрейт</span>
                </div>
                <div class="stat-item">
                  <span class="stat-value">${player.stats.avgKDA}</span>
                  <span class="stat-label">KDA</span>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
    document.body.appendChild(section);
  }

  


  private renderFooter(): void {
    const footer = document.createElement('footer');
    footer.className = 'footer';
    footer.innerHTML = `
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <h3>alley muggers</h3>
            <p>гопники в дота 3</p>
          </div>
          <div class="footer-section">
            <h4>Контакты</h4>
            <p>Email: нет, нам мобилу на улице не стрельнули</p>
            <p>Discord: @salamander297</p>
          </div>
          <div class="footer-section">
            <h4>Социальные сети</h4>
            <div class="social-links">
              <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" class="social-link">Twitch</a>
              <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" class="social-link">YouTube</a>
              <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" class="social-link">Twitter</a>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2025 alley muggers. Все права не защищены.</p>
        </div>
      </div>
    `;
    document.body.appendChild(footer);
  }

  private setupEventListeners(): void {
    // Навигация
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = (e.target as HTMLAnchorElement).getAttribute('href')?.substring(1);
        const targetSection = document.getElementById(targetId!);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' });
        }
        
        // Обновление активной ссылки
        navLinks.forEach(l => l.classList.remove('active'));
        (e.target as HTMLAnchorElement).classList.add('active');
      });
    });

    // Мобильное меню
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    navToggle?.addEventListener('click', () => {
      navMenu?.classList.toggle('active');
      navToggle.classList.toggle('active');
    });


  }


}

export function createApp(): void {
  new DotaTeamApp();
} 