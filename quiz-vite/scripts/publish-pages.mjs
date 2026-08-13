import { cp, mkdir, rm } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const here = path.dirname(fileURLToPath(import.meta.url))
const app = path.resolve(here, '..')
const site = path.resolve(app, '..')
const dist = path.join(app, 'dist')
const pages = ['', 'vue', 'java-basic', 'java-advanced', 'database', 'spring', 'spring-extension']

await Promise.all(pages.map(async (page) => {
  const target = path.join(site, page)
  await mkdir(target, { recursive: true })
  await cp(path.join(dist, 'index.html'), path.join(target, 'index.html'))
  await rm(path.join(target, 'assets'), { recursive: true, force: true })
  await cp(path.join(dist, 'assets'), path.join(target, 'assets'), { recursive: true })
  await cp(path.join(dist, 'favicon.svg'), path.join(target, 'favicon.svg'))
}))

await cp(path.resolve(site, '..', '..', '..', '前端开发', '前端开发测试题库', '前端开发测试题库.json'), path.join(site, 'vue', 'questions.json'))
await cp(path.resolve(site, '..', 'Spring扩展测试题库.json'), path.join(site, 'spring-extension', 'questions.json'))

console.log(`Published Vue/Vite app to ${pages.length} GitHub Pages entries.`)
