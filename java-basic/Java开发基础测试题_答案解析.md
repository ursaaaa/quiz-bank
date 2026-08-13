# Java 开发基础 500 题测试题 - 答案解析

> 与题目卷题号一一对应。解析中的课件页码用于复核命题依据；官方链接用于纠正课件中的明显笔误或旧写法。
> 逐题人工编写，脚本仅负责编号和格式导出。

## 命题口径

- 只考课件覆盖的知识范围，不以过时 API、拼写错误或错误示例作为正确答案。
- 发生版本差异时，以当前 Java SE 官方规范与 API 文档为纠错依据。
- 难度为“易/中/难”，仅在解析卷中展示。

# 第1讲：Java 平台与开发入门

## 单选题

### JAVA-001（单选题）

- **知识点**：JDK、JRE 与 JVM 的职责
- **难度**：易
- **课件依据**：Java基础-1-概述.pptx 第9页
- **答案**：B

**解析：** 开发过程既需要编译器，也需要运行时。JDK 提供 javac 等开发工具，并包含运行 Java 程序所需的组件。

**选项辨析：**

- A：错误。JVM 负责执行字节码，但它不是完整开发工具包。
- B：正确。JDK 同时覆盖编译和运行需求。
- C：错误。JRE 面向运行，不提供完整的 JDK 开发工具集合。
- D：错误。JDBC 是数据库访问 API，与安装编译环境无关。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/specs/man/

### JAVA-002（单选题）

- **知识点**：javac 编译结果
- **难度**：易
- **课件依据**：Java基础-1-概述.pptx 第29页
- **答案**：A

**解析：** javac 把源代码编译成类文件格式的字节码。类文件随后可交给 Java 启动器和 JVM 加载执行。

**选项辨析：**

- A：正确。.class 是 javac 的典型输出。
- B：错误。javac 不直接生成 Windows 原生可执行文件。
- C：错误。SQL 脚本不是 Java 编译产物。
- D：错误。HTML 文档通常由 javadoc 生成。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/specs/man/javac.html

### JAVA-003（单选题）

- **知识点**：java 启动器
- **难度**：易
- **课件依据**：Java基础-1-概述.pptx 第29页
- **答案**：C

**解析：** java 启动器接收主类名，而不是把 `.class` 后缀写进普通类路径启动命令。javac 用于编译源文件。

**选项辨析：**

- A：错误。javac 的输入通常是源文件。
- B：错误。普通主类启动不把 .class 当类名后缀。
- C：正确。该命令按类名查找并启动 main。
- D：错误。jar 命令用于归档管理。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/specs/man/java.html

### JAVA-004（单选题）

- **知识点**：字节码的跨平台执行
- **难度**：中
- **课件依据**：Java基础-1-概述.pptx 第11页
- **答案**：C

**解析：** 类文件采用 JVM 规定的格式，不直接绑定某一种操作系统机器码。目标平台仍需提供兼容版本的 Java 运行时及程序所依赖的环境。

**选项辨析：**

- A：错误。字节码抽象降低了对具体 CPU 的绑定。
- B：错误。文件改名不能解决运行时兼容性。
- C：正确。兼容运行时是跨平台执行的必要条件。
- D：错误。面向对象代码不影响字节码跨平台机制。

**官方参考：** https://docs.oracle.com/javase/specs/jvms/se25/html/jvms-4.html

### JAVA-005（单选题）

- **知识点**：类加载器
- **难度**：中
- **课件依据**：Java基础-1-概述.pptx 第14页
- **答案**：B

**解析：** 类加载器根据类名和加载规则查找类文件并创建对应的 Class 表示。垃圾收集器处理的是对象内存回收。

**选项辨析：**

- A：错误。垃圾收集与类定义不是同一阶段。
- B：正确。类加载器承担定位和定义类的职责。
- C：错误。Javadoc 处理源代码文档。
- D：错误。SQL 解析不属于 JVM 类加载。

**官方参考：** https://docs.oracle.com/javase/specs/jvms/se25/html/jvms-5.html

### JAVA-006（单选题）

- **知识点**：字节码校验
- **难度**：中
- **课件依据**：Java基础-1-概述.pptx 第14页
- **答案**：B

**解析：** 校验器检查类文件格式、类型安全和指令使用等约束。它不能证明程序的业务规则一定正确。

**选项辨析：**

- A：错误。访问控制不会被校验器统一改写。
- B：正确。这是字节码验证的核心职责。
- C：错误。JVM 校验与 SQL 转换无关。
- D：错误。通过验证不等于不存在业务错误。

**官方参考：** https://docs.oracle.com/javase/specs/jvms/se25/html/jvms-4.html#jvms-4.10

### JAVA-007（单选题）

- **知识点**：堆与线程栈
- **难度**：易
- **课件依据**：Java基础-1-概述.pptx 第13页
- **答案**：A

**解析：** 对象和数组通常在共享堆中分配。方法调用的局部变量属于当前线程栈帧的一部分。

**选项辨析：**

- A：正确。该选项正确区分了共享堆与线程私有栈。
- B：错误。程序计数器不用于保存普通对象。
- C：错误。每个线程拥有自己的 Java 虚拟机栈。
- D：错误。数据库不参与 JVM 局部变量存储。

**官方参考：** https://docs.oracle.com/javase/specs/jvms/se25/html/jvms-2.html#jvms-2.5

### JAVA-008（单选题）

- **知识点**：程序计数器
- **难度**：中
- **课件依据**：Java基础-1-概述.pptx 第13页
- **答案**：A

**解析：** 程序计数器与线程执行位置相关，并且是线程私有区域。普通对象主要由堆管理。

**选项辨析：**

- A：正确。该描述符合 JVM 运行时数据区定义。
- B：错误。对象不集中存放在程序计数器。
- C：错误。网络缓存不是程序计数器职责。
- D：错误。数据库事务状态不由 JVM 程序计数器保存。

**官方参考：** https://docs.oracle.com/javase/specs/jvms/se25/html/jvms-2.html#jvms-2.5.1

### JAVA-009（单选题）

- **知识点**：方法区的逻辑职责
- **难度**：难
- **课件依据**：Java基础-1-概述.pptx 第13页
- **答案**：A

**解析：** JVM 规范描述方法区保存每类结构、运行时常量池等逻辑内容。具体内存布局和实现细节不应由应用代码臆测。

**选项辨析：**

- A：正确。规范职责与具体实现应区分。
- B：错误。本地变量表属于栈帧。
- C：错误。操作数栈同样属于栈帧。
- D：错误。规范没有要求固定物理地址。

**官方参考：** https://docs.oracle.com/javase/specs/jvms/se25/html/jvms-2.html#jvms-2.5.4

### JAVA-010（单选题）

- **知识点**：对象可达性与回收
- **难度**：中
- **课件依据**：Java基础-1-概述.pptx 第15页
- **答案**：A

**解析：** 不可达对象可以成为垃圾收集目标。具体何时回收取决于收集器和运行状态，Java 没有通用的 free 调用。

**选项辨析：**

- A：正确。该表述既说明资格也保留了时机不确定性。
- B：错误。JVM 不承诺下一条指令前完成回收。
- C：错误。不可达对象正是 GC 的主要处理对象。
- D：错误。Java 对象内存不使用通用 free API。

**官方参考：** https://docs.oracle.com/en/java/javase/25/gctuning/

### JAVA-011（单选题）

- **知识点**：System.gc 的语义
- **难度**：难
- **课件依据**：Java基础-1-概述.pptx 第15页
- **答案**：B

**解析：** System.gc 表达的是收集请求或建议，运行时可以选择处理方式。程序正确性不能依赖某个对象在调用后立即终结或外部资源被关闭。

**选项辨析：**

- A：错误。API 没有这种同步完成保证。
- B：正确。该项符合 System.gc 的契约边界。
- C：错误。请求 GC 不会要求重启 JVM。
- D：错误。文件句柄应由资源管理代码关闭。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/System.html#gc()

### JAVA-012（单选题）

- **知识点**：即时编译 JIT
- **难度**：中
- **课件依据**：Java基础-1-概述.pptx 第17页
- **答案**：B

**解析：** JIT 可根据运行时信息识别热点并生成优化后的本地代码。它是 JVM 执行优化的一部分。

**选项辨析：**

- A：错误。类路径扫描负责定位类而不是生成热点机器码。
- B：正确。JIT 正是题干描述的机制。
- C：错误。文档处理不改变运行时执行代码。
- D：错误。归档压缩与方法编译无关。

**官方参考：** https://docs.oracle.com/en/java/javase/25/vm/java-hotspot-virtual-machine-performance-enhancements.html

### JAVA-013（单选题）

- **知识点**：OpenJDK
- **难度**：易
- **课件依据**：Java基础-1-概述.pptx 第20页
- **答案**：A

**解析：** OpenJDK 是 Java 平台开源实现及相关项目的社区。其余选项分别属于图形、接口生成或数据库领域。

**选项辨析：**

- A：正确。OpenJDK 与 Java 平台实现直接相关。
- B：错误。OpenGL 是图形 API。
- C：错误。OpenAPI Generator 面向接口代码生成。
- D：错误。SQLite 是嵌入式数据库。

**官方参考：** https://openjdk.org/

### JAVA-014（单选题）

- **知识点**：JAVA_HOME
- **难度**：中
- **课件依据**：Java基础-1-概述.pptx 第23页
- **答案**：A

**解析：** JAVA_HOME 通常用于告诉构建工具 JDK 的安装位置。它不是类名、源文件路径或凭据配置。

**选项辨析：**

- A：正确。这是常见且正确的配置目标。
- B：错误。类名不用于定位 JDK 安装。
- C：错误。凭据不应放在该变量中。
- D：错误。它指向目录而非某个源文件。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/specs/man/

### JAVA-015（单选题）

- **知识点**：PATH 与命令定位
- **难度**：中
- **课件依据**：Java基础-1-概述.pptx 第23页
- **答案**：A

**解析：** 命令搜索依赖 PATH。绝对路径可运行而简单命令找不到，通常说明可执行文件目录没有加入 PATH 或顺序不正确。

**选项辨析：**

- A：正确。该现象与命令搜索路径高度吻合。
- B：错误。main 返回类型不会影响 shell 定位 javac。
- C：错误。package 语句不参与命令查找。
- D：错误。GC 与 shell 报错无关。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/specs/man/javac.html

### JAVA-016（单选题）

- **知识点**：javadoc 工具
- **难度**：中
- **课件依据**：Java基础-1-概述.pptx 第24页
- **答案**：C

**解析：** javadoc 读取源码声明和文档注释并生成 API 文档。java 用于启动程序，javap 用于反汇编类文件。

**选项辨析：**

- A：错误。java 不生成源码 API 页面。
- B：错误。javap 展示类文件信息。
- C：正确。javadoc 符合需求。
- D：错误。jconsole 是监控管理工具。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/specs/man/javadoc.html

### JAVA-017（单选题）

- **知识点**：JAR 归档
- **难度**：中
- **课件依据**：Java基础-1-概述.pptx 第24页
- **答案**：A

**解析：** jar 工具创建和管理 JAR 归档，并可结合清单声明入口。其他选项分别面向调试、序列化版本或密钥管理。

**选项辨析：**

- A：正确。jar 对应归档需求。
- B：错误。jdb 是调试器。
- C：错误。serialver 生成 serialVersionUID。
- D：错误。keytool 管理密钥和证书。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/specs/man/jar.html

### JAVA-018（单选题）

- **知识点**：应用入口 main
- **难度**：难
- **课件依据**：Java基础-1-概述.pptx 第27页
- **答案**：B

**解析：** 经典入口需要 `public static void main(String[] args)`。实例方法本身可以编译，但启动器不会为调用它而自动构造业务对象。

**选项辨析：**

- A：错误。启动器不会按该假设创建实例。
- B：正确。缺少 static 是关键问题。
- C：错误。void 正是标准入口返回类型。
- D：错误。参数类型不会被自动改写。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-12.html#jls-12.1.4

## 多选题

### JAVA-019（多选题）

- **知识点**：JDK 工具 / 运行环境
- **难度**：中
- **课件依据**：Java基础-1-概述.pptx 第24页
- **答案**：A、C

**解析：** 运行构建产物需要兼容的 Java 运行时；现场编译则额外需要 JDK 开发工具。编辑器和 JDBC 都不能替代字节码执行环境。

**选项辨析：**

- A：正确。JAR 最终仍由 Java 运行时加载执行。
- B：错误。编辑器不执行字节码。
- C：正确。javac 属于编译所需工具。
- D：错误。JDBC 只解决数据源访问。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/specs/man/

### JAVA-020（多选题）

- **知识点**：JVM 数据区 / 线程隔离
- **难度**：难
- **课件依据**：Java基础-1-概述.pptx 第13页
- **答案**：A、B

**解析：** 堆中的对象可被线程共享，而调用栈和程序计数器具有线程私有属性。共享对象是否安全还取决于同步和可见性设计。

**选项辨析：**

- A：正确。共享引用可以让两线程访问同一对象。
- B：正确。线程调用帧保存在各自栈中。
- C：错误。程序计数器是线程私有。
- D：错误。局部变量随各自调用帧管理。

**官方参考：** https://docs.oracle.com/javase/specs/jvms/se25/html/jvms-2.html#jvms-2.5

### JAVA-021（多选题）

- **知识点**：编译命令 / 运行命令
- **难度**：易
- **课件依据**：Java基础-1-概述.pptx 第29页
- **答案**：A、B、D

**解析：** javac、java、jar 分别覆盖编译、启动与归档管理。javadoc 的用途是生成 API 文档而不是清理文件。

**选项辨析：**

- A：正确。这是 javac 的基本用法。
- B：正确。这是典型主类启动形式。
- C：错误。javadoc 不承担删除操作。
- D：正确。--create 是 jar 的创建模式。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/specs/man/

### JAVA-022（多选题）

- **知识点**：类加载 / 链接与初始化
- **难度**：难
- **课件依据**：Java基础-1-概述.pptx 第14页
- **答案**：A、B、D

**解析：** JVM 对类经历加载、链接和初始化等阶段，链接又包含验证、准备和解析。初始化在相应触发条件满足后进行，不会先于类的加载。

**选项辨析：**

- A：正确。这是加载阶段的核心结果。
- B：正确。验证位于链接阶段。
- C：错误。未加载的类无法先完成初始化。
- D：正确。该项概括了解析阶段。

**官方参考：** https://docs.oracle.com/javase/specs/jvms/se25/html/jvms-5.html

### JAVA-023（多选题）

- **知识点**：Java 源文件结构 / main 方法
- **难度**：中
- **课件依据**：Java基础-1-概述.pptx 第27页
- **答案**：A、B、C

**解析：** 源文件可以包含包声明、导入声明和类型声明，main 位于类中。普通可执行语句不能随意放在顶层类型之外。

**选项辨析：**

- A：正确。命名包源文件可声明 package。
- B：正确。导入声明位于类型声明之前。
- C：正确。应用入口属于类成员。
- D：错误。顶层只能出现规范允许的声明结构。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-7.html

### JAVA-024（多选题）

- **知识点**：跨平台能力 / 平台差异
- **难度**：中
- **课件依据**：Java基础-1-概述.pptx 第11页
- **答案**：A、B、C

**解析：** 字节码提供跨平台基础，但版本、本地依赖和操作系统环境仍可能影响部署。跨平台不是对所有差异的无条件屏蔽。

**选项辨析：**

- A：正确。过新的类文件可能无法由旧运行时执行。
- B：正确。JNI 等本地库具有平台约束。
- C：正确。外部环境仍需适配。
- D：错误。类文件版本存在兼容边界。

**官方参考：** https://docs.oracle.com/javase/specs/jvms/se25/html/jvms-4.html

### JAVA-025（多选题）

- **知识点**：垃圾回收 / 外部资源
- **难度**：中
- **课件依据**：Java基础-1-概述.pptx 第15页
- **答案**：A、B、D

**解析：** GC 解决托管堆对象的内存回收，文件句柄等外部资源需要确定性释放。依赖引用置空或某次 GC 会造成资源泄漏风险。

**选项辨析：**

- A：正确。不可达临时对象可被收集。
- B：正确。这是正确的确定性关闭方式。
- C：错误。引用变化不等于调用 close。
- D：正确。收集时机不是业务契约。

**官方参考：** https://docs.oracle.com/en/java/javase/25/gctuning/；https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/AutoCloseable.html

### JAVA-026（多选题）

- **知识点**：JIT / 性能测量
- **难度**：中
- **课件依据**：Java基础-1-概述.pptx 第17页
- **答案**：A、B、D

**解析：** JVM 的加载、解释和即时编译会使早期运行与稳态不同。可靠基准还需要重复、隔离噪声并使用合适工具。

**选项辨析：**

- A：正确。预热会影响热点代码状态。
- B：正确。重复测量有助于降低偶然性。
- C：错误。首次调用常包含额外成本。
- D：正确。专业框架能处理许多 JVM 基准陷阱。

**官方参考：** https://openjdk.org/projects/code-tools/jmh/

### JAVA-027（多选题）

- **知识点**：JAR / 类路径
- **难度**：中
- **课件依据**：Java基础-1-概述.pptx 第24页
- **答案**：A、B、D

**解析：** 类缺失通常与依赖产物和加载路径有关。垃圾收集不会增加缺少的类定义。

**选项辨析：**

- A：正确。缺少依赖文件会导致类无法加载。
- B：正确。加载器需要从正确路径定位类。
- C：错误。GC 不解决依赖缺失。
- D：正确。打包策略决定依赖如何被发现。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/specs/man/java.html；https://docs.oracle.com/en/java/javase/25/docs/specs/man/jar.html

### JAVA-028（多选题）

- **知识点**：OpenJDK / JDK 版本选择
- **难度**：中
- **课件依据**：Java基础-1-概述.pptx 第20页
- **答案**：A、B、C

**解析：** 版本选择需要兼顾应用兼容、维护周期、安全更新和运行环境。界面外观不能替代技术与支持评估。

**选项辨析：**

- A：正确。生态兼容是升级前提。
- B：正确。维护策略直接影响长期风险。
- C：正确。运维链路也必须能工作。
- D：错误。图标颜色与运行质量无关。

**官方参考：** https://openjdk.org/

## 判断题

### JAVA-029（判断题）

- **知识点**：public 类与源文件名
- **难度**：中
- **课件依据**：Java基础-1-概述.pptx 第27页
- **答案**：正确

**解析：** 该判断正确。顶层 public 类的名称需要与承载它的源文件基本名一致，否则编译器会报错。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-7.html#jls-7.6

### JAVA-030（判断题）

- **知识点**：main 参数
- **难度**：易
- **课件依据**：Java基础-1-概述.pptx 第27页
- **答案**：正确

**解析：** 该判断正确。参数元素是 String，是否进一步解释为数字或其他类型由应用代码决定。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-12.html#jls-12.1.4

### JAVA-031（判断题）

- **知识点**：字节码与机器码
- **难度**：中
- **课件依据**：Java基础-1-概述.pptx 第16页
- **答案**：错误

**解析：** 该判断错误。类文件保存 JVM 指令和结构信息，仍需要兼容运行时解释或编译执行。

**官方参考：** https://docs.oracle.com/javase/specs/jvms/se25/html/jvms-4.html

### JAVA-032（判断题）

- **知识点**：标准输出
- **难度**：中
- **课件依据**：Java基础-1-概述.pptx 第28页
- **答案**：正确

**解析：** 该判断正确。println 提供多个重载，输出后终止当前行；它不是标准输入对象。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/io/PrintStream.html#println()

### JAVA-033（判断题）

- **知识点**：类文件版本
- **难度**：难
- **课件依据**：Java基础-1-概述.pptx 第11页
- **答案**：错误

**解析：** 该判断错误。类文件带有版本信息，旧运行时可能因不支持较新的主版本号而拒绝加载。

**官方参考：** https://docs.oracle.com/javase/specs/jvms/se25/html/jvms-4.html#jvms-4.1

### JAVA-034（判断题）

- **知识点**：GC 与 close
- **难度**：难
- **课件依据**：Java基础-1-概述.pptx 第15页
- **答案**：错误

**解析：** 该判断错误。对象内存最终可回收，不代表文件描述符会在业务可接受的时间内释放；应采用 try-with-resources。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/io/FileInputStream.html

### JAVA-035（判断题）

- **知识点**：JRE 与编译器
- **难度**：中
- **课件依据**：Java基础-1-概述.pptx 第21页
- **答案**：正确

**解析：** 该判断正确。运行组件与开发工具集职责不同，开发机器通常选择完整 JDK。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/specs/man/

# 第2讲：基本语法

## 单选题

### JAVA-036（单选题）

- **知识点**：标识符
- **难度**：易
- **课件依据**：Java基础-2-基本语法.pptx 第4页
- **答案**：C

**解析：** 标识符可由字母、数字、下划线和美元符号组成，但不能以数字开头，也不能使用关键字或布尔字面量。

**选项辨析：**

- A：错误。以数字开头不合法。
- B：错误。连字符不是标识符字符。
- C：正确。下划线开头且其余字符合法。
- D：错误。false 是布尔字面量，不能作标识符。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-3.html#jls-3.8

### JAVA-037（单选题）

- **知识点**：final 常量
- **难度**：易
- **课件依据**：Java基础-2-基本语法.pptx 第6页
- **答案**：A

**解析：** final 变量需要声明类型；局部空白 final 也可稍后一次赋值，但题目要求在声明语句中同时初始化。

**选项辨析：**

- A：正确。类型、名称、初始化表达式齐全。
- B：错误。修饰符位置和缺少初始化均不符合题意。
- C：错误。const 是保留字而非 Java 常量声明语法。
- D：错误。缺少类型。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-4.html#jls-4.12.4

### JAVA-038（单选题）

- **知识点**：局部变量初始化
- **难度**：中
- **课件依据**：Java基础-2-基本语法.pptx 第10页
- **答案**：C

**解析：** 局部变量没有成员变量那样的默认值；读取前必须保证在所有可达路径上已明确赋值。

**选项辨析：**

- A：错误。条件为假时不会得到该输出。
- B：错误。局部 int 不自动初始化为 0。
- C：正确。编译器不能保证 x 已赋值。
- D：错误。该代码没有解引用对象。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-16.html

### JAVA-039（单选题）

- **知识点**：赋值表达式
- **难度**：中
- **课件依据**：Java基础-2-基本语法.pptx 第9页
- **答案**：A

**解析：** 赋值运算符右结合，先执行 c=1，其结果再赋给 b，最后赋给 a。

**选项辨析：**

- A：正确。三个变量最终都得到 1。
- B：错误。外层赋值也会执行。
- C：错误。b 会接收 c=1 的结果。
- D：错误。相同 int 类型间链式赋值合法。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-15.html#jls-15.26

### JAVA-040（单选题）

- **知识点**：整数除法
- **难度**：易
- **课件依据**：Java基础-2-基本语法.pptx 第14页
- **答案**：B

**解析：** 5/2 先按整数除法得到 2，再转换为 double 保存。

**选项辨析：**

- A：错误。赋值目标是 double 不会反向改变除法类型。
- B：正确。整数结果 2 扩宽为 2.0。
- C：错误。整数除法向零截断，不四舍五入。
- D：错误。该扩宽赋值合法。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-15.html#jls-15.17.2

### JAVA-041（单选题）

- **知识点**：求余运算
- **难度**：中
- **课件依据**：Java基础-2-基本语法.pptx 第14页
- **答案**：A

**解析：** Java 整数余数满足被除数等于商乘除数加余数；商向零截断，因此余数为 -1。

**选项辨析：**

- A：正确。结果符号跟随被除数。
- B：错误。这不是 Java 对该表达式的结果。
- C：错误。-2 是商而非余数。
- D：错误。-5 不能被 2 整除。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-15.html#jls-15.17.3

### JAVA-042（单选题）

- **知识点**：整数字面量
- **难度**：中
- **课件依据**：Java基础-2-基本语法.pptx 第15页
- **答案**：D

**解析：** 29L 的数值是十进制 29，类型为 long；035 是八进制 29，但题目问字面量写法所表示的十进制数值时也会产生歧义，因此此处强调直接十进制 long 写法。

**选项辨析：**

- A：错误。029 含非法八进制数字 9。
- B：错误。0x29 是十进制 41。
- C：错误。035 虽数值为 29，但采用八进制记法。
- D：正确。29L 是值为 29 的 long 字面量。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-3.html#jls-3.10.1

### JAVA-043（单选题）

- **知识点**：浮点字面量
- **难度**：易
- **课件依据**：Java基础-2-基本语法.pptx 第15页
- **答案**：C

**解析：** 无后缀小数字面量默认为 double；F 后缀使其成为 float。

**选项辨析：**

- A：错误。double 不能隐式窄化为 float。
- B：错误。D 明确指定 double。
- C：正确。F 产生 float 字面量。
- D：错误。强转后仍是 double。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-3.html#jls-3.10.2

### JAVA-044（单选题）

- **知识点**：自增求值
- **难度**：中
- **课件依据**：Java基础-2-基本语法.pptx 第16页
- **答案**：B

**解析：** 后缀自增先提供旧值 2 参与乘法，随后 i 增加为 3。

**选项辨析：**

- A：错误。前缀自增才会提供 3。
- B：正确。result 为 20，i 为 3。
- C：错误。自增副作用会发生。
- D：错误。两个数值均不符合后缀语义。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-15.html#jls-15.14.2

### JAVA-045（单选题）

- **知识点**：复合赋值
- **难度**：难
- **课件依据**：Java基础-2-基本语法.pptx 第16页
- **答案**：B

**解析：** 复合赋值隐含向左侧类型的转换；普通加法得到 int，不能直接赋给 byte。

**选项辨析：**

- A：错误。复合赋值可以编译。
- B：正确。b += 1 隐含转换，而 b=b+1 缺少窄化转换。
- C：错误。结论正好相反。
- D：错误。第二行不会编译。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-15.html#jls-15.26.2

### JAVA-046（单选题）

- **知识点**：数值提升
- **难度**：中
- **课件依据**：Java基础-2-基本语法.pptx 第17页
- **答案**：C

**解析：** byte、short、char 参与二元数值运算时会先提升为 int。

**选项辨析：**

- A：错误。结果不会保持 byte。
- B：错误。不会只提升到 short。
- C：正确。二元数值提升得到 int。
- D：错误。没有 long 操作数。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-5.html#jls-5.6

### JAVA-047（单选题）

- **知识点**：强制类型转换
- **难度**：中
- **课件依据**：Java基础-2-基本语法.pptx 第18页
- **答案**：B

**解析：** 浮点数窄化为整数时向零截断小数部分。

**选项辨析：**

- A：错误。不是向负无穷取整。
- B：正确。向零截断得到 -3。
- C：错误。不会改变符号。
- D：错误。有限浮点值转换不因小数部分抛该异常。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-5.html#jls-5.1.3

### JAVA-048（单选题）

- **知识点**：char 转换
- **难度**：难
- **课件依据**：Java基础-2-基本语法.pptx 第40页
- **答案**：A

**解析：** 整数转 char 只保留低 16 位；0x0041 对应字符 A。

**选项辨析：**

- A：正确。低 16 位为 0x0041。
- B：错误。B 对应 0x0042。
- C：错误。不会保留高位形成该字符。
- D：错误。显式转换合法。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-5.html#jls-5.1.3

### JAVA-049（单选题）

- **知识点**：char 数值运算
- **难度**：中
- **课件依据**：Java基础-2-基本语法.pptx 第41页
- **答案**：C

**解析：** 两个 char 在加法中提升为各自 Unicode 数值，'2' 为 50，'3' 为 51。

**选项辨析：**

- A：错误。这不是字符串拼接。
- B：错误。只考虑了一个字符附近的值。
- C：正确。50+51=101。
- D：错误。char 可参与数值加法。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-15.html#jls-15.18.2

### JAVA-050（单选题）

- **知识点**：浮点特殊值
- **难度**：中
- **课件依据**：Java基础-2-基本语法.pptx 第20页
- **答案**：C

**解析：** IEEE 754 浮点运算中零除以零产生 NaN，不抛整数除零异常。

**选项辨析：**

- A：错误。结果不是普通零。
- B：错误。非零浮点数除零才产生带符号无穷。
- C：正确。零除零产生 NaN。
- D：错误。浮点除零不按整数除零处理。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-15.html#jls-15.17.2

### JAVA-051（单选题）

- **知识点**：短路逻辑
- **难度**：中
- **课件依据**：Java基础-2-基本语法.pptx 第23页
- **答案**：A

**解析：** && 在左操作数为 false 时不计算右侧，因此 ++x 不执行。

**选项辨析：**

- A：正确。右侧被短路，x 保持 0。
- B：错误。这是右侧执行一次的结果。
- C：错误。没有两次自增。
- D：错误。表达式合法且不抛异常。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-15.html#jls-15.23

### JAVA-052（单选题）

- **知识点**：无条件逻辑
- **难度**：中
- **课件依据**：Java基础-2-基本语法.pptx 第23页
- **答案**：B

**解析：** boolean 操作数使用 & 时两侧都会求值，因此 ++x 执行。

**选项辨析：**

- A：错误。& 不短路。
- B：正确。右侧执行一次。
- C：错误。boolean 间可使用 &。
- D：错误。Java 规定从左到右求值。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-15.html#jls-15.22.2

### JAVA-053（单选题）

- **知识点**：字符串连接
- **难度**：易
- **课件依据**：Java基础-2-基本语法.pptx 第22页
- **答案**：B

**解析：** 遇到字符串后，加号按从左到右执行连接，两个整数依次转为文本。

**选项辨析：**

- A：错误。需要给 i+j 加括号才得到 3。
- B：正确。依次拼接得到 12。
- C：错误。变量值会转换为字符，不保留运算符。
- D：错误。表达式合法。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-15.html#jls-15.18.1

### JAVA-054（单选题）

- **知识点**：if 与 else 匹配
- **难度**：中
- **课件依据**：Java基础-2-基本语法.pptx 第28页
- **答案**：C

**解析：** 没有大括号时，else 与同一语句结构中最近的尚未匹配的 if 配对。外层条件为 true，内层条件为 false，因此执行 else。

**选项辨析：**

- A：错误。内层条件不成立。
- B：错误。else 属于内层 if，但其语句是打印 C。
- C：正确。最近匹配规则使其打印 C。
- D：错误。else 分支会执行。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-14.html#jls-14.5

### JAVA-055（单选题）

- **知识点**：switch 穿透
- **难度**：中
- **课件依据**：Java基础-2-基本语法.pptx 第29页
- **答案**：C

**解析：** 从匹配的 case 2 开始执行；该分支没有 break，会继续执行 case 3，随后 break。

**选项辨析：**

- A：错误。case 1 不匹配。
- B：错误。遗漏了穿透后的 C。
- C：正确。先 B 后 C。
- D：错误。匹配分支 B 也会执行。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-14.html#jls-14.11

### JAVA-056（单选题）

- **知识点**：switch case 常量
- **难度**：难
- **课件依据**：Java基础-2-基本语法.pptx 第29页
- **答案**：B

**解析：** case 标签需要与选择器兼容的常量表达式，1+2 可在编译期求值。

**选项辨析：**

- A：错误。普通变量不是常量表达式。
- B：正确。该表达式可编译期求值为 3。
- C：错误。自增既有副作用也非常量。
- D：错误。方法调用不是常量表达式。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-14.html#jls-14.11.1

### JAVA-057（单选题）

- **知识点**：条件运算符
- **难度**：中
- **课件依据**：Java基础-2-基本语法.pptx 第30页
- **答案**：B

**解析：** 条件 4>7 为假，因此选择冒号后的表达式 7。

**选项辨析：**

- A：错误。真分支才是 4。
- B：正确。假分支为 7。
- C：错误。整个条件表达式的值是所选数值表达式。
- D：错误。两分支均为 int，类型兼容。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-15.html#jls-15.25

### JAVA-058（单选题）

- **知识点**：操作数求值顺序
- **难度**：难
- **课件依据**：Java基础-2-基本语法.pptx 第34页
- **答案**：A

**解析：** 二元操作数从左到右求值：先读取 a 的旧值 0，再执行 ++a 得到 1，相加为 1。

**选项辨析：**

- A：正确。x=0+1，a 自增后为 1。
- B：错误。这是把前置自增错误地提前到左操作数前。
- C：错误。a 只自增一次。
- D：错误。两项均不符。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-15.html#jls-15.7.1

### JAVA-059（单选题）

- **知识点**：Math 函数
- **难度**：易
- **课件依据**：Java基础-2-基本语法.pptx 第36页
- **答案**：B

**解析：** Math.random 返回大于等于 0.0 且小于 1.0 的 double。

**选项辨析：**

- A：错误。round 返回 long 1。
- B：正确。返回区间为 [0.0,1.0)。
- C：错误。ceil(0.2) 为 1.0。
- D：错误。max 结果为 1.0。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/Math.html#random()

### JAVA-060（单选题）

- **知识点**：Unicode 字面量
- **难度**：中
- **课件依据**：Java基础-2-基本语法.pptx 第38页
- **答案**：A

**解析：** Unicode 转义使用反斜杠 u 后四位十六进制数字；字符字面量用单引号。

**选项辨析：**

- A：正确。四位十六进制表示 A。
- B：错误。位数不足。
- C：错误。这是 String 而非 char。
- D：错误。包含四个字符，不能作单个 char 字面量。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-3.html#jls-3.3

### JAVA-061（单选题）

- **知识点**：String 不可变性
- **难度**：中
- **课件依据**：Java基础-2-基本语法.pptx 第44页
- **答案**：C

**解析：** 给 s 重新赋值只改变引用；原 String 对象未被修改，t 仍指向 Java。

**选项辨析：**

- A：错误。t 不随 s 的重新赋值改变。
- B：错误。s 已改为引用 HTML。
- C：正确。s 为 HTML，t 为 Java。
- D：错误。s 不再引用 Java。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/String.html

### JAVA-062（单选题）

- **知识点**：字符串内容比较
- **难度**：易
- **课件依据**：Java基础-2-基本语法.pptx 第45页
- **答案**：B

**解析：** equals 比较 String 内容；== 比较引用是否相同。

**选项辨析：**

- A：错误。引用相同不等同于一般的内容比较写法。
- B：正确。equals 直接表达内容相等。
- C：错误。compareTo 相等时返回 0，不是 1。
- D：错误。哈希相同不能推出内容相同。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/String.html#equals(java.lang.Object)

### JAVA-063（单选题）

- **知识点**：charAt 边界
- **难度**：中
- **课件依据**：Java基础-2-基本语法.pptx 第47页
- **答案**：D

**解析：** 合法索引为 0 到 length-1；length 本身越界。

**选项辨析：**

- A：错误。首字符索引合法。
- B：错误。末字符索引为 3，合法。
- C：错误。与末字符索引等价。
- D：正确。索引 4 越界。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/String.html#charAt(int)

### JAVA-064（单选题）

- **知识点**：substring 边界
- **难度**：中
- **课件依据**：Java基础-2-基本语法.pptx 第49页
- **答案**：B

**解析：** substring 的结束下标不包含在结果中，因此取下标 0、1、2、3。

**选项辨析：**

- A：错误。少取一个字符。
- B：正确。结果为 Welc。
- C：错误。把结束下标误当作包含。
- D：错误。这是另一段字符。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/String.html#substring(int,int)

### JAVA-065（单选题）

- **知识点**：trim 行为
- **难度**：中
- **课件依据**：Java基础-2-基本语法.pptx 第50页
- **答案**：B

**解析：** trim 返回新字符串而不会修改原对象；未接收返回值，所以 s 仍含两端空格，长度为 6。

**选项辨析：**

- A：错误。若赋回 s 才是 4。
- B：正确。原串长度保持 6。
- C：错误。不是 8。
- D：错误。调用合法。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/String.html#trim()

### JAVA-066（单选题）

- **知识点**：indexOf
- **难度**：易
- **课件依据**：Java基础-2-基本语法.pptx 第51页
- **答案**：C

**解析：** 从索引 2 开始向后查找，第一个 a 位于索引 3。

**选项辨析：**

- A：错误。索引 1 位于起始位置之前。
- B：错误。索引 2 是 n。
- C：正确。下一个 a 在 3。
- D：错误。5 是最后一个 a，但不是第一个匹配。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/String.html#indexOf(int,int)

### JAVA-067（单选题）

- **知识点**：基本类型解析
- **难度**：中
- **课件依据**：Java基础-2-基本语法.pptx 第53页
- **答案**：B

**解析：** Integer.parseInt 返回基本类型 int，并要求文本符合整数格式。

**选项辨析：**

- A：错误。这是 int 转 String。
- B：正确。该调用得到 int 42。
- C：错误。英文单词不是合法十进制整数文本。
- D：错误。String 没有 intValue 方法。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/Integer.html#parseInt(java.lang.String)

### JAVA-068（单选题）

- **知识点**：StringBuilder 可变性
- **难度**：中
- **课件依据**：Java基础-2-基本语法.pptx 第54页
- **答案**：B

**解析：** StringBuilder.append 原地修改缓冲区并返回构建器本身。

**选项辨析：**

- A：错误。append 后内容增加。
- B：正确。依次为 Java 和 17。
- C：错误。append 添加在末尾。
- D：错误。调用合法。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/StringBuilder.html#append(java.lang.String)

### JAVA-069（单选题）

- **知识点**：格式化输出
- **难度**：中
- **课件依据**：Java基础-2-基本语法.pptx 第55页
- **答案**：B

**解析：** %d 用于十进制整数；%f 对应浮点数。

**选项辨析：**

- A：错误。%f 用于浮点数。
- B：正确。%d 对应十进制整数。
- C：错误。%c 对应字符。
- D：错误。%b 对应布尔格式。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/Formatter.html

### JAVA-070（单选题）

- **知识点**：do-while
- **难度**：易
- **课件依据**：Java基础-2-基本语法.pptx 第59页
- **答案**：B

**解析：** do-while 先执行循环体，再判断条件，因此至少执行一次。

**选项辨析：**

- A：错误。这是 while 的可能结果。
- B：正确。首次执行后 count 变 11，条件为假。
- C：错误。条件并不支持十次。
- D：错误。count 增加且条件为假。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-14.html#jls-14.13

### JAVA-071（单选题）

- **知识点**：for 循环
- **难度**：中
- **课件依据**：Java基础-2-基本语法.pptx 第60页
- **答案**：B

**解析：** i 依次取 0、1、2，共三轮；i=3 时条件失败。

**选项辨析：**

- A：错误。少算了 i=0。
- B：正确。共三次。
- C：错误。i=3 不进入循环。
- D：错误。每轮 i 都递增。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-14.html#jls-14.14

### JAVA-072（单选题）

- **知识点**：break
- **难度**：中
- **课件依据**：Java基础-2-基本语法.pptx 第62页
- **答案**：B

**解析：** i=1、2、3 被累加；i=4 时先触发 break，不再累加。

**选项辨析：**

- A：错误。遗漏了 3。
- B：正确。1+2+3=6。
- C：错误。包含了不应累加的 4。
- D：错误。这是完整 1 到 5 的和。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-14.html#jls-14.15

### JAVA-073（单选题）

- **知识点**：continue
- **难度**：中
- **课件依据**：Java基础-2-基本语法.pptx 第63页
- **答案**：C

**解析：** continue 跳过 i=3 的累加，其余 1、2、4、5 相加为 12。

**选项辨析：**

- A：错误。只累加到某个中间状态。
- B：错误。计算不符。
- C：正确。1+2+4+5=12。
- D：错误。未排除 3。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-14.html#jls-14.16

## 多选题

### JAVA-074（多选题）

- **知识点**：标识符 / 保留字
- **难度**：中
- **课件依据**：Java基础-2-基本语法.pptx 第4页
- **答案**：A、C

**解析：** 美元符号和 Unicode 字母可用于标识符；关键字及数字开头的名称不可用。

**选项辨析：**

- A：正确。$ 可作为首字符。
- B：错误。class 是关键字。
- C：正确。中文字符可构成 Java 标识符。
- D：错误。不能以数字开头。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-3.html#jls-3.8

### JAVA-075（多选题）

- **知识点**：变量声明 / 明确赋值
- **难度**：中
- **课件依据**：Java基础-2-基本语法.pptx 第10页
- **答案**：A、B

**解析：** Java 对字段提供默认初始化，但局部变量依赖明确赋值分析；final 变量只能赋值一次。

**选项辨析：**

- A：正确。这是编译期要求。
- B：正确。实例或静态 int 字段默认值为 0。
- C：错误。局部引用没有自动默认值。
- D：错误。final 不允许重复赋值。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-4.html#jls-4.12.5；https://docs.oracle.com/javase/specs/jls/se25/html/jls-16.html

### JAVA-076（多选题）

- **知识点**：字面量 / 数值类型
- **难度**：中
- **课件依据**：Java基础-2-基本语法.pptx 第15页
- **答案**：A、B、C

**解析：** L、F 后缀分别确定 long 和 float；十六进制 0x1D 可赋给 int；128 超出 byte 范围。

**选项辨析：**

- A：正确。long 字面量范围合适。
- B：正确。F 后缀避免 double 到 float 的窄化。
- C：正确。0x1D 等于 29。
- D：错误。128 超过 byte 最大值 127。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-3.html#jls-3.10

### JAVA-077（多选题）

- **知识点**：自动转换 / 强制转换
- **难度**：难
- **课件依据**：Java基础-2-基本语法.pptx 第18页
- **答案**：A、C、D

**解析：** char 可扩宽为 int，int 可扩宽为 double；int 到 char 需要显式窄化。

**选项辨析：**

- A：正确。char 到 int 是扩宽转换。
- B：错误。变量 i 不能隐式窄化为 char。
- C：正确。显式转换允许。
- D：正确。int 到 double 是扩宽转换。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-5.html#jls-5.1

### JAVA-078（多选题）

- **知识点**：整数溢出 / 复合赋值
- **难度**：难
- **课件依据**：Java基础-2-基本语法.pptx 第16页
- **答案**：A、B、D

**解析：** 复合赋值把计算结果转换回左侧类型；128 截断为 byte 后是 -128，整数溢出不抛异常。

**选项辨析：**

- A：正确。语句合法。
- B：正确。低 8 位对应 -128。
- C：错误。溢出按固定位宽截断。
- D：正确。这是复合赋值与普通赋值的重要差异。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-15.html#jls-15.26.2

### JAVA-079（多选题）

- **知识点**：浮点运算 / 特殊值
- **难度**：中
- **课件依据**：Java基础-2-基本语法.pptx 第20页
- **答案**：A、B

**解析：** 浮点除零遵循 IEEE 754；NaN 与包括自身在内的任何值用 == 比较均不相等。

**选项辨析：**

- A：正确。正数除正零得到正无穷。
- B：正确。零除零得到 NaN。
- C：错误。整数除零才按题设场景抛异常。
- D：错误。NaN==NaN 为 false。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-15.html#jls-15.17.2

### JAVA-080（多选题）

- **知识点**：逻辑运算符 / 副作用
- **难度**：难
- **课件依据**：Java基础-2-基本语法.pptx 第23页
- **答案**：A、B

**解析：** && 和 || 会在结果已确定时短路；& 和 | 对 boolean 操作数仍计算两侧。

**选项辨析：**

- A：正确。左侧 false 使 && 短路。
- B：正确。左侧 true 使 || 短路。
- C：错误。& 会计算右侧。
- D：错误。| 也会计算右侧。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-15.html#jls-15.23；https://docs.oracle.com/javase/specs/jls/se25/html/jls-15.html#jls-15.24

### JAVA-081（多选题）

- **知识点**：条件语句 / 代码风格
- **难度**：易
- **课件依据**：Java基础-2-基本语法.pptx 第28页
- **答案**：A、B

**解析：** Java 的 if 条件必须为 boolean；直接写 even 最简洁，显式与 true 比较也合法。

**选项辨析：**

- A：正确。直接使用布尔变量。
- B：正确。语义等价但较冗余。
- C：错误。boolean 不能赋整数 1。
- D：错误。Java 不把整数当布尔值。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-14.html#jls-14.9

### JAVA-082（多选题）

- **知识点**：switch / 控制流
- **难度**：难
- **课件依据**：Java基础-2-基本语法.pptx 第29页
- **答案**：A、B

**解析：** default 可选且位置不被强制为最后；冒号形式允许穿透；case 需常量标签。

**选项辨析：**

- A：正确。没有匹配时也可以什么都不做。
- B：正确。无跳转语句时会穿透。
- C：错误。普通运行时变量不能作常量标签。
- D：错误。default 可放在其他位置。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-14.html#jls-14.11

### JAVA-083（多选题）

- **知识点**：优先级 / 结合性
- **难度**：中
- **课件依据**：Java基础-2-基本语法.pptx 第32页
- **答案**：A、B、C

**解析：** 优先级决定不同运算符的分组；大多数二元运算符左结合，而赋值右结合。

**选项辨析：**

- A：正确。例如 2+3*4 先乘。
- B：正确。a-b-c 等价于 (a-b)-c。
- C：正确。链式赋值从右侧分组。
- D：错误。该说法过度概括。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-15.html

### JAVA-084（多选题）

- **知识点**：Math / 静态方法
- **难度**：中
- **课件依据**：Java基础-2-基本语法.pptx 第36页
- **答案**：A、B

**解析：** sqrt 与 random 返回 double；round(double) 返回 long，两个 int 的 max 返回 int。

**选项辨析：**

- A：正确。sqrt 返回 double 3.0。
- B：正确。random 返回 double。
- C：错误。round(double) 返回 long。
- D：错误。该重载返回 int。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/Math.html

### JAVA-085（多选题）

- **知识点**：String / 比较
- **难度**：难
- **课件依据**：Java基础-2-基本语法.pptx 第45页
- **答案**：A、C、D

**解析：** 两个对象内容相同但引用不同；内容比较、字典比较及忽略大小写比较均符合对应条件。

**选项辨析：**

- A：正确。字符序列相同。
- B：错误。new 分别创建对象，引用不同。
- C：正确。内容相同使 compareTo 返回 0。
- D：正确。忽略大小写后内容相同。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/String.html

### JAVA-086（多选题）

- **知识点**：String / 不可变对象
- **难度**：中
- **课件依据**：Java基础-2-基本语法.pptx 第48页
- **答案**：A、B、D

**解析：** String 不可变，concat 返回新字符串；只有接收返回值才获得连接结果。

**选项辨析：**

- A：正确。s 未重新赋值。
- B：正确。t 接收新串 abc。
- C：错误。concat 不原地修改。
- D：正确。忽略结果不会改变 s。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/String.html#concat(java.lang.String)

### JAVA-087（多选题）

- **知识点**：substring / 字符串边界
- **难度**：难
- **课件依据**：Java基础-2-基本语法.pptx 第49页
- **答案**：A、B、C

**解析：** 结束下标可等于长度，起止相等产生空串；起始大于结束不合法。

**选项辨析：**

- A：正确。得到 Java。
- B：正确。得到空串。
- C：正确。合法空区间。
- D：错误。beginIndex 大于 endIndex。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/String.html#substring(int,int)

### JAVA-088（多选题）

- **知识点**：字符串查找 / 返回约定
- **难度**：中
- **课件依据**：Java基础-2-基本语法.pptx 第51页
- **答案**：A、B、C

**解析：** indexOf 返回首次匹配位置，lastIndexOf 返回最后匹配位置，未找到返回 -1。

**选项辨析：**

- A：正确。cad 从 4 开始。
- B：正确。末尾 a 的索引为 10。
- C：正确。z 不存在。
- D：错误。首个 a 在索引 0。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/String.html#indexOf(java.lang.String)

### JAVA-089（多选题）

- **知识点**：字符串转换 / 数值解析
- **难度**：中
- **课件依据**：Java基础-2-基本语法.pptx 第53页
- **答案**：A、B

**解析：** 整数解析接受带符号整数文本；Double 可解析小数。小数文本和英文单词不能按十进制 int 解析。

**选项辨析：**

- A：正确。得到 -12。
- B：正确。得到 3.14。
- C：错误。不是合法 int 文本。
- D：错误。不是数字文本。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/Integer.html#parseInt(java.lang.String)；https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/Double.html#parseDouble(java.lang.String)

### JAVA-090（多选题）

- **知识点**：StringBuilder / 可变字符串
- **难度**：中
- **课件依据**：Java基础-2-基本语法.pptx 第54页
- **答案**：A、B、C

**解析：** StringBuilder 提供追加、反转、指定位置修改等操作；toLowerCase 是 String 的转换方法。

**选项辨析：**

- A：正确。可在末尾追加。
- B：正确。可反转字符序列。
- C：正确。可修改指定字符。
- D：错误。StringBuilder 没有该实例方法。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/StringBuilder.html

### JAVA-091（多选题）

- **知识点**：格式化输出 / Formatter
- **难度**：中
- **课件依据**：Java基础-2-基本语法.pptx 第55页
- **答案**：A、B、C

**解析：** 常用转换符中 s、d、f、c 分别对应字符串、十进制整数、浮点和字符。

**选项辨析：**

- A：正确。配对正确。
- B：正确。配对正确。
- C：正确。配对正确。
- D：错误。%c 对应字符，布尔值用 %b。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/Formatter.html

### JAVA-092（多选题）

- **知识点**：while / do-while
- **难度**：易
- **课件依据**：Java基础-2-基本语法.pptx 第59页
- **答案**：A、B、C

**解析：** while 先判断，do-while 后判断；两者条件均为 boolean，do-while 的条件后有分号。

**选项辨析：**

- A：正确。初始条件为假即可零次。
- B：正确。循环体先执行。
- C：正确。Java 不接受整数条件。
- D：错误。语法需要末尾分号。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-14.html#jls-14.12；https://docs.oracle.com/javase/specs/jls/se25/html/jls-14.html#jls-14.13

### JAVA-093（多选题）

- **知识点**：for 循环 / 作用域
- **难度**：难
- **课件依据**：Java基础-2-基本语法.pptx 第61页
- **答案**：A、B、D

**解析：** 同类型变量可在初始化部分一起声明，更新表达式按顺序求值；循环头声明变量的作用域限于循环语句；一般 for 省略条件即为 true。

**选项辨析：**

- A：正确。声明合法。
- B：正确。先 i++ 后 j--。
- C：错误。循环外不可见。
- D：正确。这是一般 for 的语义。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-14.html#jls-14.14.1

### JAVA-094（多选题）

- **知识点**：break / continue / 嵌套循环
- **难度**：中
- **课件依据**：Java基础-2-基本语法.pptx 第63页
- **答案**：A、B

**解析：** 无标签 break 和 continue 都作用于最内层可适用语句，但一个终止循环，一个继续下一轮。

**选项辨析：**

- A：正确。这是 break 的默认作用域。
- B：正确。这是 continue 的默认行为。
- C：错误。不会自动结束全部外层循环。
- D：错误。continue 不返回方法。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-14.html#jls-14.15；https://docs.oracle.com/javase/specs/jls/se25/html/jls-14.html#jls-14.16

### JAVA-095（多选题）

- **知识点**：增强 for / 数组遍历
- **难度**：中
- **课件依据**：Java基础-2-基本语法.pptx 第64页
- **答案**：A、B、D

**解析：** 增强 for 简化顺序读取并避免手写边界；基本类型循环变量得到元素值的副本。

**选项辨析：**

- A：正确。每轮得到一个元素值。
- B：正确。语法不显式使用下标。
- C：错误。重新赋循环变量不写回数组。
- D：正确。数组按顺序遍历。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-14.html#jls-14.14.2

## 判断题

### JAVA-096（判断题）

- **知识点**：保留字
- **难度**：易
- **课件依据**：Java基础-2-基本语法.pptx 第3页
- **答案**：正确

**解析：** goto 是 Java 保留关键字，即使语言没有提供相应语句，也不能作为标识符。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-3.html#jls-3.9

### JAVA-097（判断题）

- **知识点**：变量类型
- **难度**：易
- **课件依据**：Java基础-2-基本语法.pptx 第5页
- **答案**：正确

**解析：** 变量具有声明时确定的类型；赋值可能发生值转换，但不会改变变量自身的声明类型。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-4.html#jls-4.12.2

### JAVA-098（判断题）

- **知识点**：常量表达式
- **难度**：中
- **课件依据**：Java基础-2-基本语法.pptx 第6页
- **答案**：错误

**解析：** 空白 final 局部变量可以在声明后明确赋值一次；关键是使用前明确赋值且不得再次赋值。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-4.html#jls-4.12.4；https://docs.oracle.com/javase/specs/jls/se25/html/jls-16.html

### JAVA-099（判断题）

- **知识点**：赋值表达式
- **难度**：中
- **课件依据**：Java基础-2-基本语法.pptx 第9页
- **答案**：正确

**解析：** 赋值表达式的值是赋值后变量的值，这使链式赋值等写法成为可能。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-15.html#jls-15.26

### JAVA-100（判断题）

- **知识点**：整数运算
- **难度**：中
- **课件依据**：Java基础-2-基本语法.pptx 第14页
- **答案**：错误

**解析：** Java 整数除法向零截断，因此 -5/2 的结果是 -2。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-15.html#jls-15.17.2

### JAVA-101（判断题）

- **知识点**：数值转换
- **难度**：难
- **课件依据**：Java基础-2-基本语法.pptx 第19页
- **答案**：错误

**解析：** 取值范围更大不等于精度更高；float 有限的有效位数无法精确表示所有 long 值。该转换允许发生，但可能损失精度。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-5.html#jls-5.1.2

### JAVA-102（判断题）

- **知识点**：char 类型
- **难度**：中
- **课件依据**：Java基础-2-基本语法.pptx 第38页
- **答案**：正确

**解析：** char 的取值范围为 0 到 65535；补充字符需要代理项对，因此“一个 char 等于任意 Unicode 字符”并不严谨。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-4.html#jls-4.2.1

### JAVA-103（判断题）

- **知识点**：字符串字面量
- **难度**：中
- **课件依据**：Java基础-2-基本语法.pptx 第22页
- **答案**：正确

**解析：** 字符串字面量可以包含零个字符；空字符串是有效对象，length 返回 0。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-3.html#jls-3.10.5；https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/String.html#length()

### JAVA-104（判断题）

- **知识点**：布尔类型
- **难度**：易
- **课件依据**：Java基础-2-基本语法.pptx 第23页
- **答案**：错误

**解析：** Java 不把整数隐式当作 boolean；if 条件表达式必须是 boolean 或可拆箱为 boolean。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-14.html#jls-14.9

### JAVA-105（判断题）

- **知识点**：switch 控制流
- **难度**：中
- **课件依据**：Java基础-2-基本语法.pptx 第29页
- **答案**：正确

**解析：** default 的文本位置不决定优先匹配；先寻找匹配标签，没有匹配时才选择 default，之后按控制流执行。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-14.html#jls-14.11.3

### JAVA-106（判断题）

- **知识点**：表达式求值
- **难度**：难
- **课件依据**：Java基础-2-基本语法.pptx 第34页
- **答案**：正确

**解析：** 每个实参表达式按从左到右顺序完全求值；第一个后缀自增的副作用在第二个实参求值前完成。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-15.html#jls-15.7.4

### JAVA-107（判断题）

- **知识点**：字符串比较
- **难度**：中
- **课件依据**：Java基础-2-基本语法.pptx 第45页
- **答案**：正确

**解析：** compareTo 只承诺结果符号表达顺序；String 实现通常依据首个不同字符的差值，该差值未必为 1。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/String.html#compareTo(java.lang.String)

### JAVA-108（判断题）

- **知识点**：replace 方法
- **难度**：难
- **课件依据**：Java基础-2-基本语法.pptx 第50页
- **答案**：错误

**解析：** String 不可变；replace 返回替换后的新字符串，原对象不被修改。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/String.html#replace(char,char)

### JAVA-109（判断题）

- **知识点**：StringBuffer
- **难度**：易
- **课件依据**：Java基础-2-基本语法.pptx 第54页
- **答案**：正确

**解析：** StringBuffer 的方法具有同步保证；StringBuilder 不提供同步，通常在单线程使用时开销更低。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/StringBuffer.html；https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/StringBuilder.html

### JAVA-110（判断题）

- **知识点**：循环控制
- **难度**：难
- **课件依据**：Java基础-2-基本语法.pptx 第63页
- **答案**：正确

**解析：** 一般 for 的 continue 目标会进入更新阶段，然后再测试循环条件；它并不等同于立即退出循环。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-14.html#jls-14.14.1.3；https://docs.oracle.com/javase/specs/jls/se25/html/jls-14.html#jls-14.16

# 第3讲：数组、类与对象

## 单选题

### JAVA-111（单选题）

- **知识点**：数组下标与边界
- **难度**：易
- **课件依据**：Java基础-3-数组、类、对象.pptx 第3页
- **答案**：B

**解析：** Java 数组下标从 0 开始，因此长度为 5 时合法范围是 0～4。

**选项辨析：**

- A：错误。不是最后一个下标。
- B：正确。最后下标为 length-1。
- C：错误。该值等于长度，已经越界。
- D：错误。超过合法范围。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-10.html

### JAVA-112（单选题）

- **知识点**：数组创建与默认值
- **难度**：易
- **课件依据**：Java基础-3-数组、类、对象.pptx 第6页
- **答案**：A

**解析：** int 数组创建后，各元素被初始化为 0。

**选项辨析：**

- A：正确。int 元素默认值为 0。
- B：错误。代码没有给元素赋 1。
- C：错误。null 不是 int 的值。
- D：错误。声明与访问均合法。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-10.html

### JAVA-113（单选题）

- **知识点**：数组声明
- **难度**：易
- **课件依据**：Java基础-3-数组、类、对象.pptx 第5页
- **答案**：A

**解析：** 仅写数组类型和变量名只声明引用。

**选项辨析：**

- A：正确。只声明引用。
- B：错误。new 创建了数组。
- C：错误。初始化器创建了数组。
- D：错误。new 创建了数组。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-10.html

### JAVA-114（单选题）

- **知识点**：数组长度固定
- **难度**：易
- **课件依据**：Java基础-3-数组、类、对象.pptx 第4页
- **答案**：C

**解析：** 数组对象创建后长度固定，需要创建新数组或使用可变集合。

**选项辨析：**

- A：错误。length 不可赋值。
- B：错误。数组不会自动扩容。
- C：正确。这是数组扩容的基本做法。
- D：错误。a[3] 会越界。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-10.html

### JAVA-115（单选题）

- **知识点**：数组越界
- **难度**：中
- **课件依据**：Java基础-3-数组、类、对象.pptx 第7页
- **答案**：C

**解析：** 长度为 3 的数组最大下标是 2，访问 3 会在运行期越界。

**选项辨析：**

- A：错误。下标 3 不合法。
- B：错误。不会返回默认值。
- C：正确。运行期进行边界检查。
- D：错误。语法本身可编译。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-10.html#jls-10.4

### JAVA-116（单选题）

- **知识点**：增强 for 循环
- **难度**：中
- **课件依据**：Java基础-3-数组、类、对象.pptx 第8页
- **答案**：A

**解析：** 增强 for 中的基本类型变量 x 是元素值的副本，给 x 赋值不改写数组槽位。

**选项辨析：**

- A：正确。原数组未改变。
- B：错误。只改变局部变量 x。
- C：错误。循环次数不决定元素值。
- D：错误。代码合法。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-14.html#jls-14.14.2

### JAVA-117（单选题）

- **知识点**：数组引用传递
- **难度**：中
- **课件依据**：Java基础-3-数组、类、对象.pptx 第9页
- **答案**：B

**解析：** 形参获得数组引用的副本，仍指向同一数组，因此元素修改可见。

**选项辨析：**

- A：错误。元素已被修改。
- B：正确。两个引用访问同一数组。
- C：错误。没有恢复默认值。
- D：错误。参数类型匹配。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-15.html#jls-15.12.4.2

### JAVA-118（单选题）

- **知识点**：引用形参重新赋值
- **难度**：难
- **课件依据**：Java基础-3-数组、类、对象.pptx 第40页
- **答案**：A

**解析：** 给形参 x 重新绑定新数组不会改变实参变量 a 的绑定。

**选项辨析：**

- A：正确。a 仍指向原数组。
- B：错误。8 位于形参新指向的数组中。
- C：错误。原数组未被清零。
- D：错误。a 从未变为 null。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-15.html#jls-15.12.4.2

### JAVA-119（单选题）

- **知识点**：Arrays.sort
- **难度**：易
- **课件依据**：Java基础-3-数组、类、对象.pptx 第10页
- **答案**：B

**解析：** 基本类型数组默认按升序原地排序。

**选项辨析：**

- A：错误。这是原顺序。
- B：正确。排序结果为升序。
- C：错误。不是默认降序。
- D：错误。sort 会修改数组。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/Arrays.html#sort(int%5B%5D)

### JAVA-120（单选题）

- **知识点**：Arrays.binarySearch
- **难度**：中
- **课件依据**：Java基础-3-数组、类、对象.pptx 第10页
- **答案**：B

**解析：** 数组已升序，找到 6 后返回其下标 2。

**选项辨析：**

- A：错误。下标 1 对应 4。
- B：正确。6 位于下标 2。
- C：错误。返回下标而非元素值。
- D：错误。找到时不返回负值。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/Arrays.html#binarySearch(int%5B%5D,int)

### JAVA-121（单选题）

- **知识点**：Arrays.copyOf
- **难度**：中
- **课件依据**：Java基础-3-数组、类、对象.pptx 第10页
- **答案**：B

**解析：** copyOf 创建指定长度的新数组，并以类型默认值填充多出的槽位。

**选项辨析：**

- A：错误。结果是新数组。
- B：正确。符合复制与补零规则。
- C：错误。新长度由第二参数决定。
- D：错误。允许扩展长度。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/Arrays.html#copyOf(int%5B%5D,int)

### JAVA-122（单选题）

- **知识点**：二维数组模型
- **难度**：中
- **课件依据**：Java基础-3-数组、类、对象.pptx 第11页
- **答案**：A

**解析：** 二维数组是数组的数组：外层有 2 个元素，每个内层数组长度为 3。

**选项辨析：**

- A：正确。正确反映两层长度。
- B：错误。次序颠倒。
- C：错误。length 不返回元素总数。
- D：错误。内层长度不是总数。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-10.html

### JAVA-123（单选题）

- **知识点**：锯齿数组
- **难度**：中
- **课件依据**：Java基础-3-数组、类、对象.pptx 第11页
- **答案**：A

**解析：** Java 二维数组的各内层数组长度可以不同。

**选项辨析：**

- A：正确。这是合法锯齿数组。
- B：错误。声明语法错误。
- C：错误。创建时不能省略最左维长度而指定右维。
- D：错误。元素类型不一致。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-10.html

### JAVA-124（单选题）

- **知识点**：二维数组空引用
- **难度**：难
- **课件依据**：Java基础-3-数组、类、对象.pptx 第11页
- **答案**：C

**解析：** 只创建外层数组时，引用类型元素默认为 null；访问 a[0][0] 会解引用 null。

**选项辨析：**

- A：错误。内层数组尚未创建。
- B：错误。表达式继续访问内层元素，不能只打印 null。
- C：正确。a[0] 为 null。
- D：错误。外层下标 0 合法。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-10.html

### JAVA-125（单选题）

- **知识点**：命令行参数
- **难度**：易
- **课件依据**：Java基础-3-数组、类、对象.pptx 第12页
- **答案**：C

**解析：** 类名不是命令行参数，red 和 blue 分别进入 args[0]、args[1]。

**选项辨析：**

- A：错误。传入了两个参数。
- B：错误。不是把整行作为一个参数。
- C：正确。数组长度为 2。
- D：错误。类名不计入 args。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-12.html

### JAVA-126（单选题）

- **知识点**：对象引用别名
- **难度**：中
- **课件依据**：Java基础-3-数组、类、对象.pptx 第32页
- **答案**：B

**解析：** t 与 c 指向同一个对象，经 t 修改字段后 c 可观察到变化。

**选项辨析：**

- A：错误。字段已被改写。
- B：正确。引用赋值建立别名。
- C：错误。字段不是默认值。
- D：错误。代码合法。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-4.html#jls-4.3.1

### JAVA-127（单选题）

- **知识点**：对象引用重新绑定
- **难度**：中
- **课件依据**：Java基础-3-数组、类、对象.pptx 第32页
- **答案**：B

**解析：** 引用变量各自保存引用；重新给 t 赋值不改变 c。

**选项辨析：**

- A：错误。引用变量并非联动。
- B：正确。c 的绑定保持不变。
- C：错误。对象不会因此清零。
- D：错误。Java 引用赋值不复制对象。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-4.html#jls-4.3.1

### JAVA-128（单选题）

- **知识点**：默认构造方法
- **难度**：易
- **课件依据**：Java基础-3-数组、类、对象.pptx 第24页
- **答案**：B

**解析：** 只要显式声明任何构造器，默认无参构造器便不会自动生成。

**选项辨析：**

- A：错误。此时不会自动提供。
- B：正确。这是默认构造规则。
- C：错误。构造器没有返回类型。
- D：错误。仍可用有参构造器创建。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-8.html#jls-8.8.9

### JAVA-129（单选题）

- **知识点**：构造方法语法
- **难度**：易
- **课件依据**：Java基础-3-数组、类、对象.pptx 第23页
- **答案**：A

**解析：** 构造器名称与类名一致，声明中不写返回类型。

**选项辨析：**

- A：正确。这是核心语法特征。
- B：错误。写 void 会成为普通方法。
- C：错误。构造器不是 static 方法。
- D：错误。构造器可以重载。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-8.html#jls-8.8

### JAVA-130（单选题）

- **知识点**：构造链
- **难度**：难
- **课件依据**：Java基础-3-数组、类、对象.pptx 第55页
- **答案**：B

**解析：** 子类构造开始必须先完成父类部分，默认首行隐式调用父类无参构造器。

**选项辨析：**

- A：错误。必须先调用而非末尾。
- B：正确。这是隐式构造器调用规则。
- C：错误。只选择一个构造器。
- D：错误。父类构造必须执行。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-8.html#jls-8.8.7

### JAVA-131（单选题）

- **知识点**：构造链编译错误
- **难度**：难
- **课件依据**：Java基础-3-数组、类、对象.pptx 第55页
- **答案**：B

**解析：** 隐式 super() 找不到父类无参构造器，错误在编译期产生。

**选项辨析：**

- A：错误。不会猜测参数。
- B：正确。必须显式调用可用的 super(int)。
- C：错误。不能跳过父类初始化。
- D：错误。构造器解析是编译检查。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-8.html#jls-8.8.7

### JAVA-132（单选题）

- **知识点**：变量作用域
- **难度**：中
- **课件依据**：Java基础-3-数组、类、对象.pptx 第28页
- **答案**：C

**解析：** 块变量的作用域限于声明所在块。

**选项辨析：**

- A：错误。局部块变量不是类成员。
- B：错误。this 只能访问实例成员。
- C：正确。离开块即超出作用域。
- D：错误。不会自动提升。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-6.html#jls-6.3

### JAVA-133（单选题）

- **知识点**：封装
- **难度**：易
- **课件依据**：Java基础-3-数组、类、对象.pptx 第37页
- **答案**：B

**解析：** 私有字段配合受控写入方法可维护对象不变量。

**选项辨析：**

- A：错误。公开写入绕过校验。
- B：正确。封装入口可实施校验。
- C：错误。static 不解决合法性。
- D：错误。对象仍需行为入口。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-8.html#jls-8.3

### JAVA-134（单选题）

- **知识点**：private 访问
- **难度**：易
- **课件依据**：Java基础-3-数组、类、对象.pptx 第50页
- **答案**：B

**解析：** private 成员不向其他类开放。

**选项辨析：**

- A：错误。范围过大。
- B：正确。符合私有访问控制。
- C：错误。同包也不能直接访问。
- D：错误。子类也不能直接访问。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-6.html#jls-6.6.1

### JAVA-135（单选题）

- **知识点**：默认访问权限
- **难度**：中
- **课件依据**：Java基础-3-数组、类、对象.pptx 第51页
- **答案**：B

**解析：** 缺省访问是包访问。

**选项辨析：**

- A：错误。比 private 范围更宽。
- B：正确。同包可访问。
- C：错误。不是 public。
- D：错误。不同包子类也不能仅凭继承访问。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-6.html#jls-6.6.1

### JAVA-136（单选题）

- **知识点**：protected 访问
- **难度**：中
- **课件依据**：Java基础-3-数组、类、对象.pptx 第53页
- **答案**：B

**解析：** protected 同时提供包访问和跨包继承访问，但跨包使用受限定。

**选项辨析：**

- A：错误。范围过窄。
- B：正确。概括了两条访问路径。
- C：错误。它不是 public。
- D：错误。与接口无关。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-6.html#jls-6.6.2

### JAVA-137（单选题）

- **知识点**：包与 import
- **难度**：易
- **课件依据**：Java基础-3-数组、类、对象.pptx 第47页
- **答案**：B

**解析：** 按需类型导入只作用于指定包的可访问类型，不递归子包。

**选项辨析：**

- A：错误。不会递归子包。
- B：正确。这是 import 的用途。
- C：错误。不会复制类型。
- D：错误。不是下载机制。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-7.html#jls-7.5.2

### JAVA-138（单选题）

- **知识点**：单继承
- **难度**：易
- **课件依据**：Java基础-3-数组、类、对象.pptx 第55页
- **答案**：B

**解析：** Java 类采用单继承；多种能力可通过多个接口表达。

**选项辨析：**

- A：错误。类可以继承。
- B：正确。符合单继承原则。
- C：错误。不是两个。
- D：错误。类不支持多继承。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-8.html#jls-8.1.4

### JAVA-139（单选题）

- **知识点**：方法重写
- **难度**：中
- **课件依据**：Java基础-3-数组、类、对象.pptx 第55页
- **答案**：A

**解析：** 重写以实例方法签名和返回类型兼容等规则判断。

**选项辨析：**

- A：正确。这是重写基础。
- B：错误。字段不存在重写。
- C：错误。构造器不继承。
- D：错误。局部变量无关。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-8.html#jls-8.4.8.1

### JAVA-140（单选题）

- **知识点**：动态绑定
- **难度**：中
- **课件依据**：Java基础-3-数组、类、对象.pptx 第60页
- **答案**：B

**解析：** 父类引用调用被重写的实例方法，运行时选择实际对象 B 的实现。

**选项辨析：**

- A：错误。不会固定调用父类实现。
- B：正确。动态分派到 B.f。
- C：错误。只调用一次。
- D：错误。类型关系合法。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-15.html#jls-15.12.4.4

### JAVA-141（单选题）

- **知识点**：字段隐藏与多态
- **难度**：难
- **课件依据**：Java基础-3-数组、类、对象.pptx 第60页
- **答案**：A

**解析：** 字段访问按引用的编译时类型解析，不进行实例方法式的动态分派。

**选项辨析：**

- A：正确。x 的声明类型是 A。
- B：错误。实际对象字段不决定该表达式。
- C：错误。只访问一个字段。
- D：错误。代码合法。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-15.html#jls-15.11.1

### JAVA-142（单选题）

- **知识点**：向上转型限制
- **难度**：中
- **课件依据**：Java基础-3-数组、类、对象.pptx 第61页
- **答案**：B

**解析：** 成员可调用性先由左侧静态类型决定。

**选项辨析：**

- A：错误。实际对象确实是 Dog。
- B：正确。Animal 未声明 fetch 时编译不通过。
- C：错误。多态允许重写。
- D：错误。与 static 无必然关系。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-15.html#jls-15.12

### JAVA-143（单选题）

- **知识点**：抽象类实例化
- **难度**：易
- **课件依据**：Java基础-3-数组、类、对象.pptx 第57页
- **答案**：C

**解析：** 抽象类不能直接创建实例，却可作为变量、参数和返回类型。

**选项辨析：**

- A：错误。直接实例化非法。
- B：错误。可含具体方法。
- C：正确。该说法正确。
- D：错误。抽象类可有构造器。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-8.html#jls-8.1.1.1

### JAVA-144（单选题）

- **知识点**：抽象方法实现
- **难度**：中
- **课件依据**：Java基础-3-数组、类、对象.pptx 第57页
- **答案**：B

**解析：** 非抽象子类必须为继承到的抽象方法提供实现。

**选项辨析：**

- A：错误。不能删除继承契约。
- B：正确。这是具体类的义务。
- C：错误。构造器不能 static。
- D：错误。类仍是单继承。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-8.html#jls-8.1.1.1

### JAVA-145（单选题）

- **知识点**：接口多实现
- **难度**：易
- **课件依据**：Java基础-3-数组、类、对象.pptx 第58页
- **答案**：B

**解析：** 类可用 implements 实现多个接口。

**选项辨析：**

- A：错误。extends 用于类父类或接口继承。
- B：正确。语法正确。
- C：错误。接口继承使用 extends。
- D：错误。不是 Java 声明语法。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-8.html#jls-8.1.5

### JAVA-146（单选题）

- **知识点**：接口字段
- **难度**：中
- **课件依据**：Java基础-3-数组、类、对象.pptx 第58页
- **答案**：B

**解析：** 接口字段隐式为 public static final。

**选项辨析：**

- A：错误。不是 private。
- B：正确。符合接口字段规则。
- C：错误。接口字段不为 protected。
- D：错误。final 而非 volatile。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-9.html#jls-9.3

### JAVA-147（单选题）

- **知识点**：接口默认方法
- **难度**：中
- **课件依据**：Java基础-3-数组、类、对象.pptx 第58页
- **答案**：B

**解析：** default 方法允许接口演进并提供实例行为的默认实现。

**选项辨析：**

- A：错误。native 含义不同。
- B：正确。关键字为 default。
- C：错误。接口实例方法不能用 final 达成此目的。
- D：错误。不是接口方法修饰选择。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-9.html#jls-9.4.3

### JAVA-148（单选题）

- **知识点**：static 共享字段
- **难度**：中
- **课件依据**：Java基础-3-数组、类、对象.pptx 第64页
- **答案**：C

**解析：** 静态字段属于类，所有实例访问同一份存储。

**选项辨析：**

- A：错误。已递增两次。
- B：错误。不是每实例一份。
- C：正确。共享值为 2。
- D：错误。描述的是实例字段。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-8.html#jls-8.3.1.1

### JAVA-149（单选题）

- **知识点**：静态方法限制
- **难度**：中
- **课件依据**：Java基础-3-数组、类、对象.pptx 第65页
- **答案**：B

**解析：** 直接访问实例成员需要某个接收对象，而静态上下文没有 this。

**选项辨析：**

- A：错误。访问级别不是根因。
- B：正确。这是核心原因。
- C：错误。Java 允许字段。
- D：错误。存储位置说法也不成立。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-15.html#jls-15.8.3

### JAVA-150（单选题）

- **知识点**：初始化顺序
- **难度**：难
- **课件依据**：Java基础-3-数组、类、对象.pptx 第66页
- **答案**：B

**解析：** 类初始化先执行静态初始化；每次创建实例时，实例初始化在构造器主体之前。

**选项辨析：**

- A：错误。顺序相反。
- B：正确。符合初始化阶段顺序。
- C：错误。静态初始化更早。
- D：错误。实例初始化不晚于构造器主体。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-12.html#jls-12.4

## 多选题

### JAVA-151（多选题）

- **知识点**：数组声明 / 数组初始化
- **难度**：中
- **课件依据**：Java基础-3-数组、类、对象.pptx 第9页
- **答案**：A、B

**解析：** 初始化器可直接用于声明，也可配合不写长度的 new；不能同时写长度和元素列表。

**选项辨析：**

- A：正确。合法简写。
- B：正确。合法匿名数组。
- C：错误。new 初始化器不能同时指定长度。
- D：错误。数组声明不在类型括号中写长度。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-10.html

### JAVA-152（多选题）

- **知识点**：数组引用 / 对象模型
- **难度**：中
- **课件依据**：Java基础-3-数组、类、对象.pptx 第9页
- **答案**：A、B

**解析：** Java 始终按值传参；对于数组，该值是引用，因此共享对象但变量绑定独立。

**选项辨析：**

- A：正确。传入的是引用值副本。
- B：正确。共享数组元素可见。
- C：错误。不会反向改绑实参。
- D：错误。不会自动完整复制。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-15.html#jls-15.12.4.2

### JAVA-153（多选题）

- **知识点**：Arrays 工具类 / 数组操作
- **难度**：中
- **课件依据**：Java基础-3-数组、类、对象.pptx 第10页
- **答案**：A、B、C

**解析：** sort、binarySearch 与 equals 的说法成立；二维数组递归展示应使用 deepToString。

**选项辨析：**

- A：正确。sort 修改目标数组。
- B：正确。二分查找依赖有序前提。
- C：正确。equals 可逐元素比较。
- D：错误。普通 toString 不递归内层数组。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/Arrays.html

### JAVA-154（多选题）

- **知识点**：多维数组 / 锯齿数组
- **难度**：难
- **课件依据**：Java基础-3-数组、类、对象.pptx 第11页
- **答案**：A、B、D

**解析：** 外层数组已存在，三个内层引用起初为 null，可分别绑定不同长度数组。

**选项辨析：**

- A：正确。外层长度为 3。
- B：正确。可创建内层数组。
- C：错误。会空指针异常。
- D：正确。内层长度可不同。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-10.html

### JAVA-155（多选题）

- **知识点**：数组边界 / 循环
- **难度**：中
- **课件依据**：Java基础-3-数组、类、对象.pptx 第7页
- **答案**：A、C、D

**解析：** 从 0 递增且步长为 1 时，三种条件都会在 i 等于长度时结束；<= 会访问越界下标。

**选项辨析：**

- A：正确。标准安全条件。
- B：错误。会包含 length。
- C：正确。前提确保上界一致。
- D：正确。给定递增前提下可停止。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-14.html#jls-14.14

### JAVA-156（多选题）

- **知识点**：对象引用 / 赋值
- **难度**：中
- **课件依据**：Java基础-3-数组、类、对象.pptx 第32页
- **答案**：A、B

**解析：** 引用赋值复制引用值，不复制对象，也不让两个变量绑定联动。

**选项辨析：**

- A：正确。两者形成别名。
- B：正确。共享对象状态。
- C：错误。变量 q 单独改变。
- D：错误。只执行了一次 new。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-4.html#jls-4.3.1

### JAVA-157（多选题）

- **知识点**：构造方法 / 对象初始化
- **难度**：中
- **课件依据**：Java基础-3-数组、类、对象.pptx 第23页
- **答案**：A、B、D

**解析：** 构造器可重载、名称固定且没有返回类型。

**选项辨析：**

- A：正确。参数列表可不同。
- B：正确。构造器以类名命名。
- C：错误。写 void 就是普通方法。
- D：正确。new 会启动构造过程。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-8.html#jls-8.8

### JAVA-158（多选题）

- **知识点**：默认构造器 / 继承
- **难度**：难
- **课件依据**：Java基础-3-数组、类、对象.pptx 第24页
- **答案**：A、B、C

**解析：** 缺少无参构造、隐式 super() 无目标或抽象类实例化都会失败。

**选项辨析：**

- A：正确。不会自动补 Child()。
- B：正确。默认构造链无法完成。
- C：正确。抽象类不能 new。
- D：错误。此构造链可成立。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-8.html#jls-8.8.9

### JAVA-159（多选题）

- **知识点**：封装 / Getter/Setter
- **难度**：易
- **课件依据**：Java基础-3-数组、类、对象.pptx 第39页
- **答案**：A、B、D

**解析：** 访问方法形成受控边界，但仅有 getter/setter 并不自动解决并发安全。

**选项辨析：**

- A：正确。setter 可校验。
- B：正确。外部不直接依赖字段。
- C：错误。并发安全还需额外设计。
- D：正确。封装降低实现变化影响。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-8.html

### JAVA-160（多选题）

- **知识点**：访问控制 / 包
- **难度**：中
- **课件依据**：Java基础-3-数组、类、对象.pptx 第49页
- **答案**：A、B、C

**解析：** 前三项分别概括 private、包访问和 public；protected 仍有限制。

**选项辨析：**

- A：正确。符合 private。
- B：正确。符合包访问。
- C：正确。public 最宽。
- D：错误。protected 不是全局公开。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-6.html#jls-6.6

### JAVA-161（多选题）

- **知识点**：包 / import
- **难度**：中
- **课件依据**：Java基础-3-数组、类、对象.pptx 第44页
- **答案**：A、B、C

**解析：** 包声明、单元导入与 java.lang 自动导入成立；星号导入不递归。

**选项辨析：**

- A：正确。决定包归属。
- B：正确。减少全限定名书写。
- C：正确。该包自动导入。
- D：错误。子包是独立包。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-7.html

### JAVA-162（多选题）

- **知识点**：继承 / 代码复用
- **难度**：中
- **课件依据**：Java基础-3-数组、类、对象.pptx 第55页
- **答案**：A、B、D

**解析：** 类采用单继承，构造器不继承，实例方法可按规则重写。

**选项辨析：**

- A：正确。关键字正确。
- B：正确。直接父类唯一。
- C：错误。构造器不属于继承成员。
- D：正确。这是多态基础。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-8.html#jls-8.1.4

### JAVA-163（多选题）

- **知识点**：this / super
- **难度**：中
- **课件依据**：Java基础-3-数组、类、对象.pptx 第55页
- **答案**：A、B、D

**解析：** this 与当前实例关联，静态上下文不存在当前实例；super 支持父类构造与成员访问。

**选项辨析：**

- A：正确。含义正确。
- B：正确。构造链常用。
- C：错误。静态上下文无 this。
- D：正确。受访问权限约束时成立。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-15.html#jls-15.11.2

### JAVA-164（多选题）

- **知识点**：方法重写 / 多态
- **难度**：难
- **课件依据**：Java基础-3-数组、类、对象.pptx 第60页
- **答案**：A、B、C

**解析：** 动态分派建立在类型关系、实例方法重写和向上转型引用之上。

**选项辨析：**

- A：正确。提供类型层次。
- B：正确。提供不同实现。
- C：正确。形成多态调用入口。
- D：错误。字段隐藏不产生方法多态。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-15.html#jls-15.12.4.4

### JAVA-165（多选题）

- **知识点**：抽象类 / 抽象方法
- **难度**：中
- **课件依据**：Java基础-3-数组、类、对象.pptx 第57页
- **答案**：A、B、C

**解析：** 抽象类仍是类，可拥有状态、构造器和具体行为。

**选项辨析：**

- A：正确。用于初始化子类对象中的父类部分。
- B：正确。允许具体实现。
- C：正确。允许实例状态。
- D：错误。并非只能含抽象方法。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-8.html#jls-8.1.1.1

### JAVA-166（多选题）

- **知识点**：接口 / 接口演进
- **难度**：中
- **课件依据**：Java基础-3-数组、类、对象.pptx 第58页
- **答案**：A、B、C

**解析：** 接口支持抽象、default 和 static 方法；字段隐式为静态常量，不是实例字段。

**选项辨析：**

- A：正确。接口契约核心。
- B：正确。JDK 8 起支持。
- C：正确。JDK 8 起支持。
- D：错误。接口不持有每对象实例字段。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-9.html

### JAVA-167（多选题）

- **知识点**：接口 / 多继承
- **难度**：中
- **课件依据**：Java基础-3-数组、类、对象.pptx 第58页
- **答案**：A、B、D

**解析：** 类可多实现接口，接口可多继承，类还可在单继承基础上多实现。

**选项辨析：**

- A：正确。合法多实现。
- B：正确。合法接口多继承。
- C：错误。类不能多继承类。
- D：正确。合法组合。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-8.html#jls-8.1

### JAVA-168（多选题）

- **知识点**：多态 / 成员访问
- **难度**：难
- **课件依据**：Java基础-3-数组、类、对象.pptx 第60页
- **答案**：A、B、D

**解析：** 方法动态绑定、字段静态解析；子类独有成员需先经合法转型。

**选项辨析：**

- A：正确。运行看实际对象。
- B：正确。字段不多态。
- C：错误。编译时 Base 不含该方法。
- D：正确。确认类型后可转型调用。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-15.html

### JAVA-169（多选题）

- **知识点**：static / 类成员
- **难度**：中
- **课件依据**：Java基础-3-数组、类、对象.pptx 第63页
- **答案**：A、B、D

**解析：** 静态上下文没有隐式对象，因此不能直接访问实例字段。

**选项辨析：**

- A：正确。类级成员。
- B：正确。共享同一份。
- C：错误。必须先有明确对象引用。
- D：正确。推荐清晰的访问形式。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-8.html#jls-8.3.1.1

### JAVA-170（多选题）

- **知识点**：static / 初始化
- **难度**：难
- **课件依据**：Java基础-3-数组、类、对象.pptx 第66页
- **答案**：A、B、D

**解析：** 静态初始化随类初始化执行，而不是随每个实例重复。

**选项辨析：**

- A：正确。执行时机正确。
- B：正确。类初始化只进行一次。
- C：错误。这是实例初始化块特征。
- D：正确。常见用途。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-12.html#jls-12.4.2

### JAVA-171（多选题）

- **知识点**：值传递 / 对象引用
- **难度**：难
- **课件依据**：Java基础-3-数组、类、对象.pptx 第40页
- **答案**：A、B

**解析：** 对象状态共享可见，但形参与实参是两个独立变量。

**选项辨析：**

- A：正确。共享对象状态改变。
- B：正确。作用于同一对象。
- C：错误。只改变形参。
- D：错误。重新绑定不传播。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-15.html#jls-15.12.4.2

### JAVA-172（多选题）

- **知识点**：数组 / 引用类型元素
- **难度**：中
- **课件依据**：Java基础-3-数组、类、对象.pptx 第6页
- **答案**：A、B、C

**解析：** 引用类型数组元素默认值为 null，数组对象有固定长度。

**选项辨析：**

- A：正确。长度正确。
- B：正确。引用默认值。
- C：正确。数组属于引用类型对象。
- D：错误。不会自动构造 String。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-10.html

### JAVA-173（多选题）

- **知识点**：Arrays.copyOf / 数组引用
- **难度**：难
- **课件依据**：Java基础-3-数组、类、对象.pptx 第10页
- **答案**：A、B、C

**解析：** 复制是浅层的：数组容器新建，元素引用值被复制。

**选项辨析：**

- A：正确。新数组容器。
- B：正确。引用值相同。
- C：正确。共享所指对象。
- D：错误。改槽位只影响 b。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/Arrays.html#copyOf(T%5B%5D,int)

### JAVA-174（多选题）

- **知识点**：垃圾回收 / 对象生命周期
- **难度**：中
- **课件依据**：Java基础-3-数组、类、对象.pptx 第35页
- **答案**：A、B、D

**解析：** GC 管理堆对象内存，但即时性无保证，也不能替代外部资源关闭。

**选项辨析：**

- A：正确。可达性是关键。
- B：正确。时间由运行时决定。
- C：错误。还可能有其他引用且时机不保证。
- D：正确。应使用资源管理机制。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-12.html#jls-12.6

## 判断题

### JAVA-175（判断题）

- **知识点**：数组长度固定
- **难度**：易
- **课件依据**：Java基础-3-数组、类、对象.pptx 第4页
- **答案**：正确

**解析：** 数组长度是对象创建时确定的固定属性。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-10.html

### JAVA-176（判断题）

- **知识点**：数组下标
- **难度**：中
- **课件依据**：Java基础-3-数组、类、对象.pptx 第3页
- **答案**：错误

**解析：** Java 数组合法下标是 0 到 n-1。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-10.html

### JAVA-177（判断题）

- **知识点**：增强 for 循环
- **难度**：中
- **课件依据**：Java基础-3-数组、类、对象.pptx 第8页
- **答案**：错误

**解析：** 循环变量接收基本类型元素值的副本。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-14.html#jls-14.14.2

### JAVA-178（判断题）

- **知识点**：二维数组
- **难度**：中
- **课件依据**：Java基础-3-数组、类、对象.pptx 第11页
- **答案**：错误

**解析：** 二维数组是数组的数组，各内层数组可有不同长度。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-10.html

### JAVA-179（判断题）

- **知识点**：数组参数
- **难度**：中
- **课件依据**：Java基础-3-数组、类、对象.pptx 第40页
- **答案**：正确

**解析：** 按值传递引用仍可访问共享数组对象。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-15.html#jls-15.12.4.2

### JAVA-180（判断题）

- **知识点**：对象引用
- **难度**：中
- **课件依据**：Java基础-3-数组、类、对象.pptx 第32页
- **答案**：错误

**解析：** 引用赋值只复制引用值，不执行对象复制。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-4.html#jls-4.3.1

### JAVA-181（判断题）

- **知识点**：默认构造器
- **难度**：中
- **课件依据**：Java基础-3-数组、类、对象.pptx 第24页
- **答案**：错误

**解析：** 显式构造器可能使默认无参构造器不再生成，且访问权限也可能限制调用。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-8.html#jls-8.8.9

### JAVA-182（判断题）

- **知识点**：封装
- **难度**：中
- **课件依据**：Java基础-3-数组、类、对象.pptx 第37页
- **答案**：正确

**解析：** 这能隐藏表示并维护对象状态约束。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-8.html

### JAVA-183（判断题）

- **知识点**：包访问
- **难度**：中
- **课件依据**：Java基础-3-数组、类、对象.pptx 第51页
- **答案**：错误

**解析：** 未写修饰符表示包访问，而非公共访问。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-6.html#jls-6.6.1

### JAVA-184（判断题）

- **知识点**：类继承
- **难度**：中
- **课件依据**：Java基础-3-数组、类、对象.pptx 第55页
- **答案**：错误

**解析：** Java 类遵循单继承。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-8.html#jls-8.1.4

### JAVA-185（判断题）

- **知识点**：构造方法继承
- **难度**：中
- **课件依据**：Java基础-3-数组、类、对象.pptx 第55页
- **答案**：错误

**解析：** 构造器不被继承，只会在构造链中被调用。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-8.html#jls-8.8

### JAVA-186（判断题）

- **知识点**：抽象类
- **难度**：中
- **课件依据**：Java基础-3-数组、类、对象.pptx 第57页
- **答案**：正确

**解析：** 抽象类型可参与多态引用。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-8.html#jls-8.1.1.1

### JAVA-187（判断题）

- **知识点**：接口
- **难度**：中
- **课件依据**：Java基础-3-数组、类、对象.pptx 第58页
- **答案**：正确

**解析：** Java 支持类的多接口实现。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-8.html#jls-8.1.5

### JAVA-188（判断题）

- **知识点**：多态
- **难度**：难
- **课件依据**：Java基础-3-数组、类、对象.pptx 第60页
- **答案**：错误

**解析：** 运行时动态分派通常选择实际子类对象的重写版本。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-15.html#jls-15.12.4.4

### JAVA-189（判断题）

- **知识点**：static
- **难度**：难
- **课件依据**：Java基础-3-数组、类、对象.pptx 第65页
- **答案**：正确

**解析：** 实例成员访问需要接收对象。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-15.html#jls-15.8.3

### JAVA-190（判断题）

- **知识点**：静态代码块
- **难度**：难
- **课件依据**：Java基础-3-数组、类、对象.pptx 第66页
- **答案**：错误

**解析：** 静态代码块随类初始化执行；每次实例化执行的是实例初始化和构造过程。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-12.html#jls-12.4.2

# 第4讲：异常处理、日志与断言

## 单选题

### JAVA-191（单选题）

- **知识点**：异常对象
- **难度**：易
- **课件依据**：Java基础-4-异常处理.pptx 第3页
- **答案**：B

**解析：** 异常属于 Throwable 体系中的对象，可携带原因、消息和堆栈；代码也能创建、抛出和捕获异常。

**选项辨析：**

- A：错误。文本只是异常信息的一种呈现。
- B：正确。异常对象封装诊断信息。
- C：错误。应用代码可 new 并 throw 异常。
- D：错误。若有匹配处理器，程序可继续。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-11.html

### JAVA-192（单选题）

- **知识点**：异常消息
- **难度**：易
- **课件依据**：Java基础-4-异常处理.pptx 第4页
- **答案**：A

**解析：** getMessage 返回详细消息字符串，不负责打印完整调用栈。

**选项辨析：**

- A：正确。直接返回消息。
- B：错误。返回堆栈元素数组。
- C：错误。打印异常及调用栈。
- D：错误。更新当前堆栈信息。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/Throwable.html#getMessage()

### JAVA-193（单选题）

- **知识点**：堆栈跟踪
- **难度**：中
- **课件依据**：Java基础-4-异常处理.pptx 第4页
- **答案**：A

**解析：** 堆栈元素记录类、方法、文件和行号等调用位置，可帮助定位异常从哪里产生并向上传播。

**选项辨析：**

- A：正确。这正是调用栈的核心诊断价值。
- B：错误。不会导出所有对象地址。
- C：错误。异常栈不包含全库数据。
- D：错误。不会合法提供用户口令。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/StackTraceElement.html

### JAVA-194（单选题）

- **知识点**：checked exception
- **难度**：易
- **课件依据**：Java基础-4-异常处理.pptx 第6页
- **答案**：A

**解析：** FileNotFoundException 继承 IOException，属于检查型异常；其余均是 RuntimeException 子类。

**选项辨析：**

- A：正确。必须捕获或声明。
- B：错误。属于非检查运行时异常。
- C：错误。属于非检查运行时异常。
- D：错误。属于非检查运行时异常。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/io/FileNotFoundException.html

### JAVA-195（单选题）

- **知识点**：unchecked exception
- **难度**：中
- **课件依据**：Java基础-4-异常处理.pptx 第7页
- **答案**：B

**解析：** Integer.parseInt 无法把非数字文本解析为 int，会抛出 NumberFormatException。

**选项辨析：**

- A：错误。没有文件或流操作。
- B：正确。非法整数文本触发该异常。
- C：错误。没有动态加载类。
- D：错误。代码未执行断言。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/Integer.html#parseInt(java.lang.String)

### JAVA-196（单选题）

- **知识点**：异常匹配
- **难度**：中
- **课件依据**：Java基础-4-异常处理.pptx 第8页
- **答案**：A

**解析：** 处理器参数类型可以是异常对象类型的父类；FileNotFoundException 是 IOException 的子类。

**选项辨析：**

- A：正确。父类型处理器可匹配。
- B：错误。两者无继承匹配关系。
- C：错误。Exception 分支不属于 Error。
- D：错误。String 不是 Throwable，catch 参数非法。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-11.html#jls-11.2.3

### JAVA-197（单选题）

- **知识点**：标准异常
- **难度**：易
- **课件依据**：Java基础-4-异常处理.pptx 第10页
- **答案**：B

**解析：** 数组长度为负在创建数组时触发 NegativeArraySizeException。

**选项辨析：**

- A：错误。尚未访问数组下标。
- B：正确。该异常专门描述负数组长度。
- C：错误。与访问控制无关。
- D：错误。没有类型强转。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/NegativeArraySizeException.html

### JAVA-198（单选题）

- **知识点**：try-catch
- **难度**：中
- **课件依据**：Java基础-4-异常处理.pptx 第13页
- **答案**：A

**解析：** try 中抛异常后，后续 B 不执行；匹配 catch 打印 C。

**选项辨析：**

- A：正确。A 后转入 catch 打印 C。
- B：错误。B 被异常跳过。
- C：错误。catch 仍会打印 C。
- D：错误。RuntimeException 可捕获，代码合法。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-14.html#jls-14.20

### JAVA-199（单选题）

- **知识点**：catch 顺序
- **难度**：难
- **课件依据**：Java基础-4-异常处理.pptx 第14页
- **答案**：B

**解析：** 父类 IOException 已捕获其所有子类，后置的 FileNotFoundException 永远不可能获得控制。

**选项辨析：**

- A：错误。IOException 是合法异常类型。
- B：正确。具体子类处理器应放在父类处理器之前。
- C：错误。try 可有多个 catch。
- D：错误。finally 可选。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-11.html#jls-11.2.3

### JAVA-200（单选题）

- **知识点**：finally
- **难度**：中
- **课件依据**：Java基础-4-异常处理.pptx 第15页
- **答案**：C

**解析：** 没有异常时 try 正常结束，finally 仍执行。

**选项辨析：**

- A：错误。遗漏 finally。
- B：错误。遗漏 try。
- C：正确。先 T 后 F。
- D：错误。两个块都会执行。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-14.html#jls-14.20.2

### JAVA-201（单选题）

- **知识点**：finally 与 return
- **难度**：难
- **课件依据**：Java基础-4-异常处理.pptx 第15页
- **答案**：B

**解析：** finally 中的 return 会取代 try 中已经计算的返回结果；这种写法会掩盖控制流，实践中应避免。

**选项辨析：**

- A：错误。try 的返回被 finally 覆盖。
- B：正确。最终返回 2。
- C：错误。语法允许但不推荐。
- D：错误。没有异常。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-14.html#jls-14.20.2

### JAVA-202（单选题）

- **知识点**：try-with-resources
- **难度**：易
- **课件依据**：Java基础-4-异常处理.pptx 第18页
- **答案**：B

**解析：** 资源必须可自动关闭，即类型实现 AutoCloseable 或其子接口 Closeable。

**选项辨析：**

- A：错误。序列化不是资源关闭契约。
- B：正确。close 方法由该接口规定。
- C：错误。克隆与释放资源无关。
- D：错误。Runnable 表示可执行任务。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/AutoCloseable.html

### JAVA-203（单选题）

- **知识点**：资源关闭顺序
- **难度**：难
- **课件依据**：Java基础-4-异常处理.pptx 第18页
- **答案**：B

**解析：** 资源按声明的逆序关闭，类似栈结构，后获得的资源先释放。

**选项辨析：**

- A：错误。顺序相反。
- B：正确。r2 先于 r1。
- C：错误。两个资源都会尝试关闭。
- D：错误。语言规范规定逆序关闭。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-14.html#jls-14.20.3

### JAVA-204（单选题）

- **知识点**：异常传播
- **难度**：中
- **课件依据**：Java基础-4-异常处理.pptx 第19页
- **答案**：B

**解析：** 当前方法没有匹配处理器时，异常导致该调用异常完成并向调用方传播。

**选项辨析：**

- A：错误。日志需显式记录。
- B：正确。处理器查找沿调用栈进行。
- C：错误。异常仍参与传播。
- D：错误。不会自动重试方法。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-11.html#jls-11.3

### JAVA-205（单选题）

- **知识点**：throw 与 throws
- **难度**：易
- **课件依据**：Java基础-4-异常处理.pptx 第21页
- **答案**：B

**解析：** throw 是语句并接受 Throwable 表达式；throws 是方法或构造器声明的一部分。

**选项辨析：**

- A：错误。作用颠倒。
- B：正确。准确描述二者位置与职责。
- C：错误。语法和语义不同。
- D：错误。checked exception 正是 throws 的常见用途。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-14.html#jls-14.18；https://docs.oracle.com/javase/specs/jls/se25/html/jls-8.html#jls-8.4.6

### JAVA-206（单选题）

- **知识点**：异常链
- **难度**：中
- **课件依据**：Java基础-4-异常处理.pptx 第22页
- **答案**：A

**解析：** 将原异常作为 cause 传给新异常可建立异常链，保留底层诊断信息。

**选项辨析：**

- A：正确。消息和原因均得以保留。
- B：错误。String 不是 Throwable。
- C：错误。return 不抛异常。
- D：错误。清空引用且不传 cause 会丢失链路。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/Throwable.html#getCause()

### JAVA-207（单选题）

- **知识点**：处理或声明
- **难度**：中
- **课件依据**：Java基础-4-异常处理.pptx 第23页
- **答案**：A

**解析：** 未捕获的检查型异常必须由当前方法的 throws 子句声明为可传播异常。

**选项辨析：**

- A：正确。满足检查型异常规则。
- B：错误。同步不处理异常。
- C：错误。返回类型无关。
- D：错误。断言不能替代异常声明。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-11.html#jls-11.2

### JAVA-208（单选题）

- **知识点**：覆盖方法异常
- **难度**：难
- **课件依据**：Java基础-4-异常处理.pptx 第25页
- **答案**：C

**解析：** 覆盖方法可以不抛、抛相同检查异常或其更具体子类；EOFException 是 IOException 子类。

**选项辨析：**

- A：错误。Exception 扩大了检查异常范围。
- B：错误。Throwable 范围更大。
- C：正确。更具体的子类合法。
- D：错误。不是 IOException 的子类。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-8.html#jls-8.4.8.3

### JAVA-209（单选题）

- **知识点**：自定义异常
- **难度**：易
- **课件依据**：Java基础-4-异常处理.pptx 第28页
- **答案**：B

**解析：** 直接继承 Exception 且不属于 RuntimeException 分支时，自定义异常为检查型异常。

**选项辨析：**

- A：错误。这会创建非检查异常。
- B：正确。可得到检查型异常。
- C：错误。Error 通常代表严重系统问题。
- D：错误。断言错误不适合作业务检查异常基类。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-11.html#jls-11.1.1

### JAVA-210（单选题）

- **知识点**：异常 cause
- **难度**：中
- **课件依据**：Java基础-4-异常处理.pptx 第29页
- **答案**：B

**解析：** Throwable.getCause 在原因不存在或未知时返回 null。

**选项辨析：**

- A：错误。返回类型是 Throwable。
- B：正确。null 表示无已知原因。
- C：错误。cause 不能简单假定为自身。
- D：错误。不是数组返回值。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/Throwable.html#getCause()

### JAVA-211（单选题）

- **知识点**：日志门面
- **难度**：易
- **课件依据**：Java基础-4-异常处理.pptx 第32页
- **答案**：B

**解析：** 日志门面提供统一调用接口，实际输出由 logback、log4j2 等实现完成。

**选项辨析：**

- A：错误。与数据库连接无关。
- B：正确。便于替换底层日志实现。
- C：错误。不参与内存回收。
- D：错误。不是文件格式。

**官方参考：** https://www.slf4j.org/manual.html

### JAVA-212（单选题）

- **知识点**：日志级别
- **难度**：易
- **课件依据**：Java基础-4-异常处理.pptx 第33页
- **答案**：C

**解析：** warn 用于值得关注但程序仍可继续的情况；日志级别本身不决定程序是否退出。

**选项辨析：**

- A：错误。trace 更偏细粒度跟踪。
- B：错误。debug 面向调试细节。
- C：正确。warn 与题意相符。
- D：错误。error 级别也不会自动终止程序。

**官方参考：** https://www.slf4j.org/api/org/slf4j/event/Level.html

### JAVA-213（单选题）

- **知识点**：断言语义
- **难度**：易
- **课件依据**：Java基础-4-异常处理.pptx 第35页
- **答案**：A

**解析：** 失败断言抛出 AssertionError，message 表达式的值用于构造相关详细信息。

**选项辨析：**

- A：正确。这是断言失败的规定行为。
- B：错误。与 I/O 无关。
- C：错误。assert 不是返回表达式。
- D：错误。不会自动走日志框架。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-14.html#jls-14.10

### JAVA-214（单选题）

- **知识点**：断言开关
- **难度**：中
- **课件依据**：Java基础-4-异常处理.pptx 第36页
- **答案**：A

**解析：** 禁用断言时，断言条件及消息表达式都不求值，因此自增不发生。断言中放副作用会使行为依赖启动参数。

**选项辨析：**

- A：正确。x 保持 0。
- B：错误。只有启用断言时条件才求值。
- C：错误。语法合法。
- D：错误。代码没有 message。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-14.html#jls-14.10

### JAVA-215（单选题）

- **知识点**：启用断言
- **难度**：中
- **课件依据**：Java基础-4-异常处理.pptx 第38页
- **答案**：A

**解析：** -ea 是 java 启动器的 -enableassertions 简写，应放在主类名之前。

**选项辨析：**

- A：正确。正确启用应用断言。
- B：错误。-ea 是运行选项，不是此处的 javac 选项。
- C：错误。不存在该标准简写。
- D：错误。主类后的内容会作为应用参数。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/specs/man/java.html

## 多选题

### JAVA-216（多选题）

- **知识点**：异常分类 / 继承体系
- **难度**：中
- **课件依据**：Java基础-4-异常处理.pptx 第6页
- **答案**：A、B、C

**解析：** RuntimeException 及其子类和 Error 体系均为 unchecked；IOException 通常是 checked exception。

**选项辨析：**

- A：正确。运行时异常。
- B：正确。运行时异常。
- C：正确。Error 属于非检查体系。
- D：错误。需要捕获或声明。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-11.html#jls-11.1.1

### JAVA-217（多选题）

- **知识点**：标准异常 / 运行结果
- **难度**：中
- **课件依据**：Java基础-4-异常处理.pptx 第10页
- **答案**：A、B、C

**解析：** 整数除零、空引用解引用和非法数字文本分别产生 ArithmeticException、NullPointerException 和 NumberFormatException。

**选项辨析：**

- A：正确。产生 ArithmeticException。
- B：正确。产生 NullPointerException。
- C：正确。产生 NumberFormatException。
- D：错误。IOException 是检查型异常，不是 RuntimeException 子类。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/RuntimeException.html

### JAVA-218（多选题）

- **知识点**：catch 匹配 / catch 顺序
- **难度**：难
- **课件依据**：Java基础-4-异常处理.pptx 第14页
- **答案**：A、B、D

**解析：** 处理器按顺序匹配，进入第一个可接收异常对象的分支；Exception 不覆盖 Error 分支。

**选项辨析：**

- A：正确。避免具体分支不可达。
- B：正确。不会继续执行后续 catch。
- C：错误。Error 不继承 Exception。
- D：正确。多个独立处理器合法。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-14.html#jls-14.20

### JAVA-219（多选题）

- **知识点**：finally / 异常控制流
- **难度**：难
- **课件依据**：Java基础-4-异常处理.pptx 第15页
- **答案**：A、B、C

**解析：** finally 覆盖正常和异常完成路径，但并非面对进程终止、崩溃等情况的绝对保证；自身异常还会改变传播结果。

**选项辨析：**

- A：正确。正常路径会执行。
- B：正确。处理后仍进入 finally。
- C：正确。新异常会成为向外传播的异常。
- D：错误。强制终止可能来不及执行。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-14.html#jls-14.20.2

### JAVA-220（多选题）

- **知识点**：try-with-resources / 资源释放
- **难度**：中
- **课件依据**：Java基础-4-异常处理.pptx 第18页
- **答案**：A、B、C

**解析：** 自动资源管理依赖 close 契约，可管理多个资源，并允许只有 try 资源语句；关闭顺序与声明顺序相反。

**选项辨析：**

- A：正确。接口提供 close。
- B：正确。多资源语法合法。
- C：正确。异常可继续向外传播。
- D：错误。实际逆序关闭。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-14.html#jls-14.20.3

### JAVA-221（多选题）

- **知识点**：try-with-resources / 抑制异常
- **难度**：难
- **课件依据**：Java基础-4-异常处理.pptx 第18页
- **答案**：A、B、D

**解析：** 自动资源管理保留 try 主体的主要异常，并把关闭期间的异常记录为 suppressed，避免覆盖根因。

**选项辨析：**

- A：正确。主体异常保持主导。
- B：正确。可读取被抑制异常数组。
- C：错误。并未丢失。
- D：正确。同时保留两类诊断信息。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-14.html#jls-14.20.3.1；https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/Throwable.html#getSuppressed()

### JAVA-222（多选题）

- **知识点**：throw / throws
- **难度**：中
- **课件依据**：Java基础-4-异常处理.pptx 第21页
- **答案**：A、B

**解析：** throw 后是 Throwable 对象表达式；throws 后是方法声明中的异常类型列表。

**选项辨析：**

- A：正确。抛出对象合法。
- B：正确。方法声明异常类型合法。
- C：错误。throws 不创建对象。
- D：错误。类名本身不是待抛对象表达式。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-14.html#jls-14.18；https://docs.oracle.com/javase/specs/jls/se25/html/jls-8.html#jls-8.4.6

### JAVA-223（多选题）

- **知识点**：异常链 / Throwable API
- **难度**：中
- **课件依据**：Java基础-4-异常处理.pptx 第29页
- **答案**：A、B、C

**解析：** 异常链、cause 查询和完整堆栈记录都能保留传播上下文；固定文本会损失诊断细节。

**选项辨析：**

- A：正确。建立 cause 链。
- B：正确。读取直接原因。
- C：正确。保留类型、消息和调用路径。
- D：错误。无法得知原始原因。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/Throwable.html

### JAVA-224（多选题）

- **知识点**：覆盖方法 / 检查型异常
- **难度**：难
- **课件依据**：Java基础-4-异常处理.pptx 第25页
- **答案**：A、B、C

**解析：** 覆盖方法可缩小或取消检查型异常承诺，但不能扩大到 Exception。

**选项辨析：**

- A：正确。完全不抛合法。
- B：正确。相同异常合法。
- C：正确。更具体子类合法。
- D：错误。扩大检查异常范围不合法。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-8.html#jls-8.4.8.3

### JAVA-225（多选题）

- **知识点**：自定义异常 / 设计选择
- **难度**：中
- **课件依据**：Java基础-4-异常处理.pptx 第28页
- **答案**：A、B、D

**解析：** 基类选择决定 checked/unchecked 语义；提供消息和 cause 构造器便于诊断，Error 不适合作普通业务异常。

**选项辨析：**

- A：正确。形成检查型异常。
- B：正确。形成非检查异常。
- C：错误。Error 用于严重系统层问题。
- D：正确。有利于异常链。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/Exception.html；https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/RuntimeException.html

### JAVA-226（多选题）

- **知识点**：日志框架 / 分层设计
- **难度**：中
- **课件依据**：Java基础-4-异常处理.pptx 第32页
- **答案**：A、B、C

**解析：** 门面解耦业务调用与具体后端；通常应配置一个明确、兼容的实际实现，避免绑定冲突。

**选项辨析：**

- A：正确。属于门面职责。
- B：正确。属于日志实现。
- C：正确。降低切换成本。
- D：错误。多绑定通常引起告警或选择冲突。

**官方参考：** https://www.slf4j.org/manual.html

### JAVA-227（多选题）

- **知识点**：日志级别 / 日志实践
- **难度**：中
- **课件依据**：Java基础-4-异常处理.pptx 第33页
- **答案**：A、B、C

**解析：** 级别表达事件严重程度和用途，不直接控制程序终止；warn 通常表示需关注但仍可继续。

**选项辨析：**

- A：正确。配对合理。
- B：正确。配对合理。
- C：正确。配对合理。
- D：错误。warn 本身不会终止程序。

**官方参考：** https://www.slf4j.org/api/org/slf4j/event/Level.html

### JAVA-228（多选题）

- **知识点**：断言语法 / AssertionError
- **难度**：中
- **课件依据**：Java基础-4-异常处理.pptx 第35页
- **答案**：A、B、C

**解析：** 断言消息可为多种可求值表达式；只有条件失败时才求值并用于 AssertionError。

**选项辨析：**

- A：正确。条件要求 boolean。
- B：正确。成功时无需消息。
- C：正确。失败产生 AssertionError。
- D：错误。消息表达式不限于 String。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-14.html#jls-14.10

### JAVA-229（多选题）

- **知识点**：断言开关 / 启动参数
- **难度**：中
- **课件依据**：Java基础-4-异常处理.pptx 第39页
- **答案**：A、B、C

**解析：** Java 启动器支持全局及按类、包的启停选项；应用断言通常默认关闭。

**选项辨析：**

- A：正确。enableassertions 简写。
- B：正确。disableassertions 简写。
- C：正确。支持细粒度控制。
- D：错误。默认不是全部开启。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/specs/man/java.html

### JAVA-230（多选题）

- **知识点**：断言边界 / 防御式编程
- **难度**：难
- **课件依据**：Java基础-4-异常处理.pptx 第40页
- **答案**：A、B、C

**解析：** 前三项在生产环境必须执行，而断言可能关闭；内部算法不变量适合在开发调试时用断言验证。

**选项辨析：**

- A：正确。公共边界需要稳定校验。
- B：正确。核心业务规则不能随开关消失。
- C：正确。I/O 失败需异常处理。
- D：错误。这是断言的典型用途。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-14.html#jls-14.10

## 判断题

### JAVA-231（判断题）

- **知识点**：异常继承体系
- **难度**：中
- **课件依据**：Java基础-4-异常处理.pptx 第5页
- **答案**：正确

**解析：** Java 的 unchecked exception 类包括 RuntimeException 分支和 Error 分支。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-11.html#jls-11.1.1

### JAVA-232（判断题）

- **知识点**：异常捕获
- **难度**：中
- **课件依据**：Java基础-4-异常处理.pptx 第12页
- **答案**：错误

**解析：** “无需捕获”表示编译器不强制处理，并不禁止捕获；RuntimeException 子类仍可由兼容的 catch 处理器接收。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-11.html#jls-11.2

### JAVA-233（判断题）

- **知识点**：catch 可达性
- **难度**：难
- **课件依据**：Java基础-4-异常处理.pptx 第14页
- **答案**：错误

**解析：** 后一个 RuntimeException 分支完全被前面的 Exception 分支覆盖，属于不可达处理器，编译失败。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-11.html#jls-11.2.3

### JAVA-234（判断题）

- **知识点**：finally
- **难度**：中
- **课件依据**：Java基础-4-异常处理.pptx 第15页
- **答案**：正确

**解析：** return 会触发 try 的正常完成过程，但 finally 先执行；finally 自身也可能改变最终完成原因。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-14.html#jls-14.20.2

### JAVA-235（判断题）

- **知识点**：try-with-resources
- **难度**：中
- **课件依据**：Java基础-4-异常处理.pptx 第18页
- **答案**：错误

**解析：** 无论主体正常还是异常完成，自动资源管理都会尝试关闭已成功初始化的资源。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-14.html#jls-14.20.3

### JAVA-236（判断题）

- **知识点**：异常传播
- **难度**：中
- **课件依据**：Java基础-4-异常处理.pptx 第19页
- **答案**：正确

**解析：** 处理器搜索从异常发生点向外进行；首个匹配处理器获得控制，否则线程因未捕获异常而终止。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-11.html#jls-11.3

### JAVA-237（判断题）

- **知识点**：throws 声明
- **难度**：中
- **课件依据**：Java基础-4-异常处理.pptx 第23页
- **答案**：错误

**解析：** throws 描述方法可能异常完成的契约，使调用者必须处理；它不保证每次执行都抛出。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-8.html#jls-8.4.6

### JAVA-238（判断题）

- **知识点**：自定义异常
- **难度**：中
- **课件依据**：Java基础-4-异常处理.pptx 第30页
- **答案**：正确

**解析：** 定义类只建立异常类型；异常发生需要 throw 或被其他代码抛出，检查型异常还受处理或声明规则约束。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-11.html

### JAVA-239（判断题）

- **知识点**：日志级别
- **难度**：中
- **课件依据**：Java基础-4-异常处理.pptx 第33页
- **答案**：错误

**解析：** 日志调用主要记录事件；除非具体调用或后端另有异常行为，error 级别本身不会抛出业务异常或终止方法。

**官方参考：** https://www.slf4j.org/manual.html

### JAVA-240（判断题）

- **知识点**：断言副作用
- **难度**：中
- **课件依据**：Java基础-4-异常处理.pptx 第36页
- **答案**：正确

**解析：** 断言默认可能关闭，禁用时条件与消息表达式均不求值；程序正确性不得依赖其中的副作用。

**官方参考：** https://docs.oracle.com/javase/specs/jls/se25/html/jls-14.html#jls-14.10

# 第5讲：集合与泛型

## 单选题

### JAVA-241（单选题）

- **知识点**：面向接口编程
- **难度**：易
- **课件依据**：Java基础-5-集合和泛型.pptx 第3页
- **答案**：A

**解析：** 以满足需求的集合接口作为参数，可保留实现选择空间。

**选项辨析：**

- A：正确。List 同时表达顺序集合能力与实现无关性。
- B：错误。会把调用方限制为一种实现。
- C：错误。同样不必要地限定实现。
- D：错误。数组不是两种 List 实现的共同接口。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/List.html

### JAVA-242（单选题）

- **知识点**：Set 去重
- **难度**：易
- **课件依据**：Java基础-5-集合和泛型.pptx 第8页
- **答案**：A

**解析：** HashSet 直接表达不重复元素集合。

**选项辨析：**

- A：正确。符合唯一性且无需顺序。
- B：错误。允许重复。
- C：错误。主要表达双端队列。
- D：错误。人为制造键并非此需求的自然模型。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/HashSet.html

### JAVA-243（单选题）

- **知识点**：List 索引
- **难度**：易
- **课件依据**：Java基础-5-集合和泛型.pptx 第9页
- **答案**：A

**解析：** List 保留顺序、允许重复并提供基于整数索引的访问。

**选项辨析：**

- A：正确。与三项要求一致。
- B：错误。不提供通用位置索引。
- C：错误。保存键值映射。
- D：错误。强调队列操作而非任意索引。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/List.html

### JAVA-244（单选题）

- **知识点**：Queue 语义
- **难度**：易
- **课件依据**：Java基础-5-集合和泛型.pptx 第10页
- **答案**：A

**解析：** 普通队列的典型语义是先进先出。

**选项辨析：**

- A：正确。最早进入的先处理。
- B：错误。这是栈式后进先出。
- C：错误。队列不必按键排序。
- D：错误。处理策略不是随机索引。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/Queue.html

### JAVA-245（单选题）

- **知识点**：Deque 用作栈
- **难度**：易
- **课件依据**：Java基础-5-集合和泛型.pptx 第10页
- **答案**：A

**解析：** Deque 的 push/pop 提供 LIFO 栈语义。

**选项辨析：**

- A：正确。方法名直接表达栈操作。
- B：错误。这组组合表现 FIFO。
- C：错误。属于 Map 风格而非 Deque API。
- D：错误。属于排序与查找。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/Deque.html

### JAVA-246（单选题）

- **知识点**：SortedSet
- **难度**：中
- **课件依据**：Java基础-5-集合和泛型.pptx 第11页
- **答案**：A

**解析：** TreeSet 实现 SortedSet，可按自然顺序或 Comparator 排序并维持唯一性。

**选项辨析：**

- A：正确。同时满足排序和集合唯一性。
- B：错误。不保证排序。
- C：错误。允许重复且需另行排序。
- D：错误。面向字符串属性映射。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/TreeSet.html

### JAVA-247（单选题）

- **知识点**：Map 键唯一
- **难度**：易
- **课件依据**：Java基础-5-集合和泛型.pptx 第12页
- **答案**：A

**解析：** 普通 Map 每个键最多对应一个值，put 同键会替换映射并返回旧值。

**选项辨析：**

- A：正确。符合 Map.put 契约。
- B：错误。违反键唯一语义。
- C：错误。标准 Map.put 不因同键必然抛异常。
- D：错误。Map 不会推断业务合并规则。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/Map.html#put(K,V)

### JAVA-248（单选题）

- **知识点**：TreeMap 排序依据
- **难度**：中
- **课件依据**：Java基础-5-集合和泛型.pptx 第13页
- **答案**：A

**解析：** SortedMap 的排序围绕键进行。

**选项辨析：**

- A：正确。这是 TreeMap 的顺序来源。
- B：错误。值不决定键迭代顺序。
- C：错误。LinkedHashMap 更贴近插入顺序。
- D：错误。顺序规则不是随机的。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/TreeMap.html

### JAVA-249（单选题）

- **知识点**：ArrayList 与 LinkedList
- **难度**：中
- **课件依据**：Java基础-5-集合和泛型.pptx 第16页
- **答案**：A

**解析：** ArrayList 的连续索引访问与末尾追加通常更契合该访问模式。

**选项辨析：**

- A：正确。可变数组适合随机访问。
- B：错误。按索引定位通常需链式遍历。
- C：错误。不允许重复且不按索引。
- D：错误。按优先级取元素。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/ArrayList.html

### JAVA-250（单选题）

- **知识点**：PriorityQueue
- **难度**：难
- **课件依据**：Java基础-5-集合和泛型.pptx 第16页
- **答案**：A

**解析：** 默认优先队列按元素自然顺序使最小元素位于队首。

**选项辨析：**

- A：正确。整数自然顺序下 1 优先。
- B：错误。不是普通 FIFO。
- C：错误。3 不是最小值。
- D：错误。也不是 LIFO。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/PriorityQueue.html

### JAVA-251（单选题）

- **知识点**：Comparable
- **难度**：中
- **课件依据**：Java基础-5-集合和泛型.pptx 第19页
- **答案**：A

**解析：** Comparable 把自然顺序定义在类型自身。

**选项辨析：**

- A：正确。compareTo 是自然顺序契约。
- B：错误。Map 与对象比较无关。
- C：错误。finalize 不负责排序。
- D：错误。Cloneable 不提供比较规则。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/Comparable.html

### JAVA-252（单选题）

- **知识点**：Comparator
- **难度**：中
- **课件依据**：Java基础-5-集合和泛型.pptx 第20页
- **答案**：A

**解析：** Comparator 可为同一类型提供多套外部排序策略。

**选项辨析：**

- A：正确。策略可独立命名和组合。
- B：错误。一个 compareTo 只能表达一种自然顺序。
- C：错误。相等契约不应随排序需求切换。
- D：错误。HashSet 不提供排序策略。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/Comparator.html

### JAVA-253（单选题）

- **知识点**：比较器返回值
- **难度**：难
- **课件依据**：Java基础-5-集合和泛型.pptx 第20页
- **答案**：A

**解析：** Integer.compare 避免直接相减的整数溢出，并正确处理相等。

**选项辨析：**

- A：正确。符合比较契约。
- B：错误。极端值可能溢出导致顺序错误。
- C：错误。相等时必须返回 0。
- D：错误。hashCode 不代表年龄顺序。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/Integer.html#compare(int,int)

### JAVA-254（单选题）

- **知识点**：Collections.reverse
- **难度**：易
- **课件依据**：Java基础-5-集合和泛型.pptx 第23页
- **答案**：A

**解析：** reverse 是对传入 List 的原地操作，方法返回 void。

**选项辨析：**

- A：正确。符合 API 签名。
- B：错误。不会以返回值提供副本。
- C：错误。不返回元素。
- D：错误。也不返回状态布尔值。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/Collections.html#reverse(java.util.List)

### JAVA-255（单选题）

- **知识点**：Collections.copy
- **难度**：难
- **课件依据**：Java基础-5-集合和泛型.pptx 第23页
- **答案**：A

**解析：** copy 按位置覆盖目标列表，目标当前大小至少要等于源列表大小。

**选项辨析：**

- A：正确。指出了常见尺寸陷阱。
- B：错误。copy 不会扩展空列表。
- C：错误。方法返回 void。
- D：错误。尺寸不足不会被忽略。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/Collections.html#copy(java.util.List,java.util.List)

### JAVA-256（单选题）

- **知识点**：Collections.sort
- **难度**：中
- **课件依据**：Java基础-5-集合和泛型.pptx 第24页
- **答案**：A

**解析：** 无比较器排序依赖元素的 Comparable 自然顺序。

**选项辨析：**

- A：正确。这是类型与运行时要求。
- B：错误。散列值不定义排序。
- C：错误。序列化与排序无关。
- D：错误。任意可修改 List 实现均可参与。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/Collections.html#sort(java.util.List)

### JAVA-257（单选题）

- **知识点**：binarySearch 前置条件
- **难度**：中
- **课件依据**：Java基础-5-集合和泛型.pptx 第25页
- **答案**：A

**解析：** 二分查找依赖有序区间；排序规则还须与搜索使用的规则一致。

**选项辨析：**

- A：正确。是正确前置条件。
- B：错误。对象列表是常见用途。
- C：错误。反转并非必需。
- D：错误。可搜索任意目标值。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/Collections.html#binarySearch(java.util.List,T)

### JAVA-258（单选题）

- **知识点**：binarySearch 未找到
- **难度**：难
- **课件依据**：Java基础-5-集合和泛型.pptx 第25页
- **答案**：A

**解析：** 未找到时返回 `-(insertion point)-1`，插入点 2 对应 -3。

**选项辨析：**

- A：正确。正确说明负值含义。
- B：错误。只有插入点 0 才可能得到 -1。
- C：错误。索引 2 的现有元素是 40。
- D：错误。API 用返回值表达未找到。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/Collections.html#binarySearch(java.util.List,T)

### JAVA-259（单选题）

- **知识点**：Arrays.asList
- **难度**：难
- **课件依据**：Java基础-5-集合和泛型.pptx 第26页
- **答案**：A

**解析：** Arrays.asList 返回由数组支持的固定大小列表，能替换元素但不能改变大小。

**选项辨析：**

- A：正确。add 会改变大小。
- B：错误。set 不改变大小且会反映到数组。
- C：错误。数组修改会反映到列表。
- D：错误。读取合法。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/Arrays.html#asList(T...)

### JAVA-260（单选题）

- **知识点**：toArray 类型
- **难度**：中
- **课件依据**：Java基础-5-集合和泛型.pptx 第26页
- **答案**：A

**解析：** 带数组参数的 toArray 能返回指定运行时组件类型的数组。

**选项辨析：**

- A：正确。常用且类型安全。
- B：错误。无参 toArray 返回 Object[]，强转会失败。
- C：错误。得到的是 Object[]。
- D：错误。不存在该 API。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/List.html#toArray(T%5B%5D)

### JAVA-261（单选题）

- **知识点**：Properties 类型
- **难度**：易
- **课件依据**：Java基础-5-集合和泛型.pptx 第28页
- **答案**：A

**解析：** Properties 面向持久化的字符串属性集合。

**选项辨析：**

- A：正确。符合其常见配置用途。
- B：错误。不应把它当通用对象 Map。
- C：错误。没有列表索引语义。
- D：错误。也不承诺数值键排序。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/Properties.html

### JAVA-262（单选题）

- **知识点**：系统属性
- **难度**：中
- **课件依据**：Java基础-5-集合和泛型.pptx 第29页
- **答案**：A

**解析：** -D 定义 JVM 系统属性，可通过 System.getProperty 按键读取。

**选项辨析：**

- A：正确。API 与键名匹配。
- B：错误。环境变量与系统属性是不同来源。
- C：错误。load 从 Reader/InputStream 读取。
- D：错误。Class.getName 没有该参数。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/System.html#getProperty(java.lang.String)

### JAVA-263（单选题）

- **知识点**：泛型目标
- **难度**：易
- **课件依据**：Java基础-5-集合和泛型.pptx 第32页
- **答案**：A

**解析：** 泛型把许多类型错误提前到编译期，并让 API 类型更明确。

**选项辨析：**

- A：正确。是核心收益。
- B：错误。类型擦除后不会按实参复制类。
- C：错误。容量策略与泛型无关。
- D：错误。线程安全也不是泛型提供的。

**官方参考：** https://dev.java/learn/generics/

### JAVA-264（单选题）

- **知识点**：泛型实参
- **难度**：易
- **课件依据**：Java基础-5-集合和泛型.pptx 第41页
- **答案**：A

**解析：** Java 泛型类型参数必须是引用类型，基本类型通常使用包装类。

**选项辨析：**

- A：正确。Integer 是引用类型。
- B：错误。int 不能直接作类型实参。
- C：错误。void 不是可实例化引用类型。
- D：错误。数值不是类型。

**官方参考：** https://dev.java/learn/generics/

### JAVA-265（单选题）

- **知识点**：钻石语法
- **难度**：易
- **课件依据**：Java基础-5-集合和泛型.pptx 第43页
- **答案**：A

**解析：** 钻石运算符从赋值上下文推断 String 和 Integer。

**选项辨析：**

- A：正确。语法正确。
- B：错误。通配符不能这样实例化。
- C：错误。HashMap 需要两个类型参数。
- D：错误。构造语法不正确。

**官方参考：** https://dev.java/learn/generics/

### JAVA-266（单选题）

- **知识点**：泛型不变性
- **难度**：难
- **课件依据**：Java基础-5-集合和泛型.pptx 第48页
- **答案**：A

**解析：** 参数化类型之间不存在由类型实参继承关系自动产生的子类型关系。

**选项辨析：**

- A：正确。指出不变性及安全原因。
- B：错误。Integer 确实继承 Number。
- C：错误。List 可使用多种引用类型。
- D：错误。可变性取决于具体列表。

**官方参考：** https://dev.java/learn/generics/inheritance-and-subtypes/

### JAVA-267（单选题）

- **知识点**：泛型方法类型参数
- **难度**：中
- **课件依据**：Java基础-5-集合和泛型.pptx 第50页
- **答案**：A

**解析：** 方法自己的类型参数列表位于修饰符之后、返回类型之前。

**选项辨析：**

- A：正确。符合 Java 语法。
- B：错误。throws 不声明类型形参。
- C：错误。文件名与方法泛型无关。
- D：错误。位置不正确。

**官方参考：** https://dev.java/learn/generics/methods/

### JAVA-268（单选题）

- **知识点**：泛型方法推断
- **难度**：中
- **课件依据**：Java基础-5-集合和泛型.pptx 第51页
- **答案**：A

**解析：** 目标类型和实参类型可参与泛型方法类型推断。

**选项辨析：**

- A：正确。解释了省略语法的依据。
- B：错误。擦除不是调用期忽略类型检查。
- C：错误。实参类型正是推断来源。
- D：错误。方法声明仍是泛型的。

**官方参考：** https://dev.java/learn/generics/methods/

### JAVA-269（单选题）

- **知识点**：有界类型参数
- **难度**：中
- **课件依据**：Java基础-5-集合和泛型.pptx 第53页
- **答案**：A

**解析：** 类型参数上界使用 extends，类与接口界限都采用该关键字。

**选项辨析：**

- A：正确。可安全使用 Number 成员。
- B：错误。类型参数没有 super 声明形式。
- C：错误。泛型界限不写 implements。
- D：错误。不是 Java 语法。

**官方参考：** https://dev.java/learn/generics/bounded-type-parameters/

### JAVA-270（单选题）

- **知识点**：多重界限
- **难度**：难
- **课件依据**：Java基础-5-集合和泛型.pptx 第54页
- **答案**：A

**解析：** 多重界限至多一个类界限，且类必须写在接口界限之前。

**选项辨析：**

- A：正确。顺序和符号都正确。
- B：错误。类 Base 不能放在接口之后。
- C：错误。不支持该下界声明。
- D：错误。泛型界限不用 implements 和逗号。

**官方参考：** https://dev.java/learn/generics/bounded-type-parameters/

### JAVA-271（单选题）

- **知识点**：extends 通配符读取
- **难度**：难
- **课件依据**：Java基础-5-集合和泛型.pptx 第55页
- **答案**：A

**解析：** 上界通配符适合作为 Number 的生产者读取，但具体元素子类型未知。

**选项辨析：**

- A：正确。任何实际元素至少是 Number。
- B：错误。实际列表可能是 List<Double>。
- C：错误。实际列表也可能是 List<Integer>。
- D：错误。通配列表不是 List<Number>。

**官方参考：** https://dev.java/learn/generics/wildcards/

### JAVA-272（单选题）

- **知识点**：super 通配符写入
- **难度**：难
- **课件依据**：Java基础-5-集合和泛型.pptx 第55页
- **答案**：A

**解析：** 下界通配符允许接收 Integer、Number 或 Object 的列表并安全写入 Integer。

**选项辨析：**

- A：正确。符合消费者 super 原则。
- B：错误。上界通配符不允许写入具体 Integer。
- C：错误。数组形式无关且不安全。
- D：错误。泛型数组创建受限，也不够灵活。

**官方参考：** https://dev.java/learn/generics/lower-bounded/

### JAVA-273（单选题）

- **知识点**：无界通配符
- **难度**：中
- **课件依据**：Java基础-5-集合和泛型.pptx 第56页
- **答案**：A

**解析：** List<?> 能接收任意元素类型的 List，并允许与元素类型无关的操作。

**选项辨析：**

- A：正确。正确表达未知类型。
- B：错误。不能接收 List<String>。
- C：错误。基本类型不能作实参。
- D：错误。T 未声明会编译失败。

**官方参考：** https://dev.java/learn/generics/unbounded-wildcards/

### JAVA-274（单选题）

- **知识点**：通配符捕获
- **难度**：难
- **课件依据**：Java基础-5-集合和泛型.pptx 第58页
- **答案**：A

**解析：** 未知具体元素类型时，唯一对所有引用类型都安全的值是 null。

**选项辨析：**

- A：正确。null 可赋给任意引用类型。
- B：错误。实际类型未必是 Object 列表。
- C：错误。实际类型未必是 String。
- D：错误。实际类型未必是 Integer。

**官方参考：** https://dev.java/learn/generics/wildcard-guidelines/

### JAVA-275（单选题）

- **知识点**：类型擦除
- **难度**：中
- **课件依据**：Java基础-5-集合和泛型.pptx 第60页
- **答案**：A

**解析：** Java 泛型主要通过类型擦除实现，不按类型实参生成新类。

**选项辨析：**

- A：正确。符合擦除模型。
- B：错误。不是 C++ 模板式代码复制。
- C：错误。类加载器不由元素类型决定。
- D：错误。磁盘上仍是同一实现类文件。

**官方参考：** https://dev.java/learn/generics/type-erasure/

### JAVA-276（单选题）

- **知识点**：原始类型风险
- **难度**：中
- **课件依据**：Java基础-5-集合和泛型.pptx 第61页
- **答案**：A

**解析：** 原始类型绕过部分泛型检查，污染可能在编译器插入的读取强转处暴露。

**选项辨析：**

- A：正确。描述了 heap pollution 的后果。
- B：错误。原始 add 接受 Object，通常只产生警告。
- C：错误。不会复制列表。
- D：错误。与垃圾回收无关。

**官方参考：** https://dev.java/learn/generics/raw-types/

### JAVA-277（单选题）

- **知识点**：擦除限制
- **难度**：难
- **课件依据**：Java基础-5-集合和泛型.pptx 第63页
- **答案**：A

**解析：** 运行时无法仅凭擦除后的 T 确定要调用哪个构造器。

**选项辨析：**

- A：正确。直接实例化类型参数被禁止。
- B：错误。声明 T 字段合法。
- C：错误。返回 T 合法。
- D：错误。参数化字段也合法。

**官方参考：** https://dev.java/learn/generics/restrictions/

## 多选题

### JAVA-278（多选题）

- **知识点**：集合接口 / 需求建模
- **难度**：中
- **课件依据**：Java基础-5-集合和泛型.pptx 第5页
- **答案**：A、B、C

**解析：** 集合接口应直接表达调用方真正依赖的语义。

**选项辨析：**

- A：正确。List 提供顺序和索引。
- B：正确。Set 表达唯一性。
- C：正确。Queue 表达队列操作。
- D：错误。键值映射应使用 Map，且 Map 不是 Collection 子接口。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/package-summary.html

### JAVA-279（多选题）

- **知识点**：Set / 相等性
- **难度**：难
- **课件依据**：Java基础-5-集合和泛型.pptx 第8页
- **答案**：A、B、C

**解析：** 基于散列的集合依赖稳定且一致的 equals/hashCode 契约。

**选项辨析：**

- A：正确。决定逻辑相等。
- B：正确。决定相等对象的散列一致性。
- C：正确。修改键字段可能使元素落在错误桶位。
- D：错误。序列化接口不决定去重。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/HashSet.html

### JAVA-280（多选题）

- **知识点**：List / 实现选择
- **难度**：中
- **课件依据**：Java基础-5-集合和泛型.pptx 第16页
- **答案**：A、B、C

**解析：** 实现选择应结合接口能力与访问模式。

**选项辨析：**

- A：正确。共同具备 List 语义。
- B：正确。数组结构支持快速随机访问。
- C：正确。可作链表或双端队列使用。
- D：错误。链表定位通常需要遍历。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/LinkedList.html

### JAVA-281（多选题）

- **知识点**：Deque / Queue
- **难度**：中
- **课件依据**：Java基础-5-集合和泛型.pptx 第10页
- **答案**：A、B、C

**解析：** ArrayDeque 提供两端操作，但不是随机访问 List。

**选项辨析：**

- A：正确。addLast/removeFirst 可表达 FIFO。
- B：正确。push/pop 可表达 LIFO。
- C：正确。null 被保留用于某些 API 的空结果语义。
- D：错误。Deque 没有 List 式索引访问。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/ArrayDeque.html

### JAVA-282（多选题）

- **知识点**：Map / 视图
- **难度**：难
- **课件依据**：Java基础-5-集合和泛型.pptx 第12页
- **答案**：A、B、C

**解析：** Map 的集合视图是关联视图，但允许的修改操作受接口契约限制。

**选项辨析：**

- A：正确。Map 变化会反映到视图。
- B：正确。Entry 同时提供键和值。
- C：正确。Map 只限制键不重复。
- D：错误。没有对应值，通常不支持通过 keySet 添加。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/Map.html

### JAVA-283（多选题）

- **知识点**：HashMap / TreeMap
- **难度**：中
- **课件依据**：Java基础-5-集合和泛型.pptx 第16页
- **答案**：A、B、C

**解析：** 不同 Map 实现的顺序、null 与性能约束不同。

**选项辨析：**

- A：正确。不能依赖 HashMap 遍历顺序。
- B：正确。是 SortedMap 实现。
- C：正确。可按插入或访问顺序。
- D：错误。例如 TreeMap 的自然排序通常不接受 null 键。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/Map.html

### JAVA-284（多选题）

- **知识点**：Comparable / Comparator
- **难度**：中
- **课件依据**：Java基础-5-集合和泛型.pptx 第18页
- **答案**：A、B、C

**解析：** 两类比较机制承担内置默认顺序与外部策略的不同职责。

**选项辨析：**

- A：正确。compareTo 位于类型内部。
- B：正确。可按姓名、日期等分别定义。
- C：正确。有序集合可能把比较为 0 的对象视为同一位置。
- D：错误。比较器可在类外定义。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/Comparator.html

### JAVA-285（多选题）

- **知识点**：比较器契约 / 排序
- **难度**：难
- **课件依据**：Java基础-5-集合和泛型.pptx 第20页
- **答案**：A、B、C

**解析：** 违反比较契约可能导致排序结果异常或有序集合行为不稳定。

**选项辨析：**

- A：正确。属于自反要求。
- B：正确。属于反对称符号关系。
- C：正确。属于传递要求。
- D：错误。随机比较不构成一致顺序。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/Comparator.html#compare(T,T)

### JAVA-286（多选题）

- **知识点**：Collections / 原地算法
- **难度**：中
- **课件依据**：Java基础-5-集合和泛型.pptx 第23页
- **答案**：A、B、C

**解析：** 前三者原地改变列表，binarySearch 只查询位置。

**选项辨析：**

- A：正确。反转元素次序。
- B：正确。覆盖列表元素。
- C：正确。交换两个位置。
- D：错误。不会为查找而修改列表。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/Collections.html

### JAVA-287（多选题）

- **知识点**：排序 / 二分查找
- **难度**：难
- **课件依据**：Java基础-5-集合和泛型.pptx 第24页
- **答案**：A、B、C

**解析：** 二分查找的分区判断必须与列表当前排序关系一致。

**选项辨析：**

- A：正确。保证比较语义一致。
- B：正确。顺序被破坏会使结果不确定。
- C：正确。公式为 `-result-1`。
- D：错误。相反顺序需重新排序。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/Collections.html#binarySearch(java.util.List,T,java.util.Comparator)

### JAVA-288（多选题）

- **知识点**：数组与列表 / 视图
- **难度**：中
- **课件依据**：Java基础-5-集合和泛型.pptx 第26页
- **答案**：A、B、D

**解析：** 该 List 是数组的固定大小视图，替换与排序不改变长度，因此会作用于底层数组。

**选项辨析：**

- A：正确。共享底层存储。
- B：正确。set 是位置替换。
- C：错误。固定大小不支持 add。
- D：正确。排序通过 set 重排元素。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/Arrays.html#asList(T...)

### JAVA-289（多选题）

- **知识点**：Properties / 配置
- **难度**：中
- **课件依据**：Java基础-5-集合和泛型.pptx 第30页
- **答案**：A、B、C

**解析：** Properties 的 I/O 资源应关闭，缺少键通常返回 null 或指定默认值。

**选项辨析：**

- A：正确。能可靠关闭流。
- B：正确。是字符串属性 API。
- C：正确。可持久化配置。
- D：错误。默认不会因缺键抛异常。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/Properties.html

### JAVA-290（多选题）

- **知识点**：泛型 / 类型安全
- **难度**：易
- **课件依据**：Java基础-5-集合和泛型.pptx 第36页
- **答案**：A、B、C

**解析：** 泛型的主要价值是静态类型安全和可读性，不保证所有运行时性能提升。

**选项辨析：**

- A：正确。错误更早暴露。
- B：正确。编译器处理必要转换。
- C：正确。元素类型写入签名。
- D：错误。性能不是普遍承诺。

**官方参考：** https://dev.java/learn/generics/why-use-generics/

### JAVA-291（多选题）

- **知识点**：泛型类 / 类型参数
- **难度**：中
- **课件依据**：Java基础-5-集合和泛型.pptx 第39页
- **答案**：A、B、C

**解析：** 类类型参数属于实例类型上下文，静态成员不能直接依赖某个实例化的 K。

**选项辨析：**

- A：正确。合法。
- B：正确。合法。
- C：正确。合法。
- D：错误。静态成员属于所有参数化实例共享的类。

**官方参考：** https://dev.java/learn/generics/types/

### JAVA-292（多选题）

- **知识点**：泛型接口 / 实现
- **难度**：中
- **课件依据**：Java基础-5-集合和泛型.pptx 第45页
- **答案**：A、B、C

**解析：** 实现类可继续参数化或固定具体类型；原始实现会丢失部分类型检查。

**选项辨析：**

- A：正确。常见泛型实现。
- B：正确。可形成固定接口版本。
- C：正确。类型变量名称本身不要求相同。
- D：错误。原始类型会产生风险或警告。

**官方参考：** https://dev.java/learn/generics/types/

### JAVA-293（多选题）

- **知识点**：泛型不变性 / 子类型
- **难度**：中
- **课件依据**：Java基础-5-集合和泛型.pptx 第48页
- **答案**：A、B、C

**解析：** 容器实现继承与类型实参之间的协变是两回事。

**选项辨析：**

- A：正确。泛型默认不变。
- B：正确。实现类到相同实参接口的继承成立。
- C：正确。上界通配符可接收。
- D：错误。会允许读出非 Integer。

**官方参考：** https://dev.java/learn/generics/inheritance-and-subtypes/

### JAVA-294（多选题）

- **知识点**：泛型方法 / 泛型类
- **难度**：中
- **课件依据**：Java基础-5-集合和泛型.pptx 第50页
- **答案**：A、B、C

**解析：** 方法是否泛型由其自身类型参数列表决定，与所在类是否泛型无必然关系。

**选项辨析：**

- A：正确。合法。
- B：正确。超出方法后不可用。
- C：正确。静态泛型方法很常见。
- D：错误。可声明独立的 T。

**官方参考：** https://dev.java/learn/generics/methods/

### JAVA-295（多选题）

- **知识点**：有界类型参数 / 多重界限
- **难度**：中
- **课件依据**：Java基础-5-集合和泛型.pptx 第54页
- **答案**：A、B、C

**解析：** 上界交集保证 T 同时满足这些成员契约。

**选项辨析：**

- A：正确。类上界成员可用。
- B：正确。接口上界成员可用。
- C：正确。比较接口成员可用。
- D：错误。普通 Object 不保证符合界限。

**官方参考：** https://dev.java/learn/generics/bounded-type-parameters/

### JAVA-296（多选题）

- **知识点**：PECS / 通配符
- **难度**：中
- **课件依据**：Java基础-5-集合和泛型.pptx 第55页
- **答案**：A、B、C

**解析：** 通配符安全操作由未知实际类型的上下界决定。

**选项辨析：**

- A：正确。上界保证读取类型。
- B：正确。下界保证 Integer 可写。
- C：正确。实际元素可能是 Object 或 Number。
- D：错误。实际列表可能只接受某个 Number 子类。

**官方参考：** https://dev.java/learn/generics/wildcard-guidelines/

### JAVA-297（多选题）

- **知识点**：无界通配符 / Object
- **难度**：中
- **课件依据**：Java基础-5-集合和泛型.pptx 第56页
- **答案**：A、B、C

**解析：** 未知元素类型与确定为 Object 元素类型有本质区别。

**选项辨析：**

- A：正确。通配符接受任意列表。
- B：正确。元素类型确切为 Object。
- C：正确。泛型不变性阻止该赋值。
- D：错误。List<?> 不能安全加入任意对象。

**官方参考：** https://dev.java/learn/generics/unbounded-wildcards/

### JAVA-298（多选题）

- **知识点**：类型擦除 / 运行时
- **难度**：中
- **课件依据**：Java基础-5-集合和泛型.pptx 第60页
- **答案**：A、B、C

**解析：** 擦除是编译后的实现策略，不意味着编译期没有泛型检查。

**选项辨析：**

- A：正确。具体实参不可具体化。
- B：正确。不会为每组实参生成新类。
- C：正确。恢复静态类型时可能需要 cast。
- D：错误。恰恰会执行严格检查。

**官方参考：** https://dev.java/learn/generics/type-erasure/

### JAVA-299（多选题）

- **知识点**：原始类型 / 兼容性
- **难度**：中
- **课件依据**：Java基础-5-集合和泛型.pptx 第61页
- **答案**：A、B、C

**解析：** 原始类型用于兼容旧代码，但会削弱静态保证。

**选项辨析：**

- A：正确。编译器会提示检查缺失。
- B：正确。可造成堆污染。
- C：正确。缩小不安全边界更好。
- D：错误。错误可能在之后读取时暴露。

**官方参考：** https://dev.java/learn/generics/raw-types/

### JAVA-300（多选题）

- **知识点**：泛型限制 / 可具体化类型
- **难度**：中
- **课件依据**：Java基础-5-集合和泛型.pptx 第63页
- **答案**：A、B、C

**解析：** 实例化类型参数、创建具体参数化类型数组及对其 instanceof 都缺少可靠运行时类型信息。

**选项辨析：**

- A：正确。无法确定构造器。
- B：正确。数组运行时类型检查与擦除冲突。
- C：正确。具体实参不可检查。
- D：错误。普通参数化变量声明合法。

**官方参考：** https://dev.java/learn/generics/restrictions/

## 判断题

### JAVA-301（判断题）

- **知识点**：Map 继承关系
- **难度**：易
- **课件依据**：Java基础-5-集合和泛型.pptx 第12页
- **答案**：错误

**解析：** 错误。Map 属于集合框架，但不继承 Collection；可通过 keySet、values 或 entrySet 取得集合视图。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/Map.html

### JAVA-302（判断题）

- **知识点**：List 重复元素
- **难度**：易
- **课件依据**：Java基础-5-集合和泛型.pptx 第9页
- **答案**：正确

**解析：** 正确。是否允许重复是 List 与 Set 的关键差异之一。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/List.html

### JAVA-303（判断题）

- **知识点**：HashSet 顺序
- **难度**：中
- **课件依据**：Java基础-5-集合和泛型.pptx 第8页
- **答案**：错误

**解析：** 错误。HashSet 不保证迭代顺序；需要插入顺序时应考虑 LinkedHashSet。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/HashSet.html

### JAVA-304（判断题）

- **知识点**：TreeSet 比较相等
- **难度**：中
- **课件依据**：Java基础-5-集合和泛型.pptx 第11页
- **答案**：正确

**解析：** 正确。有序 Set 的唯一性由排序关系决定，比较器设计要与业务相等语义协调。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/TreeSet.html

### JAVA-305（判断题）

- **知识点**：Collections.copy
- **难度**：中
- **课件依据**：Java基础-5-集合和泛型.pptx 第23页
- **答案**：错误

**解析：** 错误。目标当前大小必须至少等于源列表大小，copy 进行位置覆盖而非追加。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/Collections.html#copy(java.util.List,java.util.List)

### JAVA-306（判断题）

- **知识点**：binarySearch
- **难度**：中
- **课件依据**：Java基础-5-集合和泛型.pptx 第25页
- **答案**：正确

**解析：** 正确。插入点为 `-result-1`。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/Collections.html#binarySearch(java.util.List,T)

### JAVA-307（判断题）

- **知识点**：Arrays.asList
- **难度**：中
- **课件依据**：Java基础-5-集合和泛型.pptx 第26页
- **答案**：正确

**解析：** 正确。它是固定大小的数组视图，不等于完全不可修改列表。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/Arrays.html#asList(T...)

### JAVA-308（判断题）

- **知识点**：泛型基本类型
- **难度**：易
- **课件依据**：Java基础-5-集合和泛型.pptx 第41页
- **答案**：错误

**解析：** 错误。类型实参必须是引用类型，基本类型 int 要使用 Integer。

**官方参考：** https://dev.java/learn/generics/

### JAVA-309（判断题）

- **知识点**：钻石推断
- **难度**：中
- **课件依据**：Java基础-5-集合和泛型.pptx 第43页
- **答案**：正确

**解析：** 正确。这是 Java 7 起支持的钻石语法。

**官方参考：** https://dev.java/learn/generics/

### JAVA-310（判断题）

- **知识点**：泛型协变
- **难度**：中
- **课件依据**：Java基础-5-集合和泛型.pptx 第48页
- **答案**：错误

**解析：** 错误。Java 参数化类型默认不变，可使用合适的通配符表达受限协变。

**官方参考：** https://dev.java/learn/generics/inheritance-and-subtypes/

### JAVA-311（判断题）

- **知识点**：extends 通配符
- **难度**：中
- **课件依据**：Java基础-5-集合和泛型.pptx 第58页
- **答案**：正确

**解析：** 正确。实际列表元素类型可能是 Integer、Double 等某个未知子类型。

**官方参考：** https://dev.java/learn/generics/wildcards/

### JAVA-312（判断题）

- **知识点**：super 通配符
- **难度**：中
- **课件依据**：Java基础-5-集合和泛型.pptx 第55页
- **答案**：错误

**解析：** 错误。列表实际可能是 List<Number> 或 List<Object>，读取只能安全视为 Object。

**官方参考：** https://dev.java/learn/generics/lower-bounded/

### JAVA-313（判断题）

- **知识点**：类型擦除
- **难度**：中
- **课件依据**：Java基础-5-集合和泛型.pptx 第60页
- **答案**：错误

**解析：** 错误。泛型通过擦除实现，通常共享同一泛型类字节码。

**官方参考：** https://dev.java/learn/generics/type-erasure/

### JAVA-314（判断题）

- **知识点**：原始类型
- **难度**：中
- **课件依据**：Java基础-5-集合和泛型.pptx 第61页
- **答案**：正确

**解析：** 正确。这是原始类型削弱泛型静态保证的典型风险。

**官方参考：** https://dev.java/learn/generics/raw-types/

### JAVA-315（判断题）

- **知识点**：instanceof 泛型
- **难度**：中
- **课件依据**：Java基础-5-集合和泛型.pptx 第63页
- **答案**：错误

**解析：** 错误。具体类型实参已擦除，该 instanceof 写法本身不合法；即使检查元素也需逐个验证。

**官方参考：** https://dev.java/learn/generics/restrictions/

# 第6讲：多线程与并发

## 单选题

### JAVA-316（单选题）

- **知识点**：进程与线程
- **难度**：易
- **课件依据**：Java基础-6-多线程.pptx 第4页
- **答案**：B

**解析：** 线程共享所属进程的资源，同时保有独立的执行上下文。

**选项辨析：**

- A：错误。这是不同进程的典型特征。
- B：正确。共享资源使通信方便，也带来同步问题。
- C：错误。同进程线程可直接共享对象。
- D：错误。一个 JVM 可运行多个线程。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/Thread.html

### JAVA-317（单选题）

- **知识点**：并发价值
- **难度**：易
- **课件依据**：Java基础-6-多线程.pptx 第8页
- **答案**：B

**解析：** 耗时 I/O 放到后台可避免界面线程长时间阻塞。

**选项辨析：**

- A：错误。会造成界面卡顿。
- B：正确。兼顾耗时工作和响应性。
- C：错误。优先级不能消除阻塞。
- D：错误。yield 不是网络等待机制。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/concurrent/package-summary.html

### JAVA-318（单选题）

- **知识点**：竞态条件
- **难度**：中
- **课件依据**：Java基础-6-多线程.pptx 第9页
- **答案**：B

**解析：** count++ 包含读取、计算和写回，交错执行可能丢失更新。

**选项辨析：**

- A：错误。它通常不是原子操作。
- B：正确。这是典型丢失更新。
- C：错误。调度顺序没有这种保证。
- D：错误。整数可以被共享。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/concurrent/package-summary.html

### JAVA-319（单选题）

- **知识点**：Runnable
- **难度**：易
- **课件依据**：Java基础-6-多线程.pptx 第11页
- **答案**：A

**解析：** Runnable 的 run 方法描述无返回值任务。

**选项辨析：**

- A：正确。符合 Thread(Runnable) 的参数约定。
- B：错误。用于资源关闭。
- C：错误。用于排序比较。
- D：错误。用于迭代。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/Thread.html

### JAVA-320（单选题）

- **知识点**：线程启动
- **难度**：易
- **课件依据**：Java基础-6-多线程.pptx 第12页
- **答案**：B

**解析：** start 创建新的执行路径，随后由新线程调用 run。

**选项辨析：**

- A：错误。只是当前线程普通方法调用。
- B：正确。这是启动线程的入口。
- C：错误。join 是等待目标结束。
- D：错误。wait 属于监视器协作。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/Thread.html

### JAVA-321（单选题）

- **知识点**：start 与 run
- **难度**：中
- **课件依据**：Java基础-6-多线程.pptx 第12页
- **答案**：B

**解析：** 直接调用 run 与普通方法调用相同，不会启动新执行线程。

**选项辨析：**

- A：错误。新线程需调用 start。
- B：正确。调用者会执行完该方法。
- C：错误。wait 才涉及等待集。
- D：错误。与线程池无关。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/Thread.html

### JAVA-322（单选题）

- **知识点**：线程一次性启动
- **难度**：易
- **课件依据**：Java基础-6-多线程.pptx 第12页
- **答案**：B

**解析：** Thread 实例只能启动一次。

**选项辨析：**

- A：错误。终止后也不能重启同一实例。
- B：正确。这是 API 规定。
- C：错误。不会自动复制。
- D：错误。不是静默操作。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/Thread.html

### JAVA-323（单选题）

- **知识点**：创建方式选择
- **难度**：中
- **课件依据**：Java基础-6-多线程.pptx 第18页
- **答案**：B

**解析：** 实现 Runnable 不占用类的唯一继承位置，并分离任务与执行机制。

**选项辨析：**

- A：错误。Java 不支持类多继承。
- B：正确。最适合该约束。
- C：错误。wait 不定义任务。
- D：错误。线程组不替代任务接口。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/Thread.html

### JAVA-324（单选题）

- **知识点**：线程状态
- **难度**：易
- **课件依据**：Java基础-6-多线程.pptx 第20页
- **答案**：A

**解析：** 尚未启动的 Thread 状态为 NEW。

**选项辨析：**

- A：正确。符合生命周期定义。
- B：错误。启动后才可能可运行。
- C：错误。尚未执行等待。
- D：错误。任务也未结束。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/Thread.html

### JAVA-325（单选题）

- **知识点**：线程终止
- **难度**：易
- **课件依据**：Java基础-6-多线程.pptx 第20页
- **答案**：C

**解析：** run 结束意味着该线程执行生命周期结束。

**选项辨析：**

- A：错误。不会回到新建。
- B：错误。没有在等锁。
- C：正确。对应终止状态。
- D：错误。Thread 不可重启。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/Thread.html

### JAVA-326（单选题）

- **知识点**：sleep
- **难度**：中
- **课件依据**：Java基础-6-多线程.pptx 第26页
- **答案**：B

**解析：** sleep 暂停当前线程，但不会释放其已持有的监视器。

**选项辨析：**

- A：错误。这是与 wait 的重要区别。
- B：正确。其他线程仍可能被锁阻塞。
- C：错误。监视器不按此方式转交。
- D：错误。锁对象不会销毁。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/Thread.html

### JAVA-327（单选题）

- **知识点**：yield
- **难度**：中
- **课件依据**：Java基础-6-多线程.pptx 第24页
- **答案**：B

**解析：** yield 只是调度提示，当前线程甚至可能很快再次运行。

**选项辨析：**

- A：错误。任务并未终止。
- B：正确。不能依赖确定调度结果。
- C：错误。没有必然性。
- D：错误。yield 不释放监视器。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/Thread.html

### JAVA-328（单选题）

- **知识点**：join
- **难度**：易
- **课件依据**：Java基础-6-多线程.pptx 第28页
- **答案**：B

**解析：** join 使调用方等待目标线程完成。

**选项辨析：**

- A：错误。方向相反。
- B：正确。符合 join 语义。
- C：错误。不会自动中断。
- D：错误。不修改优先级。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/Thread.html

### JAVA-329（单选题）

- **知识点**：interrupt
- **难度**：中
- **课件依据**：Java基础-6-多线程.pptx 第30页
- **答案**：B

**解析：** 阻塞方法以 InterruptedException 响应中断，线程随后如何退出由代码决定。

**选项辨析：**

- A：错误。中断是协作机制。
- B：正确。应捕获或传播并作出策略。
- C：错误。引用不会自动清空。
- D：错误。不会重启。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/Thread.html

### JAVA-330（单选题）

- **知识点**：中断策略
- **难度**：难
- **课件依据**：Java基础-6-多线程.pptx 第30页
- **答案**：B

**解析：** 协作式取消应让任务在一致状态下结束；若上层仍需感知，可重新设置中断标志。

**选项辨析：**

- A：错误。吞掉中断会破坏取消。
- B：正确。保留了清理与传播语义。
- C：错误。stop 不安全。
- D：错误。线程不能重启。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/Thread.html

### JAVA-331（单选题）

- **知识点**：中断状态
- **难度**：难
- **课件依据**：Java基础-6-多线程.pptx 第31页
- **答案**：C

**解析：** 静态 interrupted 检查当前线程并清除标志。

**选项辨析：**

- A：错误。只检查存活。
- B：错误。检查目标状态但不清除。
- C：正确。符合 API 语义。
- D：错误。只返回状态枚举。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/Thread.html

### JAVA-332（单选题）

- **知识点**：isAlive
- **难度**：易
- **课件依据**：Java基础-6-多线程.pptx 第31页
- **答案**：B

**解析：** 未启动和已终止线程的 isAlive 都为 false。

**选项辨析：**

- A：错误。尚未处于活动生命周期。
- B：正确。符合定义。
- C：错误。查询允许执行。
- D：错误。优先级不决定存活。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/Thread.html

### JAVA-333（单选题）

- **知识点**：废弃控制方法
- **难度**：中
- **课件依据**：Java基础-6-多线程.pptx 第32页
- **答案**：B

**解析：** 异步强制终止可能让对象处于不一致状态，应采用协作取消。

**选项辨析：**

- A：错误。并非主线程专属。
- B：正确。这是其内在风险。
- C：错误。与优先级无关。
- D：错误。也不应用于池线程。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/Thread.html

### JAVA-334（单选题）

- **知识点**：线程组
- **难度**：易
- **课件依据**：Java基础-6-多线程.pptx 第35页
- **答案**：B

**解析：** 新线程通常归入创建者所在的线程组。

**选项辨析：**

- A：错误。线程会有关联线程组。
- B：正确。符合默认规则。
- C：错误。并非固定系统组。
- D：错误。不是随机的。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/Thread.html

### JAVA-335（单选题）

- **知识点**：线程池价值
- **难度**：易
- **课件依据**：Java基础-6-多线程.pptx 第41页
- **答案**：B

**解析：** 池化减少反复创建销毁开销，并提供容量管理。

**选项辨析：**

- A：错误。完成顺序通常不保证。
- B：正确。这是核心价值。
- C：错误。共享状态仍需同步。
- D：错误。池线程会共享计算资源。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/concurrent/ExecutorService.html

### JAVA-336（单选题）

- **知识点**：Executor 解耦
- **难度**：中
- **课件依据**：Java基础-6-多线程.pptx 第45页
- **答案**：B

**解析：** 调用者提交 Runnable/Callable，执行策略由 Executor 管理。

**选项辨析：**

- A：错误。属于编译过程。
- B：正确。这正是 Executor 抽象。
- C：错误。无直接关系。
- D：错误。不是其主要抽象。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/concurrent/ExecutorService.html

### JAVA-337（单选题）

- **知识点**：固定线程池
- **难度**：易
- **课件依据**：Java基础-6-多线程.pptx 第51页
- **答案**：B

**解析：** 固定池以指定数量工作线程处理排队任务。

**选项辨析：**

- A：错误。任务数量可超过三。
- B：正确。并发度受工作线程数约束。
- C：错误。不会为每个任务建三条。
- D：错误。数字不是时间。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/concurrent/ExecutorService.html

### JAVA-338（单选题）

- **知识点**：shutdown
- **难度**：中
- **课件依据**：Java基础-6-多线程.pptx 第52页
- **答案**：B

**解析：** shutdown 发起有序关闭；已提交任务可继续执行。

**选项辨析：**

- A：错误。更接近 shutdownNow 的尝试性语义。
- B：正确。符合 API 契约。
- C：错误。不会重新开放。
- D：错误。Future 不因此统一清空。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/concurrent/ExecutorService.html

### JAVA-339（单选题）

- **知识点**：Callable
- **难度**：易
- **课件依据**：Java基础-6-多线程.pptx 第54页
- **答案**：B

**解析：** Callable.call 有返回值且允许抛出 Exception。

**选项辨析：**

- A：错误。没有这种限制。
- B：正确。是二者关键差异。
- C：错误。锁仍需显式设计。
- D：错误。也常提交给 ExecutorService。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/concurrent/package-summary.html

### JAVA-340（单选题）

- **知识点**：Future
- **难度**：中
- **课件依据**：Java基础-6-多线程.pptx 第55页
- **答案**：B

**解析：** 结果未就绪时 get 可阻塞，完成后返回结果或报告异常。

**选项辨析：**

- A：错误。取消使用 cancel。
- B：正确。符合 Future 用途。
- C：错误。不管理优先级。
- D：错误。不负责释放业务锁。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/concurrent/package-summary.html

### JAVA-341（单选题）

- **知识点**：synchronized 锁对象
- **难度**：中
- **课件依据**：Java基础-6-多线程.pptx 第64页
- **答案**：A

**解析：** 实例同步方法锁定接收者对象。

**选项辨析：**

- A：正确。同一实例的同步区域因此互斥。
- B：错误。线程对象不是默认锁。
- C：错误。类加载器无关。
- D：错误。临时对象无法协调调用者。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/Object.html

### JAVA-342（单选题）

- **知识点**：静态同步方法
- **难度**：中
- **课件依据**：Java基础-6-多线程.pptx 第64页
- **答案**：B

**解析：** 静态同步属于类级监视器。

**选项辨析：**

- A：错误。静态上下文没有 this。
- B：正确。同一类的静态同步方法共享该锁。
- C：错误。栈不是监视器目标。
- D：错误。与池队列无关。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/Object.html

### JAVA-343（单选题）

- **知识点**：锁粒度
- **难度**：中
- **课件依据**：Java基础-6-多线程.pptx 第66页
- **答案**：B

**解析：** 同步块可仅覆盖临界区，降低不必要的串行化。

**选项辨析：**

- A：错误。临界区仍互斥。
- B：正确。这是缩小粒度的目的。
- C：错误。同步不屏蔽异常。
- D：错误。内置锁不保证公平。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/Object.html

### JAVA-344（单选题）

- **知识点**：锁对象选择
- **难度**：难
- **课件依据**：Java基础-6-多线程.pptx 第69页
- **答案**：B

**解析：** 参与者必须锁定同一对象才能互斥访问共享账户。

**选项辨析：**

- A：错误。this 确实是对象。
- B：正确。不同锁之间互不排斥。
- C：错误。也可用于代码块。
- D：错误。普通引用对象可作监视器。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/Object.html

### JAVA-345（单选题）

- **知识点**：可重入锁
- **难度**：易
- **课件依据**：Java基础-6-多线程.pptx 第70页
- **答案**：B

**解析：** finally 可确保正常或异常路径都释放显式锁。

**选项辨析：**

- A：错误。可能永久占锁。
- B：正确。这是标准结构。
- C：错误。无异常时不会释放。
- D：错误。GC 不代替 unlock。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/concurrent/locks/Lock.html

### JAVA-346（单选题）

- **知识点**：公平锁
- **难度**：中
- **课件依据**：Java基础-6-多线程.pptx 第70页
- **答案**：B

**解析：** 公平锁倾向让等待较久的线程先获取，但可能有吞吐代价。

**选项辨析：**

- A：错误。仍是进程内对象。
- B：正确。参数用于公平性。
- C：错误。竞争时仍会阻塞。
- D：错误。不会自动检测死锁。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/concurrent/locks/Lock.html

### JAVA-347（单选题）

- **知识点**：Condition
- **难度**：中
- **课件依据**：Java基础-6-多线程.pptx 第73页
- **答案**：B

**解析：** Condition 与特定 Lock 绑定。

**选项辨析：**

- A：错误。Condition 是接口。
- B：正确。这是创建入口。
- C：错误。Thread 不提供它。
- D：错误。Future 表示异步结果。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/concurrent/locks/Lock.html

### JAVA-348（单选题）

- **知识点**：条件等待
- **难度**：难
- **课件依据**：Java基础-6-多线程.pptx 第75页
- **答案**：B

**解析：** 唤醒不等于条件必然成立，且多个等待者会竞争，必须重检谓词。

**选项辨析：**

- A：错误。加锁需另外完成。
- B：正确。这是条件等待的正确模式。
- C：错误。if 可在 try 中。
- D：错误。语法没有该限制。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/concurrent/locks/Lock.html

### JAVA-349（单选题）

- **知识点**：wait 前置条件
- **难度**：中
- **课件依据**：Java基础-6-多线程.pptx 第75页
- **答案**：A

**解析：** 未持有目标监视器调用 wait 会抛 IllegalMonitorStateException。

**选项辨析：**

- A：正确。通常在 synchronized(obj) 内调用。
- B：错误。优先级无关。
- C：错误。对象类型无此要求。
- D：错误。线程组无关。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/Object.html

### JAVA-350（单选题）

- **知识点**：wait 与锁
- **难度**：中
- **课件依据**：Java基础-6-多线程.pptx 第20页
- **答案**：B

**解析：** wait 原子地释放目标监视器并等待，返回前需重新获得它。

**选项辨析：**

- A：错误。否则协作者无法进入。
- B：正确。这是 wait 的关键语义。
- C：错误。对象仍存在。
- D：错误。notify 不直接移交锁。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/Object.html

### JAVA-351（单选题）

- **知识点**：notifyAll
- **难度**：难
- **课件依据**：Java基础-6-多线程.pptx 第75页
- **答案**：B

**解析：** 全部等待者被通知后会逐个重新竞争锁并检查各自条件。

**选项辨析：**

- A：错误。同一时刻仍只有持锁者进入。
- B：正确。可降低错误通知导致停滞的风险。
- C：错误。不保证完成顺序。
- D：错误。调用时仍需持有监视器。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/Object.html

### JAVA-352（单选题）

- **知识点**：Semaphore
- **难度**：易
- **课件依据**：Java基础-6-多线程.pptx 第78页
- **答案**：A

**解析：** 许可计数可限制并发进入资源区域的线程数。

**选项辨析：**

- A：正确。典型用途如连接池限流。
- B：错误。与不可变性无关。
- C：错误。不创建线程组。
- D：错误。公平参数也不等于完成顺序。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/concurrent/package-summary.html

### JAVA-353（单选题）

- **知识点**：Semaphore 许可
- **难度**：中
- **课件依据**：Java基础-6-多线程.pptx 第78页
- **答案**：B

**解析：** 许可必须归还，finally 可防止异常造成泄漏。

**选项辨析：**

- A：错误。会继续消耗许可。
- B：正确。这是可靠配对。
- C：错误。机制不可混用替代。
- D：错误。信号量可复用。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/concurrent/package-summary.html

### JAVA-354（单选题）

- **知识点**：死锁
- **难度**：中
- **课件依据**：Java基础-6-多线程.pptx 第80页
- **答案**：B

**解析：** 循环等待使双方都无法推进。

**选项辨析：**

- A：错误。活锁是不断动作却无进展。
- B：正确。符合死锁特征。
- C：错误。系统已失去活性。
- D：错误。明显使用了锁。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/concurrent/package-summary.html

### JAVA-355（单选题）

- **知识点**：死锁预防
- **难度**：中
- **课件依据**：Java基础-6-多线程.pptx 第80页
- **答案**：B

**解析：** 统一锁顺序可破坏循环等待条件。

**选项辨析：**

- A：错误。随机顺序仍可能相反。
- B：正确。这是常见预防策略。
- C：错误。优先级不解除循环依赖。
- D：错误。会恶化阻塞。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/concurrent/package-summary.html

### JAVA-356（单选题）

- **知识点**：同步集合
- **难度**：中
- **课件依据**：Java基础-6-多线程.pptx 第81页
- **答案**：B

**解析：** 同步包装器的复合遍历仍需客户端在包装对象上同步。

**选项辨析：**

- A：错误。单次方法同步不足以保护整段迭代。
- B：正确。应依照包装器契约锁住列表完成遍历。
- C：错误。ThreadLocal 不解决列表并发修改。
- D：错误。stop 不安全。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/concurrent/package-summary.html

### JAVA-357（单选题）

- **知识点**：临界区
- **难度**：易
- **课件依据**：Java基础-6-多线程.pptx 第63页
- **答案**：B

**解析：** 访问共享可变状态且需互斥的代码区域称为临界区。

**选项辨析：**

- A：错误。不是标准术语。
- B：正确。符合定义。
- C：错误。类路径用于定位类。
- D：错误。线程组用于组织线程。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/concurrent/package-summary.html

### JAVA-358（单选题）

- **知识点**：可见性与原子性
- **难度**：难
- **课件依据**：Java基础-6-多线程.pptx 第58页
- **答案**：B

**解析：** 复合自增仍可能交错，应使用锁或原子类。

**选项辨析：**

- A：错误。volatile 不提供该原子性。
- B：正确。准确区分两种性质。
- C：错误。共享更新仍可能竞争。
- D：错误。volatile 变量可正常写入。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/concurrent/package-summary.html

### JAVA-359（单选题）

- **知识点**：ThreadLocal
- **难度**：中
- **课件依据**：Java基础-6-多线程.pptx 第58页
- **答案**：A

**解析：** ThreadLocal 按线程关联独立值，减少不必要共享。

**选项辨析：**

- A：正确。如每线程上下文。
- B：错误。原子类或锁更合适。
- C：错误。Semaphore 更合适。
- D：错误。join 用于等待终止。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/concurrent/package-summary.html

### JAVA-360（单选题）

- **知识点**：任务异常
- **难度**：难
- **课件依据**：Java基础-6-多线程.pptx 第55页
- **答案**：B

**解析：** Future 将异步失败传递给取结果的一方。

**选项辨析：**

- A：错误。失败可被观察。
- B：正确。符合 get 契约。
- C：错误。Future 引用不自动变化。
- D：错误。池不会因此必然销毁。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/concurrent/package-summary.html

## 多选题

### JAVA-361（多选题）

- **知识点**：进程与线程 / 共享资源
- **难度**：中
- **课件依据**：Java基础-6-多线程.pptx 第4页
- **答案**：A、B、D

**解析：** 线程共享进程资源但保有私有执行栈，共享可变状态需协调。

**选项辨析：**

- A：正确。对象可被共同访问。
- B：正确。调用链彼此独立。
- C：错误。仍可能竞态。
- D：正确。通常开销较小。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/Thread.html

### JAVA-362（多选题）

- **知识点**：多线程收益 / 场景设计
- **难度**：中
- **课件依据**：Java基础-6-多线程.pptx 第8页
- **答案**：A、B、D

**解析：** I/O 重叠、响应性和多核并行是典型收益，共享写入仍需控制。

**选项辨析：**

- A：正确。可利用等待时间。
- B：正确。改善响应。
- C：错误。会产生冲突。
- D：正确。可利用多核。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/concurrent/package-summary.html

### JAVA-363（多选题）

- **知识点**：线程创建 / Runnable
- **难度**：易
- **课件依据**：Java基础-6-多线程.pptx 第18页
- **答案**：A、B、D

**解析：** Runnable 提升组合性与复用性，但不自动提供线程安全。

**选项辨析：**

- A：正确。职责更清晰。
- B：正确。不占继承位。
- C：错误。仍需同步。
- D：正确。Executor 接受 Runnable。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/Thread.html；https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/concurrent/ExecutorService.html

### JAVA-364（多选题）

- **知识点**：线程生命周期 / 状态转换
- **难度**：中
- **课件依据**：Java基础-6-多线程.pptx 第20页
- **答案**：A、B、C

**解析：** 休眠、等待其他线程或条件都会暂停推进。

**选项辨析：**

- A：正确。进入定时等待。
- B：正确。等待目标结束。
- C：正确。进入等待集。
- D：错误。普通读取不会阻塞。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/Thread.html；https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/Object.html

### JAVA-365（多选题）

- **知识点**：sleep / wait
- **难度**：难
- **课件依据**：Java基础-6-多线程.pptx 第20页
- **答案**：A、B、C

**解析：** 二者所属类和锁语义不同，sleep 不释放已持有监视器。

**选项辨析：**

- A：正确。正确。
- B：正确。正确。
- C：正确。便于协作者进入。
- D：错误。错误。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/Thread.html；https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/Object.html

### JAVA-366（多选题）

- **知识点**：join / 任务依赖
- **难度**：中
- **课件依据**：Java基础-6-多线程.pptx 第29页
- **答案**：A、B

**解析：** join 表达线程完成依赖，不承担限流或重启。

**选项辨析：**

- A：正确。需等待结果齐备。
- B：正确。存在先后依赖。
- C：错误。应使用信号量。
- D：错误。线程不可重启。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/Thread.html

### JAVA-367（多选题）

- **知识点**：中断 / 协作取消
- **难度**：难
- **课件依据**：Java基础-6-多线程.pptx 第30页
- **答案**：A、B、D

**解析：** 中断是否导致退出取决于任务协议，查询方法清除语义不同。

**选项辨析：**

- A：正确。正确。
- B：正确。正确。
- C：错误。该方法不清除。
- D：正确。应退出、传播或记录策略。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/Thread.html

### JAVA-368（多选题）

- **知识点**：线程优先级 / 调度
- **难度**：中
- **课件依据**：Java基础-6-多线程.pptx 第21页
- **答案**：A、B、C

**解析：** 优先级是调度提示维度，不是同步机制。

**选项辨析：**

- A：正确。可读性好。
- B：正确。调度不确定。
- C：正确。实现存在差异。
- D：错误。竞态仍存在。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/Thread.html

### JAVA-369（多选题）

- **知识点**：线程组 / 线程管理
- **难度**：中
- **课件依据**：Java基础-6-多线程.pptx 第35页
- **答案**：A、C、D

**解析：** 线程组用于组织管理，成员关系创建后不可随意改变。

**选项辨析：**

- A：正确。正确。
- B：错误。不能中途改变。
- C：正确。可批量中断。
- D：正确。符合默认规则。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/Thread.html

### JAVA-370（多选题）

- **知识点**：线程池 / 资源管理
- **难度**：中
- **课件依据**：Java基础-6-多线程.pptx 第41页
- **答案**：A、B、C

**解析：** 池管理执行资源，但业务状态安全仍由程序负责。

**选项辨析：**

- A：正确。减少创建成本。
- B：正确。避免无界并发。
- C：正确。便于生命周期管理。
- D：错误。不会自动同步对象。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/concurrent/ExecutorService.html

### JAVA-371（多选题）

- **知识点**：ExecutorService / 关闭
- **难度**：难
- **课件依据**：Java基础-6-多线程.pptx 第52页
- **答案**：A、B、C

**解析：** 有序关闭通常包含停止接单、限时等待和必要时升级取消。

**选项辨析：**

- A：正确。停止新提交。
- B：正确。等待收尾。
- C：正确。是常见降级步骤。
- D：错误。会被拒绝。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/concurrent/ExecutorService.html

### JAVA-372（多选题）

- **知识点**：Callable / Future
- **难度**：中
- **课件依据**：Java基础-6-多线程.pptx 第54页
- **答案**：A、B、C

**解析：** Future 表示异步结果，也能承载取消或失败。

**选项辨析：**

- A：正确。正确。
- B：正确。可用 isDone。
- C：正确。结果未好会等待。
- D：错误。失败可见。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/concurrent/package-summary.html

### JAVA-373（多选题）

- **知识点**：Future / 取消
- **难度**：难
- **课件依据**：Java基础-6-多线程.pptx 第55页
- **答案**：A、B、D

**解析：** 取消是状态与中断协作，不是安全的异步强杀。

**选项辨析：**

- A：正确。正确。
- B：正确。可请求中断。
- C：错误。没有这种保证。
- D：正确。代码需配合。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/concurrent/package-summary.html

### JAVA-374（多选题）

- **知识点**：synchronized / 监视器
- **难度**：中
- **课件依据**：Java基础-6-多线程.pptx 第60页
- **答案**：A、B、C

**解析：** 内置锁可重入，互斥范围由同一监视器决定。

**选项辨析：**

- A：正确。同锁互斥。
- B：正确。可重入。
- C：正确。普通方法不自动取锁。
- D：错误。锁不扩散。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/Object.html

### JAVA-375（多选题）

- **知识点**：竞态条件 / 临界区
- **难度**：难
- **课件依据**：Java基础-6-多线程.pptx 第63页
- **答案**：A、B、C

**解析：** 所有访问者须通过同一互斥机制保护同一复合操作。

**选项辨析：**

- A：正确。共享实例锁可行。
- B：正确。共同锁对象可行。
- C：正确。共享显式锁可行。
- D：错误。不同锁无效。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/Object.html；https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/concurrent/locks/Lock.html

### JAVA-376（多选题）

- **知识点**：锁粒度 / 并发设计
- **难度**：难
- **课件依据**：Java基础-6-多线程.pptx 第66页
- **答案**：A、B、D

**解析：** 锁范围应足以维持不变量，同时避免无关慢操作长期占锁。

**选项辨析：**

- A：正确。减少持锁时间。
- B：正确。互斥需共同锁。
- C：错误。会放大阻塞。
- D：正确。便于审查。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/Object.html

### JAVA-377（多选题）

- **知识点**：Lock / 异常安全
- **难度**：中
- **课件依据**：Java基础-6-多线程.pptx 第72页
- **答案**：A、B、D

**解析：** 获取后以 try/finally 保护释放路径。

**选项辨析：**

- A：正确。先获取。
- B：正确。保证释放。
- C：错误。可能抛异常。
- D：正确。业务区放入 try。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/concurrent/locks/Lock.html

### JAVA-378（多选题）

- **知识点**：Condition / 线程协作
- **难度**：难
- **课件依据**：Java基础-6-多线程.pptx 第75页
- **答案**：A、B、C

**解析：** 条件队列依附锁，谓词检查与等待需在锁保护下进行。

**选项辨析：**

- A：正确。必要。
- B：正确。必须配套。
- C：正确。抵御竞争和虚假唤醒。
- D：错误。无此要求。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/concurrent/locks/Lock.html

### JAVA-379（多选题）

- **知识点**：wait/notify / 监视器
- **难度**：难
- **课件依据**：Java基础-6-多线程.pptx 第75页
- **答案**：A、B、D

**解析：** 通知只改变等待资格，临界区仍受同一监视器互斥。

**选项辨析：**

- A：正确。正确。
- B：正确。通知者释放后才可获取。
- C：错误。不会同时持锁。
- D：正确。条件可能已变化。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/Object.html

### JAVA-380（多选题）

- **知识点**：生产者消费者 / 线程协作
- **难度**：中
- **课件依据**：Java基础-6-多线程.pptx 第74页
- **答案**：A、B、C

**解析：** 条件等待避免空转，并在状态变化后重试。

**选项辨析：**

- A：正确。符合谓词等待。
- B：正确。通知状态变化。
- C：正确。防止条件失效。
- D：错误。会阻止存款推进。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/concurrent/locks/Lock.html

### JAVA-381（多选题）

- **知识点**：Semaphore / 限流
- **难度**：中
- **课件依据**：Java基础-6-多线程.pptx 第78页
- **答案**：A、B、C

**解析：** 信号量限制数量，但连接本身的并发规则仍需遵守。

**选项辨析：**

- A：正确。对应借用。
- B：正确。对应归还。
- C：正确。计数限制。
- D：错误。不自动保护对象内部。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/concurrent/package-summary.html

### JAVA-382（多选题）

- **知识点**：死锁 / 预防
- **难度**：难
- **课件依据**：Java基础-6-多线程.pptx 第80页
- **答案**：A、B、C

**解析：** 减少循环等待与无限等待能提升活性。

**选项辨析：**

- A：正确。破坏循环等待。
- B：正确。避免未知嵌套锁。
- C：正确。可放弃重试。
- D：错误。会制造相反顺序。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/concurrent/locks/Lock.html

### JAVA-383（多选题）

- **知识点**：同步集合 / 复合操作
- **难度**：难
- **课件依据**：Java基础-6-多线程.pptx 第81页
- **答案**：A、B、D

**解析：** 单方法已同步不代表多步骤协议或遍历整体安全。

**选项辨析：**

- A：正确。检查与添加需合并。
- B：正确。需保护迭代过程。
- C：错误。单次方法由包装器同步。
- D：正确。需共同锁保护。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/concurrent/package-summary.html

### JAVA-384（多选题）

- **知识点**：volatile / 原子性
- **难度**：难
- **课件依据**：Java基础-6-多线程.pptx 第58页
- **答案**：A、B、D

**解析：** volatile 适合独立状态发布，不替代复合互斥。

**选项辨析：**

- A：正确。核心作用。
- B：正确。复合操作仍竞态。
- C：错误。多字段一致性通常需锁。
- D：正确。是常见用途。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/concurrent/package-summary.html

### JAVA-385（多选题）

- **知识点**：线程安全 / 设计策略
- **难度**：中
- **课件依据**：Java基础-6-多线程.pptx 第58页
- **答案**：A、B、C

**解析：** 隔离、互斥和合适原子工具都可建立安全性。

**选项辨析：**

- A：正确。从根源减少竞态。
- B：正确。维持复合一致性。
- C：正确。适合特定更新。
- D：错误。竞态常具偶发性。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/concurrent/package-summary.html

### JAVA-386（多选题）

- **知识点**：线程池 / 容量规划
- **难度**：中
- **课件依据**：Java基础-6-多线程.pptx 第41页
- **答案**：A、B、C

**解析：** 并发度需结合工作负载与系统瓶颈，而非盲目放大。

**选项辨析：**

- A：正确。影响合适并行度。
- B：正确。决定可承载量。
- C：正确。关系响应和内存。
- D：错误。可能耗尽资源。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/concurrent/ExecutorService.html

### JAVA-387（多选题）

- **知识点**：并发测试 / 竞态条件
- **难度**：中
- **课件依据**：Java基础-6-多线程.pptx 第9页
- **答案**：A、B、C

**解析：** 并发缺陷依赖时序，测试能暴露但不能以偶然成功证明安全。

**选项辨析：**

- A：正确。正确。
- B：正确。有助于暴露。
- C：正确。只改变时序。
- D：错误。不能推出。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/concurrent/package-summary.html

## 判断题

### JAVA-388（判断题）

- **知识点**：线程与进程
- **难度**：易
- **课件依据**：Java基础-6-多线程.pptx 第4页
- **答案**：正确

**解析：** 共享地址空间既降低通信成本，也要求正确同步。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/Thread.html

### JAVA-389（判断题）

- **知识点**：线程启动
- **难度**：中
- **课件依据**：Java基础-6-多线程.pptx 第12页
- **答案**：错误

**解析：** Thread 实例只能启动一次；复用任务应创建新线程或交给线程池。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/Thread.html

### JAVA-390（判断题）

- **知识点**：start 与 run
- **难度**：中
- **课件依据**：Java基础-6-多线程.pptx 第12页
- **答案**：正确

**解析：** 它只是当前调用线程中的普通方法调用。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/Thread.html

### JAVA-391（判断题）

- **知识点**：线程调度
- **难度**：中
- **课件依据**：Java基础-6-多线程.pptx 第23页
- **答案**：错误

**解析：** 调度受平台和运行条件影响，优先级不能作为完成顺序保证。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/Thread.html

### JAVA-392（判断题）

- **知识点**：sleep
- **难度**：中
- **课件依据**：Java基础-6-多线程.pptx 第26页
- **答案**：错误

**解析：** sleep 暂停执行但不释放已持有的监视器。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/Thread.html

### JAVA-393（判断题）

- **知识点**：join
- **难度**：中
- **课件依据**：Java基础-6-多线程.pptx 第28页
- **答案**：正确

**解析：** join 用于表达线程终止依赖。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/Thread.html

### JAVA-394（判断题）

- **知识点**：中断
- **难度**：中
- **课件依据**：Java基础-6-多线程.pptx 第30页
- **答案**：错误

**解析：** 中断是协作信号，目标任务决定响应方式。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/Thread.html

### JAVA-395（判断题）

- **知识点**：线程池关闭
- **难度**：中
- **课件依据**：Java基础-6-多线程.pptx 第52页
- **答案**：正确

**解析：** 这不同于尝试中断正在执行任务的 shutdownNow。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/concurrent/ExecutorService.html

### JAVA-396（判断题）

- **知识点**：Future
- **难度**：中
- **课件依据**：Java基础-6-多线程.pptx 第55页
- **答案**：正确

**解析：** get 等待结果可用，也可能返回失败或取消信息。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/concurrent/package-summary.html

### JAVA-397（判断题）

- **知识点**：实例锁
- **难度**：中
- **课件依据**：Java基础-6-多线程.pptx 第64页
- **答案**：错误

**解析：** 实例同步方法分别锁定各自的接收者对象。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/Object.html

### JAVA-398（判断题）

- **知识点**：静态同步
- **难度**：中
- **课件依据**：Java基础-6-多线程.pptx 第64页
- **答案**：正确

**解析：** 因此同一类的静态同步区域使用类级监视器。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/Object.html

### JAVA-399（判断题）

- **知识点**：锁对象选择
- **难度**：中
- **课件依据**：Java基础-6-多线程.pptx 第69页
- **答案**：错误

**解析：** 不同任务的 this 是不同锁，无法形成共同互斥。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/Object.html

### JAVA-400（判断题）

- **知识点**：显式锁
- **难度**：中
- **课件依据**：Java基础-6-多线程.pptx 第72页
- **答案**：正确

**解析：** 显式锁不会由语言结构自动释放。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/concurrent/locks/Lock.html

### JAVA-401（判断题）

- **知识点**：条件等待
- **难度**：中
- **课件依据**：Java基础-6-多线程.pptx 第75页
- **答案**：错误

**解析：** 线程必须在 while 中重新检查谓词，以应对竞争和虚假唤醒。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/concurrent/locks/Lock.html

### JAVA-402（判断题）

- **知识点**：wait/notify
- **难度**：中
- **课件依据**：Java基础-6-多线程.pptx 第75页
- **答案**：错误

**解析：** 等待者仅获得重新竞争监视器的资格，同一时刻仍只有一个线程持锁。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/Object.html

### JAVA-403（判断题）

- **知识点**：Semaphore
- **难度**：中
- **课件依据**：Java基础-6-多线程.pptx 第78页
- **答案**：正确

**解析：** 多释放会虚增许可，漏释放会造成容量泄漏。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/concurrent/package-summary.html

### JAVA-404（判断题）

- **知识点**：死锁
- **难度**：中
- **课件依据**：Java基础-6-多线程.pptx 第80页
- **答案**：正确

**解析：** 统一锁顺序是常见的死锁预防措施。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/concurrent/locks/Lock.html

### JAVA-405（判断题）

- **知识点**：同步与原子性
- **难度**：中
- **课件依据**：Java基础-6-多线程.pptx 第58页
- **答案**：正确

**解析：** 自增仍包含可交错的读取、计算和写回。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/concurrent/package-summary.html

# 第7讲：UML 类图

## 单选题

### JAVA-406（单选题）

- **知识点**：可见性标记
- **难度**：易
- **课件依据**：Java基础-7-UML类图.pptx 第3页
- **答案**：A

**解析：** UML 类图用减号表示私有成员。

**选项辨析：**

- A：正确。正确。
- B：错误。public 使用 +。
- C：错误。protected 使用 #。
- D：错误。package 常用 ~。

**官方参考：** https://www.omg.org/spec/UML/

### JAVA-407（单选题）

- **知识点**：成员书写
- **难度**：中
- **课件依据**：Java基础-7-UML类图.pptx 第3页
- **答案**：A

**解析：** 方法签名冒号后的最后一项表示返回类型。

**选项辨析：**

- A：正确。解析正确。
- B：错误。可见性写在名称前。
- C：错误。默认值通常用 =。
- D：错误。继承关系由连线表达。

**官方参考：** https://www.omg.org/spec/UML/

### JAVA-408（单选题）

- **知识点**：静态成员
- **难度**：易
- **课件依据**：Java基础-7-UML类图.pptx 第3页
- **答案**：A

**解析：** 下划线是静态成员的常用 UML 表示。

**选项辨析：**

- A：正确。正确。
- B：错误。抽象通常用斜体。
- C：错误。final 并非用下划线表达。
- D：错误。构造器也不由下划线判定。

**官方参考：** https://www.omg.org/spec/UML/

### JAVA-409（单选题）

- **知识点**：泛化关系
- **难度**：中
- **课件依据**：Java基础-7-UML类图.pptx 第5页
- **答案**：A

**解析：** “is-a”继承语义由泛化关系表达。

**选项辨析：**

- A：正确。符合子类到父类关系。
- B：错误。组合表达强整体-部分。
- C：错误。依赖更弱。
- D：错误。聚合是弱整体-部分。

**官方参考：** https://www.omg.org/spec/UML/

### JAVA-410（单选题）

- **知识点**：接口实现
- **难度**：中
- **课件依据**：Java基础-7-UML类图.pptx 第6页
- **答案**：A

**解析：** 类履行接口契约使用 realization（实现）关系。

**选项辨析：**

- A：正确。语义正确。
- B：错误。关联表示长期联系。
- C：错误。组合表示生命周期绑定。
- D：错误。仅使用某类不等于实现接口。

**官方参考：** https://www.omg.org/spec/UML/

### JAVA-411（单选题）

- **知识点**：依赖
- **难度**：中
- **课件依据**：Java基础-7-UML类图.pptx 第7页
- **答案**：A

**解析：** 临时使用另一类型通常建模为依赖。

**选项辨析：**

- A：正确。符合短期 use-a。
- B：错误。不存在生命周期拥有。
- C：错误。也没有整体-部分语义。
- D：错误。不是继承。

**官方参考：** https://www.omg.org/spec/UML/

### JAVA-412（单选题）

- **知识点**：关联多重性
- **难度**：难
- **课件依据**：Java基础-7-UML类图.pptx 第8页
- **答案**：A

**解析：** 0..* 同时表达可以没有员工也可以有多个。

**选项辨析：**

- A：正确。范围正确。
- B：错误。只允许一个。
- C：错误。最多一个。
- D：错误。恰好一个。

**官方参考：** https://www.omg.org/spec/UML/

## 多选题

### JAVA-413（多选题）

- **知识点**：类图标记 / 成员
- **难度**：中
- **课件依据**：Java基础-7-UML类图.pptx 第3页
- **答案**：A、B、C

**解析：** 可见性符号与静态/抽象字体标记各有含义。

**选项辨析：**

- A：正确。正确。
- B：正确。正确。
- C：正确。正确。
- D：错误。斜体通常表示抽象，下划线表示 static。

**官方参考：** https://www.omg.org/spec/UML/

### JAVA-414（多选题）

- **知识点**：类关系 / 语义
- **难度**：中
- **课件依据**：Java基础-7-UML类图.pptx 第4页
- **答案**：A、B、C

**解析：** 泛化、实现、依赖、关联、聚合、组合都是结构建模关系。

**选项辨析：**

- A：正确。属于。
- B：正确。属于。
- C：正确。属于。
- D：错误。编译是构建过程。

**官方参考：** https://www.omg.org/spec/UML/

### JAVA-415（多选题）

- **知识点**：依赖 / 关联
- **难度**：难
- **课件依据**：Java基础-7-UML类图.pptx 第7页
- **答案**：A、B、C

**解析：** 关系强弱应根据对象间真实职责和生命周期判断。

**选项辨析：**

- A：正确。典型依赖。
- B：正确。典型关联。
- C：正确。语义通常更强。
- D：错误。同文件不构成组合。

**官方参考：** https://www.omg.org/spec/UML/

### JAVA-416（多选题）

- **知识点**：聚合 / 组合
- **难度**：难
- **课件依据**：Java基础-7-UML类图.pptx 第9页
- **答案**：A、B、C

**解析：** 两种关系的核心差异是生命周期依赖强度，菱形位于整体端。

**选项辨析：**

- A：正确。正确。
- B：正确。正确。
- C：正确。正确。
- D：错误。菱形应在整体端。

**官方参考：** https://www.omg.org/spec/UML/

### JAVA-417（多选题）

- **知识点**：泛化 / 实现
- **难度**：中
- **课件依据**：Java基础-7-UML类图.pptx 第5页
- **答案**：A、B、C

**解析：** 继承、接口契约和临时使用分别有不同关系。

**选项辨析：**

- A：正确。正确。
- B：正确。正确。
- C：正确。正确。
- D：错误。整体-部分不应画成继承。

**官方参考：** https://www.omg.org/spec/UML/

## 判断题

### JAVA-418（判断题）

- **知识点**：静态标记
- **难度**：易
- **课件依据**：Java基础-7-UML类图.pptx 第3页
- **答案**：正确

**解析：** 正确。该视觉标记用于区分类级成员与实例成员。

**官方参考：** https://www.omg.org/spec/UML/

### JAVA-419（判断题）

- **知识点**：聚合生命周期
- **难度**：中
- **课件依据**：Java基础-7-UML类图.pptx 第9页
- **答案**：错误

**解析：** 错误。这描述的是更强的组合语义；聚合的部分可独立存在。

**官方参考：** https://www.omg.org/spec/UML/

### JAVA-420（判断题）

- **知识点**：组合菱形
- **难度**：中
- **课件依据**：Java基础-7-UML类图.pptx 第10页
- **答案**：正确

**解析：** 正确。实心菱形表达强整体-部分及生命周期所有权。

**官方参考：** https://www.omg.org/spec/UML/

# 第8讲：输入输出与数据库连接

## 单选题

### JAVA-421（单选题）

- **知识点**：输入流与输出流
- **难度**：易
- **课件依据**：Java基础-8-输入输出、数据库连接.pptx 第3页
- **答案**：A

**解析：** 流的方向以程序为参照：数据进入程序就是输入。

**选项辨析：**

- A：正确。方向正确。
- B：错误。输出是数据离开程序。
- C：错误。顺序读取也仍是输入流。
- D：错误。事务不是 I/O 流方向。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/io/package-summary.html

### JAVA-422（单选题）

- **知识点**：字节流与字符流
- **难度**：易
- **课件依据**：Java基础-8-输入输出、数据库连接.pptx 第5页
- **答案**：B

**解析：** 图片是二进制数据，字节流不会引入字符解码与编码。

**选项辨析：**

- A：错误。字符解码可能破坏二进制。
- B：正确。字节流适合二进制复制。
- C：错误。不是基础二进制流体系。
- D：错误。Console 面向终端交互。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/io/InputStream.html

### JAVA-423（单选题）

- **知识点**：字符流与编码
- **难度**：中
- **课件依据**：Java基础-8-输入输出、数据库连接.pptx 第5页
- **答案**：B

**解析：** InputStreamReader 是字节到字符的解码桥梁，并可指定 Charset。

**选项辨析：**

- A：错误。只得到字节。
- B：正确。明确完成 UTF-8 解码。
- C：错误。数据流面向基本类型二进制格式。
- D：错误。对象流面向序列化格式。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/io/InputStreamReader.html

### JAVA-424（单选题）

- **知识点**：read 返回值
- **难度**：中
- **课件依据**：Java基础-8-输入输出、数据库连接.pptx 第9页
- **答案**：B

**解析：** read 的 -1 是输入结束标志，正常字节值以非负 int 返回。

**选项辨析：**

- A：错误。字节 255 返回非负值。
- B：正确。表示 EOF。
- C：错误。与换行无关。
- D：错误。EOF 不等于已关闭。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/io/InputStream.html#read()

### JAVA-425（单选题）

- **知识点**：缓冲流
- **难度**：易
- **课件依据**：Java基础-8-输入输出、数据库连接.pptx 第13页
- **答案**：B

**解析：** 缓冲流批量访问底层资源，减少频繁系统 I/O。

**选项辨析：**

- A：错误。不是对象反序列化。
- B：正确。这是缓冲的主要价值。
- C：错误。不改变文件生命周期。
- D：错误。异常仍需处理。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/io/BufferedInputStream.html

### JAVA-426（单选题）

- **知识点**：处理流
- **难度**：中
- **课件依据**：Java基础-8-输入输出、数据库连接.pptx 第13页
- **答案**：A

**解析：** FileReader 连接文件节点，BufferedReader 在其上增加缓冲和 readLine。

**选项辨析：**

- A：正确。准确描述流链接。
- B：错误。二者共同组成一条流链。
- C：错误。仍是字符流。
- D：错误。与数据库无关。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/io/BufferedReader.html

### JAVA-427（单选题）

- **知识点**：资源关闭
- **难度**：中
- **课件依据**：Java基础-8-输入输出、数据库连接.pptx 第19页
- **答案**：B

**解析：** try-with-resources 会对实现 AutoCloseable 的资源执行确定性关闭。

**选项辨析：**

- A：错误。异常可能跳过末尾。
- B：正确。语言结构保证退出时关闭。
- C：错误。终结机制不可靠。
- D：错误。GC 不能代替关闭。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/AutoCloseable.html

### JAVA-428（单选题）

- **知识点**：关闭包装流
- **难度**：中
- **课件依据**：Java基础-8-输入输出、数据库连接.pptx 第15页
- **答案**：A

**解析：** 过滤/包装 writer 的 close 会刷新并向下关闭所包装的 writer。

**选项辨析：**

- A：正确。关闭沿流链传播。
- B：错误。不是通常契约。
- C：错误。关闭不删除文件。
- D：错误。close 不仅 flush。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/io/BufferedWriter.html#close()

### JAVA-429（单选题）

- **知识点**：flush
- **难度**：中
- **课件依据**：Java基础-8-输入输出、数据库连接.pptx 第10页
- **答案**：B

**解析：** flush 请求把已缓冲输出写向目标，不等于关闭流。

**选项辨析：**

- A：错误。mark 标记输入位置。
- B：正确。用于刷新输出。
- C：错误。reset 重置输入位置。
- D：错误。available 查询可读估计。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/io/Flushable.html#flush()

### JAVA-430（单选题）

- **知识点**：DataInputStream
- **难度**：中
- **课件依据**：Java基础-8-输入输出、数据库连接.pptx 第21页
- **答案**：B

**解析：** 数据输入输出流应以相同类型和顺序配对读写。

**选项辨析：**

- A：错误。不是文本行格式。
- B：正确。与 writeInt 配对。
- C：错误。对象流方法。
- D：错误。Scanner 的文本解析方法。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/io/DataInputStream.html#readInt()

### JAVA-431（单选题）

- **知识点**：标准流
- **难度**：易
- **课件依据**：Java基础-8-输入输出、数据库连接.pptx 第22页
- **答案**：C

**解析：** System.err 是标准错误 PrintStream。

**选项辨析：**

- A：错误。这是标准输入。
- B：错误。这是标准输出。
- C：正确。对应 stderr。
- D：错误。返回控制台对象。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/System.html#err

### JAVA-432（单选题）

- **知识点**：Console
- **难度**：中
- **课件依据**：Java基础-8-输入输出、数据库连接.pptx 第24页
- **答案**：B

**解析：** readPassword 旨在安全地获取不回显的字符数组。

**选项辨析：**

- A：错误。与 JDBC 无关。
- B：正确。这是主要用途。
- C：错误。不负责持久化或加密。
- D：错误。某些环境没有控制台。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/io/Console.html#readPassword()

### JAVA-433（单选题）

- **知识点**：Scanner
- **难度**：中
- **课件依据**：Java基础-8-输入输出、数据库连接.pptx 第25页
- **答案**：B

**解析：** nextInt 读取标记但通常保留行尾，nextLine 随后消费当前行剩余部分。

**选项辨析：**

- A：错误。数据未删除。
- B：正确。这是常见交互陷阱。
- C：错误。Scanner 可连续读。
- D：错误。nextLine 返回文本。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/Scanner.html

### JAVA-434（单选题）

- **知识点**：格式化输出
- **难度**：易
- **课件依据**：Java基础-8-输入输出、数据库连接.pptx 第26页
- **答案**：B

**解析：** f 转换用于浮点数，.2 指定小数精度。

**选项辨析：**

- A：错误。d 用于整数。
- B：正确。格式正确。
- C：错误。不是有效精度语法。
- D：错误。c 用于字符。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/Formatter.html

### JAVA-435（单选题）

- **知识点**：对象序列化
- **难度**：易
- **课件依据**：Java基础-8-输入输出、数据库连接.pptx 第29页
- **答案**：B

**解析：** Serializable 是标记接口，用于声明对象可参与默认序列化。

**选项辨析：**

- A：错误。并发执行接口。
- B：正确。满足序列化前提。
- C：错误。关闭资源接口。
- D：错误。排序接口。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/io/Serializable.html

### JAVA-436（单选题）

- **知识点**：transient
- **难度**：中
- **课件依据**：Java基础-8-输入输出、数据库连接.pptx 第30页
- **答案**：A

**解析：** transient 字段不进入默认对象序列化状态。

**选项辨析：**

- A：正确。含义正确。
- B：错误。final 才限制赋值。
- C：错误。两个修饰符不同。
- D：错误。与数据库无关。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/io/Serializable.html

### JAVA-437（单选题）

- **知识点**：File 抽象路径
- **难度**：易
- **课件依据**：Java基础-8-输入输出、数据库连接.pptx 第31页
- **答案**：B

**解析：** File 构造器只表示路径，不执行实际创建。

**选项辨析：**

- A：错误。需调用创建或输出操作。
- B：正确。准确描述。
- C：错误。File 不读取内容。
- D：错误。不会自动建目录。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/io/File.html

### JAVA-438（单选题）

- **知识点**：mkdir 与 mkdirs
- **难度**：中
- **课件依据**：Java基础-8-输入输出、数据库连接.pptx 第33页
- **答案**：C

**解析：** mkdirs 可连同不存在的父目录一起创建。

**选项辨析：**

- A：错误。创建文件。
- B：错误。只创建单级且依赖父目录。
- C：正确。符合需求。
- D：错误。列出根目录。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/io/File.html#mkdirs()

### JAVA-439（单选题）

- **知识点**：File 删除目录
- **难度**：中
- **课件依据**：Java基础-8-输入输出、数据库连接.pptx 第33页
- **答案**：B

**解析：** File.delete 不递归删除非空目录。

**选项辨析：**

- A：错误。不会递归。
- B：正确。符合契约的典型失败表现。
- C：错误。与 JDBC 无关。
- D：错误。不保证回收站语义。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/io/File.html#delete()

### JAVA-440（单选题）

- **知识点**：Path 与 Files
- **难度**：中
- **课件依据**：Java基础-8-输入输出、数据库连接.pptx 第31页
- **答案**：A

**解析：** Path 表示路径，Files 提供大量静态文件操作。

**选项辨析：**

- A：正确。职责匹配。
- B：错误。混合 I/O 与 JDBC。
- C：错误。Statement 属于 JDBC。
- D：错误。类型职责不匹配。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/nio/file/Files.html

### JAVA-441（单选题）

- **知识点**：随机访问文件
- **难度**：中
- **课件依据**：Java基础-8-输入输出、数据库连接.pptx 第37页
- **答案**：B

**解析：** seek 按相对文件开头的字节偏移定位。

**选项辨析：**

- A：错误。不会必然截断。
- B：正确。定义正确。
- C：错误。单位不是行。
- D：错误。不涉及排序。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/io/RandomAccessFile.html#seek(long)

### JAVA-442（单选题）

- **知识点**：JDBC 连接
- **难度**：易
- **课件依据**：Java基础-8-输入输出、数据库连接.pptx 第48页
- **答案**：A

**解析：** Connection 表示与特定数据库的连接和事务上下文。

**选项辨析：**

- A：正确。职责正确。
- B：错误。文件路径对象。
- C：错误。文本扫描器。
- D：错误。终端对象。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.sql/java/sql/Connection.html

### JAVA-443（单选题）

- **知识点**：JDBC 执行方法
- **难度**：中
- **课件依据**：Java基础-8-输入输出、数据库连接.pptx 第48页
- **答案**：B

**解析：** executeQuery 用于产生单个 ResultSet 的查询。

**选项辨析：**

- A：错误。用于更新计数类 SQL。
- B：正确。返回 ResultSet。
- C：错误。属于对象流。
- D：错误。属于 File。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.sql/java/sql/Statement.html#executeQuery(java.lang.String)

### JAVA-444（单选题）

- **知识点**：ResultSet 游标
- **难度**：中
- **课件依据**：Java基础-8-输入输出、数据库连接.pptx 第48页
- **答案**：A

**解析：** ResultSet 初始游标位于第一行之前，next 才移动到首行。

**选项辨析：**

- A：正确。正确移动游标。
- B：错误。事务提交不移动结果集。
- C：错误。RandomAccessFile 方法。
- D：错误。输出流方法。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.sql/java/sql/ResultSet.html#next()

### JAVA-445（单选题）

- **知识点**：PreparedStatement
- **难度**：中
- **课件依据**：Java基础-8-输入输出、数据库连接.pptx 第48页
- **答案**：B

**解析：** 参数绑定使输入作为值处理，而不是 SQL 结构的一部分。

**选项辨析：**

- A：错误。恶意输入可改变语义。
- B：正确。这是首选做法。
- C：错误。与注入无关。
- D：错误。批处理不消除拼接风险。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.sql/java/sql/PreparedStatement.html

### JAVA-446（单选题）

- **知识点**：JDBC 事务
- **难度**：难
- **课件依据**：Java基础-8-输入输出、数据库连接.pptx 第48页
- **答案**：A

**解析：** 关闭自动提交后，可在两条更新成功时 commit，异常时 rollback。

**选项辨析：**

- A：正确。建立显式事务边界。
- B：错误。只读会阻止更新。
- C：错误。关闭不能表达成功事务。
- D：错误。警告与原子性无关。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.sql/java/sql/Connection.html#setAutoCommit(boolean)

### JAVA-447（单选题）

- **知识点**：事务回滚
- **难度**：难
- **课件依据**：Java基础-8-输入输出、数据库连接.pptx 第48页
- **答案**：B

**解析：** rollback 撤销当前未提交事务的更改。

**选项辨析：**

- A：错误。会提交部分更改。
- B：正确。符合失败处理。
- C：错误。不撤销更新。
- D：错误。查询不回滚数据。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.sql/java/sql/Connection.html#rollback()

### JAVA-448（单选题）

- **知识点**：SQL 场景
- **难度**：中
- **课件依据**：Java基础-8-输入输出、数据库连接.pptx 第44页
- **答案**：B

**解析：** UPDATE 配合 SET 和 WHERE 修改目标记录。

**选项辨析：**

- A：错误。只查询。
- B：正确。语义正确。
- C：错误。会删除记录。
- D：错误。修改表结构。

**官方参考：** https://docs.oracle.com/javase/tutorial/jdbc/basics/

## 多选题

### JAVA-449（多选题）

- **知识点**：字节流 / 字符流
- **难度**：中
- **课件依据**：Java基础-8-输入输出、数据库连接.pptx 第5页
- **答案**：A、B、C

**解析：** 字节流处理原始字节，Reader/Writer 处理字符；对象图需 ObjectOutputStream。

**选项辨析：**

- A：正确。避免字符转换。
- B：正确。Reader 处理字符。
- C：正确。定义正确。
- D：错误。Writer 不提供 writeObject。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/io/package-summary.html

### JAVA-450（多选题）

- **知识点**：缓冲 / 资源关闭
- **难度**：中
- **课件依据**：Java基础-8-输入输出、数据库连接.pptx 第18页
- **答案**：A、B、C

**解析：** 缓冲改善访问粒度，但不取消 I/O 失败可能。

**选项辨析：**

- A：正确。无需关闭即可主动刷新。
- B：正确。关闭会处理缓冲。
- C：正确。主要性能收益。
- D：错误。异常仍可能发生。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/io/BufferedOutputStream.html

### JAVA-451（多选题）

- **知识点**：try-with-resources / 异常处理
- **难度**：中
- **课件依据**：Java基础-8-输入输出、数据库连接.pptx 第19页
- **答案**：A、B、C

**解析：** I/O 和 JDBC 资源均实现 AutoCloseable；基本类型不是资源对象。

**选项辨析：**

- A：正确。可自动关闭。
- B：正确。Connection 可关闭。
- C：正确。Statement 可关闭。
- D：错误。int 不实现接口。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/AutoCloseable.html

### JAVA-452（多选题）

- **知识点**：处理流 / 流链接
- **难度**：中
- **课件依据**：Java基础-8-输入输出、数据库连接.pptx 第15页
- **答案**：A、B、D

**解析：** 处理流基于底层流增加能力，底层数据源不一定是文件。

**选项辨析：**

- A：正确。构造器常接收流。
- B：正确。典型用途。
- C：错误。也可连接网络或内存。
- D：正确。资源应整体释放。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/io/FilterInputStream.html

### JAVA-453（多选题）

- **知识点**：Scanner / 命令行输入
- **难度**：中
- **课件依据**：Java基础-8-输入输出、数据库连接.pptx 第25页
- **答案**：A、B、C

**解析：** Scanner 提供 token 与行读取；关闭会关闭其可关闭的底层输入源。

**选项辨析：**

- A：正确。默认规则。
- B：正确。类型解析方法。
- C：正确。行读取语义。
- D：错误。关闭可能传播到底层。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/Scanner.html

### JAVA-454（多选题）

- **知识点**：对象序列化 / transient
- **难度**：难
- **课件依据**：Java基础-8-输入输出、数据库连接.pptx 第29页
- **答案**：A、B、C

**解析：** 序列化支持对象读写，但版本演进与长期格式需谨慎设计。

**选项辨析：**

- A：正确。标记可序列化。
- B：正确。用于排除字段。
- C：正确。API 返回 Object。
- D：错误。类演进可能带来兼容问题。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/io/ObjectInputStream.html

### JAVA-455（多选题）

- **知识点**：File / 文件系统
- **难度**：中
- **课件依据**：Java基础-8-输入输出、数据库连接.pptx 第34页
- **答案**：A、B、C

**解析：** File 对象只封装路径；存在性和类别需查询。

**选项辨析：**

- A：正确。用 exists。
- B：正确。用 isFile。
- C：正确。用 isDirectory。
- D：错误。静态类型已由声明确定。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/io/File.html

### JAVA-456（多选题）

- **知识点**：Path / Files
- **难度**：中
- **课件依据**：Java基础-8-输入输出、数据库连接.pptx 第31页
- **答案**：A、B、C

**解析：** Path 是路径表示，实际创建需调用 Files 的相应操作。

**选项辨析：**

- A：正确。职责正确。
- B：正确。查询方法。
- C：正确。操作方法。
- D：错误。仅构造路径不产生文件。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/nio/file/Path.html

### JAVA-457（多选题）

- **知识点**：随机访问 / 文件指针
- **难度**：难
- **课件依据**：Java基础-8-输入输出、数据库连接.pptx 第38页
- **答案**：A、B、C

**解析：** 其核心能力正是可定位后读写。

**选项辨析：**

- A：正确。支持任意定位。
- B：正确。可查询偏移。
- C：正确。读写推进指针。
- D：错误。并非只能顺序访问。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/io/RandomAccessFile.html

### JAVA-458（多选题）

- **知识点**：JDBC 对象 / 资源生命周期
- **难度**：易
- **课件依据**：Java基础-8-输入输出、数据库连接.pptx 第48页
- **答案**：A、B、C

**解析：** 连接、语句和结果集构成查询主链。

**选项辨析：**

- A：正确。代表数据库会话。
- B：正确。执行 SQL。
- C：正确。承载查询行。
- D：错误。属于对象序列化。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.sql/java/sql/package-summary.html

### JAVA-459（多选题）

- **知识点**：Statement / SQL 执行
- **难度**：中
- **课件依据**：Java基础-8-输入输出、数据库连接.pptx 第48页
- **答案**：A、B、C

**解析：** 数据变更语句使用 executeUpdate；SELECT 通常使用 executeQuery。

**选项辨析：**

- A：正确。插入更新计数。
- B：正确。修改更新计数。
- C：正确。删除更新计数。
- D：错误。查询返回结果集。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.sql/java/sql/Statement.html#executeUpdate(java.lang.String)

### JAVA-460（多选题）

- **知识点**：ResultSet / 游标
- **难度**：中
- **课件依据**：Java基础-8-输入输出、数据库连接.pptx 第48页
- **答案**：A、B、C

**解析：** 初始位置在第一行之前，成功 next 后方可读取当前行。

**选项辨析：**

- A：正确。标准遍历方式。
- B：正确。游标有效。
- C：正确。支持标签读取。
- D：错误。初始不在首行。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.sql/java/sql/ResultSet.html

### JAVA-461（多选题）

- **知识点**：PreparedStatement / SQL 安全
- **难度**：难
- **课件依据**：Java基础-8-输入输出、数据库连接.pptx 第48页
- **答案**：A、B、C

**解析：** 占位符用于数据值，不用于 SQL 标识符或语法片段。

**选项辨析：**

- A：正确。输入按值处理。
- B：正确。便于复用。
- C：正确。类型化绑定。
- D：错误。表名需白名单等方式构造。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.sql/java/sql/PreparedStatement.html

### JAVA-462（多选题）

- **知识点**：JDBC 事务 / 一致性
- **难度**：难
- **课件依据**：Java基础-8-输入输出、数据库连接.pptx 第48页
- **答案**：A、B、C

**解析：** 显式事务需统一提交或回滚，并确保连接释放。

**选项辨析：**

- A：正确。完成原子提交。
- B：正确。撤销未提交更改。
- C：正确。防止连接泄漏。
- D：错误。会破坏事务边界并可能提交。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.sql/java/sql/Connection.html

### JAVA-463（多选题）

- **知识点**：SQL / 数据操作
- **难度**：中
- **课件依据**：Java基础-8-输入输出、数据库连接.pptx 第44页
- **答案**：A、B

**解析：** 无 WHERE 的 UPDATE/DELETE 面向所有行；SELECT 不修改数据。

**选项辨析：**

- A：正确。会更新全部行。
- B：正确。会删除全部行。
- C：错误。只读取。
- D：错误。定义结构。

**官方参考：** https://docs.oracle.com/javase/tutorial/jdbc/basics/

### JAVA-464（多选题）

- **知识点**：JDBC 关闭顺序 / 资源管理
- **难度**：中
- **课件依据**：Java基础-8-输入输出、数据库连接.pptx 第48页
- **答案**：A、B、C

**解析：** JDBC 资源占用数据库和网络资源；String 无 close。

**选项辨析：**

- A：正确。释放游标资源。
- B：正确。释放语句资源。
- C：正确。归还或关闭连接。
- D：错误。普通字符串不是资源。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.sql/java/sql/package-summary.html

## 判断题

### JAVA-465（判断题）

- **知识点**：流方向
- **难度**：易
- **课件依据**：Java基础-8-输入输出、数据库连接.pptx 第3页
- **答案**：正确

**解析：** 进入程序的是输入，离开程序的是输出。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/io/package-summary.html

### JAVA-466（判断题）

- **知识点**：字符流
- **难度**：易
- **课件依据**：Java基础-8-输入输出、数据库连接.pptx 第5页
- **答案**：正确

**解析：** 两套抽象分别处理字符与原始字节。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/io/package-summary.html

### JAVA-467（判断题）

- **知识点**：缓冲流
- **难度**：中
- **课件依据**：Java基础-8-输入输出、数据库连接.pptx 第13页
- **答案**：错误

**解析：** 缓冲改变访问方式，不消除设备、文件或解码错误。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/io/BufferedReader.html

### JAVA-468（判断题）

- **知识点**：资源关闭
- **难度**：中
- **课件依据**：Java基础-8-输入输出、数据库连接.pptx 第19页
- **答案**：错误

**解析：** 外部资源需要确定性关闭，不能依赖 GC 时机。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/AutoCloseable.html

### JAVA-469（判断题）

- **知识点**：序列化
- **难度**：中
- **课件依据**：Java基础-8-输入输出、数据库连接.pptx 第30页
- **答案**：正确

**解析：** transient 用于排除默认序列化字段。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/io/Serializable.html

### JAVA-470（判断题）

- **知识点**：File
- **难度**：中
- **课件依据**：Java基础-8-输入输出、数据库连接.pptx 第31页
- **答案**：错误

**解析：** File 构造仅生成抽象路径对象。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/io/File.html

### JAVA-471（判断题）

- **知识点**：随机访问
- **难度**：难
- **课件依据**：Java基础-8-输入输出、数据库连接.pptx 第37页
- **答案**：正确

**解析：** seek 提供随机定位能力。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/io/RandomAccessFile.html#seek(long)

### JAVA-472（判断题）

- **知识点**：ResultSet
- **难度**：难
- **课件依据**：Java基础-8-输入输出、数据库连接.pptx 第48页
- **答案**：错误

**解析：** 初始游标位于第一行之前。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.sql/java/sql/ResultSet.html

### JAVA-473（判断题）

- **知识点**：PreparedStatement
- **难度**：难
- **课件依据**：Java基础-8-输入输出、数据库连接.pptx 第48页
- **答案**：错误

**解析：** 字符串拼接可能让输入改变 SQL 结构。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.sql/java/sql/PreparedStatement.html

### JAVA-474（判断题）

- **知识点**：JDBC 事务
- **难度**：难
- **课件依据**：Java基础-8-输入输出、数据库连接.pptx 第48页
- **答案**：正确

**解析：** 这构成常见的原子事务处理方式。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.sql/java/sql/Connection.html

### JAVA-475（判断题）

- **知识点**：SQL
- **难度**：难
- **课件依据**：Java基础-8-输入输出、数据库连接.pptx 第44页
- **答案**：正确

**解析：** DELETE 操作行数据；DROP TABLE 才删除表结构。

**官方参考：** https://docs.oracle.com/javase/tutorial/jdbc/basics/

# 第9讲：反射机制与网络编程

## 单选题

### JAVA-476（单选题）

- **知识点**：Class 对象获取
- **难度**：易
- **课件依据**：Java基础-9-反射机制、网络编程.pptx 第9页
- **答案**：A

**解析：** 类字面量可直接取得该类型对应的 Class 对象。

**选项辨析：**

- A：正确。语法正确且不会实例化 Order。
- B：错误。Class 不能这样构造。
- C：错误。不存在该通用方法。
- D：错误。不是 Class 获取方式。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/Class.html

### JAVA-477（单选题）

- **知识点**：动态类加载
- **难度**：中
- **课件依据**：Java基础-9-反射机制、网络编程.pptx 第9页
- **答案**：A

**解析：** Class.forName 可按运行时字符串定位并初始化类。

**选项辨析：**

- A：正确。适合动态配置场景。
- B：错误。得到的是 String 的 Class。
- C：错误。Class 无公开构造器。
- D：错误。System 无此方法。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/Class.html

### JAVA-478（单选题）

- **知识点**：对象类型检查
- **难度**：易
- **课件依据**：Java基础-9-反射机制、网络编程.pptx 第4页
- **答案**：A

**解析：** Object.getClass 返回对象实际运行时类型。

**选项辨析：**

- A：正确。正确。
- B：错误。类字面量不能用于对象变量。
- C：错误。无此标准方法。
- D：错误。无此通用方法。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/Class.html

### JAVA-479（单选题）

- **知识点**：反射实例化
- **难度**：中
- **课件依据**：Java基础-9-反射机制、网络编程.pptx 第10页
- **答案**：B

**解析：** 应先取得目标 Constructor，再调用其 newInstance；Class.newInstance 已过时。

**选项辨析：**

- A：错误。该旧方法已弃用且异常语义较差。
- B：正确。这是推荐方式。
- C：错误。类型变量不能这样 new。
- D：错误。无此 API。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/reflect/package-summary.html

### JAVA-480（单选题）

- **知识点**：字段发现
- **难度**：中
- **课件依据**：Java基础-9-反射机制、网络编程.pptx 第12页
- **答案**：B

**解析：** getDeclaredFields 返回该类声明的字段，不包含继承字段。

**选项辨析：**

- A：错误。只返回可访问的 public 字段并考虑继承。
- B：正确。符合要求。
- C：错误。无此方法。
- D：错误。无此方法。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/Class.html

### JAVA-481（单选题）

- **知识点**：方法发现
- **难度**：难
- **课件依据**：Java基础-9-反射机制、网络编程.pptx 第13页
- **答案**：B

**解析：** 反射查找重载方法必须给出名称与形参类型序列。

**选项辨析：**

- A：错误。缺少参数类型。
- B：正确。签名信息完整。
- C：错误。该方法不接收名称。
- D：错误。缺少方法名。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/Class.html

### JAVA-482（单选题）

- **知识点**：构造器发现
- **难度**：中
- **课件依据**：Java基础-9-反射机制、网络编程.pptx 第14页
- **答案**：B

**解析：** getDeclaredConstructor 可发现本类声明的非 public 构造器；能否调用还受访问控制约束。

**选项辨析：**

- A：错误。只查 public 构造器。
- B：正确。符合发现需求。
- C：错误。构造器不是方法。
- D：错误。构造器不是字段。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/Class.html

### JAVA-483（单选题）

- **知识点**：注解发现
- **难度**：中
- **课件依据**：Java基础-9-反射机制、网络编程.pptx 第15页
- **答案**：A

**解析：** getDeclaredAnnotation 按注解类型读取直接声明的注解。

**选项辨析：**

- A：正确。语义匹配。
- B：错误。参数类型和目标均错误。
- C：错误。字段 API 不查注解。
- D：错误。加载注解类不读取标注。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/reflect/package-summary.html

### JAVA-484（单选题）

- **知识点**：Method.invoke
- **难度**：中
- **课件依据**：Java基础-9-反射机制、网络编程.pptx 第16页
- **答案**：A

**解析：** Method.invoke 的第一个实参是接收者，后续是方法参数。

**选项辨析：**

- A：正确。调用形式正确。
- B：错误。普通对象无通用 invoke。
- C：错误。Method 无 run。
- D：错误。Class 无该静态调用。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/reflect/package-summary.html

### JAVA-485（单选题）

- **知识点**：反射权衡
- **难度**：难
- **课件依据**：Java基础-9-反射机制、网络编程.pptx 第7页
- **答案**：B

**解析：** 反射适合动态扩展点，不应掩盖静态可知且高频的普通调用。

**选项辨析：**

- A：错误。可以调用 public 方法。
- B：正确。这是主要工程权衡。
- C：错误。合法反射代码可编译。
- D：错误。适用范围不限网络。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/reflect/package-summary.html

### JAVA-486（单选题）

- **知识点**：TCP 与 UDP
- **难度**：易
- **课件依据**：Java基础-9-反射机制、网络编程.pptx 第20页
- **答案**：B

**解析：** TCP 提供面向连接的可靠字节流。

**选项辨析：**

- A：错误。UDP 不保证到达与顺序。
- B：正确。符合需求。
- C：错误。不是应用传输选择。
- D：错误。不提供该会话语义。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/net/package-summary.html

### JAVA-487（单选题）

- **知识点**：TCP 服务器
- **难度**：中
- **课件依据**：Java基础-9-反射机制、网络编程.pptx 第30页
- **答案**：A

**解析：** 监听套接字接受连接后返回代表该连接端点的 Socket。

**选项辨析：**

- A：正确。后续从该 Socket 取输入输出流。
- B：错误。属于 UDP。
- C：错误。不是返回类型。
- D：错误。监听对象仍是原对象。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/net/package-summary.html

## 多选题

### JAVA-488（多选题）

- **知识点**：Class 对象获取 / 类型信息
- **难度**：易
- **课件依据**：Java基础-9-反射机制、网络编程.pptx 第9页
- **答案**：A、B、C

**解析：** 类字面量、实例 getClass 和按名称查找都是标准入口。

**选项辨析：**

- A：正确。直接按已知类型取得。
- B：正确。反映实际运行时类。
- C：正确。适合动态类名。
- D：错误。Class 不能公开构造。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/Class.html

### JAVA-489（多选题）

- **知识点**：反射成员 / Declared API
- **难度**：难
- **课件依据**：Java基础-9-反射机制、网络编程.pptx 第12页
- **答案**：A、B、D

**解析：** public/declared API 的范围不同，成员发现与访问授权也应区分。

**选项辨析：**

- A：正确。正确。
- B：正确。正确。
- C：错误。父类私有字段需查父类。
- D：正确。还受访问控制和模块边界影响。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/Class.html

### JAVA-490（多选题）

- **知识点**：反射调用 / 异常处理
- **难度**：难
- **课件依据**：Java基础-9-反射机制、网络编程.pptx 第16页
- **答案**：A、B、C

**解析：** 动态查找和调用把一部分错误推迟到运行期。

**选项辨析：**

- A：正确。可能抛查找异常。
- B：正确。可能遇到访问异常。
- C：正确。需检查包装异常。
- D：错误。字符串签名不受静态保证。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/reflect/package-summary.html

### JAVA-491（多选题）

- **知识点**：反射应用 / 设计权衡
- **难度**：中
- **课件依据**：Java基础-9-反射机制、网络编程.pptx 第5页
- **答案**：A、B、C

**解析：** 反射适合类型在运行时才确定的框架和扩展机制。

**选项辨析：**

- A：正确。典型 IoC 场景。
- B：正确。典型元数据处理。
- C：正确。典型插件场景。
- D：错误。静态调用更清晰。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/reflect/package-summary.html

### JAVA-492（多选题）

- **知识点**：TCP / 协议特性
- **难度**：中
- **课件依据**：Java基础-9-反射机制、网络编程.pptx 第20页
- **答案**：A、B、C

**解析：** TCP 为连接双方提供可靠的全双工字节流。

**选项辨析：**

- A：正确。建立连接。
- B：正确。核心保证。
- C：正确。没有消息边界。
- D：错误。更符合 UDP 多播语境。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/net/package-summary.html

### JAVA-493（多选题）

- **知识点**：UDP / 协议特性
- **难度**：中
- **课件依据**：Java基础-9-反射机制、网络编程.pptx 第21页
- **答案**：A、B、D

**解析：** UDP 无连接、保留报文边界，但不提供 TCP 式可靠与有序保证。

**选项辨析：**

- A：正确。正确。
- B：正确。正确。
- C：错误。UDP 不做 TCP 握手。
- D：正确。实时状态或媒体常采用。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/net/package-summary.html

### JAVA-494（多选题）

- **知识点**：IP 与端口 / 套接字地址
- **难度**：中
- **课件依据**：Java基础-9-反射机制、网络编程.pptx 第23页
- **答案**：A、B、C

**解析：** 网络端点由地址与端口等信息定位，独占绑定通常会冲突。

**选项辨析：**

- A：正确。承担网络定位。
- B：正确。承担进程内服务分用。
- C：正确。16 位范围。
- D：错误。绑定受协议和套接字选项约束。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/net/package-summary.html

### JAVA-495（多选题）

- **知识点**：Java 网络类 / 协议映射
- **难度**：易
- **课件依据**：Java基础-9-反射机制、网络编程.pptx 第27页
- **答案**：A、B、C

**解析：** TCP 套接字与 UDP 数据报 API 各有明确职责。

**选项辨析：**

- A：正确。正确。
- B：正确。正确。
- C：正确。正确。
- D：错误。DatagramSocket 用于收发 UDP 数据报。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/net/package-summary.html

## 判断题

### JAVA-496（判断题）

- **知识点**：Class.newInstance
- **难度**：中
- **课件依据**：Java基础-9-反射机制、网络编程.pptx 第10页
- **答案**：正确

**解析：** Constructor.newInstance 提供更清晰的构造器选择与异常语义。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/Class.html

### JAVA-497（判断题）

- **知识点**：反射封装
- **难度**：难
- **课件依据**：Java基础-9-反射机制、网络编程.pptx 第7页
- **答案**：错误

**解析：** 访问仍受访问检查、模块封装、安全策略和运行时配置等限制。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/reflect/package-summary.html

### JAVA-498（判断题）

- **知识点**：TCP 多客户端
- **难度**：中
- **课件依据**：Java基础-9-反射机制、网络编程.pptx 第32页
- **答案**：正确

**解析：** 这样监听与单连接处理解耦，可并发服务多个客户端。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/net/package-summary.html

### JAVA-499（判断题）

- **知识点**：UDP 可靠性
- **难度**：中
- **课件依据**：Java基础-9-反射机制、网络编程.pptx 第33页
- **答案**：错误

**解析：** UDP 发送 API 不提供端到端可靠到达或有序保证。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/net/package-summary.html

### JAVA-500（判断题）

- **知识点**：URL
- **难度**：中
- **课件依据**：Java基础-9-反射机制、网络编程.pptx 第28页
- **答案**：正确

**解析：** URL 表达资源定位信息，具体连接行为由协议处理器决定。

**官方参考：** https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/net/package-summary.html
