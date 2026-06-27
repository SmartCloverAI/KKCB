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

export type DocumentDownload = {
  title: string;
  description: string;
  href?: string;
  fileType: "PDF" | "PDF + DOCX";
  language: string;
  date: string;
  downloadLabel?: string;
  downloads?: Array<{
    href: string;
    label: string;
    fileType: "PDF" | "DOCX";
  }>;
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
    linkLabel: string;
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
      documents: {
        title: string;
        intro: string;
        warning: string;
        items: DocumentDownload[];
      };
      bank: {
        title: string;
        intro: string;
        trustTitle: string;
        trustBody: string;
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
      governance: {
        title: string;
        body: string;
        items: DocumentDownload[];
      };
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
        "Site bilingv al Kids Kicking Cancer with Budo, capitolul din București: metoda Budo în sprijinul copiilor aflați în tratament, voluntariat în spitale, cercetare și strângere de fonduri."
    },
    brand: {
      name: "Kids Kicking Cancer with Budo",
      chapter: "București, România",
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
      eyebrow: "Capitolul din București al mișcării Kids Kicking Cancer",
      title: "Transformăm momentele de tratament în momente de curaj.",
      lede:
        "Capitolul din București lucrează cu copii aflați în tratament prin exerciții de respirație, postură și concentrare inspirate din Budo, adaptate mediului medical și susținute de voluntari pregătiți.",
      primaryAction: {
        href: "/get-involved",
        label: "Devino voluntar",
        variant: "primary"
      },
      secondaryAction: {
        href: "/research",
        label: "Vezi direcțiile de cercetare",
        variant: "secondary"
      },
      note:
        "Programul reunește intervenția la patul copilului, pregătirea voluntarilor, cercetarea aplicată și strângerea de fonduri necesară pentru continuitate.",
      imageId: "hero-bedside-punch",
      highlights: [
        { value: "3 direcții", label: "voluntariat, cercetare, strângere de fonduri" },
        { value: "Bilingv", label: "română și engleză" },
        { value: "1 misiune", label: "curaj, reglare și sprijin" }
      ]
    },
    chapter: {
      eyebrow: "Identitate locală",
      title: "Capitolul din București aduce local o metodă cu istorie internațională.",
      body:
        "Capitolul din București face parte din mișcarea internațională Kids Kicking Cancer și lucrează pentru a aduce metoda Budo în spitale, împreună cu voluntari, familii și parteneri instituționali.",
      facts: [
        "Capitol activ în București, Sector 3",
        "Autorizare obținută în 2025",
        "Parte dintr-o moștenire internațională Kids Kicking Cancer"
      ],
      detailLinkLabel: "Vezi datele oficiale"
    },
    pillars: {
      eyebrow: "Ce facem",
      title: "Lucrăm pe trei direcții care se susțin reciproc.",
      intro:
        "Munca organizației începe la patul copilului și se extinde prin cercetare și sprijin din partea comunității.",
      items: [
        {
          title: "Voluntariat în spitale",
          body:
            "Voluntarii lucrează cu copilul prin exerciții scurte de respirație, postură și focalizare, într-un cadru sigur, disciplinat și atent la contextul medical.",
          href: "/get-involved",
          linkLabel: "Cum te implici"
        },
        {
          title: "Cercetare și proiecte cu finanțare UE",
          body:
            "Căutăm studii pilot și parteneriate cu spitale și universități care pot evalua durerea percepută, stresul procedural și fezabilitatea metodei.",
          href: "/research",
          linkLabel: "Agenda de cercetare"
        },
        {
          title: "Strângere de fonduri cu sens",
          body:
            "Fondurile susțin prezența voluntarilor în spitale, formarea echipei, documentarea responsabilă și pregătirea proiectelor de cercetare.",
          href: "/blog",
          linkLabel: "Idei și povești"
        }
      ]
    },
    method: {
      eyebrow: "Cum funcționează",
      title: "Metoda Budo ca practică concretă de reglare.",
      intro:
        "Copiii învață exerciții scurte pe care le pot folosi când urmează o procedură, în timpul ei sau după aceea.",
      steps: [
        {
          title: "Respirație",
          body:
            "Respirația dă ritm și îl ajută pe copil să își recapete atenția într-un moment dificil."
        },
        {
          title: "Postură și voce",
          body:
            "Postura, privirea și vocea îl ajută pe copil să treacă din pasivitate în participare."
        },
        {
          title: "Comunitate",
          body:
            "Când voluntarii, familia și echipa medicală folosesc aceleași repere, metoda devine recognoscibilă și repetabilă."
        }
      ]
    },
    evidence: {
      eyebrow: "Repere utile",
      title: "Aceste organizații arată cum pot fi legate metoda, cercetarea și sprijinul pentru familii.",
      intro:
        "Le includem pentru că oferă exemple clare de programe, resurse și comunicare publică credibilă.",
      linkLabel: "Vezi referința",
      items: [
        {
          title: "MATIO / fostul Kids Kicking Cancer",
          body:
            "Arată cum poate fi explicată metoda familiilor și cum pot fi reunite resursele de cercetare într-un singur loc.",
          href: "https://mymatio.org/resources/",
          source: "mymatio.org"
        },
        {
          title: "Children with Cancer UK",
          body:
            "Arată cum pot fi prezentate cercetarea, sprijinul pentru familii și strângerea de fonduri fără a pierde claritatea.",
          href: "https://www.childrenwithcancer.org.uk/about-us/",
          source: "childrenwithcancer.org.uk"
        },
        {
          title: "World Child Cancer",
          body:
            "Arată cum poate vorbi un ONG despre parteneriate, politici publice și schimbare pe termen lung.",
          href: "https://worldchildcancer.org/mission-vision/",
          source: "worldchildcancer.org"
        }
      ]
    },
    archive: {
      eyebrow: "Arhiva programului",
      title: "Fotografiile din arhivă arată că programul are istorie și activitate documentată.",
      intro:
        "Imaginile surprind intervenții la patul copilului, momente de formare și legătura directă cu comunitatea internațională Kids Kicking Cancer.",
      imageIds: [
        "thumbs-up-bedside",
        "team-with-student",
        "founder-raby",
        "historic-rome-2012",
        "italian-press"
      ]
    },
    blog: {
      eyebrow: "Din activitatea noastră",
      title: "Articole despre metodă, voluntariat și cercetare.",
      intro:
        "Aici explicăm cum lucrăm, ce parteneriate căutăm și ce poate susține comunitatea.",
      cta: {
        href: "/blog",
        label: "Toate articolele",
        variant: "ghost"
      }
    },
    finalCta: {
      eyebrow: "Implică-te",
      title: "Ajută-ne să ducem această muncă mai departe în România.",
      body:
        "Capitolul din București caută voluntari, parteneri și susținători care pot menține prezența în spitale și pot susține proiectele de cercetare și dezvoltare.",
      actions: [
        { href: "/get-involved", label: "Vreau să ajut", variant: "primary" },
        { href: "/contact", label: "Date legale și adresă", variant: "secondary" }
      ]
    },
    innerCta: {
      eyebrow: "Implică-te cu măsură",
      title: "Susține prezența în spitale.",
      body:
        "Dacă poți ajuta prin timp, parteneriate sau sprijin financiar, pagina de implicare explică pașii concreți și datele utile.",
      action: {
        href: "/get-involved",
        label: "Vezi cum te implici",
        variant: "primary"
      }
    },
    pages: {
      about: {
        title: "Despre capitolul din București",
        lede:
          "Capitolul din București pornește din istoria internațională a mișcării și din experiența deja documentată în imagini și activități publice.",
        storyTitle: "De la moștenirea internațională la un capitol local solid",
        storyBody: [
          "Arhiva arată intervenții la patul copilului, întâlniri internaționale și apariții publice care leagă direct capitolul din București de istoria mai largă a programului.",
          "Obiectivul local este limpede: o organizație care lucrează responsabil în spitale, formează voluntari și construiește parteneriate pentru cercetare și finanțare."
        ],
        milestones: [
          {
            year: "2012",
            title: "Context european",
            body: "Imaginile din Roma arată legătura cu comunitatea europeană care a susținut metoda."
          },
          {
            year: "2017-2019",
            title: "Documentarea intervențiilor la patul copilului",
            body: "Fotografiile bedside documentează lucrul direct dintre copii și voluntari în spital."
          },
          {
            year: "2025",
            title: "Autorizarea din România",
            body: "Autorizarea din România a făcut posibilă dezvoltarea oficială a capitolului."
          }
        ]
      },
      method: {
        title: "Metoda Budo",
        lede:
          "Metoda îi învață pe copii exerciții practice pe care le pot folosi când frica, durerea sau anticiparea devin prea puternice.",
        principles: [
          {
            title: "Instrumente simple, repetabile",
            body: "Respirația, atenția, gestul și vocea pot fi învățate repede și pot fi repetate ori de câte ori este nevoie."
          },
          {
            title: "Adaptare la realitatea spitalului",
            body: "Metoda se adaptează contextului medical: la patul copilului, în sala de tratament, în grupuri mici sau în afara spitalului."
          },
          {
            title: "Colaborare cu medicina, nu în locul ei",
            body: "Intervenția completează îngrijirea medicală și este gândită să lucreze alături de echipa clinică, nu în locul ei."
          }
        ],
        quote:
          "Copilul nu rămâne doar pacientul unei proceduri. Devine participant activ într-un moment care altfel ar fi definit doar de frică."
      },
      research: {
        title: "Cercetare, granturi și vizibilitate europeană",
        lede:
          "Capitolul din București caută spitale, universități și finanțatori care pot evalua metoda în proiecte pilot și granturi europene.",
        referenceLinkLabel: "Vezi referința",
        focus: [
          {
            title: "Studii pilot în România",
            body: "Urmărim durerea percepută, stresul procedural, toleranța la proceduri și feedback-ul familiilor."
          },
          {
            title: "Consorții europene",
            body: "Vizăm parteneriate cu universități, spitale și ONG-uri pentru granturi despre suport pediatric și inovație socială."
          },
          {
            title: "Cercetare aplicată pentru vizibilitate publică",
            body: "Rezultatele pot fi prezentate în conferințe, materiale pentru familii și campanii publice care explică metoda clar."
          }
        ],
        inspirations: [
          {
            title: "MATIO Research & Resources",
            body: "Exemplu de organizație care pune laolaltă metoda, resursele pentru familii și materialele de cercetare.",
            href: "https://mymatio.org/resources/"
          },
          {
            title: "World Child Cancer Mission & Vision",
            body: "Exemplu de limbaj clar despre parteneriate internaționale și schimbare la nivel de sistem.",
            href: "https://worldchildcancer.org/mission-vision/"
          },
          {
            title: "Dăruiește Viață",
            body: "Exemplu local de comunicare directă despre proiecte pediatrice, nevoi și folosirea fondurilor.",
            href: "https://www.daruiesteviata.ro/en/proiecte/children-s-call-for-hope"
          }
        ]
      },
      getInvolved: {
        title: "Cum te implici",
        lede:
          "Capitolul din București are nevoie de oameni și instituții care pot susține atât munca din spital, cât și dezvoltarea organizației.",
        cards: [
          {
            title: "Voluntariat",
            body: "Pentru practicieni Budo și pentru oameni care pot ajuta cu organizare, traduceri, foto-video sau comunicare."
          },
          {
            title: "Parteneriate",
            body: "Pentru spitale, universități, sponsori și specialiști care pot sprijini cercetarea, logistica sau finanțarea."
          },
          {
            title: "Fundraising comunitar",
            body: "Pentru campanii locale, evenimente școlare, inițiative sportive și implicarea companiilor."
          }
        ],
        documents: {
          title: "Standarde și formulare",
          intro:
            "Voluntariatul începe cu aceleași repere etice pentru toți cei implicați.",
          warning:
            "Formularele completate conțin date personale. Trimite-le doar prin procesul confirmat de organizație, după ce primești instrucțiunile oficiale.",
          items: [
            {
              title: "Codul de etică",
              description:
                "Standardele de conduită pentru membrii și voluntarii Kids Kicking Cancer with Budo. Document oficial în limba română.",
              href: "/documents/codul-de-etica-kkcb-ro-2026-05-16.pdf",
              fileType: "PDF",
              language: "română",
              date: "16 mai 2026",
              downloadLabel: "Descarcă PDF"
            },
            {
              title: "Cerere voluntar / membru",
              description:
                "Formular blank în limba română. Descarcă DOCX pentru completare digitală sau PDF pentru imprimare.",
              fileType: "PDF + DOCX",
              language: "română",
              date: "16 mai 2026",
              downloads: [
                {
                  href: "/documents/cerere-voluntar-membru-kkcb-ro-2026-05-16.pdf",
                  label: "Descarcă PDF",
                  fileType: "PDF"
                },
                {
                  href: "/documents/cerere-voluntar-membru-kkcb-ro-2026-05-16.docx",
                  label: "Descarcă DOCX editabil",
                  fileType: "DOCX"
                }
              ]
            }
          ]
        },
        bank: {
          title: "Transfer bancar",
          intro:
            "Pentru donații prin transfer bancar, folosește datele de mai jos exact așa cum sunt afișate.",
          trustTitle: "Ce susține transferul bancar",
          trustBody:
            "Transferurile bancare susțin prezența voluntarilor în spitale, formarea echipei, logistica activităților, documentarea responsabilă și pregătirea parteneriatelor de cercetare.",
          holderLabel: "Titular cont",
          ibanLabel: "IBAN",
          bicLabel: "BIC/SWIFT",
          copyLabel: "Copiază",
          copiedLabel: "Copiat",
          holder: "KIDS KICKING CANCER with BUDO",
          iban: "RO83 RNCB 0082 1852 9530 0001",
          bic: "RNCBROBU"
        },
        actions: [
          { href: "/blog", label: "Vezi idei de campanii", variant: "secondary" },
          { href: "/contact", label: "Datele organizației", variant: "ghost" }
        ]
      },
      contact: {
        title: "Date de identificare",
        lede:
          "Aici găsești datele juridice și adresa organizației.",
        visitTitle: "Adresa",
        visitBody: [
          "Mămulari 2, Bl. C1, Sc. 2, Et. 2, Ap. 27",
          "București, Sector 3",
          "România"
        ],
        legalTitle: "Identificare administrativă",
        legalBody: [
          "KIDS KICKING CANCER WITH BUDO",
          "Act autorizare: DOSAR NR. 26674/301/394/26.11.2025"
        ],
        governance: {
          title: "Standarde de guvernanță",
          body:
            "Codul de etică public documentează conduita așteptată de la membrii, voluntarii și colaboratorii organizației.",
          items: [
            {
              title: "Codul de etică",
              description:
                "Document oficial în limba română pentru standardele de conduită ale Kids Kicking Cancer with Budo.",
              href: "/documents/codul-de-etica-kkcb-ro-2026-05-16.pdf",
              fileType: "PDF",
              language: "română",
              date: "16 mai 2026",
              downloadLabel: "Descarcă PDF"
            }
          ]
        }
      }
    },
    footer: {
      mission:
        "Lucrăm pentru ca fiecare copil aflat în tratament să aibă la îndemână respirația, atenția și curajul pe care le poate practica prin metoda Budo.",
      addressLabel: "Adresa",
      legalLabel: "Date legale",
      addressLines: [
        "Mămulari 2, Bl. C1, Sc. 2, Et. 2, Ap. 27",
        "București, Sector 3, România"
      ],
      legalLines: [
        "KIDS KICKING CANCER WITH BUDO",
        "DOSAR NR. 26674/301/394/26.11.2025"
      ],
      versionLabel: "Versiune publică",
      servedByBrandPosition: "end",
      servedByBrandSuffix: "care servește acest site:",
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
      linkLabel: "Open source",
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
        documents: {
          title: "Standards and forms",
          intro:
            "Volunteering starts from the same ethical standards for everyone involved.",
          warning:
            "Completed forms contain personal data. Send them only through the confirmed process after receiving official instructions from the organization.",
          items: [
            {
              title: "Code of Ethics",
              description:
                "Official governance document in Romanian for Kids Kicking Cancer with Budo members and volunteers.",
              href: "/documents/codul-de-etica-kkcb-ro-2026-05-16.pdf",
              fileType: "PDF",
              language: "Romanian",
              date: "16 May 2026",
              downloadLabel: "Download PDF"
            },
            {
              title: "Volunteer / member application",
              description:
                "Romanian blank form. Use DOCX for digital completion or PDF for printing.",
              fileType: "PDF + DOCX",
              language: "Romanian",
              date: "16 May 2026",
              downloads: [
                {
                  href: "/documents/cerere-voluntar-membru-kkcb-ro-2026-05-16.pdf",
                  label: "Download PDF",
                  fileType: "PDF"
                },
                {
                  href: "/documents/cerere-voluntar-membru-kkcb-ro-2026-05-16.docx",
                  label: "Download editable DOCX",
                  fileType: "DOCX"
                }
              ]
            }
          ]
        },
        bank: {
          title: "Bank transfer",
          intro:
            "For donations by bank transfer, use the details below exactly as shown.",
          trustTitle: "What bank transfers support",
          trustBody:
            "Bank transfers support volunteer presence in hospitals, team training, activity logistics, responsible documentation, and preparation for research partnerships.",
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
        ],
        governance: {
          title: "Governance standards",
          body:
            "The public Code of Ethics documents expected conduct for the organization's members, volunteers, and collaborators.",
          items: [
            {
              title: "Code of Ethics",
              description:
                "Official governance document in Romanian for the conduct standards of Kids Kicking Cancer with Budo.",
              href: "/documents/codul-de-etica-kkcb-ro-2026-05-16.pdf",
              fileType: "PDF",
              language: "Romanian",
              date: "16 May 2026",
              downloadLabel: "Download PDF"
            }
          ]
        }
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
