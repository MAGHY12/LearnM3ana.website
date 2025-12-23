// --- Data Configuration (Real Moroccan Market Prices & Durations) ---
const formations = [
    {
        id: 1,
        title: "Gestion de Projets Agile (Scrum & Kanban)",
        author: "Agile Morocco certified",
        price: 650,
        duration: "12h 45min",
        category: "Management",
        keywords: ["scrum", "kanban", "agile", "gestion", "projet"],
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&auto=format&fit=crop",
        videoId: "W1qF5k1sT5M",
        lessons: [
            "Manifeste Agile & État d'esprit",
            "Scrum : Rôles, Événements et Artefacts",
            "Kanban : Visualisation du flux de travail",
            "Outils de gestion (Jira, Trello, Asana)"
        ],
        documents: [
            { title: "Guide Scrum Officiel (PDF)", url: "#" },
            { title: "Template de Tableau Kanban", url: "#" }
        ]
    },
    {
        id: 2,
        title: "E-commerce & Dropshipping (Marché Marocain)",
        author: "Saad E-com Expert",
        price: 950,
        duration: "20h 30min",
        category: "Marketing",
        keywords: ["e-commerce", "dropshipping", "vente", "shopify", "ads"],
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=600&auto=format&fit=crop",
        videoId: "XW0v1-h8p_8",
        lessons: [
            "Sourcing de produits gagnants au Maroc",
            "Création d'une boutique Shopify optimisée",
            "Publicité Facebook & TikTok Ads (Stratégie)",
            "Logistique & Cash on Delivery (COD)"
        ],
        documents: [
            { title: "Liste des Fournisseurs (Casablanca)", url: "#" },
            { title: "Template de Page Produit", url: "#" }
        ]
    },
    {
        id: 3,
        title: "Marketing Digital Expert (Ads & SEO)",
        author: "Digital Growth Morocco",
        price: 890,
        duration: "24h 45min",
        category: "Marketing",
        keywords: ["seo", "ads", "digital", "marketing", "google"],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
        videoId: "nU-IIXBWlS4",
        lessons: [
            "Stratégie de contenu & Inbound Marketing",
            "Facebook, Instagram & LinkedIn Ads",
            "Google Ads : Réseau de recherche et Display",
            "SEO Technique : Dominer les résultats Google"
        ],
        documents: [
            { title: "Planificateur de Budget Ads (Excel)", url: "#" },
            { title: "Audit SEO Checklist (PDF)", url: "#" }
        ]
    },
    {
        id: 4,
        title: "Copywriting: L'art de vendre avec les mots",
        author: "Reda Copywriter",
        price: 550,
        duration: "08h 50min",
        category: "Marketing",
        keywords: ["copywriting", "vente", "psychologie", "storytelling"],
        image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=600&auto=format&fit=crop",
        videoId: "G6H4D-M0q88",
        lessons: [
            "Les bases de la psychologie de vente",
            "Structure d'une page de vente performante",
            "Email Marketing: Captiver dès l'objet",
            "Storytelling pour les marques"
        ],
        documents: [
            { title: "Swipe File : Titres qui cliquent", url: "#" },
            { title: "Checklist Copywriting", url: "#" }
        ]
    },
    {
        id: 5,
        title: "Intelligence Artificielle pour Business",
        author: "AI Consultant Maroc",
        price: 1200,
        duration: "25h 00min",
        category: "IA",
        keywords: ["ia", "chatgpt", "automation", "midjourney", "business"],
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=600&auto=format&fit=crop",
        videoId: "m_X96-pGv68",
        lessons: [
            "Automatisation avec ChatGPT & Make",
            "Création de visuels avec Midjourney",
            "IA pour le Service Client",
            "Éthique et Futur de l'IA"
        ],
        documents: [
            { title: "Prompt Book : 100+ Prompts Business", url: "#" },
            { title: "Guide Installation Local LLM", url: "#" }
        ]
    },
    {
        id: 6,
        title: "CyberSécurité : Fondamentaux & Protection",
        author: "SafeNet Global",
        price: 800,
        duration: "18h 20min",
        category: "Tech",
        keywords: ["security", "cyber", "protection", "reseau", "data"],
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&auto=format&fit=crop",
        videoId: "inWWhr5tn54",
        lessons: [
            "Menaces actuelles : Phishing, Malware",
            "Sécuriser son réseau domestique et pro",
            "Gestion des identités et accès (IAM)",
            "Chiffrement et Protection des données"
        ],
        documents: [
            { title: "Checklist Sécurité (PDF)", url: "#" },
            { title: "Guide sur l'Authentification 2FA", url: "#" }
        ]
    },
    {
        id: 7,
        title: "Développement Web Modern (HTML/CSS/JS)",
        author: "Code Academy Maroc",
        price: 700,
        duration: "40h 00min",
        category: "Tech",
        keywords: ["web", "html", "css", "js", "frontend", "dev"],
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600&auto=format&fit=crop",
        videoId: "mU6an7qBr-c",
        lessons: [
            "Structure du web : HTML5 sémantique",
            "Design Responsif avec CSS3 & Flexbox",
            "Logique JavaScript : DOM & Events",
            "Déployer son premier site son Netlify"
        ],
        documents: [
            { title: "CheatSheet Front-end", url: "#" },
            { title: "Projet final : Portfolio", url: "#" }
        ]
    }
];

// --- Core Logic ---
document.addEventListener('DOMContentLoaded', () => {

    // 0. Scroll Animations
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('in-view');
        });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));

    // 1. Grid Rendering
    const grid = document.getElementById('grid-container');
    const searchInput = document.getElementById('search-formations');
    const filterBtns = document.querySelectorAll('.filter-btn');

    window.renderGrid = (data) => {
        if (!grid) return;
        grid.innerHTML = '';

        if (data.length === 0) {
            grid.innerHTML = `
                <div style="grid-column: 1/-1; text-align: center; padding: 5rem 0;">
                    <i class="fas fa-search fa-3x" style="color:var(--mint); margin-bottom: 2rem; opacity: 0.3;"></i>
                    <h3 style="color: #666;">Aucune formation ne correspond à votre recherche.</h3>
                    <p style="color: #999;">Essayez avec d'autres mots-clés ou réinitialisez les filtres.</p>
                    <button class="btn btn-outline" style="margin-top: 2rem;" onclick="resetFilters()">Toutes les formations</button>
                </div>
            `;
            return;
        }

        data.forEach((f, idx) => {
            const card = document.createElement('div');
            card.className = 'card animate-on-scroll';
            card.style.transitionDelay = `${idx * 0.05}s`;
            card.innerHTML = `
                <div class="card-img" style="background-image: url('${f.image}')">
                    <div style="position:absolute; bottom:10px; right:10px; background:rgba(0,0,0,0.7); color:#fff; padding:2px 8px; border-radius:4px; font-size:0.75rem;">
                        <i class="far fa-clock"></i> ${f.duration}
                    </div>
                </div>
                <div class="card-content">
                    <div style="font-size: 0.7rem; color: var(--mint); text-transform: uppercase; font-weight: 800; letter-spacing: 1px; margin-bottom: 5px;">${f.category}</div>
                    <h3>${f.title}</h3>
                    <p style="color:#0F3D3E; font-weight:600; font-size:0.9rem; margin-bottom:5px;">
                        <i class="fas fa-building"></i> ${f.author}
                    </p>
                    <span class="card-price">${f.price} MAD</span>
                    <button class="btn btn-primary" style="width:100%; margin-top:1rem;" onclick="openPayment(${f.id})">
                        S'inscrire
                    </button>
                </div>
            `;
            grid.appendChild(card);
            observer.observe(card);
        });

        // Trigger animation for new items
        setTimeout(() => {
            grid.querySelectorAll('.animate-on-scroll').forEach(el => el.classList.add('in-view'));
        }, 50);
    };

    // Initial Render
    if (grid) {
        let displayData = formations;
        if (grid.dataset.limit) {
            displayData = formations.slice(0, parseInt(grid.dataset.limit));
        }
        renderGrid(displayData);
    }

    // Filter Logic
    let currentFilter = 'all';
    let currentSearch = '';

    const performFilter = () => {
        let filtered = formations;

        if (currentFilter !== 'all') {
            filtered = filtered.filter(f => f.category.toLowerCase() === currentFilter.toLowerCase());
        }

        if (currentSearch) {
            const search = currentSearch.toLowerCase();
            filtered = filtered.filter(f =>
                f.title.toLowerCase().includes(search) ||
                f.keywords.some(k => k.toLowerCase().includes(search)) ||
                f.author.toLowerCase().includes(search)
            );
        }

        renderGrid(filtered);
    };

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            currentSearch = e.target.value;
            performFilter();
        });
    }

    if (filterBtns) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                currentFilter = btn.dataset.category;
                performFilter();
            });
        });
    }

    window.resetFilters = () => {
        currentFilter = 'all';
        currentSearch = '';
        if (searchInput) searchInput.value = '';
        filterBtns.forEach(b => {
            b.classList.remove('active');
            if (b.dataset.category === 'all') b.classList.add('active');
        });
        performFilter();
    };

    // 2. Navigation & Overlays
    const navHome = document.getElementById('nav-home');
    // nav-about now uses native Anchor scrolling to #about-us

    if (navHome) {
        navHome.addEventListener('click', (e) => {
            // Check if we are on the Home Page by looking for the .hero section
            // If it exists, we just scroll to top. If not, we allow default navigation.
            if (document.querySelector('.hero')) {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    }

    document.querySelectorAll('.close-overlay').forEach(btn => {
        btn.addEventListener('click', function () {
            this.closest('.overlay-full').classList.remove('active');
        });
    });

    // 3. Vision Buttons Scroll
    const btnVisionStudent = document.getElementById('vision-btn-student');
    const btnVisionCompany = document.getElementById('vision-btn-company');

    if (btnVisionStudent) {
        btnVisionStudent.addEventListener('click', () => {
            overlayDesc.classList.remove('active');
            document.getElementById('formations').scrollIntoView();
        });
    }

    if (btnVisionCompany) {
        btnVisionCompany.addEventListener('click', () => {
            overlayDesc.classList.remove('active');
            openProposer();
        });
    }

    // 4. Post Formation Form

    // 4. Post Formation Form (Overlay Logic)
    window.openProposer = (e) => {
        if (e) e.preventDefault();
        const op = document.getElementById('overlay-proposer');
        if (op) {
            op.classList.add('active');
            nextStep(1); // Reset to step 1
        }
    };

    window.nextStep = (n) => {
        const currentStep = document.querySelector('.proposer-step.active');

        // If moving forward, check validity of the current step
        const currentStepNum = currentStep ? parseInt(currentStep.id.replace('step-', '')) : 0;
        if (n > currentStepNum && currentStep) {
            const inputs = currentStep.querySelectorAll('input, select, textarea');
            let valid = true;
            inputs.forEach(input => {
                if (!input.checkValidity()) {
                    input.reportValidity();
                    valid = false;
                }
            });
            if (!valid) return;
        }

        document.querySelectorAll('.proposer-step').forEach(step => step.classList.remove('active'));
        const target = document.getElementById(`step-${n}`);
        if (target) target.classList.add('active');

        // Update dots
        document.querySelectorAll('.step-dot').forEach((dot, idx) => {
            const stepNum = idx + 1;
            dot.classList.remove('active', 'completed');
            if (stepNum === n) dot.classList.add('active');
            if (stepNum < n) dot.classList.add('completed');
        });
    };

    window.selectTrainPack = (type) => {
        const std = document.getElementById('pack-train-std');
        const pre = document.getElementById('pack-train-pre');
        if (type === 'standard') {
            std.classList.add('selected');
            pre.classList.remove('selected');
        } else {
            pre.classList.add('selected');
            std.classList.remove('selected');
        }
    };

    // Trainer Form Submission
    document.addEventListener('submit', (e) => {
        if (e.target && e.target.id === 'multi-step-proposer') {
            e.preventDefault();
            const form = e.target;

            // Final validation for Step 3
            const currentStep = form.querySelector('.proposer-step.active');
            if (currentStep) {
                const inputs = currentStep.querySelectorAll('input, select, textarea');
                let valid = true;
                inputs.forEach(input => {
                    if (!input.checkValidity()) {
                        input.reportValidity();
                        valid = false;
                    }
                });
                if (!valid) return;
            }

            const btn = form.querySelector('button[type="submit"]');
            if (btn) {
                const originalText = btn.innerHTML;
                btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enregistrement sécurisé...';
                btn.disabled = true;

                setTimeout(() => {
                    // Close proposer
                    const proposerOverlay = document.getElementById('overlay-proposer');
                    if (proposerOverlay) proposerOverlay.classList.remove('active');

                    // Open success
                    const successOverlay = document.getElementById('overlay-success-trainer');
                    if (successOverlay) successOverlay.classList.add('active');

                    // Reset
                    form.reset();
                    btn.innerHTML = originalText;
                    btn.disabled = false;
                    nextStep(1);
                }, 2000);
            }
        }
    });

    const closeProposerBtn = document.querySelector('.close-proposer');
    if (closeProposerBtn) {
        closeProposerBtn.addEventListener('click', () => {
            document.getElementById('overlay-proposer').classList.remove('active');
        });
    }



    // 5. Technical CMI Flow (Pack -> Recap -> Method -> Redirect -> VPC Gateway)
    const overlayPackChoice = document.getElementById('overlay-pack-choice');
    const overlayRecap = document.getElementById('overlay-recap');
    const overlayMethods = document.getElementById('overlay-payment-methods');
    const overlayRedirect = document.getElementById('overlay-redirect');
    const overlayPayment = document.getElementById('overlay-payment');
    const overlay3DS = document.getElementById('overlay-3ds');
    const paymentForm = document.getElementById('payment-form');
    const form3DS = document.getElementById('form-3ds');

    let currentFormationId = null;
    let selectedPackPrice = null;
    let selectedPackName = null;
    let techDetailsVisible = false;

    // A. Initial Open
    window.openPayment = (id) => {
        currentFormationId = id;
        const formation = formations.find(f => f.id === id);

        if (formation) {
            const standardPrice = formation.price;
            const premiumPrice = formation.price + 30;

            const stdPriceEl = document.getElementById('standard-pack-price');
            const prePriceEl = document.getElementById('premium-pack-price');

            if (stdPriceEl) stdPriceEl.innerText = standardPrice;
            if (prePriceEl) prePriceEl.innerText = premiumPrice;
        }

        if (overlayPackChoice) overlayPackChoice.classList.add('active');
    };

    // B. Pack chosen -> Recap
    window.selectPack = (type) => {
        if (overlayPackChoice) overlayPackChoice.classList.remove('active');
        const formation = formations.find(f => f.id === currentFormationId);
        const name = formation ? formation.title : "Formation";
        const basePrice = formation ? formation.price : 0;

        if (type === 'standard') {
            selectedPackName = "Formule Standard (Avec Publicités)";
            selectedPackPrice = basePrice;
        } else {
            selectedPackName = "Formule Premium (Sans Publicités)";
            selectedPackPrice = basePrice + 30; // +30 DH upcharge
        }

        document.getElementById('recap-formation-name').textContent = name;
        document.getElementById('recap-pack-name').textContent = selectedPackName;
        document.getElementById('recap-price').textContent = selectedPackPrice.toFixed(2) + " MAD";

        if (overlayRecap) overlayRecap.classList.add('active');
    };

    // C. Recap -> Payment Method Selection
    window.goToPaymentMethods = () => {
        if (overlayRecap) overlayRecap.classList.remove('active');
        if (overlayMethods) overlayMethods.classList.add('active');
    };

    window.closeRecap = () => {
        if (overlayRecap) overlayRecap.classList.remove('active');
    };

    window.backToRecap = () => {
        if (overlayMethods) overlayMethods.classList.remove('active');
        if (overlayRecap) overlayRecap.classList.add('active');
    };

    // D. Selection -> Redirection State -> VPC Gateway
    window.toggleTechnicalDetails = () => {
        techDetailsVisible = !techDetailsVisible;
        const container = document.getElementById('technical-details-container');
        if (container) container.style.display = techDetailsVisible ? 'block' : 'none';
    };

    window.startRedirection = (method) => {
        if (overlayMethods) overlayMethods.classList.remove('active');
        overlayMethods.classList.remove('active');
        overlayRedirect.classList.add('active');

        // Generate CMI Request Details (VPC Style)
        const orderId = "ORD-" + Math.floor(Math.random() * 100000);
        const contractId = "000" + Math.floor(Math.random() * 90000 + 10000);
        const factureId = "2100" + Math.floor(Math.random() * 90000000);
        const dateStr = new Date().toLocaleString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' });

        // Populate Technical Details popup
        const techList = document.getElementById('tech-params-list');
        if (techList) {
            techList.innerHTML = `
                <div>AMOUNT: ${selectedPackPrice * 100}</div>
                <div>CURRENCY: 504 (MAD)</div>
                <div>ORDER_ID: ${orderId}</div>
                <div>CONTRACT_ID: ${contractId}</div>
                <div>MERCHANT_ID: 600000235</div>
                <div>HASH: 9a7e6d5c... (Secure SHA-512)</div>
                <div>CALLBACK: https://learnm3ana.ma/pay/callback</div>
            `;
        }

        // POPULATE THE REAL CMI GATEWAY (V3)
        const vpcPackName = document.getElementById('vpc-pack-name');
        const vpcAmount = document.getElementById('vpc-amount');
        const vpcTotal = document.getElementById('vpc-total');
        const vpcContract = document.getElementById('cmi-contract-id');
        const vpcFacture = document.getElementById('cmi-facture-id');
        const vpcDate = document.getElementById('cmi-technical-date');

        // Assuming 'selectedFormation' and 'selectedPack' are defined elsewhere or derived from 'currentFormationId' and 'selectedPackName'
        // For this change, I'll use 'selectedPackName' and 'currentFormationId' to find the formation title.
        const selectedFormation = formations.find(f => f.id === currentFormationId);
        const formationTitle = selectedFormation ? selectedFormation.title : "Formation Inconnue";
        const packType = selectedPackName.includes("Standard") ? "STANDARD" : "PREMIUM";


        if (vpcPackName) vpcPackName.innerText = `Formation ${formationTitle} (${packType})`;
        if (vpcAmount) vpcAmount.innerText = `${selectedPackPrice}.00 MAD`;
        if (vpcTotal) vpcTotal.innerText = `${parseFloat(selectedPackPrice).toFixed(2)} DH`;
        if (vpcContract) vpcContract.innerText = contractId;
        if (vpcFacture) vpcFacture.innerText = factureId;
        if (vpcDate) vpcDate.innerText = dateStr;

        // Simulate 3s technical loading
        setTimeout(() => {
            overlayRedirect.classList.remove('active');
            overlayPayment.classList.add('active');
        }, 3000);
    };

    window.cancelPayment = () => {
        if (confirm("Voulez-vous vraiment annuler la transaction ? Nous allons vous rediriger vers le site marchand.")) {
            if (overlayPayment) overlayPayment.classList.remove('active');
        }
    };

    // E. Gateway Submission -> 3D SECURE
    if (paymentForm) {
        paymentForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = paymentForm.querySelector('button[type="submit"]');
            const originalText = btn.innerHTML;

            btn.innerHTML = '<i class="fas fa-shield-alt fa-spin"></i> CONNEXION BANQUE...';
            btn.disabled = true;

            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.disabled = false;
                // DO NOT CLOSE GATEWAY, JUST OVERLAY 3DS
                if (overlay3DS) overlay3DS.classList.add('active');
            }, 2000);
        });
    }

    // F. 3D Secure Confirmation
    if (form3DS) {
        form3DS.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form3DS.querySelector('button');
            btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> VÉRIFICATION OTP...';
            btn.disabled = true;

            setTimeout(() => {
                alert("PAIEMENT RÉUSSI !\n\nVotre banque a confirmé l'identité. La transaction est finalisée.\n\nRedirection vers vos cours...");

                overlay3DS.classList.remove('active');
                overlayPayment.classList.remove('active');

                // Reset for next time
                btn.innerHTML = 'VALIDER ET PAYER';
                btn.disabled = false;
                if (form3DS) form3DS.reset();
                if (paymentForm) paymentForm.reset();

                // Unlock
                const formation = formations.find(f => f.id === currentFormationId);
                if (formation) showCoursePlayer(formation);
            }, 2500);
        });
    }

    // 6. Course Player Logic
    const player = document.getElementById('course-player');
    const btnExit = document.getElementById('btn-exit-player');

    function showCoursePlayer(formation) {
        if (!player) return;

        // Populate Player
        const videoContainer = document.getElementById('video-container');
        const lessonsContainer = document.getElementById('lessons-container');
        const docsContainer = document.getElementById('docs-container');

        // Reset
        videoContainer.innerHTML = '';
        lessonsContainer.innerHTML = '';
        if (docsContainer) docsContainer.innerHTML = '';

        // Handle AD Simulation for Standard Pack
        const isStandard = selectedPackName.includes("Standard");

        if (isStandard) {
            // Show Ad Overlay
            videoContainer.innerHTML = `
                <div id="ad-wrapper" style="width:100%; height:100%; background:#000; display:flex; flex-direction:column; justify-content:center; align-items:center; color:white; position:relative; z-index:1000;">
                    <video autoplay muted loop style="width:100%; height:100%; object-fit:cover; opacity:0.6;">
                        <source src="https://assets.mixkit.co/videos/preview/mixkit-commercial-shooting-of-a-luxury-watch-and-suit-42436-large.mp4" type="video/mp4">
                    </video>
                    <div style="position:absolute; top:20px; left:20px; background:rgba(0,0,0,0.8); padding:10px 20px; border-radius:5px; border-left:4px solid var(--mint);">
                        <div style="font-size:0.7rem; color:var(--mint); text-transform:uppercase; letter-spacing:1px;">Publicité Sponsorisée</div>
                        <div style="font-weight:bold;">Votre cours commence dans <span id="ad-timer">5</span>s</div>
                    </div>
                    <div style="position:absolute; bottom:40px; text-align:center; width:100%;">
                        <p style="font-size:0.9rem; opacity:0.8;">Passez au <strong>Pack Premium (+30 DH)</strong> pour supprimer les publicités.</p>
                    </div>
                </div>
            `;

            let timeLeft = 5;
            const timerInterval = setInterval(() => {
                timeLeft--;
                const timerEl = document.getElementById('ad-timer');
                if (timerEl) timerEl.innerText = timeLeft;
                if (timeLeft <= 0) {
                    clearInterval(timerInterval);
                    injectVideo(formation);
                }
            }, 1000);
        } else {
            injectVideo(formation);
        }

        function injectVideo(f) {
            const videoHtml = `
                <iframe width="100%" height="100%" 
                src="https://www.youtube.com/embed/${f.videoId}?autoplay=1&rel=0" 
                title="YouTube video player" frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen></iframe>
            `;
            videoContainer.innerHTML = videoHtml;
        }

        // Inject Lessons List
        if (formation.lessons) {
            formation.lessons.forEach((lesson, index) => {
                const item = document.createElement('div');
                item.className = 'lesson-item';
                item.style.padding = '15px';
                item.style.borderBottom = '1px solid #333';
                item.style.cursor = 'pointer';
                item.style.color = index === 0 ? 'var(--mint)' : '#ccc';
                item.style.transition = '0.3s';

                item.innerHTML = `
                    <div style="font-size:0.8rem; opacity:0.6;">Leçon ${index + 1}</div>
                    <div style="font-weight:600;">${lesson}</div>
                `;
                lessonsContainer.appendChild(item);
            });
        }

        // Inject Documents List
        if (formation.documents && docsContainer) {
            formation.documents.forEach((doc) => {
                const item = document.createElement('div');
                item.style.padding = '15px';
                item.style.marginBottom = '10px';
                item.style.background = '#222';
                item.style.borderRadius = '4px';
                item.style.display = 'flex';
                item.style.justifyContent = 'space-between';
                item.style.alignItems = 'center';

                item.innerHTML = `
                    <div style="color:#eee; font-size:0.85rem;"><i class="fas fa-file-alt" style="margin-right:10px; color:var(--mint);"></i> ${doc.title}</div>
                    <a href="${doc.url}" class="btn btn-outline" style="font-size:0.7rem; padding:4px 8px; border-radius:3px;">Télécharger</a>
                `;
                docsContainer.appendChild(item);
            });
        }

        // Reset Tab to Lessons
        window.switchPlayerTab('lessons');

        // Show Fullscreen Player
        player.style.display = 'flex';
        player.classList.remove('hidden');
    }

    window.switchPlayerTab = (tab) => {
        const lessons = document.getElementById('lessons-container');
        const docs = document.getElementById('docs-container');
        const tabL = document.getElementById('tab-lessons');
        const tabD = document.getElementById('tab-docs');

        if (tab === 'lessons') {
            if (lessons) lessons.style.display = 'block';
            if (docs) docs.style.display = 'none';
            if (tabL) { tabL.style.color = 'var(--mint)'; tabL.style.borderBottom = '2px solid var(--mint)'; }
            if (tabD) { tabD.style.color = '#888'; tabD.style.borderBottom = 'none'; }
        } else {
            if (lessons) lessons.style.display = 'none';
            if (docs) docs.style.display = 'block';
            if (tabL) { tabL.style.color = '#888'; tabL.style.borderBottom = 'none'; }
            if (tabD) { tabD.style.color = 'var(--mint)'; tabD.style.borderBottom = '2px solid var(--mint)'; }
        }
    };

    if (btnExit) {
        btnExit.addEventListener('click', () => {
            player.style.display = 'none';
            document.getElementById('video-container').innerHTML = '';
        });
    }

    // 7. Contact Modal Logic
    const navContact = document.getElementById('nav-contact');
    const overlayContact = document.getElementById('overlay-contact');
    const closeContactBtn = document.querySelector('.close-contact');
    const contactForm = document.getElementById('contact-form');

    if (navContact && overlayContact) {
        navContact.addEventListener('click', (e) => {
            e.preventDefault();
            overlayContact.classList.add('active');
        });
    }

    const closeContactBtnUnique = document.querySelector('#overlay-contact .close-contact');

    if (closeContactBtnUnique) {
        closeContactBtnUnique.addEventListener('click', () => {
            overlayContact.classList.remove('active');
        });
    }

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button');
            const originalText = btn.innerHTML;

            btn.innerHTML = '<i class="fas fa-paper-plane"></i> Envoi...';
            btn.style.opacity = '0.7';

            setTimeout(() => {
                alert("Message envoyé ! Nous vous répondrons sous 24h.");
                contactForm.reset();
                btn.innerHTML = originalText;
                btn.style.opacity = '1';
                overlayContact.classList.remove('active');
            }, 1500);
        });
    }

    // 8. Authentication Logic (Login/Signup)
    const overlayAuth = document.getElementById('overlay-auth');
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const closeAuthBtn = document.querySelector('.close-auth');

    window.openAuth = (mode) => {
        if (overlayAuth) {
            overlayAuth.classList.add('active');
            switchAuth(mode);
        }
    };

    window.switchAuth = (mode) => {
        const tabL = document.getElementById('tab-login');
        const tabS = document.getElementById('tab-signup');
        const switchText = document.getElementById('auth-switch-text');

        if (mode === 'login') {
            if (loginForm) loginForm.style.display = 'block';
            if (signupForm) signupForm.style.display = 'none';
            if (tabL) tabL.classList.add('active');
            if (tabS) tabS.classList.remove('active');
            if (switchText) {
                switchText.innerHTML = `Pas encore de compte ? <a href="#" onclick="switchAuth('signup'); return false;">Inscrivez-vous</a>`;
            }
        } else {
            if (loginForm) loginForm.style.display = 'none';
            if (signupForm) signupForm.style.display = 'block';
            if (tabL) tabL.classList.remove('active');
            if (tabS) tabS.classList.add('active');
            if (switchText) {
                switchText.innerHTML = `Déjà un compte ? <a href="#" onclick="switchAuth('login'); return false;">Connectez-vous</a>`;
            }
        }
    };

    // Password Toggle Logic
    document.addEventListener('click', (e) => {
        if (e.target && e.target.classList.contains('toggle-password')) {
            const icon = e.target;
            const container = icon.closest('.password-input-wrapper');
            if (container) {
                const input = container.querySelector('input');
                if (input) {
                    if (input.type === 'password') {
                        input.type = 'text';
                        icon.classList.remove('fa-eye');
                        icon.classList.add('fa-eye-slash');
                    } else {
                        input.type = 'password';
                        icon.classList.remove('fa-eye-slash');
                        icon.classList.add('fa-eye');
                    }
                }
            }
        }

        // Social Login Simulation
        if (e.target && e.target.closest('.social-btn')) {
            const btn = e.target.closest('.social-btn');
            const originalText = btn.innerHTML;
            btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Redirection...';
            btn.disabled = true;
            setTimeout(() => {
                alert("Redirection vers le service d'authentification sociale...");
                btn.innerHTML = originalText;
                btn.disabled = false;
            }, 1000);
        }
    });

    if (closeAuthBtn) {
        closeAuthBtn.addEventListener('click', () => {
            overlayAuth.classList.remove('active');
        });
    }

    // Global Close Overlay Listener
    document.addEventListener('click', (e) => {
        if (e.target && e.target.classList.contains('close-overlay')) {
            const overlay = e.target.closest('.overlay-full');
            if (overlay) {
                overlay.classList.remove('active');
            }
        }
    });

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = loginForm.querySelector('button');
            const originalText = btn.innerHTML;
            btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Connexion...';

            setTimeout(() => {
                alert("Connexion réussie ! Bienvenue sur Learn M3ana.");
                overlayAuth.classList.remove('active');
                loginForm.reset();
                btn.innerHTML = originalText;
            }, 1200);
        });
    }

    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = signupForm.querySelector('button');
            const originalText = btn.innerHTML;
            btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Création...';

            setTimeout(() => {
                alert("Compte créé avec succès ! Bienvenue à bord.");
                overlayAuth.classList.remove('active');
                signupForm.reset();
                btn.innerHTML = originalText;
            }, 1500);
        });
    }

});
