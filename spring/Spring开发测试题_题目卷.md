# Spring & Spring Boot & Spring Cloud 500 题测试题 - 题目卷

> 依据 Spring、Spring Boot 与 Spring Cloud 课件编制。共 500 题：单选 300 题、多选 200 题。
> 逐题人工编写，脚本仅负责编号和格式导出。

## 作答说明

- 单选题：每题只有 1 个正确选项。
- 多选题：每题有 2-3 个正确选项，少选、多选或错选均不得分。
- 本卷不含答案；请使用配套答案解析卷核对。

# 第1讲：Spring 概述、核心包与 IoC/DI

## 单选题

### SPRING-001（单选题）

Spring首先被定位为哪类软件？

A. Java企业级应用开发框架
B. 关系数据库管理系统
C. 操作系统内核
D. 前端构建工具

### SPRING-002（单选题）

Spring降低应用模块耦合度的核心机制是？

A. IoC容器统一管理对象
B. 把所有类改成静态类
C. 强制使用继承
D. 把配置写入数据库

### SPRING-003（单选题）

Spring中AOP主要用于处理哪一类问题？

A. 横切关注点
B. 磁盘分区
C. 编译器词法分析
D. 数据库索引存储

### SPRING-004（单选题）

以下哪项属于Spring生态中的数据访问方向？

A. Spring Data
B. Spring Cloud Gateway only
C. Spring Shell only
D. Spring Security only

### SPRING-005（单选题）

Spring Framework 1.0在课件时间线中确立了哪两个核心理念？

A. IoC与AOP
B. MVC与WebFlux
C. JPA与MyBatis
D. 容器编排与服务网格

### SPRING-006（单选题）

课件指出Spring 2.5的重要演进是？

A. 全面拥抱注解驱动
B. 原生支持Java 17
C. 引入WebFlux响应式模型
D. 发布Spring Boot 1.0

### SPRING-007（单选题）

Spring Framework 5.0在课件中引入了什么模型？

A. WebFlux响应式模型
B. EJB实体Bean模型
C. JSP标签库模型
D. RMI专用模型

### SPRING-008（单选题）

Spring Framework 6.0的基础Java版本是？

A. Java 17
B. Java 6
C. Java 8
D. Java 11

### SPRING-009（单选题）

Spring Boot 1.0发布于课件时间线中的哪一年？

A. 2014年
B. 2004年
C. 2017年
D. 2022年

### SPRING-010（单选题）

课件把Spring Boot 3.0的基础版本描述为？

A. 基于Spring 6并原生支持Java 17
B. 基于Spring 2并支持Java 6
C. 基于Spring 4并只支持XML
D. 基于Spring MVC 1并依赖EJB

### SPRING-011（单选题）

传统代码中直接使用new创建依赖对象，通常会导致什么问题？

A. 对象间强耦合
B. 自动获得事务代理
C. 自动进行包扫描
D. 编译期生成配置

### SPRING-012（单选题）

Spring模板的主要价值是？

A. 封装JDBC、事务等底层样板工作
B. 取代所有业务规则
C. 自动设计数据库表
D. 替代Java编译器

### SPRING-013（单选题）

IoC容器接管对象管理后，组件更容易进行哪项工作？

A. 单元测试与实现替换
B. 修改JVM字节码版本
C. 绕过Java类型检查
D. 删除所有接口

### SPRING-014（单选题）

org.springframework.core包主要提供什么？

A. 底层通用能力与基础设施
B. 只负责Web视图渲染
C. 只负责SQL执行
D. 只负责安全认证

### SPRING-015（单选题）

org.springframework.beans包的核心职责是？

A. Java Bean实例化、属性填充和销毁管理
B. 解析HTTP请求路径
C. 提供响应式网络服务器
D. 管理国际化资源

### SPRING-016（单选题）

org.springframework.context相对于beans包的主要扩展是？

A. 提供应用上下文及事件、国际化等企业服务
B. 仅提供Java基本类型
C. 只负责字节码增强
D. 只实现数据库连接池

### SPRING-017（单选题）

org.springframework.web包面向的场景是？

A. Web应用请求与交互
B. JVM垃圾回收
C. 磁盘文件系统
D. Java编译优化

### SPRING-018（单选题）

一个需要国际化、事件发布和资源加载的应用上下文，优先依赖哪个包？

A. org.springframework.context
B. org.springframework.beans
C. org.springframework.web
D. org.springframework.core only

### SPRING-019（单选题）

控制反转（IoC）反转的主要是什么控制权？

A. 对象创建和依赖管理的控制权
B. CPU调度控制权
C. 数据库磁盘控制权
D. HTTP协议控制权

### SPRING-020（单选题）

依赖注入（DI）在Spring中指什么？

A. 容器把依赖对象注入目标Bean
B. 目标Bean主动new所有依赖
C. 把依赖写入数据库表
D. 由编译器删除依赖

### SPRING-021（单选题）

“Don't call me, I'll call you”在课件中用来说明什么？

A. 好莱坞原则和控制反转
B. 数据库事务隔离
C. 线程池拒绝策略
D. 编译器回调优化

### SPRING-022（单选题）

以下哪种方式不属于课件列出的常见依赖注入方式？

A. 构造器注入
B. Setter注入
C. 字段注入
D. 数据库触发器注入

### SPRING-023（单选题）

传统XML配置定义Bean通常使用哪个元素？

```java
<bean id="userService" class="com.demo.UserService"/>
```

A. <bean>
B. <component>
C. <service>
D. <inject>

### SPRING-024（单选题）

Java配置类中声明Bean实例通常使用哪个注解？

A. @Bean
B. @Entity
C. @Mapper
D. @Test

### SPRING-025（单选题）

标记Java配置类本身的注解是？

A. @Configuration
B. @ComponentScanOnly
C. @BeanClass
D. @EnableTest

### SPRING-026（单选题）

选择JavaConfig而不是XML的主要工程收益是？

A. 配置具备编译期类型安全检查
B. 无需任何容器
C. 自动绕过访问控制
D. 所有Bean都变成单例

### SPRING-027（单选题）

@Component的基本作用是？

A. 标记通用Spring管理组件
B. 声明数据库表
C. 声明HTTP请求路径
D. 声明单元测试

### SPRING-028（单选题）

@Service最能表达哪一层的语义？

A. 业务逻辑层
B. 数据表结构层
C. 网络传输层
D. 配置文件层

### SPRING-029（单选题）

@Repository通常用于标记什么？

A. 数据访问层组件
B. 前端控制器
C. 配置类
D. 定时任务表达式

### SPRING-030（单选题）

课件指出@Repository的一个额外价值是？

A. 把底层数据库异常转换为Spring统一的数据访问异常体系
B. 自动创建数据库表
C. 把所有异常转换成Error
D. 自动生成REST接口

### SPRING-031（单选题）

@Autowired默认最主要依据什么匹配依赖？

A. 类型
B. 方法名字符串
C. 数据库主键
D. 源码行号

### SPRING-032（单选题）

src/main/java通常存放什么？

A. 启动类、业务逻辑、控制器和实体类
B. 生产数据库文件
C. Maven缓存
D. 编译后的字节码

### SPRING-033（单选题）

src/main/resources主要用于放置什么？

A. 配置文件、静态资源和国际化资源
B. Java源代码
C. 依赖仓库索引
D. 操作系统驱动

### SPRING-034（单选题）

Maven项目中pom.xml的核心作用是？

A. 管理依赖版本和构建生命周期
B. 保存运行时用户数据
C. 定义HTTP路由
D. 存放Java字节码

### SPRING-035（单选题）

构造器注入的一个明显特点是？

A. 对象创建时就能获得必需依赖
B. 必须依赖字段反射
C. 只能注入字符串
D. 不能用于接口类型

### SPRING-036（单选题）

Setter注入更适合表达哪类依赖？

A. 可选或可变的依赖
B. 只能在编译器内部存在的依赖
C. 数据库表的主键
D. HTTP响应头

### SPRING-037（单选题）

字段注入通常通过哪个注解示例完成？

A. @Autowired
B. @Override
C. @Deprecated
D. @Target

### SPRING-038（单选题）

在IoC容器中，Bean生命周期管理通常包括哪一项？

A. 实例化、属性填充和销毁
B. 只负责编译源码
C. 只负责网络传输
D. 只负责建立数据库索引

### SPRING-039（单选题）

ApplicationContext与beans包的关系更准确的是？

A. ApplicationContext建立在Bean管理能力之上并提供应用级服务
B. ApplicationContext完全替代Java语言
C. beans只负责HTTP请求
D. 二者没有任何关系

### SPRING-040（单选题）

如果对象创建必须依赖另一个Bean，最合适的设计倾向是？

A. 通过容器注入依赖，而不是在业务类中new
B. 在每个方法内重复new依赖
C. 把依赖序列化为字符串
D. 删除依赖接口

### SPRING-041（单选题）

组件扫描发现@Component类后通常会发生什么？

A. 将其注册为IoC容器管理的Bean
B. 自动把它编译成机器码
C. 删除其构造器
D. 将它转换为数据库表

### SPRING-042（单选题）

一个类未被扫描到但手动通过@Configuration的@Bean方法返回它，结果通常是？

A. 它仍可作为Bean注册到容器
B. 它一定无法被容器管理
C. 它只能成为静态变量
D. 它会被当作HTTP请求

### SPRING-043（单选题）

从XML到注解再到JavaConfig，课件概括的总体趋势是？

A. 灵活性和可控性不断增强
B. 配置越来越依赖EJB
C. 类型安全逐步消失
D. 所有配置都必须放数据库

### SPRING-044（单选题）

当项目需要复杂条件化配置时，课件更推荐哪种方式？

A. Java配置类
B. 巨型XML文件
C. 在业务方法中到处new
D. 硬编码环境变量

### SPRING-045（单选题）

下列场景最能体现IoC带来的可测试性提升的是？

A. 测试时把真实DAO替换为Mock实现
B. 把所有服务方法改为private
C. 将业务对象写成单例静态字段
D. 在测试中连接生产数据库

## 多选题

### SPRING-046（多选题）

以下哪些属于课件列出的Spring生态方向？

A. Spring MVC Web开发
B. Spring Cloud云原生
C. Spring Data数据访问
D. Spring Random随机工具

### SPRING-047（多选题）

IoC带来的直接收益包括哪些？

A. 降低对象间耦合
B. 便于替换实现
C. 提升单元测试友好性
D. 强制业务类继承容器基类

### SPRING-048（多选题）

课件时间线中与Spring Framework相关的正确说法有哪些？

A. 1.0确立IoC与AOP
B. 2.5拥抱注解驱动
C. 5.0引入WebFlux
D. 6.0发布Spring Boot 3

### SPRING-049（多选题）

Spring模板可以帮助封装哪些重复性工作？

A. JDBC操作
B. 事务管理
C. Web开发基础处理
D. 操作系统内核调度

### SPRING-050（多选题）

org.springframework.core包提供的能力包括哪些？

A. 资源加载
B. 类型转换
C. 异常处理
D. Bean业务层语义

### SPRING-051（多选题）

org.springframework.beans包负责哪些Bean相关工作？

A. 实例化
B. 属性填充
C. 依赖解析
D. HTTP视图渲染

### SPRING-052（多选题）

ApplicationContext常见的应用级能力包括哪些？

A. 事件发布与监听
B. 国际化支持
C. 资源加载
D. 编译Java源文件

### SPRING-053（多选题）

Spring web模块在课件中覆盖哪些框架？

A. Spring MVC
B. Spring WebFlux
C. Spring Data
D. Spring Security

### SPRING-054（多选题）

IoC容器通常统一负责哪些事项？

A. 对象创建
B. 对象配置和装配
C. Bean生命周期
D. 前端页面布局

### SPRING-055（多选题）

课件列出的依赖注入方式有哪些？

A. 构造器注入
B. Setter注入
C. 字段注入
D. 数据库触发器注入

### SPRING-056（多选题）

Spring容器的常见配置实现包括哪些？

A. XML配置
B. 注解驱动
C. Java配置类
D. 把Bean写入浏览器Cookie

### SPRING-057（多选题）

以下哪些注解用于表达Spring组件或配置语义？

A. @Component
B. @Service
C. @Repository
D. @RandomConfig

### SPRING-058（多选题）

关于@Autowired，正确的说法有哪些？

A. 可按类型解析依赖
B. 可用于字段注入
C. 可减少手写实例化代码
D. 它只能注入基本类型

### SPRING-059（多选题）

关于标准Maven项目目录，正确的说法有哪些？

A. src/main/java放Java源码
B. src/main/resources放配置和资源
C. pom.xml管理依赖和构建
D. src/main/java专门放编译产物

### SPRING-060（多选题）

Bean生命周期管理可能涉及哪些阶段？

A. 实例化
B. 依赖解析与属性填充
C. 销毁
D. 浏览器渲染

### SPRING-061（多选题）

JavaConfig相对XML的优势可以包括哪些？

A. 代码集中配置
B. 编译期类型安全检查
C. 适合复杂条件化逻辑
D. 完全不需要Spring容器

### SPRING-062（多选题）

关于@Component、@Service和@Repository，正确的说法有哪些？

A. @Service具有业务层语义
B. @Repository具有数据访问层语义
C. 它们可作为组件扫描候选
D. 三者都只能标记配置类

### SPRING-063（多选题）

关于构造器、Setter和字段注入的比较，合理的说法有哪些？

A. 构造器注入适合必需依赖
B. Setter注入允许对象创建后再设置
C. 字段注入可减少显式样板代码
D. 三者都要求依赖对象在方法内部new

### SPRING-064（多选题）

context包相较于beans包的扩展包括哪些？

A. 事件机制
B. 国际化支持
C. 资源加载和环境能力
D. 仅增加SQL执行器

### SPRING-065（多选题）

关于Spring Boot时间线，正确的说法有哪些？

A. Boot 1.0对应2014年
B. Boot 2.0在课件中描述为适配Spring 5
C. Boot 3.0基于Spring 6并支持Java 17
D. Boot 1.0诞生于2004年

### SPRING-066（多选题）

哪些做法有助于保持业务代码与具体实现解耦？

A. 依赖接口并由容器装配实现
B. 在构造器中接收依赖
C. 测试时注入Mock实现
D. 在每个业务方法中new具体实现

### SPRING-067（多选题）

core、beans、context三层能力的合理描述有哪些？

A. core提供基础设施
B. beans负责Bean管理
C. context提供应用上下文服务
D. 三者都专门处理HTTP请求

### SPRING-068（多选题）

组件扫描的结果可能包括哪些？

A. 发现@Component类
B. 发现@Service类
C. 发现@Repository类
D. 自动把任意未标记类全部注册

### SPRING-069（多选题）

显式使用@Bean声明对象时，合理的理解有哪些？

A. 方法返回值可成为容器Bean
B. 可在@Configuration类中使用
C. 可表达第三方类的组装
D. 必须把类标成@Repository

### SPRING-070（多选题）

Spring设计哲学中被课件反复强调的目标有哪些？

A. 降低耦合
B. 简化开发流程
C. 提高可维护性
D. 让业务代码承担全部对象生命周期

### SPRING-071（多选题）

DI使依赖关系具备哪些特征？

A. 可配置
B. 可动态替换
C. 有利于测试
D. 必须硬编码在业务方法里

### SPRING-072（多选题）

在不改变业务代码的前提下，容器管理Bean带来的能力包括哪些？

A. 统一创建对象
B. 集中装配依赖
C. 按生命周期执行销毁
D. 自动保证所有业务逻辑无缺陷

### SPRING-073（多选题）

课件将Spring演进为企业级事实标准的原因可概括为哪些？

A. 核心容器持续演进
B. 模块化生态覆盖多场景
C. 降低开发与维护成本
D. 完全依赖重量级EJB

### SPRING-074（多选题）

选择配置方式时，哪些判断符合课件？

A. XML物理外部化明显
B. 注解减少XML但更贴近代码
C. JavaConfig具有类型安全优势
D. 三种方式都不可能表达依赖关系

### SPRING-075（多选题）

企业应用使用ApplicationContext可能获得哪些能力？

A. Bean生命周期管理
B. 事件驱动协作
C. 国际化支持
D. 替代数据库本身

# 第2讲：AOP、生态集成与 Spring MVC

## 单选题

### SPRING-076（单选题）

在 Spring AOP 中，把横跨多个业务模块的日志、事务等通用行为抽取出来的对象称为？

A. 切面
B. 实体
C. 仓储
D. DTO

### SPRING-077（单选题）

AOP 主要解决哪类问题？

A. 横切关注点的重复散落
B. 数据库表空间不足
C. HTML 标签嵌套
D. 网络 DNS 解析

### SPRING-078（单选题）

Spring AOP 中用于描述“哪些方法需要被拦截”的表达式是？

A. 切点表达式
B. Bean 名称
C. 环境变量
D. 资源路径

### SPRING-079（单选题）

在目标方法执行之前运行的通知类型是？

A. 前置通知
B. 返回通知
C. 异常通知
D. 最终通知

### SPRING-080（单选题）

目标方法正常返回后才执行的通知是？

A. @AfterReturning
B. @Before
C. @AfterThrowing
D. @Around

### SPRING-081（单选题）

无论目标方法正常结束还是抛出异常都会执行的通知是？

A. @After
B. @Before
C. @AfterReturning
D. @AfterThrowing

### SPRING-082（单选题）

环绕通知要让目标方法真正执行，通常需要调用哪个对象的方法？

A. ProceedingJoinPoint.proceed()
B. ApplicationContext.close()
C. BeanFactory.getName()
D. Logger.flush()

### SPRING-083（单选题）

环绕通知中在 proceed() 之后修改返回值，最直接影响的是？

A. 调用方最终拿到的结果
B. 数据库表结构
C. Controller 映射路径
D. JVM 堆大小

### SPRING-084（单选题）

在 Spring 基于代理的 AOP 中，最常见的连接点是？

A. 方法执行
B. 字段声明
C. 类文件下载
D. 数据库建表

### SPRING-085（单选题）

目标类实现接口时，Spring 默认更可能使用哪种代理？

A. JDK 动态代理
B. 静态 HTML 代理
C. 数据库触发器
D. 反射缓存

### SPRING-086（单选题）

目标类没有实现接口时，Spring 常用哪种方式创建代理？

A. CGLIB 子类代理
B. JDK 接口代理
C. Servlet Filter
D. JDBC Driver

### SPRING-087（单选题）

同一个类中一个方法直接调用本类另一个方法时，为什么常绕过 Spring AOP？

A. 没有经过代理对象
B. 方法没有返回值
C. Spring 禁止 private 字段
D. 类一定是 final

### SPRING-088（单选题）

要使事务或自定义通知覆盖另一个方法，较稳妥的做法是？

A. 通过代理对象发起调用
B. 在方法内使用 this 调用
C. 把通知写到配置文件注释
D. 删除目标方法

### SPRING-089（单选题）

execution(* com.example.service..*(..)) 主要匹配什么？

A. service 包及子包中任意方法
B. 所有数据库表
C. 所有 HTTP 状态码
D. 只匹配构造方法

### SPRING-090（单选题）

within(com.example.service..*) 与 execution 表达式相比主要按什么维度匹配？

A. 类型所在包范围
B. 方法返回对象值
C. SQL 执行耗时
D. 请求体 JSON

### SPRING-091（单选题）

切点使用 args(accountId) 时，通知方法通常可以获得什么？

A. 调用时传入的 accountId 参数
B. 目标类所有字段
C. 数据库连接池
D. HTTP 响应头

### SPRING-092（单选题）

@annotation(TransactionalLog) 切点的含义是？

A. 匹配带该注解的方法
B. 匹配所有异常
C. 匹配所有接口
D. 匹配指定数据库

### SPRING-093（单选题）

同一切点存在多个前置通知时，控制其先后顺序可使用？

A. @Order
B. @Value
C. @Profile
D. @Bean

### SPRING-094（单选题）

@AfterThrowing 通知的触发条件是？

A. 目标方法抛出匹配异常
B. 目标方法正常返回
C. 容器启动完成
D. Bean 被销毁

### SPRING-095（单选题）

把事务边界放在 Service 层通常比放在 Controller 层更合适的主要原因是？

A. Service 表达完整业务操作边界
B. Controller 不能调用数据库
C. Service 一定没有异常
D. Controller 只能返回字符串

### SPRING-096（单选题）

一个 @Transactional 方法由同类内部直接调用时事务未生效，根因通常是？

A. 调用绕过事务代理
B. 数据库没有表
C. 事务注解只能写在字段上
D. Spring 不支持事务

### SPRING-097（单选题）

记录审计日志的切面中，最不应直接记录的是？

A. 密码和完整令牌
B. 业务操作名
C. Trace ID
D. 执行耗时

### SPRING-098（单选题）

Spring Boot 集成 MyBatis 通常需要使用哪个注解扫描 Mapper 接口？

A. @MapperScan
B. @ComponentScanOnly
C. @EntityScan
D. @WebScan

### SPRING-099（单选题）

MyBatis Mapper 接口通常由谁实现其数据库访问代理？

A. MyBatis 框架
B. 浏览器
C. JVM 垃圾回收器
D. JUnit

### SPRING-100（单选题）

MyBatis 中多个方法参数需要在 SQL 中使用稳定名称，常见做法是？

A. 使用 @Param 明确参数名
B. 依赖参数随机顺序
C. 把参数写入日志
D. 把所有参数转成 URL

### SPRING-101（单选题）

查询结果列名与 Java 属性名不一致时，MyBatis 常通过什么解决？

A. resultMap 或列别名
B. 增加线程数量
C. 修改日志级别
D. 关闭事务

### SPRING-102（单选题）

Spring Boot 默认日志门面通常是？

A. SLF4J
B. JDBC
C. JPA
D. JSP

### SPRING-103（单选题）

日志级别从低到高通常是？

A. TRACE、DEBUG、INFO、WARN、ERROR
B. ERROR、WARN、INFO、DEBUG、TRACE
C. INFO、ERROR、DEBUG、TRACE、WARN
D. DEBUG、TRACE、ERROR、INFO、WARN

### SPRING-104（单选题）

生产环境通常不建议把根日志级别长期设为 DEBUG，主要原因是？

A. 日志量大且可能暴露调试信息
B. DEBUG 会关闭所有日志
C. DEBUG 会禁用事务
D. DEBUG 只能输出错误

### SPRING-105（单选题）

JUnit 5 标识测试方法的注解是？

A. @Test
B. @Run
C. @CaseOnly
D. @VerifyBean

### SPRING-106（单选题）

每个测试方法执行前运行一次的 JUnit 5 注解是？

A. @BeforeEach
B. @BeforeAll
C. @AfterEach
D. @AfterAll

### SPRING-107（单选题）

验证两个值相等应优先使用哪个断言？

A. Assertions.assertEquals
B. Assertions.assertNull
C. Assertions.assertThrows
D. Assertions.failOnly

### SPRING-108（单选题）

Mockito 中创建一个 Mock 对象常用哪个方法？

A. mock()
B. fakeBean()
C. stubOnly()
D. replaceAll()

### SPRING-109（单选题）

Mockito 的 when(...).thenReturn(...) 主要用于？

A. 设定 Mock 方法的返回值
B. 启动 Spring 容器
C. 提交数据库事务
D. 扫描 Controller

### SPRING-110（单选题）

Mockito.verify(mock).save(x) 用于验证什么？

A. save 是否被调用
B. save 一定返回 true
C. 数据库已经提交
D. Controller 已渲染页面

### SPRING-111（单选题）

Spring MVC 中接收前端请求并选择处理器的核心组件是？

A. DispatcherServlet
B. DataSource
C. SqlSession
D. BeanPostProcessor

### SPRING-112（单选题）

DispatcherServlet 根据请求寻找 Controller 方法主要依赖哪个组件？

A. HandlerMapping
B. ViewResolver
C. MessageConverter
D. TransactionManager

### SPRING-113（单选题）

Controller 执行后返回 ModelAndView，负责把逻辑视图名解析成具体视图的是？

A. ViewResolver
B. HandlerMapping
C. MultipartResolver
D. LocaleResolver

### SPRING-114（单选题）

使用 @ResponseBody 返回对象时，Spring MVC 通常通过什么写入响应体？

A. HttpMessageConverter
B. ViewResolver
C. HandlerInterceptor
D. BeanFactory

### SPRING-115（单选题）

@RestController 等价于组合了什么？

A. @Controller 与 @ResponseBody
B. @Service 与 @Repository
C. @Bean 与 @Configuration
D. @RequestBody 与 @RequestParam

### SPRING-116（单选题）

@GetMapping("/users") 最主要限定的是？

A. HTTP GET 请求及路径 /users
B. 所有 POST 请求
C. 数据库表 users
D. 静态资源目录

### SPRING-117（单选题）

从查询参数 ?page=2 读取 page，常用注解是？

A. @RequestParam
B. @PathVariable
C. @RequestBody
D. @CookieValueOnly

### SPRING-118（单选题）

路径 /users/42 中读取 42，常用注解是？

A. @PathVariable
B. @RequestParam
C. @RequestHeader
D. @ModelAttributeOnly

### SPRING-119（单选题）

将 JSON 请求体反序列化为 Java 对象通常使用？

A. @RequestBody
B. @PathVariable
C. @RequestAttribute
D. @ResponseStatusOnly

### SPRING-120（单选题）

在 Controller 方法上指定成功响应状态码，常用注解是？

A. @ResponseStatus
B. @StatusCodeOnly
C. @HttpCode
D. @ResponseHeaderOnly

## 多选题

### SPRING-121（多选题）

Spring AOP 中常见的组成概念包括哪些？

A. 切面
B. 切点
C. 通知
D. 数据库索引

### SPRING-122（多选题）

以下哪些属于 Spring AOP 常见通知类型？

A. 前置通知
B. 返回通知
C. 异常通知
D. 建表通知

### SPRING-123（多选题）

环绕通知可以完成哪些工作？

A. 控制目标方法是否执行
B. 在执行前后记录耗时
C. 修改参数或返回值
D. 自动创建数据库表

### SPRING-124（多选题）

关于 JDK 动态代理和 CGLIB，哪些说法正确？

A. JDK 代理依赖接口
B. CGLIB 通过生成子类增强类
C. final 类或方法会限制 CGLIB 覆盖
D. 二者都是数据库连接池

### SPRING-125（多选题）

切点表达式可以根据哪些条件匹配方法？

A. 包和类范围
B. 方法名和参数
C. 方法上的注解
D. 数据库返回行数

### SPRING-126（多选题）

设计审计切面时，哪些做法较为稳妥？

A. 统一记录 Trace ID 和操作名
B. 对密码等敏感字段脱敏
C. 避免在切面中吞掉业务异常
D. 把所有请求体原样写入日志

### SPRING-127（多选题）

Spring 集成 MyBatis 时，常见配置或组件包括哪些？

A. SqlSessionFactory
B. Mapper 接口
C. @MapperScan
D. ViewResolver

### SPRING-128（多选题）

MyBatis 结果映射问题可以通过哪些方式解决？

A. SQL 列别名
B. resultMap
C. 统一 Java 属性命名策略
D. 提高日志级别

### SPRING-129（多选题）

使用日志框架时，哪些实践较好？

A. 使用参数化日志占位符
B. 按环境设置级别
C. 避免记录密码
D. 大量使用 System.out 替代日志框架

### SPRING-130（多选题）

JUnit 5 测试中可以使用哪些机制？

A. @BeforeEach 准备数据
B. @AfterEach 清理资源
C. assertThrows 验证异常
D. 用 @Autowired 代替所有断言

### SPRING-131（多选题）

Mockito 单元测试中，哪些做法合理？

A. when 配置桩返回值
B. verify 校验交互
C. 用 ArgumentCaptor 检查参数
D. 让 Mock 连接真实生产数据库

### SPRING-132（多选题）

Spring MVC 请求处理链中常见的组件包括哪些？

A. DispatcherServlet
B. HandlerMapping
C. HandlerAdapter
D. ViewResolver

### SPRING-133（多选题）

Spring MVC 可用于绑定请求数据的注解包括哪些？

A. @RequestParam
B. @PathVariable
C. @RequestBody
D. @RequestMappingOnly

### SPRING-134（多选题）

Controller 返回 JSON 响应时，哪些机制可能参与？

A. @ResponseBody
B. @RestController
C. HttpMessageConverter
D. ViewResolver 必然渲染模板

### SPRING-135（多选题）

统一处理 Controller 异常时，哪些做法正确？

A. 使用 @ControllerAdvice
B. 使用 @ExceptionHandler
C. 返回统一错误结构
D. 把完整堆栈直接返回用户

### SPRING-136（多选题）

拦截器适合做哪些工作？

A. 登录态检查
B. 请求耗时记录
C. 统一注入 Trace ID
D. 直接替代 Service 业务规则

### SPRING-137（多选题）

Bean Validation 在 MVC 中生效通常需要哪些条件？

A. DTO 字段声明约束
B. 参数上使用 @Valid 或 @Validated
C. 校验失败后由异常处理器统一返回
D. 仅在前端写提示即可

### SPRING-138（多选题）

MockMvc 测试中可以验证哪些内容？

A. HTTP 状态码
B. JSON 响应字段
C. Controller 映射
D. 生产服务器硬件性能

### SPRING-139（多选题）

设计 REST 接口时，哪些做法合理？

A. 使用合适的 HTTP 方法
B. 返回清晰的状态码
C. 对重复写操作设计幂等策略
D. 把异常堆栈放进响应

### SPRING-140（多选题）

测试外部支付客户端时，哪些策略可减少对真实服务的依赖？

A. 用 Mockito Mock 客户端
B. 用 WireMock 等 Stub 服务模拟响应
C. 覆盖超时和错误响应
D. 每次测试都调用真实扣款接口

### SPRING-141（多选题）

关于声明式事务和 AOP 的关系，哪些说法正确？

A. 事务拦截通常由代理实现
B. 事务边界可被切点匹配
C. 同类 this 调用可能绕过事务代理
D. 事务注解会修改 Java 字节码源文件

### SPRING-142（多选题）

一次典型 Spring MVC 请求可能经历哪些阶段？

A. DispatcherServlet 接收请求
B. HandlerMapping 查找处理器
C. HandlerAdapter 调用处理器
D. ViewResolver 或消息转换器生成响应

### SPRING-143（多选题）

对 Web 接口进行基础安全治理时，哪些措施合理？

A. 校验并限制上传文件类型和大小
B. 对敏感日志脱敏
C. 统一异常响应避免堆栈泄露
D. 把认证信息放在 URL 查询参数中

### SPRING-144（多选题）

哪些场景适合使用 AOP 统一处理？

A. 审计日志
B. 权限校验
C. 事务边界
D. 核心订单计算公式本身

### SPRING-145（多选题）

环绕通知中可以安全实现哪些能力？

A. 执行前后计时
B. 统一捕获并记录异常后继续抛出
C. 根据条件短路调用
D. 无条件吞掉所有异常

### SPRING-146（多选题）

基于代理的 Spring AOP 需要注意哪些限制？

A. private 方法通常无法被代理拦截
B. final 方法不能被 CGLIB 覆盖
C. 同类自调用可能绕过通知
D. 任意字段读写都会自动织入

### SPRING-147（多选题）

为了将一次 MVC 请求与 MyBatis SQL 日志关联，适合记录哪些信息？

A. Trace ID
B. 请求路径和业务标识
C. 必要的耗时信息
D. 完整密码

### SPRING-148（多选题）

MyBatis 与 Spring 事务集成时，哪些配置或习惯有助于保持一致性？

A. 使用统一事务管理器
B. 让同一业务操作使用同一数据源事务
C. 对异常回滚规则进行明确设计
D. 在事务中随意开启独立连接提交

### SPRING-149（多选题）

为 Service 编写单元测试时，哪些依赖隔离策略合理？

A. Mock 外部客户端
B. 使用内存或测试替身数据
C. 验证业务结果和关键交互
D. 直接依赖生产数据库数据

### SPRING-150（多选题）

接口参数校验失败时，服务端通常应做到哪些事？

A. 返回明确字段级错误
B. 使用统一错误码或结构
C. 记录必要的请求关联信息
D. 把 Java 堆栈直接返回

# 第3讲：Spring Boot 入门与自动配置

## 单选题

### SPRING-151（单选题）

Spring Boot 主要解决传统 Spring 项目中的哪类痛点？

A. 消除所有业务代码
B. 减少样板配置并快速搭建应用
C. 替代 Java 语言
D. 只提供数据库驱动

### SPRING-152（单选题）

“约定大于配置”在 Spring Boot 中最直接的含义是什么？

A. 所有配置都被禁止
B. 遵循默认约定时无需重复声明大量配置
C. 只能使用 XML
D. 必须手写每个 Bean

### SPRING-153（单选题）

Spring Initializr 的主要用途是什么？

A. 在线监控生产指标
B. 生成规范的 Spring Boot 项目骨架
C. 替代 Maven 编译器
D. 把 Java 转为 Kotlin

### SPRING-154（单选题）

在 Initializr 中选择 Java、构建工具和依赖，最终主要影响什么？

A. 项目骨架与依赖清单
B. 数据库中的业务数据
C. 生产服务器密码
D. 浏览器缓存

### SPRING-155（单选题）

Initializr 下载的项目压缩包通常应如何开始使用？

A. 解压后导入 IDE
B. 直接作为图片打开
C. 上传到数据库
D. 改名为 .txt

### SPRING-156（单选题）

Spring Boot Starter 本质上是什么？

A. 单个业务 Bean
B. 面向场景预封装的一组依赖坐标
C. 数据库表结构
D. 只能运行一次的脚本

### SPRING-157（单选题）

开发 Spring MVC Web 应用时，最典型的起步依赖是？

A. spring-boot-starter-web
B. spring-boot-starter-test
C. spring-boot-starter-parent
D. spring-boot-starter-log4j2

### SPRING-158（单选题）

Spring Boot 一站式测试启动器通常包含哪组测试技术？

A. JUnit、Mockito、AssertJ 等
B. Tomcat、Jetty、Undertow
C. MySQL、Redis、Kafka
D. JDK、JRE、JVM

### SPRING-159（单选题）

要用 Log4j2 替换 Boot 默认的 Logback，通常需要先做什么？

A. 排除 starter-web 的默认 logging 依赖
B. 删除所有日志 API
C. 把日志写到数据库
D. 只修改文件后缀

### SPRING-160（单选题）

Starter 能减少依赖版本冲突的关键原因是什么？

A. 每次运行随机选择版本
B. Spring Boot 统一管理兼容版本
C. 把所有库复制进 JDK
D. 禁止第三方库

### SPRING-161（单选题）

Spring Boot 自动配置主要依据什么来决定是否装配组件？

A. 类路径依赖、已有 Bean 和条件注解
B. CPU 温度
C. 开发者姓名
D. 数据库行数

### SPRING-162（单选题）

引入 starter-web 后无需手工配置 Tomcat 和 MVC 基础 Bean，主要体现什么？

A. 自动配置
B. 强制继承
C. 编译器内联
D. 数据库分片

### SPRING-163（单选题）

自动配置中使用条件注解的目的是什么？

A. 让配置按环境条件生效
B. 保证所有 Bean 永远创建
C. 替代 Java 编译
D. 隐藏异常

### SPRING-164（单选题）

@ConditionalOnClass 主要检查什么？

A. 指定类是否存在于类路径
B. Bean 是否已被销毁
C. HTTP 请求是否成功
D. 配置文件行数

### SPRING-165（单选题）

@ConditionalOnMissingBean 的典型用途是什么？

A. 用户未提供 Bean 时提供默认实现
B. 删除用户 Bean
C. 要求 Bean 必须有两个实例
D. 只匹配配置文件

### SPRING-166（单选题）

@ConditionalOnBean(DataSource.class) 表示什么？

A. 容器存在 DataSource 时才满足条件
B. 必须创建两个数据源
C. 禁止使用 DataSource
D. 只检查数据库表

### SPRING-167（单选题）

@ConditionalOnProperty 常用于根据什么开启配置？

A. 配置属性值
B. Java 文件大小
C. 请求 IP 的长度
D. 线程数量

### SPRING-168（单选题）

@ConditionalOnWebApplication 主要用于判断什么？

A. 当前应用是否为 Web 应用
B. 数据库是否可写
C. 是否使用 JUnit
D. JAR 是否签名

### SPRING-169（单选题）

批处理专用配置不希望在 Web 环境加载，可考虑哪个条件？

A. @ConditionalOnNotWebApplication
B. @ConditionalOnClass
C. @Bean
D. @RequestMapping

### SPRING-170（单选题）

只有类路径中存在特定模板文件才加载配置，应使用哪类条件？

A. @ConditionalOnResource
B. @ConditionalOnBean
C. @ConditionalOnMissingBean
D. @ConfigurationProperties

### SPRING-171（单选题）

根据 SpEL 表达式决定配置是否生效，适合使用什么？

A. @ConditionalOnExpression
B. @ConditionalOnClass
C. @Profile
D. @Import

### SPRING-172（单选题）

@SpringBootApplication 通常组合了哪三个核心注解？

A. @Configuration、@EnableAutoConfiguration、@ComponentScan
B. @Controller、@Service、@Repository
C. @Bean、@Value、@Profile
D. @Import、@Lookup、@Order

### SPRING-173（单选题）

在启动类上使用 @SpringBootApplication，组件扫描默认从哪里开始？

A. 启动类所在包及其子包
B. JDK 根目录
C. 所有磁盘目录
D. 只扫描 test 包

### SPRING-174（单选题）

@Configuration 标注的类主要表示什么？

A. 一个配置类，可声明 @Bean 方法
B. 一个数据库连接
C. 一个 HTTP 请求
D. 一个测试断言

### SPRING-175（单选题）

@EnableAutoConfiguration 的核心作用是什么？

A. 启用 Boot 根据条件进行自动配置
B. 开启 Java 断言
C. 把应用部署到云端
D. 禁用组件扫描

### SPRING-176（单选题）

Spring Boot 的内嵌服务器让应用常见的部署形态变成什么？

A. 可执行 JAR，通过 java -jar 启动
B. 必须部署到外部 EJB 容器
C. 只能运行在浏览器
D. 必须复制成 WAR 到共享目录

### SPRING-177（单选题）

starter-web 默认常见的内嵌 Servlet 容器是什么？

A. Tomcat
B. Nginx
C. Redis
D. MySQL

### SPRING-178（单选题）

要将默认 Tomcat 换成 Jetty，关键思路是什么？

A. 排除 Tomcat 依赖并引入 Jetty starter
B. 只改端口号
C. 删除 @SpringBootApplication
D. 把 Java 改成脚本

### SPRING-179（单选题）

修改 Spring Boot 内嵌 Web 服务器端口，常用哪个属性？

A. server.port
B. spring.port.name
C. http.listen.file
D. boot.server.id

### SPRING-180（单选题）

@ConfigurationProperties 主要解决什么问题？

A. 将一组同前缀配置绑定到对象
B. 把 Bean 转成数据库表
C. 自动生成 REST 文档
D. 扫描所有日志

### SPRING-181（单选题）

@ConfigurationProperties(prefix = "app") 的前缀作用是什么？

A. 限定绑定 app 开头的配置项
B. 指定 Bean 名称必须为 app
C. 指定 HTTP 路径
D. 选择数据库驱动

### SPRING-182（单选题）

一个带 @ConfigurationProperties 的普通类要成为可注入 Bean，常见做法是什么？

A. 使用 @ConfigurationPropertiesScan 或 @EnableConfigurationProperties
B. 只写 private 字段
C. 把类放在 resources
D. 给类加 final 方法

### SPRING-183（单选题）

相比在多个字段上散落 @Value，ConfigurationProperties 的优势之一是什么？

A. 集中表达相关配置并支持类型化绑定
B. 完全不需要配置文件
C. 只能绑定字符串
D. 自动加密所有值

### SPRING-184（单选题）

用户自己定义 DataSource Bean 后，默认 DataSource 自动配置通常会怎样？

A. 因 @ConditionalOnMissingBean 不满足而让出
B. 覆盖用户 Bean
C. 创建无数个 DataSource
D. 删除配置文件

### SPRING-185（单选题）

某自动配置引用 Redis 类型，但项目未引入 Redis 依赖，最合理预期是？

A. 基于类路径条件不生效
B. 必然编译通过并创建 Redis Bean
C. 自动安装 Redis
D. 删除所有缓存配置

### SPRING-186（单选题）

@ConditionalOnProperty(matchIfMissing = true) 的含义更接近哪项？

A. 属性缺失时也允许条件匹配
B. 属性必须存在且为 false
C. 属性值会被删除
D. 只检查 Bean 类型

### SPRING-187（单选题）

执行带有 main 方法的 Spring Boot 启动类，通常由哪个调用启动容器？

A. SpringApplication.run
B. System.gc
C. Files.copy
D. Math.random

### SPRING-188（单选题）

Starter 与自动配置的关系，哪项最准确？

A. Starter 提供依赖线索，自动配置按条件装配组件
B. Starter 直接执行所有业务逻辑
C. 自动配置完全不依赖类路径
D. 二者互相排斥

### SPRING-189（单选题）

Maven 中排除 spring-boot-starter-logging 后立即启动应用，可能出现什么风险？

A. 暂时缺少默认日志实现
B. Tomcat 自动变成 Jetty
C. 所有 Bean 自动变成原型
D. 配置绑定失效

### SPRING-190（单选题）

Spring Boot 与 Spring Framework 的关系更准确的是？

A. Boot 建立在 Spring 生态之上并提供约定式工程能力
B. Boot 完全取代 Spring Framework
C. Boot 只能用于非 Java 项目
D. 两者不能同时使用

### SPRING-191（单选题）

使用 Boot 默认配置后，需要修改端口或数据源时通常怎么办？

A. 通过属性或自定义 Bean 覆盖默认值
B. 修改 JDK 源码
C. 删除自动配置全部代码
D. 重新编写 Servlet 容器

### SPRING-192（单选题）

启动类放在 com.example.app 向上一级 com.example，默认组件扫描会怎样？

A. 默认不会扫描 com.example 下与 app 同级的包
B. 会扫描整个磁盘
C. 只扫描启动类文件
D. 会扫描所有依赖 Jar 的业务组件

### SPRING-193（单选题）

Spring Boot 常见外部化配置文件格式包括哪一组？

A. properties 或 yaml
B. class 或 java
C. png 或 jpg
D. sql 或 csv

### SPRING-194（单选题）

命令行参数与配置文件存在同名属性时，Boot 的设计通常允许什么？

A. 外部参数覆盖较低优先级的默认配置
B. 配置文件永远不可覆盖
C. 命令行参数被忽略
D. 属性只能写在 Java 注解中

### SPRING-195（单选题）

内嵌服务器在部署模式上的核心价值是什么？

A. 应用与容器一起打包，减少外部服务器环境差异
B. 强制每台机器安装 IDE
C. 取消 HTTP 协议
D. 保证业务逻辑无缺陷

## 多选题

### SPRING-196（多选题）

Spring Boot 解决传统项目痛点的方式包括哪些？

A. 约定式默认配置
B. 场景化 Starter
C. 内嵌服务器
D. 替代所有业务设计

### SPRING-197（多选题）

Initializr 通常可以让开发者选择哪些项目元数据？

A. 构建工具
B. Java 版本
C. 项目依赖
D. 生产数据库真实密码

### SPRING-198（多选题）

Starter 的工程价值包括哪些？

A. 按场景整合依赖
B. 减少手动坐标配置
C. 配合版本仲裁降低冲突
D. 直接实现订单业务流程

### SPRING-199（多选题）

starter-web 可能带来的能力包括哪些？

A. Spring MVC
B. 嵌入式 Servlet 容器
C. Web 常用基础依赖
D. 数据库事务业务规则

### SPRING-200（多选题）

starter-test 的典型组成或价值包括哪些？

A. JUnit Jupiter
B. Mockito
C. AssertJ
D. 生产环境自动创建订单

### SPRING-201（多选题）

从默认 Logback 替换到 Log4j2，哪些操作通常需要考虑？

A. 排除默认 logging 依赖
B. 引入 spring-boot-starter-log4j2
C. 确认仍有可用日志实现
D. 删除所有 SLF4J API

### SPRING-202（多选题）

自动配置判断时常见的依据包括哪些？

A. 类路径是否有某类
B. 容器中是否已有 Bean
C. 属性开关是否匹配
D. 开发者的 IDE 主题颜色

### SPRING-203（多选题）

@ConditionalOnClass 的使用理解正确的有？

A. 用于检查类路径上的类型
B. 可避免缺少依赖时加载不适用配置
C. 常与 Starter 的依赖线索配合
D. 它会自动下载缺少的 Jar

### SPRING-204（多选题）

关于 @ConditionalOnBean，哪些说法正确？

A. 检查容器中是否有指定 Bean
B. 可让配置依赖前置基础设施
C. 用户自定义 Bean 可能满足该条件
D. 它检查的是磁盘文件是否存在

### SPRING-205（多选题）

@ConditionalOnMissingBean 常用于哪些设计？

A. 只在用户未提供实现时创建默认 Bean
B. 尊重用户显式配置
C. 避免同类型默认 Bean 重复创建
D. 强制删除用户 Bean

### SPRING-206（多选题）

@ConditionalOnProperty 可用于哪些场景？

A. 按功能开关启停自动配置
B. 指定属性前缀与名称
C. 用 havingValue 限定取值
D. 直接检查数据库表行数

### SPRING-207（多选题）

关于 Web 应用条件，正确的有？

A. OnWebApplication 可限制 Web 环境配置
B. NotWebApplication 可用于批处理配置
C. 条件有助于避免加载错误场景 Bean
D. 它会自动把命令行程序变成 Web 应用

### SPRING-208（多选题）

@SpringBootApplication 的组合能力包括哪些？

A. 配置类能力
B. 自动配置启用
C. 组件扫描
D. 自动生成数据库业务数据

### SPRING-209（多选题）

关于默认组件扫描，哪些说法正确？

A. 从启动类所在包向下扫描
B. 启动类通常放在根包
C. 同级包默认不会被向上扫描
D. 会遍历整台机器所有目录

### SPRING-210（多选题）

内嵌服务器带来的价值包括哪些？

A. 可执行 JAR 独立运行
B. 减少外部容器安装差异
C. 便于一键启动部署
D. 使所有业务代码自动正确

### SPRING-211（多选题）

Spring Boot 外部化配置的常见特征包括哪些？

A. 支持 properties 和 YAML
B. 同一制品可适配不同环境
C. 可通过外部参数覆盖默认值
D. 必须把密码写入源码

### SPRING-212（多选题）

ConfigurationProperties 相比散落 @Value 的优点包括哪些？

A. 按前缀聚合配置
B. 支持嵌套对象和类型转换
C. 便于统一校验
D. 只能绑定一个字符串属性

### SPRING-213（多选题）

让配置属性类进入容器，哪些方式可能有效？

A. @ConfigurationPropertiesScan
B. @EnableConfigurationProperties
C. 在配置类上声明可注册的属性 Bean
D. 只把 .properties 文件放进 resources

### SPRING-214（多选题）

SpringApplication.run 期间通常会发生哪些工作？

A. 创建应用上下文
B. 注册并扫描组件
C. 评估自动配置条件
D. 执行数据库全部业务交易

### SPRING-215（多选题）

用户显式定义 Bean 后，自动配置通常如何表现？

A. MissingBean 条件可能不再满足
B. 保留用户自定义实现
C. 避免覆盖用户选择
D. 无论如何再创建一个同类型默认 Bean

### SPRING-216（多选题）

多个条件注解同时存在时，正确理解包括哪些？

A. 必要条件通常需同时满足
B. 类路径和属性开关可共同约束装配
C. 任一关键条件失败都可能导致配置不生效
D. 条件注解会绕过容器生命周期

### SPRING-217（多选题）

为了控制 Starter 依赖质量，哪些做法合理？

A. 使用 Boot 推荐的依赖管理
B. 检查传递依赖树
C. 避免同一组件引入互相冲突的版本
D. 随意覆盖全部版本而不测试

### SPRING-218（多选题）

关于 server.port 的配置，正确的有？

A. 可在配置文件中设置
B. 可通过外部参数按环境调整
C. 改变端口不等于更换 Web 容器
D. 写进业务 Controller 才能生效

### SPRING-219（多选题）

当自动配置与平台自有组件冲突时，合理处理包括哪些？

A. 定位具体自动配置类
B. 通过排除或属性关闭它
C. 保留不冲突的其他自动配置
D. 删除整个 Boot 依赖树

### SPRING-220（多选题）

使用 Initializr 初始化项目时，哪些选择需要一起评估？

A. Spring Boot 版本
B. JDK 版本
C. 构建工具与依赖插件
D. 电脑桌面背景

### SPRING-221（多选题）

Log4j2 集成时，哪些判断较为稳妥？

A. 排除默认 Logback 传递依赖
B. 引入 Boot 的 Log4j2 starter
C. 确认配置文件和实现版本匹配
D. 同时保留两套实现并期待随机选择

### SPRING-222（多选题）

关于可执行 JAR，正确的有？

A. 可用 java -jar 启动
B. 包含应用运行所需的启动结构
C. 可减少外部容器部署步骤
D. 只能在开发机运行

### SPRING-223（多选题）

外部化配置的设计价值包括哪些？

A. 默认值可被环境参数覆盖
B. 同一制品可在多环境运行
C. 敏感信息可通过环境注入而非写死源码
D. 所有配置必须打进 JAR 才安全

### SPRING-224（多选题）

设计自动配置功能开关时，哪些做法合理？

A. 为开关定义清晰前缀和属性名
B. 使用 matchIfMissing 明确缺省策略
C. 在文档中说明默认开启或关闭
D. 用随机表达式避免用户控制

### SPRING-225（多选题）

将 Web 配置与批处理配置隔离的好处包括哪些？

A. 避免非 Web 应用加载 Servlet 基础设施
B. 减少不适用 Bean
C. 降低启动失败风险
D. 让批处理必须监听 HTTP 端口

# 第4讲：Actuator、综合实战与工程化

## 单选题

### SPRING-226（单选题）

Spring Boot Actuator 的主要定位是什么？

A. 代码格式化工具
B. 生产环境监控与管理组件
C. 数据库建模工具
D. 前端路由框架

### SPRING-227（单选题）

Actuator 通过什么机制向外提供运行状态信息？

A. 标准化 Endpoint 端点
B. Java 注释注释器
C. Maven 生命周期
D. SQL 触发器

### SPRING-228（单选题）

哪个端点用于反馈应用健康状态？

A. /actuator/health
B. /actuator/source
C. /actuator/build
D. /actuator/classpath

### SPRING-229（单选题）

/actuator/info 通常展示哪类信息？

A. 应用元数据
B. 数据库所有表数据
C. 用户密码
D. JVM 字节码

### SPRING-230（单选题）

/actuator/metrics 主要用于什么？

A. 查看性能指标
B. 修改 Java 源文件
C. 导出数据库备份
D. 创建 HTTP 控制器

### SPRING-231（单选题）

Actuator health 端点可以深度检查哪些外部依赖？

A. 数据库、消息队列和 Redis
B. 仅浏览器缓存
C. 仅图片文件
D. 仅 Maven 仓库

### SPRING-232（单选题）

Actuator 打破应用“黑盒”状态的直接方式是什么？

A. 标准化输出内部运行细节与指标
B. 删除所有日志
C. 关闭所有端点
D. 把业务代码改成脚本

### SPRING-233（单选题）

除 HTTP 外，Actuator 还兼容哪种管理协议？

A. JMX
B. FTP
C. SMTP
D. WebSocket-only

### SPRING-234（单选题）

Actuator 原生集成哪类指标规范，可对接 Prometheus、Grafana？

A. Micrometer
B. Servlet JSP
C. JDBC Driver
D. JUnit

### SPRING-235（单选题）

生产环境不希望公开全部 Actuator 端点，合理做法是什么？

A. 按需开启、关闭并配置权限管控
B. 删除应用日志
C. 把所有端点改成业务接口
D. 关闭 HTTP 服务器

### SPRING-236（单选题）

下列哪项最能体现 Actuator 对故障排查的价值？

A. 通过健康和指标数据定位运行瓶颈
B. 自动修复所有业务缺陷
C. 替代单元测试
D. 直接生成需求文档

### SPRING-237（单选题）

在 Spring Boot 项目中启用 Actuator，通常首先引入什么？

A. Actuator 相关 Starter
B. 前端 CSS 包
C. 数据库备份包
D. JDK 源码包

### SPRING-238（单选题）

内嵌服务器模式的核心特征是什么？

A. Tomcat 等直接嵌入应用程序
B. 必须依赖外部 Tomcat 才能运行
C. 只在浏览器中执行
D. 只能部署为静态文件

### SPRING-239（单选题）

使用内嵌服务器的 Spring Boot 应用通常如何启动？

A. java -jar 应用包
B. npm start
C. sql run
D. python server.py

### SPRING-240（单选题）

内嵌服务器如何帮助减少环境差异？

A. 开发、测试、生产使用相同打包运行环境
B. 要求每台机器手工安装不同容器
C. 把服务器配置写入浏览器
D. 禁止使用自动化部署

### SPRING-241（单选题）

课件列举的内嵌 Web 服务器不包括哪一个？

A. Tomcat
B. Jetty
C. Undertow
D. MySQL

### SPRING-242（单选题）

示例控制器使用哪个注解表示其返回值直接面向 HTTP 响应体？

A. @RestController
B. @Repository
C. @Configuration
D. @Aspect

### SPRING-243（单选题）

示例 HelloController 类上的 @RequestMapping("/hello") 作用是什么？

A. 定义控制器基础请求路径
B. 开启数据库事务
C. 注册指标端点
D. 配置日志格式

### SPRING-244（单选题）

示例中用于处理 GET /hello 请求的方法注解是什么？

A. @GetMapping
B. @PostConstruct
C. @Bean
D. @EnableAutoConfiguration

### SPRING-245（单选题）

示例中的 @RequestParam String name 用于获取什么？

A. 查询参数 name
B. 请求体文件
C. 响应状态码
D. 数据库主键约束

### SPRING-246（单选题）

访问 /hello?name=Spring 的示例响应正文是什么？

A. Hello, Spring!
B. 404 Not Found
C. Spring Boot failed
D. null

### SPRING-247（单选题）

Spring Boot 启动类 main 方法通常调用哪个方法？

A. SpringApplication.run
B. ApplicationContext.stopOnly
C. System.exitImmediately
D. Tomcat.deployOnly

### SPRING-248（单选题）

示例启动类上用于开启自动配置和组件扫描的注解是？

A. @SpringBootApplication
B. @RequestParam
C. @GetMapping
D. @Mock

### SPRING-249（单选题）

执行 SpringApplication.run 后，最核心的结果是什么？

A. 创建并刷新 Spring 应用上下文
B. 只打印一行字符串
C. 只编译 Java 文件
D. 只打开浏览器窗口

### SPRING-250（单选题）

若类级 @RequestMapping("/hello")，方法级 @GetMapping("/greet")，完整 GET 路径通常是？

A. /hello/greet
B. /greet/hello
C. /hello
D. /

### SPRING-251（单选题）

示例成功访问接口时返回的 HTTP 状态码是？

A. 200
B. 301
C. 404
D. 500

### SPRING-252（单选题）

课件如何描述 Spring Boot 与 Spring Framework 的关系？

A. Boot 是基于 Spring 生态的约定式工程能力，不是全新独立框架
B. Boot 完全取代 Spring
C. Boot 只能做前端
D. 两者不能同时使用

### SPRING-253（单选题）

Spring Initializr 在综合工程实践中的主要收益是什么？

A. 生成结构规范、依赖清晰的项目骨架
B. 自动编写所有业务规则
C. 替代生产监控平台
D. 直接创建数据库数据

### SPRING-254（单选题）

与传统 Spring Framework 相比，Spring Boot 的配置核心特点是什么？

A. 约定大于配置并自动装配
B. 完全取消所有配置
C. 只能使用 XML
D. 必须手工注册每个组件

### SPRING-255（单选题）

Spring Boot 解决依赖版本冲突的主要机制是什么？

A. Starter 场景化整合与统一版本管理
B. 把所有 Jar 放入 JDK
C. 禁止第三方依赖
D. 每次构建随机选版本

### SPRING-256（单选题）

传统 Spring 应用常见部署方式与 Boot 可执行 JAR 的主要差异是？

A. 传统方式常依赖外部容器，Boot 可随包携带内嵌服务器
B. 传统只能运行浏览器，Boot 只能运行数据库
C. 两者都必须使用 WAR
D. Boot 必须安装外部 Tomcat

### SPRING-257（单选题）

Spring Boot 提升开发效率的直接原因是什么？

A. 一键生成骨架并自动装配基础功能
B. 自动生成全部测试结果
C. 不需要 Java 编译器
D. 把业务代码隐藏起来

### SPRING-258（单选题）

相对传统 Spring，Boot 的运维优势主要体现为？

A. Actuator 可直接暴露健康与 Metrics 指标
B. 自动消除所有线上故障
C. 无需任何权限控制
D. 监控只能写在业务 Controller 中

### SPRING-259（单选题）

课件认为 Spring Boot 对初学者较友好的原因是什么？

A. 屏蔽部分底层复杂细节并提供标准化范式
B. 彻底不需要理解 IoC
C. 取消了所有 Java 语法
D. 只支持图形化操作

### SPRING-260（单选题）

@SpringBootApplication 组合中的 @SpringBootConfiguration 主要表示什么？

A. Spring Boot 应用的核心配置类
B. HTTP 请求参数
C. 数据库事务切面
D. 指标采集器

### SPRING-261（单选题）

@ComponentScan 默认从哪里开始扫描组件？

A. 主配置类所在包及其子包
B. 所有磁盘路径
C. 仅 JDK 包
D. 仅 resources 目录

### SPRING-262（单选题）

@EnableAutoConfiguration 会依据什么推断需要的 Bean？

A. 项目依赖的 Jar 包及条件
B. 用户姓名
C. 源文件行数
D. 显示器分辨率

### SPRING-263（单选题）

@ConfigurationProperties 相比散落的 @Value，突出优势是什么？

A. 把外部配置类型安全地绑定到对象
B. 只能绑定一个字符串
C. 自动把配置写入数据库
D. 禁用 IDE 补全

### SPRING-264（单选题）

@ConditionalOn 系列注解在自动配置中的作用是什么？

A. 按类路径、配置或环境条件决定 Bean 是否注入
B. 强制所有 Bean 注入
C. 只用于前端路由
D. 替代 Maven

### SPRING-265（单选题）

生产暴露 Actuator 端点时最应同时考虑什么？

A. 暴露范围与访问权限
B. 网页字体颜色
C. Java 类名长度
D. 本地磁盘大小

### SPRING-266（单选题）

metrics 端点中的 GC 频率数据最适合用于什么？

A. 分析性能压力和资源调优
B. 替代业务验收
C. 生成用户头像
D. 修改接口路径

### SPRING-267（单选题）

服务注册与存活探测通常可参考哪个 Actuator 端点？

A. health
B. info
C. metrics
D. beans-only

### SPRING-268（单选题）

线上发布验证和问题追溯可优先查看哪个端点？

A. info
B. health
C. metrics
D. shutdown-only

### SPRING-269（单选题）

课件总结的 Spring Boot 三大核心特性不包括哪项？

A. 自动配置
B. 起步依赖
C. Actuator
D. 强制手写 XML

### SPRING-270（单选题）

starter-web 课件列举的集成内容不包括哪项？

A. Spring MVC
B. 嵌入式 Tomcat
C. Jackson
D. Spring Batch 调度平台

## 多选题

### SPRING-271（多选题）

关于 Actuator 端点，正确的有？

A. health 反映健康状态
B. info 展示应用元数据
C. metrics 提供性能指标
D. 三者都只能修改业务数据

### SPRING-272（多选题）

Actuator 能帮助运维观察哪些内容？

A. Bean 加载情况
B. 环境配置与日志级别
C. JVM 内存、线程和 GC 指标
D. 员工考勤记录

### SPRING-273（多选题）

health 端点在课件中被描述为可以检查哪些依赖？

A. 数据库
B. 消息队列
C. Redis
D. 浏览器插件版本

### SPRING-274（多选题）

Actuator 指标能力的工程价值包括哪些？

A. 支持性能瓶颈分析
B. 辅助资源动态调优
C. 可对接 Prometheus、Grafana
D. 替代所有单元测试

### SPRING-275（多选题）

生产环境治理 Actuator 端点时，合理做法包括？

A. 按需开启端点
B. 关闭不必要的端点
C. 配置访问权限
D. 将所有端点匿名公开

### SPRING-276（多选题）

关于 Spring Boot 内嵌服务器，正确的有？

A. Tomcat 可随应用打包
B. Jetty 和 Undertow 也是课件列举的选择
C. 应用可用 java -jar 启动
D. 必须先安装独立外部容器

### SPRING-277（多选题）

内嵌服务器带来的收益包括哪些？

A. 部署步骤简化
B. 开发测试生产环境更一致
C. 降低外部容器版本差异
D. 强制用户安装 IDE

### SPRING-278（多选题）

HelloController 示例中，哪些注解或代码承担 REST 接口功能？

A. @RestController
B. @RequestMapping("/hello")
C. @GetMapping
D. @SpringBootApplication

### SPRING-279（多选题）

对于示例 GET http://localhost:8080/hello?name=Spring，正确的有？

A. 请求路径包含 /hello
B. name 参数值为 Spring
C. 成功响应状态为 200
D. 响应正文为 null

### SPRING-280（多选题）

Spring Boot 启动类通常具备哪些要素？

A. @SpringBootApplication
B. public static void main(String[] args)
C. SpringApplication.run 调用
D. 必须手写外部 Tomcat 部署脚本

### SPRING-281（多选题）

@SpringBootApplication 组合能力包括哪些？

A. 配置类标识
B. 自动配置
C. 组件扫描
D. 自动生成业务订单规则

### SPRING-282（多选题）

关于 @ComponentScan 默认范围，正确的有？

A. 从主配置类所在包开始
B. 覆盖其子包
C. 可发现 Controller、Service 等组件
D. 默认扫描所有磁盘目录

### SPRING-283（多选题）

@EnableAutoConfiguration 的正确理解包括哪些？

A. 依据依赖 Jar 推断组件
B. 减少手写基础配置
C. 按条件选择是否装配
D. 会替代全部业务代码

### SPRING-284（多选题）

@ConfigurationProperties 的优势包括哪些？

A. 类型安全绑定
B. 适合一组相关配置
C. 支持松散绑定和 IDE 补全
D. 只能读取一个固定字符串

### SPRING-285（多选题）

@ConditionalOn 系列可以依据哪些条件决定 Bean 是否注入？

A. 类路径依赖
B. 配置项或环境变量
C. 应用运行环境
D. 员工姓名首字母

### SPRING-286（多选题）

starter-web 课件列举的典型组成包括哪些？

A. Spring MVC
B. 嵌入式 Tomcat
C. Jackson
D. JDBC 事务管理器

### SPRING-287（多选题）

起步依赖能带来哪些价值？

A. 一站式依赖整合
B. 统一版本管理
C. 减少依赖声明和冲突
D. 让业务逻辑自动生成

### SPRING-288（多选题）

Spring Boot 相比传统 Spring 在配置方面的特点包括？

A. 约定大于配置
B. 自动装配核心组件
C. 减少 XML 样板代码
D. 禁止任何自定义配置

### SPRING-289（多选题）

Spring Boot 相比传统 Spring 的部署优势包括？

A. 可执行 JAR
B. 内嵌 Web 服务器
C. java -jar 启动
D. 必须依赖外部 Servlet 容器

### SPRING-290（多选题）

Spring Boot 的运维能力相对传统 Spring 有哪些改进？

A. Actuator 健康端点
B. Metrics 指标
C. 更方便对接监控工具
D. 自动保证所有服务永不故障

### SPRING-291（多选题）

Spring Initializr 的用途包括哪些？

A. 生成规范项目骨架
B. 生成依赖清单
C. 减少手动初始化错误
D. 自动完成所有领域业务代码

### SPRING-292（多选题）

综合工程实践中，开发者可以通过哪些方式聚焦业务？

A. 使用 Starter 减少依赖配置
B. 使用自动配置减少基础设施代码
C. 使用内嵌服务器简化部署
D. 取消单元测试

### SPRING-293（多选题）

关于 Actuator 管理访问方式，正确的有？

A. 可通过 HTTP 接口访问
B. 兼容 JMX
C. 端点是标准化轻量能力
D. 只能通过业务 Controller 暴露

### SPRING-294（多选题）

health 端点的运维意义包括哪些？

A. 服务存活探测
B. 依赖连通性检查
C. 辅助服务注册判断
D. 展示全部 Git 提交记录

### SPRING-295（多选题）

info 端点适合支持哪些运维活动？

A. 发布版本核对
B. Git 提交追溯
C. 构建时间确认
D. JVM GC 频率分析

### SPRING-296（多选题）

metrics 端点可支持哪些分析？

A. 内存使用分析
B. 线程数量观察
C. CPU 负载和 GC 频率分析
D. 修改数据库表结构

### SPRING-297（多选题）

如果要安全使用 Actuator，哪些策略合理？

A. 只暴露需要的端点
B. 对管理端点做权限限制
C. 避免敏感环境信息无保护公开
D. 把所有端点直接暴露给公网匿名用户

### SPRING-298（多选题）

REST 示例的请求处理链条包含哪些逻辑？

A. 类级路径与方法级路径组合
B. HTTP 方法映射
C. 查询参数绑定
D. 必须手写 XML DispatcherServlet 配置

### SPRING-299（多选题）

关于 SpringApplication.run，正确的有？

A. 由 main 方法调用
B. 用于启动应用上下文
C. 配合 @SpringBootApplication 使用
D. 只负责打印启动日志

### SPRING-300（多选题）

关于 Spring Framework 与 Spring Boot 的关系，正确的有？

A. Boot 建立在 Spring 生态之上
B. Boot 提供约定式工程能力
C. Boot 不是完全独立于 Spring 的新语言框架
D. Boot 会让 IoC 和 AOP 失效

# 第5讲：Spring Cloud 微服务架构及核心组件

## 单选题

### SPRING-301（单选题）

微服务架构相对于单体应用最核心的拆分原则是什么？

A. 按业务能力形成自治服务
B. 按每个Java类拆成服务
C. 按数据库字段拆成服务
D. 按团队成员姓名拆成服务

### SPRING-302（单选题）

微服务中的“独立部署”主要意味着什么？

A. 单个服务可以独立发布和扩展
B. 所有服务必须同时停机发布
C. 所有服务共享同一个进程
D. 服务不能使用网络通信

### SPRING-303（单选题）

单体应用中一个模块资源耗尽可能拖垮整个应用，微服务主要通过什么机制缓解？

A. 故障隔离
B. 删除所有日志
C. 强制共享线程池
D. 取消服务边界

### SPRING-304（单选题）

Spring Boot 与 Spring Cloud 的定位关系，哪项最准确？

A. Boot偏向单个应用基础，Cloud偏向分布式治理
B. Boot只做数据库，Cloud只做前端
C. Boot和Cloud是两门互斥语言
D. Cloud只能替代Java虚拟机

### SPRING-305（单选题）

下列哪项最适合作为微服务统一入口？

A. Spring Cloud Gateway
B. Nacos配置文件
C. OpenFeign接口
D. Sentinel规则文件

### SPRING-306（单选题）

课件提到传统Netflix OSS组件逐步转向哪类方案？

A. Spring Cloud Alibaba体系
B. 只使用JSP标签库
C. 只使用EJB容器
D. 放弃服务治理

### SPRING-307（单选题）

服务实例启动时向注册中心上报IP、端口等信息，这一步称为？

A. 服务注册
B. 服务熔断
C. 请求降级
D. 路由过滤

### SPRING-308（单选题）

消费者从Nacos获得可用服务实例列表的过程称为？

A. 服务发现
B. 服务编译
C. 配置回滚
D. 链路采样

### SPRING-309（单选题）

注册中心通过什么方式感知临时实例是否仍然存活？

A. 实例定时发送心跳
B. 消费者修改业务表
C. 网关随机猜测地址
D. 编译器扫描字节码

### SPRING-310（单选题）

课件说明消费者通常会缓存实例列表，主要收益是什么？

A. 避免每次调用都远程查询注册中心
B. 让服务永远不会下线
C. 把所有请求改成数据库查询
D. 取消健康检查

### SPRING-311（单选题）

Nacos在课件中被定位为哪类基础组件？

A. 注册中心与配置中心一体化组件
B. 只负责日志采集的Agent
C. 只负责页面渲染的引擎
D. Java编译器插件

### SPRING-312（单选题）

需要优先保证注册中心在网络分区下仍可提供服务列表，通常应偏向哪种取舍？

A. 优先可用性和分区容错，接受短暂不一致
B. 优先强一致并接受完全不可用
C. 关闭所有实例健康检查
D. 让消费者硬编码IP

### SPRING-313（单选题）

Nacos临时实例因心跳超时被剔除后，最合理的解释是？

A. 注册中心将其视为异常实例，不再向消费者推荐
B. 实例的业务数据被自动删除
C. 所有服务都被强制重启
D. 配置中心永久删除了命名空间

### SPRING-314（单选题）

OpenFeign最主要解决哪类开发痛点？

A. 以声明式接口简化HTTP服务调用
B. 替代注册中心保存实例
C. 直接修改数据库表结构
D. 生成前端CSS

### SPRING-315（单选题）

以下哪段代码体现了Feign的声明式服务契约？

```java
@FeignClient("order-service")
interface OrderClient {
  @GetMapping("/orders/{id}")
  Order get(@PathVariable Long id);
}
```

A. @FeignClient("order-service") interface OrderClient { @GetMapping("/orders/{id}") Order get(@PathVariable Long id); }
B. String url = "http://10.0.0.2/order";
C. System.out.println("order");
D. new Thread(() -> {}).start();

### SPRING-316（单选题）

Spring Cloud LoadBalancer的主要职责是什么？

A. 从多个可用实例中选择请求目标
B. 负责集中存储所有配置文本
C. 将异常转换成业务成功
D. 只负责采集日志

### SPRING-317（单选题）

轮询策略最适合哪种实例集合？

A. 性能配置相近且希望均匀分发的同构实例
B. 只有一个实例且不允许切换
C. 响应时间差异极大的异构实例
D. 没有健康状态的任意地址

### SPRING-318（单选题）

加权响应时间策略的核心依据是什么？

A. 实例历史响应时间等性能信息
B. 服务名称字母顺序
C. 源码文件大小
D. 客户端屏幕分辨率

### SPRING-319（单选题）

在RestTemplate上添加@LoadBalanced通常表示什么？

A. 调用时使用服务名并交给客户端负载均衡解析
B. 把RestTemplate变成数据库连接池
C. 关闭所有实例健康检查
D. 强制所有请求走浏览器

### SPRING-320（单选题）

Feign调用下游服务未设置超时，最可能引发什么风险？

A. 调用线程长期占用并放大级联阻塞
B. 请求一定立即成功
C. 注册中心自动修复业务错误
D. 所有异常都被转换为缓存命中

### SPRING-321（单选题）

断路器在失败率超过阈值时进入打开状态，主要目的是什么？

A. 快速拒绝后续请求，阻断故障传播
B. 无限重试直到成功
C. 清空所有业务数据
D. 绕过鉴权直接访问下游

### SPRING-322（单选题）

断路器半开状态通常用于做什么？

A. 试探性放行少量请求以判断依赖是否恢复
B. 永久拒绝所有请求
C. 绕过所有限流规则
D. 自动删除服务实例

### SPRING-323（单选题）

服务降级的核心目标是什么？

A. 牺牲非核心功能，优先保持核心流程可用
B. 让所有非核心功能变成强一致事务
C. 把错误隐藏且不记录
D. 无限等待依赖恢复

### SPRING-324（单选题）

下游响应从20ms变为2s后，同步上游最危险的连锁反应是？

A. 线程长期阻塞并最终耗尽线程池
B. 调用会自动变成异步
C. 所有请求都会被缓存
D. 注册中心立即删除业务代码

### SPRING-325（单选题）

Sentinel基于QPS或并发数限流，主要解决什么问题？

A. 削峰填谷，避免瞬时流量压垮服务
B. 自动生成服务接口
C. 集中管理Git提交
D. 替代所有数据库事务

### SPRING-326（单选题）

对高频商品ID做热点参数限流，主要是在防护什么？

A. 单个热点参数被高频访问导致局部过载
B. 所有服务的版本号冲突
C. 配置文件的字符编码
D. JVM类加载顺序

### SPRING-327（单选题）

Sentinel可依据哪类指标触发熔断降级？

A. 慢调用、异常比例或异常数
B. 代码注释行数
C. 数据库表字段颜色
D. 用户头像尺寸

### SPRING-328（单选题）

@SentinelResource中的fallback通常用于什么？

A. 指定资源发生异常或降级时的兜底逻辑
B. 声明注册中心地址
C. 定义Gateway路径断言
D. 生成数据库索引

### SPRING-329（单选题）

Spring Cloud Gateway中Route由什么组成？

A. 唯一ID、目标URI、断言集合和过滤器链
B. 数据库表、索引和触发器
C. 线程池、锁和GC日志
D. 类名、方法名和字节码

### SPRING-330（单选题）

Gateway Predicate的作用是什么？

A. 根据路径、方法或Header等条件判断是否匹配
B. 修改数据库事务隔离级别
C. 记录JVM堆快照
D. 注册服务实例

### SPRING-331（单选题）

Gateway Filter通常可以完成哪类处理？

A. 请求改写、鉴权校验和日志记录
B. 编译Java源文件
C. 创建所有业务订单
D. 替换操作系统内核

### SPRING-332（单选题）

路由配置StripPrefix=1的直观效果是什么？

A. 转发时移除请求路径的第一段前缀
B. 把请求复制一份发送两次
C. 强制启用随机负载均衡
D. 关闭所有后置过滤器

### SPRING-333（单选题）

Gateway配置uri为lb://user-service，说明网关将如何寻找目标？

A. 通过服务发现和负载均衡选择user-service实例
B. 访问名为lb的本地文件
C. 直接连接固定IP
D. 把请求发给配置中心处理

### SPRING-334（单选题）

把鉴权放在Gateway前置过滤器的主要收益是什么？

A. 在请求进入后端服务前统一拦截非法访问
B. 让每个服务都必须复制同一套页面
C. 取消服务间通信
D. 避免所有日志记录

### SPRING-335（单选题）

Nacos配置中心主要解决哪种运维问题？

A. 集中管理多环境配置并支持动态更新
B. 把所有请求转成RPC
C. 替代代码版本控制
D. 自动设计数据库范式

### SPRING-336（单选题）

结合@RefreshScope，配置变更后通常可以达到什么效果？

A. 相关Bean重新获取配置，无需重启整个服务
B. 所有Java类都被删除后重编译
C. 注册中心被关闭
D. 数据库连接永久断开

### SPRING-337（单选题）

Nacos通过Namespace和Group主要实现什么？

A. 多环境和配置分组隔离
B. 为每个请求分配线程
C. 替代HTTP协议
D. 压缩所有日志文件

### SPRING-338（单选题）

Nacos配置动态推送中的长轮询，主要作用是什么？

A. 让客户端及时感知配置变更并重新拉取
B. 让客户端每秒无条件重启
C. 把配置写入业务订单表
D. 阻止所有配置回滚

### SPRING-339（单选题）

生产环境将数据库密码放在配置中心时，最重要的配套措施是什么？

A. 按环境隔离并限制访问权限
B. 将密码打印到每条业务日志
C. 把密码放到URL路径中
D. 让所有匿名用户可编辑

### SPRING-340（单选题）

课件建议多数商品、订单业务优先接受哪种一致性模型？

A. 最终一致性
B. 所有跨服务操作都使用长时间强一致事务
C. 完全不保存状态
D. 只依赖客户端缓存且不落库

### SPRING-341（单选题）

在确需跨服务事务但又要降低长事务影响时，课件建议评估什么？

A. TCC或Saga等柔性事务模式
B. 把所有服务合并成一个Controller方法
C. 删除失败补偿
D. 无限增加数据库锁粒度

### SPRING-342（单选题）

微服务初期不宜过度拆分的主要原因是什么？

A. 网络调用、部署和运维复杂度会快速增加
B. 拆分越细越不需要测试
C. 服务越多就不会有故障
D. 拆分会自动得到强一致性

### SPRING-343（单选题）

下列配置将请求 /api/users/42 转发到哪个逻辑服务？

```java
spring:
  cloud:
    gateway:
      routes:
        - id: user-route
          uri: lb://user-service
          predicates:
            - Path=/api/users/**
          filters:
            - StripPrefix=1
```

A. user-service
B. api
C. gateway
D. 42

### SPRING-344（单选题）

在上题配置中，转发到user-service前StripPrefix=1后路径更可能变为？

```java
filters:
  - StripPrefix=1
```

A. /users/42
B. /api/users/42
C. /42
D. /api/

### SPRING-345（单选题）

微服务调用出现“慢但不报错”时，优先补充哪类信息最有帮助？

A. 链路追踪和响应时间指标
B. 只看编译器警告
C. 删除所有请求日志
D. 只检查前端颜色

### SPRING-346（单选题）

对一个会产生扣款动作的Feign调用配置重试时，必须优先考虑什么？

A. 幂等性和重复执行风险
B. 把重试次数设置为无限
C. 忽略超时和熔断
D. 每次失败都创建新订单

### SPRING-347（单选题）

服务注册、调用、限流、网关和配置中心共同构成了什么能力？

A. 微服务全局治理链路
B. 单个类的语法检查
C. 前端页面布局系统
D. 数据库备份脚本

### SPRING-348（单选题）

Gateway按Header或权重进行灰度分流，主要解决什么问题？

A. 让新旧版本平滑过渡并控制发布风险
B. 让所有请求永久固定到旧版本
C. 删除旧版本日志
D. 把配置中心变成本地文件

### SPRING-349（单选题）

从单体演进到微服务时，课件建议优先依据什么拆分？

A. 清晰的业务域边界
B. 技术层级名称
C. 代码行数绝对平均
D. 服务器磁盘目录

### SPRING-350（单选题）

健康检查将异常实例从列表中移除后，负载均衡器的直接收益是什么？

A. 减少请求发往故障节点的概率
B. 保证业务逻辑一定正确
C. 绕过所有权限校验
D. 自动提交分布式事务

### SPRING-351（单选题）

订单已创建但库存服务暂时不可用，适合的设计是？

A. 记录可靠事件并异步重试或补偿
B. 同步阻塞所有用户直到库存恢复
C. 静默丢弃订单事件
D. 直接把库存数据库暴露给网关

### SPRING-352（单选题）

如果订单服务和支付服务共享同一张业务表，最明显的架构风险是？

A. 服务边界被数据库耦合，难以独立演进
B. 两服务自动获得强隔离
C. 调用延迟一定为零
D. 注册中心不再需要

### SPRING-353（单选题）

配置中心支持版本回滚的直接价值是什么？

A. 错误配置发布后可快速恢复到已知版本
B. 代码会自动回滚到上一提交
C. 所有服务一定无需验证
D. 可以省略权限审计

### SPRING-354（单选题）

服务实例注册时除了地址外还可以携带什么？

A. 端口和元数据
B. 用户密码明文日志
C. 前端DOM节点
D. 数据库执行计划

### SPRING-355（单选题）

消费者把实例列表缓存到本地后，仍需保留哪项机制？

A. 定期刷新或变更监听
B. 删除所有网络调用
C. 把实例永久写死
D. 关闭异常摘除

### SPRING-356（单选题）

临时实例和持久化实例的主要差异体现在哪方面？

A. 实例健康和注册数据的持久化语义
B. Java代码是否能编译
C. HTTP方法数量
D. 网关是否支持Path断言

### SPRING-357（单选题）

注册中心集群部署的首要目标是什么？

A. 避免单点并提高服务治理可用性
B. 让业务代码不再需要异常处理
C. 保证每次读取都不产生网络开销
D. 取代所有业务数据库

### SPRING-358（单选题）

调用http://order-service/orders时，order-service最可能代表什么？

A. 注册中心中的逻辑服务名
B. 客户端本地文件名
C. 数据库表名
D. 网关过滤器ID

### SPRING-359（单选题）

Feign方法参数需要绑定路径变量时，常使用哪个注解？

A. @PathVariable
B. @Bean
C. @Configuration
D. @Repository

### SPRING-360（单选题）

Feign调用中查询参数通常使用哪个注解表达？

A. @RequestParam
B. @Autowired
C. @ComponentScan
D. @Import

### SPRING-361（单选题）

如果提供者把/orders/{id}改为/purchases/{id}，Feign接口最需要同步什么？

A. 映射路径契约
B. 本地线程池名称
C. 客户端屏幕尺寸
D. Nacos命名空间显示名称

### SPRING-362（单选题）

负载均衡器选择实例前首先应排除哪类节点？

A. 被健康检查标记为不可用的节点
B. 响应最快的节点
C. 带有服务元数据的节点
D. 刚刚成功处理请求的节点

### SPRING-363（单选题）

随机负载策略相对于轮询的一个特点是什么？

A. 不按固定顺序选择实例
B. 一定优先选择响应最快节点
C. 只支持单实例服务
D. 会自动提供事务回滚

### SPRING-364（单选题）

读取超时和连接超时都需要设置的原因是？

A. 分别限制建立连接和等待响应的时间
B. 让请求自动变成幂等
C. 使注册中心无需心跳
D. 让网关跳过鉴权

### SPRING-365（单选题）

断路器统计异常比例时，统计对象通常是哪个范围？

A. 某个受保护资源或依赖调用
B. 所有用户的浏览器版本
C. 源码所有注释
D. 服务器机房名称

### SPRING-366（单选题）

半开探测请求成功后，断路器通常会怎样？

A. 逐步恢复正常转发并闭合
B. 永久保持打开
C. 删除服务注册信息
D. 清空配置中心

### SPRING-367（单选题）

商品详情的推荐模块不可用时，最合适的降级返回可能是？

A. 隐藏推荐并返回商品核心信息
B. 返回数据库密码
C. 阻塞整个商品页
D. 把错误堆栈当商品名称

### SPRING-368（单选题）

令牌桶限流通常允许什么现象？

A. 在桶内有令牌时允许一定突发流量
B. 无限制接受所有突发流量
C. 只允许定时任务访问
D. 自动修改数据库索引

### SPRING-369（单选题）

并发数限流更直接保护哪类资源？

A. 同时占用的线程和处理能力
B. 配置文件版本号
C. 服务名称长度
D. Git分支数量

### SPRING-370（单选题）

Sentinel系统自适应保护可参考哪些运行指标？

A. CPU负载和内存水位
B. 代码注释数量
C. 接口命名风格
D. 用户昵称长度

### SPRING-371（单选题）

Gateway Route的唯一ID主要用于什么？

A. 标识和管理这条路由规则
B. 作为数据库主键自动建表
C. 代表下游实例IP
D. 替代所有断言条件

### SPRING-372（单选题）

前置过滤器和后置过滤器的区别主要在于什么？

A. 执行时机分别位于转发前和响应后
B. 一个运行在数据库，一个运行在浏览器
C. 一个只处理配置，一个只处理代码
D. 二者都只能修改数据库

### SPRING-373（单选题）

路径重写的主要价值是什么？

A. 让外部API路径与内部服务路径解耦
B. 让服务注册不再需要实例
C. 保证所有业务请求幂等
D. 自动生成OpenFeign接口

### SPRING-374（单选题）

把限流放在网关入口的一个优势是什么？

A. 在流量进入多个后端服务前统一削峰
B. 让后端服务无需任何监控
C. 把所有请求改成GET
D. 使数据库天然分库

### SPRING-375（单选题）

开发和生产使用不同Namespace的主要目的是什么？

A. 防止不同环境配置串用
B. 提高单个接口QPS
C. 代替服务心跳
D. 控制Java对象生命周期

### SPRING-376（单选题）

Group在配置中心中更适合用来做什么？

A. 对同一环境内的配置进行逻辑分组
B. 给每个请求分配线程
C. 替代用户认证
D. 保存所有编译产物

### SPRING-377（单选题）

配置动态刷新后，哪些对象不一定会自动改变？

A. 已经复制配置值且不受刷新作用域管理的对象
B. 所有新建Bean
C. 配置中心服务器
D. Nacos控制台页面

### SPRING-378（单选题）

配置灰度的“爆炸半径”指什么？

A. 一次变更可能影响的实例或流量范围
B. 配置文件的字符数
C. 服务名称长度
D. 网关路径层级数

### SPRING-379（单选题）

最终一致性允许什么现象？

A. 短时间内不同服务看到的数据暂不相同，之后趋于一致
B. 数据永远不能一致
C. 所有请求必须同步阻塞
D. 只允许单机部署

### SPRING-380（单选题）

订单服务发布事件而库存服务异步消费，主要收益是什么？

A. 降低同步耦合并提升故障隔离
B. 保证库存更新永不失败
C. 取消所有消息重试
D. 让两个服务共享内存

### SPRING-381（单选题）

TCC模式中的Try阶段通常负责什么？

A. 预留或检查业务资源
B. 直接忽略业务失败
C. 只打印日志不改变状态
D. 永久提交最终结果

### SPRING-382（单选题）

Saga适合哪类分布式业务？

A. 可拆成多个步骤并允许补偿的长流程
B. 必须一个数据库锁住所有服务的场景
C. 没有任何状态变化的查询
D. 只读静态网页

### SPRING-383（单选题）

判断服务边界时，以下哪项是坏指标？

A. 为了凑数量而要求每个服务大小完全相同
B. 业务职责是否内聚
C. 数据和团队边界是否清晰
D. 调用频率和故障影响范围

### SPRING-384（单选题）

TraceId最主要用于什么？

A. 把一次请求跨多个服务的日志和调用串联起来
B. 为数据库生成自增主键
C. 替代服务名
D. 控制限流阈值

### SPRING-385（单选题）

服务P95延迟突然升高，最应先关注什么？

A. 请求耗时分位数及对应下游调用
B. 代码文件名排序
C. 前端按钮颜色
D. Git分支数量

### SPRING-386（单选题）

记录远程调用失败日志时，最有价值的上下文组合是什么？

A. 服务名、路径、TraceId、耗时和错误码
B. 只记录“失败”两个字
C. 记录用户密码和完整Token
D. 只记录本地时间不记录请求标识

### SPRING-387（单选题）

Spring Cloud版本升级前最重要的第一步是什么？

A. 阅读兼容矩阵和迁移说明
B. 直接替换所有依赖版本
C. 删除测试后部署生产
D. 忽略Boot版本

### SPRING-388（单选题）

数据库密码配置在Nacos中时，哪种做法更合适？

A. 使用权限控制和安全存储，并避免日志泄露
B. 把密码放在公开README
C. 让所有服务账号都可编辑
D. 在Gateway响应头返回密码

### SPRING-389（单选题）

核心支付调用失败而推荐服务失败时，降级策略应优先保住什么？

A. 支付结果和订单状态
B. 推荐列表完整性
C. 所有图片质量
D. 营销文案颜色

### SPRING-390（单选题）

异步库存扣减消息消费失败后，合理的处理包括什么？

A. 重试、死信记录和人工或自动补偿
B. 静默丢弃消息
C. 无限高速重试
D. 直接修改消费者数据库而不留记录

### SPRING-391（单选题）

服务自治最不希望出现的情况是什么？

A. 一个服务必须修改另一个服务的内部表才能完成发布
B. 通过稳定API协作
C. 拥有独立部署流水线
D. 按业务域维护自己的数据边界

### SPRING-392（单选题）

当消费者本地缓存的实例列表长期不更新时，最直接的风险是什么？

A. 请求继续发往已经失效的地址
B. 所有请求自动获得更高权限
C. 配置中心自动创建新服务
D. 网关会把请求改成静态资源

### SPRING-393（单选题）

在促销活动前，为保护订单服务最应该先做什么？

A. 根据容量设置入口限流和并发上限
B. 关闭健康检查以减少开销
C. 取消所有超时
D. 把所有请求同步重试十次

### SPRING-394（单选题）

一条路由同时配置Path和Method断言时，请求何时会被转发？

A. 同时满足这些断言条件
B. 满足任意一个条件即可
C. 只要目标服务在线即可
D. 只要Header存在即可

### SPRING-395（单选题）

配置中心的本地缓存主要用于什么？

A. 在网络短暂异常时保留最近可用配置
B. 绕过所有权限控制
C. 永久替代配置版本管理
D. 把配置自动编译成Java类

### SPRING-396（单选题）

熔断打开后仍继续向同一故障依赖发起大量探测请求，会造成什么问题？

A. 保护效果被削弱，故障依赖仍承受压力
B. 一定能更快恢复且无副作用
C. 注册中心会自动扩容数据库
D. 请求会自动变成本地缓存

### SPRING-397（单选题）

Provider与Consumer在实战路线中分别更接近什么角色？

A. Provider提供服务，Consumer发现并调用服务
B. Provider只负责前端，Consumer只负责数据库
C. 二者都必须是注册中心
D. 二者不能通过网络通信

### SPRING-398（单选题）

引入Spring Cloud组件时，最稳妥的版本选择方式是什么？

A. 按官方兼容矩阵选择与Spring Boot匹配的发行列车
B. 只看某个博客的最新单个依赖版本
C. 混用任意主版本
D. 完全忽略JDK和Boot版本

### SPRING-399（单选题）

负载均衡中的实例权重通常表达什么？

A. 希望该实例承担的相对流量比例
B. 实例的数据库密码
C. 网关的路径前缀
D. 日志保留天数

### SPRING-400（单选题）

降级逻辑最不应该做什么？

A. 把不可用依赖的错误伪装成已完成的扣款
B. 返回明确的默认值
C. 使用缓存展示非核心信息
D. 记录受控的异常上下文

### SPRING-401（单选题）

网关统一鉴权后，后端服务是否仍应保护敏感接口？

A. 应继续按服务边界做必要授权校验
B. 不需要任何权限控制
C. 只检查请求颜色
D. 把权限写进URL明文

### SPRING-402（单选题）

外部化配置相对硬编码的主要优点是什么？

A. 同一制品可以适配不同环境
B. 所有配置不再需要版本管理
C. 业务规则自动生成
D. 配置一定不会出错

### SPRING-403（单选题）

同一业务事件可能被投递两次时，消费者首先应保证什么？

A. 重复处理不会产生错误副作用
B. 每次都创建新记录
C. 关闭失败重试
D. 忽略事件ID

### SPRING-404（单选题）

健康检查显示UP是否等同于业务完全正常？

A. 不等同，还需结合业务指标和关键依赖
B. 等同于所有订单都成功
C. 等同于没有任何慢请求
D. 等同于配置一定正确

### SPRING-405（单选题）

Gateway灰度新版本时，最应对比哪些指标？

A. 新旧版本错误率和延迟
B. 用户电脑壁纸
C. 代码注释数量
D. 服务名称长度

### SPRING-406（单选题）

防止未授权服务注册到注册中心，可以采取什么措施？

A. 认证、权限和命名空间隔离
B. 开放匿名注册
C. 把注册端口写进前端页面
D. 关闭所有心跳

### SPRING-407（单选题）

客户端缓存实例列表的一个潜在问题是什么？

A. 缓存过期导致短时间使用旧地址
B. 缓存一定比服务端更准确
C. 缓存自动保证一致性
D. 缓存会替代健康检查

### SPRING-408（单选题）

Feign收到下游5xx时，业务层最不应直接做什么？

A. 把所有5xx都当作成功返回
B. 按错误类型执行有限重试或降级
C. 记录调用上下文
D. 保留错误码语义

### SPRING-409（单选题）

当系统已接近容量上限时，限流策略通常应优先保护什么？

A. 核心接口和关键资源
B. 低价值的调试接口
C. 所有请求一视同仁且无限等待
D. 未部署的服务

### SPRING-410（单选题）

在Gateway中统一添加TraceId的处理属于什么？

A. 过滤器中的横切处理
B. 业务数据库触发器
C. Nacos实例注册
D. LoadBalancer策略

### SPRING-411（单选题）

同一配置键在不同Group中可以有什么结果？

A. 按Group读取时得到不同配置值
B. 一定只能存在一个值
C. 自动合并成Java源码
D. 变成Gateway断言

### SPRING-412（单选题）

最终一致性并不意味着什么？

A. 可以无限期不处理差异
B. 应设计可接受的收敛时间
C. 需要失败重试和补偿
D. 需要业务方定义一致性目标

### SPRING-413（单选题）

把一个模块拆成远程服务后，新增的直接成本通常是什么？

A. 网络序列化和调用失败处理
B. Java语法自动简化
C. 不再需要部署
D. 数据库自动扩容

### SPRING-414（单选题）

告警的目的主要是什么？

A. 在异常影响扩大前提醒并触发处置
B. 替代所有测试
C. 自动保证业务正确
D. 隐藏系统故障

### SPRING-415（单选题）

使用Docker Compose启动Nacos练习环境的价值是什么？

A. 快速复现基础设施环境
B. 让服务无需配置就能互相发现
C. 替代所有生产部署方案
D. 删除版本差异

### SPRING-416（单选题）

遇到Spring Cloud版本兼容疑问时，最可靠的第一手资料是？

A. 项目官方文档和兼容说明
B. 随机搜索结果的标题
C. 旧课件中的错误命令
D. 未注明版本的代码截图

### SPRING-417（单选题）

模拟下游超时时，验证上游线程是否被长期占用属于什么测试？

A. 超时与故障隔离测试
B. UI颜色测试
C. 数据库建模测试
D. 编译器语法测试

### SPRING-418（单选题）

配置中心暂时不可用时，服务保留最近一次有效配置可以帮助什么？

A. 降低短暂配置网络故障对运行的影响
B. 让错误配置永远生效
C. 跳过所有安全校验
D. 自动修改业务代码

### SPRING-419（单选题）

注册中心中的服务目录最像什么？

A. 动态通讯录
B. 静态网页模板
C. 数据库索引页
D. 编译器错误列表

### SPRING-420（单选题）

熔断器打开后最先保护的通常是哪类资源？

A. 调用方线程、连接和队列
B. 用户头像文件
C. 源代码注释
D. 开发者电脑磁盘

## 多选题

### SPRING-421（多选题）

微服务架构通常具备哪些特征？

A. 服务独立部署
B. 围绕单一业务能力
C. 服务间通过轻量协议通信
D. 所有模块必须共享一个进程

### SPRING-422（多选题）

相对于传统单体，微服务可能带来哪些收益？

A. 独立扩展
B. 局部故障隔离
C. 团队并行交付
D. 天然消除所有分布式复杂度

### SPRING-423（多选题）

关于Spring Boot和Spring Cloud，正确的有？

A. Boot提供应用基础设施
B. Cloud提供分布式治理组件
C. Cloud通常建立在Spring生态之上
D. Boot会自动替代所有业务设计

### SPRING-424（多选题）

下列哪些属于课件列出的Spring Cloud治理方向？

A. 服务注册发现
B. API网关
C. 熔断限流
D. 前端图片裁剪

### SPRING-425（多选题）

服务注册与发现链路通常包含哪些动作？

A. 提供者注册地址和元数据
B. 消费者拉取实例列表
C. 实例发送心跳续约
D. 消费者把IP永久硬编码

### SPRING-426（多选题）

注册中心能够为微服务提供哪些基础能力？

A. 集中管理地址
B. 感知实例上下线
C. 支持故障转移基础
D. 自动修复任意业务Bug

### SPRING-427（多选题）

课件强调Nacos的哪些能力？

A. 注册中心与配置中心一体化
B. 可视化管控台
C. 临时与持久化实例模式
D. 只能单机且不支持生态集成

### SPRING-428（多选题）

关于实例心跳和健康检查，正确的有？

A. 心跳超时可触发实例摘除
B. 摘除后应避免继续向该实例转发流量
C. 健康检查能替代所有业务监控
D. 心跳只在编译期执行一次

### SPRING-429（多选题）

使用OpenFeign相比手写RestTemplate模板代码，通常可以获得哪些收益？

A. 接口即契约
B. 减少URL拼接错误
C. 便于和服务发现及负载均衡整合
D. 自动保证下游业务永不失败

### SPRING-430（多选题）

Spring Cloud LoadBalancer可以支持哪些策略或能力？

A. 轮询
B. 随机选择
C. 按响应时间调整权重
D. 把所有请求固定到第一个实例

### SPRING-431（多选题）

生产环境设计Feign远程调用时，合理的治理措施包括哪些？

A. 设置连接和读取超时
B. 结合熔断或降级
C. 记录调用耗时和错误上下文
D. 失败后无限重试

### SPRING-432（多选题）

针对下游变慢导致的线程耗尽，哪些措施有助于防护？

A. 设置合理超时
B. 熔断快速失败
C. 对非核心功能降级
D. 让请求无限排队等待

### SPRING-433（多选题）

Sentinel可以从哪些维度进行流量治理？

A. QPS限流
B. 并发线程数限流
C. 热点参数限流
D. 修改Java语法树

### SPRING-434（多选题）

Sentinel熔断降级机制的合理表述包括哪些？

A. 可按慢调用触发
B. 可按异常比例或异常数触发
C. 可保护不稳定依赖
D. 会自动修复下游业务逻辑

### SPRING-435（多选题）

为受保护资源设计fallback时，哪些返回方式是合理的？

A. 返回本地缓存快照
B. 返回稳定默认值
C. 给用户友好提示并记录上下文
D. 把异常堆栈直接返回公网

### SPRING-436（多选题）

Gateway一条Route的基础匹配定义通常包含哪些元素？

A. 唯一ID
B. 目标URI
C. Predicate断言集合
D. 数据库事务隔离级别

### SPRING-437（多选题）

统一API网关常见的职责包括哪些？

A. 认证鉴权
B. 限流防刷
C. 访问日志和监控
D. 编写每个领域服务的核心算法

### SPRING-438（多选题）

Gateway Predicate可以基于哪些条件匹配请求？

A. Path路径
B. HTTP Method
C. Header
D. 数据库订单金额字段（未在请求中提供）

### SPRING-439（多选题）

Gateway Filter适合实现哪些横切逻辑？

A. 改写请求路径
B. 在响应阶段补充处理
C. 鉴权和审计
D. 直接替代订单服务的领域模型

### SPRING-440（多选题）

Nacos配置中心支持哪些工程能力？

A. 集中化存储
B. Namespace/Group环境隔离
C. 配置版本追溯与回滚
D. 自动生成所有业务代码

### SPRING-441（多选题）

配置动态热刷新链路通常包含哪些步骤？

A. 服务启动时拉取配置
B. 客户端监听变更通知
C. 重新拉取并更新本地缓存
D. 必须停止全部实例后才能生效

### SPRING-442（多选题）

集中化配置在生产环境还需要哪些安全措施？

A. 最小权限访问
B. 敏感配置脱敏和审计
C. 按环境隔离
D. 把管理控制台匿名暴露公网

### SPRING-443（多选题）

关于微服务场景的CAP取舍，合理的有？

A. 分区容错是分布式系统必须面对的约束
B. 注册发现通常更关注可用性
C. 多数业务可以接受最终一致性
D. 任何金融和非金融场景都必须使用同一种一致性方案

### SPRING-444（多选题）

减少跨服务强一致事务的常见方式包括哪些？

A. 消息异步解耦
B. 补偿机制
C. TCC或Saga柔性事务
D. 把所有服务数据库账号设为同一个超级用户

### SPRING-445（多选题）

微服务拆分时哪些做法更稳妥？

A. 先识别核心业务边界
B. 从单体验证业务后逐步拆分
C. 评估网络和运维成本
D. 为了追求数量而把每个类都拆成服务

### SPRING-446（多选题）

设计跨服务重试时，哪些条件应同时考虑？

A. 请求是否幂等
B. 超时和退避策略
C. 熔断和最大重试次数
D. 失败后无条件重复扣款

### SPRING-447（多选题）

微服务可观测性建设中，哪些信息具有定位价值？

A. TraceId或链路标识
B. 各服务响应耗时
C. 错误码和异常上下文
D. 只记录最终页面颜色

### SPRING-448（多选题）

课件建议的微服务动手路线包含哪些阶段？

A. 容器化拉起Nacos
B. 构建Provider与Consumer
C. 通过Feign进行远程调用
D. 先做复杂分布式事务再验证服务注册

### SPRING-449（多选题）

对于lb://user-service与Path=/api/users/**的配置，正确理解包括哪些？

A. 目标是逻辑服务user-service
B. Path断言限制匹配路径
C. 网关可结合注册中心选实例
D. lb://表示固定IP地址

### SPRING-450（多选题）

在课件范围内，Spring Cloud组件之间的合理协作包括哪些？

A. Nacos提供注册发现和配置
B. Feign负责声明式调用
C. Sentinel负责流控熔断降级
D. Gateway负责持久化订单明细

### SPRING-451（多选题）

下列哪些设计有助于避免非核心依赖拖垮核心流程？

A. 为依赖设置超时
B. 使用舱壁或线程池隔离
C. 为非核心功能提供缓存或默认值
D. 把所有依赖调用放在一个无限等待线程里

### SPRING-452（多选题）

配置灰度发布时，哪些做法更安全？

A. 先对小范围实例生效
B. 观察指标和错误率
C. 保留可回滚的版本
D. 直接让所有生产实例同时接收未经验证的配置

### SPRING-453（多选题）

网关作为统一入口时，哪些安全策略合理？

A. 统一校验Token和权限
B. 限制管理接口暴露范围
C. 记录访问审计
D. 把内部服务地址直接返回给匿名用户

### SPRING-454（多选题）

发现调用偶发打到已下线实例时，排查方向包括哪些？

A. 检查心跳超时与摘除延迟
B. 检查消费者本地实例缓存刷新
C. 检查健康状态和网络分区
D. 直接把所有地址写死到代码

### SPRING-455（多选题）

Feign接口设计中，哪些做法更利于维护？

A. 明确HTTP方法和路径
B. 使用@PathVariable等注解表达参数
C. 对错误和超时定义统一治理策略
D. 把服务地址散落在每个调用方法的字符串中

### SPRING-456（多选题）

课件示例中出现组件名称拼写异常时，命题应如何处理？

A. 不把明显拼写错误作为正确知识点
B. 按当前官方组件名称纠正
C. 在解析中说明纠错依据
D. 照抄错误拼写并要求学生记忆

### SPRING-457（多选题）

评价微服务方案时，哪些问题值得同时衡量？

A. 业务边界是否清晰
B. 网络调用和运维成本
C. 一致性与可用性取舍
D. 服务数量是否越多越先进

### SPRING-458（多选题）

完成一次Cloud实战后，哪些复盘内容有价值？

A. 故障传播路径
B. 限流和降级是否保护核心
C. 配置变更是否可追溯
D. 只统计写了多少行代码

### SPRING-459（多选题）

服务注册信息中通常可能包含哪些内容？

A. IP地址
B. 端口
C. 实例元数据
D. 用户界面CSS文件

### SPRING-460（多选题）

排查消费者发现不到服务时，哪些方向合理？

A. 服务名、Namespace和Group是否一致
B. 提供者是否成功注册并发送心跳
C. 网络和权限是否允许访问Nacos
D. 只检查消费者Controller代码格式

### SPRING-461（多选题）

声明式Feign接口中通常应明确哪些信息？

A. 目标服务名
B. HTTP方法和路径
C. 路径或查询参数绑定
D. 本地数据库索引定义

### SPRING-462（多选题）

选择负载策略时应考虑哪些因素？

A. 实例性能是否同质
B. 是否希望严格均匀分发
C. 是否需要感知响应时间
D. 只看策略名字是否流行

### SPRING-463（多选题）

Feign调用的容错设计可以包括哪些内容？

A. 连接/读取超时
B. 熔断和降级
C. 幂等重试
D. 无条件吞掉所有异常

### SPRING-464（多选题）

Sentinel规则可以围绕哪些对象制定？

A. 资源QPS
B. 并发数
C. 热点参数
D. 源代码缩进空格数

### SPRING-465（多选题）

熔断或降级后，合理的用户体验可能包括哪些？

A. 返回缓存快照
B. 返回默认值
C. 提示稍后重试并保留核心功能
D. 直接展示完整堆栈和数据库连接串

### SPRING-466（多选题）

Gateway配置中的uri、predicates和filters分别描述什么？

A. 目标地址
B. 匹配条件
C. 请求/响应处理
D. 数据库事务隔离级别

### SPRING-467（多选题）

Gateway实现灰度发布时可以依据哪些条件？

A. Header
B. Cookie
C. 权重
D. 用户数据库密码

### SPRING-468（多选题）

配置热更新的完整链路可能包括哪些环节？

A. 客户端初始拉取
B. 服务端变更通知
C. 客户端更新本地缓存
D. 每次变更都重新打包镜像

### SPRING-469（多选题）

配置中心审计日志至少应帮助回答哪些问题？

A. 谁修改了配置
B. 何时修改以及改了什么
C. 能否回滚到哪个版本
D. 用户今天看了哪部电影

### SPRING-470（多选题）

选择最终一致性方案时，需要补齐哪些工程措施？

A. 可靠消息投递
B. 幂等消费
C. 失败补偿和对账
D. 只依赖网络最终一定成功

### SPRING-471（多选题）

决定一个模块是否拆成独立服务时可以考察哪些因素？

A. 业务边界和团队 ownership
B. 独立扩展或发布需求
C. 故障隔离收益
D. 类名是否足够短

### SPRING-472（多选题）

微服务监控通常应同时关注哪些维度？

A. 日志
B. 指标
C. 分布式链路追踪
D. 代码编辑器主题颜色

### SPRING-473（多选题）

Spring Cloud服务发布流程中哪些做法更稳妥？

A. 先在测试环境验证
B. 小流量灰度
C. 观察健康与业务指标
D. 直接跳过回滚预案

### SPRING-474（多选题）

Nacos和Gateway管理面安全治理可以包括哪些措施？

A. 最小权限账号
B. 管理接口网络隔离
C. 敏感操作审计
D. 把管理端口与业务端口一起匿名暴露

### SPRING-475（多选题）

当下游服务不稳定时，上游可以采用哪些保护组合？

A. 超时
B. 熔断
C. 限流
D. 无限同步等待

### SPRING-476（多选题）

课件总结的微服务避坑建议包括哪些？

A. 避免为了拆分而拆分
B. 务实处理CAP取舍
C. 慎用跨服务强一致事务
D. 服务越细越先进

### SPRING-477（多选题）

搭建Cloud练习环境时，哪些步骤适合作为基础验证？

A. 启动Nacos
B. 让Provider注册
C. 让Consumer发现并调用
D. 先模拟全链路断网再写代码

### SPRING-478（多选题）

升级Spring Cloud依赖时，哪些资料应优先查阅？

A. Spring Cloud官方项目页面
B. 对应发行列车兼容矩阵
C. Spring Cloud Alibaba版本说明
D. 未经验证的随机代码片段

### SPRING-479（多选题）

为突发流量设计服务保护时，哪些措施可以组合使用？

A. 网关限流
B. 服务内部并发控制
C. 非核心接口降级
D. 让每个下游都无限扩容

### SPRING-480（多选题）

配置动态更新上线前，哪些验证步骤更合理？

A. 在测试或小范围环境验证
B. 观察健康、错误率和延迟指标
C. 保留旧版本回滚路径
D. 直接修改生产配置且不留审计记录

### SPRING-481（多选题）

客户端负载均衡器在选择节点时可以利用哪些信息？

A. 实例健康状态
B. 实例权重或元数据
C. 历史响应时间
D. 客户端显示器大小

### SPRING-482（多选题）

远程调用失败后的处理策略可以包括哪些？

A. 有限重试
B. 熔断或降级
C. 记录并告警
D. 无限递归调用自身

### SPRING-483（多选题）

统一网关入口可以集中处理哪些横切关注点？

A. 认证
B. 限流
C. 路由
D. 订单库存扣减的领域规则

### SPRING-484（多选题）

多环境配置隔离的收益包括哪些？

A. 避免测试参数误用于生产
B. 限制不同环境的访问权限
C. 支持环境独立发布配置
D. 让所有环境共享同一个明文密码

### SPRING-485（多选题）

跨服务业务流程要降低事务耦合，可以采用哪些设计？

A. 事件驱动
B. 补偿动作
C. TCC/Saga等柔性事务
D. 所有服务共享同一个全局锁

### SPRING-486（多选题）

评价拆分是否成功，可以看哪些结果？

A. 服务职责是否清晰
B. 发布和扩展是否更独立
C. 跨服务调用和运维成本是否可接受
D. 拆出了多少个服务不论效果

### SPRING-487（多选题）

一次请求的可观测数据可以来自哪些来源？

A. 网关访问日志
B. 服务指标
C. 分布式Trace
D. IDE撤销次数

### SPRING-488（多选题）

灰度发布时，哪些控制手段可以限制新版本流量？

A. 按权重分流
B. 按Header或Cookie匹配
C. 按实例标签选择
D. 把所有请求同时切换

### SPRING-489（多选题）

维护Nacos配置时，哪些操作应有审计？

A. 新建或修改配置
B. 删除或回滚配置
C. 修改Namespace/Group权限
D. 修改个人桌面壁纸

### SPRING-490（多选题）

验证熔断降级时可以注入哪些故障？

A. 下游超时
B. 下游返回异常
C. 网络短暂不可达
D. 修改题库字体大小

### SPRING-491（多选题）

Cloud入门实践中，哪些顺序更利于定位问题？

A. 先验证注册发现
B. 再验证Feign调用
C. 再加入限流熔断
D. 一开始同时改动所有治理组件

### SPRING-492（多选题）

注册中心通常不负责哪些事情？

A. 编写订单领域规则
B. 渲染前端页面
C. 代替业务数据库事务
D. 维护实例地址和健康信息

### SPRING-493（多选题）

远程调用结果处理时，哪些状态值得区分？

A. 成功响应
B. 业务失败响应
C. 网络或超时异常
D. 把所有结果都映射为null

### SPRING-494（多选题）

流量高峰时，合理的组合策略包括哪些？

A. 入口限流
B. 热点参数保护
C. 非核心接口降级
D. 关闭所有健康检查

### SPRING-495（多选题）

哪些逻辑更适合留在后端业务服务而非Gateway？

A. 订单状态机
B. 库存扣减规则
C. 支付幂等校验
D. 通用Token预校验

### SPRING-496（多选题）

配置中心客户端为了提高可靠性可以保留哪些能力？

A. 最近有效配置缓存
B. 变更版本和回滚信息
C. 配置拉取失败告警
D. 收到任何配置都立即覆盖且不校验

### SPRING-497（多选题）

跨服务流程采用最终一致性时，哪些边界需要明确？

A. 事件何时发布
B. 失败如何补偿
C. 何时认为业务收敛
D. 完全不定义超时和人工兜底

### SPRING-498（多选题）

Cloud服务上线后，哪些观察结果可以支持是否扩大灰度？

A. 错误率没有异常上升
B. P95延迟在可接受范围
C. 核心业务成功率稳定
D. 只看部署命令是否执行完

### SPRING-499（多选题）

下游恢复后，容错系统还应验证哪些事项？

A. 半开探测能逐步恢复
B. 降级数据不会覆盖真实数据
C. 重试不会形成新洪峰
D. 恢复后永久保持打开

### SPRING-500（多选题）

从单体走向微服务时，哪些做法符合渐进式原则？

A. 先明确业务边界
B. 先验证核心链路再逐步治理
C. 根据故障和扩展需求调整拆分
D. 一次性把所有模块拆成独立服务
