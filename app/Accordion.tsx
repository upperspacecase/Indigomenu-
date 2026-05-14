"use client";

import { useState, type ReactNode } from "react";
import { ChevronDownIcon, ExternalLinkIcon } from "./icons";

export type AccordionItemProps = {
  id: string;
  icon: ReactNode;
  title: string;
  subtitle?: string;
  children?: ReactNode;
};

export type LinkItemProps = {
  icon: ReactNode;
  title: string;
  subtitle?: string;
  href: string;
};

export function LinkItem({ icon, title, subtitle, href }: LinkItemProps) {
  return (
    <a className="acc-item link-item" href={href} target="_blank" rel="noopener noreferrer">
      <span className="acc-icon">{icon}</span>
      <span className="acc-titles">
        <span className="acc-title">{title}</span>
        {subtitle && <span className="acc-sub" style={{ display: "block" }}>{subtitle}</span>}
      </span>
      <span className="acc-caret" aria-hidden="true">
        <ExternalLinkIcon />
      </span>
    </a>
  );
}

export function AccordionItem({ id, icon, title, subtitle, children }: AccordionItemProps) {
  const [open, setOpen] = useState(false);
  const panelId = `${id}-panel`;
  return (
    <div className="acc-item" data-open={open}>
      <button
        type="button"
        className="acc-header"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen(o => !o)}
      >
        <span className="acc-icon">{icon}</span>
        <span className="acc-titles">
          <span className="acc-title">{title}</span>
          {subtitle && <span className="acc-sub" style={{ display: "block" }}>{subtitle}</span>}
        </span>
        <span className="acc-caret" aria-hidden="true">
          <ChevronDownIcon />
        </span>
      </button>
      <div id={panelId} className="acc-panel" role="region">
        <div className="acc-content">
          {children ?? <div className="acc-placeholder">Content coming soon.</div>}
        </div>
      </div>
    </div>
  );
}

export function Accordion({ children }: { children: ReactNode }) {
  return <div className="accordion">{children}</div>;
}
