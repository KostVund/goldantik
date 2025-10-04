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
    'service2.feature1': 'Professionelle und faire Marktbewertung',
    'service2.feature2': 'Schnelle Abwicklung',
    'service2.feature3': 'Kostenlose Beratung',
    'service3.title': 'Ankauf von Gold-, Silber-Uhren und Luxusmarken',
    'service3.description': 'Wir kaufen Gold-, Silber-Uhren und Luxusmarken',
    'service3.feature1': 'Bewertung nach Marke, Zustand und Material',
    'service3.feature2': 'Hohe Preise für Sammlerstücke',
    'service3.feature3': 'Erfahrung mit Luxusmarken',
    'service4.title': 'Ankauf von Antiquitäten',
    'service4.description': 'Seltene Antiquitäten, Sammlerstücke, Medaillen und Gold- und Silbermünzen',
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
    'benefit1.description': 'Erhalten Sie eine schnelle Expertenbewertung Ihrer Wertgegenstände und sofortige Barauszahlung oder Überweisung',
    'benefit1.highlight': '0% Gebühren • 100% Transparenz',
    'benefit2.title': 'Vollständige Vertraulichkeit',
    'benefit2.description': 'Ihre Daten und Transaktionen sind streng vertraulich',
    'benefit3.title': 'Langjährige Erfahrung',
    'benefit3.description': 'Langjährige Erfahrung in der Schmuckbewertung und der Antiquitäten',
    'benefit4.title': 'Beste Preise am Markt',
    'benefit4.description': 'Wettbewerbsfähige Preise über dem Marktpreis',
    'benefit5.title': 'Qualitätsgarantie',
    'benefit5.description': '100% Echtheit aller Verkaufsstücke',
    'benefit6.title': 'Bequeme Lage',
    'benefit6.description': 'Bequeme Erreichbarkeit mit Auto oder öffentlichen Verkehrsmitteln',
    'benefit7.title': 'Second-Hand-Schmuck',
    'benefit7.description': 'Schmuckstücke in ausgezeichnetem Zustand zu günstigen Preisen',
    'info1.title': 'Verkauf von Second-Hand-Schmuck',
    'info1.description': 'Schmuckstücke in ausgezeichnetem Zustand zu günstigen Preisen. Alle Stücke werden sorgfältig auf Echtheit und Qualität geprüft.',
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
    phoneValue: '+49 173 3107777',
    emailLabel: 'E-Mail:',
    emailValue: 'info@goldpunkt-antik.de',
    'form.name': 'Ihr Name',
    'form.phone': 'Telefon oder E-Mail',
    'form.message': 'Nachricht',
    'form.submit': 'Senden',
    'form.notice': 'Mit dem Absenden stimmen Sie der Verarbeitung personenbezogener Daten zu.',
    'reviewForm.title': 'Teilen Sie Ihre Erfahrung',
    'reviewForm.subtitle': 'Ihre Meinung ist uns wichtig. Hinterlassen Sie eine Bewertung!',
    'reviewForm.name': 'Ihr Name *',
    'reviewForm.namePlaceholder': 'Max Mustermann',
    'reviewForm.location': 'Standort',
    'reviewForm.locationPlaceholder': 'Bochum',
    'reviewForm.email': 'E-Mail (optional)',
    'reviewForm.emailPlaceholder': 'max@example.com',
    'reviewForm.rating': 'Ihre Bewertung *',
    'reviewForm.star5': '5 Sterne',
    'reviewForm.star4': '4 Sterne',
    'reviewForm.star3': '3 Sterne',
    'reviewForm.star2': '2 Sterne',
    'reviewForm.star1': '1 Stern',
    'reviewForm.message': 'Ihr Kommentar *',
    'reviewForm.messagePlaceholder': 'Erzählen Sie uns von Ihrer Erfahrung...',
    'reviewForm.submit': 'Bewertung absenden',
    'reviewForm.notice': 'Mit dem Absenden stimmen Sie der Veröffentlichung Ihrer Bewertung zu.',
    'footer.company': 'UNTERNEHMEN',
    'footer.social': 'FOLGEN SIE UNS',
    'footer.about': 'Über uns',
    'footer.contact': 'Kontakt',
    'footer.security': 'Sicherheit',
    'footer.business': 'Firmenkunden',
    'footer.privacy': 'Datenschutz',
    'footer.imprint': 'Impressum',
    'footer.terms': 'AGB',
    'page.about.title': 'Über uns',
    'page.contact.title': 'Kontakt',
    'page.security.title': 'Sicherheit',
    'page.business.title': 'Firmenkunden',
    'page.privacy.title': 'Datenschutz',
    'page.imprint.title': 'Impressum',
    'page.terms.title': 'AGB',
    
    // Common legal page elements
    'legal.stand': 'Stand:',
    'legal.contact.title': 'Kontakt',
    'legal.contact.cta': 'Jetzt Kontakt aufnehmen',
    
    // AGB / Terms & Conditions
    'agb.h1': 'Allgemeine Geschäftsbedingungen (AGB)',
    'agb.section1.title': '1. Geltungsbereich',
    'agb.section1.content': 'Diese Allgemeinen Geschäftsbedingungen gelten für alle Geschäftsbeziehungen zwischen GOLDpunkt ANTIK GmbH (nachfolgend "wir" oder "Verkäufer") und unseren Kunden im Rahmen des Ankaufs und Verkaufs von Edelmetallen, Schmuck, Uhren und Antiquitäten.',
    'agb.section2.title': '2. Vertragsschluss',
    'agb.section2.content': 'Der Vertrag kommt durch Annahme unseres Angebots durch den Kunden zustande. Bei Ankauf erfolgt dies durch Unterzeichnung des Ankaufvertrags und Auszahlung des vereinbarten Betrags. Bei Verkauf erfolgt dies durch Bezahlung der Ware durch den Kunden.',
    'agb.section3.title': '3. Ankauf von Edelmetallen und Wertgegenständen',
    'agb.section3.subtitle1': '3.1 Bewertung',
    'agb.section3.content1': 'Die Bewertung der zum Ankauf angebotenen Gegenstände erfolgt nach bestem Wissen und Gewissen durch unsere qualifizierten Fachkräfte. Der angebotene Ankaufpreis basiert auf aktuellen Marktpreisen, Materialwert, Zustand und Seltenheit des Gegenstands.',
    'agb.section3.subtitle2': '3.2 Eigentumsnachweis',
    'agb.section3.content2': 'Der Verkäufer versichert, rechtmäßiger Eigentümer der zum Ankauf angebotenen Gegenstände zu sein. Bei begründetem Verdacht auf Diebesgut behalten wir uns vor, die Transaktion abzulehnen und die zuständigen Behörden zu informieren.',
    'agb.section3.subtitle3': '3.3 Identitätsnachweis',
    'agb.section3.content3': 'Gemäß den gesetzlichen Bestimmungen sind wir verpflichtet, die Identität des Verkäufers mittels gültigen Lichtbildausweises festzustellen und zu dokumentieren.',
    'agb.section3.subtitle4': '3.4 Auszahlung',
    'agb.section3.content4': 'Die Auszahlung erfolgt nach Abschluss des Kaufvertrags wahlweise in bar oder per Banküberweisung. Bei Barzahlungen über [Betrag] € ist eine Voranmeldung erforderlich.',
    'agb.section4.title': '4. Verkauf von Edelmetallen und Wertgegenständen',
    'agb.section5.title': '5. Gewährleistung',
    'agb.section6.title': '6. Haftung',
    'agb.section7.title': '7. Datenschutz',
    'agb.section8.title': '8. Salvatorische Klausel',
    'agb.section9.title': '9. Gerichtsstand und anwendbares Recht',
    'agb.section10.title': '10. Kontakt',
    
    // Datenschutz / Privacy Policy
    'privacy.h1': 'Datenschutzerklärung',
    'privacy.intro': 'Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website besuchen oder unsere Dienstleistungen in Anspruch nehmen.',
    'privacy.responsible.title': 'Verantwortliche Stelle',
    'privacy.responsible.intro': 'Verantwortlich für die Datenverarbeitung auf dieser Website ist:',
    'privacy.datacollection.title': 'Datenerfassung auf unserer Website',
    'privacy.rights.title': 'Ihre Rechte',
    'privacy.rights.intro': 'Sie haben jederzeit das Recht:',
    'privacy.security.title': 'Datensicherheit',
    'privacy.cookies.title': 'Cookies',
    
    // Impressum / Imprint
    'imprint.h1': 'Impressum',
    'imprint.company.title': 'Angaben gemäß § 5 TMG',
    'imprint.contact.title': 'Kontakt',
    'imprint.register.title': 'Registereintrag',
    'imprint.register.court': 'Registergericht:',
    'imprint.register.number': 'Registernummer:',
    'imprint.represented.title': 'Vertreten durch',
    'imprint.represented.ceo': 'Geschäftsführer:',
    'imprint.vat.title': 'Umsatzsteuer-ID',
    'imprint.vat.intro': 'Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:',
    'imprint.authority.title': 'Aufsichtsbehörde',
    'imprint.insurance.title': 'Berufshaftpflichtversicherung',
    'imprint.insurance.insurer': 'Name und Sitz des Versicherers:',
    'imprint.insurance.coverage': 'Geltungsraum: Deutschland',
    'imprint.responsible.title': 'Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV',
    'imprint.dispute.title': 'Streitschlichtung',
    'imprint.dispute.intro': 'Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:',
    'imprint.dispute.note': 'Unsere E-Mail-Adresse finden Sie oben im Impressum.',
    'imprint.dispute.participation': 'Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.',
    'imprint.liability.content.title': 'Haftung für Inhalte',
    'imprint.liability.links.title': 'Haftung für Links',
    'imprint.copyright.title': 'Urheberrecht',
    
    // Kontakt / Contact
    'contact.h1': 'Kontakt',
    'contact.intro': 'Wir freuen uns auf Ihre Anfrage! Kontaktieren Sie uns gerne zu unseren Öffnungszeiten oder nutzen Sie unser Kontaktformular.',
    'contact.company.title': 'GOLDpunkt ANTIK GmbH',
    'contact.address.title': '📍 Adresse',
    'contact.phone.title': '📞 Telefon',
    'contact.email.title': '📧 E-Mail',
    'contact.hours.title': '⏰ Öffnungszeiten',
    'contact.hours.weekday': 'Montag - Freitag:',
    'contact.hours.saturday': 'Samstag:',
    'contact.hours.sunday': 'Sonntag: geschlossen',
    'contact.directions.title': '🚗 Anfahrt',
    'contact.directions.car': 'Mit dem Auto:',
    'contact.directions.parking': 'Parkmöglichkeiten sind direkt vor Ort vorhanden.',
    'contact.directions.public': 'Mit öffentlichen Verkehrsmitteln:',
    'contact.multilingual.title': 'Mehrsprachiger Service',
    'contact.multilingual.text': 'Wir sprechen Deutsch, Russisch, Ukrainisch und Englisch und bieten Ihnen einen persönlichen Service in Ihrer bevorzugten Sprache.',
    'contact.form.title': 'Kontaktformular',
    'contact.form.text': 'Sie können uns auch über das Kontaktformular auf unserer <a href="../index.html#contact">Startseite</a> erreichen. Wir antworten in der Regel innerhalb von 24 Stunden.',
    'contact.appointment.title': 'Beratungstermin vereinbaren',
    'contact.appointment.text': 'Für eine ausführliche Beratung und Bewertung Ihrer Wertgegenstände empfehlen wir einen persönlichen Termin. Kontaktieren Sie uns telefonisch oder per E-Mail, um einen Termin zu vereinbaren.',
    'contact.bring.title': 'Was Sie mitbringen sollten',
    'contact.bring.item1': 'Die Gegenstände, die Sie verkaufen oder bewerten lassen möchten',
    'contact.bring.item2': 'Einen gültigen Lichtbildausweis (Personalausweis oder Reisepass)',
    'contact.bring.item3': 'Falls vorhanden: Zertifikate, Kaufbelege oder andere relevante Dokumente',
    'contact.location.title': 'Standort',
    
    // Über uns / About Us
    'about.h1': 'Über uns',
    'about.welcome.title': 'Willkommen bei GOLDpunkt ANTIK GmbH',
    'about.welcome.text': 'Seit über [Anzahl] Jahren sind wir Ihr verlässlicher Partner für den An- und Verkauf von Edelmetallen, Schmuck, Uhren und Antiquitäten in [Stadt] und Umgebung. Unser Familienunternehmen steht für Vertrauen, Transparenz und faire Preise.',
    'about.history.title': 'Unsere Geschichte',
    'about.history.text': 'Was als kleines Geschäft begann, hat sich zu einem der führenden Ankaufshäuser in der Region entwickelt. Mit Leidenschaft und Fachwissen haben wir uns einen Namen gemacht und das Vertrauen tausender zufriedener Kunden gewonnen.',
    'about.mission.title': 'Unsere Mission',
    'about.mission.text': 'Wir möchten jedem Kunden eine faire, transparente und professionelle Dienstleistung bieten. Ob Sie Schmuck verkaufen, Edelmetalle veräußern oder nach einem besonderen Second-Hand-Stück suchen – bei uns sind Sie in besten Händen.',
    'about.why.title': 'Was uns auszeichnet',
    'about.why.expertise.title': '💎 Expertise und Erfahrung',
    'about.why.expertise.text': 'Unser Team besteht aus qualifizierten Fachleuten mit langjähriger Erfahrung in der Bewertung von Edelmetallen, Edelsteinen, Uhren und Antiquitäten. Wir bilden uns kontinuierlich weiter, um Ihnen stets die beste Beratung zu bieten.',
    'about.why.fair.title': '⚖️ Faire Bewertung',
    'about.why.fair.text': 'Wir legen großen Wert auf transparente und faire Bewertungen. Unsere Preise orientieren sich an aktuellen Marktwerten und dem tatsächlichen Wert Ihrer Gegenstände. Kein verstecktes Kleingedrucktes – nur ehrliche, nachvollziehbare Angebote.',
    'about.why.security.title': '🔒 Diskretion und Sicherheit',
    'about.why.security.text': 'Ihre Privatsphäre ist uns wichtig. Alle Transaktionen werden vertraulich behandelt, und unsere Räumlichkeiten sind mit modernster Sicherheitstechnik ausgestattet.',
    'about.why.multilingual.title': '🌍 Mehrsprachiger Service',
    'about.why.multilingual.text': 'Unser Team spricht Deutsch, Russisch, Ukrainisch und Englisch. Wir möchten, dass sich jeder Kunde bei uns wohlfühlt und in seiner bevorzugten Sprache beraten wird.',
    'about.why.sustainability.title': '💚 Nachhaltigkeit',
    'about.why.sustainability.text': 'Durch den Ankauf und Weiterverkauf von Schmuck und Wertgegenständen tragen wir zur Nachhaltigkeit bei. Statt neue Ressourcen abzubauen, geben wir bestehenden Schätzen ein zweites Leben.',
    'about.service.title': 'Unser Service',
    'about.service.item1': '<strong>Kostenlose Bewertung:</strong> Lassen Sie Ihre Wertgegenstände unverbindlich und kostenlos von unseren Experten bewerten',
    'about.service.item2': '<strong>Sofortige Auszahlung:</strong> Nach Vertragsabschluss erhalten Sie Ihr Geld sofort in bar oder per Überweisung',
    'about.service.item3': '<strong>Second Hand Shop:</strong> Stöbern Sie in unserer Auswahl an hochwertigen gebrauchten Schmuckstücken und Uhren',
    'about.service.item4': '<strong>Beratung:</strong> Wir beraten Sie gerne zu allen Fragen rund um Edelmetalle, Schmuck und Wertgegenstände',
    'about.trust.title': 'Vertrauen Sie auf über [Anzahl] zufriedene Kunden',
    'about.trust.text': 'Tausende Kunden haben uns bereits ihr Vertrauen geschenkt. Lesen Sie die Bewertungen auf unserer <a href="../index.html#testimonials">Startseite</a> und überzeugen Sie sich selbst von unserem erstklassigen Service.',
    'about.visit.title': 'Besuchen Sie uns',
    'about.visit.text': 'Wir freuen uns auf Ihren Besuch in unserem Geschäft in [Stadt]. Kommen Sie vorbei und lernen Sie uns persönlich kennen. Unser Team steht Ihnen gerne zur Verfügung!',
    'about.contact.box.title': 'Kontakt'
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
    'service2.description': 'Evaluation and purchase of gemstones considering all characteristics',
    'service2.feature1': 'Professional and fair market valuation',
    'service2.feature2': 'Quick transaction processing',
    'service2.feature3': 'Free consultation',
    'service3.title': 'Gold, Silver Watches and Luxury Brands Buying',
    'service3.description': 'We buy gold, silver watches and luxury brands',
    'service3.feature1': 'Evaluation by brand, condition and material',
    'service3.feature2': 'High prices for collectible items',
    'service3.feature3': 'Experience with luxury brands',
    'service4.title': 'Antiques Buying',
    'service4.description': 'Rare antiques, collectibles, medals and gold and silver coins',
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
    'benefit1.description': 'Get a fast expert evaluation of your valuables and instant cash payment or bank transfer',
    'benefit1.highlight': '0% fees • 100% transparency',
    'benefit2.title': 'Complete Confidentiality',
    'benefit2.description': 'Your data and transactions are strictly confidential',
    'benefit3.title': 'Long-Standing Experience',
    'benefit3.description': 'Long-standing experience in jewelry and antiques evaluation',
    'benefit4.title': 'Best Market Prices',
    'benefit4.description': 'Competitive prices above market rate',
    'benefit5.title': 'Quality Guarantee',
    'benefit5.description': '100% authenticity of all items for sale',
    'benefit6.title': 'Convenient Location',
    'benefit6.description': 'Easy accessibility by car or public transport',
    'benefit7.title': 'Second-Hand Jewelry',
    'benefit7.description': 'Jewelry in excellent condition at affordable prices',
    'info1.title': 'Second-Hand Jewelry Sales',
    'info1.description': 'Jewelry pieces in excellent condition at affordable prices. All pieces are thoroughly checked for authenticity and quality.',
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
    phoneValue: '+49 173 3107777',
    emailLabel: 'Email:',
    emailValue: 'info@goldpunkt-antik.de',
    'form.name': 'Your name',
    'form.phone': 'Phone or Email',
    'form.message': 'Message',
    'form.submit': 'Send',
    'form.notice': 'By sending, you agree to the processing of personal data.',
    'reviewForm.title': 'Share Your Experience',
    'reviewForm.subtitle': 'Your opinion matters to us. Leave a review!',
    'reviewForm.name': 'Your Name *',
    'reviewForm.namePlaceholder': 'John Doe',
    'reviewForm.location': 'Location',
    'reviewForm.locationPlaceholder': 'Bochum',
    'reviewForm.email': 'Email (optional)',
    'reviewForm.emailPlaceholder': 'john@example.com',
    'reviewForm.rating': 'Your Rating *',
    'reviewForm.star5': '5 Stars',
    'reviewForm.star4': '4 Stars',
    'reviewForm.star3': '3 Stars',
    'reviewForm.star2': '2 Stars',
    'reviewForm.star1': '1 Star',
    'reviewForm.message': 'Your Comment *',
    'reviewForm.messagePlaceholder': 'Tell us about your experience...',
    'reviewForm.submit': 'Submit Review',
    'reviewForm.notice': 'By submitting, you agree to the publication of your review.',
    'footer.company': 'COMPANY',
    'footer.social': 'FOLLOW US',
    'footer.about': 'About us',
    'footer.contact': 'Contact',
    'footer.security': 'Security',
    'footer.business': 'Business clients',
    'footer.privacy': 'Privacy policy',
    'footer.imprint': 'Imprint',
    'footer.terms': 'Terms & Conditions',
    'page.about.title': 'About us',
    'page.contact.title': 'Contact',
    'page.security.title': 'Security',
    'page.business.title': 'Business clients',
    'page.privacy.title': 'Privacy policy',
    'page.imprint.title': 'Imprint',
    'page.terms.title': 'Terms & Conditions',
    
    // Common legal page elements
    'legal.stand': 'As of:',
    'legal.contact.title': 'Contact',
    'legal.contact.cta': 'Contact us now',
    
    // AGB / Terms & Conditions
    'agb.h1': 'Terms & Conditions',
    'agb.section1.title': '1. Scope',
    'agb.section1.content': 'These General Terms and Conditions apply to all business relationships between GOLDpunkt ANTIK GmbH (hereinafter "we" or "seller") and our customers in the context of buying and selling precious metals, jewelry, watches and antiques.',
    'agb.section2.title': '2. Conclusion of Contract',
    'agb.section2.content': 'The contract is concluded by the customer\'s acceptance of our offer. For purchases, this is done by signing the purchase contract and paying the agreed amount. For sales, this is done by payment of the goods by the customer.',
    'agb.section3.title': '3. Purchase of Precious Metals and Valuables',
    'agb.section3.subtitle1': '3.1 Valuation',
    'agb.section3.content1': 'The valuation of items offered for purchase is carried out to the best of our knowledge by our qualified specialists. The purchase price offered is based on current market prices, material value, condition and rarity of the item.',
    'agb.section3.subtitle2': '3.2 Proof of Ownership',
    'agb.section3.content2': 'The seller warrants that they are the lawful owner of the items offered for purchase. In case of reasonable suspicion of stolen goods, we reserve the right to refuse the transaction and inform the relevant authorities.',
    'agb.section3.subtitle3': '3.3 Identity Verification',
    'agb.section3.content3': 'According to legal requirements, we are obliged to establish and document the seller\'s identity by means of a valid photo ID.',
    'agb.section3.subtitle4': '3.4 Payment',
    'agb.section3.content4': 'Payment is made after conclusion of the purchase contract either in cash or by bank transfer. For cash payments over [Amount] €, advance notice is required.',
    'agb.section4.title': '4. Sale of Precious Metals and Valuables',
    'agb.section5.title': '5. Warranty',
    'agb.section6.title': '6. Liability',
    'agb.section7.title': '7. Data Protection',
    'agb.section8.title': '8. Severability Clause',
    'agb.section9.title': '9. Jurisdiction and Applicable Law',
    'agb.section10.title': '10. Contact',
    
    // Datenschutz / Privacy Policy
    'privacy.h1': 'Privacy Policy',
    'privacy.intro': 'The following information provides a simple overview of what happens to your personal data when you visit our website or use our services.',
    'privacy.responsible.title': 'Responsible Party',
    'privacy.responsible.intro': 'The party responsible for data processing on this website is:',
    'privacy.datacollection.title': 'Data Collection on Our Website',
    'privacy.rights.title': 'Your Rights',
    'privacy.rights.intro': 'You have the right at any time:',
    'privacy.security.title': 'Data Security',
    'privacy.cookies.title': 'Cookies',
    
    // Impressum / Imprint
    'imprint.h1': 'Imprint',
    'imprint.company.title': 'Information pursuant to § 5 TMG',
    'imprint.contact.title': 'Contact',
    'imprint.register.title': 'Register Entry',
    'imprint.register.court': 'Register court:',
    'imprint.register.number': 'Register number:',
    'imprint.represented.title': 'Represented by',
    'imprint.represented.ceo': 'Managing Director:',
    'imprint.vat.title': 'VAT ID',
    'imprint.vat.intro': 'VAT identification number pursuant to § 27a Value Added Tax Act:',
    'imprint.authority.title': 'Supervisory Authority',
    'imprint.insurance.title': 'Professional Liability Insurance',
    'imprint.insurance.insurer': 'Name and location of insurer:',
    'imprint.insurance.coverage': 'Coverage area: Germany',
    'imprint.responsible.title': 'Responsible for content pursuant to § 55 para. 2 RStV',
    'imprint.dispute.title': 'Dispute Resolution',
    'imprint.dispute.intro': 'The European Commission provides a platform for online dispute resolution (ODR):',
    'imprint.dispute.note': 'You can find our email address above in the imprint.',
    'imprint.dispute.participation': 'We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.',
    'imprint.liability.content.title': 'Liability for Content',
    'imprint.liability.links.title': 'Liability for Links',
    'imprint.copyright.title': 'Copyright',
    
    // Kontakt / Contact
    'contact.h1': 'Contact',
    'contact.intro': 'We look forward to your inquiry! Feel free to contact us during our opening hours or use our contact form.',
    'contact.company.title': 'GOLDpunkt ANTIK GmbH',
    'contact.address.title': '📍 Address',
    'contact.phone.title': '📞 Phone',
    'contact.email.title': '📧 Email',
    'contact.hours.title': '⏰ Opening Hours',
    'contact.hours.weekday': 'Monday - Friday:',
    'contact.hours.saturday': 'Saturday:',
    'contact.hours.sunday': 'Sunday: closed',
    'contact.directions.title': '🚗 Directions',
    'contact.directions.car': 'By car:',
    'contact.directions.parking': 'Parking is available directly on site.',
    'contact.directions.public': 'By public transport:',
    'contact.multilingual.title': 'Multilingual Service',
    'contact.multilingual.text': 'We speak German, Russian, Ukrainian and English and offer you personal service in your preferred language.',
    'contact.form.title': 'Contact Form',
    'contact.form.text': 'You can also reach us via the contact form on our <a href="../index.html#contact">homepage</a>. We usually respond within 24 hours.',
    'contact.appointment.title': 'Schedule a Consultation',
    'contact.appointment.text': 'For a detailed consultation and valuation of your valuables, we recommend a personal appointment. Contact us by phone or email to schedule an appointment.',
    'contact.bring.title': 'What to Bring',
    'contact.bring.item1': 'The items you want to sell or have appraised',
    'contact.bring.item2': 'A valid photo ID (identity card or passport)',
    'contact.bring.item3': 'If available: certificates, purchase receipts or other relevant documents',
    'contact.location.title': 'Location',
    
    // Über uns / About Us
    'about.h1': 'About Us',
    'about.welcome.title': 'Welcome to GOLDpunkt ANTIK GmbH',
    'about.welcome.text': 'For over [Number] years, we have been your reliable partner for buying and selling precious metals, jewelry, watches and antiques in [City] and the surrounding area. Our family business stands for trust, transparency and fair prices.',
    'about.history.title': 'Our History',
    'about.history.text': 'What started as a small shop has developed into one of the leading purchasing houses in the region. With passion and expertise, we have made a name for ourselves and won the trust of thousands of satisfied customers.',
    'about.mission.title': 'Our Mission',
    'about.mission.text': 'We want to offer every customer fair, transparent and professional service. Whether you are selling jewelry, disposing of precious metals or looking for a special second-hand piece - you are in good hands with us.',
    'about.why.title': 'What Sets Us Apart',
    'about.why.expertise.title': '💎 Expertise and Experience',
    'about.why.expertise.text': 'Our team consists of qualified specialists with many years of experience in valuing precious metals, gemstones, watches and antiques. We continuously educate ourselves to always offer you the best advice.',
    'about.why.fair.title': '⚖️ Fair Valuation',
    'about.why.fair.text': 'We place great value on transparent and fair valuations. Our prices are based on current market values and the actual value of your items. No hidden small print - just honest, comprehensible offers.',
    'about.why.security.title': '🔒 Discretion and Security',
    'about.why.security.text': 'Your privacy is important to us. All transactions are treated confidentially, and our premises are equipped with state-of-the-art security technology.',
    'about.why.multilingual.title': '🌍 Multilingual Service',
    'about.why.multilingual.text': 'Our team speaks German, Russian, Ukrainian and English. We want every customer to feel comfortable with us and be advised in their preferred language.',
    'about.why.sustainability.title': '💚 Sustainability',
    'about.why.sustainability.text': 'Through the purchase and resale of jewelry and valuables, we contribute to sustainability. Instead of extracting new resources, we give existing treasures a second life.',
    'about.service.title': 'Our Service',
    'about.service.item1': '<strong>Free Valuation:</strong> Have your valuables appraised free of charge and without obligation by our experts',
    'about.service.item2': '<strong>Immediate Payment:</strong> After conclusion of the contract, you will receive your money immediately in cash or by bank transfer',
    'about.service.item3': '<strong>Second Hand Shop:</strong> Browse our selection of high-quality used jewelry and watches',
    'about.service.item4': '<strong>Consultation:</strong> We are happy to advise you on all questions regarding precious metals, jewelry and valuables',
    'about.trust.title': 'Trusted by Over [Number] Satisfied Customers',
    'about.trust.text': 'Thousands of customers have already placed their trust in us. Read the reviews on our <a href="../index.html#testimonials">homepage</a> and see for yourself our excellent service.',
    'about.visit.title': 'Visit Us',
    'about.visit.text': 'We look forward to your visit to our shop in [City]. Come by and get to know us personally. Our team is at your disposal!',
    'about.contact.box.title': 'Contact'
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
    'service2.title': 'Скупка бриллиантов и драгоценных камней',
    'service2.description': 'Оценка и покупка драгоценных камней с учетом всех характеристик',
    'service2.feature1': 'Профессиональная и справедливая рыночная оценка',
    'service2.feature2': 'Быстрое оформление сделки',
    'service2.feature3': 'Бесплатная консультация',
    'service3.title': 'Скупка золотых, серебряных часов и люксовых брендов',
    'service3.description': 'Покупаем золотые, серебряные часы и часы люксовых брендов',
    'service3.feature1': 'Оценка по марке, состоянию и материалу',
    'service3.feature2': 'Высокие цены за коллекционные изделия',
    'service3.feature3': 'Опыт работы с люксовыми брендами',
    'service4.title': 'Скупка антиквариата',
    'service4.description': 'Редкие антикварные предметы, коллекционные изделия, медали и золотые и серебряные монеты',
    'service4.feature1': 'Экспертная оценка исторической ценности',
    'service4.feature2': 'Специализация по разным эпохам',
    'service4.feature3': 'Индивидуальный подход к каждому предмету',
    'service5.title': 'Продажа Second Hand украшений',
    'service5.description': 'Качественные ювелирные изделия по доступным ценам',
    'service5.feature1': 'Проверка на подлинность',
    'service5.feature2': 'Отличное состояние',
    'service5.feature3': 'Гарантия качества',
    'service6.title': 'Бесплатная консультация',
    'service6.description': 'Профессиональные советы по оценке и продаже ваших ценностей',
    'service6.feature1': 'Персональная консультация эксперта',
    'service6.feature2': 'Советы по уходу за украшениями',
    'service6.feature3': 'Информация о рыночных трендах',
    'benefitsTitle': 'Почему выбирают нас',
    'benefitsSubtitle': 'Мы гарантируем честность, профессионализм и максимальную выгоду для наших клиентов',
    'benefit1.title': 'Мгновенная оценка и выплата',
    'benefit1.description': 'Получите быструю экспертную оценку ваших ценностей и немедленную выплату наличными или на карту',
    'benefit1.highlight': '0% комиссий • 100% прозрачность',
    'benefit2.title': 'Полная конфиденциальность',
    'benefit2.description': 'Ваши данные и сделки строго конфиденциальны',
    'benefit3.title': 'Многолетний опыт',
    'benefit3.description': 'Многолетний опыт в оценке ювелирных изделий и антиквариата',
    'benefit4.title': 'Лучшие цены на рынке',
    'benefit4.description': 'Конкурентные цены выше рыночных',
    'benefit5.title': 'Гарантия качества',
    'benefit5.description': '100% подлинность всех продаваемых изделий',
    'benefit6.title': 'Удобное расположение',
    'benefit6.description': 'Удобная доступность на автомобиле или общественном транспорте',
    'benefit7.title': 'Second Hand украшения',
    'benefit7.description': 'Украшения в отличном состоянии по доступным ценам',
    'info1.title': 'Продажа Second Hand украшений',
    'info1.description': 'Ювелирные изделия в отличном состоянии по доступным ценам. Все изделия проходят тщательную проверку на подлинность и качество.',
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
    phoneValue: '+49 173 3107777',
    emailLabel: 'Email:',
    emailValue: 'info@goldpunkt-antik.de',
    'form.name': 'Ваше имя',
    'form.phone': 'Телефон или Email',
    'form.message': 'Сообщение',
    'form.submit': 'Отправить',
    'form.notice': 'Отправляя запрос, вы соглашаетесь с обработкой персональных данных.',
    'reviewForm.title': 'Поделитесь своим опытом',
    'reviewForm.subtitle': 'Ваше мнение важно для нас. Оставьте отзыв!',
    'reviewForm.name': 'Ваше имя *',
    'reviewForm.namePlaceholder': 'Иван Иванов',
    'reviewForm.location': 'Местоположение',
    'reviewForm.locationPlaceholder': 'Бохум',
    'reviewForm.email': 'Email (необязательно)',
    'reviewForm.emailPlaceholder': 'ivan@example.com',
    'reviewForm.rating': 'Ваша оценка *',
    'reviewForm.star5': '5 звезд',
    'reviewForm.star4': '4 звезды',
    'reviewForm.star3': '3 звезды',
    'reviewForm.star2': '2 звезды',
    'reviewForm.star1': '1 звезда',
    'reviewForm.message': 'Ваш комментарий *',
    'reviewForm.messagePlaceholder': 'Расскажите о вашем опыте...',
    'reviewForm.submit': 'Отправить отзыв',
    'reviewForm.notice': 'Отправляя форму, вы соглашаетесь на публикацию вашего отзыва.',
    'footer.company': 'КОМПАНИЯ',
    'footer.social': 'СЛЕДИТЕ ЗА НАМИ',
    'footer.about': 'О нас',
    'footer.contact': 'Контакт',
    'footer.security': 'Безопасность',
    'footer.business': 'Корпоративным клиентам',
    'footer.privacy': 'Конфиденциальность',
    'footer.imprint': 'Выходные данные',
    'footer.terms': 'Условия использования',
    'page.about.title': 'О нас',
    'page.contact.title': 'Контакт',
    'page.security.title': 'Безопасность',
    'page.business.title': 'Корпоративным клиентам',
    'page.privacy.title': 'Конфиденциальность',
    'page.imprint.title': 'Выходные данные',
    'page.terms.title': 'Условия использования',
    
    // Common legal page elements
    'legal.stand': 'По состоянию на:',
    'legal.contact.title': 'Контакт',
    'legal.contact.cta': 'Связаться с нами',
    
    // AGB / Terms & Conditions
    'agb.h1': 'Общие условия и положения',
    'agb.section1.title': '1. Область применения',
    'agb.section1.content': 'Настоящие Общие условия и положения применяются ко всем деловым отношениям между GOLDpunkt ANTIK GmbH (далее «мы» или «продавец») и нашими клиентами в рамках покупки и продажи драгоценных металлов, ювелирных изделий, часов и антиквариата.',
    'agb.section2.title': '2. Заключение договора',
    'agb.section2.content': 'Договор заключается путем принятия нашего предложения клиентом. При покупке это осуществляется путем подписания договора купли-продажи и выплаты согласованной суммы. При продаже это осуществляется путем оплаты товара клиентом.',
    'agb.section3.title': '3. Скупка драгоценных металлов и ценностей',
    'agb.section3.subtitle1': '3.1 Оценка',
    'agb.section3.content1': 'Оценка предлагаемых для покупки предметов производится по нашему лучшему знанию нашими квалифицированными специалистами. Предлагаемая цена покупки основана на текущих рыночных ценах, стоимости материала, состоянии и редкости предмета.',
    'agb.section3.subtitle2': '3.2 Подтверждение права собственности',
    'agb.section3.content2': 'Продавец гарантирует, что является законным владельцем предметов, предлагаемых для покупки. В случае обоснованного подозрения в краденом имуществе мы оставляем за собой право отказать в совершении сделки и сообщить в компетентные органы.',
    'agb.section3.subtitle3': '3.3 Проверка личности',
    'agb.section3.content3': 'В соответствии с законодательными требованиями мы обязаны установить и задокументировать личность продавца с помощью действительного документа, удостоверяющего личность с фотографией.',
    'agb.section3.subtitle4': '3.4 Выплата',
    'agb.section3.content4': 'Выплата производится после заключения договора купли-продажи наличными или банковским переводом. Для выплат наличными свыше [Сумма] € требуется предварительное уведомление.',
    'agb.section4.title': '4. Продажа драгоценных металлов и ценностей',
    'agb.section5.title': '5. Гарантия',
    'agb.section6.title': '6. Ответственность',
    'agb.section7.title': '7. Защита данных',
    'agb.section8.title': '8. Оговорка о сохранении силы остальных положений',
    'agb.section9.title': '9. Место судебного разбирательства и применимое право',
    'agb.section10.title': '10. Контакт',
    
    // Datenschutz / Privacy Policy
    'privacy.h1': 'Политика конфиденциальности',
    'privacy.intro': 'Следующая информация предоставляет простой обзор того, что происходит с вашими личными данными, когда вы посещаете наш веб-сайт или пользуетесь нашими услугами.',
    'privacy.responsible.title': 'Ответственная сторона',
    'privacy.responsible.intro': 'Ответственной стороной за обработку данных на этом веб-сайте является:',
    'privacy.datacollection.title': 'Сбор данных на нашем веб-сайте',
    'privacy.rights.title': 'Ваши права',
    'privacy.rights.intro': 'Вы имеете право в любое время:',
    'privacy.security.title': 'Безопасность данных',
    'privacy.cookies.title': 'Файлы cookie',
    
    // Impressum / Imprint
    'imprint.h1': 'Выходные данные',
    'imprint.company.title': 'Информация в соответствии с § 5 TMG',
    'imprint.contact.title': 'Контакт',
    'imprint.register.title': 'Регистрационная запись',
    'imprint.register.court': 'Регистрационный суд:',
    'imprint.register.number': 'Регистрационный номер:',
    'imprint.represented.title': 'Представлен',
    'imprint.represented.ceo': 'Управляющий директор:',
    'imprint.vat.title': 'ИД НДС',
    'imprint.vat.intro': 'Идентификационный номер плательщика НДС в соответствии с § 27a Закона о налоге на добавленную стоимость:',
    'imprint.authority.title': 'Надзорный орган',
    'imprint.insurance.title': 'Страхование профессиональной ответственности',
    'imprint.insurance.insurer': 'Название и местонахождение страховщика:',
    'imprint.insurance.coverage': 'Зона покрытия: Германия',
    'imprint.responsible.title': 'Ответственный за контент в соответствии с § 55 абз. 2 RStV',
    'imprint.dispute.title': 'Разрешение споров',
    'imprint.dispute.intro': 'Европейская комиссия предоставляет платформу для онлайн-разрешения споров (ODR):',
    'imprint.dispute.note': 'Вы можете найти наш адрес электронной почты выше в выходных данных.',
    'imprint.dispute.participation': 'Мы не готовы и не обязаны участвовать в процедурах разрешения споров перед арбитражным советом потребителей.',
    'imprint.liability.content.title': 'Ответственность за контент',
    'imprint.liability.links.title': 'Ответственность за ссылки',
    'imprint.copyright.title': 'Авторское право',
    
    // Kontakt / Contact
    'contact.h1': 'Контакт',
    'contact.intro': 'Мы с нетерпением ждем вашего запроса! Не стесняйтесь обращаться к нам в часы работы или использовать нашу контактную форму.',
    'contact.company.title': 'GOLDpunkt ANTIK GmbH',
    'contact.address.title': '📍 Адрес',
    'contact.phone.title': '📞 Телефон',
    'contact.email.title': '📧 Email',
    'contact.hours.title': '⏰ Часы работы',
    'contact.hours.weekday': 'Понедельник - пятница:',
    'contact.hours.saturday': 'Суббота:',
    'contact.hours.sunday': 'Воскресенье: закрыто',
    'contact.directions.title': '🚗 Как добраться',
    'contact.directions.car': 'На машине:',
    'contact.directions.parking': 'Парковка доступна непосредственно на месте.',
    'contact.directions.public': 'На общественном транспорте:',
    'contact.multilingual.title': 'Многоязычный сервис',
    'contact.multilingual.text': 'Мы говорим на немецком, русском, украинском и английском языках и предлагаем вам персональный сервис на вашем предпочитаемом языке.',
    'contact.form.title': 'Контактная форма',
    'contact.form.text': 'Вы также можете связаться с нами через контактную форму на нашей <a href="../index.html#contact">домашней странице</a>. Обычно мы отвечаем в течение 24 часов.',
    'contact.appointment.title': 'Запись на консультацию',
    'contact.appointment.text': 'Для подробной консультации и оценки ваших ценностей мы рекомендуем личную встречу. Свяжитесь с нами по телефону или электронной почте, чтобы назначить встречу.',
    'contact.bring.title': 'Что взять с собой',
    'contact.bring.item1': 'Предметы, которые вы хотите продать или оценить',
    'contact.bring.item2': 'Действительный документ, удостоверяющий личность с фотографией (паспорт или удостоверение личности)',
    'contact.bring.item3': 'При наличии: сертификаты, чеки или другие соответствующие документы',
    'contact.location.title': 'Местоположение',
    
    // Über uns / About Us
    'about.h1': 'О нас',
    'about.welcome.title': 'Добро пожаловать в GOLDpunkt ANTIK GmbH',
    'about.welcome.text': 'Уже более [Число] лет мы являемся вашим надежным партнером по покупке и продаже драгоценных металлов, ювелирных изделий, часов и антиквариата в [Город] и окрестностях. Наш семейный бизнес основан на доверии, прозрачности и справедливых ценах.',
    'about.history.title': 'Наша история',
    'about.history.text': 'То, что начиналось как небольшой магазин, превратилось в один из ведущих домов покупки в регионе. С энтузиазмом и опытом мы создали себе имя и завоевали доверие тысяч довольных клиентов.',
    'about.mission.title': 'Наша миссия',
    'about.mission.text': 'Мы хотим предложить каждому клиенту справедливое, прозрачное и профессиональное обслуживание. Продаете ли вы украшения, избавляетесь от драгоценных металлов или ищете особый подержанный предмет - вы в надежных руках.',
    'about.why.title': 'Что нас выделяет',
    'about.why.expertise.title': '💎 Опыт и знания',
    'about.why.expertise.text': 'Наша команда состоит из квалифицированных специалистов с многолетним опытом оценки драгоценных металлов, драгоценных камней, часов и антиквариата. Мы постоянно обучаемся, чтобы всегда предлагать вам лучшую консультацию.',
    'about.why.fair.title': '⚖️ Справедливая оценка',
    'about.why.fair.text': 'Мы придаем большое значение прозрачной и справедливой оценке. Наши цены основаны на текущих рыночных ценах и фактической стоимости ваших предметов. Никаких скрытых мелких шрифтов - только честные, понятные предложения.',
    'about.why.security.title': '🔒 Конфиденциальность и безопасность',
    'about.why.security.text': 'Ваша конфиденциальность важна для нас. Все транзакции обрабатываются конфиденциально, и наши помещения оснащены современными системами безопасности.',
    'about.why.multilingual.title': '🌍 Многоязычный сервис',
    'about.why.multilingual.text': 'Наша команда говорит на немецком, русском, украинском и английском языках. Мы хотим, чтобы каждый клиент чувствовал себя комфортно с нами и получал консультацию на предпочитаемом языке.',
    'about.why.sustainability.title': '💚 Устойчивость',
    'about.why.sustainability.text': 'Покупая и перепродавая ювелирные изделия и ценности, мы вносим вклад в устойчивость. Вместо добычи новых ресурсов, мы даем существующим сокровищам вторую жизнь.',
    'about.service.title': 'Наш сервис',
    'about.service.item1': '<strong>Бесплатная оценка:</strong> Пусть ваши ценности будут оценены нашими экспертами бесплатно и без обязательств',
    'about.service.item2': '<strong>Немедленная выплата:</strong> После заключения договора вы немедленно получите деньги наличными или банковским переводом',
    'about.service.item3': '<strong>Second Hand магазин:</strong> Просмотрите наш выбор высококачественных подержанных ювелирных изделий и часов',
    'about.service.item4': '<strong>Консультация:</strong> Мы будем рады проконсультировать вас по всем вопросам, касающимся драгоценных металлов, ювелирных изделий и ценностей',
    'about.trust.title': 'Нам доверяют более [Число] довольных клиентов',
    'about.trust.text': 'Тысячи клиентов уже доверились нам. Прочитайте отзывы на нашей <a href="../index.html#testimonials">домашней странице</a> и убедитесь сами в нашем превосходном обслуживании.',
    'about.visit.title': 'Посетите нас',
    'about.visit.text': 'Мы с нетерпением ждем вашего визита в наш магазин в [Город]. Приходите и познакомьтесь с нами лично. Наша команда в вашем распоряжении!',
    'about.contact.box.title': 'Контакт'
  }
};

const defaultLang = (localStorage.getItem('lang') || 'de');

function setLang(lang){
  const dict = translations[lang] || translations.de;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(node => {
    const key = node.getAttribute('data-i18n');
    if (dict[key]) {
      // Check if the translation contains HTML
      if (dict[key].includes('<')) {
        node.innerHTML = dict[key];
      } else {
        node.textContent = dict[key];
      }
    }
  });
  // Handle placeholder translations
  document.querySelectorAll('[data-i18n-placeholder]').forEach(node => {
    const key = node.getAttribute('data-i18n-placeholder');
    if (dict[key]) {
      node.setAttribute('placeholder', dict[key]);
    }
  });
  // Handle title translations
  document.querySelectorAll('[data-i18n-title]').forEach(node => {
    const key = node.getAttribute('data-i18n-title');
    if (dict[key]) {
      node.setAttribute('title', dict[key]);
    }
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

// Contact form submission - now handled by FormSubmit
document.getElementById('contactForm')?.addEventListener('submit', e => {
  const form = e.currentTarget;
  const data = new FormData(form);
  const payload = Object.fromEntries(data.entries());
  console.log('Contact form data:', payload);
  // Form will be submitted naturally to FormSubmit
});

// Review form submission - now handled by FormSubmit
document.getElementById('reviewForm')?.addEventListener('submit', e => {
  const form = e.currentTarget;
  const data = new FormData(form);
  const payload = Object.fromEntries(data.entries());
  
  // Check if rating is selected
  if (!payload.rating) {
    e.preventDefault();
    const messages = {
      de: 'Bitte wählen Sie eine Bewertung aus.',
      en: 'Please select a rating.',
      ru: 'Пожалуйста, выберите оценку.'
    };
    alert(messages[defaultLang] || messages.de);
    return;
  }
  
  console.log('Review form data:', payload);
  // Form will be submitted naturally to FormSubmit
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

// Copy link functionality
const copyMessages = {
  de: '✓ Kopiert!',
  en: '✓ Copied!',
  ru: '✓ Скопировано!'
};

function initCopyLinks() {
  document.querySelectorAll('.copy-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      
      // For elements with <br> tags, convert them to newlines
      let textToCopy = link.textContent;
      if (link.innerHTML.includes('<br>')) {
        textToCopy = link.innerHTML
          .replace(/<br\s*\/?>/gi, '\n')
          .replace(/<[^>]+>/g, '')
          .trim();
      }
      
      navigator.clipboard.writeText(textToCopy).then(() => {
        // Get current language
        const currentLang = localStorage.getItem('lang') || 'de';
        const copyMessage = copyMessages[currentLang] || copyMessages.de;
        const dict = translations[currentLang] || translations.de;
        
        // Show visual feedback
        const originalHTML = link.innerHTML;
        const originalText = link.textContent;
        const i18nKey = link.getAttribute('data-i18n');
        
        link.textContent = copyMessage;
        link.style.color = 'var(--gold)';
        
        setTimeout(() => {
          // Restore content based on whether element has data-i18n
          if (i18nKey && dict[i18nKey]) {
            // Restore from translation dictionary
            if (dict[i18nKey].includes('<')) {
              link.innerHTML = dict[i18nKey];
            } else {
              link.textContent = dict[i18nKey];
            }
          } else {
            // Restore original HTML for non-translated elements
            link.innerHTML = originalHTML;
          }
          link.style.color = '';
        }, 1500);
      }).catch(err => {
        console.error('Ошибка копирования:', err);
        alert('Не удалось скопировать / Kopieren fehlgeschlagen / Copy failed');
      });
    });
  });
}

// Initialize copy functionality
initCopyLinks();


