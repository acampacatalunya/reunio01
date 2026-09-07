const CONFIG = {
  logoUrl: "https://i.postimg.cc/0K95v8Lm/logo.png", // CANVIA AQUEST ENLLAÇ PER L'ENLLAÇ DIRECTE DE LA IMATGE
  entitat: "Associació Catalana de Malalties de Parkinson Atípiques",
  email: "info@acampa.cat"
};

// Funció auxiliar per agafar títols de l'Ordre del Dia (Diapositiva 2, índex 1)
function getAgendaTitle(index) {
  return presentationData.slides[1].items[index].title;
}

const presentationData = {
  slides: [
    // DIAPOSITIVA 1: Portada
    {
      type: "portada",
      subtitle: "Reunió d'Associats/des",
      dataReunio: "16 de setembre de 2026",
      hora: "17:00 h",
      lloc: "Seu Social Olzinelles, Barcelona"
    },
    // DIAPOSITIVA 2: Ordre del dia (amb enllaços a les diapositives)
    {
      type: "ordre-del-dia",
      title: "Ordre del dia",
      items: [
        { title: "L'Entitat", summary: "Orígens, Junta Directiva i estructura", targetSlide: 2 },
        { title: "Documents i gestió", summary: "Estatuts, reglament, comissions i administració", targetSlide: 8 },
        { title: "Captació de fons", summary: "Subvencions, donacions i socis", targetSlide: 14 },
        { title: "Recursos i activitats", summary: "Kit benvinguda, Guia pràctica i propostes", targetSlide: 17 },
        { title: "Comitè Clínic Assessor", summary: "Composició i funcions", targetSlide: 21 },
        { title: "Full de ruta", summary: "Propers passos i torn obert de preguntes", targetSlide: 24 }
      ]
    },
    // DIAPOSITIVA 3: Bloc 1 Header (Agafa el títol del quadre 0 de l'ordre del dia)
    {
      type: "bloc-header",
      inheritTitleFromAgenda: 0, // Agafa "L'Entitat"
      logoOverride: CONFIG.logoUrl
    },
    // DIAPOSITIVA 4: Orígens (Format professional)
    {
      type: "text-llista",
      icon: "🌱",
      title: "Orígens de l'entitat",
      subtitle: "Per què ACAMPA?",
      text: "Neix de la necessitat de donar resposta a les malalties de Parkinson atípiques, unes grans desconegudes que afecten famílies senceres sense els recursos ni la informació adequats.",
      items: [
        " <strong>Una realitat invisible:</strong> el Parkinson atípic és sovint mal diagnosticat i poc estudiat.",
        " <strong>Famílies aïllades:</strong> mancades d'acompanyament específic i d'informació pràctica.",
        " <strong>Una resposta col·lectiva:</strong> associar-nos per fer visible allò que el sistema no veu.",
        " <strong>Un projecte amb ànima:</strong> construir comunitat, coneixement i suport mutu."
      ]
    },
    // DIAPOSITIVA 5: Procés constitutiu
    {
      type: "proces-constitutiu",
      title: "Procés constitutiu",
      nomComplet: "L'ASSOCIACIÓ CATALANA DE PERSONES AFECTADES PER MALALTIES PARKINSONIANES ATÍPIQUES",
      nomReduit: "ACAMPA",
      iniciProces: "27-02-2026",
      reconeixement: "04-06-2026",
      nif: "agost-2026 (G93797116)",
      certificatDigital: "setembre-2026",
      compteBancari: "CAIXABANK - nº -per concretar-",
      localSocial: "-per concretar-",
      adreca: "-per concretar-",
      poblacio: "-per concretar-",
      codiPostal: "-per concretar-",
      telefon: "-per concretar-",
      dominiWeb: "acampa.cat",
      email1: "parkinsonismesatipics@gmail.com",
      email2: "info@acampa.cat"
    },
    // DIAPOSITIVA 6: Organigrama
    {
      type: "organigrama",
      title: "Organigrama de l'Entitat",
      // Pots editar aquesta estructura per reflectir el teu organigrama real
      estructura: [
        { nivell: "Assemblea General d'Associats/des" },
        { nivell: "Junta Directiva (President/a, Secretari/ària, Tresorer/a, Vocals)" },
        { nivell: "Comitè Clínic Assessor" },
        { nivell: "Comissions de Treball (Acollida, Comunicació, Activitats, Finançament)" },
        { nivell: "Base Social i Voluntariat" }
      ]
    },
    // DIAPOSITIVA 7: Junta Directiva (Taula dinàmica amb nous càrrecs)
    {
      type: "taula-junta",
      title: "Junta Directiva actual",
      subtitle: "L'òrgan de govern de l'entitat, format per associats voluntaris.",
      membres: [
        { carrec: "👤 President/a", persona: "Enric Crous Millet", funcions: "Representació legal, impuls estratègic" },
        { carrec: "🛡️ Vicepresidència", persona: "⚠️ Pendent de cobrir", funcions: "Substitució i suport a presidència" },
        { carrec: "📝 Secretari/ària", persona: "Jana Crous Aguilera", funcions: "Actes, comunicacions, custòdia documental" },
        { carrec: "💼 Tresorer/a", persona: "Meritxell Martina Garcia", funcions: "Comptes, pressupostos, tresoreria" },
        { carrec: "🗳️ Vocal 1", persona: "Teresa Torres Parés", funcions: "Suport a projectes i activitats" },
        { carrec: "🗳️ Vocal 2", persona: "Jorge Raubert Freixes", funcions: "Suport a projectes i activitats" },
        { carrec: "🗳️ Vocal 3", persona: "⚠️ Pendent de cobrir", funcions: "Per definir" },
        { carrec: "🗳️ Vocal 4", persona: "⚠️ Pendent de cobrir", funcions: "Per definir" },
        { carrec: "🗳️ Vocal 5", persona: "⚠️ Pendent de cobrir", funcions: "Per definir" },
        { carrec: "🗳️ Vocal 6", persona: "⚠️ Pendent de cobrir", funcions: "Per definir" }
      ]
    },
    // DIAPOSITIVA 8: Necessitem cobrir espais (6 etiquetes dinàmiques)
    {
      type: "etiquetes-dinamiques",
      title: "Necessitem cobrir espais",
      subtitle: "La Junta és el motor de l'entitat. Sense persones compromeses, cap projecte tira endavant.",
      gridClass: "grid-3", // 3 columnes (2 files = 6 elements)
      items: [
        { icon: "👤", title: "Llocs vacants Junta", desc: "Per completar la Junta" },
        { icon: "📣", title: "Responsable de comunicació-xarxes", desc: "Xarxes, web, premsa" },
        { icon: "🤝", title: "Responsable de voluntariat", desc: "Coordinació de voluntaris" },
        { icon: "💡", title: "Responsable de projectes-activitats", desc: "Agenda programes-activitats" },
        { icon: "📊", title: "Responsable de finances", desc: "Suport a la tresoreria, administració" },
        { icon: "🌐", title: "Responsable acollida", desc: "Primer contacte" }
      ],
      footerText: "🙋‍♀️ Et vols sumar? Parla amb qualsevol membre de la Junta després de l'assemblea."
    },
    // DIAPOSITIVA 9: Bloc 2 Header (Agafa títol del quadre 1 de l'ordre del dia)
    {
      type: "bloc-header",
      inheritTitleFromAgenda: 1, // Agafa "Documents i gestió"
      logoOverride: CONFIG.logoUrl
    },
    // DIAPOSITIVA 10: Documents preceptius de l'entitat
    {
      type: "etiquetes-dinamiques",
      title: "Documents preceptius de l'entitat",
      subtitle: "Marc legal i estratègic que regeix el funcionament d'ACAMPA.",
      gridClass: "grid-2",
      items: [
        {
          icon: "📜",
          title: "Estatuts",
          desc: "Normes fonamentals: finalitat, òrgans de govern, drets i deures dels associats.",
          url: "https://acampacatalunya.github.io/estatuts/"
        },
        {
          icon: "📖",
          title: "Reglament de Règim Intern",
          desc: "Desenvolupa els estatuts: procediments, funcionament intern, comissions.",
          url: "https://acampacatalunya.github.io/acamparri/"
        },
        {
          icon: "🎯",
          title: "Pla Estratègic",
          desc: "Visió, missió, objectius a mig termini i full de ruta.",
          url: "https://acampacatalunya.github.io/plaestrategic/presentacio_pe"
        },
        {
          icon: "📊",
          title: "Memòries anuals",
          desc: "Activitats, comptes i resultats de cada exercici."
          // Sense propietat 'url', per tant no mostrarà enllaç
        }
      ]
    },
    // DIAPOSITIVA 11: Comissions
    {
      type: "etiquetes-dinamiques",
      title: "Comissions de treball",
      subtitle: "Grups de treball especialitzats que donen vida al dia a dia de l'entitat.",
      gridClass: "grid-2",
      items: [
        { icon: "🤝", title: "Comissió d'Acollida", desc: "Primer contacte amb noves famílies i associats." },
        { icon: "📣", title: "Comissió de Comunicació", desc: "Web, xarxes socials, butlletins, relació amb premsa." },
        { icon: "🎉", title: "Comissió d'Activitats", desc: "Organització de trobades, jornades i actes." },
        { icon: "💰", title: "Comissió de Finançament", desc: "Subvencions, donacions, campanyes de captació." }
      ]
    },
    // DIAPOSITIVA 12: Voluntariat
    {
      type: "etiquetes-dinamiques",
      title: "Voluntariat",
      subtitle: "El voluntariat és el cor d'ACAMPA. Àmbits on necessitem voluntaris/es:",
      gridClass: "grid-3",
      items: [
        { icon: "🚗", title: "Acompanyament", desc: "Visites, trasllats, companyia" },
        { icon: "📞", title: "Suport telefònic", desc: "Escolta i orientació" },
        { icon: "💻", title: "Suport administratiu", desc: "Oficina, gestions, digitalització" },
        { icon: "📢", title: "Difusió", desc: "Parlar d'ACAMPA arreu" },
        { icon: "🎨", title: "Tallers i activitats", desc: "Dinamització de grups" },
        { icon: "📸", title: "Comunicació visual", desc: "Fotografia, vídeo, disseny" }
      ]
    },
    // DIAPOSITIVA 13: Aspectes administratius (2 columnes específiques)
    {
      type: "dues-columnes-especific",
      title: "Aspectes administratius",
      col1Title: "📂 DOCUMENTACIÓ INTERNA",
      col1Items: [
        "Llibre registre d'associats/des",
        "Llibre d'actes de la Junta i assemblees",
        "Comptabilitat i pressupostos anuals",
        "Gestió de socis/es i quotes",
        "Protecció de dades (RGPD) i documentació sensible"
      ],
      col2Title: "🏛️ DOCUMENTACIÓ ORGANISMES OFICIALS",
      col2Items: [
        "Registre d'Associacions de la Generalitat",
        "Agència Tributària: model 036, declarations trimestrals, anuals, model 182",
        "Ajuntament: padró d'entitats, llicències d'actes",
        "Drets Socials / Departament de Salut: convenis i subvencions"
      ]
    },
    // DIAPOSITIVA 14: Col·laboracions externes (8 etiquetes)
    {
      type: "etiquetes-dinamiques",
      title: "Col·laboracions externes",
      subtitle: "Xarxa de partners per fer créixer l'entitat.",
      gridClass: "grid-4", // 2 files de 4 = 8 elements
      items: [
        { icon: "🏥", title: "Hospitals", desc: "Neurologia, pal·liatius i treball social" },
        { icon: "🩺", title: "CAP", desc: "Detecció precoç i derivació" },
        { icon: "🎓", title: "Universitats", desc: "Pràctiques de estudiants" },
        { icon: "🏛️", title: "Altres associacions", desc: "Xarxa del tercer sector" },
        { icon: "📰", title: "Mitjans", desc: "Visibilitzar les malalties atípiques" },
        { icon: "💼", title: "Administracions", desc: "Subvencions i convenis" },
        { icon: "🤝", title: "Empreses", desc: "RSC i mecenatge" },
        { icon: "🌍", title: "Comunitat", desc: "Teixit associatiu local" }
      ]
    },
    // DIAPOSITIVA 15: Bloc 3 Header (Agafa títol del quadre 2 de l'ordre del dia)
    {
      type: "bloc-header",
      inheritTitleFromAgenda: 2, // Agafa "Captació de fons"
      logoOverride: CONFIG.logoUrl
    },
    // DIAPOSITIVA 16: Subvencions (Format professional)
    {
      type: "text-llista",
      icon: "📝",
      title: "Subvencions",
      subtitle: "Les subvencions són una font clau de finançament, però requereixen constància, rigor i anticipació.",
      text: "Per aconseguir-les, cal conèixer bé les convocatòries i preparar la documentació amb temps i precisió.",
      items: [
        " <strong>🏛️ Administracions convocants:</strong> <br>• Generalitat de Catalunya (Drets Socials, Salut, Treball) <br>• Diputació de Barcelona (convocatòries anuals) <br>• Ajuntaments (subvencions locals d'activitats i funcionament) <br>• Ministeri de Drets Socials (IRPF, programes estatals) <br>• Fundacions bancàries (La Caixa, CatalunyaCaixa, etc.)",
        " <strong>🔑 Clau de l'èxit:</strong> <br>• 📅 <b>Calendari:</b> planificar amb mesos d'antelació <br>• 📊 <b>Justificació rigorosa:</b> memòria econòmica impecable <br>• 🎯 <b>Projectes ben definits:</b> objectius mesurables"
      ]
    },
    // DIAPOSITIVA 17: Donacions i socis/es (Format professional)
    {
      type: "text-llista",
      icon: "❤️",
      title: "Donacions i socis/es",
      subtitle: "Fonts de finançament clau per a la sostenibilitat del projecte.",
      text: "La diversificació de les fonts d'ingressos és clau per garantir la viabilitat i la independència de l'entitat.",
      items: [
        "<strong>👥 Socis i sòcies (quotes periòdiques):</strong><br>• Base estable i previsible de l'entitat.<br>• Campanyes de captació contínues: web, actes, xarxes, hospitals.<br>• Desgravació fiscal per als donants (fins al 80% en alguns trams).",
        "<strong>🎁 Donacions puntuals:</strong><br>• Donatius particulars (empreses, famílies, particulars).<br>• Campanyes específiques: 'Apadrina una família', 'Marató ACAMPA'.<br>• Llegats i herències solidàries.",
        "<strong>🎪 Activitats de captació:</strong><br>• Sopars solidaris, concerts benèfics, curses populars.<br>• Venda de merchandising solidari.<br>• Col·laboracions amb empreses (mecenatge, RSC)."
      ]
    },
    // DIAPOSITIVA 18: Bloc 4 Header (Agafa títol del quadre 3 de l'ordre del dia)
    {
      type: "bloc-header",
      inheritTitleFromAgenda: 3, // Agafa "Recursos i activitats"
      logoOverride: CONFIG.logoUrl
    },
    // DIAPOSITIVA 19: Recursos legals i sanitaris (NOVA: Blocs d'etiquetes amb enllaç)
    {
      type: "etiquetes-dinamiques",
      title: "Recursos legals i sanitaris de referència",
      subtitle: "Marc normatiu i plans d'atenció clau per a les persones afectades i les seves famílies.",
      gridClass: "grid-2",
      items: [
        {
          icon: "📜",
          title: "Reial decret 969/2025: Criteris per a processos irreversibles i d'alta complexitat en l'àmbit de la Llei 3/2024 (ELA i altres malalties)",
          desc: "Aquest Reial decret defineix els criteris operatius i el procediment per reconèixer malalties o processos d'alta complexitat i curs irreversible (diferents de l'ELA) que requereixen una agilitació administrativa i una atenció sociosanitària integral. Inclou una llista indicativa de patologies, un qüestionari de verificació i un model de sol·licitud per garantir una millor qualitat de vida i protecció a les persones afectades.",
          url: "https://acampacatalunya.github.io/boe9692025/"
        },
        {
          icon: "⚖️",
          title: "Llei 3/2024: Mesures per millorar la qualitat de vida de persones amb ELA i malalties d'alta complexitat",
          desc: "Aquesta llei estableix tràmits urgents (màxim 3 mesos) per al reconeixement de discapacitat i dependència per a persones amb ELA i altres malalties irreversibles d'alta complexitat. Inclou mesures com el reconeixement automàtic del 33% de discapacitat, protecció per a cuidadors familiars, drets per a electrodependents i millores en l'atenció sociosanitària i la recerca.",
          url: "https://acampacatalunya.github.io/boe32024/"
        },
        {
          icon: "🏥",
          title: "Pla d'atenció a les persones afectades de malaltia de Parkinson i parkinsonismes atípics de Catalunya (2026)",
          desc: "Aquest Pla estableix el full de ruta del Departament de Salut per garantir una atenció integral, equitativa i de proximitat a les persones amb Parkinson i els tres parkinsonismes atípics (AMS, PSP i DCB) i els seus cuidadors. S'estructura en 9 línies estratègiques, 23 projectes i 77 actuacions que abasten des del diagnòstic precoç i el tractament farmacològic i no farmacològic, fins a les cures en fase avançada, el suport a l'entorn familiar i el foment de la recerca.",
          url: "https://acampacatalunya.github.io/papatipics2026/"
        },
        {
          icon: "📝",
          title: "Per definir",
          desc: "Per definir",
          url: "#"
        }
      ]
    },
    // DIAPOSITIVA 20: Kit de Benvinguda (Format professional)
    {
      type: "text-llista",
      icon: "📦",
      title: "Kit de Benvinguda",
      subtitle: "Primer contacte material amb cada nova família associada. Un abraçada en forma de paquet.",
      text: "Què inclou?",
      items: [
        "<strong>📖 Guia pràctica:</strong> Per a famílies i cuidadors",
        "<strong>📇 Directori de recursos:</strong> Centres, professionals, ajudes",
        "<strong>📝 Carta de benvinguda:</strong> Signada per la presidència",
        "<strong>🎗️ Material identitari:</strong> Pin, díptics, targetes",
        "<strong>📞 Contactes directes:</strong> Telèfons d'acompanyament",
        "<strong>🌐 Accés a la web privada:</strong> Zona d'associats"
      ]
    },
    // DIAPOSITIVA 21: Guia pràctica (Format professional)
    {
      type: "text-llista",
      icon: "📘",
      title: "Guia pràctica per a famílies i cuidadors",
      subtitle: "El nostre recurs estrella. Un document viu, actualitzat constantment, que respon les preguntes reals de qui conviu amb una malaltia de Parkinson atípica.",
      text: "Continguts principals:",
      items: [
        "<strong>Què és el Parkinson atípic:</strong> explicació clara, diferències amb el Parkinson clàssic.",
        "<strong>Recorregut diagnòstic:</strong> proves, especialistes, segones opinions.",
        "<strong>Drets socials:</strong> grau de dependència, prestacions, ajudes.",
        "<strong>Recursos assistencials:</strong> centres de dia, residències, atenció domiciliària.",
        "<strong>Cura del cuidador:</strong> prevenció de la sobrecàrrega, grups de suport.",
        "<strong>Aspectes legals:</strong> incapacitat, tutelles, testaments, protecció de dades.",
        "<strong>Final de vida:</strong> cures pal·liatives, voluntats anticipades."
      ]
    },
    // DIAPOSITIVA 22: Possibles activitats
    {
      type: "etiquetes-dinamiques",
      title: "Possibles activitats a oferir",
      gridClass: "grid-4",
      items: [
        { icon: "👥", title: "Grups de suport", desc: "Trobades periòdiques per a cuidadors/es" },
        { icon: "🧠", title: "Xerrades formatives", desc: "Sobre la malaltia, drets, recursos" },
        { icon: "🧘", title: "Tallers terapèutics", desc: "Fisioteràpia, logopèdia, musicoteràpia" },
        { icon: "🚶", title: "Activitats físiques", desc: "Ioga adaptat, tai-txi, caminades" },
        { icon: "🎨", title: "Tallers ocupacionals", desc: "Manualitats, cuina, memòria" },
        { icon: "🏖️", title: "Lleure i respir", desc: "Colònies, sortides, programes de respir" },
        { icon: "💻", title: "Teleassistència", desc: "Acompanyament telefònic i videotrucades" },
        { icon: "📚", title: "Formació de voluntaris", desc: "Escola de voluntariat ACAMPA" }
      ]
    },
    // DIAPOSITIVA 23: Bloc 5 Header (Agafa títol del quadre 4 de l'ordre del dia)
    {
      type: "bloc-header",
      inheritTitleFromAgenda: 4, // Agafa "Comitè Clínic Assessor"
      logoOverride: CONFIG.logoUrl
    },
    // DIAPOSITIVA 24: El Comitè Clínic
    {
      type: "text-llista",
      title: "El Comitè Clínic Assessor",
      subtitle: "Un òrgan consultiu format per professionals de la salut. Per què 'Clínic' i no 'Mèdic'? Perquè la visió ha de ser multidisciplinària.",
      text: "Composició actual:",
      items: [
        "🧠 Neuròlegs/ogues: Fins a 5 especialistes",
        "👩‍⚕️ Infermer/a (ATS): Visió assistencial",
        "🤲 Treballadora social: Recursos i drets",
        "🏃 Fisioterapeuta: Rehabilitació",
        "🧘 Psicòleg/òloga: Suport emocional",
        "🍎 Nutricionista: Alimentació i salut"
      ]
    },
    // DIAPOSITIVA 25: Funcions del Comitè Clínic (Fons blau professional)
    {
      type: "text-llista",
      icon: "🎯",
      title: "Funcions del Comitè Clínic",
      subtitle: "Tasques i coordinació",
      background: "blue",
      items: [
        "Assessorar la Junta en matèria clínica i assistencial.",
        "Validar continguts tècnics de la Guia pràctica i altres publicacions.",
        "Proposar activitats formatives i terapèutiques basades en evidència.",
        "Orientar famílies en casos complexos (a petició de l'equip d'acollida).",
        "Col·laborar en recerca i difusió de coneixement sobre Parkinson atípic.",
        "Formar voluntaris en aspectes sanitaris bàsics.",
        "Representar ACAMPA en fòrums clínics i científics."
      ],
      footerInfo: "📅 Reunions: trimestrals (presencials o telemàtiques) · 📝 Actes: recollides a la memòria anual · 🤝 Coordinació: amb la vocalia de projectes"
    },
    // DIAPOSITIVA 26: Bloc 6 Header (Agafa títol del quadre 5 de l'ordre del dia)
    {
      type: "bloc-header",
      inheritTitleFromAgenda: 5, // Agafa "Full de ruta"
      logoOverride: CONFIG.logoUrl
    },
    // DIAPOSITIVA 27: Full de ruta (3 columnes dinàmiques)
    {
      type: "dues-columnes-text", // El nom es manté per compatibilitat, però ara suporta 3
      title: "Full de ruta 2026-2028",
      col1Title: "🔹 Curt termini (3 mesos)",
      col1Items: [
        "Cobrir vacants a la Junta.",
        "Constituir formalment les comissions de treball.",
        "Actualitzar la Guia pràctica (nova edició).",
        "Reactivar el calendari de subvencions."
      ],
      col2Title: "🔸 Mig termini (6-12 mesos)",
      col2Items: [
        "Posar en marxa els grups de suport per a cuidadors.",
        "Signar convenis amb almenys 2 hospitals i 1 CAP.",
        "Estrenar la nova web amb zona privada d'associats.",
        "Organitzar la 1a Jornada ACAMPA sobre Parkinson atípic."
      ],
      col3Title: "🔷 Llarg termini (1-2 anys)",
      col3Items: [
        "Impulsar un programa propi d'acompanyament domiciliari.",
        "Col·laborar en projectes de recerca clínica.",
        "Ampliar la presència territorial a noves comarques."
      ]
    },
    // DIAPOSITIVA 28: Torn obert de preguntes (amb Formulari i QR)
    {
      type: "tancament-simple",
      title: "Torn obert de preguntes",
      text: "🙋‍♀️🙋‍♂️ La vostra veu és el més important.<br><br>Preguntes, suggeriments, propostes, voluntats de col·laborar... <b>Tot suma. Tot compta.</b><br><br>📝 <i>Recordeu: les actes de l'assemblea es posaran a disposició de tots els associats a la zona privada de la web en els pròxims 15 dies.</i>",
      qrCode: "https://acampacatalunya.github.io/formulari/precspropostes.svg",
      buttonLink: "https://ja.cat/acampa_precspropostes",
      buttonText: "📋 Enviar pregunta o proposta a la Junta"
    },
    // DIAPOSITIVA 29: Gràcies
    {
      type: "gracies",
      title: "Gràcies",
      subtitle: "Per la vostra confiança, el vostre temps i el vostre compromís.",
      frase: "\"Sols som poc. Junts, som ACAMPA.\""
    }
  ]
};
