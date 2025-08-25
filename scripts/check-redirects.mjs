#!/usr/bin/env node
import fs from 'fs'
import path from 'path'

const ROOT = process.cwd()
const nextConfigPath = path.join(ROOT, 'next.config.mjs')

async function loadRedirects() {
  const mod = await import(pathToFileURL(nextConfigPath))
  if (typeof mod.default?.redirects !== 'function') return []
  return await mod.default.redirects()
}

function buildGraph(redirects) {
  const graph = new Map()
  for (const r of redirects) {
    graph.set(r.source, r.destination)
  }
  return graph
}

function detectChainsAndLoops(graph) {
  const visited = new Set()
  const issues = { chains: [], loops: [] }
  for (const start of graph.keys()) {
    if (visited.has(start)) continue
    const path = []
    let current = start
    const local = new Set()
    while (graph.has(current)) {
      if (local.has(current)) {
        issues.loops.push([...path, current])
        break
      }
      path.push(current)
      local.add(current)
      visited.add(current)
      current = graph.get(current)
    }
    if (path.length > 1) issues.chains.push(path)
  }
  return issues
}

async function main() {
  const redirects = await (await import('file://' + nextConfigPath)).default.redirects?.() || []
  const graph = buildGraph(redirects)
  const issues = detectChainsAndLoops(graph)
  if (!issues.chains.length && !issues.loops.length) {
    console.log('No redirect chains or loops detected.')
    return
  }
  if (issues.chains.length) {
    console.log('Chains:')
    for (const chain of issues.chains) console.log(' -', chain.join(' -> '))
  }
  if (issues.loops.length) {
    console.log('Loops:')
    for (const loop of issues.loops) console.log(' -', loop.join(' -> '))
  }
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})


