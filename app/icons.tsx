import type { SVGProps } from "react";

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function SunIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" {...stroke} {...props}>
      <circle cx="16" cy="16" r="5" />
      <path d="M16 4v3M16 25v3M4 16h3M25 16h3M7.5 7.5l2 2M22.5 22.5l2 2M24.5 7.5l-2 2M9.5 22.5l-2 2" />
    </svg>
  );
}

export function CoffeeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" {...stroke} {...props}>
      <path d="M6 13h17v6a6 6 0 0 1-6 6h-5a6 6 0 0 1-6-6v-6Z" />
      <path d="M23 15h2a3 3 0 0 1 0 6h-2" />
      <path d="M11 8c0-2 2-2 2-4M16 8c0-2 2-2 2-4" />
    </svg>
  );
}

export function ForkKnifeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" {...stroke} {...props}>
      <path d="M9 5v9a2 2 0 0 0 2 2h0v11" />
      <path d="M13 5v6M5 5v6M9 11v0" />
      <path d="M22 5c-2 2-3 4-3 8s2 5 3 5v9" />
    </svg>
  );
}

export function CocktailIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" {...stroke} {...props}>
      <path d="M5 7h22L16 19 5 7Z" />
      <path d="M16 19v8M11 27h10" />
    </svg>
  );
}

export function WineIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" {...stroke} {...props}>
      <path d="M10 5h12v4a6 6 0 0 1-12 0V5Z" />
      <path d="M16 15v10M11 27h10" />
    </svg>
  );
}

export function GroupIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" {...stroke} {...props}>
      <circle cx="16" cy="11" r="3.2" />
      <circle cx="7"  cy="13" r="2.6" />
      <circle cx="25" cy="13" r="2.6" />
      <path d="M10 24c.5-3.5 3-5 6-5s5.5 1.5 6 5" />
      <path d="M3 24c.4-2.8 2-4 4-4M29 24c-.4-2.8-2-4-4-4" />
    </svg>
  );
}

export function LocationIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" {...stroke} {...props}>
      <path d="M22 14a6 6 0 1 1-6-6" />
      <path d="M22 8v6h-6" />
    </svg>
  );
}

export function PhoneIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" {...stroke} {...props}>
      <path d="M9 5h3l2 6-3 2a14 14 0 0 0 8 8l2-3 6 2v3a3 3 0 0 1-3 3A19 19 0 0 1 6 8a3 3 0 0 1 3-3Z" />
      <path d="M22 6a4 4 0 0 1 4 4M22 2a8 8 0 0 1 8 8" />
    </svg>
  );
}

export function ReviewIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" {...stroke} {...props}>
      <circle cx="16" cy="16" r="11" />
      <circle cx="10" cy="16" r="1.3" fill="currentColor" />
      <circle cx="16" cy="16" r="1.3" fill="currentColor" />
      <circle cx="22" cy="16" r="1.3" fill="currentColor" />
    </svg>
  );
}

export function WebcamIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" {...stroke} {...props}>
      <circle cx="16" cy="14" r="8" />
      <circle cx="16" cy="14" r="3" />
      <path d="M9 26h14M16 22v4" />
    </svg>
  );
}

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" {...stroke} {...props}>
      <rect x="5" y="5" width="22" height="22" rx="5" />
      <circle cx="16" cy="16" r="5" />
      <circle cx="22.5" cy="9.5" r="1" fill="currentColor" />
    </svg>
  );
}

export function ChevronDownIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} {...props}>
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}
