# 统一题库前端

几个题库共用这一套 Vue 3 + Vite 前端，题库 JSON 是独立数据源。`App.vue` 负责筛选、顺序/随机批次、单选/多选/判断作答、判分、错题循环定位、偷瞄解析和浏览器本地进度；`banks.js` 只维护各入口的展示信息与资源文件名。

```bash
npm install
npm run dev
npm run publish:pages
```

`publish:pages` 会构建生产包，并把同一份 `dist` 同步到根首页和六个题库目录，保证各入口的技术栈与交互行为一致。构建后的页面不依赖 CDN 或后端服务。
