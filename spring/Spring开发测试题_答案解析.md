# Spring & Spring Boot & Spring Cloud 500 题测试题 - 答案解析

> 与题目卷题号一一对应。解析中的课件页码用于复核命题依据；官方链接用于纠正课件中的明显笔误或旧写法。
> 逐题人工编写，脚本仅负责编号和格式导出。

## 命题口径

- 只考课件覆盖的知识范围，不以过时 API、拼写错误或错误示例作为正确答案。
- 发生版本差异时，以当前 Java SE 官方规范与 API 文档为纠错依据。
- 难度为“易/中/难”，仅在解析卷中展示。

# 第1讲：Spring 概述、核心包与 IoC/DI

## 单选题

### SPRING-001（单选题）

- **知识点**：Spring定位
- **难度**：易
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第3页
- **答案**：A

**解析：** Spring是轻量级、开源的Java企业级应用开发框架。其核心目标是简化企业应用开发并降低耦合。

**选项辨析：**

- A：正确。Spring用于Java企业级开发。
- B：错误。数据库系统不是Spring的定位。
- C：错误。Spring不是操作系统。
- D：错误。它也不是前端构建工具。

**官方参考：** Spring Framework Reference Documentation: Core Technologies

### SPRING-002（单选题）

- **知识点**：设计理念
- **难度**：易
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第3页
- **答案**：A

**解析：** IoC把对象创建和依赖管理交给容器，业务组件不必直接创建依赖，从而降低耦合。

**选项辨析：**

- A：正确。IoC正是解耦机制。
- B：错误。静态化不能解决依赖管理。
- C：错误。继承不是Spring解耦的核心。
- D：错误。配置存储位置与IoC无关。

**官方参考：** Spring Framework Reference Documentation: Core Technologies

### SPRING-003（单选题）

- **知识点**：设计理念
- **难度**：易
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第3页
- **答案**：A

**解析：** 日志、事务、权限等横跨多个业务模块的功能属于横切关注点，AOP将其集中管理。

**选项辨析：**

- A：正确。AOP处理横切关注点。
- B：错误。磁盘分区不是AOP职责。
- C：错误。词法分析属于编译器。
- D：错误。数据库索引不是AOP定义。

**官方参考：** Spring Framework Reference Documentation: Core Technologies

### SPRING-004（单选题）

- **知识点**：生态体系
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第4页
- **答案**：A

**解析：** Spring Data面向数据访问，Spring生态还包含Web、云原生和安全等方向。

**选项辨析：**

- A：正确。Spring Data面向数据访问。
- B：错误。Gateway主要是网关组件。
- C：错误。Shell用于命令行应用。
- D：错误。Security关注安全认证。

**官方参考：** Spring Framework Reference Documentation: Core Technologies

### SPRING-005（单选题）

- **知识点**：发展历史
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第4页
- **答案**：A

**解析：** 课件将2004年的Spring 1.0概括为确立IoC与AOP核心。

**选项辨析：**

- A：正确。这是1.0时间线描述。
- B：错误。WebFlux是后续版本能力。
- C：错误。JPA/MyBatis不是该时间点的Spring核心理念。
- D：错误。云原生编排并非1.0主题。

**官方参考：** Spring Framework Reference Documentation: Core Technologies

### SPRING-006（单选题）

- **知识点**：发展历史
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第4页
- **答案**：A

**解析：** 课件时间线将2007年的2.5版与注解驱动联系起来，减少XML冗余。

**选项辨析：**

- A：正确。2.5的关键是注解驱动。
- B：错误。Java 17对应Spring 6。
- C：错误。WebFlux对应Spring 5。
- D：错误。Boot 1.0是2014年。

**官方参考：** Spring Framework Reference Documentation: Core Technologies

### SPRING-007（单选题）

- **知识点**：发展历史
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第4页
- **答案**：A

**解析：** 课件指出2017年的Spring 5.0引入WebFlux响应式模型，以适配高并发场景。

**选项辨析：**

- A：正确。WebFlux是Spring 5的代表能力。
- B：错误。EJB不是此处演进点。
- C：错误。JSP标签库不是该版本重点。
- D：错误。RMI不是课件所述能力。

**官方参考：** Spring Framework Reference Documentation: Core Technologies

### SPRING-008（单选题）

- **知识点**：发展历史
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第4页
- **答案**：A

**解析：** 课件将2022年的Spring 6.0描述为基于Java 17重构，并支持AOT编译。

**选项辨析：**

- A：正确。课件明确写Java 17。
- B：错误。Java 6过旧。
- C：错误。Java 8不是该时间线答案。
- D：错误。Java 11也不是课件所述版本。

**官方参考：** Spring Framework Reference Documentation: Core Technologies

### SPRING-009（单选题）

- **知识点**：发展历史
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第4页
- **答案**：A

**解析：** 课件将Spring Boot 1.0和2014年、“约定大于配置”关联。

**选项辨析：**

- A：正确。2014年对应Boot 1.0。
- B：错误。2004年是Spring 1.0。
- C：错误。2017年是Spring 5。
- D：错误。2022年是Boot 3.0。

**官方参考：** Spring Framework Reference Documentation: Core Technologies

### SPRING-010（单选题）

- **知识点**：发展历史
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第4页
- **答案**：A

**解析：** 课件指出2022年的Boot 3.0基于Spring 6，原生支持Java 17。

**选项辨析：**

- A：正确。这是课件的版本对应关系。
- B：错误。版本和Java描述均不符。
- C：错误。Boot 3并非只支持XML。
- D：错误。EJB不是其基础。

**官方参考：** Spring Framework Reference Documentation: Core Technologies

### SPRING-011（单选题）

- **知识点**：核心价值
- **难度**：易
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第5页
- **答案**：A

**解析：** 直接new把具体实现写死在业务代码中，替换实现和单元测试都会更困难。

**选项辨析：**

- A：正确。硬编码依赖会造成强耦合。
- B：错误。new不会自动产生事务代理。
- C：错误。new不会触发Spring扫描。
- D：错误。配置生成与new无关。

**官方参考：** Spring Framework Reference Documentation: Core Technologies

### SPRING-012（单选题）

- **知识点**：核心价值
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第5页
- **答案**：A

**解析：** Spring提供成熟模板封装重复的基础代码，让开发者聚焦业务逻辑。

**选项辨析：**

- A：正确。模板降低样板代码。
- B：错误。业务规则仍由业务代码负责。
- C：错误。Spring不会自动设计所有表。
- D：错误。它不是编译器。

**官方参考：** Spring Framework Reference Documentation: Core Technologies

### SPRING-013（单选题）

- **知识点**：核心价值
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第5页
- **答案**：A

**解析：** 依赖可由容器装配，也可在测试中替换为Mock或其他实现，提升可测试性。

**选项辨析：**

- A：正确。解耦有利于测试和替换。
- B：错误。与JVM版本无关。
- C：错误。不会绕过类型检查。
- D：错误。接口仍可作为抽象边界。

**官方参考：** Spring Framework Reference Documentation: Core Technologies

### SPRING-014（单选题）

- **知识点**：核心包
- **难度**：易
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第6页
- **答案**：A

**解析：** core提供资源加载、类型转换、异常处理等通用能力，是上层模块的基础。

**选项辨析：**

- A：正确。core是底层基础包。
- B：错误。Web视图属于Web/MVC。
- C：错误。SQL执行不是core职责。
- D：错误。安全认证不是core职责。

**官方参考：** Spring Framework Reference Documentation: Core Technologies

### SPRING-015（单选题）

- **知识点**：核心包
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第6页
- **答案**：A

**解析：** beans包专注Bean生命周期、依赖解析和属性填充，是IoC的底层载体。

**选项辨析：**

- A：正确。这是beans的职责。
- B：错误。请求路径由Web组件处理。
- C：错误。响应式服务器不是beans。
- D：错误。国际化属于context能力。

**官方参考：** Spring Framework Reference Documentation: Core Technologies

### SPRING-016（单选题）

- **知识点**：核心包
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第7页
- **答案**：A

**解析：** context建立在beans之上，提供ApplicationContext、事件发布、国际化和资源加载等能力。

**选项辨析：**

- A：正确。context扩展了Bean容器能力。
- B：错误。不是基本类型库。
- C：错误。字节码增强不是其唯一职责。
- D：错误。数据库连接池不是核心定位。

**官方参考：** Spring Framework Reference Documentation: Core Technologies

### SPRING-017（单选题）

- **知识点**：核心包
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第7页
- **答案**：A

**解析：** web为Spring MVC和Spring WebFlux提供Web层基础支撑。

**选项辨析：**

- A：正确。web面向Web开发。
- B：错误。垃圾回收由JVM负责。
- C：错误。磁盘系统不是web包。
- D：错误。编译优化不是其职责。

**官方参考：** Spring Framework Reference Documentation: Core Technologies

### SPRING-018（单选题）

- **知识点**：核心包
- **难度**：难
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第7页
- **答案**：A

**解析：** 这些应用级服务由context提供；它建立在beans能力之上并形成ApplicationContext。

**选项辨析：**

- A：正确。context提供所列应用级服务。
- B：错误。beans是底层Bean管理。
- C：错误。web聚焦Web交互。
- D：错误。core是通用基础而非应用上下文。

**官方参考：** Spring Framework Reference Documentation: Core Technologies

### SPRING-019（单选题）

- **知识点**：IoC概念
- **难度**：易
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第8页
- **答案**：A

**解析：** IoC将对象创建、配置、装配和生命周期交给容器，而非业务代码主动控制。

**选项辨析：**

- A：正确。IoC关注对象控制权。
- B：错误。CPU调度由操作系统/JVM处理。
- C：错误。磁盘控制不是IoC。
- D：错误。HTTP协议不是IoC定义。

**官方参考：** Spring Framework Reference Documentation: Core Technologies

### SPRING-020（单选题）

- **知识点**：IoC概念
- **难度**：易
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第8页
- **答案**：A

**解析：** DI是IoC的具体实现方式之一，容器在初始化Bean时通过构造器、Setter或字段提供依赖。

**选项辨析：**

- A：正确。容器注入依赖是DI。
- B：错误。主动new与DI相反。
- C：错误。数据库表与DI无关。
- D：错误。编译器不会删除依赖。

**官方参考：** Spring Framework Reference Documentation: Core Technologies

### SPRING-021（单选题）

- **知识点**：IoC概念
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第8页
- **答案**：A

**解析：** 好莱坞原则强调应用不主动索取控制，容器在合适时机调用或注入对象。

**选项辨析：**

- A：正确。它是IoC的通俗表达。
- B：错误。与事务隔离无关。
- C：错误。不是线程池策略。
- D：错误。不是编译器优化。

**官方参考：** Spring Framework Reference Documentation: Core Technologies

### SPRING-022（单选题）

- **知识点**：IoC与DI
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第8页
- **答案**：D

**解析：** 课件列出构造器、Setter和字段注入；数据库触发器不属于Spring DI方式。

**选项辨析：**

- A：错误。构造器是常用方式。
- B：错误。Setter是常用方式。
- C：错误。字段可通过@Autowired注入。
- D：正确。数据库触发器不是依赖注入方式。

**官方参考：** Spring Framework Reference Documentation: Core Technologies

### SPRING-023（单选题）

- **知识点**：IoC实现
- **难度**：易
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **答案**：A

**解析：** 课件示例用<bean>声明对象，并用<property>配置引用。

**选项辨析：**

- A：正确。<bean>是XML Bean声明元素。
- B：错误。<component>不是该XML示例元素。
- C：错误。<service>不是Spring Bean XML元素。
- D：错误。<inject>不是该配置语法。

**官方参考：** Spring Framework Reference Documentation: Core Technologies

### SPRING-024（单选题）

- **知识点**：IoC实现
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **答案**：A

**解析：** @Bean用于配置类的方法声明由容器管理的对象实例。

**选项辨析：**

- A：正确。@Bean声明配置方法产生的Bean。
- B：错误。@Entity属于持久化模型语义。
- C：错误。@Mapper面向MyBatis。
- D：错误。@Test用于测试方法。

**官方参考：** Spring Framework Reference Documentation: Core Technologies

### SPRING-025（单选题）

- **知识点**：IoC实现
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **答案**：A

**解析：** @Configuration表明类是配置类，通常与@Bean方法配合使用。

**选项辨析：**

- A：正确。@Configuration是配置类标识。
- B：错误。其余名称不是课件注解。
- C：错误。其余名称不是课件注解。
- D：错误。其余名称不是课件注解。

**官方参考：** Spring Framework Reference Documentation: Core Technologies

### SPRING-026（单选题）

- **知识点**：IoC实现
- **难度**：难
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **答案**：A

**解析：** 课件强调JavaConfig通过代码配置并具备编译期类型安全；它仍然依赖Spring容器。

**选项辨析：**

- A：正确。类型安全是主要收益。
- B：错误。JavaConfig仍使用容器。
- C：错误。不会绕过Java访问控制。
- D：错误。Bean作用域不会因此全部固定。

**官方参考：** Spring Framework Reference Documentation: Core Technologies

### SPRING-027（单选题）

- **知识点**：组件注解
- **难度**：易
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第10页
- **答案**：A

**解析：** 被@Component标注的类可被组件扫描发现并纳入IoC容器。

**选项辨析：**

- A：正确。@Component是通用组件标识。
- B：错误。数据库表通常用实体映射。
- C：错误。请求路径由Web注解定义。
- D：错误。测试使用@Test等注解。

**官方参考：** Spring Framework Reference Documentation: Core Technologies

### SPRING-028（单选题）

- **知识点**：组件注解
- **难度**：易
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第10页
- **答案**：A

**解析：** @Service是@Component的业务层特化注解，用于表达服务组件语义。

**选项辨析：**

- A：正确。@Service表示业务服务。
- B：错误。数据表不是@Service语义。
- C：错误。网络传输层不是其专属语义。
- D：错误。配置类通常用@Configuration。

**官方参考：** Spring Framework Reference Documentation: Core Technologies

### SPRING-029（单选题）

- **知识点**：组件注解
- **难度**：易
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第10页
- **答案**：A

**解析：** @Repository表达DAO/数据访问层语义，并可参与持久化异常转换。

**选项辨析：**

- A：正确。Repository用于数据访问。
- B：错误。控制器使用Web层注解。
- C：错误。配置类用@Configuration。
- D：错误。表达式不是Bean层注解。

**官方参考：** Spring Framework Reference Documentation: Core Technologies

### SPRING-030（单选题）

- **知识点**：组件注解
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第10页
- **答案**：A

**解析：** @Repository可让持久化异常转换到统一的DataAccessException体系，便于上层处理。

**选项辨析：**

- A：正确。异常转换是其额外语义。
- B：错误。不会自动创建所有表。
- C：错误。不会把所有异常都变成Error。
- D：错误。不会自动生成REST接口。

**官方参考：** Spring Framework Reference Documentation: Core Technologies

### SPRING-031（单选题）

- **知识点**：自动装配
- **难度**：易
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第10页
- **答案**：A

**解析：** 课件将@Autowired概括为按类型自动匹配并注入依赖对象。

**选项辨析：**

- A：正确。按类型是核心规则。
- B：错误。方法名不是默认核心依据。
- C：错误。数据库主键无关。
- D：错误。源码行号无关。

**官方参考：** Spring Framework Reference Documentation: Core Technologies

### SPRING-032（单选题）

- **知识点**：项目结构
- **难度**：易
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第10页
- **答案**：A

**解析：** 课件建议在src/main/java中按模块或功能分包放置Java源码。

**选项辨析：**

- A：正确。Java源码位于该目录。
- B：错误。数据库文件不属于通用源码目录。
- C：错误。Maven缓存另有位置。
- D：错误。字节码通常在target中。

**官方参考：** Spring Framework Reference Documentation: Core Technologies

### SPRING-033（单选题）

- **知识点**：项目结构
- **难度**：易
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第10页
- **答案**：A

**解析：** application.yml等配置、静态资源和i18n文件通常放在resources目录。

**选项辨析：**

- A：正确。resources用于资源文件。
- B：错误。Java源码在main/java。
- C：错误。依赖索引不放这里。
- D：错误。驱动不属于该目录职责。

**官方参考：** Spring Framework Reference Documentation: Core Technologies

### SPRING-034（单选题）

- **知识点**：项目结构
- **难度**：易
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第10页
- **答案**：A

**解析：** pom.xml是Maven依赖管理和构建配置的核心文件。

**选项辨析：**

- A：正确。依赖和构建是pom职责。
- B：错误。用户数据应由数据库等保存。
- C：错误。HTTP路由由Web代码配置。
- D：错误。字节码不存放在pom中。

**官方参考：** Spring Framework Reference Documentation: Core Technologies

### SPRING-035（单选题）

- **知识点**：注入方式
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第11页
- **答案**：A

**解析：** 构造器注入在实例化时提供依赖，适合表达不可缺少的协作对象。

**选项辨析：**

- A：正确。创建时获得依赖是特点。
- B：错误。不必限定使用字段反射。
- C：错误。可注入任意可解析类型。
- D：错误。接口类型正适合解耦。

**官方参考：** Spring Framework Reference Documentation: Core Technologies

### SPRING-036（单选题）

- **知识点**：注入方式
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第11页
- **答案**：A

**解析：** Setter允许对象先创建再设置依赖，常用于可选或可调整的协作对象。

**选项辨析：**

- A：正确。Setter适合可选依赖。
- B：错误。其余描述与DI无关。
- C：错误。主键不是注入类别。
- D：错误。响应头不是依赖注入概念。

**官方参考：** Spring Framework Reference Documentation: Core Technologies

### SPRING-037（单选题）

- **知识点**：注入方式
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第11页
- **答案**：A

**解析：** 课件示例在字段上使用@Autowired，容器据此解析并设置依赖。

**选项辨析：**

- A：正确。@Autowired可用于字段注入。
- B：错误。@Override用于方法重写检查。
- C：错误。@Deprecated表示弃用。
- D：错误。@Target声明注解适用位置。

**官方参考：** Spring Framework Reference Documentation: Core Technologies

### SPRING-038（单选题）

- **知识点**：Bean管理
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第12页
- **答案**：A

**解析：** beans包和容器会负责Bean实例化、依赖解析、属性填充以及销毁等过程。

**选项辨析：**

- A：正确。这是Bean生命周期管理。
- B：错误。编译不是容器生命周期。
- C：错误。网络传输不是Bean管理核心。
- D：错误。索引不是Bean生命周期步骤。

**官方参考：** Spring Framework Reference Documentation: Core Technologies

### SPRING-039（单选题）

- **知识点**：Bean管理
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第12页
- **答案**：A

**解析：** context在beans能力之上扩展事件、国际化、资源加载等应用上下文服务。

**选项辨析：**

- A：正确。这是二者层次关系。
- B：错误。ApplicationContext不是语言替代品。
- C：错误。beans不是HTTP组件。
- D：错误。两者有明确依赖关系。

**官方参考：** Spring Framework Reference Documentation: Core Technologies

### SPRING-040（单选题）

- **知识点**：Bean生命周期
- **难度**：难
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第12页
- **答案**：A

**解析：** 容器注入让依赖关系可配置、可替换，避免业务代码与具体实现绑定。

**选项辨析：**

- A：正确。容器注入符合IoC。
- B：错误。重复new会增加耦合。
- C：错误。字符串不能替代对象协作。
- D：错误。接口有助于解耦。

**官方参考：** Spring Framework Reference Documentation: Core Technologies

### SPRING-041（单选题）

- **知识点**：组件扫描
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第12页
- **答案**：A

**解析：** 组件扫描负责发现带组件语义的类并注册到容器，之后可参与依赖注入。

**选项辨析：**

- A：正确。注册Bean是扫描结果。
- B：错误。不会编译机器码。
- C：错误。不会删除构造器。
- D：错误。不会转换数据库表。

**官方参考：** Spring Framework Reference Documentation: Core Technologies

### SPRING-042（单选题）

- **知识点**：组件扫描
- **难度**：难
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第12页
- **答案**：A

**解析：** @Bean方法是显式声明Bean的方式，不要求返回类本身带@Component。

**选项辨析：**

- A：正确。@Bean可显式注册对象。
- B：错误。不要求@Component。
- C：错误。与静态变量无关。
- D：错误。与HTTP请求无关。

**官方参考：** Spring Framework Reference Documentation: Core Technologies

### SPRING-043（单选题）

- **知识点**：配置演进
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第13页
- **答案**：A

**解析：** 课件将三者概括为从外部化配置到零配置再到类型安全配置的演进。

**选项辨析：**

- A：正确。这是课件的演进结论。
- B：错误。并非依赖EJB。
- C：错误。JavaConfig强调类型安全。
- D：错误。配置不要求放数据库。

**官方参考：** Spring Framework Reference Documentation: Core Technologies

### SPRING-044（单选题）

- **知识点**：配置演进
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第13页
- **答案**：A

**解析：** JavaConfig支持代码表达复杂条件逻辑，并具有编译期类型检查优势。

**选项辨析：**

- A：正确。JavaConfig适合条件配置。
- B：错误。巨型XML可维护性差。
- C：错误。业务new会加耦。
- D：错误。环境变量仍需规范配置。

**官方参考：** Spring Framework Reference Documentation: Core Technologies

### SPRING-045（单选题）

- **知识点**：设计对比
- **难度**：难
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第13页
- **答案**：A

**解析：** 依赖由容器装配后，测试可以注入Mock，隔离真实数据库等外部资源。

**选项辨析：**

- A：正确。Mock替换体现可测试性。
- B：错误。private化不能解决依赖。
- C：错误。静态单例反而难替换。
- D：错误。生产数据库会降低测试隔离。

**官方参考：** Spring Framework Reference Documentation: Core Technologies

## 多选题

### SPRING-046（多选题）

- **知识点**：Spring定位
- **难度**：易
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第3页
- **答案**：A、B、C

**解析：** 课件把Spring描述为覆盖Web、云原生和数据访问等生态体系。

**选项辨析：**

- A：正确。MVC属于Web方向。
- B：正确。Cloud属于云原生方向。
- C：正确。Data属于数据访问。
- D：错误。Spring并没有课件所述的Random生态方向。

**官方参考：** Spring Framework Reference Documentation: Core Technologies

### SPRING-047（多选题）

- **知识点**：设计理念
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第5页
- **答案**：A、B、C

**解析：** 依赖由容器装配可以降低耦合、替换实现并注入Mock；它不要求业务类继承容器基类。

**选项辨析：**

- A：正确。降低耦合是IoC目标。
- B：正确。可配置依赖便于替换。
- C：正确。Mock注入提升测试性。
- D：错误。非侵入式设计不要求继承容器基类。

**官方参考：** Spring Framework Reference Documentation: Core Technologies

### SPRING-048（多选题）

- **知识点**：发展历史
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第4页
- **答案**：A、B、C

**解析：** 前三项对应课件给出的Spring Framework演进节点，Boot 3属于Spring Boot时间线。

**选项辨析：**

- A：正确。2004年1.0对应IoC/AOP。
- B：正确。2007年2.5对应注解。
- C：正确。2017年5.0对应WebFlux。
- D：错误。Boot 3不是Spring Framework 6.0的该项表述。

**官方参考：** Spring Framework Reference Documentation: Core Technologies

### SPRING-049（多选题）

- **知识点**：核心价值
- **难度**：易
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第5页
- **答案**：A、B、C

**解析：** 课件举例说明Spring模板覆盖JDBC、事务和Web等场景，减少样板代码。

**选项辨析：**

- A：正确。JDBC是模板场景。
- B：正确。事务是模板场景。
- C：正确。Web开发也有成熟模板。
- D：错误。内核调度不属于Spring模板。

**官方参考：** Spring Framework Reference Documentation: Core Technologies

### SPRING-050（多选题）

- **知识点**：核心包
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第6页
- **答案**：A、B、C

**解析：** core提供底层通用工具和基础设施；Bean分层语义由组件注解表达。

**选项辨析：**

- A：正确。资源加载属于core。
- B：正确。类型转换属于core。
- C：正确。异常处理属于core通用能力。
- D：错误。Bean业务语义不是core职责。

**官方参考：** Spring Framework Reference Documentation: Core Technologies

### SPRING-051（多选题）

- **知识点**：核心包
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第6页
- **答案**：A、B、C

**解析：** beans是IoC核心，负责Bean的实例化、属性填充和依赖解析等。

**选项辨析：**

- A：正确。实例化属于beans。
- B：正确。属性填充属于beans。
- C：正确。依赖解析属于beans。
- D：错误。HTTP视图渲染属于Web层。

**官方参考：** Spring Framework Reference Documentation: Core Technologies

### SPRING-052（多选题）

- **知识点**：应用上下文
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第7页
- **答案**：A、B、C

**解析：** context在Bean管理基础上提供事件、国际化和资源加载等服务，编译由构建工具完成。

**选项辨析：**

- A：正确。事件是context能力。
- B：正确。国际化是context能力。
- C：正确。资源加载是context能力。
- D：错误。编译源码不属于ApplicationContext。

**官方参考：** Spring Framework Reference Documentation: Core Technologies

### SPRING-053（多选题）

- **知识点**：Web模块
- **难度**：易
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第7页
- **答案**：A、B

**解析：** 课件将Spring MVC和Spring WebFlux列为web模块的两大核心框架。

**选项辨析：**

- A：正确。MVC是Servlet Web框架。
- B：正确。WebFlux是响应式Web框架。
- C：错误。Data属于数据访问方向。
- D：错误。Security属于安全方向。

**官方参考：** Spring Framework Reference Documentation: Core Technologies

### SPRING-054（多选题）

- **知识点**：IoC概念
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第8页
- **答案**：A、B、C

**解析：** IoC把对象创建、配置、装配和生命周期从业务代码转移到容器。

**选项辨析：**

- A：正确。创建由容器负责。
- B：正确。配置装配由容器协作。
- C：正确。生命周期由容器管理。
- D：错误。前端布局不属于IoC。

**官方参考：** Spring Framework Reference Documentation: Core Technologies

### SPRING-055（多选题）

- **知识点**：DI方式
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第8页
- **答案**：A、B、C

**解析：** 构造器、Setter和字段是课件列出的DI方式；数据库触发器不是对象注入方式。

**选项辨析：**

- A：正确。构造器可注入。
- B：正确。Setter可注入。
- C：正确。字段可注入。
- D：错误。触发器不属于DI。

**官方参考：** Spring Framework Reference Documentation: Core Technologies

### SPRING-056（多选题）

- **知识点**：IoC实现
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **答案**：A、B、C

**解析：** 课件介绍XML、注解和JavaConfig三种方式；Cookie不是容器配置机制。

**选项辨析：**

- A：正确。XML可定义Bean。
- B：正确。注解可扫描组件。
- C：正确。JavaConfig可用@Configuration/@Bean。
- D：错误。Cookie不负责注册Bean。

**官方参考：** Spring Framework Reference Documentation: Core Technologies

### SPRING-057（多选题）

- **知识点**：注解配置
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第10页
- **答案**：A、B、C

**解析：** 前三个注解用于组件注册或分层语义；课件没有@RandomConfig。

**选项辨析：**

- A：正确。Component是通用组件。
- B：正确。Service是业务组件。
- C：正确。Repository是数据访问组件。
- D：错误。@RandomConfig不是课件中的Spring注解。

**官方参考：** Spring Framework Reference Documentation: Core Technologies

### SPRING-058（多选题）

- **知识点**：自动装配
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第10页
- **答案**：A、B、C

**解析：** 课件强调@Autowired按类型自动匹配，常用于字段等位置，减少手动创建依赖。

**选项辨析：**

- A：正确。按类型是核心规则。
- B：正确。字段注入是常见用法。
- C：正确。自动装配减少样板代码。
- D：错误。它并非只能注入基本类型。

**官方参考：** Spring Framework Reference Documentation: Core Technologies

### SPRING-059（多选题）

- **知识点**：项目结构
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第10页
- **答案**：A、B、C

**解析：** 课件列出的目录约定将源码、资源和Maven配置分工放置。

**选项辨析：**

- A：正确。Java源码在main/java。
- B：正确。资源在main/resources。
- C：正确。pom.xml管理依赖和生命周期。
- D：错误。编译产物通常不放源码目录。

**官方参考：** Spring Framework Reference Documentation: Core Technologies

### SPRING-060（多选题）

- **知识点**：Bean生命周期
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第12页
- **答案**：A、B、C

**解析：** 容器负责Bean从实例化、装配到销毁的生命周期；浏览器渲染不属于Bean生命周期。

**选项辨析：**

- A：正确。实例化是起点。
- B：正确。依赖解析和属性填充属于装配。
- C：正确。销毁是生命周期末端。
- D：错误。浏览器渲染属于前端。

**官方参考：** Spring Framework Reference Documentation: Core Technologies

### SPRING-061（多选题）

- **知识点**：JavaConfig
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **答案**：A、B、C

**解析：** JavaConfig把配置写在Java类中，获得类型检查并能表达复杂条件；仍由Spring容器执行。

**选项辨析：**

- A：正确。代码集中是特点。
- B：正确。编译器可检查类型。
- C：正确。条件逻辑表达更灵活。
- D：错误。仍需要容器管理Bean。

**官方参考：** Spring Framework Reference Documentation: Core Technologies

### SPRING-062（多选题）

- **知识点**：组件语义
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第10页
- **答案**：A、B、C

**解析：** 三个注解都建立在组件语义上，但Service和Repository分别表达业务与数据层；并非只能标记配置类。

**选项辨析：**

- A：正确。Service表达业务层。
- B：正确。Repository表达DAO层。
- C：正确。带注解类可参与扫描。
- D：错误。它们不是配置类专用。

**官方参考：** Spring Framework Reference Documentation: Core Technologies

### SPRING-063（多选题）

- **知识点**：设计取舍
- **难度**：难
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第11页
- **答案**：A、B、C

**解析：** 三种注入都由容器提供依赖；构造器适合必需依赖，Setter可表达可选依赖，字段注入简洁但隐藏依赖。

**选项辨析：**

- A：正确。构造器能保证必需依赖。
- B：正确。Setter在创建后设置。
- C：正确。字段注入减少显式代码。
- D：错误。容器注入不要求方法内new。

**官方参考：** Spring Framework Reference Documentation: Core Technologies

### SPRING-064（多选题）

- **知识点**：应用上下文
- **难度**：难
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第7页
- **答案**：A、B、C

**解析：** context建立在beans之上，扩展事件、国际化、资源和应用环境等企业服务。

**选项辨析：**

- A：正确。事件是扩展能力。
- B：正确。国际化是扩展能力。
- C：正确。资源和环境是扩展能力。
- D：错误。并非只增加SQL执行器。

**官方参考：** Spring Framework Reference Documentation: Core Technologies

### SPRING-065（多选题）

- **知识点**：发展历史
- **难度**：难
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第4页
- **答案**：A、B、C

**解析：** 课件时间线列出Boot 1.0（2014）、2.0（2018）和3.0（2022）的对应关系。

**选项辨析：**

- A：正确。2014年是Boot 1.0。
- B：正确。2018年Boot 2.0适配Spring 5。
- C：正确。2022年Boot 3.0基于Spring 6、Java 17。
- D：错误。2004年是Spring Framework 1.0，不是Boot。

**官方参考：** Spring Framework Reference Documentation: Core Technologies

### SPRING-066（多选题）

- **知识点**：解耦设计
- **难度**：难
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第5页
- **答案**：A、B、C

**解析：** 接口、注入和Mock替换都降低业务与具体实现的绑定；方法内new会重新引入硬编码依赖。

**选项辨析：**

- A：正确。接口隔离具体实现。
- B：正确。构造器注入显式表达依赖。
- C：正确。Mock替换便于测试。
- D：错误。方法内new会加耦。

**官方参考：** Spring Framework Reference Documentation: Core Technologies

### SPRING-067（多选题）

- **知识点**：核心包
- **难度**：难
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第6页
- **答案**：A、B、C

**解析：** 三者形成从通用基础到Bean管理再到应用上下文的层次；HTTP请求由web模块处理。

**选项辨析：**

- A：正确。core是基础。
- B：正确。beans是IoC核心。
- C：正确。context是应用层运行中枢。
- D：错误。HTTP请求不是三者共同职责。

**官方参考：** Spring Framework Reference Documentation: Core Technologies

### SPRING-068（多选题）

- **知识点**：注解扫描
- **难度**：难
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第10页
- **答案**：A、B、C

**解析：** 扫描针对带组件语义的类（包括其特化注解），不会把任意未标记类全部注册。

**选项辨析：**

- A：正确。Component可被发现。
- B：正确。Service可被发现。
- C：正确。Repository可被发现。
- D：错误。未标记类不会无条件全部注册。

**官方参考：** Spring Framework Reference Documentation: Core Technologies

### SPRING-069（多选题）

- **知识点**：Bean定义
- **难度**：难
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **答案**：A、B、C

**解析：** @Bean适合显式构造和组装对象，尤其适用于第三方类；不要求返回类标@Repository。

**选项辨析：**

- A：正确。返回值注册为Bean。
- B：正确。配置类常承载@Bean。
- C：正确。可组装第三方对象。
- D：错误。Repository不是必要条件。

**官方参考：** Spring Framework Reference Documentation: Core Technologies

### SPRING-070（多选题）

- **知识点**：设计哲学
- **难度**：难
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第3页
- **答案**：A、B、C

**解析：** IoC和模板等机制共同降低耦合、减少样板代码并提升维护性；生命周期由容器负责。

**选项辨析：**

- A：正确。降低耦合是目标。
- B：正确。模板简化开发。
- C：正确。解耦有利于维护。
- D：错误。业务代码不承担全部生命周期。

**官方参考：** Spring Framework Reference Documentation: Core Technologies

### SPRING-071（多选题）

- **知识点**：依赖关系
- **难度**：难
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第8页
- **答案**：A、B、C

**解析：** 容器装配让依赖关系配置化、动态化并易于替换和测试。

**选项辨析：**

- A：正确。依赖可配置。
- B：正确。实现可动态替换。
- C：正确。Mock注入利于测试。
- D：错误。硬编码与DI目标相反。

**官方参考：** Spring Framework Reference Documentation: Core Technologies

### SPRING-072（多选题）

- **知识点**：Bean作用域
- **难度**：难
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第12页
- **答案**：A、B、C

**解析：** 容器可以统一管理对象创建、装配和生命周期，但不能替业务保证逻辑正确性。

**选项辨析：**

- A：正确。创建统一管理。
- B：正确。依赖集中装配。
- C：正确。销毁属于生命周期。
- D：错误。业务正确性仍需代码和测试保证。

**官方参考：** Spring Framework Reference Documentation: Core Technologies

### SPRING-073（多选题）

- **知识点**：Spring生态
- **难度**：难
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第4页
- **答案**：A、B、C

**解析：** Spring通过IoC/AOP、Web和Boot等模块持续演进，形成覆盖企业场景的轻量生态。

**选项辨析：**

- A：正确。核心容器是基础。
- B：正确。模块化生态扩大覆盖面。
- C：正确。解耦和模板降低成本。
- D：错误。课件强调摆脱重型EJB，而非依赖它。

**官方参考：** Spring Framework Reference Documentation: Core Technologies

### SPRING-074（多选题）

- **知识点**：配置比较
- **难度**：难
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第13页
- **答案**：A、B、C

**解析：** XML、注解和JavaConfig都能表达Bean及依赖关系，区别在于外部化、贴近代码和类型安全等取舍。

**选项辨析：**

- A：正确。XML与代码物理分离。
- B：正确。注解提高效率但更贴近代码。
- C：正确。JavaConfig有编译期类型优势。
- D：错误。三者都能表达依赖关系。

**官方参考：** Spring Framework Reference Documentation: Core Technologies

### SPRING-075（多选题）

- **知识点**：应用能力
- **难度**：难
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第7页
- **答案**：A、B、C

**解析：** ApplicationContext是应用上下文，整合Bean生命周期、事件、国际化等企业能力。

**选项辨析：**

- A：正确。它管理Bean生命周期。
- B：正确。事件可促进模块协作。
- C：正确。国际化属于context能力。
- D：错误。它不替代数据库。

**官方参考：** Spring Framework Reference Documentation: Core Technologies

# 第2讲：AOP、生态集成与 Spring MVC

## 单选题

### SPRING-076（单选题）

- **知识点**：AOP 基本概念
- **难度**：易
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A

**解析：** 切面封装横切关注点及其通知、切点配置。

**选项辨析：**

- A：正确。切面用于集中表达横切逻辑。
- B：错误。实体描述业务数据。
- C：错误。仓储负责数据访问抽象。
- D：错误。DTO 用于数据传输。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf

### SPRING-077（单选题）

- **知识点**：AOP 基本概念
- **难度**：易
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A

**解析：** AOP 将日志、权限、事务等横切逻辑与核心业务解耦。

**选项辨析：**

- A：正确。这是 AOP 的核心价值。
- B：错误。不属于 AOP 职责。
- C：错误。属于前端标记问题。
- D：错误。属于网络基础设施问题。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf

### SPRING-078（单选题）

- **知识点**：切点
- **难度**：易
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A

**解析：** 切点定义连接点的匹配范围。

**选项辨析：**

- A：正确。切点表达式决定匹配的方法集合。
- B：错误。Bean 名称不能单独表达方法匹配规则。
- C：错误。环境变量用于配置。
- D：错误。资源路径不是 AOP 匹配表达式。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf

### SPRING-079（单选题）

- **知识点**：通知
- **难度**：易
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A

**解析：** @Before 标注的方法会在目标方法执行前调用。

**选项辨析：**

- A：正确。前置通知先于目标方法。
- B：错误。返回通知在成功返回后执行。
- C：错误。异常通知在抛出异常时执行。
- D：错误。最终通知在方法结束时执行。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf

### SPRING-080（单选题）

- **知识点**：通知
- **难度**：易
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A

**解析：** @AfterReturning 只在目标方法正常完成后触发。

**选项辨析：**

- A：正确。用于处理正常返回结果。
- B：错误。执行时机是方法之前。
- C：错误。只处理异常退出。
- D：错误。可包裹整个调用但不是该专门类型。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf

### SPRING-081（单选题）

- **知识点**：通知
- **难度**：易
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A

**解析：** @After 相当于 finally 语义。

**选项辨析：**

- A：正确。无论结果如何都会执行。
- B：错误。只在调用前执行。
- C：错误。仅处理正常返回。
- D：错误。仅处理异常返回。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf

### SPRING-082（单选题）

- **知识点**：环绕通知
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A

**解析：** 环绕通知通过 proceed() 控制目标调用是否继续。

**选项辨析：**

- A：正确。proceed 触发目标方法并可获得返回值。
- B：错误。关闭容器会终止应用。
- C：错误。BeanFactory 没有此职责。
- D：错误。日志刷新与目标调用无关。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf

### SPRING-083（单选题）

- **知识点**：环绕通知
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A

**解析：** 环绕通知可包装目标返回值后再交给调用方。

**选项辨析：**

- A：正确。返回值可被统一转换或包装。
- B：错误。不会直接改变表结构。
- C：错误。不会改变映射注解。
- D：错误。与 JVM 堆参数无关。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf

### SPRING-084（单选题）

- **知识点**：连接点
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A

**解析：** Spring AOP 主要拦截方法执行连接点。

**选项辨析：**

- A：正确。方法执行是 Spring AOP 的典型连接点。
- B：错误。字段声明不是 Spring 代理默认连接点。
- C：错误。文件下载属于业务动作。
- D：错误。建表不属于方法连接点。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf

### SPRING-085（单选题）

- **知识点**：代理机制
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A

**解析：** 基于接口的目标通常可以由 JDK 动态代理实现。

**选项辨析：**

- A：正确。JDK 代理通过接口转发调用。
- B：错误。HTML 与 Java 对象代理无关。
- C：错误。触发器运行在数据库端。
- D：错误。反射缓存不是代理类型。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf

### SPRING-086（单选题）

- **知识点**：代理机制
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A

**解析：** 无接口目标类可通过 CGLIB 生成子类代理。

**选项辨析：**

- A：正确。CGLIB 基于继承增强类。
- B：错误。JDK 代理需要接口。
- C：错误。Filter 处理 Web 请求。
- D：错误。Driver 负责数据库连接。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf

### SPRING-087（单选题）

- **知识点**：代理限制
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A

**解析：** 自调用使用 this 引用，未经过外部代理拦截。

**选项辨析：**

- A：正确。代理增强发生在代理对象入口。
- B：错误。返回值与是否拦截无关。
- C：错误。字段访问不是原因。
- D：错误。类不一定 final。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf

### SPRING-088（单选题）

- **知识点**：代理限制
- **难度**：难
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A

**解析：** 从容器取到的代理对象调用才能触发代理链。

**选项辨析：**

- A：正确。外部经过代理入口可执行通知。
- B：错误。this 调用会绕过代理。
- C：错误。注释不会产生行为。
- D：错误。删除方法不能解决设计问题。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf

### SPRING-089（单选题）

- **知识点**：切点表达式
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A

**解析：** execution 表达式可按包、返回值、方法名和参数匹配方法执行。

**选项辨析：**

- A：正确。..* 覆盖包及子包方法。
- B：错误。与数据库表无关。
- C：错误。与状态码无关。
- D：错误。不是构造方法专用写法。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf

### SPRING-090（单选题）

- **知识点**：切点表达式
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A

**解析：** within 按匹配类型的包和类范围限定连接点。

**选项辨析：**

- A：正确。它重点限定类型位置。
- B：错误。不是按运行时返回值匹配。
- C：错误。不分析 SQL 耗时。
- D：错误。不读取请求体。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf

### SPRING-091（单选题）

- **知识点**：切点绑定
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A

**解析：** args 可将方法参数绑定到通知形参。

**选项辨析：**

- A：正确。可读取匹配调用的参数。
- B：错误。字段需要其他机制访问。
- C：错误。连接池不是 args 提供的。
- D：错误。响应头属于 Web 层。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf

### SPRING-092（单选题）

- **知识点**：注解切点
- **难度**：易
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A

**解析：** @annotation 根据方法上的注解匹配连接点。

**选项辨析：**

- A：正确。它以注解作为匹配条件。
- B：错误。异常需要异常通知处理。
- C：错误。接口匹配应使用其他表达式。
- D：错误。与数据库选择无关。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf

### SPRING-093（单选题）

- **知识点**：通知顺序
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A

**解析：** @Order 可为切面或通知指定优先级顺序。

**选项辨析：**

- A：正确。数值越小通常优先级越高。
- B：错误。@Value 注入配置。
- C：错误。@Profile 控制环境。
- D：错误。@Bean 声明 Bean。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf

### SPRING-094（单选题）

- **知识点**：异常通知
- **难度**：易
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A

**解析：** 异常通知响应目标方法的异常退出。

**选项辨析：**

- A：正确。可绑定异常对象记录或转译。
- B：错误。正常返回应使用返回通知。
- C：错误。容器事件不是目标方法异常。
- D：错误。销毁回调是生命周期行为。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf

### SPRING-095（单选题）

- **知识点**：事务切面
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A

**解析：** 事务应覆盖完整业务用例而非仅覆盖 Web 适配层。

**选项辨析：**

- A：正确。Service 通常聚合多个仓储操作。
- B：错误。Controller 也可间接访问数据库。
- C：错误。Service 仍可能抛异常。
- D：错误。返回类型不是决定因素。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf

### SPRING-096（单选题）

- **知识点**：事务代理
- **难度**：难
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A

**解析：** 事务本质由代理拦截入口建立和提交边界。

**选项辨析：**

- A：正确。this 调用不会经过代理。
- B：错误。表是否存在是另一类错误。
- C：错误。注解用于类型或方法。
- D：错误。Spring 支持声明式事务。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf

### SPRING-097（单选题）

- **知识点**：AOP 设计
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A

**解析：** 敏感凭据不应写入普通日志，避免泄露。

**选项辨析：**

- A：正确。密码和令牌属于敏感信息。
- B：错误。操作名可帮助审计。
- C：错误。Trace ID 便于关联链路。
- D：错误。耗时可用于性能分析。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf

### SPRING-098（单选题）

- **知识点**：MyBatis 集成
- **难度**：易
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A

**解析：** @MapperScan 指定 Mapper 接口所在包并注册代理。

**选项辨析：**

- A：正确。用于批量扫描 Mapper。
- B：错误。不存在该标准注解。
- C：错误。@EntityScan 扫描实体。
- D：错误。不存在该标准注解。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf

### SPRING-099（单选题）

- **知识点**：MyBatis 集成
- **难度**：易
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A

**解析：** MyBatis 为 Mapper 接口生成代理并执行映射语句。

**选项辨析：**

- A：正确。框架负责代理和 SQL 映射。
- B：错误。浏览器不访问 Mapper 接口。
- C：错误。GC 负责内存回收。
- D：错误。JUnit 负责测试。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf

### SPRING-100（单选题）

- **知识点**：MyBatis 参数
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A

**解析：** @Param 为 SQL 映射提供明确参数名称。

**选项辨析：**

- A：正确。可避免编译参数名变化造成绑定问题。
- B：错误。随机顺序不可靠。
- C：错误。日志不会参与 SQL 绑定。
- D：错误。URL 转换与 Mapper 参数无关。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf

### SPRING-101（单选题）

- **知识点**：MyBatis 映射
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A

**解析：** 结果映射或 SQL 别名可将列映射到属性。

**选项辨析：**

- A：正确。专门解决列属性对应关系。
- B：错误。线程数量不改变映射。
- C：错误。日志级别无关。
- D：错误。事务设置不能修复映射。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf

### SPRING-102（单选题）

- **知识点**：日志集成
- **难度**：易
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A

**解析：** SLF4J 提供统一日志门面，具体实现可由 Logback 等承载。

**选项辨析：**

- A：正确。它统一日志 API。
- B：错误。JDBC 是数据库访问标准。
- C：错误。JPA 是持久化规范。
- D：错误。JSP 是视图技术。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf

### SPRING-103（单选题）

- **知识点**：日志级别
- **难度**：易
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A

**解析：** 常见级别按详细程度由 TRACE 到 ERROR 递增。

**选项辨析：**

- A：正确。这是常见排序。
- B：错误。是反向排列。
- C：错误。顺序混乱。
- D：错误。顺序混乱。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf

### SPRING-104（单选题）

- **知识点**：日志实践
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A

**解析：** 过低级别会产生大量日志并增加存储与敏感信息风险。

**选项辨析：**

- A：正确。需要按环境控制日志量。
- B：错误。DEBUG 不会关闭日志。
- C：错误。与事务开关无关。
- D：错误。DEBUG 比 ERROR 更详细。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf

### SPRING-105（单选题）

- **知识点**：JUnit 5
- **难度**：易
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A

**解析：** JUnit Jupiter 使用 @Test 标识可执行测试方法。

**选项辨析：**

- A：正确。@Test 是标准测试注解。
- B：错误。@Run 不是 JUnit 5 测试方法注解。
- C：错误。不存在该注解。
- D：错误。不存在该注解。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf

### SPRING-106（单选题）

- **知识点**：JUnit 生命周期
- **难度**：易
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A

**解析：** @BeforeEach 用于每个测试用例前的准备。

**选项辨析：**

- A：正确。每个测试方法前都会执行。
- B：错误。@BeforeAll 通常只执行一次。
- C：错误。@AfterEach 在测试后执行。
- D：错误。@AfterAll 在全部测试后执行。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf

### SPRING-107（单选题）

- **知识点**：断言
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A

**解析：** assertEquals 用于比较期望值和实际值。

**选项辨析：**

- A：正确。适用于相等性断言。
- B：错误。用于 null 判断。
- C：错误。用于验证抛异常。
- D：错误。不是 JUnit 标准断言。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf

### SPRING-108（单选题）

- **知识点**：Mockito
- **难度**：易
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A

**解析：** Mockito.mock(Class) 创建指定类型的模拟对象。

**选项辨析：**

- A：正确。mock 是 Mockito 标准 API。
- B：错误。不是通用 Mockito API。
- C：错误。不是创建 Mock 的方法。
- D：错误。不是 Mockito 方法。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf

### SPRING-109（单选题）

- **知识点**：Mockito
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A

**解析：** when/thenReturn 定义桩行为。

**选项辨析：**

- A：正确。可控制模拟依赖在测试中的返回结果。
- B：错误。不负责启动容器。
- C：错误。不提交真实事务。
- D：错误。不做组件扫描。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf

### SPRING-110（单选题）

- **知识点**：Mockito 验证
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A

**解析：** verify 检查指定交互是否按预期发生。

**选项辨析：**

- A：正确。验证调用次数或参数是其用途。
- B：错误。返回值需另行配置或断言。
- C：错误。Mock 不代表真实数据库提交。
- D：错误。与视图渲染无关。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf

### SPRING-111（单选题）

- **知识点**：MVC 架构
- **难度**：易
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A

**解析：** DispatcherServlet 是前端控制器，统一分发请求。

**选项辨析：**

- A：正确。它协调 MVC 请求处理流程。
- B：错误。DataSource 提供数据库连接。
- C：错误。SqlSession 属于 MyBatis。
- D：错误。BeanPostProcessor 处理 Bean 生命周期。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf

### SPRING-112（单选题）

- **知识点**：MVC 请求流程
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A

**解析：** HandlerMapping 将请求映射到处理器及拦截器链。

**选项辨析：**

- A：正确。负责查找 Handler。
- B：错误。ViewResolver 负责视图解析。
- C：错误。MessageConverter 处理消息体。
- D：错误。事务管理器负责事务。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf

### SPRING-113（单选题）

- **知识点**：MVC 请求流程
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A

**解析：** ViewResolver 根据视图名找到实际 View。

**选项辨析：**

- A：正确。完成视图名到视图对象的解析。
- B：错误。用于处理器映射。
- C：错误。用于文件上传解析。
- D：错误。用于地区信息解析。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf

### SPRING-114（单选题）

- **知识点**：MVC 请求流程
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A

**解析：** 消息转换器负责对象与 JSON 等 HTTP 表示之间的转换。

**选项辨析：**

- A：正确。将返回对象序列化到响应体。
- B：错误。不再主要依赖模板视图解析。
- C：错误。拦截器不负责序列化。
- D：错误。BeanFactory 不写响应体。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf

### SPRING-115（单选题）

- **知识点**：Controller 注解
- **难度**：易
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A

**解析：** @RestController 默认让处理方法返回值写入响应体。

**选项辨析：**

- A：正确。它是两个注解的组合语义。
- B：错误。服务和仓储注解职责不同。
- C：错误。配置注解组合不同。
- D：错误。参数绑定注解不是其组成。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf

### SPRING-116（单选题）

- **知识点**：请求映射
- **难度**：易
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A

**解析：** @GetMapping 是 GET 请求映射的组合注解。

**选项辨析：**

- A：正确。同时限定方法和路径。
- B：错误。POST 应使用 @PostMapping。
- C：错误。与表名无直接关系。
- D：错误。不是静态资源配置。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf

### SPRING-117（单选题）

- **知识点**：参数绑定
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A

**解析：** @RequestParam 绑定查询参数或表单参数。

**选项辨析：**

- A：正确。适合读取 page=2。
- B：错误。@PathVariable 读取路径变量。
- C：错误。@RequestBody 读取请求体。
- D：错误。不存在该标准注解。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf

### SPRING-118（单选题）

- **知识点**：参数绑定
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A

**解析：** @PathVariable 绑定 URI 模板中的变量。

**选项辨析：**

- A：正确。可读取路径片段。
- B：错误。查询参数应使用 @RequestParam。
- C：错误。请求头应使用 @RequestHeader。
- D：错误。不存在该标准注解。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf

### SPRING-119（单选题）

- **知识点**：请求体
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A

**解析：** @RequestBody 表示从 HTTP body 读取并转换参数。

**选项辨析：**

- A：正确。适合 JSON 等请求体。
- B：错误。不读取请求体。
- C：错误。读取服务端请求属性。
- D：错误。不是请求体绑定注解。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf

### SPRING-120（单选题）

- **知识点**：响应状态
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A

**解析：** @ResponseStatus 可声明方法或异常对应的 HTTP 状态。

**选项辨析：**

- A：正确。用于明确响应状态。
- B：错误。不是 Spring 标准注解。
- C：错误。不是 Spring MVC 常用注解。
- D：错误。不能替代响应体设置。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf

## 多选题

### SPRING-121（多选题）

- **知识点**：AOP 组成
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A、B、C

**解析：** 切面、切点和通知共同描述横切逻辑，数据库索引不属于 AOP 组成。

**选项辨析：**

- A：正确。封装横切关注点。
- B：正确。定义匹配范围。
- C：正确。定义何时执行以及执行什么。
- D：错误。是数据库结构概念。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf

### SPRING-122（多选题）

- **知识点**：通知类型
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A、B、C

**解析：** 前置、返回、异常和最终/环绕是常见通知，建表通知不是 AOP 类型。

**选项辨析：**

- A：正确。目标方法前执行。
- B：正确。正常返回后执行。
- C：正确。异常退出时执行。
- D：错误。不是 Spring AOP 通知。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf

### SPRING-123（多选题）

- **知识点**：环绕通知
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A、B、C

**解析：** 环绕通知拥有最完整的调用控制能力，但不负责数据库建表。

**选项辨析：**

- A：正确。可决定是否调用 proceed。
- B：正确。可围绕调用测量耗时。
- C：正确。可包装参数和结果。
- D：错误。不负责数据库 DDL。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf

### SPRING-124（多选题）

- **知识点**：代理选择
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A、B、C

**解析：** 两种代理方式都服务于对象增强，final 会限制基于继承的 CGLIB。

**选项辨析：**

- A：正确。JDK 代理面向接口。
- B：正确。CGLIB 基于子类。
- C：正确。final 无法被子类覆盖。
- D：错误。与连接池无关。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf

### SPRING-125（多选题）

- **知识点**：切点表达式
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A、B、C

**解析：** Spring 切点可按签名、类型、注解等条件匹配，数据库结果不是切点条件。

**选项辨析：**

- A：正确。within/execution 可按类型范围匹配。
- B：正确。方法签名可约束名称和参数。
- C：正确。@annotation 可按注解匹配。
- D：错误。数据库运行结果不参与静态匹配。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf

### SPRING-126（多选题）

- **知识点**：AOP 风险
- **难度**：难
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A、B、C

**解析：** 审计切面应增强可追踪性和安全性，同时保持异常语义。

**选项辨析：**

- A：正确。便于链路审计。
- B：正确。降低敏感信息泄露。
- C：正确。吞异常会掩盖失败。
- D：错误。原样记录可能泄露隐私。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf

### SPRING-127（多选题）

- **知识点**：MyBatis
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A、B、C

**解析：** SqlSessionFactory、Mapper 和扫描配置属于 MyBatis 集成，ViewResolver 属于 MVC 视图。

**选项辨析：**

- A：正确。创建 MyBatis 会话工厂。
- B：正确。定义数据访问接口。
- C：正确。扫描并注册 Mapper。
- D：错误。负责视图解析而非 MyBatis。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf

### SPRING-128（多选题）

- **知识点**：MyBatis 映射
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A、B、C

**解析：** 列别名、resultMap 和命名策略都能解决列属性对应，日志级别不能改变映射。

**选项辨析：**

- A：正确。直接把列名改成属性名。
- B：正确。显式定义复杂映射。
- C：正确。统一命名可减少转换配置。
- D：错误。日志不参与结果转换。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf

### SPRING-129（多选题）

- **知识点**：日志
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A、B、C

**解析：** 参数化、分环境和脱敏是常见日志实践。

**选项辨析：**

- A：正确。减少无谓字符串拼接。
- B：正确。开发与生产需求不同。
- C：正确。避免敏感信息泄露。
- D：错误。System.out 难以统一管理和检索。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf

### SPRING-130（多选题）

- **知识点**：JUnit
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A、B、C

**解析：** 生命周期回调和断言 API 用于组织、验证测试，依赖注入不能替代断言。

**选项辨析：**

- A：正确。每个测试前执行。
- B：正确。每个测试后清理。
- C：正确。检查异常类型或行为。
- D：错误。注入依赖不等于验证结果。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf

### SPRING-131（多选题）

- **知识点**：Mockito
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A、B、C

**解析：** Mock 应隔离被测单元并验证行为，不应连接生产数据库。

**选项辨析：**

- A：正确。配置依赖行为。
- B：正确。验证调用次数和顺序等交互。
- C：正确。捕获并断言传入参数。
- D：错误。会破坏测试隔离和安全。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf

### SPRING-132（多选题）

- **知识点**：MVC 核心组件
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A、B、C

**解析：** 这些组件共同完成请求分发和处理；ViewResolver 是视图阶段组件。

**选项辨析：**

- A：正确。统一接收请求。
- B：正确。寻找处理器。
- C：正确。适配并调用处理器。
- D：错误。解析逻辑视图。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf

### SPRING-133（多选题）

- **知识点**：MVC 参数
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A、B、C

**解析：** 三者分别处理查询参数、路径变量和请求体，最后一个不是标准注解。

**选项辨析：**

- A：正确。绑定查询或表单参数。
- B：正确。绑定 URI 路径变量。
- C：正确。绑定 JSON 等请求体。
- D：错误。不存在该标准注解。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf

### SPRING-134（多选题）

- **知识点**：MVC 响应
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A、B、C

**解析：** 响应体模式依赖消息转换器，通常不需要模板视图解析。

**选项辨析：**

- A：正确。标记返回值写入响应体。
- B：正确。组合了 Controller 和 ResponseBody。
- C：正确。完成对象序列化。
- D：错误。JSON 响应不必经过模板解析。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf

### SPRING-135（多选题）

- **知识点**：MVC 异常
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A、B、C

**解析：** 集中处理和统一结构改善可维护性，堆栈应记录在服务端而非直接泄露。

**选项辨析：**

- A：正确。提供全局处理器。
- B：正确。声明异常到处理方法的映射。
- C：正确。便于客户端稳定解析。
- D：错误。会暴露内部实现和敏感信息。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf

### SPRING-136（多选题）

- **知识点**：MVC 拦截器
- **难度**：难
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A、B、C

**解析：** 拦截器适合请求级横切处理，不应承载核心业务规则。

**选项辨析：**

- A：正确。可在请求前检查身份。
- B：正确。可在前后记录耗时。
- C：正确。可建立链路上下文。
- D：错误。核心业务应放在 Service。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf

### SPRING-137（多选题）

- **知识点**：数据校验
- **难度**：难
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A、B、C

**解析：** 约束声明、触发校验和统一错误处理共同构成服务端校验闭环。

**选项辨析：**

- A：正确。定义规则。
- B：正确。激活方法参数校验。
- C：正确。便于形成稳定错误响应。
- D：错误。前端校验不能替代服务端校验。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf

### SPRING-138（多选题）

- **知识点**：MockMvc
- **难度**：难
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A、B、C

**解析：** MockMvc 关注 MVC 请求处理结果，不用于测量生产硬件性能。

**选项辨析：**

- A：正确。检查 status。
- B：正确。检查 JSONPath 或响应体。
- C：正确。验证 URL 与方法映射。
- D：错误。硬件性能需专门压测。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf

### SPRING-139（多选题）

- **知识点**：REST 设计
- **难度**：难
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A、B、C

**解析：** HTTP 语义、状态码和幂等性提升接口可用性，堆栈不应外泄。

**选项辨析：**

- A：正确。方法语义应匹配操作。
- B：正确。状态码帮助调用方判断结果。
- C：正确。降低重试造成重复写的风险。
- D：错误。会泄露内部实现。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf

### SPRING-140（多选题）

- **知识点**：第三方集成测试
- **难度**：难
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A、B、C

**解析：** 隔离外部依赖并覆盖异常分支可提高测试稳定性和安全性。

**选项辨析：**

- A：正确。单元测试可隔离客户端。
- B：正确。Stub 服务可进行契约或集成测试。
- C：正确。异常分支是集成风险重点。
- D：错误。真实扣款有数据和费用风险。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf

### SPRING-141（多选题）

- **知识点**：AOP 与事务
- **难度**：难
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A、B、C

**解析：** Spring 声明式事务建立在代理拦截机制上，并受自调用限制。

**选项辨析：**

- A：正确。代理负责拦截和事务管理。
- B：正确。方法或类可作为切点。
- C：正确。this 调用不经过外部代理。
- D：错误。运行时代理不修改源文件。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf

### SPRING-142（多选题）

- **知识点**：MVC 请求链
- **难度**：难
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A、B、C

**解析：** 请求依次经过前端控制器、映射、适配调用及视图/消息响应阶段。

**选项辨析：**

- A：正确。统一入口。
- B：正确。确定处理器。
- C：正确。适配器完成调用。
- D：错误。根据返回模式生成响应。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf

### SPRING-143（多选题）

- **知识点**：MVC 安全
- **难度**：难
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A、B、C

**解析：** 输入约束、日志保护和错误信息控制可降低常见风险。

**选项辨析：**

- A：正确。减少上传攻击面。
- B：正确。保护隐私和凭据。
- C：正确。防止内部实现外泄。
- D：错误。URL 易被日志、历史记录和代理记录。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf

### SPRING-144（多选题）

- **知识点**：AOP 适用场景
- **难度**：难
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A、B、C

**解析：** 横切且与核心业务相对独立的行为适合 AOP，核心公式应显式保留在领域逻辑中。

**选项辨析：**

- A：正确。跨模块重复出现。
- B：正确。可统一拦截。
- C：正确。适合声明式控制。
- D：错误。核心规则需要清晰可见并可直接测试。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf

### SPRING-145（多选题）

- **知识点**：环绕通知
- **难度**：难
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A、B、C

**解析：** 环绕通知可控制调用，但不应无条件吞异常或改变业务语义。

**选项辨析：**

- A：正确。可测量目标执行时间。
- B：正确。记录后重新抛出可保持错误语义。
- C：正确。可按条件拒绝调用。
- D：错误。吞异常会让调用方误判成功。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf

### SPRING-146（多选题）

- **知识点**：AOP 限制
- **难度**：难
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A、B、C

**解析：** Spring AOP 代理受可覆盖方法和代理入口限制，不是任意字节码织入。

**选项辨析：**

- A：正确。代理无法从外部拦截 private 方法。
- B：正确。final 方法不可重写。
- C：正确。this 调用绕过代理。
- D：错误。字段读写不是默认连接点。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf

### SPRING-147（多选题）

- **知识点**：日志上下文
- **难度**：难
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A、B、C

**解析：** 跨层日志应共享关联标识并控制敏感字段。

**选项辨析：**

- A：正确。可串联请求链路。
- B：正确。便于定位具体业务。
- C：正确。帮助分析性能。
- D：错误。不应记录密码。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf

### SPRING-148（多选题）

- **知识点**：MyBatis 事务
- **难度**：难
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A、B、C

**解析：** 统一资源、明确回滚和避免独立提交才能使事务边界可控。

**选项辨析：**

- A：正确。集中管理提交回滚。
- B：正确。保证操作处于同一事务资源。
- C：正确。避免异常场景语义不清。
- D：错误。独立提交会破坏原子性。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf

### SPRING-149（多选题）

- **知识点**：JUnit 分层
- **难度**：难
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A、B、C

**解析：** 单元测试应隔离外部环境并验证可观察行为。

**选项辨析：**

- A：正确。避免真实网络副作用。
- B：正确。提高可重复性。
- C：正确。兼顾状态和协作行为。
- D：错误。生产数据会导致不稳定和风险。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf

### SPRING-150（多选题）

- **知识点**：MVC 参数校验
- **难度**：难
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A、B、C

**解析：** 校验错误应可读、可解析、可追踪，内部堆栈不应外泄。

**选项辨析：**

- A：正确。帮助用户修正字段。
- B：正确。便于客户端统一处理。
- C：正确。支持日志关联。
- D：错误。会泄露内部实现。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf

# 第3讲：Spring Boot 入门与自动配置

## 单选题

### SPRING-151（单选题）

- **知识点**：Spring Boot定位
- **难度**：易
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第33页
- **答案**：B

**解析：** Spring Boot 通过约定、Starter、自动配置和内嵌服务器降低工程搭建成本。

**选项辨析：**

- A：错误。它不编写业务逻辑。
- B：正确。符合 Spring Boot 的工程化定位。
- C：错误。Spring Boot 仍使用 Java 或 Kotlin。
- D：错误。数据库只是可集成场景之一。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Spring Boot快速入门与核心注解；https://docs.spring.io/spring-boot/documentation.html

### SPRING-152（单选题）

- **知识点**：约定大于配置
- **难度**：易
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第33页
- **答案**：B

**解析：** 开发者接受合理默认值即可启动应用，需要差异化时再覆盖配置。

**选项辨析：**

- A：错误。仍可配置和覆盖。
- B：正确。正确描述默认约定的价值。
- C：错误。Boot 并不要求 XML。
- D：错误。自动配置会减少手写 Bean。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Spring Boot快速入门与核心注解；https://docs.spring.io/spring-boot/documentation.html

### SPRING-153（单选题）

- **知识点**：Initializr定位
- **难度**：易
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第34页
- **答案**：B

**解析：** Initializr 根据元数据和依赖选择生成可导入 IDE 的项目骨架。

**选项辨析：**

- A：错误。监控通常由 Actuator 等负责。
- B：正确。符合脚手架用途。
- C：错误。Maven 仍负责构建。
- D：错误。不会转换源码语言。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Spring Boot快速入门与核心注解；https://docs.spring.io/spring-boot/documentation.html

### SPRING-154（单选题）

- **知识点**：Initializr元数据
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第34页
- **答案**：A

**解析：** 这些选项会生成 build 文件、源码目录和相应依赖声明。

**选项辨析：**

- A：正确。符合生成结果。
- B：错误。Initializr 不写业务数据。
- C：错误。不会生成秘密凭证。
- D：错误。与浏览器缓存无关。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Spring Boot快速入门与核心注解；https://docs.spring.io/spring-boot/documentation.html

### SPRING-155（单选题）

- **知识点**：Initializr导入
- **难度**：易
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第34页
- **答案**：A

**解析：** 解压后的标准工程可被 IntelliJ IDEA 或 Eclipse 识别并导入。

**选项辨析：**

- A：正确。符合课件流程。
- B：错误。不是图片资源。
- C：错误。不是数据库备份。
- D：错误。改扩展名会破坏工程。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Spring Boot快速入门与核心注解；https://docs.spring.io/spring-boot/documentation.html

### SPRING-156（单选题）

- **知识点**：Starter概念
- **难度**：易
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第35页
- **答案**：B

**解析：** Starter 将某场景常用的库和版本关系集中起来，便于一站式引入。

**选项辨析：**

- A：错误。Starter 不等于业务 Bean。
- B：正确。符合起步依赖定义。
- C：错误。不负责建表。
- D：错误。依赖可被持续使用。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Spring Boot快速入门与核心注解；https://docs.spring.io/spring-boot/documentation.html

### SPRING-157（单选题）

- **知识点**：starter-web
- **难度**：易
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第35页
- **答案**：A

**解析：** starter-web 汇集 Spring MVC、Web 运行时及嵌入式容器相关依赖。

**选项辨析：**

- A：正确。符合 Web 场景。
- B：错误。用于测试。
- C：错误。负责依赖管理而非 Web 能力。
- D：错误。用于日志替换。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Spring Boot快速入门与核心注解；https://docs.spring.io/spring-boot/documentation.html

### SPRING-158（单选题）

- **知识点**：starter-test
- **难度**：易
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第35页
- **答案**：A

**解析：** starter-test 为测试范围提供 JUnit 5、Mockito、AssertJ 等常用组件。

**选项辨析：**

- A：正确。符合课件说明。
- B：错误。属于 Web 容器。
- C：错误。属于基础设施依赖。
- D：错误。是 Java 运行环境术语。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Spring Boot快速入门与核心注解；https://docs.spring.io/spring-boot/documentation.html

### SPRING-159（单选题）

- **知识点**：starter-log4j2
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第36页
- **答案**：A

**解析：** 默认 logging 依赖会带入 Logback，替换时需排除它再引入 starter-log4j2。

**选项辨析：**

- A：正确。符合替换步骤。
- B：错误。日志 API 不能全部删除。
- C：错误。输出目标不是替换步骤。
- D：错误。后缀无关。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Spring Boot快速入门与核心注解；https://docs.spring.io/spring-boot/documentation.html

### SPRING-160（单选题）

- **知识点**：版本仲裁
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第35页
- **答案**：B

**解析：** Boot 的依赖管理为相关组件提供经过验证的版本组合。

**选项辨析：**

- A：错误。版本选择是确定的。
- B：正确。符合版本仲裁机制。
- C：错误。不会修改 JDK。
- D：错误。仍支持第三方库。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Spring Boot快速入门与核心注解；https://docs.spring.io/spring-boot/documentation.html

### SPRING-161（单选题）

- **知识点**：自动配置定义
- **难度**：易
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第37页
- **答案**：A

**解析：** 自动配置类通过条件判断环境、依赖和容器状态来决定是否提供默认 Bean。

**选项辨析：**

- A：正确。符合自动配置核心。
- B：错误。不是决定因素。
- C：错误。与配置逻辑无关。
- D：错误。不是启动条件。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Spring Boot快速入门与核心注解；https://docs.spring.io/spring-boot/documentation.html

### SPRING-162（单选题）

- **知识点**：自动配置优势
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第37页
- **答案**：A

**解析：** Boot 根据 Web 依赖和环境条件装配 Web 基础设施。

**选项辨析：**

- A：正确。正确。
- B：错误。不是 Boot 必需机制。
- C：错误。与编译优化无关。
- D：错误。与数据库分片无关。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Spring Boot快速入门与核心注解；https://docs.spring.io/spring-boot/documentation.html

### SPRING-163（单选题）

- **知识点**：条件装配
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第37页
- **答案**：A

**解析：** 条件注解把配置是否启用交给类路径、Bean、属性等运行时条件。

**选项辨析：**

- A：正确。符合条件装配。
- B：错误。条件不满足时可不创建。
- C：错误。与编译无关。
- D：错误。不会以隐藏异常为目的。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Spring Boot快速入门与核心注解；https://docs.spring.io/spring-boot/documentation.html

### SPRING-164（单选题）

- **知识点**：@ConditionalOnClass
- **难度**：易
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第38页
- **答案**：A

**解析：** 只有目标类型能在类路径解析时，条件配置才可能生效。

**选项辨析：**

- A：正确。符合注解语义。
- B：错误。不是生命周期检查。
- C：错误。不是请求结果。
- D：错误。不是文本统计。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Spring Boot快速入门与核心注解；https://docs.spring.io/spring-boot/documentation.html

### SPRING-165（单选题）

- **知识点**：@ConditionalOnMissingBean
- **难度**：易
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第38页
- **答案**：A

**解析：** 自动配置通常在容器缺少用户定义 Bean 时回退到默认实现。

**选项辨析：**

- A：正确。符合回退策略。
- B：错误。不会删除已有 Bean。
- C：错误。条件恰好关注缺失。
- D：错误。不是配置文件条件。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Spring Boot快速入门与核心注解；https://docs.spring.io/spring-boot/documentation.html

### SPRING-166（单选题）

- **知识点**：@ConditionalOnBean
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第38页
- **答案**：A

**解析：** 该条件检查指定类型 Bean 是否已经在容器中。

**选项辨析：**

- A：正确。符合条件含义。
- B：错误。没有数量要求。
- C：错误。不会禁止使用。
- D：错误。不直接检查表。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Spring Boot快速入门与核心注解；https://docs.spring.io/spring-boot/documentation.html

### SPRING-167（单选题）

- **知识点**：@ConditionalOnProperty
- **难度**：易
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第38页
- **答案**：A

**解析：** 它读取 Environment 中的属性，并可按 havingValue、matchIfMissing 等规则判断。

**选项辨析：**

- A：正确。符合注解语义。
- B：错误。不是源码统计。
- C：错误。不是 IP 规则。
- D：错误。线程数量不是默认检查项。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Spring Boot快速入门与核心注解；https://docs.spring.io/spring-boot/documentation.html

### SPRING-168（单选题）

- **知识点**：@ConditionalOnWebApplication
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第38页
- **答案**：A

**解析：** 该条件让 Web 专属自动配置只在 Web 环境中启用。

**选项辨析：**

- A：正确。符合用途。
- B：错误。与数据库权限无关。
- C：错误。不是测试条件。
- D：错误。不是签名检查。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Spring Boot快速入门与核心注解；https://docs.spring.io/spring-boot/documentation.html

### SPRING-169（单选题）

- **知识点**：@ConditionalOnNotWebApplication
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第38页
- **答案**：A

**解析：** NotWebApplication 条件在非 Web 应用环境下匹配。

**选项辨析：**

- A：正确。符合场景。
- B：错误。只检查类路径。
- C：错误。用于注册 Bean。
- D：错误。用于映射请求。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Spring Boot快速入门与核心注解；https://docs.spring.io/spring-boot/documentation.html

### SPRING-170（单选题）

- **知识点**：@ConditionalOnResource
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第38页
- **答案**：A

**解析：** Resource 条件检查指定资源是否可访问。

**选项辨析：**

- A：正确。符合资源检查。
- B：错误。检查 Bean。
- C：错误。检查 Bean 缺失。
- D：错误。用于属性绑定。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Spring Boot快速入门与核心注解；https://docs.spring.io/spring-boot/documentation.html

### SPRING-171（单选题）

- **知识点**：@ConditionalOnExpression
- **难度**：难
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第38页
- **答案**：A

**解析：** 该条件允许以表达式结果作为自动配置开关。

**选项辨析：**

- A：正确。符合表达式条件。
- B：错误。只检查类。
- C：错误。按 profile 选择。
- D：错误。导入配置但不判断表达式。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Spring Boot快速入门与核心注解；https://docs.spring.io/spring-boot/documentation.html

### SPRING-172（单选题）

- **知识点**：@SpringBootApplication组成
- **难度**：易
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第39页
- **答案**：A

**解析：** 它是配置类、自动配置和组件扫描能力的组合入口。

**选项辨析：**

- A：正确。符合注解组成。
- B：错误。是组件角色而非组合。
- C：错误。是其他常用注解。
- D：错误。不是该三者组合。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Spring Boot快速入门与核心注解；https://docs.spring.io/spring-boot/documentation.html

### SPRING-173（单选题）

- **知识点**：@SpringBootApplication配置
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第39页
- **答案**：A

**解析：** 默认扫描启动类所在包及其下级包，因此启动类应放在合适的根包。

**选项辨析：**

- A：正确。符合默认扫描范围。
- B：错误。不会扫描 JDK。
- C：错误。扫描范围受包结构限制。
- D：错误。不只扫描测试包。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Spring Boot快速入门与核心注解；https://docs.spring.io/spring-boot/documentation.html

### SPRING-174（单选题）

- **知识点**：@Configuration
- **难度**：易
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第39页
- **答案**：A

**解析：** Configuration 类作为容器配置源，可通过 @Bean 注册对象。

**选项辨析：**

- A：正确。符合注解语义。
- B：错误。不是连接实例。
- C：错误。不是请求对象。
- D：错误。不是断言。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Spring Boot快速入门与核心注解；https://docs.spring.io/spring-boot/documentation.html

### SPRING-175（单选题）

- **知识点**：@EnableAutoConfiguration
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第39页
- **答案**：A

**解析：** 它导入候选自动配置并按条件选择实际生效的配置。

**选项辨析：**

- A：正确。符合作用。
- B：错误。与 assert 关键字无关。
- C：错误。不负责云部署。
- D：错误。不会直接禁用扫描。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Spring Boot快速入门与核心注解；https://docs.spring.io/spring-boot/documentation.html

### SPRING-176（单选题）

- **知识点**：可执行Jar
- **难度**：易
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第40页
- **答案**：A

**解析：** 内嵌容器和启动器使应用可打包为独立可执行 JAR。

**选项辨析：**

- A：正确。符合课件部署方式。
- B：错误。不要求 EJB 容器。
- C：错误。浏览器不是服务器。
- D：错误。WAR 是另一种部署形态。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Spring Boot快速入门与核心注解；https://docs.spring.io/spring-boot/documentation.html

### SPRING-177（单选题）

- **知识点**：内嵌Tomcat
- **难度**：易
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第40页
- **答案**：A

**解析：** Spring Boot Web starter 默认带来嵌入式 Tomcat（也可替换为其他容器）。

**选项辨析：**

- A：正确。符合默认容器。
- B：错误。Nginx 是反向代理。
- C：错误。Redis 是缓存。
- D：错误。MySQL 是数据库。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Spring Boot快速入门与核心注解；https://docs.spring.io/spring-boot/documentation.html

### SPRING-178（单选题）

- **知识点**：内嵌容器替换
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第40页
- **答案**：A

**解析：** 容器实现由依赖决定，替换需处理默认容器依赖并加入目标 starter。

**选项辨析：**

- A：正确。符合依赖替换。
- B：错误。端口不改变容器实现。
- C：错误。启动注解仍需保留。
- D：错误。与语言无关。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Spring Boot快速入门与核心注解；https://docs.spring.io/spring-boot/documentation.html

### SPRING-179（单选题）

- **知识点**：端口配置
- **难度**：易
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第40页
- **答案**：A

**解析：** server.port 是 Boot Web 应用常用的端口配置属性。

**选项辨析：**

- A：正确。符合约定属性。
- B：错误。不是标准属性。
- C：错误。不是标准属性。
- D：错误。不是标准属性。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Spring Boot快速入门与核心注解；https://docs.spring.io/spring-boot/documentation.html

### SPRING-180（单选题）

- **知识点**：ConfigurationProperties用途
- **难度**：易
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A

**解析：** 它适合把层次化配置映射到类型安全的 Java 对象。

**选项辨析：**

- A：正确。符合属性绑定用途。
- B：错误。不负责 ORM。
- C：错误。不负责文档生成。
- D：错误。不负责日志扫描。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Spring Boot快速入门与核心注解；https://docs.spring.io/spring-boot/documentation.html

### SPRING-181（单选题）

- **知识点**：ConfigurationProperties前缀
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A

**解析：** 前缀将配置键空间与目标对象属性关联起来。

**选项辨析：**

- A：正确。符合前缀语义。
- B：错误。Bean 名称由其他机制决定。
- C：错误。不是请求路径。
- D：错误。与驱动选择无直接关系。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Spring Boot快速入门与核心注解；https://docs.spring.io/spring-boot/documentation.html

### SPRING-182（单选题）

- **知识点**：ConfigurationProperties注册
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A

**解析：** 扫描或显式启用属性类后，绑定对象才会注册到容器。

**选项辨析：**

- A：正确。符合注册方式。
- B：错误。字段本身不会注册 Bean。
- C：错误。resources 不是组件扫描目录。
- D：错误。final 方法无关。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Spring Boot快速入门与核心注解；https://docs.spring.io/spring-boot/documentation.html

### SPRING-183（单选题）

- **知识点**：属性绑定类型安全
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A

**解析：** 它将一组相关属性聚合为类型安全对象，便于校验与维护。

**选项辨析：**

- A：正确。符合优势。
- B：错误。仍需配置来源。
- C：错误。支持多种类型。
- D：错误。不会自动加密。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Spring Boot快速入门与核心注解；https://docs.spring.io/spring-boot/documentation.html

### SPRING-184（单选题）

- **知识点**：自动配置回退
- **难度**：难
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A

**解析：** 用户 Bean 已存在时，缺失 Bean 条件不再满足，默认配置通常回退。

**选项辨析：**

- A：正确。符合条件回退机制。
- B：错误。默认配置不应覆盖用户显式定义。
- C：错误。不会无限创建。
- D：错误。与配置文件删除无关。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Spring Boot快速入门与核心注解；https://docs.spring.io/spring-boot/documentation.html

### SPRING-185（单选题）

- **知识点**：ConditionalOnClass场景
- **难度**：难
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A

**解析：** 类不存在时 OnClass 条件不满足，可避免加载不适用配置。

**选项辨析：**

- A：正确。符合按需装配。
- B：错误。没有类型无法创建。
- C：错误。Boot 不会自动安装服务。
- D：错误。不会任意删除配置。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Spring Boot快速入门与核心注解；https://docs.spring.io/spring-boot/documentation.html

### SPRING-186（单选题）

- **知识点**：ConditionalOnProperty缺省
- **难度**：难
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A

**解析：** matchIfMissing 为 true 表示没有该属性时按匹配处理。

**选项辨析：**

- A：正确。符合属性条件语义。
- B：错误。与 false 无关。
- C：错误。不会删除属性。
- D：错误。不是 Bean 条件。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Spring Boot快速入门与核心注解；https://docs.spring.io/spring-boot/documentation.html

### SPRING-187（单选题）

- **知识点**：启动流程
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A

**解析：** SpringApplication.run 创建并刷新应用上下文，触发组件和自动配置。

**选项辨析：**

- A：正确。符合启动入口。
- B：错误。请求垃圾回收。
- C：错误。复制文件。
- D：错误。生成随机数。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Spring Boot快速入门与核心注解；https://docs.spring.io/spring-boot/documentation.html

### SPRING-188（单选题）

- **知识点**：Starter与自动配置关系
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第35页
- **答案**：A

**解析：** 引入 Starter 使相关类进入类路径，自动配置再根据条件启用基础设施。

**选项辨析：**

- A：正确。准确描述协作关系。
- B：错误。Starter 不承载业务逻辑。
- C：错误。类路径正是重要条件。
- D：错误。二者通常协同。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Spring Boot快速入门与核心注解；https://docs.spring.io/spring-boot/documentation.html

### SPRING-189（单选题）

- **知识点**：依赖排除
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第36页
- **答案**：A

**解析：** 排除默认日志后若未补充 Log4j2 等实现，应用可能缺少日志实现。

**选项辨析：**

- A：正确。符合课件提示。
- B：错误。容器替换需另外处理。
- C：错误。与日志排除无关。
- D：错误。绑定机制不因日志改变。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Spring Boot快速入门与核心注解；https://docs.spring.io/spring-boot/documentation.html

### SPRING-190（单选题）

- **知识点**：Boot与Spring关系
- **难度**：易
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第33页
- **答案**：A

**解析：** Boot 使用 Spring Framework 的容器等核心能力，进一步提供自动配置和工程约定。

**选项辨析：**

- A：正确。符合生态关系。
- B：错误。Boot 不是取代者。
- C：错误。主要支持 Java/Kotlin。
- D：错误。二者天然协同。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Spring Boot快速入门与核心注解；https://docs.spring.io/spring-boot/documentation.html

### SPRING-191（单选题）

- **知识点**：可覆盖默认值
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第37页
- **答案**：A

**解析：** Boot 的默认值是可配置、可覆盖的，便于在约定基础上做差异化。

**选项辨析：**

- A：正确。符合覆盖方式。
- B：错误。不需要修改 JDK。
- C：错误。无需删除全部自动配置。
- D：错误。通常无需手写容器。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Spring Boot快速入门与核心注解；https://docs.spring.io/spring-boot/documentation.html

### SPRING-192（单选题）

- **知识点**：组件扫描边界
- **难度**：难
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第39页
- **答案**：A

**解析：** 默认扫描从启动类包向下展开，同级或上级包不会自动纳入。

**选项辨析：**

- A：正确。符合扫描边界。
- B：错误。扫描不会遍历磁盘。
- C：错误。不仅扫描启动类。
- D：错误。依赖 Jar 的组件需其他机制。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Spring Boot快速入门与核心注解；https://docs.spring.io/spring-boot/documentation.html

### SPRING-193（单选题）

- **知识点**：配置文件格式
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A

**解析：** Boot 支持 properties 和 YAML 等外部化配置格式。

**选项辨析：**

- A：正确。符合常见格式。
- B：错误。是源码文件。
- C：错误。是图片格式。
- D：错误。不是主要应用配置格式。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Spring Boot快速入门与核心注解；https://docs.spring.io/spring-boot/documentation.html

### SPRING-194（单选题）

- **知识点**：配置覆盖
- **难度**：难
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A

**解析：** 外部化配置支持按优先级覆盖默认值，便于同一制品适配不同环境。

**选项辨析：**

- A：正确。符合外部化配置价值。
- B：错误。默认值可被覆盖。
- C：错误。命令行是常见来源。
- D：错误。不限制为注解。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Spring Boot快速入门与核心注解；https://docs.spring.io/spring-boot/documentation.html

### SPRING-195（单选题）

- **知识点**：生产部署
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第40页
- **答案**：A

**解析：** 独立 JAR 将应用和容器交付，降低部署依赖和环境漂移。

**选项辨析：**

- A：正确。符合部署价值。
- B：错误。生产不需 IDE。
- C：错误。仍使用 HTTP。
- D：错误。部署方式不能保证业务无缺陷。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Spring Boot快速入门与核心注解；https://docs.spring.io/spring-boot/documentation.html

## 多选题

### SPRING-196（多选题）

- **知识点**：Spring Boot定位 / 工程效率
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第33页
- **答案**：A、B、C

**解析：** 前三项是课程强调的工程化能力，业务设计仍由开发者负责。

**选项辨析：**

- A：正确。减少重复配置。
- B：正确。整合场景依赖。
- C：正确。支持独立部署。
- D：错误。Boot 不替代业务建模。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Spring Boot快速入门与核心注解；https://docs.spring.io/spring-boot/documentation.html

### SPRING-197（多选题）

- **知识点**：Initializr / 项目生成
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第34页
- **答案**：A、B、C

**解析：** Initializr 生成项目元数据和依赖，但不应保存生产秘密。

**选项辨析：**

- A：正确。可选 Maven/Gradle。
- B：正确。影响兼容性。
- C：正确。生成依赖声明。
- D：错误。秘密应通过安全配置管理。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Spring Boot快速入门与核心注解；https://docs.spring.io/spring-boot/documentation.html

### SPRING-198（多选题）

- **知识点**：Starter / 依赖管理
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第35页
- **答案**：A、B、C

**解析：** Starter 聚焦基础设施依赖整合，不实现具体业务流程。

**选项辨析：**

- A：正确。符合定义。
- B：正确。减少重复声明。
- C：正确。版本更可控。
- D：错误。业务流程不属于 Starter。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Spring Boot快速入门与核心注解；https://docs.spring.io/spring-boot/documentation.html

### SPRING-199（多选题）

- **知识点**：starter-web / Web开发
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第35页
- **答案**：A、B、C

**解析：** Web Starter 提供 Web 基础设施，业务规则仍在应用代码中。

**选项辨析：**

- A：正确。属于 Web 栈。
- B：正确。支持独立运行。
- C：正确。符合场景整合。
- D：错误。不是业务规则引擎。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Spring Boot快速入门与核心注解；https://docs.spring.io/spring-boot/documentation.html

### SPRING-200（多选题）

- **知识点**：starter-test / 测试依赖
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第35页
- **答案**：A、B、C

**解析：** 测试 Starter 统一提供测试库，不会执行业务生产操作。

**选项辨析：**

- A：正确。常用测试框架。
- B：正确。用于 Mock。
- C：正确。提供断言。
- D：错误。与生产订单无关。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Spring Boot快速入门与核心注解；https://docs.spring.io/spring-boot/documentation.html

### SPRING-201（多选题）

- **知识点**：日志替换 / Log4j2
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第36页
- **答案**：A、B、C

**解析：** 替换要处理冲突并保证日志门面和实现链路完整。

**选项辨析：**

- A：正确。避免 Logback 传递进入。
- B：正确。引入目标实现。
- C：正确。确保应用可记录日志。
- D：错误。不应删除日志门面 API。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Spring Boot快速入门与核心注解；https://docs.spring.io/spring-boot/documentation.html

### SPRING-202（多选题）

- **知识点**：自动配置 / 条件机制
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第37页
- **答案**：A、B、C

**解析：** 自动配置围绕运行时环境和容器状态作条件判断。

**选项辨析：**

- A：正确。对应 OnClass。
- B：正确。对应 OnBean/MissingBean。
- C：正确。对应 OnProperty。
- D：错误。与自动配置无关。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Spring Boot快速入门与核心注解；https://docs.spring.io/spring-boot/documentation.html

### SPRING-203（多选题）

- **知识点**：ConditionalOnClass / 类路径
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第38页
- **答案**：A、B、C

**解析：** 该注解只判断类是否可用，不负责依赖下载。

**选项辨析：**

- A：正确。符合语义。
- B：正确。减少错误装配。
- C：正确。Starter 使类进入类路径。
- D：错误。依赖管理工具才可能下载。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Spring Boot快速入门与核心注解；https://docs.spring.io/spring-boot/documentation.html

### SPRING-204（多选题）

- **知识点**：ConditionalOnBean / 容器条件
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第38页
- **答案**：A、B、C

**解析：** OnBean 关注 ApplicationContext 中的 Bean，而非文件系统资源。

**选项辨析：**

- A：正确。符合定义。
- B：正确。表达 Bean 依赖。
- C：正确。显式 Bean 可触发条件。
- D：错误。文件资源由 OnResource 关注。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Spring Boot快速入门与核心注解；https://docs.spring.io/spring-boot/documentation.html

### SPRING-205（多选题）

- **知识点**：ConditionalOnMissingBean / 默认回退
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第38页
- **答案**：A、B、C

**解析：** 它表达默认回退而非覆盖用户配置。

**选项辨析：**

- A：正确。符合用途。
- B：正确。符合 Boot 设计。
- C：正确。避免冲突。
- D：错误。不会删除用户对象。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Spring Boot快速入门与核心注解；https://docs.spring.io/spring-boot/documentation.html

### SPRING-206（多选题）

- **知识点**：ConditionalOnProperty / 配置开关
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第38页
- **答案**：A、B、C

**解析：** 该条件读取配置属性，不负责数据库内容检查。

**选项辨析：**

- A：正确。适合功能开关。
- B：正确。支持属性定位。
- C：正确。支持值匹配。
- D：错误。数据库表应由业务或数据访问逻辑检查。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Spring Boot快速入门与核心注解；https://docs.spring.io/spring-boot/documentation.html

### SPRING-207（多选题）

- **知识点**：Web条件 / 应用类型
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第38页
- **答案**：A、B、C

**解析：** Web 条件用于区分环境，不会改变应用类型。

**选项辨析：**

- A：正确。符合定义。
- B：正确。符合非 Web 场景。
- C：正确。减少不适用装配。
- D：错误。不会自动改变应用类型。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Spring Boot快速入门与核心注解；https://docs.spring.io/spring-boot/documentation.html

### SPRING-208（多选题）

- **知识点**：SpringBootApplication / 核心入口
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第39页
- **答案**：A、B、C

**解析：** 该注解组合应用配置、自动配置和扫描入口，但不生成业务数据。

**选项辨析：**

- A：正确。来自 @Configuration。
- B：正确。来自 @EnableAutoConfiguration。
- C：正确。来自 @ComponentScan。
- D：错误。与业务数据无关。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Spring Boot快速入门与核心注解；https://docs.spring.io/spring-boot/documentation.html

### SPRING-209（多选题）

- **知识点**：组件扫描 / 包结构
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第39页
- **答案**：A、B、C

**解析：** 扫描边界由包层级决定，放置启动类位置很关键。

**选项辨析：**

- A：正确。符合默认规则。
- B：正确。便于覆盖应用组件。
- C：正确。不会自动向上扫描。
- D：错误。不会遍历磁盘。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Spring Boot快速入门与核心注解；https://docs.spring.io/spring-boot/documentation.html

### SPRING-210（多选题）

- **知识点**：内嵌服务器 / 部署
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第40页
- **答案**：A、B、C

**解析：** 内嵌容器改善交付方式，但不保证业务代码正确。

**选项辨析：**

- A：正确。符合部署方式。
- B：正确。减少环境依赖。
- C：正确。符合课件价值。
- D：错误。业务质量仍需测试。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Spring Boot快速入门与核心注解；https://docs.spring.io/spring-boot/documentation.html

### SPRING-211（多选题）

- **知识点**：配置文件 / 外部化配置
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A、B、C

**解析：** 外部化配置强调环境解耦，秘密不应硬编码。

**选项辨析：**

- A：正确。常见格式。
- B：正确。减少重复构建。
- C：正确。体现覆盖能力。
- D：错误。违反安全实践。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Spring Boot快速入门与核心注解；https://docs.spring.io/spring-boot/documentation.html

### SPRING-212（多选题）

- **知识点**：ConfigurationProperties / 类型绑定
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A、B、C

**解析：** 它适合成组、层次化、类型安全的配置。

**选项辨析：**

- A：正确。前缀形成边界。
- B：正确。支持结构化绑定。
- C：正确。可结合校验。
- D：错误。并不限于单字符串。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Spring Boot快速入门与核心注解；https://docs.spring.io/spring-boot/documentation.html

### SPRING-213（多选题）

- **知识点**：ConfigurationProperties注册 / 启用方式
- **难度**：难
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A、B、C

**解析：** 配置文件是数据源，仍需要扫描或显式启用属性类。

**选项辨析：**

- A：正确。可扫描注册。
- B：正确。可显式启用。
- C：正确。可由配置类注册。
- D：错误。文件本身不是 Bean。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Spring Boot快速入门与核心注解；https://docs.spring.io/spring-boot/documentation.html

### SPRING-214（多选题）

- **知识点**：SpringApplication / 启动流程
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A、B、C

**解析：** 启动过程准备容器和配置，业务交易应由应用请求触发。

**选项辨析：**

- A：正确。创建上下文。
- B：正确。发现组件。
- C：正确。筛选配置。
- D：错误。不会自动执行全部业务。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Spring Boot快速入门与核心注解；https://docs.spring.io/spring-boot/documentation.html

### SPRING-215（多选题）

- **知识点**：自动配置回退 / 用户覆盖
- **难度**：难
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A、B、C

**解析：** Boot 默认配置遵循让用户覆盖的原则。

**选项辨析：**

- A：正确。条件被用户 Bean 改变。
- B：正确。用户实现保留。
- C：正确。避免重复。
- D：错误。不是通常行为。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Spring Boot快速入门与核心注解；https://docs.spring.io/spring-boot/documentation.html

### SPRING-216（多选题）

- **知识点**：条件组合 / 逻辑
- **难度**：难
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A、B、C

**解析：** 条件是自动配置的筛选逻辑，仍由容器生命周期管理结果 Bean。

**选项辨析：**

- A：正确。符合 AND 语义。
- B：正确。常见组合。
- C：正确。符合失败结果。
- D：错误。不会绕过容器。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Spring Boot快速入门与核心注解；https://docs.spring.io/spring-boot/documentation.html

### SPRING-217（多选题）

- **知识点**：Starter版本 / 依赖树
- **难度**：难
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第35页
- **答案**：A、B、C

**解析：** 版本管理应以兼容性和验证为基础，不能任意覆盖。

**选项辨析：**

- A：正确。统一版本。
- B：正确。有助于定位冲突。
- C：正确。减少重复版本。
- D：错误。未经验证的覆盖有风险。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Spring Boot快速入门与核心注解；https://docs.spring.io/spring-boot/documentation.html

### SPRING-218（多选题）

- **知识点**：端口配置 / 环境部署
- **难度**：难
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第40页
- **答案**：A、B、C

**解析：** 端口是服务器配置，应由外部化配置管理而非业务控制器。

**选项辨析：**

- A：正确。符合配置方式。
- B：正确。支持环境差异。
- C：正确。端口与容器实现是不同维度。
- D：错误。Controller 不是配置入口。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Spring Boot快速入门与核心注解；https://docs.spring.io/spring-boot/documentation.html

### SPRING-219（多选题）

- **知识点**：自动配置排除 / 故障排查
- **难度**：难
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A、B、C

**解析：** Boot 支持精细化排除，不必因一项冲突而放弃全部能力。

**选项辨析：**

- A：正确。先定位。
- B：正确。可按需禁用。
- C：正确。保留其他能力。
- D：错误。破坏性过大且不必要。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Spring Boot快速入门与核心注解；https://docs.spring.io/spring-boot/documentation.html

### SPRING-220（多选题）

- **知识点**：Initializr兼容性 / 项目初始化
- **难度**：难
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第34页
- **答案**：A、B、C

**解析：** 项目生成选项必须彼此兼容，桌面背景不影响构建。

**选项辨析：**

- A：正确。版本核心因素。
- B：正确。运行时要求。
- C：正确。决定构建方式。
- D：错误。与项目技术无关。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Spring Boot快速入门与核心注解；https://docs.spring.io/spring-boot/documentation.html

### SPRING-221（多选题）

- **知识点**：日志系统 / 集成
- **难度**：难
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第36页
- **答案**：A、B、C

**解析：** 日志门面可统一，但实现应避免冲突并明确选择。

**选项辨析：**

- A：正确。避免重复实现。
- B：正确。由 Starter 管理。
- C：正确。保证运行时一致。
- D：错误。随机选择会造成问题。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Spring Boot快速入门与核心注解；https://docs.spring.io/spring-boot/documentation.html

### SPRING-222（多选题）

- **知识点**：可执行Jar / 运行方式
- **难度**：难
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第40页
- **答案**：A、B、C

**解析：** 可执行 JAR 面向标准 Java 运行环境，不限于开发机。

**选项辨析：**

- A：正确。符合启动命令。
- B：正确。由 Boot 打包结构支持。
- C：正确。符合交付价值。
- D：错误。可部署到生产环境。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Spring Boot快速入门与核心注解；https://docs.spring.io/spring-boot/documentation.html

### SPRING-223（多选题）

- **知识点**：配置优先级 / 覆盖策略
- **难度**：难
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A、B、C

**解析：** 配置外置既支持覆盖也有助于秘密管理，但仍需配合安全平台。

**选项辨析：**

- A：正确。体现覆盖。
- B：正确。减少重构建。
- C：正确。降低硬编码风险。
- D：错误。把秘密打进 JAR 并不安全。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Spring Boot快速入门与核心注解；https://docs.spring.io/spring-boot/documentation.html

### SPRING-224（多选题）

- **知识点**：属性条件 / 开关设计
- **难度**：难
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A、B、C

**解析：** 属性开关应可预测、可解释、可运维。

**选项辨析：**

- A：正确。便于组织。
- B：正确。明确缺省行为。
- C：正确。降低误用。
- D：错误。随机逻辑不可维护。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Spring Boot快速入门与核心注解；https://docs.spring.io/spring-boot/documentation.html

### SPRING-225（多选题）

- **知识点**：Web与非Web / 场景隔离
- **难度**：难
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第38页
- **答案**：A、B、C

**解析：** 按应用类型条件装配能减少无关基础设施。

**选项辨析：**

- A：正确。符合隔离。
- B：正确。减少资源和冲突。
- C：正确。提高启动可靠性。
- D：错误。批处理不必监听 HTTP。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Spring Boot快速入门与核心注解；https://docs.spring.io/spring-boot/documentation.html

# 第4讲：Actuator、综合实战与工程化

## 单选题

### SPRING-226（单选题）

- **知识点**：Actuator定位
- **难度**：易
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：B

**解析：** Actuator 通过标准端点暴露应用健康、指标和元数据，服务于生产运维。

**选项辨析：**

- A：错误。它不负责格式化。
- B：正确。符合监控管理定位。
- C：错误。不负责数据库建模。
- D：错误。不是前端框架。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Actuator、综合实战与工程化；https://docs.spring.io/spring-boot/reference/actuator/index.html

### SPRING-227（单选题）

- **知识点**：Actuator端点
- **难度**：易
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A

**解析：** Actuator 将监控和管理能力封装为可访问的标准端点。

**选项辨析：**

- A：正确。符合课件定义。
- B：错误。不是注释处理工具。
- C：错误。不是构建生命周期。
- D：错误。与 SQL 无关。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Actuator、综合实战与工程化；https://docs.spring.io/spring-boot/reference/actuator/index.html

### SPRING-228（单选题）

- **知识点**：health端点
- **难度**：易
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A

**解析：** health 端点用于存活状态及关键依赖健康检查。

**选项辨析：**

- A：正确。正确。
- B：错误。不是课件列出的健康端点。
- C：错误。不是标准健康端点。
- D：错误。不是该用途。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Actuator、综合实战与工程化；https://docs.spring.io/spring-boot/reference/actuator/index.html

### SPRING-229（单选题）

- **知识点**：info端点
- **难度**：易
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A

**解析：** info 可展示版本、Git 提交记录和构建时间等元数据。

**选项辨析：**

- A：正确。符合端点用途。
- B：错误。不会输出全部业务数据。
- C：错误。不应展示密码。
- D：错误。不负责字节码查看。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Actuator、综合实战与工程化；https://docs.spring.io/spring-boot/reference/actuator/index.html

### SPRING-230（单选题）

- **知识点**：metrics端点
- **难度**：易
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A

**解析：** metrics 端点提供 JVM、线程、GC、CPU 及业务指标等数据。

**选项辨析：**

- A：正确。符合指标端点。
- B：错误。不修改源码。
- C：错误。不负责备份。
- D：错误。不创建控制器。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Actuator、综合实战与工程化；https://docs.spring.io/spring-boot/reference/actuator/index.html

### SPRING-231（单选题）

- **知识点**：health依赖
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A

**解析：** 课件列举了数据库、MQ、Redis 等依赖的连通性与可用性检查。

**选项辨析：**

- A：正确。符合课件范围。
- B：错误。不是健康检查重点。
- C：错误。不是唯一依赖。
- D：错误。与运行健康无关。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Actuator、综合实战与工程化；https://docs.spring.io/spring-boot/reference/actuator/index.html

### SPRING-232（单选题）

- **知识点**：可观测性
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A

**解析：** 端点将 Bean、环境、日志级别和指标等内部状态以标准形式呈现。

**选项辨析：**

- A：正确。符合可观测性价值。
- B：错误。Actuator 不要求删除日志。
- C：错误。关闭端点会降低可观测性。
- D：错误。与语言无关。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Actuator、综合实战与工程化；https://docs.spring.io/spring-boot/reference/actuator/index.html

### SPRING-233（单选题）

- **知识点**：JMX支持
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A

**解析：** 课件明确提到 Actuator 兼容 JMX 协议。

**选项辨析：**

- A：正确。符合课件。
- B：错误。FTP 是文件传输。
- C：错误。SMTP 是邮件协议。
- D：错误。并非唯一管理方式。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Actuator、综合实战与工程化；https://docs.spring.io/spring-boot/reference/actuator/index.html

### SPRING-234（单选题）

- **知识点**：指标生态
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A

**解析：** Micrometer 提供统一指标抽象，便于接入监控系统。

**选项辨析：**

- A：正确。符合课件。
- B：错误。不是指标规范。
- C：错误。不是监控抽象。
- D：错误。是测试框架。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Actuator、综合实战与工程化；https://docs.spring.io/spring-boot/reference/actuator/index.html

### SPRING-235（单选题）

- **知识点**：端点控制
- **难度**：难
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A

**解析：** Actuator 支持端点暴露范围和权限的灵活控制。

**选项辨析：**

- A：正确。符合安全运维策略。
- B：错误。日志与端点暴露不同。
- C：错误。不应伪装业务接口。
- D：错误。会导致应用无法提供服务。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Actuator、综合实战与工程化；https://docs.spring.io/spring-boot/reference/actuator/index.html

### SPRING-236（单选题）

- **知识点**：Actuator价值
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A

**解析：** 运行状态、依赖健康和性能指标可为故障定位提供证据。

**选项辨析：**

- A：正确。符合运维价值。
- B：错误。不能替代业务修复。
- C：错误。不替代测试。
- D：错误。不负责需求文档。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Actuator、综合实战与工程化；https://docs.spring.io/spring-boot/reference/actuator/index.html

### SPRING-237（单选题）

- **知识点**：starter-actuator
- **难度**：易
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A

**解析：** 通过起步依赖即可集成 Actuator 的端点能力。

**选项辨析：**

- A：正确。符合开箱即用方式。
- B：错误。与监控无关。
- C：错误。不是监控依赖。
- D：错误。JDK 不以此方式引入。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Actuator、综合实战与工程化；https://docs.spring.io/spring-boot/reference/actuator/index.html

### SPRING-238（单选题）

- **知识点**：内嵌服务器
- **难度**：易
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A

**解析：** 内嵌模式将 Web 服务器内核随应用一起交付。

**选项辨析：**

- A：正确。符合定义。
- B：错误。正是减少外部容器依赖。
- C：错误。浏览器不是服务器。
- D：错误。应用并非静态文件。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Actuator、综合实战与工程化；https://docs.spring.io/spring-boot/documentation.html

### SPRING-239（单选题）

- **知识点**：可执行Jar
- **难度**：易
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A

**解析：** 可执行 JAR 搭配 java -jar 即可启动完整应用。

**选项辨析：**

- A：正确。符合课件命令。
- B：错误。不是 Java 项目的命令。
- C：错误。不是 SQL 命令。
- D：错误。不是 Python 命令。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Actuator、综合实战与工程化；https://docs.spring.io/spring-boot/documentation.html

### SPRING-240（单选题）

- **知识点**：部署一致性
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A

**解析：** 容器与应用一体交付，可降低外部容器版本差异。

**选项辨析：**

- A：正确。符合环境一致性。
- B：错误。与设计目标相反。
- C：错误。浏览器不承载服务器配置。
- D：错误。不禁止自动化。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Actuator、综合实战与工程化；https://docs.spring.io/spring-boot/documentation.html

### SPRING-241（单选题）

- **知识点**：内嵌容器类型
- **难度**：易
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：D

**解析：** Tomcat、Jetty 和 Undertow 都是 Web 容器，MySQL 是数据库。

**选项辨析：**

- A：错误。课件列举的容器。
- B：错误。课件列举的容器。
- C：错误。课件列举的容器。
- D：正确。MySQL 不是 Web 服务器。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Actuator、综合实战与工程化；https://docs.spring.io/spring-boot/documentation.html

### SPRING-242（单选题）

- **知识点**：REST入口
- **难度**：易
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A

**解析：** @RestController 用于 RESTful 控制器，方法返回值可直接写入响应。

**选项辨析：**

- A：正确。符合示例。
- B：错误。数据访问层注解。
- C：错误。配置类注解。
- D：错误。切面注解。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Actuator、综合实战与工程化；https://docs.spring.io/spring-boot/documentation.html

### SPRING-243（单选题）

- **知识点**：请求映射
- **难度**：易
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A

**解析：** 类级映射为控制器方法提供 /hello 基础路径。

**选项辨析：**

- A：正确。符合 MVC 映射用途。
- B：错误。不是事务注解。
- C：错误。不是 Actuator 端点。
- D：错误。不是日志配置。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Actuator、综合实战与工程化；https://docs.spring.io/spring-boot/documentation.html

### SPRING-244（单选题）

- **知识点**：GET映射
- **难度**：易
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A

**解析：** @GetMapping 将方法映射到 GET 请求。

**选项辨析：**

- A：正确。符合代码示例。
- B：错误。生命周期注解。
- C：错误。注册 Bean。
- D：错误。启动自动配置。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Actuator、综合实战与工程化；https://docs.spring.io/spring-boot/documentation.html

### SPRING-245（单选题）

- **知识点**：请求参数
- **难度**：易
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A

**解析：** 访问 /hello?name=Spring 时，name 参数被绑定到方法参数。

**选项辨析：**

- A：正确。符合示例。
- B：错误。不是文件体绑定。
- C：错误。不是状态码读取。
- D：错误。与数据库约束无关。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Actuator、综合实战与工程化；https://docs.spring.io/spring-boot/documentation.html

### SPRING-246（单选题）

- **知识点**：REST响应
- **难度**：易
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A

**解析：** 示例方法返回字符串并由 REST 控制器写入 HTTP 200 响应。

**选项辨析：**

- A：正确。符合课件示例。
- B：错误。示例请求可正常匹配。
- C：错误。不是示例结果。
- D：错误。方法拼接后不会是 null。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Actuator、综合实战与工程化；https://docs.spring.io/spring-boot/documentation.html

### SPRING-247（单选题）

- **知识点**：启动入口
- **难度**：易
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A

**解析：** SpringApplication.run 创建并启动应用上下文。

**选项辨析：**

- A：正确。符合启动代码。
- B：错误。不是标准 API。
- C：错误。不是启动容器。
- D：错误。不是 Boot API。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Actuator、综合实战与工程化；https://docs.spring.io/spring-boot/documentation.html

### SPRING-248（单选题）

- **知识点**：启动注解
- **难度**：易
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A

**解析：** 该组合注解是 Boot 应用入口的总开关。

**选项辨析：**

- A：正确。符合课件。
- B：错误。参数绑定注解。
- C：错误。请求映射注解。
- D：错误。测试替身注解。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Actuator、综合实战与工程化；https://docs.spring.io/spring-boot/documentation.html

### SPRING-249（单选题）

- **知识点**：启动流程
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A

**解析：** run 会创建、准备和刷新应用上下文并启动应用。

**选项辨析：**

- A：正确。符合 Boot 启动机制。
- B：错误。不是唯一动作。
- C：错误。编译在构建阶段完成。
- D：错误。不会只打开浏览器。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Actuator、综合实战与工程化；https://docs.spring.io/spring-boot/documentation.html

### SPRING-250（单选题）

- **知识点**：请求路径组合
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A

**解析：** 类级路径与方法级路径组合形成最终请求路径。

**选项辨析：**

- A：正确。符合映射组合。
- B：错误。顺序相反。
- C：错误。缺少方法路径。
- D：错误。过于简化。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Actuator、综合实战与工程化；https://docs.spring.io/spring-boot/documentation.html

### SPRING-251（单选题）

- **知识点**：HTTP状态
- **难度**：易
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A

**解析：** 课件示例明确给出 HTTP 200。

**选项辨析：**

- A：正确。表示成功。
- B：错误。重定向。
- C：错误。资源不存在。
- D：错误。服务器错误。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Actuator、综合实战与工程化；https://docs.spring.io/spring-boot/documentation.html

### SPRING-252（单选题）

- **知识点**：SpringBoot非新框架
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A

**解析：** Boot 使用 Spring 核心能力并提供自动配置、Starter 和部署便利。

**选项辨析：**

- A：正确。符合课件总结。
- B：错误。不是取代关系。
- C：错误。不是前端框架。
- D：错误。二者可协同。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Actuator、综合实战与工程化；https://docs.spring.io/spring-boot/documentation.html

### SPRING-253（单选题）

- **知识点**：工程骨架
- **难度**：易
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A

**解析：** Initializr 降低初始化成本，让项目快速进入业务开发。

**选项辨析：**

- A：正确。符合课件。
- B：错误。不会自动生成业务规则。
- C：错误。不负责监控。
- D：错误。不创建业务数据。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Actuator、综合实战与工程化；https://docs.spring.io/spring-boot/documentation.html

### SPRING-254（单选题）

- **知识点**：配置方式对比
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A

**解析：** Boot 用合理默认值和自动配置减少样板配置，同时保留覆盖能力。

**选项辨析：**

- A：正确。符合对比。
- B：错误。仍可配置。
- C：错误。不限定 XML。
- D：错误。正是减少手工注册。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Actuator、综合实战与工程化；https://docs.spring.io/spring-boot/documentation.html

### SPRING-255（单选题）

- **知识点**：依赖管理对比
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A

**解析：** Starter 配合 Boot 依赖管理，减少手工协调和版本冲突。

**选项辨析：**

- A：正确。符合对比。
- B：错误。不会修改 JDK。
- C：错误。仍支持第三方库。
- D：错误。版本选择不是随机。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Actuator、综合实战与工程化；https://docs.spring.io/spring-boot/documentation.html

### SPRING-256（单选题）

- **知识点**：部署对比
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A

**解析：** 课件对比强调外部容器依赖与独立 JAR 交付差异。

**选项辨析：**

- A：正确。符合课件。
- B：错误。不符合服务器概念。
- C：错误。Boot 可执行 JAR 不必 WAR。
- D：错误。内嵌服务器减少外部依赖。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Actuator、综合实战与工程化；https://docs.spring.io/spring-boot/documentation.html

### SPRING-257（单选题）

- **知识点**：开发效率对比
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A

**解析：** 标准骨架和自动配置使开发者更快聚焦业务逻辑。

**选项辨析：**

- A：正确。符合课件。
- B：错误。不会自动生成测试结果。
- C：错误。仍需 Java 工具链。
- D：错误。业务代码仍由开发者编写。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Actuator、综合实战与工程化；https://docs.spring.io/spring-boot/documentation.html

### SPRING-258（单选题）

- **知识点**：监控对比
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A

**解析：** Actuator 降低监控集成成本并提供标准端点。

**选项辨析：**

- A：正确。符合课件。
- B：错误。不能保证无故障。
- C：错误。仍应进行安全控制。
- D：错误。不要求写业务 Controller。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Actuator、综合实战与工程化；https://docs.spring.io/spring-boot/reference/actuator/index.html

### SPRING-259（单选题）

- **知识点**：学习曲线
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A

**解析：** Boot 通过默认配置和脚手架降低入门门槛，但核心原理仍值得理解。

**选项辨析：**

- A：正确。符合课件。
- B：错误。不是取消 IoC。
- C：错误。不改变 Java 语法。
- D：错误。不是纯图形化工具。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Actuator、综合实战与工程化；https://docs.spring.io/spring-boot/documentation.html

### SPRING-260（单选题）

- **知识点**：SpringBootConfiguration
- **难度**：难
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A

**解析：** 它显式标识应用的核心配置类，可声明 @Bean。

**选项辨析：**

- A：正确。符合课件。
- B：错误。不是请求参数。
- C：错误。不是事务切面。
- D：错误。不是指标采集器。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Actuator、综合实战与工程化；https://docs.spring.io/spring-boot/documentation.html

### SPRING-261（单选题）

- **知识点**：ComponentScan范围
- **难度**：难
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A

**解析：** 默认扫描范围从主配置类包向下展开。

**选项辨析：**

- A：正确。符合课件。
- B：错误。不会扫描磁盘。
- C：错误。不扫描 JDK。
- D：错误。resources 不是组件包。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Actuator、综合实战与工程化；https://docs.spring.io/spring-boot/documentation.html

### SPRING-262（单选题）

- **知识点**：EnableAutoConfiguration
- **难度**：难
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A

**解析：** 自动配置根据类路径和条件智能装配基础组件。

**选项辨析：**

- A：正确。符合课件。
- B：错误。与用户姓名无关。
- C：错误。不按源码行数。
- D：错误。与显示器无关。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Actuator、综合实战与工程化；https://docs.spring.io/spring-boot/documentation.html

### SPRING-263（单选题）

- **知识点**：ConfigurationProperties
- **难度**：难
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A

**解析：** 它适合映射一组层次化属性并提供类型安全和 IDE 支持。

**选项辨析：**

- A：正确。符合课件。
- B：错误。不只支持字符串。
- C：错误。不负责写库。
- D：错误。可提升 IDE 体验。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Actuator、综合实战与工程化；https://docs.spring.io/spring-boot/documentation.html

### SPRING-264（单选题）

- **知识点**：条件装配
- **难度**：难
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A

**解析：** 条件注解实现按需加载，是 Boot 约定式设计的底层保障。

**选项辨析：**

- A：正确。符合课件。
- B：错误。条件不满足时可不注入。
- C：错误。不是前端机制。
- D：错误。不替代构建工具。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Actuator、综合实战与工程化；https://docs.spring.io/spring-boot/documentation.html

### SPRING-265（单选题）

- **知识点**：端点安全
- **难度**：难
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A

**解析：** 端点虽便于运维，但需要最小化暴露并做好权限管控。

**选项辨析：**

- A：正确。符合课件的权限管控要求。
- B：错误。与端点安全无关。
- C：错误。无关。
- D：错误。不是核心控制项。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Actuator、综合实战与工程化；https://docs.spring.io/spring-boot/reference/actuator/index.html

### SPRING-266（单选题）

- **知识点**：指标含义
- **难度**：难
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A

**解析：** GC 等指标可帮助识别性能瓶颈和资源使用情况。

**选项辨析：**

- A：正确。符合课件。
- B：错误。不替代验收。
- C：错误。与头像无关。
- D：错误。不修改路由。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Actuator、综合实战与工程化；https://docs.spring.io/spring-boot/reference/actuator/index.html

### SPRING-267（单选题）

- **知识点**：健康探测
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A

**解析：** health 的可用性状态可作为存活和依赖健康判断依据。

**选项辨析：**

- A：正确。符合课件。
- B：错误。info 是元数据。
- C：错误。metrics 是指标。
- D：错误。不是课件端点。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Actuator、综合实战与工程化；https://docs.spring.io/spring-boot/reference/actuator/index.html

### SPRING-268（单选题）

- **知识点**：版本追溯
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A

**解析：** info 可展示版本号、提交记录和构建时间。

**选项辨析：**

- A：正确。符合端点用途。
- B：错误。health 只表达健康。
- C：错误。metrics 表达指标。
- D：错误。不是课件内容。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Actuator、综合实战与工程化；https://docs.spring.io/spring-boot/reference/actuator/index.html

### SPRING-269（单选题）

- **知识点**：Boot三大特性
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：D

**解析：** 课件把自动配置、Starter 和 Actuator 作为三大特性，强调减少 XML。

**选项辨析：**

- A：错误。属于核心特性。
- B：错误。属于核心特性。
- C：错误。属于核心特性。
- D：正确。与 Boot 设计相反。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Actuator、综合实战与工程化；https://docs.spring.io/spring-boot/documentation.html

### SPRING-270（单选题）

- **知识点**：Starter-web组成
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：D

**解析：** 课件列出 MVC、Tomcat 和 Jackson 作为 Web Starter 的典型组件。

**选项辨析：**

- A：错误。属于 Web 组件。
- B：错误。属于内嵌容器。
- C：错误。用于 JSON 序列化。
- D：正确。不是该页列举内容。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Actuator、综合实战与工程化；https://docs.spring.io/spring-boot/documentation.html

## 多选题

### SPRING-271（多选题）

- **知识点**：Actuator端点
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A、B、C

**解析：** 三类端点分别覆盖健康、元数据和性能指标；它们不是业务数据修改接口。

**选项辨析：**

- A：正确。符合课件。
- B：正确。符合课件。
- C：正确。符合课件。
- D：错误。端点定位不是修改业务数据。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Actuator、综合实战与工程化；https://docs.spring.io/spring-boot/reference/actuator/index.html

### SPRING-272（多选题）

- **知识点**：Actuator可观测性
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A、B、C

**解析：** 课件列举 Bean、环境、日志级别和运行指标，员工考勤不属于 Actuator 范围。

**选项辨析：**

- A：正确。属于内部运行细节。
- B：正确。属于内部状态。
- C：正确。属于性能指标。
- D：错误。不是应用运行端点内容。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Actuator、综合实战与工程化；https://docs.spring.io/spring-boot/reference/actuator/index.html

### SPRING-273（多选题）

- **知识点**：健康检查
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A、B、C

**解析：** 数据库、MQ 和 Redis 的连通性与可用性都可作为健康检查内容。

**选项辨析：**

- A：正确。符合课件。
- B：正确。符合课件。
- C：正确。符合课件。
- D：错误。不属于服务依赖健康检查。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Actuator、综合实战与工程化；https://docs.spring.io/spring-boot/reference/actuator/index.html

### SPRING-274（多选题）

- **知识点**：指标系统
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A、B、C

**解析：** 指标能支撑分析、调优和可视化监控，但不能替代测试。

**选项辨析：**

- A：正确。符合课件。
- B：正确。符合课件。
- C：正确。符合课件。
- D：错误。测试仍需独立进行。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Actuator、综合实战与工程化；https://docs.spring.io/spring-boot/reference/actuator/index.html

### SPRING-275（多选题）

- **知识点**：端点治理
- **难度**：难
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A、B、C

**解析：** 端点暴露应遵循按需和权限控制原则，避免敏感信息无保护公开。

**选项辨析：**

- A：正确。符合课件。
- B：正确。符合课件。
- C：正确。符合课件。
- D：错误。不符合安全治理。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Actuator、综合实战与工程化；https://docs.spring.io/spring-boot/reference/actuator/index.html

### SPRING-276（多选题）

- **知识点**：内嵌服务器
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A、B、C

**解析：** 内嵌容器随应用交付，减少外部服务器依赖。

**选项辨析：**

- A：正确。符合课件。
- B：正确。符合课件。
- C：正确。符合课件。
- D：错误。正是内嵌模式要减少的步骤。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Actuator、综合实战与工程化；https://docs.spring.io/spring-boot/documentation.html

### SPRING-277（多选题）

- **知识点**：部署一致性
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A、B、C

**解析：** 应用与容器一体化交付可简化部署并减少环境漂移。

**选项辨析：**

- A：正确。符合课件。
- B：正确。符合课件。
- C：正确。符合课件。
- D：错误。生产部署不要求 IDE。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Actuator、综合实战与工程化；https://docs.spring.io/spring-boot/documentation.html

### SPRING-278（多选题）

- **知识点**：REST控制器
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A、B、C

**解析：** 前三项共同完成控制器声明、路径映射和 HTTP 方法映射；启动注解属于应用入口。

**选项辨析：**

- A：正确。控制器声明。
- B：正确。类级路径。
- C：正确。GET 方法映射。
- D：错误。启动类入口注解，不是控制器接口元素。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Actuator、综合实战与工程化；https://docs.spring.io/spring-boot/documentation.html

### SPRING-279（多选题）

- **知识点**：REST请求
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A、B、C

**解析：** 示例代码通过参数拼接返回 Hello, Spring! 并以 200 响应。

**选项辨析：**

- A：正确。符合示例。
- B：正确。符合示例。
- C：正确。符合示例。
- D：错误。方法会返回拼接后的问候语，不是 null。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Actuator、综合实战与工程化；https://docs.spring.io/spring-boot/documentation.html

### SPRING-280（多选题）

- **知识点**：启动类
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A、B、C

**解析：** 启动类通过组合注解和 run 方法启动应用，不需要外部容器脚本。

**选项辨析：**

- A：正确。符合示例。
- B：正确。符合 Java 入口。
- C：正确。符合 Boot 启动。
- D：错误。与内嵌服务器理念相反。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Actuator、综合实战与工程化；https://docs.spring.io/spring-boot/documentation.html

### SPRING-281（多选题）

- **知识点**：SpringBootApplication
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A、B、C

**解析：** 该注解组合配置、自动配置和组件扫描，不会生成业务逻辑。

**选项辨析：**

- A：正确。符合课件。
- B：正确。符合课件。
- C：正确。符合课件。
- D：错误。业务规则需人工编写。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Actuator、综合实战与工程化；https://docs.spring.io/spring-boot/documentation.html

### SPRING-282（多选题）

- **知识点**：组件扫描
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A、B、C

**解析：** 默认扫描主配置类包及子包中的 Spring 组件。

**选项辨析：**

- A：正确。符合课件。
- B：正确。符合课件。
- C：正确。符合课件。
- D：错误。扫描有明确包边界。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Actuator、综合实战与工程化；https://docs.spring.io/spring-boot/documentation.html

### SPRING-283（多选题）

- **知识点**：自动配置
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A、B、C

**解析：** 自动配置服务于基础设施并受条件约束，不代替业务代码。

**选项辨析：**

- A：正确。符合课件。
- B：正确。符合课件。
- C：正确。符合课件。
- D：错误。业务逻辑仍由开发者实现。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Actuator、综合实战与工程化；https://docs.spring.io/spring-boot/documentation.html

### SPRING-284（多选题）

- **知识点**：配置绑定
- **难度**：难
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A、B、C

**解析：** 类型化对象、分组配置、松散绑定和 IDE 支持是课件强调的优点。

**选项辨析：**

- A：正确。符合课件。
- B：正确。符合课件。
- C：正确。符合课件。
- D：错误。能力不止单字符串。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Actuator、综合实战与工程化；https://docs.spring.io/spring-boot/documentation.html

### SPRING-285（多选题）

- **知识点**：条件注解
- **难度**：难
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A、B、C

**解析：** 条件装配可以根据类路径、属性和环境等因素动态生效。

**选项辨析：**

- A：正确。符合课件。
- B：正确。符合课件。
- C：正确。符合课件。
- D：错误。不是工程条件。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Actuator、综合实战与工程化；https://docs.spring.io/spring-boot/documentation.html

### SPRING-286（多选题）

- **知识点**：Starter组成
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A、B、C

**解析：** Web Starter 典型提供 MVC、Tomcat 和 Jackson；JDBC 事务不是该页列举项。

**选项辨析：**

- A：正确。符合课件。
- B：正确。符合课件。
- C：正确。符合课件。
- D：错误。不属于课件列出的 starter-web 组成。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Actuator、综合实战与工程化；https://docs.spring.io/spring-boot/documentation.html

### SPRING-287（多选题）

- **知识点**：Starter价值
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A、B、C

**解析：** Starter 聚合依赖并由 Boot 管理版本，业务逻辑仍需开发。

**选项辨析：**

- A：正确。符合课件。
- B：正确。符合课件。
- C：正确。符合课件。
- D：错误。不生成业务逻辑。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Actuator、综合实战与工程化；https://docs.spring.io/spring-boot/documentation.html

### SPRING-288（多选题）

- **知识点**：Boot对比配置
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A、B、C

**解析：** Boot 采用默认约定并允许开发者按需覆盖配置。

**选项辨析：**

- A：正确。符合课件。
- B：正确。符合课件。
- C：正确。符合课件。
- D：错误。自定义配置仍然允许。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Actuator、综合实战与工程化；https://docs.spring.io/spring-boot/documentation.html

### SPRING-289（多选题）

- **知识点**：Boot对比部署
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A、B、C

**解析：** Boot 将应用与容器一起交付，减少外部容器依赖。

**选项辨析：**

- A：正确。符合课件。
- B：正确。符合课件。
- C：正确。符合课件。
- D：错误。与 Boot 优势相反。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Actuator、综合实战与工程化；https://docs.spring.io/spring-boot/documentation.html

### SPRING-290（多选题）

- **知识点**：Boot对比运维
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A、B、C

**解析：** Actuator 提升可观测性，但不能保证业务永不故障。

**选项辨析：**

- A：正确。符合课件。
- B：正确。符合课件。
- C：正确。符合课件。
- D：错误。属于夸大表述。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Actuator、综合实战与工程化；https://docs.spring.io/spring-boot/reference/actuator/index.html

### SPRING-291（多选题）

- **知识点**：Initializr
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A、B、C

**解析：** Initializr 负责骨架和依赖初始化，不会替代业务开发。

**选项辨析：**

- A：正确。符合课件。
- B：正确。符合课件。
- C：正确。符合课件。
- D：错误。超出工具定位。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Actuator、综合实战与工程化；https://docs.spring.io/spring-boot/documentation.html

### SPRING-292（多选题）

- **知识点**：工程实践
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A、B、C

**解析：** Boot 的工程化能力减少样板工作，但测试仍是质量保障的重要环节。

**选项辨析：**

- A：正确。符合课件。
- B：正确。符合课件。
- C：正确。符合课件。
- D：错误。不应取消测试。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Actuator、综合实战与工程化；https://docs.spring.io/spring-boot/documentation.html

### SPRING-293（多选题）

- **知识点**：端点与协议
- **难度**：难
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A、B、C

**解析：** 课件提到 HTTP 和 JMX 两种方式，端点不要求业务 Controller。

**选项辨析：**

- A：正确。符合课件。
- B：正确。符合课件。
- C：正确。符合课件。
- D：错误。不符合 Actuator 定位。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Actuator、综合实战与工程化；https://docs.spring.io/spring-boot/reference/actuator/index.html

### SPRING-294（多选题）

- **知识点**：health运维
- **难度**：中
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A、B、C

**解析：** health 面向健康状态和依赖可用性，Git 信息属于 info。

**选项辨析：**

- A：正确。符合课件。
- B：正确。符合课件。
- C：正确。符合课件。
- D：错误。属于 info 端点内容。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Actuator、综合实战与工程化；https://docs.spring.io/spring-boot/reference/actuator/index.html

### SPRING-295（多选题）

- **知识点**：info运维
- **难度**：难
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A、B、C

**解析：** 版本、提交和构建时间是 info 元数据；GC 频率属于 metrics。

**选项辨析：**

- A：正确。符合课件。
- B：正确。符合课件。
- C：正确。符合课件。
- D：错误。属于 metrics 指标。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Actuator、综合实战与工程化；https://docs.spring.io/spring-boot/reference/actuator/index.html

### SPRING-296（多选题）

- **知识点**：metrics运维
- **难度**：难
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A、B、C

**解析：** metrics 提供性能数据用于分析和调优，不执行数据库结构变更。

**选项辨析：**

- A：正确。符合课件。
- B：正确。符合课件。
- C：正确。符合课件。
- D：错误。不属于指标端点职责。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Actuator、综合实战与工程化；https://docs.spring.io/spring-boot/reference/actuator/index.html

### SPRING-297（多选题）

- **知识点**：安全管控
- **难度**：难
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A、B、C

**解析：** 最小暴露和权限控制能降低监控端点泄露风险。

**选项辨析：**

- A：正确。符合端点治理。
- B：正确。符合端点治理。
- C：正确。符合安全要求。
- D：错误。不安全。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Actuator、综合实战与工程化；https://docs.spring.io/spring-boot/reference/actuator/index.html

### SPRING-298（多选题）

- **知识点**：控制器映射
- **难度**：难
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A、B、C

**解析：** 示例通过注解完成映射和参数绑定，体现 Boot 减少样板配置。

**选项辨析：**

- A：正确。符合 MVC 规则。
- B：正确。符合 MVC 规则。
- C：正确。符合示例。
- D：错误。不需要手写该配置。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Actuator、综合实战与工程化；https://docs.spring.io/spring-boot/documentation.html

### SPRING-299（多选题）

- **知识点**：应用启动
- **难度**：难
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A、B、C

**解析：** run 是应用启动入口，会创建并刷新上下文，不只是打印日志。

**选项辨析：**

- A：正确。符合示例。
- B：正确。符合启动机制。
- C：正确。符合示例。
- D：错误。作用远不止打印日志。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Actuator、综合实战与工程化；https://docs.spring.io/spring-boot/documentation.html

### SPRING-300（多选题）

- **知识点**：Spring与Boot
- **难度**：难
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **答案**：A、B、C

**解析：** Boot 使用 Spring 的 IoC/AOP 等能力并提供工程化封装。

**选项辨析：**

- A：正确。符合课件。
- B：正确。符合课件。
- C：正确。符合关系。
- D：错误。不会使核心机制失效。

**官方参考：** 张琦-Spring & Spring Boot技术培训.pdf#Actuator、综合实战与工程化；https://docs.spring.io/spring-boot/documentation.html

# 第5讲：Spring Cloud 微服务架构及核心组件

## 单选题

### SPRING-301（单选题）

- **知识点**：微服务架构
- **难度**：易
- **课件依据**：Spring Cloud 开发课件.pdf 第3页
- **答案**：A

**解析：** 微服务强调围绕清晰的业务边界拆分，每个服务承担相对独立的业务能力并可独立部署。

**选项辨析：**

- A：正确。业务边界是主要依据。
- B：错误。类级拆分会制造大量网络开销。
- C：错误。字段不是服务边界。
- D：错误。人员姓名不是架构边界。

**官方参考：** https://spring.io/projects/spring-cloud

### SPRING-302（单选题）

- **知识点**：微服务架构
- **难度**：易
- **课件依据**：Spring Cloud 开发课件.pdf 第3页
- **答案**：A

**解析：** 独立部署让局部变更不必牵动整个系统，也是微服务自治性的直接体现。

**选项辨析：**

- A：正确。独立发布和扩展是核心。
- B：错误。同时停机与独立部署相反。
- C：错误。共享进程更接近单体。
- D：错误。微服务依赖轻量网络通信。

**官方参考：** https://spring.io/projects/spring-cloud

### SPRING-303（单选题）

- **知识点**：微服务架构
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第3页
- **答案**：A

**解析：** 独立进程和服务边界可以把故障影响限制在局部，再配合超时、熔断等机制阻断扩散。

**选项辨析：**

- A：正确。故障隔离是微服务优势。
- B：错误。日志与是否隔离无关。
- C：错误。共享资源可能扩大影响。
- D：错误。取消边界会退回单体模式。

**官方参考：** https://spring.io/projects/spring-cloud

### SPRING-304（单选题）

- **知识点**：Spring Boot与Cloud
- **难度**：易
- **课件依据**：Spring Cloud 开发课件.pdf 第3页
- **答案**：A

**解析：** Boot提供约定式配置、内嵌服务器和可执行JAR等应用基础；Cloud治理服务发现、调用、网关和容错。

**选项辨析：**

- A：正确。这是课件的定位概括。
- B：错误。二者都不是前端或数据库专用工具。
- C：错误。它们是生态组件而非语言。
- D：错误。Cloud不替代JVM。

**官方参考：** https://spring.io/projects/spring-cloud

### SPRING-305（单选题）

- **知识点**：生态组件
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第3页
- **答案**：A

**解析：** Gateway在入口处承担路由、鉴权、限流和过滤等职责。

**选项辨析：**

- A：正确。Gateway是统一入口。
- B：错误。Nacos主要管理注册和配置。
- C：错误。Feign是服务调用客户端。
- D：错误。规则文件不是入口组件。

**官方参考：** https://spring.io/projects/spring-cloud

### SPRING-306（单选题）

- **知识点**：生态选型
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第4页
- **答案**：A

**解析：** 课件指出Eureka、Hystrix等传统组件进入维护模式，国内实践更多采用Nacos、Sentinel等Alibaba体系组件。

**选项辨析：**

- A：正确。这是课件的生态演进结论。
- B：错误。JSP不是服务治理方案。
- C：错误。EJB不是Cloud替代体系。
- D：错误。微服务仍需要治理。

**官方参考：** https://spring.io/projects/spring-cloud

### SPRING-307（单选题）

- **知识点**：服务注册
- **难度**：易
- **课件依据**：Spring Cloud 开发课件.pdf 第5页
- **答案**：A

**解析：** 注册是服务提供者向注册中心登记身份和元数据，使消费者能够发现它。

**选项辨析：**

- A：正确。描述的是注册。
- B：错误。熔断是容错机制。
- C：错误。降级是兜底策略。
- D：错误。过滤是网关能力。

**官方参考：** https://nacos.io/docs/latest/what-is-nacos/

### SPRING-308（单选题）

- **知识点**：服务发现
- **难度**：易
- **课件依据**：Spring Cloud 开发课件.pdf 第5页
- **答案**：A

**解析：** 服务发现让消费者获得提供者地址，随后才能选择目标实例发起调用。

**选项辨析：**

- A：正确。这是发现过程。
- B：错误。编译与寻址无关。
- C：错误。回滚是配置治理。
- D：错误。链路采样是观测能力。

**官方参考：** https://nacos.io/docs/latest/what-is-nacos/

### SPRING-309（单选题）

- **知识点**：心跳续约
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第5页
- **答案**：A

**解析：** 实例以心跳续约维持活性，超时未续约时注册中心可以把异常实例移出可用列表。

**选项辨析：**

- A：正确。心跳是存活检测机制。
- B：错误。业务表不能直接表示实例活性。
- C：错误。网关不能靠猜测。
- D：错误。编译器不负责服务发现。

**官方参考：** https://nacos.io/docs/latest/what-is-nacos/

### SPRING-310（单选题）

- **知识点**：注册中心缓存
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第5页
- **答案**：A

**解析：** 本地缓存降低调用链路中的注册中心压力，同时仍需通过更新机制感知实例变化。

**选项辨析：**

- A：正确。缓存减少重复远程查询。
- B：错误。缓存不能保证实例永远在线。
- C：错误。与数据库查询无关。
- D：错误。不能因此取消健康检查。

**官方参考：** https://nacos.io/docs/latest/what-is-nacos/

### SPRING-311（单选题）

- **知识点**：Nacos定位
- **难度**：易
- **课件依据**：Spring Cloud 开发课件.pdf 第6页
- **答案**：A

**解析：** Nacos同时提供服务注册发现和集中配置管理能力，可以减少微服务基础设施的层级。

**选项辨析：**

- A：正确。这是Nacos的双重定位。
- B：错误。日志Agent不是其主要定位。
- C：错误。页面渲染不属于Nacos。
- D：错误。不是编译器插件。

**官方参考：** https://nacos.io/docs/latest/what-is-nacos/

### SPRING-312（单选题）

- **知识点**：Nacos模式
- **难度**：难
- **课件依据**：Spring Cloud 开发课件.pdf 第6页
- **答案**：A

**解析：** 课件建议基础治理组件务实偏向AP，在分区时优先保持服务发现可用。

**选项辨析：**

- A：正确。符合课件的AP取舍。
- B：错误。完全不可用会放大故障。
- C：错误。关闭健康检查会引入脏实例。
- D：错误。硬编码地址破坏治理。

**官方参考：** https://spring.io/projects/spring-cloud

### SPRING-313（单选题）

- **知识点**：临时实例
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第6页
- **答案**：A

**解析：** 临时实例的可用状态依赖心跳，超时后从服务列表移除是为了避免流量打到故障节点。

**选项辨析：**

- A：正确。这是健康摘除行为。
- B：错误。实例摘除不等于删除业务数据。
- C：错误。不会因此重启全体服务。
- D：错误。与命名空间删除无关。

**官方参考：** https://nacos.io/docs/latest/what-is-nacos/

### SPRING-314（单选题）

- **知识点**：OpenFeign
- **难度**：易
- **课件依据**：Spring Cloud 开发课件.pdf 第7页
- **答案**：A

**解析：** Feign把远程调用契约写成接口和映射注解，减少手工拼接URL及请求模板代码。

**选项辨析：**

- A：正确。声明式远程调用是核心。
- B：错误。Feign通常结合注册发现使用。
- C：错误。不负责表结构变更。
- D：错误。不生成CSS。

**官方参考：** https://spring.io/projects/spring-cloud

### SPRING-315（单选题）

- **知识点**：OpenFeign
- **难度**：易
- **课件依据**：Spring Cloud 开发课件.pdf 第7页
- **答案**：A

**解析：** @FeignClient和映射注解共同描述目标服务、路径与参数，调用方按接口使用即可。

**选项辨析：**

- A：正确。这是声明式Feign接口。
- B：错误。硬编码URL难以治理。
- C：错误。打印语句不是远程契约。
- D：错误。线程创建与Feign无关。

**官方参考：** https://spring.io/projects/spring-cloud

### SPRING-316（单选题）

- **知识点**：LoadBalancer
- **难度**：易
- **课件依据**：Spring Cloud 开发课件.pdf 第7页
- **答案**：A

**解析：** LoadBalancer在客户端调用前选择实例，实现多实例流量分发和基本的故障规避。

**选项辨析：**

- A：正确。实例选择是其职责。
- B：错误。配置集中管理由Nacos等组件完成。
- C：错误。它不应伪造业务成功。
- D：错误。日志不是主要职责。

**官方参考：** https://spring.io/projects/spring-cloud

### SPRING-317（单选题）

- **知识点**：LoadBalancer策略
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第7页
- **答案**：A

**解析：** 轮询按固定顺序分发，简单公平；当节点性能差异显著时应考虑权重或响应时间策略。

**选项辨析：**

- A：正确。同构节点最适合轮询。
- B：错误。一个实例不体现负载均衡。
- C：错误。异构节点可能需要权重。
- D：错误。仍需可用实例列表。

**官方参考：** https://spring.io/projects/spring-cloud

### SPRING-318（单选题）

- **知识点**：LoadBalancer策略
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第7页
- **答案**：A

**解析：** 该策略根据历史响应表现动态调整权重，倾向于选择更快的实例。

**选项辨析：**

- A：正确。响应时间是核心依据。
- B：错误。名称顺序不是性能指标。
- C：错误。文件大小不能代表服务性能。
- D：错误。屏幕分辨率与服务选择无关。

**官方参考：** https://spring.io/projects/spring-cloud

### SPRING-319（单选题）

- **知识点**：RestTemplate
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第7页
- **答案**：A

**解析：** @LoadBalanced为RestTemplate接入服务实例选择能力，使服务名可以解析为某个可用实例。

**选项辨析：**

- A：正确。这是注解的主要意义。
- B：错误。不是数据库连接池。
- C：错误。不会自动关闭健康检查。
- D：错误。与浏览器无关。

**官方参考：** https://spring.io/projects/spring-cloud

### SPRING-320（单选题）

- **知识点**：超时治理
- **难度**：难
- **课件依据**：Spring Cloud 开发课件.pdf 第8页
- **答案**：A

**解析：** 合理超时是隔离慢依赖的基础；无超时可能耗尽线程池并诱发雪崩。

**选项辨析：**

- A：正确。长期阻塞是主要风险。
- B：错误。无超时不会保证成功。
- C：错误。注册中心不修复业务逻辑。
- D：错误。缓存命中不是自动结果。

**官方参考：** https://spring.io/projects/spring-cloud

### SPRING-321（单选题）

- **知识点**：熔断机制
- **难度**：易
- **课件依据**：Spring Cloud 开发课件.pdf 第8页
- **答案**：A

**解析：** 打开状态让调用方快速失败，保护线程和连接等有限资源，并给故障依赖恢复时间。

**选项辨析：**

- A：正确。快速失败和隔离是目的。
- B：错误。无限重试会放大故障。
- C：错误。不会清空业务数据。
- D：错误。与鉴权无关。

**官方参考：** https://sentinelguard.io/zh-cn/index.html

### SPRING-322（单选题）

- **知识点**：断路器状态
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第8页
- **答案**：A

**解析：** 半开是从打开到闭合前的探测阶段，成功后可恢复转发，失败则继续保护。

**选项辨析：**

- A：正确。半开用于试探恢复。
- B：错误。永久拒绝是打开状态。
- C：错误。不会绕过限流。
- D：错误。不负责删除实例。

**官方参考：** https://sentinelguard.io/zh-cn/index.html

### SPRING-323（单选题）

- **知识点**：服务降级
- **难度**：易
- **课件依据**：Spring Cloud 开发课件.pdf 第8页
- **答案**：A

**解析：** 降级返回缓存、默认值或友好提示，避免次要依赖拖垮核心业务链路。

**选项辨析：**

- A：正确。这是降级的价值。
- B：错误。降级不等于强一致事务。
- C：错误。仍应保留可观测性。
- D：错误。无限等待会增加阻塞。

**官方参考：** https://sentinelguard.io/zh-cn/index.html

### SPRING-324（单选题）

- **知识点**：雪崩效应
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第8页
- **答案**：A

**解析：** 慢调用占用工作线程，新请求继续涌入后队列和线程池耗尽，故障会向上下游扩散。

**选项辨析：**

- A：正确。这是典型雪崩链路。
- B：错误。同步调用不会自动异步。
- C：错误。缓存需要显式设计。
- D：错误。注册中心不删除代码。

**官方参考：** https://sentinelguard.io/zh-cn/index.html

### SPRING-325（单选题）

- **知识点**：Sentinel限流
- **难度**：易
- **课件依据**：Spring Cloud 开发课件.pdf 第9页
- **答案**：A

**解析：** 限流控制进入系统的请求量或并发量，使服务在可承受范围内运行。

**选项辨析：**

- A：正确。削峰填谷是限流价值。
- B：错误。不会生成接口。
- C：错误。与Git无关。
- D：错误。不替代事务。

**官方参考：** https://sentinelguard.io/zh-cn/index.html

### SPRING-326（单选题）

- **知识点**：Sentinel热点参数
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第9页
- **答案**：A

**解析：** 热点参数规则能对特定用户、商品等高频参数做更细粒度的流量控制。

**选项辨析：**

- A：正确。热点保护针对局部高频参数。
- B：错误。版本号不是热点限流对象。
- C：错误。字符编码无关。
- D：错误。类加载无关。

**官方参考：** https://sentinelguard.io/zh-cn/index.html

### SPRING-327（单选题）

- **知识点**：Sentinel降级
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第9页
- **答案**：A

**解析：** 课件列出的降级触发条件包括慢调用比例、异常比例和异常数等。

**选项辨析：**

- A：正确。这些是Sentinel降级指标。
- B：错误。注释行数不是运行指标。
- C：错误。字段颜色不影响调用。
- D：错误。头像尺寸不是熔断条件。

**官方参考：** https://sentinelguard.io/zh-cn/index.html

### SPRING-328（单选题）

- **知识点**：Sentinel资源
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第9页
- **答案**：A

**解析：** fallback方法返回缓存、默认值或友好提示，把受保护资源的异常处理显式化。

**选项辨析：**

- A：正确。fallback是兜底逻辑。
- B：错误。注册地址由配置完成。
- C：错误。路径断言属于Gateway。
- D：错误。不负责索引。

**官方参考：** https://sentinelguard.io/zh-cn/index.html

### SPRING-329（单选题）

- **知识点**：Gateway Route
- **难度**：易
- **课件依据**：Spring Cloud 开发课件.pdf 第10页
- **答案**：A

**解析：** Route是网关路由的基本单元，定义匹配条件、目标地址和请求处理过滤链。

**选项辨析：**

- A：正确。这是Route四要素。
- B：错误。数据库对象不是Route。
- C：错误。线程池不是路由定义。
- D：错误。字节码不是网关路由。

**官方参考：** https://spring.io/projects/spring-cloud

### SPRING-330（单选题）

- **知识点**：Gateway Predicate
- **难度**：易
- **课件依据**：Spring Cloud 开发课件.pdf 第10页
- **答案**：A

**解析：** 断言决定一条路由是否被触发，常见条件包括Path、Method和Header。

**选项辨析：**

- A：正确。匹配条件是断言职责。
- B：错误。与数据库事务无关。
- C：错误。堆快照不属于断言。
- D：错误。注册由注册中心完成。

**官方参考：** https://spring.io/projects/spring-cloud

### SPRING-331（单选题）

- **知识点**：Gateway Filter
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第10页
- **答案**：A

**解析：** 过滤器可在请求前后执行改写、认证、审计等横切处理。

**选项辨析：**

- A：正确。这是过滤器能力。
- B：错误。编译不是Gateway职责。
- C：错误。订单逻辑属于业务服务。
- D：错误。不会替换内核。

**官方参考：** https://spring.io/projects/spring-cloud

### SPRING-332（单选题）

- **知识点**：Gateway StripPrefix
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第10页
- **答案**：A

**解析：** StripPrefix用于在转发前移除指定数量的路径段，常用于统一入口路径与后端路径解耦。

**选项辨析：**

- A：正确。它移除路径前缀。
- B：错误。不会复制请求。
- C：错误。与负载策略无关。
- D：错误。不会关闭过滤器。

**官方参考：** https://spring.io/projects/spring-cloud

### SPRING-333（单选题）

- **知识点**：Gateway负载均衡
- **难度**：难
- **课件依据**：Spring Cloud 开发课件.pdf 第10页
- **答案**：A

**解析：** lb://表示目标是逻辑服务名，网关结合注册中心和负载均衡选择实例。

**选项辨析：**

- A：正确。这是服务名负载均衡写法。
- B：错误。lb不是文件路径。
- C：错误。不固定绑定一个IP。
- D：错误。配置中心不处理业务请求。

**官方参考：** https://spring.io/projects/spring-cloud

### SPRING-334（单选题）

- **知识点**：统一入口
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第10页
- **答案**：A

**解析：** 统一入口可集中校验Token和权限，减少各服务重复实现，并尽早拒绝非法流量。

**选项辨析：**

- A：正确。前置鉴权是主要收益。
- B：错误。与页面复制无关。
- C：错误。不会取消通信。
- D：错误。审计日志仍然有价值。

**官方参考：** https://spring.io/projects/spring-cloud

### SPRING-335（单选题）

- **知识点**：配置中心
- **难度**：易
- **课件依据**：Spring Cloud 开发课件.pdf 第11页
- **答案**：A

**解析：** 配置中心把分散配置集中存储，支持环境隔离、版本追溯和热刷新。

**选项辨析：**

- A：正确。集中配置是核心。
- B：错误。RPC不是配置中心职责。
- C：错误。不替代Git。
- D：错误。不负责数据库建模。

**官方参考：** https://nacos.io/docs/latest/what-is-nacos/

### SPRING-336（单选题）

- **知识点**：配置刷新
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第11页
- **答案**：A

**解析：** RefreshScope让受影响的Bean在配置更新后刷新，减少重启造成的业务中断。

**选项辨析：**

- A：正确。这是动态刷新语义。
- B：错误。不会删除类。
- C：错误。不会关闭注册中心。
- D：错误。不要求断开数据库。

**官方参考：** https://nacos.io/docs/latest/what-is-nacos/

### SPRING-337（单选题）

- **知识点**：配置隔离
- **难度**：易
- **课件依据**：Spring Cloud 开发课件.pdf 第11页
- **答案**：A

**解析：** Namespace适合环境隔离，Group用于进一步组织配置，减少开发、测试、生产串用风险。

**选项辨析：**

- A：正确。这是课件强调的隔离机制。
- B：错误。与线程分配无关。
- C：错误。不替代HTTP。
- D：错误。不负责日志压缩。

**官方参考：** https://nacos.io/docs/latest/what-is-nacos/

### SPRING-338（单选题）

- **知识点**：长轮询
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第11页
- **答案**：A

**解析：** 长轮询减少无意义的频繁查询，配置变更时及时通知客户端更新本地缓存。

**选项辨析：**

- A：正确。长轮询用于监听变更。
- B：错误。不等于重启服务。
- C：错误。与订单表无关。
- D：错误。不阻止回滚。

**官方参考：** https://nacos.io/docs/latest/what-is-nacos/

### SPRING-339（单选题）

- **知识点**：配置优先级
- **难度**：难
- **课件依据**：Spring Cloud 开发课件.pdf 第11页
- **答案**：A

**解析：** 集中配置不等于无条件公开，Namespace、权限控制和敏感信息治理必须同时落实。

**选项辨析：**

- A：正确。隔离和权限是关键。
- B：错误。日志打印密码会泄露。
- C：错误。URL更容易暴露敏感信息。
- D：错误。匿名编辑不可接受。

**官方参考：** https://nacos.io/docs/latest/what-is-nacos/

### SPRING-340（单选题）

- **知识点**：CAP取舍
- **难度**：难
- **课件依据**：Spring Cloud 开发课件.pdf 第12页
- **答案**：A

**解析：** 多数业务可用异步消息或补偿实现最终一致性，避免强一致事务拖累可用性。

**选项辨析：**

- A：正确。符合课件建议。
- B：错误。长事务会降低可用性。
- C：错误。不保存状态不符合业务。
- D：错误。客户端缓存不能替代可靠落库。

**官方参考：** https://spring.io/projects/spring-cloud

### SPRING-341（单选题）

- **知识点**：分布式事务
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第12页
- **答案**：A

**解析：** TCC、Saga等通过补偿或阶段性提交实现柔性一致性，需要结合业务成本评估。

**选项辨析：**

- A：正确。这是课件给出的方向。
- B：错误。合并Controller不是事务方案。
- C：错误。删除补偿会放大风险。
- D：错误。更大锁粒度会降低并发。

**官方参考：** https://spring.io/projects/spring-cloud

### SPRING-342（单选题）

- **知识点**：服务拆分
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第12页
- **答案**：A

**解析：** 服务粒度过细会带来更多调用链、部署单元和治理成本，应从边界清晰的核心模块渐进演进。

**选项辨析：**

- A：正确。复杂度增加是主要风险。
- B：错误。仍然需要测试。
- C：错误。服务多不会消除故障。
- D：错误。拆分不提供一致性保证。

**官方参考：** https://spring.io/projects/spring-cloud

### SPRING-343（单选题）

- **知识点**：代码分析
- **难度**：难
- **课件依据**：Spring Cloud 开发课件.pdf 第13页
- **答案**：A

**解析：** Path断言匹配/api/users/**，uri中的lb://user-service指定目标服务名。

**选项辨析：**

- A：正确。目标服务由lb://后面的名称决定。
- B：错误。api只是路径前缀。
- C：错误。gateway不是配置中的目标服务。
- D：错误。42是路径参数。

**官方参考：** https://spring.io/projects/spring-cloud

### SPRING-344（单选题）

- **知识点**：代码分析
- **难度**：难
- **课件依据**：Spring Cloud 开发课件.pdf 第13页
- **答案**：A

**解析：** StripPrefix=1只移除第一段api，保留后面的users/42。

**选项辨析：**

- A：正确。移除api后是/users/42。
- B：错误。未移除前缀。
- C：错误。移除了两段而非一段。
- D：错误。丢失了资源路径。

**官方参考：** https://spring.io/projects/spring-cloud

### SPRING-345（单选题）

- **知识点**：可观测性
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第14页
- **答案**：A

**解析：** 慢调用需要在链路和指标中定位具体服务、方法及耗时，单看编译警告无法解释运行时延迟。

**选项辨析：**

- A：正确。链路和指标能定位慢点。
- B：错误。编译警告不是运行时延迟证据。
- C：错误。删除日志会降低可诊断性。
- D：错误。颜色与服务性能无关。

**官方参考：** https://spring.io/projects/spring-cloud

### SPRING-346（单选题）

- **知识点**：可靠调用
- **难度**：难
- **课件依据**：Spring Cloud 开发课件.pdf 第14页
- **答案**：A

**解析：** 重试可能在请求已到达但响应丢失时再次执行，扣款接口必须有幂等键或状态保护。

**选项辨析：**

- A：正确。幂等是重试前提。
- B：错误。无限重试会放大故障。
- C：错误。不能忽略超时和熔断。
- D：错误。重复创建订单是危险结果。

**官方参考：** https://spring.io/projects/spring-cloud

### SPRING-347（单选题）

- **知识点**：服务治理
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第14页
- **答案**：A

**解析：** 这些组件分别覆盖寻址、通信、流量、入口和配置，形成分布式系统治理基础。

**选项辨析：**

- A：正确。它们共同构成治理链路。
- B：错误。不是语法检查。
- C：错误。不是前端布局。
- D：错误。不是备份脚本。

**官方参考：** https://spring.io/projects/spring-cloud

### SPRING-348（单选题）

- **知识点**：灰度发布
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第10页
- **答案**：A

**解析：** 灰度发布只把部分符合条件的流量导向新版本，便于观察和逐步扩大范围。

**选项辨析：**

- A：正确。这是灰度分流目标。
- B：错误。不是永久固定旧版本。
- C：错误。日志仍需保留。
- D：错误。与配置中心形态无关。

**官方参考：** https://spring.io/projects/spring-cloud

### SPRING-349（单选题）

- **知识点**：架构演进
- **难度**：易
- **课件依据**：Spring Cloud 开发课件.pdf 第4页
- **答案**：A

**解析：** 业务域边界比技术层级更能形成高内聚、低耦合的服务职责。

**选项辨析：**

- A：正确。业务边界是建议依据。
- B：错误。技术层级不是充分边界。
- C：错误。平均代码行数不代表职责。
- D：错误。磁盘目录无关。

**官方参考：** https://spring.io/projects/spring-cloud

### SPRING-350（单选题）

- **知识点**：故障转移
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第5页
- **答案**：A

**解析：** 实例摘除和负载均衡配合可以把流量转向可用节点，但不能保证业务逻辑无误。

**选项辨析：**

- A：正确。减少故障节点流量是收益。
- B：错误。健康检查不能验证全部业务正确性。
- C：错误。不会绕过权限。
- D：错误。不会自动提交事务。

**官方参考：** https://nacos.io/docs/latest/what-is-nacos/

### SPRING-351（单选题）

- **知识点**：最终一致性
- **难度**：难
- **课件依据**：Spring Cloud 开发课件.pdf 第12页
- **答案**：A

**解析：** 异步事件、重试和补偿能在保证核心流程可追踪的前提下实现最终一致性。

**选项辨析：**

- A：正确。这是柔性一致性思路。
- B：错误。长时间同步阻塞会降低可用性。
- C：错误。静默丢弃会造成数据丢失。
- D：错误。跨服务直连数据库破坏边界。

**官方参考：** https://spring.io/projects/spring-cloud

### SPRING-352（单选题）

- **知识点**：服务边界
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第13页
- **答案**：A

**解析：** 共享数据库会让表结构和事务成为隐式耦合，削弱服务自治和独立发布能力。

**选项辨析：**

- A：正确。数据库耦合是风险。
- B：错误。共享表不是隔离。
- C：错误。本地访问仍有锁和IO延迟。
- D：错误。仍可能需要服务发现。

**官方参考：** https://spring.io/projects/spring-cloud

### SPRING-353（单选题）

- **知识点**：配置回滚
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第11页
- **答案**：A

**解析：** 配置版本管理把配置变更纳入可追溯流程，故障时可以恢复稳定版本。

**选项辨析：**

- A：正确。回滚配置是直接价值。
- B：错误。不会回滚代码。
- C：错误。仍需验证效果。
- D：错误。权限审计不能省略。

**官方参考：** https://nacos.io/docs/latest/what-is-nacos/

### SPRING-354（单选题）

- **知识点**：服务注册
- **难度**：易
- **课件依据**：Spring Cloud 开发课件.pdf 第5页
- **答案**：A

**解析：** 注册信息通常包含IP、端口和用于路由或治理的元数据。

**选项辨析：**

- A：正确。端口和元数据属于实例信息。
- B：错误。敏感日志不是注册元数据。
- C：错误。DOM与服务注册无关。
- D：错误。执行计划不是服务身份。

**官方参考：** https://nacos.io/docs/latest/what-is-nacos/

### SPRING-355（单选题）

- **知识点**：服务发现
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第5页
- **答案**：A

**解析：** 缓存需要刷新以跟上实例上下线，不能把动态发现退化为硬编码。

**选项辨析：**

- A：正确。刷新保持列表新鲜。
- B：错误。发现本身仍需要网络协作。
- C：错误。永久写死会失去弹性。
- D：错误。异常摘除仍然必要。

**官方参考：** https://nacos.io/docs/latest/what-is-nacos/

### SPRING-356（单选题）

- **知识点**：Nacos实例
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第6页
- **答案**：A

**解析：** 两类实例在注册数据保存和健康状态处理上具有不同语义，应按业务场景选择。

**选项辨析：**

- A：正确。持久化语义是关键差异。
- B：错误。与编译无关。
- C：错误。与HTTP方法数量无关。
- D：错误。与网关断言无关。

**官方参考：** https://nacos.io/docs/latest/what-is-nacos/

### SPRING-357（单选题）

- **知识点**：Nacos高可用
- **难度**：难
- **课件依据**：Spring Cloud 开发课件.pdf 第6页
- **答案**：A

**解析：** 集群和合理的一致性取舍可以提高治理平面可用性，但不替代业务容错和数据库。

**选项辨析：**

- A：正确。避免单点是主要目标。
- B：错误。业务仍需异常处理。
- C：错误。网络开销不会为零。
- D：错误。不替代业务数据库。

**官方参考：** https://nacos.io/docs/latest/what-is-nacos/

### SPRING-358（单选题）

- **知识点**：服务名寻址
- **难度**：易
- **课件依据**：Spring Cloud 开发课件.pdf 第6页
- **答案**：A

**解析：** Cloud调用通常使用逻辑服务名，再由注册发现和负载均衡解析实例。

**选项辨析：**

- A：正确。逻辑服务名用于寻址。
- B：错误。不是文件名。
- C：错误。不是表名。
- D：错误。过滤器ID用于路由配置。

**官方参考：** https://spring.io/projects/spring-cloud

### SPRING-359（单选题）

- **知识点**：Feign参数
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第7页
- **答案**：A

**解析：** @PathVariable把方法参数绑定到路径模板中的变量。

**选项辨析：**

- A：正确。它用于路径绑定。
- B：错误。@Bean声明对象。
- C：错误。@Configuration声明配置。
- D：错误。@Repository标记数据访问组件。

**官方参考：** https://spring.io/projects/spring-cloud

### SPRING-360（单选题）

- **知识点**：Feign查询参数
- **难度**：易
- **课件依据**：Spring Cloud 开发课件.pdf 第7页
- **答案**：A

**解析：** @RequestParam用于把方法参数绑定到查询字符串参数。

**选项辨析：**

- A：正确。这是查询参数注解。
- B：错误。@Autowired是依赖注入。
- C：错误。@ComponentScan用于扫描。
- D：错误。@Import用于导入配置。

**官方参考：** https://spring.io/projects/spring-cloud

### SPRING-361（单选题）

- **知识点**：Feign契约
- **难度**：难
- **课件依据**：Spring Cloud 开发课件.pdf 第7页
- **答案**：A

**解析：** 提供者和消费者的HTTP契约必须一致，否则接口调用会得到路径不匹配。

**选项辨析：**

- A：正确。路径契约需要同步。
- B：错误。线程池名称不决定路径。
- C：错误。屏幕尺寸无关。
- D：错误。命名空间不是HTTP路径。

**官方参考：** https://spring.io/projects/spring-cloud

### SPRING-362（单选题）

- **知识点**：负载均衡健康实例
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第7页
- **答案**：A

**解析：** 只在可用实例集合中选择，避免把请求发给已故障节点。

**选项辨析：**

- A：正确。不可用节点应被排除。
- B：错误。响应快节点通常更适合。
- C：错误。元数据不等于故障。
- D：错误。成功节点不应排除。

**官方参考：** https://spring.io/projects/spring-cloud

### SPRING-363（单选题）

- **知识点**：随机策略
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第7页
- **答案**：A

**解析：** 随机策略从可用实例中随机选择，避免固定节奏，但不天然感知节点性能。

**选项辨析：**

- A：正确。不固定顺序是特点。
- B：错误。响应最快需要性能感知策略。
- C：错误。单实例不体现随机价值。
- D：错误。与事务回滚无关。

**官方参考：** https://spring.io/projects/spring-cloud

### SPRING-364（单选题）

- **知识点**：超时分类
- **难度**：难
- **课件依据**：Spring Cloud 开发课件.pdf 第8页
- **答案**：A

**解析：** 连接超时防止建连阶段长期等待，读取超时限制下游响应迟延。

**选项辨析：**

- A：正确。两类超时控制不同阶段。
- B：错误。超时不自动保证幂等。
- C：错误。心跳仍需要。
- D：错误。与鉴权无关。

**官方参考：** https://spring.io/projects/spring-cloud

### SPRING-365（单选题）

- **知识点**：熔断指标
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第8页
- **答案**：A

**解析：** 熔断规则针对资源调用的错误或慢调用情况，而不是无关的静态信息。

**选项辨析：**

- A：正确。资源调用是统计范围。
- B：错误。浏览器版本不是调用结果。
- C：错误。注释与运行时无关。
- D：错误。机房名称不是异常比例。

**官方参考：** https://sentinelguard.io/zh-cn/index.html

### SPRING-366（单选题）

- **知识点**：熔断恢复
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第8页
- **答案**：A

**解析：** 探测成功说明依赖可能恢复，断路器可以从半开回到闭合。

**选项辨析：**

- A：正确。成功后恢复转发。
- B：错误。永久打开不是正常恢复。
- C：错误。不负责删除注册。
- D：错误。不清空配置。

**官方参考：** https://sentinelguard.io/zh-cn/index.html

### SPRING-367（单选题）

- **知识点**：降级数据
- **难度**：易
- **课件依据**：Spring Cloud 开发课件.pdf 第8页
- **答案**：A

**解析：** 推荐属于可牺牲的非核心功能，降级应保障商品核心信息继续展示。

**选项辨析：**

- A：正确。隐藏非核心模块是合理降级。
- B：错误。密码不能返回。
- C：错误。不应阻塞核心页面。
- D：错误。堆栈不是业务数据。

**官方参考：** https://sentinelguard.io/zh-cn/index.html

### SPRING-368（单选题）

- **知识点**：限流算法
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第9页
- **答案**：A

**解析：** 令牌桶通过令牌产生速率和桶容量控制平均速率及可容纳的突发量。

**选项辨析：**

- A：正确。令牌桶可以容纳有限突发。
- B：错误。突发仍受容量限制。
- C：错误。不只服务定时任务。
- D：错误。与索引无关。

**官方参考：** https://sentinelguard.io/zh-cn/index.html

### SPRING-369（单选题）

- **知识点**：并发限流
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第9页
- **答案**：A

**解析：** 并发限制减少同时执行的请求数，直接保护线程池、连接等处理资源。

**选项辨析：**

- A：正确。线程和处理能力是对象。
- B：错误。版本号不受并发直接限制。
- C：错误。名称长度无关。
- D：错误。Git分支无关。

**官方参考：** https://sentinelguard.io/zh-cn/index.html

### SPRING-370（单选题）

- **知识点**：系统自适应保护
- **难度**：难
- **课件依据**：Spring Cloud 开发课件.pdf 第9页
- **答案**：A

**解析：** 系统保护根据机器负载等运行指标动态调节流量，避免资源耗尽。

**选项辨析：**

- A：正确。CPU和内存是运行指标。
- B：错误。注释不是负载指标。
- C：错误。命名风格不影响系统负载。
- D：错误。昵称长度不是系统保护指标。

**官方参考：** https://sentinelguard.io/zh-cn/index.html

### SPRING-371（单选题）

- **知识点**：网关路由ID
- **难度**：易
- **课件依据**：Spring Cloud 开发课件.pdf 第10页
- **答案**：A

**解析：** 路由ID便于配置管理、日志定位和规则区分，不等于实例地址。

**选项辨析：**

- A：正确。ID标识路由。
- B：错误。不会自动建表。
- C：错误。URI才描述目标。
- D：错误。ID不能替代匹配条件。

**官方参考：** https://spring.io/projects/spring-cloud

### SPRING-372（单选题）

- **知识点**：网关前置过滤
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第10页
- **答案**：A

**解析：** Pre过滤器处理请求进入下游前的逻辑，Post过滤器可增强返回响应。

**选项辨析：**

- A：正确。执行时机是主要差异。
- B：错误。它们属于网关链路。
- C：错误。不以配置和代码二分。
- D：错误。不只修改数据库。

**官方参考：** https://spring.io/projects/spring-cloud

### SPRING-373（单选题）

- **知识点**：网关路径重写
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第10页
- **答案**：A

**解析：** 网关可以把统一外部路径转换为后端实际路径，减少客户端感知内部结构。

**选项辨析：**

- A：正确。路径解耦是价值。
- B：错误。注册发现仍需要。
- C：错误。幂等需业务设计。
- D：错误。不会自动生成接口。

**官方参考：** https://spring.io/projects/spring-cloud

### SPRING-374（单选题）

- **知识点**：网关限流
- **难度**：易
- **课件依据**：Spring Cloud 开发课件.pdf 第10页
- **答案**：A

**解析：** 入口限流可在故障和高峰流量进入后端前尽早控制请求量。

**选项辨析：**

- A：正确。统一削峰是优势。
- B：错误。后端仍需监控。
- C：错误。不会修改HTTP方法。
- D：错误。与分库无关。

**官方参考：** https://spring.io/projects/spring-cloud

### SPRING-375（单选题）

- **知识点**：配置命名空间
- **难度**：易
- **课件依据**：Spring Cloud 开发课件.pdf 第11页
- **答案**：A

**解析：** 命名空间隔离环境配置和访问范围，降低错用生产参数的风险。

**选项辨析：**

- A：正确。防串用是目的。
- B：错误。与QPS无关。
- C：错误。不替代心跳。
- D：错误。不控制Bean生命周期。

**官方参考：** https://nacos.io/docs/latest/what-is-nacos/

### SPRING-376（单选题）

- **知识点**：配置分组
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第11页
- **答案**：A

**解析：** Group可以按应用或业务对配置进行组织，配合Namespace形成更细粒度管理。

**选项辨析：**

- A：正确。逻辑分组是用途。
- B：错误。与线程分配无关。
- C：错误。不替代认证。
- D：错误。不保存编译产物。

**官方参考：** https://nacos.io/docs/latest/what-is-nacos/

### SPRING-377（单选题）

- **知识点**：刷新边界
- **难度**：难
- **课件依据**：Spring Cloud 开发课件.pdf 第11页
- **答案**：A

**解析：** 动态刷新依赖Bean作用域和绑定方式，普通字段复制不一定能自动更新。

**选项辨析：**

- A：正确。刷新有作用域和绑定边界。
- B：错误。新Bean需看配置读取时机。
- C：错误。服务器不会因客户端刷新改变。
- D：错误。控制台不是业务Bean。

**官方参考：** https://nacos.io/docs/latest/what-is-nacos/

### SPRING-378（单选题）

- **知识点**：配置灰度
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第11页
- **答案**：A

**解析：** 先小范围发布可以限制错误配置的影响面，便于观察和回滚。

**选项辨析：**

- A：正确。影响范围就是爆炸半径。
- B：错误。字符数不是风险范围。
- C：错误。名称长度无关。
- D：错误。路径层级不是发布影响面。

**官方参考：** https://nacos.io/docs/latest/what-is-nacos/

### SPRING-379（单选题）

- **知识点**：最终一致性
- **难度**：易
- **课件依据**：Spring Cloud 开发课件.pdf 第12页
- **答案**：A

**解析：** 最终一致性通过异步传播和补偿在一段时间后收敛，不要求每个瞬间都强一致。

**选项辨析：**

- A：正确。短暂不一致是允许的。
- B：错误。目标仍是最终收敛。
- C：错误。不必全部同步阻塞。
- D：错误。适用于分布式系统。

**官方参考：** https://spring.io/projects/spring-cloud

### SPRING-380（单选题）

- **知识点**：消息解耦
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第12页
- **答案**：A

**解析：** 消息异步解耦让生产者不必同步等待消费者，但仍需可靠投递、重试和幂等。

**选项辨析：**

- A：正确。降低同步耦合是收益。
- B：错误。不会保证永不失败。
- C：错误。重试仍需设计。
- D：错误。服务不会共享进程内存。

**官方参考：** https://spring.io/projects/spring-cloud

### SPRING-381（单选题）

- **知识点**：TCC
- **难度**：难
- **课件依据**：Spring Cloud 开发课件.pdf 第12页
- **答案**：A

**解析：** TCC将流程拆为Try、Confirm、Cancel，Try通常进行资源预留或业务检查。

**选项辨析：**

- A：正确。资源预留是Try典型职责。
- B：错误。失败仍需处理。
- C：错误。不仅是日志。
- D：错误。最终提交由Confirm。

**官方参考：** https://spring.io/projects/spring-cloud

### SPRING-382（单选题）

- **知识点**：Saga
- **难度**：难
- **课件依据**：Spring Cloud 开发课件.pdf 第12页
- **答案**：A

**解析：** Saga把长事务拆成步骤，并为已完成步骤设计补偿动作。

**选项辨析：**

- A：正确。可补偿长流程适合Saga。
- B：错误。它不要求全局锁。
- C：错误。纯查询无需Saga。
- D：错误。静态网页无此需求。

**官方参考：** https://spring.io/projects/spring-cloud

### SPRING-383（单选题）

- **知识点**：服务粒度
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第12页
- **答案**：A

**解析：** 服务不需要在代码量上平均，强行均分往往导致职责破碎。

**选项辨析：**

- A：正确。数量和大小不是目标。
- B：错误。职责内聚是好指标。
- C：错误。边界信息有助拆分。
- D：错误。调用和故障影响也需评估。

**官方参考：** https://spring.io/projects/spring-cloud

### SPRING-384（单选题）

- **知识点**：链路追踪
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第14页
- **答案**：A

**解析：** TraceId在服务间传播，便于从入口追踪到下游和异常位置。

**选项辨析：**

- A：正确。跨服务关联是用途。
- B：错误。不等于业务主键。
- C：错误。不能替代服务名。
- D：错误。不直接决定限流。

**官方参考：** https://spring.io/projects/spring-cloud

### SPRING-385（单选题）

- **知识点**：指标监控
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第14页
- **答案**：A

**解析：** P95反映尾部延迟，应结合调用链和依赖耗时定位慢请求。

**选项辨析：**

- A：正确。分位延迟和下游是关键。
- B：错误。文件排序无关。
- C：错误。按钮颜色无关。
- D：错误。Git分支无关。

**官方参考：** https://spring.io/projects/spring-cloud

### SPRING-386（单选题）

- **知识点**：错误上下文
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第14页
- **答案**：A

**解析：** 结构化上下文帮助定位和关联，同时要避免把敏感凭证写入日志。

**选项辨析：**

- A：正确。这些字段便于追踪。
- B：错误。信息过少无法诊断。
- C：错误。凭证应脱敏。
- D：错误。请求标识对关联很重要。

**官方参考：** https://spring.io/projects/spring-cloud

### SPRING-387（单选题）

- **知识点**：版本管理
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第14页
- **答案**：A

**解析：** Cloud发行列车、Boot和JDK存在兼容约束，应先确认官方支持关系。

**选项辨析：**

- A：正确。兼容矩阵是第一依据。
- B：错误。盲目替换容易冲突。
- C：错误。测试不能删除。
- D：错误。Boot版本必须匹配。

**官方参考：** https://spring.io/projects/spring-cloud

### SPRING-388（单选题）

- **知识点**：配置密钥
- **难度**：难
- **课件依据**：Spring Cloud 开发课件.pdf 第11页
- **答案**：A

**解析：** 配置中心需要安全边界、最小权限和脱敏审计，不能因为集中化就公开敏感信息。

**选项辨析：**

- A：正确。安全存储和权限是必要措施。
- B：错误。README公开会泄露。
- C：错误。账号权限应最小化。
- D：错误。响应头泄露密码不可接受。

**官方参考：** https://nacos.io/docs/latest/what-is-nacos/

### SPRING-389（单选题）

- **知识点**：容错优先级
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第14页
- **答案**：A

**解析：** 降级设计要按业务重要性分级，核心交易状态优先于可选展示内容。

**选项辨析：**

- A：正确。核心支付必须优先保证。
- B：错误。推荐可暂时隐藏或缓存。
- C：错误。图片质量不是核心交易。
- D：错误。颜色更不是核心状态。

**官方参考：** https://sentinelguard.io/zh-cn/index.html

### SPRING-390（单选题）

- **知识点**：异步补偿
- **难度**：难
- **课件依据**：Spring Cloud 开发课件.pdf 第12页
- **答案**：A

**解析：** 可靠异步流程需要可观测失败、受控重试和补偿，避免数据悄然丢失。

**选项辨析：**

- A：正确。重试和补偿是正确方向。
- B：错误。静默丢弃会造成不一致。
- C：错误。无限高速重试会雪崩。
- D：错误。跨边界直改数据库破坏治理。

**官方参考：** https://spring.io/projects/spring-cloud

### SPRING-391（单选题）

- **知识点**：服务自治
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第14页
- **答案**：A

**解析：** 直接依赖他服务内部表会让发布和演进互相阻塞，破坏服务自治。

**选项辨析：**

- A：正确。内部表耦合是反例。
- B：错误。稳定API有助自治。
- C：错误。独立流水线是自治表现。
- D：错误。数据边界清晰有利解耦。

**官方参考：** https://spring.io/projects/spring-cloud

### SPRING-392（单选题）

- **知识点**：服务治理
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第14页
- **答案**：A

**解析：** 实例缓存刷新滞后会造成过期地址，需结合注册中心通知、拉取周期和网络状态排查。

**选项辨析：**

- A：正确。过期地址是直接风险。
- B：错误。缓存不会改变权限。
- C：错误。配置中心不自动创建业务服务。
- D：错误。网关不会因此转静态资源。

**官方参考：** https://nacos.io/docs/latest/what-is-nacos/

### SPRING-393（单选题）

- **知识点**：流量治理
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第14页
- **答案**：A

**解析：** 容量评估后的限流和并发控制可以削峰，超时和重试也应有边界，不能无限放大压力。

**选项辨析：**

- A：正确。入口治理应先保护容量。
- B：错误。关闭健康检查会增加风险。
- C：错误。超时不能取消。
- D：错误。无限重试会放大洪峰。

**官方参考：** https://sentinelguard.io/zh-cn/index.html

### SPRING-394（单选题）

- **知识点**：网关路由
- **难度**：难
- **课件依据**：Spring Cloud 开发课件.pdf 第10页
- **答案**：A

**解析：** 同一路由的多个断言通常共同参与匹配，只有全部条件满足才触发该路由。

**选项辨析：**

- A：正确。组合断言要求同时匹配。
- B：错误。不是任意一个即可。
- C：错误。服务在线不等于路径匹配。
- D：错误。Header存在也不足以满足其他条件。

**官方参考：** https://spring.io/projects/spring-cloud

### SPRING-395（单选题）

- **知识点**：配置管理
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第11页
- **答案**：A

**解析：** 本地缓存可以提高配置读取韧性，但仍需权限、版本和变更治理。

**选项辨析：**

- A：正确。缓存提供短暂容错。
- B：错误。不能绕过权限。
- C：错误。不能替代版本管理。
- D：错误。不会自动编译类。

**官方参考：** https://nacos.io/docs/latest/what-is-nacos/

### SPRING-396（单选题）

- **知识点**：容错边界
- **难度**：难
- **课件依据**：Spring Cloud 开发课件.pdf 第8页
- **答案**：A

**解析：** 打开状态应快速失败，探测应受半开策略和频率控制，否则会形成新的压力。

**选项辨析：**

- A：正确。大量探测会削弱隔离。
- B：错误。恢复速度并非无条件提升。
- C：错误。注册中心不会扩容业务数据库。
- D：错误。缓存需要显式设计。

**官方参考：** https://sentinelguard.io/zh-cn/index.html

### SPRING-397（单选题）

- **知识点**：服务协作
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第13页
- **答案**：A

**解析：** Provider注册可供调用的能力，Consumer通过发现和Feign等方式使用它。

**选项辨析：**

- A：正确。这是两者基本角色。
- B：错误。前后端和数据库不是该角色定义。
- C：错误。它们不是注册中心本身。
- D：错误。微服务正是通过网络协作。

**官方参考：** https://spring.io/projects/spring-cloud

### SPRING-398（单选题）

- **知识点**：版本兼容
- **难度**：难
- **课件依据**：Spring Cloud 开发课件.pdf 第14页
- **答案**：A

**解析：** Spring Cloud与Boot存在版本兼容关系，应以官方文档和兼容矩阵为准，避免依赖冲突。

**选项辨析：**

- A：正确。官方兼容矩阵是可靠依据。
- B：错误。单一博客版本可能过时。
- C：错误。任意混用容易冲突。
- D：错误。JDK和Boot版本不能忽略。

**官方参考：** https://spring.io/projects/spring-cloud

### SPRING-399（单选题）

- **知识点**：实例权重
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第7页
- **答案**：A

**解析：** 权重用于相对分配流量，具体效果还需结合策略和健康状态。

**选项辨析：**

- A：正确。权重影响流量比例。
- B：错误。密码不应进入权重。
- C：错误。路径前缀属于路由。
- D：错误。日志保留是运维配置。

**官方参考：** https://spring.io/projects/spring-cloud

### SPRING-400（单选题）

- **知识点**：服务降级边界
- **难度**：难
- **课件依据**：Spring Cloud 开发课件.pdf 第8页
- **答案**：A

**解析：** 降级不能伪造关键业务成功，否则会造成资金和状态错误。

**选项辨析：**

- A：正确。伪造扣款成功是严重错误。
- B：错误。默认值可用于非核心数据。
- C：错误。缓存是常见兜底。
- D：错误。异常上下文仍需可观测。

**官方参考：** https://sentinelguard.io/zh-cn/index.html

### SPRING-401（单选题）

- **知识点**：网关认证
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第10页
- **答案**：A

**解析：** 网关是前置防线，服务内部仍应对关键资源做纵深防御。

**选项辨析：**

- A：正确。纵深授权更安全。
- B：错误。不能因网关而完全放弃内部校验。
- C：错误。颜色不是权限。
- D：错误。URL明文不适合承载权限。

**官方参考：** https://spring.io/projects/spring-cloud

### SPRING-402（单选题）

- **知识点**：配置来源
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第11页
- **答案**：A

**解析：** 外部化让制品与环境参数解耦，但仍需版本、权限和验证。

**选项辨析：**

- A：正确。环境适配是优点。
- B：错误。仍需要版本管理。
- C：错误。不会生成业务规则。
- D：错误。不能保证不出错。

**官方参考：** https://nacos.io/docs/latest/what-is-nacos/

### SPRING-403（单选题）

- **知识点**：消息重复
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第12页
- **答案**：A

**解析：** 幂等消费让重复投递可安全处理，是异步最终一致性的基础。

**选项辨析：**

- A：正确。无副作用是幂等目标。
- B：错误。重复创建会造成错误。
- C：错误。不能简单关闭重试。
- D：错误。事件ID可辅助去重。

**官方参考：** https://spring.io/projects/spring-cloud

### SPRING-404（单选题）

- **知识点**：健康与业务
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第14页
- **答案**：A

**解析：** 健康端点通常反映基础存活和依赖状态，不能覆盖所有业务语义。

**选项辨析：**

- A：正确。仍需业务观测。
- B：错误。订单成功率需单独统计。
- C：错误。慢请求需看指标。
- D：错误。配置正确需验证。

**官方参考：** https://spring.io/projects/spring-cloud

### SPRING-405（单选题）

- **知识点**：灰度指标
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第10页
- **答案**：A

**解析：** 灰度需要对比新旧版本的错误、延迟和业务成功率。

**选项辨析：**

- A：正确。版本指标对比有价值。
- B：错误。壁纸无关。
- C：错误。注释不代表运行质量。
- D：错误。名称长度无关。

**官方参考：** https://spring.io/projects/spring-cloud

### SPRING-406（单选题）

- **知识点**：服务发现安全
- **难度**：难
- **课件依据**：Spring Cloud 开发课件.pdf 第6页
- **答案**：A

**解析：** 治理平面需要限制注册和配置修改权限，避免恶意或误配置实例进入流量池。

**选项辨析：**

- A：正确。认证和权限能限制注册。
- B：错误。匿名注册有风险。
- C：错误。前端公开端口扩大攻击面。
- D：错误。心跳不能关闭。

**官方参考：** https://nacos.io/docs/latest/what-is-nacos/

### SPRING-407（单选题）

- **知识点**：客户端缓存
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第5页
- **答案**：A

**解析：** 缓存提升性能但可能短暂陈旧，需要刷新和失效策略。

**选项辨析：**

- A：正确。陈旧是缓存代价。
- B：错误。不能保证更准确。
- C：错误。不会自动提供强一致。
- D：错误。仍需健康检查。

**官方参考：** https://nacos.io/docs/latest/what-is-nacos/

### SPRING-408（单选题）

- **知识点**：Feign异常
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第8页
- **答案**：A

**解析：** 错误语义不能被吞掉，否则上游无法正确决策和追踪故障。

**选项辨析：**

- A：正确。伪造成功会造成状态错误。
- B：错误。有限重试或降级需按场景。
- C：错误。上下文有助排查。
- D：错误。错误码应保留。

**官方参考：** https://spring.io/projects/spring-cloud

### SPRING-409（单选题）

- **知识点**：限流优先级
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第9页
- **答案**：A

**解析：** 容量有限时按业务优先级分配资源，核心流程应获得保护。

**选项辨析：**

- A：正确。核心资源优先。
- B：错误。调试接口可限得更严格。
- C：错误。无限等待会耗尽资源。
- D：错误。未部署服务不在流量池。

**官方参考：** https://sentinelguard.io/zh-cn/index.html

### SPRING-410（单选题）

- **知识点**：网关过滤器
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第10页
- **答案**：A

**解析：** 请求链路标识属于网关横切逻辑，可由前置或后置过滤器传播。

**选项辨析：**

- A：正确。过滤器适合横切逻辑。
- B：错误。与数据库触发器无关。
- C：错误。不是注册动作。
- D：错误。不是负载策略。

**官方参考：** https://spring.io/projects/spring-cloud

### SPRING-411（单选题）

- **知识点**：配置命名
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第11页
- **答案**：A

**解析：** Group提供逻辑隔离，同名键可在不同分组下分别管理。

**选项辨析：**

- A：正确。分组可隔离同名配置。
- B：错误。不限制只能一个值。
- C：错误。不会合并源码。
- D：错误。不是断言。

**官方参考：** https://nacos.io/docs/latest/what-is-nacos/

### SPRING-412（单选题）

- **知识点**：最终一致性时限
- **难度**：难
- **课件依据**：Spring Cloud 开发课件.pdf 第12页
- **答案**：A

**解析：** 最终一致性仍需有界、可观测的收敛目标，不能把数据差异无限拖延。

**选项辨析：**

- A：正确。无限拖延是错误理解。
- B：错误。应定义收敛时限。
- C：错误。重试和补偿很重要。
- D：错误。目标必须结合业务。

**官方参考：** https://spring.io/projects/spring-cloud

### SPRING-413（单选题）

- **知识点**：拆分成本
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第12页
- **答案**：A

**解析：** 远程边界带来网络、序列化、超时和失败处理成本。

**选项辨析：**

- A：正确。网络和失败处理是成本。
- B：错误。语法不会自动简化。
- C：错误。仍需部署。
- D：错误。数据库不会自动扩容。

**官方参考：** https://spring.io/projects/spring-cloud

### SPRING-414（单选题）

- **知识点**：监控告警
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第14页
- **答案**：A

**解析：** 告警把运行异常及时反馈给运维或值班人员，帮助止损。

**选项辨析：**

- A：正确。及时处置是目的。
- B：错误。测试仍需存在。
- C：错误。告警不能保证正确。
- D：错误。隐藏故障与目标相反。

**官方参考：** https://spring.io/projects/spring-cloud

### SPRING-415（单选题）

- **知识点**：Cloud部署
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第13页
- **答案**：A

**解析：** 容器编排便于培训和开发环境快速启动，但生产方案仍需单独评估。

**选项辨析：**

- A：正确。快速复现环境是价值。
- B：错误。仍需配置服务。
- C：错误。不能替代所有生产方案。
- D：错误。版本差异仍需管理。

**官方参考：** https://spring.io/projects/spring-cloud

### SPRING-416（单选题）

- **知识点**：官方文档
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第14页
- **答案**：A

**解析：** 版本和配置具有时效性，应以官方维护的说明为准。

**选项辨析：**

- A：正确。官方资料最可靠。
- B：错误。标题不能作为证据。
- C：错误。旧命令可能过时。
- D：错误。截图缺少版本上下文。

**官方参考：** https://spring.io/projects/spring-cloud

### SPRING-417（单选题）

- **知识点**：容错测试
- **难度**：难
- **课件依据**：Spring Cloud 开发课件.pdf 第8页
- **答案**：A

**解析：** 故障注入可以验证超时、熔断、隔离和降级是否真正生效。

**选项辨析：**

- A：正确。这是容错测试。
- B：错误。与UI颜色无关。
- C：错误。不属于建模。
- D：错误。不是编译语法。

**官方参考：** https://sentinelguard.io/zh-cn/index.html

### SPRING-418（单选题）

- **知识点**：配置故障
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第11页
- **答案**：A

**解析：** 本地快照可提供短时韧性，但必须配合版本和安全策略。

**选项辨析：**

- A：正确。快照提供容错。
- B：错误。错误配置不应永远生效。
- C：错误。不能跳过安全。
- D：错误。不会修改代码。

**官方参考：** https://nacos.io/docs/latest/what-is-nacos/

### SPRING-419（单选题）

- **知识点**：服务目录
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第5页
- **答案**：A

**解析：** 服务目录集中记录可发现的实例，是微服务动态寻址的基础。

**选项辨析：**

- A：正确。动态通讯录是恰当比喻。
- B：错误。网页模板无关。
- C：错误。索引页不是服务目录。
- D：错误。编译器列表无关。

**官方参考：** https://nacos.io/docs/latest/what-is-nacos/

### SPRING-420（单选题）

- **知识点**：保护目标
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第8页
- **答案**：A

**解析：** 快速失败避免有限的线程、连接和队列被慢依赖长期占用。

**选项辨析：**

- A：正确。这些是需要保护的运行资源。
- B：错误。头像不是熔断资源。
- C：错误。注释不占用调用线程。
- D：错误。开发者磁盘不是服务运行资源。

**官方参考：** https://sentinelguard.io/zh-cn/index.html

## 多选题

### SPRING-421（多选题）

- **知识点**：微服务特征
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第3页
- **答案**：A、B、C

**解析：** 微服务强调自治服务、单一职责和轻量通信，共享单一进程会削弱故障隔离。

**选项辨析：**

- A：正确。独立部署是特征。
- B：正确。单一业务能力有助于高内聚。
- C：正确。REST或RPC等轻量通信是常见方式。
- D：错误。共享进程更接近单体。

**官方参考：** https://spring.io/projects/spring-cloud

### SPRING-422（多选题）

- **知识点**：微服务收益
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第3页
- **答案**：A、B、C

**解析：** 微服务改善扩展、隔离和协作，但也引入网络、数据一致性和运维复杂度。

**选项辨析：**

- A：正确。服务可按需扩展。
- B：正确。进程边界有助于隔离故障。
- C：正确。团队可围绕服务并行工作。
- D：错误。它不会消除分布式复杂度。

**官方参考：** https://spring.io/projects/spring-cloud

### SPRING-423（多选题）

- **知识点**：Boot与Cloud
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第3页
- **答案**：A、B、C

**解析：** Boot和Cloud分工不同但相互配合，业务边界和领域规则仍由团队设计。

**选项辨析：**

- A：正确。Boot负责快速构建应用。
- B：正确。Cloud负责服务协同与治理。
- C：正确。Cloud是Spring生态的一部分。
- D：错误。不会替代业务设计。

**官方参考：** https://spring.io/projects/spring-cloud

### SPRING-424（多选题）

- **知识点**：生态组件
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第4页
- **答案**：A、B、C

**解析：** 注册、网关和稳定性治理是课件核心方向，图片裁剪不属于Cloud治理。

**选项辨析：**

- A：正确。注册发现解决寻址。
- B：正确。网关统一入口。
- C：正确。熔断限流保护系统。
- D：错误。图片裁剪不是该课件主题。

**官方参考：** https://spring.io/projects/spring-cloud

### SPRING-425（多选题）

- **知识点**：服务注册流程
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第5页
- **答案**：A、B、C

**解析：** 注册、发现和心跳共同形成动态寻址链路，永久硬编码会重新引入耦合。

**选项辨析：**

- A：正确。启动注册是第一步。
- B：正确。消费者需要发现可用实例。
- C：正确。心跳用于健康感知。
- D：错误。硬编码破坏动态治理。

**官方参考：** https://nacos.io/docs/latest/what-is-nacos/

### SPRING-426（多选题）

- **知识点**：注册中心收益
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第5页
- **答案**：A、B、C

**解析：** 注册中心解决寻址和实例状态问题，但不负责业务代码正确性。

**选项辨析：**

- A：正确。地址集中管理。
- B：正确。心跳和健康状态支持上下线感知。
- C：正确。可用实例列表为转移提供基础。
- D：错误。业务Bug需由业务代码和测试解决。

**官方参考：** https://nacos.io/docs/latest/what-is-nacos/

### SPRING-427（多选题）

- **知识点**：Nacos能力
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第6页
- **答案**：A、B、C

**解析：** Nacos提供注册、配置、控制台及不同实例模式，不能概括为只能单机。

**选项辨析：**

- A：正确。一体化是核心优势。
- B：正确。控制台便于运维。
- C：正确。AP/CP和临时/持久化模式可按场景选择。
- D：错误。课件明确其具备生态集成能力。

**官方参考：** https://nacos.io/docs/latest/what-is-nacos/

### SPRING-428（多选题）

- **知识点**：健康检查
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第5页
- **答案**：A、B

**解析：** 心跳是实例活性基础，业务监控仍需独立建设。

**选项辨析：**

- A：正确。超时是摘除条件之一。
- B：正确。摘除是为了避免故障流量。
- C：错误。健康检查不能覆盖业务指标。
- D：错误。心跳是运行期持续行为。

**官方参考：** https://nacos.io/docs/latest/what-is-nacos/

### SPRING-429（多选题）

- **知识点**：OpenFeign
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第7页
- **答案**：A、B、C

**解析：** Feign简化契约和调用模板，并可与治理组件集成，但不能保证依赖永不失败。

**选项辨析：**

- A：正确。接口定义远程契约。
- B：正确。减少手工拼接。
- C：正确。可接入Cloud治理。
- D：错误。故障仍需超时、熔断和兜底。

**官方参考：** https://spring.io/projects/spring-cloud

### SPRING-430（多选题）

- **知识点**：LoadBalancer
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第7页
- **答案**：A、B、C

**解析：** 课件列举轮询、随机和加权响应时间策略，固定第一个实例会造成单点压力。

**选项辨析：**

- A：正确。轮询简单公平。
- B：正确。随机可分散请求。
- C：正确。响应时间权重能适应异构节点。
- D：错误。固定一个实例不是真正负载均衡。

**官方参考：** https://spring.io/projects/spring-cloud

### SPRING-431（多选题）

- **知识点**：调用配置
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第8页
- **答案**：A、B、C

**解析：** 超时、容错和可观测性共同降低级联故障风险，无限重试会放大故障。

**选项辨析：**

- A：正确。超时限制阻塞。
- B：正确。熔断降级保护核心链路。
- C：正确。日志指标便于定位。
- D：错误。无限重试可能雪崩。

**官方参考：** https://spring.io/projects/spring-cloud

### SPRING-432（多选题）

- **知识点**：雪崩防护
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第8页
- **答案**：A、B、C

**解析：** 超时、熔断和降级分别限制等待、阻断传播并保持核心可用，无限排队会耗尽资源。

**选项辨析：**

- A：正确。超时释放资源。
- B：正确。熔断切断故障路径。
- C：正确。降级保住核心流程。
- D：错误。无限排队扩大阻塞。

**官方参考：** https://sentinelguard.io/zh-cn/index.html

### SPRING-433（多选题）

- **知识点**：Sentinel流控
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第9页
- **答案**：A、B、C

**解析：** 课件列出QPS、并发数、热点参数和系统自适应等治理能力。

**选项辨析：**

- A：正确。QPS是流控维度。
- B：正确。并发数可以直接保护线程资源。
- C：正确。热点参数可防止局部滥用。
- D：错误。语法树不是Sentinel流控能力。

**官方参考：** https://sentinelguard.io/zh-cn/index.html

### SPRING-434（多选题）

- **知识点**：Sentinel降级
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第9页
- **答案**：A、B、C

**解析：** Sentinel负责检测和隔离不稳定依赖，不负责修复下游业务实现。

**选项辨析：**

- A：正确。慢调用是触发条件。
- B：正确。异常指标也是条件。
- C：正确。隔离依赖可防扩散。
- D：错误。业务修复仍需开发和运维处理。

**官方参考：** https://sentinelguard.io/zh-cn/index.html

### SPRING-435（多选题）

- **知识点**：Sentinel兜底
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第9页
- **答案**：A、B、C

**解析：** 兜底应优先保持可用并控制信息泄露，详细异常应记录在受控日志中。

**选项辨析：**

- A：正确。缓存是常见兜底。
- B：正确。默认值适合非核心数据。
- C：正确。友好提示改善体验且需可观测。
- D：错误。直接暴露堆栈有安全风险。

**官方参考：** https://sentinelguard.io/zh-cn/index.html

### SPRING-436（多选题）

- **知识点**：Gateway路由
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第10页
- **答案**：A、B、C

**解析：** Route通过ID、目标URI和断言定义匹配与转发；数据库事务隔离属于数据访问层，不是路由元素。

**选项辨析：**

- A：正确。ID标识路由。
- B：正确。URI指定目标。
- C：正确。断言决定是否匹配。
- D：错误。事务隔离不属于Gateway路由定义。

**官方参考：** https://spring.io/projects/spring-cloud

### SPRING-437（多选题）

- **知识点**：Gateway能力
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第10页
- **答案**：A、B、C

**解析：** 网关适合横切治理和流量入口职责，不应承载所有领域算法。

**选项辨析：**

- A：正确。统一鉴权是入口能力。
- B：正确。限流保护后端。
- C：正确。日志监控便于审计。
- D：错误。领域算法应留在业务服务。

**官方参考：** https://spring.io/projects/spring-cloud

### SPRING-438（多选题）

- **知识点**：Gateway断言
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第10页
- **答案**：A、B、C

**解析：** 课件列出路径、方法和Header等请求条件，断言不能凭空读取未提供的业务字段。

**选项辨析：**

- A：正确。Path是常见断言。
- B：正确。Method可区分GET/POST。
- C：正确。Header可参与灰度或鉴权路由。
- D：错误。未在请求中的数据库字段不是直接断言条件。

**官方参考：** https://spring.io/projects/spring-cloud

### SPRING-439（多选题）

- **知识点**：Gateway过滤器
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第10页
- **答案**：A、B、C

**解析：** Filter适合前置/后置的通用处理，领域模型仍应由业务服务负责。

**选项辨析：**

- A：正确。请求改写是常见用途。
- B：正确。后置过滤器可增强响应。
- C：正确。鉴权审计属于横切逻辑。
- D：错误。不应把领域模型塞入网关。

**官方参考：** https://spring.io/projects/spring-cloud

### SPRING-440（多选题）

- **知识点**：配置中心
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第11页
- **答案**：A、B、C

**解析：** 配置中心解决配置治理问题，不会替代业务开发。

**选项辨析：**

- A：正确。集中存储减少配置散落。
- B：正确。Namespace和Group隔离环境。
- C：正确。版本能力支持回滚。
- D：错误。业务代码仍需人工实现。

**官方参考：** https://nacos.io/docs/latest/what-is-nacos/

### SPRING-441（多选题）

- **知识点**：动态刷新
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第11页
- **答案**：A、B、C

**解析：** 课件描述启动拉取、长轮询监听、本地更新的流程，动态刷新正是减少重启。

**选项辨析：**

- A：正确。启动拉取是初始步骤。
- B：正确。监听用于发现变更。
- C：正确。更新缓存后Bean可刷新。
- D：错误。无需停止全部实例是热刷新的价值。

**官方参考：** https://nacos.io/docs/latest/what-is-nacos/

### SPRING-442（多选题）

- **知识点**：配置安全
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第11页
- **答案**：A、B、C

**解析：** 配置中心集中后更要控制访问和敏感信息，匿名公网暴露会扩大泄露面。

**选项辨析：**

- A：正确。最小权限减少误用。
- B：正确。敏感配置需脱敏审计。
- C：正确。环境隔离防止串用。
- D：错误。匿名公网暴露不安全。

**官方参考：** https://nacos.io/docs/latest/what-is-nacos/

### SPRING-443（多选题）

- **知识点**：CAP取舍
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第12页
- **答案**：A、B、C

**解析：** CAP取舍要结合业务，课件建议治理基础设施偏AP、普通业务采用最终一致性，但不能绝对化。

**选项辨析：**

- A：正确。分区容错是现实约束。
- B：正确。注册中心需在分区时继续服务。
- C：正确。最终一致性可提升可用性。
- D：错误。一致性选择必须看业务场景。

**官方参考：** https://spring.io/projects/spring-cloud

### SPRING-444（多选题）

- **知识点**：分布式事务
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第12页
- **答案**：A、B、C

**解析：** 异步、补偿和柔性事务降低长事务耦合；共享超级账号会破坏边界和安全。

**选项辨析：**

- A：正确。消息可实现最终一致。
- B：正确。补偿修复阶段性失败。
- C：正确。TCC/Saga适合特定长流程。
- D：错误。超级账号不是治理方案。

**官方参考：** https://spring.io/projects/spring-cloud

### SPRING-445（多选题）

- **知识点**：渐进式拆分
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第12页
- **答案**：A、B、C

**解析：** 课件建议循序渐进，拆分应服务于业务边界而非追求服务数量。

**选项辨析：**

- A：正确。核心边界是起点。
- B：正确。先验证单体有助于降低风险。
- C：正确。成本评估不可少。
- D：错误。类级拆分会造成过度细化。

**官方参考：** https://spring.io/projects/spring-cloud

### SPRING-446（多选题）

- **知识点**：可靠性设计
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第14页
- **答案**：A、B、C

**解析：** 重试必须和幂等、超时、退避及熔断配套，不能无条件重复具有副作用的动作。

**选项辨析：**

- A：正确。幂等决定能否安全重试。
- B：正确。退避避免瞬时放大。
- C：正确。熔断和次数上限保护系统。
- D：错误。无条件重复扣款是错误做法。

**官方参考：** https://spring.io/projects/spring-cloud

### SPRING-447（多选题）

- **知识点**：运维观测
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第14页
- **答案**：A、B、C

**解析：** 链路标识、耗时和结构化错误上下文可以把一次请求串联起来，页面颜色没有诊断价值。

**选项辨析：**

- A：正确。TraceId支持跨服务关联。
- B：正确。耗时帮助定位瓶颈。
- C：正确。上下文帮助复盘故障。
- D：错误。页面颜色不提供服务运行证据。

**官方参考：** https://spring.io/projects/spring-cloud

### SPRING-448（多选题）

- **知识点**：Cloud实践路线
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第13页
- **答案**：A、B、C

**解析：** 课件路线先环境准备，再注册发现、远程调用和容错保护，复杂事务不应先于基础验证。

**选项辨析：**

- A：正确。Docker Compose可准备环境。
- B：正确。Provider/Consumer验证注册发现。
- C：正确。Feign练习声明式调用。
- D：错误。先做复杂事务会增加无关风险。

**官方参考：** https://spring.io/projects/spring-cloud

### SPRING-449（多选题）

- **知识点**：综合代码分析
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第13页
- **答案**：A、B、C

**解析：** lb://是服务名目标，Path负责匹配，注册中心和负载均衡共同完成动态寻址。

**选项辨析：**

- A：正确。服务名来自URI。
- B：正确。Path是请求匹配条件。
- C：正确。实例选择由治理组件完成。
- D：错误。它不是固定IP写法。

**官方参考：** https://spring.io/projects/spring-cloud

### SPRING-450（多选题）

- **知识点**：Spring Cloud选型
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第14页
- **答案**：A、B、C

**解析：** 各组件按治理职责协作，订单明细应由业务服务和数据层负责。

**选项辨析：**

- A：正确。Nacos覆盖注册与配置。
- B：正确。Feign简化调用。
- C：正确。Sentinel提供稳定性治理。
- D：错误。Gateway不应承担业务数据持久化。

**官方参考：** https://spring.io/projects/spring-cloud

### SPRING-451（多选题）

- **知识点**：故障隔离
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第14页
- **答案**：A、B、C

**解析：** 超时、资源隔离和降级共同保护核心流程，无限等待会造成资源耗尽。

**选项辨析：**

- A：正确。超时限制等待。
- B：正确。隔离限制故障影响范围。
- C：正确。缓存和默认值提供降级。
- D：错误。无限等待扩大故障。

**官方参考：** https://sentinelguard.io/zh-cn/index.html

### SPRING-452（多选题）

- **知识点**：配置发布
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第11页
- **答案**：A、B、C

**解析：** 灰度、观测和回滚构成可控发布闭环，未经验证的全量变更风险很高。

**选项辨析：**

- A：正确。小范围降低爆炸半径。
- B：正确。指标用于判断影响。
- C：正确。版本回滚是兜底。
- D：错误。未经验证全量发布不安全。

**官方参考：** https://nacos.io/docs/latest/what-is-nacos/

### SPRING-453（多选题）

- **知识点**：Gateway安全
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第10页
- **答案**：A、B、C

**解析：** 网关应做前置安全和审计，同时避免泄露内部拓扑。

**选项辨析：**

- A：正确。统一鉴权减少重复。
- B：正确。管理接口需要限制。
- C：正确。审计便于追溯。
- D：错误。匿名暴露内部地址有风险。

**官方参考：** https://spring.io/projects/spring-cloud

### SPRING-454（多选题）

- **知识点**：服务发现异常
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第5页
- **答案**：A、B、C

**解析：** 注册中心、消费者缓存和网络状态共同影响实例列表，硬编码是倒退方案。

**选项辨析：**

- A：正确。摘除机制可能有延迟。
- B：正确。缓存刷新是关键排查点。
- C：正确。网络分区会影响视图。
- D：错误。硬编码不能解决动态问题。

**官方参考：** https://nacos.io/docs/latest/what-is-nacos/

### SPRING-455（多选题）

- **知识点**：OpenFeign契约
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第7页
- **答案**：A、B、C

**解析：** 接口契约应集中表达路径和参数，地址解析交给服务治理，错误策略需要统一。

**选项辨析：**

- A：正确。映射注解清晰表达契约。
- B：正确。参数绑定减少拼接错误。
- C：正确。统一治理减少重复。
- D：错误。散落硬编码会增加维护成本。

**官方参考：** https://spring.io/projects/spring-cloud

### SPRING-456（多选题）

- **知识点**：课件纠错
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第6页
- **答案**：A、B、C

**解析：** 题库应以可验证的官方名称和当前文档为准，解析中标注课件勘误，避免把笔误固化成知识。

**选项辨析：**

- A：正确。错误拼写不应成为考点。
- B：正确。官方名称是纠错依据。
- C：正确。解析应说明口径。
- D：错误。照抄会误导学习。

**官方参考：** https://spring.io/projects/spring-cloud

### SPRING-457（多选题）

- **知识点**：工程权衡
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第14页
- **答案**：A、B、C

**解析：** 架构决策需要权衡边界、成本和一致性目标，服务数量本身不是先进性的证明。

**选项辨析：**

- A：正确。边界决定内聚和耦合。
- B：正确。网络与运维成本必须评估。
- C：正确。一致性目标取决于业务。
- D：错误。数量越多越先进是误区。

**官方参考：** https://spring.io/projects/spring-cloud

### SPRING-458（多选题）

- **知识点**：总结复盘
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第13页
- **答案**：A、B、C

**解析：** 复盘应关注系统行为和治理效果，而不应只看代码行数。

**选项辨析：**

- A：正确。传播路径帮助优化隔离。
- B：正确。验证治理策略是否有效。
- C：正确。配置追溯支持运维改进。
- D：错误。代码行数不是可靠性指标。

**官方参考：** https://spring.io/projects/spring-cloud

### SPRING-459（多选题）

- **知识点**：Nacos注册
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第5页
- **答案**：A、B、C

**解析：** 地址、端口和元数据用于动态寻址与治理，CSS不是服务实例身份信息。

**选项辨析：**

- A：正确。IP用于定位实例。
- B：正确。端口用于连接。
- C：正确。元数据可承载权重或版本等信息。
- D：错误。CSS与注册无关。

**官方参考：** https://nacos.io/docs/latest/what-is-nacos/

### SPRING-460（多选题）

- **知识点**：服务发现排障
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第5页
- **答案**：A、B、C

**解析：** 发现问题常来自命名空间、注册状态、网络或权限，Controller格式不是首要方向。

**选项辨析：**

- A：正确。命名空间和分组不一致会隔离服务。
- B：正确。注册和心跳决定可见性。
- C：正确。网络权限影响访问。
- D：错误。代码格式通常不能解释注册失败。

**官方参考：** https://nacos.io/docs/latest/what-is-nacos/

### SPRING-461（多选题）

- **知识点**：Feign接口
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第7页
- **答案**：A、B、C

**解析：** Feign接口表达远程契约，数据库索引属于数据层配置。

**选项辨析：**

- A：正确。服务名用于寻址。
- B：正确。方法和路径定义HTTP契约。
- C：正确。参数注解减少歧义。
- D：错误。索引不属于Feign契约。

**官方参考：** https://spring.io/projects/spring-cloud

### SPRING-462（多选题）

- **知识点**：负载均衡选择
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第7页
- **答案**：A、B、C

**解析：** 策略应与实例能力和业务流量特征匹配，不能只按流行度选择。

**选项辨析：**

- A：正确。异构节点需要性能感知。
- B：正确。同质节点可用轮询均匀分发。
- C：正确。响应时间策略需要性能观测。
- D：错误。流行度不是工程依据。

**官方参考：** https://spring.io/projects/spring-cloud

### SPRING-463（多选题）

- **知识点**：Feign容错
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第8页
- **答案**：A、B、C

**解析：** 容错要有边界并保持错误可观测，吞掉全部异常会掩盖问题。

**选项辨析：**

- A：正确。超时限制阻塞。
- B：正确。熔断降级防扩散。
- C：正确。幂等是重试前提。
- D：错误。无条件吞异常不利排障。

**官方参考：** https://spring.io/projects/spring-cloud

### SPRING-464（多选题）

- **知识点**：Sentinel规则
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第9页
- **答案**：A、B、C

**解析：** 流控和热点规则面向运行资源与请求特征，代码格式不是流量指标。

**选项辨析：**

- A：正确。QPS是资源流控维度。
- B：正确。并发数保护运行资源。
- C：正确。热点参数防止局部滥用。
- D：错误。缩进不影响流量规则。

**官方参考：** https://sentinelguard.io/zh-cn/index.html

### SPRING-465（多选题）

- **知识点**：熔断降级结果
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第8页
- **答案**：A、B、C

**解析：** 用户侧应获得可控兜底，内部异常细节需记录但不能直接泄露。

**选项辨析：**

- A：正确。缓存快照可用。
- B：正确。默认值适用于非核心数据。
- C：正确。友好提示避免错误页面。
- D：错误。堆栈和连接串属于敏感信息。

**官方参考：** https://sentinelguard.io/zh-cn/index.html

### SPRING-466（多选题）

- **知识点**：Gateway配置
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第10页
- **答案**：A、B、C

**解析：** 三者共同组成路由规则，事务隔离不属于Gateway路由元素。

**选项辨析：**

- A：正确。uri指定目标。
- B：正确。predicates决定匹配。
- C：正确。filters扩展处理。
- D：错误。事务隔离由数据访问层管理。

**官方参考：** https://spring.io/projects/spring-cloud

### SPRING-467（多选题）

- **知识点**：网关灰度
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第10页
- **答案**：A、B、C

**解析：** 课件列举Header、Cookie和权重等分流方式，敏感密码绝不能作为公开路由依据。

**选项辨析：**

- A：正确。Header可分流。
- B：正确。Cookie可识别实验用户。
- C：正确。权重可控制比例。
- D：错误。密码不是路由条件。

**官方参考：** https://spring.io/projects/spring-cloud

### SPRING-468（多选题）

- **知识点**：配置热更新
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第11页
- **答案**：A、B、C

**解析：** 动态配置的价值就是运行时更新，重新打包镜像不是每次变更的必需步骤。

**选项辨析：**

- A：正确。初始拉取建立配置。
- B：正确。通知让客户端及时感知。
- C：正确。本地缓存更新后Bean可刷新。
- D：错误。重新打包会失去动态治理优势。

**官方参考：** https://nacos.io/docs/latest/what-is-nacos/

### SPRING-469（多选题）

- **知识点**：配置审计
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第11页
- **答案**：A、B、C

**解析：** 审计要覆盖变更人、时间、内容和版本，便于追责和恢复。

**选项辨析：**

- A：正确。修改人是审计核心。
- B：正确。时间和差异用于追溯。
- C：正确。版本便于回滚。
- D：错误。电影观看与配置审计无关。

**官方参考：** https://nacos.io/docs/latest/what-is-nacos/

### SPRING-470（多选题）

- **知识点**：微服务一致性
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第12页
- **答案**：A、B、C

**解析：** 最终一致性不是放任不管，需要投递、消费幂等和补偿对账形成闭环。

**选项辨析：**

- A：正确。消息可靠性是基础。
- B：正确。幂等避免重复消费。
- C：正确。补偿和对账发现并修复偏差。
- D：错误。网络不会保证业务最终成功。

**官方参考：** https://spring.io/projects/spring-cloud

### SPRING-471（多选题）

- **知识点**：服务拆分决策
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第12页
- **答案**：A、B、C

**解析：** 拆分需从业务、交付、扩展和故障影响评估，类名长度不是架构依据。

**选项辨析：**

- A：正确。边界和团队责任重要。
- B：正确。独立交付需求支持拆分。
- C：正确。隔离收益值得评估。
- D：错误。类名长度不能决定服务。

**官方参考：** https://spring.io/projects/spring-cloud

### SPRING-472（多选题）

- **知识点**：可观测性
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第14页
- **答案**：A、B、C

**解析：** 日志、指标和Trace互相补充，构成定位故障和性能问题的基础。

**选项辨析：**

- A：正确。日志提供事件上下文。
- B：正确。指标显示趋势和容量。
- C：正确。链路追踪串联调用。
- D：错误。编辑器颜色不是运行观测。

**官方参考：** https://spring.io/projects/spring-cloud

### SPRING-473（多选题）

- **知识点**：发布治理
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第14页
- **答案**：A、B、C

**解析：** 分阶段验证、灰度和指标观察降低发布风险，回滚预案仍是必要保障。

**选项辨析：**

- A：正确。测试环境减少基础错误。
- B：正确。灰度限制影响面。
- C：正确。指标帮助判断成功。
- D：错误。跳过回滚预案不稳妥。

**官方参考：** https://spring.io/projects/spring-cloud

### SPRING-474（多选题）

- **知识点**：账号权限
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第11页
- **答案**：A、B、C

**解析：** 管理平面需要更严格的身份、网络和审计控制，匿名公网暴露会增加攻击面。

**选项辨析：**

- A：正确。最小权限降低误用。
- B：正确。网络隔离减少攻击面。
- C：正确。审计支持追责。
- D：错误。匿名暴露不安全。

**官方参考：** https://nacos.io/docs/latest/what-is-nacos/

### SPRING-475（多选题）

- **知识点**：调用链保护
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第14页
- **答案**：A、B、C

**解析：** 超时、熔断和限流共同控制等待、传播和入口压力，无限等待会耗尽资源。

**选项辨析：**

- A：正确。超时限制单次等待。
- B：正确。熔断阻断连续失败。
- C：正确。限流控制进入量。
- D：错误。无限等待是风险。

**官方参考：** https://sentinelguard.io/zh-cn/index.html

### SPRING-476（多选题）

- **知识点**：架构避坑
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第12页
- **答案**：A、B、C

**解析：** 课件强调渐进拆分、实际取舍和柔性事务，反对盲目追求细粒度。

**选项辨析：**

- A：正确。避免过度拆分。
- B：正确。CAP要结合业务。
- C：正确。跨服务事务需谨慎。
- D：错误。越细越先进是误区。

**官方参考：** https://spring.io/projects/spring-cloud

### SPRING-477（多选题）

- **知识点**：实战验证
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第13页
- **答案**：A、B、C

**解析：** 先完成注册发现和调用闭环，再逐步加入容错与配置治理更易定位问题。

**选项辨析：**

- A：正确。Nacos是基础设施。
- B：正确。Provider验证注册。
- C：正确。Consumer验证发现调用。
- D：错误。先断网不能替代基础闭环。

**官方参考：** https://spring.io/projects/spring-cloud

### SPRING-478（多选题）

- **知识点**：版本协同
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第14页
- **答案**：A、B、C

**解析：** 版本兼容属于高风险变更，应优先使用官方和组件维护方资料。

**选项辨析：**

- A：正确。官方项目页提供权威信息。
- B：正确。兼容矩阵避免Boot冲突。
- C：正确。Alibaba说明覆盖其组件。
- D：错误。随机片段不能作为版本依据。

**官方参考：** https://spring.io/projects/spring-cloud

### SPRING-479（多选题）

- **知识点**：容量保护
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第14页
- **答案**：A、B、C

**解析：** 入口限流、内部控制和降级可以形成多层防线；无限扩容既不现实也不等于治理。

**选项辨析：**

- A：正确。网关在入口削峰。
- B：正确。内部并发控制保护线程资源。
- C：正确。降级保住核心流程。
- D：错误。无限扩容不是可靠方案。

**官方参考：** https://sentinelguard.io/zh-cn/index.html

### SPRING-480（多选题）

- **知识点**：配置变更
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第14页
- **答案**：A、B、C

**解析：** 动态并不意味着无流程，灰度验证、指标观察和回滚能力仍是必要的。

**选项辨析：**

- A：正确。先验证降低风险。
- B：正确。运行指标反映影响。
- C：正确。回滚能力保障恢复。
- D：错误。无审计变更不可控。

**官方参考：** https://nacos.io/docs/latest/what-is-nacos/

### SPRING-481（多选题）

- **知识点**：Cloud客户端治理
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第7页
- **答案**：A、B、C

**解析：** 可用状态、权重和性能信息都能帮助选择目标，显示器大小无关。

**选项辨析：**

- A：正确。健康状态排除故障节点。
- B：正确。权重可表达分流意图。
- C：正确。响应时间支持性能感知。
- D：错误。显示器大小不影响服务选择。

**官方参考：** https://spring.io/projects/spring-cloud

### SPRING-482（多选题）

- **知识点**：失败处理
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第8页
- **答案**：A、B、C

**解析：** 失败处理需要边界和可观测性，递归放大请求会导致更严重故障。

**选项辨析：**

- A：正确。有限重试可恢复瞬时故障。
- B：正确。熔断降级阻断扩散。
- C：正确。日志和告警支持处置。
- D：错误。无限递归会耗尽资源。

**官方参考：** https://spring.io/projects/spring-cloud

### SPRING-483（多选题）

- **知识点**：网关入口
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第10页
- **答案**：A、B、C

**解析：** 网关适合通用入口治理，领域规则应由业务服务负责。

**选项辨析：**

- A：正确。认证是横切能力。
- B：正确。限流是入口治理。
- C：正确。路由是网关基本职责。
- D：错误。领域规则不应塞进网关。

**官方参考：** https://spring.io/projects/spring-cloud

### SPRING-484（多选题）

- **知识点**：配置环境
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第11页
- **答案**：A、B、C

**解析：** 隔离既是配置正确性要求，也是安全边界；共享明文密码与之相反。

**选项辨析：**

- A：正确。防止串用是收益。
- B：正确。权限可按环境限制。
- C：正确。配置可独立发布。
- D：错误。共享明文密码不安全。

**官方参考：** https://nacos.io/docs/latest/what-is-nacos/

### SPRING-485（多选题）

- **知识点**：微服务事务
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第12页
- **答案**：A、B、C

**解析：** 异步事件和柔性事务降低长锁依赖，全局锁会损害可用性和自治。

**选项辨析：**

- A：正确。事件驱动可解耦。
- B：正确。补偿处理局部失败。
- C：正确。柔性事务适合特定长流程。
- D：错误。全局锁不是优先方案。

**官方参考：** https://spring.io/projects/spring-cloud

### SPRING-486（多选题）

- **知识点**：服务拆分评价
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第12页
- **答案**：A、B、C

**解析：** 拆分成功看边界和实际工程收益，数量不是唯一指标。

**选项辨析：**

- A：正确。职责清晰说明边界有效。
- B：正确。独立发布扩展是收益。
- C：正确。成本必须可接受。
- D：错误。数量不能替代效果评价。

**官方参考：** https://spring.io/projects/spring-cloud

### SPRING-487（多选题）

- **知识点**：链路观测
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第14页
- **答案**：A、B、C

**解析：** 入口日志、指标和Trace共同提供请求路径与系统状态，IDE操作无关。

**选项辨析：**

- A：正确。网关日志提供入口信息。
- B：正确。指标显示运行趋势。
- C：正确。Trace串联服务。
- D：错误。IDE撤销与运行观测无关。

**官方参考：** https://spring.io/projects/spring-cloud

### SPRING-488（多选题）

- **知识点**：灰度发布
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第10页
- **答案**：A、B、C

**解析：** 权重、请求特征和实例标签都可控制灰度范围，全量同时切换不利于风险控制。

**选项辨析：**

- A：正确。权重限制比例。
- B：正确。Header/Cookie识别流量。
- C：正确。标签可选择版本实例。
- D：错误。全量切换扩大风险。

**官方参考：** https://spring.io/projects/spring-cloud

### SPRING-489（多选题）

- **知识点**：Nacos运维
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第11页
- **答案**：A、B、C

**解析：** 配置内容和访问边界变更都应可追溯，桌面壁纸与配置审计无关。

**选项辨析：**

- A：正确。新建修改影响运行。
- B：正确。删除回滚影响恢复。
- C：正确。权限变更影响安全。
- D：错误。壁纸不是治理操作。

**官方参考：** https://nacos.io/docs/latest/what-is-nacos/

### SPRING-490（多选题）

- **知识点**：容错演练
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第8页
- **答案**：A、B、C

**解析：** 超时、异常和网络故障能验证不同保护分支，字体变化不是容错故障。

**选项辨析：**

- A：正确。超时触发慢调用保护。
- B：正确。异常触发错误比例规则。
- C：正确。网络故障验证不可达处理。
- D：错误。字体不影响服务运行。

**官方参考：** https://sentinelguard.io/zh-cn/index.html

### SPRING-491（多选题）

- **知识点**：Cloud学习
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第13页
- **答案**：A、B、C

**解析：** 逐步增加组件可以缩小问题范围，避免一次引入过多变量。

**选项辨析：**

- A：正确。注册发现是基础。
- B：正确。Feign验证调用契约。
- C：正确。容错在调用闭环后加入。
- D：错误。同时改动所有组件不利排障。

**官方参考：** https://spring.io/projects/spring-cloud

### SPRING-492（多选题）

- **知识点**：注册中心职责
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第5页
- **答案**：A、B、C

**解析：** 注册中心负责治理元数据，不承担业务代码、前端渲染或业务事务。

**选项辨析：**

- A：正确。领域规则不属于注册中心。
- B：正确。页面渲染不属于注册中心。
- C：正确。业务事务不属于注册中心。
- D：错误。地址和健康信息正是其职责。

**官方参考：** https://nacos.io/docs/latest/what-is-nacos/

### SPRING-493（多选题）

- **知识点**：调用结果
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第7页
- **答案**：A、B、C

**解析：** 成功、业务失败和技术异常需要不同处置，统一映射null会丢失语义。

**选项辨析：**

- A：正确。成功需正常返回。
- B：正确。业务失败需按契约处理。
- C：正确。技术异常可触发容错。
- D：错误。统一null会掩盖问题。

**官方参考：** https://spring.io/projects/spring-cloud

### SPRING-494（多选题）

- **知识点**：限流降级
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第9页
- **答案**：A、B、C

**解析：** 多层流控和降级可以保护系统，健康检查不应因高峰关闭。

**选项辨析：**

- A：正确。入口限流削峰。
- B：正确。热点保护局部资源。
- C：正确。降级保核心。
- D：错误。关闭健康检查会增加风险。

**官方参考：** https://sentinelguard.io/zh-cn/index.html

### SPRING-495（多选题）

- **知识点**：网关职责边界
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第10页
- **答案**：A、B、C

**解析：** 领域规则应由业务服务掌握，网关适合通用入口横切逻辑。

**选项辨析：**

- A：正确。订单状态机是领域逻辑。
- B：正确。库存扣减是业务规则。
- C：正确。支付幂等需要业务语义。
- D：错误。Token预校验适合入口。

**官方参考：** https://spring.io/projects/spring-cloud

### SPRING-496（多选题）

- **知识点**：配置可靠性
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第11页
- **答案**：A、B、C

**解析：** 缓存、版本和告警提高配置韧性与可追溯性，盲目覆盖会放大错误。

**选项辨析：**

- A：正确。缓存应对短暂故障。
- B：正确。版本支持回滚。
- C：正确。告警帮助发现失败。
- D：错误。配置需校验而非盲目覆盖。

**官方参考：** https://nacos.io/docs/latest/what-is-nacos/

### SPRING-497（多选题）

- **知识点**：事务边界
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第12页
- **答案**：A、B、C

**解析：** 最终一致性必须定义事件、补偿和收敛标准，必要时引入人工处理。

**选项辨析：**

- A：正确。事件时机影响一致性。
- B：正确。补偿处理失败。
- C：正确。收敛标准便于对账。
- D：错误。不定义边界会导致悬挂状态。

**官方参考：** https://spring.io/projects/spring-cloud

### SPRING-498（多选题）

- **知识点**：发布观测
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第14页
- **答案**：A、B、C

**解析：** 灰度扩大要基于运行和业务指标，部署命令成功不代表服务行为正常。

**选项辨析：**

- A：正确。错误率是关键指标。
- B：正确。尾延迟反映用户体验。
- C：正确。业务成功率验证真实影响。
- D：错误。命令执行完只是部署层结果。

**官方参考：** https://spring.io/projects/spring-cloud

### SPRING-499（多选题）

- **知识点**：故障恢复
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第8页
- **答案**：A、B、C

**解析：** 恢复阶段要避免突然放量、错误覆盖和重试风暴，半开提供渐进恢复。

**选项辨析：**

- A：正确。半开验证恢复。
- B：正确。降级结果与真实数据合并需谨慎。
- C：正确。重试应有边界。
- D：错误。永久打开不符合恢复目标。

**官方参考：** https://sentinelguard.io/zh-cn/index.html

### SPRING-500（多选题）

- **知识点**：架构演进
- **难度**：中
- **课件依据**：Spring Cloud 开发课件.pdf 第3页
- **答案**：A、B、C

**解析：** 渐进演进强调从边界和核心链路出发，避免一次性引入全部分布式复杂度。

**选项辨析：**

- A：正确。业务边界是起点。
- B：正确。逐步验证降低风险。
- C：正确。拆分应由实际需求驱动。
- D：错误。一次性全拆风险很高。

**官方参考：** https://spring.io/projects/spring-cloud
