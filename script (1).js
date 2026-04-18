/* ============================================
   INSTAGRAM BIO GENERATOR FOR GIRLS
   BioCraftGirls 2026 Edition — script.js
   Author: Karna Raju
   ============================================ */

'use strict';

/* ===================================
   BIO DATABASE (100+ Categorized Bios)
   =================================== */
const bioDB = {

  attitude: [
    "😈 {name} — not here to be liked, here to be remembered\n👑 My vibe? Unbothered. My energy? Expensive\n🔥 Love me or leave me, both options are fine",
    "💋 {name} — they said I couldn't. Now watch me\n🌪️ Too real for your fake world\n👸 Queens don't compete, they dominate",
    "⚡ {name} | Born to stand out, not fit in\n😏 Soft heart, sharp mind, no time for toxicity\n🖤 My silence is louder than your opinion",
    "🌹 {name} — serving looks & leaving them speechless\n💫 Not everyone's cup of tea, but I'm someone's whole vibe\n🔐 My peace is non-negotiable",
    "😎 {name} | Self-made. Self-paid. Self-loved\n🦋 Grew through what I went through\n💎 My standards? Higher than your assumptions",
    "🔥 {name} — catch flights, not feelings\n😤 Too focused to be bothered, too blessed to be stressed\n💅 Sorry, I only reply to people who match my energy",
    "🌪️ {name} | Wild heart, focused mind\n👑 I didn't come this far to only come this far\n⚡ They whisper. I roar.",
    "💋 {name} — classy with a hint of savage\n🖤 Not heartless, just selective\n🔥 My attitude? Imported. My style? Priceless",
    "😈 {name} | Too glamorous to give a damn\n👸 The only competition I have is yesterday's version of me\n✨ Slay first. Explain never.",
    "⚡ {name} — not your type? Good. I'm my own type\n🌹 Roses are red, I'm radically unbothered\n💎 Building an empire, one boundary at a time",
    "😏 {name} | All in or all out — no in-between\n🦋 Watch me rise above every single thing that tried to break me\n👑 Crown adjusted. Throne ready.",
    "🔥 {name} — made of fire, not to be played with\n😤 I don't chase dreams, I build them\n💅 My aura does the talking",
    "🌪️ {name} | Break the rules, make the story\n😈 I came, I saw, I conquered & looked good doing it\n⚡ Zero tolerance for nonsense, infinite capacity for greatness",
    "💋 {name} — too blessed to be stressed, too savage to settle\n👸 The world better make room because I'm not shrinking for anyone\n🖤 Villain era? No. Evolution era.",
    "😎 {name} | Chaos with mascara on\n🔥 Not mean, just brutally honest with better lipstick\n💎 Darling, I was born to be iconic",
    "👑 {name} — I'm the storm they weren't prepared for\n💫 My silence speaks volumes your noise never could\n🌹 Soft girl? Wrong girl.",
    "⚡ {name} | Bold moves only\n😈 If you can't handle my fire, stay out of my galaxy\n💅 Unapologetically me, and that's the flex",
    "🔥 {name} — I'm the main character and I wrote the script\n👸 Royalty by default, savagery by choice\n🌪️ Not hiding my power for anyone's comfort",
    "😏 {name} | In my own lane, no traffic\n💋 Too original to be copied, too rare to be forgotten\n🖤 My mood: unbothered queen",
    "💎 {name} — the audacity to exist this flawlessly\n👑 I didn't break. I evolved.\n😈 They'll study me one day",
  ],

  cute: [
    "🌸 {name} | Sunshine wrapped in soft chaos 🌼\n💕 Making the world sweeter, one smile at a time\n🍭 Professional overthinker & fulltime daydreamer",
    "🦋 {name} — small but mighty, soft but strong 💫\n🌷 Spreading kindness like confetti 🎀\n☁️ Living in my own little magical world",
    "🍓 {name} | Cute, clumsy & completely chaotic 🌈\n💗 In love with tiny things and big dreams\n🌸 Full of sugar, sass & a little bit of madness",
    "🌼 {name} — your daily dose of serotonin 🌞\n🎀 Soft girl era, no going back 🌷\n💕 Wishing you flowers and good vibes only",
    "🦋 {name} | Stargazer. Daydreamer. Cupcake enthusiast 🍰\n💗 Too cute to be mean, too sweet to care\n🌸 My vibe? Cottagecore with WiFi",
    "🌷 {name} — existing softly in a loud world 💫\n🍓 Collector of sunsets & cozy moments\n🎀 Life is better with pink everything",
    "☁️ {name} | Fluffy thoughts, butterfly feelings 🦋\n💕 Somewhere between 'adorable' and 'chaotic'\n🌸 Smiling because it confuses people",
    "🍭 {name} — cute by nature, sweet by choice 🌼\n💗 Angel with a mischievous streak\n🌷 Here for the soft mornings and good vibes",
    "🌈 {name} | Professional snuggler & positivity dealer 🌸\n🎀 Too pretty to be sad for long\n💕 Turning everyday moments into memories",
    "🦋 {name} — a little bit of magic, a lot of heart 💫\n🍓 Sunshine mixed with a little hurricane\n🌷 Soft on the outside, gold on the inside",
    "🌸 {name} | Sweet soul in a sparkly world ✨\n💗 Making kindness cool again 🎀\n🌼 Fluffy clouds and happy thoughts only",
    "☁️ {name} — floating through life on pink clouds 🌷\n💕 Your favorite person you haven't met yet\n🍰 Everything I do, I do it with glitter",
    "🎀 {name} | Baby pink energy ✨\n🦋 Gentle, kind, ridiculously adorable\n🌸 Currently: daydreaming and eating snacks",
    "💗 {name} — not all angels have wings, some have bangs 🌸\n🌷 Life's a garden, I'm the flower\n🍭 Sweet enough to give you cavities",
    "🌼 {name} | On a mission to stay soft 🌸\n💕 Happiness is a mood I stay in\n🎀 Love letters, fairy lights & good music",
    "✨ {name} — magical and making it messy 🦋\n🍓 Cute but will absolutely fight for what I love\n💗 Built different, finished with glitter",
    "🌷 {name} | Bloom where you're planted 🌸\n☁️ Soft energy, big dreams, zero drama\n💕 Collecting happy moments like stickers",
    "🎀 {name} — heart full, hands full of snacks 🍰\n🦋 Too sweet for your toxicity\n🌼 Main character of my adorable little life",
    "💫 {name} | Sparkle, shine, repeat ✨\n🌸 Existing on strawberry milk and good vibes\n💗 Cute is a lifestyle and I committed",
    "🌸 {name} — petals, pastels and pure sweetness 🌷\n🎀 Soft girl. Hard worker. Sweet soul.\n🍭 My aesthetic? Basically a warm hug",
  ],

  stylish: [
    "💅 {name} | Less is more, unless it's designer\n👜 Curating a life as chic as my wardrobe\n✨ Effortless by effort. Polished by choice.",
    "🕶️ {name} — fashion is my love language\n💄 Style is intelligence without words\n👠 Dressed for the life I'm building",
    "✨ {name} | Understated luxury is still luxury\n💎 Elegance is the only beauty that never fades\n🖤 My aesthetic: clean lines & intentional living",
    "👗 {name} — sophistication in every detail\n🌿 Minimalism as a philosophy, fashion as expression\n💅 Making classic look current since day one",
    "🕶️ {name} | Style icon in progress\n💄 I don't follow trends, I set them\n✨ Confidence is the best accessory — I never leave home without it",
    "💎 {name} — dressed in possibilities 🖤\n👠 Personal style: a biography without words\n🌙 Polished outside, poetic inside",
    "🌿 {name} | Modern elegance. Timeless soul.\n💅 The details are not details. They make the design.\n✨ Curating my life like a mood board",
    "👗 {name} — where comfort meets couture 🕶️\n💄 Style is the way I say who I am without speaking\n🖤 Every outfit tells a story. Mine? Chapter best.",
    "✨ {name} | Fashion-forward, future-focused 💎\n👠 I wear my confidence louder than my perfume\n🌿 Elegant chaos, perfectly arranged",
    "🕶️ {name} — classic never goes out of style\n💅 Dressed for success, styled for impact\n🖤 My wardrobe is my portfolio",
    "💄 {name} | Chic isn't a trend, it's a temperament ✨\n👗 Clothes are the furniture of the mind\n💎 From ordinary to iconic — that's the journey",
    "🌿 {name} — simple, polished, unforgettable\n🕶️ Fashion fades, style is eternal (Coco had a point)\n💅 Building a brand, one outfit at a time",
    "✨ {name} | Living life in editorial mode 👗\n💄 My feed is a lookbook, my life is the story\n🖤 Elegance is refusal — and I refuse to be basic",
    "💎 {name} — structured days, structured style\n👠 Quality over quantity, always and forever\n🌿 Minimal words. Maximum impact.",
    "🕶️ {name} | Where taste meets grace ✨\n💅 I don't dress up for others, I dress up for me\n🖤 Personal style: the art of curating yourself",
    "👗 {name} — sleek, sophisticated, unapologetically chic 💄\n💎 My style has a signature and it's me\n✨ You can't buy style but you can develop it",
    "🌿 {name} | Minimal aesthetic, maximum presence\n🕶️ Less noise, more elegance\n💅 Fashion is temporary. Taste is forever.",
    "✨ {name} — polished, poised & purposeful 💎\n👠 Every look is curated. Every moment is intentional.\n🖤 Style is a form of autobiography",
    "💄 {name} | Dressed with intention, living with passion 🌿\n👗 The most beautiful thing to wear is confidence\n✨ Classic silhouettes, modern attitude",
    "🕶️ {name} — creating a signature in every room I enter 💅\n💎 Fashion is architecture: it's a matter of proportions\n✨ Quietly iconic",
  ],

  vip: [
    "👑 {name} — not just a vibe, a whole empire\n💎 VIP access to my world: strictly by vibe check\n🌹 Born rare. Staying rare.",
    "✨ {name} | Queens don't ask for a seat at the table\nThey build their own 👑\n💫 Royalty isn't inherited — it's earned",
    "👸 {name} — the room changes when I walk in\n💎 Five-star energy, zero drama policy\n🌙 My crown? Never crooked. My vision? Crystal clear.",
    "🌹 {name} | Exclusive access, selective company\n👑 Power moves only — no explanation needed\n✨ Living in luxury, breathing in abundance",
    "💫 {name} — first class in everything, including who I let close\n👸 The universe conspires for those who move like queens\n💎 VIP? No. I'm the one they call VIP for.",
    "👑 {name} | Soft power. Sharp mind. Supreme energy.\n🌹 I don't compete — I complete\n✨ Royalty is a standard, not a status",
    "💎 {name} — where I go, excellence follows\n👸 The upgrade you didn't know was coming\n🌙 My presence is the event",
    "✨ {name} | Top tier. No negotiation.\n👑 I didn't come to play. I came to own the game.\n💫 A queen's work is never done, but the results are divine",
    "🌹 {name} — luxury is my love language\n💎 Not everyone gets this level of energy\n👸 Five-star everything: values, standards, vibes",
    "👑 {name} | Majestic by nature, powerful by choice\n✨ My aura? Rare. My energy? Sacred.\n💫 The only title that matters: true to myself",
    "💎 {name} — dripping in excellence, not gold\n🌹 Born to leave a legacy, not just a footprint\n👑 Unbothered. Unmatched. Undeniable.",
    "✨ {name} | Premium edition — limited access 👸\n💫 Everything I touch turns into something golden\n🌙 My orbit? Exclusive. My energy? Magnetic.",
    "🌹 {name} — the standard, not the exception\n💎 In a world of trends, I'm a classic\n👑 VIP is a mindset. I live there.",
    "👸 {name} | Rare breed. Divine energy. Unstoppable force.\n✨ Not everyone can handle this frequency\n💫 Legacy > virality",
    "💎 {name} — orchestrating greatness one move at a time\n🌹 Queen of my own narrative\n👑 The throne was always mine. I just arrived.",
    "✨ {name} | Living above average by design 👸\n💫 I set the standards others try to meet\n🌙 Sovereign energy in a borrowed world",
    "🌹 {name} — effortlessly supreme\n💎 My network? Elite. My mindset? Next level.\n👑 Royal blood runs through every decision I make",
    "👑 {name} | Not everyone deserves front row seats ✨\n💫 I'm not the girl next door — I'm the destination\n🌹 Walk into rooms like you own them. Because you do.",
    "💎 {name} — excellence is the minimum standard, not the goal\n👸 My era? Undeniably, unapologetically powerful\n✨ The universe runs on queen energy. I provide it.",
    "🌙 {name} | Celestial. Sovereign. Supreme.\n💎 I don't have followers — I have a kingdom\n👑 Royally unbothered. Masterfully unstoppable.",
  ],

  aesthetic: [
    "🌙 {name} | somewhere between a poem and a dream ✨\ncollecting moonlight in glass jars 🫧\nsoft girl with a melancholic playlist",
    "🌿 {name} — living slowly, feeling deeply ☁️\nold books, new dreams & fairy lights everywhere\n💫 everything is art if you look long enough",
    "🌙 {name} | foggy mornings & vintage aesthetics 🎞️\nmy soul is a collage of everything beautiful\n🌸 creating my own little universe, slowly",
    "☁️ {name} — a wildflower in a curated world 🌿\nchasing the golden hour every single day\n💫 vibes like watercolor — soft, flowing, imperfect",
    "🎞️ {name} | film photos & rainy playlists 🌙\ncurating a life that feels like a poem\n🌸 romanticizing every single ordinary moment",
    "🌿 {name} — where the forest meets the library ✨\nan old soul navigating a new world\n☁️ aesthetic is a feeling, not a filter",
    "🌙 {name} | dark academia dreams & soft art 🎞️\nif my life were a film, the score would be hauntingly beautiful\n💫 making meaning out of small things",
    "☁️ {name} — cottagecore with existential questions 🌸\ncommunicating mostly through poetry and eye contact\n🌿 soft mornings, deep thoughts, no small talk",
    "✨ {name} | an aesthetic in motion 🌙\ncollecting experiences like pressed flowers in old books\n🎞️ slow living is the highest luxury",
    "🌸 {name} — bloom in all seasons, not just spring 🌿\nmy mind is a gallery no one gets a full tour of\n☁️ soft energy with depths you can't see from the surface",
    "🌙 {name} | moonchild with earthly roots 🌿\nliving at the intersection of art & feeling\n✨ I find magic in things others call ordinary",
    "🎞️ {name} — vintage soul, modern struggle, timeless vibe ☁️\ncollecting sunsets, playlists & pretty architecture\n💫 quietly creating my mythology",
    "🌿 {name} | journals full of unsent letters 🌙\nI speak in metaphors and listen in feelings\n🌸 the world is a poem and I'm learning to read it",
    "☁️ {name} — soft chaos organized into beauty ✨\nmy aesthetic: between golden hour and blue hour\n🎞️ a human mood board",
    "🌙 {name} | finding the sacred in the mundane 🌸\ndark academia meets soft girl energy\n🌿 I collect moments more than things",
    "✨ {name} — dreaming in pastel and depth 🌙\nevery scar is just art with backstory\n☁️ I'm not going through a phase, I'm becoming",
    "🌸 {name} | a walking gallery of feelings 🎞️\nthe aesthetic? beautiful melancholy with hope underneath\n💫 making every ordinary day feel like a scene",
    "🌿 {name} — pressed flowers & midnight thoughts 🌙\nliving inside a feeling I can't quite name yet\n✨ creating art from everything that ever hurt",
    "☁️ {name} | between wonder and wander ✨\nold films, new feelings, perpetual softness\n🌸 romanticize everything — yes, even the hard parts",
    "🌙 {name} — light filtered through old windows 🌿\nmy life is a long exposure photograph\n🎞️ quietly building something beautiful",
  ]
};

/* ===================================
   DOM ELEMENTS
   =================================== */
const nameInput     = document.getElementById('nameInput');
const categorySelect= document.getElementById('categorySelect');
const generateBtn   = document.getElementById('generateBtn');
const btnLoader     = document.getElementById('btnLoader');
const bioGrid       = document.getElementById('bioGrid');
const resultsSection= document.getElementById('resultsSection');
const regenerateBtn = document.getElementById('regenerateBtn');
const inputError    = document.getElementById('inputError');
const themeToggle   = document.getElementById('themeToggle');
const themeIcon     = document.getElementById('themeIcon');
const navbar        = document.getElementById('navbar');
const hamburger     = document.getElementById('hamburger');
const navMenu       = document.getElementById('navMenu');
const toast         = document.getElementById('toast');

/* ===================================
   THEME TOGGLE
   =================================== */
let isDark = false;

function setTheme(dark) {
  isDark = dark;
  document.body.classList.toggle('dark-mode', dark);
  document.body.classList.toggle('light-mode', !dark);
  themeIcon.className = dark ? 'fas fa-sun' : 'fas fa-moon';
  localStorage.setItem('biogirls-theme', dark ? 'dark' : 'light');
}

// Load saved theme
const savedTheme = localStorage.getItem('biogirls-theme');
if (savedTheme === 'dark') setTheme(true);

themeToggle.addEventListener('click', () => setTheme(!isDark));

/* ===================================
   NAVBAR SCROLL
   =================================== */
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

/* ===================================
   MOBILE HAMBURGER
   =================================== */
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navMenu.classList.toggle('open');
});

// Close menu on link click
navMenu.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navMenu.classList.remove('open');
  });
});

/* ===================================
   BIO GENERATION
   =================================== */
function getRandomBios(category, name, count = 6) {
  const pool = [...bioDB[category]];
  // Shuffle pool
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, count).map(bio =>
    bio.replace(/\{name\}/g, name.trim())
  );
}

function createBioCard(bioText, index) {
  const card = document.createElement('div');
  card.className = 'bio-card';
  card.style.animationDelay = `${index * 0.08}s`;

  const categoryEmojis = {
    attitude: '😈 Attitude',
    cute: '🌸 Cute',
    stylish: '💅 Stylish',
    vip: '👑 VIP',
    aesthetic: '🌙 Aesthetic'
  };
  const currentCat = categoryEmojis[categorySelect.value] || '✨ Bio';

  card.innerHTML = `
    <div class="bio-card-header">
      <span class="bio-number">${currentCat} #${index + 1}</span>
    </div>
    <div class="bio-text">${bioText.replace(/\n/g, '<br>')}</div>
    <button class="btn-copy" data-bio="${encodeURIComponent(bioText)}">
      <i class="fas fa-copy"></i> Copy Bio
    </button>
  `;

  // Copy button logic
  const copyBtn = card.querySelector('.btn-copy');
  copyBtn.addEventListener('click', () => copyBio(copyBtn, bioText));

  return card;
}

function generateBios() {
  const name = nameInput.value.trim();

  // Validation
  if (!name) {
    nameInput.classList.add('error');
    inputError.classList.add('show');
    nameInput.focus();
    setTimeout(() => {
      nameInput.classList.remove('error');
      inputError.classList.remove('show');
    }, 3000);
    return;
  }

  const category = categorySelect.value;

  // Show loading state
  generateBtn.querySelector('.btn-text').style.display = 'none';
  btnLoader.style.display = 'flex';
  generateBtn.disabled = true;

  // Simulate brief async processing
  setTimeout(() => {
    const bios = getRandomBios(category, name, 6);

    // Clear and render
    bioGrid.innerHTML = '';
    bios.forEach((bio, i) => {
      bioGrid.appendChild(createBioCard(bio, i));
    });

    // Show results section
    resultsSection.style.display = 'block';

    // Scroll to results
    setTimeout(() => {
      resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);

    // Re-trigger fade-up on results header
    resultsSection.querySelectorAll('.fade-up').forEach(el => {
      el.classList.remove('visible');
      setTimeout(() => el.classList.add('visible'), 50);
    });

    // Reset button
    generateBtn.querySelector('.btn-text').style.display = 'flex';
    btnLoader.style.display = 'none';
    generateBtn.disabled = false;

  }, 900);
}

generateBtn.addEventListener('click', generateBios);
regenerateBtn.addEventListener('click', generateBios);

// Allow Enter key in name input
nameInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') generateBios();
});

// Remove error on input
nameInput.addEventListener('input', () => {
  nameInput.classList.remove('error');
  inputError.classList.remove('show');
});

/* ===================================
   COPY TO CLIPBOARD
   =================================== */
function copyBio(btn, text) {
  // Clean text for clipboard
  const cleanText = text.replace(/<br\s*\/?>/gi, '\n');

  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(cleanText).then(() => {
      showCopySuccess(btn);
    }).catch(() => {
      fallbackCopy(cleanText, btn);
    });
  } else {
    fallbackCopy(cleanText, btn);
  }
}

function fallbackCopy(text, btn) {
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.style.cssText = 'position:fixed;top:-9999px;left:-9999px;opacity:0;';
  document.body.appendChild(ta);
  ta.focus();
  ta.select();
  try {
    document.execCommand('copy');
    showCopySuccess(btn);
  } catch (e) {
    console.warn('Copy failed:', e);
  }
  document.body.removeChild(ta);
}

function showCopySuccess(btn) {
  const original = btn.innerHTML;
  btn.classList.add('copied');
  btn.innerHTML = '<i class="fas fa-check"></i> Copied!';

  showToast();

  setTimeout(() => {
    btn.classList.remove('copied');
    btn.innerHTML = original;
  }, 2200);
}

/* ===================================
   TOAST NOTIFICATION
   =================================== */
let toastTimer;
function showToast() {
  clearTimeout(toastTimer);
  toast.classList.add('show');
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2500);
}

/* ===================================
   FAQ ACCORDION
   =================================== */
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const answer = item.querySelector('.faq-answer');
    const isOpen = item.classList.contains('active');

    // Close all
    document.querySelectorAll('.faq-item').forEach(i => {
      i.classList.remove('active');
      i.querySelector('.faq-answer').classList.remove('open');
      i.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
    });

    // Open clicked (toggle)
    if (!isOpen) {
      item.classList.add('active');
      answer.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
    }
  });
});

/* ===================================
   INTERSECTION OBSERVER (FADE-UP)
   =================================== */
const fadeUpObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      // Only unobserve non-bio-grid items
      if (!entry.target.closest('.bio-grid')) {
        fadeUpObserver.unobserve(entry.target);
      }
    }
  });
}, {
  threshold: 0.12,
  rootMargin: '0px 0px -40px 0px'
});

// Observe all fade-up elements
function observeFadeUps() {
  document.querySelectorAll('.fade-up').forEach(el => {
    fadeUpObserver.observe(el);
  });
}
observeFadeUps();

// Re-observe after bio generation
const bioGridObserver = new MutationObserver(() => {
  document.querySelectorAll('.bio-card.fade-up').forEach(el => {
    fadeUpObserver.observe(el);
  });
});
bioGridObserver.observe(bioGrid, { childList: true });

/* ===================================
   SMOOTH SCROLL FOR NAV LINKS
   =================================== */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const navH = navbar.offsetHeight;
      const top = target.getBoundingClientRect().top + window.scrollY - navH - 12;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

/* ===================================
   ACTIVE NAV LINK ON SCROLL
   =================================== */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.toggle(
          'active',
          link.getAttribute('href') === `#${entry.target.id}`
        );
      });
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(s => sectionObserver.observe(s));

/* ===================================
   INIT
   =================================== */
console.log('%c✨ BioCraftGirls 2026 | Instagram Bio Generator for Girls', 
  'color: #e879f9; font-size: 14px; font-weight: bold;');
console.log('%cBuilt by Karna Raju | rockeybhaioffer.blogspot.com',
  'color: #a855f7; font-size: 11px;');
