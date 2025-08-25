#!/usr/bin/env node
// Simple media renamer for public/images
// Usage:
//   node scripts/rename-media.mjs --dry      # show suggestions only
//   node scripts/rename-media.mjs --apply    # perform renames
//   node scripts/rename-media.mjs --prefix grc-jali --city bengaluru --ext webp --src "Princess1.jpg"

import fs from 'fs'
import path from 'path'

const ROOT = process.cwd()
const IMAGES_DIR = path.join(ROOT, 'public', 'images')

function kebabCase(input) {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

function buildTargetName({ prefix, city, ext }) {
  const parts = [kebabCase(prefix)]
  if (city) parts.push(kebabCase(city))
  const name = parts.filter(Boolean).join('-')
  return `${name}.${ext}`
}

function parseArgs() {
  const args = process.argv.slice(2)
  const flags = { dry: false, apply: false }
  for (let i = 0; i < args.length; i++) {
    const a = args[i]
    if (a === '--dry') flags.dry = true
    else if (a === '--apply') flags.apply = true
    else if (a === '--bulk-kebab') flags.bulk = 'kebab'
    else if (a === '--prefix') flags.prefix = args[++i]
    else if (a === '--city') flags.city = args[++i]
    else if (a === '--ext') flags.ext = args[++i]
    else if (a === '--src') flags.src = args[++i]
  }
  return flags
}

async function main() {
  const opts = parseArgs()
  if (!fs.existsSync(IMAGES_DIR)) {
    console.error('Directory not found:', IMAGES_DIR)
    process.exit(1)
  }

  // Single-file mode
  if (opts.src && opts.prefix && opts.ext) {
    const srcAbs = path.isAbsolute(opts.src) ? opts.src : path.join(IMAGES_DIR, opts.src)
    const targetName = buildTargetName({ prefix: opts.prefix, city: opts.city, ext: opts.ext })
    const targetAbs = path.join(path.dirname(srcAbs), targetName)
    if (opts.dry || !opts.apply) {
      console.log(`[DRY] ${path.basename(srcAbs)} -> ${path.basename(targetAbs)}`)
      return
    }
    await fs.promises.rename(srcAbs, targetAbs)
    console.log(`Renamed: ${path.basename(srcAbs)} -> ${path.basename(targetAbs)}`)
    return
  }

  // Bulk
  const entries = await fs.promises.readdir(IMAGES_DIR)
  const candidates = entries.filter((f) => /\.(jpg|jpeg|png|webp|avif)$/i.test(f))
  if (!candidates.length) {
    console.log('No images found in', IMAGES_DIR)
    return
  }
  if (opts.bulk === 'kebab') {
    const mapping = []
    for (const file of candidates) {
      const base = path.parse(file).name
      const ext = path.parse(file).ext.replace('.', '')
      const suggested = `${kebabCase(base)}.${ext}`
      if (suggested !== file) {
        const from = path.join(IMAGES_DIR, file)
        const to = path.join(IMAGES_DIR, suggested)
        mapping.push({ from: `/images/${file}`, to: `/images/${suggested}` })
        if (opts.apply) {
          await fs.promises.rename(from, to)
          console.log(`Renamed: ${file} -> ${suggested}`)
        } else {
          console.log(`[DRY] ${file} -> ${suggested}`)
        }
      }
    }
    const mapPath = path.join(ROOT, 'scripts', 'media-rename-map.json')
    await fs.promises.writeFile(mapPath, JSON.stringify(mapping, null, 2))
    console.log('Wrote mapping to', mapPath)
    return
  }

  // Default: suggestions only
  console.log('Suggestions (no changes made without --apply and explicit --src mode):')
  for (const file of candidates) {
    const base = path.parse(file).name
    const ext = path.parse(file).ext.replace('.', '')
    const suggested = `${kebabCase(base)}.${ext}`
    if (suggested !== file) {
      console.log(` - ${file} -> ${suggested}`)
    }
  }
  console.log('\nTip: Bulk kebab-case rename:')
  console.log('  node scripts/rename-media.mjs --apply --bulk-kebab')
  console.log('Tip: Single-file rename with product/city/ext:')
  console.log('  node scripts/rename-media.mjs --apply --src "Princess1.jpg" --prefix "grc-jali" --city "bengaluru" --ext webp')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})


