(() => {
  const translations = {
    en: {
      sections: {
        profile: ['01 / Skills & signals', 'Strategy + analytics + execution'],
        work: ['02 / Professional experience', 'Multi-industry strategic impact'],
        projects: ['03 / Selected projects', 'Research, risk & applied analytics'],
        education: ['04 / Education', 'Three ways of learning'],
        about: ['05 / The person behind the numbers', 'About me'],
        travel: ['06 / Global footprint', "Where I've worked, studied and travelled"],
        leadership: ['07 / Leadership', 'Leading across cultures'],
        contact: ['08 / Next chapter', "Let's make something useful"]
      },
      countries: 'Countries lived, studied or worked in',
      interests: '<strong>Risk thinking</strong><br>Following markets, portfolio risk, and behavioral finance<br><strong>Supply chain systems</strong><br>Exploring how operations, people, and data move across borders<br><strong>Cross-cultural leadership</strong><br>Dance / 13 years · Lived, studied or worked in 5 countries',
      educationLocations: ['Montreal, Canada', 'Paris · Singapore', 'Tokyo, Japan'],
      educationNote: 'ESSEC Global BBA: Paris and Singapore · Dual-degree exchange at Keio University, Tokyo.',
      mapLabel: 'Map showing work and study cities, China, and countries visited',
      mapCaption: ['WORK / STUDY / TRAVEL', 'NATURAL EARTH 110m · ALEX ZHAO'],
      mapCount: 'Countries visited',
      mapTitle: 'Work, study<br>and connection.',
      mapDescription: 'I was born and raised in China, where I was schooled; Mandarin is my native language. I have studied or worked in France, Singapore, Japan and Canada, using French, English and Japanese. Travel adds a wider perspective.',
      mapLegend: ['Work / study city', 'Born and raised · Mandarin native', 'Travelled country'],
      aldo: {
        title: 'Return Detective · ALDO retail AI',
        subtitle: 'McGill Retail GenAI Hackathon (ALDO Group × AWS) · Finalist, team of 5',
        date: 'Sep 2026 — Oct 2026',
        points: [
          'Built “Return Detective”: 3 AI agents (Amazon Bedrock, Athena) that flag abnormal return spikes in 2 years of real ALDO data and trace each to a root cause.',
          'Backtested with a no-look-ahead daily replay: flagged issues a median 40.5 days earlier than a simulated month-end rule (94 cases).',
          'Put risk limits in code, not prompts: stock holds, supplier claims and customer outreach need human approval; unverifiable refunds are blocked.'
        ],
        link: 'View pitch deck ↗'
      },
      contact: '<span class="contact-keyword">IF</span> you have a question<br><span class="contact-keyword">THEN</span> send me a message<br><span class="contact-keyword">ELSE</span> have a nice day',
      work: [
        {
          title: 'Rio Tinto Aluminium & Lithium',
          subtitle: 'McGill MMA Capstone · Team Lead & Data Analytics Consultant',
          date: '<span>Montreal, QC</span><span>September 2026 — Present</span>',
          points: [
            'Leading a ~1,000-hour engagement with Rio Tinto’s Data & AI team and four client contacts to replace duplicated, inconsistently governed chatbot initiatives with one reusable Databricks platform.',
            'Designing a proof-of-concept AI assistant that answers engineers’ and site managers’ questions from approved documents with traceable citations, governed access, and a user feedback loop.',
            'Building an evaluation module for answer quality, citation quality, and failure cases; documenting a standard architecture and scaling recommendations for other product lines.'
          ]
        },
        {
          title: 'McGill University — Desautels Faculty of Management',
          subtitle: 'Grader — FINE 441 (Investment Management)',
          date: '<span>Montreal, QC</span><span>Sep 2026 — Present</span>',
          points: [
            'Evaluated 100+ student assignments and financial models covering DCF valuation, CAPM, bond pricing and portfolio optimization.',
            'Provided structured feedback on students’ equity analysis and risk management calculations.'
          ]
        },
        {
          title: 'Xiaomi France / Paris, France',
          subtitle: 'Aftersales & Supply Chain Intern',
          date: 'Jul — Dec 2025',
          points: [
            'Developed a Python automation script for BOM distribution across Xiaomi HQ, France, and 10+ service stations, reducing turnaround time by 3 days (37%).',
            'Managed Excel-based WIP tracking and daily logistics coordination across French and Spanish partners, cutting average delay from 8 to 3 days (62%).',
            'Built Power BI dashboards for cross-brand product feature and aftersales performance analysis.',
            'Conducted competitive supply chain research on Samsung, Daikin, and Hisense to identify supplier collaboration opportunities.'
          ]
        },
        {
          title: 'BlackRock Insight Experience / Tokyo, Japan',
          subtitle: 'Institutional Asset Management Program',
          date: 'May 2024',
          points: [
            'Selected for a competitive program on institutional asset management.',
            'Completed a team case study on Japanese pension fund management, strategic asset allocation, and liability-driven investment in a low-yield, aging-demographic environment.',
            'Gained exposure to portfolio construction and risk analytics via the Aladdin platform.'
          ]
        },
        {
          title: 'HelloRide Global / Singapore',
          subtitle: 'Marketing Intern',
          date: 'Jun — Sep 2022',
          points: [
            'Analyzed competitor strategies and market research to inform content strategy, growing Instagram from 0 to 2,000 followers in 4 months.',
            'Used Excel pivot tables and VLOOKUP to identify market trends and user needs, improving monthly active users by 32%.',
            'Secured a B2B market cooperation partnership with Huttons valued at SGD 100M through Singapore government liaison meetings.'
          ]
        }
      ]
    },
    fr: {
      sections: {
        profile: ['01 / Compétences & signaux', 'Stratégie + analytique + exécution'],
        work: ['02 / Expérience professionnelle', 'Impact stratégique multisectoriel'],
        projects: ['03 / Projets sélectionnés', 'Recherche, risque & analytique appliquée'],
        education: ['04 / Formation', 'Trois façons d’apprendre'],
        about: ['05 / La personne derrière les chiffres', 'À propos'],
        travel: ['06 / Ancrage mondial', 'Où j’ai travaillé, étudié et voyagé'],
        leadership: ['07 / Leadership', 'Diriger entre les cultures'],
        contact: ['08 / Prochaine étape', 'Créons quelque chose d’utile']
      },
      countries: 'Pays de résidence, d’études ou de travail',
      interests: '<strong>Réflexion sur le risque</strong><br>Marchés, risque de portefeuille et finance comportementale<br><strong>Systèmes de chaîne d’approvisionnement</strong><br>Opérations, personnes et données au-delà des frontières<br><strong>Leadership interculturel</strong><br>Danse / 13 ans · Résidence, études ou travail dans 5 pays',
      educationLocations: ['Montréal, Canada', 'Paris · Singapour', 'Tokyo, Japon'],
      educationNote: 'Global BBA de l’ESSEC : Paris et Singapour · Échange en double diplôme à l’Université Keio, Tokyo.',
      mapLabel: 'Carte des villes de travail et d’études, de la Chine et des pays visités',
      mapCaption: ['TRAVAIL / ÉTUDES / VOYAGES', 'NATURAL EARTH 110m · ALEX ZHAO'],
      mapCount: 'Pays visités',
      mapTitle: 'Travail, études<br>et rencontres.',
      mapDescription: 'La Chine est mon pays de naissance et de scolarité; le mandarin est ma langue maternelle. J’ai étudié ou travaillé en France, à Singapour, au Japon et au Canada, en utilisant le français, l’anglais et le japonais. Les voyages complètent cette perspective.',
      mapLegend: ['Ville de travail / d’études', 'Né et élevé en Chine · mandarin maternel', 'Pays visité'],
      aldo: {
        title: 'Return Detective · IA retail pour ALDO',
        subtitle: 'Hackathon McGill Retail GenAI (ALDO Group × AWS) · Finaliste, équipe de 5',
        date: 'Sept. 2026 — Oct. 2026',
        points: [
          'Conception de « Return Detective » : 3 agents IA (Amazon Bedrock, Athena) qui détectent les pics anormaux de retours sur 2 ans de données réelles d’ALDO et remontent chacun à sa cause racine.',
          'Backtest par rejeu quotidien sans information future : problèmes signalés en médiane 40,5 jours plus tôt qu’une règle simulée de fin de mois (94 cas).',
          'Limites de risque inscrites dans le code, pas dans les prompts : blocage de stock, réclamations fournisseurs et contact client exigent une approbation humaine; les remboursements invérifiables sont bloqués.'
        ],
        link: 'Voir la présentation ↗'
      },
      contact: '<span class="contact-keyword">SI</span> vous avez une question<br><span class="contact-keyword">ALORS</span> écrivez-moi<br><span class="contact-keyword">SINON</span> bonne journée',
      work: [
        {
          title: 'Rio Tinto Aluminium & Lithium',
          subtitle: 'Projet intégrateur MMA de McGill · Chef d’équipe & consultant en analytique des données',
          date: '<span>Montréal, QC</span><span>Septembre 2026 — Aujourd’hui</span>',
          points: [
            'Dirige un mandat d’environ 1 000 heures avec l’équipe Données et IA de Rio Tinto et quatre interlocuteurs afin de remplacer des initiatives de robots conversationnels redondantes et mal gouvernées par une plateforme Databricks réutilisable.',
            'Conçoit un assistant IA qui répond aux questions des ingénieurs et des responsables de site à partir de documents approuvés, avec des citations traçables, un accès gouverné et une boucle de rétroaction.',
            'Crée un module d’évaluation de la qualité des réponses, des citations et des cas d’échec; documente une architecture standard et des recommandations de déploiement pour d’autres gammes de produits.'
          ]
        },
        {
          title: 'Université McGill — Faculté de gestion Desautels',
          subtitle: 'Correcteur — FINE 441 (Gestion de placements)',
          date: '<span>Montréal, QC</span><span>Sept. 2026 — Aujourd’hui</span>',
          points: [
            'Évalue plus de 100 travaux et modèles financiers portant sur l’évaluation DCF, le MEDAF, la valorisation obligataire et l’optimisation de portefeuille.',
            'Fournit une rétroaction structurée sur les analyses d’actions et les calculs de gestion des risques.'
          ]
        },
        {
          title: 'Xiaomi France / Paris, France',
          subtitle: 'Stagiaire après-vente et chaîne d’approvisionnement',
          date: 'Juill. — Déc. 2025',
          points: [
            'Développe un script Python de distribution des nomenclatures entre le siège de Xiaomi, la France et plus de 10 stations de service, réduisant le délai de traitement de 3 jours (37 %).',
            'Gère le suivi Excel des travaux en cours et la coordination logistique quotidienne avec des partenaires français et espagnols, réduisant le délai moyen de 8 à 3 jours (62 %).',
            'Crée des tableaux de bord Power BI pour analyser les caractéristiques des produits multimarques et la performance après-vente.',
            'Étudie la chaîne d’approvisionnement de Samsung, Daikin et Hisense afin de repérer des possibilités de collaboration avec les fournisseurs.'
          ]
        },
        {
          title: 'Expérience Insight de BlackRock / Tokyo, Japon',
          subtitle: 'Programme de gestion d’actifs institutionnels',
          date: 'Mai 2024',
          points: [
            'Sélectionné pour un programme compétitif en gestion d’actifs institutionnels.',
            'Réalise une étude de cas en équipe sur la gestion d’un régime de retraite japonais, l’allocation stratégique d’actifs et l’investissement guidé par les passifs dans un contexte de faibles rendements et de vieillissement démographique.',
            'Découvre la construction de portefeuille et l’analyse des risques à l’aide de la plateforme Aladdin.'
          ]
        },
        {
          title: 'HelloRide Global / Singapour',
          subtitle: 'Stagiaire en marketing',
          date: 'Juin — Sept. 2022',
          points: [
            'Analyse les stratégies concurrentes et le marché pour orienter la stratégie de contenu; fait passer Instagram de 0 à 2 000 abonnés en quatre mois.',
            'Utilise les tableaux croisés dynamiques et RECHERCHEV dans Excel pour cerner les tendances et les besoins, augmentant de 32 % les utilisateurs actifs mensuels.',
            'Obtient un partenariat B2B avec Huttons, d’une valeur de 100 M SGD, grâce à des rencontres avec les autorités singapouriennes.'
          ]
        }
      ]
    }
  };

  const setHtml = (selector, html) => {
    const element = document.querySelector(selector);
    if (element) element.innerHTML = html;
  };

  const sortProjectsByDate = (language) => {
    const projects = Array.from(document.querySelectorAll('#projects > .experience-entry'));
    const monthByName = {
      jan: 1, janvier: 1, feb: 2, février: 2, fevrier: 2, mar: 3, mars: 3,
      apr: 4, avril: 4, may: 5, mai: 5, jun: 6, juin: 6, jul: 7, juillet: 7,
      aug: 8, august: 8, août: 8, aout: 8, sep: 9, sept: 9, september: 9, septembre: 9,
      oct: 10, october: 10, octobre: 10, nov: 11, novembre: 11,
      dec: 12, décembre: 12, decembre: 12
    };
    const tieOrder = (project) => {
      const tag = project.querySelector('.project-tag')?.textContent || '';
      if (tag.includes('CNID') || tag.includes('Challenge d’investissement')) return 0;
      if (tag.includes('FIAM') || tag.includes('Gestion d’actifs')) return 1;
      if (tag.includes('Credit risk') || tag.includes('Risque de crédit')) return 2;
      if (tag.includes('ALDO')) return 3;
      return 4;
    };
    projects.forEach((project) => {
      const tag = project.querySelector('.project-tag')?.textContent || '';
      const date = project.querySelector('.experience-date');
      if (!date) return;
      if (project.classList.contains('latest-401k-project')) {
        date.textContent = language === 'fr' ? 'Oct. 2026' : 'Oct 2026';
      } else if (project.classList.contains('latest-traffic-project')) {
        date.textContent = language === 'fr' ? 'Sept. 2026' : 'Sep 2026';
      } else if (project.querySelector('.experience-title')?.textContent.includes('ALDO')) {
        date.textContent = translations[language].aldo.date;
      } else if (tag.includes('CNID') || tag.includes('Challenge d’investissement')) {
        date.textContent = language === 'fr' ? 'Septembre 2026 — Aujourd’hui' : 'September 2026 — Present';
      } else {
        date.textContent = language === 'fr' ? 'Sept. 2026 — Aujourd’hui' : 'Sep 2026 — Present';
      }
    });
    const timestamp = (project) => {
      const date = project.querySelector('.experience-date')?.textContent || '';
      const year = Number(date.match(/\b20\d{2}\b/)?.[0] || 0);
      const monthName = date.toLowerCase().match(/[a-zà-ÿ]+/i)?.[0] || '';
      return year * 12 + (monthByName[monthName] || 0);
    };
    projects.sort((a, b) => timestamp(b) - timestamp(a) || tieOrder(a) - tieOrder(b));
    const container = document.querySelector('#projects');
    projects.forEach((project) => container.appendChild(project));
  };

  const renderLanguage = (language) => {
    const content = translations[language];
    if (!content) return;

    Object.entries(content.sections).forEach(([id, values]) => {
      const section = document.getElementById(id);
      if (!section) return;
      const kicker = section.querySelector('.section-kicker');
      const index = section.querySelector('.section-index');
      if (kicker) kicker.textContent = values[0];
      if (index) index.textContent = values[1];
    });

    const countryStat = document.querySelectorAll('#about .stat strong')[2];
    const countryStatLabel = document.querySelectorAll('#about .stat span')[2];
    if (countryStat) countryStat.textContent = '05';
    if (countryStatLabel) countryStatLabel.textContent = content.countries;
    setHtml('#profile .profile-panel:nth-child(4) .activity-copy', content.interests);
    document.querySelectorAll('#education .education-detail span:first-child').forEach((item, index) => {
      item.textContent = content.educationLocations[index];
    });
    setHtml('#education .education-note', content.educationNote);
    const map = document.querySelector('#travel-map');
    if (map) map.setAttribute('aria-label', content.mapLabel);
    const mapCaption = document.querySelectorAll('#travel .map-caption span');
    if (mapCaption[0]) mapCaption[0].textContent = content.mapCaption[0];
    if (mapCaption[1]) mapCaption[1].textContent = content.mapCaption[1];
    const countLabel = document.querySelector('#travel .travel-count-label');
    if (countLabel) countLabel.textContent = content.mapCount;
    setHtml('#travel .travel-list h3', content.mapTitle);
    setHtml('#travel .global-perspective', content.mapDescription);
    const travelList = document.querySelector('#travel .travel-list');
    const travelCount = travelList && travelList.querySelector('.travel-count');
    const travelCountries = travelList && travelList.querySelector('.country-list');
    if (travelList && travelCount && travelCountries) {
      travelList.insertBefore(travelCount, travelCountries);
      if (countLabel) travelList.insertBefore(countLabel, travelCountries);
    }
    const legend = document.querySelector('#travel .map-legend');
    if (legend) {
      legend.innerHTML = content.mapLegend.map((label, index) => {
        const symbol = ['legend-work', 'legend-origin', 'legend-travel'][index];
        return `<div class="legend-item"><i class="legend-symbol ${symbol}"></i><span>${label}</span></div>`;
      }).join('');
    }
    setHtml('#contact h2', content.contact);
    const aldoProject = Array.from(document.querySelectorAll('#projects > .portfolio-project'))
      .find((entry) => entry.querySelector('.experience-title')?.textContent.includes('ALDO'));
    if (aldoProject) {
      const title = aldoProject.querySelector('.experience-title');
      const subtitle = aldoProject.querySelector('.experience-subtitle');
      const points = aldoProject.querySelector('.experience-points');
      if (title) title.textContent = content.aldo.title;
      if (subtitle) subtitle.textContent = content.aldo.subtitle;
      if (points) {
        points.replaceChildren(...content.aldo.points.map((text) => {
          const point = document.createElement('li');
          point.textContent = text;
          return point;
        }));
      }
      let deckLink = aldoProject.querySelector('.aldo-deck-link');
      if (!deckLink) {
        deckLink = document.createElement('a');
        deckLink.className = 'project-link aldo-deck-link';
        deckLink.href = 'aldo-return-detective-deck.pdf';
        deckLink.target = '_blank';
        deckLink.rel = 'noreferrer';
        aldoProject.appendChild(deckLink);
      }
      deckLink.textContent = content.aldo.link;
    }

    document.querySelectorAll('#work .experience-entry').forEach((entry, index) => {
      const item = content.work[index];
      if (!item) return;
      const title = entry.querySelector('.experience-title');
      const subtitle = entry.querySelector('.experience-subtitle');
      const date = entry.querySelector('.experience-date');
      if (title) title.textContent = item.title;
      if (subtitle) subtitle.textContent = item.subtitle;
      if (date) date.innerHTML = item.date;
      entry.querySelectorAll('.experience-points li').forEach((point, pointIndex) => {
        if (item.points[pointIndex] !== undefined) point.textContent = item.points[pointIndex];
      });
    });
    sortProjectsByDate(language);
    document.documentElement.lang = language;
  };

  document.querySelectorAll('[data-language]').forEach((button) => {
    button.addEventListener('click', () => renderLanguage(button.dataset.language));
  });
  renderLanguage(document.documentElement.lang === 'fr' ? 'fr' : 'en');
})();
