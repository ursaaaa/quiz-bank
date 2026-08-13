# Spring 分层过渡增强题库 600 题 - 题目卷

> 单选 360 题，多选 240 题；按 Java → Spring → Boot → Cloud → Alibaba 学习路线编排。
> 本卷不展示答案、难度和前置题提示。

# 第1阶段：Java → Spring 前置桥接

## 单选题

### SPRING2-001（单选题）

在Java中，下面哪项最接近对象？

A. 类创建出的运行时实例
B. 一个包名
C. 一条import语句
D. 一个Maven坐标

### SPRING2-002（单选题）

类在面向对象程序中主要承担什么作用？

A. 描述对象的结构和行为
B. 保存所有运行时日志
C. 替代JVM线程调度
D. 直接代表一个数据库连接

### SPRING2-003（单选题）

构造器最直接的用途是什么？

A. 创建对象时初始化对象状态
B. 在对象销毁后恢复数据
C. 把接口变成数据库表
D. 替代所有业务方法

### SPRING2-004（单选题）

使用接口作为字段类型的主要好处是什么？

A. 依赖抽象而不是具体实现
B. 保证所有实现类只有一个实例
C. 自动完成网络调用
D. 避免编译器进行类型检查

### SPRING2-005（单选题）

类A的构造器需要类B，B对A可以怎样描述？

A. B是A的依赖
B. B是A的注释
C. B是A的包名
D. B是A的编译器

### SPRING2-006（单选题）

如果业务类在方法内部直接new具体实现，最明显的结果是什么？

A. 业务类与具体实现形成硬编码耦合
B. 依赖会自动由Spring注入
C. 对象会自动获得事务
D. 接口会自动生成Mock

### SPRING2-007（单选题）

下面哪种写法更能表达‘服务依赖仓储’的结构？

A. Service持有Repository接口字段
B. Service把Repository名称写在注释里
C. Service只保存一个字符串
D. Service继承操作系统进程

### SPRING2-008（单选题）

为了单元测试OrderService而不连接真实数据库，通常应替换哪个协作者？

A. OrderRepository
B. Java编译器
C. 操作系统内核
D. HTTP端口号

### SPRING2-009（单选题）

多个对象通过字段或构造器彼此协作，整体更接近什么概念？

A. 对象图
B. 字节码常量池
C. 数据库索引
D. HTTP报文头

### SPRING2-010（单选题）

从普通Java对象过渡到Spring Bean时，最重要的变化是什么？

A. 对象的创建和依赖可交给容器管理
B. 对象必须改写成接口
C. 对象不能再有构造器
D. 对象会自动变成数据库记录

### SPRING2-011（单选题）

Bean定义更接近哪项描述？

A. 告诉容器如何创建和配置对象的信息
B. 某次HTTP请求的正文
C. 数据库中的一行数据
D. 编译器的错误列表

### SPRING2-012（单选题）

IoC容器最基本的职责是什么？

A. 创建、装配并管理受托管对象
B. 替代Java虚拟机
C. 负责所有业务规则
D. 自动设计前端页面

### SPRING2-013（单选题）

‘控制反转’中的‘反转’主要指什么？

A. 对象管理从业务代码转向容器
B. 程序从Java转成SQL
C. 请求从HTTP转成磁盘
D. 编译从源码转成注释

### SPRING2-014（单选题）

容器把Repository传给Service构造器，这种动作称为什么？

A. 依赖注入
B. 垃圾回收
C. 方法重载
D. 序列化

### SPRING2-015（单选题）

下面哪项是常见的依赖注入方式？

A. 构造器注入
B. 磁盘分区注入
C. CSS注入
D. SQL索引注入

### SPRING2-016（单选题）

当Service依赖Repository时，更合理的依赖方向是？

A. Service使用Repository提供的数据访问能力
B. Repository反过来负责Service的页面布局
C. 两者都直接修改对方私有字段
D. Service依赖数据库驱动的源码路径

### SPRING2-017（单选题）

对象要被容器按名称或类型找到，通常先需要什么？

A. 注册为容器管理对象
B. 写入浏览器缓存
C. 放入数据库索引
D. 编译成CSS

### SPRING2-018（单选题）

接口PaymentGateway有两种实现时，测试环境最希望做到什么？

A. 注入测试替身而不改业务类代码
B. 强制业务类调用生产实现
C. 删除接口只保留一个类
D. 把实现类名写入每个方法

### SPRING2-019（单选题）

对象从创建到销毁期间经历的管理过程称为什么？

A. 生命周期
B. 包扫描路径
C. 路由断言
D. 事务隔离级别

### SPRING2-020（单选题）

ApplicationContext最适合被理解为？

A. 提供Bean管理及事件、资源等应用服务的上下文
B. 一个关系数据库表
C. 一个HTTP客户端对象
D. Java编译器插件

### SPRING2-021（单选题）

下面代码中Service对象的依赖是什么？

~~~java
class OrderService {
  OrderService(OrderRepository repo) {}
}
~~~

A. Repository接口实例
B. 字符串orderId
C. Service类本身
D. Java包名

### SPRING2-022（单选题）

如果不使用组件扫描，仍想让容器管理UserRepository，可以采用哪种方式？

A. 在@Configuration类的@Bean方法中返回它
B. 把类名写进日志文件
C. 把对象放进HTTP Header
D. 只创建一个接口而不提供实现

### SPRING2-023（单选题）

一个容器同时发现两个同类型PaymentGateway，直接按类型注入可能出现什么？

A. 候选不唯一，需要限定选择
B. 容器必然随机挑一个
C. 两个实现会自动合并成一个类
D. 类型匹配会被完全关闭

### SPRING2-024（单选题）

下面哪项最准确地区分普通对象和Bean？

A. Bean是由Spring容器定义、创建或管理的对象
B. Bean一定没有任何业务方法
C. 普通对象不能由Java创建
D. Bean必须继承某个Spring基类

### SPRING2-025（单选题）

把Service构造器参数从具体MySqlRepository改成Repository接口，主要改善什么？

A. 降低Service对具体实现的耦合
B. 让数据库自动拥有事务
C. 使接口自动实例化
D. 把运行时调用变成编译期执行

### SPRING2-026（单选题）

Setter注入相较构造器注入更适合哪种依赖？

A. 可选依赖或允许后续调整的依赖
B. 对象创建前绝不能缺少的依赖
C. 只能由数据库提供的依赖
D. 编译器内部依赖

### SPRING2-027（单选题）

下列说法哪项正确？

A. IoC是设计思想，DI是实现依赖交给容器的一种具体方式
B. DI只表示数据库注入
C. IoC要求所有类都使用静态方法
D. 两者都等同于继承

### SPRING2-028（单选题）

如果对象从未注册到Spring容器，@Autowired通常为什么不会对它生效？

A. 容器没有机会创建和后处理该对象
B. Java字段不能被赋值
C. 接口无法作为类型
D. 所有注解只在数据库中执行

### SPRING2-029（单选题）

执行下面代码时，哪项最可能发生？

~~~java
class OrderService {
  private final Repository repo = new MemoryRepository();
}
~~~

A. 业务类每次创建都主动选择MemoryRepository
B. 容器会自动替换repo为Mock
C. 接口会自动生成实现
D. 构造器不会被调用

### SPRING2-030（单选题）

若使用容器装配Repository，单元测试想使用FakeRepository，最合理的做法是？

A. 在测试配置中提供FakeRepository作为候选
B. 修改所有业务方法的算法
C. 把生产数据库复制到测试机
D. 删除Repository接口

### SPRING2-031（单选题）

Bean作用域回答的主要问题是什么？

A. 容器如何决定Bean实例的创建和复用范围
B. Java类是否可以编译
C. HTTP请求使用哪种方法
D. 数据库使用哪种索引

### SPRING2-032（单选题）

为什么容器需要Bean定义而不是只保存一个对象引用？

A. 它还需要知道类型、依赖、作用域等创建配置
B. 引用本身会自动包含所有业务规则
C. 对象引用可以替代Java类型
D. Bean定义只用于前端样式

### SPRING2-033（单选题）

ServiceA构造器需要ServiceB，ServiceB构造器又需要ServiceA，容器为何难以直接创建？

A. 任一对象都必须先获得尚未完成创建的另一个对象
B. Java不允许两个类互相引用
C. 接口不能出现在构造器参数中
D. 容器只会创建字符串

### SPRING2-034（单选题）

如果事务功能通过代理增强Bean，业务代码直接new目标类可能绕过什么？

A. 容器创建的代理和其后处理机制
B. Java的基本类型检查
C. 数据库的主键约束
D. HTTP协议版本协商

### SPRING2-035（单选题）

一个singleton Bean持有prototype对象字段时，为什么不能简单认为每次调用都会获得新prototype？

A. 字段通常只在singleton创建时注入一次
B. prototype只能是静态类
C. singleton不能持有任何对象
D. 容器会自动重写所有业务方法

### SPRING2-059（单选题）

当Controller依赖Service时，哪种依赖关系更符合分层职责？

A. Controller调用Service完成用例，Service不依赖Controller
B. Controller和Service互相new对方
C. Service只负责解析浏览器CSS
D. Controller直接修改Service私有字段

## 多选题

### SPRING2-036（多选题）

下列哪些内容可以表达Java对象之间的协作？

A. 构造器参数
B. 接口类型字段
C. 方法参数
D. 颜色主题名称

### SPRING2-037（多选题）

面向接口编程通常带来哪些收益？

A. 替换实现更容易
B. 测试时更容易提供替身
C. 调用方依赖稳定契约
D. 保证所有实现性能相同

### SPRING2-038（多选题）

类内部直接new具体依赖可能带来哪些问题？

A. 实现难替换
B. 单元测试隔离困难
C. 业务类承担创建责任
D. 自动获得容器生命周期回调

### SPRING2-039（多选题）

关于IoC容器的基础职责，正确的有？

A. 创建对象
B. 装配依赖
C. 管理生命周期
D. 替代所有业务规则

### SPRING2-040（多选题）

下列哪些属于常见依赖注入方式？

A. 构造器注入
B. Setter注入
C. 字段注入
D. CSS选择器注入

### SPRING2-041（多选题）

关于Spring Bean，正确的有？

A. 它通常是由容器管理的对象
B. 它不要求继承特殊基类
C. 它可以拥有普通Java方法
D. 它必须是数据库表映射对象

### SPRING2-042（多选题）

为了隔离OrderService的外部影响，测试中可以替换哪些内容？

A. 仓储实现
B. 远程客户端
C. 时钟或随机数提供者
D. Java关键字语义

### SPRING2-043（多选题）

对象生命周期通常可以包含哪些阶段？

A. 创建
B. 初始化
C. 使用
D. 修改Java继承关系

### SPRING2-044（多选题）

要让容器能够管理一个对象，通常需要哪些条件？

A. 有可创建或提供实例的方式
B. 有必要的配置或元数据
C. 对象被注册或被扫描发现
D. 只在README中写出类名

### SPRING2-045（多选题）

良好的服务-仓储分层通常具备哪些特点？

A. 服务表达业务用例
B. 仓储封装数据访问
C. 服务通过抽象依赖仓储
D. 服务直接修改数据库连接池内部字段

### SPRING2-046（多选题）

关于IoC与DI的关系，正确的有？

A. IoC描述控制权转移
B. DI是提供依赖的一种实现方式
C. 构造器注入可以实现DI
D. IoC等同于把所有类改成单例

### SPRING2-047（多选题）

Bean定义中通常可以描述哪些信息？

A. 对象类型或工厂来源
B. 依赖关系
C. 作用域
D. 用户当天的浏览器主题

### SPRING2-048（多选题）

使用@Configuration与@Bean时，通常可以获得哪些能力？

A. 显式声明对象来源
B. 在代码中表达条件配置
C. 通过编译器检查类型关系
D. 自动绕过所有权限检查

### SPRING2-049（多选题）

关于组件扫描，正确的有？

A. 它可以发现@Component及其语义化注解
B. 扫描范围会影响哪些类进入容器
C. 扫描发现后对象仍需经过容器创建管理
D. 扫描会把所有数据库表转换成Bean

### SPRING2-050（多选题）

有多个同类型候选Bean时，合理的处理方式包括哪些？

A. 使用@Primary指定主候选
B. 使用@Qualifier明确名称或限定符
C. 调整设计使依赖类型更明确
D. 让容器随机选择以减少配置

### SPRING2-051（多选题）

哪些情况可能导致依赖注入没有按预期发生？

A. 对象由业务代码new且未交给容器
B. 组件不在扫描范围
C. 依赖存在多个未消歧候选
D. 构造器参数使用接口类型

### SPRING2-052（多选题）

为一个依赖接口提供Fake实现时，通常应满足哪些条件？

A. 实现相同接口契约
B. 行为足够稳定可重复
C. 只保留测试需要的最小行为
D. 直接连接生产数据库

### SPRING2-053（多选题）

设计Bean作用域时应考虑哪些因素？

A. 对象是否需要共享
B. 对象是否包含请求或会话状态
C. 对象创建成本
D. 只看类名长度

### SPRING2-054（多选题）

容器建立对象图时通常需要完成哪些工作？

A. 创建对象
B. 解析对象依赖
C. 把依赖引用传给目标对象
D. 替业务方法决定订单折扣

### SPRING2-055（多选题）

容器管理Bean时，哪些行为可能属于生命周期扩展？

A. 初始化前后执行处理器
B. 销毁时释放容器管理的资源
C. 根据定义选择作用域
D. 自动修改Java语言规范

### SPRING2-056（多选题）

把具体类依赖改成接口依赖后，哪些事情通常更容易？

A. 替换实现
B. 编写Mock测试
C. 引入第二种实现
D. 自动保证所有实现线程安全

### SPRING2-057（多选题）

处理对象循环依赖时，哪些设计思路更稳妥？

A. 重新划分职责打破闭环
B. 把必需依赖通过更清晰的边界传递
C. 谨慎评估延迟查找或Setter等方案
D. 在两个构造器中无限递归new对方

### SPRING2-058（多选题）

使用容器代理增强对象时，哪些现象值得警惕？

A. 手动new目标对象可能绕过增强
B. 同类内部调用可能绕过代理入口
C. 最终拿到的对象可能不是目标类的直接实例
D. 代理会自动修复所有业务错误

### SPRING2-060（多选题）

一个包含请求用户信息的对象若被错误地长期共享，可能出现哪些问题？

A. 不同请求之间发生状态串扰
B. 并发访问时出现线程安全风险
C. 测试之间相互污染
D. 对象一定会自动变成prototype

# 第2阶段：Spring Bean、IoC、DI、容器

## 单选题

### SPRING2-062（单选题）

PropertySourcesPlaceholderConfigurer的常见用途是？

A. 解析${...}占位符
B. 创建HTTP客户端
C. 执行数据库事务
D. 生成AOP切点

### SPRING2-063（单选题）

同一个配置类中两个@Bean方法都返回同一接口的不同实现，注入时最直接的消歧方式是？

A. @Qualifier或@Primary
B. 删除接口
C. 把两个实现改成静态字段
D. 关闭组件扫描

### SPRING2-064（单选题）

Spring降低应用模块耦合度的核心机制是？

A. IoC容器统一管理对象
B. 把所有类改成静态类
C. 强制使用继承
D. 把配置写入数据库

### SPRING2-065（单选题）

IoC容器接管对象管理后，组件更容易进行哪项工作？

A. 单元测试与实现替换
B. 修改JVM字节码版本
C. 绕过Java类型检查
D. 删除所有接口

### SPRING2-066（单选题）

控制反转（IoC）反转的主要是什么控制权？

A. 对象创建和依赖管理的控制权
B. CPU调度控制权
C. 数据库磁盘控制权
D. HTTP协议控制权

### SPRING2-067（单选题）

依赖注入（DI）在Spring中指什么？

A. 容器把依赖对象注入目标Bean
B. 目标Bean主动new所有依赖
C. 把依赖写入数据库表
D. 由编译器删除依赖

### SPRING2-068（单选题）

“Don't call me, I'll call you”在课件中用来说明什么？

A. 好莱坞原则和控制反转
B. 数据库事务隔离
C. 线程池拒绝策略
D. 编译器回调优化

### SPRING2-069（单选题）

Java配置类中声明Bean实例通常使用哪个注解？

A. @Bean
B. @Entity
C. @Mapper
D. @Test

### SPRING2-070（单选题）

选择JavaConfig而不是XML的主要工程收益是？

A. 配置具备编译期类型安全检查
B. 无需任何容器
C. 自动绕过访问控制
D. 所有Bean都变成单例

### SPRING2-071（单选题）

@Component的基本作用是？

A. 标记通用Spring管理组件
B. 声明数据库表
C. 声明HTTP请求路径
D. 声明单元测试

### SPRING2-072（单选题）

字段注入通常通过哪个注解示例完成？

A. @Autowired
B. @Override
C. @Deprecated
D. @Target

### SPRING2-073（单选题）

在IoC容器中，Bean生命周期管理通常包括哪一项？

A. 实例化、属性填充和销毁
B. 只负责编译源码
C. 只负责网络传输
D. 只负责建立数据库索引

### SPRING2-074（单选题）

如果对象创建必须依赖另一个Bean，最合适的设计倾向是？

A. 通过容器注入依赖，而不是在业务类中new
B. 在每个方法内重复new依赖
C. 把依赖序列化为字符串
D. 删除依赖接口

### SPRING2-075（单选题）

组件扫描发现@Component类后通常会发生什么？

A. 将其注册为IoC容器管理的Bean
B. 自动把它编译成机器码
C. 删除其构造器
D. 将它转换为数据库表

### SPRING2-076（单选题）

下列场景最能体现IoC带来的可测试性提升的是？

A. 测试时把真实DAO替换为Mock实现
B. 把所有服务方法改为private
C. 将业务对象写成单例静态字段
D. 在测试中连接生产数据库

### SPRING2-086（单选题）

需要事件发布和国际化能力时，通常应选择哪类容器？

A. ApplicationContext
B. 仅使用BeanFactory
C. 直接new对象
D. 只使用ServletContext

### SPRING2-087（单选题）

@Configuration类中@Bean方法被同一配置类另一@Bean方法直接调用时，默认如何保持Bean语义？

A. 容器增强配置类调用以复用Bean
B. 每次调用都必定new新对象
C. 调用会被编译器删除
D. 只有XML才能复用Bean

### SPRING2-088（单选题）

实现BeanFactoryAware的Bean通常希望获得什么？

A. 所属BeanFactory引用
B. 当前HTTP请求正文
C. 数据库连接池密码
D. 编译器对象

### SPRING2-089（单选题）

从容器获取FactoryBean对象本身通常使用什么前缀？

A. &
B. #
C. @
D. $

### SPRING2-090（单选题）

AnnotationConfigApplicationContext适合做什么？

A. 以Java配置启动一个注解型ApplicationContext
B. 启动Nacos集群
C. 构建前端资源
D. 创建JVM进程

### SPRING2-091（单选题）

Spring IoC和Spring AOP的关系，哪项正确？

A. AOP通常通过IoC管理的Bean代理实现
B. IoC必须依赖AOP才能创建Bean
C. AOP会替代所有依赖注入
D. 两者只在数据库层存在

### SPRING2-092（单选题）

测试真实Bean装配但避免启动整个应用时，可以使用什么思路？

A. 加载精简的测试ApplicationContext
B. 只用字符串比较
C. 禁用所有依赖注入
D. 只执行静态分析

### SPRING2-093（单选题）

Servlet Filter与HandlerInterceptor的主要边界是？

A. Filter位于Servlet层，Interceptor位于Spring MVC处理链
B. 二者只能访问数据库
C. 二者完全没有顺序
D. Interceptor只能处理静态文件

### SPRING2-096（单选题）

Spring Framework 1.0在课件时间线中确立了哪两个核心理念？

A. IoC与AOP
B. MVC与WebFlux
C. JPA与MyBatis
D. 容器编排与服务网格

### SPRING2-097（单选题）

org.springframework.beans包的核心职责是？

A. Java Bean实例化、属性填充和销毁管理
B. 解析HTTP请求路径
C. 提供响应式网络服务器
D. 管理国际化资源

### SPRING2-098（单选题）

以下哪种方式不属于课件列出的常见依赖注入方式？

A. 构造器注入
B. Setter注入
C. 字段注入
D. 数据库触发器注入

### SPRING2-099（单选题）

传统XML配置定义Bean通常使用哪个元素？

~~~java
<bean id="userService" class="com.demo.UserService"/>
~~~

A. <bean>
B. <component>
C. <service>
D. <inject>

### SPRING2-100（单选题）

标记Java配置类本身的注解是？

A. @Configuration
B. @ComponentScanOnly
C. @BeanClass
D. @EnableTest

### SPRING2-104（单选题）

构造器注入相对字段注入最重要的设计收益是？

A. 必需依赖在对象创建时明确
B. 依赖一定变成单例
C. 绕过类型检查
D. 不再需要容器

### SPRING2-105（单选题）

传统代码中直接使用new创建依赖对象，通常会导致什么问题？

A. 对象间强耦合
B. 自动获得事务代理
C. 自动进行包扫描
D. 编译期生成配置

### SPRING2-106（单选题）

一个需要国际化、事件发布和资源加载的应用上下文，优先依赖哪个包？

A. org.springframework.context
B. org.springframework.beans
C. org.springframework.web
D. org.springframework.core only

### SPRING2-107（单选题）

@Autowired默认最主要依据什么匹配依赖？

A. 类型
B. 方法名字符串
C. 数据库主键
D. 源码行号

### SPRING2-108（单选题）

Maven项目中pom.xml的核心作用是？

A. 管理依赖版本和构建生命周期
B. 保存运行时用户数据
C. 定义HTTP路由
D. 存放Java字节码

### SPRING2-109（单选题）

构造器注入的一个明显特点是？

A. 对象创建时就能获得必需依赖
B. 必须依赖字段反射
C. 只能注入字符串
D. 不能用于接口类型

### SPRING2-110（单选题）

Setter注入更适合表达哪类依赖？

A. 可选或可变的依赖
B. 只能在编译器内部存在的依赖
C. 数据库表的主键
D. HTTP响应头

### SPRING2-114（单选题）

一个prototype Bean被注入singleton Bean后，默认会发生什么？

A. 只在singleton创建时解析一次
B. 每次调用singleton方法都自动创建一个
C. prototype自动变成request作用域
D. 容器拒绝所有prototype Bean

### SPRING2-115（单选题）

构造器循环依赖通常比单例字段循环依赖更难解决，主要原因是？

A. 对象尚未完成实例化就无法提供构造参数
B. 构造器不能接收接口
C. 字段永远不能注入
D. 所有Bean都不能创建

### SPRING2-116（单选题）

方法参数校验通常依赖哪类标准注解生态？

A. Jakarta Bean Validation
B. Servlet URL规则
C. Git Hooks
D. SQL触发器

### SPRING2-117（单选题）

final方法在基于子类的Spring代理中通常有什么限制？

A. 不能被子类覆写，难以被代理增强
B. 一定会被JDK代理增强
C. 会自动变成static
D. 只能由数据库执行

### SPRING2-118（单选题）

@Transactional通常依赖什么机制拦截方法？

A. AOP代理
B. 编译器自动改写所有字节码
C. 浏览器脚本
D. 数据库触发器

### SPRING2-119（单选题）

NESTED传播通常依赖哪种机制？

A. 同一物理事务中的保存点
B. 两个独立数据库集群
C. HTTP重定向
D. 线程销毁

### SPRING2-120（单选题）

private方法通常为何不能直接被Spring AOP代理拦截？

A. 代理无法通过普通覆写或接口调用拦截它
B. 它一定没有返回值
C. 它只能被数据库调用
D. Spring只支持静态方法

### SPRING2-126（单选题）

BeanPostProcessor通常作用于哪个阶段？

A. Bean初始化前后进行实例扩展处理
B. 只在JVM退出时运行
C. 只扫描数据库表
D. 只负责编译源码

### SPRING2-128（单选题）

一个类未被扫描到但手动通过@Configuration的@Bean方法返回它，结果通常是？

A. 它仍可作为Bean注册到容器
B. 它一定无法被容器管理
C. 它只能成为静态变量
D. 它会被当作HTTP请求

### SPRING2-130（单选题）

Spring Boot 1.0发布于课件时间线中的哪一年？

A. 2014年
B. 2004年
C. 2017年
D. 2022年

### SPRING2-131（单选题）

src/main/resources主要用于放置什么？

A. 配置文件、静态资源和国际化资源
B. Java源代码
C. 依赖仓库索引
D. 操作系统驱动

### SPRING2-132（单选题）

从XML到注解再到JavaConfig，课件概括的总体趋势是？

A. 灵活性和可控性不断增强
B. 配置越来越依赖EJB
C. 类型安全逐步消失
D. 所有配置都必须放数据库

### SPRING2-133（单选题）

当项目需要复杂条件化配置时，课件更推荐哪种方式？

A. Java配置类
B. 巨型XML文件
C. 在业务方法中到处new
D. 硬编码环境变量

### SPRING2-137（单选题）

SpEL中#root通常代表什么？

A. 表达式根对象
B. 当前数据库表
C. HTTP状态码
D. Git分支

### SPRING2-138（单选题）

ConversionService主要解决什么问题？

A. 在类型之间进行统一转换
B. 创建AOP代理
C. 注册服务实例
D. 管理事务提交

### SPRING2-139（单选题）

Spring Framework原生的@Profile主要用于什么？

A. 按激活环境选择Bean定义
B. 按HTTP状态码选择响应
C. 按数据库主键创建表
D. 按CPU温度编译代码

### SPRING2-140（单选题）

ApplicationEventPublisher发布事件后，监听器默认在哪个线程执行？

A. 发布线程同步执行
B. 永远由数据库线程执行
C. 永远由独立线程池执行
D. 由浏览器执行

### SPRING2-141（单选题）

默认情况下，Spring声明式事务通常对哪类异常回滚？

A. 运行时异常和Error
B. 所有受检异常
C. 只有字符串异常
D. 任何日志输出

### SPRING2-142（单选题）

@Scheduled方法通常由什么触发？

A. Spring调度器按照cron或固定间隔触发
B. 每次HTTP请求都触发
C. 数据库主键触发
D. 编译器触发

### SPRING2-145（单选题）

org.springframework.core包主要提供什么？

A. 底层通用能力与基础设施
B. 只负责Web视图渲染
C. 只负责SQL执行
D. 只负责安全认证

### SPRING2-146（单选题）

org.springframework.context相对于beans包的主要扩展是？

A. 提供应用上下文及事件、国际化等企业服务
B. 仅提供Java基本类型
C. 只负责字节码增强
D. 只实现数据库连接池

### SPRING2-147（单选题）

org.springframework.web包面向的场景是？

A. Web应用请求与交互
B. JVM垃圾回收
C. 磁盘文件系统
D. Java编译优化

### SPRING2-150（单选题）

课件指出Spring 2.5的重要演进是？

A. 全面拥抱注解驱动
B. 原生支持Java 17
C. 引入WebFlux响应式模型
D. 发布Spring Boot 1.0

### SPRING2-151（单选题）

Spring Framework 5.0在课件中引入了什么模型？

A. WebFlux响应式模型
B. EJB实体Bean模型
C. JSP标签库模型
D. RMI专用模型

### SPRING2-152（单选题）

Spring Framework 6.0的基础Java版本是？

A. Java 17
B. Java 6
C. Java 8
D. Java 11

### SPRING2-153（单选题）

课件把Spring Boot 3.0的基础版本描述为？

A. 基于Spring 6并原生支持Java 17
B. 基于Spring 2并支持Java 6
C. 基于Spring 4并只支持XML
D. 基于Spring MVC 1并依赖EJB

### SPRING2-156（单选题）

Spring首先被定位为哪类软件？

A. Java企业级应用开发框架
B. 关系数据库管理系统
C. 操作系统内核
D. 前端构建工具

### SPRING2-157（单选题）

Spring中AOP主要用于处理哪一类问题？

A. 横切关注点
B. 磁盘分区
C. 编译器词法分析
D. 数据库索引存储

### SPRING2-158（单选题）

以下哪项属于Spring生态中的数据访问方向？

A. Spring Data
B. Spring Cloud Gateway only
C. Spring Shell only
D. Spring Security only

### SPRING2-159（单选题）

Spring模板的主要价值是？

A. 封装JDBC、事务等底层样板工作
B. 取代所有业务规则
C. 自动设计数据库表
D. 替代Java编译器

### SPRING2-160（单选题）

@Service最能表达哪一层的语义？

A. 业务逻辑层
B. 数据表结构层
C. 网络传输层
D. 配置文件层

### SPRING2-161（单选题）

@Repository通常用于标记什么？

A. 数据访问层组件
B. 前端控制器
C. 配置类
D. 定时任务表达式

### SPRING2-162（单选题）

课件指出@Repository的一个额外价值是？

A. 把底层数据库异常转换为Spring统一的数据访问异常体系
B. 自动创建数据库表
C. 把所有异常转换成Error
D. 自动生成REST接口

### SPRING2-163（单选题）

src/main/java通常存放什么？

A. 启动类、业务逻辑、控制器和实体类
B. 生产数据库文件
C. Maven缓存
D. 编译后的字节码

### SPRING2-164（单选题）

ApplicationContext与beans包的关系更准确的是？

A. ApplicationContext建立在Bean管理能力之上并提供应用级服务
B. ApplicationContext完全替代Java语言
C. beans只负责HTTP请求
D. 二者没有任何关系

### SPRING2-170（单选题）

Environment对象主要聚合哪类信息？

A. profiles和properties
B. 线程堆栈和字节码
C. 浏览器DOM和CSS
D. Git提交对象

### SPRING2-171（单选题）

让不可信用户输入直接作为SpEL表达式执行的主要风险是？

A. 表达式注入和越权访问
B. 自动获得类型安全
C. 只会导致页面变色
D. 不会产生任何风险

### SPRING2-172（单选题）

Resource接口的价值是？

A. 以统一方式访问类路径、文件和URL资源
B. 只代表数据库行
C. 只代表HTTP响应
D. 只代表Java线程

### SPRING2-173（单选题）

SpEL表达式访问Bean通常使用哪个符号？

A. @beanName
B. #beanName
C. $beanName
D. %beanName

### SPRING2-174（单选题）

ClassPathResource与FileSystemResource的差异主要是？

A. 资源查找位置不同
B. 一个只能访问数据库
C. 一个只能访问HTTP
D. 两者一定返回同一文件

### SPRING2-175（单选题）

进程内ApplicationEvent与消息队列事件的关键差异是？

A. 前者默认不提供跨进程可靠投递
B. 前者一定持久化
C. 后者不能异步
D. 二者完全相同

### SPRING2-176（单选题）

execution切点最主要描述什么？

A. 匹配方法签名和执行位置
B. 匹配数据库表数据
C. 匹配HTML标签
D. 匹配JVM堆大小

### SPRING2-177（单选题）

@Around通知相比@Before和@After的额外能力是？

A. 控制是否继续调用目标并修改返回结果
B. 只能记录日志
C. 只能处理异常
D. 不能访问目标方法

### SPRING2-178（单选题）

Spring数据访问异常体系的特点是？

A. 把底层异常转换为统一的DataAccessException层次
B. 把所有异常吞掉
C. 只保留数据库错误字符串
D. 自动修复数据

### SPRING2-179（单选题）

WebClient相对RestTemplate的主要定位是？

A. 支持非阻塞响应式HTTP调用
B. 只用于数据库查询
C. 只生成HTML模板
D. 只管理Bean作用域

### SPRING2-180（单选题）

Reactive Streams中的背压主要解决什么？

A. 消费者处理不过来时控制生产速度
B. 自动提高CPU频率
C. 把所有数据缓存到内存
D. 让异常永不发生

### SPRING2-181（单选题）

方法校验失败时，Controller层常见的处理方式是？

A. 返回参数错误并阻止进入业务逻辑
B. 继续提交无效数据
C. 删除校验注解
D. 把错误写入用户密码

### SPRING2-182（单选题）

需要在事务提交后再处理领域事件时，应关注哪个机制？

A. 事务绑定事件监听
B. Servlet过滤器顺序
C. Bean作用域prototype
D. Gateway断言

### SPRING2-183（单选题）

同一个Bean内部方法this.other()调用导致事务或切面不生效，根本原因常是？

A. 调用绕过了代理对象
B. 事务注解不支持public方法
C. 数据库拒绝所有调用
D. Spring不支持方法调用

### SPRING2-184（单选题）

Spring AOP默认支持哪类连接点？

A. Spring Bean的方法执行
B. 任意字段读取
C. 任意构造器字节码
D. 所有数据库触发器

### SPRING2-185（单选题）

目标对象实现接口时，Spring AOP可能优先使用哪类代理？

A. JDK动态代理
B. 数据库代理
C. Servlet过滤器代理
D. 编译器宏

### SPRING2-186（单选题）

需要代理没有接口的具体类时，常见实现方式是？

A. 基于子类的CGLIB代理
B. 只能使用JDK代理
C. 只能修改数据库
D. 只能使用反射调用字段

### SPRING2-187（单选题）

多个切面同时作用于同一方法时，优先级通常通过什么表达？

A. @Order或Ordered
B. @BeanName
C. @ProfileOnly
D. @HttpStatus

### SPRING2-188（单选题）

需要拦截字段访问而非仅方法执行时，应考虑什么？

A. AspectJ等织入技术
B. 只增加@Order
C. 只增加@Primary
D. 只修改application.yml端口

### SPRING2-189（单选题）

REQUIRED传播行为在已有事务时通常如何处理？

A. 加入现有事务
B. 永远创建两个事务
C. 拒绝调用
D. 只读执行

## 多选题

### SPRING2-061（多选题）

显式使用@Bean声明对象时，合理的理解有哪些？

A. 方法返回值可成为容器Bean
B. 可在@Configuration类中使用
C. 可表达第三方类的组装
D. 必须把类标成@Repository

### SPRING2-077（多选题）

IoC带来的直接收益包括哪些？

A. 降低对象间耦合
B. 便于替换实现
C. 提升单元测试友好性
D. 强制业务类继承容器基类

### SPRING2-078（多选题）

IoC容器通常统一负责哪些事项？

A. 对象创建
B. 对象配置和装配
C. Bean生命周期
D. 前端页面布局

### SPRING2-079（多选题）

Spring容器的常见配置实现包括哪些？

A. XML配置
B. 注解驱动
C. Java配置类
D. 把Bean写入浏览器Cookie

### SPRING2-080（多选题）

Bean生命周期管理可能涉及哪些阶段？

A. 实例化
B. 依赖解析与属性填充
C. 销毁
D. 浏览器渲染

### SPRING2-081（多选题）

JavaConfig相对XML的优势可以包括哪些？

A. 代码集中配置
B. 编译期类型安全检查
C. 适合复杂条件化逻辑
D. 完全不需要Spring容器

### SPRING2-082（多选题）

关于构造器、Setter和字段注入的比较，合理的说法有哪些？

A. 构造器注入适合必需依赖
B. Setter注入允许对象创建后再设置
C. 字段注入可减少显式样板代码
D. 三者都要求依赖对象在方法内部new

### SPRING2-083（多选题）

Spring设计哲学中被课件反复强调的目标有哪些？

A. 降低耦合
B. 简化开发流程
C. 提高可维护性
D. 让业务代码承担全部对象生命周期

### SPRING2-084（多选题）

DI使依赖关系具备哪些特征？

A. 可配置
B. 可动态替换
C. 有利于测试
D. 必须硬编码在业务方法里

### SPRING2-085（多选题）

在不改变业务代码的前提下，容器管理Bean带来的能力包括哪些？

A. 统一创建对象
B. 集中装配依赖
C. 按生命周期执行销毁
D. 自动保证所有业务逻辑无缺陷

### SPRING2-094（多选题）

容器扩展点选择时，正确的有？

A. BeanPostProcessor适合统一包装Bean
B. BeanFactoryPostProcessor处理BeanDefinition
C. ApplicationListener接收事件
D. 所有扩展点都适合执行业务订单

### SPRING2-095（多选题）

容器关闭时可能触发哪些清理机制？

A. @PreDestroy
B. DisposableBean.destroy
C. 自定义destroy-method
D. 自动提交所有未完成事务

### SPRING2-101（多选题）

org.springframework.beans包负责哪些Bean相关工作？

A. 实例化
B. 属性填充
C. 依赖解析
D. HTTP视图渲染

### SPRING2-102（多选题）

课件将Spring演进为企业级事实标准的原因可概括为哪些？

A. 核心容器持续演进
B. 模块化生态覆盖多场景
C. 降低开发与维护成本
D. 完全依赖重量级EJB

### SPRING2-103（多选题）

课件列出的依赖注入方式有哪些？

A. 构造器注入
B. Setter注入
C. 字段注入
D. 数据库触发器注入

### SPRING2-111（多选题）

关于@Autowired，正确的说法有哪些？

A. 可按类型解析依赖
B. 可用于字段注入
C. 可减少手写实例化代码
D. 它只能注入基本类型

### SPRING2-112（多选题）

哪些做法有助于保持业务代码与具体实现解耦？

A. 依赖接口并由容器装配实现
B. 在构造器中接收依赖
C. 测试时注入Mock实现
D. 在每个业务方法中new具体实现

### SPRING2-113（多选题）

选择配置方式时，哪些判断符合课件？

A. XML物理外部化明显
B. 注解减少XML但更贴近代码
C. JavaConfig具有类型安全优势
D. 三种方式都不可能表达依赖关系

### SPRING2-121（多选题）

同一接口有多个Bean时，哪些方式可以表达注入选择？

A. @Qualifier
B. @Primary
C. 注入具体实现类型
D. 随机依赖字段声明顺序

### SPRING2-122（多选题）

构造器注入适合哪些场景？

A. 表达必需依赖
B. 支持不可变字段
C. 便于单元测试替换实现
D. 隐藏所有依赖以免阅读

### SPRING2-123（多选题）

关于Spring常见作用域，正确的有？

A. singleton默认每个容器一个实例
B. prototype每次请求容器通常创建新实例
C. request作用域需要Web上下文
D. 所有作用域都天然线程安全

### SPRING2-124（多选题）

prototype Bean使用时需要注意哪些？

A. 容器不会管理其全部销毁回调语义
B. 注入singleton时可能只解析一次
C. 需要Provider时可按需获取
D. 它天然线程安全

### SPRING2-125（多选题）

企业应用使用ApplicationContext可能获得哪些能力？

A. Bean生命周期管理
B. 事件驱动协作
C. 国际化支持
D. 替代数据库本身

### SPRING2-127（多选题）

Bean初始化阶段可能涉及哪些扩展点？

A. @PostConstruct
B. InitializingBean.afterPropertiesSet
C. 自定义init-method
D. JVM编译器回调

### SPRING2-129（多选题）

组件扫描的结果可能包括哪些？

A. 发现@Component类
B. 发现@Service类
C. 发现@Repository类
D. 自动把任意未标记类全部注册

### SPRING2-134（多选题）

以下哪些注解用于表达Spring组件或配置语义？

A. @Component
B. @Service
C. @Repository
D. @RandomConfig

### SPRING2-135（多选题）

关于标准Maven项目目录，正确的说法有哪些？

A. src/main/java放Java源码
B. src/main/resources放配置和资源
C. pom.xml管理依赖和构建
D. src/main/java专门放编译产物

### SPRING2-136（多选题）

关于@Component、@Service和@Repository，正确的说法有哪些？

A. @Service具有业务层语义
B. @Repository具有数据访问层语义
C. 它们可作为组件扫描候选
D. 三者都只能标记配置类

### SPRING2-143（多选题）

外部属性注入时，正确的做法包括？

A. 使用Environment
B. 使用@Value占位符
C. 使用@ConfigurationProperties绑定对象
D. 把密码打印到启动日志

### SPRING2-144（多选题）

Java配置类设计中，正确的有？

A. @Bean方法可声明第三方类实例
B. @Import可引入其他配置
C. @Profile可选择环境配置
D. 配置类必须全部写成XML

### SPRING2-148（多选题）

org.springframework.core包提供的能力包括哪些？

A. 资源加载
B. 类型转换
C. 异常处理
D. Bean业务层语义

### SPRING2-149（多选题）

core、beans、context三层能力的合理描述有哪些？

A. core提供基础设施
B. beans负责Bean管理
C. context提供应用上下文服务
D. 三者都专门处理HTTP请求

### SPRING2-154（多选题）

课件时间线中与Spring Framework相关的正确说法有哪些？

A. 1.0确立IoC与AOP
B. 2.5拥抱注解驱动
C. 5.0引入WebFlux
D. 6.0发布Spring Boot 3

### SPRING2-155（多选题）

关于Spring Boot时间线，正确的说法有哪些？

A. Boot 1.0对应2014年
B. Boot 2.0在课件中描述为适配Spring 5
C. Boot 3.0基于Spring 6并支持Java 17
D. Boot 1.0诞生于2004年

### SPRING2-165（多选题）

以下哪些属于课件列出的Spring生态方向？

A. Spring MVC Web开发
B. Spring Cloud云原生
C. Spring Data数据访问
D. Spring Random随机工具

### SPRING2-166（多选题）

Spring模板可以帮助封装哪些重复性工作？

A. JDBC操作
B. 事务管理
C. Web开发基础处理
D. 操作系统内核调度

### SPRING2-167（多选题）

ApplicationContext常见的应用级能力包括哪些？

A. 事件发布与监听
B. 国际化支持
C. 资源加载
D. 编译Java源文件

### SPRING2-168（多选题）

Spring web模块在课件中覆盖哪些框架？

A. Spring MVC
B. Spring WebFlux
C. Spring Data
D. Spring Security

### SPRING2-169（多选题）

context包相较于beans包的扩展包括哪些？

A. 事件机制
B. 国际化支持
C. 资源加载和环境能力
D. 仅增加SQL执行器

### SPRING2-190（多选题）

Spring应用事件设计中，正确的有？

A. 监听器可以按类型接收事件
B. 默认监听可能同步执行
C. 可用@Async异步处理
D. 事件天然保证跨服务可靠投递

### SPRING2-191（多选题）

SpEL可以用于哪些场景？

A. 条件表达式
B. 属性计算
C. 访问受控Bean
D. 无约束执行用户任意代码

### SPRING2-192（多选题）

关于环绕通知，正确的有？

A. 可以在目标调用前后执行逻辑
B. 可以决定是否调用proceed
C. 可以改变返回值
D. 一定会自动重试无限次

### SPRING2-193（多选题）

Spring数据访问抽象的收益包括？

A. 统一异常抽象
B. 模板化资源释放
C. 可替换底层技术
D. 自动生成正确业务SQL

### SPRING2-194（多选题）

代理增强失效排查时，正确的方向包括？

A. 检查是否发生自调用
B. 检查方法是否可被代理覆写
C. 检查调用是否拿到容器代理
D. 只增加日志就能修复代理

### SPRING2-195（多选题）

Web层安全设计中，合理的有？

A. 在边界校验输入
B. 对异常响应脱敏
C. 使用统一ControllerAdvice
D. 把堆栈和SQL返回给客户端

### SPRING2-196（多选题）

Spring边界安全实践包括？

A. 校验和限制输入
B. 避免日志记录凭证
C. 对管理接口做授权
D. 只依赖前端隐藏按钮

### SPRING2-197（多选题）

数据访问层的合理职责包括？

A. 封装查询和持久化
B. 转换底层数据访问异常
C. 定义事务边界协作
D. 把所有领域规则塞进DAO

### SPRING2-198（多选题）

遇到版本冲突或行为差异时，正确的取证方式包括？

A. 查当前官方参考文档
B. 核对Release Train兼容矩阵
C. 用最小复现验证配置
D. 只看搜索结果摘要并直接上线

### SPRING2-199（多选题）

应用事件使用时，合理的有？

A. 事件类型可表达业务语义
B. 同步监听会占用发布线程
C. 异步监听要考虑异常和线程池
D. 事件天然跨服务持久化

### SPRING2-200（多选题）

Resource抽象的合理用途包括？

A. 读取类路径资源
B. 读取文件系统资源
C. 读取URL资源
D. 自动替代数据库事务

### SPRING2-201（多选题）

以下传播语义中，正确的有？

A. REQUIRED可加入现有事务
B. REQUIRES_NEW会挂起外部事务
C. SUPPORTS有事务则加入、无事务也可执行
D. 所有传播行为都创建新事务

### SPRING2-202（多选题）

事务回滚规则设计时应注意哪些？

A. 受检异常默认不一定回滚
B. 可通过rollbackFor扩展规则
C. 自调用可能绕过代理
D. 只要写了@Transactional就能跨线程传播

### SPRING2-203（多选题）

事务代码中合理的实践包括？

A. 缩短事务持有时间
B. 避免在事务内调用不受控慢服务
C. 明确隔离级别
D. 把所有远程调用都包进一个长事务

### SPRING2-204（多选题）

缓存注解使用时应考虑哪些问题？

A. 缓存键设计
B. 失效时机
C. 并发击穿
D. 缓存天然保证强一致

### SPRING2-205（多选题）

Spring MVC请求处理可以包含哪些阶段？

A. HandlerMapping选择处理器
B. 参数解析和数据绑定
C. HandlerAdapter调用控制器
D. 直接由数据库返回HTML

### SPRING2-206（多选题）

响应式Web应用中，正确的有？

A. Mono表示0或1个异步结果
B. Flux表示0到多个结果
C. 阻塞调用会破坏非阻塞优势
D. 所有代码都必须改成线程手工创建

### SPRING2-207（多选题）

事务边界设计中，正确的有？

A. 避免把远程慢调用放进长事务
B. 明确回滚异常规则
C. 注意代理和自调用限制
D. 事务会自动跨任意线程传播

### SPRING2-208（多选题）

Spring AOP切点设计中，正确的有？

A. execution可匹配方法执行
B. within可按类型范围匹配
C. @annotation可按注解匹配
D. 默认可拦截任意字段读取

### SPRING2-209（多选题）

代理对象使用时，正确的有？

A. 调用代理才能触发通知
B. 自调用可能绕过代理
C. final方法可能无法被子类代理增强
D. 代理会自动修复业务异常

### SPRING2-210（多选题）

事务传播设计中，正确的有？

A. NOT_SUPPORTED可挂起现有事务执行非事务代码
B. NEVER要求当前没有事务
C. MANDATORY要求已有事务
D. 所有传播都等价于REQUIRED

# 第3阶段：AOP、MVC、事务、数据访问、测试

## 单选题

### SPRING2-211（单选题）

在 Spring AOP 中，把横跨多个业务模块的日志、事务等通用行为抽取出来的对象称为？

A. 切面
B. 实体
C. 仓储
D. DTO

### SPRING2-212（单选题）

AOP 主要解决哪类问题？

A. 横切关注点的重复散落
B. 数据库表空间不足
C. HTML 标签嵌套
D. 网络 DNS 解析

### SPRING2-217（单选题）

Spring AOP 中用于描述“哪些方法需要被拦截”的表达式是？

A. 切点表达式
B. Bean 名称
C. 环境变量
D. 资源路径

### SPRING2-218（单选题）

在 Spring 基于代理的 AOP 中，最常见的连接点是？

A. 方法执行
B. 字段声明
C. 类文件下载
D. 数据库建表

### SPRING2-219（单选题）

within(com.example.service..*) 与 execution 表达式相比主要按什么维度匹配？

A. 类型所在包范围
B. 方法返回对象值
C. SQL 执行耗时
D. 请求体 JSON

### SPRING2-220（单选题）

@annotation(TransactionalLog) 切点的含义是？

A. 匹配带该注解的方法
B. 匹配所有异常
C. 匹配所有接口
D. 匹配指定数据库

### SPRING2-221（单选题）

execution(* com.example.service..*(..)) 主要匹配什么？

A. service 包及子包中任意方法
B. 所有数据库表
C. 所有 HTTP 状态码
D. 只匹配构造方法

### SPRING2-222（单选题）

切点使用 args(accountId) 时，通知方法通常可以获得什么？

A. 调用时传入的 accountId 参数
B. 目标类所有字段
C. 数据库连接池
D. HTTP 响应头

### SPRING2-223（单选题）

同一切点存在多个前置通知时，控制其先后顺序可使用？

A. @Order
B. @Value
C. @Profile
D. @Bean

### SPRING2-225（单选题）

在目标方法执行之前运行的通知类型是？

A. 前置通知
B. 返回通知
C. 异常通知
D. 最终通知

### SPRING2-226（单选题）

目标方法正常返回后才执行的通知是？

A. @AfterReturning
B. @Before
C. @AfterThrowing
D. @Around

### SPRING2-227（单选题）

无论目标方法正常结束还是抛出异常都会执行的通知是？

A. @After
B. @Before
C. @AfterReturning
D. @AfterThrowing

### SPRING2-228（单选题）

环绕通知要让目标方法真正执行，通常需要调用哪个对象的方法？

A. ProceedingJoinPoint.proceed()
B. ApplicationContext.close()
C. BeanFactory.getName()
D. Logger.flush()

### SPRING2-229（单选题）

环绕通知中在 proceed() 之后修改返回值，最直接影响的是？

A. 调用方最终拿到的结果
B. 数据库表结构
C. Controller 映射路径
D. JVM 堆大小

### SPRING2-230（单选题）

要使事务或自定义通知覆盖另一个方法，较稳妥的做法是？

A. 通过代理对象发起调用
B. 在方法内使用 this 调用
C. 把通知写到配置文件注释
D. 删除目标方法

### SPRING2-231（单选题）

@AfterThrowing 通知的触发条件是？

A. 目标方法抛出匹配异常
B. 目标方法正常返回
C. 容器启动完成
D. Bean 被销毁

### SPRING2-235（单选题）

目标类实现接口时，Spring 默认更可能使用哪种代理？

A. JDK 动态代理
B. 静态 HTML 代理
C. 数据库触发器
D. 反射缓存

### SPRING2-236（单选题）

目标类没有实现接口时，Spring 常用哪种方式创建代理？

A. CGLIB 子类代理
B. JDK 接口代理
C. Servlet Filter
D. JDBC Driver

### SPRING2-237（单选题）

同一个类中一个方法直接调用本类另一个方法时，为什么常绕过 Spring AOP？

A. 没有经过代理对象
B. 方法没有返回值
C. Spring 禁止 private 字段
D. 类一定是 final

### SPRING2-238（单选题）

一个 @Transactional 方法由同类内部直接调用时事务未生效，根因通常是？

A. 调用绕过事务代理
B. 数据库没有表
C. 事务注解只能写在字段上
D. Spring 不支持事务

### SPRING2-239（单选题）

Spring Boot 集成 MyBatis 通常需要使用哪个注解扫描 Mapper 接口？

A. @MapperScan
B. @ComponentScanOnly
C. @EntityScan
D. @WebScan

### SPRING2-240（单选题）

MyBatis Mapper 接口通常由谁实现其数据库访问代理？

A. MyBatis 框架
B. 浏览器
C. JVM 垃圾回收器
D. JUnit

### SPRING2-244（单选题）

把@Transactional标在private方法上通常有什么问题？

A. 外部代理无法按常规拦截该方法
B. 事务会自动跨进程传播
C. 方法会自动变成public
D. 数据库会拒绝启动

### SPRING2-246（单选题）

把事务边界放在 Service 层通常比放在 Controller 层更合适的主要原因是？

A. Service 表达完整业务操作边界
B. Controller 不能调用数据库
C. Service 一定没有异常
D. Controller 只能返回字符串

### SPRING2-248（单选题）

Spring事务抽象的主要价值是？

A. 统一不同事务API的编程模型
B. 让所有数据库都变成内存库
C. 消除所有锁竞争
D. 替代业务补偿

### SPRING2-249（单选题）

TransactionalEventListener的AFTER_COMMIT阶段意味着什么？

A. 仅在事务成功提交后处理
B. 在事务开始前处理
C. 只在回滚时处理
D. 永远异步处理

### SPRING2-250（单选题）

测试方法上的事务默认结束后通常怎样？

A. 测试框架会回滚以隔离测试数据
B. 永远提交到生产数据库
C. 自动删除源码
D. 关闭所有Bean

### SPRING2-251（单选题）

REQUIRES_NEW传播行为的关键语义是？

A. 挂起外部事务并创建新事务
B. 永远加入外部事务
C. 不允许数据库写入
D. 只执行查询

### SPRING2-252（单选题）

readOnly=true最合理的理解是？

A. 表达事务主要用于读取，并可帮助底层优化
B. 强制数据库绝不允许任何SQL
C. 自动缓存全部结果
D. 保证查询永远不超时

### SPRING2-253（单选题）

隔离级别主要解决哪类并发问题？

A. 脏读、不可重复读和幻读等
B. HTTP路径匹配
C. Bean扫描包名
D. JSON字段命名

### SPRING2-255（单选题）

Spring MVC 中接收前端请求并选择处理器的核心组件是？

A. DispatcherServlet
B. DataSource
C. SqlSession
D. BeanPostProcessor

### SPRING2-256（单选题）

DispatcherServlet 根据请求寻找 Controller 方法主要依赖哪个组件？

A. HandlerMapping
B. ViewResolver
C. MessageConverter
D. TransactionManager

### SPRING2-257（单选题）

Controller 执行后返回 ModelAndView，负责把逻辑视图名解析成具体视图的是？

A. ViewResolver
B. HandlerMapping
C. MultipartResolver
D. LocaleResolver

### SPRING2-258（单选题）

使用 @ResponseBody 返回对象时，Spring MVC 通常通过什么写入响应体？

A. HttpMessageConverter
B. ViewResolver
C. HandlerInterceptor
D. BeanFactory

### SPRING2-270（单选题）

MockMvc最适合测试哪一层？

A. Spring MVC请求映射和响应行为
B. 真实浏览器渲染性能
C. 生产数据库容量
D. Nacos集群选主

### SPRING2-271（单选题）

MyBatis 中多个方法参数需要在 SQL 中使用稳定名称，常见做法是？

A. 使用 @Param 明确参数名
B. 依赖参数随机顺序
C. 把参数写入日志
D. 把所有参数转成 URL

### SPRING2-272（单选题）

查询结果列名与 Java 属性名不一致时，MyBatis 常通过什么解决？

A. resultMap 或列别名
B. 增加线程数量
C. 修改日志级别
D. 关闭事务

### SPRING2-274（单选题）

记录审计日志的切面中，最不应直接记录的是？

A. 密码和完整令牌
B. 业务操作名
C. Trace ID
D. 执行耗时

### SPRING2-275（单选题）

Spring Boot 默认日志门面通常是？

A. SLF4J
B. JDBC
C. JPA
D. JSP

### SPRING2-276（单选题）

日志级别从低到高通常是？

A. TRACE、DEBUG、INFO、WARN、ERROR
B. ERROR、WARN、INFO、DEBUG、TRACE
C. INFO、ERROR、DEBUG、TRACE、WARN
D. DEBUG、TRACE、ERROR、INFO、WARN

### SPRING2-277（单选题）

生产环境通常不建议把根日志级别长期设为 DEBUG，主要原因是？

A. 日志量大且可能暴露调试信息
B. DEBUG 会关闭所有日志
C. DEBUG 会禁用事务
D. DEBUG 只能输出错误

### SPRING2-279（单选题）

JUnit 5 标识测试方法的注解是？

A. @Test
B. @Run
C. @CaseOnly
D. @VerifyBean

### SPRING2-280（单选题）

每个测试方法执行前运行一次的 JUnit 5 注解是？

A. @BeforeEach
B. @BeforeAll
C. @AfterEach
D. @AfterAll

### SPRING2-287（单选题）

验证两个值相等应优先使用哪个断言？

A. Assertions.assertEquals
B. Assertions.assertNull
C. Assertions.assertThrows
D. Assertions.failOnly

### SPRING2-288（单选题）

Mockito 中创建一个 Mock 对象常用哪个方法？

A. mock()
B. fakeBean()
C. stubOnly()
D. replaceAll()

### SPRING2-289（单选题）

Mockito 的 when(...).thenReturn(...) 主要用于？

A. 设定 Mock 方法的返回值
B. 启动 Spring 容器
C. 提交数据库事务
D. 扫描 Controller

### SPRING2-290（单选题）

Mockito.verify(mock).save(x) 用于验证什么？

A. save 是否被调用
B. save 一定返回 true
C. 数据库已经提交
D. Controller 已渲染页面

### SPRING2-291（单选题）

@RestController 等价于组合了什么？

A. @Controller 与 @ResponseBody
B. @Service 与 @Repository
C. @Bean 与 @Configuration
D. @RequestBody 与 @RequestParam

### SPRING2-292（单选题）

@GetMapping("/users") 最主要限定的是？

A. HTTP GET 请求及路径 /users
B. 所有 POST 请求
C. 数据库表 users
D. 静态资源目录

### SPRING2-293（单选题）

从查询参数 ?page=2 读取 page，常用注解是？

A. @RequestParam
B. @PathVariable
C. @RequestBody
D. @CookieValueOnly

### SPRING2-294（单选题）

路径 /users/42 中读取 42，常用注解是？

A. @PathVariable
B. @RequestParam
C. @RequestHeader
D. @ModelAttributeOnly

### SPRING2-295（单选题）

将 JSON 请求体反序列化为 Java 对象通常使用？

A. @RequestBody
B. @PathVariable
C. @RequestAttribute
D. @ResponseStatusOnly

### SPRING2-296（单选题）

在 Controller 方法上指定成功响应状态码，常用注解是？

A. @ResponseStatus
B. @StatusCodeOnly
C. @HttpCode
D. @ResponseHeaderOnly

### SPRING2-299（单选题）

WebFlux的核心编程模型更接近什么？

A. 非阻塞响应式流
B. 只允许同步Servlet调用
C. 只支持JDBC阻塞模型
D. 只用于批处理

## 多选题

### SPRING2-213（多选题）

Spring AOP 中常见的组成概念包括哪些？

A. 切面
B. 切点
C. 通知
D. 数据库索引

### SPRING2-214（多选题）

拦截器适合做哪些工作？

A. 登录态检查
B. 请求耗时记录
C. 统一注入 Trace ID
D. 直接替代 Service 业务规则

### SPRING2-215（多选题）

哪些场景适合使用 AOP 统一处理？

A. 审计日志
B. 权限校验
C. 事务边界
D. 核心订单计算公式本身

### SPRING2-216（多选题）

Spring AOP适合处理哪些横切关注点？

A. 事务
B. 日志
C. 权限
D. 修改任意字段访问而无需织入

### SPRING2-224（多选题）

切点表达式可以根据哪些条件匹配方法？

A. 包和类范围
B. 方法名和参数
C. 方法上的注解
D. 数据库返回行数

### SPRING2-232（多选题）

以下哪些属于 Spring AOP 常见通知类型？

A. 前置通知
B. 返回通知
C. 异常通知
D. 建表通知

### SPRING2-233（多选题）

环绕通知可以完成哪些工作？

A. 控制目标方法是否执行
B. 在执行前后记录耗时
C. 修改参数或返回值
D. 自动创建数据库表

### SPRING2-234（多选题）

环绕通知中可以安全实现哪些能力？

A. 执行前后计时
B. 统一捕获并记录异常后继续抛出
C. 根据条件短路调用
D. 无条件吞掉所有异常

### SPRING2-241（多选题）

关于 JDK 动态代理和 CGLIB，哪些说法正确？

A. JDK 代理依赖接口
B. CGLIB 通过生成子类增强类
C. final 类或方法会限制 CGLIB 覆盖
D. 二者都是数据库连接池

### SPRING2-242（多选题）

关于声明式事务和 AOP 的关系，哪些说法正确？

A. 事务拦截通常由代理实现
B. 事务边界可被切点匹配
C. 同类 this 调用可能绕过事务代理
D. 事务注解会修改 Java 字节码源文件

### SPRING2-243（多选题）

基于代理的 Spring AOP 需要注意哪些限制？

A. private 方法通常无法被代理拦截
B. final 方法不能被 CGLIB 覆盖
C. 同类自调用可能绕过通知
D. 任意字段读写都会自动织入

### SPRING2-245（多选题）

声明式事务排查应查看哪些信息？

A. 调用是否经过代理
B. 异常是否匹配回滚规则
C. 事务管理器是否正确配置
D. 只看方法上有没有注解

### SPRING2-247（多选题）

MyBatis 与 Spring 事务集成时，哪些配置或习惯有助于保持一致性？

A. 使用统一事务管理器
B. 让同一业务操作使用同一数据源事务
C. 对异常回滚规则进行明确设计
D. 在事务中随意开启独立连接提交

### SPRING2-254（多选题）

事务隔离实践中，正确的有？

A. 提高隔离可能降低并发
B. 数据库实际支持会影响效果
C. 只读语义不等于所有数据库禁止写
D. 隔离级别能解决所有分布式一致性

### SPRING2-259（多选题）

Spring 集成 MyBatis 时，常见配置或组件包括哪些？

A. SqlSessionFactory
B. Mapper 接口
C. @MapperScan
D. ViewResolver

### SPRING2-260（多选题）

Spring MVC 请求处理链中常见的组件包括哪些？

A. DispatcherServlet
B. HandlerMapping
C. HandlerAdapter
D. ViewResolver

### SPRING2-261（多选题）

Spring MVC 可用于绑定请求数据的注解包括哪些？

A. @RequestParam
B. @PathVariable
C. @RequestBody
D. @RequestMappingOnly

### SPRING2-262（多选题）

Controller 返回 JSON 响应时，哪些机制可能参与？

A. @ResponseBody
B. @RestController
C. HttpMessageConverter
D. ViewResolver 必然渲染模板

### SPRING2-263（多选题）

统一处理 Controller 异常时，哪些做法正确？

A. 使用 @ControllerAdvice
B. 使用 @ExceptionHandler
C. 返回统一错误结构
D. 把完整堆栈直接返回用户

### SPRING2-264（多选题）

Bean Validation 在 MVC 中生效通常需要哪些条件？

A. DTO 字段声明约束
B. 参数上使用 @Valid 或 @Validated
C. 校验失败后由异常处理器统一返回
D. 仅在前端写提示即可

### SPRING2-265（多选题）

MockMvc 测试中可以验证哪些内容？

A. HTTP 状态码
B. JSON 响应字段
C. Controller 映射
D. 生产服务器硬件性能

### SPRING2-266（多选题）

一次典型 Spring MVC 请求可能经历哪些阶段？

A. DispatcherServlet 接收请求
B. HandlerMapping 查找处理器
C. HandlerAdapter 调用处理器
D. ViewResolver 或消息转换器生成响应

### SPRING2-267（多选题）

对 Web 接口进行基础安全治理时，哪些措施合理？

A. 校验并限制上传文件类型和大小
B. 对敏感日志脱敏
C. 统一异常响应避免堆栈泄露
D. 把认证信息放在 URL 查询参数中

### SPRING2-268（多选题）

为了将一次 MVC 请求与 MyBatis SQL 日志关联，适合记录哪些信息？

A. Trace ID
B. 请求路径和业务标识
C. 必要的耗时信息
D. 完整密码

### SPRING2-269（多选题）

接口参数校验失败时，服务端通常应做到哪些事？

A. 返回明确字段级错误
B. 使用统一错误码或结构
C. 记录必要的请求关联信息
D. 把 Java 堆栈直接返回

### SPRING2-273（多选题）

MyBatis 结果映射问题可以通过哪些方式解决？

A. SQL 列别名
B. resultMap
C. 统一 Java 属性命名策略
D. 提高日志级别

### SPRING2-278（多选题）

使用日志框架时，哪些实践较好？

A. 使用参数化日志占位符
B. 按环境设置级别
C. 避免记录密码
D. 大量使用 System.out 替代日志框架

### SPRING2-281（多选题）

JUnit 5 测试中可以使用哪些机制？

A. @BeforeEach 准备数据
B. @AfterEach 清理资源
C. assertThrows 验证异常
D. 用 @Autowired 代替所有断言

### SPRING2-282（多选题）

为 Service 编写单元测试时，哪些依赖隔离策略合理？

A. Mock 外部客户端
B. 使用内存或测试替身数据
C. 验证业务结果和关键交互
D. 直接依赖生产数据库数据

### SPRING2-283（多选题）

Mockito 单元测试中，哪些做法合理？

A. when 配置桩返回值
B. verify 校验交互
C. 用 ArgumentCaptor 检查参数
D. 让 Mock 连接真实生产数据库

### SPRING2-284（多选题）

测试外部支付客户端时，哪些策略可减少对真实服务的依赖？

A. 用 Mockito Mock 客户端
B. 用 WireMock 等 Stub 服务模拟响应
C. 覆盖超时和错误响应
D. 每次测试都调用真实扣款接口

### SPRING2-285（多选题）

Spring测试体系中，合理的有？

A. 测试上下文可缓存
B. MockMvc可测试MVC链路
C. 测试事务可回滚
D. 所有测试都必须启动真实生产依赖

### SPRING2-286（多选题）

测试上下文设计中，正确的有？

A. 共享上下文可减少启动成本
B. 测试切片缩小装配范围
C. 外部依赖可用Testcontainers或Mock隔离
D. 所有测试必须使用相同上下文

### SPRING2-297（多选题）

设计审计切面时，哪些做法较为稳妥？

A. 统一记录 Trace ID 和操作名
B. 对密码等敏感字段脱敏
C. 避免在切面中吞掉业务异常
D. 把所有请求体原样写入日志

### SPRING2-298（多选题）

设计 REST 接口时，哪些做法合理？

A. 使用合适的 HTTP 方法
B. 返回清晰的状态码
C. 对重复写操作设计幂等策略
D. 把异常堆栈放进响应

### SPRING2-300（多选题）

响应式链路中，正确的有？

A. Mono和Flux是Publisher类型
B. 阻塞API应隔离到专用线程池
C. 背压帮助控制生产速度
D. 响应式代码必须手工创建一个线程对应一个请求

# 第4阶段：Spring Boot 工程化

## 单选题

### SPRING2-301（单选题）

Spring Boot 主要解决传统 Spring 项目中的哪类痛点？

A. 消除所有业务代码
B. 减少样板配置并快速搭建应用
C. 替代 Java 语言
D. 只提供数据库驱动

### SPRING2-302（单选题）

“约定大于配置”在 Spring Boot 中最直接的含义是什么？

A. 所有配置都被禁止
B. 遵循默认约定时无需重复声明大量配置
C. 只能使用 XML
D. 必须手写每个 Bean

### SPRING2-303（单选题）

Spring Initializr 的主要用途是什么？

A. 在线监控生产指标
B. 生成规范的 Spring Boot 项目骨架
C. 替代 Maven 编译器
D. 把 Java 转为 Kotlin

### SPRING2-304（单选题）

在 Initializr 中选择 Java、构建工具和依赖，最终主要影响什么？

A. 项目骨架与依赖清单
B. 数据库中的业务数据
C. 生产服务器密码
D. 浏览器缓存

### SPRING2-305（单选题）

Initializr 下载的项目压缩包通常应如何开始使用？

A. 解压后导入 IDE
B. 直接作为图片打开
C. 上传到数据库
D. 改名为 .txt

### SPRING2-306（单选题）

Spring Boot Starter 本质上是什么？

A. 单个业务 Bean
B. 面向场景预封装的一组依赖坐标
C. 数据库表结构
D. 只能运行一次的脚本

### SPRING2-307（单选题）

开发 Spring MVC Web 应用时，最典型的起步依赖是？

A. spring-boot-starter-web
B. spring-boot-starter-test
C. spring-boot-starter-parent
D. spring-boot-starter-log4j2

### SPRING2-308（单选题）

Spring Boot 一站式测试启动器通常包含哪组测试技术？

A. JUnit、Mockito、AssertJ 等
B. Tomcat、Jetty、Undertow
C. MySQL、Redis、Kafka
D. JDK、JRE、JVM

### SPRING2-309（单选题）

要用 Log4j2 替换 Boot 默认的 Logback，通常需要先做什么？

A. 排除 starter-web 的默认 logging 依赖
B. 删除所有日志 API
C. 把日志写到数据库
D. 只修改文件后缀

### SPRING2-310（单选题）

Starter 能减少依赖版本冲突的关键原因是什么？

A. 每次运行随机选择版本
B. Spring Boot 统一管理兼容版本
C. 把所有库复制进 JDK
D. 禁止第三方库

### SPRING2-311（单选题）

Spring Boot 自动配置主要依据什么来决定是否装配组件？

A. 类路径依赖、已有 Bean 和条件注解
B. CPU 温度
C. 开发者姓名
D. 数据库行数

### SPRING2-312（单选题）

引入 starter-web 后无需手工配置 Tomcat 和 MVC 基础 Bean，主要体现什么？

A. 自动配置
B. 强制继承
C. 编译器内联
D. 数据库分片

### SPRING2-313（单选题）

自动配置中使用条件注解的目的是什么？

A. 让配置按环境条件生效
B. 保证所有 Bean 永远创建
C. 替代 Java 编译
D. 隐藏异常

### SPRING2-314（单选题）

@ConditionalOnClass 主要检查什么？

A. 指定类是否存在于类路径
B. Bean 是否已被销毁
C. HTTP 请求是否成功
D. 配置文件行数

### SPRING2-315（单选题）

@ConditionalOnMissingBean 的典型用途是什么？

A. 用户未提供 Bean 时提供默认实现
B. 删除用户 Bean
C. 要求 Bean 必须有两个实例
D. 只匹配配置文件

### SPRING2-316（单选题）

@ConditionalOnBean(DataSource.class) 表示什么？

A. 容器存在 DataSource 时才满足条件
B. 必须创建两个数据源
C. 禁止使用 DataSource
D. 只检查数据库表

### SPRING2-317（单选题）

@ConditionalOnProperty 常用于根据什么开启配置？

A. 配置属性值
B. Java 文件大小
C. 请求 IP 的长度
D. 线程数量

### SPRING2-318（单选题）

@ConditionalOnWebApplication 主要用于判断什么？

A. 当前应用是否为 Web 应用
B. 数据库是否可写
C. 是否使用 JUnit
D. JAR 是否签名

### SPRING2-319（单选题）

批处理专用配置不希望在 Web 环境加载，可考虑哪个条件？

A. @ConditionalOnNotWebApplication
B. @ConditionalOnClass
C. @Bean
D. @RequestMapping

### SPRING2-320（单选题）

只有类路径中存在特定模板文件才加载配置，应使用哪类条件？

A. @ConditionalOnResource
B. @ConditionalOnBean
C. @ConditionalOnMissingBean
D. @ConfigurationProperties

### SPRING2-321（单选题）

根据 SpEL 表达式决定配置是否生效，适合使用什么？

A. @ConditionalOnExpression
B. @ConditionalOnClass
C. @Profile
D. @Import

### SPRING2-322（单选题）

@SpringBootApplication 通常组合了哪三个核心注解？

A. @Configuration、@EnableAutoConfiguration、@ComponentScan
B. @Controller、@Service、@Repository
C. @Bean、@Value、@Profile
D. @Import、@Lookup、@Order

### SPRING2-323（单选题）

在启动类上使用 @SpringBootApplication，组件扫描默认从哪里开始？

A. 启动类所在包及其子包
B. JDK 根目录
C. 所有磁盘目录
D. 只扫描 test 包

### SPRING2-324（单选题）

@Configuration 标注的类主要表示什么？

A. 一个配置类，可声明 @Bean 方法
B. 一个数据库连接
C. 一个 HTTP 请求
D. 一个测试断言

### SPRING2-325（单选题）

@EnableAutoConfiguration 的核心作用是什么？

A. 启用 Boot 根据条件进行自动配置
B. 开启 Java 断言
C. 把应用部署到云端
D. 禁用组件扫描

### SPRING2-326（单选题）

Spring Boot 的内嵌服务器让应用常见的部署形态变成什么？

A. 可执行 JAR，通过 java -jar 启动
B. 必须部署到外部 EJB 容器
C. 只能运行在浏览器
D. 必须复制成 WAR 到共享目录

### SPRING2-327（单选题）

starter-web 默认常见的内嵌 Servlet 容器是什么？

A. Tomcat
B. Nginx
C. Redis
D. MySQL

### SPRING2-328（单选题）

要将默认 Tomcat 换成 Jetty，关键思路是什么？

A. 排除 Tomcat 依赖并引入 Jetty starter
B. 只改端口号
C. 删除 @SpringBootApplication
D. 把 Java 改成脚本

### SPRING2-329（单选题）

修改 Spring Boot 内嵌 Web 服务器端口，常用哪个属性？

A. server.port
B. spring.port.name
C. http.listen.file
D. boot.server.id

### SPRING2-330（单选题）

@ConfigurationProperties 主要解决什么问题？

A. 将一组同前缀配置绑定到对象
B. 把 Bean 转成数据库表
C. 自动生成 REST 文档
D. 扫描所有日志

### SPRING2-331（单选题）

@ConfigurationProperties(prefix = "app") 的前缀作用是什么？

A. 限定绑定 app 开头的配置项
B. 指定 Bean 名称必须为 app
C. 指定 HTTP 路径
D. 选择数据库驱动

### SPRING2-332（单选题）

一个带 @ConfigurationProperties 的普通类要成为可注入 Bean，常见做法是什么？

A. 使用 @ConfigurationPropertiesScan 或 @EnableConfigurationProperties
B. 只写 private 字段
C. 把类放在 resources
D. 给类加 final 方法

### SPRING2-333（单选题）

相比在多个字段上散落 @Value，ConfigurationProperties 的优势之一是什么？

A. 集中表达相关配置并支持类型化绑定
B. 完全不需要配置文件
C. 只能绑定字符串
D. 自动加密所有值

### SPRING2-334（单选题）

用户自己定义 DataSource Bean 后，默认 DataSource 自动配置通常会怎样？

A. 因 @ConditionalOnMissingBean 不满足而让出
B. 覆盖用户 Bean
C. 创建无数个 DataSource
D. 删除配置文件

### SPRING2-335（单选题）

某自动配置引用 Redis 类型，但项目未引入 Redis 依赖，最合理预期是？

A. 基于类路径条件不生效
B. 必然编译通过并创建 Redis Bean
C. 自动安装 Redis
D. 删除所有缓存配置

### SPRING2-336（单选题）

@ConditionalOnProperty(matchIfMissing = true) 的含义更接近哪项？

A. 属性缺失时也允许条件匹配
B. 属性必须存在且为 false
C. 属性值会被删除
D. 只检查 Bean 类型

### SPRING2-337（单选题）

执行带有 main 方法的 Spring Boot 启动类，通常由哪个调用启动容器？

A. SpringApplication.run
B. System.gc
C. Files.copy
D. Math.random

### SPRING2-338（单选题）

Starter 与自动配置的关系，哪项最准确？

A. Starter 提供依赖线索，自动配置按条件装配组件
B. Starter 直接执行所有业务逻辑
C. 自动配置完全不依赖类路径
D. 二者互相排斥

### SPRING2-339（单选题）

Maven 中排除 spring-boot-starter-logging 后立即启动应用，可能出现什么风险？

A. 暂时缺少默认日志实现
B. Tomcat 自动变成 Jetty
C. 所有 Bean 自动变成原型
D. 配置绑定失效

### SPRING2-340（单选题）

Spring Boot 与 Spring Framework 的关系更准确的是？

A. Boot 建立在 Spring 生态之上并提供约定式工程能力
B. Boot 完全取代 Spring Framework
C. Boot 只能用于非 Java 项目
D. 两者不能同时使用

### SPRING2-341（单选题）

使用 Boot 默认配置后，需要修改端口或数据源时通常怎么办？

A. 通过属性或自定义 Bean 覆盖默认值
B. 修改 JDK 源码
C. 删除自动配置全部代码
D. 重新编写 Servlet 容器

### SPRING2-342（单选题）

启动类放在 com.example.app 向上一级 com.example，默认组件扫描会怎样？

A. 默认不会扫描 com.example 下与 app 同级的包
B. 会扫描整个磁盘
C. 只扫描启动类文件
D. 会扫描所有依赖 Jar 的业务组件

### SPRING2-343（单选题）

Spring Boot 常见外部化配置文件格式包括哪一组？

A. properties 或 yaml
B. class 或 java
C. png 或 jpg
D. sql 或 csv

### SPRING2-344（单选题）

命令行参数与配置文件存在同名属性时，Boot 的设计通常允许什么？

A. 外部参数覆盖较低优先级的默认配置
B. 配置文件永远不可覆盖
C. 命令行参数被忽略
D. 属性只能写在 Java 注解中

### SPRING2-345（单选题）

内嵌服务器在部署模式上的核心价值是什么？

A. 应用与容器一起打包，减少外部服务器环境差异
B. 强制每台机器安装 IDE
C. 取消 HTTP 协议
D. 保证业务逻辑无缺陷

### SPRING2-376（单选题）

Spring Boot自动配置通常依据什么决定是否提供默认Bean？

A. 类路径、已有Bean和配置条件
B. 源代码文件名长度
C. 浏览器版本
D. 数据库表行数

### SPRING2-377（单选题）

用户自己定义DataSource Bean后，相关默认嵌入式数据库自动配置通常会怎样？

A. 相应默认配置回退或让位
B. 一定创建第二个DataSource
C. 自动删除用户Bean
D. 关闭整个ApplicationContext

### SPRING2-378（单选题）

自动配置不符合预期时，最有用的诊断信息通常来自哪里？

A. 条件评估报告
B. 浏览器缓存
C. Git分支名称
D. CSS编译日志

### SPRING2-379（单选题）

--debug启动参数主要帮助什么？

A. 输出自动配置条件评估报告
B. 开启生产远程调试端口
C. 删除缓存
D. 改变服务发现模式

### SPRING2-380（单选题）

@SpringBootApplication通常组合了哪些能力？

A. @SpringBootConfiguration、@EnableAutoConfiguration和@ComponentScan
B. @Transactional、@Async和@WebMvcTest
C. @Entity、@Repository和@Mapper
D. @Test、@MockBean和@Sql

### SPRING2-381（单选题）

现代Spring Boot自动配置类通常通过哪个资源文件被导入？

A. META-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports
B. application.css
C. web.xml
D. pom.lock

### SPRING2-382（单选题）

@ConditionalOnClass的基本作用是？

A. 类路径存在某类时才满足条件
B. 类实例运行五秒后满足
C. 配置文件必须是XML
D. 只按HTTP方法判断

### SPRING2-383（单选题）

@ConditionalOnMissingBean最适合表达什么？

A. 用户未提供同类Bean时才提供默认Bean
B. Bean每次调用都刷新
C. 所有Bean都必须缺失
D. 只在数据库为空时生效

### SPRING2-384（单选题）

@ConditionalOnProperty的havingValue常用于什么？

A. 按属性值决定条件是否匹配
B. 定义数据库隔离级别
C. 修改HTTP响应体
D. 设置线程优先级

### SPRING2-385（单选题）

ApplicationContextRunner主要用于什么？

A. 以最小上下文测试自动配置条件
B. 启动完整生产集群
C. 压测网络带宽
D. 生成数据库备份

### SPRING2-386（单选题）

Spring Boot配置绑定面对命令行参数与application.yml冲突时，通常哪者优先？

A. 命令行参数通常具有更高优先级
B. YAML永远优先
C. 二者随机选择
D. 都被忽略

### SPRING2-387（单选题）

自动配置类中使用@ConditionalOnMissingBean的工程价值是？

A. 允许用户定义Bean覆盖默认实现
B. 禁止任何用户配置
C. 强制使用默认实现
D. 让Bean变成prototype

### SPRING2-388（单选题）

使用外部配置中心时，spring.config.import的优势是？

A. 把配置来源显式写入Config Data加载链
B. 依赖过时bootstrap必选
C. 只支持本地文件
D. 绕过所有认证

### SPRING2-389（单选题）

不希望某个自动配置生效时，哪种做法是官方支持的？

A. 使用exclude或spring.autoconfigure.exclude
B. 删除所有Starter
C. 修改JVM字节码
D. 把配置写进HTML

### SPRING2-390（单选题）

自动配置类需要先后顺序时，通常使用什么表达？

A. @AutoConfigureBefore/@AutoConfigureAfter
B. @OrderBySQL
C. @SequenceOnly
D. @RouteOrder

### SPRING2-391（单选题）

现代Spring Boot外部配置导入通常推荐使用什么机制？

A. spring.config.import
B. bootstrap.xml必选
C. web.xml
D. MANIFEST-only

### SPRING2-392（单选题）

配置文件中使用spring.config.import时，导入失败默认意味着什么？

A. 应用启动可能失败，除非使用可选导入语义
B. 一定静默忽略
C. 自动回退到生产密码
D. 自动创建配置中心

### SPRING2-393（单选题）

spring.config.activate.on-profile适合表达什么？

A. 该配置文档在指定Profile激活时生效
B. 强制所有Profile同时生效
C. 设置线程数
D. 决定日志文件编码

### SPRING2-394（单选题）

对@ConfigurationProperties对象启用Bean Validation通常需要什么？

A. 在绑定对象上启用校验并使用约束注解
B. 只改端口号
C. 只添加@RestController
D. 删除所有默认值

### SPRING2-395（单选题）

spring-boot-configuration-processor的价值是什么？

A. 生成配置元数据以改善IDE提示
B. 替代配置服务器
C. 执行所有配置变更
D. 压缩Jar文件

### SPRING2-396（单选题）

Spring Boot Actuator端点的主要定位是？

A. 生产运行监控和管理
B. 替代业务Controller
C. 编译Java源码
D. 生成前端页面

### SPRING2-397（单选题）

现代Spring Boot分布式追踪通常需要配合什么？

A. Micrometer Tracing等追踪基础设施
B. 只设置server.port
C. 只增加@Entity
D. 删除所有HTTP头

### SPRING2-398（单选题）

Spring Boot Banner主要影响什么？

A. 启动时输出的展示文本
B. Bean注入顺序
C. 数据库事务隔离
D. 服务注册健康

### SPRING2-399（单选题）

Boot可执行Jar的一个部署优势是？

A. 应用与嵌入式服务器一起交付
B. 必须手工部署外部Tomcat
C. 不能容器化
D. 只能在IDE运行

### SPRING2-400（单选题）

spring-boot-starter-test通常包含什么？

A. Boot测试支持、JUnit Jupiter和断言库等
B. 生产数据库密码
C. Nacos服务器
D. 前端打包器

### SPRING2-401（单选题）

@SpringBootTest通常创建什么范围的测试？

A. 由SpringApplication加载的应用上下文测试
B. 只测试一个JSON序列化方法
C. 只测试CSS
D. 只测试SQL语法

### SPRING2-402（单选题）

在不同Boot版本中测试替身注解发生变化时，正确做法是？

A. 查当前版本官方测试文档并采用对应注解
B. 照抄旧版本示例
C. 删除所有测试
D. 把Mock写入生产配置

## 多选题

### SPRING2-346（多选题）

Spring Boot 解决传统项目痛点的方式包括哪些？

A. 约定式默认配置
B. 场景化 Starter
C. 内嵌服务器
D. 替代所有业务设计

### SPRING2-347（多选题）

Initializr 通常可以让开发者选择哪些项目元数据？

A. 构建工具
B. Java 版本
C. 项目依赖
D. 生产数据库真实密码

### SPRING2-348（多选题）

Starter 的工程价值包括哪些？

A. 按场景整合依赖
B. 减少手动坐标配置
C. 配合版本仲裁降低冲突
D. 直接实现订单业务流程

### SPRING2-349（多选题）

starter-web 可能带来的能力包括哪些？

A. Spring MVC
B. 嵌入式 Servlet 容器
C. Web 常用基础依赖
D. 数据库事务业务规则

### SPRING2-350（多选题）

starter-test 的典型组成或价值包括哪些？

A. JUnit Jupiter
B. Mockito
C. AssertJ
D. 生产环境自动创建订单

### SPRING2-351（多选题）

从默认 Logback 替换到 Log4j2，哪些操作通常需要考虑？

A. 排除默认 logging 依赖
B. 引入 spring-boot-starter-log4j2
C. 确认仍有可用日志实现
D. 删除所有 SLF4J API

### SPRING2-352（多选题）

自动配置判断时常见的依据包括哪些？

A. 类路径是否有某类
B. 容器中是否已有 Bean
C. 属性开关是否匹配
D. 开发者的 IDE 主题颜色

### SPRING2-353（多选题）

@ConditionalOnClass 的使用理解正确的有？

A. 用于检查类路径上的类型
B. 可避免缺少依赖时加载不适用配置
C. 常与 Starter 的依赖线索配合
D. 它会自动下载缺少的 Jar

### SPRING2-354（多选题）

关于 @ConditionalOnBean，哪些说法正确？

A. 检查容器中是否有指定 Bean
B. 可让配置依赖前置基础设施
C. 用户自定义 Bean 可能满足该条件
D. 它检查的是磁盘文件是否存在

### SPRING2-355（多选题）

@ConditionalOnMissingBean 常用于哪些设计？

A. 只在用户未提供实现时创建默认 Bean
B. 尊重用户显式配置
C. 避免同类型默认 Bean 重复创建
D. 强制删除用户 Bean

### SPRING2-356（多选题）

@ConditionalOnProperty 可用于哪些场景？

A. 按功能开关启停自动配置
B. 指定属性前缀与名称
C. 用 havingValue 限定取值
D. 直接检查数据库表行数

### SPRING2-357（多选题）

关于 Web 应用条件，正确的有？

A. OnWebApplication 可限制 Web 环境配置
B. NotWebApplication 可用于批处理配置
C. 条件有助于避免加载错误场景 Bean
D. 它会自动把命令行程序变成 Web 应用

### SPRING2-358（多选题）

@SpringBootApplication 的组合能力包括哪些？

A. 配置类能力
B. 自动配置启用
C. 组件扫描
D. 自动生成数据库业务数据

### SPRING2-359（多选题）

关于默认组件扫描，哪些说法正确？

A. 从启动类所在包向下扫描
B. 启动类通常放在根包
C. 同级包默认不会被向上扫描
D. 会遍历整台机器所有目录

### SPRING2-360（多选题）

内嵌服务器带来的价值包括哪些？

A. 可执行 JAR 独立运行
B. 减少外部容器安装差异
C. 便于一键启动部署
D. 使所有业务代码自动正确

### SPRING2-361（多选题）

Spring Boot 外部化配置的常见特征包括哪些？

A. 支持 properties 和 YAML
B. 同一制品可适配不同环境
C. 可通过外部参数覆盖默认值
D. 必须把密码写入源码

### SPRING2-362（多选题）

ConfigurationProperties 相比散落 @Value 的优点包括哪些？

A. 按前缀聚合配置
B. 支持嵌套对象和类型转换
C. 便于统一校验
D. 只能绑定一个字符串属性

### SPRING2-363（多选题）

让配置属性类进入容器，哪些方式可能有效？

A. @ConfigurationPropertiesScan
B. @EnableConfigurationProperties
C. 在配置类上声明可注册的属性 Bean
D. 只把 .properties 文件放进 resources

### SPRING2-364（多选题）

SpringApplication.run 期间通常会发生哪些工作？

A. 创建应用上下文
B. 注册并扫描组件
C. 评估自动配置条件
D. 执行数据库全部业务交易

### SPRING2-365（多选题）

用户显式定义 Bean 后，自动配置通常如何表现？

A. MissingBean 条件可能不再满足
B. 保留用户自定义实现
C. 避免覆盖用户选择
D. 无论如何再创建一个同类型默认 Bean

### SPRING2-366（多选题）

多个条件注解同时存在时，正确理解包括哪些？

A. 必要条件通常需同时满足
B. 类路径和属性开关可共同约束装配
C. 任一关键条件失败都可能导致配置不生效
D. 条件注解会绕过容器生命周期

### SPRING2-367（多选题）

为了控制 Starter 依赖质量，哪些做法合理？

A. 使用 Boot 推荐的依赖管理
B. 检查传递依赖树
C. 避免同一组件引入互相冲突的版本
D. 随意覆盖全部版本而不测试

### SPRING2-368（多选题）

关于 server.port 的配置，正确的有？

A. 可在配置文件中设置
B. 可通过外部参数按环境调整
C. 改变端口不等于更换 Web 容器
D. 写进业务 Controller 才能生效

### SPRING2-369（多选题）

当自动配置与平台自有组件冲突时，合理处理包括哪些？

A. 定位具体自动配置类
B. 通过排除或属性关闭它
C. 保留不冲突的其他自动配置
D. 删除整个 Boot 依赖树

### SPRING2-370（多选题）

使用 Initializr 初始化项目时，哪些选择需要一起评估？

A. Spring Boot 版本
B. JDK 版本
C. 构建工具与依赖插件
D. 电脑桌面背景

### SPRING2-371（多选题）

Log4j2 集成时，哪些判断较为稳妥？

A. 排除默认 Logback 传递依赖
B. 引入 Boot 的 Log4j2 starter
C. 确认配置文件和实现版本匹配
D. 同时保留两套实现并期待随机选择

### SPRING2-372（多选题）

关于可执行 JAR，正确的有？

A. 可用 java -jar 启动
B. 包含应用运行所需的启动结构
C. 可减少外部容器部署步骤
D. 只能在开发机运行

### SPRING2-373（多选题）

外部化配置的设计价值包括哪些？

A. 默认值可被环境参数覆盖
B. 同一制品可在多环境运行
C. 敏感信息可通过环境注入而非写死源码
D. 所有配置必须打进 JAR 才安全

### SPRING2-374（多选题）

设计自动配置功能开关时，哪些做法合理？

A. 为开关定义清晰前缀和属性名
B. 使用 matchIfMissing 明确缺省策略
C. 在文档中说明默认开启或关闭
D. 用随机表达式避免用户控制

### SPRING2-375（多选题）

将 Web 配置与批处理配置隔离的好处包括哪些？

A. 避免非 Web 应用加载 Servlet 基础设施
B. 减少不适用 Bean
C. 降低启动失败风险
D. 让批处理必须监听 HTTP 端口

### SPRING2-403（多选题）

Boot工程化能力主要帮助哪些方面？

A. 依赖整合
B. 自动配置基础设施
C. 生产监控
D. 替代领域建模和业务测试

### SPRING2-404（多选题）

自定义Boot自动配置时，正确的有？

A. 使用条件注解避免无条件创建Bean
B. 用AutoConfiguration.imports注册
C. 使用ApplicationContextRunner测试
D. 直接依赖自动配置内部嵌套类作为公共API

### SPRING2-405（多选题）

关于Boot自动配置，正确的有？

A. 依赖classpath
B. 检查用户已有Bean
C. 可以被显式排除
D. 会自动编写领域业务逻辑

### SPRING2-406（多选题）

自动配置常用的条件包括哪些？

A. 类路径条件
B. Bean存在或缺失条件
C. 属性条件
D. 用户浏览器颜色条件

### SPRING2-407（多选题）

应用启动慢或自动配置异常时，可以使用哪些手段？

A. --debug条件报告
B. 启动分析器
C. 精简不必要的自动配置
D. 直接删除全部日志

### SPRING2-408（多选题）

用户覆盖自动配置时，正确的有？

A. 定义自己的Bean可使MissingBean条件失效
B. 可通过exclude排除
C. 应避免依赖自动配置内部实现细节
D. 覆盖后业务逻辑自动生成

### SPRING2-409（多选题）

配置导入失败排查可以检查哪些？

A. 导入URL和协议
B. 配置中心认证和网络
C. Profile与键名
D. 只检查Controller代码

### SPRING2-410（多选题）

配置启动校验的工程价值包括？

A. 尽早发现非法值
B. 避免运行到深层路径才失败
C. 可以表达范围约束
D. 让任何字符串自动符合业务规则

### SPRING2-411（多选题）

外部配置安全治理包括？

A. 密钥服务
B. 最小权限
C. 变更审计
D. 把所有环境变量打进前端JS

### SPRING2-412（多选题）

Spring Boot配置数据机制中，合理的有？

A. 可使用spring.config.import
B. 可表达optional导入
C. Profile可以激活特定文档
D. 任何配置中心都无需认证

### SPRING2-413（多选题）

关于Boot测试切片，正确的有？

A. WebMvcTest聚焦MVC
B. DataJpaTest聚焦JPA层
C. 切片通常比完整上下文更快
D. 切片会自动启动所有外部依赖

### SPRING2-414（多选题）

关于配置优先级，正确的有？

A. 命令行可覆盖文件值
B. 环境变量适合容器部署
C. Profile文档可按环境激活
D. 优先级冲突应交给随机结果

### SPRING2-415（多选题）

Boot测试策略中，正确的有？

A. 切片测试聚焦一层
B. 完整上下文测试验证装配
C. 动态属性适合容器端口
D. 所有测试都应连接生产数据库

### SPRING2-416（多选题）

SpringApplication启动阶段通常会做什么？

A. 准备Environment
B. 创建ApplicationContext
C. 发布启动生命周期事件
D. 自动修复所有配置错误

### SPRING2-417（多选题）

条件评估报告可以帮助判断哪些问题？

A. 哪个类路径条件未满足
B. 哪个Bean条件冲突
C. 哪个属性值未匹配
D. 用户的业务需求是否正确

### SPRING2-418（多选题）

配置Profile治理中，正确的有？

A. 避免把生产密钥提交默认文件
B. 可以用Profile激活差异配置
C. Profile不是权限边界的替代品
D. 激活多个Profile时顺序完全无关

### SPRING2-419（多选题）

Actuator管理面治理可包括？

A. 独立管理端口
B. 端点白名单暴露
C. 网络和权限隔离
D. 公开env到匿名公网

### SPRING2-420（多选题）

完整上下文测试和切片测试的差异包括？

A. 完整测试覆盖更多装配
B. 切片启动通常更快
C. 切片需显式Mock协作者
D. 切片一定比完整测试更接近生产

# 第5阶段：Spring Cloud 分布式治理

## 单选题

### SPRING2-421（单选题）

微服务架构相对于单体应用最核心的拆分原则是什么？

A. 按业务能力形成自治服务
B. 按每个Java类拆成服务
C. 按数据库字段拆成服务
D. 按团队成员姓名拆成服务

### SPRING2-422（单选题）

微服务中的“独立部署”主要意味着什么？

A. 单个服务可以独立发布和扩展
B. 所有服务必须同时停机发布
C. 所有服务共享同一个进程
D. 服务不能使用网络通信

### SPRING2-423（单选题）

单体应用中一个模块资源耗尽可能拖垮整个应用，微服务主要通过什么机制缓解？

A. 故障隔离
B. 删除所有日志
C. 强制共享线程池
D. 取消服务边界

### SPRING2-424（单选题）

下列哪项最适合作为微服务统一入口？

A. Spring Cloud Gateway
B. Nacos配置文件
C. OpenFeign接口
D. Sentinel规则文件

### SPRING2-425（单选题）

Nacos在课件中被定位为哪类基础组件？

A. 注册中心与配置中心一体化组件
B. 只负责日志采集的Agent
C. 只负责页面渲染的引擎
D. Java编译器插件

### SPRING2-426（单选题）

微服务初期不宜过度拆分的主要原因是什么？

A. 网络调用、部署和运维复杂度会快速增加
B. 拆分越细越不需要测试
C. 服务越多就不会有故障
D. 拆分会自动得到强一致性

### SPRING2-427（单选题）

微服务调用出现“慢但不报错”时，优先补充哪类信息最有帮助？

A. 链路追踪和响应时间指标
B. 只看编译器警告
C. 删除所有请求日志
D. 只检查前端颜色

### SPRING2-428（单选题）

从单体演进到微服务时，课件建议优先依据什么拆分？

A. 清晰的业务域边界
B. 技术层级名称
C. 代码行数绝对平均
D. 服务器磁盘目录

### SPRING2-437（单选题）

如果订单服务和支付服务共享同一张业务表，最明显的架构风险是？

A. 服务边界被数据库耦合，难以独立演进
B. 两服务自动获得强隔离
C. 调用延迟一定为零
D. 注册中心不再需要

### SPRING2-438（单选题）

服务实例启动时向注册中心上报IP、端口等信息，这一步称为？

A. 服务注册
B. 服务熔断
C. 请求降级
D. 路由过滤

### SPRING2-439（单选题）

服务注册、调用、限流、网关和配置中心共同构成了什么能力？

A. 微服务全局治理链路
B. 单个类的语法检查
C. 前端页面布局系统
D. 数据库备份脚本

### SPRING2-440（单选题）

服务实例注册时除了地址外还可以携带什么？

A. 端口和元数据
B. 用户密码明文日志
C. 前端DOM节点
D. 数据库执行计划

### SPRING2-443（单选题）

Spring Boot 与 Spring Cloud 的定位关系，哪项最准确？

A. Boot偏向单个应用基础，Cloud偏向分布式治理
B. Boot只做数据库，Cloud只做前端
C. Boot和Cloud是两门互斥语言
D. Cloud只能替代Java虚拟机

### SPRING2-444（单选题）

消费者从Nacos获得可用服务实例列表的过程称为？

A. 服务发现
B. 服务编译
C. 配置回滚
D. 链路采样

### SPRING2-445（单选题）

需要优先保证注册中心在网络分区下仍可提供服务列表，通常应偏向哪种取舍？

A. 优先可用性和分区容错，接受短暂不一致
B. 优先强一致并接受完全不可用
C. 关闭所有实例健康检查
D. 让消费者硬编码IP

### SPRING2-446（单选题）

消费者把实例列表缓存到本地后，仍需保留哪项机制？

A. 定期刷新或变更监听
B. 删除所有网络调用
C. 把实例永久写死
D. 关闭异常摘除

### SPRING2-449（单选题）

调用http://order-service/orders时，order-service最可能代表什么？

A. 注册中心中的逻辑服务名
B. 客户端本地文件名
C. 数据库表名
D. 网关过滤器ID

### SPRING2-451（单选题）

OpenFeign最主要解决哪类开发痛点？

A. 以声明式接口简化HTTP服务调用
B. 替代注册中心保存实例
C. 直接修改数据库表结构
D. 生成前端CSS

### SPRING2-452（单选题）

以下哪段代码体现了Feign的声明式服务契约？

~~~java
@FeignClient("order-service")
interface OrderClient {
  @GetMapping("/orders/{id}")
  Order get(@PathVariable Long id);
}
~~~

A. @FeignClient("order-service") interface OrderClient { @GetMapping("/orders/{id}") Order get(@PathVariable Long id); }
B. String url = "http://10.0.0.2/order";
C. System.out.println("order");
D. new Thread(() -> {}).start();

### SPRING2-455（单选题）

Gateway配置uri为lb://user-service，说明网关将如何寻找目标？

A. 通过服务发现和负载均衡选择user-service实例
B. 访问名为lb的本地文件
C. 直接连接固定IP
D. 把请求发给配置中心处理

### SPRING2-456（单选题）

健康检查将异常实例从列表中移除后，负载均衡器的直接收益是什么？

A. 减少请求发往故障节点的概率
B. 保证业务逻辑一定正确
C. 绕过所有权限校验
D. 自动提交分布式事务

### SPRING2-457（单选题）

负载均衡器选择实例前首先应排除哪类节点？

A. 被健康检查标记为不可用的节点
B. 响应最快的节点
C. 带有服务元数据的节点
D. 刚刚成功处理请求的节点

### SPRING2-458（单选题）

随机负载策略相对于轮询的一个特点是什么？

A. 不按固定顺序选择实例
B. 一定优先选择响应最快节点
C. 只支持单实例服务
D. 会自动提供事务回滚

### SPRING2-459（单选题）

Sentinel系统自适应保护可参考哪些运行指标？

A. CPU负载和内存水位
B. 代码注释数量
C. 接口命名风格
D. 用户昵称长度

### SPRING2-461（单选题）

Nacos配置中心主要解决哪种运维问题？

A. 集中管理多环境配置并支持动态更新
B. 把所有请求转成RPC
C. 替代代码版本控制
D. 自动设计数据库范式

### SPRING2-462（单选题）

生产环境将数据库密码放在配置中心时，最重要的配套措施是什么？

A. 按环境隔离并限制访问权限
B. 将密码打印到每条业务日志
C. 把密码放到URL路径中
D. 让所有匿名用户可编辑

### SPRING2-463（单选题）

配置中心支持版本回滚的直接价值是什么？

A. 错误配置发布后可快速恢复到已知版本
B. 代码会自动回滚到上一提交
C. 所有服务一定无需验证
D. 可以省略权限审计

### SPRING2-466（单选题）

课件提到传统Netflix OSS组件逐步转向哪类方案？

A. Spring Cloud Alibaba体系
B. 只使用JSP标签库
C. 只使用EJB容器
D. 放弃服务治理

### SPRING2-467（单选题）

Nacos临时实例因心跳超时被剔除后，最合理的解释是？

A. 注册中心将其视为异常实例，不再向消费者推荐
B. 实例的业务数据被自动删除
C. 所有服务都被强制重启
D. 配置中心永久删除了命名空间

### SPRING2-468（单选题）

Nacos通过Namespace和Group主要实现什么？

A. 多环境和配置分组隔离
B. 为每个请求分配线程
C. 替代HTTP协议
D. 压缩所有日志文件

### SPRING2-469（单选题）

Nacos配置动态推送中的长轮询，主要作用是什么？

A. 让客户端及时感知配置变更并重新拉取
B. 让客户端每秒无条件重启
C. 把配置写入业务订单表
D. 阻止所有配置回滚

### SPRING2-470（单选题）

临时实例和持久化实例的主要差异体现在哪方面？

A. 实例健康和注册数据的持久化语义
B. Java代码是否能编译
C. HTTP方法数量
D. 网关是否支持Path断言

### SPRING2-471（单选题）

注册中心集群部署的首要目标是什么？

A. 避免单点并提高服务治理可用性
B. 让业务代码不再需要异常处理
C. 保证每次读取都不产生网络开销
D. 取代所有业务数据库

### SPRING2-473（单选题）

Spring Cloud Gateway中Route由什么组成？

A. 唯一ID、目标URI、断言集合和过滤器链
B. 数据库表、索引和触发器
C. 线程池、锁和GC日志
D. 类名、方法名和字节码

### SPRING2-474（单选题）

Gateway Predicate的作用是什么？

A. 根据路径、方法或Header等条件判断是否匹配
B. 修改数据库事务隔离级别
C. 记录JVM堆快照
D. 注册服务实例

### SPRING2-475（单选题）

Gateway Filter通常可以完成哪类处理？

A. 请求改写、鉴权校验和日志记录
B. 编译Java源文件
C. 创建所有业务订单
D. 替换操作系统内核

### SPRING2-476（单选题）

路由配置StripPrefix=1的直观效果是什么？

A. 转发时移除请求路径的第一段前缀
B. 把请求复制一份发送两次
C. 强制启用随机负载均衡
D. 关闭所有后置过滤器

### SPRING2-477（单选题）

把鉴权放在Gateway前置过滤器的主要收益是什么？

A. 在请求进入后端服务前统一拦截非法访问
B. 让每个服务都必须复制同一套页面
C. 取消服务间通信
D. 避免所有日志记录

### SPRING2-478（单选题）

Gateway按Header或权重进行灰度分流，主要解决什么问题？

A. 让新旧版本平滑过渡并控制发布风险
B. 让所有请求永久固定到旧版本
C. 删除旧版本日志
D. 把配置中心变成本地文件

### SPRING2-479（单选题）

Gateway Route的唯一ID主要用于什么？

A. 标识和管理这条路由规则
B. 作为数据库主键自动建表
C. 代表下游实例IP
D. 替代所有断言条件

### SPRING2-487（单选题）

前置过滤器和后置过滤器的区别主要在于什么？

A. 执行时机分别位于转发前和响应后
B. 一个运行在数据库，一个运行在浏览器
C. 一个只处理配置，一个只处理代码
D. 二者都只能修改数据库

### SPRING2-489（单选题）

断路器在失败率超过阈值时进入打开状态，主要目的是什么？

A. 快速拒绝后续请求，阻断故障传播
B. 无限重试直到成功
C. 清空所有业务数据
D. 绕过鉴权直接访问下游

### SPRING2-490（单选题）

Sentinel可依据哪类指标触发熔断降级？

A. 慢调用、异常比例或异常数
B. 代码注释行数
C. 数据库表字段颜色
D. 用户头像尺寸

### SPRING2-491（单选题）

断路器统计异常比例时，统计对象通常是哪个范围？

A. 某个受保护资源或依赖调用
B. 所有用户的浏览器版本
C. 源码所有注释
D. 服务器机房名称

### SPRING2-492（单选题）

半开探测请求成功后，断路器通常会怎样？

A. 逐步恢复正常转发并闭合
B. 永久保持打开
C. 删除服务注册信息
D. 清空配置中心

### SPRING2-497（单选题）

Sentinel基于QPS或并发数限流，主要解决什么问题？

A. 削峰填谷，避免瞬时流量压垮服务
B. 自动生成服务接口
C. 集中管理Git提交
D. 替代所有数据库事务

### SPRING2-498（单选题）

对高频商品ID做热点参数限流，主要是在防护什么？

A. 单个热点参数被高频访问导致局部过载
B. 所有服务的版本号冲突
C. 配置文件的字符编码
D. JVM类加载顺序

### SPRING2-499（单选题）

令牌桶限流通常允许什么现象？

A. 在桶内有令牌时允许一定突发流量
B. 无限制接受所有突发流量
C. 只允许定时任务访问
D. 自动修改数据库索引

### SPRING2-500（单选题）

并发数限流更直接保护哪类资源？

A. 同时占用的线程和处理能力
B. 配置文件版本号
C. 服务名称长度
D. Git分支数量

### SPRING2-501（单选题）

服务降级的核心目标是什么？

A. 牺牲非核心功能，优先保持核心流程可用
B. 让所有非核心功能变成强一致事务
C. 把错误隐藏且不记录
D. 无限等待依赖恢复

### SPRING2-502（单选题）

商品详情的推荐模块不可用时，最合适的降级返回可能是？

A. 隐藏推荐并返回商品核心信息
B. 返回数据库密码
C. 阻塞整个商品页
D. 把错误堆栈当商品名称

### SPRING2-504（单选题）

课件建议多数商品、订单业务优先接受哪种一致性模型？

A. 最终一致性
B. 所有跨服务操作都使用长时间强一致事务
C. 完全不保存状态
D. 只依赖客户端缓存且不落库

### SPRING2-505（单选题）

在确需跨服务事务但又要降低长事务影响时，课件建议评估什么？

A. TCC或Saga等柔性事务模式
B. 把所有服务合并成一个Controller方法
C. 删除失败补偿
D. 无限增加数据库锁粒度

### SPRING2-506（单选题）

订单已创建但库存服务暂时不可用，适合的设计是？

A. 记录可靠事件并异步重试或补偿
B. 同步阻塞所有用户直到库存恢复
C. 静默丢弃订单事件
D. 直接把库存数据库暴露给网关

### SPRING2-511（单选题）

注册中心通过什么方式感知临时实例是否仍然存活？

A. 实例定时发送心跳
B. 消费者修改业务表
C. 网关随机猜测地址
D. 编译器扫描字节码

### SPRING2-512（单选题）

课件说明消费者通常会缓存实例列表，主要收益是什么？

A. 避免每次调用都远程查询注册中心
B. 让服务永远不会下线
C. 把所有请求改成数据库查询
D. 取消健康检查

### SPRING2-513（单选题）

Spring Cloud LoadBalancer的主要职责是什么？

A. 从多个可用实例中选择请求目标
B. 负责集中存储所有配置文本
C. 将异常转换成业务成功
D. 只负责采集日志

### SPRING2-514（单选题）

轮询策略最适合哪种实例集合？

A. 性能配置相近且希望均匀分发的同构实例
B. 只有一个实例且不允许切换
C. 响应时间差异极大的异构实例
D. 没有健康状态的任意地址

### SPRING2-515（单选题）

加权响应时间策略的核心依据是什么？

A. 实例历史响应时间等性能信息
B. 服务名称字母顺序
C. 源码文件大小
D. 客户端屏幕分辨率

### SPRING2-516（单选题）

在RestTemplate上添加@LoadBalanced通常表示什么？

A. 调用时使用服务名并交给客户端负载均衡解析
B. 把RestTemplate变成数据库连接池
C. 关闭所有实例健康检查
D. 强制所有请求走浏览器

### SPRING2-517（单选题）

Feign调用下游服务未设置超时，最可能引发什么风险？

A. 调用线程长期占用并放大级联阻塞
B. 请求一定立即成功
C. 注册中心自动修复业务错误
D. 所有异常都被转换为缓存命中

### SPRING2-518（单选题）

断路器半开状态通常用于做什么？

A. 试探性放行少量请求以判断依赖是否恢复
B. 永久拒绝所有请求
C. 绕过所有限流规则
D. 自动删除服务实例

### SPRING2-519（单选题）

下游响应从20ms变为2s后，同步上游最危险的连锁反应是？

A. 线程长期阻塞并最终耗尽线程池
B. 调用会自动变成异步
C. 所有请求都会被缓存
D. 注册中心立即删除业务代码

### SPRING2-520（单选题）

@SentinelResource中的fallback通常用于什么？

A. 指定资源发生异常或降级时的兜底逻辑
B. 声明注册中心地址
C. 定义Gateway路径断言
D. 生成数据库索引

### SPRING2-521（单选题）

结合@RefreshScope，配置变更后通常可以达到什么效果？

A. 相关Bean重新获取配置，无需重启整个服务
B. 所有Java类都被删除后重编译
C. 注册中心被关闭
D. 数据库连接永久断开

### SPRING2-522（单选题）

下列配置将请求 /api/users/42 转发到哪个逻辑服务？

~~~java
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
~~~

A. user-service
B. api
C. gateway
D. 42

### SPRING2-523（单选题）

在上题配置中，转发到user-service前StripPrefix=1后路径更可能变为？

~~~java
filters:
  - StripPrefix=1
~~~

A. /users/42
B. /api/users/42
C. /42
D. /api/

### SPRING2-524（单选题）

对一个会产生扣款动作的Feign调用配置重试时，必须优先考虑什么？

A. 幂等性和重复执行风险
B. 把重试次数设置为无限
C. 忽略超时和熔断
D. 每次失败都创建新订单

### SPRING2-525（单选题）

Feign方法参数需要绑定路径变量时，常使用哪个注解？

A. @PathVariable
B. @Bean
C. @Configuration
D. @Repository

### SPRING2-526（单选题）

Feign调用中查询参数通常使用哪个注解表达？

A. @RequestParam
B. @Autowired
C. @ComponentScan
D. @Import

### SPRING2-527（单选题）

如果提供者把/orders/{id}改为/purchases/{id}，Feign接口最需要同步什么？

A. 映射路径契约
B. 本地线程池名称
C. 客户端屏幕尺寸
D. Nacos命名空间显示名称

### SPRING2-528（单选题）

读取超时和连接超时都需要设置的原因是？

A. 分别限制建立连接和等待响应的时间
B. 让请求自动变成幂等
C. 使注册中心无需心跳
D. 让网关跳过鉴权

## 多选题

### SPRING2-429（多选题）

微服务架构通常具备哪些特征？

A. 服务独立部署
B. 围绕单一业务能力
C. 服务间通过轻量协议通信
D. 所有模块必须共享一个进程

### SPRING2-430（多选题）

相对于传统单体，微服务可能带来哪些收益？

A. 独立扩展
B. 局部故障隔离
C. 团队并行交付
D. 天然消除所有分布式复杂度

### SPRING2-431（多选题）

注册中心能够为微服务提供哪些基础能力？

A. 集中管理地址
B. 感知实例上下线
C. 支持故障转移基础
D. 自动修复任意业务Bug

### SPRING2-432（多选题）

关于微服务场景的CAP取舍，合理的有？

A. 分区容错是分布式系统必须面对的约束
B. 注册发现通常更关注可用性
C. 多数业务可以接受最终一致性
D. 任何金融和非金融场景都必须使用同一种一致性方案

### SPRING2-433（多选题）

微服务拆分时哪些做法更稳妥？

A. 先识别核心业务边界
B. 从单体验证业务后逐步拆分
C. 评估网络和运维成本
D. 为了追求数量而把每个类都拆成服务

### SPRING2-434（多选题）

微服务可观测性建设中，哪些信息具有定位价值？

A. TraceId或链路标识
B. 各服务响应耗时
C. 错误码和异常上下文
D. 只记录最终页面颜色

### SPRING2-435（多选题）

课件建议的微服务动手路线包含哪些阶段？

A. 容器化拉起Nacos
B. 构建Provider与Consumer
C. 通过Feign进行远程调用
D. 先做复杂分布式事务再验证服务注册

### SPRING2-436（多选题）

评价微服务方案时，哪些问题值得同时衡量？

A. 业务边界是否清晰
B. 网络调用和运维成本
C. 一致性与可用性取舍
D. 服务数量是否越多越先进

### SPRING2-441（多选题）

服务注册与发现链路通常包含哪些动作？

A. 提供者注册地址和元数据
B. 消费者拉取实例列表
C. 实例发送心跳续约
D. 消费者把IP永久硬编码

### SPRING2-442（多选题）

服务注册信息中通常可能包含哪些内容？

A. IP地址
B. 端口
C. 实例元数据
D. 用户界面CSS文件

### SPRING2-447（多选题）

发现调用偶发打到已下线实例时，排查方向包括哪些？

A. 检查心跳超时与摘除延迟
B. 检查消费者本地实例缓存刷新
C. 检查健康状态和网络分区
D. 直接把所有地址写死到代码

### SPRING2-448（多选题）

排查消费者发现不到服务时，哪些方向合理？

A. 服务名、Namespace和Group是否一致
B. 提供者是否成功注册并发送心跳
C. 网络和权限是否允许访问Nacos
D. 只检查消费者Controller代码格式

### SPRING2-450（多选题）

对于lb://user-service与Path=/api/users/**的配置，正确理解包括哪些？

A. 目标是逻辑服务user-service
B. Path断言限制匹配路径
C. 网关可结合注册中心选实例
D. lb://表示固定IP地址

### SPRING2-453（多选题）

使用OpenFeign相比手写RestTemplate模板代码，通常可以获得哪些收益？

A. 接口即契约
B. 减少URL拼接错误
C. 便于和服务发现及负载均衡整合
D. 自动保证下游业务永不失败

### SPRING2-454（多选题）

Feign接口设计中，哪些做法更利于维护？

A. 明确HTTP方法和路径
B. 使用@PathVariable等注解表达参数
C. 对错误和超时定义统一治理策略
D. 把服务地址散落在每个调用方法的字符串中

### SPRING2-460（多选题）

选择负载策略时应考虑哪些因素？

A. 实例性能是否同质
B. 是否希望严格均匀分发
C. 是否需要感知响应时间
D. 只看策略名字是否流行

### SPRING2-464（多选题）

Nacos配置中心支持哪些工程能力？

A. 集中化存储
B. Namespace/Group环境隔离
C. 配置版本追溯与回滚
D. 自动生成所有业务代码

### SPRING2-465（多选题）

集中化配置在生产环境还需要哪些安全措施？

A. 最小权限访问
B. 敏感配置脱敏和审计
C. 按环境隔离
D. 把管理控制台匿名暴露公网

### SPRING2-472（多选题）

课件强调Nacos的哪些能力？

A. 注册中心与配置中心一体化
B. 可视化管控台
C. 临时与持久化实例模式
D. 只能单机且不支持生态集成

### SPRING2-480（多选题）

Gateway一条Route的基础匹配定义通常包含哪些元素？

A. 唯一ID
B. 目标URI
C. Predicate断言集合
D. 数据库事务隔离级别

### SPRING2-481（多选题）

统一API网关常见的职责包括哪些？

A. 认证鉴权
B. 限流防刷
C. 访问日志和监控
D. 编写每个领域服务的核心算法

### SPRING2-482（多选题）

Gateway Predicate可以基于哪些条件匹配请求？

A. Path路径
B. HTTP Method
C. Header
D. 数据库订单金额字段（未在请求中提供）

### SPRING2-483（多选题）

Gateway Filter适合实现哪些横切逻辑？

A. 改写请求路径
B. 在响应阶段补充处理
C. 鉴权和审计
D. 直接替代订单服务的领域模型

### SPRING2-484（多选题）

网关作为统一入口时，哪些安全策略合理？

A. 统一校验Token和权限
B. 限制管理接口暴露范围
C. 记录访问审计
D. 把内部服务地址直接返回给匿名用户

### SPRING2-485（多选题）

Gateway配置中的uri、predicates和filters分别描述什么？

A. 目标地址
B. 匹配条件
C. 请求/响应处理
D. 数据库事务隔离级别

### SPRING2-486（多选题）

Gateway实现灰度发布时可以依据哪些条件？

A. Header
B. Cookie
C. 权重
D. 用户数据库密码

### SPRING2-488（多选题）

下列哪些属于课件列出的Spring Cloud治理方向？

A. 服务注册发现
B. API网关
C. 熔断限流
D. 前端图片裁剪

### SPRING2-493（多选题）

针对下游变慢导致的线程耗尽，哪些措施有助于防护？

A. 设置合理超时
B. 熔断快速失败
C. 对非核心功能降级
D. 让请求无限排队等待

### SPRING2-494（多选题）

Sentinel熔断降级机制的合理表述包括哪些？

A. 可按慢调用触发
B. 可按异常比例或异常数触发
C. 可保护不稳定依赖
D. 会自动修复下游业务逻辑

### SPRING2-495（多选题）

设计跨服务重试时，哪些条件应同时考虑？

A. 请求是否幂等
B. 超时和退避策略
C. 熔断和最大重试次数
D. 失败后无条件重复扣款

### SPRING2-496（多选题）

熔断或降级后，合理的用户体验可能包括哪些？

A. 返回缓存快照
B. 返回默认值
C. 提示稍后重试并保留核心功能
D. 直接展示完整堆栈和数据库连接串

### SPRING2-503（多选题）

下列哪些设计有助于避免非核心依赖拖垮核心流程？

A. 为依赖设置超时
B. 使用舱壁或线程池隔离
C. 为非核心功能提供缓存或默认值
D. 把所有依赖调用放在一个无限等待线程里

### SPRING2-507（多选题）

减少跨服务强一致事务的常见方式包括哪些？

A. 消息异步解耦
B. 补偿机制
C. TCC或Saga柔性事务
D. 把所有服务数据库账号设为同一个超级用户

### SPRING2-508（多选题）

生产环境设计Feign远程调用时，合理的治理措施包括哪些？

A. 设置连接和读取超时
B. 结合熔断或降级
C. 记录调用耗时和错误上下文
D. 失败后无限重试

### SPRING2-509（多选题）

Feign调用的容错设计可以包括哪些内容？

A. 连接/读取超时
B. 熔断和降级
C. 幂等重试
D. 无条件吞掉所有异常

### SPRING2-510（多选题）

配置灰度发布时，哪些做法更安全？

A. 先对小范围实例生效
B. 观察指标和错误率
C. 保留可回滚的版本
D. 直接让所有生产实例同时接收未经验证的配置

### SPRING2-529（多选题）

关于Spring Boot和Spring Cloud，正确的有？

A. Boot提供应用基础设施
B. Cloud提供分布式治理组件
C. Cloud通常建立在Spring生态之上
D. Boot会自动替代所有业务设计

### SPRING2-530（多选题）

关于实例心跳和健康检查，正确的有？

A. 心跳超时可触发实例摘除
B. 摘除后应避免继续向该实例转发流量
C. 健康检查能替代所有业务监控
D. 心跳只在编译期执行一次

### SPRING2-531（多选题）

Spring Cloud LoadBalancer可以支持哪些策略或能力？

A. 轮询
B. 随机选择
C. 按响应时间调整权重
D. 把所有请求固定到第一个实例

### SPRING2-532（多选题）

Sentinel可以从哪些维度进行流量治理？

A. QPS限流
B. 并发线程数限流
C. 热点参数限流
D. 修改Java语法树

### SPRING2-533（多选题）

为受保护资源设计fallback时，哪些返回方式是合理的？

A. 返回本地缓存快照
B. 返回稳定默认值
C. 给用户友好提示并记录上下文
D. 把异常堆栈直接返回公网

### SPRING2-534（多选题）

配置动态热刷新链路通常包含哪些步骤？

A. 服务启动时拉取配置
B. 客户端监听变更通知
C. 重新拉取并更新本地缓存
D. 必须停止全部实例后才能生效

### SPRING2-535（多选题）

在课件范围内，Spring Cloud组件之间的合理协作包括哪些？

A. Nacos提供注册发现和配置
B. Feign负责声明式调用
C. Sentinel负责流控熔断降级
D. Gateway负责持久化订单明细

### SPRING2-536（多选题）

课件示例中出现组件名称拼写异常时，命题应如何处理？

A. 不把明显拼写错误作为正确知识点
B. 按当前官方组件名称纠正
C. 在解析中说明纠错依据
D. 照抄错误拼写并要求学生记忆

### SPRING2-537（多选题）

完成一次Cloud实战后，哪些复盘内容有价值？

A. 故障传播路径
B. 限流和降级是否保护核心
C. 配置变更是否可追溯
D. 只统计写了多少行代码

### SPRING2-538（多选题）

声明式Feign接口中通常应明确哪些信息？

A. 目标服务名
B. HTTP方法和路径
C. 路径或查询参数绑定
D. 本地数据库索引定义

### SPRING2-539（多选题）

Sentinel规则可以围绕哪些对象制定？

A. 资源QPS
B. 并发数
C. 热点参数
D. 源代码缩进空格数

### SPRING2-540（多选题）

配置热更新的完整链路可能包括哪些环节？

A. 客户端初始拉取
B. 服务端变更通知
C. 客户端更新本地缓存
D. 每次变更都重新打包镜像

# 第6阶段：Spring Cloud Alibaba

## 单选题

### SPRING2-541（单选题）

Spring Cloud Alibaba的价值主要是？

A. 把Alibaba中间件能力接入Spring Cloud编程模型
B. 替代Spring Framework
C. 只提供前端组件
D. 只提供JVM

### SPRING2-542（单选题）

Spring Cloud Alibaba 2025.1.x配置Nacos时，官方不再推荐依赖什么？

A. Spring Cloud Bootstrap机制
B. spring.config.import
C. application.yml
D. 配置版本管理

### SPRING2-543（单选题）

Nacos配置导入的典型starter artifactId是？

A. spring-cloud-starter-alibaba-nacos-config
B. spring-boot-starter-nacos-web
C. nacos-spring-old-bootstrap
D. spring-cloud-starter-gateway-only

### SPRING2-544（单选题）

使用public空Namespace且升级到Spring Cloud Alibaba 2025.0.x时，官方提示还需关注什么？

A. Nacos Server 3.x兼容要求
B. 必须改用Eureka
C. 必须关闭所有配置刷新
D. 必须删除服务发现

### SPRING2-545（单选题）

同一键同时来自本地和远程配置时，命题时应优先依据什么？

A. 当前版本官方加载顺序和应用实际配置
B. 经验猜测
C. 配置文件字母顺序
D. 随机选择

### SPRING2-546（单选题）

Nacos配置的namespace与group同时变化时，客户端可能怎样？

A. 读取不到原配置，因为定位键已改变
B. 自动合并所有环境
C. 自动回退到任意配置
D. 只改变日志级别

### SPRING2-547（单选题）

Nacos服务发现starter的典型artifactId是？

A. spring-cloud-starter-alibaba-nacos-discovery
B. spring-cloud-starter-alibaba-nacos-config-only
C. nacos-client-test
D. spring-boot-discovery-jdbc

### SPRING2-548（单选题）

配置导入URL中refreshEnabled=true主要表达什么？

A. 允许该配置来源参与刷新
B. 关闭Nacos连接
C. 强制删除旧配置
D. 启用数据库事务

### SPRING2-549（单选题）

spring.cloud.nacos.discovery.server-addr主要配置什么？

A. Nacos Server地址
B. 业务服务端口
C. Gateway目标URI
D. RocketMQ消费者组

### SPRING2-550（单选题）

长轮询配置监听的直接价值是？

A. 变更时及时通知客户端而非高频空轮询
B. 每次变更都重启JVM
C. 自动创建Topic
D. 绕过认证

### SPRING2-551（单选题）

@EnableDiscoveryClient的典型作用是？

A. 启用服务注册与发现能力
B. 开启事务回滚
C. 开启Feign客户端扫描
D. 生成数据库Schema

### SPRING2-552（单选题）

配置中心中的dataId主要表达什么？

A. 一份配置数据的标识
B. 服务实例端口
C. 用户权限角色
D. Gateway断言类型

### SPRING2-553（单选题）

生产Nacos控制台的合理安全策略是？

A. 认证、最小权限和管理网络隔离
B. 匿名暴露到公网
C. 把密码写入dataId
D. 关闭所有审计

### SPRING2-554（单选题）

使用Namespace隔离开发与生产的核心收益是？

A. 减少配置和服务实例串环境
B. 自动提高QPS
C. 替代权限系统
D. 把服务变成单体

### SPRING2-555（单选题）

2025.0.x起Nacos模块HealthIndicator默认行为有何变化？

A. 默认关闭，需要显式开启
B. 默认永久开启且不能关闭
C. 只在JDK8开启
D. 只对Gateway有效

### SPRING2-556（单选题）

Nacos Group主要解决什么？

A. 对同一Namespace内配置或服务进行逻辑分组
B. 设置JVM堆大小
C. 替代Gateway断言
D. 定义Java包名

### SPRING2-557（单选题）

服务实例权重通常影响什么？

A. 负载均衡时的流量分配
B. 配置文件加密算法
C. 事务隔离级别
D. 日志格式

### SPRING2-565（单选题）

生产环境Sentinel规则不应只存在内存，通常还要考虑什么？

A. 规则持久化和变更审计
B. 把规则写入前端Cookie
C. 每次请求重新编译规则
D. 删除控制台

### SPRING2-566（单选题）

Sentinel入口流控和链路流控的主要差别是？

A. 后者可按调用入口区分同一资源
B. 前者只保护数据库
C. 后者只保护JVM
D. 二者都只看代码行数

### SPRING2-567（单选题）

Sentinel中的Resource名称主要用于什么？

A. 标识被保护的业务资源
B. 定义数据库连接串
C. 标识Git分支
D. 命名Nacos namespace

### SPRING2-568（单选题）

Sentinel QPS规则直接限制什么？

A. 单位时间内资源请求数
B. 单个请求体大小
C. 数据库表行数
D. 日志字符数

### SPRING2-569（单选题）

并发线程数规则更适合保护什么？

A. 同时执行资源的线程容量
B. 单日配置发布次数
C. HTTP Header长度
D. 数据库字段名称

### SPRING2-570（单选题）

热点参数规则相对普通QPS规则的优势是？

A. 可以针对特定参数值限流
B. 只限制网络带宽
C. 只能用于配置中心
D. 自动把热点数据写入数据库

### SPRING2-571（单选题）

Sentinel慢调用比例降级关注什么？

A. 调用耗时超过阈值的比例
B. 代码行数比例
C. 日志级别比例
D. 数据库表大小比例

### SPRING2-572（单选题）

异常比例规则主要根据什么判断？

A. 资源调用异常占比
B. CPU品牌占比
C. 用户地区占比
D. 服务名称长度

### SPRING2-578（单选题）

Seata AT模式更依赖什么机制？

A. 基于数据库日志和全局事务协调的自动补偿
B. 只依赖HTTP重定向
C. 只依赖前端缓存
D. 只依赖手工Excel

### SPRING2-579（单选题）

Saga模式的核心思想是？

A. 长流程拆成步骤并为已完成步骤提供补偿
B. 用一个全局锁锁住所有服务
C. 禁止任何异步操作
D. 只支持单表查询

### SPRING2-580（单选题）

Seata AT回滚依赖的undo log主要用于什么？

A. 保存回滚所需的前后镜像
B. 保存用户密码
C. 记录Gateway路由
D. 记录JVM堆栈

### SPRING2-585（单选题）

RocketMQ消费线程数配置不当可能导致什么？

A. 并发过高时下游或数据库被压垮
B. 消息自动变成有序
C. 所有消息只消费一次
D. 配置中心停止刷新

### SPRING2-586（单选题）

RocketMQ事务消息主要解决什么？

A. 本地事务与消息发送的一致性协调
B. HTTP静态资源压缩
C. 网关路径匹配
D. Bean作用域

### SPRING2-587（单选题）

消息消费失败时，合理的默认策略是什么？

A. 受控重试并最终进入死信或人工处理
B. 无限高速重试
C. 静默丢弃
D. 把失败标为成功

### SPRING2-588（单选题）

需要保证同一订单事件顺序时，通常应使用什么设计？

A. 让同一业务键路由到同一队列并顺序消费
B. 随机发到所有队列
C. 只看消息时间戳
D. 关闭消费确认

### SPRING2-589（单选题）

RocketMQ至少一次投递意味着消费者必须考虑什么？

A. 重复消息的幂等处理
B. 消息绝不会重复
C. 可以取消业务唯一键
D. 只在前端去重

### SPRING2-595（单选题）

升级Spring Cloud Alibaba前执行mvn dependency:tree的价值是？

A. 发现依赖版本冲突和传递依赖
B. 自动升级所有版本
C. 清空本地仓库
D. 创建Nacos namespace

### SPRING2-596（单选题）

Spring Cloud Alibaba版本选择时最应核对什么？

A. 与Spring Boot和Spring Cloud的兼容矩阵
B. 只看artifactId长度
C. 只看博客发布日期
D. 只看JDK厂商

### SPRING2-599（单选题）

从旧Bootstrap迁移到Config Data时，应优先验证什么？

A. 配置导入顺序、profile和刷新语义
B. 只改类名
C. 只改日志格式
D. 只改前端路由

## 多选题

### SPRING2-558（多选题）

从旧版本Nacos配置迁移时，正确的有？

A. 核对当前Alibaba版本
B. 关注Bootstrap到Config Data迁移
C. 验证刷新和优先级
D. 只改依赖版本不做运行验证

### SPRING2-559（多选题）

Nacos当前配置方式迁移中，正确的有？

A. 优先阅读当前版本Breaking Changes
B. 使用spring.config.import
C. 验证不再使用Bootstrap的启动链
D. 只改文件名不测启动

### SPRING2-560（多选题）

关于Nacos Config，正确的有？

A. 可通过starter接入
B. 可使用spring.config.import
C. 可以配置刷新
D. 不需要任何认证和权限

### SPRING2-561（多选题）

Nacos配置定位通常涉及哪些维度？

A. namespace
B. group
C. dataId
D. 随机线程名

### SPRING2-562（多选题）

Nacos配置安全治理包括？

A. namespace隔离
B. 账号权限
C. 配置审计
D. 匿名编辑生产配置

### SPRING2-563（多选题）

Nacos环境治理可使用哪些维度？

A. Namespace
B. Group
C. dataId
D. 把密码作为服务名

### SPRING2-564（多选题）

关于Nacos Discovery，正确的有？

A. 实例可注册地址和元数据
B. 消费者可以发现实例列表
C. 心跳用于健康感知
D. 发现后必须把IP永久写死

### SPRING2-573（多选题）

热点参数保护设计中，正确的有？

A. 识别高频参数值
B. 针对热点值设置更严阈值
C. 防止单个用户或商品拖垮服务
D. 把所有参数都视为热点并无限限流

### SPRING2-574（多选题）

Sentinel生产治理合理做法包括？

A. 规则持久化
B. 对热点参数限流
C. 为降级提供兜底
D. 无限重试被拒请求

### SPRING2-575（多选题）

Sentinel资源保护策略可组合哪些？

A. QPS限流
B. 并发限流
C. 异常比例降级
D. 让拒绝请求无限重试

### SPRING2-576（多选题）

Sentinel流控规则可以基于哪些维度？

A. QPS
B. 并发线程数
C. 热点参数
D. Git提交作者

### SPRING2-577（多选题）

Sentinel降级可以关注哪些信号？

A. 慢调用比例
B. 异常比例
C. 异常数
D. 代码注释行数

### SPRING2-581（多选题）

分布式事务补偿设计应包括？

A. 幂等
B. 状态机或业务状态记录
C. 失败重试和人工兜底
D. 把所有服务锁成一个长事务

### SPRING2-582（多选题）

选择Seata事务模式时应衡量哪些因素？

A. 一致性目标
B. 业务侵入性
C. 补偿复杂度和性能
D. 只看模式名称是否流行

### SPRING2-583（多选题）

Seata的事务模式各有不同取舍，正确的有？

A. AT降低业务侵入
B. TCC要求Try/Confirm/Cancel
C. Saga依赖补偿动作
D. 所有模式都不需要幂等

### SPRING2-584（多选题）

TCC补偿实现中，正确的有？

A. Try应可重入或幂等
B. Confirm和Cancel可能被重复调用
C. 需要记录业务状态
D. 把Cancel实现成无条件删除所有数据

### SPRING2-590（多选题）

事务消息设计中，正确的有？

A. 本地事务先执行并返回状态
B. Broker可通过回查确认未知状态
C. 消费者仍需幂等
D. 发送失败就静默丢弃

### SPRING2-591（多选题）

RocketMQ可靠消息消费需要哪些能力？

A. 消费重试
B. 死信或失败转移
C. 业务幂等
D. 把异常吞掉并确认成功

### SPRING2-592（多选题）

RocketMQ顺序消费设计中，正确的有？

A. 同一业务键路由到同一队列
B. 消费者按队列顺序处理
C. 并发扩展要保持分片语义
D. 把相关消息随机到任意队列

### SPRING2-593（多选题）

可靠RocketMQ消费者通常需要哪些措施？

A. 消费确认
B. 受控重试
C. 死信队列
D. 失败消息直接标记成功

### SPRING2-594（多选题）

RocketMQ重试治理应包括？

A. 重试间隔或退避
B. 最大重试次数
C. 死信处理
D. 失败立即无限并发重投

### SPRING2-597（多选题）

Alibaba组件升级前应做哪些准备？

A. 核对Release Train兼容性
B. 执行依赖树分析
C. 阅读迁移说明
D. 直接覆盖所有传递版本

### SPRING2-598（多选题）

Spring Cloud Alibaba生产落地应同时关注哪些方面？

A. Nacos配置与发现安全
B. Sentinel流量保护
C. Seata或RocketMQ的一致性策略
D. 只复制课件中的旧版本命令

### SPRING2-600（多选题）

Alibaba中间件生产治理中，正确的有？

A. 控制Nacos权限
B. 保护Sentinel控制台
C. 审计Seata/RocketMQ管理操作
D. 把管理端口匿名暴露公网
