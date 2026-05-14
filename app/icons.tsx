import type { SVGProps } from "react";

// Section icons match linktr.ee/indigoericeira — Tabler Icons (MIT licensed).
const tabler = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function SunIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...tabler} {...props}>
      <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
      <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
    </svg>
  );
}

export function CoffeeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...tabler} {...props}>
      <path d="M3 14c.83 .642 2.077 1.017 3.5 1c1.423 .017 2.67 -.358 3.5 -1c.83 -.642 2.077 -1.017 3.5 -1c1.423 -.017 2.67 .358 3.5 1" />
      <path d="M8 3a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2" />
      <path d="M12 3a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2" />
      <path d="M3 10h14v5a6 6 0 0 1 -6 6h-2a6 6 0 0 1 -6 -6v-5z" />
      <path d="M16.746 16.726a3 3 0 1 0 .252 -5.555" />
    </svg>
  );
}

export function ForkKnifeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...tabler} {...props}>
      <path d="M19 3v12h-5c-.023 -3.681 .184 -7.406 5 -12zm0 12v6h-1v-3m-10 -14v17m-3 -17v3a3 3 0 1 0 6 0v-3" />
    </svg>
  );
}

export function CocktailIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...tabler} {...props}>
      <path d="M8 21h8" />
      <path d="M12 15v6" />
      <path d="M12 5m-7 0a7 2 0 1 0 14 0a7 2 0 1 0 -14 0" />
      <path d="M5 5v.388c0 .432 .126 .853 .362 1.206l5 7.509c.633 .951 1.88 1.183 2.785 .517c.191 -.141 .358 -.316 .491 -.517l5 -7.509c.236 -.353 .362 -.774 .362 -1.206v-.388" />
    </svg>
  );
}

export function WineIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M5.004 10.229l-.003 -.186l.001 -.113l.008 -.071l1 -7a1 1 0 0 1 .877 -.853l.113 -.006h10a1 1 0 0 1 .968 .747l.022 .112l1.006 7.05l.004 .091c0 3.226 -2.56 5.564 -6 5.945v4.055h3a1 1 0 0 1 .117 1.993l-.117 .007h-8a1 1 0 0 1 -.117 -1.993l.117 -.007h3v-4.055c-3.358 -.371 -5.878 -2.609 -5.996 -5.716zm11.129 -6.229h-8.267l-.607 4.258a6.001 6.001 0 0 1 5.125 .787l.216 .155a4 4 0 0 0 4.32 .31l-.787 -5.51z" />
    </svg>
  );
}

export function GroupIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...tabler} {...props}>
      <path d="M10 13a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
      <path d="M8 21v-1a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v1" />
      <path d="M15 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
      <path d="M17 10h2a2 2 0 0 1 2 2v1" />
      <path d="M5 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
      <path d="M3 13v-1a2 2 0 0 1 2 -2h2" />
    </svg>
  );
}

export function LocationIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...tabler} {...props}>
      <path d="M20.945 11a9 9 0 1 1 -3.284 -5.997l-2.655 2.392a5.5 5.5 0 1 0 2.119 6.605h-4.125v-3h7.945z" />
    </svg>
  );
}

export function PhoneIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...tabler} {...props}>
      <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
      <path d="M15 7a2 2 0 0 1 2 2" />
      <path d="M15 3a6 6 0 0 1 6 6" />
    </svg>
  );
}

export function ReviewIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...tabler} {...props}>
      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
      <path d="M8 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
      <path d="M12 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
      <path d="M16 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    </svg>
  );
}

export function WebcamIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...tabler} {...props}>
      <path d="M12 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
      <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
      <path d="M8 16l-2.091 3.486a1 1 0 0 0 .857 1.514h10.468a1 1 0 0 0 .857 -1.514l-2.091 -3.486" />
    </svg>
  );
}

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...tabler} {...props}>
      <path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
      <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
      <path d="M16.5 7.5v.01" />
    </svg>
  );
}

export function AsteriskIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...tabler} {...props}>
      <path d="M12 3v18" />
      <path d="M4.5 7.5l15 9" />
      <path d="M4.5 16.5l15 -9" />
    </svg>
  );
}

export function ChevronDownIcon(props: SVGProps<SVGSVGElement>) {
  const s = { ...tabler, strokeWidth: 1.8 };
  return (
    <svg viewBox="0 0 24 24" {...s} {...props}>
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export function ExternalLinkIcon(props: SVGProps<SVGSVGElement>) {
  const s = { ...tabler, strokeWidth: 1.8 };
  return (
    <svg viewBox="0 0 24 24" {...s} {...props}>
      <path d="M14 4h6v6" />
      <path d="M20 4l-9 9" />
      <path d="M19 14v5a1 1 0 0 1 -1 1H5a1 1 0 0 1 -1 -1V6a1 1 0 0 1 1 -1h5" />
    </svg>
  );
}

// Allergen pictograms — match the ALERGÉNIOS | ALLERGENS legend in the PDFs.
const allergen = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export type Allergen =
  | "gluten" | "eggs" | "dairy" | "peanuts" | "lupin" | "soja"
  | "sulphites" | "mustard" | "nuts" | "crustaceans" | "mollusks"
  | "fish" | "sesame";

export function AllergenIcon({ kind, ...rest }: { kind: Allergen } & SVGProps<SVGSVGElement>) {
  const common = { viewBox: "0 0 24 24", ...allergen, ...rest };
  switch (kind) {
    case "gluten": return (
      <svg {...common}><title>Gluten</title>
        <path d="M12 4v16" />
        <path d="M12 8c-2 0-3-1-4-2M12 8c2 0 3-1 4-2" />
        <path d="M12 12c-2 0-3-1-4-2M12 12c2 0 3-1 4-2" />
        <path d="M12 16c-2 0-3-1-4-2M12 16c2 0 3-1 4-2" />
      </svg>
    );
    case "eggs": return (
      <svg {...common}><title>Eggs</title>
        <ellipse cx="12" cy="13" rx="6" ry="8" />
      </svg>
    );
    case "dairy": return (
      <svg {...common}><title>Dairy</title>
        <path d="M8 4h8l-1 3v13H9V7z" />
        <path d="M8 4l1 3h6" />
      </svg>
    );
    case "peanuts": return (
      <svg {...common}><title>Peanuts</title>
        <path d="M8 5c0-2 2-3 4-3s4 1 4 3v4c0 1-1 2-1 3s1 2 1 3v3c0 2-2 3-4 3s-4-1-4-3v-3c0-1 1-2 1-3s-1-2-1-3z" />
      </svg>
    );
    case "lupin": return (
      <svg {...common}><title>Lupin</title>
        <path d="M12 3c-2 2-2 5-2 7s2 4 2 6 0 4-2 5" />
        <path d="M12 3c2 2 2 5 2 7s-2 4-2 6 0 4 2 5" />
      </svg>
    );
    case "soja": return (
      <svg {...common}><title>Soya</title>
        <ellipse cx="9" cy="10" rx="3" ry="4" transform="rotate(-30 9 10)" />
        <ellipse cx="15" cy="14" rx="3" ry="4" transform="rotate(-30 15 14)" />
      </svg>
    );
    case "sulphites": return (
      <svg {...common}><title>Sulphites</title>
        <path d="M12 3l9 16H3z" />
        <path d="M12 10v4" />
        <circle cx="12" cy="17" r=".7" fill="currentColor" />
      </svg>
    );
    case "mustard": return (
      <svg {...common}><title>Mustard</title>
        <path d="M10 3h4v3l2 3v9a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V9l2-3z" />
        <path d="M10 6h4" />
      </svg>
    );
    case "nuts": return (
      <svg {...common}><title>Nuts</title>
        <path d="M6 12c0-5 3-8 6-8s6 3 6 8-3 8-6 8-6-3-6-8z" />
        <path d="M9 9c1 2 1 4 0 6M15 9c-1 2-1 4 0 6M12 8v8" />
      </svg>
    );
    case "crustaceans": return (
      <svg {...common}><title>Crustaceans</title>
        <ellipse cx="12" cy="13" rx="6" ry="4" />
        <path d="M9 9l-2-3M15 9l2-3M6 13H3M18 13h3M9 17l-2 3M15 17l2 3" />
      </svg>
    );
    case "mollusks": return (
      <svg {...common}><title>Mollusks</title>
        <path d="M5 18c0-7 4-13 9-13s5 5 4 9-4 6-7 6-5-1-6-2z" />
        <path d="M9 17c0-4 2-8 5-10" />
      </svg>
    );
    case "fish": return (
      <svg {...common}><title>Fish</title>
        <path d="M3 12c4-6 11-6 16 0-5 6-12 6-16 0z" />
        <path d="M19 12l3-3v6z" />
        <circle cx="8" cy="11" r=".7" fill="currentColor" />
      </svg>
    );
    case "sesame": return (
      <svg {...common}><title>Sesame seeds</title>
        <ellipse cx="9" cy="10" rx="1.5" ry="3" transform="rotate(-30 9 10)" />
        <ellipse cx="15" cy="11" rx="1.5" ry="3" transform="rotate(30 15 11)" />
        <ellipse cx="12" cy="16" rx="1.5" ry="3" />
      </svg>
    );
  }
}
