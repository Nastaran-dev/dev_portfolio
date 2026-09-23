"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { MenuIcon, CloseIcon } from "@/components/ui/Icon";
import { NAV_ITEMS } from "@/constants/navigation";
import { SITE } from "@/constants/site";

/**
 * Figma reference: node 17:805 ("Header"), nav links use Inter Medium
 * 18px. The logo placeholder (11:90) is rendered as the site wordmark;
 * a hamburger menu is added for mobile since the Figma frame only
 * covers the 1440px desktop layout.
 */
export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-primary-dark/80 backdrop-blur-md">
      <div className="container-page flex h-20 items-center justify-between">
        <a href="#home" className="font-heading text-xl font-bold text-neutral-text">
          {SITE.name}
          <span className="text-accent-cyan">.</span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-10 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-nav text-body-sm font-medium uppercase tracking-wide text-neutral-text/90 transition-colors hover:text-accent-cyan"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href="#contact" size="sm">
            Contact
          </Button>
        </div>

        <button
          type="button"
          className="text-neutral-text md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <CloseIcon className="h-7 w-7" /> : <MenuIcon className="h-7 w-7" />}
        </button>
      </div>

      <nav
        id="mobile-nav"
        aria-label="Mobile"
        className={cn(
          "overflow-hidden bg-primary-dark transition-[max-height] duration-300 ease-in-out md:hidden",
          isOpen ? "max-h-80" : "max-h-0"
        )}
      >
        <div className="container-page flex flex-col gap-6 py-6">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="font-nav text-body-lg font-medium uppercase tracking-wide text-neutral-text/90"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
