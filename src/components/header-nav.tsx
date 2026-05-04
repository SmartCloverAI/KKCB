"use client";

import React, {
  useEffect,
  useRef,
  useState,
  type MouseEvent as ReactMouseEvent
} from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import type { NavigationItem, SiteDictionary } from "@/content/site";
import { LocaleSwitcher } from "@/components/locale-switcher";
import { type Locale } from "@/lib/i18n";
import {
  getHeaderMenuButtonLabel,
  HEADER_MOBILE_BREAKPOINT,
  HEADER_MOBILE_NAV_ID,
  isNavigationItemActive
} from "@/lib/header-nav";
import { withLocale } from "@/lib/site-utils";

type HeaderNavigationProps = {
  locale: Locale;
  dictionary: SiteDictionary;
};

type HeaderNavigationMenuProps = {
  className?: string;
  currentPathname: string;
  items: NavigationItem[];
  locale: Locale;
  navId?: string;
  onNavigate?: () => void;
  stacked?: boolean;
};

type HeaderMenuButtonProps = {
  expanded: boolean;
  label: string;
  onClick?: () => void;
};

export function HeaderNavigation({ locale, dictionary }: HeaderNavigationProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const shellRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    function handlePointerDown(event: MouseEvent | TouchEvent) {
      if (!shellRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    function handleResize() {
      if (window.innerWidth >= HEADER_MOBILE_BREAKPOINT) {
        setIsOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="site-header" ref={shellRef}>
      <Link className="brandmark brandmark--header" href={`/${locale}`}>
        <Image
          alt=""
          className="brandmark__logo"
          height={56}
          src="/media/kids-kicking-cancer-with-budo-mark.webp"
          width={56}
        />
        <span className="brandmark__text">
          <span className="brandmark__label">{dictionary.brand.name}</span>
          <span className="brandmark__chapter">{dictionary.brand.chapter}</span>
        </span>
      </Link>

      <HeaderNavigationMenu
        className="site-header__desktop-nav"
        currentPathname={pathname}
        items={dictionary.nav}
        locale={locale}
      />

      <div className="site-header__meta site-header__meta--desktop">
        <span className="site-header__tagline site-header__tagline--desktop">
          {dictionary.brand.tagline}
        </span>
        <LocaleSwitcher locale={locale} />
      </div>

      <div className="site-header__mobile-controls">
        <LocaleSwitcher locale={locale} />
        <HeaderMenuButton
          expanded={isOpen}
          label={getHeaderMenuButtonLabel(isOpen)}
          onClick={() => setIsOpen((value) => !value)}
        />
      </div>

      <div className="site-header__mobile-sheet-wrap" data-open={isOpen ? "true" : "false"}>
        <HeaderNavigationMenu
          className="site-header__mobile-sheet"
          currentPathname={pathname}
          items={dictionary.nav}
          locale={locale}
          navId={HEADER_MOBILE_NAV_ID}
          onNavigate={() => setIsOpen(false)}
          stacked
        />
      </div>
    </header>
  );
}

export function HeaderNavigationMenu({
  className = "",
  currentPathname,
  items,
  locale,
  navId,
  onNavigate,
  stacked = false
}: HeaderNavigationMenuProps) {
  const navClassName = [
    "site-nav",
    stacked ? "site-nav--stacked" : "",
    className
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <nav aria-label="Primary" className={navClassName} id={navId}>
      {items.map((item) => {
        const isActive = isNavigationItemActive(currentPathname, item.href);

        return (
          <Link
            key={item.href}
            className={isActive ? "site-nav__link site-nav__link--active" : "site-nav__link"}
            href={withLocale(locale, item.href)}
            onClick={onNavigate}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}

export function HeaderMenuButton({ expanded, label, onClick }: HeaderMenuButtonProps) {
  function handleClick(event: ReactMouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    onClick?.();
  }

  return (
    <button
      aria-controls={HEADER_MOBILE_NAV_ID}
      aria-expanded={expanded}
      aria-label={label}
      className="site-header__menu-button"
      data-open={expanded ? "true" : "false"}
      onClick={handleClick}
      type="button"
    >
      <span />
      <span />
      <span />
    </button>
  );
}
