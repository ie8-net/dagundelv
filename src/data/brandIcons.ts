/**
 * Server-only lookup into the bundled simple-icons package. Only ever import
 * this from .astro frontmatter (build time) — never from a client <script>,
 * since simple-icons ships every brand icon and would bloat the browser bundle.
 */
import * as simpleIcons from 'simple-icons';

type SimpleIcon = { path: string; hex: string };

export interface BrandIcon {
  path: string;
  hex: string;
}

export function getBrandIcon(slug?: string): BrandIcon | null {
  if (!slug) return null;
  const icon = (simpleIcons as unknown as Record<string, SimpleIcon>)[slug];
  if (!icon) return null;
  return { path: icon.path, hex: `#${icon.hex}` };
}
