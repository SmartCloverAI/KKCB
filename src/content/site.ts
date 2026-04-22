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
      referenceLinkLabel: string;
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
    legalLabel: string;
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
        "Prezentare bilingva a capitolului romanesc Kids Kicking Cancer with Budo: voluntariat in spitale, cercetare, strangere de fonduri si povesti despre curaj."
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
        "Organizatia reuneste voluntariatul in spitale, cercetarea aplicata si mobilizarea de resurse in sprijinul copiilor aflati in tratament.",
      imageId: "hero-bedside-punch",
      highlights: [
        { value: "3 directii", label: "voluntariat, cercetare, strangere de fonduri" },
        { value: "Bilingv", label: "romana si engleza" },
        { value: "1 misiune", label: "curaj, reglare si sprijin" }
      ]
    },
    chapter: {
      eyebrow: "Identitate locala",
      title: "Un capitol romanesc cu radacini internationale si misiune clara.",
      body:
        "Prezentam misiunea organizatiei, legatura cu miscarea internationala si modurile in care metoda Budo poate fi sustinuta in Romania prin voluntariat, parteneriate si finantare responsabila.",
      facts: [
        "Capitol activ in Bucuresti, Sector 3",
        "Autorizare obtinuta in 2025",
        "Parte dintr-o mostenire internationala Kids Kicking Cancer"
      ],
      detailLinkLabel: "Vezi datele oficiale"
    },
    pillars: {
      eyebrow: "Directii de actiune",
      title: "Trei directii care sustin dezvoltarea capitolului romanesc.",
      intro:
        "Activitatea organizatiei urmareste trei directii complementare, toate legate de interventia terapeutica de la patul copilului.",
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
            "Urmarim o agenda publica de studii, parteneriate universitare, granturi si proiecte care pot documenta mai riguros efectele metodei asupra durerii, stresului si tolerantei la tratament.",
          href: "/research",
          linkLabel: "Agenda de cercetare"
        },
        {
          title: "Strangere de fonduri cu sens",
          body:
            "Aratam clar ce pot sustine donatiile: sesiuni la patul copilului, formare, documentare responsabila, campanii publice si initiative de cercetare.",
          href: "/blog",
          linkLabel: "Idei si povesti"
        }
      ]
    },
    method: {
      eyebrow: "Cum functioneaza",
      title: "Budo ca metoda de reglare, nu ca simpla metafora motivationala.",
      intro:
        "Metoda nu promite miracole. Ea ofera instrumente concrete pe care copilul le poate exersa in timpul procedurilor, intre proceduri si in afara spitalului.",
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
      title: "Cauza este ancorata in dovezi, initiative comparabile si practici transparente de implicare publica.",
      intro:
        "Resursele si organizatiile de mai jos ofera context pentru felul in care terapia complementara, cercetarea si implicarea comunitara pot fi prezentate cu rigoare.",
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
            "Un reper util pentru felul in care cercetarea, sprijinul pentru familii si campaniile publice pot fi explicate coerent.",
          href: "https://www.childrenwithcancer.org.uk/about-us/",
          source: "childrenwithcancer.org.uk"
        },
        {
          title: "World Child Cancer",
          body:
            "O referinta utila pentru limbajul orientat spre sisteme, politici publice si parteneriate internationale, nu doar spre campanii punctuale de strangere de fonduri.",
          href: "https://worldchildcancer.org/mission-vision/",
          source: "worldchildcancer.org"
        }
      ]
    },
    archive: {
      eyebrow: "Memorie vie",
      title: "Arhiva vizuala arata ca programul are istorie, chipuri si continuitate.",
      intro:
        "Materialele istorice si fotografia documentara arata ca initiativa din Romania se inscrie intr-o continuitate mai larga de practica, voluntariat si colaborare internationala.",
      imageIds: [
        "thumbs-up-bedside",
        "team-with-student",
        "founder-raby",
        "historic-rome-2012",
        "italian-press"
      ]
    },
    blog: {
      eyebrow: "Actualizari si perspective",
      title: "Articole care ofera context, exemple si continuitate.",
      intro:
        "Publicam texte despre voluntariat, metoda Budo, cercetare si strangere de fonduri pentru familii, voluntari, parteneri si sustinatori.",
      cta: {
        href: "/blog",
        label: "Toate articolele",
        variant: "ghost"
      }
    },
    finalCta: {
      title: "Sustine dezvoltarea capitolului din Romania.",
      body:
        "KKCB Romania isi propune sa consolideze voluntariatul in spitale, parteneriatele de cercetare si campaniile de strangere de fonduri care pot sustine activitatea pe termen lung.",
      actions: [
        { href: "/get-involved", label: "Vreau sa ajut", variant: "primary" },
        { href: "/contact", label: "Date legale si adresa", variant: "secondary" }
      ]
    },
    pages: {
      about: {
        title: "Despre capitolul din Romania",
        lede:
          "Povestea capitolului romanesc ramane legata de istoria internationala a miscarii si de experienta acumulata in interventiile documentate pana acum.",
        storyTitle: "De la mostenirea internationala la un capitol local solid",
        storyBody: [
          "Arhiva fotografica si documentara arata interventii la patul copilului, contexte internationale si aparitii publice care ofera continuitate si legitimitate demersului din Romania.",
          "Capitolul romanesc isi afirma misiunea printr-o metoda complementara, o comunitate de voluntari si o deschidere spre parteneriate clinice, academice si civice."
        ],
        milestones: [
          {
            year: "2012",
            title: "Context european",
            body: "Arhiva europeana arata continuitatea practicii si a comunitatii Budo din jurul programului."
          },
          {
            year: "2017-2019",
            title: "Documentarea interventiilor la patul copilului",
            body: "Fotografiile documentare surprind prezenta voluntarilor si aplicarea metodei in mediul spitalicesc."
          },
          {
            year: "2025",
            title: "Autorizarea din Romania",
            body: "Autorizarea din Romania a oferit un cadru juridic clar pentru dezvoltarea organizatiei."
          }
        ]
      },
      method: {
        title: "Metoda Budo",
        lede:
          "Prezentam metoda ca pe un set de practici de reglare emotionala si participare activa, nu ca pe un discurs inspirational vag.",
        principles: [
          {
            title: "Instrumente simple, repetabile",
            body: "Respiratia, atentia, gestul si vocea pot fi invatate, repetate si transmise mai departe."
          },
          {
            title: "Adaptare la realitatea spitalului",
            body: "Metoda se adapteaza contextului medical: la patul copilului, in sala de tratament, in grupuri mici sau in contexte comunitare."
          },
          {
            title: "Colaborare cu medicina, nu in locul ei",
            body: "Interventia este complementara, non-farmacologica si compatibila cu planul medical."
          }
        ],
        quote:
          "Copilul nu ramane doar pacientul unei proceduri. Devine participant activ intr-un moment care altfel ar fi definit doar de frica."
      },
      research: {
        title: "Cercetare, granturi si vizibilitate europeana",
        lede:
          "KKCB Romania urmareste sa dezvolte proiecte de cercetare impreuna cu parteneri clinici, academici si institutionali.",
        referenceLinkLabel: "Vezi referinta",
        focus: [
          {
            title: "Studii pilot in Romania",
            body: "Masurarea durerii, a stresului perceput, a tolerantei la proceduri si a feedback-ului din partea familiilor."
          },
          {
            title: "Consortii europene",
            body: "Parteneriate cu universitati, spitale si ONG-uri pentru granturi orientate spre inovatie sociala si bunastare pediatrica."
          },
          {
            title: "Cercetare aplicata pentru vizibilitate publica",
            body: "Traducerea rezultatelor in materiale publice, conferinte, blog si campanii care fac metoda inteligibila pentru publicul larg."
          }
        ],
        inspirations: [
          {
            title: "MATIO Research & Resources",
            body: "Resurse care reunesc studii, materiale accesibile si context util pentru familii si profesionisti.",
            href: "https://mymatio.org/resources/"
          },
          {
            title: "World Child Cancer Mission & Vision",
            body: "Exemplu bun pentru limbaj orientat spre sisteme, colaborari si schimbare durabila.",
            href: "https://worldchildcancer.org/mission-vision/"
          },
          {
            title: "Dăruiește Viață",
            body: "Reper local pentru comunicarea transparenta a proiectelor pediatrice, strangere de fonduri si mobilizare civica.",
            href: "https://www.daruiesteviata.ro/en/proiecte/children-s-call-for-hope"
          }
        ]
      },
      getInvolved: {
        title: "Cum te implici",
        lede:
          "Organizatia poate fi sprijinita prin timp, expertiza profesionala si resurse financiare.",
        cards: [
          {
            title: "Voluntariat",
            body: "Pentru practicieni Budo, sustinatori logistici, fotografi, traducatori, comunicatori si organizatori de evenimente."
          },
          {
            title: "Parteneriate",
            body: "Pentru spitale, universitati, specialisti in scriere de granturi, sponsori si companii care cauta proiecte credibile si documentabile."
          },
          {
            title: "Fundraising comunitar",
            body: "Pentru campanii de zi de nastere, provocari sportive, evenimente la scoala sau implicarea companiilor."
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
          "Mai jos sunt prezentate datele juridice si adresa organizatiei.",
        visitTitle: "Adresa",
        visitBody: [
          "Mămulari 2, Bl. C1, Sc. 2, Et. 2, Ap. 27",
          "Bucuresti, Sector 3",
          "Romania"
        ],
        legalTitle: "Identificare administrativa",
        legalBody: [
          "KIDS KICKING CANCER WITH BUDO",
          "Act autorizare: DOSAR NR. 26674/301/394/26.11.2025"
        ]
      }
    },
    footer: {
      mission:
        "Misiunea noastra este sa oferim copiilor aflati in tratament instrumente de reglare, curaj si apartenenta prin Budo, comunitate si proiecte sustenabile.",
      addressLabel: "Adresa",
      legalLabel: "Date legale",
      addressLines: [
        "Mămulari 2, Bl. C1, Sc. 2, Et. 2, Ap. 27",
        "Bucuresti, Sector 3, Romania"
      ],
      legalLines: [
        "KIDS KICKING CANCER WITH BUDO",
        "DOSAR NR. 26674/301/394/26.11.2025"
      ],
      versionLabel: "Versiune publica"
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
        label: "Explore research priorities",
        variant: "secondary"
      },
      note:
        "The organization brings together hospital volunteering, applied research, and resource mobilization in support of children undergoing treatment.",
      imageId: "hero-bedside-punch",
      highlights: [
        { value: "3 priorities", label: "volunteering, research, fundraising" },
        { value: "Bilingual", label: "Romanian and English" },
        { value: "1 mission", label: "courage, regulation, and support" }
      ]
    },
    chapter: {
      eyebrow: "Local identity",
      title: "A Romanian chapter with international roots and a clear public mission.",
      body:
        "We present the chapter's mission, its connection to the international movement, and the ways the Budo method can be supported in Romania through volunteering, partnerships, and responsible funding.",
      facts: [
        "Operating chapter based in Bucharest, Sector 3",
        "Authorized in 2025",
        "Part of the broader Kids Kicking Cancer legacy"
      ],
      detailLinkLabel: "See official details"
    },
    pillars: {
      eyebrow: "Focus areas",
      title: "Three priorities that support the Romanian chapter.",
      intro:
        "The organization's work follows three complementary priorities, all connected to bedside therapeutic support.",
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
            "We pursue a public agenda of studies, academic partnerships, grants, and projects that can document the method's effects on pain, stress, and treatment resilience.",
          href: "/research",
          linkLabel: "Research priorities"
        },
        {
          title: "Purposeful fundraising",
          body:
            "We explain what donations can support: bedside sessions, training, responsible documentation, public campaigns, and research initiatives.",
          href: "/blog",
          linkLabel: "Stories and ideas"
        }
      ]
    },
    method: {
      eyebrow: "How it works",
      title: "Budo as a regulation method, not a motivational slogan.",
      intro:
        "The method does not promise miracles. It offers practical tools a child can practice during procedures, between procedures, and outside the hospital.",
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
      title: "The chapter is grounded in evidence, peer initiatives, and transparent public engagement.",
      intro:
        "The sources and organizations below provide context for the way complementary therapy, research, and community engagement can be presented with rigor.",
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
            "A useful reference for explaining research, family support, and public awareness in a coherent way.",
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
        "Historic material and documentary photography show that the Romanian initiative belongs to a wider continuity of practice, volunteering, and international collaboration.",
      imageIds: [
        "thumbs-up-bedside",
        "team-with-student",
        "founder-raby",
        "historic-rome-2012",
        "italian-press"
      ]
    },
    blog: {
      eyebrow: "Updates and perspectives",
      title: "Articles that offer context, examples, and continuity.",
      intro:
        "The blog shares writing on bedside volunteering, the Budo method, research, and fundraising for families, volunteers, partners, and supporters.",
      cta: {
        href: "/blog",
        label: "Browse all articles",
        variant: "ghost"
      }
    },
    finalCta: {
      title: "Support the growth of the Romanian chapter.",
      body:
        "KKCB Romania aims to strengthen hospital volunteering, research partnerships, and fundraising efforts that can sustain the work over time.",
      actions: [
        { href: "/get-involved", label: "I want to help", variant: "primary" },
        { href: "/contact", label: "Legal details and address", variant: "secondary" }
      ]
    },
    pages: {
      about: {
        title: "About the Romanian chapter",
        lede:
          "The story of the Romanian chapter remains connected to the international history of the movement and to the experience documented so far.",
        storyTitle: "From international legacy to a credible local chapter",
        storyBody: [
          "The photographic and documentary archive shows bedside interventions, international context, and public visibility that give continuity and legitimacy to the Romanian effort.",
          "The Romanian chapter defines its mission through a complementary method, a volunteer community, and openness to clinical, academic, and civic partnerships."
        ],
        milestones: [
          {
            year: "2012",
            title: "European context",
            body: "European archive material shows continuity of practice and Budo community around the program."
          },
          {
            year: "2017-2019",
            title: "Documented bedside work",
            body: "Documentary photography captures the presence of volunteers and the use of the method in hospital settings."
          },
          {
            year: "2025",
            title: "Romanian authorization",
            body: "Romanian authorization established a clear legal framework for the organization's development."
          }
        ]
      },
      method: {
        title: "The Budo method",
        lede:
          "We present the method as a practice of regulation and active participation, not vague inspiration.",
        principles: [
          {
            title: "Simple, repeatable tools",
            body: "Breath, attention, gesture, and voice can be learned, repeated, and shared."
          },
          {
            title: "Adapted to hospital reality",
            body: "The method adapts to hospital reality: at the bedside, in treatment rooms, in small groups, or in community settings."
          },
          {
            title: "Working with medicine, not instead of it",
            body: "The intervention is complementary, non-pharmacological, and compatible with the medical care plan."
          }
        ],
        quote:
          "A child is no longer only the patient inside a procedure. They become an active participant in a moment that would otherwise be defined only by fear."
      },
      research: {
        title: "Research, grants, and European visibility",
        lede:
          "KKCB Romania seeks to develop research projects with clinical, academic, and institutional partners.",
        referenceLinkLabel: "Open reference",
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
            body: "Resources that bring together studies, accessible materials, and useful context for families and professionals.",
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
          "The organization can be supported with time, professional expertise, and financial resources.",
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
          "Below are the organization's legal details and address.",
        visitTitle: "Address",
        visitBody: [
          "Mămulari 2, Building C1, Stair 2, Floor 2, Apartment 27",
          "Bucharest, Sector 3",
          "Romania"
        ],
        legalTitle: "Administrative identity",
        legalBody: [
          "KIDS KICKING CANCER WITH BUDO",
          "Authorization record: DOSAR NR. 26674/301/394/26.11.2025"
        ]
      }
    },
    footer: {
      mission:
        "Our mission is to give children in treatment practical tools for regulation, courage, and belonging through Budo, community, and sustainable projects.",
      addressLabel: "Address",
      legalLabel: "Legal details",
      addressLines: [
        "Mămulari 2, Building C1, Stair 2, Floor 2, Apartment 27",
        "Bucharest, Sector 3, Romania"
      ],
      legalLines: [
        "KIDS KICKING CANCER WITH BUDO",
        "DOSAR NR. 26674/301/394/26.11.2025"
      ],
      versionLabel: "Public version"
    }
  }
};

export function getDictionary(locale: Locale) {
  return siteContent[locale];
}
