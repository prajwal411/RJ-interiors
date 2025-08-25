import Link from "next/link"

type Crumb = {
  name: string
  href?: string
}

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-4 text-sm text-text-secondary">
      <ol className="flex flex-wrap items-center gap-1">
        {items.map((item, idx) => (
          <li key={`${item.name}-${idx}`} className="flex items-center">
            {item.href ? (
              <Link href={item.href} className="hover:text-gold-500">
                {item.name}
              </Link>
            ) : (
              <span className="text-text-primary">{item.name}</span>
            )}
            {idx < items.length - 1 && <span className="mx-2">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  )
}


