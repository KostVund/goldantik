const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

const translations = {
  de: {
    'nav.home': 'Start',
    'nav.services': 'Leistungen',
    'nav.benefits': 'Vorteile',
    'nav.contact': 'Kontakt',
    'servicesTitle': 'Unsere Leistungen',
    'servicesSubtitle': 'Professioneller An- und Verkauf von Schmuck mit Qualitätsgarantie',
    'service1.title': 'Ankauf von Edelmetallen',
    'service1.description': 'Gold, Silber, Platin und andere wertvolle Metalle zu günstigen Preisen',
    'service1.feature1': 'Kostenlose Expertenbewertung',
    'service1.feature2': 'Sofortige Barauszahlung',
    'service1.feature3': 'Vertraulichkeit garantiert',
    'service2.title': 'Ankauf von Diamanten und Edelsteinen',
    'service2.description': 'Bewertung und Kauf von Edelsteinen unter Berücksichtigung aller Eigenschaften',
    'service2.feature1': 'Professionelle gemmologische Expertise',
    'service2.feature2': 'Faire Marktbewertung',
    'service2.feature3': 'Schnelle Abwicklung',
    'service3.title': 'Ankauf von Luxusuhren',
    'service3.description': 'Wir kaufen Uhren bekannter Marken, auch reparierbedürftige',
    'service3.feature1': 'Bewertung nach Originalität und Zustand',
    'service3.feature2': 'Hohe Preise für Sammlerstücke',
    'service3.feature3': 'Erfahrung mit Luxusmarken',
    'service4.title': 'Ankauf von Antiquitäten',
    'service4.description': 'Seltene Antiquitäten und Sammlerstücke',
    'service4.feature1': 'Expertenbewertung des historischen Werts',
    'service4.feature2': 'Spezialisierung auf verschiedene Epochen',
    'service4.feature3': 'Individueller Ansatz für jedes Stück',
    'service5.title': 'Verkauf von Second-Hand-Schmuck',
    'service5.description': 'Hochwertige Schmuckstücke zu günstigen Preisen',
    'service5.feature1': 'Echtheitsprüfung',
    'service5.feature2': 'Ausgezeichneter Zustand',
    'service5.feature3': 'Qualitätsgarantie',
    'service6.title': 'Kostenlose Beratung',
    'service6.description': 'Professionelle Beratung zur Bewertung und zum Verkauf Ihrer Wertgegenstände',
    'service6.feature1': 'Persönliche Expertenberatung',
    'service6.feature2': 'Pflegetipps für Schmuck',
    'service6.feature3': 'Informationen zu Markttrends',
    'benefitsTitle': 'Warum uns wählen',
    'benefitsSubtitle': 'Wir garantieren Ehrlichkeit, Professionalität und maximalen Nutzen für unsere Kunden',
    'benefit1.title': 'Sofortige Bewertung und Auszahlung',
    'benefit1.description': 'Erhalten Sie eine Expertenbewertung Ihrer Wertgegenstände in 15 Minuten und sofortige Barauszahlung oder Überweisung',
    'benefit1.highlight': '0% Gebühren • 100% Transparenz',
    'benefit2.title': 'Vollständige Vertraulichkeit',
    'benefit2.description': 'Ihre Daten und Transaktionen sind streng vertraulich',
    'benefit3.title': 'Erfahrene Experten',
    'benefit3.description': '15+ Jahre Erfahrung in der Schmuckbewertung',
    'benefit4.title': 'Beste Preise am Markt',
    'benefit4.description': 'Wettbewerbsfähige Preise über dem Marktpreis',
    'benefit5.title': 'Mehrsprachiger Service',
    'benefit5.description': 'Service in 4 Sprachen',
    'benefit6.title': 'Qualitätsgarantie',
    'benefit6.description': '100% Echtheit aller Stücke',
    'benefit7.title': 'Günstige Lage',
    'benefit7.description': 'Im Zentrum von Bochum mit Parkplätzen',
    'info1.title': 'Kauf von Second-Hand-Schmuck',
    'info1.description': 'Einzigartige Schmuckstücke in ausgezeichnetem Zustand zu günstigen Preisen. Alle Stücke werden sorgfältig auf Echtheit und Qualität geprüft.',
    'info1.feature1': '✓ Echtheitsprüfung',
    'info1.feature2': '✓ Ausgezeichneter Zustand',
    'info1.feature3': '✓ Günstige Preise',
    'info2.title': 'Mehrsprachiger Service',
    'info2.description': 'Wir sprechen Russisch, Ukrainisch, Deutsch und Englisch. Wir schaffen eine angenehme Atmosphäre für jeden Kunden.',
    'info2.feature1': '✓ Russisch',
    'info2.feature2': '✓ Ukrainisch',
    'info2.feature3': '✓ Deutsch • Englisch',
    'info3.title': 'Schnelle Kontaktaufnahme',
    'info3.description': 'Kontaktieren Sie uns auf dem für Sie bequemsten Weg. Wir sind immer bereit, Ihre Fragen zu beantworten und bei der Bewertung zu helfen.',
    'info3.feature1': '✓ Telefon',
    'info3.feature2': '✓ E-Mail',
    'info3.feature3': '✓ Persönlicher Besuch',
    'cta.learn': 'Mehr erfahren',
    'cta.contact': 'Kontakt',
    tagline: 'An- und Verkauf von Schmuck und Antiquitäten',
    welcomeTitle: 'Goldpunkt Antik GmbH',
    welcomeSubtitle: 'An- und Verkauf von Schmuck und Antiquitäten',
    buyingTitle: 'Wir bieten faire Bewertung und Top-Preise beim Ankauf von:',
    'list.metals': 'Gold, Silber, Platin und anderen Edelmetallen',
    'list.gems': 'Diamanten und Edelsteinen',
    'list.watches': 'Uhren bekannter Marken',
    'list.antiques': 'Antiquitäten und Sammlerstücken',
    'benefits.appraisal': 'Kostenlose professionelle Bewertung',
    'benefits.payout': 'Sofortige Auszahlung in Bar oder per Überweisung',
    'benefits.privacy': 'Vertraulichkeit und transparente Abwicklung',
    salesTitle: 'Außerdem können Sie bei uns Second-Hand-Schmuck in hervorragendem Zustand zu fairen Preisen kaufen.',
    weSpeak: 'Wir sprechen Russisch, Ukrainisch, Deutsch und Englisch und helfen Ihnen gerne in angenehmer Atmosphäre.',
    testimonialsTitle: 'Kundenbewertungen',
    testimonialsSubtitle: 'Was unsere zufriedenen Kunden über uns sagen',
    'testimonial1.text': '"Sehr professionelle Bewertung und faire Preise. Goldschmuck schnell und gewinnbringend verkauft. Empfehlenswert!"',
    'testimonial1.name': 'Anna M.',
    'testimonial1.location': 'Bochum',
    'testimonial2.text': '"Ausgezeichneter Service! Hier einen Ring für meine Frau gekauft - Qualität hervorragend, Preis sehr vernünftig."',
    'testimonial2.name': 'Michael K.',
    'testimonial2.location': 'Dortmund',
    'testimonial3.text': '"Sehr freundlich und kompetent. Die Bewertung meiner Antiquitäten war fair und die Abwicklung unkompliziert."',
    'testimonial3.name': 'Petra S.',
    'testimonial3.location': 'Essen',
    'testimonial4.text': '"Ausgezeichneter Service! Hier meine Vintage-Uhrensammlung verkauft. Die Bewertung war sehr fair und die Zahlung sofort."',
    'testimonial4.name': 'James W.',
    'testimonial4.location': 'Düsseldorf',
    'testimonial5.text': '"Hier Ohrringe gekauft - sehr zufrieden! Qualität ausgezeichnet, Preis hat angenehm überrascht. Komme gerne wieder."',
    'testimonial5.name': 'Elena P.',
    'testimonial5.location': 'Köln',
    'testimonial6.text': '"Sehr zu empfehlen! Habe meine Diamantringe verkauft. Der Preis war fair und die Beratung sehr professionell."',
    'testimonial6.name': 'Klaus M.',
    'testimonial6.location': 'Wuppertal',
    contactTitle: 'Kontakt',
    company: 'GOLDpunkt ANTIK GmbH',
    addressLabel: 'Adresse:',
    addressValue: 'Wittener Straße 283, 44803 Bochum',
    phoneLabel: 'Telefon:',
    phoneValue: '+49 123 456 7890',
    emailLabel: 'E-Mail:',
    emailValue: 'info@example.com',
    'form.name': 'Ihr Name',
    'form.phone': 'Telefon oder E-Mail',
    'form.message': 'Nachricht',
    'form.submit': 'Senden',
    'form.notice': 'Mit dem Absenden stimmen Sie der Verarbeitung personenbezogener Daten zu.',
    'footer.company': 'UNTERNEHMEN',
    'footer.about': 'Über uns',
    'footer.contact': 'Kontakt',
    'footer.security': 'Sicherheit',
    'footer.business': 'Firmenkunden',
    'footer.privacy': 'Datenschutz',
    'footer.imprint': 'Impressum',
    'footer.terms': 'AGB',
    'page.about.title': 'Über uns',
    'page.about.content': 'Inhalt wird hinzugefügt...',
    'page.contact.title': 'Kontakt',
    'page.contact.content': 'Inhalt wird hinzugefügt...',
    'page.security.title': 'Sicherheit',
    'page.security.content': 'Inhalt wird hinzugefügt...',
    'page.business.title': 'Firmenkunden',
    'page.business.content': 'Inhalt wird hinzugefügt...',
    'page.privacy.title': 'Datenschutz',
    'page.privacy.content': 'Inhalt wird hinzugefügt...',
    'page.imprint.title': 'Impressum',
    'page.imprint.content': 'Inhalt wird hinzugefügt...',
    'page.terms.title': 'AGB',
    'page.terms.content': 'Inhalt wird hinzugefügt...'
  },
  en: {
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.benefits': 'Benefits',
    'nav.contact': 'Contact',
    'servicesTitle': 'Our Services',
    'servicesSubtitle': 'Professional jewelry buying and selling with quality guarantee',
    'service1.title': 'Precious Metals Buying',
    'service1.description': 'Gold, silver, platinum and other valuable metals at competitive prices',
    'service1.feature1': 'Free expert appraisal',
    'service1.feature2': 'Instant cash payment',
    'service1.feature3': 'Confidentiality guaranteed',
    'service2.title': 'Diamonds and Gemstones Buying',
    'service2.description': 'Evaluation and purchase of precious stones considering all characteristics',
    'service2.feature1': 'Professional gemological expertise',
    'service2.feature2': 'Fair market valuation',
    'service2.feature3': 'Quick transaction processing',
    'service3.title': 'Luxury Watch Buying',
    'service3.description': 'We buy watches from renowned brands, even those requiring repair',
    'service3.feature1': 'Evaluation by authenticity and condition',
    'service3.feature2': 'High prices for collectible models',
    'service3.feature3': 'Experience with luxury brands',
    'service4.title': 'Antiques Buying',
    'service4.description': 'Rare antiques and collectible items',
    'service4.feature1': 'Expert evaluation of historical value',
    'service4.feature2': 'Specialization in different eras',
    'service4.feature3': 'Individual approach to each item',
    'service5.title': 'Second-Hand Jewelry Sales',
    'service5.description': 'High-quality jewelry at affordable prices',
    'service5.feature1': 'Authenticity verification',
    'service5.feature2': 'Excellent condition',
    'service5.feature3': 'Quality guarantee',
    'service6.title': 'Free Consultation',
    'service6.description': 'Professional advice on evaluation and selling your valuables',
    'service6.feature1': 'Personal expert consultation',
    'service6.feature2': 'Jewelry care tips',
    'service6.feature3': 'Market trend information',
    'benefitsTitle': 'Why Choose Us',
    'benefitsSubtitle': 'We guarantee honesty, professionalism and maximum benefit for our clients',
    'benefit1.title': 'Instant Evaluation and Payment',
    'benefit1.description': 'Get expert evaluation of your valuables in 15 minutes and instant cash payment or bank transfer',
    'benefit1.highlight': '0% fees • 100% transparency',
    'benefit2.title': 'Complete Confidentiality',
    'benefit2.description': 'Your data and transactions are strictly confidential',
    'benefit3.title': 'Experienced Experts',
    'benefit3.description': '15+ years of experience in jewelry evaluation',
    'benefit4.title': 'Best Market Prices',
    'benefit4.description': 'Competitive prices above market rate',
    'benefit5.title': 'Multilingual Service',
    'benefit5.description': 'Service in 4 languages',
    'benefit6.title': 'Quality Guarantee',
    'benefit6.description': '100% authenticity of all pieces',
    'benefit7.title': 'Convenient Location',
    'benefit7.description': 'In the center of Bochum with parking',
    'info1.title': 'Second-Hand Jewelry Purchase',
    'info1.description': 'Unique jewelry pieces in excellent condition at affordable prices. All pieces are thoroughly checked for authenticity and quality.',
    'info1.feature1': '✓ Authenticity check',
    'info1.feature2': '✓ Excellent condition',
    'info1.feature3': '✓ Affordable prices',
    'info2.title': 'Multilingual Service',
    'info2.description': 'We speak Russian, Ukrainian, German and English. We create a comfortable atmosphere for every client.',
    'info2.feature1': '✓ Russian',
    'info2.feature2': '✓ Ukrainian',
    'info2.feature3': '✓ German • English',
    'info3.title': 'Quick Contact',
    'info3.description': 'Contact us in the most convenient way for you. We are always ready to answer your questions and help with evaluation.',
    'info3.feature1': '✓ Phone',
    'info3.feature2': '✓ Email',
    'info3.feature3': '✓ Personal visit',
    'cta.learn': 'Learn more',
    'cta.contact': 'Contact us',
    tagline: 'Buying and selling jewelry and antiques',
    welcomeTitle: 'Goldpunkt Antik GmbH',
    welcomeSubtitle: 'Buying and selling jewelry and antiques',
    buyingTitle: 'We offer honest appraisal and great prices when buying:',
    'list.metals': 'gold, silver, platinum and other precious metals',
    'list.gems': 'diamonds and gemstones',
    'list.watches': 'watches of renowned brands',
    'list.antiques': 'antiques and collectibles',
    'benefits.appraisal': 'Free professional appraisal',
    'benefits.payout': 'Instant cash payout or bank transfer',
    'benefits.privacy': 'Confidential and transparent transaction',
    salesTitle: 'You can also buy second-hand jewelry in excellent condition at affordable prices.',
    weSpeak: 'We speak Russian, Ukrainian, German and English and are happy to help in a comfortable atmosphere.',
    testimonialsTitle: 'Customer Reviews',
    testimonialsSubtitle: 'What our satisfied customers say about us',
    'testimonial1.text': '"Very professional appraisal and honest prices. Sold gold jewelry quickly and profitably. Recommended!"',
    'testimonial1.name': 'Anna M.',
    'testimonial1.location': 'Bochum',
    'testimonial2.text': '"Excellent service! Bought a ring for my wife here - quality is outstanding, price very reasonable."',
    'testimonial2.name': 'Michael K.',
    'testimonial2.location': 'Dortmund',
    'testimonial3.text': '"Very friendly and competent. The appraisal of my antiques was fair and the process was uncomplicated."',
    'testimonial3.name': 'Petra S.',
    'testimonial3.location': 'Essen',
    'testimonial4.text': '"Excellent service! Sold my vintage watch collection here. The appraisal was very fair and the payment was instant."',
    'testimonial4.name': 'James W.',
    'testimonial4.location': 'Düsseldorf',
    'testimonial5.text': '"Bought earrings here - very satisfied! Quality is outstanding, price pleasantly surprised me. Will definitely return."',
    'testimonial5.name': 'Elena P.',
    'testimonial5.location': 'Cologne',
    'testimonial6.text': '"Highly recommended! Sold my diamond rings here. The price was fair and the consultation very professional."',
    'testimonial6.name': 'Klaus M.',
    'testimonial6.location': 'Wuppertal',
    contactTitle: 'Contact us',
    company: 'GOLDpunkt ANTIK GmbH',
    addressLabel: 'Address:',
    addressValue: 'Wittener Straße 283, 44803 Bochum',
    phoneLabel: 'Phone:',
    phoneValue: '+49 123 456 7890',
    emailLabel: 'Email:',
    emailValue: 'info@example.com',
    'form.name': 'Your name',
    'form.phone': 'Phone or Email',
    'form.message': 'Message',
    'form.submit': 'Send',
    'form.notice': 'By sending, you agree to the processing of personal data.',
    'footer.company': 'COMPANY',
    'footer.about': 'About us',
    'footer.contact': 'Contact',
    'footer.security': 'Security',
    'footer.business': 'Business clients',
    'footer.privacy': 'Privacy policy',
    'footer.imprint': 'Imprint',
    'footer.terms': 'Terms & Conditions',
    'page.about.title': 'About us',
    'page.about.content': 'Content will be added...',
    'page.contact.title': 'Contact',
    'page.contact.content': 'Content will be added...',
    'page.security.title': 'Security',
    'page.security.content': 'Content will be added...',
    'page.business.title': 'Business clients',
    'page.business.content': 'Content will be added...',
    'page.privacy.title': 'Privacy policy',
    'page.privacy.content': 'Content will be added...',
    'page.imprint.title': 'Imprint',
    'page.imprint.content': 'Content will be added...',
    'page.terms.title': 'Terms & Conditions',
    'page.terms.content': 'Content will be added...'
  },
  ru: {
    'nav.home': 'Главная',
    'nav.services': 'Услуги',
    'nav.benefits': 'Преимущества',
    'nav.contact': 'Контакты',
    'servicesTitle': 'Наши услуги',
    'servicesSubtitle': 'Профессиональная скупка и продажа драгоценностей с гарантией качества',
    'service1.title': 'Скупка драгоценных металлов',
    'service1.description': 'Золото, серебро, платина и другие ценные металлы по выгодным ценам',
    'service1.feature1': 'Бесплатная экспертная оценка',
    'service1.feature2': 'Мгновенная выплата наличными',
    'service1.feature3': 'Конфиденциальность гарантирована',
    'service2.title': 'Скупка бриллиантов и камней',
    'service2.description': 'Оценка и покупка драгоценных камней с учетом всех характеристик',
    'service2.feature1': 'Профессиональная геммологическая экспертиза',
    'service2.feature2': 'Справедливая рыночная оценка',
    'service2.feature3': 'Быстрое оформление сделки',
    'service3.title': 'Скупка часов престижных марок',
    'service3.description': 'Покупаем часы известных брендов, даже требующие ремонта',
    'service3.feature1': 'Оценка по оригинальности и состоянию',
    'service3.feature2': 'Высокие цены за коллекционные модели',
    'service3.feature3': 'Опыт работы с люксовыми брендами',
    'service4.title': 'Скупка антиквариата',
    'service4.description': 'Редкие предметы старины и коллекционные изделия',
    'service4.feature1': 'Экспертная оценка исторической ценности',
    'service4.feature2': 'Специализация по разным эпохам',
    'service4.feature3': 'Индивидуальный подход к каждому предмету',
    'service5.title': 'Продажа Second Hand украшений',
    'service5.description': 'Качественные ювелирные изделия по доступным ценам',
    'service5.feature1': 'Проверка на подлинность',
    'service5.feature2': 'Отличное состояние изделий',
    'service5.feature3': 'Гарантия качества',
    'service6.title': 'Бесплатная консультация',
    'service6.description': 'Профессиональные советы по оценке и продаже ваших ценностей',
    'service6.feature1': 'Персональная консультация эксперта',
    'service6.feature2': 'Советы по уходу за украшениями',
    'service6.feature3': 'Информация о рыночных трендах',
    'benefitsTitle': 'Почему выбирают нас',
    'benefitsSubtitle': 'Мы гарантируем честность, профессионализм и максимальную выгоду для наших клиентов',
    'benefit1.title': 'Мгновенная оценка и выплата',
    'benefit1.description': 'Получите экспертную оценку ваших ценностей за 15 минут и мгновенную выплату наличными или на карту',
    'benefit1.highlight': '0% комиссий • 100% прозрачность',
    'benefit2.title': 'Полная конфиденциальность',
    'benefit2.description': 'Ваши данные и сделки строго конфиденциальны',
    'benefit3.title': 'Опытные эксперты',
    'benefit3.description': '15+ лет опыта в оценке драгоценностей',
    'benefit4.title': 'Лучшие цены на рынке',
    'benefit4.description': 'Конкурентные цены выше рыночных',
    'benefit5.title': 'Многоязычный сервис',
    'benefit5.description': 'Обслуживание на 4 языках',
    'benefit6.title': 'Гарантия качества',
    'benefit6.description': '100% подлинность всех изделий',
    'benefit7.title': 'Удобное расположение',
    'benefit7.description': 'В центре Бохума с парковкой',
    'info1.title': 'Покупка Second Hand украшений',
    'info1.description': 'Уникальные ювелирные изделия в отличном состоянии по выгодным ценам. Все изделия проходят тщательную проверку на подлинность и качество.',
    'info1.feature1': '✓ Проверка подлинности',
    'info1.feature2': '✓ Отличное состояние',
    'info1.feature3': '✓ Доступные цены',
    'info2.title': 'Многоязычное обслуживание',
    'info2.description': 'Мы говорим на русском, украинском, немецком и английском языках. Создаем комфортную атмосферу для каждого клиента.',
    'info2.feature1': '✓ Русский',
    'info2.feature2': '✓ Украинский',
    'info2.feature3': '✓ Немецкий • Английский',
    'info3.title': 'Быстрая связь',
    'info3.description': 'Свяжитесь с нами любым удобным способом. Мы всегда готовы ответить на ваши вопросы и помочь с оценкой.',
    'info3.feature1': '✓ Телефон',
    'info3.feature2': '✓ Email',
    'info3.feature3': '✓ Личный визит',
    'cta.learn': 'Подробнее',
    'cta.contact': 'Связаться',
    tagline: 'Скупка и продажа драгоценностей и антиквариата',
    welcomeTitle: 'Goldpunkt Antik GmbH',
    welcomeSubtitle: 'Скупка и продажа драгоценностей и антиквариата',
    buyingTitle: 'Мы предлагаем честную оценку и выгодные цены при покупке:',
    'list.metals': 'золота, серебра, платины и других драгоценных металлов',
    'list.gems': 'бриллиантов и драгоценных камней',
    'list.watches': 'часов известных марок',
    'list.antiques': 'антиквариата и коллекционных изделий',
    'benefits.appraisal': 'Бесплатная профессиональная оценка',
    'benefits.payout': 'Мгновенная выплата наличными или переводом',
    'benefits.privacy': 'Конфиденциальность и прозрачность сделки',
    salesTitle: 'Кроме того, у нас вы можете приобрести ювелирные изделия Second Hand в отличном состоянии по доступным ценам.',
    weSpeak: 'Мы говорим на русском, украинском, немецком и английском языках и всегда рады помочь вам в комфортной атмосфере.',
    testimonialsTitle: 'Отзывы наших клиентов',
    testimonialsSubtitle: 'Что говорят о нас наши довольные клиенты',
    'testimonial1.text': '"Очень профессиональная оценка и честные цены. Продал золотые украшения быстро и выгодно. Рекомендую!"',
    'testimonial1.name': 'Анна М.',
    'testimonial1.location': 'Бохум',
    'testimonial2.text': '"Отличный сервис! Купил здесь кольцо для жены - качество превосходное, цена очень разумная."',
    'testimonial2.name': 'Михаил К.',
    'testimonial2.location': 'Дортмунд',
    'testimonial3.text': '"Очень дружелюбно и компетентно. Оценка моих антикварных вещей была справедливой, а процесс - простым."',
    'testimonial3.name': 'Петра С.',
    'testimonial3.location': 'Эссен',
    'testimonial4.text': '"Отличный сервис! Продал здесь свою коллекцию винтажных часов. Оценка была очень справедливой, оплата мгновенной."',
    'testimonial4.name': 'Джеймс У.',
    'testimonial4.location': 'Дюссельдорф',
    'testimonial5.text': '"Купила здесь серьги - очень довольна! Качество отличное, цена приятно удивила. Обязательно вернусь."',
    'testimonial5.name': 'Елена П.',
    'testimonial5.location': 'Кёльн',
    'testimonial6.text': '"Очень рекомендую! Продал здесь свои кольца с бриллиантами. Цена была справедливой, консультация очень профессиональной."',
    'testimonial6.name': 'Клаус М.',
    'testimonial6.location': 'Вупперталь',
    contactTitle: 'Свяжитесь с нами',
    company: 'GOLDpunkt ANTIK GmbH',
    addressLabel: 'Адрес:',
    addressValue: 'Wittener Straße 283, 44803 Bochum',
    phoneLabel: 'Телефон:',
    phoneValue: '+49 123 456 7890',
    emailLabel: 'Email:',
    emailValue: 'info@example.com',
    'form.name': 'Ваше имя',
    'form.phone': 'Телефон или Email',
    'form.message': 'Сообщение',
    'form.submit': 'Отправить',
    'form.notice': 'Отправляя запрос, вы соглашаетесь с обработкой персональных данных.',
    'footer.company': 'КОМПАНИЯ',
    'footer.about': 'О нас',
    'footer.contact': 'Контакт',
    'footer.security': 'Безопасность',
    'footer.business': 'Корпоративным клиентам',
    'footer.privacy': 'Конфиденциальность',
    'footer.imprint': 'Выходные данные',
    'footer.terms': 'Условия использования',
    'page.about.title': 'О нас',
    'page.about.content': 'Содержание будет добавлено...',
    'page.contact.title': 'Контакт',
    'page.contact.content': 'Содержание будет добавлено...',
    'page.security.title': 'Безопасность',
    'page.security.content': 'Содержание будет добавлено...',
    'page.business.title': 'Корпоративным клиентам',
    'page.business.content': 'Содержание будет добавлено...',
    'page.privacy.title': 'Конфиденциальность',
    'page.privacy.content': 'Содержание будет добавлено...',
    'page.imprint.title': 'Выходные данные',
    'page.imprint.content': 'Содержание будет добавлено...',
    'page.terms.title': 'Условия использования',
    'page.terms.content': 'Содержание будет добавлено...'
  }
};

const defaultLang = (localStorage.getItem('lang') || 'de');

function setLang(lang){
  const dict = translations[lang] || translations.de;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(node => {
    const key = node.getAttribute('data-i18n');
    if (dict[key]) node.textContent = dict[key];
  });
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.setAttribute('aria-pressed', btn.dataset.lang === lang ? 'true' : 'false');
  });
  localStorage.setItem('lang', lang);
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => setLang(btn.dataset.lang));
});

setLang(defaultLang);

// Mobile menu toggle
const toggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');
toggle?.addEventListener('click', ()=>{
  const isOpen = mainNav?.classList.toggle('open');
  if (toggle) toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
});
document.querySelectorAll('.main-nav .nav-link').forEach(link=>{
  link.addEventListener('click', ()=>{
    mainNav?.classList.remove('open');
    if (toggle) toggle.setAttribute('aria-expanded', 'false');
  });
});

document.getElementById('contactForm')?.addEventListener('submit', e => {
  e.preventDefault();
  const form = e.currentTarget;
  const data = new FormData(form);
  const payload = Object.fromEntries(data.entries());
  console.log('Contact form:', payload);
  form.reset();
  alert('Спасибо! / Danke! / Thank you!');
});

// Smooth scroll for all anchor links
const links = document.querySelectorAll('a[href^="#"], .nav-link');
links.forEach(a => a.addEventListener('click', e => {
  const href = a.getAttribute('href');
  if (href && href.startsWith('#')){
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({behavior:'smooth'});
  }
}));

const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if (entry.isIntersecting){
      entry.target.classList.add('in');
    }
  });
},{threshold:0.2});

document.querySelectorAll('[data-animate]').forEach(el=>observer.observe(el));

// Update active link on scroll
const sections = ['#home','#services','#benefits','#contact']
  .map(id=>document.querySelector(id))
  .filter(Boolean);

const activeObserver = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    const id = '#' + entry.target.id;
    const link = document.querySelector(`.nav-link[href="${id}"]`);
    if (entry.isIntersecting){
      document.querySelectorAll('.nav-link').forEach(l=>l.classList.remove('active'));
      link?.classList.add('active');
    }
  });
},{threshold:0.6});

sections.forEach(sec=>activeObserver.observe(sec));

// Testimonials Carousel
class TestimonialsCarousel {
  constructor() {
    this.track = document.getElementById('testimonialsTrack');
    this.prevBtn = document.getElementById('prevBtn');
    this.nextBtn = document.getElementById('nextBtn');
    this.dotsContainer = document.getElementById('carouselDots');
    this.cards = this.track.querySelectorAll('.testimonial-card');
    this.currentIndex = 0;
    this.cardsPerView = this.getCardsPerView();
    this.totalSlides = Math.ceil(this.cards.length / this.cardsPerView);
    
    this.init();
  }
  
  getCardsPerView() {
    if (window.innerWidth <= 480) return 1;
    if (window.innerWidth <= 820) return 2;
    return 3;
  }
  
  init() {
    this.createDots();
    this.updateCarousel();
    this.bindEvents();
    this.startAutoPlay();
  }
  
  createDots() {
    this.dotsContainer.innerHTML = '';
    for (let i = 0; i < this.totalSlides; i++) {
      const dot = document.createElement('div');
      dot.className = 'carousel-dot';
      if (i === 0) dot.classList.add('active');
      dot.addEventListener('click', () => this.goToSlide(i));
      this.dotsContainer.appendChild(dot);
    }
  }
  
  updateCarousel() {
    const translateX = -this.currentIndex * (100 / this.cardsPerView);
    this.track.style.transform = `translateX(${translateX}%)`;
    
    // Update dots
    this.dotsContainer.querySelectorAll('.carousel-dot').forEach((dot, index) => {
      dot.classList.toggle('active', index === this.currentIndex);
    });
    
    // Update button states
    this.prevBtn.disabled = this.currentIndex === 0;
    this.nextBtn.disabled = this.currentIndex >= this.totalSlides - 1;
  }
  
  goToSlide(index) {
    this.currentIndex = Math.max(0, Math.min(index, this.totalSlides - 1));
    this.updateCarousel();
  }
  
  nextSlide() {
    if (this.currentIndex < this.totalSlides - 1) {
      this.currentIndex++;
      this.updateCarousel();
    }
  }
  
  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.updateCarousel();
    }
  }
  
  bindEvents() {
    this.nextBtn.addEventListener('click', () => this.nextSlide());
    this.prevBtn.addEventListener('click', () => this.prevSlide());
    
    // Handle window resize
    window.addEventListener('resize', () => {
      this.cardsPerView = this.getCardsPerView();
      this.totalSlides = Math.ceil(this.cards.length / this.cardsPerView);
      this.currentIndex = Math.min(this.currentIndex, this.totalSlides - 1);
      this.createDots();
      this.updateCarousel();
    });
    
    // Touch/swipe support
    let startX = 0;
    let startY = 0;
    let isDragging = false;
    
    this.track.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
      isDragging = true;
    });
    
    this.track.addEventListener('touchmove', (e) => {
      if (!isDragging) return;
      e.preventDefault();
    });
    
    this.track.addEventListener('touchend', (e) => {
      if (!isDragging) return;
      isDragging = false;
      
      const endX = e.changedTouches[0].clientX;
      const endY = e.changedTouches[0].clientY;
      const diffX = startX - endX;
      const diffY = startY - endY;
      
      // Only handle horizontal swipes
      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
        if (diffX > 0) {
          this.nextSlide();
        } else {
          this.prevSlide();
        }
      }
    });
  }
  
  startAutoPlay() {
    setInterval(() => {
      if (this.currentIndex < this.totalSlides - 1) {
        this.nextSlide();
      } else {
        this.goToSlide(0);
      }
    }, 5000); // Auto-advance every 5 seconds
  }
}

// Initialize carousel when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('testimonialsTrack')) {
    new TestimonialsCarousel();
  }
});

// Theme toggle with persistence
const themeKey = 'theme';
const root = document.documentElement;
function applyTheme(theme){
  if (theme === 'light'){
    root.classList.add('theme-light');
  } else {
    root.classList.remove('theme-light');
  }
}
applyTheme(localStorage.getItem(themeKey) || 'dark');

function updateThemeIcon(){
  const isLight = root.classList.contains('theme-light');
  document.querySelectorAll('.theme-toggle').forEach(btn => {
    btn.textContent = isLight ? '◐' : '◑';
  });
}
updateThemeIcon();
document.querySelectorAll('.theme-toggle').forEach(btn => {
  btn.addEventListener('click', ()=>{
    const isLight = root.classList.toggle('theme-light');
    localStorage.setItem(themeKey, isLight ? 'light' : 'dark');
    updateThemeIcon();
  });
});


