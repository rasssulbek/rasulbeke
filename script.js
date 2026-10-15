// Konfiguratsiya ma'lumotlarini yuklash
document.addEventListener("DOMContentLoaded", () => {
  document.title = `${CONFIG.fullName} — SMM va kontent strategiyalari`;
  document.getElementById("nav-fullname").textContent = CONFIG.fullName;
  document.getElementById("footer-fullname").textContent = CONFIG.fullName;
  document.getElementById("about-education").textContent = CONFIG.educationFocus + ", " + CONFIG.university;
  
  // Statuslar
  const statusContainer = document.getElementById("status-container");
  statusContainer.innerHTML = CONFIG.statusTags.map(tag => `<span class="badge">${tag}</span>`).join('');
  
  // Meta qism (yosh, joylashuv, fanlar)
  const heroMeta = document.getElementById("hero-meta-details");
  heroMeta.innerHTML = `${CONFIG.age} yosh · ${CONFIG.location} · ${CONFIG.educationFocus} · SMM mutaxassisi`;

  // Kontakt havolalari
  document.getElementById("link-phone").href = `tel:${CONFIG.contacts.phone.replace(/\s+/g, '')}`;
  document.getElementById("link-phone").textContent = `📞 ${CONFIG.contacts.phone}`;
  
  document.getElementById("link-email").href = `mailto:${CONFIG.contacts.email}`;
  document.getElementById("link-email").textContent = `📧 ${CONFIG.contacts.email}`;
  
  document.getElementById("link-tg-direct").href = `https://t.me/${CONFIG.contacts.telegramUser.replace('@', '')}`;
  document.getElementById("link-tg-direct").textContent = `✈️ Telegram: ${CONFIG.contacts.telegramUser}`;
  
  document.getElementById("link-tg-channel").href = `https://t.me/${CONFIG.contacts.telegramChannel.replace('@', '')}`;
  document.getElementById("link-tg-channel").textContent = `📢 Kanal: ${CONFIG.contacts.telegramChannel}`;
  
  document.getElementById("link-instagram").href = `https://instagram.com/${CONFIG.contacts.instagram.replace('@', '')}`;
  document.getElementById("link-instagram").textContent = `📸 Instagram: ${CONFIG.contacts.instagram}`;

  // Yilni yangilash
  document.getElementById("current-year").textContent = new Date().getFullYear();

  // Xizmatlar ro'yxatini render qilish
  const activeGrid = document.getElementById("services-active-grid");
  activeGrid.innerHTML = CONFIG.services.active.map(s => `
    <div class="service-card">
      <div class="icon-wrapper">${s.icon}</div>
      <span class="badge">ASOSIY XIZMAT</span>
      <h3 style="margin-top: 8px;">${s.title}</h3>
      <p>${s.desc}</p>
    </div>
  `).join('');

  const devGrid = document.getElementById("services-dev-grid");
  devGrid.innerHTML = CONFIG.services.developing.map(s => `
    <div class="service-card">
      <div class="icon-wrapper">${s.icon}</div>
      <span class="badge badge-dev">RIVOJLANTIRILMOQDA</span>
      <h3 style="margin-top: 8px;">${s.title}</h3>
      <p>${s.desc}</p>
    </div>
  `).join('');

  // Mobil menu toggle
  const menuToggle = document.querySelector(".menu-toggle");
  const mobileMenu = document.querySelector(".mobile-menu");
  menuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
  });

  // Mobil navigatsiya yopilishi
  document.querySelectorAll(".mobile-menu a").forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
    });
  });

  // PORTFOLIO INTERAKTIV DATA (Namunaviy o'quv markazi loyihasi)
  const portfolioData = {
    "1": {
      targets: "O'quv markazining mavjudligini e'lon qilish, bo'lajak talabalarning o'rganishdagi asosiy qo'rquv va muammolarini (to'siqlarini) ko'rsatib, e'tiborini jalb qilish.",
      audience: "Samarqanddagi til/IT kurslariga qiziqayotgan, lekin boshlashga ikkilanayotgan yoshlar va ularning ota-onalari.",
      metrics: "Telegramda views (ko'rishlar) va " + CONFIG.contacts.telegramUser + " ga kelgan savollar, Instagramda saqlab olinganlar soni.",
      telegram: {
        title: "🤔 Bilim olishni boshlashdagi eng katta toʻsiq nima? (Muammo)",
        text: `Mablag'mi, vaqtsizlikmi yoki shunchaki "ertaga boshlayman" degan odatmi?\n\nKo'pchilik yoshlar yangi kasb yoki til o'rganishni istaydi, lekin birinchi qadamni qo'yishga qo'rqadi. Nega?\nChunki bizga aniq yo'nalish yetishmaydi. "Ertaga" degan so'z esa vaqtni yutqazishdan boshqa narsaga yaramaydi.\n\n📍 Samarqand davlat universiteti (SamDU) iqtisodiyoti talabasi sifatida shuni aytamanki: bugungi kichik investitsiya (vaqt va bilimga) ertangi katta muvaffaqiyat poydevoridir.\n\nSizni to'xtatib turgan narsa nima? Izohlarda yozing yoki @rasulbeke ga fikringizni bildiring👇`,
        visual: "Karyera yoki o'qish oldida o'ylanib turgan o'quvchining xira, tahliliy dark-style rasmi."
      },
      instagram: {
        title: "Qadam bosishdan sizni nima to'xtatyapti? (Reels / Karusel)",
        text: `Slayd 1: Hamma narsani keyinga qoldirish charchatmadimi?\nSlayd 2: 3 ta asosiy bahona:\n1) "Vaqtim yo'q" (Aslida kuniga 2 soat ijtimoiy tarmoqdamiz)\n2) "Kurslar qimmat" (Foydasiz narsalarga ko'proq xarajat qilamiz)\n3) "Menda o'xshamasligi mumkin" (Urinib ko'rmasdan bilib bo'lmaydi)\n\nSlayd 3: Yechim nima?\nHozirda hamma narsa tizimli yondashuvni talab qiladi. Birinchi darsga keling, sinab ko'ring va xulosa qiling.\n\nSizni to'xtatib turgan narsa nima? Izohlarda yozing va biz bilan bog'laning!`,
        visual: "Dinamik montaj va Reels: matnli tezkor savollar, Rasulbek tomonidan uning ustida tahliliy izoh (kamera qarshisida yoki b-roll formatida)."
      }
    },
    "2": {
      targets: "O'quv markazining afzalliklari, metodikasi va ishonchli yondashuvini (ijtimoiy isbot va qulayliklar) ko'rsatib, auditoriya bilan ishonch ko'prigini o'rnatish.",
      audience: "Sifatli va qulay muhitda tezroq natija olishni xohlaydiganlar.",
      metrics: "Post ostida foydali materiallarni so'raganlar soni, repostlar hajmi.",
      telegram: {
        title: "📚 Biznes va Ta'lim: 3 ta xatodan qochish usuli (Amaliy maslahat)",
        text: `Nega ayrimlar yillab til o'rganadi-yu, lekin gapira olmaydi? Buning 3 ta sababi bor:\n\n1. Faqat nazariya bilan cheklanish (amaliyot yo'qligi)\n2. Tizimsiz dars jadvali\n3. Motivatsiyaning tez yo'qolishi\n\nBizning o'quv markazimizda darslar iqtisodiy va tizimli model asosida quriladi: har bir o'quvchi birinchi haftadanoq real loyihalar yoki jamoaviy amaliyot bilan shug'ullanadi.\n\n🎁 Sizga foydali bo'lishi uchun "O'rganishni osonlashtiruvchi 5 ta AI vositasi" ro'yxatini tayyorladik. Uni bepul olish uchun @rasulbeke ga "AI BILIM" so'zini yuboring yoki izohlarda "+" qoldiring!`,
        visual: "Dars jarayonidagi faol yoshlar, interaktiv muhit va o'quvchilar tahlili aks etgan sifatli grafik."
      },
      instagram: {
        title: "1 yilda emas, 3 oyda natija olish siri nimada?",
        text: `O'quv jarayonidagi eng katta sir — TIZIM va AMALIYOT. \n\nAgar siz har kuni tizimsiz 5 soat o'qisangiz ham, kuniga 30 daqiqalik tizimli amaliyotchalik foyda bermaydi.\n\nBizning markazimizda o'quvchilar xuddi shunday ishlaydi. 1 oyda natijani his qilasiz!\n\nBizni kuzatib boring va bepul maslahat darsiga yozilishni unutmang. Izohlarda fikringizni yozib qoldiring!`,
        visual: "Karusel: 1-slayd: 'Nega natija bo'lmaydi?', 2-slayd: amaliy usullar, 3-slayd: natijani o'lchash. Rasmda dars xonalari va zamonaviy muhit."
      }
    },
    "3": {
      targets: "Qiziqqanlar ro'yxatini shakllantirish, o'quv markazining yangi guruhlariga talabalarni yozish uchun to'g'ridan-to'g'ri bog'lanishga undash (Lead generation).",
      audience: "Boshlashga tayyor bo'lgan, lekin kichik turtki kutayotgan faol obunachilar.",
      metrics: "Ro'yxatdan o'tganlar (leadlar) soni, direct xabarlari.",
      telegram: {
        title: "🚀 Yangi guruhlarga qabul boshlandi! (Harakatga chorlov)",
        text: `Siz hali ham "ertaga boshlayman" deb o'ylayapsizmi? \nErtaga emas, BUGUN eng to'g'ri vaqt.\n\nSamDU atrofida va butun Samarqandda sifatli ta'lim qidirayotganlar uchun yangi guruhlarimizda joylar soni cheklangan. \n\nHoziroq @rasulbeke profiliga "KURS" so'zini yuboring va bepul birinchi darsimizga joy band qiling.\n\n📅 Guruhlar 3 kundan keyin darslarni boshlaydi. Ro'yxatdan o'tish uchun: @rasulbeke yoki +998 91 313 13 91.`,
        visual: "Katta va jozibador matnli poster: 'GURUHLARGA QABUL BO'SHLANDI! Joylar soni cheklangan' yozuvi bilan."
      },
      instagram: {
        title: "Bu safar ham kechikasizmi? Qabul yopilishiga 3 kun qoldi!",
        text: `Faqatgina 3 kundan so'ng bizning yangi guruhlarimiz birinchi darslarini boshlaydilar. \n\nAgar siz yana o'ylanib tursangiz, keyingi oygacha kutishingizga to'g'ri keladi.\n\nBiz bilan birga yangi bosqichga chiqing!\n\nRo'yxatdan o'tish uchun 'KURS' so'zini izohda yoki Direct'da qoldiring!`,
        visual: "Post video yoki static rasm: Orqaga sanovchi taymer effekti, guruhga yozilish jarayoni va jo'shqin visual."
      }
    }
  };

  // Portfolio tab almashtirish mantiqi
  let currentDay = "1";
  let currentPlatform = "telegram";

  function updatePortfolioDisplay() {
    const data = portfolioData[currentDay];
    document.getElementById("preview-target").textContent = data.targets;
    document.getElementById("preview-audience").textContent = data.audience;
    document.getElementById("preview-metrics").textContent = data.metrics;

    const platformBadge = document.getElementById("platform-badge");
    const postTitle = document.getElementById("post-title");
    const postText = document.getElementById("post-text");
    const visualDesc = document.getElementById("visual-desc");

    if (currentPlatform === "telegram") {
      platformBadge.textContent = "✈️ Telegram Preview";
      postTitle.textContent = data.telegram.title;
      postText.textContent = data.telegram.text;
      visualDesc.textContent = data.telegram.visual;
    } else {
      platformBadge.textContent = "📸 Instagram Preview";
      postTitle.textContent = data.instagram.title;
      postText.textContent = data.instagram.text;
      visualDesc.textContent = data.instagram.visual;
    }
  }

  // Day Tabs Event
  document.querySelectorAll(".day-tab").forEach(tab => {
    tab.addEventListener("click", (e) => {
      document.querySelectorAll(".day-tab").forEach(t => t.classList.remove("active"));
      e.target.classList.add("active");
      currentDay = e.target.dataset.day;
      updatePortfolioDisplay();
    });
  });

  // Platform Tabs Event
  document.querySelectorAll(".platform-tab").forEach(tab => {
    tab.addEventListener("click", (e) => {
      document.querySelectorAll(".platform-tab").forEach(t => t.classList.remove("active"));
      e.target.classList.add("active");
      currentPlatform = e.target.dataset.platform;
      updatePortfolioDisplay();
    });
  });

  // Dastlabki render
  updatePortfolioDisplay();

  // ALOQA FORMASINI QAYTA ISHLASH (Yuborilgandan so'ng Email ochish va Telegram kanalga o'tish)
  const form = document.getElementById("portfolio-form");
  const successMsg = document.getElementById("form-success-msg");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const name = document.getElementById("usr-name").value;
    const tgUsername = document.getElementById("usr-tg").value;
    const phone = document.getElementById("usr-phone").value;

    successMsg.classList.remove("hidden");
    form.reset();

    // 1. Matnni shakllantirish va Email mijozi (mailto)ga yo'naltirish
    const emailSubject = encodeURIComponent("Yangi loyiha soʻrovi (Portfolio)");
    const emailBody = encodeURIComponent(
      `Sizga Rasulbek Elboyevning shaxsiy veb-saytidan yangi soʻrov qoldirildi:\n\n` +
      `Ism: ${name}\n` +
      `Telegram: ${tgUsername}\n` +
      `Telefon: ${phone}\n\n` +
      `Yaxshi kunlar tilayman!`
    );

    // mailto havolasini ochish (fonda yoki yangi darchada)
    window.location.href = `mailto:${CONFIG.contacts.email}?subject=${emailSubject}&body=${emailBody}`;

    // 2. 2 soniyadan so'ng Telegram kanalini yangi oynada ochish (foydalanuvchini jalb qilish uchun)
    setTimeout(() => {
      const channelLink = `https://t.me/${CONFIG.contacts.telegramChannel.replace('@', '')}`;
      window.open(channelLink, '_blank');
      successMsg.innerHTML = `<p style="color:#55ffb2">Ajoyib! Ma'lumotlaringiz elektron pochtaga jo'natildi va Telegram kanalimiz ochildi.</p>`;
    }, 2000);
  });
});