const aircraftData = {
    "phenom300e": {
        id: "phenom300e",
        name: "Embraer Phenom 300E",
        tagline: "The World's Best-Selling Light Jet, Redefined.",
        price: "Est. $11,500,000",
        priceValue: 11500000,
        capacity: "Up to 11 Occupants (incl. pilot)",
        capacityValue: 11,
        speed: "464 ktas (859 km/h)",
        range: "2,010 NM (3,723 km)",
        year: "2023",
        manufacturer: "Embraer",
        location: "Fort Lauderdale, USA",
        images: [
            "images/plane1.jpg", 
            "images/planelayout.jpg",   
            "images/embrar.jpg", 
            "images/300e.jpg"  
        ],
        specifications: { 
            manufacturer: "Embraer", model: "Phenom 300E", serialNumber: "Contact for details", totalTime: "New", 
            engines: "Pratt & Whitney Canada PW535E1", avionics: "Garmin G3000 Prodigy Touch", 
            mtow: "18,387 lb (8,340 kg)", fuelCapacity: "5,353 lb (2,428 kg)"
        }, 
        features: [  
            "Best-in-class cabin volume", "Largest baggage compartment in its class",
            "Single-pilot operation certified", "Advanced Prodigy Touch Flight Deck",
            "Optional two-place divan", "Iridium Satellite Phone and Wi-Fi"
        ], 
        layoutImage: "images/planelayout.jpg" 
    },
    "g650er": {
        id: "g650er",
        name: "Gulfstream G650ER",
        tagline: "The Benchmark in Ultra-Long-Range Business Aviation.",
        price: "Est. $70,000,000",
        priceValue: 70000000,
        capacity: "Up to 19 Passengers",
        capacityValue: 19,
        speed: "Mach 0.925 (MMO)",
        range: "7,500 NM (13,890 km)",
        year: "2022",
        manufacturer: "Gulfstream",
        location: "Geneva, Switzerland",
        images: [
            "images/plane2.jpg", 
            "images/planelayout.jpg",   
            "images/embrar.jpg", 
            "images/300e.jpg" 
        ],
        specifications: { 
            manufacturer: "Gulfstream Aerospace", model: "G650ER", serialNumber: "Contact for details", totalTime: "Low hours", 
            engines: "Rolls-Royce BR725 A1-12", avionics: "Gulfstream PlaneView II (Honeywell Primus Epic)", 
            mtow: "103,600 lb (46,992 kg)", fuelCapacity: "48,200 lb (21,863 kg)"
        }, 
        features: [  
            "Four living areas", "100% fresh air circulation", "Lowest cabin altitude",
            "High-speed Jet ConneX Ka-band Wi-Fi", "Forward and aft lavatories", "Crew rest area"
        ], 
        layoutImage: "images/planelayout.jpg" 
    },
    "g700": {
        id: "g700",
        name: "Gulfstream G700",
        tagline: "The Epitome of Luxury and Performance.",
        price: "Est. $75,000,000",
        priceValue: 75000000,
        capacity: "Up to 19 Passengers",
        capacityValue: 19,
        speed: "Mach 0.925",
        range: "7,500 NM",
        year: "2024",
        manufacturer: "Gulfstream",
        location: "Savannah, USA",
        images: ["images/plane3.jpg", 
            "images/planelayout.jpg",   
            "images/embrar.jpg", 
            "images/300e.jpg" ], 
        specifications: { manufacturer: "Gulfstream", model: "G700", serialNumber: "TBD", totalTime: "New", engines: "Rolls-Royce Pearl 700", avionics: "Symmetry Flight Deck", mtow: "107,600 lbs", fuelCapacity: "49,400 lbs"}, 
        features: ["Largest cabin in its class", "Circadian lighting system", "Up to five living areas"], 
        layoutImage: "images/planelayout.jpg" 
    },
    "challenger350": {
        id: "challenger350",
        name: "Bombardier Challenger 350",
        tagline: "Best-Selling Super Midsize Jet.",
        price: "Est. $26,000,000",
        priceValue: 26000000,
        capacity: "Up to 10 Passengers",
        capacityValue: 10,
        speed: "Mach 0.83",
        range: "3,200 NM",
        year: "2023",
        manufacturer: "Bombardier",
        location: "Montreal, Canada",
        images: ["images/plane6.jpg", 
            "images/planelayout.jpg",   
            "images/embrar.jpg", 
            "images/300e.jpg" ], 
        specifications: { manufacturer: "Bombardier", model: "Challenger 350", serialNumber: "TBD", totalTime: "New", engines: "Honeywell HTF7350", avionics: "Rockwell Collins Pro Line 21 Advanced", mtow: "40,600 lbs", fuelCapacity: "14,150 lbs"}, 
        features: ["Flat floor design", "Largest-in-class windows", "Advanced sound insulation"], 
        layoutImage: "images/planelayout.jpg" 
    },
    "falcon8x": {
        id: "falcon8x",
        name: "Dassault Falcon 8X",
        tagline: "Tri-Jet Performance and Flexibility.",
        price: "Est. $58,000,000",
        priceValue: 58000000,
        capacity: "Up to 16 Passengers",
        capacityValue: 16,
        speed: "Mach 0.90",
        range: "6,450 NM",
        year: "2022",
        manufacturer: "Dassault",
        location: "Paris, France",
        images: ["images/plane5.jpg", 
            "images/planelayout.jpg",   
            "images/embrar.jpg", 
            "images/300e.jpg" ], 
        specifications: { manufacturer: "Dassault", model: "Falcon 8X", serialNumber: "TBD", totalTime: "Low Hours", engines: "Pratt & Whitney Canada PW307D", avionics: "EASy III Flight Deck", mtow: "73,000 lbs", fuelCapacity: "35,140 lbs"}, 
        features: ["Short-field capability", "Quietest cabin in its class", "Digital Flight Control System"], 
        layoutImage: "images/planelayout.jpg" 
    },
    "praetor600": {
        id: "praetor600",
        name: "Embraer Praetor 600",
        tagline: "Disruptive Technology, Superior Performance.",
        price: "Est. $21,000,000",
        priceValue: 21000000,
        capacity: "Up to 12 Passengers",
        capacityValue: 12,
        speed: "Mach 0.83",
        range: "4,018 NM",
        year: "2023",
        manufacturer: "Embraer",
        location: "Melbourne, USA",
        images: ["images/plane10.jpg", 
            "images/planelayout.jpg",   
            "images/embrar.jpg", 
            "images/300e.jpg" ], 
        specifications: { manufacturer: "Embraer", model: "Praetor 600", serialNumber: "TBD", totalTime: "New", engines: "Honeywell HTF7500E", avionics: "Rockwell Collins Pro Line Fusion", mtow: "42,858 lbs", fuelCapacity: "15,986 lbs"}, 
        features: ["Full fly-by-wire technology", "Best-in-class cabin altitude", "Active turbulence reduction"], 
        layoutImage: "images/planelayout.jpg" 
    },
    "cj4gen2": {
        id: "cj4gen2",
        name: "Cessna Citation CJ4 Gen2",
        tagline: "Light Jet Leader, Evolved.",
        price: "Est. $10,750,000",
        priceValue: 10750000,
        capacity: "Up to 10 Passengers",
        capacityValue: 10,
        speed: "451 ktas",
        range: "2,165 NM",
        year: "2024",
        manufacturer: "Cessna",
        location: "Wichita, USA",
        images: ["images/plane7.jpg", 
            "images/planelayout.jpg",   
            "images/embrar.jpg", 
            "images/300e.jpg" ], 
        specifications: { manufacturer: "Textron Aviation (Cessna)", model: "Citation CJ4 Gen2", serialNumber: "TBD", totalTime: "New", engines: "Williams International FJ44-4A", avionics: "Collins Aerospace Pro Line 21", mtow: "17,110 lbs", fuelCapacity: "5,828 lbs"}, 
        features: ["Enhanced cabin with CoolView skylights", "Wireless cabin management system", "Spacious lavatory"], 
        layoutImage: "images/planelayout.jpg" 
    },
    "pc24": {
        id: "pc24",
        name: "Pilatus PC-24",
        tagline: "The Super Versatile Jet.",
        price: "Est. $11,200,000",
        priceValue: 11200000,
        capacity: "Up to 11 Passengers",
        capacityValue: 11,
        speed: "440 ktas",
        range: "2,000 NM",
        year: "2023",
        manufacturer: "Pilatus",
        location: "Stans, Switzerland",
        images: ["images/plane8.jpg", 
            "images/planelayout.jpg",   
            "images/embrar.jpg", 
            "images/300e.jpg" ], 
        specifications: { manufacturer: "Pilatus Aircraft", model: "PC-24", serialNumber: "TBD", totalTime: "New", engines: "Williams International FJ44-4A", avionics: "Pilatus Advanced Cockpit Environment (ACE)", mtow: "18,300 lbs", fuelCapacity: "5,964 lbs"}, 
        features: ["Operates on unpaved runways", "Large cargo door standard", "Flexible cabin configurations"], 
        layoutImage: "images/planelayout.jpg" 
    },
    "global7500": {
        id: "global7500",
        name: "Bombardier Global 7500",
        tagline: "The World's Largest and Longest Range Business Jet.",
        price: "Est. $78,000,000",
        priceValue: 78000000,
        capacity: "Up to 19 Passengers",
        capacityValue: 19,
        speed: "Mach 0.925",
        range: "7,700 NM",
        year: "2023",
        manufacturer: "Bombardier",
        location: "Toronto, Canada",
        images: ["images/plane4.jpg", 
            "images/planelayout.jpg",   
            "images/embrar.jpg", 
            "images/300e.jpg" ], 
        specifications: { manufacturer: "Bombardier", model: "Global 7500", serialNumber: "TBD", totalTime: "Low Hours", engines: "GE Passport", avionics: "Bombardier Vision Flight Deck", mtow: "114,850 lbs", fuelCapacity: "51,503 lbs"}, 
        features: ["Four true living spaces", "Nuage seating collection", "Permanent master suite with full bed"], 
        layoutImage: "images/planelayout.jpg" 
    },
    "falcon6x": {
        id: "falcon6x",
        name: "Dassault Falcon 6X",
        tagline: "The Widest and Tallest Cabin in its Class.",
        price: "Est. $47,000,000",
        priceValue: 47000000,
        capacity: "Up to 16 Passengers",
        capacityValue: 16,
        speed: "Mach 0.90",
        range: "5,500 NM",
        year: "2024",
        manufacturer: "Dassault",
        location: "Bordeaux, France",
        images: ["images/plane11.jpg", 
            "images/planelayout.jpg",   
            "images/embrar.jpg", 
            "images/300e.jpg" ], 
        specifications: { manufacturer: "Dassault", model: "Falcon 6X", serialNumber: "TBD", totalTime: "New", engines: "Pratt & Whitney PW812D", avionics: "Next-generation EASy IV", mtow: "77,460 lbs", fuelCapacity: "35,140 lbs"}, 
        features: ["Skylight in galley area", "Ultra-efficient aerodynamics", "Advanced noise reduction"], 
        layoutImage: "images/planelayout.jpg" 
    },
    "hondajet_elite_s": {
        id: "hondajet_elite_s",
        name: "HondaJet Elite S",
        tagline: "Performance and Efficiency Redefined in Light Jets.",
        price: "Est. $5,500,000",
        priceValue: 5500000,
        capacity: "Up to 7 Occupants (incl. pilot)",
        capacityValue: 7,
        speed: "422 ktas",
        range: "1,437 NM",
        year: "2023",
        manufacturer: "Honda",
        location: "Greensboro, USA",
        images: ["images/plane12.png", 
            "images/planelayout.jpg",   
            "images/embrar.jpg", 
            "images/300e.jpg" ], 
        specifications: { manufacturer: "Honda Aircraft Company", model: "Elite S", serialNumber: "TBD", totalTime: "New", engines: "GE Honda HF120", avionics: "Garmin G3000", mtow: "10,700 lbs", fuelCapacity: "2,850 lbs"}, 
        features: ["Over-The-Wing Engine Mount", "Quietest cabin in its class", "Advanced aerodynamics"], 
        layoutImage: "images/planelayout.jpg" 
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                preloader.classList.add('hidden');
            }, 300); 
        });
    }

    const navbar = document.getElementById('navbar');
    const navLinks = navbar ? navbar.querySelectorAll('.nav-item') : [];
    const currentPageName = window.location.pathname.split("/").pop() || 'index.html';


    if (navbar) {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled'); 
            } else {
                navbar.classList.remove('scrolled');
            }
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll(); 
    }
    
    navLinks.forEach(link => {
        const linkPageName = link.getAttribute('href').split("/").pop();
        if (linkPageName === currentPageName) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });


    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuIcon = mobileMenuButton ? mobileMenuButton.querySelector('i') : null;

    if (mobileMenuButton && mobileMenu && mobileMenuIcon) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            const isHidden = mobileMenu.classList.contains('hidden');
            mobileMenuIcon.classList.toggle('fa-bars', isHidden);
            mobileMenuIcon.classList.toggle('fa-times', !isHidden);
            document.body.style.overflow = isHidden ? '' : 'hidden'; 
        });

        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                mobileMenuIcon.classList.remove('fa-times');
                mobileMenuIcon.classList.add('fa-bars');
                document.body.style.overflow = '';
            });
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href.length > 1 && document.querySelector(href)) { 
                e.preventDefault();
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    const navbarHeight = navbar ? navbar.offsetHeight : 0;
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
            else if (href === "#") {
                 e.preventDefault();
            }
        });
    });

    const scrollElements = document.querySelectorAll('.scroll-animation');
    const sectionTitles = document.querySelectorAll('.section-title');

    const elementInView = (el, percentageScroll = 100) => {
        if (!el) return false;
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <= 
            (window.innerHeight || document.documentElement.clientHeight) * (percentageScroll / 100)
        );
    };

    const displayScrollElement = (element) => {
        if (element) element.classList.add('visible');
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 85)) { 
                displayScrollElement(el);
            }
        });
        sectionTitles.forEach((el) => {
            if(elementInView(el, 90)) {
                el.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', handleScrollAnimation);
    handleScrollAnimation(); 

    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    if (typeof Swiper !== 'undefined') {
        const featuredSwiperEl = document.querySelector('.featured-aircraft-swiper');
        if (featuredSwiperEl) {
            new Swiper(featuredSwiperEl, {
                loop: true,
                slidesPerView: 1,
                spaceBetween: 20,
                grabCursor: true,
                 autoplay: {
                    delay: 5000, 
                    disableOnInteraction: false, 
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                breakpoints: {
                    768: { 
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1024: { 
                        slidesPerView: 3,
                        spaceBetween: 30,
                    }
                }
            });
        }
    }


    const tabsContainer = document.getElementById('tabs-container');
    if (tabsContainer) {
        const tabButtons = tabsContainer.querySelectorAll('.tab-button');
        const tabContents = document.querySelectorAll('.tab-content');

        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                const targetTab = button.dataset.tab;
                tabButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                tabContents.forEach(content => {
                    content.classList.toggle('hidden', content.id !== `${targetTab}-content`);
                    content.classList.toggle('active', content.id === `${targetTab}-content`);
                });
            });
        });
    }

    if (document.getElementById('contactForm')) {
        const contactForm = document.getElementById('contactForm');
        const successMessage = document.getElementById('formSubmissionSuccess');
        const subjectInput = document.getElementById('subject');

        const params = new URLSearchParams(window.location.search);
        const subjectFromUrl = params.get('subject');
        if (subjectFromUrl && subjectInput) {
            subjectInput.value = subjectFromUrl;
        }

        if (contactForm && successMessage) {
            contactForm.addEventListener('submit', function(event) {
                event.preventDefault(); 

                const name = document.getElementById('name').value;
                const email = document.getElementById('email').value;
                const subjectValue = subjectInput ? subjectInput.value : "N/A"; 
                const message = document.getElementById('message').value;

                if (name && email && message) { 
                    console.log('Form submitted:', { name, email, subject: subjectValue, message });
                    
                    successMessage.style.display = 'block';
                    contactForm.reset(); 
                    if (subjectInput && subjectFromUrl) subjectInput.value = subjectFromUrl; 

                    setTimeout(() => {
                        successMessage.style.display = 'none';
                    }, 5000);
                } else {
                    console.log('Form validation failed. Please fill all required fields.');
                }
            });
        }
    }
    
    if (document.getElementById('aircraft-grid')) {
        const aircraftGrid = document.getElementById('aircraft-grid');
        const manufacturerFilter = document.getElementById('filter-manufacturer');
        const priceRangeFilter = document.getElementById('filter-price-range');
        const capacityFilter = document.getElementById('filter-capacity');
        const applyFiltersButton = document.getElementById('apply-filters-button');
        const noResultsMessage = document.getElementById('no-results-message');
        const paginationContainer = document.getElementById('pagination-container');
        
        const ITEMS_PER_PAGE = 6;
        let currentAircraftPage = 1;
        let currentFilteredAircraft = []; 

        const populateManufacturerFilter = () => {
            if (!aircraftData || !manufacturerFilter) { 
                console.warn("Manufacturer filter or aircraftData (embedded) not found for population.");
                return;
            }
            const manufacturers = new Set();
            Object.values(aircraftData).forEach(jet => {
                if(jet && jet.manufacturer) manufacturers.add(jet.manufacturer);
            });
            
            while (manufacturerFilter.options.length > 1) {
                manufacturerFilter.remove(1);
            }

            manufacturers.forEach(m => {
                const option = document.createElement('option');
                option.value = m;
                option.textContent = m;
                manufacturerFilter.appendChild(option);
            });
        };
        
        const renderAircraftCard = (jet) => {
            const imageUrl = jet.images && jet.images.length > 0 ? jet.images[0] : 'https://placehold.co/600x400/1e293b/3b82f6?text=Image+Unavailable';
            const name = jet.name || "N/A";
            const tagline = jet.tagline || "";
            const price = jet.price || "Contact for Price";
            const capacity = jet.capacity || "N/A";
            const range = jet.range || "N/A";
            const id = jet.id || "unknown";

            return `
                <div class="glassmorphism rounded-xl overflow-hidden shadow-2xl card-hover-effect flex flex-col scroll-animation">
                    <img src="${imageUrl}" alt="${name}" class="w-full h-56 md:h-64 object-cover" onerror="this.onerror=null;this.src='https://placehold.co/600x400/1e293b/3b82f6?text=Image+Error';">
                    <div class="p-6 flex-grow">
                        <h3 class="text-2xl font-semibold mb-2 text-white">${name}</h3>
                        <p class="text-accent-blue-light font-medium mb-2 text-sm">${tagline}</p>
                        <p class="text-gray-400 mb-1 text-sm"><i class="fas fa-dollar-sign mr-2 text-accent-blue"></i>${price}</p>
                        <p class="text-gray-400 mb-1 text-sm"><i class="fas fa-users mr-2 text-accent-blue"></i>${capacity}</p>
                        <p class="text-gray-400 mb-4 text-sm"><i class="fas fa-route mr-2 text-accent-blue"></i>${range}</p>
                    </div>
                    <div class="p-6 pt-0">
                         <a href="aircraft_detail.html?jet=${id}" class="btn-secondary w-full text-center block py-2 rounded-lg font-semibold">View Details</a>
                    </div>
                </div>
            `;
        };

        const displayAircraft = (aircraftList, page = 1) => {
            if (!aircraftGrid || !noResultsMessage) return;
            aircraftGrid.innerHTML = ''; 
            currentAircraftPage = page;
            const start = (page - 1) * ITEMS_PER_PAGE;
            const end = start + ITEMS_PER_PAGE;
            const paginatedItems = aircraftList.slice(start, end);

            if (paginatedItems.length === 0) {
                noResultsMessage.classList.remove('hidden');
                aircraftGrid.classList.add('hidden'); 
            } else {
                noResultsMessage.classList.add('hidden');
                aircraftGrid.classList.remove('hidden'); 
                paginatedItems.forEach(jet => {
                    aircraftGrid.innerHTML += renderAircraftCard(jet);
                });
                const newScrollElements = aircraftGrid.querySelectorAll('.scroll-animation');
                newScrollElements.forEach(el => {
                    el.classList.add('visible'); 
                });
            }
            renderAircraftPagination(aircraftList.length, page);
        };
        
        const renderAircraftPagination = (totalItems, page) => {
            if (!paginationContainer) return;
            paginationContainer.innerHTML = '';
            const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
            if (totalPages <= 1) return; 

            const ul = document.createElement('ul');
            ul.className = 'inline-flex items-center -space-x-px';

            const createPageLink = (pageNum, text, isDisabled = false, isActive = false, isIcon = false) => {
                const li = document.createElement('li');
                const a = document.createElement('a');
                a.href = '#';
                a.className = 'pagination-link';
                if(isIcon) a.innerHTML = text; else a.textContent = text;
                
                if (text.includes('fa-chevron-left')) a.classList.add('rounded-l-lg');
                if (text.includes('fa-chevron-right')) a.classList.add('rounded-r-lg');

                if (isDisabled) {
                    a.classList.add('opacity-50', 'cursor-not-allowed');
                } else {
                    a.onclick = (e) => { e.preventDefault(); displayAircraft(currentFilteredAircraft, pageNum); };
                }
                if (isActive) a.classList.add('active-page');
                li.appendChild(a);
                return li;
            };
            
            ul.appendChild(createPageLink(page - 1, '<i class="fas fa-chevron-left"></i><span class="sr-only">Previous</span>', page === 1, false, true));

            for (let i = 1; i <= totalPages; i++) {
                ul.appendChild(createPageLink(i, i.toString(), false, i === page));
            }
            
            ul.appendChild(createPageLink(page + 1, '<i class="fas fa-chevron-right"></i><span class="sr-only">Next</span>', page === totalPages, false, true));
            
            paginationContainer.appendChild(ul);
        };

        const filterAndDisplayAircraft = () => {
            if (!aircraftData) { 
                console.error("Filter button clicked, but aircraftData (embedded) not available.");
                if(noResultsMessage) {
                    noResultsMessage.textContent = "Aircraft data is currently unavailable. Filters cannot be applied.";
                    noResultsMessage.classList.remove('hidden');
                }
                if(aircraftGrid) aircraftGrid.classList.add('hidden');
                return;
            }
            const selectedManufacturer = manufacturerFilter.value;
            const priceValue = priceRangeFilter.value;
            const capacityValue = capacityFilter.value;

            currentFilteredAircraft = Object.values(aircraftData).filter(jet => {
                if (!jet) return false; 

                const manufacturerMatch = selectedManufacturer === 'all' || (jet.manufacturer && jet.manufacturer === selectedManufacturer);
                
                let priceMatch = true;
                if (priceValue !== 'all') {
                    const [minPriceStr, maxPriceStr] = priceValue.split('-');
                    const minPrice = parseInt(minPriceStr);
                    const maxPrice = parseInt(maxPriceStr);
                    if (!jet.hasOwnProperty('priceValue') || typeof jet.priceValue !== 'number') {
                        priceMatch = false; 
                    } else {
                        priceMatch = jet.priceValue >= minPrice && jet.priceValue <= maxPrice;
                    }
                }

                let capacityMatch = true;
                if (capacityValue !== 'all') {
                    const [minCapacityStr, maxCapacityStr] = capacityValue.split('-');
                    const minCapacity = parseInt(minCapacityStr);
                    const maxCapacity = parseInt(maxCapacityStr);
                     if (!jet.hasOwnProperty('capacityValue') || typeof jet.capacityValue !== 'number') {
                        capacityMatch = false; 
                    } else {
                        capacityMatch = jet.capacityValue >= minCapacity && jet.capacityValue <= maxCapacity;
                    }
                }
                return manufacturerMatch && priceMatch && capacityMatch;
            });
            displayAircraft(currentFilteredAircraft, 1); 
        };
        
        const initAircraftPage = () => {
            if (!aircraftData || Object.keys(aircraftData).length === 0) { 
                console.error("initAircraftPage called but aircraftData (embedded) is still not defined or is empty!");
                if(noResultsMessage) {
                    noResultsMessage.textContent = "Critical error: Aircraft data could not be loaded or is empty.";
                    noResultsMessage.classList.remove('hidden');
                }
                if(aircraftGrid) aircraftGrid.classList.add('hidden');
                if(paginationContainer) paginationContainer.innerHTML = '';
                return;
            }
            
            populateManufacturerFilter();
            currentFilteredAircraft = Object.values(aircraftData); 
            displayAircraft(currentFilteredAircraft, 1);
        };

        if (applyFiltersButton) {
            applyFiltersButton.addEventListener('click', filterAndDisplayAircraft);
        }
        
        initAircraftPage();
    } 

    if (document.getElementById('aircraft-details')) {
        console.log("Aircraft detail page script running (dynamic mode, no Swiper)...");
        const params = new URLSearchParams(window.location.search);
        const jetId = params.get('jet');
        console.log("Attempting to load details for Jet ID from URL:", jetId);

        const mainDetailImageEl = document.getElementById('main-detail-image');
        const thumbnailGalleryEl = document.getElementById('thumbnail-gallery');

        if (typeof aircraftData !== 'undefined') {
            if (jetId && aircraftData[jetId]) {
                const data = aircraftData[jetId];
                console.log("SUCCESS: Data found for Jet ID '"+ jetId + "':", data);
                const aircraftName = data.name || "Aircraft Details";
                
                document.title = `${aircraftName} - Orion Jets`;
                
                const updateElementText = (id, text) => {
                    const el = document.getElementById(id);
                    if (el) { el.textContent = text; } 
                    else { console.error(`Element with ID #${id} not found.`); }
                };

                updateElementText('aircraft-breadcrumb-name', aircraftName);
                updateElementText('aircraft-title', aircraftName);
                updateElementText('aircraft-short-desc', data.tagline || "Premium Aircraft");
                updateElementText('aircraft-price', data.price || "Contact for Price");
                updateElementText('aircraft-capacity', data.capacity || "N/A");
                updateElementText('aircraft-speed', data.speed || "N/A");
                updateElementText('aircraft-range', data.range || "N/A");
                updateElementText('aircraft-year', data.year || "N/A");
                updateElementText('aircraft-location', data.location || "Global Availability");
                
                const inquiryButton = document.getElementById('inquiry-button');
                if (inquiryButton) { 
                    inquiryButton.href = `contact.html?subject=Inquiry%20about%20${encodeURIComponent(aircraftName)}`; 
                } else { console.error("Element #inquiry-button not found"); }

                if (mainDetailImageEl && data.images && data.images.length > 0) {
                    mainDetailImageEl.src = data.images[0];
                    mainDetailImageEl.alt = `${aircraftName} - Main View`;
                    console.log(`Main image set to: ${data.images[0]}`);
                    mainDetailImageEl.onerror = function() {
                        this.onerror=null; 
                        this.src='https://placehold.co/800x600/1e293b/FF0000?text=MAIN+IMAGE+ERROR';
                        console.error(`Failed to load main image: ${data.images[0]}`);
                    };
                } else if (mainDetailImageEl) {
                    mainDetailImageEl.src = 'https://placehold.co/800x600/1e293b/cccccc?text=No+Main+Image';
                    mainDetailImageEl.alt = 'No Main Image Available';
                    console.warn("No main image found for jet:", jetId);
                } else {
                    console.error("Element #main-detail-image not found.");
                }

                if (thumbnailGalleryEl && data.images && data.images.length > 0) {
                    thumbnailGalleryEl.innerHTML = ''; 
                    data.images.forEach((imgUrl, index) => {
                        const thumbImg = document.createElement('img');
                        thumbImg.src = imgUrl;
                        thumbImg.alt = `Thumbnail ${index + 1} for ${aircraftName}`;
                        thumbImg.className = 'static-thumb rounded-md w-full h-auto object-cover aspect-square cursor-pointer opacity-70 hover:opacity-100 border-2 border-transparent hover:border-accent-blue';
                        if (index === 0) {
                            thumbImg.classList.add('ring-accent-blue', 'opacity-100');
                            thumbImg.classList.remove('opacity-70', 'focus:ring-transparent');
                        }
                        thumbImg.onclick = function() {
                            if(mainDetailImageEl) {
                                mainDetailImageEl.src = imgUrl;
                                mainDetailImageEl.alt = `${aircraftName} - View ${index + 1}`;
                                console.log(`Main image changed to: ${imgUrl}`);
                                mainDetailImageEl.onerror = function() { 
                                    this.onerror=null; 
                                    this.src='https://placehold.co/800x600/1e293b/FF0000?text=MAIN+IMAGE+ERROR';
                                    console.error(`Failed to load main image after thumbnail click: ${imgUrl}`);
                                };
                            }
                            document.querySelectorAll('#thumbnail-gallery .static-thumb').forEach(t => {
                                t.classList.remove('ring-accent-blue', 'opacity-100');
                                t.classList.add('opacity-70', 'focus:ring-transparent');
                            });
                            this.classList.add('ring-accent-blue', 'opacity-100');
                            this.classList.remove('opacity-70', 'focus:ring-transparent');
                        };
                        thumbImg.onerror = function() {
                            this.onerror=null;
                            this.src='https://placehold.co/100x100/1e293b/FF0000?text=THUMB+ERR';
                            console.error(`Failed to load thumbnail image: ${imgUrl}`);
                        };
                        thumbnailGalleryEl.appendChild(thumbImg);
                    });
                    console.log("Thumbnails populated.");
                } else if (thumbnailGalleryEl) {
                    thumbnailGalleryEl.innerHTML = '<p class="text-sm text-gray-500 col-span-4 text-center">No additional images.</p>';
                    console.warn("No images for thumbnails for jet:", jetId);
                } else {
                     console.error("Element #thumbnail-gallery not found.");
                }


                const specsList = document.getElementById('specs-list');
                if(specsList && data.specifications) {
                    specsList.innerHTML = ''; 
                    for(const key in data.specifications){
                        const p = document.createElement('p');
                        const formattedKey = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
                        p.innerHTML = `<strong>${formattedKey}:</strong> <span id="spec-${key.toLowerCase()}">${data.specifications[key]}</span>`;
                        specsList.appendChild(p);
                    }
                } else { console.warn("Specs list element or data.specifications not found for jet:", jetId); }

                const featuresList = document.getElementById('features-list');
                if(featuresList && data.features) {
                    featuresList.innerHTML = ''; 
                    data.features.forEach(feature => {
                        const li = document.createElement('li');
                        li.textContent = feature;
                        featuresList.appendChild(li);
                    });
                } else { console.warn("Features list element or data.features not found for jet:", jetId); }
                
                const cabinLayoutImageEl = document.getElementById('cabin-layout-image');
                if(cabinLayoutImageEl) {
                    if (data.layoutImage) {
                        cabinLayoutImageEl.src = data.layoutImage; 
                        cabinLayoutImageEl.alt = `${aircraftName} Cabin Layout`;
                        cabinLayoutImageEl.onerror = function() {
                            this.onerror=null;
                            this.src='https://placehold.co/800x400/111827/FF0000?text=LAYOUT+IMAGE+ERROR';
                            console.error(`Failed to load cabin layout image: ${data.layoutImage}`);
                        };
                    } else {
                        cabinLayoutImageEl.src = 'https://placehold.co/800x400/111827/cccccc?text=Layout+Unavailable';
                        cabinLayoutImageEl.alt = 'Cabin Layout Unavailable';
                        console.warn("data.layoutImage not found for jet:", jetId);
                    }
                } else { console.warn("Cabin layout image element (#cabin-layout-image) not found for jet:", jetId); }


            } else if (jetId) {
                console.warn("Aircraft data NOT found for Jet ID:", jetId, "Available data keys:", Object.keys(aircraftData));
                document.title = `Aircraft Not Found - Orion Jets`;
                const titleEl = document.getElementById('aircraft-title');
                if(titleEl) titleEl.textContent = "Aircraft Not Found";
                const detailsContainer = document.getElementById('aircraft-details');
                if(detailsContainer) detailsContainer.innerHTML = `<div class="text-center py-10 text-gray-400"><p class="text-2xl">Sorry, the requested aircraft (ID: ${jetId}) could not be found.</p><a href="aircraft_listings.html" class="btn-primary mt-6 inline-block">Back to Listings</a></div>`;
            } else {
                console.error("Jet ID is missing from URL on detail page.");
                document.title = `Aircraft Details - Orion Jets`;
                const titleEl = document.getElementById('aircraft-title');
                if(titleEl) titleEl.textContent = "Aircraft Information Unavailable";
                const detailsContainer = document.getElementById('aircraft-details');
                if(detailsContainer) detailsContainer.innerHTML = `<div class="text-center py-10 text-gray-400"><p class="text-2xl">No aircraft specified. Please return to listings.</p><a href="aircraft_listings.html" class="btn-primary mt-6 inline-block">Back to Listings</a></div>`;
            }
        } else {
            console.error("aircraftData object is NOT defined when trying to load detail page. This is a critical error.");
            const detailsContainer = document.getElementById('aircraft-details');
            if(detailsContainer) detailsContainer.innerHTML = `<div class="text-center py-10 text-gray-400"><p class="text-2xl">Critical error: Aircraft data source not found. Unable to display details.</p><a href="aircraft_listings.html" class="btn-primary mt-6 inline-block">Back to Listings</a></div>`;
        }
    }

});
