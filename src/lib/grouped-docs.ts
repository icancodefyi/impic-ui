import { componentsRegistry } from "./components-registry"

export interface GroupedNavItem {
  href: string
  name: string
  new?: boolean
  updated?: boolean
}

export interface GroupedNavCategory {
  [category: string]: GroupedNavItem[]
}

export const groupedDocsNavigationCategories: GroupedNavCategory = {
  "UI Components": componentsRegistry
    .filter((c) => c.category === "ui")
    .map((c) => ({
      href: `/components/${c.slug}`,
      name: c.title,
    })),
  Blocks: componentsRegistry
    .filter((c) => c.category === "block")
    .map((c) => ({
      href: `/components/${c.slug}`,
      name: c.title,
    })),
}
