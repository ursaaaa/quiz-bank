# Spring 分层过渡增强题库 600 题 - 答案解析

> 解析卷包含完整选项、答案、逐项辨析、学习阶段、难度、课件页码和官方依据。

## 学习路线

Java → Spring 前置桥接 → Bean/IoC/DI → AOP/MVC/事务/测试 → Spring Boot → Spring Cloud → Spring Cloud Alibaba

# 第1阶段：Java → Spring 前置桥接

## 单选题

### SPRING2-001（单选题）

- **学习阶段**：Java → Spring 前置桥接
- **主题**：Java对象
- **认知层级**：认识
- **难度**：易
- **前置题**：无

在Java中，下面哪项最接近对象？

A. 类创建出的运行时实例
B. 一个包名
C. 一条import语句
D. 一个Maven坐标

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：桥接扩展

**解析：** 对象是类实例化后在运行时存在的实体。

**选项辨析：**

- A：对象是类的实例。
- B：包名只是命名空间。
- C：import只影响源码引用。
- D：Maven坐标描述依赖。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-002（单选题）

- **学习阶段**：Java → Spring 前置桥接
- **主题**：Java类
- **认知层级**：认识
- **难度**：易
- **前置题**：无

类在面向对象程序中主要承担什么作用？

A. 描述对象的结构和行为
B. 保存所有运行时日志
C. 替代JVM线程调度
D. 直接代表一个数据库连接

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：桥接扩展

**解析：** 类定义字段和方法，实例由类创建。

**选项辨析：**

- A：类描述状态与行为。
- B：日志不是类的通用职责。
- C：线程调度由运行时负责。
- D：类不等于数据库连接。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-003（单选题）

- **学习阶段**：Java → Spring 前置桥接
- **主题**：构造器
- **认知层级**：认识
- **难度**：易
- **前置题**：无

构造器最直接的用途是什么？

A. 创建对象时初始化对象状态
B. 在对象销毁后恢复数据
C. 把接口变成数据库表
D. 替代所有业务方法

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：桥接扩展

**解析：** 构造器在对象创建阶段建立初始状态和必要依赖。

**选项辨析：**

- A：构造器负责初始化。
- B：销毁后的恢复不是构造器职责。
- C：接口不会被构造器变成表。
- D：业务方法仍需单独定义。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-004（单选题）

- **学习阶段**：Java → Spring 前置桥接
- **主题**：接口
- **认知层级**：认识
- **难度**：易
- **前置题**：无

使用接口作为字段类型的主要好处是什么？

A. 依赖抽象而不是具体实现
B. 保证所有实现类只有一个实例
C. 自动完成网络调用
D. 避免编译器进行类型检查

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：桥接扩展

**解析：** 接口提供稳定的协作契约，便于替换实现和测试。

**选项辨析：**

- A：面向抽象能降低耦合。
- B：实例数量由创建方式决定。
- C：接口不会自动联网。
- D：Java仍会进行类型检查。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-005（单选题）

- **学习阶段**：Java → Spring 前置桥接
- **主题**：依赖
- **认知层级**：认识
- **难度**：易
- **前置题**：无

类A的构造器需要类B，B对A可以怎样描述？

A. B是A的依赖
B. B是A的注释
C. B是A的包名
D. B是A的编译器

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：桥接扩展

**解析：** A需要B协作才能完成工作，因此B是A的依赖。

**选项辨析：**

- A：需要协作的对象称为依赖。
- B：注释不参与对象协作。
- C：包名不是对象。
- D：编译器不是依赖对象。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-006（单选题）

- **学习阶段**：Java → Spring 前置桥接
- **主题**：依赖关系
- **认知层级**：认识
- **难度**：易
- **前置题**：无

如果业务类在方法内部直接new具体实现，最明显的结果是什么？

A. 业务类与具体实现形成硬编码耦合
B. 依赖会自动由Spring注入
C. 对象会自动获得事务
D. 接口会自动生成Mock

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：桥接扩展

**解析：** 在方法内new把实现选择写死，替换和测试都会变难。

**选项辨析：**

- A：直接new造成硬编码耦合。
- B：Spring不会因new自动注入。
- C：事务代理不是new的结果。
- D：Mock需要测试工具或手动替换。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-007（单选题）

- **学习阶段**：Java → Spring 前置桥接
- **主题**：组合关系
- **认知层级**：认识
- **难度**：易
- **前置题**：无

下面哪种写法更能表达‘服务依赖仓储’的结构？

A. Service持有Repository接口字段
B. Service把Repository名称写在注释里
C. Service只保存一个字符串
D. Service继承操作系统进程

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：桥接扩展

**解析：** 字段或构造器参数表达真实对象协作，接口还保留了替换空间。

**选项辨析：**

- A：接口字段表达协作关系。
- B：注释不产生运行时关系。
- C：字符串不能替代对象契约。
- D：继承进程与业务依赖无关。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-008（单选题）

- **学习阶段**：Java → Spring 前置桥接
- **主题**：可测试性
- **认知层级**：认识
- **难度**：易
- **前置题**：无

为了单元测试OrderService而不连接真实数据库，通常应替换哪个协作者？

A. OrderRepository
B. Java编译器
C. 操作系统内核
D. HTTP端口号

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：桥接扩展

**解析：** 把数据访问协作者替换为Mock或内存实现可以隔离被测服务。

**选项辨析：**

- A：仓储是外部协作者。
- B：编译器不是业务依赖。
- C：内核不是测试替身。
- D：端口号不能替代仓储。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-009（单选题）

- **学习阶段**：Java → Spring 前置桥接
- **主题**：对象图
- **认知层级**：认识
- **难度**：易
- **前置题**：无

多个对象通过字段或构造器彼此协作，整体更接近什么概念？

A. 对象图
B. 字节码常量池
C. 数据库索引
D. HTTP报文头

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：桥接扩展

**解析：** 对象及其依赖连接形成运行时对象图。

**选项辨析：**

- A：对象之间的连接构成对象图。
- B：常量池属于类文件结构。
- C：索引属于数据库。
- D：报文头属于网络协议。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-010（单选题）

- **学习阶段**：Java → Spring 前置桥接
- **主题**：Bean前身
- **认知层级**：认识
- **难度**：易
- **前置题**：无

从普通Java对象过渡到Spring Bean时，最重要的变化是什么？

A. 对象的创建和依赖可交给容器管理
B. 对象必须改写成接口
C. 对象不能再有构造器
D. 对象会自动变成数据库记录

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：桥接扩展

**解析：** Bean仍是Java对象，但其生命周期和依赖可以由IoC容器托管。

**选项辨析：**

- A：容器托管是关键变化。
- B：Bean不要求必须是接口。
- C：构造器仍可用。
- D：Bean不等于数据库记录。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-011（单选题）

- **学习阶段**：Java → Spring 前置桥接
- **主题**：Bean定义
- **认知层级**：认识
- **难度**：易
- **前置题**：无

Bean定义更接近哪项描述？

A. 告诉容器如何创建和配置对象的信息
B. 某次HTTP请求的正文
C. 数据库中的一行数据
D. 编译器的错误列表

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：桥接扩展

**解析：** Bean定义描述类型、作用域、依赖等创建配置元数据。

**选项辨析：**

- A：Bean定义是容器元数据。
- B：HTTP正文不是容器元数据。
- C：数据库行不是Bean定义。
- D：错误列表与对象装配无关。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-012（单选题）

- **学习阶段**：Java → Spring 前置桥接
- **主题**：容器
- **认知层级**：认识
- **难度**：易
- **前置题**：无

IoC容器最基本的职责是什么？

A. 创建、装配并管理受托管对象
B. 替代Java虚拟机
C. 负责所有业务规则
D. 自动设计前端页面

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：桥接扩展

**解析：** 容器围绕对象注册、创建、依赖装配和生命周期提供服务。

**选项辨析：**

- A：对象管理是容器核心。
- B：JVM仍负责运行Java。
- C：业务规则不应交给容器。
- D：前端页面不是IoC职责。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-013（单选题）

- **学习阶段**：Java → Spring 前置桥接
- **主题**：控制反转
- **认知层级**：认识
- **难度**：易
- **前置题**：无

‘控制反转’中的‘反转’主要指什么？

A. 对象管理从业务代码转向容器
B. 程序从Java转成SQL
C. 请求从HTTP转成磁盘
D. 编译从源码转成注释

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：桥接扩展

**解析：** 传统代码主动new依赖，IoC把这部分控制权交给容器。

**选项辨析：**

- A：对象控制权发生转移。
- B：IoC不负责语言转换。
- C：HTTP和磁盘不是这里的反转。
- D：编译不会转成注释。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-014（单选题）

- **学习阶段**：Java → Spring 前置桥接
- **主题**：依赖注入
- **认知层级**：认识
- **难度**：易
- **前置题**：无

容器把Repository传给Service构造器，这种动作称为什么？

A. 依赖注入
B. 垃圾回收
C. 方法重载
D. 序列化

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：桥接扩展

**解析：** 容器在创建Service时提供其所需Repository，属于构造器注入。

**选项辨析：**

- A：提供依赖就是DI。
- B：垃圾回收处理无用对象。
- C：重载是同名方法规则。
- D：序列化是对象表示转换。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-015（单选题）

- **学习阶段**：Java → Spring 前置桥接
- **主题**：注入方式
- **认知层级**：认识
- **难度**：易
- **前置题**：无

下面哪项是常见的依赖注入方式？

A. 构造器注入
B. 磁盘分区注入
C. CSS注入
D. SQL索引注入

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：桥接扩展

**解析：** 构造器、Setter和字段都是Spring常见注入方式。

**选项辨析：**

- A：构造器是标准DI方式。
- B：磁盘分区不是对象装配。
- C：CSS不是Java依赖注入。
- D：索引不是注入方式。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-016（单选题）

- **学习阶段**：Java → Spring 前置桥接
- **主题**：依赖方向
- **认知层级**：认识
- **难度**：易
- **前置题**：无

当Service依赖Repository时，更合理的依赖方向是？

A. Service使用Repository提供的数据访问能力
B. Repository反过来负责Service的页面布局
C. 两者都直接修改对方私有字段
D. Service依赖数据库驱动的源码路径

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：桥接扩展

**解析：** 业务服务调用抽象的数据访问能力，职责边界更清晰。

**选项辨析：**

- A：服务使用仓储是常见分层。
- B：页面布局不是仓储职责。
- C：互改私有字段破坏封装。
- D：源码路径不是运行时依赖。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-017（单选题）

- **学习阶段**：Java → Spring 前置桥接
- **主题**：容器注册
- **认知层级**：认识
- **难度**：易
- **前置题**：无

对象要被容器按名称或类型找到，通常先需要什么？

A. 注册为容器管理对象
B. 写入浏览器缓存
C. 放入数据库索引
D. 编译成CSS

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：桥接扩展

**解析：** 只有进入容器注册表，后续扫描、查找和注入才有依据。

**选项辨析：**

- A：注册是容器管理的前提。
- B：浏览器缓存与IoC无关。
- C：数据库索引不是Bean注册。
- D：CSS不是Java对象。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-018（单选题）

- **学习阶段**：Java → Spring 前置桥接
- **主题**：实现替换
- **认知层级**：认识
- **难度**：易
- **前置题**：无

接口PaymentGateway有两种实现时，测试环境最希望做到什么？

A. 注入测试替身而不改业务类代码
B. 强制业务类调用生产实现
C. 删除接口只保留一个类
D. 把实现类名写入每个方法

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：桥接扩展

**解析：** 依赖抽象后，可以在测试配置中替换实现。

**选项辨析：**

- A：替换测试替身体现解耦。
- B：强制生产实现不利于测试。
- C：删除接口降低扩展性。
- D：方法内写类名会硬编码。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-019（单选题）

- **学习阶段**：Java → Spring 前置桥接
- **主题**：生命周期
- **认知层级**：认识
- **难度**：易
- **前置题**：无

对象从创建到销毁期间经历的管理过程称为什么？

A. 生命周期
B. 包扫描路径
C. 路由断言
D. 事务隔离级别

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：桥接扩展

**解析：** 生命周期描述对象创建、初始化、使用和销毁等阶段。

**选项辨析：**

- A：创建到销毁是生命周期。
- B：包扫描是发现机制。
- C：路由断言属于网关。
- D：事务隔离属于数据一致性。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-020（单选题）

- **学习阶段**：Java → Spring 前置桥接
- **主题**：应用上下文
- **认知层级**：认识
- **难度**：易
- **前置题**：无

ApplicationContext最适合被理解为？

A. 提供Bean管理及事件、资源等应用服务的上下文
B. 一个关系数据库表
C. 一个HTTP客户端对象
D. Java编译器插件

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：桥接扩展

**解析：** ApplicationContext在Bean管理基础上提供事件、资源和国际化等能力。

**选项辨析：**

- A：这是应用上下文定位。
- B：它不是数据库表。
- C：它不等于HTTP客户端。
- D：它不是编译器插件。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-021（单选题）

- **学习阶段**：Java → Spring 前置桥接
- **主题**：构造器注入
- **认知层级**：应用
- **难度**：中
- **前置题**：无

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

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：桥接扩展

**解析：** 构造器参数Repository是Service创建时必须获得的协作者。

**选项辨析：**

- A：构造器参数是依赖。
- B：orderId不是代码中的参数。
- C：Service不是自己的协作者。
- D：包名不是对象依赖。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-022（单选题）

- **学习阶段**：Java → Spring 前置桥接
- **主题**：显式装配
- **认知层级**：理解
- **难度**：中
- **前置题**：无

如果不使用组件扫描，仍想让容器管理UserRepository，可以采用哪种方式？

A. 在@Configuration类的@Bean方法中返回它
B. 把类名写进日志文件
C. 把对象放进HTTP Header
D. 只创建一个接口而不提供实现

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第11页
- **来源口径**：桥接扩展

**解析：** @Bean可以显式注册对象，不要求返回类必须被@Component扫描发现。

**选项辨析：**

- A：@Bean是显式注册方式。
- B：日志不会注册Bean。
- C：HTTP Header不参与容器注册。
- D：仍需可实例化的实现。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-023（单选题）

- **学习阶段**：Java → Spring 前置桥接
- **主题**：依赖装配
- **认知层级**：理解
- **难度**：中
- **前置题**：无

一个容器同时发现两个同类型PaymentGateway，直接按类型注入可能出现什么？

A. 候选不唯一，需要限定选择
B. 容器必然随机挑一个
C. 两个实现会自动合并成一个类
D. 类型匹配会被完全关闭

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：桥接扩展

**解析：** 多个候选需要@Primary、@Qualifier或其他明确选择规则。

**选项辨析：**

- A：多候选会产生歧义。
- B：容器不应随机选择。
- C：实现不会自动合并。
- D：类型匹配仍然存在。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-024（单选题）

- **学习阶段**：Java → Spring 前置桥接
- **主题**：对象与Bean
- **认知层级**：理解
- **难度**：中
- **前置题**：无

下面哪项最准确地区分普通对象和Bean？

A. Bean是由Spring容器定义、创建或管理的对象
B. Bean一定没有任何业务方法
C. 普通对象不能由Java创建
D. Bean必须继承某个Spring基类

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：桥接扩展

**解析：** Bean没有特殊继承要求，关键在于是否纳入容器管理语义。

**选项辨析：**

- A：容器管理是核心区别。
- B：Bean可以有业务方法。
- C：普通对象当然可以由Java创建。
- D：Bean不要求继承Spring基类。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-025（单选题）

- **学习阶段**：Java → Spring 前置桥接
- **主题**：依赖反转
- **认知层级**：理解
- **难度**：中
- **前置题**：无

把Service构造器参数从具体MySqlRepository改成Repository接口，主要改善什么？

A. 降低Service对具体实现的耦合
B. 让数据库自动拥有事务
C. 使接口自动实例化
D. 把运行时调用变成编译期执行

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：桥接扩展

**解析：** 依赖接口后，Service只依赖契约，具体实现可替换。

**选项辨析：**

- A：面向接口降低耦合。
- B：事务需额外配置和机制。
- C：接口不能单独实例化。
- D：调用仍在运行时发生。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-026（单选题）

- **学习阶段**：Java → Spring 前置桥接
- **主题**：Setter注入
- **认知层级**：理解
- **难度**：中
- **前置题**：无

Setter注入相较构造器注入更适合哪种依赖？

A. 可选依赖或允许后续调整的依赖
B. 对象创建前绝不能缺少的依赖
C. 只能由数据库提供的依赖
D. 编译器内部依赖

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：桥接扩展

**解析：** Setter允许对象先创建再设置，因此常用于可选或可变协作者。

**选项辨析：**

- A：可选依赖适合Setter。
- B：必需依赖更适合构造器。
- C：依赖来源不限定数据库。
- D：编译器内部不属于DI语义。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-027（单选题）

- **学习阶段**：Java → Spring 前置桥接
- **主题**：IoC与DI
- **认知层级**：理解
- **难度**：中
- **前置题**：无

下列说法哪项正确？

A. IoC是设计思想，DI是实现依赖交给容器的一种具体方式
B. DI只表示数据库注入
C. IoC要求所有类都使用静态方法
D. 两者都等同于继承

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：桥接扩展

**解析：** IoC描述控制权转移，DI通过构造器、Setter或字段等方式落实依赖提供。

**选项辨析：**

- A：这是两者关系。
- B：DI不是数据库专属。
- C：IoC不要求静态方法。
- D：继承不是IoC或DI的同义词。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-028（单选题）

- **学习阶段**：Java → Spring 前置桥接
- **主题**：容器边界
- **认知层级**：理解
- **难度**：中
- **前置题**：无

如果对象从未注册到Spring容器，@Autowired通常为什么不会对它生效？

A. 容器没有机会创建和后处理该对象
B. Java字段不能被赋值
C. 接口无法作为类型
D. 所有注解只在数据库中执行

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：桥接扩展

**解析：** 依赖注入由容器在管理对象时完成，手动new且未交给容器的对象不在其管理边界内。

**选项辨析：**

- A：不受容器管理是根因。
- B：Java字段当然可以赋值。
- C：接口可以作为字段类型。
- D：注解不是数据库脚本。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-029（单选题）

- **学习阶段**：Java → Spring 前置桥接
- **主题**：代码阅读
- **认知层级**：应用
- **难度**：中
- **前置题**：无

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

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：桥接扩展

**解析：** 普通Java代码中的new不会自动触发Spring装配，具体实现由业务类自己决定。

**选项辨析：**

- A：new明确选择了实现。
- B：没有容器就不会自动替换。
- C：接口不会凭空生成实现。
- D：构造器会被调用。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-030（单选题）

- **学习阶段**：Java → Spring 前置桥接
- **主题**：测试替身
- **认知层级**：理解
- **难度**：中
- **前置题**：无

若使用容器装配Repository，单元测试想使用FakeRepository，最合理的做法是？

A. 在测试配置中提供FakeRepository作为候选
B. 修改所有业务方法的算法
C. 把生产数据库复制到测试机
D. 删除Repository接口

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：桥接扩展

**解析：** 测试配置可以提供替身实现，保持业务类依赖接口不变。

**选项辨析：**

- A：测试配置替换协作者最稳妥。
- B：无需改业务算法。
- C：复制生产库不等于隔离。
- D：接口仍是抽象边界。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-031（单选题）

- **学习阶段**：Java → Spring 前置桥接
- **主题**：Bean作用域
- **认知层级**：认识
- **难度**：易
- **前置题**：无

Bean作用域回答的主要问题是什么？

A. 容器如何决定Bean实例的创建和复用范围
B. Java类是否可以编译
C. HTTP请求使用哪种方法
D. 数据库使用哪种索引

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：桥接扩展

**解析：** 作用域描述实例创建、缓存和可见范围，例如singleton与prototype。

**选项辨析：**

- A：作用域描述实例策略。
- B：编译与作用域无关。
- C：HTTP方法不是Bean作用域。
- D：数据库索引不是容器策略。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-032（单选题）

- **学习阶段**：Java → Spring 前置桥接
- **主题**：配置元数据
- **认知层级**：理解
- **难度**：中
- **前置题**：无

为什么容器需要Bean定义而不是只保存一个对象引用？

A. 它还需要知道类型、依赖、作用域等创建配置
B. 引用本身会自动包含所有业务规则
C. 对象引用可以替代Java类型
D. Bean定义只用于前端样式

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：桥接扩展

**解析：** 容器需要元数据来决定如何实例化、装配和管理对象。

**选项辨析：**

- A：Bean定义承载创建元数据。
- B：引用不包含全部业务规则。
- C：引用不能替代类型信息。
- D：前端样式与此无关。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-033（单选题）

- **学习阶段**：Java → Spring 前置桥接
- **主题**：构造器循环依赖
- **认知层级**：分析
- **难度**：难
- **前置题**：无

ServiceA构造器需要ServiceB，ServiceB构造器又需要ServiceA，容器为何难以直接创建？

A. 任一对象都必须先获得尚未完成创建的另一个对象
B. Java不允许两个类互相引用
C. 接口不能出现在构造器参数中
D. 容器只会创建字符串

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：桥接扩展

**解析：** 构造器注入要求实例化时立即获得依赖，循环会形成无法先完成的创建链。

**选项辨析：**

- A：创建顺序形成闭环。
- B：Java允许类互相引用。
- C：接口可作为构造器参数。
- D：容器不只创建字符串。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-034（单选题）

- **学习阶段**：Java → Spring 前置桥接
- **主题**：代理与Bean
- **认知层级**：分析
- **难度**：难
- **前置题**：无

如果事务功能通过代理增强Bean，业务代码直接new目标类可能绕过什么？

A. 容器创建的代理和其后处理机制
B. Java的基本类型检查
C. 数据库的主键约束
D. HTTP协议版本协商

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：桥接扩展

**解析：** 容器可能返回带事务等增强的代理；手动new目标对象不会经过这些容器扩展。

**选项辨析：**

- A：绕过容器代理是关键风险。
- B：类型检查仍由Java执行。
- C：主键约束不由Bean代理决定。
- D：HTTP协商与此无关。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-035（单选题）

- **学习阶段**：Java → Spring 前置桥接
- **主题**：依赖与生命周期
- **认知层级**：分析
- **难度**：难
- **前置题**：无

一个singleton Bean持有prototype对象字段时，为什么不能简单认为每次调用都会获得新prototype？

A. 字段通常只在singleton创建时注入一次
B. prototype只能是静态类
C. singleton不能持有任何对象
D. 容器会自动重写所有业务方法

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：桥接扩展

**解析：** 一次注入只提供一次引用，后续需要对象提供者或方法注入等机制才能重新获取。

**选项辨析：**

- A：注入时机决定字段引用。
- B：prototype不是静态类。
- C：singleton可以持有对象。
- D：容器不会任意重写业务方法。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-059（单选题）

- **学习阶段**：Java → Spring 前置桥接
- **主题**：依赖方向
- **认知层级**：理解
- **难度**：中
- **前置题**：无

当Controller依赖Service时，哪种依赖关系更符合分层职责？

A. Controller调用Service完成用例，Service不依赖Controller
B. Controller和Service互相new对方
C. Service只负责解析浏览器CSS
D. Controller直接修改Service私有字段

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第10页
- **来源口径**：桥接扩展

**解析：** 上层入口调用业务服务，业务服务不应反向依赖Web入口。

**选项辨析：**

- A：单向调用保持分层。
- B：互相new容易形成耦合或循环。
- C：CSS不是Service职责。
- D：直接修改私有字段破坏封装。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

## 多选题

### SPRING2-036（多选题）

- **学习阶段**：Java → Spring 前置桥接
- **主题**：Java对象协作
- **认知层级**：认识
- **难度**：易
- **前置题**：无

下列哪些内容可以表达Java对象之间的协作？

A. 构造器参数
B. 接口类型字段
C. 方法参数
D. 颜色主题名称

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：桥接扩展

**解析：** 构造器、字段和方法参数都能表达对象协作，颜色主题不是对象依赖。

**选项辨析：**

- A：构造器参数提供协作者。
- B：接口字段表达抽象依赖。
- C：方法参数传递协作者。
- D：颜色主题不是对象协作关系。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-037（多选题）

- **学习阶段**：Java → Spring 前置桥接
- **主题**：面向抽象
- **认知层级**：认识
- **难度**：易
- **前置题**：无

面向接口编程通常带来哪些收益？

A. 替换实现更容易
B. 测试时更容易提供替身
C. 调用方依赖稳定契约
D. 保证所有实现性能相同

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：桥接扩展

**解析：** 接口提供契约和替换边界，但不保证实现的性能特征。

**选项辨析：**

- A：不同实现可替换。
- B：测试替身可实现同一接口。
- C：调用方依赖抽象契约。
- D：接口不保证性能相同。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-038（多选题）

- **学习阶段**：Java → Spring 前置桥接
- **主题**：硬编码依赖
- **认知层级**：认识
- **难度**：易
- **前置题**：无

类内部直接new具体依赖可能带来哪些问题？

A. 实现难替换
B. 单元测试隔离困难
C. 业务类承担创建责任
D. 自动获得容器生命周期回调

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：桥接扩展

**解析：** 直接new会把实现选择和创建责任带入业务类，也会增加测试成本。

**选项辨析：**

- A：具体实现被写死。
- B：测试难以替换真实依赖。
- C：业务类承担创建责任。
- D：直接new不会触发容器回调。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-039（多选题）

- **学习阶段**：Java → Spring 前置桥接
- **主题**：IoC基础
- **认知层级**：认识
- **难度**：易
- **前置题**：无

关于IoC容器的基础职责，正确的有？

A. 创建对象
B. 装配依赖
C. 管理生命周期
D. 替代所有业务规则

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：桥接扩展

**解析：** 容器负责对象管理基础设施，业务规则仍属于业务组件。

**选项辨析：**

- A：创建是容器职责。
- B：依赖装配是容器职责。
- C：生命周期可由容器管理。
- D：业务规则不应全部交给容器。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-040（多选题）

- **学习阶段**：Java → Spring 前置桥接
- **主题**：DI方式
- **认知层级**：认识
- **难度**：易
- **前置题**：无

下列哪些属于常见依赖注入方式？

A. 构造器注入
B. Setter注入
C. 字段注入
D. CSS选择器注入

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：桥接扩展

**解析：** Spring常见DI方式包括构造器、Setter和字段注入。

**选项辨析：**

- A：构造器是DI方式。
- B：Setter是DI方式。
- C：字段可以由注解注入。
- D：CSS选择器不是Java DI。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-041（多选题）

- **学习阶段**：Java → Spring 前置桥接
- **主题**：Bean概念
- **认知层级**：认识
- **难度**：易
- **前置题**：无

关于Spring Bean，正确的有？

A. 它通常是由容器管理的对象
B. 它不要求继承特殊基类
C. 它可以拥有普通Java方法
D. 它必须是数据库表映射对象

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：桥接扩展

**解析：** Bean的关键是容器管理语义，不要求特殊继承，也不局限于持久化对象。

**选项辨析：**

- A：容器管理是Bean关键。
- B：Bean不要求继承基类。
- C：Bean仍是普通Java对象。
- D：Bean不必映射数据库表。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-042（多选题）

- **学习阶段**：Java → Spring 前置桥接
- **主题**：测试隔离
- **认知层级**：认识
- **难度**：易
- **前置题**：无

为了隔离OrderService的外部影响，测试中可以替换哪些内容？

A. 仓储实现
B. 远程客户端
C. 时钟或随机数提供者
D. Java关键字语义

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：桥接扩展

**解析：** 外部协作者可通过抽象替换，Java关键字不能被依赖注入替换。

**选项辨析：**

- A：仓储可替换。
- B：远程客户端可使用Fake。
- C：时间和随机源可注入。
- D：关键字不属于对象协作者。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-043（多选题）

- **学习阶段**：Java → Spring 前置桥接
- **主题**：对象生命周期
- **认知层级**：认识
- **难度**：易
- **前置题**：无

对象生命周期通常可以包含哪些阶段？

A. 创建
B. 初始化
C. 使用
D. 修改Java继承关系

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：桥接扩展

**解析：** 从创建到使用是对象生命周期的基本阶段，销毁或资源释放属于结束阶段；修改继承关系不是运行时生命周期。

**选项辨析：**

- A：对象需要被创建。
- B：创建后可能初始化。
- C：对象在运行中被使用。
- D：继承关系不是运行时生命周期阶段。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-044（多选题）

- **学习阶段**：Java → Spring 前置桥接
- **主题**：容器注册
- **认知层级**：认识
- **难度**：易
- **前置题**：无

要让容器能够管理一个对象，通常需要哪些条件？

A. 有可创建或提供实例的方式
B. 有必要的配置或元数据
C. 对象被注册或被扫描发现
D. 只在README中写出类名

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：桥接扩展

**解析：** 容器需要实例来源、装配信息和注册入口，README不会自动注册对象。

**选项辨析：**

- A：必须有创建方式。
- B：元数据指导装配。
- C：扫描或显式注册使容器发现对象。
- D：文档文字不会改变容器状态。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-045（多选题）

- **学习阶段**：Java → Spring 前置桥接
- **主题**：依赖边界
- **认知层级**：理解
- **难度**：中
- **前置题**：无

良好的服务-仓储分层通常具备哪些特点？

A. 服务表达业务用例
B. 仓储封装数据访问
C. 服务通过抽象依赖仓储
D. 服务直接修改数据库连接池内部字段

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：桥接扩展

**解析：** 分层让业务用例与数据访问职责分开，并通过抽象协作。

**选项辨析：**

- A：业务用例属于服务。
- B：数据访问属于仓储。
- C：抽象依赖有利于替换。
- D：直接改连接池内部破坏边界。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-046（多选题）

- **学习阶段**：Java → Spring 前置桥接
- **主题**：IoC与DI
- **认知层级**：理解
- **难度**：中
- **前置题**：无

关于IoC与DI的关系，正确的有？

A. IoC描述控制权转移
B. DI是提供依赖的一种实现方式
C. 构造器注入可以实现DI
D. IoC等同于把所有类改成单例

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：桥接扩展

**解析：** IoC是思想，DI是常见实现；作用域和单例是另一个维度。

**选项辨析：**

- A：IoC关注控制权。
- B：DI落实依赖提供。
- C：构造器可完成注入。
- D：IoC不等于单例。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-047（多选题）

- **学习阶段**：Java → Spring 前置桥接
- **主题**：Bean定义
- **认知层级**：理解
- **难度**：中
- **前置题**：无

Bean定义中通常可以描述哪些信息？

A. 对象类型或工厂来源
B. 依赖关系
C. 作用域
D. 用户当天的浏览器主题

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：桥接扩展

**解析：** 容器元数据用于创建和管理对象，浏览器主题与Bean定义无关。

**选项辨析：**

- A：类型或工厂来源指导创建。
- B：依赖信息指导装配。
- C：作用域指导复用策略。
- D：浏览器主题不是容器元数据。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-048（多选题）

- **学习阶段**：Java → Spring 前置桥接
- **主题**：显式配置
- **认知层级**：理解
- **难度**：中
- **前置题**：无

使用@Configuration与@Bean时，通常可以获得哪些能力？

A. 显式声明对象来源
B. 在代码中表达条件配置
C. 通过编译器检查类型关系
D. 自动绕过所有权限检查

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：桥接扩展

**解析：** JavaConfig让配置成为类型安全的代码，但不会绕过权限或安全机制。

**选项辨析：**

- A：@Bean声明对象来源。
- B：Java代码可表达条件。
- C：类型错误可能在编译期暴露。
- D：配置不会绕过权限。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-049（多选题）

- **学习阶段**：Java → Spring 前置桥接
- **主题**：组件扫描
- **认知层级**：理解
- **难度**：中
- **前置题**：无

关于组件扫描，正确的有？

A. 它可以发现@Component及其语义化注解
B. 扫描范围会影响哪些类进入容器
C. 扫描发现后对象仍需经过容器创建管理
D. 扫描会把所有数据库表转换成Bean

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：桥接扩展

**解析：** 组件扫描是注册入口之一，范围和后续容器管理都很重要。

**选项辨析：**

- A：语义化组件通常可被扫描。
- B：扫描边界决定发现结果。
- C：发现后仍由容器管理。
- D：扫描不会读取所有数据库表。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-050（多选题）

- **学习阶段**：Java → Spring 前置桥接
- **主题**：依赖选择
- **认知层级**：理解
- **难度**：中
- **前置题**：无

有多个同类型候选Bean时，合理的处理方式包括哪些？

A. 使用@Primary指定主候选
B. 使用@Qualifier明确名称或限定符
C. 调整设计使依赖类型更明确
D. 让容器随机选择以减少配置

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：桥接扩展

**解析：** 多候选必须表达选择意图，随机选择会造成不可预测行为。

**选项辨析：**

- A：@Primary可指定默认候选。
- B：@Qualifier可细化选择。
- C：更清晰的抽象也能减少歧义。
- D：随机选择不是可靠配置。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-051（多选题）

- **学习阶段**：Java → Spring 前置桥接
- **主题**：容器边界
- **认知层级**：理解
- **难度**：中
- **前置题**：无

哪些情况可能导致依赖注入没有按预期发生？

A. 对象由业务代码new且未交给容器
B. 组件不在扫描范围
C. 依赖存在多个未消歧候选
D. 构造器参数使用接口类型

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：桥接扩展

**解析：** 不受容器管理、未被发现或候选歧义都会影响注入；接口类型本身并不是问题。

**选项辨析：**

- A：手动new可能绕过容器。
- B：扫描边界会影响注册。
- C：多候选需要选择规则。
- D：接口类型通常有利于解耦。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-052（多选题）

- **学习阶段**：Java → Spring 前置桥接
- **主题**：测试替身
- **认知层级**：理解
- **难度**：中
- **前置题**：无

为一个依赖接口提供Fake实现时，通常应满足哪些条件？

A. 实现相同接口契约
B. 行为足够稳定可重复
C. 只保留测试需要的最小行为
D. 直接连接生产数据库

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：桥接扩展

**解析：** 测试替身要符合契约并可控，不能把生产资源引入单元测试。

**选项辨析：**

- A：相同契约保证可替换。
- B：稳定行为便于断言。
- C：最小实现减少测试复杂度。
- D：连接生产库破坏隔离。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-053（多选题）

- **学习阶段**：Java → Spring 前置桥接
- **主题**：作用域
- **认知层级**：理解
- **难度**：中
- **前置题**：无

设计Bean作用域时应考虑哪些因素？

A. 对象是否需要共享
B. 对象是否包含请求或会话状态
C. 对象创建成本
D. 只看类名长度

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：桥接扩展

**解析：** 共享性、状态和创建成本都会影响作用域选择，类名长度没有这种语义。

**选项辨析：**

- A：共享需求影响作用域。
- B：状态对象通常不能盲目共享。
- C：创建成本影响实例策略。
- D：类名长度与作用域无关。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-054（多选题）

- **学习阶段**：Java → Spring 前置桥接
- **主题**：对象图
- **认知层级**：理解
- **难度**：中
- **前置题**：无

容器建立对象图时通常需要完成哪些工作？

A. 创建对象
B. 解析对象依赖
C. 把依赖引用传给目标对象
D. 替业务方法决定订单折扣

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：桥接扩展

**解析：** 容器负责对象图装配，业务规则仍由服务等业务组件负责。

**选项辨析：**

- A：对象创建是装配基础。
- B：解析依赖是核心步骤。
- C：注入引用完成协作连接。
- D：订单折扣不是容器职责。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-055（多选题）

- **学习阶段**：Java → Spring 前置桥接
- **主题**：生命周期回调
- **认知层级**：理解
- **难度**：中
- **前置题**：无

容器管理Bean时，哪些行为可能属于生命周期扩展？

A. 初始化前后执行处理器
B. 销毁时释放容器管理的资源
C. 根据定义选择作用域
D. 自动修改Java语言规范

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：桥接扩展

**解析：** Bean后处理、销毁回调和作用域策略都属于容器管理范围，不会改变Java语言规范。

**选项辨析：**

- A：后处理器可介入初始化。
- B：容器可在销毁阶段回调。
- C：作用域影响生命周期。
- D：框架不会修改Java语义。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-056（多选题）

- **学习阶段**：Java → Spring 前置桥接
- **主题**：依赖可替换
- **认知层级**：理解
- **难度**：中
- **前置题**：无

把具体类依赖改成接口依赖后，哪些事情通常更容易？

A. 替换实现
B. 编写Mock测试
C. 引入第二种实现
D. 自动保证所有实现线程安全

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：桥接扩展

**解析：** 抽象边界提高替换和测试能力，但线程安全仍由实现负责。

**选项辨析：**

- A：实现可以替换。
- B：Mock可实现接口。
- C：第二种实现更容易接入。
- D：接口不自动提供线程安全。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-057（多选题）

- **学习阶段**：Java → Spring 前置桥接
- **主题**：循环依赖
- **认知层级**：分析
- **难度**：难
- **前置题**：无

处理对象循环依赖时，哪些设计思路更稳妥？

A. 重新划分职责打破闭环
B. 把必需依赖通过更清晰的边界传递
C. 谨慎评估延迟查找或Setter等方案
D. 在两个构造器中无限递归new对方

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：桥接扩展

**解析：** 优先从设计上消除循环，必要时再选择能表达延迟关系的机制；无限递归会失败。

**选项辨析：**

- A：重划边界是根本方案。
- B：清晰依赖方向降低闭环。
- C：延迟机制需结合生命周期评估。
- D：无限递归无法创建对象。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-058（多选题）

- **学习阶段**：Java → Spring 前置桥接
- **主题**：代理边界
- **认知层级**：分析
- **难度**：难
- **前置题**：无

使用容器代理增强对象时，哪些现象值得警惕？

A. 手动new目标对象可能绕过增强
B. 同类内部调用可能绕过代理入口
C. 最终拿到的对象可能不是目标类的直接实例
D. 代理会自动修复所有业务错误

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：桥接扩展

**解析：** 代理只在经过代理入口时生效，业务错误仍需业务代码处理。

**选项辨析：**

- A：手动new绕过容器。
- B：自调用可能不经过代理。
- C：容器可能返回代理对象。
- D：代理不负责修复业务逻辑。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-060（多选题）

- **学习阶段**：Java → Spring 前置桥接
- **主题**：生命周期与状态
- **认知层级**：分析
- **难度**：难
- **前置题**：无

一个包含请求用户信息的对象若被错误地长期共享，可能出现哪些问题？

A. 不同请求之间发生状态串扰
B. 并发访问时出现线程安全风险
C. 测试之间相互污染
D. 对象一定会自动变成prototype

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第12页
- **来源口径**：桥接扩展

**解析：** 有请求状态的对象需要合适的作用域和隔离策略，错误共享会带来串扰。

**选项辨析：**

- A：共享请求状态会串数据。
- B：并发读写可能不安全。
- C：共享状态会影响测试隔离。
- D：作用域不会自动改变。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

# 第2阶段：Spring Bean、IoC、DI、容器

## 单选题

### SPRING2-062（单选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：属性源
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-001

PropertySourcesPlaceholderConfigurer的常见用途是？

A. 解析${...}占位符
B. 创建HTTP客户端
C. 执行数据库事务
D. 生成AOP切点

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：官方文档扩展

**解析：** 它把环境属性解析到Bean定义或配置字段中。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：错误。该选项不是本题正确依据。
- C：错误。该选项不是本题正确依据。
- D：错误。该选项不是本题正确依据。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-063（单选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：Bean定义
- **认知层级**：认识
- **难度**：易
- **前置题**：SPRING2-001

同一个配置类中两个@Bean方法都返回同一接口的不同实现，注入时最直接的消歧方式是？

A. @Qualifier或@Primary
B. 删除接口
C. 把两个实现改成静态字段
D. 关闭组件扫描

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：官方文档扩展

**解析：** 多个候选Bean需要通过限定符或主候选标记表达选择意图。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：错误。该选项不是本题正确依据。
- C：错误。该选项不是本题正确依据。
- D：错误。该选项不是本题正确依据。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-064（单选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：设计理念
- **认知层级**：认识
- **难度**：易
- **前置题**：SPRING2-001

Spring降低应用模块耦合度的核心机制是？

A. IoC容器统一管理对象
B. 把所有类改成静态类
C. 强制使用继承
D. 把配置写入数据库

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：课件

**解析：** IoC把对象创建和依赖管理交给容器，业务组件不必直接创建依赖，从而降低耦合。

**选项辨析：**

- A：正确。IoC正是解耦机制。
- B：错误。静态化不能解决依赖管理。
- C：错误。继承不是Spring解耦的核心。
- D：错误。配置存储位置与IoC无关。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-065（单选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：核心价值
- **认知层级**：认识
- **难度**：易
- **前置题**：SPRING2-001

IoC容器接管对象管理后，组件更容易进行哪项工作？

A. 单元测试与实现替换
B. 修改JVM字节码版本
C. 绕过Java类型检查
D. 删除所有接口

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：课件

**解析：** 依赖可由容器装配，也可在测试中替换为Mock或其他实现，提升可测试性。

**选项辨析：**

- A：正确。解耦有利于测试和替换。
- B：错误。与JVM版本无关。
- C：错误。不会绕过类型检查。
- D：错误。接口仍可作为抽象边界。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-066（单选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：IoC概念
- **认知层级**：认识
- **难度**：易
- **前置题**：SPRING2-001

控制反转（IoC）反转的主要是什么控制权？

A. 对象创建和依赖管理的控制权
B. CPU调度控制权
C. 数据库磁盘控制权
D. HTTP协议控制权

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：课件

**解析：** IoC将对象创建、配置、装配和生命周期交给容器，而非业务代码主动控制。

**选项辨析：**

- A：正确。IoC关注对象控制权。
- B：错误。CPU调度由操作系统/JVM处理。
- C：错误。磁盘控制不是IoC。
- D：错误。HTTP协议不是IoC定义。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-067（单选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：IoC概念
- **认知层级**：认识
- **难度**：易
- **前置题**：SPRING2-001

依赖注入（DI）在Spring中指什么？

A. 容器把依赖对象注入目标Bean
B. 目标Bean主动new所有依赖
C. 把依赖写入数据库表
D. 由编译器删除依赖

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：课件

**解析：** DI是IoC的具体实现方式之一，容器在初始化Bean时通过构造器、Setter或字段提供依赖。

**选项辨析：**

- A：正确。容器注入依赖是DI。
- B：错误。主动new与DI相反。
- C：错误。数据库表与DI无关。
- D：错误。编译器不会删除依赖。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-068（单选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：IoC概念
- **认知层级**：认识
- **难度**：易
- **前置题**：SPRING2-001

“Don't call me, I'll call you”在课件中用来说明什么？

A. 好莱坞原则和控制反转
B. 数据库事务隔离
C. 线程池拒绝策略
D. 编译器回调优化

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：课件

**解析：** 好莱坞原则强调应用不主动索取控制，容器在合适时机调用或注入对象。

**选项辨析：**

- A：正确。它是IoC的通俗表达。
- B：错误。与事务隔离无关。
- C：错误。不是线程池策略。
- D：错误。不是编译器优化。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-069（单选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：IoC实现
- **认知层级**：认识
- **难度**：易
- **前置题**：SPRING2-001

Java配置类中声明Bean实例通常使用哪个注解？

A. @Bean
B. @Entity
C. @Mapper
D. @Test

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：课件

**解析：** @Bean用于配置类的方法声明由容器管理的对象实例。

**选项辨析：**

- A：正确。@Bean声明配置方法产生的Bean。
- B：错误。@Entity属于持久化模型语义。
- C：错误。@Mapper面向MyBatis。
- D：错误。@Test用于测试方法。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-070（单选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：IoC实现
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-001

选择JavaConfig而不是XML的主要工程收益是？

A. 配置具备编译期类型安全检查
B. 无需任何容器
C. 自动绕过访问控制
D. 所有Bean都变成单例

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：课件

**解析：** 课程材料强调JavaConfig通过代码配置并具备编译期类型安全；它仍然依赖Spring容器。

**选项辨析：**

- A：正确。类型安全是主要收益。
- B：错误。JavaConfig仍使用容器。
- C：错误。不会绕过Java访问控制。
- D：错误。Bean作用域不会因此全部固定。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-071（单选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：组件注解
- **认知层级**：认识
- **难度**：易
- **前置题**：SPRING2-001

@Component的基本作用是？

A. 标记通用Spring管理组件
B. 声明数据库表
C. 声明HTTP请求路径
D. 声明单元测试

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第10页
- **来源口径**：课件

**解析：** 被@Component标注的类可被组件扫描发现并纳入IoC容器。

**选项辨析：**

- A：正确。@Component是通用组件标识。
- B：错误。数据库表通常用实体映射。
- C：错误。请求路径由Web注解定义。
- D：错误。测试使用@Test等注解。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-072（单选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：注入方式
- **认知层级**：认识
- **难度**：易
- **前置题**：SPRING2-001

字段注入通常通过哪个注解示例完成？

A. @Autowired
B. @Override
C. @Deprecated
D. @Target

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第11页
- **来源口径**：课件

**解析：** 课程材料示例在字段上使用@Autowired，容器据此解析并设置依赖。

**选项辨析：**

- A：正确。@Autowired可用于字段注入。
- B：错误。@Override用于方法重写检查。
- C：错误。@Deprecated表示弃用。
- D：错误。@Target声明注解适用位置。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-073（单选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：Bean管理
- **认知层级**：认识
- **难度**：易
- **前置题**：SPRING2-001

在IoC容器中，Bean生命周期管理通常包括哪一项？

A. 实例化、属性填充和销毁
B. 只负责编译源码
C. 只负责网络传输
D. 只负责建立数据库索引

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第12页
- **来源口径**：课件

**解析：** beans包和容器会负责Bean实例化、依赖解析、属性填充以及销毁等过程。

**选项辨析：**

- A：正确。这是Bean生命周期管理。
- B：错误。编译不是容器生命周期。
- C：错误。网络传输不是Bean管理核心。
- D：错误。索引不是Bean生命周期步骤。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-074（单选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：Bean生命周期
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-001

如果对象创建必须依赖另一个Bean，最合适的设计倾向是？

A. 通过容器注入依赖，而不是在业务类中new
B. 在每个方法内重复new依赖
C. 把依赖序列化为字符串
D. 删除依赖接口

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第12页
- **来源口径**：课件

**解析：** 容器注入让依赖关系可配置、可替换，避免业务代码与具体实现绑定。

**选项辨析：**

- A：正确。容器注入符合IoC。
- B：错误。重复new会增加耦合。
- C：错误。字符串不能替代对象协作。
- D：错误。接口有助于解耦。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-075（单选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：组件扫描
- **认知层级**：认识
- **难度**：易
- **前置题**：SPRING2-001

组件扫描发现@Component类后通常会发生什么？

A. 将其注册为IoC容器管理的Bean
B. 自动把它编译成机器码
C. 删除其构造器
D. 将它转换为数据库表

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第12页
- **来源口径**：课件

**解析：** 组件扫描负责发现带组件语义的类并注册到容器，之后可参与依赖注入。

**选项辨析：**

- A：正确。注册Bean是扫描结果。
- B：错误。不会编译机器码。
- C：错误。不会删除构造器。
- D：错误。不会转换数据库表。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-076（单选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：设计对比
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-001

下列场景最能体现IoC带来的可测试性提升的是？

A. 测试时把真实DAO替换为Mock实现
B. 把所有服务方法改为private
C. 将业务对象写成单例静态字段
D. 在测试中连接生产数据库

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第13页
- **来源口径**：课件

**解析：** 依赖由容器装配后，测试可以注入Mock，隔离真实数据库等外部资源。

**选项辨析：**

- A：正确。Mock替换体现可测试性。
- B：错误。private化不能解决依赖。
- C：错误。静态单例反而难替换。
- D：错误。生产数据库会降低测试隔离。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-086（单选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：BeanFactory与ApplicationContext
- **认知层级**：认识
- **难度**：易
- **前置题**：SPRING2-001

需要事件发布和国际化能力时，通常应选择哪类容器？

A. ApplicationContext
B. 仅使用BeanFactory
C. 直接new对象
D. 只使用ServletContext

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：官方文档扩展

**解析：** ApplicationContext在BeanFactory基础上提供事件、资源和国际化等应用级能力。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：错误。该选项不是本题正确依据。
- C：错误。该选项不是本题正确依据。
- D：错误。该选项不是本题正确依据。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-087（单选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：配置类
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-001

@Configuration类中@Bean方法被同一配置类另一@Bean方法直接调用时，默认如何保持Bean语义？

A. 容器增强配置类调用以复用Bean
B. 每次调用都必定new新对象
C. 调用会被编译器删除
D. 只有XML才能复用Bean

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：官方文档扩展

**解析：** 默认full配置类会被增强，使@Bean方法间调用经过容器而不是普通Java方法调用。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：错误。该选项不是本题正确依据。
- C：错误。该选项不是本题正确依据。
- D：错误。该选项不是本题正确依据。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-088（单选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：Aware接口
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-001

实现BeanFactoryAware的Bean通常希望获得什么？

A. 所属BeanFactory引用
B. 当前HTTP请求正文
C. 数据库连接池密码
D. 编译器对象

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：官方文档扩展

**解析：** Aware回调让Bean获得容器相关基础设施引用，但应谨慎避免过度耦合容器。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：错误。该选项不是本题正确依据。
- C：错误。该选项不是本题正确依据。
- D：错误。该选项不是本题正确依据。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-089（单选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：FactoryBean
- **认知层级**：认识
- **难度**：易
- **前置题**：SPRING2-001

从容器获取FactoryBean对象本身通常使用什么前缀？

A. &
B. #
C. @
D. $

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：官方文档扩展

**解析：** &前缀用于获取FactoryBean实例本身；不带前缀通常得到它生产的对象。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：错误。该选项不是本题正确依据。
- C：错误。该选项不是本题正确依据。
- D：错误。该选项不是本题正确依据。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-090（单选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：Spring容器
- **认知层级**：认识
- **难度**：易
- **前置题**：SPRING2-001

AnnotationConfigApplicationContext适合做什么？

A. 以Java配置启动一个注解型ApplicationContext
B. 启动Nacos集群
C. 构建前端资源
D. 创建JVM进程

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：官方文档扩展

**解析：** 它可以直接注册配置类并刷新注解配置上下文。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：错误。该选项不是本题正确依据。
- C：错误。该选项不是本题正确依据。
- D：错误。该选项不是本题正确依据。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-091（单选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：AOP与IoC
- **认知层级**：认识
- **难度**：易
- **前置题**：SPRING2-001

Spring IoC和Spring AOP的关系，哪项正确？

A. AOP通常通过IoC管理的Bean代理实现
B. IoC必须依赖AOP才能创建Bean
C. AOP会替代所有依赖注入
D. 两者只在数据库层存在

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：官方文档扩展

**解析：** Spring IoC容器本身不依赖AOP；AOP通常与容器结合为Bean提供代理能力。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：错误。该选项不是本题正确依据。
- C：错误。该选项不是本题正确依据。
- D：错误。该选项不是本题正确依据。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-092（单选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：容器测试
- **认知层级**：认识
- **难度**：易
- **前置题**：SPRING2-001

测试真实Bean装配但避免启动整个应用时，可以使用什么思路？

A. 加载精简的测试ApplicationContext
B. 只用字符串比较
C. 禁用所有依赖注入
D. 只执行静态分析

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：官方文档扩展

**解析：** 精简上下文既能验证装配，又减少测试启动成本。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：错误。该选项不是本题正确依据。
- C：错误。该选项不是本题正确依据。
- D：错误。该选项不是本题正确依据。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-093（单选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：MVC过滤器
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-001

Servlet Filter与HandlerInterceptor的主要边界是？

A. Filter位于Servlet层，Interceptor位于Spring MVC处理链
B. 二者只能访问数据库
C. 二者完全没有顺序
D. Interceptor只能处理静态文件

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：官方文档扩展

**解析：** Filter更靠近Servlet容器，Interceptor针对Spring MVC Handler。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：错误。该选项不是本题正确依据。
- C：错误。该选项不是本题正确依据。
- D：错误。该选项不是本题正确依据。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-096（单选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：发展历史
- **认知层级**：认识
- **难度**：易
- **前置题**：SPRING2-001

Spring Framework 1.0在课件时间线中确立了哪两个核心理念？

A. IoC与AOP
B. MVC与WebFlux
C. JPA与MyBatis
D. 容器编排与服务网格

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：课件

**解析：** 课程材料将2004年的Spring 1.0概括为确立IoC与AOP核心。

**选项辨析：**

- A：正确。这是1.0时间线描述。
- B：错误。WebFlux是后续版本能力。
- C：错误。JPA/MyBatis不是该时间点的Spring核心理念。
- D：错误。云原生编排并非1.0主题。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-097（单选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：核心包
- **认知层级**：认识
- **难度**：易
- **前置题**：SPRING2-001

org.springframework.beans包的核心职责是？

A. Java Bean实例化、属性填充和销毁管理
B. 解析HTTP请求路径
C. 提供响应式网络服务器
D. 管理国际化资源

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：课件

**解析：** beans包专注Bean生命周期、依赖解析和属性填充，是IoC的底层载体。

**选项辨析：**

- A：正确。这是beans的职责。
- B：错误。请求路径由Web组件处理。
- C：错误。响应式服务器不是beans。
- D：错误。国际化属于context能力。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-098（单选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：IoC与DI
- **认知层级**：认识
- **难度**：易
- **前置题**：SPRING2-001

以下哪种方式不属于课件列出的常见依赖注入方式？

A. 构造器注入
B. Setter注入
C. 字段注入
D. 数据库触发器注入

- **答案**：D
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：课件

**解析：** 课程材料列出构造器、Setter和字段注入；数据库触发器不属于Spring DI方式。

**选项辨析：**

- A：错误。构造器是常用方式。
- B：错误。Setter是常用方式。
- C：错误。字段可通过@Autowired注入。
- D：正确。数据库触发器不是依赖注入方式。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-099（单选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：IoC实现
- **认知层级**：认识
- **难度**：易
- **前置题**：SPRING2-001

传统XML配置定义Bean通常使用哪个元素？

~~~java
<bean id="userService" class="com.demo.UserService"/>
~~~

A. <bean>
B. <component>
C. <service>
D. <inject>

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：课件

**解析：** 课程材料示例用<bean>声明对象，并用<property>配置引用。

**选项辨析：**

- A：正确。<bean>是XML Bean声明元素。
- B：错误。<component>不是该XML示例元素。
- C：错误。<service>不是Spring Bean XML元素。
- D：错误。<inject>不是该配置语法。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-100（单选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：IoC实现
- **认知层级**：认识
- **难度**：易
- **前置题**：SPRING2-001

标记Java配置类本身的注解是？

A. @Configuration
B. @ComponentScanOnly
C. @BeanClass
D. @EnableTest

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：课件

**解析：** @Configuration表明类是配置类，通常与@Bean方法配合使用。

**选项辨析：**

- A：正确。@Configuration是配置类标识。
- B：错误。其余名称不是课件注解。
- C：错误。其余名称不是课件注解。
- D：错误。其余名称不是课件注解。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-104（单选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：依赖注入
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-001

构造器注入相对字段注入最重要的设计收益是？

A. 必需依赖在对象创建时明确
B. 依赖一定变成单例
C. 绕过类型检查
D. 不再需要容器

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：官方文档扩展

**解析：** 构造器参数表达对象成立所必需的依赖，也更利于不可变设计和测试。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：错误。该选项不是本题正确依据。
- C：错误。该选项不是本题正确依据。
- D：错误。该选项不是本题正确依据。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-105（单选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：核心价值
- **认知层级**：认识
- **难度**：易
- **前置题**：SPRING2-001

传统代码中直接使用new创建依赖对象，通常会导致什么问题？

A. 对象间强耦合
B. 自动获得事务代理
C. 自动进行包扫描
D. 编译期生成配置

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：课件

**解析：** 直接new把具体实现写死在业务代码中，替换实现和单元测试都会更困难。

**选项辨析：**

- A：正确。硬编码依赖会造成强耦合。
- B：错误。new不会自动产生事务代理。
- C：错误。new不会触发Spring扫描。
- D：错误。配置生成与new无关。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-106（单选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：核心包
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-001

一个需要国际化、事件发布和资源加载的应用上下文，优先依赖哪个包？

A. org.springframework.context
B. org.springframework.beans
C. org.springframework.web
D. org.springframework.core only

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：课件

**解析：** 这些应用级服务由context提供；它建立在beans能力之上并形成ApplicationContext。

**选项辨析：**

- A：正确。context提供所列应用级服务。
- B：错误。beans是底层Bean管理。
- C：错误。web聚焦Web交互。
- D：错误。core是通用基础而非应用上下文。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-107（单选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：自动装配
- **认知层级**：认识
- **难度**：易
- **前置题**：SPRING2-001

@Autowired默认最主要依据什么匹配依赖？

A. 类型
B. 方法名字符串
C. 数据库主键
D. 源码行号

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第10页
- **来源口径**：课件

**解析：** 课程材料将@Autowired概括为按类型自动匹配并注入依赖对象。

**选项辨析：**

- A：正确。按类型是核心规则。
- B：错误。方法名不是默认核心依据。
- C：错误。数据库主键无关。
- D：错误。源码行号无关。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-108（单选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：项目结构
- **认知层级**：认识
- **难度**：易
- **前置题**：SPRING2-001

Maven项目中pom.xml的核心作用是？

A. 管理依赖版本和构建生命周期
B. 保存运行时用户数据
C. 定义HTTP路由
D. 存放Java字节码

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第10页
- **来源口径**：课件

**解析：** pom.xml是Maven依赖管理和构建配置的核心文件。

**选项辨析：**

- A：正确。依赖和构建是pom职责。
- B：错误。用户数据应由数据库等保存。
- C：错误。HTTP路由由Web代码配置。
- D：错误。字节码不存放在pom中。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-109（单选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：注入方式
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-001

构造器注入的一个明显特点是？

A. 对象创建时就能获得必需依赖
B. 必须依赖字段反射
C. 只能注入字符串
D. 不能用于接口类型

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第11页
- **来源口径**：课件

**解析：** 构造器注入在实例化时提供依赖，适合表达不可缺少的协作对象。

**选项辨析：**

- A：正确。创建时获得依赖是特点。
- B：错误。不必限定使用字段反射。
- C：错误。可注入任意可解析类型。
- D：错误。接口类型正适合解耦。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-110（单选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：注入方式
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-001

Setter注入更适合表达哪类依赖？

A. 可选或可变的依赖
B. 只能在编译器内部存在的依赖
C. 数据库表的主键
D. HTTP响应头

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第11页
- **来源口径**：课件

**解析：** Setter允许对象先创建再设置依赖，常用于可选或可调整的协作对象。

**选项辨析：**

- A：正确。Setter适合可选依赖。
- B：错误。其余描述与DI无关。
- C：错误。主键不是注入类别。
- D：错误。响应头不是依赖注入概念。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-114（单选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：Bean作用域
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-001

一个prototype Bean被注入singleton Bean后，默认会发生什么？

A. 只在singleton创建时解析一次
B. 每次调用singleton方法都自动创建一个
C. prototype自动变成request作用域
D. 容器拒绝所有prototype Bean

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：官方文档扩展

**解析：** 直接注入时依赖解析发生在singleton创建阶段；需要每次取得新实例时应使用Provider等查找方式。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：错误。该选项不是本题正确依据。
- C：错误。该选项不是本题正确依据。
- D：错误。该选项不是本题正确依据。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-115（单选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：循环依赖
- **认知层级**：分析
- **难度**：难
- **前置题**：SPRING2-001

构造器循环依赖通常比单例字段循环依赖更难解决，主要原因是？

A. 对象尚未完成实例化就无法提供构造参数
B. 构造器不能接收接口
C. 字段永远不能注入
D. 所有Bean都不能创建

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：官方文档扩展

**解析：** 构造器注入要求创建对象前拿到全部参数，循环关系无法通过半成品引用打破。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：错误。该选项不是本题正确依据。
- C：错误。该选项不是本题正确依据。
- D：错误。该选项不是本题正确依据。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-116（单选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：校验
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-001

方法参数校验通常依赖哪类标准注解生态？

A. Jakarta Bean Validation
B. Servlet URL规则
C. Git Hooks
D. SQL触发器

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：官方文档扩展

**解析：** Spring可集成Jakarta Bean Validation，对参数和对象执行约束校验。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：错误。该选项不是本题正确依据。
- C：错误。该选项不是本题正确依据。
- D：错误。该选项不是本题正确依据。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-117（单选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：Spring代理限制
- **认知层级**：分析
- **难度**：难
- **前置题**：SPRING2-001

final方法在基于子类的Spring代理中通常有什么限制？

A. 不能被子类覆写，难以被代理增强
B. 一定会被JDK代理增强
C. 会自动变成static
D. 只能由数据库执行

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：官方文档扩展

**解析：** CGLIB等子类代理依赖覆写方法，final方法无法按常规方式被子类改写。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：错误。该选项不是本题正确依据。
- C：错误。该选项不是本题正确依据。
- D：错误。该选项不是本题正确依据。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-118（单选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：事务代理
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-001

@Transactional通常依赖什么机制拦截方法？

A. AOP代理
B. 编译器自动改写所有字节码
C. 浏览器脚本
D. 数据库触发器

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：官方文档扩展

**解析：** 声明式事务通常由代理在调用边界开启、提交或回滚事务。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：错误。该选项不是本题正确依据。
- C：错误。该选项不是本题正确依据。
- D：错误。该选项不是本题正确依据。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-119（单选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：事务传播
- **认知层级**：分析
- **难度**：难
- **前置题**：SPRING2-001

NESTED传播通常依赖哪种机制？

A. 同一物理事务中的保存点
B. 两个独立数据库集群
C. HTTP重定向
D. 线程销毁

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：官方文档扩展

**解析：** NESTED常通过savepoint实现局部回滚，底层事务管理器需支持。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：错误。该选项不是本题正确依据。
- C：错误。该选项不是本题正确依据。
- D：错误。该选项不是本题正确依据。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-120（单选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：Spring代理限制
- **认知层级**：分析
- **难度**：难
- **前置题**：SPRING2-001

private方法通常为何不能直接被Spring AOP代理拦截？

A. 代理无法通过普通覆写或接口调用拦截它
B. 它一定没有返回值
C. 它只能被数据库调用
D. Spring只支持静态方法

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：官方文档扩展

**解析：** 基于代理的拦截依赖可见方法调用和覆写边界，private方法不满足。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：错误。该选项不是本题正确依据。
- C：错误。该选项不是本题正确依据。
- D：错误。该选项不是本题正确依据。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-126（单选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：Bean生命周期
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-001

BeanPostProcessor通常作用于哪个阶段？

A. Bean初始化前后进行实例扩展处理
B. 只在JVM退出时运行
C. 只扫描数据库表
D. 只负责编译源码

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：官方文档扩展

**解析：** BeanPostProcessor可在初始化前后对Bean进行包装、校验或代理。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：错误。该选项不是本题正确依据。
- C：错误。该选项不是本题正确依据。
- D：错误。该选项不是本题正确依据。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-128（单选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：组件扫描
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-001

一个类未被扫描到但手动通过@Configuration的@Bean方法返回它，结果通常是？

A. 它仍可作为Bean注册到容器
B. 它一定无法被容器管理
C. 它只能成为静态变量
D. 它会被当作HTTP请求

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第12页
- **来源口径**：课件

**解析：** @Bean方法是显式声明Bean的方式，不要求返回类本身带@Component。

**选项辨析：**

- A：正确。@Bean可显式注册对象。
- B：错误。不要求@Component。
- C：错误。与静态变量无关。
- D：错误。与HTTP请求无关。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-130（单选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：发展历史
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-001

Spring Boot 1.0发布于课件时间线中的哪一年？

A. 2014年
B. 2004年
C. 2017年
D. 2022年

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：课件

**解析：** 课程材料将Spring Boot 1.0和2014年、“约定大于配置”关联。

**选项辨析：**

- A：正确。2014年对应Boot 1.0。
- B：错误。2004年是Spring 1.0。
- C：错误。2017年是Spring 5。
- D：错误。2022年是Boot 3.0。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-131（单选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：项目结构
- **认知层级**：认识
- **难度**：易
- **前置题**：SPRING2-001

src/main/resources主要用于放置什么？

A. 配置文件、静态资源和国际化资源
B. Java源代码
C. 依赖仓库索引
D. 操作系统驱动

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第10页
- **来源口径**：课件

**解析：** application.yml等配置、静态资源和i18n文件通常放在resources目录。

**选项辨析：**

- A：正确。resources用于资源文件。
- B：错误。Java源码在main/java。
- C：错误。依赖索引不放这里。
- D：错误。驱动不属于该目录职责。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-132（单选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：配置演进
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-001

从XML到注解再到JavaConfig，课件概括的总体趋势是？

A. 灵活性和可控性不断增强
B. 配置越来越依赖EJB
C. 类型安全逐步消失
D. 所有配置都必须放数据库

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第13页
- **来源口径**：课件

**解析：** 课程材料将三者概括为从外部化配置到零配置再到类型安全配置的演进。

**选项辨析：**

- A：正确。这是课件的演进结论。
- B：错误。并非依赖EJB。
- C：错误。JavaConfig强调类型安全。
- D：错误。配置不要求放数据库。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-133（单选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：配置演进
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-001

当项目需要复杂条件化配置时，课件更推荐哪种方式？

A. Java配置类
B. 巨型XML文件
C. 在业务方法中到处new
D. 硬编码环境变量

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第13页
- **来源口径**：课件

**解析：** JavaConfig支持代码表达复杂条件逻辑，并具有编译期类型检查优势。

**选项辨析：**

- A：正确。JavaConfig适合条件配置。
- B：错误。巨型XML可维护性差。
- C：错误。业务new会加耦。
- D：错误。环境变量仍需规范配置。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-137（单选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：Spring表达式
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-001

SpEL中#root通常代表什么？

A. 表达式根对象
B. 当前数据库表
C. HTTP状态码
D. Git分支

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：官方文档扩展

**解析：** #root是表达式上下文的根对象，具体属性取决于上下文配置。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：错误。该选项不是本题正确依据。
- C：错误。该选项不是本题正确依据。
- D：错误。该选项不是本题正确依据。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-138（单选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：类型转换
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-001

ConversionService主要解决什么问题？

A. 在类型之间进行统一转换
B. 创建AOP代理
C. 注册服务实例
D. 管理事务提交

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：官方文档扩展

**解析：** ConversionService提供可扩展的类型转换体系，常用于数据绑定和配置解析。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：错误。该选项不是本题正确依据。
- C：错误。该选项不是本题正确依据。
- D：错误。该选项不是本题正确依据。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-139（单选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：条件装配
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-001

Spring Framework原生的@Profile主要用于什么？

A. 按激活环境选择Bean定义
B. 按HTTP状态码选择响应
C. 按数据库主键创建表
D. 按CPU温度编译代码

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：官方文档扩展

**解析：** @Profile通过环境配置选择某组Bean，适合开发、测试、生产差异化配置。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：错误。该选项不是本题正确依据。
- C：错误。该选项不是本题正确依据。
- D：错误。该选项不是本题正确依据。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-140（单选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：事件机制
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-001

ApplicationEventPublisher发布事件后，监听器默认在哪个线程执行？

A. 发布线程同步执行
B. 永远由数据库线程执行
C. 永远由独立线程池执行
D. 由浏览器执行

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：官方文档扩展

**解析：** 没有异步配置时，事件监听通常在发布线程同步调用；异步需显式配置。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：错误。该选项不是本题正确依据。
- C：错误。该选项不是本题正确依据。
- D：错误。该选项不是本题正确依据。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-141（单选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：事务回滚
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-001

默认情况下，Spring声明式事务通常对哪类异常回滚？

A. 运行时异常和Error
B. 所有受检异常
C. 只有字符串异常
D. 任何日志输出

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：官方文档扩展

**解析：** 默认回滚规则主要针对RuntimeException和Error；受检异常需显式配置回滚规则。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：错误。该选项不是本题正确依据。
- C：错误。该选项不是本题正确依据。
- D：错误。该选项不是本题正确依据。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-142（单选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：任务调度
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-001

@Scheduled方法通常由什么触发？

A. Spring调度器按照cron或固定间隔触发
B. 每次HTTP请求都触发
C. 数据库主键触发
D. 编译器触发

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：官方文档扩展

**解析：** 调度任务由TaskScheduler按配置周期执行。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：错误。该选项不是本题正确依据。
- C：错误。该选项不是本题正确依据。
- D：错误。该选项不是本题正确依据。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-145（单选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：核心包
- **认知层级**：认识
- **难度**：易
- **前置题**：SPRING2-001

org.springframework.core包主要提供什么？

A. 底层通用能力与基础设施
B. 只负责Web视图渲染
C. 只负责SQL执行
D. 只负责安全认证

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：课件

**解析：** core提供资源加载、类型转换、异常处理等通用能力，是上层模块的基础。

**选项辨析：**

- A：正确。core是底层基础包。
- B：错误。Web视图属于Web/MVC。
- C：错误。SQL执行不是core职责。
- D：错误。安全认证不是core职责。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-146（单选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：核心包
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-001

org.springframework.context相对于beans包的主要扩展是？

A. 提供应用上下文及事件、国际化等企业服务
B. 仅提供Java基本类型
C. 只负责字节码增强
D. 只实现数据库连接池

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：课件

**解析：** context建立在beans之上，提供ApplicationContext、事件发布、国际化和资源加载等能力。

**选项辨析：**

- A：正确。context扩展了Bean容器能力。
- B：错误。不是基本类型库。
- C：错误。字节码增强不是其唯一职责。
- D：错误。数据库连接池不是核心定位。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-147（单选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：核心包
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-001

org.springframework.web包面向的场景是？

A. Web应用请求与交互
B. JVM垃圾回收
C. 磁盘文件系统
D. Java编译优化

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：课件

**解析：** web为Spring MVC和Spring WebFlux提供Web层基础支撑。

**选项辨析：**

- A：正确。web面向Web开发。
- B：错误。垃圾回收由JVM负责。
- C：错误。磁盘系统不是web包。
- D：错误。编译优化不是其职责。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-150（单选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：发展历史
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-001

课件指出Spring 2.5的重要演进是？

A. 全面拥抱注解驱动
B. 原生支持Java 17
C. 引入WebFlux响应式模型
D. 发布Spring Boot 1.0

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：课件

**解析：** 课程材料时间线将2007年的2.5版与注解驱动联系起来，减少XML冗余。

**选项辨析：**

- A：正确。2.5的关键是注解驱动。
- B：错误。Java 17对应Spring 6。
- C：错误。WebFlux对应Spring 5。
- D：错误。Boot 1.0是2014年。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-151（单选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：发展历史
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-001

Spring Framework 5.0在课件中引入了什么模型？

A. WebFlux响应式模型
B. EJB实体Bean模型
C. JSP标签库模型
D. RMI专用模型

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：课件

**解析：** 课程材料指出2017年的Spring 5.0引入WebFlux响应式模型，以适配高并发场景。

**选项辨析：**

- A：正确。WebFlux是Spring 5的代表能力。
- B：错误。EJB不是此处演进点。
- C：错误。JSP标签库不是该版本重点。
- D：错误。RMI不是课件所述能力。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-152（单选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：发展历史
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-001

Spring Framework 6.0的基础Java版本是？

A. Java 17
B. Java 6
C. Java 8
D. Java 11

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：课件

**解析：** 课程材料将2022年的Spring 6.0描述为基于Java 17重构，并支持AOT编译。

**选项辨析：**

- A：正确。课件明确写Java 17。
- B：错误。Java 6过旧。
- C：错误。Java 8不是该时间线答案。
- D：错误。Java 11也不是课件所述版本。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-153（单选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：发展历史
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-001

课件把Spring Boot 3.0的基础版本描述为？

A. 基于Spring 6并原生支持Java 17
B. 基于Spring 2并支持Java 6
C. 基于Spring 4并只支持XML
D. 基于Spring MVC 1并依赖EJB

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：课件

**解析：** 课程材料指出2022年的Boot 3.0基于Spring 6，原生支持Java 17。

**选项辨析：**

- A：正确。这是课件的版本对应关系。
- B：错误。版本和Java描述均不符。
- C：错误。Boot 3并非只支持XML。
- D：错误。EJB不是其基础。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-156（单选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：Spring定位
- **认知层级**：认识
- **难度**：易
- **前置题**：SPRING2-001

Spring首先被定位为哪类软件？

A. Java企业级应用开发框架
B. 关系数据库管理系统
C. 操作系统内核
D. 前端构建工具

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：课件

**解析：** Spring是轻量级、开源的Java企业级应用开发框架。其核心目标是简化企业应用开发并降低耦合。

**选项辨析：**

- A：正确。Spring用于Java企业级开发。
- B：错误。数据库系统不是Spring的定位。
- C：错误。Spring不是操作系统。
- D：错误。它也不是前端构建工具。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-157（单选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：设计理念
- **认知层级**：认识
- **难度**：易
- **前置题**：SPRING2-001

Spring中AOP主要用于处理哪一类问题？

A. 横切关注点
B. 磁盘分区
C. 编译器词法分析
D. 数据库索引存储

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：课件

**解析：** 日志、事务、权限等横跨多个业务模块的功能属于横切关注点，AOP将其集中管理。

**选项辨析：**

- A：正确。AOP处理横切关注点。
- B：错误。磁盘分区不是AOP职责。
- C：错误。词法分析属于编译器。
- D：错误。数据库索引不是AOP定义。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-158（单选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：生态体系
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-001

以下哪项属于Spring生态中的数据访问方向？

A. Spring Data
B. Spring Cloud Gateway only
C. Spring Shell only
D. Spring Security only

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：课件

**解析：** Spring Data面向数据访问，Spring生态还包含Web、云原生和安全等方向。

**选项辨析：**

- A：正确。Spring Data面向数据访问。
- B：错误。Gateway主要是网关组件。
- C：错误。Shell用于命令行应用。
- D：错误。Security关注安全认证。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-159（单选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：核心价值
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-001

Spring模板的主要价值是？

A. 封装JDBC、事务等底层样板工作
B. 取代所有业务规则
C. 自动设计数据库表
D. 替代Java编译器

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：课件

**解析：** Spring提供成熟模板封装重复的基础代码，让开发者聚焦业务逻辑。

**选项辨析：**

- A：正确。模板降低样板代码。
- B：错误。业务规则仍由业务代码负责。
- C：错误。Spring不会自动设计所有表。
- D：错误。它不是编译器。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-160（单选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：组件注解
- **认知层级**：认识
- **难度**：易
- **前置题**：SPRING2-001

@Service最能表达哪一层的语义？

A. 业务逻辑层
B. 数据表结构层
C. 网络传输层
D. 配置文件层

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第10页
- **来源口径**：课件

**解析：** @Service是@Component的业务层特化注解，用于表达服务组件语义。

**选项辨析：**

- A：正确。@Service表示业务服务。
- B：错误。数据表不是@Service语义。
- C：错误。网络传输层不是其专属语义。
- D：错误。配置类通常用@Configuration。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-161（单选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：组件注解
- **认知层级**：认识
- **难度**：易
- **前置题**：SPRING2-001

@Repository通常用于标记什么？

A. 数据访问层组件
B. 前端控制器
C. 配置类
D. 定时任务表达式

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第10页
- **来源口径**：课件

**解析：** @Repository表达DAO/数据访问层语义，并可参与持久化异常转换。

**选项辨析：**

- A：正确。Repository用于数据访问。
- B：错误。控制器使用Web层注解。
- C：错误。配置类用@Configuration。
- D：错误。表达式不是Bean层注解。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-162（单选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：组件注解
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-001

课件指出@Repository的一个额外价值是？

A. 把底层数据库异常转换为Spring统一的数据访问异常体系
B. 自动创建数据库表
C. 把所有异常转换成Error
D. 自动生成REST接口

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第10页
- **来源口径**：课件

**解析：** @Repository可让持久化异常转换到统一的DataAccessException体系，便于上层处理。

**选项辨析：**

- A：正确。异常转换是其额外语义。
- B：错误。不会自动创建所有表。
- C：错误。不会把所有异常都变成Error。
- D：错误。不会自动生成REST接口。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-163（单选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：项目结构
- **认知层级**：认识
- **难度**：易
- **前置题**：SPRING2-001

src/main/java通常存放什么？

A. 启动类、业务逻辑、控制器和实体类
B. 生产数据库文件
C. Maven缓存
D. 编译后的字节码

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第10页
- **来源口径**：课件

**解析：** 课程材料建议在src/main/java中按模块或功能分包放置Java源码。

**选项辨析：**

- A：正确。Java源码位于该目录。
- B：错误。数据库文件不属于通用源码目录。
- C：错误。Maven缓存另有位置。
- D：错误。字节码通常在target中。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-164（单选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：Bean管理
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-001

ApplicationContext与beans包的关系更准确的是？

A. ApplicationContext建立在Bean管理能力之上并提供应用级服务
B. ApplicationContext完全替代Java语言
C. beans只负责HTTP请求
D. 二者没有任何关系

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第12页
- **来源口径**：课件

**解析：** context在beans能力之上扩展事件、国际化、资源加载等应用上下文服务。

**选项辨析：**

- A：正确。这是二者层次关系。
- B：错误。ApplicationContext不是语言替代品。
- C：错误。beans不是HTTP组件。
- D：错误。两者有明确依赖关系。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-170（单选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：环境抽象
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-001

Environment对象主要聚合哪类信息？

A. profiles和properties
B. 线程堆栈和字节码
C. 浏览器DOM和CSS
D. Git提交对象

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：官方文档扩展

**解析：** Environment抽象统一访问当前激活profile和属性源。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：错误。该选项不是本题正确依据。
- C：错误。该选项不是本题正确依据。
- D：错误。该选项不是本题正确依据。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-171（单选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：SpEL安全
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-001

让不可信用户输入直接作为SpEL表达式执行的主要风险是？

A. 表达式注入和越权访问
B. 自动获得类型安全
C. 只会导致页面变色
D. 不会产生任何风险

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：官方文档扩展

**解析：** 不可信表达式可能访问方法、Bean或资源，必须限制解析上下文和输入范围。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：错误。该选项不是本题正确依据。
- C：错误。该选项不是本题正确依据。
- D：错误。该选项不是本题正确依据。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-172（单选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：资源抽象
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-001

Resource接口的价值是？

A. 以统一方式访问类路径、文件和URL资源
B. 只代表数据库行
C. 只代表HTTP响应
D. 只代表Java线程

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：官方文档扩展

**解析：** Resource屏蔽不同资源来源的访问差异。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：错误。该选项不是本题正确依据。
- C：错误。该选项不是本题正确依据。
- D：错误。该选项不是本题正确依据。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-173（单选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：SpEL
- **认知层级**：认识
- **难度**：易
- **前置题**：SPRING2-001

SpEL表达式访问Bean通常使用哪个符号？

A. @beanName
B. #beanName
C. $beanName
D. %beanName

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：官方文档扩展

**解析：** SpEL中@用于引用Bean，#通常用于变量或上下文对象。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：错误。该选项不是本题正确依据。
- C：错误。该选项不是本题正确依据。
- D：错误。该选项不是本题正确依据。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-174（单选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：Spring资源
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-001

ClassPathResource与FileSystemResource的差异主要是？

A. 资源查找位置不同
B. 一个只能访问数据库
C. 一个只能访问HTTP
D. 两者一定返回同一文件

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：官方文档扩展

**解析：** 前者按类路径查找，后者按文件系统路径查找。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：错误。该选项不是本题正确依据。
- C：错误。该选项不是本题正确依据。
- D：错误。该选项不是本题正确依据。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-175（单选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：Spring事件
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-001

进程内ApplicationEvent与消息队列事件的关键差异是？

A. 前者默认不提供跨进程可靠投递
B. 前者一定持久化
C. 后者不能异步
D. 二者完全相同

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：官方文档扩展

**解析：** Spring事件是应用内机制，跨服务可靠性需要外部消息系统。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：错误。该选项不是本题正确依据。
- C：错误。该选项不是本题正确依据。
- D：错误。该选项不是本题正确依据。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-176（单选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：切点表达式
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-001

execution切点最主要描述什么？

A. 匹配方法签名和执行位置
B. 匹配数据库表数据
C. 匹配HTML标签
D. 匹配JVM堆大小

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：官方文档扩展

**解析：** execution表达式按修饰符、返回值、类型、方法名和参数等匹配方法执行。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：错误。该选项不是本题正确依据。
- C：错误。该选项不是本题正确依据。
- D：错误。该选项不是本题正确依据。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-177（单选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：Advice
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-001

@Around通知相比@Before和@After的额外能力是？

A. 控制是否继续调用目标并修改返回结果
B. 只能记录日志
C. 只能处理异常
D. 不能访问目标方法

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：官方文档扩展

**解析：** 环绕通知通过ProceedingJoinPoint决定是否调用目标，并可包裹调用前后逻辑。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：错误。该选项不是本题正确依据。
- C：错误。该选项不是本题正确依据。
- D：错误。该选项不是本题正确依据。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-178（单选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：异常转换
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-001

Spring数据访问异常体系的特点是？

A. 把底层异常转换为统一的DataAccessException层次
B. 把所有异常吞掉
C. 只保留数据库错误字符串
D. 自动修复数据

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：官方文档扩展

**解析：** 统一异常抽象减少应用代码对具体驱动异常的耦合。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：错误。该选项不是本题正确依据。
- C：错误。该选项不是本题正确依据。
- D：错误。该选项不是本题正确依据。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-179（单选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：WebClient
- **认知层级**：认识
- **难度**：易
- **前置题**：SPRING2-001

WebClient相对RestTemplate的主要定位是？

A. 支持非阻塞响应式HTTP调用
B. 只用于数据库查询
C. 只生成HTML模板
D. 只管理Bean作用域

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：官方文档扩展

**解析：** WebClient是响应式HTTP客户端，也能在部分场景中执行同步等待但不应滥用。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：错误。该选项不是本题正确依据。
- C：错误。该选项不是本题正确依据。
- D：错误。该选项不是本题正确依据。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-180（单选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：响应式背压
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-001

Reactive Streams中的背压主要解决什么？

A. 消费者处理不过来时控制生产速度
B. 自动提高CPU频率
C. 把所有数据缓存到内存
D. 让异常永不发生

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：官方文档扩展

**解析：** 背压让下游表达需求，减少生产者压垮消费者的风险。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：错误。该选项不是本题正确依据。
- C：错误。该选项不是本题正确依据。
- D：错误。该选项不是本题正确依据。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-181（单选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：Spring校验
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-001

方法校验失败时，Controller层常见的处理方式是？

A. 返回参数错误并阻止进入业务逻辑
B. 继续提交无效数据
C. 删除校验注解
D. 把错误写入用户密码

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：官方文档扩展

**解析：** 校验失败应在边界处快速反馈，避免无效输入进入业务层。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：错误。该选项不是本题正确依据。
- C：错误。该选项不是本题正确依据。
- D：错误。该选项不是本题正确依据。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-182（单选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：事件事务
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-001

需要在事务提交后再处理领域事件时，应关注哪个机制？

A. 事务绑定事件监听
B. Servlet过滤器顺序
C. Bean作用域prototype
D. Gateway断言

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：官方文档扩展

**解析：** 事务绑定监听可将事件处理时机与提交结果关联，避免回滚事务提前触发副作用。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：错误。该选项不是本题正确依据。
- C：错误。该选项不是本题正确依据。
- D：错误。该选项不是本题正确依据。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-183（单选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：自调用
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-001

同一个Bean内部方法this.other()调用导致事务或切面不生效，根本原因常是？

A. 调用绕过了代理对象
B. 事务注解不支持public方法
C. 数据库拒绝所有调用
D. Spring不支持方法调用

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：官方文档扩展

**解析：** 自调用直接走目标对象引用，不经过代理拦截链。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：错误。该选项不是本题正确依据。
- C：错误。该选项不是本题正确依据。
- D：错误。该选项不是本题正确依据。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-184（单选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：AOP连接点
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-001

Spring AOP默认支持哪类连接点？

A. Spring Bean的方法执行
B. 任意字段读取
C. 任意构造器字节码
D. 所有数据库触发器

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：官方文档扩展

**解析：** Spring AOP基于代理，核心支持方法执行连接点；字段拦截需要更底层织入技术。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：错误。该选项不是本题正确依据。
- C：错误。该选项不是本题正确依据。
- D：错误。该选项不是本题正确依据。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-185（单选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：AOP代理
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-001

目标对象实现接口时，Spring AOP可能优先使用哪类代理？

A. JDK动态代理
B. 数据库代理
C. Servlet过滤器代理
D. 编译器宏

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：官方文档扩展

**解析：** JDK代理基于接口生成代理；没有接口时通常可使用CGLIB类代理。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：错误。该选项不是本题正确依据。
- C：错误。该选项不是本题正确依据。
- D：错误。该选项不是本题正确依据。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-186（单选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：AOP代理
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-001

需要代理没有接口的具体类时，常见实现方式是？

A. 基于子类的CGLIB代理
B. 只能使用JDK代理
C. 只能修改数据库
D. 只能使用反射调用字段

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：官方文档扩展

**解析：** CGLIB通过生成子类拦截可覆写的方法，但final类或final方法存在限制。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：错误。该选项不是本题正确依据。
- C：错误。该选项不是本题正确依据。
- D：错误。该选项不是本题正确依据。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-187（单选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：AOP顺序
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-001

多个切面同时作用于同一方法时，优先级通常通过什么表达？

A. @Order或Ordered
B. @BeanName
C. @ProfileOnly
D. @HttpStatus

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：官方文档扩展

**解析：** Order决定多个通知的相对执行顺序，具体还需结合进入和退出方向理解。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：错误。该选项不是本题正确依据。
- C：错误。该选项不是本题正确依据。
- D：错误。该选项不是本题正确依据。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-188（单选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：AspectJ织入
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-001

需要拦截字段访问而非仅方法执行时，应考虑什么？

A. AspectJ等织入技术
B. 只增加@Order
C. 只增加@Primary
D. 只修改application.yml端口

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：官方文档扩展

**解析：** Spring AOP不实现字段拦截，字段访问需要AspectJ等更底层织入能力。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：错误。该选项不是本题正确依据。
- C：错误。该选项不是本题正确依据。
- D：错误。该选项不是本题正确依据。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-189（单选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：事务传播
- **认知层级**：分析
- **难度**：难
- **前置题**：SPRING2-001

REQUIRED传播行为在已有事务时通常如何处理？

A. 加入现有事务
B. 永远创建两个事务
C. 拒绝调用
D. 只读执行

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：官方文档扩展

**解析：** REQUIRED没有事务就创建，有事务则加入，是最常见默认传播语义。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：错误。该选项不是本题正确依据。
- C：错误。该选项不是本题正确依据。
- D：错误。该选项不是本题正确依据。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

## 多选题

### SPRING2-061（多选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：Bean定义
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-001

显式使用@Bean声明对象时，合理的理解有哪些？

A. 方法返回值可成为容器Bean
B. 可在@Configuration类中使用
C. 可表达第三方类的组装
D. 必须把类标成@Repository

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：课件

**解析：** @Bean适合显式构造和组装对象，尤其适用于第三方类；不要求返回类标@Repository。

**选项辨析：**

- A：正确。返回值注册为Bean。
- B：正确。配置类常承载@Bean。
- C：正确。可组装第三方对象。
- D：错误。Repository不是必要条件。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-077（多选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：设计理念
- **认知层级**：认识
- **难度**：易
- **前置题**：SPRING2-001

IoC带来的直接收益包括哪些？

A. 降低对象间耦合
B. 便于替换实现
C. 提升单元测试友好性
D. 强制业务类继承容器基类

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：课件

**解析：** 依赖由容器装配可以降低耦合、替换实现并注入Mock；它不要求业务类继承容器基类。

**选项辨析：**

- A：正确。降低耦合是IoC目标。
- B：正确。可配置依赖便于替换。
- C：正确。Mock注入提升测试性。
- D：错误。非侵入式设计不要求继承容器基类。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-078（多选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：IoC概念
- **认知层级**：认识
- **难度**：易
- **前置题**：SPRING2-001

IoC容器通常统一负责哪些事项？

A. 对象创建
B. 对象配置和装配
C. Bean生命周期
D. 前端页面布局

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：课件

**解析：** IoC把对象创建、配置、装配和生命周期从业务代码转移到容器。

**选项辨析：**

- A：正确。创建由容器负责。
- B：正确。配置装配由容器协作。
- C：正确。生命周期由容器管理。
- D：错误。前端布局不属于IoC。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-079（多选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：IoC实现
- **认知层级**：认识
- **难度**：易
- **前置题**：SPRING2-001

Spring容器的常见配置实现包括哪些？

A. XML配置
B. 注解驱动
C. Java配置类
D. 把Bean写入浏览器Cookie

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：课件

**解析：** 课程材料介绍XML、注解和JavaConfig三种方式；Cookie不是容器配置机制。

**选项辨析：**

- A：正确。XML可定义Bean。
- B：正确。注解可扫描组件。
- C：正确。JavaConfig可用@Configuration/@Bean。
- D：错误。Cookie不负责注册Bean。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-080（多选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：Bean生命周期
- **认知层级**：认识
- **难度**：易
- **前置题**：SPRING2-001

Bean生命周期管理可能涉及哪些阶段？

A. 实例化
B. 依赖解析与属性填充
C. 销毁
D. 浏览器渲染

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第12页
- **来源口径**：课件

**解析：** 容器负责Bean从实例化、装配到销毁的生命周期；浏览器渲染不属于Bean生命周期。

**选项辨析：**

- A：正确。实例化是起点。
- B：正确。依赖解析和属性填充属于装配。
- C：正确。销毁是生命周期末端。
- D：错误。浏览器渲染属于前端。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-081（多选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：JavaConfig
- **认知层级**：认识
- **难度**：易
- **前置题**：SPRING2-001

JavaConfig相对XML的优势可以包括哪些？

A. 代码集中配置
B. 编译期类型安全检查
C. 适合复杂条件化逻辑
D. 完全不需要Spring容器

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：课件

**解析：** JavaConfig把配置写在Java类中，获得类型检查并能表达复杂条件；仍由Spring容器执行。

**选项辨析：**

- A：正确。代码集中是特点。
- B：正确。编译器可检查类型。
- C：正确。条件逻辑表达更灵活。
- D：错误。仍需要容器管理Bean。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-082（多选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：设计取舍
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-001

关于构造器、Setter和字段注入的比较，合理的说法有哪些？

A. 构造器注入适合必需依赖
B. Setter注入允许对象创建后再设置
C. 字段注入可减少显式样板代码
D. 三者都要求依赖对象在方法内部new

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第11页
- **来源口径**：课件

**解析：** 三种注入都由容器提供依赖；构造器适合必需依赖，Setter可表达可选依赖，字段注入简洁但隐藏依赖。

**选项辨析：**

- A：正确。构造器能保证必需依赖。
- B：正确。Setter在创建后设置。
- C：正确。字段注入减少显式代码。
- D：错误。容器注入不要求方法内new。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-083（多选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：设计哲学
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-001

Spring设计哲学中被课件反复强调的目标有哪些？

A. 降低耦合
B. 简化开发流程
C. 提高可维护性
D. 让业务代码承担全部对象生命周期

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：课件

**解析：** IoC和模板等机制共同降低耦合、减少样板代码并提升维护性；生命周期由容器负责。

**选项辨析：**

- A：正确。降低耦合是目标。
- B：正确。模板简化开发。
- C：正确。解耦有利于维护。
- D：错误。业务代码不承担全部生命周期。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-084（多选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：依赖关系
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-001

DI使依赖关系具备哪些特征？

A. 可配置
B. 可动态替换
C. 有利于测试
D. 必须硬编码在业务方法里

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：课件

**解析：** 容器装配让依赖关系配置化、动态化并易于替换和测试。

**选项辨析：**

- A：正确。依赖可配置。
- B：正确。实现可动态替换。
- C：正确。Mock注入利于测试。
- D：错误。硬编码与DI目标相反。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-085（多选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：Bean作用域
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-001

在不改变业务代码的前提下，容器管理Bean带来的能力包括哪些？

A. 统一创建对象
B. 集中装配依赖
C. 按生命周期执行销毁
D. 自动保证所有业务逻辑无缺陷

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第12页
- **来源口径**：课件

**解析：** 容器可以统一管理对象创建、装配和生命周期，但不能替业务保证逻辑正确性。

**选项辨析：**

- A：正确。创建统一管理。
- B：正确。依赖集中装配。
- C：正确。销毁属于生命周期。
- D：错误。业务正确性仍需代码和测试保证。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-094（多选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：Spring容器
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-001

容器扩展点选择时，正确的有？

A. BeanPostProcessor适合统一包装Bean
B. BeanFactoryPostProcessor处理BeanDefinition
C. ApplicationListener接收事件
D. 所有扩展点都适合执行业务订单

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：官方文档扩展

**解析：** 容器扩展点面向基础设施，业务逻辑应保持在业务层。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：正确。该选项符合官方语义。
- C：正确。该选项符合官方语义。
- D：错误。该选项不符合本题场景。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-095（多选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：容器关闭
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-001

容器关闭时可能触发哪些清理机制？

A. @PreDestroy
B. DisposableBean.destroy
C. 自定义destroy-method
D. 自动提交所有未完成事务

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：官方文档扩展

**解析：** 销毁回调用于释放资源，但未完成事务是否提交取决于事务管理。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：正确。该选项符合官方语义。
- C：正确。该选项符合官方语义。
- D：错误。该选项不符合本题场景。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-101（多选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：核心包
- **认知层级**：认识
- **难度**：易
- **前置题**：SPRING2-001

org.springframework.beans包负责哪些Bean相关工作？

A. 实例化
B. 属性填充
C. 依赖解析
D. HTTP视图渲染

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：课件

**解析：** beans是IoC核心，负责Bean的实例化、属性填充和依赖解析等。

**选项辨析：**

- A：正确。实例化属于beans。
- B：正确。属性填充属于beans。
- C：正确。依赖解析属于beans。
- D：错误。HTTP视图渲染属于Web层。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-102（多选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：Spring生态
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-001

课件将Spring演进为企业级事实标准的原因可概括为哪些？

A. 核心容器持续演进
B. 模块化生态覆盖多场景
C. 降低开发与维护成本
D. 完全依赖重量级EJB

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：课件

**解析：** Spring通过IoC/AOP、Web和Boot等模块持续演进，形成覆盖企业场景的轻量生态。

**选项辨析：**

- A：正确。核心容器是基础。
- B：正确。模块化生态扩大覆盖面。
- C：正确。解耦和模板降低成本。
- D：错误。课件强调摆脱重型EJB，而非依赖它。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-103（多选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：DI方式
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-001

课件列出的依赖注入方式有哪些？

A. 构造器注入
B. Setter注入
C. 字段注入
D. 数据库触发器注入

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：课件

**解析：** 构造器、Setter和字段是课程材料列出的DI方式；数据库触发器不是对象注入方式。

**选项辨析：**

- A：正确。构造器可注入。
- B：正确。Setter可注入。
- C：正确。字段可注入。
- D：错误。触发器不属于DI。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-111（多选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：自动装配
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-001

关于@Autowired，正确的说法有哪些？

A. 可按类型解析依赖
B. 可用于字段注入
C. 可减少手写实例化代码
D. 它只能注入基本类型

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第10页
- **来源口径**：课件

**解析：** 课程材料强调@Autowired按类型自动匹配，常用于字段等位置，减少手动创建依赖。

**选项辨析：**

- A：正确。按类型是核心规则。
- B：正确。字段注入是常见用法。
- C：正确。自动装配减少样板代码。
- D：错误。它并非只能注入基本类型。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-112（多选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：解耦设计
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-001

哪些做法有助于保持业务代码与具体实现解耦？

A. 依赖接口并由容器装配实现
B. 在构造器中接收依赖
C. 测试时注入Mock实现
D. 在每个业务方法中new具体实现

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：课件

**解析：** 接口、注入和Mock替换都降低业务与具体实现的绑定；方法内new会重新引入硬编码依赖。

**选项辨析：**

- A：正确。接口隔离具体实现。
- B：正确。构造器注入显式表达依赖。
- C：正确。Mock替换便于测试。
- D：错误。方法内new会加耦。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-113（多选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：配置比较
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-001

选择配置方式时，哪些判断符合课件？

A. XML物理外部化明显
B. 注解减少XML但更贴近代码
C. JavaConfig具有类型安全优势
D. 三种方式都不可能表达依赖关系

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第13页
- **来源口径**：课件

**解析：** XML、注解和JavaConfig都能表达Bean及依赖关系，区别在于外部化、贴近代码和类型安全等取舍。

**选项辨析：**

- A：正确。XML与代码物理分离。
- B：正确。注解提高效率但更贴近代码。
- C：正确。JavaConfig有编译期类型优势。
- D：错误。三者都能表达依赖关系。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-121（多选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：Bean候选
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-001

同一接口有多个Bean时，哪些方式可以表达注入选择？

A. @Qualifier
B. @Primary
C. 注入具体实现类型
D. 随机依赖字段声明顺序

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：官方文档扩展

**解析：** 限定符、主候选和更具体的类型都可帮助消歧，依赖字段顺序不应作为规则。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：正确。该选项符合官方语义。
- C：正确。该选项符合官方语义。
- D：错误。该选项不符合本题场景。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-122（多选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：Spring依赖
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-001

构造器注入适合哪些场景？

A. 表达必需依赖
B. 支持不可变字段
C. 便于单元测试替换实现
D. 隐藏所有依赖以免阅读

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：官方文档扩展

**解析：** 构造器让依赖显式、可测试，隐藏依赖反而降低可维护性。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：正确。该选项符合官方语义。
- C：正确。该选项符合官方语义。
- D：错误。该选项不符合本题场景。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-123（多选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：Bean作用域
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-001

关于Spring常见作用域，正确的有？

A. singleton默认每个容器一个实例
B. prototype每次请求容器通常创建新实例
C. request作用域需要Web上下文
D. 所有作用域都天然线程安全

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：官方文档扩展

**解析：** 作用域描述实例生命周期，不自动提供线程安全。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：正确。该选项符合官方语义。
- C：正确。该选项符合官方语义。
- D：错误。该选项不符合本题场景。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-124（多选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：Spring作用域
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-001

prototype Bean使用时需要注意哪些？

A. 容器不会管理其全部销毁回调语义
B. 注入singleton时可能只解析一次
C. 需要Provider时可按需获取
D. 它天然线程安全

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：官方文档扩展

**解析：** prototype只描述创建策略，不自动解决线程安全和所有生命周期清理。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：正确。该选项符合官方语义。
- C：正确。该选项符合官方语义。
- D：错误。该选项不符合本题场景。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-125（多选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：应用能力
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-001

企业应用使用ApplicationContext可能获得哪些能力？

A. Bean生命周期管理
B. 事件驱动协作
C. 国际化支持
D. 替代数据库本身

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：课件

**解析：** ApplicationContext是应用上下文，整合Bean生命周期、事件、国际化等企业能力。

**选项辨析：**

- A：正确。它管理Bean生命周期。
- B：正确。事件可促进模块协作。
- C：正确。国际化属于context能力。
- D：错误。它不替代数据库。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-127（多选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：Bean生命周期
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-001

Bean初始化阶段可能涉及哪些扩展点？

A. @PostConstruct
B. InitializingBean.afterPropertiesSet
C. 自定义init-method
D. JVM编译器回调

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：官方文档扩展

**解析：** 这些是常见初始化回调；编译器不参与Bean生命周期。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：正确。该选项符合官方语义。
- C：正确。该选项符合官方语义。
- D：错误。该选项不符合本题场景。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-129（多选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：注解扫描
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-001

组件扫描的结果可能包括哪些？

A. 发现@Component类
B. 发现@Service类
C. 发现@Repository类
D. 自动把任意未标记类全部注册

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第10页
- **来源口径**：课件

**解析：** 扫描针对带组件语义的类（包括其特化注解），不会把任意未标记类全部注册。

**选项辨析：**

- A：正确。Component可被发现。
- B：正确。Service可被发现。
- C：正确。Repository可被发现。
- D：错误。未标记类不会无条件全部注册。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-134（多选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：注解配置
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-001

以下哪些注解用于表达Spring组件或配置语义？

A. @Component
B. @Service
C. @Repository
D. @RandomConfig

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第10页
- **来源口径**：课件

**解析：** 前三个注解用于组件注册或分层语义；课程材料没有@RandomConfig。

**选项辨析：**

- A：正确。Component是通用组件。
- B：正确。Service是业务组件。
- C：正确。Repository是数据访问组件。
- D：错误。@RandomConfig不是课件中的Spring注解。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-135（多选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：项目结构
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-001

关于标准Maven项目目录，正确的说法有哪些？

A. src/main/java放Java源码
B. src/main/resources放配置和资源
C. pom.xml管理依赖和构建
D. src/main/java专门放编译产物

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第10页
- **来源口径**：课件

**解析：** 课程材料列出的目录约定将源码、资源和Maven配置分工放置。

**选项辨析：**

- A：正确。Java源码在main/java。
- B：正确。资源在main/resources。
- C：正确。pom.xml管理依赖和生命周期。
- D：错误。编译产物通常不放源码目录。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-136（多选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：组件语义
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-001

关于@Component、@Service和@Repository，正确的说法有哪些？

A. @Service具有业务层语义
B. @Repository具有数据访问层语义
C. 它们可作为组件扫描候选
D. 三者都只能标记配置类

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第10页
- **来源口径**：课件

**解析：** 三个注解都建立在组件语义上，但Service和Repository分别表达业务与数据层；并非只能标记配置类。

**选项辨析：**

- A：正确。Service表达业务层。
- B：正确。Repository表达DAO层。
- C：正确。带注解类可参与扫描。
- D：错误。它们不是配置类专用。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-143（多选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：配置属性
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-001

外部属性注入时，正确的做法包括？

A. 使用Environment
B. 使用@Value占位符
C. 使用@ConfigurationProperties绑定对象
D. 把密码打印到启动日志

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：官方文档扩展

**解析：** 属性读取应保持类型化和可管理，敏感信息不应打印。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：正确。该选项符合官方语义。
- C：正确。该选项符合官方语义。
- D：错误。该选项不符合本题场景。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-144（多选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：Spring配置
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-001

Java配置类设计中，正确的有？

A. @Bean方法可声明第三方类实例
B. @Import可引入其他配置
C. @Profile可选择环境配置
D. 配置类必须全部写成XML

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：官方文档扩展

**解析：** JavaConfig能表达第三方对象、导入和环境条件，XML不是必需形式。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：正确。该选项符合官方语义。
- C：正确。该选项符合官方语义。
- D：错误。该选项不符合本题场景。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-148（多选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：核心包
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-001

org.springframework.core包提供的能力包括哪些？

A. 资源加载
B. 类型转换
C. 异常处理
D. Bean业务层语义

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：课件

**解析：** core提供底层通用工具和基础设施；Bean分层语义由组件注解表达。

**选项辨析：**

- A：正确。资源加载属于core。
- B：正确。类型转换属于core。
- C：正确。异常处理属于core通用能力。
- D：错误。Bean业务语义不是core职责。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-149（多选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：核心包
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-001

core、beans、context三层能力的合理描述有哪些？

A. core提供基础设施
B. beans负责Bean管理
C. context提供应用上下文服务
D. 三者都专门处理HTTP请求

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：课件

**解析：** 三者形成从通用基础到Bean管理再到应用上下文的层次；HTTP请求由web模块处理。

**选项辨析：**

- A：正确。core是基础。
- B：正确。beans是IoC核心。
- C：正确。context是应用层运行中枢。
- D：错误。HTTP请求不是三者共同职责。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-154（多选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：发展历史
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-001

课件时间线中与Spring Framework相关的正确说法有哪些？

A. 1.0确立IoC与AOP
B. 2.5拥抱注解驱动
C. 5.0引入WebFlux
D. 6.0发布Spring Boot 3

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：课件

**解析：** 前三项对应课程材料给出的Spring Framework演进节点，Boot 3属于Spring Boot时间线。

**选项辨析：**

- A：正确。2004年1.0对应IoC/AOP。
- B：正确。2007年2.5对应注解。
- C：正确。2017年5.0对应WebFlux。
- D：错误。Boot 3不是Spring Framework 6.0的该项表述。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-155（多选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：发展历史
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-001

关于Spring Boot时间线，正确的说法有哪些？

A. Boot 1.0对应2014年
B. Boot 2.0在课件中描述为适配Spring 5
C. Boot 3.0基于Spring 6并支持Java 17
D. Boot 1.0诞生于2004年

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：课件

**解析：** 课程材料时间线列出Boot 1.0（2014）、2.0（2018）和3.0（2022）的对应关系。

**选项辨析：**

- A：正确。2014年是Boot 1.0。
- B：正确。2018年Boot 2.0适配Spring 5。
- C：正确。2022年Boot 3.0基于Spring 6、Java 17。
- D：错误。2004年是Spring Framework 1.0，不是Boot。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-165（多选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：Spring定位
- **认知层级**：认识
- **难度**：易
- **前置题**：SPRING2-001

以下哪些属于课件列出的Spring生态方向？

A. Spring MVC Web开发
B. Spring Cloud云原生
C. Spring Data数据访问
D. Spring Random随机工具

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：课件

**解析：** 课程材料把Spring描述为覆盖Web、云原生和数据访问等生态体系。

**选项辨析：**

- A：正确。MVC属于Web方向。
- B：正确。Cloud属于云原生方向。
- C：正确。Data属于数据访问。
- D：错误。Spring并没有课件所述的Random生态方向。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-166（多选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：核心价值
- **认知层级**：认识
- **难度**：易
- **前置题**：SPRING2-001

Spring模板可以帮助封装哪些重复性工作？

A. JDBC操作
B. 事务管理
C. Web开发基础处理
D. 操作系统内核调度

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：课件

**解析：** 课程材料举例说明Spring模板覆盖JDBC、事务和Web等场景，减少样板代码。

**选项辨析：**

- A：正确。JDBC是模板场景。
- B：正确。事务是模板场景。
- C：正确。Web开发也有成熟模板。
- D：错误。内核调度不属于Spring模板。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-167（多选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：应用上下文
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-001

ApplicationContext常见的应用级能力包括哪些？

A. 事件发布与监听
B. 国际化支持
C. 资源加载
D. 编译Java源文件

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：课件

**解析：** context在Bean管理基础上提供事件、国际化和资源加载等服务，编译由构建工具完成。

**选项辨析：**

- A：正确。事件是context能力。
- B：正确。国际化是context能力。
- C：正确。资源加载是context能力。
- D：错误。编译源码不属于ApplicationContext。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-168（多选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：Web模块
- **认知层级**：认识
- **难度**：易
- **前置题**：SPRING2-001

Spring web模块在课件中覆盖哪些框架？

A. Spring MVC
B. Spring WebFlux
C. Spring Data
D. Spring Security

- **答案**：A、B
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：课件

**解析：** 课程材料将Spring MVC和Spring WebFlux列为web模块的两大核心框架。

**选项辨析：**

- A：正确。MVC是Servlet Web框架。
- B：正确。WebFlux是响应式Web框架。
- C：错误。Data属于数据访问方向。
- D：错误。Security属于安全方向。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-169（多选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：应用上下文
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-001

context包相较于beans包的扩展包括哪些？

A. 事件机制
B. 国际化支持
C. 资源加载和环境能力
D. 仅增加SQL执行器

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：课件

**解析：** context建立在beans之上，扩展事件、国际化、资源和应用环境等企业服务。

**选项辨析：**

- A：正确。事件是扩展能力。
- B：正确。国际化是扩展能力。
- C：正确。资源和环境是扩展能力。
- D：错误。并非只增加SQL执行器。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-190（多选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：事件发布
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-001

Spring应用事件设计中，正确的有？

A. 监听器可以按类型接收事件
B. 默认监听可能同步执行
C. 可用@Async异步处理
D. 事件天然保证跨服务可靠投递

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：官方文档扩展

**解析：** Spring事件是进程内机制，跨服务可靠投递需要消息系统。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：正确。该选项符合官方语义。
- C：正确。该选项符合官方语义。
- D：错误。该选项不符合本题场景。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-191（多选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：SpEL
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-001

SpEL可以用于哪些场景？

A. 条件表达式
B. 属性计算
C. 访问受控Bean
D. 无约束执行用户任意代码

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：官方文档扩展

**解析：** SpEL功能强大但不应把不可信输入直接当作表达式执行。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：正确。该选项符合官方语义。
- C：正确。该选项符合官方语义。
- D：错误。该选项不符合本题场景。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-192（多选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：Advice顺序
- **认知层级**：分析
- **难度**：难
- **前置题**：SPRING2-001

关于环绕通知，正确的有？

A. 可以在目标调用前后执行逻辑
B. 可以决定是否调用proceed
C. 可以改变返回值
D. 一定会自动重试无限次

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：官方文档扩展

**解析：** 环绕通知控制调用链，但重试次数需要显式设计。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：正确。该选项符合官方语义。
- C：正确。该选项符合官方语义。
- D：错误。该选项不符合本题场景。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-193（多选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：数据访问
- **认知层级**：分析
- **难度**：难
- **前置题**：SPRING2-001

Spring数据访问抽象的收益包括？

A. 统一异常抽象
B. 模板化资源释放
C. 可替换底层技术
D. 自动生成正确业务SQL

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：官方文档扩展

**解析：** Spring减少样板但不替代业务SQL和数据建模。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：正确。该选项符合官方语义。
- C：正确。该选项符合官方语义。
- D：错误。该选项不符合本题场景。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-194（多选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：Spring代理
- **认知层级**：分析
- **难度**：难
- **前置题**：SPRING2-001

代理增强失效排查时，正确的方向包括？

A. 检查是否发生自调用
B. 检查方法是否可被代理覆写
C. 检查调用是否拿到容器代理
D. 只增加日志就能修复代理

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：官方文档扩展

**解析：** 代理边界、自调用和对象来源是常见排查点，日志本身不能改变代理关系。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：正确。该选项符合官方语义。
- C：正确。该选项符合官方语义。
- D：错误。该选项不符合本题场景。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-195（多选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：Spring Web
- **认知层级**：分析
- **难度**：难
- **前置题**：SPRING2-001

Web层安全设计中，合理的有？

A. 在边界校验输入
B. 对异常响应脱敏
C. 使用统一ControllerAdvice
D. 把堆栈和SQL返回给客户端

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：官方文档扩展

**解析：** 输入校验、统一错误和脱敏降低边界风险。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：正确。该选项符合官方语义。
- C：正确。该选项符合官方语义。
- D：错误。该选项不符合本题场景。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-196（多选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：Spring安全
- **认知层级**：分析
- **难度**：难
- **前置题**：SPRING2-001

Spring边界安全实践包括？

A. 校验和限制输入
B. 避免日志记录凭证
C. 对管理接口做授权
D. 只依赖前端隐藏按钮

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：官方文档扩展

**解析：** 输入、日志和服务端授权共同构成防线，前端隐藏不等于安全。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：正确。该选项符合官方语义。
- C：正确。该选项符合官方语义。
- D：错误。该选项不符合本题场景。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-197（多选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：Spring数据访问
- **认知层级**：分析
- **难度**：难
- **前置题**：SPRING2-001

数据访问层的合理职责包括？

A. 封装查询和持久化
B. 转换底层数据访问异常
C. 定义事务边界协作
D. 把所有领域规则塞进DAO

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：官方文档扩展

**解析：** DAO负责数据访问，复杂领域规则应留在领域或服务层。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：正确。该选项符合官方语义。
- C：正确。该选项符合官方语义。
- D：错误。该选项不符合本题场景。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-198（多选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：官方文档
- **认知层级**：分析
- **难度**：难
- **前置题**：SPRING2-001

遇到版本冲突或行为差异时，正确的取证方式包括？

A. 查当前官方参考文档
B. 核对Release Train兼容矩阵
C. 用最小复现验证配置
D. 只看搜索结果摘要并直接上线

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：官方文档扩展

**解析：** 官方文档、兼容矩阵和最小复现能把版本差异转化为可验证结论。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：正确。该选项符合官方语义。
- C：正确。该选项符合官方语义。
- D：错误。该选项不符合本题场景。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-199（多选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：Spring事件
- **认知层级**：分析
- **难度**：难
- **前置题**：SPRING2-001

应用事件使用时，合理的有？

A. 事件类型可表达业务语义
B. 同步监听会占用发布线程
C. 异步监听要考虑异常和线程池
D. 事件天然跨服务持久化

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：官方文档扩展

**解析：** 事件是进程内机制，异步处理还要治理执行器和异常。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：正确。该选项符合官方语义。
- C：正确。该选项符合官方语义。
- D：错误。该选项不符合本题场景。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-200（多选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：Spring资源
- **认知层级**：分析
- **难度**：难
- **前置题**：SPRING2-001

Resource抽象的合理用途包括？

A. 读取类路径资源
B. 读取文件系统资源
C. 读取URL资源
D. 自动替代数据库事务

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：官方文档扩展

**解析：** Resource统一资源访问，不承担事务管理。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：正确。该选项符合官方语义。
- C：正确。该选项符合官方语义。
- D：错误。该选项不符合本题场景。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-201（多选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：事务传播
- **认知层级**：分析
- **难度**：难
- **前置题**：SPRING2-001

以下传播语义中，正确的有？

A. REQUIRED可加入现有事务
B. REQUIRES_NEW会挂起外部事务
C. SUPPORTS有事务则加入、无事务也可执行
D. 所有传播行为都创建新事务

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：官方文档扩展

**解析：** 传播行为决定事务边界，只有部分语义会强制创建新事务。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：正确。该选项符合官方语义。
- C：正确。该选项符合官方语义。
- D：错误。该选项不符合本题场景。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-202（多选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：事务回滚
- **认知层级**：分析
- **难度**：难
- **前置题**：SPRING2-001

事务回滚规则设计时应注意哪些？

A. 受检异常默认不一定回滚
B. 可通过rollbackFor扩展规则
C. 自调用可能绕过代理
D. 只要写了@Transactional就能跨线程传播

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：官方文档扩展

**解析：** 回滚规则和代理边界都需要明确，事务上下文不会自动跨任意线程传播。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：正确。该选项符合官方语义。
- C：正确。该选项符合官方语义。
- D：错误。该选项不符合本题场景。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-203（多选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：事务一致性
- **认知层级**：分析
- **难度**：难
- **前置题**：SPRING2-001

事务代码中合理的实践包括？

A. 缩短事务持有时间
B. 避免在事务内调用不受控慢服务
C. 明确隔离级别
D. 把所有远程调用都包进一个长事务

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：官方文档扩展

**解析：** 事务边界应尽量短，跨服务长事务会放大锁和可用性风险。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：正确。该选项符合官方语义。
- C：正确。该选项符合官方语义。
- D：错误。该选项不符合本题场景。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-204（多选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：缓存
- **认知层级**：分析
- **难度**：难
- **前置题**：SPRING2-001

缓存注解使用时应考虑哪些问题？

A. 缓存键设计
B. 失效时机
C. 并发击穿
D. 缓存天然保证强一致

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：官方文档扩展

**解析：** 缓存设计需要权衡一致性和性能，不能假定天然强一致。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：正确。该选项符合官方语义。
- C：正确。该选项符合官方语义。
- D：错误。该选项不符合本题场景。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-205（多选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：MVC
- **认知层级**：分析
- **难度**：难
- **前置题**：SPRING2-001

Spring MVC请求处理可以包含哪些阶段？

A. HandlerMapping选择处理器
B. 参数解析和数据绑定
C. HandlerAdapter调用控制器
D. 直接由数据库返回HTML

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：官方文档扩展

**解析：** MVC负责请求映射、参数绑定和控制器调用，数据库不直接承担Web渲染。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：正确。该选项符合官方语义。
- C：正确。该选项符合官方语义。
- D：错误。该选项不符合本题场景。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-206（多选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：WebFlux
- **认知层级**：分析
- **难度**：难
- **前置题**：SPRING2-001

响应式Web应用中，正确的有？

A. Mono表示0或1个异步结果
B. Flux表示0到多个结果
C. 阻塞调用会破坏非阻塞优势
D. 所有代码都必须改成线程手工创建

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：官方文档扩展

**解析：** 响应式类型表达数据流，阻塞调用需隔离；不需要手工为每段代码创建线程。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：正确。该选项符合官方语义。
- C：正确。该选项符合官方语义。
- D：错误。该选项不符合本题场景。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-207（多选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：Spring事务
- **认知层级**：分析
- **难度**：难
- **前置题**：SPRING2-001

事务边界设计中，正确的有？

A. 避免把远程慢调用放进长事务
B. 明确回滚异常规则
C. 注意代理和自调用限制
D. 事务会自动跨任意线程传播

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：官方文档扩展

**解析：** 事务需明确边界、回滚和代理语义，线程切换不会自动继承事务。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：正确。该选项符合官方语义。
- C：正确。该选项符合官方语义。
- D：错误。该选项不符合本题场景。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-208（多选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：Spring AOP
- **认知层级**：分析
- **难度**：难
- **前置题**：SPRING2-001

Spring AOP切点设计中，正确的有？

A. execution可匹配方法执行
B. within可按类型范围匹配
C. @annotation可按注解匹配
D. 默认可拦截任意字段读取

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：官方文档扩展

**解析：** 常见切点表达式围绕方法、类型和注解，字段读取不是默认能力。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：正确。该选项符合官方语义。
- C：正确。该选项符合官方语义。
- D：错误。该选项不符合本题场景。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-209（多选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：Spring AOP
- **认知层级**：分析
- **难度**：难
- **前置题**：SPRING2-001

代理对象使用时，正确的有？

A. 调用代理才能触发通知
B. 自调用可能绕过代理
C. final方法可能无法被子类代理增强
D. 代理会自动修复业务异常

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：官方文档扩展

**解析：** 代理决定拦截边界，业务异常仍需业务和错误处理解决。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：正确。该选项符合官方语义。
- C：正确。该选项符合官方语义。
- D：错误。该选项不符合本题场景。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-210（多选题）

- **学习阶段**：Spring Bean、IoC、DI、容器
- **主题**：Spring事务
- **认知层级**：分析
- **难度**：难
- **前置题**：SPRING2-001

事务传播设计中，正确的有？

A. NOT_SUPPORTED可挂起现有事务执行非事务代码
B. NEVER要求当前没有事务
C. MANDATORY要求已有事务
D. 所有传播都等价于REQUIRED

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第9页
- **来源口径**：官方文档扩展

**解析：** 不同传播行为明确表达是否需要、加入或挂起事务。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：正确。该选项符合官方语义。
- C：正确。该选项符合官方语义。
- D：错误。该选项不符合本题场景。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

# 第3阶段：AOP、MVC、事务、数据访问、测试

## 单选题

### SPRING2-211（单选题）

- **学习阶段**：AOP、MVC、事务、数据访问、测试
- **主题**：AOP 基本概念
- **认知层级**：认识
- **难度**：易
- **前置题**：SPRING2-061

在 Spring AOP 中，把横跨多个业务模块的日志、事务等通用行为抽取出来的对象称为？

A. 切面
B. 实体
C. 仓储
D. DTO

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第26页
- **来源口径**：课件

**解析：** 切面封装横切关注点及其通知、切点配置。

**选项辨析：**

- A：正确。切面用于集中表达横切逻辑。
- B：错误。实体描述业务数据。
- C：错误。仓储负责数据访问抽象。
- D：错误。DTO 用于数据传输。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-212（单选题）

- **学习阶段**：AOP、MVC、事务、数据访问、测试
- **主题**：AOP 基本概念
- **认知层级**：认识
- **难度**：易
- **前置题**：SPRING2-061

AOP 主要解决哪类问题？

A. 横切关注点的重复散落
B. 数据库表空间不足
C. HTML 标签嵌套
D. 网络 DNS 解析

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第26页
- **来源口径**：课件

**解析：** AOP 将日志、权限、事务等横切逻辑与核心业务解耦。

**选项辨析：**

- A：正确。这是 AOP 的核心价值。
- B：错误。不属于 AOP 职责。
- C：错误。属于前端标记问题。
- D：错误。属于网络基础设施问题。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-217（单选题）

- **学习阶段**：AOP、MVC、事务、数据访问、测试
- **主题**：切点
- **认知层级**：认识
- **难度**：易
- **前置题**：SPRING2-061

Spring AOP 中用于描述“哪些方法需要被拦截”的表达式是？

A. 切点表达式
B. Bean 名称
C. 环境变量
D. 资源路径

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第26页
- **来源口径**：课件

**解析：** 切点定义连接点的匹配范围。

**选项辨析：**

- A：正确。切点表达式决定匹配的方法集合。
- B：错误。Bean 名称不能单独表达方法匹配规则。
- C：错误。环境变量用于配置。
- D：错误。资源路径不是 AOP 匹配表达式。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-218（单选题）

- **学习阶段**：AOP、MVC、事务、数据访问、测试
- **主题**：连接点
- **认知层级**：认识
- **难度**：易
- **前置题**：SPRING2-061

在 Spring 基于代理的 AOP 中，最常见的连接点是？

A. 方法执行
B. 字段声明
C. 类文件下载
D. 数据库建表

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第26页
- **来源口径**：课件

**解析：** Spring AOP 主要拦截方法执行连接点。

**选项辨析：**

- A：正确。方法执行是 Spring AOP 的典型连接点。
- B：错误。字段声明不是 Spring 代理默认连接点。
- C：错误。文件下载属于业务动作。
- D：错误。建表不属于方法连接点。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-219（单选题）

- **学习阶段**：AOP、MVC、事务、数据访问、测试
- **主题**：切点表达式
- **认知层级**：认识
- **难度**：易
- **前置题**：SPRING2-061

within(com.example.service..*) 与 execution 表达式相比主要按什么维度匹配？

A. 类型所在包范围
B. 方法返回对象值
C. SQL 执行耗时
D. 请求体 JSON

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第26页
- **来源口径**：课件

**解析：** within 按匹配类型的包和类范围限定连接点。

**选项辨析：**

- A：正确。它重点限定类型位置。
- B：错误。不是按运行时返回值匹配。
- C：错误。不分析 SQL 耗时。
- D：错误。不读取请求体。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-220（单选题）

- **学习阶段**：AOP、MVC、事务、数据访问、测试
- **主题**：注解切点
- **认知层级**：认识
- **难度**：易
- **前置题**：SPRING2-061

@annotation(TransactionalLog) 切点的含义是？

A. 匹配带该注解的方法
B. 匹配所有异常
C. 匹配所有接口
D. 匹配指定数据库

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第26页
- **来源口径**：课件

**解析：** @annotation 根据方法上的注解匹配连接点。

**选项辨析：**

- A：正确。它以注解作为匹配条件。
- B：错误。异常需要异常通知处理。
- C：错误。接口匹配应使用其他表达式。
- D：错误。与数据库选择无关。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-221（单选题）

- **学习阶段**：AOP、MVC、事务、数据访问、测试
- **主题**：切点表达式
- **认知层级**：认识
- **难度**：易
- **前置题**：SPRING2-061

execution(* com.example.service..*(..)) 主要匹配什么？

A. service 包及子包中任意方法
B. 所有数据库表
C. 所有 HTTP 状态码
D. 只匹配构造方法

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第26页
- **来源口径**：课件

**解析：** execution 表达式可按包、返回值、方法名和参数匹配方法执行。

**选项辨析：**

- A：正确。..* 覆盖包及子包方法。
- B：错误。与数据库表无关。
- C：错误。与状态码无关。
- D：错误。不是构造方法专用写法。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-222（单选题）

- **学习阶段**：AOP、MVC、事务、数据访问、测试
- **主题**：切点绑定
- **认知层级**：认识
- **难度**：易
- **前置题**：SPRING2-061

切点使用 args(accountId) 时，通知方法通常可以获得什么？

A. 调用时传入的 accountId 参数
B. 目标类所有字段
C. 数据库连接池
D. HTTP 响应头

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第26页
- **来源口径**：课件

**解析：** args 可将方法参数绑定到通知形参。

**选项辨析：**

- A：正确。可读取匹配调用的参数。
- B：错误。字段需要其他机制访问。
- C：错误。连接池不是 args 提供的。
- D：错误。响应头属于 Web 层。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-223（单选题）

- **学习阶段**：AOP、MVC、事务、数据访问、测试
- **主题**：通知顺序
- **认知层级**：认识
- **难度**：易
- **前置题**：SPRING2-061

同一切点存在多个前置通知时，控制其先后顺序可使用？

A. @Order
B. @Value
C. @Profile
D. @Bean

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第26页
- **来源口径**：课件

**解析：** @Order 可为切面或通知指定优先级顺序。

**选项辨析：**

- A：正确。数值越小通常优先级越高。
- B：错误。@Value 注入配置。
- C：错误。@Profile 控制环境。
- D：错误。@Bean 声明 Bean。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-225（单选题）

- **学习阶段**：AOP、MVC、事务、数据访问、测试
- **主题**：通知
- **认知层级**：认识
- **难度**：易
- **前置题**：SPRING2-061

在目标方法执行之前运行的通知类型是？

A. 前置通知
B. 返回通知
C. 异常通知
D. 最终通知

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第26页
- **来源口径**：课件

**解析：** @Before 标注的方法会在目标方法执行前调用。

**选项辨析：**

- A：正确。前置通知先于目标方法。
- B：错误。返回通知在成功返回后执行。
- C：错误。异常通知在抛出异常时执行。
- D：错误。最终通知在方法结束时执行。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-226（单选题）

- **学习阶段**：AOP、MVC、事务、数据访问、测试
- **主题**：通知
- **认知层级**：认识
- **难度**：易
- **前置题**：SPRING2-061

目标方法正常返回后才执行的通知是？

A. @AfterReturning
B. @Before
C. @AfterThrowing
D. @Around

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第26页
- **来源口径**：课件

**解析：** @AfterReturning 只在目标方法正常完成后触发。

**选项辨析：**

- A：正确。用于处理正常返回结果。
- B：错误。执行时机是方法之前。
- C：错误。只处理异常退出。
- D：错误。可包裹整个调用但不是该专门类型。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-227（单选题）

- **学习阶段**：AOP、MVC、事务、数据访问、测试
- **主题**：通知
- **认知层级**：认识
- **难度**：易
- **前置题**：SPRING2-061

无论目标方法正常结束还是抛出异常都会执行的通知是？

A. @After
B. @Before
C. @AfterReturning
D. @AfterThrowing

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第26页
- **来源口径**：课件

**解析：** @After 相当于 finally 语义。

**选项辨析：**

- A：正确。无论结果如何都会执行。
- B：错误。只在调用前执行。
- C：错误。仅处理正常返回。
- D：错误。仅处理异常返回。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-228（单选题）

- **学习阶段**：AOP、MVC、事务、数据访问、测试
- **主题**：环绕通知
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-061

环绕通知要让目标方法真正执行，通常需要调用哪个对象的方法？

A. ProceedingJoinPoint.proceed()
B. ApplicationContext.close()
C. BeanFactory.getName()
D. Logger.flush()

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第26页
- **来源口径**：课件

**解析：** 环绕通知通过 proceed() 控制目标调用是否继续。

**选项辨析：**

- A：正确。proceed 触发目标方法并可获得返回值。
- B：错误。关闭容器会终止应用。
- C：错误。BeanFactory 没有此职责。
- D：错误。日志刷新与目标调用无关。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-229（单选题）

- **学习阶段**：AOP、MVC、事务、数据访问、测试
- **主题**：环绕通知
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-061

环绕通知中在 proceed() 之后修改返回值，最直接影响的是？

A. 调用方最终拿到的结果
B. 数据库表结构
C. Controller 映射路径
D. JVM 堆大小

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第26页
- **来源口径**：课件

**解析：** 环绕通知可包装目标返回值后再交给调用方。

**选项辨析：**

- A：正确。返回值可被统一转换或包装。
- B：错误。不会直接改变表结构。
- C：错误。不会改变映射注解。
- D：错误。与 JVM 堆参数无关。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-230（单选题）

- **学习阶段**：AOP、MVC、事务、数据访问、测试
- **主题**：代理限制
- **认知层级**：分析
- **难度**：难
- **前置题**：SPRING2-061

要使事务或自定义通知覆盖另一个方法，较稳妥的做法是？

A. 通过代理对象发起调用
B. 在方法内使用 this 调用
C. 把通知写到配置文件注释
D. 删除目标方法

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第26页
- **来源口径**：课件

**解析：** 从容器取到的代理对象调用才能触发代理链。

**选项辨析：**

- A：正确。外部经过代理入口可执行通知。
- B：错误。this 调用会绕过代理。
- C：错误。注释不会产生行为。
- D：错误。删除方法不能解决设计问题。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-231（单选题）

- **学习阶段**：AOP、MVC、事务、数据访问、测试
- **主题**：异常通知
- **认知层级**：认识
- **难度**：易
- **前置题**：SPRING2-061

@AfterThrowing 通知的触发条件是？

A. 目标方法抛出匹配异常
B. 目标方法正常返回
C. 容器启动完成
D. Bean 被销毁

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第26页
- **来源口径**：课件

**解析：** 异常通知响应目标方法的异常退出。

**选项辨析：**

- A：正确。可绑定异常对象记录或转译。
- B：错误。正常返回应使用返回通知。
- C：错误。容器事件不是目标方法异常。
- D：错误。销毁回调是生命周期行为。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-235（单选题）

- **学习阶段**：AOP、MVC、事务、数据访问、测试
- **主题**：代理机制
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-061

目标类实现接口时，Spring 默认更可能使用哪种代理？

A. JDK 动态代理
B. 静态 HTML 代理
C. 数据库触发器
D. 反射缓存

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第26页
- **来源口径**：课件

**解析：** 基于接口的目标通常可以由 JDK 动态代理实现。

**选项辨析：**

- A：正确。JDK 代理通过接口转发调用。
- B：错误。HTML 与 Java 对象代理无关。
- C：错误。触发器运行在数据库端。
- D：错误。反射缓存不是代理类型。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-236（单选题）

- **学习阶段**：AOP、MVC、事务、数据访问、测试
- **主题**：代理机制
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-061

目标类没有实现接口时，Spring 常用哪种方式创建代理？

A. CGLIB 子类代理
B. JDK 接口代理
C. Servlet Filter
D. JDBC Driver

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第26页
- **来源口径**：课件

**解析：** 无接口目标类可通过 CGLIB 生成子类代理。

**选项辨析：**

- A：正确。CGLIB 基于继承增强类。
- B：错误。JDK 代理需要接口。
- C：错误。Filter 处理 Web 请求。
- D：错误。Driver 负责数据库连接。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-237（单选题）

- **学习阶段**：AOP、MVC、事务、数据访问、测试
- **主题**：代理限制
- **认知层级**：分析
- **难度**：难
- **前置题**：SPRING2-061

同一个类中一个方法直接调用本类另一个方法时，为什么常绕过 Spring AOP？

A. 没有经过代理对象
B. 方法没有返回值
C. Spring 禁止 private 字段
D. 类一定是 final

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第26页
- **来源口径**：课件

**解析：** 自调用使用 this 引用，未经过外部代理拦截。

**选项辨析：**

- A：正确。代理增强发生在代理对象入口。
- B：错误。返回值与是否拦截无关。
- C：错误。字段访问不是原因。
- D：错误。类不一定 final。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-238（单选题）

- **学习阶段**：AOP、MVC、事务、数据访问、测试
- **主题**：事务代理
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-061

一个 @Transactional 方法由同类内部直接调用时事务未生效，根因通常是？

A. 调用绕过事务代理
B. 数据库没有表
C. 事务注解只能写在字段上
D. Spring 不支持事务

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第26页
- **来源口径**：课件

**解析：** 事务本质由代理拦截入口建立和提交边界。

**选项辨析：**

- A：正确。this 调用不会经过代理。
- B：错误。表是否存在是另一类错误。
- C：错误。注解用于类型或方法。
- D：错误。Spring 支持声明式事务。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-239（单选题）

- **学习阶段**：AOP、MVC、事务、数据访问、测试
- **主题**：MyBatis 集成
- **认知层级**：认识
- **难度**：易
- **前置题**：SPRING2-061

Spring Boot 集成 MyBatis 通常需要使用哪个注解扫描 Mapper 接口？

A. @MapperScan
B. @ComponentScanOnly
C. @EntityScan
D. @WebScan

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第26页
- **来源口径**：课件

**解析：** @MapperScan 指定 Mapper 接口所在包并注册代理。

**选项辨析：**

- A：正确。用于批量扫描 Mapper。
- B：错误。不存在该标准注解。
- C：错误。@EntityScan 扫描实体。
- D：错误。不存在该标准注解。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-240（单选题）

- **学习阶段**：AOP、MVC、事务、数据访问、测试
- **主题**：MyBatis 集成
- **认知层级**：认识
- **难度**：易
- **前置题**：SPRING2-061

MyBatis Mapper 接口通常由谁实现其数据库访问代理？

A. MyBatis 框架
B. 浏览器
C. JVM 垃圾回收器
D. JUnit

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第26页
- **来源口径**：课件

**解析：** MyBatis 为 Mapper 接口生成代理并执行映射语句。

**选项辨析：**

- A：正确。框架负责代理和 SQL 映射。
- B：错误。浏览器不访问 Mapper 接口。
- C：错误。GC 负责内存回收。
- D：错误。JUnit 负责测试。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-244（单选题）

- **学习阶段**：AOP、MVC、事务、数据访问、测试
- **主题**：事务代理限制
- **认知层级**：分析
- **难度**：难
- **前置题**：SPRING2-061

把@Transactional标在private方法上通常有什么问题？

A. 外部代理无法按常规拦截该方法
B. 事务会自动跨进程传播
C. 方法会自动变成public
D. 数据库会拒绝启动

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第13页
- **来源口径**：官方文档扩展

**解析：** 声明式事务需要代理可见的调用边界，private方法不适合作为代理入口。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：错误。该选项不是本题正确依据。
- C：错误。该选项不是本题正确依据。
- D：错误。该选项不是本题正确依据。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-246（单选题）

- **学习阶段**：AOP、MVC、事务、数据访问、测试
- **主题**：事务切面
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-061

把事务边界放在 Service 层通常比放在 Controller 层更合适的主要原因是？

A. Service 表达完整业务操作边界
B. Controller 不能调用数据库
C. Service 一定没有异常
D. Controller 只能返回字符串

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第26页
- **来源口径**：课件

**解析：** 事务应覆盖完整业务用例而非仅覆盖 Web 适配层。

**选项辨析：**

- A：正确。Service 通常聚合多个仓储操作。
- B：错误。Controller 也可间接访问数据库。
- C：错误。Service 仍可能抛异常。
- D：错误。返回类型不是决定因素。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-248（单选题）

- **学习阶段**：AOP、MVC、事务、数据访问、测试
- **主题**：事务抽象
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-061

Spring事务抽象的主要价值是？

A. 统一不同事务API的编程模型
B. 让所有数据库都变成内存库
C. 消除所有锁竞争
D. 替代业务补偿

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第13页
- **来源口径**：官方文档扩展

**解析：** PlatformTransactionManager等抽象统一JDBC、JPA等事务管理方式。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：错误。该选项不是本题正确依据。
- C：错误。该选项不是本题正确依据。
- D：错误。该选项不是本题正确依据。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-249（单选题）

- **学习阶段**：AOP、MVC、事务、数据访问、测试
- **主题**：事务事件
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-061

TransactionalEventListener的AFTER_COMMIT阶段意味着什么？

A. 仅在事务成功提交后处理
B. 在事务开始前处理
C. 只在回滚时处理
D. 永远异步处理

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第13页
- **来源口径**：官方文档扩展

**解析：** AFTER_COMMIT将监听动作绑定到成功提交之后，异步与否仍需另行配置。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：错误。该选项不是本题正确依据。
- C：错误。该选项不是本题正确依据。
- D：错误。该选项不是本题正确依据。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-250（单选题）

- **学习阶段**：AOP、MVC、事务、数据访问、测试
- **主题**：测试事务
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-061

测试方法上的事务默认结束后通常怎样？

A. 测试框架会回滚以隔离测试数据
B. 永远提交到生产数据库
C. 自动删除源码
D. 关闭所有Bean

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第13页
- **来源口径**：官方文档扩展

**解析：** Spring测试事务通常在测试结束后回滚，除非显式改变语义。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：错误。该选项不是本题正确依据。
- C：错误。该选项不是本题正确依据。
- D：错误。该选项不是本题正确依据。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-251（单选题）

- **学习阶段**：AOP、MVC、事务、数据访问、测试
- **主题**：事务传播
- **认知层级**：分析
- **难度**：难
- **前置题**：SPRING2-061

REQUIRES_NEW传播行为的关键语义是？

A. 挂起外部事务并创建新事务
B. 永远加入外部事务
C. 不允许数据库写入
D. 只执行查询

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第13页
- **来源口径**：官方文档扩展

**解析：** REQUIRES_NEW独立开启新事务，外部事务通常被挂起。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：错误。该选项不是本题正确依据。
- C：错误。该选项不是本题正确依据。
- D：错误。该选项不是本题正确依据。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-252（单选题）

- **学习阶段**：AOP、MVC、事务、数据访问、测试
- **主题**：事务只读
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-061

readOnly=true最合理的理解是？

A. 表达事务主要用于读取，并可帮助底层优化
B. 强制数据库绝不允许任何SQL
C. 自动缓存全部结果
D. 保证查询永远不超时

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第13页
- **来源口径**：官方文档扩展

**解析：** 只读是事务语义提示，不等同于跨所有数据库的绝对写入禁止。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：错误。该选项不是本题正确依据。
- C：错误。该选项不是本题正确依据。
- D：错误。该选项不是本题正确依据。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-253（单选题）

- **学习阶段**：AOP、MVC、事务、数据访问、测试
- **主题**：事务隔离
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-061

隔离级别主要解决哪类并发问题？

A. 脏读、不可重复读和幻读等
B. HTTP路径匹配
C. Bean扫描包名
D. JSON字段命名

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第13页
- **来源口径**：官方文档扩展

**解析：** 隔离级别定义并发事务可见性和锁语义。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：错误。该选项不是本题正确依据。
- C：错误。该选项不是本题正确依据。
- D：错误。该选项不是本题正确依据。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-255（单选题）

- **学习阶段**：AOP、MVC、事务、数据访问、测试
- **主题**：MVC 架构
- **认知层级**：认识
- **难度**：易
- **前置题**：SPRING2-061

Spring MVC 中接收前端请求并选择处理器的核心组件是？

A. DispatcherServlet
B. DataSource
C. SqlSession
D. BeanPostProcessor

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第26页
- **来源口径**：课件

**解析：** DispatcherServlet 是前端控制器，统一分发请求。

**选项辨析：**

- A：正确。它协调 MVC 请求处理流程。
- B：错误。DataSource 提供数据库连接。
- C：错误。SqlSession 属于 MyBatis。
- D：错误。BeanPostProcessor 处理 Bean 生命周期。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-256（单选题）

- **学习阶段**：AOP、MVC、事务、数据访问、测试
- **主题**：MVC 请求流程
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-061

DispatcherServlet 根据请求寻找 Controller 方法主要依赖哪个组件？

A. HandlerMapping
B. ViewResolver
C. MessageConverter
D. TransactionManager

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第26页
- **来源口径**：课件

**解析：** HandlerMapping 将请求映射到处理器及拦截器链。

**选项辨析：**

- A：正确。负责查找 Handler。
- B：错误。ViewResolver 负责视图解析。
- C：错误。MessageConverter 处理消息体。
- D：错误。事务管理器负责事务。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-257（单选题）

- **学习阶段**：AOP、MVC、事务、数据访问、测试
- **主题**：MVC 请求流程
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-061

Controller 执行后返回 ModelAndView，负责把逻辑视图名解析成具体视图的是？

A. ViewResolver
B. HandlerMapping
C. MultipartResolver
D. LocaleResolver

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第26页
- **来源口径**：课件

**解析：** ViewResolver 根据视图名找到实际 View。

**选项辨析：**

- A：正确。完成视图名到视图对象的解析。
- B：错误。用于处理器映射。
- C：错误。用于文件上传解析。
- D：错误。用于地区信息解析。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-258（单选题）

- **学习阶段**：AOP、MVC、事务、数据访问、测试
- **主题**：MVC 请求流程
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-061

使用 @ResponseBody 返回对象时，Spring MVC 通常通过什么写入响应体？

A. HttpMessageConverter
B. ViewResolver
C. HandlerInterceptor
D. BeanFactory

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第26页
- **来源口径**：课件

**解析：** 消息转换器负责对象与 JSON 等 HTTP 表示之间的转换。

**选项辨析：**

- A：正确。将返回对象序列化到响应体。
- B：错误。不再主要依赖模板视图解析。
- C：错误。拦截器不负责序列化。
- D：错误。BeanFactory 不写响应体。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-270（单选题）

- **学习阶段**：AOP、MVC、事务、数据访问、测试
- **主题**：MockMvc
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-061

MockMvc最适合测试哪一层？

A. Spring MVC请求映射和响应行为
B. 真实浏览器渲染性能
C. 生产数据库容量
D. Nacos集群选主

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第13页
- **来源口径**：官方文档扩展

**解析：** MockMvc在不启动真实服务器的情况下测试MVC处理链。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：错误。该选项不是本题正确依据。
- C：错误。该选项不是本题正确依据。
- D：错误。该选项不是本题正确依据。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-271（单选题）

- **学习阶段**：AOP、MVC、事务、数据访问、测试
- **主题**：MyBatis 参数
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-061

MyBatis 中多个方法参数需要在 SQL 中使用稳定名称，常见做法是？

A. 使用 @Param 明确参数名
B. 依赖参数随机顺序
C. 把参数写入日志
D. 把所有参数转成 URL

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第26页
- **来源口径**：课件

**解析：** @Param 为 SQL 映射提供明确参数名称。

**选项辨析：**

- A：正确。可避免编译参数名变化造成绑定问题。
- B：错误。随机顺序不可靠。
- C：错误。日志不会参与 SQL 绑定。
- D：错误。URL 转换与 Mapper 参数无关。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-272（单选题）

- **学习阶段**：AOP、MVC、事务、数据访问、测试
- **主题**：MyBatis 映射
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-061

查询结果列名与 Java 属性名不一致时，MyBatis 常通过什么解决？

A. resultMap 或列别名
B. 增加线程数量
C. 修改日志级别
D. 关闭事务

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第26页
- **来源口径**：课件

**解析：** 结果映射或 SQL 别名可将列映射到属性。

**选项辨析：**

- A：正确。专门解决列属性对应关系。
- B：错误。线程数量不改变映射。
- C：错误。日志级别无关。
- D：错误。事务设置不能修复映射。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-274（单选题）

- **学习阶段**：AOP、MVC、事务、数据访问、测试
- **主题**：AOP 设计
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-061

记录审计日志的切面中，最不应直接记录的是？

A. 密码和完整令牌
B. 业务操作名
C. Trace ID
D. 执行耗时

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第26页
- **来源口径**：课件

**解析：** 敏感凭据不应写入普通日志，避免泄露。

**选项辨析：**

- A：正确。密码和令牌属于敏感信息。
- B：错误。操作名可帮助审计。
- C：错误。Trace ID 便于关联链路。
- D：错误。耗时可用于性能分析。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-275（单选题）

- **学习阶段**：AOP、MVC、事务、数据访问、测试
- **主题**：日志集成
- **认知层级**：认识
- **难度**：易
- **前置题**：SPRING2-061

Spring Boot 默认日志门面通常是？

A. SLF4J
B. JDBC
C. JPA
D. JSP

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第26页
- **来源口径**：课件

**解析：** SLF4J 提供统一日志门面，具体实现可由 Logback 等承载。

**选项辨析：**

- A：正确。它统一日志 API。
- B：错误。JDBC 是数据库访问标准。
- C：错误。JPA 是持久化规范。
- D：错误。JSP 是视图技术。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-276（单选题）

- **学习阶段**：AOP、MVC、事务、数据访问、测试
- **主题**：日志级别
- **认知层级**：认识
- **难度**：易
- **前置题**：SPRING2-061

日志级别从低到高通常是？

A. TRACE、DEBUG、INFO、WARN、ERROR
B. ERROR、WARN、INFO、DEBUG、TRACE
C. INFO、ERROR、DEBUG、TRACE、WARN
D. DEBUG、TRACE、ERROR、INFO、WARN

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第26页
- **来源口径**：课件

**解析：** 常见级别按详细程度由 TRACE 到 ERROR 递增。

**选项辨析：**

- A：正确。这是常见排序。
- B：错误。是反向排列。
- C：错误。顺序混乱。
- D：错误。顺序混乱。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-277（单选题）

- **学习阶段**：AOP、MVC、事务、数据访问、测试
- **主题**：日志实践
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-061

生产环境通常不建议把根日志级别长期设为 DEBUG，主要原因是？

A. 日志量大且可能暴露调试信息
B. DEBUG 会关闭所有日志
C. DEBUG 会禁用事务
D. DEBUG 只能输出错误

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第26页
- **来源口径**：课件

**解析：** 过低级别会产生大量日志并增加存储与敏感信息风险。

**选项辨析：**

- A：正确。需要按环境控制日志量。
- B：错误。DEBUG 不会关闭日志。
- C：错误。与事务开关无关。
- D：错误。DEBUG 比 ERROR 更详细。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-279（单选题）

- **学习阶段**：AOP、MVC、事务、数据访问、测试
- **主题**：JUnit 5
- **认知层级**：认识
- **难度**：易
- **前置题**：SPRING2-061

JUnit 5 标识测试方法的注解是？

A. @Test
B. @Run
C. @CaseOnly
D. @VerifyBean

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第26页
- **来源口径**：课件

**解析：** JUnit Jupiter 使用 @Test 标识可执行测试方法。

**选项辨析：**

- A：正确。@Test 是标准测试注解。
- B：错误。@Run 不是 JUnit 5 测试方法注解。
- C：错误。不存在该注解。
- D：错误。不存在该注解。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-280（单选题）

- **学习阶段**：AOP、MVC、事务、数据访问、测试
- **主题**：JUnit 生命周期
- **认知层级**：认识
- **难度**：易
- **前置题**：SPRING2-061

每个测试方法执行前运行一次的 JUnit 5 注解是？

A. @BeforeEach
B. @BeforeAll
C. @AfterEach
D. @AfterAll

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第26页
- **来源口径**：课件

**解析：** @BeforeEach 用于每个测试用例前的准备。

**选项辨析：**

- A：正确。每个测试方法前都会执行。
- B：错误。@BeforeAll 通常只执行一次。
- C：错误。@AfterEach 在测试后执行。
- D：错误。@AfterAll 在全部测试后执行。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-287（单选题）

- **学习阶段**：AOP、MVC、事务、数据访问、测试
- **主题**：断言
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-061

验证两个值相等应优先使用哪个断言？

A. Assertions.assertEquals
B. Assertions.assertNull
C. Assertions.assertThrows
D. Assertions.failOnly

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第26页
- **来源口径**：课件

**解析：** assertEquals 用于比较期望值和实际值。

**选项辨析：**

- A：正确。适用于相等性断言。
- B：错误。用于 null 判断。
- C：错误。用于验证抛异常。
- D：错误。不是 JUnit 标准断言。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-288（单选题）

- **学习阶段**：AOP、MVC、事务、数据访问、测试
- **主题**：Mockito
- **认知层级**：认识
- **难度**：易
- **前置题**：SPRING2-061

Mockito 中创建一个 Mock 对象常用哪个方法？

A. mock()
B. fakeBean()
C. stubOnly()
D. replaceAll()

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第26页
- **来源口径**：课件

**解析：** Mockito.mock(Class) 创建指定类型的模拟对象。

**选项辨析：**

- A：正确。mock 是 Mockito 标准 API。
- B：错误。不是通用 Mockito API。
- C：错误。不是创建 Mock 的方法。
- D：错误。不是 Mockito 方法。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-289（单选题）

- **学习阶段**：AOP、MVC、事务、数据访问、测试
- **主题**：Mockito
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-061

Mockito 的 when(...).thenReturn(...) 主要用于？

A. 设定 Mock 方法的返回值
B. 启动 Spring 容器
C. 提交数据库事务
D. 扫描 Controller

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第26页
- **来源口径**：课件

**解析：** when/thenReturn 定义桩行为。

**选项辨析：**

- A：正确。可控制模拟依赖在测试中的返回结果。
- B：错误。不负责启动容器。
- C：错误。不提交真实事务。
- D：错误。不做组件扫描。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-290（单选题）

- **学习阶段**：AOP、MVC、事务、数据访问、测试
- **主题**：Mockito 验证
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-061

Mockito.verify(mock).save(x) 用于验证什么？

A. save 是否被调用
B. save 一定返回 true
C. 数据库已经提交
D. Controller 已渲染页面

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第26页
- **来源口径**：课件

**解析：** verify 检查指定交互是否按预期发生。

**选项辨析：**

- A：正确。验证调用次数或参数是其用途。
- B：错误。返回值需另行配置或断言。
- C：错误。Mock 不代表真实数据库提交。
- D：错误。与视图渲染无关。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-291（单选题）

- **学习阶段**：AOP、MVC、事务、数据访问、测试
- **主题**：Controller 注解
- **认知层级**：认识
- **难度**：易
- **前置题**：SPRING2-061

@RestController 等价于组合了什么？

A. @Controller 与 @ResponseBody
B. @Service 与 @Repository
C. @Bean 与 @Configuration
D. @RequestBody 与 @RequestParam

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第26页
- **来源口径**：课件

**解析：** @RestController 默认让处理方法返回值写入响应体。

**选项辨析：**

- A：正确。它是两个注解的组合语义。
- B：错误。服务和仓储注解职责不同。
- C：错误。配置注解组合不同。
- D：错误。参数绑定注解不是其组成。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-292（单选题）

- **学习阶段**：AOP、MVC、事务、数据访问、测试
- **主题**：请求映射
- **认知层级**：认识
- **难度**：易
- **前置题**：SPRING2-061

@GetMapping("/users") 最主要限定的是？

A. HTTP GET 请求及路径 /users
B. 所有 POST 请求
C. 数据库表 users
D. 静态资源目录

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第26页
- **来源口径**：课件

**解析：** @GetMapping 是 GET 请求映射的组合注解。

**选项辨析：**

- A：正确。同时限定方法和路径。
- B：错误。POST 应使用 @PostMapping。
- C：错误。与表名无直接关系。
- D：错误。不是静态资源配置。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-293（单选题）

- **学习阶段**：AOP、MVC、事务、数据访问、测试
- **主题**：参数绑定
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-061

从查询参数 ?page=2 读取 page，常用注解是？

A. @RequestParam
B. @PathVariable
C. @RequestBody
D. @CookieValueOnly

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第26页
- **来源口径**：课件

**解析：** @RequestParam 绑定查询参数或表单参数。

**选项辨析：**

- A：正确。适合读取 page=2。
- B：错误。@PathVariable 读取路径变量。
- C：错误。@RequestBody 读取请求体。
- D：错误。不存在该标准注解。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-294（单选题）

- **学习阶段**：AOP、MVC、事务、数据访问、测试
- **主题**：参数绑定
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-061

路径 /users/42 中读取 42，常用注解是？

A. @PathVariable
B. @RequestParam
C. @RequestHeader
D. @ModelAttributeOnly

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第26页
- **来源口径**：课件

**解析：** @PathVariable 绑定 URI 模板中的变量。

**选项辨析：**

- A：正确。可读取路径片段。
- B：错误。查询参数应使用 @RequestParam。
- C：错误。请求头应使用 @RequestHeader。
- D：错误。不存在该标准注解。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-295（单选题）

- **学习阶段**：AOP、MVC、事务、数据访问、测试
- **主题**：请求体
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-061

将 JSON 请求体反序列化为 Java 对象通常使用？

A. @RequestBody
B. @PathVariable
C. @RequestAttribute
D. @ResponseStatusOnly

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第26页
- **来源口径**：课件

**解析：** @RequestBody 表示从 HTTP body 读取并转换参数。

**选项辨析：**

- A：正确。适合 JSON 等请求体。
- B：错误。不读取请求体。
- C：错误。读取服务端请求属性。
- D：错误。不是请求体绑定注解。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-296（单选题）

- **学习阶段**：AOP、MVC、事务、数据访问、测试
- **主题**：响应状态
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-061

在 Controller 方法上指定成功响应状态码，常用注解是？

A. @ResponseStatus
B. @StatusCodeOnly
C. @HttpCode
D. @ResponseHeaderOnly

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第26页
- **来源口径**：课件

**解析：** @ResponseStatus 可声明方法或异常对应的 HTTP 状态。

**选项辨析：**

- A：正确。用于明确响应状态。
- B：错误。不是 Spring 标准注解。
- C：错误。不是 Spring MVC 常用注解。
- D：错误。不能替代响应体设置。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-299（单选题）

- **学习阶段**：AOP、MVC、事务、数据访问、测试
- **主题**：WebFlux
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-061

WebFlux的核心编程模型更接近什么？

A. 非阻塞响应式流
B. 只允许同步Servlet调用
C. 只支持JDBC阻塞模型
D. 只用于批处理

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第13页
- **来源口径**：官方文档扩展

**解析：** WebFlux基于Reactive Streams，常用Mono和Flux表达异步数据流。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：错误。该选项不是本题正确依据。
- C：错误。该选项不是本题正确依据。
- D：错误。该选项不是本题正确依据。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

## 多选题

### SPRING2-213（多选题）

- **学习阶段**：AOP、MVC、事务、数据访问、测试
- **主题**：AOP 组成
- **认知层级**：认识
- **难度**：易
- **前置题**：SPRING2-061

Spring AOP 中常见的组成概念包括哪些？

A. 切面
B. 切点
C. 通知
D. 数据库索引

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第26页
- **来源口径**：课件

**解析：** 切面、切点和通知共同描述横切逻辑，数据库索引不属于 AOP 组成。

**选项辨析：**

- A：正确。封装横切关注点。
- B：正确。定义匹配范围。
- C：正确。定义何时执行以及执行什么。
- D：错误。是数据库结构概念。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-214（多选题）

- **学习阶段**：AOP、MVC、事务、数据访问、测试
- **主题**：MVC 拦截器
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-061

拦截器适合做哪些工作？

A. 登录态检查
B. 请求耗时记录
C. 统一注入 Trace ID
D. 直接替代 Service 业务规则

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第26页
- **来源口径**：课件

**解析：** 拦截器适合请求级横切处理，不应承载核心业务规则。

**选项辨析：**

- A：正确。可在请求前检查身份。
- B：正确。可在前后记录耗时。
- C：正确。可建立链路上下文。
- D：错误。核心业务应放在 Service。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-215（多选题）

- **学习阶段**：AOP、MVC、事务、数据访问、测试
- **主题**：AOP 适用场景
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-061

哪些场景适合使用 AOP 统一处理？

A. 审计日志
B. 权限校验
C. 事务边界
D. 核心订单计算公式本身

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第26页
- **来源口径**：课件

**解析：** 横切且与核心业务相对独立的行为适合 AOP，核心公式应显式保留在领域逻辑中。

**选项辨析：**

- A：正确。跨模块重复出现。
- B：正确。可统一拦截。
- C：正确。适合声明式控制。
- D：错误。核心规则需要清晰可见并可直接测试。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-216（多选题）

- **学习阶段**：AOP、MVC、事务、数据访问、测试
- **主题**：AOP能力
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-061

Spring AOP适合处理哪些横切关注点？

A. 事务
B. 日志
C. 权限
D. 修改任意字段访问而无需织入

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第13页
- **来源口径**：官方文档扩展

**解析：** 事务、日志和权限是典型方法级横切关注点，字段拦截需更底层技术。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：正确。该选项符合官方语义。
- C：正确。该选项符合官方语义。
- D：错误。该选项不符合本题场景。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-224（多选题）

- **学习阶段**：AOP、MVC、事务、数据访问、测试
- **主题**：切点表达式
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-061

切点表达式可以根据哪些条件匹配方法？

A. 包和类范围
B. 方法名和参数
C. 方法上的注解
D. 数据库返回行数

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第26页
- **来源口径**：课件

**解析：** Spring 切点可按签名、类型、注解等条件匹配，数据库结果不是切点条件。

**选项辨析：**

- A：正确。within/execution 可按类型范围匹配。
- B：正确。方法签名可约束名称和参数。
- C：正确。@annotation 可按注解匹配。
- D：错误。数据库运行结果不参与静态匹配。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-232（多选题）

- **学习阶段**：AOP、MVC、事务、数据访问、测试
- **主题**：通知类型
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-061

以下哪些属于 Spring AOP 常见通知类型？

A. 前置通知
B. 返回通知
C. 异常通知
D. 建表通知

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第26页
- **来源口径**：课件

**解析：** 前置、返回、异常和最终/环绕是常见通知，建表通知不是 AOP 类型。

**选项辨析：**

- A：正确。目标方法前执行。
- B：正确。正常返回后执行。
- C：正确。异常退出时执行。
- D：错误。不是 Spring AOP 通知。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-233（多选题）

- **学习阶段**：AOP、MVC、事务、数据访问、测试
- **主题**：环绕通知
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-061

环绕通知可以完成哪些工作？

A. 控制目标方法是否执行
B. 在执行前后记录耗时
C. 修改参数或返回值
D. 自动创建数据库表

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第26页
- **来源口径**：课件

**解析：** 环绕通知拥有最完整的调用控制能力，但不负责数据库建表。

**选项辨析：**

- A：正确。可决定是否调用 proceed。
- B：正确。可围绕调用测量耗时。
- C：正确。可包装参数和结果。
- D：错误。不负责数据库 DDL。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-234（多选题）

- **学习阶段**：AOP、MVC、事务、数据访问、测试
- **主题**：环绕通知
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-061

环绕通知中可以安全实现哪些能力？

A. 执行前后计时
B. 统一捕获并记录异常后继续抛出
C. 根据条件短路调用
D. 无条件吞掉所有异常

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第26页
- **来源口径**：课件

**解析：** 环绕通知可控制调用，但不应无条件吞异常或改变业务语义。

**选项辨析：**

- A：正确。可测量目标执行时间。
- B：正确。记录后重新抛出可保持错误语义。
- C：正确。可按条件拒绝调用。
- D：错误。吞异常会让调用方误判成功。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-241（多选题）

- **学习阶段**：AOP、MVC、事务、数据访问、测试
- **主题**：代理选择
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-061

关于 JDK 动态代理和 CGLIB，哪些说法正确？

A. JDK 代理依赖接口
B. CGLIB 通过生成子类增强类
C. final 类或方法会限制 CGLIB 覆盖
D. 二者都是数据库连接池

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第26页
- **来源口径**：课件

**解析：** 两种代理方式都服务于对象增强，final 会限制基于继承的 CGLIB。

**选项辨析：**

- A：正确。JDK 代理面向接口。
- B：正确。CGLIB 基于子类。
- C：正确。final 无法被子类覆盖。
- D：错误。与连接池无关。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-242（多选题）

- **学习阶段**：AOP、MVC、事务、数据访问、测试
- **主题**：AOP 与事务
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-061

关于声明式事务和 AOP 的关系，哪些说法正确？

A. 事务拦截通常由代理实现
B. 事务边界可被切点匹配
C. 同类 this 调用可能绕过事务代理
D. 事务注解会修改 Java 字节码源文件

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第26页
- **来源口径**：课件

**解析：** Spring 声明式事务建立在代理拦截机制上，并受自调用限制。

**选项辨析：**

- A：正确。代理负责拦截和事务管理。
- B：正确。方法或类可作为切点。
- C：正确。this 调用不经过外部代理。
- D：错误。运行时代理不修改源文件。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-243（多选题）

- **学习阶段**：AOP、MVC、事务、数据访问、测试
- **主题**：AOP 限制
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-061

基于代理的 Spring AOP 需要注意哪些限制？

A. private 方法通常无法被代理拦截
B. final 方法不能被 CGLIB 覆盖
C. 同类自调用可能绕过通知
D. 任意字段读写都会自动织入

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第26页
- **来源口径**：课件

**解析：** Spring AOP 代理受可覆盖方法和代理入口限制，不是任意字节码织入。

**选项辨析：**

- A：正确。代理无法从外部拦截 private 方法。
- B：正确。final 方法不可重写。
- C：正确。this 调用绕过代理。
- D：错误。字段读写不是默认连接点。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-245（多选题）

- **学习阶段**：AOP、MVC、事务、数据访问、测试
- **主题**：Spring事务
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-061

声明式事务排查应查看哪些信息？

A. 调用是否经过代理
B. 异常是否匹配回滚规则
C. 事务管理器是否正确配置
D. 只看方法上有没有注解

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第13页
- **来源口径**：官方文档扩展

**解析：** 注解只是入口，代理、规则和事务管理器共同决定行为。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：正确。该选项符合官方语义。
- C：正确。该选项符合官方语义。
- D：错误。该选项不符合本题场景。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-247（多选题）

- **学习阶段**：AOP、MVC、事务、数据访问、测试
- **主题**：MyBatis 事务
- **认知层级**：分析
- **难度**：难
- **前置题**：SPRING2-061

MyBatis 与 Spring 事务集成时，哪些配置或习惯有助于保持一致性？

A. 使用统一事务管理器
B. 让同一业务操作使用同一数据源事务
C. 对异常回滚规则进行明确设计
D. 在事务中随意开启独立连接提交

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第26页
- **来源口径**：课件

**解析：** 统一资源、明确回滚和避免独立提交才能使事务边界可控。

**选项辨析：**

- A：正确。集中管理提交回滚。
- B：正确。保证操作处于同一事务资源。
- C：正确。避免异常场景语义不清。
- D：错误。独立提交会破坏原子性。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-254（多选题）

- **学习阶段**：AOP、MVC、事务、数据访问、测试
- **主题**：Spring事务
- **认知层级**：分析
- **难度**：难
- **前置题**：SPRING2-061

事务隔离实践中，正确的有？

A. 提高隔离可能降低并发
B. 数据库实际支持会影响效果
C. 只读语义不等于所有数据库禁止写
D. 隔离级别能解决所有分布式一致性

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第13页
- **来源口径**：官方文档扩展

**解析：** 隔离是单数据源并发语义，不能替代跨服务一致性设计。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：正确。该选项符合官方语义。
- C：正确。该选项符合官方语义。
- D：错误。该选项不符合本题场景。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-259（多选题）

- **学习阶段**：AOP、MVC、事务、数据访问、测试
- **主题**：MyBatis
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-061

Spring 集成 MyBatis 时，常见配置或组件包括哪些？

A. SqlSessionFactory
B. Mapper 接口
C. @MapperScan
D. ViewResolver

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第26页
- **来源口径**：课件

**解析：** SqlSessionFactory、Mapper 和扫描配置属于 MyBatis 集成，ViewResolver 属于 MVC 视图。

**选项辨析：**

- A：正确。创建 MyBatis 会话工厂。
- B：正确。定义数据访问接口。
- C：正确。扫描并注册 Mapper。
- D：错误。负责视图解析而非 MyBatis。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-260（多选题）

- **学习阶段**：AOP、MVC、事务、数据访问、测试
- **主题**：MVC 核心组件
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-061

Spring MVC 请求处理链中常见的组件包括哪些？

A. DispatcherServlet
B. HandlerMapping
C. HandlerAdapter
D. ViewResolver

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第26页
- **来源口径**：课件

**解析：** 这些组件共同完成请求分发和处理；ViewResolver 是视图阶段组件。

**选项辨析：**

- A：正确。统一接收请求。
- B：正确。寻找处理器。
- C：正确。适配并调用处理器。
- D：错误。解析逻辑视图。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-261（多选题）

- **学习阶段**：AOP、MVC、事务、数据访问、测试
- **主题**：MVC 参数
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-061

Spring MVC 可用于绑定请求数据的注解包括哪些？

A. @RequestParam
B. @PathVariable
C. @RequestBody
D. @RequestMappingOnly

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第26页
- **来源口径**：课件

**解析：** 三者分别处理查询参数、路径变量和请求体，最后一个不是标准注解。

**选项辨析：**

- A：正确。绑定查询或表单参数。
- B：正确。绑定 URI 路径变量。
- C：正确。绑定 JSON 等请求体。
- D：错误。不存在该标准注解。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-262（多选题）

- **学习阶段**：AOP、MVC、事务、数据访问、测试
- **主题**：MVC 响应
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-061

Controller 返回 JSON 响应时，哪些机制可能参与？

A. @ResponseBody
B. @RestController
C. HttpMessageConverter
D. ViewResolver 必然渲染模板

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第26页
- **来源口径**：课件

**解析：** 响应体模式依赖消息转换器，通常不需要模板视图解析。

**选项辨析：**

- A：正确。标记返回值写入响应体。
- B：正确。组合了 Controller 和 ResponseBody。
- C：正确。完成对象序列化。
- D：错误。JSON 响应不必经过模板解析。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-263（多选题）

- **学习阶段**：AOP、MVC、事务、数据访问、测试
- **主题**：MVC 异常
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-061

统一处理 Controller 异常时，哪些做法正确？

A. 使用 @ControllerAdvice
B. 使用 @ExceptionHandler
C. 返回统一错误结构
D. 把完整堆栈直接返回用户

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第26页
- **来源口径**：课件

**解析：** 集中处理和统一结构改善可维护性，堆栈应记录在服务端而非直接泄露。

**选项辨析：**

- A：正确。提供全局处理器。
- B：正确。声明异常到处理方法的映射。
- C：正确。便于客户端稳定解析。
- D：错误。会暴露内部实现和敏感信息。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-264（多选题）

- **学习阶段**：AOP、MVC、事务、数据访问、测试
- **主题**：数据校验
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-061

Bean Validation 在 MVC 中生效通常需要哪些条件？

A. DTO 字段声明约束
B. 参数上使用 @Valid 或 @Validated
C. 校验失败后由异常处理器统一返回
D. 仅在前端写提示即可

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第26页
- **来源口径**：课件

**解析：** 约束声明、触发校验和统一错误处理共同构成服务端校验闭环。

**选项辨析：**

- A：正确。定义规则。
- B：正确。激活方法参数校验。
- C：正确。便于形成稳定错误响应。
- D：错误。前端校验不能替代服务端校验。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-265（多选题）

- **学习阶段**：AOP、MVC、事务、数据访问、测试
- **主题**：MockMvc
- **认知层级**：分析
- **难度**：难
- **前置题**：SPRING2-061

MockMvc 测试中可以验证哪些内容？

A. HTTP 状态码
B. JSON 响应字段
C. Controller 映射
D. 生产服务器硬件性能

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第26页
- **来源口径**：课件

**解析：** MockMvc 关注 MVC 请求处理结果，不用于测量生产硬件性能。

**选项辨析：**

- A：正确。检查 status。
- B：正确。检查 JSONPath 或响应体。
- C：正确。验证 URL 与方法映射。
- D：错误。硬件性能需专门压测。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-266（多选题）

- **学习阶段**：AOP、MVC、事务、数据访问、测试
- **主题**：MVC 请求链
- **认知层级**：分析
- **难度**：难
- **前置题**：SPRING2-061

一次典型 Spring MVC 请求可能经历哪些阶段？

A. DispatcherServlet 接收请求
B. HandlerMapping 查找处理器
C. HandlerAdapter 调用处理器
D. ViewResolver 或消息转换器生成响应

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第26页
- **来源口径**：课件

**解析：** 请求依次经过前端控制器、映射、适配调用及视图/消息响应阶段。

**选项辨析：**

- A：正确。统一入口。
- B：正确。确定处理器。
- C：正确。适配器完成调用。
- D：错误。根据返回模式生成响应。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-267（多选题）

- **学习阶段**：AOP、MVC、事务、数据访问、测试
- **主题**：MVC 安全
- **认知层级**：分析
- **难度**：难
- **前置题**：SPRING2-061

对 Web 接口进行基础安全治理时，哪些措施合理？

A. 校验并限制上传文件类型和大小
B. 对敏感日志脱敏
C. 统一异常响应避免堆栈泄露
D. 把认证信息放在 URL 查询参数中

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第26页
- **来源口径**：课件

**解析：** 输入约束、日志保护和错误信息控制可降低常见风险。

**选项辨析：**

- A：正确。减少上传攻击面。
- B：正确。保护隐私和凭据。
- C：正确。防止内部实现外泄。
- D：错误。URL 易被日志、历史记录和代理记录。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-268（多选题）

- **学习阶段**：AOP、MVC、事务、数据访问、测试
- **主题**：日志上下文
- **认知层级**：分析
- **难度**：难
- **前置题**：SPRING2-061

为了将一次 MVC 请求与 MyBatis SQL 日志关联，适合记录哪些信息？

A. Trace ID
B. 请求路径和业务标识
C. 必要的耗时信息
D. 完整密码

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第26页
- **来源口径**：课件

**解析：** 跨层日志应共享关联标识并控制敏感字段。

**选项辨析：**

- A：正确。可串联请求链路。
- B：正确。便于定位具体业务。
- C：正确。帮助分析性能。
- D：错误。不应记录密码。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-269（多选题）

- **学习阶段**：AOP、MVC、事务、数据访问、测试
- **主题**：MVC 参数校验
- **认知层级**：分析
- **难度**：难
- **前置题**：SPRING2-061

接口参数校验失败时，服务端通常应做到哪些事？

A. 返回明确字段级错误
B. 使用统一错误码或结构
C. 记录必要的请求关联信息
D. 把 Java 堆栈直接返回

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第26页
- **来源口径**：课件

**解析：** 校验错误应可读、可解析、可追踪，内部堆栈不应外泄。

**选项辨析：**

- A：正确。帮助用户修正字段。
- B：正确。便于客户端统一处理。
- C：正确。支持日志关联。
- D：错误。会泄露内部实现。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-273（多选题）

- **学习阶段**：AOP、MVC、事务、数据访问、测试
- **主题**：MyBatis 映射
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-061

MyBatis 结果映射问题可以通过哪些方式解决？

A. SQL 列别名
B. resultMap
C. 统一 Java 属性命名策略
D. 提高日志级别

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第26页
- **来源口径**：课件

**解析：** 列别名、resultMap 和命名策略都能解决列属性对应，日志级别不能改变映射。

**选项辨析：**

- A：正确。直接把列名改成属性名。
- B：正确。显式定义复杂映射。
- C：正确。统一命名可减少转换配置。
- D：错误。日志不参与结果转换。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-278（多选题）

- **学习阶段**：AOP、MVC、事务、数据访问、测试
- **主题**：日志
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-061

使用日志框架时，哪些实践较好？

A. 使用参数化日志占位符
B. 按环境设置级别
C. 避免记录密码
D. 大量使用 System.out 替代日志框架

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第26页
- **来源口径**：课件

**解析：** 参数化、分环境和脱敏是常见日志实践。

**选项辨析：**

- A：正确。减少无谓字符串拼接。
- B：正确。开发与生产需求不同。
- C：正确。避免敏感信息泄露。
- D：错误。System.out 难以统一管理和检索。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-281（多选题）

- **学习阶段**：AOP、MVC、事务、数据访问、测试
- **主题**：JUnit
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-061

JUnit 5 测试中可以使用哪些机制？

A. @BeforeEach 准备数据
B. @AfterEach 清理资源
C. assertThrows 验证异常
D. 用 @Autowired 代替所有断言

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第26页
- **来源口径**：课件

**解析：** 生命周期回调和断言 API 用于组织、验证测试，依赖注入不能替代断言。

**选项辨析：**

- A：正确。每个测试前执行。
- B：正确。每个测试后清理。
- C：正确。检查异常类型或行为。
- D：错误。注入依赖不等于验证结果。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-282（多选题）

- **学习阶段**：AOP、MVC、事务、数据访问、测试
- **主题**：JUnit 分层
- **认知层级**：分析
- **难度**：难
- **前置题**：SPRING2-061

为 Service 编写单元测试时，哪些依赖隔离策略合理？

A. Mock 外部客户端
B. 使用内存或测试替身数据
C. 验证业务结果和关键交互
D. 直接依赖生产数据库数据

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第26页
- **来源口径**：课件

**解析：** 单元测试应隔离外部环境并验证可观察行为。

**选项辨析：**

- A：正确。避免真实网络副作用。
- B：正确。提高可重复性。
- C：正确。兼顾状态和协作行为。
- D：错误。生产数据会导致不稳定和风险。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-283（多选题）

- **学习阶段**：AOP、MVC、事务、数据访问、测试
- **主题**：Mockito
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-061

Mockito 单元测试中，哪些做法合理？

A. when 配置桩返回值
B. verify 校验交互
C. 用 ArgumentCaptor 检查参数
D. 让 Mock 连接真实生产数据库

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第26页
- **来源口径**：课件

**解析：** Mock 应隔离被测单元并验证行为，不应连接生产数据库。

**选项辨析：**

- A：正确。配置依赖行为。
- B：正确。验证调用次数和顺序等交互。
- C：正确。捕获并断言传入参数。
- D：错误。会破坏测试隔离和安全。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-284（多选题）

- **学习阶段**：AOP、MVC、事务、数据访问、测试
- **主题**：第三方集成测试
- **认知层级**：分析
- **难度**：难
- **前置题**：SPRING2-061

测试外部支付客户端时，哪些策略可减少对真实服务的依赖？

A. 用 Mockito Mock 客户端
B. 用 WireMock 等 Stub 服务模拟响应
C. 覆盖超时和错误响应
D. 每次测试都调用真实扣款接口

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第26页
- **来源口径**：课件

**解析：** 隔离外部依赖并覆盖异常分支可提高测试稳定性和安全性。

**选项辨析：**

- A：正确。单元测试可隔离客户端。
- B：正确。Stub 服务可进行契约或集成测试。
- C：正确。异常分支是集成风险重点。
- D：错误。真实扣款有数据和费用风险。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-285（多选题）

- **学习阶段**：AOP、MVC、事务、数据访问、测试
- **主题**：Spring测试
- **认知层级**：分析
- **难度**：难
- **前置题**：SPRING2-061

Spring测试体系中，合理的有？

A. 测试上下文可缓存
B. MockMvc可测试MVC链路
C. 测试事务可回滚
D. 所有测试都必须启动真实生产依赖

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第13页
- **来源口径**：官方文档扩展

**解析：** 测试框架提供上下文缓存和隔离能力，不应把所有测试都绑定真实外部依赖。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：正确。该选项符合官方语义。
- C：正确。该选项符合官方语义。
- D：错误。该选项不符合本题场景。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-286（多选题）

- **学习阶段**：AOP、MVC、事务、数据访问、测试
- **主题**：Spring测试
- **认知层级**：分析
- **难度**：难
- **前置题**：SPRING2-061

测试上下文设计中，正确的有？

A. 共享上下文可减少启动成本
B. 测试切片缩小装配范围
C. 外部依赖可用Testcontainers或Mock隔离
D. 所有测试必须使用相同上下文

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第13页
- **来源口径**：官方文档扩展

**解析：** 缓存和切片是性能手段，外部依赖应按测试目标选择。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：正确。该选项符合官方语义。
- C：正确。该选项符合官方语义。
- D：错误。该选项不符合本题场景。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-297（多选题）

- **学习阶段**：AOP、MVC、事务、数据访问、测试
- **主题**：AOP 风险
- **认知层级**：分析
- **难度**：难
- **前置题**：SPRING2-061

设计审计切面时，哪些做法较为稳妥？

A. 统一记录 Trace ID 和操作名
B. 对密码等敏感字段脱敏
C. 避免在切面中吞掉业务异常
D. 把所有请求体原样写入日志

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第26页
- **来源口径**：课件

**解析：** 审计切面应增强可追踪性和安全性，同时保持异常语义。

**选项辨析：**

- A：正确。便于链路审计。
- B：正确。降低敏感信息泄露。
- C：正确。吞异常会掩盖失败。
- D：错误。原样记录可能泄露隐私。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-298（多选题）

- **学习阶段**：AOP、MVC、事务、数据访问、测试
- **主题**：REST 设计
- **认知层级**：分析
- **难度**：难
- **前置题**：SPRING2-061

设计 REST 接口时，哪些做法合理？

A. 使用合适的 HTTP 方法
B. 返回清晰的状态码
C. 对重复写操作设计幂等策略
D. 把异常堆栈放进响应

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第26页
- **来源口径**：课件

**解析：** HTTP 语义、状态码和幂等性提升接口可用性，堆栈不应外泄。

**选项辨析：**

- A：正确。方法语义应匹配操作。
- B：正确。状态码帮助调用方判断结果。
- C：正确。降低重试造成重复写的风险。
- D：错误。会泄露内部实现。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

### SPRING2-300（多选题）

- **学习阶段**：AOP、MVC、事务、数据访问、测试
- **主题**：WebFlux
- **认知层级**：分析
- **难度**：难
- **前置题**：SPRING2-061

响应式链路中，正确的有？

A. Mono和Flux是Publisher类型
B. 阻塞API应隔离到专用线程池
C. 背压帮助控制生产速度
D. 响应式代码必须手工创建一个线程对应一个请求

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第13页
- **来源口径**：官方文档扩展

**解析：** 响应式执行模型由框架调度，重点是避免阻塞和正确处理背压。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：正确。该选项符合官方语义。
- C：正确。该选项符合官方语义。
- D：错误。该选项不符合本题场景。

**官方参考：** https://docs.spring.io/spring-framework/reference/core/beans.html

# 第4阶段：Spring Boot 工程化

## 单选题

### SPRING2-301（单选题）

- **学习阶段**：Spring Boot 工程化
- **主题**：Spring Boot定位
- **认知层级**：认识
- **难度**：易
- **前置题**：SPRING2-211

Spring Boot 主要解决传统 Spring 项目中的哪类痛点？

A. 消除所有业务代码
B. 减少样板配置并快速搭建应用
C. 替代 Java 语言
D. 只提供数据库驱动

- **答案**：B
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第33页
- **来源口径**：课件

**解析：** Spring Boot 通过约定、Starter、自动配置和内嵌服务器降低工程搭建成本。

**选项辨析：**

- A：错误。它不编写业务逻辑。
- B：正确。符合 Spring Boot 的工程化定位。
- C：错误。Spring Boot 仍使用 Java 或 Kotlin。
- D：错误。数据库只是可集成场景之一。

**官方参考：** https://docs.spring.io/spring-boot/reference/using/auto-configuration.html

### SPRING2-302（单选题）

- **学习阶段**：Spring Boot 工程化
- **主题**：约定大于配置
- **认知层级**：认识
- **难度**：易
- **前置题**：SPRING2-211

“约定大于配置”在 Spring Boot 中最直接的含义是什么？

A. 所有配置都被禁止
B. 遵循默认约定时无需重复声明大量配置
C. 只能使用 XML
D. 必须手写每个 Bean

- **答案**：B
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第33页
- **来源口径**：课件

**解析：** 开发者接受合理默认值即可启动应用，需要差异化时再覆盖配置。

**选项辨析：**

- A：错误。仍可配置和覆盖。
- B：正确。正确描述默认约定的价值。
- C：错误。Boot 并不要求 XML。
- D：错误。自动配置会减少手写 Bean。

**官方参考：** https://docs.spring.io/spring-boot/reference/using/auto-configuration.html

### SPRING2-303（单选题）

- **学习阶段**：Spring Boot 工程化
- **主题**：Initializr定位
- **认知层级**：认识
- **难度**：易
- **前置题**：SPRING2-211

Spring Initializr 的主要用途是什么？

A. 在线监控生产指标
B. 生成规范的 Spring Boot 项目骨架
C. 替代 Maven 编译器
D. 把 Java 转为 Kotlin

- **答案**：B
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第34页
- **来源口径**：课件

**解析：** Initializr 根据元数据和依赖选择生成可导入 IDE 的项目骨架。

**选项辨析：**

- A：错误。监控通常由 Actuator 等负责。
- B：正确。符合脚手架用途。
- C：错误。Maven 仍负责构建。
- D：错误。不会转换源码语言。

**官方参考：** https://docs.spring.io/spring-boot/reference/using/auto-configuration.html

### SPRING2-304（单选题）

- **学习阶段**：Spring Boot 工程化
- **主题**：Initializr元数据
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-211

在 Initializr 中选择 Java、构建工具和依赖，最终主要影响什么？

A. 项目骨架与依赖清单
B. 数据库中的业务数据
C. 生产服务器密码
D. 浏览器缓存

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第34页
- **来源口径**：课件

**解析：** 这些选项会生成 build 文件、源码目录和相应依赖声明。

**选项辨析：**

- A：正确。符合生成结果。
- B：错误。Initializr 不写业务数据。
- C：错误。不会生成秘密凭证。
- D：错误。与浏览器缓存无关。

**官方参考：** https://docs.spring.io/spring-boot/reference/using/auto-configuration.html

### SPRING2-305（单选题）

- **学习阶段**：Spring Boot 工程化
- **主题**：Initializr导入
- **认知层级**：认识
- **难度**：易
- **前置题**：SPRING2-211

Initializr 下载的项目压缩包通常应如何开始使用？

A. 解压后导入 IDE
B. 直接作为图片打开
C. 上传到数据库
D. 改名为 .txt

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第34页
- **来源口径**：课件

**解析：** 解压后的标准工程可被 IntelliJ IDEA 或 Eclipse 识别并导入。

**选项辨析：**

- A：正确。符合课件流程。
- B：错误。不是图片资源。
- C：错误。不是数据库备份。
- D：错误。改扩展名会破坏工程。

**官方参考：** https://docs.spring.io/spring-boot/reference/using/auto-configuration.html

### SPRING2-306（单选题）

- **学习阶段**：Spring Boot 工程化
- **主题**：Starter概念
- **认知层级**：认识
- **难度**：易
- **前置题**：SPRING2-211

Spring Boot Starter 本质上是什么？

A. 单个业务 Bean
B. 面向场景预封装的一组依赖坐标
C. 数据库表结构
D. 只能运行一次的脚本

- **答案**：B
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第35页
- **来源口径**：课件

**解析：** Starter 将某场景常用的库和版本关系集中起来，便于一站式引入。

**选项辨析：**

- A：错误。Starter 不等于业务 Bean。
- B：正确。符合起步依赖定义。
- C：错误。不负责建表。
- D：错误。依赖可被持续使用。

**官方参考：** https://docs.spring.io/spring-boot/reference/using/auto-configuration.html

### SPRING2-307（单选题）

- **学习阶段**：Spring Boot 工程化
- **主题**：starter-web
- **认知层级**：认识
- **难度**：易
- **前置题**：SPRING2-211

开发 Spring MVC Web 应用时，最典型的起步依赖是？

A. spring-boot-starter-web
B. spring-boot-starter-test
C. spring-boot-starter-parent
D. spring-boot-starter-log4j2

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第35页
- **来源口径**：课件

**解析：** starter-web 汇集 Spring MVC、Web 运行时及嵌入式容器相关依赖。

**选项辨析：**

- A：正确。符合 Web 场景。
- B：错误。用于测试。
- C：错误。负责依赖管理而非 Web 能力。
- D：错误。用于日志替换。

**官方参考：** https://docs.spring.io/spring-boot/reference/using/auto-configuration.html

### SPRING2-308（单选题）

- **学习阶段**：Spring Boot 工程化
- **主题**：starter-test
- **认知层级**：认识
- **难度**：易
- **前置题**：SPRING2-211

Spring Boot 一站式测试启动器通常包含哪组测试技术？

A. JUnit、Mockito、AssertJ 等
B. Tomcat、Jetty、Undertow
C. MySQL、Redis、Kafka
D. JDK、JRE、JVM

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第35页
- **来源口径**：课件

**解析：** starter-test 为测试范围提供 JUnit 5、Mockito、AssertJ 等常用组件。

**选项辨析：**

- A：正确。符合课件说明。
- B：错误。属于 Web 容器。
- C：错误。属于基础设施依赖。
- D：错误。是 Java 运行环境术语。

**官方参考：** https://docs.spring.io/spring-boot/reference/using/auto-configuration.html

### SPRING2-309（单选题）

- **学习阶段**：Spring Boot 工程化
- **主题**：starter-log4j2
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-211

要用 Log4j2 替换 Boot 默认的 Logback，通常需要先做什么？

A. 排除 starter-web 的默认 logging 依赖
B. 删除所有日志 API
C. 把日志写到数据库
D. 只修改文件后缀

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第36页
- **来源口径**：课件

**解析：** 默认 logging 依赖会带入 Logback，替换时需排除它再引入 starter-log4j2。

**选项辨析：**

- A：正确。符合替换步骤。
- B：错误。日志 API 不能全部删除。
- C：错误。输出目标不是替换步骤。
- D：错误。后缀无关。

**官方参考：** https://docs.spring.io/spring-boot/reference/using/auto-configuration.html

### SPRING2-310（单选题）

- **学习阶段**：Spring Boot 工程化
- **主题**：版本仲裁
- **认知层级**：认识
- **难度**：易
- **前置题**：SPRING2-211

Starter 能减少依赖版本冲突的关键原因是什么？

A. 每次运行随机选择版本
B. Spring Boot 统一管理兼容版本
C. 把所有库复制进 JDK
D. 禁止第三方库

- **答案**：B
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第35页
- **来源口径**：课件

**解析：** Boot 的依赖管理为相关组件提供经过验证的版本组合。

**选项辨析：**

- A：错误。版本选择是确定的。
- B：正确。符合版本仲裁机制。
- C：错误。不会修改 JDK。
- D：错误。仍支持第三方库。

**官方参考：** https://docs.spring.io/spring-boot/reference/using/auto-configuration.html

### SPRING2-311（单选题）

- **学习阶段**：Spring Boot 工程化
- **主题**：自动配置定义
- **认知层级**：认识
- **难度**：易
- **前置题**：SPRING2-211

Spring Boot 自动配置主要依据什么来决定是否装配组件？

A. 类路径依赖、已有 Bean 和条件注解
B. CPU 温度
C. 开发者姓名
D. 数据库行数

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第37页
- **来源口径**：课件

**解析：** 自动配置类通过条件判断环境、依赖和容器状态来决定是否提供默认 Bean。

**选项辨析：**

- A：正确。符合自动配置核心。
- B：错误。不是决定因素。
- C：错误。与配置逻辑无关。
- D：错误。不是启动条件。

**官方参考：** https://docs.spring.io/spring-boot/reference/using/auto-configuration.html

### SPRING2-312（单选题）

- **学习阶段**：Spring Boot 工程化
- **主题**：自动配置优势
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-211

引入 starter-web 后无需手工配置 Tomcat 和 MVC 基础 Bean，主要体现什么？

A. 自动配置
B. 强制继承
C. 编译器内联
D. 数据库分片

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第37页
- **来源口径**：课件

**解析：** Boot 根据 Web 依赖和环境条件装配 Web 基础设施。

**选项辨析：**

- A：正确。正确。
- B：错误。不是 Boot 必需机制。
- C：错误。与编译优化无关。
- D：错误。与数据库分片无关。

**官方参考：** https://docs.spring.io/spring-boot/reference/using/auto-configuration.html

### SPRING2-313（单选题）

- **学习阶段**：Spring Boot 工程化
- **主题**：条件装配
- **认知层级**：认识
- **难度**：易
- **前置题**：SPRING2-211

自动配置中使用条件注解的目的是什么？

A. 让配置按环境条件生效
B. 保证所有 Bean 永远创建
C. 替代 Java 编译
D. 隐藏异常

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第37页
- **来源口径**：课件

**解析：** 条件注解把配置是否启用交给类路径、Bean、属性等运行时条件。

**选项辨析：**

- A：正确。符合条件装配。
- B：错误。条件不满足时可不创建。
- C：错误。与编译无关。
- D：错误。不会以隐藏异常为目的。

**官方参考：** https://docs.spring.io/spring-boot/reference/using/auto-configuration.html

### SPRING2-314（单选题）

- **学习阶段**：Spring Boot 工程化
- **主题**：@ConditionalOnClass
- **认知层级**：认识
- **难度**：易
- **前置题**：SPRING2-211

@ConditionalOnClass 主要检查什么？

A. 指定类是否存在于类路径
B. Bean 是否已被销毁
C. HTTP 请求是否成功
D. 配置文件行数

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第38页
- **来源口径**：课件

**解析：** 只有目标类型能在类路径解析时，条件配置才可能生效。

**选项辨析：**

- A：正确。符合注解语义。
- B：错误。不是生命周期检查。
- C：错误。不是请求结果。
- D：错误。不是文本统计。

**官方参考：** https://docs.spring.io/spring-boot/reference/using/auto-configuration.html

### SPRING2-315（单选题）

- **学习阶段**：Spring Boot 工程化
- **主题**：@ConditionalOnMissingBean
- **认知层级**：认识
- **难度**：易
- **前置题**：SPRING2-211

@ConditionalOnMissingBean 的典型用途是什么？

A. 用户未提供 Bean 时提供默认实现
B. 删除用户 Bean
C. 要求 Bean 必须有两个实例
D. 只匹配配置文件

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第38页
- **来源口径**：课件

**解析：** 自动配置通常在容器缺少用户定义 Bean 时回退到默认实现。

**选项辨析：**

- A：正确。符合回退策略。
- B：错误。不会删除已有 Bean。
- C：错误。条件恰好关注缺失。
- D：错误。不是配置文件条件。

**官方参考：** https://docs.spring.io/spring-boot/reference/using/auto-configuration.html

### SPRING2-316（单选题）

- **学习阶段**：Spring Boot 工程化
- **主题**：@ConditionalOnBean
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-211

@ConditionalOnBean(DataSource.class) 表示什么？

A. 容器存在 DataSource 时才满足条件
B. 必须创建两个数据源
C. 禁止使用 DataSource
D. 只检查数据库表

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第38页
- **来源口径**：课件

**解析：** 该条件检查指定类型 Bean 是否已经在容器中。

**选项辨析：**

- A：正确。符合条件含义。
- B：错误。没有数量要求。
- C：错误。不会禁止使用。
- D：错误。不直接检查表。

**官方参考：** https://docs.spring.io/spring-boot/reference/using/auto-configuration.html

### SPRING2-317（单选题）

- **学习阶段**：Spring Boot 工程化
- **主题**：@ConditionalOnProperty
- **认知层级**：认识
- **难度**：易
- **前置题**：SPRING2-211

@ConditionalOnProperty 常用于根据什么开启配置？

A. 配置属性值
B. Java 文件大小
C. 请求 IP 的长度
D. 线程数量

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第38页
- **来源口径**：课件

**解析：** 它读取 Environment 中的属性，并可按 havingValue、matchIfMissing 等规则判断。

**选项辨析：**

- A：正确。符合注解语义。
- B：错误。不是源码统计。
- C：错误。不是 IP 规则。
- D：错误。线程数量不是默认检查项。

**官方参考：** https://docs.spring.io/spring-boot/reference/using/auto-configuration.html

### SPRING2-318（单选题）

- **学习阶段**：Spring Boot 工程化
- **主题**：@ConditionalOnWebApplication
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-211

@ConditionalOnWebApplication 主要用于判断什么？

A. 当前应用是否为 Web 应用
B. 数据库是否可写
C. 是否使用 JUnit
D. JAR 是否签名

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第38页
- **来源口径**：课件

**解析：** 该条件让 Web 专属自动配置只在 Web 环境中启用。

**选项辨析：**

- A：正确。符合用途。
- B：错误。与数据库权限无关。
- C：错误。不是测试条件。
- D：错误。不是签名检查。

**官方参考：** https://docs.spring.io/spring-boot/reference/using/auto-configuration.html

### SPRING2-319（单选题）

- **学习阶段**：Spring Boot 工程化
- **主题**：@ConditionalOnNotWebApplication
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-211

批处理专用配置不希望在 Web 环境加载，可考虑哪个条件？

A. @ConditionalOnNotWebApplication
B. @ConditionalOnClass
C. @Bean
D. @RequestMapping

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第38页
- **来源口径**：课件

**解析：** NotWebApplication 条件在非 Web 应用环境下匹配。

**选项辨析：**

- A：正确。符合场景。
- B：错误。只检查类路径。
- C：错误。用于注册 Bean。
- D：错误。用于映射请求。

**官方参考：** https://docs.spring.io/spring-boot/reference/using/auto-configuration.html

### SPRING2-320（单选题）

- **学习阶段**：Spring Boot 工程化
- **主题**：@ConditionalOnResource
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-211

只有类路径中存在特定模板文件才加载配置，应使用哪类条件？

A. @ConditionalOnResource
B. @ConditionalOnBean
C. @ConditionalOnMissingBean
D. @ConfigurationProperties

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第38页
- **来源口径**：课件

**解析：** Resource 条件检查指定资源是否可访问。

**选项辨析：**

- A：正确。符合资源检查。
- B：错误。检查 Bean。
- C：错误。检查 Bean 缺失。
- D：错误。用于属性绑定。

**官方参考：** https://docs.spring.io/spring-boot/reference/using/auto-configuration.html

### SPRING2-321（单选题）

- **学习阶段**：Spring Boot 工程化
- **主题**：@ConditionalOnExpression
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-211

根据 SpEL 表达式决定配置是否生效，适合使用什么？

A. @ConditionalOnExpression
B. @ConditionalOnClass
C. @Profile
D. @Import

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第38页
- **来源口径**：课件

**解析：** 该条件允许以表达式结果作为自动配置开关。

**选项辨析：**

- A：正确。符合表达式条件。
- B：错误。只检查类。
- C：错误。按 profile 选择。
- D：错误。导入配置但不判断表达式。

**官方参考：** https://docs.spring.io/spring-boot/reference/using/auto-configuration.html

### SPRING2-322（单选题）

- **学习阶段**：Spring Boot 工程化
- **主题**：@SpringBootApplication组成
- **认知层级**：认识
- **难度**：易
- **前置题**：SPRING2-211

@SpringBootApplication 通常组合了哪三个核心注解？

A. @Configuration、@EnableAutoConfiguration、@ComponentScan
B. @Controller、@Service、@Repository
C. @Bean、@Value、@Profile
D. @Import、@Lookup、@Order

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第39页
- **来源口径**：课件

**解析：** 它是配置类、自动配置和组件扫描能力的组合入口。

**选项辨析：**

- A：正确。符合注解组成。
- B：错误。是组件角色而非组合。
- C：错误。是其他常用注解。
- D：错误。不是该三者组合。

**官方参考：** https://docs.spring.io/spring-boot/reference/using/auto-configuration.html

### SPRING2-323（单选题）

- **学习阶段**：Spring Boot 工程化
- **主题**：@SpringBootApplication配置
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-211

在启动类上使用 @SpringBootApplication，组件扫描默认从哪里开始？

A. 启动类所在包及其子包
B. JDK 根目录
C. 所有磁盘目录
D. 只扫描 test 包

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第39页
- **来源口径**：课件

**解析：** 默认扫描启动类所在包及其下级包，因此启动类应放在合适的根包。

**选项辨析：**

- A：正确。符合默认扫描范围。
- B：错误。不会扫描 JDK。
- C：错误。扫描范围受包结构限制。
- D：错误。不只扫描测试包。

**官方参考：** https://docs.spring.io/spring-boot/reference/using/auto-configuration.html

### SPRING2-324（单选题）

- **学习阶段**：Spring Boot 工程化
- **主题**：@Configuration
- **认知层级**：认识
- **难度**：易
- **前置题**：SPRING2-211

@Configuration 标注的类主要表示什么？

A. 一个配置类，可声明 @Bean 方法
B. 一个数据库连接
C. 一个 HTTP 请求
D. 一个测试断言

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第39页
- **来源口径**：课件

**解析：** Configuration 类作为容器配置源，可通过 @Bean 注册对象。

**选项辨析：**

- A：正确。符合注解语义。
- B：错误。不是连接实例。
- C：错误。不是请求对象。
- D：错误。不是断言。

**官方参考：** https://docs.spring.io/spring-boot/reference/using/auto-configuration.html

### SPRING2-325（单选题）

- **学习阶段**：Spring Boot 工程化
- **主题**：@EnableAutoConfiguration
- **认知层级**：认识
- **难度**：易
- **前置题**：SPRING2-211

@EnableAutoConfiguration 的核心作用是什么？

A. 启用 Boot 根据条件进行自动配置
B. 开启 Java 断言
C. 把应用部署到云端
D. 禁用组件扫描

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第39页
- **来源口径**：课件

**解析：** 它导入候选自动配置并按条件选择实际生效的配置。

**选项辨析：**

- A：正确。符合作用。
- B：错误。与 assert 关键字无关。
- C：错误。不负责云部署。
- D：错误。不会直接禁用扫描。

**官方参考：** https://docs.spring.io/spring-boot/reference/using/auto-configuration.html

### SPRING2-326（单选题）

- **学习阶段**：Spring Boot 工程化
- **主题**：可执行Jar
- **认知层级**：认识
- **难度**：易
- **前置题**：SPRING2-211

Spring Boot 的内嵌服务器让应用常见的部署形态变成什么？

A. 可执行 JAR，通过 java -jar 启动
B. 必须部署到外部 EJB 容器
C. 只能运行在浏览器
D. 必须复制成 WAR 到共享目录

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第40页
- **来源口径**：课件

**解析：** 内嵌容器和启动器使应用可打包为独立可执行 JAR。

**选项辨析：**

- A：正确。符合课件部署方式。
- B：错误。不要求 EJB 容器。
- C：错误。浏览器不是服务器。
- D：错误。WAR 是另一种部署形态。

**官方参考：** https://docs.spring.io/spring-boot/reference/using/auto-configuration.html

### SPRING2-327（单选题）

- **学习阶段**：Spring Boot 工程化
- **主题**：内嵌Tomcat
- **认知层级**：认识
- **难度**：易
- **前置题**：SPRING2-211

starter-web 默认常见的内嵌 Servlet 容器是什么？

A. Tomcat
B. Nginx
C. Redis
D. MySQL

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第40页
- **来源口径**：课件

**解析：** Spring Boot Web starter 默认带来嵌入式 Tomcat（也可替换为其他容器）。

**选项辨析：**

- A：正确。符合默认容器。
- B：错误。Nginx 是反向代理。
- C：错误。Redis 是缓存。
- D：错误。MySQL 是数据库。

**官方参考：** https://docs.spring.io/spring-boot/reference/using/auto-configuration.html

### SPRING2-328（单选题）

- **学习阶段**：Spring Boot 工程化
- **主题**：内嵌容器替换
- **认知层级**：认识
- **难度**：易
- **前置题**：SPRING2-211

要将默认 Tomcat 换成 Jetty，关键思路是什么？

A. 排除 Tomcat 依赖并引入 Jetty starter
B. 只改端口号
C. 删除 @SpringBootApplication
D. 把 Java 改成脚本

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第40页
- **来源口径**：课件

**解析：** 容器实现由依赖决定，替换需处理默认容器依赖并加入目标 starter。

**选项辨析：**

- A：正确。符合依赖替换。
- B：错误。端口不改变容器实现。
- C：错误。启动注解仍需保留。
- D：错误。与语言无关。

**官方参考：** https://docs.spring.io/spring-boot/reference/using/auto-configuration.html

### SPRING2-329（单选题）

- **学习阶段**：Spring Boot 工程化
- **主题**：端口配置
- **认知层级**：认识
- **难度**：易
- **前置题**：SPRING2-211

修改 Spring Boot 内嵌 Web 服务器端口，常用哪个属性？

A. server.port
B. spring.port.name
C. http.listen.file
D. boot.server.id

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第40页
- **来源口径**：课件

**解析：** server.port 是 Boot Web 应用常用的端口配置属性。

**选项辨析：**

- A：正确。符合约定属性。
- B：错误。不是标准属性。
- C：错误。不是标准属性。
- D：错误。不是标准属性。

**官方参考：** https://docs.spring.io/spring-boot/reference/using/auto-configuration.html

### SPRING2-330（单选题）

- **学习阶段**：Spring Boot 工程化
- **主题**：ConfigurationProperties用途
- **认知层级**：认识
- **难度**：易
- **前置题**：SPRING2-211

@ConfigurationProperties 主要解决什么问题？

A. 将一组同前缀配置绑定到对象
B. 把 Bean 转成数据库表
C. 自动生成 REST 文档
D. 扫描所有日志

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **来源口径**：课件

**解析：** 它适合把层次化配置映射到类型安全的 Java 对象。

**选项辨析：**

- A：正确。符合属性绑定用途。
- B：错误。不负责 ORM。
- C：错误。不负责文档生成。
- D：错误。不负责日志扫描。

**官方参考：** https://docs.spring.io/spring-boot/reference/using/auto-configuration.html

### SPRING2-331（单选题）

- **学习阶段**：Spring Boot 工程化
- **主题**：ConfigurationProperties前缀
- **认知层级**：认识
- **难度**：易
- **前置题**：SPRING2-211

@ConfigurationProperties(prefix = "app") 的前缀作用是什么？

A. 限定绑定 app 开头的配置项
B. 指定 Bean 名称必须为 app
C. 指定 HTTP 路径
D. 选择数据库驱动

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **来源口径**：课件

**解析：** 前缀将配置键空间与目标对象属性关联起来。

**选项辨析：**

- A：正确。符合前缀语义。
- B：错误。Bean 名称由其他机制决定。
- C：错误。不是请求路径。
- D：错误。与驱动选择无直接关系。

**官方参考：** https://docs.spring.io/spring-boot/reference/using/auto-configuration.html

### SPRING2-332（单选题）

- **学习阶段**：Spring Boot 工程化
- **主题**：ConfigurationProperties注册
- **认知层级**：认识
- **难度**：易
- **前置题**：SPRING2-211

一个带 @ConfigurationProperties 的普通类要成为可注入 Bean，常见做法是什么？

A. 使用 @ConfigurationPropertiesScan 或 @EnableConfigurationProperties
B. 只写 private 字段
C. 把类放在 resources
D. 给类加 final 方法

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **来源口径**：课件

**解析：** 扫描或显式启用属性类后，绑定对象才会注册到容器。

**选项辨析：**

- A：正确。符合注册方式。
- B：错误。字段本身不会注册 Bean。
- C：错误。resources 不是组件扫描目录。
- D：错误。final 方法无关。

**官方参考：** https://docs.spring.io/spring-boot/reference/using/auto-configuration.html

### SPRING2-333（单选题）

- **学习阶段**：Spring Boot 工程化
- **主题**：属性绑定类型安全
- **认知层级**：认识
- **难度**：易
- **前置题**：SPRING2-211

相比在多个字段上散落 @Value，ConfigurationProperties 的优势之一是什么？

A. 集中表达相关配置并支持类型化绑定
B. 完全不需要配置文件
C. 只能绑定字符串
D. 自动加密所有值

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **来源口径**：课件

**解析：** 它将一组相关属性聚合为类型安全对象，便于校验与维护。

**选项辨析：**

- A：正确。符合优势。
- B：错误。仍需配置来源。
- C：错误。支持多种类型。
- D：错误。不会自动加密。

**官方参考：** https://docs.spring.io/spring-boot/reference/using/auto-configuration.html

### SPRING2-334（单选题）

- **学习阶段**：Spring Boot 工程化
- **主题**：自动配置回退
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-211

用户自己定义 DataSource Bean 后，默认 DataSource 自动配置通常会怎样？

A. 因 @ConditionalOnMissingBean 不满足而让出
B. 覆盖用户 Bean
C. 创建无数个 DataSource
D. 删除配置文件

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **来源口径**：课件

**解析：** 用户 Bean 已存在时，缺失 Bean 条件不再满足，默认配置通常回退。

**选项辨析：**

- A：正确。符合条件回退机制。
- B：错误。默认配置不应覆盖用户显式定义。
- C：错误。不会无限创建。
- D：错误。与配置文件删除无关。

**官方参考：** https://docs.spring.io/spring-boot/reference/using/auto-configuration.html

### SPRING2-335（单选题）

- **学习阶段**：Spring Boot 工程化
- **主题**：ConditionalOnClass场景
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-211

某自动配置引用 Redis 类型，但项目未引入 Redis 依赖，最合理预期是？

A. 基于类路径条件不生效
B. 必然编译通过并创建 Redis Bean
C. 自动安装 Redis
D. 删除所有缓存配置

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **来源口径**：课件

**解析：** 类不存在时 OnClass 条件不满足，可避免加载不适用配置。

**选项辨析：**

- A：正确。符合按需装配。
- B：错误。没有类型无法创建。
- C：错误。Boot 不会自动安装服务。
- D：错误。不会任意删除配置。

**官方参考：** https://docs.spring.io/spring-boot/reference/using/auto-configuration.html

### SPRING2-336（单选题）

- **学习阶段**：Spring Boot 工程化
- **主题**：ConditionalOnProperty缺省
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-211

@ConditionalOnProperty(matchIfMissing = true) 的含义更接近哪项？

A. 属性缺失时也允许条件匹配
B. 属性必须存在且为 false
C. 属性值会被删除
D. 只检查 Bean 类型

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **来源口径**：课件

**解析：** matchIfMissing 为 true 表示没有该属性时按匹配处理。

**选项辨析：**

- A：正确。符合属性条件语义。
- B：错误。与 false 无关。
- C：错误。不会删除属性。
- D：错误。不是 Bean 条件。

**官方参考：** https://docs.spring.io/spring-boot/reference/using/auto-configuration.html

### SPRING2-337（单选题）

- **学习阶段**：Spring Boot 工程化
- **主题**：启动流程
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-211

执行带有 main 方法的 Spring Boot 启动类，通常由哪个调用启动容器？

A. SpringApplication.run
B. System.gc
C. Files.copy
D. Math.random

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **来源口径**：课件

**解析：** SpringApplication.run 创建并刷新应用上下文，触发组件和自动配置。

**选项辨析：**

- A：正确。符合启动入口。
- B：错误。请求垃圾回收。
- C：错误。复制文件。
- D：错误。生成随机数。

**官方参考：** https://docs.spring.io/spring-boot/reference/using/auto-configuration.html

### SPRING2-338（单选题）

- **学习阶段**：Spring Boot 工程化
- **主题**：Starter与自动配置关系
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-211

Starter 与自动配置的关系，哪项最准确？

A. Starter 提供依赖线索，自动配置按条件装配组件
B. Starter 直接执行所有业务逻辑
C. 自动配置完全不依赖类路径
D. 二者互相排斥

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第35页
- **来源口径**：课件

**解析：** 引入 Starter 使相关类进入类路径，自动配置再根据条件启用基础设施。

**选项辨析：**

- A：正确。准确描述协作关系。
- B：错误。Starter 不承载业务逻辑。
- C：错误。类路径正是重要条件。
- D：错误。二者通常协同。

**官方参考：** https://docs.spring.io/spring-boot/reference/using/auto-configuration.html

### SPRING2-339（单选题）

- **学习阶段**：Spring Boot 工程化
- **主题**：依赖排除
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-211

Maven 中排除 spring-boot-starter-logging 后立即启动应用，可能出现什么风险？

A. 暂时缺少默认日志实现
B. Tomcat 自动变成 Jetty
C. 所有 Bean 自动变成原型
D. 配置绑定失效

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第36页
- **来源口径**：课件

**解析：** 排除默认日志后若未补充 Log4j2 等实现，应用可能缺少日志实现。

**选项辨析：**

- A：正确。符合课件提示。
- B：错误。容器替换需另外处理。
- C：错误。与日志排除无关。
- D：错误。绑定机制不因日志改变。

**官方参考：** https://docs.spring.io/spring-boot/reference/using/auto-configuration.html

### SPRING2-340（单选题）

- **学习阶段**：Spring Boot 工程化
- **主题**：Boot与Spring关系
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-211

Spring Boot 与 Spring Framework 的关系更准确的是？

A. Boot 建立在 Spring 生态之上并提供约定式工程能力
B. Boot 完全取代 Spring Framework
C. Boot 只能用于非 Java 项目
D. 两者不能同时使用

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第33页
- **来源口径**：课件

**解析：** Boot 使用 Spring Framework 的容器等核心能力，进一步提供自动配置和工程约定。

**选项辨析：**

- A：正确。符合生态关系。
- B：错误。Boot 不是取代者。
- C：错误。主要支持 Java/Kotlin。
- D：错误。二者天然协同。

**官方参考：** https://docs.spring.io/spring-boot/reference/using/auto-configuration.html

### SPRING2-341（单选题）

- **学习阶段**：Spring Boot 工程化
- **主题**：可覆盖默认值
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-211

使用 Boot 默认配置后，需要修改端口或数据源时通常怎么办？

A. 通过属性或自定义 Bean 覆盖默认值
B. 修改 JDK 源码
C. 删除自动配置全部代码
D. 重新编写 Servlet 容器

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第37页
- **来源口径**：课件

**解析：** Boot 的默认值是可配置、可覆盖的，便于在约定基础上做差异化。

**选项辨析：**

- A：正确。符合覆盖方式。
- B：错误。不需要修改 JDK。
- C：错误。无需删除全部自动配置。
- D：错误。通常无需手写容器。

**官方参考：** https://docs.spring.io/spring-boot/reference/using/auto-configuration.html

### SPRING2-342（单选题）

- **学习阶段**：Spring Boot 工程化
- **主题**：组件扫描边界
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-211

启动类放在 com.example.app 向上一级 com.example，默认组件扫描会怎样？

A. 默认不会扫描 com.example 下与 app 同级的包
B. 会扫描整个磁盘
C. 只扫描启动类文件
D. 会扫描所有依赖 Jar 的业务组件

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第39页
- **来源口径**：课件

**解析：** 默认扫描从启动类包向下展开，同级或上级包不会自动纳入。

**选项辨析：**

- A：正确。符合扫描边界。
- B：错误。扫描不会遍历磁盘。
- C：错误。不仅扫描启动类。
- D：错误。依赖 Jar 的组件需其他机制。

**官方参考：** https://docs.spring.io/spring-boot/reference/using/auto-configuration.html

### SPRING2-343（单选题）

- **学习阶段**：Spring Boot 工程化
- **主题**：配置文件格式
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-211

Spring Boot 常见外部化配置文件格式包括哪一组？

A. properties 或 yaml
B. class 或 java
C. png 或 jpg
D. sql 或 csv

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **来源口径**：课件

**解析：** Boot 支持 properties 和 YAML 等外部化配置格式。

**选项辨析：**

- A：正确。符合常见格式。
- B：错误。是源码文件。
- C：错误。是图片格式。
- D：错误。不是主要应用配置格式。

**官方参考：** https://docs.spring.io/spring-boot/reference/using/auto-configuration.html

### SPRING2-344（单选题）

- **学习阶段**：Spring Boot 工程化
- **主题**：配置覆盖
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-211

命令行参数与配置文件存在同名属性时，Boot 的设计通常允许什么？

A. 外部参数覆盖较低优先级的默认配置
B. 配置文件永远不可覆盖
C. 命令行参数被忽略
D. 属性只能写在 Java 注解中

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **来源口径**：课件

**解析：** 外部化配置支持按优先级覆盖默认值，便于同一制品适配不同环境。

**选项辨析：**

- A：正确。符合外部化配置价值。
- B：错误。默认值可被覆盖。
- C：错误。命令行是常见来源。
- D：错误。不限制为注解。

**官方参考：** https://docs.spring.io/spring-boot/reference/using/auto-configuration.html

### SPRING2-345（单选题）

- **学习阶段**：Spring Boot 工程化
- **主题**：生产部署
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-211

内嵌服务器在部署模式上的核心价值是什么？

A. 应用与容器一起打包，减少外部服务器环境差异
B. 强制每台机器安装 IDE
C. 取消 HTTP 协议
D. 保证业务逻辑无缺陷

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第40页
- **来源口径**：课件

**解析：** 独立 JAR 将应用和容器交付，降低部署依赖和环境漂移。

**选项辨析：**

- A：正确。符合部署价值。
- B：错误。生产不需 IDE。
- C：错误。仍使用 HTTP。
- D：错误。部署方式不能保证业务无缺陷。

**官方参考：** https://docs.spring.io/spring-boot/reference/using/auto-configuration.html

### SPRING2-376（单选题）

- **学习阶段**：Spring Boot 工程化
- **主题**：自动配置
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-211

Spring Boot自动配置通常依据什么决定是否提供默认Bean？

A. 类路径、已有Bean和配置条件
B. 源代码文件名长度
C. 浏览器版本
D. 数据库表行数

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第24页
- **来源口径**：官方文档扩展

**解析：** 自动配置根据classpath、容器状态和Environment条件选择性生效。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：错误。该选项不是本题正确依据。
- C：错误。该选项不是本题正确依据。
- D：错误。该选项不是本题正确依据。

**官方参考：** https://docs.spring.io/spring-boot/reference/using/auto-configuration.html

### SPRING2-377（单选题）

- **学习阶段**：Spring Boot 工程化
- **主题**：自动配置
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-211

用户自己定义DataSource Bean后，相关默认嵌入式数据库自动配置通常会怎样？

A. 相应默认配置回退或让位
B. 一定创建第二个DataSource
C. 自动删除用户Bean
D. 关闭整个ApplicationContext

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第24页
- **来源口径**：官方文档扩展

**解析：** Boot自动配置具有非侵入性，用户配置可以替换特定默认配置。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：错误。该选项不是本题正确依据。
- C：错误。该选项不是本题正确依据。
- D：错误。该选项不是本题正确依据。

**官方参考：** https://docs.spring.io/spring-boot/reference/using/auto-configuration.html

### SPRING2-378（单选题）

- **学习阶段**：Spring Boot 工程化
- **主题**：启动失败分析
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-211

自动配置不符合预期时，最有用的诊断信息通常来自哪里？

A. 条件评估报告
B. 浏览器缓存
C. Git分支名称
D. CSS编译日志

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第24页
- **来源口径**：官方文档扩展

**解析：** 条件评估报告说明哪些条件匹配或未匹配，有助定位自动配置决策。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：错误。该选项不是本题正确依据。
- C：错误。该选项不是本题正确依据。
- D：错误。该选项不是本题正确依据。

**官方参考：** https://docs.spring.io/spring-boot/reference/using/auto-configuration.html

### SPRING2-379（单选题）

- **学习阶段**：Spring Boot 工程化
- **主题**：自动配置诊断
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-211

--debug启动参数主要帮助什么？

A. 输出自动配置条件评估报告
B. 开启生产远程调试端口
C. 删除缓存
D. 改变服务发现模式

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第24页
- **来源口径**：官方文档扩展

**解析：** debug模式能显示条件报告，帮助解释自动配置选择。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：错误。该选项不是本题正确依据。
- C：错误。该选项不是本题正确依据。
- D：错误。该选项不是本题正确依据。

**官方参考：** https://docs.spring.io/spring-boot/reference/using/auto-configuration.html

### SPRING2-380（单选题）

- **学习阶段**：Spring Boot 工程化
- **主题**：自动配置
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-211

@SpringBootApplication通常组合了哪些能力？

A. @SpringBootConfiguration、@EnableAutoConfiguration和@ComponentScan
B. @Transactional、@Async和@WebMvcTest
C. @Entity、@Repository和@Mapper
D. @Test、@MockBean和@Sql

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第24页
- **来源口径**：官方文档扩展

**解析：** 该组合注解把主配置、自动配置和组件扫描集中到应用入口。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：错误。该选项不是本题正确依据。
- C：错误。该选项不是本题正确依据。
- D：错误。该选项不是本题正确依据。

**官方参考：** https://docs.spring.io/spring-boot/reference/using/auto-configuration.html

### SPRING2-381（单选题）

- **学习阶段**：Spring Boot 工程化
- **主题**：自动配置导入
- **认知层级**：分析
- **难度**：难
- **前置题**：SPRING2-211

现代Spring Boot自动配置类通常通过哪个资源文件被导入？

A. META-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports
B. application.css
C. web.xml
D. pom.lock

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第24页
- **来源口径**：官方文档扩展

**解析：** Boot使用AutoConfiguration.imports列出自动配置类，供导入选择。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：错误。该选项不是本题正确依据。
- C：错误。该选项不是本题正确依据。
- D：错误。该选项不是本题正确依据。

**官方参考：** https://docs.spring.io/spring-boot/reference/using/auto-configuration.html

### SPRING2-382（单选题）

- **学习阶段**：Spring Boot 工程化
- **主题**：条件注解
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-211

@ConditionalOnClass的基本作用是？

A. 类路径存在某类时才满足条件
B. 类实例运行五秒后满足
C. 配置文件必须是XML
D. 只按HTTP方法判断

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第24页
- **来源口径**：官方文档扩展

**解析：** 它用于基于classpath能力选择性启用自动配置。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：错误。该选项不是本题正确依据。
- C：错误。该选项不是本题正确依据。
- D：错误。该选项不是本题正确依据。

**官方参考：** https://docs.spring.io/spring-boot/reference/using/auto-configuration.html

### SPRING2-383（单选题）

- **学习阶段**：Spring Boot 工程化
- **主题**：条件注解
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-211

@ConditionalOnMissingBean最适合表达什么？

A. 用户未提供同类Bean时才提供默认Bean
B. Bean每次调用都刷新
C. 所有Bean都必须缺失
D. 只在数据库为空时生效

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第24页
- **来源口径**：官方文档扩展

**解析：** 该条件让自动配置在用户已有替代实现时主动让位。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：错误。该选项不是本题正确依据。
- C：错误。该选项不是本题正确依据。
- D：错误。该选项不是本题正确依据。

**官方参考：** https://docs.spring.io/spring-boot/reference/using/auto-configuration.html

### SPRING2-384（单选题）

- **学习阶段**：Spring Boot 工程化
- **主题**：条件注解
- **认知层级**：分析
- **难度**：难
- **前置题**：SPRING2-211

@ConditionalOnProperty的havingValue常用于什么？

A. 按属性值决定条件是否匹配
B. 定义数据库隔离级别
C. 修改HTTP响应体
D. 设置线程优先级

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第24页
- **来源口径**：官方文档扩展

**解析：** 它把外部属性开关转化为自动配置条件。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：错误。该选项不是本题正确依据。
- C：错误。该选项不是本题正确依据。
- D：错误。该选项不是本题正确依据。

**官方参考：** https://docs.spring.io/spring-boot/reference/using/auto-configuration.html

### SPRING2-385（单选题）

- **学习阶段**：Spring Boot 工程化
- **主题**：自动配置测试
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-211

ApplicationContextRunner主要用于什么？

A. 以最小上下文测试自动配置条件
B. 启动完整生产集群
C. 压测网络带宽
D. 生成数据库备份

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第24页
- **来源口径**：官方文档扩展

**解析：** 它能快速构造带指定自动配置和属性的测试上下文。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：错误。该选项不是本题正确依据。
- C：错误。该选项不是本题正确依据。
- D：错误。该选项不是本题正确依据。

**官方参考：** https://docs.spring.io/spring-boot/reference/using/auto-configuration.html

### SPRING2-386（单选题）

- **学习阶段**：Spring Boot 工程化
- **主题**：配置优先级
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-211

Spring Boot配置绑定面对命令行参数与application.yml冲突时，通常哪者优先？

A. 命令行参数通常具有更高优先级
B. YAML永远优先
C. 二者随机选择
D. 都被忽略

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第24页
- **来源口径**：官方文档扩展

**解析：** 外部化配置具有明确优先级，命令行参数通常用于覆盖默认文件配置。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：错误。该选项不是本题正确依据。
- C：错误。该选项不是本题正确依据。
- D：错误。该选项不是本题正确依据。

**官方参考：** https://docs.spring.io/spring-boot/reference/using/auto-configuration.html

### SPRING2-387（单选题）

- **学习阶段**：Spring Boot 工程化
- **主题**：自动配置
- **认知层级**：分析
- **难度**：难
- **前置题**：SPRING2-211

自动配置类中使用@ConditionalOnMissingBean的工程价值是？

A. 允许用户定义Bean覆盖默认实现
B. 禁止任何用户配置
C. 强制使用默认实现
D. 让Bean变成prototype

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第24页
- **来源口径**：官方文档扩展

**解析：** 让位机制体现Boot自动配置的非侵入性。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：错误。该选项不是本题正确依据。
- C：错误。该选项不是本题正确依据。
- D：错误。该选项不是本题正确依据。

**官方参考：** https://docs.spring.io/spring-boot/reference/using/auto-configuration.html

### SPRING2-388（单选题）

- **学习阶段**：Spring Boot 工程化
- **主题**：配置导入
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-211

使用外部配置中心时，spring.config.import的优势是？

A. 把配置来源显式写入Config Data加载链
B. 依赖过时bootstrap必选
C. 只支持本地文件
D. 绕过所有认证

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第24页
- **来源口径**：官方文档扩展

**解析：** 显式导入让配置依赖可见并融入Boot启动阶段。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：错误。该选项不是本题正确依据。
- C：错误。该选项不是本题正确依据。
- D：错误。该选项不是本题正确依据。

**官方参考：** https://docs.spring.io/spring-boot/reference/using/auto-configuration.html

### SPRING2-389（单选题）

- **学习阶段**：Spring Boot 工程化
- **主题**：自动配置排除
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-211

不希望某个自动配置生效时，哪种做法是官方支持的？

A. 使用exclude或spring.autoconfigure.exclude
B. 删除所有Starter
C. 修改JVM字节码
D. 把配置写进HTML

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第24页
- **来源口径**：官方文档扩展

**解析：** 可以在注解属性或spring.autoconfigure.exclude中排除指定自动配置。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：错误。该选项不是本题正确依据。
- C：错误。该选项不是本题正确依据。
- D：错误。该选项不是本题正确依据。

**官方参考：** https://docs.spring.io/spring-boot/reference/using/auto-configuration.html

### SPRING2-390（单选题）

- **学习阶段**：Spring Boot 工程化
- **主题**：自动配置顺序
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-211

自动配置类需要先后顺序时，通常使用什么表达？

A. @AutoConfigureBefore/@AutoConfigureAfter
B. @OrderBySQL
C. @SequenceOnly
D. @RouteOrder

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第24页
- **来源口径**：官方文档扩展

**解析：** 自动配置排序注解帮助解决自动配置之间的装配先后关系。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：错误。该选项不是本题正确依据。
- C：错误。该选项不是本题正确依据。
- D：错误。该选项不是本题正确依据。

**官方参考：** https://docs.spring.io/spring-boot/reference/using/auto-configuration.html

### SPRING2-391（单选题）

- **学习阶段**：Spring Boot 工程化
- **主题**：配置数据
- **认知层级**：分析
- **难度**：难
- **前置题**：SPRING2-211

现代Spring Boot外部配置导入通常推荐使用什么机制？

A. spring.config.import
B. bootstrap.xml必选
C. web.xml
D. MANIFEST-only

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第24页
- **来源口径**：官方文档扩展

**解析：** Config Data机制通过spring.config.import声明额外配置来源。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：错误。该选项不是本题正确依据。
- C：错误。该选项不是本题正确依据。
- D：错误。该选项不是本题正确依据。

**官方参考：** https://docs.spring.io/spring-boot/reference/using/auto-configuration.html

### SPRING2-392（单选题）

- **学习阶段**：Spring Boot 工程化
- **主题**：配置数据
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-211

配置文件中使用spring.config.import时，导入失败默认意味着什么？

A. 应用启动可能失败，除非使用可选导入语义
B. 一定静默忽略
C. 自动回退到生产密码
D. 自动创建配置中心

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第24页
- **来源口径**：官方文档扩展

**解析：** 配置导入是启动依赖，optional:可表达非必需来源。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：错误。该选项不是本题正确依据。
- C：错误。该选项不是本题正确依据。
- D：错误。该选项不是本题正确依据。

**官方参考：** https://docs.spring.io/spring-boot/reference/using/auto-configuration.html

### SPRING2-393（单选题）

- **学习阶段**：Spring Boot 工程化
- **主题**：Profile文档
- **认知层级**：分析
- **难度**：难
- **前置题**：SPRING2-211

spring.config.activate.on-profile适合表达什么？

A. 该配置文档在指定Profile激活时生效
B. 强制所有Profile同时生效
C. 设置线程数
D. 决定日志文件编码

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第24页
- **来源口径**：官方文档扩展

**解析：** 它为配置文档声明激活条件。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：错误。该选项不是本题正确依据。
- C：错误。该选项不是本题正确依据。
- D：错误。该选项不是本题正确依据。

**官方参考：** https://docs.spring.io/spring-boot/reference/using/auto-configuration.html

### SPRING2-394（单选题）

- **学习阶段**：Spring Boot 工程化
- **主题**：配置校验
- **认知层级**：分析
- **难度**：难
- **前置题**：SPRING2-211

对@ConfigurationProperties对象启用Bean Validation通常需要什么？

A. 在绑定对象上启用校验并使用约束注解
B. 只改端口号
C. 只添加@RestController
D. 删除所有默认值

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第24页
- **来源口径**：官方文档扩展

**解析：** 配置绑定校验能在启动阶段发现非法参数，避免运行后才暴露。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：错误。该选项不是本题正确依据。
- C：错误。该选项不是本题正确依据。
- D：错误。该选项不是本题正确依据。

**官方参考：** https://docs.spring.io/spring-boot/reference/using/auto-configuration.html

### SPRING2-395（单选题）

- **学习阶段**：Spring Boot 工程化
- **主题**：配置元数据
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-211

spring-boot-configuration-processor的价值是什么？

A. 生成配置元数据以改善IDE提示
B. 替代配置服务器
C. 执行所有配置变更
D. 压缩Jar文件

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第24页
- **来源口径**：官方文档扩展

**解析：** 处理器生成元数据，帮助开发者发现配置键和说明。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：错误。该选项不是本题正确依据。
- C：错误。该选项不是本题正确依据。
- D：错误。该选项不是本题正确依据。

**官方参考：** https://docs.spring.io/spring-boot/reference/using/auto-configuration.html

### SPRING2-396（单选题）

- **学习阶段**：Spring Boot 工程化
- **主题**：Actuator
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-211

Spring Boot Actuator端点的主要定位是？

A. 生产运行监控和管理
B. 替代业务Controller
C. 编译Java源码
D. 生成前端页面

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第24页
- **来源口径**：官方文档扩展

**解析：** Actuator提供health、metrics等运行时端点。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：错误。该选项不是本题正确依据。
- C：错误。该选项不是本题正确依据。
- D：错误。该选项不是本题正确依据。

**官方参考：** https://docs.spring.io/spring-boot/reference/using/auto-configuration.html

### SPRING2-397（单选题）

- **学习阶段**：Spring Boot 工程化
- **主题**：Tracing
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-211

现代Spring Boot分布式追踪通常需要配合什么？

A. Micrometer Tracing等追踪基础设施
B. 只设置server.port
C. 只增加@Entity
D. 删除所有HTTP头

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第24页
- **来源口径**：官方文档扩展

**解析：** 追踪需要上下文传播、采样和导出组件，不能只靠端口配置。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：错误。该选项不是本题正确依据。
- C：错误。该选项不是本题正确依据。
- D：错误。该选项不是本题正确依据。

**官方参考：** https://docs.spring.io/spring-boot/reference/using/auto-configuration.html

### SPRING2-398（单选题）

- **学习阶段**：Spring Boot 工程化
- **主题**：Banner
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-211

Spring Boot Banner主要影响什么？

A. 启动时输出的展示文本
B. Bean注入顺序
C. 数据库事务隔离
D. 服务注册健康

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第24页
- **来源口径**：官方文档扩展

**解析：** Banner是启动展示能力，不改变核心容器语义。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：错误。该选项不是本题正确依据。
- C：错误。该选项不是本题正确依据。
- D：错误。该选项不是本题正确依据。

**官方参考：** https://docs.spring.io/spring-boot/reference/using/auto-configuration.html

### SPRING2-399（单选题）

- **学习阶段**：Spring Boot 工程化
- **主题**：嵌入式服务器
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-211

Boot可执行Jar的一个部署优势是？

A. 应用与嵌入式服务器一起交付
B. 必须手工部署外部Tomcat
C. 不能容器化
D. 只能在IDE运行

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第24页
- **来源口径**：官方文档扩展

**解析：** 可执行Jar减少外部容器安装和版本漂移。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：错误。该选项不是本题正确依据。
- C：错误。该选项不是本题正确依据。
- D：错误。该选项不是本题正确依据。

**官方参考：** https://docs.spring.io/spring-boot/reference/using/auto-configuration.html

### SPRING2-400（单选题）

- **学习阶段**：Spring Boot 工程化
- **主题**：测试Starter
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-211

spring-boot-starter-test通常包含什么？

A. Boot测试支持、JUnit Jupiter和断言库等
B. 生产数据库密码
C. Nacos服务器
D. 前端打包器

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第24页
- **来源口径**：官方文档扩展

**解析：** Starter聚合常用测试依赖，减少手工声明。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：错误。该选项不是本题正确依据。
- C：错误。该选项不是本题正确依据。
- D：错误。该选项不是本题正确依据。

**官方参考：** https://docs.spring.io/spring-boot/reference/using/auto-configuration.html

### SPRING2-401（单选题）

- **学习阶段**：Spring Boot 工程化
- **主题**：SpringBootTest
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-211

@SpringBootTest通常创建什么范围的测试？

A. 由SpringApplication加载的应用上下文测试
B. 只测试一个JSON序列化方法
C. 只测试CSS
D. 只测试SQL语法

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第24页
- **来源口径**：官方文档扩展

**解析：** 它适合需要Boot特性和完整上下文的集成测试。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：错误。该选项不是本题正确依据。
- C：错误。该选项不是本题正确依据。
- D：错误。该选项不是本题正确依据。

**官方参考：** https://docs.spring.io/spring-boot/reference/using/auto-configuration.html

### SPRING2-402（单选题）

- **学习阶段**：Spring Boot 工程化
- **主题**：MockBean更新
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-211

在不同Boot版本中测试替身注解发生变化时，正确做法是？

A. 查当前版本官方测试文档并采用对应注解
B. 照抄旧版本示例
C. 删除所有测试
D. 把Mock写入生产配置

- **答案**：A
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第24页
- **来源口径**：官方文档扩展

**解析：** 测试注解可能随版本演进，必须以当前版本文档为准。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：错误。该选项不是本题正确依据。
- C：错误。该选项不是本题正确依据。
- D：错误。该选项不是本题正确依据。

**官方参考：** https://docs.spring.io/spring-boot/reference/using/auto-configuration.html

## 多选题

### SPRING2-346（多选题）

- **学习阶段**：Spring Boot 工程化
- **主题**：Spring Boot定位 / 工程效率
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-211

Spring Boot 解决传统项目痛点的方式包括哪些？

A. 约定式默认配置
B. 场景化 Starter
C. 内嵌服务器
D. 替代所有业务设计

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第33页
- **来源口径**：课件

**解析：** 前三项是课程强调的工程化能力，业务设计仍由开发者负责。

**选项辨析：**

- A：正确。减少重复配置。
- B：正确。整合场景依赖。
- C：正确。支持独立部署。
- D：错误。Boot 不替代业务建模。

**官方参考：** https://docs.spring.io/spring-boot/reference/using/auto-configuration.html

### SPRING2-347（多选题）

- **学习阶段**：Spring Boot 工程化
- **主题**：Initializr / 项目生成
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-211

Initializr 通常可以让开发者选择哪些项目元数据？

A. 构建工具
B. Java 版本
C. 项目依赖
D. 生产数据库真实密码

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第34页
- **来源口径**：课件

**解析：** Initializr 生成项目元数据和依赖，但不应保存生产秘密。

**选项辨析：**

- A：正确。可选 Maven/Gradle。
- B：正确。影响兼容性。
- C：正确。生成依赖声明。
- D：错误。秘密应通过安全配置管理。

**官方参考：** https://docs.spring.io/spring-boot/reference/using/auto-configuration.html

### SPRING2-348（多选题）

- **学习阶段**：Spring Boot 工程化
- **主题**：Starter / 依赖管理
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-211

Starter 的工程价值包括哪些？

A. 按场景整合依赖
B. 减少手动坐标配置
C. 配合版本仲裁降低冲突
D. 直接实现订单业务流程

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第35页
- **来源口径**：课件

**解析：** Starter 聚焦基础设施依赖整合，不实现具体业务流程。

**选项辨析：**

- A：正确。符合定义。
- B：正确。减少重复声明。
- C：正确。版本更可控。
- D：错误。业务流程不属于 Starter。

**官方参考：** https://docs.spring.io/spring-boot/reference/using/auto-configuration.html

### SPRING2-349（多选题）

- **学习阶段**：Spring Boot 工程化
- **主题**：starter-web / Web开发
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-211

starter-web 可能带来的能力包括哪些？

A. Spring MVC
B. 嵌入式 Servlet 容器
C. Web 常用基础依赖
D. 数据库事务业务规则

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第35页
- **来源口径**：课件

**解析：** Web Starter 提供 Web 基础设施，业务规则仍在应用代码中。

**选项辨析：**

- A：正确。属于 Web 栈。
- B：正确。支持独立运行。
- C：正确。符合场景整合。
- D：错误。不是业务规则引擎。

**官方参考：** https://docs.spring.io/spring-boot/reference/using/auto-configuration.html

### SPRING2-350（多选题）

- **学习阶段**：Spring Boot 工程化
- **主题**：starter-test / 测试依赖
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-211

starter-test 的典型组成或价值包括哪些？

A. JUnit Jupiter
B. Mockito
C. AssertJ
D. 生产环境自动创建订单

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第35页
- **来源口径**：课件

**解析：** 测试 Starter 统一提供测试库，不会执行业务生产操作。

**选项辨析：**

- A：正确。常用测试框架。
- B：正确。用于 Mock。
- C：正确。提供断言。
- D：错误。与生产订单无关。

**官方参考：** https://docs.spring.io/spring-boot/reference/using/auto-configuration.html

### SPRING2-351（多选题）

- **学习阶段**：Spring Boot 工程化
- **主题**：日志替换 / Log4j2
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-211

从默认 Logback 替换到 Log4j2，哪些操作通常需要考虑？

A. 排除默认 logging 依赖
B. 引入 spring-boot-starter-log4j2
C. 确认仍有可用日志实现
D. 删除所有 SLF4J API

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第36页
- **来源口径**：课件

**解析：** 替换要处理冲突并保证日志门面和实现链路完整。

**选项辨析：**

- A：正确。避免 Logback 传递进入。
- B：正确。引入目标实现。
- C：正确。确保应用可记录日志。
- D：错误。不应删除日志门面 API。

**官方参考：** https://docs.spring.io/spring-boot/reference/using/auto-configuration.html

### SPRING2-352（多选题）

- **学习阶段**：Spring Boot 工程化
- **主题**：自动配置 / 条件机制
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-211

自动配置判断时常见的依据包括哪些？

A. 类路径是否有某类
B. 容器中是否已有 Bean
C. 属性开关是否匹配
D. 开发者的 IDE 主题颜色

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第37页
- **来源口径**：课件

**解析：** 自动配置围绕运行时环境和容器状态作条件判断。

**选项辨析：**

- A：正确。对应 OnClass。
- B：正确。对应 OnBean/MissingBean。
- C：正确。对应 OnProperty。
- D：错误。与自动配置无关。

**官方参考：** https://docs.spring.io/spring-boot/reference/using/auto-configuration.html

### SPRING2-353（多选题）

- **学习阶段**：Spring Boot 工程化
- **主题**：ConditionalOnClass / 类路径
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-211

@ConditionalOnClass 的使用理解正确的有？

A. 用于检查类路径上的类型
B. 可避免缺少依赖时加载不适用配置
C. 常与 Starter 的依赖线索配合
D. 它会自动下载缺少的 Jar

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第38页
- **来源口径**：课件

**解析：** 该注解只判断类是否可用，不负责依赖下载。

**选项辨析：**

- A：正确。符合语义。
- B：正确。减少错误装配。
- C：正确。Starter 使类进入类路径。
- D：错误。依赖管理工具才可能下载。

**官方参考：** https://docs.spring.io/spring-boot/reference/using/auto-configuration.html

### SPRING2-354（多选题）

- **学习阶段**：Spring Boot 工程化
- **主题**：ConditionalOnBean / 容器条件
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-211

关于 @ConditionalOnBean，哪些说法正确？

A. 检查容器中是否有指定 Bean
B. 可让配置依赖前置基础设施
C. 用户自定义 Bean 可能满足该条件
D. 它检查的是磁盘文件是否存在

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第38页
- **来源口径**：课件

**解析：** OnBean 关注 ApplicationContext 中的 Bean，而非文件系统资源。

**选项辨析：**

- A：正确。符合定义。
- B：正确。表达 Bean 依赖。
- C：正确。显式 Bean 可触发条件。
- D：错误。文件资源由 OnResource 关注。

**官方参考：** https://docs.spring.io/spring-boot/reference/using/auto-configuration.html

### SPRING2-355（多选题）

- **学习阶段**：Spring Boot 工程化
- **主题**：ConditionalOnMissingBean / 默认回退
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-211

@ConditionalOnMissingBean 常用于哪些设计？

A. 只在用户未提供实现时创建默认 Bean
B. 尊重用户显式配置
C. 避免同类型默认 Bean 重复创建
D. 强制删除用户 Bean

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第38页
- **来源口径**：课件

**解析：** 它表达默认回退而非覆盖用户配置。

**选项辨析：**

- A：正确。符合用途。
- B：正确。符合 Boot 设计。
- C：正确。避免冲突。
- D：错误。不会删除用户对象。

**官方参考：** https://docs.spring.io/spring-boot/reference/using/auto-configuration.html

### SPRING2-356（多选题）

- **学习阶段**：Spring Boot 工程化
- **主题**：ConditionalOnProperty / 配置开关
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-211

@ConditionalOnProperty 可用于哪些场景？

A. 按功能开关启停自动配置
B. 指定属性前缀与名称
C. 用 havingValue 限定取值
D. 直接检查数据库表行数

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第38页
- **来源口径**：课件

**解析：** 该条件读取配置属性，不负责数据库内容检查。

**选项辨析：**

- A：正确。适合功能开关。
- B：正确。支持属性定位。
- C：正确。支持值匹配。
- D：错误。数据库表应由业务或数据访问逻辑检查。

**官方参考：** https://docs.spring.io/spring-boot/reference/using/auto-configuration.html

### SPRING2-357（多选题）

- **学习阶段**：Spring Boot 工程化
- **主题**：Web条件 / 应用类型
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-211

关于 Web 应用条件，正确的有？

A. OnWebApplication 可限制 Web 环境配置
B. NotWebApplication 可用于批处理配置
C. 条件有助于避免加载错误场景 Bean
D. 它会自动把命令行程序变成 Web 应用

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第38页
- **来源口径**：课件

**解析：** Web 条件用于区分环境，不会改变应用类型。

**选项辨析：**

- A：正确。符合定义。
- B：正确。符合非 Web 场景。
- C：正确。减少不适用装配。
- D：错误。不会自动改变应用类型。

**官方参考：** https://docs.spring.io/spring-boot/reference/using/auto-configuration.html

### SPRING2-358（多选题）

- **学习阶段**：Spring Boot 工程化
- **主题**：SpringBootApplication / 核心入口
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-211

@SpringBootApplication 的组合能力包括哪些？

A. 配置类能力
B. 自动配置启用
C. 组件扫描
D. 自动生成数据库业务数据

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第39页
- **来源口径**：课件

**解析：** 该注解组合应用配置、自动配置和扫描入口，但不生成业务数据。

**选项辨析：**

- A：正确。来自 @Configuration。
- B：正确。来自 @EnableAutoConfiguration。
- C：正确。来自 @ComponentScan。
- D：错误。与业务数据无关。

**官方参考：** https://docs.spring.io/spring-boot/reference/using/auto-configuration.html

### SPRING2-359（多选题）

- **学习阶段**：Spring Boot 工程化
- **主题**：组件扫描 / 包结构
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-211

关于默认组件扫描，哪些说法正确？

A. 从启动类所在包向下扫描
B. 启动类通常放在根包
C. 同级包默认不会被向上扫描
D. 会遍历整台机器所有目录

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第39页
- **来源口径**：课件

**解析：** 扫描边界由包层级决定，放置启动类位置很关键。

**选项辨析：**

- A：正确。符合默认规则。
- B：正确。便于覆盖应用组件。
- C：正确。不会自动向上扫描。
- D：错误。不会遍历磁盘。

**官方参考：** https://docs.spring.io/spring-boot/reference/using/auto-configuration.html

### SPRING2-360（多选题）

- **学习阶段**：Spring Boot 工程化
- **主题**：内嵌服务器 / 部署
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-211

内嵌服务器带来的价值包括哪些？

A. 可执行 JAR 独立运行
B. 减少外部容器安装差异
C. 便于一键启动部署
D. 使所有业务代码自动正确

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第40页
- **来源口径**：课件

**解析：** 内嵌容器改善交付方式，但不保证业务代码正确。

**选项辨析：**

- A：正确。符合部署方式。
- B：正确。减少环境依赖。
- C：正确。符合课件价值。
- D：错误。业务质量仍需测试。

**官方参考：** https://docs.spring.io/spring-boot/reference/using/auto-configuration.html

### SPRING2-361（多选题）

- **学习阶段**：Spring Boot 工程化
- **主题**：配置文件 / 外部化配置
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-211

Spring Boot 外部化配置的常见特征包括哪些？

A. 支持 properties 和 YAML
B. 同一制品可适配不同环境
C. 可通过外部参数覆盖默认值
D. 必须把密码写入源码

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **来源口径**：课件

**解析：** 外部化配置强调环境解耦，秘密不应硬编码。

**选项辨析：**

- A：正确。常见格式。
- B：正确。减少重复构建。
- C：正确。体现覆盖能力。
- D：错误。违反安全实践。

**官方参考：** https://docs.spring.io/spring-boot/reference/using/auto-configuration.html

### SPRING2-362（多选题）

- **学习阶段**：Spring Boot 工程化
- **主题**：ConfigurationProperties / 类型绑定
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-211

ConfigurationProperties 相比散落 @Value 的优点包括哪些？

A. 按前缀聚合配置
B. 支持嵌套对象和类型转换
C. 便于统一校验
D. 只能绑定一个字符串属性

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **来源口径**：课件

**解析：** 它适合成组、层次化、类型安全的配置。

**选项辨析：**

- A：正确。前缀形成边界。
- B：正确。支持结构化绑定。
- C：正确。可结合校验。
- D：错误。并不限于单字符串。

**官方参考：** https://docs.spring.io/spring-boot/reference/using/auto-configuration.html

### SPRING2-363（多选题）

- **学习阶段**：Spring Boot 工程化
- **主题**：ConfigurationProperties注册 / 启用方式
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-211

让配置属性类进入容器，哪些方式可能有效？

A. @ConfigurationPropertiesScan
B. @EnableConfigurationProperties
C. 在配置类上声明可注册的属性 Bean
D. 只把 .properties 文件放进 resources

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **来源口径**：课件

**解析：** 配置文件是数据源，仍需要扫描或显式启用属性类。

**选项辨析：**

- A：正确。可扫描注册。
- B：正确。可显式启用。
- C：正确。可由配置类注册。
- D：错误。文件本身不是 Bean。

**官方参考：** https://docs.spring.io/spring-boot/reference/using/auto-configuration.html

### SPRING2-364（多选题）

- **学习阶段**：Spring Boot 工程化
- **主题**：SpringApplication / 启动流程
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-211

SpringApplication.run 期间通常会发生哪些工作？

A. 创建应用上下文
B. 注册并扫描组件
C. 评估自动配置条件
D. 执行数据库全部业务交易

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **来源口径**：课件

**解析：** 启动过程准备容器和配置，业务交易应由应用请求触发。

**选项辨析：**

- A：正确。创建上下文。
- B：正确。发现组件。
- C：正确。筛选配置。
- D：错误。不会自动执行全部业务。

**官方参考：** https://docs.spring.io/spring-boot/reference/using/auto-configuration.html

### SPRING2-365（多选题）

- **学习阶段**：Spring Boot 工程化
- **主题**：自动配置回退 / 用户覆盖
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-211

用户显式定义 Bean 后，自动配置通常如何表现？

A. MissingBean 条件可能不再满足
B. 保留用户自定义实现
C. 避免覆盖用户选择
D. 无论如何再创建一个同类型默认 Bean

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **来源口径**：课件

**解析：** Boot 默认配置遵循让用户覆盖的原则。

**选项辨析：**

- A：正确。条件被用户 Bean 改变。
- B：正确。用户实现保留。
- C：正确。避免重复。
- D：错误。不是通常行为。

**官方参考：** https://docs.spring.io/spring-boot/reference/using/auto-configuration.html

### SPRING2-366（多选题）

- **学习阶段**：Spring Boot 工程化
- **主题**：条件组合 / 逻辑
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-211

多个条件注解同时存在时，正确理解包括哪些？

A. 必要条件通常需同时满足
B. 类路径和属性开关可共同约束装配
C. 任一关键条件失败都可能导致配置不生效
D. 条件注解会绕过容器生命周期

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **来源口径**：课件

**解析：** 条件是自动配置的筛选逻辑，仍由容器生命周期管理结果 Bean。

**选项辨析：**

- A：正确。符合 AND 语义。
- B：正确。常见组合。
- C：正确。符合失败结果。
- D：错误。不会绕过容器。

**官方参考：** https://docs.spring.io/spring-boot/reference/using/auto-configuration.html

### SPRING2-367（多选题）

- **学习阶段**：Spring Boot 工程化
- **主题**：Starter版本 / 依赖树
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-211

为了控制 Starter 依赖质量，哪些做法合理？

A. 使用 Boot 推荐的依赖管理
B. 检查传递依赖树
C. 避免同一组件引入互相冲突的版本
D. 随意覆盖全部版本而不测试

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第35页
- **来源口径**：课件

**解析：** 版本管理应以兼容性和验证为基础，不能任意覆盖。

**选项辨析：**

- A：正确。统一版本。
- B：正确。有助于定位冲突。
- C：正确。减少重复版本。
- D：错误。未经验证的覆盖有风险。

**官方参考：** https://docs.spring.io/spring-boot/reference/using/auto-configuration.html

### SPRING2-368（多选题）

- **学习阶段**：Spring Boot 工程化
- **主题**：端口配置 / 环境部署
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-211

关于 server.port 的配置，正确的有？

A. 可在配置文件中设置
B. 可通过外部参数按环境调整
C. 改变端口不等于更换 Web 容器
D. 写进业务 Controller 才能生效

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第40页
- **来源口径**：课件

**解析：** 端口是服务器配置，应由外部化配置管理而非业务控制器。

**选项辨析：**

- A：正确。符合配置方式。
- B：正确。支持环境差异。
- C：正确。端口与容器实现是不同维度。
- D：错误。Controller 不是配置入口。

**官方参考：** https://docs.spring.io/spring-boot/reference/using/auto-configuration.html

### SPRING2-369（多选题）

- **学习阶段**：Spring Boot 工程化
- **主题**：自动配置排除 / 故障排查
- **认知层级**：分析
- **难度**：难
- **前置题**：SPRING2-211

当自动配置与平台自有组件冲突时，合理处理包括哪些？

A. 定位具体自动配置类
B. 通过排除或属性关闭它
C. 保留不冲突的其他自动配置
D. 删除整个 Boot 依赖树

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **来源口径**：课件

**解析：** Boot 支持精细化排除，不必因一项冲突而放弃全部能力。

**选项辨析：**

- A：正确。先定位。
- B：正确。可按需禁用。
- C：正确。保留其他能力。
- D：错误。破坏性过大且不必要。

**官方参考：** https://docs.spring.io/spring-boot/reference/using/auto-configuration.html

### SPRING2-370（多选题）

- **学习阶段**：Spring Boot 工程化
- **主题**：Initializr兼容性 / 项目初始化
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-211

使用 Initializr 初始化项目时，哪些选择需要一起评估？

A. Spring Boot 版本
B. JDK 版本
C. 构建工具与依赖插件
D. 电脑桌面背景

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第34页
- **来源口径**：课件

**解析：** 项目生成选项必须彼此兼容，桌面背景不影响构建。

**选项辨析：**

- A：正确。版本核心因素。
- B：正确。运行时要求。
- C：正确。决定构建方式。
- D：错误。与项目技术无关。

**官方参考：** https://docs.spring.io/spring-boot/reference/using/auto-configuration.html

### SPRING2-371（多选题）

- **学习阶段**：Spring Boot 工程化
- **主题**：日志系统 / 集成
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-211

Log4j2 集成时，哪些判断较为稳妥？

A. 排除默认 Logback 传递依赖
B. 引入 Boot 的 Log4j2 starter
C. 确认配置文件和实现版本匹配
D. 同时保留两套实现并期待随机选择

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第36页
- **来源口径**：课件

**解析：** 日志门面可统一，但实现应避免冲突并明确选择。

**选项辨析：**

- A：正确。避免重复实现。
- B：正确。由 Starter 管理。
- C：正确。保证运行时一致。
- D：错误。随机选择会造成问题。

**官方参考：** https://docs.spring.io/spring-boot/reference/using/auto-configuration.html

### SPRING2-372（多选题）

- **学习阶段**：Spring Boot 工程化
- **主题**：可执行Jar / 运行方式
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-211

关于可执行 JAR，正确的有？

A. 可用 java -jar 启动
B. 包含应用运行所需的启动结构
C. 可减少外部容器部署步骤
D. 只能在开发机运行

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第40页
- **来源口径**：课件

**解析：** 可执行 JAR 面向标准 Java 运行环境，不限于开发机。

**选项辨析：**

- A：正确。符合启动命令。
- B：正确。由 Boot 打包结构支持。
- C：正确。符合交付价值。
- D：错误。可部署到生产环境。

**官方参考：** https://docs.spring.io/spring-boot/reference/using/auto-configuration.html

### SPRING2-373（多选题）

- **学习阶段**：Spring Boot 工程化
- **主题**：配置优先级 / 覆盖策略
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-211

外部化配置的设计价值包括哪些？

A. 默认值可被环境参数覆盖
B. 同一制品可在多环境运行
C. 敏感信息可通过环境注入而非写死源码
D. 所有配置必须打进 JAR 才安全

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **来源口径**：课件

**解析：** 配置外置既支持覆盖也有助于秘密管理，但仍需配合安全平台。

**选项辨析：**

- A：正确。体现覆盖。
- B：正确。减少重构建。
- C：正确。降低硬编码风险。
- D：错误。把秘密打进 JAR 并不安全。

**官方参考：** https://docs.spring.io/spring-boot/reference/using/auto-configuration.html

### SPRING2-374（多选题）

- **学习阶段**：Spring Boot 工程化
- **主题**：属性条件 / 开关设计
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-211

设计自动配置功能开关时，哪些做法合理？

A. 为开关定义清晰前缀和属性名
B. 使用 matchIfMissing 明确缺省策略
C. 在文档中说明默认开启或关闭
D. 用随机表达式避免用户控制

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第41页
- **来源口径**：课件

**解析：** 属性开关应可预测、可解释、可运维。

**选项辨析：**

- A：正确。便于组织。
- B：正确。明确缺省行为。
- C：正确。降低误用。
- D：错误。随机逻辑不可维护。

**官方参考：** https://docs.spring.io/spring-boot/reference/using/auto-configuration.html

### SPRING2-375（多选题）

- **学习阶段**：Spring Boot 工程化
- **主题**：Web与非Web / 场景隔离
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-211

将 Web 配置与批处理配置隔离的好处包括哪些？

A. 避免非 Web 应用加载 Servlet 基础设施
B. 减少不适用 Bean
C. 降低启动失败风险
D. 让批处理必须监听 HTTP 端口

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第38页
- **来源口径**：课件

**解析：** 按应用类型条件装配能减少无关基础设施。

**选项辨析：**

- A：正确。符合隔离。
- B：正确。减少资源和冲突。
- C：正确。提高启动可靠性。
- D：错误。批处理不必监听 HTTP。

**官方参考：** https://docs.spring.io/spring-boot/reference/using/auto-configuration.html

### SPRING2-403（多选题）

- **学习阶段**：Spring Boot 工程化
- **主题**：Boot工程
- **认知层级**：分析
- **难度**：难
- **前置题**：SPRING2-211

Boot工程化能力主要帮助哪些方面？

A. 依赖整合
B. 自动配置基础设施
C. 生产监控
D. 替代领域建模和业务测试

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第24页
- **来源口径**：官方文档扩展

**解析：** Starter、自动配置和Actuator覆盖工程基础，业务设计和测试仍需开发者负责。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：正确。该选项符合官方语义。
- C：正确。该选项符合官方语义。
- D：错误。该选项不符合本题场景。

**官方参考：** https://docs.spring.io/spring-boot/reference/using/auto-configuration.html

### SPRING2-404（多选题）

- **学习阶段**：Spring Boot 工程化
- **主题**：Boot自动配置
- **认知层级**：分析
- **难度**：难
- **前置题**：SPRING2-211

自定义Boot自动配置时，正确的有？

A. 使用条件注解避免无条件创建Bean
B. 用AutoConfiguration.imports注册
C. 使用ApplicationContextRunner测试
D. 直接依赖自动配置内部嵌套类作为公共API

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第24页
- **来源口径**：官方文档扩展

**解析：** 自动配置应条件化、可测试，并避免依赖实现细节。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：正确。该选项符合官方语义。
- C：正确。该选项符合官方语义。
- D：错误。该选项不符合本题场景。

**官方参考：** https://docs.spring.io/spring-boot/reference/using/auto-configuration.html

### SPRING2-405（多选题）

- **学习阶段**：Spring Boot 工程化
- **主题**：自动配置
- **认知层级**：分析
- **难度**：难
- **前置题**：SPRING2-211

关于Boot自动配置，正确的有？

A. 依赖classpath
B. 检查用户已有Bean
C. 可以被显式排除
D. 会自动编写领域业务逻辑

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第24页
- **来源口径**：官方文档扩展

**解析：** 自动配置面向基础设施，按条件生效并允许用户覆盖，不代替业务设计。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：正确。该选项符合官方语义。
- C：正确。该选项符合官方语义。
- D：错误。该选项不符合本题场景。

**官方参考：** https://docs.spring.io/spring-boot/reference/using/auto-configuration.html

### SPRING2-406（多选题）

- **学习阶段**：Spring Boot 工程化
- **主题**：条件注解
- **认知层级**：分析
- **难度**：难
- **前置题**：SPRING2-211

自动配置常用的条件包括哪些？

A. 类路径条件
B. Bean存在或缺失条件
C. 属性条件
D. 用户浏览器颜色条件

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第24页
- **来源口径**：官方文档扩展

**解析：** 条件装配依据运行环境和容器状态，浏览器颜色不是常见条件。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：正确。该选项符合官方语义。
- C：正确。该选项符合官方语义。
- D：错误。该选项不符合本题场景。

**官方参考：** https://docs.spring.io/spring-boot/reference/using/auto-configuration.html

### SPRING2-407（多选题）

- **学习阶段**：Spring Boot 工程化
- **主题**：启动诊断
- **认知层级**：分析
- **难度**：难
- **前置题**：SPRING2-211

应用启动慢或自动配置异常时，可以使用哪些手段？

A. --debug条件报告
B. 启动分析器
C. 精简不必要的自动配置
D. 直接删除全部日志

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第24页
- **来源口径**：官方文档扩展

**解析：** 诊断应先获取证据，再针对性优化。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：正确。该选项符合官方语义。
- C：正确。该选项符合官方语义。
- D：错误。该选项不符合本题场景。

**官方参考：** https://docs.spring.io/spring-boot/reference/using/auto-configuration.html

### SPRING2-408（多选题）

- **学习阶段**：Spring Boot 工程化
- **主题**：Boot自动配置
- **认知层级**：分析
- **难度**：难
- **前置题**：SPRING2-211

用户覆盖自动配置时，正确的有？

A. 定义自己的Bean可使MissingBean条件失效
B. 可通过exclude排除
C. 应避免依赖自动配置内部实现细节
D. 覆盖后业务逻辑自动生成

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第24页
- **来源口径**：官方文档扩展

**解析：** 自动配置允许替换和排除，但不负责生成业务代码。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：正确。该选项符合官方语义。
- C：正确。该选项符合官方语义。
- D：错误。该选项不符合本题场景。

**官方参考：** https://docs.spring.io/spring-boot/reference/using/auto-configuration.html

### SPRING2-409（多选题）

- **学习阶段**：Spring Boot 工程化
- **主题**：Boot配置
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-211

配置导入失败排查可以检查哪些？

A. 导入URL和协议
B. 配置中心认证和网络
C. Profile与键名
D. 只检查Controller代码

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第24页
- **来源口径**：官方文档扩展

**解析：** Config Data加载发生在应用启动阶段，网络、认证和定位都可能造成失败。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：正确。该选项符合官方语义。
- C：正确。该选项符合官方语义。
- D：错误。该选项不符合本题场景。

**官方参考：** https://docs.spring.io/spring-boot/reference/using/auto-configuration.html

### SPRING2-410（多选题）

- **学习阶段**：Spring Boot 工程化
- **主题**：Boot配置校验
- **认知层级**：分析
- **难度**：难
- **前置题**：SPRING2-211

配置启动校验的工程价值包括？

A. 尽早发现非法值
B. 避免运行到深层路径才失败
C. 可以表达范围约束
D. 让任何字符串自动符合业务规则

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第24页
- **来源口径**：官方文档扩展

**解析：** 约束校验能提前失败，但规则仍需由开发者定义。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：正确。该选项符合官方语义。
- C：正确。该选项符合官方语义。
- D：错误。该选项不符合本题场景。

**官方参考：** https://docs.spring.io/spring-boot/reference/using/auto-configuration.html

### SPRING2-411（多选题）

- **学习阶段**：Spring Boot 工程化
- **主题**：Boot配置安全
- **认知层级**：分析
- **难度**：难
- **前置题**：SPRING2-211

外部配置安全治理包括？

A. 密钥服务
B. 最小权限
C. 变更审计
D. 把所有环境变量打进前端JS

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第24页
- **来源口径**：官方文档扩展

**解析：** 外部化配置仍需安全边界，前端打包会扩大泄露面。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：正确。该选项符合官方语义。
- C：正确。该选项符合官方语义。
- D：错误。该选项不符合本题场景。

**官方参考：** https://docs.spring.io/spring-boot/reference/using/auto-configuration.html

### SPRING2-412（多选题）

- **学习阶段**：Spring Boot 工程化
- **主题**：配置数据
- **认知层级**：分析
- **难度**：难
- **前置题**：SPRING2-211

Spring Boot配置数据机制中，合理的有？

A. 可使用spring.config.import
B. 可表达optional导入
C. Profile可以激活特定文档
D. 任何配置中心都无需认证

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第24页
- **来源口径**：官方文档扩展

**解析：** 导入和Profile提供加载控制，外部配置仍需安全认证。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：正确。该选项符合官方语义。
- C：正确。该选项符合官方语义。
- D：错误。该选项不符合本题场景。

**官方参考：** https://docs.spring.io/spring-boot/reference/using/auto-configuration.html

### SPRING2-413（多选题）

- **学习阶段**：Spring Boot 工程化
- **主题**：测试切片
- **认知层级**：分析
- **难度**：难
- **前置题**：SPRING2-211

关于Boot测试切片，正确的有？

A. WebMvcTest聚焦MVC
B. DataJpaTest聚焦JPA层
C. 切片通常比完整上下文更快
D. 切片会自动启动所有外部依赖

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第24页
- **来源口径**：官方文档扩展

**解析：** 切片限制范围以获得更快反馈，外部依赖通常需Mock或容器。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：正确。该选项符合官方语义。
- C：正确。该选项符合官方语义。
- D：错误。该选项不符合本题场景。

**官方参考：** https://docs.spring.io/spring-boot/reference/using/auto-configuration.html

### SPRING2-414（多选题）

- **学习阶段**：Spring Boot 工程化
- **主题**：Boot配置
- **认知层级**：分析
- **难度**：难
- **前置题**：SPRING2-211

关于配置优先级，正确的有？

A. 命令行可覆盖文件值
B. 环境变量适合容器部署
C. Profile文档可按环境激活
D. 优先级冲突应交给随机结果

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第24页
- **来源口径**：官方文档扩展

**解析：** 配置层级需要可预期和可审计，不能依赖随机选择。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：正确。该选项符合官方语义。
- C：正确。该选项符合官方语义。
- D：错误。该选项不符合本题场景。

**官方参考：** https://docs.spring.io/spring-boot/reference/using/auto-configuration.html

### SPRING2-415（多选题）

- **学习阶段**：Spring Boot 工程化
- **主题**：Boot测试
- **认知层级**：分析
- **难度**：难
- **前置题**：SPRING2-211

Boot测试策略中，正确的有？

A. 切片测试聚焦一层
B. 完整上下文测试验证装配
C. 动态属性适合容器端口
D. 所有测试都应连接生产数据库

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第24页
- **来源口径**：官方文档扩展

**解析：** 测试范围应与问题匹配，生产数据库不应成为默认测试依赖。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：正确。该选项符合官方语义。
- C：正确。该选项符合官方语义。
- D：错误。该选项不符合本题场景。

**官方参考：** https://docs.spring.io/spring-boot/reference/using/auto-configuration.html

### SPRING2-416（多选题）

- **学习阶段**：Spring Boot 工程化
- **主题**：Boot启动
- **认知层级**：分析
- **难度**：难
- **前置题**：SPRING2-211

SpringApplication启动阶段通常会做什么？

A. 准备Environment
B. 创建ApplicationContext
C. 发布启动生命周期事件
D. 自动修复所有配置错误

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第24页
- **来源口径**：官方文档扩展

**解析：** 启动流程准备环境、上下文和生命周期，错误仍需诊断处理。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：正确。该选项符合官方语义。
- C：正确。该选项符合官方语义。
- D：错误。该选项不符合本题场景。

**官方参考：** https://docs.spring.io/spring-boot/reference/using/auto-configuration.html

### SPRING2-417（多选题）

- **学习阶段**：Spring Boot 工程化
- **主题**：Boot条件
- **认知层级**：分析
- **难度**：难
- **前置题**：SPRING2-211

条件评估报告可以帮助判断哪些问题？

A. 哪个类路径条件未满足
B. 哪个Bean条件冲突
C. 哪个属性值未匹配
D. 用户的业务需求是否正确

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第24页
- **来源口径**：官方文档扩展

**解析：** 报告解释装配条件，不评价业务需求本身。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：正确。该选项符合官方语义。
- C：正确。该选项符合官方语义。
- D：错误。该选项不符合本题场景。

**官方参考：** https://docs.spring.io/spring-boot/reference/using/auto-configuration.html

### SPRING2-418（多选题）

- **学习阶段**：Spring Boot 工程化
- **主题**：Boot配置
- **认知层级**：分析
- **难度**：难
- **前置题**：SPRING2-211

配置Profile治理中，正确的有？

A. 避免把生产密钥提交默认文件
B. 可以用Profile激活差异配置
C. Profile不是权限边界的替代品
D. 激活多个Profile时顺序完全无关

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第24页
- **来源口径**：官方文档扩展

**解析：** Profile解决环境选择，但配置安全和覆盖顺序仍需单独治理。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：正确。该选项符合官方语义。
- C：正确。该选项符合官方语义。
- D：错误。该选项不符合本题场景。

**官方参考：** https://docs.spring.io/spring-boot/reference/using/auto-configuration.html

### SPRING2-419（多选题）

- **学习阶段**：Spring Boot 工程化
- **主题**：Boot端点
- **认知层级**：分析
- **难度**：难
- **前置题**：SPRING2-211

Actuator管理面治理可包括？

A. 独立管理端口
B. 端点白名单暴露
C. 网络和权限隔离
D. 公开env到匿名公网

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第24页
- **来源口径**：官方文档扩展

**解析：** 管理面应最小化暴露并隔离敏感信息。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：正确。该选项符合官方语义。
- C：正确。该选项符合官方语义。
- D：错误。该选项不符合本题场景。

**官方参考：** https://docs.spring.io/spring-boot/reference/using/auto-configuration.html

### SPRING2-420（多选题）

- **学习阶段**：Spring Boot 工程化
- **主题**：Boot测试
- **认知层级**：分析
- **难度**：难
- **前置题**：SPRING2-211

完整上下文测试和切片测试的差异包括？

A. 完整测试覆盖更多装配
B. 切片启动通常更快
C. 切片需显式Mock协作者
D. 切片一定比完整测试更接近生产

- **答案**：A、B、C
- **课件依据**：张琦-Spring & Spring Boot技术培训.pdf 第24页
- **来源口径**：官方文档扩展

**解析：** 二者服务于不同反馈目标，不能简单以接近生产概括。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：正确。该选项符合官方语义。
- C：正确。该选项符合官方语义。
- D：错误。该选项不符合本题场景。

**官方参考：** https://docs.spring.io/spring-boot/reference/using/auto-configuration.html

# 第5阶段：Spring Cloud 分布式治理

## 单选题

### SPRING2-421（单选题）

- **学习阶段**：Spring Cloud 分布式治理
- **主题**：微服务架构
- **认知层级**：认识
- **难度**：易
- **前置题**：SPRING2-301

微服务架构相对于单体应用最核心的拆分原则是什么？

A. 按业务能力形成自治服务
B. 按每个Java类拆成服务
C. 按数据库字段拆成服务
D. 按团队成员姓名拆成服务

- **答案**：A
- **课件依据**：Spring Cloud 开发课件.pdf 第3页
- **来源口径**：课件

**解析：** 微服务强调围绕清晰的业务边界拆分，每个服务承担相对独立的业务能力并可独立部署。

**选项辨析：**

- A：正确。业务边界是主要依据。
- B：错误。类级拆分会制造大量网络开销。
- C：错误。字段不是服务边界。
- D：错误。人员姓名不是架构边界。

**官方参考：** https://docs.spring.io/spring-cloud/docs/current/reference/html/

### SPRING2-422（单选题）

- **学习阶段**：Spring Cloud 分布式治理
- **主题**：微服务架构
- **认知层级**：认识
- **难度**：易
- **前置题**：SPRING2-301

微服务中的“独立部署”主要意味着什么？

A. 单个服务可以独立发布和扩展
B. 所有服务必须同时停机发布
C. 所有服务共享同一个进程
D. 服务不能使用网络通信

- **答案**：A
- **课件依据**：Spring Cloud 开发课件.pdf 第3页
- **来源口径**：课件

**解析：** 独立部署让局部变更不必牵动整个系统，也是微服务自治性的直接体现。

**选项辨析：**

- A：正确。独立发布和扩展是核心。
- B：错误。同时停机与独立部署相反。
- C：错误。共享进程更接近单体。
- D：错误。微服务依赖轻量网络通信。

**官方参考：** https://docs.spring.io/spring-cloud/docs/current/reference/html/

### SPRING2-423（单选题）

- **学习阶段**：Spring Cloud 分布式治理
- **主题**：微服务架构
- **认知层级**：分析
- **难度**：难
- **前置题**：SPRING2-301

单体应用中一个模块资源耗尽可能拖垮整个应用，微服务主要通过什么机制缓解？

A. 故障隔离
B. 删除所有日志
C. 强制共享线程池
D. 取消服务边界

- **答案**：A
- **课件依据**：Spring Cloud 开发课件.pdf 第3页
- **来源口径**：课件

**解析：** 独立进程和服务边界可以把故障影响限制在局部，再配合超时、熔断等机制阻断扩散。

**选项辨析：**

- A：正确。故障隔离是微服务优势。
- B：错误。日志与是否隔离无关。
- C：错误。共享资源可能扩大影响。
- D：错误。取消边界会退回单体模式。

**官方参考：** https://docs.spring.io/spring-cloud/docs/current/reference/html/

### SPRING2-424（单选题）

- **学习阶段**：Spring Cloud 分布式治理
- **主题**：生态组件
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-301

下列哪项最适合作为微服务统一入口？

A. Spring Cloud Gateway
B. Nacos配置文件
C. OpenFeign接口
D. Sentinel规则文件

- **答案**：A
- **课件依据**：Spring Cloud 开发课件.pdf 第3页
- **来源口径**：课件

**解析：** Gateway在入口处承担路由、鉴权、限流和过滤等职责。

**选项辨析：**

- A：正确。Gateway是统一入口。
- B：错误。Nacos主要管理注册和配置。
- C：错误。Feign是服务调用客户端。
- D：错误。规则文件不是入口组件。

**官方参考：** https://docs.spring.io/spring-cloud/docs/current/reference/html/

### SPRING2-425（单选题）

- **学习阶段**：Spring Cloud 分布式治理
- **主题**：Nacos定位
- **认知层级**：认识
- **难度**：易
- **前置题**：SPRING2-301

Nacos在课件中被定位为哪类基础组件？

A. 注册中心与配置中心一体化组件
B. 只负责日志采集的Agent
C. 只负责页面渲染的引擎
D. Java编译器插件

- **答案**：A
- **课件依据**：Spring Cloud 开发课件.pdf 第6页
- **来源口径**：课件

**解析：** Nacos同时提供服务注册发现和集中配置管理能力，可以减少微服务基础设施的层级。

**选项辨析：**

- A：正确。这是Nacos的双重定位。
- B：错误。日志Agent不是其主要定位。
- C：错误。页面渲染不属于Nacos。
- D：错误。不是编译器插件。

**官方参考：** https://docs.spring.io/spring-cloud/docs/current/reference/html/

### SPRING2-426（单选题）

- **学习阶段**：Spring Cloud 分布式治理
- **主题**：服务拆分
- **认知层级**：认识
- **难度**：易
- **前置题**：SPRING2-301

微服务初期不宜过度拆分的主要原因是什么？

A. 网络调用、部署和运维复杂度会快速增加
B. 拆分越细越不需要测试
C. 服务越多就不会有故障
D. 拆分会自动得到强一致性

- **答案**：A
- **课件依据**：Spring Cloud 开发课件.pdf 第12页
- **来源口径**：课件

**解析：** 服务粒度过细会带来更多调用链、部署单元和治理成本，应从边界清晰的核心模块渐进演进。

**选项辨析：**

- A：正确。复杂度增加是主要风险。
- B：错误。仍然需要测试。
- C：错误。服务多不会消除故障。
- D：错误。拆分不提供一致性保证。

**官方参考：** https://docs.spring.io/spring-cloud/docs/current/reference/html/

### SPRING2-427（单选题）

- **学习阶段**：Spring Cloud 分布式治理
- **主题**：可观测性
- **认知层级**：认识
- **难度**：易
- **前置题**：SPRING2-301

微服务调用出现“慢但不报错”时，优先补充哪类信息最有帮助？

A. 链路追踪和响应时间指标
B. 只看编译器警告
C. 删除所有请求日志
D. 只检查前端颜色

- **答案**：A
- **课件依据**：Spring Cloud 开发课件.pdf 第14页
- **来源口径**：课件

**解析：** 慢调用需要在链路和指标中定位具体服务、方法及耗时，单看编译警告无法解释运行时延迟。

**选项辨析：**

- A：正确。链路和指标能定位慢点。
- B：错误。编译警告不是运行时延迟证据。
- C：错误。删除日志会降低可诊断性。
- D：错误。颜色与服务性能无关。

**官方参考：** https://docs.spring.io/spring-cloud/docs/current/reference/html/

### SPRING2-428（单选题）

- **学习阶段**：Spring Cloud 分布式治理
- **主题**：架构演进
- **认知层级**：认识
- **难度**：易
- **前置题**：SPRING2-301

从单体演进到微服务时，课件建议优先依据什么拆分？

A. 清晰的业务域边界
B. 技术层级名称
C. 代码行数绝对平均
D. 服务器磁盘目录

- **答案**：A
- **课件依据**：Spring Cloud 开发课件.pdf 第4页
- **来源口径**：课件

**解析：** 业务域边界比技术层级更能形成高内聚、低耦合的服务职责。

**选项辨析：**

- A：正确。业务边界是建议依据。
- B：错误。技术层级不是充分边界。
- C：错误。平均代码行数不代表职责。
- D：错误。磁盘目录无关。

**官方参考：** https://docs.spring.io/spring-cloud/docs/current/reference/html/

### SPRING2-437（单选题）

- **学习阶段**：Spring Cloud 分布式治理
- **主题**：服务边界
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-301

如果订单服务和支付服务共享同一张业务表，最明显的架构风险是？

A. 服务边界被数据库耦合，难以独立演进
B. 两服务自动获得强隔离
C. 调用延迟一定为零
D. 注册中心不再需要

- **答案**：A
- **课件依据**：Spring Cloud 开发课件.pdf 第13页
- **来源口径**：课件

**解析：** 共享数据库会让表结构和事务成为隐式耦合，削弱服务自治和独立发布能力。

**选项辨析：**

- A：正确。数据库耦合是风险。
- B：错误。共享表不是隔离。
- C：错误。本地访问仍有锁和IO延迟。
- D：错误。仍可能需要服务发现。

**官方参考：** https://docs.spring.io/spring-cloud/docs/current/reference/html/

### SPRING2-438（单选题）

- **学习阶段**：Spring Cloud 分布式治理
- **主题**：服务注册
- **认知层级**：认识
- **难度**：易
- **前置题**：SPRING2-301

服务实例启动时向注册中心上报IP、端口等信息，这一步称为？

A. 服务注册
B. 服务熔断
C. 请求降级
D. 路由过滤

- **答案**：A
- **课件依据**：Spring Cloud 开发课件.pdf 第5页
- **来源口径**：课件

**解析：** 注册是服务提供者向注册中心登记身份和元数据，使消费者能够发现它。

**选项辨析：**

- A：正确。描述的是注册。
- B：错误。熔断是容错机制。
- C：错误。降级是兜底策略。
- D：错误。过滤是网关能力。

**官方参考：** https://docs.spring.io/spring-cloud/docs/current/reference/html/

### SPRING2-439（单选题）

- **学习阶段**：Spring Cloud 分布式治理
- **主题**：服务治理
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-301

服务注册、调用、限流、网关和配置中心共同构成了什么能力？

A. 微服务全局治理链路
B. 单个类的语法检查
C. 前端页面布局系统
D. 数据库备份脚本

- **答案**：A
- **课件依据**：Spring Cloud 开发课件.pdf 第14页
- **来源口径**：课件

**解析：** 这些组件分别覆盖寻址、通信、流量、入口和配置，形成分布式系统治理基础。

**选项辨析：**

- A：正确。它们共同构成治理链路。
- B：错误。不是语法检查。
- C：错误。不是前端布局。
- D：错误。不是备份脚本。

**官方参考：** https://docs.spring.io/spring-cloud/docs/current/reference/html/

### SPRING2-440（单选题）

- **学习阶段**：Spring Cloud 分布式治理
- **主题**：服务注册
- **认知层级**：认识
- **难度**：易
- **前置题**：SPRING2-301

服务实例注册时除了地址外还可以携带什么？

A. 端口和元数据
B. 用户密码明文日志
C. 前端DOM节点
D. 数据库执行计划

- **答案**：A
- **课件依据**：Spring Cloud 开发课件.pdf 第5页
- **来源口径**：课件

**解析：** 注册信息通常包含IP、端口和用于路由或治理的元数据。

**选项辨析：**

- A：正确。端口和元数据属于实例信息。
- B：错误。敏感日志不是注册元数据。
- C：错误。DOM与服务注册无关。
- D：错误。执行计划不是服务身份。

**官方参考：** https://docs.spring.io/spring-cloud/docs/current/reference/html/

### SPRING2-443（单选题）

- **学习阶段**：Spring Cloud 分布式治理
- **主题**：Spring Boot与Cloud
- **认知层级**：认识
- **难度**：易
- **前置题**：SPRING2-301

Spring Boot 与 Spring Cloud 的定位关系，哪项最准确？

A. Boot偏向单个应用基础，Cloud偏向分布式治理
B. Boot只做数据库，Cloud只做前端
C. Boot和Cloud是两门互斥语言
D. Cloud只能替代Java虚拟机

- **答案**：A
- **课件依据**：Spring Cloud 开发课件.pdf 第3页
- **来源口径**：课件

**解析：** Boot提供约定式配置、内嵌服务器和可执行JAR等应用基础；Cloud治理服务发现、调用、网关和容错。

**选项辨析：**

- A：正确。这是课件的定位概括。
- B：错误。二者都不是前端或数据库专用工具。
- C：错误。它们是生态组件而非语言。
- D：错误。Cloud不替代JVM。

**官方参考：** https://docs.spring.io/spring-cloud/docs/current/reference/html/

### SPRING2-444（单选题）

- **学习阶段**：Spring Cloud 分布式治理
- **主题**：服务发现
- **认知层级**：认识
- **难度**：易
- **前置题**：SPRING2-301

消费者从Nacos获得可用服务实例列表的过程称为？

A. 服务发现
B. 服务编译
C. 配置回滚
D. 链路采样

- **答案**：A
- **课件依据**：Spring Cloud 开发课件.pdf 第5页
- **来源口径**：课件

**解析：** 服务发现让消费者获得提供者地址，随后才能选择目标实例发起调用。

**选项辨析：**

- A：正确。这是发现过程。
- B：错误。编译与寻址无关。
- C：错误。回滚是配置治理。
- D：错误。链路采样是观测能力。

**官方参考：** https://docs.spring.io/spring-cloud/docs/current/reference/html/

### SPRING2-445（单选题）

- **学习阶段**：Spring Cloud 分布式治理
- **主题**：Nacos模式
- **认知层级**：分析
- **难度**：难
- **前置题**：SPRING2-301

需要优先保证注册中心在网络分区下仍可提供服务列表，通常应偏向哪种取舍？

A. 优先可用性和分区容错，接受短暂不一致
B. 优先强一致并接受完全不可用
C. 关闭所有实例健康检查
D. 让消费者硬编码IP

- **答案**：A
- **课件依据**：Spring Cloud 开发课件.pdf 第6页
- **来源口径**：课件

**解析：** 课程材料建议基础治理组件务实偏向AP，在分区时优先保持服务发现可用。

**选项辨析：**

- A：正确。符合课件的AP取舍。
- B：错误。完全不可用会放大故障。
- C：错误。关闭健康检查会引入脏实例。
- D：错误。硬编码地址破坏治理。

**官方参考：** https://docs.spring.io/spring-cloud/docs/current/reference/html/

### SPRING2-446（单选题）

- **学习阶段**：Spring Cloud 分布式治理
- **主题**：服务发现
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-301

消费者把实例列表缓存到本地后，仍需保留哪项机制？

A. 定期刷新或变更监听
B. 删除所有网络调用
C. 把实例永久写死
D. 关闭异常摘除

- **答案**：A
- **课件依据**：Spring Cloud 开发课件.pdf 第5页
- **来源口径**：课件

**解析：** 缓存需要刷新以跟上实例上下线，不能把动态发现退化为硬编码。

**选项辨析：**

- A：正确。刷新保持列表新鲜。
- B：错误。发现本身仍需要网络协作。
- C：错误。永久写死会失去弹性。
- D：错误。异常摘除仍然必要。

**官方参考：** https://docs.spring.io/spring-cloud/docs/current/reference/html/

### SPRING2-449（单选题）

- **学习阶段**：Spring Cloud 分布式治理
- **主题**：服务名寻址
- **认知层级**：认识
- **难度**：易
- **前置题**：SPRING2-301

调用http://order-service/orders时，order-service最可能代表什么？

A. 注册中心中的逻辑服务名
B. 客户端本地文件名
C. 数据库表名
D. 网关过滤器ID

- **答案**：A
- **课件依据**：Spring Cloud 开发课件.pdf 第6页
- **来源口径**：课件

**解析：** Cloud调用通常使用逻辑服务名，再由注册发现和负载均衡解析实例。

**选项辨析：**

- A：正确。逻辑服务名用于寻址。
- B：错误。不是文件名。
- C：错误。不是表名。
- D：错误。过滤器ID用于路由配置。

**官方参考：** https://docs.spring.io/spring-cloud/docs/current/reference/html/

### SPRING2-451（单选题）

- **学习阶段**：Spring Cloud 分布式治理
- **主题**：OpenFeign
- **认知层级**：认识
- **难度**：易
- **前置题**：SPRING2-301

OpenFeign最主要解决哪类开发痛点？

A. 以声明式接口简化HTTP服务调用
B. 替代注册中心保存实例
C. 直接修改数据库表结构
D. 生成前端CSS

- **答案**：A
- **课件依据**：Spring Cloud 开发课件.pdf 第7页
- **来源口径**：课件

**解析：** Feign把远程调用契约写成接口和映射注解，减少手工拼接URL及请求模板代码。

**选项辨析：**

- A：正确。声明式远程调用是核心。
- B：错误。Feign通常结合注册发现使用。
- C：错误。不负责表结构变更。
- D：错误。不生成CSS。

**官方参考：** https://docs.spring.io/spring-cloud/docs/current/reference/html/

### SPRING2-452（单选题）

- **学习阶段**：Spring Cloud 分布式治理
- **主题**：OpenFeign
- **认知层级**：应用
- **难度**：中
- **前置题**：SPRING2-301

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

- **答案**：A
- **课件依据**：Spring Cloud 开发课件.pdf 第7页
- **来源口径**：课件

**解析：** @FeignClient和映射注解共同描述目标服务、路径与参数，调用方按接口使用即可。

**选项辨析：**

- A：正确。这是声明式Feign接口。
- B：错误。硬编码URL难以治理。
- C：错误。打印语句不是远程契约。
- D：错误。线程创建与Feign无关。

**官方参考：** https://docs.spring.io/spring-cloud/docs/current/reference/html/

### SPRING2-455（单选题）

- **学习阶段**：Spring Cloud 分布式治理
- **主题**：Gateway负载均衡
- **认知层级**：分析
- **难度**：难
- **前置题**：SPRING2-301

Gateway配置uri为lb://user-service，说明网关将如何寻找目标？

A. 通过服务发现和负载均衡选择user-service实例
B. 访问名为lb的本地文件
C. 直接连接固定IP
D. 把请求发给配置中心处理

- **答案**：A
- **课件依据**：Spring Cloud 开发课件.pdf 第10页
- **来源口径**：课件

**解析：** lb://表示目标是逻辑服务名，网关结合注册中心和负载均衡选择实例。

**选项辨析：**

- A：正确。这是服务名负载均衡写法。
- B：错误。lb不是文件路径。
- C：错误。不固定绑定一个IP。
- D：错误。配置中心不处理业务请求。

**官方参考：** https://docs.spring.io/spring-cloud/docs/current/reference/html/

### SPRING2-456（单选题）

- **学习阶段**：Spring Cloud 分布式治理
- **主题**：故障转移
- **认知层级**：分析
- **难度**：难
- **前置题**：SPRING2-301

健康检查将异常实例从列表中移除后，负载均衡器的直接收益是什么？

A. 减少请求发往故障节点的概率
B. 保证业务逻辑一定正确
C. 绕过所有权限校验
D. 自动提交分布式事务

- **答案**：A
- **课件依据**：Spring Cloud 开发课件.pdf 第5页
- **来源口径**：课件

**解析：** 实例摘除和负载均衡配合可以把流量转向可用节点，但不能保证业务逻辑无误。

**选项辨析：**

- A：正确。减少故障节点流量是收益。
- B：错误。健康检查不能验证全部业务正确性。
- C：错误。不会绕过权限。
- D：错误。不会自动提交事务。

**官方参考：** https://docs.spring.io/spring-cloud/docs/current/reference/html/

### SPRING2-457（单选题）

- **学习阶段**：Spring Cloud 分布式治理
- **主题**：负载均衡健康实例
- **认知层级**：分析
- **难度**：难
- **前置题**：SPRING2-301

负载均衡器选择实例前首先应排除哪类节点？

A. 被健康检查标记为不可用的节点
B. 响应最快的节点
C. 带有服务元数据的节点
D. 刚刚成功处理请求的节点

- **答案**：A
- **课件依据**：Spring Cloud 开发课件.pdf 第7页
- **来源口径**：课件

**解析：** 只在可用实例集合中选择，避免把请求发给已故障节点。

**选项辨析：**

- A：正确。不可用节点应被排除。
- B：错误。响应快节点通常更适合。
- C：错误。元数据不等于故障。
- D：错误。成功节点不应排除。

**官方参考：** https://docs.spring.io/spring-cloud/docs/current/reference/html/

### SPRING2-458（单选题）

- **学习阶段**：Spring Cloud 分布式治理
- **主题**：随机策略
- **认知层级**：认识
- **难度**：易
- **前置题**：SPRING2-301

随机负载策略相对于轮询的一个特点是什么？

A. 不按固定顺序选择实例
B. 一定优先选择响应最快节点
C. 只支持单实例服务
D. 会自动提供事务回滚

- **答案**：A
- **课件依据**：Spring Cloud 开发课件.pdf 第7页
- **来源口径**：课件

**解析：** 随机策略从可用实例中随机选择，避免固定节奏，但不天然感知节点性能。

**选项辨析：**

- A：正确。不固定顺序是特点。
- B：错误。响应最快需要性能感知策略。
- C：错误。单实例不体现随机价值。
- D：错误。与事务回滚无关。

**官方参考：** https://docs.spring.io/spring-cloud/docs/current/reference/html/

### SPRING2-459（单选题）

- **学习阶段**：Spring Cloud 分布式治理
- **主题**：系统自适应保护
- **认知层级**：分析
- **难度**：难
- **前置题**：SPRING2-301

Sentinel系统自适应保护可参考哪些运行指标？

A. CPU负载和内存水位
B. 代码注释数量
C. 接口命名风格
D. 用户昵称长度

- **答案**：A
- **课件依据**：Spring Cloud 开发课件.pdf 第9页
- **来源口径**：课件

**解析：** 系统保护根据机器负载等运行指标动态调节流量，避免资源耗尽。

**选项辨析：**

- A：正确。CPU和内存是运行指标。
- B：错误。注释不是负载指标。
- C：错误。命名风格不影响系统负载。
- D：错误。昵称长度不是系统保护指标。

**官方参考：** https://docs.spring.io/spring-cloud/docs/current/reference/html/

### SPRING2-461（单选题）

- **学习阶段**：Spring Cloud 分布式治理
- **主题**：配置中心
- **认知层级**：认识
- **难度**：易
- **前置题**：SPRING2-301

Nacos配置中心主要解决哪种运维问题？

A. 集中管理多环境配置并支持动态更新
B. 把所有请求转成RPC
C. 替代代码版本控制
D. 自动设计数据库范式

- **答案**：A
- **课件依据**：Spring Cloud 开发课件.pdf 第11页
- **来源口径**：课件

**解析：** 配置中心把分散配置集中存储，支持环境隔离、版本追溯和热刷新。

**选项辨析：**

- A：正确。集中配置是核心。
- B：错误。RPC不是配置中心职责。
- C：错误。不替代Git。
- D：错误。不负责数据库建模。

**官方参考：** https://docs.spring.io/spring-cloud/docs/current/reference/html/

### SPRING2-462（单选题）

- **学习阶段**：Spring Cloud 分布式治理
- **主题**：配置优先级
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-301

生产环境将数据库密码放在配置中心时，最重要的配套措施是什么？

A. 按环境隔离并限制访问权限
B. 将密码打印到每条业务日志
C. 把密码放到URL路径中
D. 让所有匿名用户可编辑

- **答案**：A
- **课件依据**：Spring Cloud 开发课件.pdf 第11页
- **来源口径**：课件

**解析：** 集中配置不等于无条件公开，Namespace、权限控制和敏感信息治理必须同时落实。

**选项辨析：**

- A：正确。隔离和权限是关键。
- B：错误。日志打印密码会泄露。
- C：错误。URL更容易暴露敏感信息。
- D：错误。匿名编辑不可接受。

**官方参考：** https://docs.spring.io/spring-cloud/docs/current/reference/html/

### SPRING2-463（单选题）

- **学习阶段**：Spring Cloud 分布式治理
- **主题**：配置回滚
- **认知层级**：分析
- **难度**：难
- **前置题**：SPRING2-301

配置中心支持版本回滚的直接价值是什么？

A. 错误配置发布后可快速恢复到已知版本
B. 代码会自动回滚到上一提交
C. 所有服务一定无需验证
D. 可以省略权限审计

- **答案**：A
- **课件依据**：Spring Cloud 开发课件.pdf 第11页
- **来源口径**：课件

**解析：** 配置版本管理把配置变更纳入可追溯流程，故障时可以恢复稳定版本。

**选项辨析：**

- A：正确。回滚配置是直接价值。
- B：错误。不会回滚代码。
- C：错误。仍需验证效果。
- D：错误。权限审计不能省略。

**官方参考：** https://docs.spring.io/spring-cloud/docs/current/reference/html/

### SPRING2-466（单选题）

- **学习阶段**：Spring Cloud 分布式治理
- **主题**：生态选型
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-301

课件提到传统Netflix OSS组件逐步转向哪类方案？

A. Spring Cloud Alibaba体系
B. 只使用JSP标签库
C. 只使用EJB容器
D. 放弃服务治理

- **答案**：A
- **课件依据**：Spring Cloud 开发课件.pdf 第4页
- **来源口径**：课件

**解析：** 课程材料指出Eureka、Hystrix等传统组件进入维护模式，国内实践更多采用Nacos、Sentinel等Alibaba体系组件。

**选项辨析：**

- A：正确。这是课件的生态演进结论。
- B：错误。JSP不是服务治理方案。
- C：错误。EJB不是Cloud替代体系。
- D：错误。微服务仍需要治理。

**官方参考：** https://docs.spring.io/spring-cloud/docs/current/reference/html/

### SPRING2-467（单选题）

- **学习阶段**：Spring Cloud 分布式治理
- **主题**：临时实例
- **认知层级**：分析
- **难度**：难
- **前置题**：SPRING2-301

Nacos临时实例因心跳超时被剔除后，最合理的解释是？

A. 注册中心将其视为异常实例，不再向消费者推荐
B. 实例的业务数据被自动删除
C. 所有服务都被强制重启
D. 配置中心永久删除了命名空间

- **答案**：A
- **课件依据**：Spring Cloud 开发课件.pdf 第6页
- **来源口径**：课件

**解析：** 临时实例的可用状态依赖心跳，超时后从服务列表移除是为了避免流量打到故障节点。

**选项辨析：**

- A：正确。这是健康摘除行为。
- B：错误。实例摘除不等于删除业务数据。
- C：错误。不会因此重启全体服务。
- D：错误。与命名空间删除无关。

**官方参考：** https://docs.spring.io/spring-cloud/docs/current/reference/html/

### SPRING2-468（单选题）

- **学习阶段**：Spring Cloud 分布式治理
- **主题**：配置隔离
- **认知层级**：认识
- **难度**：易
- **前置题**：SPRING2-301

Nacos通过Namespace和Group主要实现什么？

A. 多环境和配置分组隔离
B. 为每个请求分配线程
C. 替代HTTP协议
D. 压缩所有日志文件

- **答案**：A
- **课件依据**：Spring Cloud 开发课件.pdf 第11页
- **来源口径**：课件

**解析：** Namespace适合环境隔离，Group用于进一步组织配置，减少开发、测试、生产串用风险。

**选项辨析：**

- A：正确。这是课件强调的隔离机制。
- B：错误。与线程分配无关。
- C：错误。不替代HTTP。
- D：错误。不负责日志压缩。

**官方参考：** https://docs.spring.io/spring-cloud/docs/current/reference/html/

### SPRING2-469（单选题）

- **学习阶段**：Spring Cloud 分布式治理
- **主题**：长轮询
- **认知层级**：认识
- **难度**：易
- **前置题**：SPRING2-301

Nacos配置动态推送中的长轮询，主要作用是什么？

A. 让客户端及时感知配置变更并重新拉取
B. 让客户端每秒无条件重启
C. 把配置写入业务订单表
D. 阻止所有配置回滚

- **答案**：A
- **课件依据**：Spring Cloud 开发课件.pdf 第11页
- **来源口径**：课件

**解析：** 长轮询减少无意义的频繁查询，配置变更时及时通知客户端更新本地缓存。

**选项辨析：**

- A：正确。长轮询用于监听变更。
- B：错误。不等于重启服务。
- C：错误。与订单表无关。
- D：错误。不阻止回滚。

**官方参考：** https://docs.spring.io/spring-cloud/docs/current/reference/html/

### SPRING2-470（单选题）

- **学习阶段**：Spring Cloud 分布式治理
- **主题**：Nacos实例
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-301

临时实例和持久化实例的主要差异体现在哪方面？

A. 实例健康和注册数据的持久化语义
B. Java代码是否能编译
C. HTTP方法数量
D. 网关是否支持Path断言

- **答案**：A
- **课件依据**：Spring Cloud 开发课件.pdf 第6页
- **来源口径**：课件

**解析：** 两类实例在注册数据保存和健康状态处理上具有不同语义，应按业务场景选择。

**选项辨析：**

- A：正确。持久化语义是关键差异。
- B：错误。与编译无关。
- C：错误。与HTTP方法数量无关。
- D：错误。与网关断言无关。

**官方参考：** https://docs.spring.io/spring-cloud/docs/current/reference/html/

### SPRING2-471（单选题）

- **学习阶段**：Spring Cloud 分布式治理
- **主题**：Nacos高可用
- **认知层级**：分析
- **难度**：难
- **前置题**：SPRING2-301

注册中心集群部署的首要目标是什么？

A. 避免单点并提高服务治理可用性
B. 让业务代码不再需要异常处理
C. 保证每次读取都不产生网络开销
D. 取代所有业务数据库

- **答案**：A
- **课件依据**：Spring Cloud 开发课件.pdf 第6页
- **来源口径**：课件

**解析：** 集群和合理的一致性取舍可以提高治理平面可用性，但不替代业务容错和数据库。

**选项辨析：**

- A：正确。避免单点是主要目标。
- B：错误。业务仍需异常处理。
- C：错误。网络开销不会为零。
- D：错误。不替代业务数据库。

**官方参考：** https://docs.spring.io/spring-cloud/docs/current/reference/html/

### SPRING2-473（单选题）

- **学习阶段**：Spring Cloud 分布式治理
- **主题**：Gateway Route
- **认知层级**：认识
- **难度**：易
- **前置题**：SPRING2-301

Spring Cloud Gateway中Route由什么组成？

A. 唯一ID、目标URI、断言集合和过滤器链
B. 数据库表、索引和触发器
C. 线程池、锁和GC日志
D. 类名、方法名和字节码

- **答案**：A
- **课件依据**：Spring Cloud 开发课件.pdf 第10页
- **来源口径**：课件

**解析：** Route是网关路由的基本单元，定义匹配条件、目标地址和请求处理过滤链。

**选项辨析：**

- A：正确。这是Route四要素。
- B：错误。数据库对象不是Route。
- C：错误。线程池不是路由定义。
- D：错误。字节码不是网关路由。

**官方参考：** https://docs.spring.io/spring-cloud/docs/current/reference/html/

### SPRING2-474（单选题）

- **学习阶段**：Spring Cloud 分布式治理
- **主题**：Gateway Predicate
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-301

Gateway Predicate的作用是什么？

A. 根据路径、方法或Header等条件判断是否匹配
B. 修改数据库事务隔离级别
C. 记录JVM堆快照
D. 注册服务实例

- **答案**：A
- **课件依据**：Spring Cloud 开发课件.pdf 第10页
- **来源口径**：课件

**解析：** 断言决定一条路由是否被触发，常见条件包括Path、Method和Header。

**选项辨析：**

- A：正确。匹配条件是断言职责。
- B：错误。与数据库事务无关。
- C：错误。堆快照不属于断言。
- D：错误。注册由注册中心完成。

**官方参考：** https://docs.spring.io/spring-cloud/docs/current/reference/html/

### SPRING2-475（单选题）

- **学习阶段**：Spring Cloud 分布式治理
- **主题**：Gateway Filter
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-301

Gateway Filter通常可以完成哪类处理？

A. 请求改写、鉴权校验和日志记录
B. 编译Java源文件
C. 创建所有业务订单
D. 替换操作系统内核

- **答案**：A
- **课件依据**：Spring Cloud 开发课件.pdf 第10页
- **来源口径**：课件

**解析：** 过滤器可在请求前后执行改写、认证、审计等横切处理。

**选项辨析：**

- A：正确。这是过滤器能力。
- B：错误。编译不是Gateway职责。
- C：错误。订单逻辑属于业务服务。
- D：错误。不会替换内核。

**官方参考：** https://docs.spring.io/spring-cloud/docs/current/reference/html/

### SPRING2-476（单选题）

- **学习阶段**：Spring Cloud 分布式治理
- **主题**：Gateway StripPrefix
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-301

路由配置StripPrefix=1的直观效果是什么？

A. 转发时移除请求路径的第一段前缀
B. 把请求复制一份发送两次
C. 强制启用随机负载均衡
D. 关闭所有后置过滤器

- **答案**：A
- **课件依据**：Spring Cloud 开发课件.pdf 第10页
- **来源口径**：课件

**解析：** StripPrefix用于在转发前移除指定数量的路径段，常用于统一入口路径与后端路径解耦。

**选项辨析：**

- A：正确。它移除路径前缀。
- B：错误。不会复制请求。
- C：错误。与负载策略无关。
- D：错误。不会关闭过滤器。

**官方参考：** https://docs.spring.io/spring-cloud/docs/current/reference/html/

### SPRING2-477（单选题）

- **学习阶段**：Spring Cloud 分布式治理
- **主题**：统一入口
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-301

把鉴权放在Gateway前置过滤器的主要收益是什么？

A. 在请求进入后端服务前统一拦截非法访问
B. 让每个服务都必须复制同一套页面
C. 取消服务间通信
D. 避免所有日志记录

- **答案**：A
- **课件依据**：Spring Cloud 开发课件.pdf 第10页
- **来源口径**：课件

**解析：** 统一入口可集中校验Token和权限，减少各服务重复实现，并尽早拒绝非法流量。

**选项辨析：**

- A：正确。前置鉴权是主要收益。
- B：错误。与页面复制无关。
- C：错误。不会取消通信。
- D：错误。审计日志仍然有价值。

**官方参考：** https://docs.spring.io/spring-cloud/docs/current/reference/html/

### SPRING2-478（单选题）

- **学习阶段**：Spring Cloud 分布式治理
- **主题**：灰度发布
- **认知层级**：分析
- **难度**：难
- **前置题**：SPRING2-301

Gateway按Header或权重进行灰度分流，主要解决什么问题？

A. 让新旧版本平滑过渡并控制发布风险
B. 让所有请求永久固定到旧版本
C. 删除旧版本日志
D. 把配置中心变成本地文件

- **答案**：A
- **课件依据**：Spring Cloud 开发课件.pdf 第10页
- **来源口径**：课件

**解析：** 灰度发布只把部分符合条件的流量导向新版本，便于观察和逐步扩大范围。

**选项辨析：**

- A：正确。这是灰度分流目标。
- B：错误。不是永久固定旧版本。
- C：错误。日志仍需保留。
- D：错误。与配置中心形态无关。

**官方参考：** https://docs.spring.io/spring-cloud/docs/current/reference/html/

### SPRING2-479（单选题）

- **学习阶段**：Spring Cloud 分布式治理
- **主题**：网关路由ID
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-301

Gateway Route的唯一ID主要用于什么？

A. 标识和管理这条路由规则
B. 作为数据库主键自动建表
C. 代表下游实例IP
D. 替代所有断言条件

- **答案**：A
- **课件依据**：Spring Cloud 开发课件.pdf 第10页
- **来源口径**：课件

**解析：** 路由ID便于配置管理、日志定位和规则区分，不等于实例地址。

**选项辨析：**

- A：正确。ID标识路由。
- B：错误。不会自动建表。
- C：错误。URI才描述目标。
- D：错误。ID不能替代匹配条件。

**官方参考：** https://docs.spring.io/spring-cloud/docs/current/reference/html/

### SPRING2-487（单选题）

- **学习阶段**：Spring Cloud 分布式治理
- **主题**：网关前置过滤
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-301

前置过滤器和后置过滤器的区别主要在于什么？

A. 执行时机分别位于转发前和响应后
B. 一个运行在数据库，一个运行在浏览器
C. 一个只处理配置，一个只处理代码
D. 二者都只能修改数据库

- **答案**：A
- **课件依据**：Spring Cloud 开发课件.pdf 第10页
- **来源口径**：课件

**解析：** Pre过滤器处理请求进入下游前的逻辑，Post过滤器可增强返回响应。

**选项辨析：**

- A：正确。执行时机是主要差异。
- B：错误。它们属于网关链路。
- C：错误。不以配置和代码二分。
- D：错误。不只修改数据库。

**官方参考：** https://docs.spring.io/spring-cloud/docs/current/reference/html/

### SPRING2-489（单选题）

- **学习阶段**：Spring Cloud 分布式治理
- **主题**：熔断机制
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-301

断路器在失败率超过阈值时进入打开状态，主要目的是什么？

A. 快速拒绝后续请求，阻断故障传播
B. 无限重试直到成功
C. 清空所有业务数据
D. 绕过鉴权直接访问下游

- **答案**：A
- **课件依据**：Spring Cloud 开发课件.pdf 第8页
- **来源口径**：课件

**解析：** 打开状态让调用方快速失败，保护线程和连接等有限资源，并给故障依赖恢复时间。

**选项辨析：**

- A：正确。快速失败和隔离是目的。
- B：错误。无限重试会放大故障。
- C：错误。不会清空业务数据。
- D：错误。与鉴权无关。

**官方参考：** https://docs.spring.io/spring-cloud/docs/current/reference/html/

### SPRING2-490（单选题）

- **学习阶段**：Spring Cloud 分布式治理
- **主题**：Sentinel降级
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-301

Sentinel可依据哪类指标触发熔断降级？

A. 慢调用、异常比例或异常数
B. 代码注释行数
C. 数据库表字段颜色
D. 用户头像尺寸

- **答案**：A
- **课件依据**：Spring Cloud 开发课件.pdf 第9页
- **来源口径**：课件

**解析：** 课程材料列出的降级触发条件包括慢调用比例、异常比例和异常数等。

**选项辨析：**

- A：正确。这些是Sentinel降级指标。
- B：错误。注释行数不是运行指标。
- C：错误。字段颜色不影响调用。
- D：错误。头像尺寸不是熔断条件。

**官方参考：** https://docs.spring.io/spring-cloud/docs/current/reference/html/

### SPRING2-491（单选题）

- **学习阶段**：Spring Cloud 分布式治理
- **主题**：熔断指标
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-301

断路器统计异常比例时，统计对象通常是哪个范围？

A. 某个受保护资源或依赖调用
B. 所有用户的浏览器版本
C. 源码所有注释
D. 服务器机房名称

- **答案**：A
- **课件依据**：Spring Cloud 开发课件.pdf 第8页
- **来源口径**：课件

**解析：** 熔断规则针对资源调用的错误或慢调用情况，而不是无关的静态信息。

**选项辨析：**

- A：正确。资源调用是统计范围。
- B：错误。浏览器版本不是调用结果。
- C：错误。注释与运行时无关。
- D：错误。机房名称不是异常比例。

**官方参考：** https://docs.spring.io/spring-cloud/docs/current/reference/html/

### SPRING2-492（单选题）

- **学习阶段**：Spring Cloud 分布式治理
- **主题**：熔断恢复
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-301

半开探测请求成功后，断路器通常会怎样？

A. 逐步恢复正常转发并闭合
B. 永久保持打开
C. 删除服务注册信息
D. 清空配置中心

- **答案**：A
- **课件依据**：Spring Cloud 开发课件.pdf 第8页
- **来源口径**：课件

**解析：** 探测成功说明依赖可能恢复，断路器可以从半开回到闭合。

**选项辨析：**

- A：正确。成功后恢复转发。
- B：错误。永久打开不是正常恢复。
- C：错误。不负责删除注册。
- D：错误。不清空配置。

**官方参考：** https://docs.spring.io/spring-cloud/docs/current/reference/html/

### SPRING2-497（单选题）

- **学习阶段**：Spring Cloud 分布式治理
- **主题**：Sentinel限流
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-301

Sentinel基于QPS或并发数限流，主要解决什么问题？

A. 削峰填谷，避免瞬时流量压垮服务
B. 自动生成服务接口
C. 集中管理Git提交
D. 替代所有数据库事务

- **答案**：A
- **课件依据**：Spring Cloud 开发课件.pdf 第9页
- **来源口径**：课件

**解析：** 限流控制进入系统的请求量或并发量，使服务在可承受范围内运行。

**选项辨析：**

- A：正确。削峰填谷是限流价值。
- B：错误。不会生成接口。
- C：错误。与Git无关。
- D：错误。不替代事务。

**官方参考：** https://docs.spring.io/spring-cloud/docs/current/reference/html/

### SPRING2-498（单选题）

- **学习阶段**：Spring Cloud 分布式治理
- **主题**：Sentinel热点参数
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-301

对高频商品ID做热点参数限流，主要是在防护什么？

A. 单个热点参数被高频访问导致局部过载
B. 所有服务的版本号冲突
C. 配置文件的字符编码
D. JVM类加载顺序

- **答案**：A
- **课件依据**：Spring Cloud 开发课件.pdf 第9页
- **来源口径**：课件

**解析：** 热点参数规则能对特定用户、商品等高频参数做更细粒度的流量控制。

**选项辨析：**

- A：正确。热点保护针对局部高频参数。
- B：错误。版本号不是热点限流对象。
- C：错误。字符编码无关。
- D：错误。类加载无关。

**官方参考：** https://docs.spring.io/spring-cloud/docs/current/reference/html/

### SPRING2-499（单选题）

- **学习阶段**：Spring Cloud 分布式治理
- **主题**：限流算法
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-301

令牌桶限流通常允许什么现象？

A. 在桶内有令牌时允许一定突发流量
B. 无限制接受所有突发流量
C. 只允许定时任务访问
D. 自动修改数据库索引

- **答案**：A
- **课件依据**：Spring Cloud 开发课件.pdf 第9页
- **来源口径**：课件

**解析：** 令牌桶通过令牌产生速率和桶容量控制平均速率及可容纳的突发量。

**选项辨析：**

- A：正确。令牌桶可以容纳有限突发。
- B：错误。突发仍受容量限制。
- C：错误。不只服务定时任务。
- D：错误。与索引无关。

**官方参考：** https://docs.spring.io/spring-cloud/docs/current/reference/html/

### SPRING2-500（单选题）

- **学习阶段**：Spring Cloud 分布式治理
- **主题**：并发限流
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-301

并发数限流更直接保护哪类资源？

A. 同时占用的线程和处理能力
B. 配置文件版本号
C. 服务名称长度
D. Git分支数量

- **答案**：A
- **课件依据**：Spring Cloud 开发课件.pdf 第9页
- **来源口径**：课件

**解析：** 并发限制减少同时执行的请求数，直接保护线程池、连接等处理资源。

**选项辨析：**

- A：正确。线程和处理能力是对象。
- B：错误。版本号不受并发直接限制。
- C：错误。名称长度无关。
- D：错误。Git分支无关。

**官方参考：** https://docs.spring.io/spring-cloud/docs/current/reference/html/

### SPRING2-501（单选题）

- **学习阶段**：Spring Cloud 分布式治理
- **主题**：服务降级
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-301

服务降级的核心目标是什么？

A. 牺牲非核心功能，优先保持核心流程可用
B. 让所有非核心功能变成强一致事务
C. 把错误隐藏且不记录
D. 无限等待依赖恢复

- **答案**：A
- **课件依据**：Spring Cloud 开发课件.pdf 第8页
- **来源口径**：课件

**解析：** 降级返回缓存、默认值或友好提示，避免次要依赖拖垮核心业务链路。

**选项辨析：**

- A：正确。这是降级的价值。
- B：错误。降级不等于强一致事务。
- C：错误。仍应保留可观测性。
- D：错误。无限等待会增加阻塞。

**官方参考：** https://docs.spring.io/spring-cloud/docs/current/reference/html/

### SPRING2-502（单选题）

- **学习阶段**：Spring Cloud 分布式治理
- **主题**：降级数据
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-301

商品详情的推荐模块不可用时，最合适的降级返回可能是？

A. 隐藏推荐并返回商品核心信息
B. 返回数据库密码
C. 阻塞整个商品页
D. 把错误堆栈当商品名称

- **答案**：A
- **课件依据**：Spring Cloud 开发课件.pdf 第8页
- **来源口径**：课件

**解析：** 推荐属于可牺牲的非核心功能，降级应保障商品核心信息继续展示。

**选项辨析：**

- A：正确。隐藏非核心模块是合理降级。
- B：错误。密码不能返回。
- C：错误。不应阻塞核心页面。
- D：错误。堆栈不是业务数据。

**官方参考：** https://docs.spring.io/spring-cloud/docs/current/reference/html/

### SPRING2-504（单选题）

- **学习阶段**：Spring Cloud 分布式治理
- **主题**：CAP取舍
- **认知层级**：分析
- **难度**：难
- **前置题**：SPRING2-301

课件建议多数商品、订单业务优先接受哪种一致性模型？

A. 最终一致性
B. 所有跨服务操作都使用长时间强一致事务
C. 完全不保存状态
D. 只依赖客户端缓存且不落库

- **答案**：A
- **课件依据**：Spring Cloud 开发课件.pdf 第12页
- **来源口径**：课件

**解析：** 多数业务可用异步消息或补偿实现最终一致性，避免强一致事务拖累可用性。

**选项辨析：**

- A：正确。符合课件建议。
- B：错误。长事务会降低可用性。
- C：错误。不保存状态不符合业务。
- D：错误。客户端缓存不能替代可靠落库。

**官方参考：** https://docs.spring.io/spring-cloud/docs/current/reference/html/

### SPRING2-505（单选题）

- **学习阶段**：Spring Cloud 分布式治理
- **主题**：分布式事务
- **认知层级**：分析
- **难度**：难
- **前置题**：SPRING2-301

在确需跨服务事务但又要降低长事务影响时，课件建议评估什么？

A. TCC或Saga等柔性事务模式
B. 把所有服务合并成一个Controller方法
C. 删除失败补偿
D. 无限增加数据库锁粒度

- **答案**：A
- **课件依据**：Spring Cloud 开发课件.pdf 第12页
- **来源口径**：课件

**解析：** TCC、Saga等通过补偿或阶段性提交实现柔性一致性，需要结合业务成本评估。

**选项辨析：**

- A：正确。这是课件给出的方向。
- B：错误。合并Controller不是事务方案。
- C：错误。删除补偿会放大风险。
- D：错误。更大锁粒度会降低并发。

**官方参考：** https://docs.spring.io/spring-cloud/docs/current/reference/html/

### SPRING2-506（单选题）

- **学习阶段**：Spring Cloud 分布式治理
- **主题**：最终一致性
- **认知层级**：分析
- **难度**：难
- **前置题**：SPRING2-301

订单已创建但库存服务暂时不可用，适合的设计是？

A. 记录可靠事件并异步重试或补偿
B. 同步阻塞所有用户直到库存恢复
C. 静默丢弃订单事件
D. 直接把库存数据库暴露给网关

- **答案**：A
- **课件依据**：Spring Cloud 开发课件.pdf 第12页
- **来源口径**：课件

**解析：** 异步事件、重试和补偿能在保证核心流程可追踪的前提下实现最终一致性。

**选项辨析：**

- A：正确。这是柔性一致性思路。
- B：错误。长时间同步阻塞会降低可用性。
- C：错误。静默丢弃会造成数据丢失。
- D：错误。跨服务直连数据库破坏边界。

**官方参考：** https://docs.spring.io/spring-cloud/docs/current/reference/html/

### SPRING2-511（单选题）

- **学习阶段**：Spring Cloud 分布式治理
- **主题**：心跳续约
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-301

注册中心通过什么方式感知临时实例是否仍然存活？

A. 实例定时发送心跳
B. 消费者修改业务表
C. 网关随机猜测地址
D. 编译器扫描字节码

- **答案**：A
- **课件依据**：Spring Cloud 开发课件.pdf 第5页
- **来源口径**：课件

**解析：** 实例以心跳续约维持活性，超时未续约时注册中心可以把异常实例移出可用列表。

**选项辨析：**

- A：正确。心跳是存活检测机制。
- B：错误。业务表不能直接表示实例活性。
- C：错误。网关不能靠猜测。
- D：错误。编译器不负责服务发现。

**官方参考：** https://docs.spring.io/spring-cloud/docs/current/reference/html/

### SPRING2-512（单选题）

- **学习阶段**：Spring Cloud 分布式治理
- **主题**：注册中心缓存
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-301

课件说明消费者通常会缓存实例列表，主要收益是什么？

A. 避免每次调用都远程查询注册中心
B. 让服务永远不会下线
C. 把所有请求改成数据库查询
D. 取消健康检查

- **答案**：A
- **课件依据**：Spring Cloud 开发课件.pdf 第5页
- **来源口径**：课件

**解析：** 本地缓存降低调用链路中的注册中心压力，同时仍需通过更新机制感知实例变化。

**选项辨析：**

- A：正确。缓存减少重复远程查询。
- B：错误。缓存不能保证实例永远在线。
- C：错误。与数据库查询无关。
- D：错误。不能因此取消健康检查。

**官方参考：** https://docs.spring.io/spring-cloud/docs/current/reference/html/

### SPRING2-513（单选题）

- **学习阶段**：Spring Cloud 分布式治理
- **主题**：LoadBalancer
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-301

Spring Cloud LoadBalancer的主要职责是什么？

A. 从多个可用实例中选择请求目标
B. 负责集中存储所有配置文本
C. 将异常转换成业务成功
D. 只负责采集日志

- **答案**：A
- **课件依据**：Spring Cloud 开发课件.pdf 第7页
- **来源口径**：课件

**解析：** LoadBalancer在客户端调用前选择实例，实现多实例流量分发和基本的故障规避。

**选项辨析：**

- A：正确。实例选择是其职责。
- B：错误。配置集中管理由Nacos等组件完成。
- C：错误。它不应伪造业务成功。
- D：错误。日志不是主要职责。

**官方参考：** https://docs.spring.io/spring-cloud/docs/current/reference/html/

### SPRING2-514（单选题）

- **学习阶段**：Spring Cloud 分布式治理
- **主题**：LoadBalancer策略
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-301

轮询策略最适合哪种实例集合？

A. 性能配置相近且希望均匀分发的同构实例
B. 只有一个实例且不允许切换
C. 响应时间差异极大的异构实例
D. 没有健康状态的任意地址

- **答案**：A
- **课件依据**：Spring Cloud 开发课件.pdf 第7页
- **来源口径**：课件

**解析：** 轮询按固定顺序分发，简单公平；当节点性能差异显著时应考虑权重或响应时间策略。

**选项辨析：**

- A：正确。同构节点最适合轮询。
- B：错误。一个实例不体现负载均衡。
- C：错误。异构节点可能需要权重。
- D：错误。仍需可用实例列表。

**官方参考：** https://docs.spring.io/spring-cloud/docs/current/reference/html/

### SPRING2-515（单选题）

- **学习阶段**：Spring Cloud 分布式治理
- **主题**：LoadBalancer策略
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-301

加权响应时间策略的核心依据是什么？

A. 实例历史响应时间等性能信息
B. 服务名称字母顺序
C. 源码文件大小
D. 客户端屏幕分辨率

- **答案**：A
- **课件依据**：Spring Cloud 开发课件.pdf 第7页
- **来源口径**：课件

**解析：** 该策略根据历史响应表现动态调整权重，倾向于选择更快的实例。

**选项辨析：**

- A：正确。响应时间是核心依据。
- B：错误。名称顺序不是性能指标。
- C：错误。文件大小不能代表服务性能。
- D：错误。屏幕分辨率与服务选择无关。

**官方参考：** https://docs.spring.io/spring-cloud/docs/current/reference/html/

### SPRING2-516（单选题）

- **学习阶段**：Spring Cloud 分布式治理
- **主题**：RestTemplate
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-301

在RestTemplate上添加@LoadBalanced通常表示什么？

A. 调用时使用服务名并交给客户端负载均衡解析
B. 把RestTemplate变成数据库连接池
C. 关闭所有实例健康检查
D. 强制所有请求走浏览器

- **答案**：A
- **课件依据**：Spring Cloud 开发课件.pdf 第7页
- **来源口径**：课件

**解析：** @LoadBalanced为RestTemplate接入服务实例选择能力，使服务名可以解析为某个可用实例。

**选项辨析：**

- A：正确。这是注解的主要意义。
- B：错误。不是数据库连接池。
- C：错误。不会自动关闭健康检查。
- D：错误。与浏览器无关。

**官方参考：** https://docs.spring.io/spring-cloud/docs/current/reference/html/

### SPRING2-517（单选题）

- **学习阶段**：Spring Cloud 分布式治理
- **主题**：超时治理
- **认知层级**：分析
- **难度**：难
- **前置题**：SPRING2-301

Feign调用下游服务未设置超时，最可能引发什么风险？

A. 调用线程长期占用并放大级联阻塞
B. 请求一定立即成功
C. 注册中心自动修复业务错误
D. 所有异常都被转换为缓存命中

- **答案**：A
- **课件依据**：Spring Cloud 开发课件.pdf 第8页
- **来源口径**：课件

**解析：** 合理超时是隔离慢依赖的基础；无超时可能耗尽线程池并诱发雪崩。

**选项辨析：**

- A：正确。长期阻塞是主要风险。
- B：错误。无超时不会保证成功。
- C：错误。注册中心不修复业务逻辑。
- D：错误。缓存命中不是自动结果。

**官方参考：** https://docs.spring.io/spring-cloud/docs/current/reference/html/

### SPRING2-518（单选题）

- **学习阶段**：Spring Cloud 分布式治理
- **主题**：断路器状态
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-301

断路器半开状态通常用于做什么？

A. 试探性放行少量请求以判断依赖是否恢复
B. 永久拒绝所有请求
C. 绕过所有限流规则
D. 自动删除服务实例

- **答案**：A
- **课件依据**：Spring Cloud 开发课件.pdf 第8页
- **来源口径**：课件

**解析：** 半开是从打开到闭合前的探测阶段，成功后可恢复转发，失败则继续保护。

**选项辨析：**

- A：正确。半开用于试探恢复。
- B：错误。永久拒绝是打开状态。
- C：错误。不会绕过限流。
- D：错误。不负责删除实例。

**官方参考：** https://docs.spring.io/spring-cloud/docs/current/reference/html/

### SPRING2-519（单选题）

- **学习阶段**：Spring Cloud 分布式治理
- **主题**：雪崩效应
- **认知层级**：分析
- **难度**：难
- **前置题**：SPRING2-301

下游响应从20ms变为2s后，同步上游最危险的连锁反应是？

A. 线程长期阻塞并最终耗尽线程池
B. 调用会自动变成异步
C. 所有请求都会被缓存
D. 注册中心立即删除业务代码

- **答案**：A
- **课件依据**：Spring Cloud 开发课件.pdf 第8页
- **来源口径**：课件

**解析：** 慢调用占用工作线程，新请求继续涌入后队列和线程池耗尽，故障会向上下游扩散。

**选项辨析：**

- A：正确。这是典型雪崩链路。
- B：错误。同步调用不会自动异步。
- C：错误。缓存需要显式设计。
- D：错误。注册中心不删除代码。

**官方参考：** https://docs.spring.io/spring-cloud/docs/current/reference/html/

### SPRING2-520（单选题）

- **学习阶段**：Spring Cloud 分布式治理
- **主题**：Sentinel资源
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-301

@SentinelResource中的fallback通常用于什么？

A. 指定资源发生异常或降级时的兜底逻辑
B. 声明注册中心地址
C. 定义Gateway路径断言
D. 生成数据库索引

- **答案**：A
- **课件依据**：Spring Cloud 开发课件.pdf 第9页
- **来源口径**：课件

**解析：** fallback方法返回缓存、默认值或友好提示，把受保护资源的异常处理显式化。

**选项辨析：**

- A：正确。fallback是兜底逻辑。
- B：错误。注册地址由配置完成。
- C：错误。路径断言属于Gateway。
- D：错误。不负责索引。

**官方参考：** https://docs.spring.io/spring-cloud/docs/current/reference/html/

### SPRING2-521（单选题）

- **学习阶段**：Spring Cloud 分布式治理
- **主题**：配置刷新
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-301

结合@RefreshScope，配置变更后通常可以达到什么效果？

A. 相关Bean重新获取配置，无需重启整个服务
B. 所有Java类都被删除后重编译
C. 注册中心被关闭
D. 数据库连接永久断开

- **答案**：A
- **课件依据**：Spring Cloud 开发课件.pdf 第11页
- **来源口径**：课件

**解析：** RefreshScope让受影响的Bean在配置更新后刷新，减少重启造成的业务中断。

**选项辨析：**

- A：正确。这是动态刷新语义。
- B：错误。不会删除类。
- C：错误。不会关闭注册中心。
- D：错误。不要求断开数据库。

**官方参考：** https://docs.spring.io/spring-cloud/docs/current/reference/html/

### SPRING2-522（单选题）

- **学习阶段**：Spring Cloud 分布式治理
- **主题**：代码分析
- **认知层级**：分析
- **难度**：难
- **前置题**：SPRING2-301

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

- **答案**：A
- **课件依据**：Spring Cloud 开发课件.pdf 第13页
- **来源口径**：课件

**解析：** Path断言匹配/api/users/**，uri中的lb://user-service指定目标服务名。

**选项辨析：**

- A：正确。目标服务由lb://后面的名称决定。
- B：错误。api只是路径前缀。
- C：错误。gateway不是配置中的目标服务。
- D：错误。42是路径参数。

**官方参考：** https://docs.spring.io/spring-cloud/docs/current/reference/html/

### SPRING2-523（单选题）

- **学习阶段**：Spring Cloud 分布式治理
- **主题**：代码分析
- **认知层级**：分析
- **难度**：难
- **前置题**：SPRING2-301

在上题配置中，转发到user-service前StripPrefix=1后路径更可能变为？

~~~java
filters:
  - StripPrefix=1
~~~

A. /users/42
B. /api/users/42
C. /42
D. /api/

- **答案**：A
- **课件依据**：Spring Cloud 开发课件.pdf 第13页
- **来源口径**：课件

**解析：** StripPrefix=1只移除第一段api，保留后面的users/42。

**选项辨析：**

- A：正确。移除api后是/users/42。
- B：错误。未移除前缀。
- C：错误。移除了两段而非一段。
- D：错误。丢失了资源路径。

**官方参考：** https://docs.spring.io/spring-cloud/docs/current/reference/html/

### SPRING2-524（单选题）

- **学习阶段**：Spring Cloud 分布式治理
- **主题**：可靠调用
- **认知层级**：分析
- **难度**：难
- **前置题**：SPRING2-301

对一个会产生扣款动作的Feign调用配置重试时，必须优先考虑什么？

A. 幂等性和重复执行风险
B. 把重试次数设置为无限
C. 忽略超时和熔断
D. 每次失败都创建新订单

- **答案**：A
- **课件依据**：Spring Cloud 开发课件.pdf 第14页
- **来源口径**：课件

**解析：** 重试可能在请求已到达但响应丢失时再次执行，扣款接口必须有幂等键或状态保护。

**选项辨析：**

- A：正确。幂等是重试前提。
- B：错误。无限重试会放大故障。
- C：错误。不能忽略超时和熔断。
- D：错误。重复创建订单是危险结果。

**官方参考：** https://docs.spring.io/spring-cloud/docs/current/reference/html/

### SPRING2-525（单选题）

- **学习阶段**：Spring Cloud 分布式治理
- **主题**：Feign参数
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-301

Feign方法参数需要绑定路径变量时，常使用哪个注解？

A. @PathVariable
B. @Bean
C. @Configuration
D. @Repository

- **答案**：A
- **课件依据**：Spring Cloud 开发课件.pdf 第7页
- **来源口径**：课件

**解析：** @PathVariable把方法参数绑定到路径模板中的变量。

**选项辨析：**

- A：正确。它用于路径绑定。
- B：错误。@Bean声明对象。
- C：错误。@Configuration声明配置。
- D：错误。@Repository标记数据访问组件。

**官方参考：** https://docs.spring.io/spring-cloud/docs/current/reference/html/

### SPRING2-526（单选题）

- **学习阶段**：Spring Cloud 分布式治理
- **主题**：Feign查询参数
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-301

Feign调用中查询参数通常使用哪个注解表达？

A. @RequestParam
B. @Autowired
C. @ComponentScan
D. @Import

- **答案**：A
- **课件依据**：Spring Cloud 开发课件.pdf 第7页
- **来源口径**：课件

**解析：** @RequestParam用于把方法参数绑定到查询字符串参数。

**选项辨析：**

- A：正确。这是查询参数注解。
- B：错误。@Autowired是依赖注入。
- C：错误。@ComponentScan用于扫描。
- D：错误。@Import用于导入配置。

**官方参考：** https://docs.spring.io/spring-cloud/docs/current/reference/html/

### SPRING2-527（单选题）

- **学习阶段**：Spring Cloud 分布式治理
- **主题**：Feign契约
- **认知层级**：分析
- **难度**：难
- **前置题**：SPRING2-301

如果提供者把/orders/{id}改为/purchases/{id}，Feign接口最需要同步什么？

A. 映射路径契约
B. 本地线程池名称
C. 客户端屏幕尺寸
D. Nacos命名空间显示名称

- **答案**：A
- **课件依据**：Spring Cloud 开发课件.pdf 第7页
- **来源口径**：课件

**解析：** 提供者和消费者的HTTP契约必须一致，否则接口调用会得到路径不匹配。

**选项辨析：**

- A：正确。路径契约需要同步。
- B：错误。线程池名称不决定路径。
- C：错误。屏幕尺寸无关。
- D：错误。命名空间不是HTTP路径。

**官方参考：** https://docs.spring.io/spring-cloud/docs/current/reference/html/

### SPRING2-528（单选题）

- **学习阶段**：Spring Cloud 分布式治理
- **主题**：超时分类
- **认知层级**：分析
- **难度**：难
- **前置题**：SPRING2-301

读取超时和连接超时都需要设置的原因是？

A. 分别限制建立连接和等待响应的时间
B. 让请求自动变成幂等
C. 使注册中心无需心跳
D. 让网关跳过鉴权

- **答案**：A
- **课件依据**：Spring Cloud 开发课件.pdf 第8页
- **来源口径**：课件

**解析：** 连接超时防止建连阶段长期等待，读取超时限制下游响应迟延。

**选项辨析：**

- A：正确。两类超时控制不同阶段。
- B：错误。超时不自动保证幂等。
- C：错误。心跳仍需要。
- D：错误。与鉴权无关。

**官方参考：** https://docs.spring.io/spring-cloud/docs/current/reference/html/

## 多选题

### SPRING2-429（多选题）

- **学习阶段**：Spring Cloud 分布式治理
- **主题**：微服务特征
- **认知层级**：分析
- **难度**：难
- **前置题**：SPRING2-301

微服务架构通常具备哪些特征？

A. 服务独立部署
B. 围绕单一业务能力
C. 服务间通过轻量协议通信
D. 所有模块必须共享一个进程

- **答案**：A、B、C
- **课件依据**：Spring Cloud 开发课件.pdf 第3页
- **来源口径**：课件

**解析：** 微服务强调自治服务、单一职责和轻量通信，共享单一进程会削弱故障隔离。

**选项辨析：**

- A：正确。独立部署是特征。
- B：正确。单一业务能力有助于高内聚。
- C：正确。REST或RPC等轻量通信是常见方式。
- D：错误。共享进程更接近单体。

**官方参考：** https://docs.spring.io/spring-cloud/docs/current/reference/html/

### SPRING2-430（多选题）

- **学习阶段**：Spring Cloud 分布式治理
- **主题**：微服务收益
- **认知层级**：分析
- **难度**：难
- **前置题**：SPRING2-301

相对于传统单体，微服务可能带来哪些收益？

A. 独立扩展
B. 局部故障隔离
C. 团队并行交付
D. 天然消除所有分布式复杂度

- **答案**：A、B、C
- **课件依据**：Spring Cloud 开发课件.pdf 第3页
- **来源口径**：课件

**解析：** 微服务改善扩展、隔离和协作，但也引入网络、数据一致性和运维复杂度。

**选项辨析：**

- A：正确。服务可按需扩展。
- B：正确。进程边界有助于隔离故障。
- C：正确。团队可围绕服务并行工作。
- D：错误。它不会消除分布式复杂度。

**官方参考：** https://docs.spring.io/spring-cloud/docs/current/reference/html/

### SPRING2-431（多选题）

- **学习阶段**：Spring Cloud 分布式治理
- **主题**：注册中心收益
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-301

注册中心能够为微服务提供哪些基础能力？

A. 集中管理地址
B. 感知实例上下线
C. 支持故障转移基础
D. 自动修复任意业务Bug

- **答案**：A、B、C
- **课件依据**：Spring Cloud 开发课件.pdf 第5页
- **来源口径**：课件

**解析：** 注册中心解决寻址和实例状态问题，但不负责业务代码正确性。

**选项辨析：**

- A：正确。地址集中管理。
- B：正确。心跳和健康状态支持上下线感知。
- C：正确。可用实例列表为转移提供基础。
- D：错误。业务Bug需由业务代码和测试解决。

**官方参考：** https://docs.spring.io/spring-cloud/docs/current/reference/html/

### SPRING2-432（多选题）

- **学习阶段**：Spring Cloud 分布式治理
- **主题**：CAP取舍
- **认知层级**：分析
- **难度**：难
- **前置题**：SPRING2-301

关于微服务场景的CAP取舍，合理的有？

A. 分区容错是分布式系统必须面对的约束
B. 注册发现通常更关注可用性
C. 多数业务可以接受最终一致性
D. 任何金融和非金融场景都必须使用同一种一致性方案

- **答案**：A、B、C
- **课件依据**：Spring Cloud 开发课件.pdf 第12页
- **来源口径**：课件

**解析：** CAP取舍要结合业务，课程材料建议治理基础设施偏AP、普通业务采用最终一致性，但不能绝对化。

**选项辨析：**

- A：正确。分区容错是现实约束。
- B：正确。注册中心需在分区时继续服务。
- C：正确。最终一致性可提升可用性。
- D：错误。一致性选择必须看业务场景。

**官方参考：** https://docs.spring.io/spring-cloud/docs/current/reference/html/

### SPRING2-433（多选题）

- **学习阶段**：Spring Cloud 分布式治理
- **主题**：渐进式拆分
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-301

微服务拆分时哪些做法更稳妥？

A. 先识别核心业务边界
B. 从单体验证业务后逐步拆分
C. 评估网络和运维成本
D. 为了追求数量而把每个类都拆成服务

- **答案**：A、B、C
- **课件依据**：Spring Cloud 开发课件.pdf 第12页
- **来源口径**：课件

**解析：** 课程材料建议循序渐进，拆分应服务于业务边界而非追求服务数量。

**选项辨析：**

- A：正确。核心边界是起点。
- B：正确。先验证单体有助于降低风险。
- C：正确。成本评估不可少。
- D：错误。类级拆分会造成过度细化。

**官方参考：** https://docs.spring.io/spring-cloud/docs/current/reference/html/

### SPRING2-434（多选题）

- **学习阶段**：Spring Cloud 分布式治理
- **主题**：运维观测
- **认知层级**：认识
- **难度**：易
- **前置题**：SPRING2-301

微服务可观测性建设中，哪些信息具有定位价值？

A. TraceId或链路标识
B. 各服务响应耗时
C. 错误码和异常上下文
D. 只记录最终页面颜色

- **答案**：A、B、C
- **课件依据**：Spring Cloud 开发课件.pdf 第14页
- **来源口径**：课件

**解析：** 链路标识、耗时和结构化错误上下文可以把一次请求串联起来，页面颜色没有诊断价值。

**选项辨析：**

- A：正确。TraceId支持跨服务关联。
- B：正确。耗时帮助定位瓶颈。
- C：正确。上下文帮助复盘故障。
- D：错误。页面颜色不提供服务运行证据。

**官方参考：** https://docs.spring.io/spring-cloud/docs/current/reference/html/

### SPRING2-435（多选题）

- **学习阶段**：Spring Cloud 分布式治理
- **主题**：Cloud实践路线
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-301

课件建议的微服务动手路线包含哪些阶段？

A. 容器化拉起Nacos
B. 构建Provider与Consumer
C. 通过Feign进行远程调用
D. 先做复杂分布式事务再验证服务注册

- **答案**：A、B、C
- **课件依据**：Spring Cloud 开发课件.pdf 第13页
- **来源口径**：课件

**解析：** 课程材料路线先环境准备，再注册发现、远程调用和容错保护，复杂事务不应先于基础验证。

**选项辨析：**

- A：正确。Docker Compose可准备环境。
- B：正确。Provider/Consumer验证注册发现。
- C：正确。Feign练习声明式调用。
- D：错误。先做复杂事务会增加无关风险。

**官方参考：** https://docs.spring.io/spring-cloud/docs/current/reference/html/

### SPRING2-436（多选题）

- **学习阶段**：Spring Cloud 分布式治理
- **主题**：工程权衡
- **认知层级**：分析
- **难度**：难
- **前置题**：SPRING2-301

评价微服务方案时，哪些问题值得同时衡量？

A. 业务边界是否清晰
B. 网络调用和运维成本
C. 一致性与可用性取舍
D. 服务数量是否越多越先进

- **答案**：A、B、C
- **课件依据**：Spring Cloud 开发课件.pdf 第14页
- **来源口径**：课件

**解析：** 架构决策需要权衡边界、成本和一致性目标，服务数量本身不是先进性的证明。

**选项辨析：**

- A：正确。边界决定内聚和耦合。
- B：正确。网络与运维成本必须评估。
- C：正确。一致性目标取决于业务。
- D：错误。数量越多越先进是误区。

**官方参考：** https://docs.spring.io/spring-cloud/docs/current/reference/html/

### SPRING2-441（多选题）

- **学习阶段**：Spring Cloud 分布式治理
- **主题**：服务注册流程
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-301

服务注册与发现链路通常包含哪些动作？

A. 提供者注册地址和元数据
B. 消费者拉取实例列表
C. 实例发送心跳续约
D. 消费者把IP永久硬编码

- **答案**：A、B、C
- **课件依据**：Spring Cloud 开发课件.pdf 第5页
- **来源口径**：课件

**解析：** 注册、发现和心跳共同形成动态寻址链路，永久硬编码会重新引入耦合。

**选项辨析：**

- A：正确。启动注册是第一步。
- B：正确。消费者需要发现可用实例。
- C：正确。心跳用于健康感知。
- D：错误。硬编码破坏动态治理。

**官方参考：** https://docs.spring.io/spring-cloud/docs/current/reference/html/

### SPRING2-442（多选题）

- **学习阶段**：Spring Cloud 分布式治理
- **主题**：Nacos注册
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-301

服务注册信息中通常可能包含哪些内容？

A. IP地址
B. 端口
C. 实例元数据
D. 用户界面CSS文件

- **答案**：A、B、C
- **课件依据**：Spring Cloud 开发课件.pdf 第5页
- **来源口径**：课件

**解析：** 地址、端口和元数据用于动态寻址与治理，CSS不是服务实例身份信息。

**选项辨析：**

- A：正确。IP用于定位实例。
- B：正确。端口用于连接。
- C：正确。元数据可承载权重或版本等信息。
- D：错误。CSS与注册无关。

**官方参考：** https://docs.spring.io/spring-cloud/docs/current/reference/html/

### SPRING2-447（多选题）

- **学习阶段**：Spring Cloud 分布式治理
- **主题**：服务发现异常
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-301

发现调用偶发打到已下线实例时，排查方向包括哪些？

A. 检查心跳超时与摘除延迟
B. 检查消费者本地实例缓存刷新
C. 检查健康状态和网络分区
D. 直接把所有地址写死到代码

- **答案**：A、B、C
- **课件依据**：Spring Cloud 开发课件.pdf 第5页
- **来源口径**：课件

**解析：** 注册中心、消费者缓存和网络状态共同影响实例列表，硬编码是倒退方案。

**选项辨析：**

- A：正确。摘除机制可能有延迟。
- B：正确。缓存刷新是关键排查点。
- C：正确。网络分区会影响视图。
- D：错误。硬编码不能解决动态问题。

**官方参考：** https://docs.spring.io/spring-cloud/docs/current/reference/html/

### SPRING2-448（多选题）

- **学习阶段**：Spring Cloud 分布式治理
- **主题**：服务发现排障
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-301

排查消费者发现不到服务时，哪些方向合理？

A. 服务名、Namespace和Group是否一致
B. 提供者是否成功注册并发送心跳
C. 网络和权限是否允许访问Nacos
D. 只检查消费者Controller代码格式

- **答案**：A、B、C
- **课件依据**：Spring Cloud 开发课件.pdf 第5页
- **来源口径**：课件

**解析：** 发现问题常来自命名空间、注册状态、网络或权限，Controller格式不是首要方向。

**选项辨析：**

- A：正确。命名空间和分组不一致会隔离服务。
- B：正确。注册和心跳决定可见性。
- C：正确。网络权限影响访问。
- D：错误。代码格式通常不能解释注册失败。

**官方参考：** https://docs.spring.io/spring-cloud/docs/current/reference/html/

### SPRING2-450（多选题）

- **学习阶段**：Spring Cloud 分布式治理
- **主题**：综合代码分析
- **认知层级**：分析
- **难度**：难
- **前置题**：SPRING2-301

对于lb://user-service与Path=/api/users/**的配置，正确理解包括哪些？

A. 目标是逻辑服务user-service
B. Path断言限制匹配路径
C. 网关可结合注册中心选实例
D. lb://表示固定IP地址

- **答案**：A、B、C
- **课件依据**：Spring Cloud 开发课件.pdf 第13页
- **来源口径**：课件

**解析：** lb://是服务名目标，Path负责匹配，注册中心和负载均衡共同完成动态寻址。

**选项辨析：**

- A：正确。服务名来自URI。
- B：正确。Path是请求匹配条件。
- C：正确。实例选择由治理组件完成。
- D：错误。它不是固定IP写法。

**官方参考：** https://docs.spring.io/spring-cloud/docs/current/reference/html/

### SPRING2-453（多选题）

- **学习阶段**：Spring Cloud 分布式治理
- **主题**：OpenFeign
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-301

使用OpenFeign相比手写RestTemplate模板代码，通常可以获得哪些收益？

A. 接口即契约
B. 减少URL拼接错误
C. 便于和服务发现及负载均衡整合
D. 自动保证下游业务永不失败

- **答案**：A、B、C
- **课件依据**：Spring Cloud 开发课件.pdf 第7页
- **来源口径**：课件

**解析：** Feign简化契约和调用模板，并可与治理组件集成，但不能保证依赖永不失败。

**选项辨析：**

- A：正确。接口定义远程契约。
- B：正确。减少手工拼接。
- C：正确。可接入Cloud治理。
- D：错误。故障仍需超时、熔断和兜底。

**官方参考：** https://docs.spring.io/spring-cloud/docs/current/reference/html/

### SPRING2-454（多选题）

- **学习阶段**：Spring Cloud 分布式治理
- **主题**：OpenFeign契约
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-301

Feign接口设计中，哪些做法更利于维护？

A. 明确HTTP方法和路径
B. 使用@PathVariable等注解表达参数
C. 对错误和超时定义统一治理策略
D. 把服务地址散落在每个调用方法的字符串中

- **答案**：A、B、C
- **课件依据**：Spring Cloud 开发课件.pdf 第7页
- **来源口径**：课件

**解析：** 接口契约应集中表达路径和参数，地址解析交给服务治理，错误策略需要统一。

**选项辨析：**

- A：正确。映射注解清晰表达契约。
- B：正确。参数绑定减少拼接错误。
- C：正确。统一治理减少重复。
- D：错误。散落硬编码会增加维护成本。

**官方参考：** https://docs.spring.io/spring-cloud/docs/current/reference/html/

### SPRING2-460（多选题）

- **学习阶段**：Spring Cloud 分布式治理
- **主题**：负载均衡选择
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-301

选择负载策略时应考虑哪些因素？

A. 实例性能是否同质
B. 是否希望严格均匀分发
C. 是否需要感知响应时间
D. 只看策略名字是否流行

- **答案**：A、B、C
- **课件依据**：Spring Cloud 开发课件.pdf 第7页
- **来源口径**：课件

**解析：** 策略应与实例能力和业务流量特征匹配，不能只按流行度选择。

**选项辨析：**

- A：正确。异构节点需要性能感知。
- B：正确。同质节点可用轮询均匀分发。
- C：正确。响应时间策略需要性能观测。
- D：错误。流行度不是工程依据。

**官方参考：** https://docs.spring.io/spring-cloud/docs/current/reference/html/

### SPRING2-464（多选题）

- **学习阶段**：Spring Cloud 分布式治理
- **主题**：配置中心
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-301

Nacos配置中心支持哪些工程能力？

A. 集中化存储
B. Namespace/Group环境隔离
C. 配置版本追溯与回滚
D. 自动生成所有业务代码

- **答案**：A、B、C
- **课件依据**：Spring Cloud 开发课件.pdf 第11页
- **来源口径**：课件

**解析：** 配置中心解决配置治理问题，不会替代业务开发。

**选项辨析：**

- A：正确。集中存储减少配置散落。
- B：正确。Namespace和Group隔离环境。
- C：正确。版本能力支持回滚。
- D：错误。业务代码仍需人工实现。

**官方参考：** https://docs.spring.io/spring-cloud/docs/current/reference/html/

### SPRING2-465（多选题）

- **学习阶段**：Spring Cloud 分布式治理
- **主题**：配置安全
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-301

集中化配置在生产环境还需要哪些安全措施？

A. 最小权限访问
B. 敏感配置脱敏和审计
C. 按环境隔离
D. 把管理控制台匿名暴露公网

- **答案**：A、B、C
- **课件依据**：Spring Cloud 开发课件.pdf 第11页
- **来源口径**：课件

**解析：** 配置中心集中后更要控制访问和敏感信息，匿名公网暴露会扩大泄露面。

**选项辨析：**

- A：正确。最小权限减少误用。
- B：正确。敏感配置需脱敏审计。
- C：正确。环境隔离防止串用。
- D：错误。匿名公网暴露不安全。

**官方参考：** https://docs.spring.io/spring-cloud/docs/current/reference/html/

### SPRING2-472（多选题）

- **学习阶段**：Spring Cloud 分布式治理
- **主题**：Nacos能力
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-301

课件强调Nacos的哪些能力？

A. 注册中心与配置中心一体化
B. 可视化管控台
C. 临时与持久化实例模式
D. 只能单机且不支持生态集成

- **答案**：A、B、C
- **课件依据**：Spring Cloud 开发课件.pdf 第6页
- **来源口径**：课件

**解析：** Nacos提供注册、配置、控制台及不同实例模式，不能概括为只能单机。

**选项辨析：**

- A：正确。一体化是核心优势。
- B：正确。控制台便于运维。
- C：正确。AP/CP和临时/持久化模式可按场景选择。
- D：错误。课件明确其具备生态集成能力。

**官方参考：** https://docs.spring.io/spring-cloud/docs/current/reference/html/

### SPRING2-480（多选题）

- **学习阶段**：Spring Cloud 分布式治理
- **主题**：Gateway路由
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-301

Gateway一条Route的基础匹配定义通常包含哪些元素？

A. 唯一ID
B. 目标URI
C. Predicate断言集合
D. 数据库事务隔离级别

- **答案**：A、B、C
- **课件依据**：Spring Cloud 开发课件.pdf 第10页
- **来源口径**：课件

**解析：** Route通过ID、目标URI和断言定义匹配与转发；数据库事务隔离属于数据访问层，不是路由元素。

**选项辨析：**

- A：正确。ID标识路由。
- B：正确。URI指定目标。
- C：正确。断言决定是否匹配。
- D：错误。事务隔离不属于Gateway路由定义。

**官方参考：** https://docs.spring.io/spring-cloud/docs/current/reference/html/

### SPRING2-481（多选题）

- **学习阶段**：Spring Cloud 分布式治理
- **主题**：Gateway能力
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-301

统一API网关常见的职责包括哪些？

A. 认证鉴权
B. 限流防刷
C. 访问日志和监控
D. 编写每个领域服务的核心算法

- **答案**：A、B、C
- **课件依据**：Spring Cloud 开发课件.pdf 第10页
- **来源口径**：课件

**解析：** 网关适合横切治理和流量入口职责，不应承载所有领域算法。

**选项辨析：**

- A：正确。统一鉴权是入口能力。
- B：正确。限流保护后端。
- C：正确。日志监控便于审计。
- D：错误。领域算法应留在业务服务。

**官方参考：** https://docs.spring.io/spring-cloud/docs/current/reference/html/

### SPRING2-482（多选题）

- **学习阶段**：Spring Cloud 分布式治理
- **主题**：Gateway断言
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-301

Gateway Predicate可以基于哪些条件匹配请求？

A. Path路径
B. HTTP Method
C. Header
D. 数据库订单金额字段（未在请求中提供）

- **答案**：A、B、C
- **课件依据**：Spring Cloud 开发课件.pdf 第10页
- **来源口径**：课件

**解析：** 课程材料列出路径、方法和Header等请求条件，断言不能凭空读取未提供的业务字段。

**选项辨析：**

- A：正确。Path是常见断言。
- B：正确。Method可区分GET/POST。
- C：正确。Header可参与灰度或鉴权路由。
- D：错误。未在请求中的数据库字段不是直接断言条件。

**官方参考：** https://docs.spring.io/spring-cloud/docs/current/reference/html/

### SPRING2-483（多选题）

- **学习阶段**：Spring Cloud 分布式治理
- **主题**：Gateway过滤器
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-301

Gateway Filter适合实现哪些横切逻辑？

A. 改写请求路径
B. 在响应阶段补充处理
C. 鉴权和审计
D. 直接替代订单服务的领域模型

- **答案**：A、B、C
- **课件依据**：Spring Cloud 开发课件.pdf 第10页
- **来源口径**：课件

**解析：** Filter适合前置/后置的通用处理，领域模型仍应由业务服务负责。

**选项辨析：**

- A：正确。请求改写是常见用途。
- B：正确。后置过滤器可增强响应。
- C：正确。鉴权审计属于横切逻辑。
- D：错误。不应把领域模型塞入网关。

**官方参考：** https://docs.spring.io/spring-cloud/docs/current/reference/html/

### SPRING2-484（多选题）

- **学习阶段**：Spring Cloud 分布式治理
- **主题**：Gateway安全
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-301

网关作为统一入口时，哪些安全策略合理？

A. 统一校验Token和权限
B. 限制管理接口暴露范围
C. 记录访问审计
D. 把内部服务地址直接返回给匿名用户

- **答案**：A、B、C
- **课件依据**：Spring Cloud 开发课件.pdf 第10页
- **来源口径**：课件

**解析：** 网关应做前置安全和审计，同时避免泄露内部拓扑。

**选项辨析：**

- A：正确。统一鉴权减少重复。
- B：正确。管理接口需要限制。
- C：正确。审计便于追溯。
- D：错误。匿名暴露内部地址有风险。

**官方参考：** https://docs.spring.io/spring-cloud/docs/current/reference/html/

### SPRING2-485（多选题）

- **学习阶段**：Spring Cloud 分布式治理
- **主题**：Gateway配置
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-301

Gateway配置中的uri、predicates和filters分别描述什么？

A. 目标地址
B. 匹配条件
C. 请求/响应处理
D. 数据库事务隔离级别

- **答案**：A、B、C
- **课件依据**：Spring Cloud 开发课件.pdf 第10页
- **来源口径**：课件

**解析：** 三者共同组成路由规则，事务隔离不属于Gateway路由元素。

**选项辨析：**

- A：正确。uri指定目标。
- B：正确。predicates决定匹配。
- C：正确。filters扩展处理。
- D：错误。事务隔离由数据访问层管理。

**官方参考：** https://docs.spring.io/spring-cloud/docs/current/reference/html/

### SPRING2-486（多选题）

- **学习阶段**：Spring Cloud 分布式治理
- **主题**：网关灰度
- **认知层级**：分析
- **难度**：难
- **前置题**：SPRING2-301

Gateway实现灰度发布时可以依据哪些条件？

A. Header
B. Cookie
C. 权重
D. 用户数据库密码

- **答案**：A、B、C
- **课件依据**：Spring Cloud 开发课件.pdf 第10页
- **来源口径**：课件

**解析：** 课程材料列举Header、Cookie和权重等分流方式，敏感密码绝不能作为公开路由依据。

**选项辨析：**

- A：正确。Header可分流。
- B：正确。Cookie可识别实验用户。
- C：正确。权重可控制比例。
- D：错误。密码不是路由条件。

**官方参考：** https://docs.spring.io/spring-cloud/docs/current/reference/html/

### SPRING2-488（多选题）

- **学习阶段**：Spring Cloud 分布式治理
- **主题**：生态组件
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-301

下列哪些属于课件列出的Spring Cloud治理方向？

A. 服务注册发现
B. API网关
C. 熔断限流
D. 前端图片裁剪

- **答案**：A、B、C
- **课件依据**：Spring Cloud 开发课件.pdf 第4页
- **来源口径**：课件

**解析：** 注册、网关和稳定性治理是课程材料核心方向，图片裁剪不属于Cloud治理。

**选项辨析：**

- A：正确。注册发现解决寻址。
- B：正确。网关统一入口。
- C：正确。熔断限流保护系统。
- D：错误。图片裁剪不是该课件主题。

**官方参考：** https://docs.spring.io/spring-cloud/docs/current/reference/html/

### SPRING2-493（多选题）

- **学习阶段**：Spring Cloud 分布式治理
- **主题**：雪崩防护
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-301

针对下游变慢导致的线程耗尽，哪些措施有助于防护？

A. 设置合理超时
B. 熔断快速失败
C. 对非核心功能降级
D. 让请求无限排队等待

- **答案**：A、B、C
- **课件依据**：Spring Cloud 开发课件.pdf 第8页
- **来源口径**：课件

**解析：** 超时、熔断和降级分别限制等待、阻断传播并保持核心可用，无限排队会耗尽资源。

**选项辨析：**

- A：正确。超时释放资源。
- B：正确。熔断切断故障路径。
- C：正确。降级保住核心流程。
- D：错误。无限排队扩大阻塞。

**官方参考：** https://docs.spring.io/spring-cloud/docs/current/reference/html/

### SPRING2-494（多选题）

- **学习阶段**：Spring Cloud 分布式治理
- **主题**：Sentinel降级
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-301

Sentinel熔断降级机制的合理表述包括哪些？

A. 可按慢调用触发
B. 可按异常比例或异常数触发
C. 可保护不稳定依赖
D. 会自动修复下游业务逻辑

- **答案**：A、B、C
- **课件依据**：Spring Cloud 开发课件.pdf 第9页
- **来源口径**：课件

**解析：** Sentinel负责检测和隔离不稳定依赖，不负责修复下游业务实现。

**选项辨析：**

- A：正确。慢调用是触发条件。
- B：正确。异常指标也是条件。
- C：正确。隔离依赖可防扩散。
- D：错误。业务修复仍需开发和运维处理。

**官方参考：** https://docs.spring.io/spring-cloud/docs/current/reference/html/

### SPRING2-495（多选题）

- **学习阶段**：Spring Cloud 分布式治理
- **主题**：可靠性设计
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-301

设计跨服务重试时，哪些条件应同时考虑？

A. 请求是否幂等
B. 超时和退避策略
C. 熔断和最大重试次数
D. 失败后无条件重复扣款

- **答案**：A、B、C
- **课件依据**：Spring Cloud 开发课件.pdf 第14页
- **来源口径**：课件

**解析：** 重试必须和幂等、超时、退避及熔断配套，不能无条件重复具有副作用的动作。

**选项辨析：**

- A：正确。幂等决定能否安全重试。
- B：正确。退避避免瞬时放大。
- C：正确。熔断和次数上限保护系统。
- D：错误。无条件重复扣款是错误做法。

**官方参考：** https://docs.spring.io/spring-cloud/docs/current/reference/html/

### SPRING2-496（多选题）

- **学习阶段**：Spring Cloud 分布式治理
- **主题**：熔断降级结果
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-301

熔断或降级后，合理的用户体验可能包括哪些？

A. 返回缓存快照
B. 返回默认值
C. 提示稍后重试并保留核心功能
D. 直接展示完整堆栈和数据库连接串

- **答案**：A、B、C
- **课件依据**：Spring Cloud 开发课件.pdf 第8页
- **来源口径**：课件

**解析：** 用户侧应获得可控兜底，内部异常细节需记录但不能直接泄露。

**选项辨析：**

- A：正确。缓存快照可用。
- B：正确。默认值适用于非核心数据。
- C：正确。友好提示避免错误页面。
- D：错误。堆栈和连接串属于敏感信息。

**官方参考：** https://docs.spring.io/spring-cloud/docs/current/reference/html/

### SPRING2-503（多选题）

- **学习阶段**：Spring Cloud 分布式治理
- **主题**：故障隔离
- **认知层级**：分析
- **难度**：难
- **前置题**：SPRING2-301

下列哪些设计有助于避免非核心依赖拖垮核心流程？

A. 为依赖设置超时
B. 使用舱壁或线程池隔离
C. 为非核心功能提供缓存或默认值
D. 把所有依赖调用放在一个无限等待线程里

- **答案**：A、B、C
- **课件依据**：Spring Cloud 开发课件.pdf 第14页
- **来源口径**：课件

**解析：** 超时、资源隔离和降级共同保护核心流程，无限等待会造成资源耗尽。

**选项辨析：**

- A：正确。超时限制等待。
- B：正确。隔离限制故障影响范围。
- C：正确。缓存和默认值提供降级。
- D：错误。无限等待扩大故障。

**官方参考：** https://docs.spring.io/spring-cloud/docs/current/reference/html/

### SPRING2-507（多选题）

- **学习阶段**：Spring Cloud 分布式治理
- **主题**：分布式事务
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-301

减少跨服务强一致事务的常见方式包括哪些？

A. 消息异步解耦
B. 补偿机制
C. TCC或Saga柔性事务
D. 把所有服务数据库账号设为同一个超级用户

- **答案**：A、B、C
- **课件依据**：Spring Cloud 开发课件.pdf 第12页
- **来源口径**：课件

**解析：** 异步、补偿和柔性事务降低长事务耦合；共享超级账号会破坏边界和安全。

**选项辨析：**

- A：正确。消息可实现最终一致。
- B：正确。补偿修复阶段性失败。
- C：正确。TCC/Saga适合特定长流程。
- D：错误。超级账号不是治理方案。

**官方参考：** https://docs.spring.io/spring-cloud/docs/current/reference/html/

### SPRING2-508（多选题）

- **学习阶段**：Spring Cloud 分布式治理
- **主题**：调用配置
- **认知层级**：分析
- **难度**：难
- **前置题**：SPRING2-301

生产环境设计Feign远程调用时，合理的治理措施包括哪些？

A. 设置连接和读取超时
B. 结合熔断或降级
C. 记录调用耗时和错误上下文
D. 失败后无限重试

- **答案**：A、B、C
- **课件依据**：Spring Cloud 开发课件.pdf 第8页
- **来源口径**：课件

**解析：** 超时、容错和可观测性共同降低级联故障风险，无限重试会放大故障。

**选项辨析：**

- A：正确。超时限制阻塞。
- B：正确。熔断降级保护核心链路。
- C：正确。日志指标便于定位。
- D：错误。无限重试可能雪崩。

**官方参考：** https://docs.spring.io/spring-cloud/docs/current/reference/html/

### SPRING2-509（多选题）

- **学习阶段**：Spring Cloud 分布式治理
- **主题**：Feign容错
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-301

Feign调用的容错设计可以包括哪些内容？

A. 连接/读取超时
B. 熔断和降级
C. 幂等重试
D. 无条件吞掉所有异常

- **答案**：A、B、C
- **课件依据**：Spring Cloud 开发课件.pdf 第8页
- **来源口径**：课件

**解析：** 容错要有边界并保持错误可观测，吞掉全部异常会掩盖问题。

**选项辨析：**

- A：正确。超时限制阻塞。
- B：正确。熔断降级防扩散。
- C：正确。幂等是重试前提。
- D：错误。无条件吞异常不利排障。

**官方参考：** https://docs.spring.io/spring-cloud/docs/current/reference/html/

### SPRING2-510（多选题）

- **学习阶段**：Spring Cloud 分布式治理
- **主题**：配置发布
- **认知层级**：分析
- **难度**：难
- **前置题**：SPRING2-301

配置灰度发布时，哪些做法更安全？

A. 先对小范围实例生效
B. 观察指标和错误率
C. 保留可回滚的版本
D. 直接让所有生产实例同时接收未经验证的配置

- **答案**：A、B、C
- **课件依据**：Spring Cloud 开发课件.pdf 第11页
- **来源口径**：课件

**解析：** 灰度、观测和回滚构成可控发布闭环，未经验证的全量变更风险很高。

**选项辨析：**

- A：正确。小范围降低爆炸半径。
- B：正确。指标用于判断影响。
- C：正确。版本回滚是兜底。
- D：错误。未经验证全量发布不安全。

**官方参考：** https://docs.spring.io/spring-cloud/docs/current/reference/html/

### SPRING2-529（多选题）

- **学习阶段**：Spring Cloud 分布式治理
- **主题**：Boot与Cloud
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-301

关于Spring Boot和Spring Cloud，正确的有？

A. Boot提供应用基础设施
B. Cloud提供分布式治理组件
C. Cloud通常建立在Spring生态之上
D. Boot会自动替代所有业务设计

- **答案**：A、B、C
- **课件依据**：Spring Cloud 开发课件.pdf 第3页
- **来源口径**：课件

**解析：** Boot和Cloud分工不同但相互配合，业务边界和领域规则仍由团队设计。

**选项辨析：**

- A：正确。Boot负责快速构建应用。
- B：正确。Cloud负责服务协同与治理。
- C：正确。Cloud是Spring生态的一部分。
- D：错误。不会替代业务设计。

**官方参考：** https://docs.spring.io/spring-cloud/docs/current/reference/html/

### SPRING2-530（多选题）

- **学习阶段**：Spring Cloud 分布式治理
- **主题**：健康检查
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-301

关于实例心跳和健康检查，正确的有？

A. 心跳超时可触发实例摘除
B. 摘除后应避免继续向该实例转发流量
C. 健康检查能替代所有业务监控
D. 心跳只在编译期执行一次

- **答案**：A、B
- **课件依据**：Spring Cloud 开发课件.pdf 第5页
- **来源口径**：课件

**解析：** 心跳是实例活性基础，业务监控仍需独立建设。

**选项辨析：**

- A：正确。超时是摘除条件之一。
- B：正确。摘除是为了避免故障流量。
- C：错误。健康检查不能覆盖业务指标。
- D：错误。心跳是运行期持续行为。

**官方参考：** https://docs.spring.io/spring-cloud/docs/current/reference/html/

### SPRING2-531（多选题）

- **学习阶段**：Spring Cloud 分布式治理
- **主题**：LoadBalancer
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-301

Spring Cloud LoadBalancer可以支持哪些策略或能力？

A. 轮询
B. 随机选择
C. 按响应时间调整权重
D. 把所有请求固定到第一个实例

- **答案**：A、B、C
- **课件依据**：Spring Cloud 开发课件.pdf 第7页
- **来源口径**：课件

**解析：** 课程材料列举轮询、随机和加权响应时间策略，固定第一个实例会造成单点压力。

**选项辨析：**

- A：正确。轮询简单公平。
- B：正确。随机可分散请求。
- C：正确。响应时间权重能适应异构节点。
- D：错误。固定一个实例不是真正负载均衡。

**官方参考：** https://docs.spring.io/spring-cloud/docs/current/reference/html/

### SPRING2-532（多选题）

- **学习阶段**：Spring Cloud 分布式治理
- **主题**：Sentinel流控
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-301

Sentinel可以从哪些维度进行流量治理？

A. QPS限流
B. 并发线程数限流
C. 热点参数限流
D. 修改Java语法树

- **答案**：A、B、C
- **课件依据**：Spring Cloud 开发课件.pdf 第9页
- **来源口径**：课件

**解析：** 课程材料列出QPS、并发数、热点参数和系统自适应等治理能力。

**选项辨析：**

- A：正确。QPS是流控维度。
- B：正确。并发数可以直接保护线程资源。
- C：正确。热点参数可防止局部滥用。
- D：错误。语法树不是Sentinel流控能力。

**官方参考：** https://docs.spring.io/spring-cloud/docs/current/reference/html/

### SPRING2-533（多选题）

- **学习阶段**：Spring Cloud 分布式治理
- **主题**：Sentinel兜底
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-301

为受保护资源设计fallback时，哪些返回方式是合理的？

A. 返回本地缓存快照
B. 返回稳定默认值
C. 给用户友好提示并记录上下文
D. 把异常堆栈直接返回公网

- **答案**：A、B、C
- **课件依据**：Spring Cloud 开发课件.pdf 第9页
- **来源口径**：课件

**解析：** 兜底应优先保持可用并控制信息泄露，详细异常应记录在受控日志中。

**选项辨析：**

- A：正确。缓存是常见兜底。
- B：正确。默认值适合非核心数据。
- C：正确。友好提示改善体验且需可观测。
- D：错误。直接暴露堆栈有安全风险。

**官方参考：** https://docs.spring.io/spring-cloud/docs/current/reference/html/

### SPRING2-534（多选题）

- **学习阶段**：Spring Cloud 分布式治理
- **主题**：动态刷新
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-301

配置动态热刷新链路通常包含哪些步骤？

A. 服务启动时拉取配置
B. 客户端监听变更通知
C. 重新拉取并更新本地缓存
D. 必须停止全部实例后才能生效

- **答案**：A、B、C
- **课件依据**：Spring Cloud 开发课件.pdf 第11页
- **来源口径**：课件

**解析：** 课程材料描述启动拉取、长轮询监听、本地更新的流程，动态刷新正是减少重启。

**选项辨析：**

- A：正确。启动拉取是初始步骤。
- B：正确。监听用于发现变更。
- C：正确。更新缓存后Bean可刷新。
- D：错误。无需停止全部实例是热刷新的价值。

**官方参考：** https://docs.spring.io/spring-cloud/docs/current/reference/html/

### SPRING2-535（多选题）

- **学习阶段**：Spring Cloud 分布式治理
- **主题**：Spring Cloud选型
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-301

在课件范围内，Spring Cloud组件之间的合理协作包括哪些？

A. Nacos提供注册发现和配置
B. Feign负责声明式调用
C. Sentinel负责流控熔断降级
D. Gateway负责持久化订单明细

- **答案**：A、B、C
- **课件依据**：Spring Cloud 开发课件.pdf 第14页
- **来源口径**：课件

**解析：** 各组件按治理职责协作，订单明细应由业务服务和数据层负责。

**选项辨析：**

- A：正确。Nacos覆盖注册与配置。
- B：正确。Feign简化调用。
- C：正确。Sentinel提供稳定性治理。
- D：错误。Gateway不应承担业务数据持久化。

**官方参考：** https://docs.spring.io/spring-cloud/docs/current/reference/html/

### SPRING2-536（多选题）

- **学习阶段**：Spring Cloud 分布式治理
- **主题**：课件纠错
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-301

课件示例中出现组件名称拼写异常时，命题应如何处理？

A. 不把明显拼写错误作为正确知识点
B. 按当前官方组件名称纠正
C. 在解析中说明纠错依据
D. 照抄错误拼写并要求学生记忆

- **答案**：A、B、C
- **课件依据**：Spring Cloud 开发课件.pdf 第6页
- **来源口径**：课件

**解析：** 题库应以可验证的官方名称和当前文档为准，解析中标注课程材料勘误，避免把笔误固化成知识。

**选项辨析：**

- A：正确。错误拼写不应成为考点。
- B：正确。官方名称是纠错依据。
- C：正确。解析应说明口径。
- D：错误。照抄会误导学习。

**官方参考：** https://docs.spring.io/spring-cloud/docs/current/reference/html/

### SPRING2-537（多选题）

- **学习阶段**：Spring Cloud 分布式治理
- **主题**：总结复盘
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-301

完成一次Cloud实战后，哪些复盘内容有价值？

A. 故障传播路径
B. 限流和降级是否保护核心
C. 配置变更是否可追溯
D. 只统计写了多少行代码

- **答案**：A、B、C
- **课件依据**：Spring Cloud 开发课件.pdf 第13页
- **来源口径**：课件

**解析：** 复盘应关注系统行为和治理效果，而不应只看代码行数。

**选项辨析：**

- A：正确。传播路径帮助优化隔离。
- B：正确。验证治理策略是否有效。
- C：正确。配置追溯支持运维改进。
- D：错误。代码行数不是可靠性指标。

**官方参考：** https://docs.spring.io/spring-cloud/docs/current/reference/html/

### SPRING2-538（多选题）

- **学习阶段**：Spring Cloud 分布式治理
- **主题**：Feign接口
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-301

声明式Feign接口中通常应明确哪些信息？

A. 目标服务名
B. HTTP方法和路径
C. 路径或查询参数绑定
D. 本地数据库索引定义

- **答案**：A、B、C
- **课件依据**：Spring Cloud 开发课件.pdf 第7页
- **来源口径**：课件

**解析：** Feign接口表达远程契约，数据库索引属于数据层配置。

**选项辨析：**

- A：正确。服务名用于寻址。
- B：正确。方法和路径定义HTTP契约。
- C：正确。参数注解减少歧义。
- D：错误。索引不属于Feign契约。

**官方参考：** https://docs.spring.io/spring-cloud/docs/current/reference/html/

### SPRING2-539（多选题）

- **学习阶段**：Spring Cloud 分布式治理
- **主题**：Sentinel规则
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-301

Sentinel规则可以围绕哪些对象制定？

A. 资源QPS
B. 并发数
C. 热点参数
D. 源代码缩进空格数

- **答案**：A、B、C
- **课件依据**：Spring Cloud 开发课件.pdf 第9页
- **来源口径**：课件

**解析：** 流控和热点规则面向运行资源与请求特征，代码格式不是流量指标。

**选项辨析：**

- A：正确。QPS是资源流控维度。
- B：正确。并发数保护运行资源。
- C：正确。热点参数防止局部滥用。
- D：错误。缩进不影响流量规则。

**官方参考：** https://docs.spring.io/spring-cloud/docs/current/reference/html/

### SPRING2-540（多选题）

- **学习阶段**：Spring Cloud 分布式治理
- **主题**：配置热更新
- **认知层级**：分析
- **难度**：难
- **前置题**：SPRING2-301

配置热更新的完整链路可能包括哪些环节？

A. 客户端初始拉取
B. 服务端变更通知
C. 客户端更新本地缓存
D. 每次变更都重新打包镜像

- **答案**：A、B、C
- **课件依据**：Spring Cloud 开发课件.pdf 第11页
- **来源口径**：课件

**解析：** 动态配置的价值就是运行时更新，重新打包镜像不是每次变更的必需步骤。

**选项辨析：**

- A：正确。初始拉取建立配置。
- B：正确。通知让客户端及时感知。
- C：正确。本地缓存更新后Bean可刷新。
- D：错误。重新打包会失去动态治理优势。

**官方参考：** https://docs.spring.io/spring-cloud/docs/current/reference/html/

# 第6阶段：Spring Cloud Alibaba

## 单选题

### SPRING2-541（单选题）

- **学习阶段**：Spring Cloud Alibaba
- **主题**：Alibaba云原生
- **认知层级**：认识
- **难度**：易
- **前置题**：SPRING2-421

Spring Cloud Alibaba的价值主要是？

A. 把Alibaba中间件能力接入Spring Cloud编程模型
B. 替代Spring Framework
C. 只提供前端组件
D. 只提供JVM

- **答案**：A
- **课件依据**：Spring Cloud 开发课件.pdf 第1页
- **来源口径**：官方文档扩展

**解析：** 它提供Nacos、Sentinel、RocketMQ、Seata等组件的Spring集成。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：错误。该选项不是本题正确依据。
- C：错误。该选项不是本题正确依据。
- D：错误。该选项不是本题正确依据。

**官方参考：** https://sca.aliyun.com/en/

### SPRING2-542（单选题）

- **学习阶段**：Spring Cloud Alibaba
- **主题**：Nacos配置导入
- **认知层级**：认识
- **难度**：易
- **前置题**：SPRING2-421

Spring Cloud Alibaba 2025.1.x配置Nacos时，官方不再推荐依赖什么？

A. Spring Cloud Bootstrap机制
B. spring.config.import
C. application.yml
D. 配置版本管理

- **答案**：A
- **课件依据**：Spring Cloud 开发课件.pdf 第1页
- **来源口径**：官方文档扩展

**解析：** 当前官方文档说明2025.1.x起Nacos模块不再支持Bootstrap方式，应使用Config Data导入。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：错误。该选项不是本题正确依据。
- C：错误。该选项不是本题正确依据。
- D：错误。该选项不是本题正确依据。

**官方参考：** https://sca.aliyun.com/en/

### SPRING2-543（单选题）

- **学习阶段**：Spring Cloud Alibaba
- **主题**：Nacos配置导入
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-421

Nacos配置导入的典型starter artifactId是？

A. spring-cloud-starter-alibaba-nacos-config
B. spring-boot-starter-nacos-web
C. nacos-spring-old-bootstrap
D. spring-cloud-starter-gateway-only

- **答案**：A
- **课件依据**：Spring Cloud 开发课件.pdf 第1页
- **来源口径**：官方文档扩展

**解析：** 官方快速开始使用com.alibaba.cloud:spring-cloud-starter-alibaba-nacos-config。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：错误。该选项不是本题正确依据。
- C：错误。该选项不是本题正确依据。
- D：错误。该选项不是本题正确依据。

**官方参考：** https://sca.aliyun.com/en/

### SPRING2-544（单选题）

- **学习阶段**：Spring Cloud Alibaba
- **主题**：Nacos版本
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-421

使用public空Namespace且升级到Spring Cloud Alibaba 2025.0.x时，官方提示还需关注什么？

A. Nacos Server 3.x兼容要求
B. 必须改用Eureka
C. 必须关闭所有配置刷新
D. 必须删除服务发现

- **答案**：A
- **课件依据**：Spring Cloud 开发课件.pdf 第1页
- **来源口径**：官方文档扩展

**解析：** 官方Breaking Changes提示public或空ID namespace需要Nacos Server 3.x。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：错误。该选项不是本题正确依据。
- C：错误。该选项不是本题正确依据。
- D：错误。该选项不是本题正确依据。

**官方参考：** https://sca.aliyun.com/en/

### SPRING2-545（单选题）

- **学习阶段**：Spring Cloud Alibaba
- **主题**：Nacos配置优先级
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-421

同一键同时来自本地和远程配置时，命题时应优先依据什么？

A. 当前版本官方加载顺序和应用实际配置
B. 经验猜测
C. 配置文件字母顺序
D. 随机选择

- **答案**：A
- **课件依据**：Spring Cloud 开发课件.pdf 第1页
- **来源口径**：官方文档扩展

**解析：** 远程配置集成方式和版本会影响优先级，必须以官方文档及运行报告为准。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：错误。该选项不是本题正确依据。
- C：错误。该选项不是本题正确依据。
- D：错误。该选项不是本题正确依据。

**官方参考：** https://sca.aliyun.com/en/

### SPRING2-546（单选题）

- **学习阶段**：Spring Cloud Alibaba
- **主题**：Alibaba Nacos
- **认知层级**：认识
- **难度**：易
- **前置题**：SPRING2-421

Nacos配置的namespace与group同时变化时，客户端可能怎样？

A. 读取不到原配置，因为定位键已改变
B. 自动合并所有环境
C. 自动回退到任意配置
D. 只改变日志级别

- **答案**：A
- **课件依据**：Spring Cloud 开发课件.pdf 第1页
- **来源口径**：官方文档扩展

**解析：** Namespace、Group和dataId共同参与配置定位，任一变化都可能指向不同数据。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：错误。该选项不是本题正确依据。
- C：错误。该选项不是本题正确依据。
- D：错误。该选项不是本题正确依据。

**官方参考：** https://sca.aliyun.com/en/

### SPRING2-547（单选题）

- **学习阶段**：Spring Cloud Alibaba
- **主题**：Nacos发现
- **认知层级**：认识
- **难度**：易
- **前置题**：SPRING2-421

Nacos服务发现starter的典型artifactId是？

A. spring-cloud-starter-alibaba-nacos-discovery
B. spring-cloud-starter-alibaba-nacos-config-only
C. nacos-client-test
D. spring-boot-discovery-jdbc

- **答案**：A
- **课件依据**：Spring Cloud 开发课件.pdf 第1页
- **来源口径**：官方文档扩展

**解析：** 服务注册发现和配置是不同starter，应按实际能力引入。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：错误。该选项不是本题正确依据。
- C：错误。该选项不是本题正确依据。
- D：错误。该选项不是本题正确依据。

**官方参考：** https://sca.aliyun.com/en/

### SPRING2-548（单选题）

- **学习阶段**：Spring Cloud Alibaba
- **主题**：Nacos配置刷新
- **认知层级**：认识
- **难度**：易
- **前置题**：SPRING2-421

配置导入URL中refreshEnabled=true主要表达什么？

A. 允许该配置来源参与刷新
B. 关闭Nacos连接
C. 强制删除旧配置
D. 启用数据库事务

- **答案**：A
- **课件依据**：Spring Cloud 开发课件.pdf 第1页
- **来源口径**：官方文档扩展

**解析：** refreshEnabled控制外部配置变更后的刷新能力。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：错误。该选项不是本题正确依据。
- C：错误。该选项不是本题正确依据。
- D：错误。该选项不是本题正确依据。

**官方参考：** https://sca.aliyun.com/en/

### SPRING2-549（单选题）

- **学习阶段**：Spring Cloud Alibaba
- **主题**：Nacos地址
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-421

spring.cloud.nacos.discovery.server-addr主要配置什么？

A. Nacos Server地址
B. 业务服务端口
C. Gateway目标URI
D. RocketMQ消费者组

- **答案**：A
- **课件依据**：Spring Cloud 开发课件.pdf 第1页
- **来源口径**：官方文档扩展

**解析：** 该属性指向服务注册发现使用的Nacos服务器。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：错误。该选项不是本题正确依据。
- C：错误。该选项不是本题正确依据。
- D：错误。该选项不是本题正确依据。

**官方参考：** https://sca.aliyun.com/en/

### SPRING2-550（单选题）

- **学习阶段**：Spring Cloud Alibaba
- **主题**：Nacos监听
- **认知层级**：认识
- **难度**：易
- **前置题**：SPRING2-421

长轮询配置监听的直接价值是？

A. 变更时及时通知客户端而非高频空轮询
B. 每次变更都重启JVM
C. 自动创建Topic
D. 绕过认证

- **答案**：A
- **课件依据**：Spring Cloud 开发课件.pdf 第1页
- **来源口径**：官方文档扩展

**解析：** 监听减少无意义查询，配置变化后客户端重新拉取更新。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：错误。该选项不是本题正确依据。
- C：错误。该选项不是本题正确依据。
- D：错误。该选项不是本题正确依据。

**官方参考：** https://sca.aliyun.com/en/

### SPRING2-551（单选题）

- **学习阶段**：Spring Cloud Alibaba
- **主题**：Nacos注册
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-421

@EnableDiscoveryClient的典型作用是？

A. 启用服务注册与发现能力
B. 开启事务回滚
C. 开启Feign客户端扫描
D. 生成数据库Schema

- **答案**：A
- **课件依据**：Spring Cloud 开发课件.pdf 第1页
- **来源口径**：官方文档扩展

**解析：** 在相应starter和配置存在时，该注解用于启用发现客户端。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：错误。该选项不是本题正确依据。
- C：错误。该选项不是本题正确依据。
- D：错误。该选项不是本题正确依据。

**官方参考：** https://sca.aliyun.com/en/

### SPRING2-552（单选题）

- **学习阶段**：Spring Cloud Alibaba
- **主题**：Nacos配置键
- **认知层级**：认识
- **难度**：易
- **前置题**：SPRING2-421

配置中心中的dataId主要表达什么？

A. 一份配置数据的标识
B. 服务实例端口
C. 用户权限角色
D. Gateway断言类型

- **答案**：A
- **课件依据**：Spring Cloud 开发课件.pdf 第1页
- **来源口径**：官方文档扩展

**解析：** dataId与group、namespace共同定位配置数据。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：错误。该选项不是本题正确依据。
- C：错误。该选项不是本题正确依据。
- D：错误。该选项不是本题正确依据。

**官方参考：** https://sca.aliyun.com/en/

### SPRING2-553（单选题）

- **学习阶段**：Spring Cloud Alibaba
- **主题**：Nacos权限
- **认知层级**：认识
- **难度**：易
- **前置题**：SPRING2-421

生产Nacos控制台的合理安全策略是？

A. 认证、最小权限和管理网络隔离
B. 匿名暴露到公网
C. 把密码写入dataId
D. 关闭所有审计

- **答案**：A
- **课件依据**：Spring Cloud 开发课件.pdf 第1页
- **来源口径**：官方文档扩展

**解析：** 配置和治理面可改变生产行为，必须限制访问并审计。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：错误。该选项不是本题正确依据。
- C：错误。该选项不是本题正确依据。
- D：错误。该选项不是本题正确依据。

**官方参考：** https://sca.aliyun.com/en/

### SPRING2-554（单选题）

- **学习阶段**：Spring Cloud Alibaba
- **主题**：Nacos命名空间
- **认知层级**：认识
- **难度**：易
- **前置题**：SPRING2-421

使用Namespace隔离开发与生产的核心收益是？

A. 减少配置和服务实例串环境
B. 自动提高QPS
C. 替代权限系统
D. 把服务变成单体

- **答案**：A
- **课件依据**：Spring Cloud 开发课件.pdf 第1页
- **来源口径**：官方文档扩展

**解析：** Namespace提供逻辑隔离，仍需结合账号权限和发布流程。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：错误。该选项不是本题正确依据。
- C：错误。该选项不是本题正确依据。
- D：错误。该选项不是本题正确依据。

**官方参考：** https://sca.aliyun.com/en/

### SPRING2-555（单选题）

- **学习阶段**：Spring Cloud Alibaba
- **主题**：Nacos健康检查
- **认知层级**：认识
- **难度**：易
- **前置题**：SPRING2-421

2025.0.x起Nacos模块HealthIndicator默认行为有何变化？

A. 默认关闭，需要显式开启
B. 默认永久开启且不能关闭
C. 只在JDK8开启
D. 只对Gateway有效

- **答案**：A
- **课件依据**：Spring Cloud 开发课件.pdf 第1页
- **来源口径**：官方文档扩展

**解析：** 官方文档说明可通过spring.cloud.nacos.config.health-indicator.enabled或discovery对应属性显式开启。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：错误。该选项不是本题正确依据。
- C：错误。该选项不是本题正确依据。
- D：错误。该选项不是本题正确依据。

**官方参考：** https://sca.aliyun.com/en/

### SPRING2-556（单选题）

- **学习阶段**：Spring Cloud Alibaba
- **主题**：Nacos分组
- **认知层级**：认识
- **难度**：易
- **前置题**：SPRING2-421

Nacos Group主要解决什么？

A. 对同一Namespace内配置或服务进行逻辑分组
B. 设置JVM堆大小
C. 替代Gateway断言
D. 定义Java包名

- **答案**：A
- **课件依据**：Spring Cloud 开发课件.pdf 第1页
- **来源口径**：官方文档扩展

**解析：** Group用于逻辑组织和隔离，命名空间负责更高层级环境隔离。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：错误。该选项不是本题正确依据。
- C：错误。该选项不是本题正确依据。
- D：错误。该选项不是本题正确依据。

**官方参考：** https://sca.aliyun.com/en/

### SPRING2-557（单选题）

- **学习阶段**：Spring Cloud Alibaba
- **主题**：Nacos权重
- **认知层级**：认识
- **难度**：易
- **前置题**：SPRING2-421

服务实例权重通常影响什么？

A. 负载均衡时的流量分配
B. 配置文件加密算法
C. 事务隔离级别
D. 日志格式

- **答案**：A
- **课件依据**：Spring Cloud 开发课件.pdf 第1页
- **来源口径**：官方文档扩展

**解析：** 权重是实例治理元数据，具体效果依赖客户端负载均衡策略。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：错误。该选项不是本题正确依据。
- C：错误。该选项不是本题正确依据。
- D：错误。该选项不是本题正确依据。

**官方参考：** https://sca.aliyun.com/en/

### SPRING2-565（单选题）

- **学习阶段**：Spring Cloud Alibaba
- **主题**：Sentinel规则持久化
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-421

生产环境Sentinel规则不应只存在内存，通常还要考虑什么？

A. 规则持久化和变更审计
B. 把规则写入前端Cookie
C. 每次请求重新编译规则
D. 删除控制台

- **答案**：A
- **课件依据**：Spring Cloud 开发课件.pdf 第1页
- **来源口径**：官方文档扩展

**解析：** 规则持久化避免重启丢失，并便于版本和审计。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：错误。该选项不是本题正确依据。
- C：错误。该选项不是本题正确依据。
- D：错误。该选项不是本题正确依据。

**官方参考：** https://sca.aliyun.com/en/

### SPRING2-566（单选题）

- **学习阶段**：Spring Cloud Alibaba
- **主题**：Alibaba Sentinel
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-421

Sentinel入口流控和链路流控的主要差别是？

A. 后者可按调用入口区分同一资源
B. 前者只保护数据库
C. 后者只保护JVM
D. 二者都只看代码行数

- **答案**：A
- **课件依据**：Spring Cloud 开发课件.pdf 第1页
- **来源口径**：官方文档扩展

**解析：** 链路流控能够表达不同入口对资源的访问差异。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：错误。该选项不是本题正确依据。
- C：错误。该选项不是本题正确依据。
- D：错误。该选项不是本题正确依据。

**官方参考：** https://sca.aliyun.com/en/

### SPRING2-567（单选题）

- **学习阶段**：Spring Cloud Alibaba
- **主题**：Sentinel资源
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-421

Sentinel中的Resource名称主要用于什么？

A. 标识被保护的业务资源
B. 定义数据库连接串
C. 标识Git分支
D. 命名Nacos namespace

- **答案**：A
- **课件依据**：Spring Cloud 开发课件.pdf 第1页
- **来源口径**：官方文档扩展

**解析：** 流控、熔断和热点规则需要绑定到资源名称。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：错误。该选项不是本题正确依据。
- C：错误。该选项不是本题正确依据。
- D：错误。该选项不是本题正确依据。

**官方参考：** https://sca.aliyun.com/en/

### SPRING2-568（单选题）

- **学习阶段**：Spring Cloud Alibaba
- **主题**：Sentinel流控
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-421

Sentinel QPS规则直接限制什么？

A. 单位时间内资源请求数
B. 单个请求体大小
C. 数据库表行数
D. 日志字符数

- **答案**：A
- **课件依据**：Spring Cloud 开发课件.pdf 第1页
- **来源口径**：官方文档扩展

**解析：** QPS流控从请求速率维度保护资源。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：错误。该选项不是本题正确依据。
- C：错误。该选项不是本题正确依据。
- D：错误。该选项不是本题正确依据。

**官方参考：** https://sca.aliyun.com/en/

### SPRING2-569（单选题）

- **学习阶段**：Spring Cloud Alibaba
- **主题**：Sentinel并发
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-421

并发线程数规则更适合保护什么？

A. 同时执行资源的线程容量
B. 单日配置发布次数
C. HTTP Header长度
D. 数据库字段名称

- **答案**：A
- **课件依据**：Spring Cloud 开发课件.pdf 第1页
- **来源口径**：官方文档扩展

**解析：** 并发控制避免大量慢请求占满处理线程。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：错误。该选项不是本题正确依据。
- C：错误。该选项不是本题正确依据。
- D：错误。该选项不是本题正确依据。

**官方参考：** https://sca.aliyun.com/en/

### SPRING2-570（单选题）

- **学习阶段**：Spring Cloud Alibaba
- **主题**：Sentinel热点
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-421

热点参数规则相对普通QPS规则的优势是？

A. 可以针对特定参数值限流
B. 只限制网络带宽
C. 只能用于配置中心
D. 自动把热点数据写入数据库

- **答案**：A
- **课件依据**：Spring Cloud 开发课件.pdf 第1页
- **来源口径**：官方文档扩展

**解析：** 热点参数可识别某个用户、商品等高频值并精细保护。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：错误。该选项不是本题正确依据。
- C：错误。该选项不是本题正确依据。
- D：错误。该选项不是本题正确依据。

**官方参考：** https://sca.aliyun.com/en/

### SPRING2-571（单选题）

- **学习阶段**：Spring Cloud Alibaba
- **主题**：Sentinel降级
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-421

Sentinel慢调用比例降级关注什么？

A. 调用耗时超过阈值的比例
B. 代码行数比例
C. 日志级别比例
D. 数据库表大小比例

- **答案**：A
- **课件依据**：Spring Cloud 开发课件.pdf 第1页
- **来源口径**：官方文档扩展

**解析：** 慢调用比例是依赖变慢时的熔断触发维度之一。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：错误。该选项不是本题正确依据。
- C：错误。该选项不是本题正确依据。
- D：错误。该选项不是本题正确依据。

**官方参考：** https://sca.aliyun.com/en/

### SPRING2-572（单选题）

- **学习阶段**：Spring Cloud Alibaba
- **主题**：Sentinel异常比例
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-421

异常比例规则主要根据什么判断？

A. 资源调用异常占比
B. CPU品牌占比
C. 用户地区占比
D. 服务名称长度

- **答案**：A
- **课件依据**：Spring Cloud 开发课件.pdf 第1页
- **来源口径**：官方文档扩展

**解析：** 异常比例描述一段统计窗口内失败调用的占比。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：错误。该选项不是本题正确依据。
- C：错误。该选项不是本题正确依据。
- D：错误。该选项不是本题正确依据。

**官方参考：** https://sca.aliyun.com/en/

### SPRING2-578（单选题）

- **学习阶段**：Spring Cloud Alibaba
- **主题**：Seata AT
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-421

Seata AT模式更依赖什么机制？

A. 基于数据库日志和全局事务协调的自动补偿
B. 只依赖HTTP重定向
C. 只依赖前端缓存
D. 只依赖手工Excel

- **答案**：A
- **课件依据**：Spring Cloud 开发课件.pdf 第1页
- **来源口径**：官方文档扩展

**解析：** AT通过代理和回滚日志降低业务侵入，但仍需正确数据库和事务边界。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：错误。该选项不是本题正确依据。
- C：错误。该选项不是本题正确依据。
- D：错误。该选项不是本题正确依据。

**官方参考：** https://sca.aliyun.com/en/

### SPRING2-579（单选题）

- **学习阶段**：Spring Cloud Alibaba
- **主题**：Seata Saga
- **认知层级**：分析
- **难度**：难
- **前置题**：SPRING2-421

Saga模式的核心思想是？

A. 长流程拆成步骤并为已完成步骤提供补偿
B. 用一个全局锁锁住所有服务
C. 禁止任何异步操作
D. 只支持单表查询

- **答案**：A
- **课件依据**：Spring Cloud 开发课件.pdf 第1页
- **来源口径**：官方文档扩展

**解析：** Saga通过补偿动作实现长事务的柔性一致性。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：错误。该选项不是本题正确依据。
- C：错误。该选项不是本题正确依据。
- D：错误。该选项不是本题正确依据。

**官方参考：** https://sca.aliyun.com/en/

### SPRING2-580（单选题）

- **学习阶段**：Spring Cloud Alibaba
- **主题**：Alibaba Seata
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-421

Seata AT回滚依赖的undo log主要用于什么？

A. 保存回滚所需的前后镜像
B. 保存用户密码
C. 记录Gateway路由
D. 记录JVM堆栈

- **答案**：A
- **课件依据**：Spring Cloud 开发课件.pdf 第1页
- **来源口径**：官方文档扩展

**解析：** AT模式用undo log支持自动回滚，实际部署需要正确的表和权限。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：错误。该选项不是本题正确依据。
- C：错误。该选项不是本题正确依据。
- D：错误。该选项不是本题正确依据。

**官方参考：** https://sca.aliyun.com/en/

### SPRING2-585（单选题）

- **学习阶段**：Spring Cloud Alibaba
- **主题**：Alibaba RocketMQ
- **认知层级**：分析
- **难度**：难
- **前置题**：SPRING2-421

RocketMQ消费线程数配置不当可能导致什么？

A. 并发过高时下游或数据库被压垮
B. 消息自动变成有序
C. 所有消息只消费一次
D. 配置中心停止刷新

- **答案**：A
- **课件依据**：Spring Cloud 开发课件.pdf 第1页
- **来源口径**：官方文档扩展

**解析：** 并发消费需结合下游容量和幂等设计，不能只追求吞吐。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：错误。该选项不是本题正确依据。
- C：错误。该选项不是本题正确依据。
- D：错误。该选项不是本题正确依据。

**官方参考：** https://sca.aliyun.com/en/

### SPRING2-586（单选题）

- **学习阶段**：Spring Cloud Alibaba
- **主题**：RocketMQ事务消息
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-421

RocketMQ事务消息主要解决什么？

A. 本地事务与消息发送的一致性协调
B. HTTP静态资源压缩
C. 网关路径匹配
D. Bean作用域

- **答案**：A
- **课件依据**：Spring Cloud 开发课件.pdf 第1页
- **来源口径**：官方文档扩展

**解析：** 事务消息通过半消息、回查等机制协调本地事务和消息可见性。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：错误。该选项不是本题正确依据。
- C：错误。该选项不是本题正确依据。
- D：错误。该选项不是本题正确依据。

**官方参考：** https://sca.aliyun.com/en/

### SPRING2-587（单选题）

- **学习阶段**：Spring Cloud Alibaba
- **主题**：RocketMQ消费
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-421

消息消费失败时，合理的默认策略是什么？

A. 受控重试并最终进入死信或人工处理
B. 无限高速重试
C. 静默丢弃
D. 把失败标为成功

- **答案**：A
- **课件依据**：Spring Cloud 开发课件.pdf 第1页
- **来源口径**：官方文档扩展

**解析：** 可靠消费需要重试上限、死信和可观测处理。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：错误。该选项不是本题正确依据。
- C：错误。该选项不是本题正确依据。
- D：错误。该选项不是本题正确依据。

**官方参考：** https://sca.aliyun.com/en/

### SPRING2-588（单选题）

- **学习阶段**：Spring Cloud Alibaba
- **主题**：RocketMQ顺序消息
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-421

需要保证同一订单事件顺序时，通常应使用什么设计？

A. 让同一业务键路由到同一队列并顺序消费
B. 随机发到所有队列
C. 只看消息时间戳
D. 关闭消费确认

- **答案**：A
- **课件依据**：Spring Cloud 开发课件.pdf 第1页
- **来源口径**：官方文档扩展

**解析：** 顺序语义通常依赖同一分片键和顺序消费链路。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：错误。该选项不是本题正确依据。
- C：错误。该选项不是本题正确依据。
- D：错误。该选项不是本题正确依据。

**官方参考：** https://sca.aliyun.com/en/

### SPRING2-589（单选题）

- **学习阶段**：Spring Cloud Alibaba
- **主题**：RocketMQ消费幂等
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-421

RocketMQ至少一次投递意味着消费者必须考虑什么？

A. 重复消息的幂等处理
B. 消息绝不会重复
C. 可以取消业务唯一键
D. 只在前端去重

- **答案**：A
- **课件依据**：Spring Cloud 开发课件.pdf 第1页
- **来源口径**：官方文档扩展

**解析：** 至少一次投递可能造成重复消费，业务必须设计幂等。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：错误。该选项不是本题正确依据。
- C：错误。该选项不是本题正确依据。
- D：错误。该选项不是本题正确依据。

**官方参考：** https://sca.aliyun.com/en/

### SPRING2-595（单选题）

- **学习阶段**：Spring Cloud Alibaba
- **主题**：Alibaba兼容
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-421

升级Spring Cloud Alibaba前执行mvn dependency:tree的价值是？

A. 发现依赖版本冲突和传递依赖
B. 自动升级所有版本
C. 清空本地仓库
D. 创建Nacos namespace

- **答案**：A
- **课件依据**：Spring Cloud 开发课件.pdf 第1页
- **来源口径**：官方文档扩展

**解析：** 依赖树是分析Cloud、Boot和中间件版本冲突的基础证据。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：错误。该选项不是本题正确依据。
- C：错误。该选项不是本题正确依据。
- D：错误。该选项不是本题正确依据。

**官方参考：** https://sca.aliyun.com/en/

### SPRING2-596（单选题）

- **学习阶段**：Spring Cloud Alibaba
- **主题**：Alibaba版本
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-421

Spring Cloud Alibaba版本选择时最应核对什么？

A. 与Spring Boot和Spring Cloud的兼容矩阵
B. 只看artifactId长度
C. 只看博客发布日期
D. 只看JDK厂商

- **答案**：A
- **课件依据**：Spring Cloud 开发课件.pdf 第1页
- **来源口径**：官方文档扩展

**解析：** Alibaba发行列车与Boot/Cloud存在版本配套关系。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：错误。该选项不是本题正确依据。
- C：错误。该选项不是本题正确依据。
- D：错误。该选项不是本题正确依据。

**官方参考：** https://sca.aliyun.com/en/

### SPRING2-599（单选题）

- **学习阶段**：Spring Cloud Alibaba
- **主题**：Alibaba配置迁移
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-421

从旧Bootstrap迁移到Config Data时，应优先验证什么？

A. 配置导入顺序、profile和刷新语义
B. 只改类名
C. 只改日志格式
D. 只改前端路由

- **答案**：A
- **课件依据**：Spring Cloud 开发课件.pdf 第1页
- **来源口径**：官方文档扩展

**解析：** 迁移的风险集中在加载顺序、覆盖优先级和刷新行为。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：错误。该选项不是本题正确依据。
- C：错误。该选项不是本题正确依据。
- D：错误。该选项不是本题正确依据。

**官方参考：** https://sca.aliyun.com/en/

## 多选题

### SPRING2-558（多选题）

- **学习阶段**：Spring Cloud Alibaba
- **主题**：Nacos升级
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-421

从旧版本Nacos配置迁移时，正确的有？

A. 核对当前Alibaba版本
B. 关注Bootstrap到Config Data迁移
C. 验证刷新和优先级
D. 只改依赖版本不做运行验证

- **答案**：A、B、C
- **课件依据**：Spring Cloud 开发课件.pdf 第1页
- **来源口径**：官方文档扩展

**解析：** 版本迁移需要兼容矩阵、加载链路和运行验证。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：正确。该选项符合官方语义。
- C：正确。该选项符合官方语义。
- D：错误。该选项不符合本题场景。

**官方参考：** https://sca.aliyun.com/en/

### SPRING2-559（多选题）

- **学习阶段**：Spring Cloud Alibaba
- **主题**：Alibaba配置
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-421

Nacos当前配置方式迁移中，正确的有？

A. 优先阅读当前版本Breaking Changes
B. 使用spring.config.import
C. 验证不再使用Bootstrap的启动链
D. 只改文件名不测启动

- **答案**：A、B、C
- **课件依据**：Spring Cloud 开发课件.pdf 第1页
- **来源口径**：官方文档扩展

**解析：** Nacos模块版本演进会改变配置入口，迁移必须进行运行验证。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：正确。该选项符合官方语义。
- C：正确。该选项符合官方语义。
- D：错误。该选项不符合本题场景。

**官方参考：** https://sca.aliyun.com/en/

### SPRING2-560（多选题）

- **学习阶段**：Spring Cloud Alibaba
- **主题**：Nacos配置
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-421

关于Nacos Config，正确的有？

A. 可通过starter接入
B. 可使用spring.config.import
C. 可以配置刷新
D. 不需要任何认证和权限

- **答案**：A、B、C
- **课件依据**：Spring Cloud 开发课件.pdf 第1页
- **来源口径**：官方文档扩展

**解析：** Nacos配置接入、导入和刷新需要配套版本及安全配置。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：正确。该选项符合官方语义。
- C：正确。该选项符合官方语义。
- D：错误。该选项不符合本题场景。

**官方参考：** https://sca.aliyun.com/en/

### SPRING2-561（多选题）

- **学习阶段**：Spring Cloud Alibaba
- **主题**：Alibaba Nacos
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-421

Nacos配置定位通常涉及哪些维度？

A. namespace
B. group
C. dataId
D. 随机线程名

- **答案**：A、B、C
- **课件依据**：Spring Cloud 开发课件.pdf 第1页
- **来源口径**：官方文档扩展

**解析：** 三项共同定位配置，线程名不参与Nacos配置键。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：正确。该选项符合官方语义。
- C：正确。该选项符合官方语义。
- D：错误。该选项不符合本题场景。

**官方参考：** https://sca.aliyun.com/en/

### SPRING2-562（多选题）

- **学习阶段**：Spring Cloud Alibaba
- **主题**：Alibaba Nacos
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-421

Nacos配置安全治理包括？

A. namespace隔离
B. 账号权限
C. 配置审计
D. 匿名编辑生产配置

- **答案**：A、B、C
- **课件依据**：Spring Cloud 开发课件.pdf 第1页
- **来源口径**：官方文档扩展

**解析：** 隔离、权限和审计降低配置串用与误操作风险。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：正确。该选项符合官方语义。
- C：正确。该选项符合官方语义。
- D：错误。该选项不符合本题场景。

**官方参考：** https://sca.aliyun.com/en/

### SPRING2-563（多选题）

- **学习阶段**：Spring Cloud Alibaba
- **主题**：Nacos环境
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-421

Nacos环境治理可使用哪些维度？

A. Namespace
B. Group
C. dataId
D. 把密码作为服务名

- **答案**：A、B、C
- **课件依据**：Spring Cloud 开发课件.pdf 第1页
- **来源口径**：官方文档扩展

**解析：** Namespace、Group和dataId共同组织配置，敏感信息不应放服务名。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：正确。该选项符合官方语义。
- C：正确。该选项符合官方语义。
- D：错误。该选项不符合本题场景。

**官方参考：** https://sca.aliyun.com/en/

### SPRING2-564（多选题）

- **学习阶段**：Spring Cloud Alibaba
- **主题**：Nacos发现
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-421

关于Nacos Discovery，正确的有？

A. 实例可注册地址和元数据
B. 消费者可以发现实例列表
C. 心跳用于健康感知
D. 发现后必须把IP永久写死

- **答案**：A、B、C
- **课件依据**：Spring Cloud 开发课件.pdf 第1页
- **来源口径**：官方文档扩展

**解析：** 动态注册发现的价值就是避免硬编码地址。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：正确。该选项符合官方语义。
- C：正确。该选项符合官方语义。
- D：错误。该选项不符合本题场景。

**官方参考：** https://sca.aliyun.com/en/

### SPRING2-573（多选题）

- **学习阶段**：Spring Cloud Alibaba
- **主题**：Alibaba Sentinel
- **认知层级**：理解
- **难度**：中
- **前置题**：SPRING2-421

热点参数保护设计中，正确的有？

A. 识别高频参数值
B. 针对热点值设置更严阈值
C. 防止单个用户或商品拖垮服务
D. 把所有参数都视为热点并无限限流

- **答案**：A、B、C
- **课件依据**：Spring Cloud 开发课件.pdf 第1页
- **来源口径**：官方文档扩展

**解析：** 热点规则应按实际访问分布配置，不能无差别阻断所有参数。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：正确。该选项符合官方语义。
- C：正确。该选项符合官方语义。
- D：错误。该选项不符合本题场景。

**官方参考：** https://sca.aliyun.com/en/

### SPRING2-574（多选题）

- **学习阶段**：Spring Cloud Alibaba
- **主题**：Alibaba Sentinel
- **认知层级**：分析
- **难度**：难
- **前置题**：SPRING2-421

Sentinel生产治理合理做法包括？

A. 规则持久化
B. 对热点参数限流
C. 为降级提供兜底
D. 无限重试被拒请求

- **答案**：A、B、C
- **课件依据**：Spring Cloud 开发课件.pdf 第1页
- **来源口径**：官方文档扩展

**解析：** 规则可恢复、热点可保护、降级有兜底，拒绝请求不能无限重试。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：正确。该选项符合官方语义。
- C：正确。该选项符合官方语义。
- D：错误。该选项不符合本题场景。

**官方参考：** https://sca.aliyun.com/en/

### SPRING2-575（多选题）

- **学习阶段**：Spring Cloud Alibaba
- **主题**：Alibaba Sentinel
- **认知层级**：分析
- **难度**：难
- **前置题**：SPRING2-421

Sentinel资源保护策略可组合哪些？

A. QPS限流
B. 并发限流
C. 异常比例降级
D. 让拒绝请求无限重试

- **答案**：A、B、C
- **课件依据**：Spring Cloud 开发课件.pdf 第1页
- **来源口径**：官方文档扩展

**解析：** 流量和异常保护要有边界，拒绝请求无限重试会放大压力。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：正确。该选项符合官方语义。
- C：正确。该选项符合官方语义。
- D：错误。该选项不符合本题场景。

**官方参考：** https://sca.aliyun.com/en/

### SPRING2-576（多选题）

- **学习阶段**：Spring Cloud Alibaba
- **主题**：Sentinel流控
- **认知层级**：分析
- **难度**：难
- **前置题**：SPRING2-421

Sentinel流控规则可以基于哪些维度？

A. QPS
B. 并发线程数
C. 热点参数
D. Git提交作者

- **答案**：A、B、C
- **课件依据**：Spring Cloud 开发课件.pdf 第1页
- **来源口径**：官方文档扩展

**解析：** 流控围绕运行请求和参数特征，Git作者不影响流量规则。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：正确。该选项符合官方语义。
- C：正确。该选项符合官方语义。
- D：错误。该选项不符合本题场景。

**官方参考：** https://sca.aliyun.com/en/

### SPRING2-577（多选题）

- **学习阶段**：Spring Cloud Alibaba
- **主题**：Sentinel降级
- **认知层级**：分析
- **难度**：难
- **前置题**：SPRING2-421

Sentinel降级可以关注哪些信号？

A. 慢调用比例
B. 异常比例
C. 异常数
D. 代码注释行数

- **答案**：A、B、C
- **课件依据**：Spring Cloud 开发课件.pdf 第1页
- **来源口径**：官方文档扩展

**解析：** 慢调用和异常统计是保护不稳定依赖的运行指标。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：正确。该选项符合官方语义。
- C：正确。该选项符合官方语义。
- D：错误。该选项不符合本题场景。

**官方参考：** https://sca.aliyun.com/en/

### SPRING2-581（多选题）

- **学习阶段**：Spring Cloud Alibaba
- **主题**：Alibaba Seata
- **认知层级**：分析
- **难度**：难
- **前置题**：SPRING2-421

分布式事务补偿设计应包括？

A. 幂等
B. 状态机或业务状态记录
C. 失败重试和人工兜底
D. 把所有服务锁成一个长事务

- **答案**：A、B、C
- **课件依据**：Spring Cloud 开发课件.pdf 第1页
- **来源口径**：官方文档扩展

**解析：** 补偿本身可能重试和乱序，需要幂等、状态和兜底。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：正确。该选项符合官方语义。
- C：正确。该选项符合官方语义。
- D：错误。该选项不符合本题场景。

**官方参考：** https://sca.aliyun.com/en/

### SPRING2-582（多选题）

- **学习阶段**：Spring Cloud Alibaba
- **主题**：Alibaba Seata
- **认知层级**：分析
- **难度**：难
- **前置题**：SPRING2-421

选择Seata事务模式时应衡量哪些因素？

A. 一致性目标
B. 业务侵入性
C. 补偿复杂度和性能
D. 只看模式名称是否流行

- **答案**：A、B、C
- **课件依据**：Spring Cloud 开发课件.pdf 第1页
- **来源口径**：官方文档扩展

**解析：** AT、TCC、Saga和XA各有取舍，应结合业务约束选择。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：正确。该选项符合官方语义。
- C：正确。该选项符合官方语义。
- D：错误。该选项不符合本题场景。

**官方参考：** https://sca.aliyun.com/en/

### SPRING2-583（多选题）

- **学习阶段**：Spring Cloud Alibaba
- **主题**：Seata模式
- **认知层级**：分析
- **难度**：难
- **前置题**：SPRING2-421

Seata的事务模式各有不同取舍，正确的有？

A. AT降低业务侵入
B. TCC要求Try/Confirm/Cancel
C. Saga依赖补偿动作
D. 所有模式都不需要幂等

- **答案**：A、B、C
- **课件依据**：Spring Cloud 开发课件.pdf 第1页
- **来源口径**：官方文档扩展

**解析：** 不同模式在侵入性、一致性和性能之间权衡，幂等是通用要求。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：正确。该选项符合官方语义。
- C：正确。该选项符合官方语义。
- D：错误。该选项不符合本题场景。

**官方参考：** https://sca.aliyun.com/en/

### SPRING2-584（多选题）

- **学习阶段**：Spring Cloud Alibaba
- **主题**：Alibaba Seata
- **认知层级**：分析
- **难度**：难
- **前置题**：SPRING2-421

TCC补偿实现中，正确的有？

A. Try应可重入或幂等
B. Confirm和Cancel可能被重复调用
C. 需要记录业务状态
D. 把Cancel实现成无条件删除所有数据

- **答案**：A、B、C
- **课件依据**：Spring Cloud 开发课件.pdf 第1页
- **来源口径**：官方文档扩展

**解析：** 补偿调用可能重试或乱序，必须基于状态安全处理。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：正确。该选项符合官方语义。
- C：正确。该选项符合官方语义。
- D：错误。该选项不符合本题场景。

**官方参考：** https://sca.aliyun.com/en/

### SPRING2-590（多选题）

- **学习阶段**：Spring Cloud Alibaba
- **主题**：RocketMQ事务消息
- **认知层级**：分析
- **难度**：难
- **前置题**：SPRING2-421

事务消息设计中，正确的有？

A. 本地事务先执行并返回状态
B. Broker可通过回查确认未知状态
C. 消费者仍需幂等
D. 发送失败就静默丢弃

- **答案**：A、B、C
- **课件依据**：Spring Cloud 开发课件.pdf 第1页
- **来源口径**：官方文档扩展

**解析：** 事务消息协调本地事务和消息可见性，但消费者端仍需可靠处理。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：正确。该选项符合官方语义。
- C：正确。该选项符合官方语义。
- D：错误。该选项不符合本题场景。

**官方参考：** https://sca.aliyun.com/en/

### SPRING2-591（多选题）

- **学习阶段**：Spring Cloud Alibaba
- **主题**：Alibaba RocketMQ
- **认知层级**：分析
- **难度**：难
- **前置题**：SPRING2-421

RocketMQ可靠消息消费需要哪些能力？

A. 消费重试
B. 死信或失败转移
C. 业务幂等
D. 把异常吞掉并确认成功

- **答案**：A、B、C
- **课件依据**：Spring Cloud 开发课件.pdf 第1页
- **来源口径**：官方文档扩展

**解析：** 失败需要可追踪和可恢复，吞异常确认会造成数据丢失。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：正确。该选项符合官方语义。
- C：正确。该选项符合官方语义。
- D：错误。该选项不符合本题场景。

**官方参考：** https://sca.aliyun.com/en/

### SPRING2-592（多选题）

- **学习阶段**：Spring Cloud Alibaba
- **主题**：Alibaba RocketMQ
- **认知层级**：分析
- **难度**：难
- **前置题**：SPRING2-421

RocketMQ顺序消费设计中，正确的有？

A. 同一业务键路由到同一队列
B. 消费者按队列顺序处理
C. 并发扩展要保持分片语义
D. 把相关消息随机到任意队列

- **答案**：A、B、C
- **课件依据**：Spring Cloud 开发课件.pdf 第1页
- **来源口径**：官方文档扩展

**解析：** 顺序是分片和消费协作的结果，随机路由会破坏顺序。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：正确。该选项符合官方语义。
- C：正确。该选项符合官方语义。
- D：错误。该选项不符合本题场景。

**官方参考：** https://sca.aliyun.com/en/

### SPRING2-593（多选题）

- **学习阶段**：Spring Cloud Alibaba
- **主题**：RocketMQ消费
- **认知层级**：分析
- **难度**：难
- **前置题**：SPRING2-421

可靠RocketMQ消费者通常需要哪些措施？

A. 消费确认
B. 受控重试
C. 死信队列
D. 失败消息直接标记成功

- **答案**：A、B、C
- **课件依据**：Spring Cloud 开发课件.pdf 第1页
- **来源口径**：官方文档扩展

**解析：** 确认、重试和死信构成失败处理闭环。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：正确。该选项符合官方语义。
- C：正确。该选项符合官方语义。
- D：错误。该选项不符合本题场景。

**官方参考：** https://sca.aliyun.com/en/

### SPRING2-594（多选题）

- **学习阶段**：Spring Cloud Alibaba
- **主题**：Alibaba RocketMQ
- **认知层级**：分析
- **难度**：难
- **前置题**：SPRING2-421

RocketMQ重试治理应包括？

A. 重试间隔或退避
B. 最大重试次数
C. 死信处理
D. 失败立即无限并发重投

- **答案**：A、B、C
- **课件依据**：Spring Cloud 开发课件.pdf 第1页
- **来源口径**：官方文档扩展

**解析：** 重试应可控并有最终处置路径，避免重试风暴。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：正确。该选项符合官方语义。
- C：正确。该选项符合官方语义。
- D：错误。该选项不符合本题场景。

**官方参考：** https://sca.aliyun.com/en/

### SPRING2-597（多选题）

- **学习阶段**：Spring Cloud Alibaba
- **主题**：Alibaba版本
- **认知层级**：分析
- **难度**：难
- **前置题**：SPRING2-421

Alibaba组件升级前应做哪些准备？

A. 核对Release Train兼容性
B. 执行依赖树分析
C. 阅读迁移说明
D. 直接覆盖所有传递版本

- **答案**：A、B、C
- **课件依据**：Spring Cloud 开发课件.pdf 第1页
- **来源口径**：官方文档扩展

**解析：** 兼容矩阵、依赖树和迁移说明是升级的证据基础。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：正确。该选项符合官方语义。
- C：正确。该选项符合官方语义。
- D：错误。该选项不符合本题场景。

**官方参考：** https://sca.aliyun.com/en/

### SPRING2-598（多选题）

- **学习阶段**：Spring Cloud Alibaba
- **主题**：Alibaba综合
- **认知层级**：分析
- **难度**：难
- **前置题**：SPRING2-421

Spring Cloud Alibaba生产落地应同时关注哪些方面？

A. Nacos配置与发现安全
B. Sentinel流量保护
C. Seata或RocketMQ的一致性策略
D. 只复制课件中的旧版本命令

- **答案**：A、B、C
- **课件依据**：Spring Cloud 开发课件.pdf 第1页
- **来源口径**：官方文档扩展

**解析：** Alibaba组件需要按当前版本、安全和业务一致性目标落地，旧命令不能直接照搬。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：正确。该选项符合官方语义。
- C：正确。该选项符合官方语义。
- D：错误。该选项不符合本题场景。

**官方参考：** https://sca.aliyun.com/en/

### SPRING2-600（多选题）

- **学习阶段**：Spring Cloud Alibaba
- **主题**：Alibaba安全
- **认知层级**：分析
- **难度**：难
- **前置题**：SPRING2-421

Alibaba中间件生产治理中，正确的有？

A. 控制Nacos权限
B. 保护Sentinel控制台
C. 审计Seata/RocketMQ管理操作
D. 把管理端口匿名暴露公网

- **答案**：A、B、C
- **课件依据**：Spring Cloud 开发课件.pdf 第1页
- **来源口径**：官方文档扩展

**解析：** 治理平面可改变流量、配置和事务，必须最小权限和隔离。

**选项辨析：**

- A：正确。该选项符合官方语义。
- B：正确。该选项符合官方语义。
- C：正确。该选项符合官方语义。
- D：错误。该选项不符合本题场景。

**官方参考：** https://sca.aliyun.com/en/
