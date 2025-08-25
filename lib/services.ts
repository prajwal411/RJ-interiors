export const SERVICE_CATEGORIES = ["grc", "frp"] as const
export type ServiceCategory = typeof SERVICE_CATEGORIES[number]

export const PRODUCTS_BY_CATEGORY: Record<ServiceCategory, string[]> = {
  grc: ["jali"],
  frp: ["tanks"],
}

export function getAllServiceSlugs(): Array<{ category: ServiceCategory; product: string }> {
  const entries: Array<{ category: ServiceCategory; product: string }> = []
  for (const category of SERVICE_CATEGORIES) {
    for (const product of PRODUCTS_BY_CATEGORY[category]) entries.push({ category, product })
  }
  return entries
}


