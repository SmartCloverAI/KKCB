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
    eyebrow: string;
    title: string;
    body: string;
    actions: ActionLink[];
  };
  innerCta: {
    eyebrow: string;
    title: string;
    body: string;
    action: ActionLink;
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
      bank: {
        title: string;
        intro: string;
        holderLabel: string;
        ibanLabel: string;
        bicLabel: string;
        copyLabel: string;
        copiedLabel: string;
        holder: string;
        iban: string;
        bic: string;
      };
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
    servedByBrandPosition?: "start" | "end";
    servedByBrandSuffix?: string;
    servedByLabel: string;
  };
};

export const siteContent: Record<Locale, SiteDictionary> = {
  ro: {
    meta: {
      title: "Kids Kicking Cancer with Budo",
      description:
        "Site bilingv al Kids Kicking Cancer with Budo, capitolul din Bucuresti: metoda Budo in sprijinul copiilor aflati in tratament, voluntariat in spitale, cercetare si strangere de fonduri."
    },
    brand: {
      name: "Kids Kicking Cancer with Budo",
      chapter: "Bucuresti, Romania",
      tagline: "Power Peace Purpose"
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
      eyebrow: "Capitolul din Bucuresti al miscarii Kids Kicking Cancer",
      title: "Transformam momentele de tratament in momente de curaj.",
      lede:
        "Capitolul din Bucuresti lucreaza cu copii aflati in tratament prin exercitii de respiratie, postura si concentrare inspirate din Budo, adaptate mediului medical si sustinute de voluntari pregatiti.",
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
        "Programul reuneste interventia la patul copilului, pregatirea voluntarilor, cercetarea aplicata si strangerea de fonduri necesara pentru continuitate.",
      imageId: "hero-bedside-punch",
      highlights: [
        { value: "3 directii", label: "voluntariat, cercetare, strangere de fonduri" },
        { value: "Bilingv", label: "romana si engleza" },
        { value: "1 misiune", label: "curaj, reglare si sprijin" }
      ]
    },
    chapter: {
      eyebrow: "Identitate locala",
      title: "Capitolul din Bucuresti aduce local o metoda cu istorie internationala.",
      body:
        "Capitolul din Bucuresti face parte din miscarea internationala Kids Kicking Cancer si lucreaza pentru a aduce metoda Budo in spitale, impreuna cu voluntari, familii si parteneri institutionali.",
      facts: [
        "Capitol activ in Bucuresti, Sector 3",
        "Autorizare obtinuta in 2025",
        "Parte dintr-o mostenire internationala Kids Kicking Cancer"
      ],
      detailLinkLabel: "Vezi datele oficiale"
    },
    pillars: {
      eyebrow: "Ce facem",
      title: "Lucram pe trei directii care se sustin reciproc.",
      intro:
        "Munca organizatiei incepe la patul copilului si se extinde prin cercetare si sprijin din partea comunitatii.",
      items: [
        {
          title: "Voluntariat in spitale",
          body:
            "Voluntarii lucreaza cu copilul prin exercitii scurte de respiratie, postura si focalizare, intr-un cadru sigur, disciplinat si atent la contextul medical.",
          href: "/get-involved",
          linkLabel: "Cum te implici"
        },
        {
          title: "Cercetare si proiecte cu finantare UE",
          body:
            "Cautam studii pilot si parteneriate cu spitale si universitati care pot evalua durerea perceputa, stresul procedural si fezabilitatea metodei.",
          href: "/research",
          linkLabel: "Agenda de cercetare"
        },
        {
          title: "Strangere de fonduri cu sens",
          body:
            "Fondurile sustin prezenta voluntarilor in spitale, formarea echipei, documentarea responsabila si pregatirea proiectelor de cercetare.",
          href: "/blog",
          linkLabel: "Idei si povesti"
        }
      ]
    },
    method: {
      eyebrow: "Cum functioneaza",
      title: "Metoda Budo ca practica concreta de reglare.",
      intro:
        "Copiii invata exercitii scurte pe care le pot folosi cand urmeaza o procedura, in timpul ei sau dupa aceea.",
      steps: [
        {
          title: "Respiratie",
          body:
            "Respiratia da ritm si il ajuta pe copil sa isi recapete atentia intr-un moment dificil."
        },
        {
          title: "Postura si voce",
          body:
            "Postura, privirea si vocea il ajuta pe copil sa treaca din pasivitate in participare."
        },
        {
          title: "Comunitate",
          body:
            "Cand voluntarii, familia si echipa medicala folosesc aceleasi repere, metoda devine recognoscibila si repetabila."
        }
      ]
    },
    evidence: {
      eyebrow: "Repere utile",
      title: "Aceste organizatii arata cum pot fi legate metoda, cercetarea si sprijinul pentru familii.",
      intro:
        "Le includem pentru ca ofera exemple clare de programe, resurse si comunicare publica credibila.",
      items: [
        {
          title: "MATIO / fostul Kids Kicking Cancer",
          body:
            "Arata cum poate fi explicata metoda familiilor si cum pot fi reunite resursele de cercetare intr-un singur loc.",
          href: "https://mymatio.org/resources/",
          source: "mymatio.org"
        },
        {
          title: "Children with Cancer UK",
          body:
            "Arata cum pot fi prezentate cercetarea, sprijinul pentru familii si strangerea de fonduri fara a pierde claritatea.",
          href: "https://www.childrenwithcancer.org.uk/about-us/",
          source: "childrenwithcancer.org.uk"
        },
        {
          title: "World Child Cancer",
          body:
            "Arata cum poate vorbi un ONG despre parteneriate, politici publice si schimbare pe termen lung.",
          href: "https://worldchildcancer.org/mission-vision/",
          source: "worldchildcancer.org"
        }
      ]
    },
    archive: {
      eyebrow: "Arhiva programului",
      title: "Fotografiile din arhiva arata ca programul are istorie si activitate documentata.",
      intro:
        "Imaginile surprind interventii la patul copilului, momente de formare si legatura directa cu comunitatea internationala Kids Kicking Cancer.",
      imageIds: [
        "thumbs-up-bedside",
        "team-with-student",
        "founder-raby",
        "historic-rome-2012",
        "italian-press"
      ]
    },
    blog: {
      eyebrow: "Din activitatea noastra",
      title: "Articole despre metoda, voluntariat si cercetare.",
      intro:
        "Aici explicam cum lucram, ce parteneriate cautam si ce poate sustine comunitatea.",
      cta: {
        href: "/blog",
        label: "Toate articolele",
        variant: "ghost"
      }
    },
    finalCta: {
      eyebrow: "Implica-te",
      title: "Ajuta-ne sa ducem aceasta munca mai departe in Romania.",
      body:
        "Capitolul din Bucuresti cauta voluntari, parteneri si sustinatori care pot mentine prezenta in spitale si pot sustine proiectele de cercetare si dezvoltare.",
      actions: [
        { href: "/get-involved", label: "Vreau sa ajut", variant: "primary" },
        { href: "/contact", label: "Date legale si adresa", variant: "secondary" }
      ]
    },
    innerCta: {
      eyebrow: "Implica-te cu masura",
      title: "Sustine prezenta in spitale.",
      body:
        "Daca poti ajuta prin timp, parteneriate sau sprijin financiar, pagina de implicare explica pasii concreti si datele utile.",
      action: {
        href: "/get-involved",
        label: "Vezi cum te implici",
        variant: "primary"
      }
    },
    pages: {
      about: {
        title: "Despre capitolul din Bucuresti",
        lede:
          "Capitolul din Bucuresti porneste din istoria internationala a miscarii si din experienta deja documentata in imagini si activitati publice.",
        storyTitle: "De la mostenirea internationala la un capitol local solid",
        storyBody: [
          "Arhiva arata interventii la patul copilului, intalniri internationale si aparitii publice care leaga direct capitolul din Bucuresti de istoria mai larga a programului.",
          "Obiectivul local este limpede: o organizatie care lucreaza responsabil in spitale, formeaza voluntari si construieste parteneriate pentru cercetare si finantare."
        ],
        milestones: [
          {
            year: "2012",
            title: "Context european",
            body: "Imaginile din Roma arata legatura cu comunitatea europeana care a sustinut metoda."
          },
          {
            year: "2017-2019",
            title: "Documentarea interventiilor la patul copilului",
            body: "Fotografiile bedside documenteaza lucrul direct dintre copii si voluntari in spital."
          },
          {
            year: "2025",
            title: "Autorizarea din Romania",
            body: "Autorizarea din Romania a facut posibila dezvoltarea oficiala a capitolului."
          }
        ]
      },
      method: {
        title: "Metoda Budo",
        lede:
          "Metoda ii invata pe copii exercitii practice pe care le pot folosi cand frica, durerea sau anticiparea devin prea puternice.",
        principles: [
          {
            title: "Instrumente simple, repetabile",
            body: "Respiratia, atentia, gestul si vocea pot fi invatate repede si pot fi repetate ori de cate ori este nevoie."
          },
          {
            title: "Adaptare la realitatea spitalului",
            body: "Metoda se adapteaza contextului medical: la patul copilului, in sala de tratament, in grupuri mici sau in afara spitalului."
          },
          {
            title: "Colaborare cu medicina, nu in locul ei",
            body: "Interventia completeaza ingrijirea medicala si este gandita sa lucreze alaturi de echipa clinica, nu in locul ei."
          }
        ],
        quote:
          "Copilul nu ramane doar pacientul unei proceduri. Devine participant activ intr-un moment care altfel ar fi definit doar de frica."
      },
      research: {
        title: "Cercetare, granturi si vizibilitate europeana",
        lede:
          "Capitolul din Bucuresti cauta spitale, universitati si finantatori care pot evalua metoda in proiecte pilot si granturi europene.",
        referenceLinkLabel: "Vezi referinta",
        focus: [
          {
            title: "Studii pilot in Romania",
            body: "Urmarim durerea perceputa, stresul procedural, toleranta la proceduri si feedback-ul familiilor."
          },
          {
            title: "Consortii europene",
            body: "Vizam parteneriate cu universitati, spitale si ONG-uri pentru granturi despre suport pediatric si inovatie sociala."
          },
          {
            title: "Cercetare aplicata pentru vizibilitate publica",
            body: "Rezultatele pot fi prezentate in conferinte, materiale pentru familii si campanii publice care explica metoda clar."
          }
        ],
        inspirations: [
          {
            title: "MATIO Research & Resources",
            body: "Exemplu de organizatie care pune laolalta metoda, resursele pentru familii si materialele de cercetare.",
            href: "https://mymatio.org/resources/"
          },
          {
            title: "World Child Cancer Mission & Vision",
            body: "Exemplu de limbaj clar despre parteneriate internationale si schimbare la nivel de sistem.",
            href: "https://worldchildcancer.org/mission-vision/"
          },
          {
            title: "Dăruiește Viață",
            body: "Exemplu local de comunicare directa despre proiecte pediatrice, nevoi si folosirea fondurilor.",
            href: "https://www.daruiesteviata.ro/en/proiecte/children-s-call-for-hope"
          }
        ]
      },
      getInvolved: {
        title: "Cum te implici",
        lede:
          "Capitolul din Bucuresti are nevoie de oameni si institutii care pot sustine atat munca din spital, cat si dezvoltarea organizatiei.",
        cards: [
          {
            title: "Voluntariat",
            body: "Pentru practicieni Budo si pentru oameni care pot ajuta cu organizare, traduceri, foto-video sau comunicare."
          },
          {
            title: "Parteneriate",
            body: "Pentru spitale, universitati, sponsori si specialisti care pot sprijini cercetarea, logistica sau finantarea."
          },
          {
            title: "Fundraising comunitar",
            body: "Pentru campanii locale, evenimente scolare, initiative sportive si implicarea companiilor."
          }
        ],
        bank: {
          title: "Transfer bancar",
          intro:
            "Pentru donatii prin transfer bancar, foloseste datele de mai jos exact asa cum sunt afisate.",
          holderLabel: "Titular cont",
          ibanLabel: "IBAN",
          bicLabel: "BIC/SWIFT",
          copyLabel: "Copiaza",
          copiedLabel: "Copiat",
          holder: "KIDS KICKING CANCER with BUDO",
          iban: "RO83 RNCB 0082 1852 9530 0001",
          bic: "RNCBROBU"
        },
        actions: [
          { href: "/blog", label: "Vezi idei de campanii", variant: "secondary" },
          { href: "/contact", label: "Datele organizatiei", variant: "ghost" }
        ]
      },
      contact: {
        title: "Date de identificare",
        lede:
          "Aici gasesti datele juridice si adresa organizatiei.",
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
        "Lucram pentru ca fiecare copil aflat in tratament sa aiba la indemana respiratia, atentia si curajul pe care le poate practica prin metoda Budo.",
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
      versionLabel: "Versiune publica",
      servedByBrandPosition: "end",
      servedByBrandSuffix: "care serveste acest site:",
      servedByLabel: "Edge nodul"
    }
  },
  en: {
    meta: {
      title: "Kids Kicking Cancer with Budo",
      description:
        "Bilingual website of Kids Kicking Cancer with Budo, the Bucharest chapter: Budo-based support for children in treatment, hospital volunteering, research, and fundraising."
    },
    brand: {
      name: "Kids Kicking Cancer with Budo",
      chapter: "Bucharest, Romania",
      tagline: "Power Peace Purpose"
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
      eyebrow: "The Bucharest chapter of the Kids Kicking Cancer movement",
      title: "We turn treatment moments into moments of courage.",
      lede:
        "The Bucharest chapter works with children in treatment through breathing, posture, and focus exercises inspired by Budo, adapted to medical settings and supported by trained volunteers.",
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
        "The program combines bedside work, volunteer preparation, applied research, and the fundraising needed to keep the work going.",
      imageId: "hero-bedside-punch",
      highlights: [
        { value: "3 priorities", label: "volunteering, research, fundraising" },
        { value: "Bilingual", label: "Romanian and English" },
        { value: "1 mission", label: "courage, regulation, and support" }
      ]
    },
    chapter: {
      eyebrow: "Local identity",
      title: "The Bucharest chapter brings an international method into a clear local framework.",
      body:
        "The Bucharest chapter is part of the international Kids Kicking Cancer movement and works to bring the Budo method into hospitals together with volunteers, families, and institutional partners.",
      facts: [
        "Operating chapter based in Bucharest, Sector 3",
        "Authorized in 2025",
        "Part of the broader Kids Kicking Cancer legacy"
      ],
      detailLinkLabel: "See official details"
    },
    pillars: {
      eyebrow: "What we do",
      title: "We work across three connected areas.",
      intro:
        "The work begins at the bedside and grows through research and support from the community.",
      items: [
        {
          title: "Hospital volunteering",
          body:
            "Volunteers work with the child through short breathing, posture, and focus exercises inside a safe, disciplined framework adapted to medical reality.",
          href: "/get-involved",
          linkLabel: "How to help"
        },
        {
          title: "Research and EU-funded projects",
          body:
            "We are looking for pilot studies and partnerships with hospitals and universities that can evaluate perceived pain, procedural stress, and the feasibility of the method.",
          href: "/research",
          linkLabel: "Research priorities"
        },
        {
          title: "Purposeful fundraising",
          body:
            "Funding supports bedside sessions, volunteer training, responsible documentation, and preparation for research projects.",
          href: "/blog",
          linkLabel: "Stories and ideas"
        }
      ]
    },
    method: {
      eyebrow: "How it works",
      title: "The Budo method as practical regulation.",
      intro:
        "Children learn short exercises they can use before a procedure, during it, or afterward.",
      steps: [
        {
          title: "Breath",
          body:
            "Breathing gives rhythm and helps a child recover attention in a difficult moment."
        },
        {
          title: "Posture and voice",
          body:
            "Posture, gaze, and voice help the child move from passivity toward participation."
        },
        {
          title: "Community",
          body:
            "When volunteers, families, and the clinical team use the same cues, the method becomes recognizable and repeatable."
        }
      ]
    },
    evidence: {
      eyebrow: "Useful references",
      title: "These organizations show how method, research, and family support can be connected.",
      intro:
        "We include them because they offer clear examples of programs, resources, and credible public communication.",
      items: [
        {
          title: "MATIO / formerly Kids Kicking Cancer",
          body:
            "Shows how the method can be explained to families and how research resources can be gathered in one place.",
          href: "https://mymatio.org/resources/",
          source: "mymatio.org"
        },
        {
          title: "Children with Cancer UK",
          body:
            "Shows how research, family support, and fundraising can be presented without losing clarity.",
          href: "https://www.childrenwithcancer.org.uk/about-us/",
          source: "childrenwithcancer.org.uk"
        },
        {
          title: "World Child Cancer",
          body:
            "Shows how an NGO can speak clearly about partnerships, public policy, and long-term change.",
          href: "https://worldchildcancer.org/mission-vision/",
          source: "worldchildcancer.org"
        }
      ]
    },
    archive: {
      eyebrow: "Program archive",
      title: "Archive images show a program with history and documented activity.",
      intro:
        "The photographs show bedside work, training moments, and direct links to the wider international Kids Kicking Cancer community.",
      imageIds: [
        "thumbs-up-bedside",
        "team-with-student",
        "founder-raby",
        "historic-rome-2012",
        "italian-press"
      ]
    },
    blog: {
      eyebrow: "From the work",
      title: "Articles on the method, volunteering, and research.",
      intro:
        "Here we explain how we work, what partnerships we are seeking, and what community support can make possible.",
      cta: {
        href: "/blog",
        label: "Browse all articles",
        variant: "ghost"
      }
    },
    finalCta: {
      eyebrow: "Get involved",
      title: "Help us carry this work further in Romania.",
      body:
        "The Bucharest chapter is looking for volunteers, partners, and supporters who can sustain bedside work and help prepare research and development projects.",
      actions: [
        { href: "/get-involved", label: "I want to help", variant: "primary" },
        { href: "/contact", label: "Legal details and address", variant: "secondary" }
      ]
    },
    innerCta: {
      eyebrow: "Get involved",
      title: "Support the hospital work.",
      body:
        "If you can help with time, partnerships, or financial support, the involvement page explains the concrete next steps and useful details.",
      action: {
        href: "/get-involved",
        label: "See how to help",
        variant: "primary"
      }
    },
    pages: {
      about: {
        title: "About the Bucharest chapter",
        lede:
          "The Bucharest chapter begins from the movement's international history and from work already documented in images and public activity.",
        storyTitle: "From international legacy to a credible local chapter",
        storyBody: [
          "The archive shows bedside interventions, international meetings, and public appearances that link the Bucharest chapter directly to the wider history of the program.",
          "The local objective is clear: an organization that works responsibly in hospitals, trains volunteers, and builds partnerships for research and funding."
        ],
        milestones: [
          {
            year: "2012",
            title: "European context",
            body: "Images from Rome show the link to the European community that supported the method."
          },
          {
            year: "2017-2019",
            title: "Documented bedside work",
            body: "Bedside photographs document direct work between children and volunteers inside the hospital."
          },
          {
            year: "2025",
            title: "Romanian authorization",
            body: "Romanian authorization made the chapter's official development possible."
          }
        ]
      },
      method: {
        title: "The Budo method",
        lede:
          "The method teaches children practical exercises they can use when fear, pain, or anticipation become overwhelming.",
        principles: [
          {
            title: "Simple, repeatable tools",
            body: "Breath, attention, gesture, and voice can be learned quickly and repeated whenever they are needed."
          },
          {
            title: "Adapted to hospital reality",
            body: "The method adapts to hospital reality: at the bedside, in treatment rooms, in small groups, or outside the hospital."
          },
          {
            title: "Working with medicine, not instead of it",
            body: "The intervention complements medical care and is designed to work alongside the clinical team, not instead of it."
          }
        ],
        quote:
          "A child is no longer only the patient inside a procedure. They become an active participant in a moment that would otherwise be defined only by fear."
      },
      research: {
        title: "Research, grants, and European visibility",
        lede:
          "The Bucharest chapter is looking for hospitals, universities, and funders who can evaluate the method through pilot projects and European grants.",
        referenceLinkLabel: "Open reference",
        focus: [
          {
            title: "Pilot studies in Romania",
            body: "We want to track perceived pain, procedural stress, tolerance of procedures, and family feedback."
          },
          {
            title: "European consortia",
            body: "We want partnerships with universities, hospitals, and NGOs for grants about pediatric support and social innovation."
          },
          {
            title: "Public use of results",
            body: "Results can be presented in conferences, family materials, and public campaigns that explain the method clearly."
          }
        ],
        inspirations: [
          {
            title: "MATIO Research & Resources",
            body: "An example of an organization that keeps the method, family resources, and research material together.",
            href: "https://mymatio.org/resources/"
          },
          {
            title: "World Child Cancer Mission & Vision",
            body: "An example of clear language about international partnerships and system-level change.",
            href: "https://worldchildcancer.org/mission-vision/"
          },
          {
            title: "Dăruiește Viață",
            body: "A Romanian example of direct communication about pediatric projects, needs, and the use of funds.",
            href: "https://www.daruiesteviata.ro/en/proiecte/children-s-call-for-hope"
          }
        ]
      },
      getInvolved: {
        title: "Get involved",
        lede:
          "The Bucharest chapter needs people and institutions that can support both the hospital work and the organization's development.",
        cards: [
          {
            title: "Volunteering",
            body: "For Budo practitioners and for people who can help with logistics, translation, photo-video work, or communication."
          },
          {
            title: "Partnerships",
            body: "For hospitals, universities, sponsors, and specialists who can support research, logistics, or funding."
          },
          {
            title: "Community fundraising",
            body: "For local campaigns, school events, sports initiatives, and company-led support."
          }
        ],
        bank: {
          title: "Bank transfer",
          intro:
            "For donations by bank transfer, use the details below exactly as shown.",
          holderLabel: "Account holder",
          ibanLabel: "IBAN",
          bicLabel: "BIC/SWIFT",
          copyLabel: "Copy",
          copiedLabel: "Copied",
          holder: "KIDS KICKING CANCER with BUDO",
          iban: "RO83 RNCB 0082 1852 9530 0001",
          bic: "RNCBROBU"
        },
        actions: [
          { href: "/blog", label: "See campaign ideas", variant: "secondary" },
          { href: "/contact", label: "Organization details", variant: "ghost" }
        ]
      },
      contact: {
        title: "Organization details",
        lede:
          "Here you can find the organization's legal details and address.",
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
        "We work so that every child in treatment has access to breath, focus, and courage that can be practiced through the Budo method.",
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
      versionLabel: "Public version",
      servedByLabel: "edge node serving this site:"
    }
  }
};

export function getDictionary(locale: Locale) {
  return siteContent[locale];
}
