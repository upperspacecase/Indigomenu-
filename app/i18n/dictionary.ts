export const locales = ["pt", "en", "es", "fr", "de", "nl"] as const;
export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  pt: "Português",
  en: "English",
  es: "Español",
  fr: "Français",
  de: "Deutsch",
  nl: "Nederlands",
};

export const localeShort: Record<Locale, string> = {
  pt: "PT",
  en: "EN",
  es: "ES",
  fr: "FR",
  de: "DE",
  nl: "NL",
};

export const DEFAULT_LOCALE: Locale = "en";

// UI shell strings only. Per-dish menu copy stays in page.tsx as `pt` / `en`
// fields on each MenuItem; when locale ∉ {pt, en} the page falls back to en
// and shows a one-time banner explaining auto-translation would run in
// production (e.g. via Sanity i18n fields).

export type Dictionary = {
  title: string;
  section: { menu: string; events: string; more: string };
  acc: {
    breakfast: string;
    coffee: string;
    coffeePdf: string;
    coffeePdfSub: string;
    food: string;
    drinks: string;
    wine: string;
    group: string;
    location: string;
    contact: string;
    review: string;
    cam: string;
    instagram: string;
  };
  bestseller: string;
  filter: { label: string; clear: string };
  diet: {
    glutenFree: string;
    dairyFree: string;
    nutFree: string;
    sesameFree: string;
    mustardFree: string;
  };
  legal: string;
  languageLabel: string;
  fallbackBanner: string;
  fallbackDismiss: string;
  allergensLegend: string;
  coffeeIntro: string;
};

export const dictionary: Record<Locale, Dictionary> = {
  pt: {
    title: "Bistro & Beach Bar",
    section: { menu: "MENU", events: "EVENTOS", more: "MAIS" },
    acc: {
      breakfast: "Pequeno-Almoço",
      coffee: "Café",
      coffeePdf: "Café (PDF)",
      coffeePdfSub: "Menu original",
      food: "Comida",
      drinks: "Bebidas",
      wine: "Carta de Vinhos",
      group: "Menus de Grupo",
      location: "Localização",
      contact: "Contacte-nos",
      review: "Avalie a sua experiência",
      cam: "Câmara da Praia da Foz do Lizandro",
      instagram: "Instagram",
    },
    bestseller: "Mais vendido",
    filter: { label: "Filtrar por", clear: "Limpar" },
    diet: {
      glutenFree: "Sem glúten",
      dairyFree: "Sem lacticínios",
      nutFree: "Sem frutos secos",
      sesameFree: "Sem sésamo",
      mustardFree: "Sem mostarda",
    },
    legal: "Preços incluem IVA à taxa legal em vigor.",
    languageLabel: "Idioma",
    fallbackBanner:
      "A mostrar em inglês. Em produção, as traduções de menu seriam geradas automaticamente.",
    fallbackDismiss: "Fechar",
    allergensLegend: "Alergénios",
    coffeeIntro:
      "Servimos café de especialidade 100% Arábica, proveniente de lotes com pontuação acima de 86, e torrado pelo The Capsule Cafe, uma torrefação local na Ericeira.",
  },
  en: {
    title: "Bistro & Beach Bar",
    section: { menu: "MENU", events: "EVENTS", more: "MORE" },
    acc: {
      breakfast: "Breakfast",
      coffee: "Coffee",
      coffeePdf: "Coffee (PDF)",
      coffeePdfSub: "Original menu document",
      food: "Food",
      drinks: "Drinks",
      wine: "Wine List",
      group: "Group Menus",
      location: "Location",
      contact: "Contact Us",
      review: "Review your Experience",
      cam: "Foz do Lizandro Beach Cam",
      instagram: "Instagram",
    },
    bestseller: "Best-seller",
    filter: { label: "Filter by", clear: "Clear" },
    diet: {
      glutenFree: "Gluten-free",
      dairyFree: "Dairy-free",
      nutFree: "Nut-free",
      sesameFree: "Sesame-free",
      mustardFree: "Mustard-free",
    },
    legal: "Prices include Value Added Tax at the legal rate in force.",
    languageLabel: "Language",
    fallbackBanner:
      "Showing in English. In production, menu translations would be auto-generated.",
    fallbackDismiss: "Dismiss",
    allergensLegend: "Allergens",
    coffeeIntro:
      "We serve 100% Arabica specialty coffee, selected from lots scoring above 86, and roasted by The Capsule Cafe, a local roastery based in Ericeira.",
  },
  es: {
    title: "Bistró y Bar de Playa",
    section: { menu: "MENÚ", events: "EVENTOS", more: "MÁS" },
    acc: {
      breakfast: "Desayuno",
      coffee: "Café",
      coffeePdf: "Café (PDF)",
      coffeePdfSub: "Menú original",
      food: "Comida",
      drinks: "Bebidas",
      wine: "Carta de Vinos",
      group: "Menús de Grupo",
      location: "Ubicación",
      contact: "Contáctanos",
      review: "Valora tu experiencia",
      cam: "Cámara de la Playa Foz do Lizandro",
      instagram: "Instagram",
    },
    bestseller: "Más vendido",
    filter: { label: "Filtrar por", clear: "Limpiar" },
    diet: {
      glutenFree: "Sin gluten",
      dairyFree: "Sin lactosa",
      nutFree: "Sin frutos secos",
      sesameFree: "Sin sésamo",
      mustardFree: "Sin mostaza",
    },
    legal: "Los precios incluyen IVA al tipo legal vigente.",
    languageLabel: "Idioma",
    fallbackBanner:
      "Mostrando en inglés. En producción, las traducciones del menú se generarían automáticamente.",
    fallbackDismiss: "Cerrar",
    allergensLegend: "Alérgenos",
    coffeeIntro:
      "Servimos café de especialidad 100% Arábica, procedente de lotes con puntuación superior a 86, tostado por The Capsule Cafe, una tostadora local de Ericeira.",
  },
  fr: {
    title: "Bistrot & Bar de Plage",
    section: { menu: "MENU", events: "ÉVÉNEMENTS", more: "PLUS" },
    acc: {
      breakfast: "Petit-Déjeuner",
      coffee: "Café",
      coffeePdf: "Café (PDF)",
      coffeePdfSub: "Menu original",
      food: "Cuisine",
      drinks: "Boissons",
      wine: "Carte des Vins",
      group: "Menus de Groupe",
      location: "Emplacement",
      contact: "Contactez-nous",
      review: "Évaluez votre expérience",
      cam: "Webcam de la Plage Foz do Lizandro",
      instagram: "Instagram",
    },
    bestseller: "Meilleure vente",
    filter: { label: "Filtrer par", clear: "Effacer" },
    diet: {
      glutenFree: "Sans gluten",
      dairyFree: "Sans produits laitiers",
      nutFree: "Sans noix",
      sesameFree: "Sans sésame",
      mustardFree: "Sans moutarde",
    },
    legal: "Prix TTC selon le taux légal en vigueur.",
    languageLabel: "Langue",
    fallbackBanner:
      "Affichage en anglais. En production, les traductions du menu seraient générées automatiquement.",
    fallbackDismiss: "Fermer",
    allergensLegend: "Allergènes",
    coffeeIntro:
      "Nous servons du café de spécialité 100% Arabica, provenant de lots notés au-dessus de 86, et torréfié par The Capsule Cafe, une torréfaction locale d'Ericeira.",
  },
  de: {
    title: "Bistro & Strandbar",
    section: { menu: "SPEISEKARTE", events: "VERANSTALTUNGEN", more: "MEHR" },
    acc: {
      breakfast: "Frühstück",
      coffee: "Kaffee",
      coffeePdf: "Kaffee (PDF)",
      coffeePdfSub: "Original-Menü",
      food: "Speisen",
      drinks: "Getränke",
      wine: "Weinkarte",
      group: "Gruppenmenüs",
      location: "Standort",
      contact: "Kontakt",
      review: "Bewerten Sie Ihr Erlebnis",
      cam: "Strandkamera Foz do Lizandro",
      instagram: "Instagram",
    },
    bestseller: "Bestseller",
    filter: { label: "Filtern nach", clear: "Zurücksetzen" },
    diet: {
      glutenFree: "Glutenfrei",
      dairyFree: "Laktosefrei",
      nutFree: "Ohne Nüsse",
      sesameFree: "Ohne Sesam",
      mustardFree: "Ohne Senf",
    },
    legal:
      "Preise inkl. MwSt. zum gesetzlich geltenden Satz.",
    languageLabel: "Sprache",
    fallbackBanner:
      "Anzeige auf Englisch. In der Produktion würden Menü-Übersetzungen automatisch erstellt.",
    fallbackDismiss: "Schließen",
    allergensLegend: "Allergene",
    coffeeIntro:
      "Wir servieren Spezialitätenkaffee aus 100% Arabica, ausgewählt aus Chargen mit über 86 Punkten und geröstet von The Capsule Cafe, einer lokalen Rösterei in Ericeira.",
  },
  nl: {
    title: "Bistro & Strandbar",
    section: { menu: "MENU", events: "EVENEMENTEN", more: "MEER" },
    acc: {
      breakfast: "Ontbijt",
      coffee: "Koffie",
      coffeePdf: "Koffie (PDF)",
      coffeePdfSub: "Originele menukaart",
      food: "Eten",
      drinks: "Dranken",
      wine: "Wijnkaart",
      group: "Groepsmenu's",
      location: "Locatie",
      contact: "Neem contact op",
      review: "Beoordeel uw ervaring",
      cam: "Strandcamera Foz do Lizandro",
      instagram: "Instagram",
    },
    bestseller: "Bestseller",
    filter: { label: "Filteren op", clear: "Wissen" },
    diet: {
      glutenFree: "Glutenvrij",
      dairyFree: "Lactosevrij",
      nutFree: "Notenvrij",
      sesameFree: "Sesamvrij",
      mustardFree: "Mosterdvrij",
    },
    legal: "Prijzen zijn inclusief BTW volgens het geldende wettelijke tarief.",
    languageLabel: "Taal",
    fallbackBanner:
      "Wordt weergegeven in het Engels. In productie zouden menuvertalingen automatisch worden gegenereerd.",
    fallbackDismiss: "Sluiten",
    allergensLegend: "Allergenen",
    coffeeIntro:
      "Wij serveren 100% Arabica specialty koffie, geselecteerd uit lots met meer dan 86 punten, gebrand door The Capsule Cafe, een lokale brander in Ericeira.",
  },
};

// Map filter chip key → allergen string used by MenuItem.allergens
export const filterAllergenMap: Record<keyof Dictionary["diet"], string> = {
  glutenFree: "gluten",
  dairyFree: "dairy",
  nutFree: "nuts",
  sesameFree: "sesame",
  mustardFree: "mustard",
};

export const filterKeys: (keyof Dictionary["diet"])[] = [
  "glutenFree",
  "dairyFree",
  "nutFree",
  "sesameFree",
  "mustardFree",
];
