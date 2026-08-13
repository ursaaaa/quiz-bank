export const BANKS = {
  'java-basic': {
    slug: 'java-basic',
    tag: 'JAVA · FOUNDATION',
    title: 'Java 开发基础',
    description: '面向完成 Java 入门学习的新员工，覆盖语法、面向对象、集合、异常、IO、多线程与基础工程实践。',
    search: 'java 开发基础 面向对象 集合 多线程',
    counts: ['500 题', '单选 250', '多选 150', '判断 100'],
    json: 'questions.json',
    pdf: ['Java开发基础测试题_题目卷.pdf', 'Java开发基础测试题_答案解析.pdf'],
  },
  'java-advanced': {
    slug: 'java-advanced',
    tag: 'JAVA · ADVANCED',
    title: 'Java 开发进阶',
    description: '围绕异常治理、工程分层、构建交付、服务协同与可观测性，强化真实场景下的设计判断。',
    search: 'java 开发进阶 并发 jvm 工程',
    counts: ['200 题', '单选 100', '多选 60', '判断 40'],
    json: 'questions.json',
    pdf: ['Java开发进阶测试题_题目卷.pdf', 'Java开发进阶测试题_答案解析.pdf'],
  },
  vue: {
    slug: 'vue',
    tag: 'FRONTEND · VUE',
    title: 'Vue 前端开发',
    description: '覆盖 Vue 3 模板、响应式、组件通信、组合式 API、路由、状态管理及常用生态工具。',
    search: 'vue 前端开发 html css javascript 响应式 组件',
    counts: ['500 题', '单选 250', '多选 150', '判断 100'],
    json: 'questions.json',
    pdf: ['前端开发测试题_题目卷.pdf', '前端开发测试题_答案解析.pdf'],
  },
  database: {
    slug: 'database',
    tag: 'DATABASE',
    title: '数据库基础',
    description: '从关系模型、SQL、索引、事务、锁与性能分析入手，结合常见数据库开发场景进行巩固。',
    search: '数据库 sql mysql 关系型 索引 事务',
    counts: ['100 题', '单选 50', '多选 30', '判断 20'],
    json: 'questions.json',
    pdf: ['数据库基础测试题_题目卷.pdf', '数据库基础测试题_答案解析.pdf'],
  },
  spring: {
    slug: 'spring',
    tag: 'SPRING · COURSE',
    title: 'Spring 分层过渡增强题库',
    description: '从 Java 对象、依赖和 Bean 开始，循序覆盖 Spring Core、AOP、Spring Boot、Spring Cloud 与 Spring Cloud Alibaba。',
    search: 'spring spring boot spring cloud java 框架 微服务',
    route: 'Java → Spring 前置桥接 → Bean/IoC/DI → AOP/MVC/事务/测试 → Spring Boot → Spring Cloud → Spring Cloud Alibaba',
    counts: ['600 题', '单选 360', '多选 240'],
    json: 'questions.json',
    pdf: ['Spring开发增强测试题_题目卷.pdf', 'Spring开发增强测试题_答案解析.pdf'],
  },
  'spring-extension': {
    slug: 'spring-extension',
    tag: 'SPRING · EXTENSION',
    title: 'Spring 系列扩展题库',
    description: '在课件基础上延展 Spring Cloud 与 Spring Cloud Alibaba 的官方文档和工程场景，适合进阶复习。',
    search: 'spring cloud alibaba nacos sentinel seata 扩展 官方文档',
    counts: ['500 题', '单选 300', '多选 200'],
    json: 'questions.json',
    pdf: ['Spring扩展测试题_题目卷.pdf', 'Spring扩展测试题_答案解析.pdf'],
  },
}

export const BANK_LIST = Object.values(BANKS)

export function currentSlug(pathname = window.location.pathname) {
  const segments = pathname.split('/').filter(Boolean)
  return segments.find((segment) => BANKS[segment]) || 'home'
}
