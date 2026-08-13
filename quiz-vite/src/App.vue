<script setup>
import { computed, nextTick, onMounted, reactive, ref } from 'vue'
import { BANKS, BANK_LIST, currentSlug } from './banks'

const slug = currentSlug()
const bank = slug === 'home' ? null : BANKS[slug]
const alphabet = ['A', 'B', 'C', 'D']
const labels = { single: '单选题', multiple: '多选题', judge: '判断题' }
const loading = ref(Boolean(bank))
const loadError = ref('')
const message = ref('')
const toolbarCollapsed = ref(true)
const homeSearch = ref('')

const state = reactive({
  all: [],
  current: [],
  answers: {},
  submitted: false,
  wrongIds: [],
  wrongCursor: 0,
  peeked: {},
  mode: 'sequence',
  offset: 0,
  filters: { search: '', stage: '', type: '', difficulty: '', size: '20' },
})

const storageKey = bank ? `training-quiz-vite-${bank.slug}-v1` : ''
const toolbarStorageKey = 'training-quiz-vite-toolbar-collapsed-v1'

const filtered = computed(() => {
  const key = state.filters.search.trim().toLowerCase()
  return state.all.filter((q) => {
    const haystack = [q.stem, ...(q.topics || []), q.stageName, q.lecture && `第${q.lecture}讲`]
      .filter(Boolean).join(' ').toLowerCase()
    return (!key || haystack.includes(key))
      && (!state.filters.stage || String(q.stage ?? q.lecture ?? '') === state.filters.stage)
      && (!state.filters.type || q.type === state.filters.type)
      && (!state.filters.difficulty || q.difficulty === state.filters.difficulty)
  })
})

const stageOptions = computed(() => {
  const values = new Map()
  state.all.forEach((q) => {
    const value = String(q.stage ?? q.lecture ?? '')
    if (value && !values.has(value)) values.set(value, q.stageName || `第${value}讲`)
  })
  return [...values.entries()]
})

const typeOptions = computed(() => [...new Set(state.all.map((q) => q.type))])
const difficultyOptions = computed(() => [...new Set(state.all.map((q) => q.difficulty).filter(Boolean))])
const batchSize = computed(() => Number(state.filters.size) || filtered.value.length || 1)
const countText = computed(() => {
  if (state.mode === 'random') return `随机练习：${state.current.length} 题 / 筛选后 ${filtered.value.length} 题`
  const from = state.current.length ? state.offset + 1 : 0
  const to = state.offset + state.current.length
  return `顺序刷题：第 ${from}–${to} 题 / 筛选后 ${filtered.value.length} 题`
})
const scoreText = computed(() => state.submitted ? `得分：${state.current.length - state.wrongIds.length} / ${state.current.length}` : '')
const wrongText = computed(() => state.wrongIds.length
  ? `定位错题（下一个 ${state.wrongCursor % state.wrongIds.length + 1}/${state.wrongIds.length}）`
  : '定位错题')
const homeBanks = computed(() => {
  const key = homeSearch.value.trim().toLowerCase()
  return BANK_LIST.filter((item) => !key || `${item.title} ${item.description} ${item.search}`.toLowerCase().includes(key))
})

function answerValues(q) {
  return Array.isArray(q.answer) ? [...q.answer].sort() : [q.answer]
}

function optionsFor(q) {
  if (q.type === 'judge') return [{ value: '正确', label: '正确' }, { value: '错误', label: '错误' }]
  return (q.options || []).map((label, index) => ({ value: alphabet[index], label }))
}

function selected(q, value) {
  return (state.answers[q.id] || []).includes(value)
}

function isCorrect(q) {
  const actual = [...(state.answers[q.id] || [])].sort()
  const expected = [...answerValues(q)].sort()
  return JSON.stringify(actual) === JSON.stringify(expected)
}

function stageLabel(q) {
  return q.stageName || (q.stage ? `第${q.stage}阶段` : q.lecture ? `第${q.lecture}讲` : '通用')
}

function questionAnswer(q) {
  return [...answerValues(q)].sort().join('、')
}

function optionExplanationEntries(q) {
  return Object.entries(q.optionExplanations || {}).sort(([a], [b]) => a.localeCompare(b))
}

function resetAttempt() {
  state.answers = {}
  state.submitted = false
  state.wrongIds = []
  state.wrongCursor = 0
  state.peeked = {}
}

function save() {
  if (!storageKey) return
  localStorage.setItem(storageKey, JSON.stringify({
    ids: state.current.map((q) => q.id),
    answers: state.answers,
    submitted: state.submitted,
    wrongIds: state.wrongIds,
    peeked: state.peeked,
    mode: state.mode,
    offset: state.offset,
    filters: state.filters,
  }))
}

function setCurrent(items, reset = true) {
  state.current = items
  if (reset) resetAttempt()
  save()
}

function startSequence(resetOffset = true) {
  state.mode = 'sequence'
  if (resetOffset) state.offset = 0
  const last = Math.max(0, Math.floor(Math.max(0, filtered.value.length - 1) / batchSize.value) * batchSize.value)
  state.offset = Math.min(Math.max(0, state.offset), last)
  setCurrent(filtered.value.slice(state.offset, state.offset + batchSize.value))
}

function startRandom() {
  state.mode = 'random'
  state.offset = 0
  const items = [...filtered.value]
  for (let i = items.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[items[i], items[j]] = [items[j], items[i]]
  }
  setCurrent(items.slice(0, batchSize.value))
}

function moveBatch(direction) {
  if (state.mode !== 'sequence') return
  const last = Math.max(0, Math.floor(Math.max(0, filtered.value.length - 1) / batchSize.value) * batchSize.value)
  state.offset = Math.min(last, Math.max(0, state.offset + direction * batchSize.value))
  setCurrent(filtered.value.slice(state.offset, state.offset + batchSize.value))
}

function applyFilters() {
  startSequence(true)
}

function answer(q, value) {
  if (state.submitted) return
  const existing = state.answers[q.id] || []
  if (q.type === 'multiple') {
    state.answers[q.id] = existing.includes(value) ? existing.filter((item) => item !== value) : [...existing, value]
  } else {
    state.answers[q.id] = [value]
  }
  save()
}

function submit() {
  state.submitted = true
  state.wrongIds = state.current.filter((q) => !isCorrect(q)).map((q) => q.id)
  state.wrongCursor = 0
  save()
}

function resetCurrent() {
  resetAttempt()
  save()
}

function focusNextWrong() {
  if (!state.submitted) {
    message.value = '请先提交练习，再定位错题。'
    return
  }
  if (!state.wrongIds.length) {
    message.value = '本次练习全部正确！'
    return
  }
  const id = state.wrongIds[state.wrongCursor % state.wrongIds.length]
  state.wrongCursor = (state.wrongCursor + 1) % state.wrongIds.length
  message.value = ''
  nextTick(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'center' }))
}

function peek(q) {
  state.peeked[q.id] = !state.peeked[q.id]
  save()
}

function restoreProgress() {
  const raw = localStorage.getItem(storageKey)
  if (!raw) return false
  try {
    const saved = JSON.parse(raw)
    Object.assign(state.filters, saved.filters || {})
    const byId = new Map(state.all.map((q) => [q.id, q]))
    const restored = (saved.ids || []).map((id) => byId.get(id)).filter(Boolean)
    if (!restored.length) return false
    state.current = restored
    state.answers = saved.answers || {}
    state.submitted = Boolean(saved.submitted)
    state.wrongIds = saved.wrongIds || []
    state.peeked = saved.peeked || {}
    state.mode = saved.mode || 'sequence'
    state.offset = Number(saved.offset) || 0
    state.wrongCursor = 0
    return true
  } catch {
    return false
  }
}

function toggleToolbar() {
  toolbarCollapsed.value = !toolbarCollapsed.value
  localStorage.setItem(toolbarStorageKey, toolbarCollapsed.value ? '1' : '0')
}

async function loadBank() {
  if (!bank) return
  try {
    const response = await fetch(new URL(bank.json, document.baseURI))
    if (!response.ok) throw new Error(`HTTP ${response.status}`)
    const data = await response.json()
    state.all = data.questions || []
    if (!restoreProgress()) startSequence(true)
  } catch (error) {
    loadError.value = `题库加载失败：${error.message}`
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  document.title = bank ? `${bank.title} · 培训考试题库` : '培训考试题库'
  toolbarCollapsed.value = localStorage.getItem(toolbarStorageKey) !== '0'
  loadBank()
})
</script>

<template>
  <main v-if="!bank" class="shell home-shell">
    <section class="hero home-hero">
      <div class="eyebrow">TRAINING · QUIZ LIBRARY</div>
      <h1>培训考试题库</h1>
      <p>选择一套题库开始练习。每套题库都提供顺序刷题、随机抽题、偷瞄答案与详细解析，答题进度保存在当前浏览器中。</p>
      <div class="hero-hint">无需登录 · 无后端 · 支持手机浏览器</div>
    </section>
    <div class="home-toolbar"><h2>选择题库</h2><input v-model="homeSearch" type="search" placeholder="搜索题库名称或关键词" aria-label="搜索题库" /></div>
    <section class="bank-grid" aria-live="polite">
      <article v-for="item in homeBanks" :key="item.slug" class="bank-card">
        <div class="eyebrow bank-tag">{{ item.tag }}</div>
        <h2>{{ item.title }}</h2>
        <p>{{ item.description }}</p>
        <div class="bank-counts"><span v-for="count in item.counts" :key="count">{{ count }}</span></div>
        <div class="bank-links"><a class="primary" :href="`${item.slug}/index.html`">进入练习</a><a class="secondary" :href="`${item.slug}/${item.pdf[0]}`">题目卷</a><a class="secondary" :href="`${item.slug}/${item.pdf[1]}`">答案解析</a></div>
      </article>
    </section>
    <p v-if="!homeBanks.length" class="empty">没有匹配的题库。</p>
    <footer>题库文件与练习数据均为静态资源，答案仅保存在本地浏览器。</footer>
  </main>

  <main v-else class="shell">
    <section class="hero">
      <div class="eyebrow">{{ bank.tag }}</div>
      <h1>{{ bank.title }}</h1>
      <p>{{ bank.description }}</p>
      <div v-if="state.all.length" class="stats"><span><b>{{ state.all.length }}</b> 题目总数</span><span><b>{{ state.all.filter((q) => q.type === 'single').length }}</b> 单选题</span><span><b>{{ state.all.filter((q) => q.type === 'multiple').length }}</b> 多选题</span><span v-if="state.all.some((q) => q.type === 'judge')"><b>{{ state.all.filter((q) => q.type === 'judge').length }}</b> 判断题</span></div>
    </section>
    <div v-if="bank.route" class="route"><b>推荐路线：</b>{{ bank.route }}。顺序刷题按批次展示，不会一次只显示一题。</div>

    <section class="toolbar" :class="{ collapsed: toolbarCollapsed }" aria-label="练习筛选">
      <div class="toolbar-head"><strong>题目生成与筛选</strong><button class="toolbar-toggle" type="button" :aria-expanded="!toolbarCollapsed" @click="toggleToolbar">{{ toolbarCollapsed ? '展开题目生成' : '收起题目生成' }}</button></div>
      <div v-show="!toolbarCollapsed" class="toolbar-controls">
        <input v-model="state.filters.search" class="search" type="search" placeholder="搜索题干、主题或学习阶段" aria-label="搜索题干、主题或学习阶段" @input="applyFilters" @keyup.enter="applyFilters" />
        <select v-model="state.filters.stage" aria-label="学习阶段" @change="applyFilters"><option value="">全部学习阶段</option><option v-for="([value, label]) in stageOptions" :key="value" :value="value">{{ label }}</option></select>
        <select v-model="state.filters.type" aria-label="题型" @change="applyFilters"><option value="">全部题型</option><option v-for="type in typeOptions" :key="type" :value="type">{{ labels[type] || type }}</option></select>
        <select v-model="state.filters.difficulty" aria-label="难度" @change="applyFilters"><option value="">全部难度</option><option v-for="difficulty in difficultyOptions" :key="difficulty">{{ difficulty }}</option></select>
        <select v-model="state.filters.size" aria-label="每批题量" @change="applyFilters"><option value="10">10 题</option><option value="20">20 题</option><option value="50">50 题</option><option value="0">全部</option></select>
        <button type="button" @click="startRandom">随机练习</button><button type="button" class="sequence" @click="startSequence(true)">顺序刷题</button>
      </div>
    </section>

    <div class="summary"><span>{{ countText }}</span><span class="downloads"><a :href="bank.pdf[0]">题目卷 PDF</a><a :href="bank.pdf[1]">答案解析 PDF</a></span></div>
    <div v-if="loading" class="empty">正在加载题库…</div>
    <div v-else-if="loadError" class="empty error">{{ loadError }}</div>
    <section v-else class="questions" aria-live="polite">
      <article v-for="q in state.current" :id="q.id" :key="q.id" class="question-card" :class="{ correct: state.submitted && isCorrect(q), wrong: state.submitted && !isCorrect(q) }">
        <div class="meta"><span>{{ q.id }}</span><span>{{ stageLabel(q) }}</span><span>{{ labels[q.type] || q.type }}</span><span v-if="q.difficulty">{{ q.difficulty }}</span><span v-if="q.cognitiveLevel">{{ q.cognitiveLevel }}</span></div>
        <h2>{{ q.stem }}</h2>
        <pre v-if="q.code" class="code">{{ q.code }}</pre>
        <fieldset :disabled="state.submitted"><legend class="sr-only">选择答案</legend><label v-for="option in optionsFor(q)" :key="option.value" class="option"><input :type="q.type === 'multiple' ? 'checkbox' : 'radio'" :name="q.id" :checked="selected(q, option.value)" @change="answer(q, option.value)" /><span><b v-if="q.type !== 'judge'">{{ option.value }}. </b>{{ option.label }}</span></label></fieldset>
        <div class="peekbar"><button type="button" class="peek" @click="peek(q)">{{ state.peeked[q.id] ? '收起答案' : '偷瞄答案' }}</button><span v-if="state.peeked[q.id]">已偷瞄，不影响提交与得分</span></div>
        <div v-if="state.peeked[q.id] && !state.submitted" class="peek-answer"><b>正确答案：{{ questionAnswer(q) }}</b><p>{{ q.explanation }}</p><p v-for="([key, text]) in optionExplanationEntries(q)" :key="key"><b>{{ key }}：</b>{{ text }}</p></div>
        <div v-if="state.submitted" class="result"><b>{{ isCorrect(q) ? '✓ 正确' : '✗ 错误' }}　答案：{{ questionAnswer(q) }}</b><p>{{ q.explanation }}</p><p v-for="([key, text]) in optionExplanationEntries(q)" :key="key"><b>{{ key }}：</b>{{ text }}</p></div>
      </article>
      <div v-if="!state.current.length" class="empty">没有符合条件的题目，请调整筛选条件。</div>
    </section>

    <div class="actions"><span class="score">{{ scoreText }}</span><button type="button" :disabled="state.mode !== 'sequence' || state.offset === 0" @click="moveBatch(-1)">上一批</button><button type="button" @click="submit">提交判分</button><button type="button" :disabled="state.mode !== 'sequence' || state.offset + state.current.length >= filtered.length" @click="moveBatch(1)">下一批</button><button class="secondary" type="button" @click="startSequence(true)">从头刷题</button><button class="secondary" type="button" @click="focusNextWrong">{{ wrongText }}</button><button class="secondary" type="button" @click="resetCurrent">重新作答</button></div>
    <p v-if="message" class="notice" role="status">{{ message }}</p>
  </main>
</template>
