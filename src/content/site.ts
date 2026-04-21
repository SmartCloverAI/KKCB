import type { Locale } from "@/lib/i18n";

export type NavigationItem = {
  href: string;
  label: string;
};

export type ActionLink = {
  href: string;
  label: string;
  variant?: "primary" | "secondary" | "ghost";
};

export type SiteDictionary = {
  meta: {
    title: string;
    description: string;
  };
  brand: {
    name: string;
    chapter: string;
    tagline: string;
  };
  nav: NavigationItem[];
  hero: {
    eyebrow: string;
    title: string;
    lede: string;
    primaryAction: ActionLink;
    secondaryAction: ActionLink;
    note: string;
    imageId: string;
    highlights: Array<{
      label: string;
      value: string;
    }>;
  };
  chapter: {
    eyebrow: string;
    title: string;
    body: string;
    facts: string[];
    detailLinkLabel: string;
  };
  pillars: {
    eyebrow: string;
    title: string;
    intro: string;
    items: Array<{
      title: string;
      body: string;
      href: string;
      linkLabel: string;
    }>;
  };
  method: {
    eyebrow: string;
    title: string;
    intro: string;
    steps: Array<{
      title: string;
      body: string;
    }>;
  };
  evidence: {
    eyebrow: string;
    title: string;
    intro: string;
    items: Array<{
      title: string;
      body: string;
      href: string;
      source: string;
    }>;
  };
  archive: {
    eyebrow: string;
    title: string;
    intro: string;
    imageIds: string[];
  };
  blog: {
    eyebrow: string;
    title: string;
    intro: string;
    cta: ActionLink;
  };
  finalCta: {
    title: string;
    body: string;
    actions: ActionLink[];
  };
  pages: {
    about: {
      title: string;
      lede: string;
      storyTitle: string;
      storyBody: string[];
      milestones: Array<{
        year: string;
        title: string;
        body: string;
      }>;
    };
    method: {
      title: string;
      lede: string;
      principles: Array<{
        title: string;
        body: string;
      }>;
      quote: string;
    };
    research: {
      title: string;
      lede: string;
      focus: Array<{
        title: string;
        body: string;
      }>;
      inspirations: Array<{
        title: string;
        body: string;
        href: string;
      }>;
    };
    getInvolved: {
      title: string;
      lede: string;
      cards: Array<{
        title: string;
        body: string;
      }>;
      actions: ActionLink[];
    };
    contact: {
      title: string;
      lede: string;
      visitTitle: string;
      visitBody: string[];
      legalTitle: string;
      legalBody: string[];
    };
  };
  footer: {
    mission: string;
    addressLabel: string;
    addressLines: string[];
    legalLines: string[];
    versionLabel: string;
  };
};

export const siteContent: Record<Locale, SiteDictionary> = {
  ro: {
    meta: {
      title: "Kids Kicking Cancer with Budo Romania",
      description:
        "Site bilingv pentru capitolul romanesc Kids Kicking Cancer with Budo: voluntariat in spitale, cercetare, fundraising si povesti despre curaj."
    },
    brand: {
      name: "Kids Kicking Cancer with Budo",
      chapter: "Romania",
      tagline: "Curaj, respiratie si sens in mijlocul tratamentului."
    },
    nav: [
      { href: "/about", label: "Despre" },
      { href: "/method", label: "Metoda" },
      { href: "/research", label: "Cercetare" },
      { href: "/get-involved", label: "Implicare" },
      { href: "/blog", label: "Blog" },
      { href: "/contact", label: "Contact" }
    ],
    hero: {
      eyebrow: "Capitolul romanesc al miscarii Kids Kicking Cancer",
      title: "Transformam momentele de tratament in momente de curaj.",
      lede:
        "KKCB Romania propune o prezenta umana si terapeutica la patul copilului: respiratie, postura, concentrare si sprijin comunitar, intr-un limbaj pe care copiii il pot simti imediat.",
      primaryAction: {
        href: "/get-involved",
        label: "Devino voluntar",
        variant: "primary"
      },
      secondaryAction: {
        href: "/research",
        label: "Vezi directiile de cercetare",
        variant: "secondary"
      },
      note:
        "Construim site-ul ca baza pentru voluntariat, proiecte europene, strangere de fonduri si o crestere continua a capitolului din Romania.",
      imageId: "hero-bedside-punch",
      highlights: [
        { value: "3 directii", label: "voluntariat, cercetare, fundraising" },
        { value: "2 limbi", label: "romana si engleza din prima zi" },
        { value: "1 misiune", label: "mai putina frica, mai multa agentivitate" }
      ]
    },
    chapter: {
      eyebrow: "Identitate locala",
      title: "Un capitol romanesc cu radacini internationale si misiune clara.",
      body:
        "Site-ul trebuie sa spuna din primul ecran cine suntem, de ce existam si de ce metoda Budo merita vizibilitate publica, parteneri medicali si finantare pe termen lung.",
      facts: [
        "Capitol activ in Bucuresti, Sector 3",
        "Autorizare obtinuta in 2025",
        "Parte dintr-o mostenire internationala Kids Kicking Cancer"
      ],
      detailLinkLabel: "Vezi datele oficiale"
    },
    pillars: {
      eyebrow: "Ce construim",
      title: "Trei axe care pot face capitolul romanesc relevant si sustenabil.",
      intro:
        "Am structurat site-ul in jurul activitatilor pe care organizatia vrea sa le creasca, fara sa diluam nucleul terapeutic al metodei.",
      items: [
        {
          title: "Voluntariat in spitale",
          body:
            "Prezentam clar cum arata o interventie la patul copilului, de ce conteaza continuitatea si cum pot intra voluntarii intr-un cadru sigur, disciplinat si empatic.",
          href: "/get-involved",
          linkLabel: "Cum te implici"
        },
        {
          title: "Cercetare si proiecte cu finantare UE",
          body:
            "Creionam o agenda publica pentru studii, parteneriate universitare, granturi si proiecte care pot demonstra mai riguros efectele metodei asupra durerii, stresului si aderentei la tratament.",
          href: "/research",
          linkLabel: "Agenda de cercetare"
        },
        {
          title: "Strangere de fonduri cu sens",
          body:
            "Nu doar cerem donatii; explicam exact ce finanteaza ele: sesiuni la patul copilului, formare, documentare, campanii de awareness si infrastructura de cercetare.",
          href: "/blog",
          linkLabel: "Idei si povesti"
        }
      ]
    },
    method: {
      eyebrow: "Cum functioneaza",
      title: "Budo ca metoda de reglare, nu ca simpla metafora motivationala.",
      intro:
        "Mesajul central al site-ului este ca metoda nu promite miracole. Ea ofera instrumente concrete pe care copilul le poate folosi in timpul procedurilor, intre proceduri si acasa.",
      steps: [
        {
          title: "Respiratie",
          body:
            "Copilul invata sa-si foloseasca respiratia ca frana pentru panica, anticipatie si durere."
        },
        {
          title: "Postura si voce",
          body:
            "Corpul nu mai este doar locul in care se intampla tratamentul, ci si locul din care revine forta personala."
        },
        {
          title: "Comunitate",
          body:
            "Voluntarii, familia si partenerii medicali contribuie la un cadru recognoscibil, coerent si repetabil."
        }
      ]
    },
    evidence: {
      eyebrow: "Inspiratie si credibilitate",
      title: "Site-ul ancoreaza cauza in dovezi, in retele similare si in exemple de fundraising clar structurat.",
      intro:
        "Am folosit surse oficiale si initiative comparabile pentru a modela continutul: metoda terapeutica, paginile de implicare si modul in care cercetarea devine parte vizibila din poveste.",
      items: [
        {
          title: "MATIO / fostul Kids Kicking Cancer",
          body:
            "Organizatia mama pozitioneaza metoda ca interventie non-farmacologica, bazata pe arte martiale terapeutice, cu resurse de cercetare si programe gratuite pentru familii.",
          href: "https://mymatio.org/resources/",
          source: "mymatio.org"
        },
        {
          title: "Children with Cancer UK",
          body:
            "Un model bun pentru felul in care cercetarea, sprijinul pentru familii si awareness-ul pot fi explicate in aceeasi arhitectura de site, fara competitie intre ele.",
          href: "https://www.childrenwithcancer.org.uk/about-us/",
          source: "childrenwithcancer.org.uk"
        },
        {
          title: "World Child Cancer",
          body:
            "O referinta utila pentru limbajul orientat spre sisteme, politici publice si parteneriate internationale, nu doar spre fundraising punctual.",
          href: "https://worldchildcancer.org/mission-vision/",
          source: "worldchildcancer.org"
        }
      ]
    },
    archive: {
      eyebrow: "Memorie vie",
      title: "Arhiva vizuala arata ca programul are istorie, chipuri si continuitate.",
      intro:
        "Am inclus materiale istorice si fotografie documentara pentru a arata ca initiativa romaneasca nu porneste din vid, ci dintr-o genealogie de practica si voluntariat.",
      imageIds: [
        "thumbs-up-bedside",
        "origami-hope",
        "historic-napoli-2013",
        "historic-rome-2012",
        "italian-press"
      ]
    },
    blog: {
      eyebrow: "Blog si continut viu",
      title: "Blogul nu este decor. Este motorul de incredere, invatare si crestere.",
      intro:
        "Am pornit cu articole care pot sustine trei tipuri de relatie: voluntari noi, parteneri institutionali si donatori care vor sa inteleaga clar cauza.",
      cta: {
        href: "/blog",
        label: "Toate articolele",
        variant: "ghost"
      }
    },
    finalCta: {
      title: "Pregatim un site care poate fi imbunatatit continuu, nu doar lansat.",
      body:
        "Scaffold-ul include continut bilingv, blog, galerie media procesata si documentatie pentru urmatoarele iteratii: donatii, newsletter, studii, parteneri medicali si campanii publice.",
      actions: [
        { href: "/get-involved", label: "Vreau sa ajut", variant: "primary" },
        { href: "/contact", label: "Date legale si adresa", variant: "secondary" }
      ]
    },
    pages: {
      about: {
        title: "Despre capitolul din Romania",
        lede:
          "Aici spunem povestea local, dar fara sa pierdem legatura cu istoria internationala a miscarii.",
        storyTitle: "De la mostenirea internationala la un capitol local solid",
        storyBody: [
          "Kids Kicking Cancer with Budo Romania poate folosi site-ul ca punct de convergenta intre memorie, legitimitate si actiune publica. Materialele brute din arhiva arata bedside work, contexte internationale si aparitii in presa care pot sustine acest fir narativ.",
          "Pe pagina de prezentare am prioritizat claritatea: cine suntem, ce fel de metoda propunem, de ce capitolul romanesc merita sprijin si cum poate evolua intr-o organizatie capabila sa livreze programe, sa atraga granturi si sa construiasca o comunitate."
        ],
        milestones: [
          {
            year: "2012",
            title: "Context european",
            body: "Arhiva din Roma si Napoli arata continuitatea practicii si a comunitatii Budo din jurul programului."
          },
          {
            year: "2017-2019",
            title: "Documentarea interventiilor la patul copilului",
            body: "Fotografiile brute ofera o baza puternica pentru storytelling autentic si pentru incredere institutionala."
          },
          {
            year: "2025",
            title: "Autorizarea din Romania",
            body: "Site-ul transforma actul administrativ intr-o identitate publica coerenta si usor de validat."
          }
        ]
      },
      method: {
        title: "Metoda Budo",
        lede:
          "Explicam metoda ca pe un set de practici de reglare si empowerment, nu ca pe un discurs inspirational vag.",
        principles: [
          {
            title: "Instrumente simple, repetabile",
            body: "Respiratia, atentia, gestul si vocea pot fi invatate, repetate si transmise mai departe."
          },
          {
            title: "Adaptare la realitatea spitalului",
            body: "Metoda trebuie prezentata ca flexibila: functioneaza la pat, in sala de tratament, in grupuri mici sau in contexte comunitare."
          },
          {
            title: "Colaborare cu medicina, nu in locul ei",
            body: "Site-ul subliniaza constant ca interventia este complementara, non-farmacologica si compatibila cu planul medical."
          }
        ],
        quote:
          "Copilul nu ramane doar pacientul unei proceduri. Devine participant activ intr-un moment care altfel ar fi definit doar de frica."
      },
      research: {
        title: "Cercetare, granturi si vizibilitate europeana",
        lede:
          "Pagina de cercetare este construita ca punte intre practica de la patul copilului si proiecte serioase cu parteneri clinici, academici si financiatori.",
        focus: [
          {
            title: "Studii pilot in Romania",
            body: "Masurarea durerii, a stresului perceput, a tolerantei la proceduri si a feedback-ului din partea familiilor."
          },
          {
            title: "Consortii europene",
            body: "Parteneriate cu universitati, spitale si ONG-uri pentru granturi orientate spre inovatie sociala si wellbeing pediatric."
          },
          {
            title: "Cercetare aplicata pentru awareness",
            body: "Traducerea rezultatelor in materiale publice, conferinte, blog si campanii care fac metoda inteligibila pentru publicul larg."
          }
        ],
        inspirations: [
          {
            title: "MATIO Research & Resources",
            body: "Model de pagina care aduna studii, resurse si materiale accesibile pentru familii si profesionisti.",
            href: "https://mymatio.org/resources/"
          },
          {
            title: "World Child Cancer Mission & Vision",
            body: "Exemplu bun pentru limbaj orientat spre sisteme, colaborari si schimbare durabila.",
            href: "https://worldchildcancer.org/mission-vision/"
          },
          {
            title: "Dăruiește Viață",
            body: "Reper local pentru comunicarea transparenta a proiectelor pediatrice, fundraising si mobilizare civica.",
            href: "https://www.daruiesteviata.ro/en/proiecte/children-s-call-for-hope"
          }
        ]
      },
      getInvolved: {
        title: "Cum te implici",
        lede:
          "Pagina de implicare trebuie sa converteasca trei tipuri de energie: timp, expertiza si bani.",
        cards: [
          {
            title: "Voluntariat",
            body: "Pentru practicieni Budo, sustinatori logistici, fotografi, traducatori, comunicatori si organizatori de evenimente."
          },
          {
            title: "Parteneriate",
            body: "Pentru spitale, universitati, grant writers, sponsori si companii care cauta proiecte credibile si documentabile."
          },
          {
            title: "Fundraising comunitar",
            body: "Pentru campanii de zi de nastere, challenge-uri sportive, evenimente la scoala sau implicare corporate."
          }
        ],
        actions: [
          { href: "/blog", label: "Vezi idei de campanii", variant: "secondary" },
          { href: "/contact", label: "Datele organizatiei", variant: "ghost" }
        ]
      },
      contact: {
        title: "Date de identificare",
        lede:
          "Am construit o pagina simpla si credibila pentru informatia juridica si punctul fizic de referinta al organizatiei.",
        visitTitle: "Adresa",
        visitBody: [
          "Mămulari 2, Bl. C1, Sc. 2, Et. 2, Ap. 27",
          "Bucuresti, Sector 3",
          "Romania"
        ],
        legalTitle: "Identificare administrativa",
        legalBody: [
          "KIDS KICKING CANCER WITH BUDO",
          "Act autorizare: DOSAR NR. 26674/301/394/26.11.2025",
          "Canalele publice de contact si donatie pot fi adaugate in etapa urmatoare a site-ului."
        ]
      }
    },
    footer: {
      mission:
        "Misiunea noastra este sa oferim copiilor aflati in tratament instrumente de reglare, curaj si apartenenta prin Budo, comunitate si proiecte sustenabile.",
      addressLabel: "Adresa",
      addressLines: [
        "Mămulari 2, Bl. C1, Sc. 2, Et. 2, Ap. 27",
        "Bucuresti, Sector 3, Romania"
      ],
      legalLines: [
        "KIDS KICKING CANCER WITH BUDO",
        "DOSAR NR. 26674/301/394/26.11.2025"
      ],
      versionLabel: "Versiune"
    }
  },
  en: {
    meta: {
      title: "Kids Kicking Cancer with Budo Romania",
      description:
        "Bilingual website for the Romanian chapter of Kids Kicking Cancer with Budo: bedside volunteering, research, fundraising, and stories about courage."
    },
    brand: {
      name: "Kids Kicking Cancer with Budo",
      chapter: "Romania",
      tagline: "Courage, breath, and purpose in the middle of treatment."
    },
    nav: [
      { href: "/about", label: "About" },
      { href: "/method", label: "Method" },
      { href: "/research", label: "Research" },
      { href: "/get-involved", label: "Get Involved" },
      { href: "/blog", label: "Blog" },
      { href: "/contact", label: "Contact" }
    ],
    hero: {
      eyebrow: "The Romanian chapter of the Kids Kicking Cancer movement",
      title: "We turn treatment moments into moments of courage.",
      lede:
        "KKCB Romania brings a human and therapeutic presence to the bedside: breath, posture, focus, and community support translated into a language children can feel immediately.",
      primaryAction: {
        href: "/get-involved",
        label: "Join as a volunteer",
        variant: "primary"
      },
      secondaryAction: {
        href: "/research",
        label: "Explore the research track",
        variant: "secondary"
      },
      note:
        "The site is designed as the operating base for volunteering, European projects, fundraising, and continuous growth of the Romanian chapter.",
      imageId: "hero-bedside-punch",
      highlights: [
        { value: "3 tracks", label: "volunteering, research, fundraising" },
        { value: "2 languages", label: "Romanian and English from day one" },
        { value: "1 mission", label: "less fear, more agency" }
      ]
    },
    chapter: {
      eyebrow: "Local identity",
      title: "A Romanian chapter with international roots and a clear public mission.",
      body:
        "The site has to state from the first screen who we are, why we exist, and why the Budo method deserves public visibility, medical partnerships, and long-term funding.",
      facts: [
        "Operating chapter based in Bucharest, Sector 3",
        "Authorized in 2025",
        "Part of the broader Kids Kicking Cancer legacy"
      ],
      detailLinkLabel: "See official details"
    },
    pillars: {
      eyebrow: "What we are building",
      title: "Three tracks that can make the Romanian chapter relevant and sustainable.",
      intro:
        "The site is structured around the activities the organization wants to grow, without diluting the therapeutic core of the method.",
      items: [
        {
          title: "Hospital volunteering",
          body:
            "We explain what a bedside intervention looks like, why continuity matters, and how volunteers can enter a safe, disciplined, empathic framework.",
          href: "/get-involved",
          linkLabel: "How to help"
        },
        {
          title: "Research and EU-funded projects",
          body:
            "We outline a public agenda for studies, academic partnerships, grants, and projects that can document the method's effects on pain, stress, and treatment resilience.",
          href: "/research",
          linkLabel: "Research agenda"
        },
        {
          title: "Purposeful fundraising",
          body:
            "We do not simply ask for donations. We explain exactly what they can fund: bedside sessions, training, documentation, awareness campaigns, and research infrastructure.",
          href: "/blog",
          linkLabel: "Stories and ideas"
        }
      ]
    },
    method: {
      eyebrow: "How it works",
      title: "Budo as a regulation method, not a motivational slogan.",
      intro:
        "The site's central message is that the method does not promise miracles. It offers practical tools a child can use during procedures, between procedures, and at home.",
      steps: [
        {
          title: "Breath",
          body:
            "Children learn to use breathing as a brake for panic, anticipation, and pain."
        },
        {
          title: "Posture and voice",
          body:
            "The body stops being only the place where treatment happens and becomes the place from which personal strength returns."
        },
        {
          title: "Community",
          body:
            "Volunteers, families, and clinical partners create a recognizable, coherent, repeatable setting."
        }
      ]
    },
    evidence: {
      eyebrow: "Inspiration and credibility",
      title: "The site anchors the cause in evidence, peer initiatives, and clearly structured public engagement.",
      intro:
        "Official sources and comparable organizations informed the structure: therapeutic method, engagement pages, and the way research becomes a visible part of the story.",
      items: [
        {
          title: "MATIO / formerly Kids Kicking Cancer",
          body:
            "The parent organization frames the method as a non-pharmacological therapeutic martial arts intervention backed by research resources and free family programs.",
          href: "https://mymatio.org/resources/",
          source: "mymatio.org"
        },
        {
          title: "Children with Cancer UK",
          body:
            "A strong reference for explaining research, family support, and awareness inside one site architecture without making them compete with each other.",
          href: "https://www.childrenwithcancer.org.uk/about-us/",
          source: "childrenwithcancer.org.uk"
        },
        {
          title: "World Child Cancer",
          body:
            "Useful for system-level language around policy, partnerships, and durable change instead of one-off fundraising alone.",
          href: "https://worldchildcancer.org/mission-vision/",
          source: "worldchildcancer.org"
        }
      ]
    },
    archive: {
      eyebrow: "Living archive",
      title: "The visual archive shows history, faces, and continuity.",
      intro:
        "Historic material and documentary photography show that the Romanian initiative does not start from zero but from a longer genealogy of practice and volunteering.",
      imageIds: [
        "thumbs-up-bedside",
        "origami-hope",
        "historic-napoli-2013",
        "historic-rome-2012",
        "italian-press"
      ]
    },
    blog: {
      eyebrow: "Blog and living content",
      title: "The blog is not decoration. It is the engine for trust, learning, and growth.",
      intro:
        "We started with articles that can support three audiences: new volunteers, institutional partners, and donors who want a clear understanding of the cause.",
      cta: {
        href: "/blog",
        label: "Browse all articles",
        variant: "ghost"
      }
    },
    finalCta: {
      title: "This is a site built for continuous improvement, not a one-off launch.",
      body:
        "The scaffold already includes bilingual content, a blog, processed media, and documentation for the next iterations: donations, newsletter, studies, medical partners, and public campaigns.",
      actions: [
        { href: "/get-involved", label: "I want to help", variant: "primary" },
        { href: "/contact", label: "Legal details and address", variant: "secondary" }
      ]
    },
    pages: {
      about: {
        title: "About the Romanian chapter",
        lede:
          "This page tells the story locally without losing the international history behind the movement.",
        storyTitle: "From international legacy to a credible local chapter",
        storyBody: [
          "Kids Kicking Cancer with Budo Romania can use the site as a convergence point between memory, legitimacy, and public action. The raw archive already shows bedside work, international context, and press coverage strong enough to support that narrative.",
          "The page prioritizes clarity: who we are, what kind of method we bring, why the Romanian chapter deserves support, and how it can evolve into an organization able to deliver programs, attract grants, and build a community."
        ],
        milestones: [
          {
            year: "2012",
            title: "European context",
            body: "Archive material from Rome and Naples shows continuity of practice and Budo community around the program."
          },
          {
            year: "2017-2019",
            title: "Documented bedside work",
            body: "The raw photography provides a strong base for authentic storytelling and institutional trust."
          },
          {
            year: "2025",
            title: "Romanian authorization",
            body: "The website turns an administrative record into a coherent public identity."
          }
        ]
      },
      method: {
        title: "The Budo method",
        lede:
          "We frame the method as regulation and empowerment practice, not vague inspiration.",
        principles: [
          {
            title: "Simple, repeatable tools",
            body: "Breath, attention, gesture, and voice can be learned, repeated, and shared."
          },
          {
            title: "Adapted to hospital reality",
            body: "The method needs to be described as flexible: bedside, treatment rooms, small groups, or community settings."
          },
          {
            title: "Working with medicine, not instead of it",
            body: "The site repeatedly clarifies that the intervention is complementary, non-pharmacological, and compatible with the medical care plan."
          }
        ],
        quote:
          "A child is no longer only the patient inside a procedure. They become an active participant in a moment that would otherwise be defined only by fear."
      },
      research: {
        title: "Research, grants, and European visibility",
        lede:
          "The research page is designed as the bridge between bedside practice and serious projects with clinical, academic, and funding partners.",
        focus: [
          {
            title: "Pilot studies in Romania",
            body: "Tracking pain, perceived stress, procedural tolerance, and family feedback."
          },
          {
            title: "European consortia",
            body: "Partnerships with universities, hospitals, and NGOs for grants focused on social innovation and pediatric wellbeing."
          },
          {
            title: "Applied research for awareness",
            body: "Turning results into public materials, conferences, blog content, and campaigns that make the method legible to wider audiences."
          }
        ],
        inspirations: [
          {
            title: "MATIO Research & Resources",
            body: "A model page gathering studies, resources, and accessible material for families and professionals.",
            href: "https://mymatio.org/resources/"
          },
          {
            title: "World Child Cancer Mission & Vision",
            body: "A good example of system-oriented language around collaboration and durable change.",
            href: "https://worldchildcancer.org/mission-vision/"
          },
          {
            title: "Dăruiește Viață",
            body: "A strong Romanian reference for transparent pediatric project communication, fundraising, and civic mobilization.",
            href: "https://www.daruiesteviata.ro/en/proiecte/children-s-call-for-hope"
          }
        ]
      },
      getInvolved: {
        title: "Get involved",
        lede:
          "This page is built to convert three kinds of energy: time, expertise, and money.",
        cards: [
          {
            title: "Volunteering",
            body: "For Budo practitioners, logistics supporters, photographers, translators, communicators, and event organizers."
          },
          {
            title: "Partnerships",
            body: "For hospitals, universities, grant writers, sponsors, and companies looking for credible, documentable projects."
          },
          {
            title: "Community fundraising",
            body: "For birthday campaigns, sports challenges, school events, or corporate involvement."
          }
        ],
        actions: [
          { href: "/blog", label: "See campaign ideas", variant: "secondary" },
          { href: "/contact", label: "Organization details", variant: "ghost" }
        ]
      },
      contact: {
        title: "Organization details",
        lede:
          "A simple, credible page for legal identification and the physical point of reference of the organization.",
        visitTitle: "Address",
        visitBody: [
          "Mămulari 2, Building C1, Stair 2, Floor 2, Apartment 27",
          "Bucharest, Sector 3",
          "Romania"
        ],
        legalTitle: "Administrative identity",
        legalBody: [
          "KIDS KICKING CANCER WITH BUDO",
          "Authorization record: DOSAR NR. 26674/301/394/26.11.2025",
          "Public contact and donation channels can be added in the next phase of the site."
        ]
      }
    },
    footer: {
      mission:
        "Our mission is to give children in treatment practical tools for regulation, courage, and belonging through Budo, community, and sustainable projects.",
      addressLabel: "Address",
      addressLines: [
        "Mămulari 2, Building C1, Stair 2, Floor 2, Apartment 27",
        "Bucharest, Sector 3, Romania"
      ],
      legalLines: [
        "KIDS KICKING CANCER WITH BUDO",
        "DOSAR NR. 26674/301/394/26.11.2025"
      ],
      versionLabel: "Version"
    }
  }
};

export function getDictionary(locale: Locale) {
  return siteContent[locale];
}
