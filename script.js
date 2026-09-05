// ============================================================
// VARIABLES GLOBALES
// ============================================================
let currentSlide = 0;
let isInitialized = false;
const container = document.getElementById('presentation-container');
const counter = document.getElementById('slide-counter');

// ============================================================
// FUNCIÓ PRINCIPAL: RENDERITZAR TOTA LA PRESENTACIÓ
// ============================================================
function renderPresentation() {
    container.innerHTML = '';
    
    presentationData.slides.forEach((slide, index) => {
        const div = document.createElement('div');
        
        // Detecció de fons blau (opcional)
        const bgClass = slide.background === 'blue' ? 'slide-bg-blue' : '';
        div.className = `slide ${index === 0 ? 'active' : ''} ${bgClass}`.trim();
        div.id = `slide-${index}`;
        
        let html = '';
        
        // Lògica per heretar títol de l'Ordre del Dia
        let displayTitle = slide.title || '';
        if (slide.inheritTitleFromAgenda !== undefined) {
            displayTitle = getAgendaTitle(slide.inheritTitleFromAgenda);
        }

        switch(slide.type) {
            case 'portada':
                html = `
                    <img src="${slide.logoOverride || CONFIG.logoUrl}" class="logo-header" style="margin: 0 auto; display:block;">
                    <h1 class="slide-title" style="font-size: 3em; margin-top: 1em;">ACAMPA</h1>
                    <h2 class="slide-subtitle">${CONFIG.entitat}</h2>
                    <h3 class="slide-subtitle" style="margin-top: 2em; font-weight: bold; color: var(--color-primary);">${slide.subtitle}</h3>
                    <div style="text-align: center; margin-top: 3em; font-size: 1.2em; color: var(--color-secondary);">
                        <p>📅 <strong>Data:</strong> ${slide.dataReunio}</p>
                        <p>🕒 <strong>Hora:</strong> ${slide.hora}</p>
                        <p>📍 <strong>Lloc:</strong> ${slide.lloc}</p>
                    </div>
                `;
                break;

            case 'ordre-del-dia':
                let agendaItems = slide.items.map(item => {
                    const titleContent = item.targetSlide !== undefined 
                        ? `<a href="#" onclick="goToSlide(${item.targetSlide}); return false;" class="agenda-link">${item.title}</a>`
                        : item.title;
                    
                    return `
                        <div class="card agenda-card">
                            <h3>${titleContent}</h3>
                            <p>${item.summary}</p>
                        </div>
                    `;
                }).join('');
                html = `
                    <h1 class="slide-title">${slide.title}</h1>
                    <div class="content-area">
                        <div class="grid-2" style="margin-top: 2em;">
                            ${agendaItems}
                        </div>
                    </div>
                `;
                break;

            case 'bloc-header':
                html = `
                    <img src="${slide.logoOverride || CONFIG.logoUrl}" class="logo-header" style="margin: 0 auto; display:block;">
                    <h1 class="slide-title" style="font-size: 3.5em; margin-top: 1em;">${displayTitle}</h1>
                `;
                break;

            case 'text-llista':
                let listItems = slide.items.map(item => `<li>${item}</li>`).join('');
                const isBlue = slide.background === 'blue';
                
                html = `
                    <div class="slide-header-professional ${isBlue ? 'header-blue' : ''}">
                        ${slide.icon ? `<span class="slide-icon-large">${slide.icon}</span>` : ''}
                        <div class="slide-header-text">
                            <h1 class="slide-title-professional">${slide.title}</h1>
                            ${slide.subtitle ? `<h2 class="slide-subtitle-professional">${slide.subtitle}</h2>` : ''}
                        </div>
                    </div>
                    <div class="content-area">
                        ${slide.text ? `<p class="intro-text ${isBlue ? 'intro-blue' : ''}">${slide.text}</p>` : ''}
                        <ul class="professional-list ${isBlue ? 'list-blue' : ''}">
                            ${listItems}
                        </ul>
                        ${slide.footerInfo ? `<div class="footer-info ${isBlue ? 'footer-blue' : ''}">${slide.footerInfo}</div>` : ''}
                    </div>
                `;
                break;

            case 'proces-constitutiu':
                html = `
                    <h1 class="slide-title">${slide.title}</h1>
                    <div class="content-area">
                        <table class="data-table">
                            <tr><th>Nom complet</th><td>${slide.nomComplet}</td></tr>
                            <tr><th>Nom reduït</th><td><strong>${slide.nomReduit}</strong></td></tr>
                            <tr><th>Inici procés</th><td>${slide.iniciProces}</td></tr>
                            <tr><th>Reconeixement</th><td>${slide.reconeixement}</td></tr>
                            <tr><th>NIF</th><td>${slide.nif}</td></tr>
                            <tr><th>Certificat Digital</th><td>${slide.certificatDigital}</td></tr>
                            <tr><th>Compte bancari</th><td>${slide.compteBancari}</td></tr>
                            <tr><th>Local social</th><td>${slide.localSocial}</td></tr>
                            <tr><th>Adreça / Població / CP</th><td>${slide.adreca}, ${slide.poblacio} (${slide.codiPostal})</td></tr>
                            <tr><th>Telèfon</th><td>${slide.telefon}</td></tr>
                            <tr><th>Domini web</th><td>${slide.dominiWeb}</td></tr>
                            <tr><th>Correus electrònics</th><td>${slide.email1} <br> ${slide.email2}</td></tr>
                        </table>
                    </div>
                `;
                break;

            case 'organigrama':
                let orgItems = slide.estructura.map((item, i) => `
                    <div class="card" style="text-align: center; border-left: none; border-top: 4px solid var(--color-accent);">
                        <h3>Nivell ${i + 1}</h3>
                        <p style="font-weight: bold; font-size: 1.1em;">${item.nivell}</p>
                    </div>
                `).join('');
                html = `
                    <h1 class="slide-title">${slide.title}</h1>
                    <div class="content-area">
                        <div class="grid-2" style="max-width: 800px; margin: 2em auto;">
                            ${orgItems}
                        </div>
                    </div>
                `;
                break;

            case 'taula-junta':
                let rows = slide.membres.map(m => `
                    <tr>
                        <td><strong>${m.carrec}</strong></td>
                        <td>${m.persona}</td>
                        <td>${m.funcions}</td>
                    </tr>
                `).join('');
                html = `
                    <h1 class="slide-title">${slide.title}</h1>
                    <h2 class="slide-subtitle">${slide.subtitle}</h2>
                    <div class="content-area">
                        <table class="data-table">
                            <thead>
                                <tr>
                                    <th style="width: 25%;">Càrrec</th>
                                    <th style="width: 25%;">Persona</th>
                                    <th style="width: 50%;">Funcions principals</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${rows}
                            </tbody>
                        </table>
                    </div>
                `;
                break;

            case 'etiquetes-dinamiques':
                let labels = slide.items.map(item => {
                    const linkHtml = item.url 
                        ? `<a href="${item.url}" target="_blank" class="doc-link" title="Obrir document en una nova pestanya">🔗 Consultar document</a>` 
                        : '';
                    
                    return `
                        <div class="label-item">
                            <span class="icon">${item.icon}</span>
                            <strong>${item.title}</strong>
                            <span>${item.desc}</span>
                            ${linkHtml}
                        </div>
                    `;
                }).join('');
                
                html = `
                    <h1 class="slide-title">${slide.title}</h1>
                    ${slide.subtitle ? `<h2 class="slide-subtitle">${slide.subtitle}</h2>` : ''}
                    <div class="content-area">
                        <div class="${slide.gridClass || 'grid-3'}">
                            ${labels}
                        </div>
                        ${slide.footerText ? `<p style="text-align: center; margin-top: 2em; font-weight: bold; color: var(--color-primary);">${slide.footerText}</p>` : ''}
                    </div>
                `;
                break;

            case 'dues-columnes-especific':
                let col1 = slide.col1Items.map(i => `<li>${i}</li>`).join('');
                let col2 = slide.col2Items.map(i => `<li>${i}</li>`).join('');
                html = `
                    <h1 class="slide-title">${slide.title}</h1>
                    <div class="content-area">
                        <div class="grid-2">
                            <div class="card">
                                <h3>${slide.col1Title}</h3>
                                <ul style="margin-left: 1.5em; margin-top: 1em; line-height: 1.8;">${col1}</ul>
                            </div>
                            <div class="card">
                                <h3>${slide.col2Title}</h3>
                                <ul style="margin-left: 1.5em; margin-top: 1em; line-height: 1.8;">${col2}</ul>
                            </div>
                        </div>
                    </div>
                `;
                break;

            case 'dues-columnes-text':
                let c1 = slide.col1Items.map(i => `<li>${i}</li>`).join('');
                let c2 = slide.col2Items ? slide.col2Items.map(i => `<li>${i}</li>`).join('') : '';
                let c3 = slide.col3Items ? slide.col3Items.map(i => `<li>${i}</li>`).join('') : '';
                
                // Detecta automàticament si cal usar 2 o 3 columnes
                let gridClass = slide.col3Title ? 'grid-3' : 'grid-2';
                
                html = `
                    <h1 class="slide-title">${slide.title}</h1>
                    ${slide.subtitle ? `<h2 class="slide-subtitle">${slide.subtitle}</h2>` : ''}
                    <div class="content-area">
                        <div class="${gridClass}">
                            <div class="card">
                                <h3>${slide.col1Title}</h3>
                                <ul style="margin-left: 1.5em; margin-top: 1em; line-height: 1.8;">${c1}</ul>
                            </div>
                            ${slide.col2Title ? `
                            <div class="card">
                                <h3>${slide.col2Title}</h3>
                                <ul style="margin-left: 1.5em; margin-top: 1em; line-height: 1.8;">${c2}</ul>
                            </div>` : ''}
                            ${slide.col3Title ? `
                            <div class="card">
                                <h3>${slide.col3Title}</h3>
                                <ul style="margin-left: 1.5em; margin-top: 1em; line-height: 1.8;">${c3}</ul>
                            </div>` : ''}
                        </div>
                    </div>
                `;
                break;

            case 'tancament-simple':
                // Genera el codi QR si existeix la propietat
                const qrHtml = slide.qrCode 
                    ? `<div class="qr-container">
                         <img src="${slide.qrCode}" alt="Codi QR del formulari" class="qr-image">
                         <p class="qr-text">Escaneja el codi QR amb el mòbil</p>
                       </div>` 
                    : '';
                
                // Genera el botó d'enllaç si existeix la propietat
                const buttonHtml = slide.buttonLink 
                    ? `<a href="${slide.buttonLink}" target="_blank" class="form-button">${slide.buttonText || 'Obrir formulari'}</a>` 
                    : '';

                html = `
                    <h1 class="slide-title">${slide.title}</h1>
                    <div class="content-area" style="text-align: center; font-size: 1.2em; line-height: 1.8; margin-top: 1em;">
                        ${slide.text}
                        ${qrHtml}
                        ${buttonHtml}
                    </div>
                `;
                break;
            case 'gracies':
                html = `
                    <h1 class="slide-title" style="font-size: 3em;">${slide.title}</h1>
                    <h2 class="slide-subtitle">${slide.subtitle}</h2>
                    <div class="content-area" style="text-align: center; margin-top: 3em;">
                        <p style="font-size: 1.5em; color: var(--color-primary); font-style: italic; margin-bottom: 2em;">${slide.frase}</p>
                        <p style="font-size: 1.2em;">📧 ${CONFIG.email}</p>
                        <p style="font-size: 1.2em;">⚕️ ${CONFIG.entitat}</p>
                    </div>
                `;
                break;
        }
        
        div.innerHTML = html;
        container.appendChild(div);
    });
    
    updateCounter();
}

// ============================================================
// FUNCIONS AUXILIARS
// ============================================================
function getAgendaTitle(index) {
    return presentationData.slides[1].items[index].title;
}

function updateCounter() {
    const total = document.querySelectorAll('.slide').length;
    counter.textContent = `${currentSlide + 1} / ${total}`;
}

// ============================================================
// NAVEGACIÓ
// ============================================================
function changeSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    if (slides.length === 0) return;
    
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    updateCounter();
}

function goToSlide(index) {
    const slides = document.querySelectorAll('.slide');
    if (index >= 0 && index < slides.length) {
        slides[currentSlide].classList.remove('active');
        currentSlide = index;
        slides[currentSlide].classList.add('active');
        updateCounter();
    }
}

function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => {
            console.log(`Error en activar pantalla completa: ${err.message}`);
        });
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}

// ============================================================
// INICIALITZACIÓ (amb protecció contra duplicats)
// ============================================================
function inicialitzar() {
    if (isInitialized) return; // Evita executar-ho dues vegades
    isInitialized = true;
    
    renderPresentation();
    
    // ÚNIC event listener de teclat
    document.addEventListener('keydown', (e) => {
        // Ignorar si s'està escrivint en un input o textarea
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
        
        switch(e.key) {
            case 'ArrowRight':
            case ' ':
                e.preventDefault();
                changeSlide(1);
                break;
            case 'ArrowLeft':
                e.preventDefault();
                changeSlide(-1);
                break;
            case 'f':
            case 'F':
                toggleFullscreen();
                break;
            case 'Home':
                e.preventDefault();
                goToSlide(0);
                break;
            case 'End':
                e.preventDefault();
                goToSlide(presentationData.slides.length - 1);
                break;
        }
    });
}

// Executar quan el DOM estigui llest
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inicialitzar);
} else {
    inicialitzar();
}
