# Java 开发基础 500 题测试题 - 题目卷

> 依据 9 讲 Java 开发基础培训课件编制。共 500 题：单选 250 题、多选 150 题、判断 100 题。
> 逐题人工编写，脚本仅负责编号和格式导出。

## 作答说明

- 单选题：每题只有 1 个正确选项。
- 多选题：每题有 2-3 个正确选项，少选、多选或错选均不得分。
- 判断题：选择“正确”或“错误”。
- 本卷不含答案；请使用配套答案解析卷核对。

# 第1讲：Java 平台与开发入门

## 单选题

### JAVA-001（单选题）

新员工要同时编译并运行一个 Java 项目，应安装并使用哪一项？

A. 只包含字节码执行引擎的 JVM
B. 包含编译工具和运行环境的 JDK
C. 只包含标准类库的 JRE
D. 用于管理数据库连接的 JDBC

### JAVA-002（单选题）

执行 `javac Hello.java` 且编译成功后，最典型的直接产物是什么？

```java
javac Hello.java
```

A. Hello.class 字节码文件
B. Hello.exe 原生程序
C. Hello.sql 数据脚本
D. Hello.html API 页面

### JAVA-003（单选题）

当前目录已有 `Hello.class`，其类中包含标准 main 方法。启动该程序最合适的命令是哪一项？

```java
java Hello
```

A. javac Hello.class
B. java Hello.class
C. java Hello
D. jar Hello.java

### JAVA-004（单选题）

同一份 `Report.class` 要在 Windows 和 Linux 上运行，成立的关键前提是什么？

A. 两台机器必须使用完全相同型号的 CPU
B. 类文件必须先改名为不同后缀
C. 两台机器都有兼容该类文件版本的 Java 运行时
D. 源代码中不能出现任何对象

### JAVA-005（单选题）

程序第一次使用某个尚未加载的业务类时，JVM 中首先负责查找并定义该类的是哪一机制？

A. 垃圾收集器
B. 类加载器
C. Javadoc 工具
D. SQL 解析器

### JAVA-006（单选题）

JVM 在执行外部获得的类文件前进行字节码校验，主要目的是什么？

A. 把所有变量自动改成 public
B. 检查类文件结构和指令是否满足 JVM 安全约束
C. 将每个方法转换成 SQL
D. 保证业务逻辑一定没有缺陷

### JAVA-007（单选题）

创建 `new Employee()` 后，对象实例通常位于哪一区域，而当前方法的局部引用变量通常位于哪里？

```java
Employee e = new Employee();
```

A. 对象在堆，局部引用随当前线程栈帧管理
B. 对象在线程程序计数器，引用在磁盘
C. 对象和所有局部变量都在同一个全局栈
D. 对象在方法返回值寄存器，引用在数据库

### JAVA-008（单选题）

JVM 为每个线程维护独立程序计数器，最贴近其作用的描述是哪一项？

A. 记录当前线程正在执行的 JVM 指令位置
B. 保存应用创建的全部对象
C. 缓存所有网络响应正文
D. 保存整个进程唯一的数据库事务

### JAVA-009（单选题）

阅读 JVM 规范时，关于“方法区”的理解哪一项最准确？

A. 它是规范定义的逻辑区域，具体存储实现可由 JVM 决定
B. 它等同于每个线程的本地变量表
C. 它只保存当前方法的操作数栈
D. 它必须在所有 JVM 中固定映射到同一物理地址

### JAVA-010（单选题）

一个对象不再被任何活动引用链访问后，以下哪项结论最稳妥？

A. 它已经具备被垃圾回收的条件，但回收时机不由业务代码精确保证
B. 它会在下一条字节码执行前必然回收
C. 它仍会永久占用内存且 GC 无法处理
D. 必须调用 free(object) 才能释放

### JAVA-011（单选题）

代码调用 `System.gc()` 后，测试用例应作出哪种假设？

```java
System.gc();
```

A. 所有不可达对象已经同步回收完毕
B. 调用只是建议 JVM 进行垃圾收集，不能据此断言立即完成
C. 当前 JVM 必定退出并重新启动
D. 所有文件流会自动关闭

### JAVA-012（单选题）

服务运行一段时间后，某些热点方法被编译为本地机器码。该行为最可能来自哪一机制？

A. 类路径扫描
B. 即时编译器 JIT
C. Javadoc 注释处理
D. JAR 压缩算法

### JAVA-013（单选题）

团队讨论 Java SE 的开源实现与社区开发时，最相关的是哪一项目？

A. OpenJDK
B. OpenGL
C. OpenAPI Generator
D. SQLite

### JAVA-014（单选题）

构建工具提示找不到 JDK，而机器上已安装 JDK。检查 `JAVA_HOME` 时应重点确认什么？

A. 它是否指向 JDK 安装目录
B. 它是否等于某个主类全限定名
C. 它是否保存数据库口令
D. 它是否指向单个 javac 源文件

### JAVA-015（单选题）

终端执行 `javac -version` 报“command not found”，但用绝对路径可以运行。最直接的环境问题是什么？

A. PATH 没有包含对应 JDK 的 bin 目录
B. main 方法返回了 void
C. 源代码没有 package 语句
D. 垃圾回收器未启动

### JAVA-016（单选题）

需要根据源码中的文档注释生成可浏览的 API 说明，应使用哪个 JDK 工具？

A. java
B. javap
C. javadoc
D. jconsole

### JAVA-017（单选题）

准备把多个 `.class` 与资源文件打成一个可分发归档，最直接使用哪项工具？

A. jar
B. jdb
C. serialver
D. keytool

### JAVA-018（单选题）

某类声明 `public void main(String[] args)`，直接把它作为传统 Java 应用主类启动会怎样？

```java
public void main(String[] args) { }
```

A. 启动器把它当作标准入口并先自动创建对象
B. 因缺少 static，它不符合经典 main 入口约定
C. 因为返回 void，所以无法编译
D. args 会被自动改成 int[]

## 多选题

### JAVA-019（多选题）

为一台只负责运行已构建 JAR 的服务器制定环境说明，下列判断哪些合理？

A. 服务器仍需要能执行目标类文件版本的 Java 运行时
B. 只有源代码编辑器就足以运行 JAR
C. 若要在服务器现场重新编译源码，还需要 javac 等开发工具
D. 安装 JDBC 可以替代 JVM

### JAVA-020（多选题）

两个线程同时调用同一对象的方法。关于 JVM 运行时区域，哪些表述正确？

A. 两个线程可以访问同一堆对象
B. 每个线程有自己的 Java 虚拟机栈
C. 两个线程必须共用同一个程序计数器
D. 方法局部变量一律存放在全局共享区

### JAVA-021（多选题）

以下命令与用途的对应关系，哪些正确？

A. `javac App.java`：编译源文件
B. `java App`：尝试启动主类
C. `javadoc App.java`：删除类文件
D. `jar --create ...`：创建归档

### JAVA-022（多选题）

关于一个类从类文件到可用状态的过程，哪些说法符合 JVM 模型？

A. 加载阶段会依据类文件创建对应的 Class 表示
B. 验证属于链接过程的一部分
C. 类初始化一定发生在所有类加载之前
D. 解析可把运行时常量池中的符号引用转换为直接引用

### JAVA-023（多选题）

审核一个简单 Java 应用源文件时，哪些内容可以同时存在？

A. package 声明
B. import 声明
C. 类定义及其 main 方法
D. 在类定义外直接书写可执行的普通赋值语句

### JAVA-024（多选题）

把同一 Java 程序部署到另一操作系统前，哪些因素仍需要核对？

A. 目标运行时是否支持该类文件版本
B. 程序依赖的本地库是否有目标平台版本
C. 文件路径和默认字符集等环境差异
D. 只要是字节码，任何 Java 版本都无条件兼容

### JAVA-025（多选题）

某服务创建大量临时对象并频繁打开文件。哪些资源管理判断正确？

A. 临时对象的堆内存可由 GC 管理
B. 文件流应通过显式关闭或 try-with-resources 管理
C. 把流引用设为 null 就等价于及时关闭文件描述符
D. 不能用 GC 的具体发生时刻保证业务流程

### JAVA-026（多选题）

准备比较两个 Java 方法的性能时，哪些做法比“各运行一次看耗时”更可靠？

A. 考虑 JVM 预热和 JIT 优化的影响
B. 进行多次测量并控制输入
C. 认定第一次调用一定代表稳定吞吐
D. 尽量使用专门的基准测试工具

### JAVA-027（多选题）

一个 JAR 在开发机能运行，换机后提示找不到第三方类。排查时哪些方向合理？

A. 检查依赖 JAR 是否随部署提供
B. 检查启动时类路径或模块路径
C. 仅反复调用 System.gc
D. 确认打包方式是否已把依赖合并或正确声明

### JAVA-028（多选题）

团队选择生产 JDK 时，哪些信息值得纳入决策？

A. 应用和框架支持的 Java 版本
B. 供应商更新与安全补丁策略
C. 目标运行环境和运维工具兼容性
D. 只比较安装包图标颜色

## 判断题

### JAVA-029（判断题）

判断：一个源文件声明了顶层 `public class OrderService` 时，源文件名应为 `OrderService.java`。

- [ ] 正确
- [ ] 错误

### JAVA-030（判断题）

判断：标准 main 方法中的 `String[] args` 保存启动类名之后的命令行字符串参数。

- [ ] 正确
- [ ] 错误

### JAVA-031（判断题）

判断：`.class` 文件已经是某一型号 CPU 专用的原生机器码，因此不再需要 JVM。

- [ ] 正确
- [ ] 错误

### JAVA-032（判断题）

判断：`System.out` 是一个 PrintStream，`println` 在输出内容后还会写入行终止符。

- [ ] 正确
- [ ] 错误

### JAVA-033（判断题）

判断：由较新 JDK 编译出的类文件，在任意更旧的 Java 运行时上都保证直接运行。

- [ ] 正确
- [ ] 错误

### JAVA-034（判断题）

判断：只要某个 FileInputStream 最终会变成不可达对象，就可以省略所有显式关闭逻辑。

- [ ] 正确
- [ ] 错误

### JAVA-035（判断题）

判断：只面向运行的 Java 环境概念并不等同于包含 javac 等完整开发工具的 JDK。

- [ ] 正确
- [ ] 错误

# 第2讲：基本语法

## 单选题

### JAVA-036（单选题）

下列哪一个可以直接作为 Java 变量名？

A. 2ndValue
B. order-total
C. _cache2
D. false

### JAVA-037（单选题）

哪段声明能在同一条语句中完成常量定义和初始化？

A. final double PI = 3.14159;
B. double final PI;
C. const double PI = 3.14159;
D. final PI = 3.14159;

### JAVA-038（单选题）

下面代码的编译结果是什么？

```java
int x;
boolean ready = args.length > 0;
if (ready) x = 1;
System.out.println(x);
```

A. 输出 1
B. 输出 0
C. 因 x 可能未初始化而编译失败
D. 运行时抛出 NullPointerException

### JAVA-039（单选题）

执行后 a、b、c 的值依次是什么？

```java
int a, b, c;
a = b = c = 1;
```

A. 1、1、1
B. 0、0、1
C. 1、0、1
D. 编译失败

### JAVA-040（单选题）

代码输出什么？

```java
double value = 5 / 2;
System.out.println(value);
```

A. 2.5
B. 2.0
C. 3.0
D. 编译失败

### JAVA-041（单选题）

表达式 `-5 % 2` 的结果是多少？

A. -1
B. 1
C. -2
D. 0

### JAVA-042（单选题）

下列哪个字面量表示十进制 29？

A. 029
B. 0x29
C. 035
D. 29L

### JAVA-043（单选题）

要让下列声明通过编译，空白处最适合填什么？

```java
float rate = ____;
```

A. 1.25
B. 1.25D
C. 1.25F
D. (double)1.25

### JAVA-044（单选题）

代码结束后 result 和 i 分别是多少？

```java
int i = 2;
int result = 10 * i++;
```

A. 30、3
B. 20、3
C. 20、2
D. 30、2

### JAVA-045（单选题）

哪一项正确描述下面两行代码？

```java
byte b = 127;
b += 1;
b = b + 1;
```

A. 两行都编译失败
B. 第一行可编译，第二行编译失败
C. 第一行失败，第二行成功
D. 两行都成功且结果不同

### JAVA-046（单选题）

表达式 `byte a=10; byte b=20;` 后，`a+b` 的类型是什么？

A. byte
B. short
C. int
D. long

### JAVA-047（单选题）

执行 `int n = (int)-3.9;` 后 n 是多少？

A. -4
B. -3
C. 3
D. 抛出 ArithmeticException

### JAVA-048（单选题）

代码输出什么？

```java
char ch = (char) 0xAB0041;
System.out.println(ch);
```

A. A
B. B
C. 䅁
D. 编译失败

### JAVA-049（单选题）

代码输出的整数是什么？

```java
int n = '2' + '3';
System.out.println(n);
```

A. 23
B. 53
C. 101
D. 编译失败

### JAVA-050（单选题）

执行 `0.0 / 0.0` 最可能得到什么？

A. 0.0
B. Infinity
C. NaN
D. ArithmeticException

### JAVA-051（单选题）

代码结束后 x 的值是多少？

```java
int x = 0;
boolean ok = false && (++x > 0);
```

A. 0
B. 1
C. 2
D. 抛出异常

### JAVA-052（单选题）

若把 `&&` 改为单个 `&`，下面代码结束后 x 是多少？

```java
int x = 0;
boolean ok = false & (++x > 0);
```

A. 0
B. 1
C. 编译失败
D. 值不确定

### JAVA-053（单选题）

代码输出什么？

```java
int i=1, j=2;
System.out.println("i + j = " + i + j);
```

A. i + j = 3
B. i + j = 12
C. i + j = 1 + 2
D. 编译失败

### JAVA-054（单选题）

代码打印什么？

```java
int x=1, y=0;
if (x > 0)
    if (y > 0) System.out.print("A");
    else System.out.print("C");
```

A. A
B. B
C. C
D. 什么也不打印

### JAVA-055（单选题）

代码输出什么？

```java
int n=2;
switch(n){case 1:System.out.print("A"); case 2:System.out.print("B"); case 3:System.out.print("C");break;}
```

A. AB
B. B
C. BC
D. C

### JAVA-056（单选题）

下列哪个 case 标签能通过编译？

```java
int limit=3, value=3;
switch(value){ /* 选择一个标签 */ }
```

A. case limit:
B. case 1 + 2:
C. case value++:
D. case Math.random():

### JAVA-057（单选题）

执行后 max 是多少？

```java
int max = 4 > 7 ? 4 : 7;
```

A. 4
B. 7
C. true
D. 编译失败

### JAVA-058（单选题）

代码执行后 x 和 a 分别是多少？

```java
int a=0;
int x=a+(++a);
```

A. 1、1
B. 2、1
C. 1、2
D. 2、2

### JAVA-059（单选题）

哪个表达式可能返回 0.0，但永远不会返回 1.0？

A. Math.round(1.0)
B. Math.random()
C. Math.ceil(0.2)
D. Math.max(0.0,1.0)

### JAVA-060（单选题）

哪个字符字面量正确表示大写字母 A？

A. '\u0041'
B. '\u041'
C. "\u0041"
D. '0041'

### JAVA-061（单选题）

执行后 s 和 t 分别引用什么内容？

```java
String s="Java";
String t=s;
s="HTML";
```

A. HTML、HTML
B. Java、HTML
C. HTML、Java
D. Java、Java

### JAVA-062（单选题）

要判断两个 String 的字符序列是否相同，通常应使用什么？

A. ==
B. equals
C. compareTo(...) == 1
D. hashCode() == hashCode()

### JAVA-063（单选题）

对 `String s="Java";`，哪个调用会抛出 StringIndexOutOfBoundsException？

A. s.charAt(0)
B. s.charAt(3)
C. s.charAt(s.length()-1)
D. s.charAt(s.length())

### JAVA-064（单选题）

`"Welcome".substring(0, 4)` 的结果是什么？

A. Wel
B. Welc
C. Welco
D. come

### JAVA-065（单选题）

代码输出的 s 长度是多少？

```java
String s=" Java ";
s.trim();
System.out.println(s.length());
```

A. 4
B. 6
C. 8
D. 编译失败

### JAVA-066（单选题）

`"banana".indexOf('a', 2)` 返回多少？

A. 1
B. 2
C. 3
D. 5

### JAVA-067（单选题）

要把字符串 `"42"` 转为基本类型 int，应使用哪项？

A. String.valueOf(42)
B. Integer.parseInt("42")
C. Integer.valueOf("forty-two")
D. "42".intValue()

### JAVA-068（单选题）

代码输出什么？

```java
StringBuilder b=new StringBuilder("Java");
b.append(17);
System.out.println(b);
```

A. Java
B. Java17
C. 17Java
D. 编译失败

### JAVA-069（单选题）

哪一个格式描述符适合输出十进制 int？

A. %f
B. %d
C. %c
D. %b

### JAVA-070（单选题）

若首次判断前 count 为 10，下面循环体执行几次？

```java
int count=10;
do { count++; } while(count<10);
```

A. 0 次
B. 1 次
C. 10 次
D. 无限次

### JAVA-071（单选题）

代码打印多少次星号？

```java
for(int i=0;i<3;i++) System.out.print("*");
```

A. 2
B. 3
C. 4
D. 无限次

### JAVA-072（单选题）

代码最终输出 sum 的值是多少？

```java
int sum=0;
for(int i=1;i<=5;i++){if(i==4)break;sum+=i;}
System.out.println(sum);
```

A. 3
B. 6
C. 10
D. 15

### JAVA-073（单选题）

代码最终输出 sum 的值是多少？

```java
int sum=0;
for(int i=1;i<=5;i++){if(i==3)continue;sum+=i;}
```

A. 6
B. 9
C. 12
D. 15

## 多选题

### JAVA-074（多选题）

下列哪些声明中的变量名合法？

A. int $count=0;
B. int class=1;
C. int 用户数=2;
D. int 9items=9;

### JAVA-075（多选题）

关于局部变量与成员变量，哪些说法正确？

A. 局部变量读取前必须明确赋值
B. int 成员变量通常获得默认值 0
C. 所有局部引用自动初始化为 null
D. final 局部变量可以被重复赋值

### JAVA-076（多选题）

下列哪些声明可以直接通过编译？

A. long a=3_000_000_000L;
B. float b=0.5F;
C. int c=0x1D;
D. byte d=128;

### JAVA-077（多选题）

给定 `char c='A'; int i=100;`，下列哪些赋值可编译？

A. int x=c;
B. char y=i;
C. char z=(char)i;
D. double d=i;

### JAVA-078（多选题）

执行 `byte b=127; b+=1;` 后，哪些结论正确？

A. 代码可以编译
B. b 的值为 -128
C. 运行时抛出 ArithmeticException
D. 复合赋值包含到 byte 的隐式窄化

### JAVA-079（多选题）

关于 Java 浮点运算，哪些说法正确？

A. 1.0/0.0 得到正无穷
B. 0.0/0.0 得到 NaN
C. 浮点除零必抛 ArithmeticException
D. NaN==NaN 的结果为 true

### JAVA-080（多选题）

给定 `int x=0;`，哪些表达式求值后 x 仍为 0？

A. false && ++x>0
B. true || ++x>0
C. false & ++x>0
D. true | ++x>0

### JAVA-081（多选题）

若 `even` 已是 boolean，哪些条件写法可在语义上直接判断它为真？

A. if(even)
B. if(even==true)
C. if(even=1)
D. if(1)

### JAVA-082（多选题）

关于传统冒号形式的 switch，哪些说法正确？

A. default 可以省略
B. 匹配 case 后若无 break 可继续执行后续语句组
C. case 标签可使用运行时读取的普通变量
D. default 必须写在最后

### JAVA-083（多选题）

关于表达式规则，哪些说法正确？

A. 乘法优先级高于加法
B. 普通减法按左结合解析
C. 赋值运算符右结合
D. 所有二元运算符都右结合

### JAVA-084（多选题）

下列哪些调用的结果类型为 double？

A. Math.sqrt(9)
B. Math.random()
C. Math.round(2.6)
D. Math.max(1,2)

### JAVA-085（多选题）

给定 `String a=new String("Java"); String b=new String("Java");`，哪些表达式为 true？

A. a.equals(b)
B. a==b
C. a.compareTo(b)==0
D. a.equalsIgnoreCase("JAVA")

### JAVA-086（多选题）

关于 `String s="ab"; String t=s.concat("c");`，哪些说法正确？

A. s 的内容仍是 ab
B. t 的内容是 abc
C. concat 原地把 s 改为 abc
D. 若忽略 concat 返回值，原字符串不变

### JAVA-087（多选题）

给定 `String s="Java";`，哪些调用合法且不会抛下标异常？

A. s.substring(0,4)
B. s.substring(4)
C. s.substring(2,2)
D. s.substring(3,2)

### JAVA-088（多选题）

对 `String s="abracadabra";`，哪些结果正确？

A. s.indexOf("cad")==4
B. s.lastIndexOf('a')==10
C. s.indexOf('z')==-1
D. s.indexOf('a')==1

### JAVA-089（多选题）

下列哪些调用能成功得到数值而不抛 NumberFormatException？

A. Integer.parseInt("-12")
B. Double.parseDouble("3.14")
C. Integer.parseInt("3.14")
D. Integer.parseInt("twelve")

### JAVA-090（多选题）

下列哪些是 StringBuilder 提供的原地修改能力？

A. append
B. reverse
C. setCharAt
D. toLowerCase

### JAVA-091（多选题）

关于 printf 格式，哪些配对正确？

A. %s—字符串
B. %d—十进制整数
C. %f—浮点数
D. %c—布尔值

### JAVA-092（多选题）

关于 while 与 do-while，哪些说法正确？

A. while 可能一次也不执行
B. do-while 至少执行一次循环体
C. 两者条件都必须产生 boolean
D. do-while 不需要分号结尾

### JAVA-093（多选题）

关于 `for(int i=0,j=9; i<j; i++,j--)`，哪些说法正确？

A. 初始化部分声明了两个 int 变量
B. 更新部分每轮按从左到右执行两个表达式
C. i 和 j 在循环语句之外仍一定可见
D. 条件省略时会被视为 true

### JAVA-094（多选题）

在未使用标签的嵌套循环中，哪些说法正确？

A. break 结束最内层循环
B. continue 跳过当前最内层循环的本次迭代
C. break 自动结束所有外层循环
D. continue 会退出当前方法

### JAVA-095（多选题）

关于增强 for 遍历 `int[] values`，哪些说法正确？

A. 可依次读取每个元素值
B. 无需手写下标边界
C. 给循环变量重新赋值会直接改写原数组元素
D. 遍历次序与数组下标从 0 到 length-1 一致

## 判断题

### JAVA-096（判断题）

`goto` 当前没有对应的 Java 跳转语句，但仍不能用作变量名。

- [ ] 正确
- [ ] 错误

### JAVA-097（判断题）

变量一经声明为某种基本类型，就不能在同一作用域中通过赋值把它变成另一种类型的变量。

- [ ] 正确
- [ ] 错误

### JAVA-098（判断题）

`final int limit; limit = 10;` 只要 limit 是局部变量且仅赋值一次，就一定因未在声明处初始化而编译失败。

- [ ] 正确
- [ ] 错误

### JAVA-099（判断题）

在 Java 中，表达式 `x = 5` 本身也有值，因此可嵌入更大的表达式中。

- [ ] 正确
- [ ] 错误

### JAVA-100（判断题）

对 int 操作数，`-5 / 2` 的结果为 -3，因为整数除法总是向负无穷取整。

- [ ] 正确
- [ ] 错误

### JAVA-101（判断题）

把任意 long 值自动转换为 float 都不会丢失精度，因为 float 的数值范围比 long 大。

- [ ] 正确
- [ ] 错误

### JAVA-102（判断题）

Java 的 char 是 16 位无符号整数类型，可表示一个 UTF-16 代码单元，但不保证单个 char 能容纳每个 Unicode 字符。

- [ ] 正确
- [ ] 错误

### JAVA-103（判断题）

空字符串 `""` 是合法的 String 字面量，其长度为 0。

- [ ] 正确
- [ ] 错误

### JAVA-104（判断题）

Java 允许用整数 0 和 1 分别替代 false 和 true 参与 if 判断。

- [ ] 正确
- [ ] 错误

### JAVA-105（判断题）

传统 switch 中，即使 default 写在第一个 case 之前，只要某个 case 匹配，程序仍从匹配位置开始执行。

- [ ] 正确
- [ ] 错误

### JAVA-106（判断题）

Java 规定方法实参从左到右求值，因此调用 `f(i++, i++)` 时两个参数分别取得递增前后连续的值。

```java
int i=0;
f(i++, i++);
```

- [ ] 正确
- [ ] 错误

### JAVA-107（判断题）

`compareTo` 的返回值为负、零或正，业务代码不应假定字典序相邻字符串的返回值必为 -1 或 1。

- [ ] 正确
- [ ] 错误

### JAVA-108（判断题）

调用 `s.replace('a','b')` 后，即使不接收返回值，变量 s 所引用字符串中的字符也会被原地替换。

- [ ] 正确
- [ ] 错误

### JAVA-109（判断题）

与 StringBuilder 相比，StringBuffer 的主要修改方法带同步语义，更适合需要共享可变字符序列的并发场景。

- [ ] 正确
- [ ] 错误

### JAVA-110（判断题）

在 for 循环中执行 `continue;` 后，会跳过本轮剩余循环体，但仍会先执行更新表达式再重新判断条件。

- [ ] 正确
- [ ] 错误

# 第3讲：数组、类与对象

## 单选题

### JAVA-111（单选题）

长度为 5 的数组，最后一个合法下标是哪一项？

A. 3
B. 4
C. 5
D. 6

### JAVA-112（单选题）

执行代码后，打印结果是什么？

```java
int[] a = new int[2];
System.out.println(a[1]);
```

A. 0
B. 1
C. null
D. 编译错误

### JAVA-113（单选题）

以下哪条语句只声明数组引用，而没有创建数组对象？

A. int[] a;
B. int[] a = new int[3];
C. int[] a = {1,2,3};
D. int[] a = new int[]{1};

### JAVA-114（单选题）

已有 `int[] a = new int[3]`，若业务数据增长到 4 项，正确理解是什么？

A. 给 a.length 赋 4
B. 数组会自动扩容
C. 创建更大数组并复制数据
D. 向 a[3] 赋值即可扩容

### JAVA-115（单选题）

以下代码运行时会发生什么？

```java
int[] a={10,20,30};
System.out.println(a[a.length]);
```

A. 打印 30
B. 打印 0
C. 抛出 ArrayIndexOutOfBoundsException
D. 编译失败

### JAVA-116（单选题）

代码结束后 `a[0]` 的值是多少？

```java
int[] a={1,2};
for(int x:a){ x=9; }
```

A. 1
B. 2
C. 3
D. 编译错误

### JAVA-117（单选题）

调用 `change(a)` 后打印什么？

```java
static void change(int[] x){x[0]=7;}
int[] a={1}; change(a); System.out.println(a[0]);
```

A. 1
B. 7
C. 0
D. 编译错误

### JAVA-118（单选题）

调用后 `a[0]` 为何值？

```java
static void reset(int[] x){x=new int[]{8};}
int[] a={1}; reset(a);
```

A. 1
B. 8
C. 0
D. null

### JAVA-119（单选题）

执行 `Arrays.sort(a)` 后，a 的内容是哪一项？

```java
int[] a={3,1,2};
Arrays.sort(a);
```

A. [3, 1, 2]
B. [1, 2, 3]
C. [3, 2, 1]
D. 数组不变

### JAVA-120（单选题）

已知 `int[] a={2,4,6,8}`，`Arrays.binarySearch(a, 6)` 返回什么？

A. 1
B. 2
C. 6
D. -3

### JAVA-121（单选题）

`Arrays.copyOf(a, 4)` 对长度为 2 的 int 数组产生什么结果？

A. 原数组别名
B. 长度 4 的新数组，新增位置为 0
C. 长度仍为 2
D. 因长度不同而异常

### JAVA-122（单选题）

`new int[2][3]` 中，表达式 `a.length` 与 `a[0].length` 分别是多少？

A. 2 和 3
B. 3 和 2
C. 6 和 3
D. 2 和 6

### JAVA-123（单选题）

以下哪个二维数组声明能够合法表达每行长度不同？

A. int[][] a={{1},{2,3}};
B. int[2][3] a;
C. int[][] a=new int[][3];
D. int[][] a={{1},{true}};

### JAVA-124（单选题）

代码会出现什么结果？

```java
int[][] a=new int[2][];
System.out.println(a[0][0]);
```

A. 打印 0
B. 打印 null
C. 抛出 NullPointerException
D. 抛出数组越界异常

### JAVA-125（单选题）

运行 `java Demo red blue` 时，标准 main 方法中的 `args.length` 是多少？

A. 0
B. 1
C. 2
D. 3

### JAVA-126（单选题）

执行代码后打印什么？

```java
Circle c=new Circle(); c.r=1;
Circle t=c; t.r=5; System.out.println(c.r);
```

A. 1
B. 5
C. 0
D. 编译错误

### JAVA-127（单选题）

执行 `t = new Circle()` 后，关于原对象的描述哪项正确？

A. c 也自动指向新对象
B. c 仍指向原对象
C. 原对象字段被清零
D. 赋值会复制原对象

### JAVA-128（单选题）

类中显式声明了 `User(String name)` 后，哪项成立？

A. 编译器仍必定提供 User()
B. 编译器不再自动提供无参构造器
C. 构造器可以声明返回值
D. 对象不能再创建

### JAVA-129（单选题）

以下哪一项最能识别构造方法？

A. 名称与类名相同且无返回类型
B. 必须写 void
C. 必须是 static
D. 只能有一个

### JAVA-130（单选题）

子类构造器未显式写 this(...) 或 super(...) 时，编译器会如何处理？

A. 在末尾加入 super()
B. 在首行隐式加入 super()
C. 自动调用父类所有构造器
D. 不调用父类构造器

### JAVA-131（单选题）

父类只声明 `Base(int x)`，子类构造器为空且未显式调用 super。结果是什么？

```java
class Base{Base(int x){}}
class Sub extends Base{Sub(){}}
```

A. 自动传入 0
B. 编译错误
C. 跳过父类构造
D. 运行时才报错

### JAVA-132（单选题）

方法内 `if` 块中声明的变量 x，在块结束后如何使用？

A. 可在整个类中直接使用
B. 只能通过 this.x 使用
C. 不能再访问
D. 自动变成成员变量

### JAVA-133（单选题）

希望对象年龄不能被随意写成负数，最合适的设计是哪项？

A. 把 age 设为 public
B. 把 age 设为 private，并在 setter 中校验
C. 把所有成员都设为 static
D. 删除所有方法

### JAVA-134（单选题）

private 实例字段可被哪里直接访问？

A. 任意类
B. 仅当前顶层类声明体允许的代码范围
C. 任意同包类
D. 任意子类

### JAVA-135（单选题）

成员未写访问修饰符时，通常可被谁访问？

A. 仅当前对象
B. 同一包中的代码
C. 所有包
D. 仅不同包子类

### JAVA-136（单选题）

protected 成员最准确的可见性描述是哪项？

A. 仅本类
B. 同包代码以及满足规则的不同包子类
C. 全局公开
D. 仅接口可见

### JAVA-137（单选题）

关于 `import java.util.*;`，哪项正确？

A. 会导入 java.util 的子包全部类
B. 允许用简单名引用 java.util 中可访问类型
C. 把类复制进当前包
D. 运行时动态下载类

### JAVA-138（单选题）

Java 类继承的直接父类数量限制是什么？

A. 不能继承
B. 只能有一个直接父类
C. 最多两个
D. 任意多个

### JAVA-139（单选题）

判断子类方法是否重写父类方法，最关键的是哪项？

A. 方法名与参数列表形成匹配签名
B. 字段名相同
C. 构造器名称相同
D. 局部变量相同

### JAVA-140（单选题）

代码打印什么？

```java
class A{void f(){System.out.print("A");}}
class B extends A{void f(){System.out.print("B");}}
A x=new B(); x.f();
```

A. A
B. B
C. AB
D. 编译错误

### JAVA-141（单选题）

代码打印什么？

```java
class A{int n=1;} class B extends A{int n=2;}
A x=new B(); System.out.println(x.n);
```

A. 1
B. 2
C. 12
D. 编译错误

### JAVA-142（单选题）

`Animal a = new Dog()` 后，Dog 独有的 `fetch()` 不能直接通过 a 调用，原因是什么？

A. 对象不是 Dog
B. 编译器按引用类型 Animal 检查可调用成员
C. 多态禁止重写
D. fetch 必须是 static

### JAVA-143（单选题）

对抽象类 `abstract class Shape`，哪项正确？

A. 可直接 new Shape()
B. 只能包含抽象方法
C. 不能直接实例化，但可声明 Shape 引用
D. 不能有构造器

### JAVA-144（单选题）

具体子类继承含抽象方法的抽象类后，必须怎样做？

A. 删除抽象方法
B. 实现所有尚未实现的抽象方法
C. 把构造器设为 static
D. 改用多继承

### JAVA-145（单选题）

一个类同时具备 Runnable 与 AutoCloseable 两种能力，声明方式是哪项？

A. extends Runnable, AutoCloseable
B. implements Runnable, AutoCloseable
C. interface Runnable implements AutoCloseable
D. new Runnable, AutoCloseable

### JAVA-146（单选题）

接口中声明 `int MAX = 10;`，MAX 隐含哪些修饰符？

A. private final
B. public static final
C. protected static
D. public volatile

### JAVA-147（单选题）

JDK 8 起，接口中带方法体、供实现类继承的实例方法使用哪个关键字？

A. native
B. default
C. final
D. synchronized

### JAVA-148（单选题）

两个 Counter 对象共享静态字段 count。先后执行 `c1.count++`、`c2.count++` 后 count 是多少？

A. 0
B. 1
C. 2
D. 每个对象各为 1，无法统一回答

### JAVA-149（单选题）

为什么 static 方法中不能直接使用实例字段？

A. 实例字段一定是 private
B. 静态上下文没有隐式当前对象 this
C. JVM 不允许字段
D. 实例字段都在栈中

### JAVA-150（单选题）

首次创建某类对象时，其静态代码块、实例初始化块、构造器的典型顺序是什么？

A. 构造器→实例块→静态块
B. 静态块→实例块→构造器
C. 实例块→静态块→构造器
D. 静态块→构造器→实例块

## 多选题

### JAVA-151（多选题）

以下哪些数组声明与初始化能够通过编译？

A. int[] a={1,2};
B. int[] b=new int[]{1,2};
C. int[] c=new int[2]{1,2};
D. int[2] d;

### JAVA-152（多选题）

关于 Java 数组参数，哪些说法正确？

A. 调用时传递的是引用值
B. 形参改写元素可影响调用者所见数组
C. 形参重新赋新数组会自动改绑实参变量
D. 数组按值完整复制给形参

### JAVA-153（多选题）

关于 Arrays 工具方法，哪些说法正确？

A. sort 可对数组原地排序
B. binarySearch 前通常应保证数组已按相同规则排序
C. equals 比较基本类型数组内容
D. toString 会把二维数组完整递归展开

### JAVA-154（多选题）

对于 `int[][] a=new int[3][]`，哪些操作合法？

A. 读取 a.length
B. 执行 a[0]=new int[2]
C. 直接读取 a[0][0] 而不初始化内层数组
D. 让 a[1] 指向长度为 5 的 int 数组

### JAVA-155（多选题）

遍历长度为 n 的数组，哪些循环条件能避免访问下标 n？

A. i < a.length
B. i <= a.length
C. i < n，且 n 等于 a.length
D. i != a.length，从 i=0 每次加1

### JAVA-156（多选题）

`Person p=new Person(); Person q=p;` 后，哪些说法正确？

A. p 和 q 的引用值指向同一对象
B. 经 q 修改对象字段可由 p 观察
C. q=null 会把 p 也设为 null
D. 系统创建了两个 Person 对象

### JAVA-157（多选题）

关于构造方法，哪些说法正确？

A. 可以重载
B. 名称必须与类名相同
C. 可以声明返回类型 void
D. 由 new 创建对象时触发相应构造过程

### JAVA-158（多选题）

哪些情形可能导致 `new Child()` 编译失败？

A. Child 只声明了 Child(int)
B. Child 未写构造器，但父类没有可访问的无参构造器
C. Child 是 abstract 类
D. Child 有 public Child() 且父类有 public Base()

### JAVA-159（多选题）

采用私有字段配合 getter/setter，通常能带来哪些好处？

A. 集中校验写入值
B. 隐藏内部表示
C. 保证任何并发程序绝对安全
D. 以后可调整内部实现而保持公开契约

### JAVA-160（多选题）

关于访问权限，哪些说法正确？

A. private 成员仅限其声明类内部访问
B. 缺省成员可供同包代码访问
C. public 成员在类型本身可访问时具有最宽可见性
D. protected 等同于 public

### JAVA-161（多选题）

关于 package 与 import，哪些说法正确？

A. package 声明决定类型所属包
B. import 允许使用类型简单名
C. java.lang 中常用类型会自动可用
D. import p.* 会递归导入 p 的所有子包

### JAVA-162（多选题）

关于类继承，哪些说法正确？

A. 使用 extends
B. 一个类只能直接继承一个类
C. 构造方法会被子类继承
D. 子类可重写可访问的实例方法

### JAVA-163（多选题）

关于 this 与 super，哪些说法正确？

A. this 可表示当前对象
B. super 可用于调用父类构造器
C. static 方法可直接使用 this
D. super 可访问父类中对子类可访问的成员

### JAVA-164（多选题）

要形成典型运行时多态，通常需要哪些条件？

A. 存在继承或接口实现关系
B. 子类提供方法重写
C. 父类或接口引用指向子类对象
D. 两个类拥有同名字段即可

### JAVA-165（多选题）

抽象类中可以包含哪些成员？

A. 构造方法
B. 普通实例方法
C. 普通成员变量
D. 只能包含 abstract 方法

### JAVA-166（多选题）

现代 Java 接口中可以声明哪些成员？

A. 抽象实例方法
B. default 方法
C. static 方法
D. 实例字段

### JAVA-167（多选题）

以下哪些声明体现 Java 支持的接口组合？

A. class C implements A,B {}
B. interface C extends A,B {}
C. class C extends A,B {}
D. class C extends Base implements A,B {}

### JAVA-168（多选题）

对于 `Base x=new Sub()`，哪些说法正确？

A. 重写实例方法通常执行 Sub 实现
B. 字段访问按 Base 静态类型解析
C. 可直接调用仅在 Sub 中声明的方法
D. 可通过安全向下转型后调用 Sub 独有方法

### JAVA-169（多选题）

关于 static 成员，哪些说法正确？

A. 属于类而非某个实例
B. 静态字段由实例共享
C. 静态方法可直接访问任意实例字段
D. 常可用类名访问

### JAVA-170（多选题）

关于静态代码块，哪些说法正确？

A. 类初始化时执行
B. 同一次类加载初始化过程中通常只执行一次
C. 每次 new 都执行
D. 适合初始化类级资源

### JAVA-171（多选题）

方法接收对象参数后，哪些行为会被调用者观察到？

A. 修改该对象的可变字段
B. 通过引用调用改变对象状态的方法
C. 把形参赋为 null 导致实参变量也变 null
D. 形参改指向新对象使实参自动改指向

### JAVA-172（多选题）

创建 `String[] s=new String[3]` 后，哪些说法正确？

A. s.length 为 3
B. 每个元素初始为 null
C. 数组本身是对象
D. 每个元素自动是空字符串

### JAVA-173（多选题）

将对象数组 `Person[] b=Arrays.copyOf(a,a.length)` 后，哪些说法正确？

A. b 是新的数组对象
B. 对应位置通常仍指向同一 Person 对象
C. 修改 b[0] 的 Person 字段可能由 a[0] 观察到
D. 给 b[0] 重新赋新 Person 必然同时改写 a[0]

### JAVA-174（多选题）

关于垃圾回收，哪些说法正确？

A. 无可达引用对象可成为回收候选
B. 业务代码通常不能保证精确回收时刻
C. 把一个引用设 null 必定立即回收对象
D. 外部文件资源仍应显式关闭

## 判断题

### JAVA-175（判断题）

数组对象一旦创建，其 length 就不能再改变。

- [ ] 正确
- [ ] 错误

### JAVA-176（判断题）

长度为 n 的数组，其合法下标范围是 1 到 n。

- [ ] 正确
- [ ] 错误

### JAVA-177（判断题）

对 int 数组使用增强 for，并给循环变量赋新值，会同步改写对应数组元素。

- [ ] 正确
- [ ] 错误

### JAVA-178（判断题）

Java 二维数组的每一行必须具有完全相同的长度。

- [ ] 正确
- [ ] 错误

### JAVA-179（判断题）

数组作为参数时，方法获得引用值的副本，因此可以借该引用修改同一个数组的元素。

- [ ] 正确
- [ ] 错误

### JAVA-180（判断题）

把一个对象引用赋给另一个变量会自动复制出一个内容相同的新对象。

- [ ] 正确
- [ ] 错误

### JAVA-181（判断题）

类只要存在，就一定可以使用无参构造方式 new。

- [ ] 正确
- [ ] 错误

### JAVA-182（判断题）

将字段设为 private 并通过公共方法提供受控访问，是封装的一种常见做法。

- [ ] 正确
- [ ] 错误

### JAVA-183（判断题）

未写访问修饰符的成员等同于 public 成员。

- [ ] 正确
- [ ] 错误

### JAVA-184（判断题）

Java 中一个类可以通过 extends 同时直接继承两个父类。

- [ ] 正确
- [ ] 错误

### JAVA-185（判断题）

子类会像继承普通实例方法一样继承父类构造方法。

- [ ] 正确
- [ ] 错误

### JAVA-186（判断题）

抽象类不能直接实例化，但可以声明指向具体子类对象的抽象类引用。

- [ ] 正确
- [ ] 错误

### JAVA-187（判断题）

一个类可以实现多个接口，从而组合多种行为规范。

- [ ] 正确
- [ ] 错误

### JAVA-188（判断题）

父类引用指向子类对象时，对被重写实例方法的调用会固定执行父类版本。

- [ ] 正确
- [ ] 错误

### JAVA-189（判断题）

静态方法没有隐式 this，因此若要访问实例字段，必须先取得明确的对象引用。

- [ ] 正确
- [ ] 错误

### JAVA-190（判断题）

静态代码块会在每次 new 对象时重新执行一次。

- [ ] 正确
- [ ] 错误

# 第4讲：异常处理、日志与断言

## 单选题

### JAVA-191（单选题）

关于 Java 异常，哪一项描述最准确？

A. 异常只是控制台中的一行文本
B. 异常是携带类型、消息和调用栈等信息的对象
C. 异常只能由 JVM 创建
D. 异常发生后程序必定立即退出

### JAVA-192（单选题）

捕获异常后，只想取得构造异常时提供的详细消息，应调用哪个方法？

A. getMessage()
B. getStackTrace()
C. printStackTrace()
D. fillInStackTrace()

### JAVA-193（单选题）

生产故障定位时，堆栈跟踪中最有助于还原异常传播路径的信息是什么？

A. 每层调用的方法与源码位置
B. 所有对象的内存地址
C. 当前数据库全部记录
D. 操作系统用户口令

### JAVA-194（单选题）

下列哪一个通常属于编译器要求捕获或声明的检查型异常？

A. FileNotFoundException
B. NullPointerException
C. ArithmeticException
D. NumberFormatException

### JAVA-195（单选题）

执行代码时传入 `two`，最可能抛出什么异常？

```java
int n = Integer.parseInt(args[0]);
```

A. IOException
B. NumberFormatException
C. ClassNotFoundException
D. AssertionError

### JAVA-196（单选题）

抛出的对象是 FileNotFoundException，下面哪个处理器能够捕获它？

A. catch(IOException e)
B. catch(NullPointerException e)
C. catch(Error e)
D. catch(String e)

### JAVA-197（单选题）

执行 `new int[-1]` 会抛出哪个异常？

A. ArrayIndexOutOfBoundsException
B. NegativeArraySizeException
C. IllegalAccessException
D. ClassCastException

### JAVA-198（单选题）

代码输出什么？

```java
try { System.out.print("A"); throw new RuntimeException(); }
catch (RuntimeException e) { System.out.print("C"); }
```

A. AC
B. ABC
C. AB
D. 程序无法编译

### JAVA-199（单选题）

下列 catch 排列为什么编译失败？

```java
try { open(); }
catch (java.io.IOException e) {}
catch (java.io.FileNotFoundException e) {}
```

A. IOException 不能捕获
B. 后面的 FileNotFoundException 分支已不可达
C. try 不能有两个 catch
D. 必须添加 finally

### JAVA-200（单选题）

代码输出什么？

```java
try { System.out.print("T"); } finally { System.out.print("F"); }
```

A. T
B. F
C. TF
D. 什么也不输出

### JAVA-201（单选题）

方法 `value()` 返回多少？

```java
static int value(){ try { return 1; } finally { return 2; } }
```

A. 1
B. 2
C. 无法编译
D. 抛出异常

### JAVA-202（单选题）

要声明在 try-with-resources 头部的对象，其类型必须实现什么接口？

A. Serializable
B. AutoCloseable
C. Cloneable
D. Runnable

### JAVA-203（单选题）

两个资源依次声明为 r1、r2，正常离开 try-with-resources 时通常按什么顺序关闭？

A. r1 后 r2
B. r2 后 r1
C. 只关闭 r1
D. 关闭顺序不受规范约束

### JAVA-204（单选题）

方法 m2 未捕获 m3 抛出的异常时，下一步通常发生什么？

A. 异常自动变成日志
B. 沿调用栈交给 m2 的调用方寻找处理器
C. 异常对象被立即回收
D. JVM 从 m3 第一行重试

### JAVA-205（单选题）

哪一项正确区分 `throw` 与 `throws`？

A. throw 声明方法，throws 创建对象
B. throw 抛出一个对象，throws 出现在方法声明中列出异常类型
C. 二者完全等价
D. throws 只能用于运行时异常

### JAVA-206（单选题）

捕获 IOException 后要抛出业务异常，同时保留根因，最合适的写法是什么？

```java
catch (java.io.IOException e) { /* 选择语句 */ }
```

A. throw new BusinessException("读取失败", e);
B. throw e.getMessage();
C. return new BusinessException();
D. e=null; throw new BusinessException();

### JAVA-207（单选题）

方法体直接调用会抛 IOException 的 read()，当前方法又不捕获它，方法声明至少应如何处理？

A. 添加 throws IOException
B. 添加 synchronized
C. 把返回类型改为 void
D. 添加 assert

### JAVA-208（单选题）

父类方法声明 `throws IOException`，下列哪个覆盖声明合法？

A. throws Exception
B. throws Throwable
C. throws EOFException
D. throws ReflectiveOperationException

### JAVA-209（单选题）

希望自定义异常受到编译器“捕获或声明”检查，最直接应继承哪个类？

A. RuntimeException
B. Exception
C. Error
D. AssertionError

### JAVA-210（单选题）

若异常没有已知原因，`getCause()` 通常返回什么？

A. 空字符串
B. null
C. 当前异常自身
D. 一个空数组

### JAVA-211（单选题）

SLF4J 在常见日志架构中主要扮演什么角色？

A. 数据库驱动
B. 日志门面 API
C. JVM 垃圾收集器
D. 日志文件压缩格式

### JAVA-212（单选题）

服务遇到可恢复的配置问题，程序仍继续运行，最贴切的日志级别是什么？

A. trace
B. debug
C. warn
D. error 一定导致退出

### JAVA-213（单选题）

启用断言时，`assert condition : message;` 的 condition 为 false 会怎样？

A. 抛出 AssertionError
B. 抛出 IOException
C. 返回 false 给调用方
D. 自动记录 warn 后继续

### JAVA-214（单选题）

默认未启用断言时，下面代码执行后 x 是多少？

```java
int x=0;
assert ++x>0;
```

A. 0
B. 1
C. 无法编译
D. 取决于 message

### JAVA-215（单选题）

运行 `MyApp` 时为普通应用类启用断言，最常用的命令是哪一项？

A. java -ea MyApp
B. javac -ea MyApp.java
C. java -assert MyApp
D. java MyApp -ea

## 多选题

### JAVA-216（多选题）

下列哪些属于非检查异常或错误，编译器不要求普通代码捕获或声明？

A. NullPointerException
B. IllegalArgumentException
C. OutOfMemoryError
D. IOException

### JAVA-217（多选题）

下列哪些代码会在运行时抛出 RuntimeException 的子类？

A. int x=1/0;
B. String s=null; s.length();
C. Integer.parseInt("x");
D. throw new java.io.IOException();

### JAVA-218（多选题）

关于多个 catch 子句，哪些说法正确？

A. 更具体的异常类型通常应放在更宽泛类型之前
B. 一个异常对象只会进入首个匹配的 catch
C. catch(Exception e) 能捕获 Error
D. 互不相关的异常类型可写成多个 catch

### JAVA-219（多选题）

关于 finally，哪些说法正确？

A. try 正常完成时通常也执行 finally
B. catch 处理异常后通常仍执行 finally
C. finally 中的新异常可能掩盖原异常
D. finally 保证在 JVM 被强制终止时仍执行

### JAVA-220（多选题）

关于 try-with-resources，哪些说法正确？

A. 资源需实现 AutoCloseable
B. 可声明多个以分号分隔的资源
C. 可以没有 catch 和 finally
D. 资源按声明顺序关闭

### JAVA-221（多选题）

try 主体抛出异常，随后资源 close 也抛出异常。哪些说法正确？

A. 主体异常通常作为主要传播异常
B. close 异常可通过 getSuppressed() 查看
C. close 异常必定完全丢失
D. 该机制有助于保留清理失败信息

### JAVA-222（多选题）

下列哪些语句或声明在语法角色上正确？

A. throw new IllegalArgumentException();
B. void read() throws IOException
C. throws new IOException();
D. throw IOException;

### JAVA-223（多选题）

哪些做法有助于保留和查看异常根因？

A. 用带 cause 参数的构造器包装异常
B. 调用 getCause()
C. 记录完整异常对象及堆栈
D. 只记录固定文本“失败”后丢弃原异常

### JAVA-224（多选题）

父类 `work()` 声明 `throws IOException`。子类覆盖时哪些声明可以合法出现？

A. 不写 throws
B. throws IOException
C. throws FileNotFoundException
D. throws Exception

### JAVA-225（多选题）

设计自定义异常时，哪些判断合理？

A. 希望调用者强制处理时可继承 Exception
B. 代表编程错误且不要求声明时可继承 RuntimeException
C. 所有业务异常都必须继承 Error
D. 构造器可接收 message 和 cause

### JAVA-226（多选题）

关于日志门面与实现，哪些说法正确？

A. SLF4J 提供统一 API
B. logback 可承担实际输出
C. 门面有助于替换底层实现
D. 同时绑定多个相互冲突的实现总是最佳实践

### JAVA-227（多选题）

哪些日志级别与常见用途匹配？

A. trace—细粒度路径跟踪
B. debug—开发调试信息
C. info—正常业务里程碑
D. warn—任何情况下都必须终止程序

### JAVA-228（多选题）

启用断言时，关于 `assert ok : detail;` 哪些说法正确？

A. ok 必须是 boolean 表达式
B. ok 为 true 时 detail 不求值
C. ok 为 false 时抛出 AssertionError
D. detail 必须是 String 类型

### JAVA-229（多选题）

关于断言开关，哪些说法正确？

A. -ea 可启用断言
B. -da 可禁用断言
C. 可按类或包设置断言状态
D. 断言默认对所有应用类开启

### JAVA-230（多选题）

下列哪些检查不应只依赖 assert？

A. 公共 API 的外部参数合法性
B. 转账金额必须大于零的业务规则
C. 读取配置文件失败后的恢复处理
D. 私有排序算法内部循环不变量

## 判断题

### JAVA-231（判断题）

Error 和 RuntimeException 及其子类都属于非检查异常体系，编译器通常不要求捕获或声明。

- [ ] 正确
- [ ] 错误

### JAVA-232（判断题）

非检查异常既然无需捕获，就不能写在 catch 参数中。

- [ ] 正确
- [ ] 错误

### JAVA-233（判断题）

先写 `catch(Exception e)`，再写 `catch(RuntimeException e)` 是合法的，因为两个分支参数类型不同。

- [ ] 正确
- [ ] 错误

### JAVA-234（判断题）

若 try 中执行 return，finally 通常仍会在方法真正返回调用方之前执行。

- [ ] 正确
- [ ] 错误

### JAVA-235（判断题）

try-with-resources 只负责正常路径关闭资源；try 主体抛异常时不会调用 close。

- [ ] 正确
- [ ] 错误

### JAVA-236（判断题）

异常沿调用栈传播时，一旦找到首个类型兼容的处理器，就把异常对象交给该处理器。

- [ ] 正确
- [ ] 错误

### JAVA-237（判断题）

方法在 throws 子句中声明某个检查型异常，意味着该方法每次调用都必然抛出该异常。

- [ ] 正确
- [ ] 错误

### JAVA-238（判断题）

创建自定义异常类后，仍需在业务代码中明确 throw 异常对象，并按其 checked/unchecked 属性决定捕获或声明要求。

- [ ] 正确
- [ ] 错误

### JAVA-239（判断题）

调用 `logger.error(...)` 会像 throw 一样自动改变 Java 控制流并终止当前方法。

- [ ] 正确
- [ ] 错误

### JAVA-240（判断题）

把修改数据库或递增计数器等必要副作用写进 assert 条件是不可靠的，因为关闭断言后条件表达式不会执行。

- [ ] 正确
- [ ] 错误

# 第5讲：集合与泛型

## 单选题

### JAVA-241（单选题）

方法只需要依次读取一组元素，并不关心调用方使用 ArrayList 还是 LinkedList。形参优先声明为什么？

A. List<String>
B. ArrayList<String>
C. LinkedList<String>
D. Object[]

### JAVA-242（单选题）

需要保存一批用户名，并保证同一用户名只出现一次，但不要求保持插入顺序。首先考虑哪种集合？

A. HashSet<String>
B. ArrayList<String>
C. ArrayDeque<String>
D. HashMap<Integer,String>

### JAVA-243（单选题）

一个任务清单允许重复且要按位置读取第 3 项，哪类接口最符合？

A. List
B. Set
C. Map
D. Queue

### JAVA-244（单选题）

消息按到达先后处理，新消息从尾部加入，处理时从头部取出。该结构体现什么顺序？

A. FIFO
B. LIFO
C. 按键排序
D. 随机访问

### JAVA-245（单选题）

希望用 ArrayDeque 实现栈，哪组操作最能直接表达压栈和弹栈？

A. push 与 pop
B. addLast 与 removeFirst
C. put 与 get
D. sort 与 binarySearch

### JAVA-246（单选题）

需要去重，并在遍历时按自定义 Comparator 的顺序输出对象。优先选择什么？

A. TreeSet
B. HashSet
C. ArrayList
D. Properties

### JAVA-247（单选题）

向 `Map<String,Integer>` 连续两次 put 相同键、不同值，通常会发生什么？

A. 后一次值替换该键原来的映射
B. Map 同时保留两条同键记录
C. 抛出重复键异常
D. 自动把两个值相加

### JAVA-248（单选题）

遍历一个 TreeMap 时，默认顺序主要由什么决定？

A. 键的自然顺序或创建时提供的 Comparator
B. 值的 hashCode 大小
C. 键值对的插入时间
D. JVM 每次启动随机决定

### JAVA-249（单选题）

主要操作是在末尾追加和按索引频繁读取，通常优先考虑哪个通用实现？

A. ArrayList
B. LinkedList
C. TreeSet
D. PriorityQueue

### JAVA-250（单选题）

把 5、1、3 依次加入默认 PriorityQueue，随后调用 remove()，最可能移除哪个值？

A. 1
B. 5
C. 3
D. 最后加入的元素 3

### JAVA-251（单选题）

领域类希望定义一种稳定的默认排序规则，最直接的做法是什么？

A. 实现 Comparable<T> 并定义 compareTo
B. 为每次排序新建 HashMap
C. 覆写 finalize
D. 只实现 Cloneable

### JAVA-252（单选题）

同一批员工有时按姓名排，有时按入职日期排。怎样设计更合理？

A. 分别提供两个 Comparator<Employee>
B. 让 Employee 同时实现两个 Comparable
C. 修改 equals 以改变排序
D. 每次先放入 HashSet

### JAVA-253（单选题）

实现按年龄升序的 Comparator，以下哪种写法更稳妥？

A. Integer.compare(a.age(), b.age())
B. a.age() - b.age()
C. a.age() == b.age() ? 1 : -1
D. a.hashCode() - b.hashCode()

### JAVA-254（单选题）

调用 `Collections.reverse(list)` 后，返回值是什么？

A. void；原列表顺序被反转
B. 一个全新的 List
C. 原列表首元素
D. 是否反转成功的 boolean

### JAVA-255（单选题）

`dest` 为空、`src` 有 3 个元素，直接执行 `Collections.copy(dest, src)` 会怎样？

A. 抛出 IndexOutOfBoundsException，因为 dest 不够大
B. 自动向 dest 追加三个元素
C. 返回新的三元素列表
D. 静默跳过复制

### JAVA-256（单选题）

对没有传 Comparator 的 `Collections.sort(list)`，元素必须满足什么核心条件？

A. 能按彼此兼容的自然顺序比较
B. 全部具有相同 hashCode
C. 都实现 Serializable
D. 列表必须是 LinkedList

### JAVA-257（单选题）

对列表执行 `Collections.binarySearch` 前最容易被忽略的条件是什么？

A. 列表必须按与搜索相同的规则排好序
B. 列表不能包含任何对象
C. 必须先反转列表
D. 只能搜索索引 0 处元素

### JAVA-258（单选题）

有序列表 `[10,20,40]` 中搜索 30，返回值如何解释？

A. 负值，编码插入点 2
B. 固定返回 -1
C. 返回 2，表示找到 30
D. 抛出 NoSuchElementException

### JAVA-259（单选题）

`List<String> list = Arrays.asList(array)` 后，哪项操作通常会抛 UnsupportedOperationException？

A. list.add("x")
B. list.set(0, "x")
C. array[0] = "x"
D. list.get(0)

### JAVA-260（单选题）

希望把 `List<String>` 转成运行时类型确切为 String[] 的数组，哪种调用合适？

A. list.toArray(new String[0])
B. (String[]) list.toArray()
C. new Object[list.size()]
D. list.getClass().array()

### JAVA-261（单选题）

Properties 最适合保存哪类配置？

A. 字符串键到字符串值的属性
B. 任意对象到线程的映射
C. 按索引存放图片对象
D. 保证键按数值排序的记录

### JAVA-262（单选题）

命令 `java -Denv=test App` 启动后，代码如何读取 test？

A. System.getProperty("env")
B. System.getenv("-Denv")
C. Properties.load("env")
D. App.class.getName("env")

### JAVA-263（单选题）

把 `List` 改为 `List<String>` 最直接带来什么好处？

A. 编译器能限制元素类型并减少读取时强制转换
B. JVM 会为每个 String 建一份 List 类文件
C. 列表容量自动无限增长
D. 所有并发访问自动线程安全

### JAVA-264（单选题）

以下哪个泛型实例化是合法的？

A. Box<Integer>
B. Box<int>
C. Box<void>
D. Box<3>

### JAVA-265（单选题）

已有 `Map<String,Integer> counts`，哪种构造写法可让编译器推断类型参数？

A. new HashMap<>()
B. new HashMap<?,?>()
C. new HashMap<String>()
D. new <String,Integer> HashMap

### JAVA-266（单选题）

为什么不能把 `List<Integer>` 赋给 `List<Number>`？

A. 泛型类型默认不协变，否则可经 Number 列表写入 Double 破坏原列表类型安全
B. 因为 Integer 不是 Number 子类
C. 因为 List 只能装 String
D. 因为所有泛型集合都不可修改

### JAVA-267（单选题）

泛型静态方法的类型参数声明应放在哪里？

A. 返回类型之前，如 `static <T> T first(...)`
B. 方法名之后的 throws 子句中
C. 类文件名扩展名里
D. 只能放在参数变量名之后

### JAVA-268（单选题）

调用 `Util.compare(p1,p2)` 时为什么常可省略显式 `<K,V>`？

A. 编译器可从实参和上下文推断方法类型参数
B. JVM 把所有参数永久转为 Object
C. 方法会忽略 p1 和 p2 的类型
D. 省略后方法变成非泛型

### JAVA-269（单选题）

方法需要对参数调用 `doubleValue()`，哪种类型参数声明最合适？

A. <T extends Number>
B. <T super Number>
C. <T implements Number>
D. <Number = T>

### JAVA-270（单选题）

类型参数同时要求继承 Base 并实现 Auditable、Comparable，声明顺序哪项合法？

A. <T extends Base & Auditable & Comparable<T>>
B. <T extends Auditable & Base & Comparable<T>>
C. <T super Base & Auditable>
D. <T implements Base, Auditable>

### JAVA-271（单选题）

方法接收 `List<? extends Number> values`，哪项操作可靠？

A. 把元素读取为 Number
B. 向其中 add(Integer.valueOf(1))
C. 向其中 add(Double.valueOf(1))
D. 把它赋给 List<Number>

### JAVA-272（单选题）

方法要把 Integer 写入调用方提供的列表，形参怎样声明最灵活？

A. List<? super Integer>
B. List<? extends Integer>
C. List<?>[]
D. List<Integer>[]

### JAVA-273（单选题）

只需打印任意 List 的 size，不读取具体元素类型，形参优先写什么？

A. List<?>
B. List<Object>
C. List<int>
D. List<T> 且不声明 T

### JAVA-274（单选题）

`List<?> list` 中哪项添加操作是允许的？

A. list.add(null)
B. list.add(new Object())
C. list.add("x")
D. list.add(0)

### JAVA-275（单选题）

`List<String>` 与 `List<Integer>` 在运行时通常共享什么？

A. 同一个原始 List 类的运行时类型
B. 两个按类型实参复制出的 JVM 类
C. 完全不同的类加载器
D. 各自独立的 List.class 文件

### JAVA-276（单选题）

把 `List<String>` 赋给原始类型 List 并通过它加入 Integer，风险最可能何时暴露？

A. 之后按 String 读取元素时出现 ClassCastException
B. 加入时 JVM 必然拒绝并抛 ClassCastException
C. 编译器会生成第二个安全列表
D. 垃圾回收时抛异常

### JAVA-277（单选题）

在泛型类 `Box<T>` 中，哪段代码因类型擦除限制而不能直接编译？

A. new T()
B. T value;
C. T get(){ return value; }
D. List<T> values;

## 多选题

### JAVA-278（多选题）

为集合变量选择接口类型时，哪些匹配关系合理？

A. 需要按索引访问可选 List
B. 要求元素不重复可选 Set
C. 先进先出处理可选 Queue
D. 键值映射可选 Collection

### JAVA-279（多选题）

自定义 User 放入 HashSet 后仍出现业务上重复的用户。哪些原因值得检查？

A. 是否正确覆写 equals
B. equals 相等时 hashCode 是否一致
C. 对象作为元素后是否修改了参与散列的字段
D. 是否实现了 Serializable

### JAVA-280（多选题）

比较 ArrayList 与 LinkedList，哪些判断合理？

A. 两者都实现 List
B. ArrayList 通常擅长按索引读取
C. LinkedList 也实现 Deque
D. LinkedList 的任意索引读取始终是 O(1)

### JAVA-281（多选题）

关于 ArrayDeque 的使用，哪些说法正确？

A. 可用作 FIFO 队列
B. 可用作 LIFO 栈
C. 通常不允许 null 元素
D. 支持按任意整数索引 get(i)

### JAVA-282（多选题）

从 Map 获取 keySet、values、entrySet 后，哪些说法通常成立？

A. 这些集合与原 Map 关联
B. 可通过 entrySet 遍历键和值
C. values 可能包含重复值
D. keySet.add 新键是通用受支持操作

### JAVA-283（多选题）

选择 Map 实现时，哪些判断正确？

A. HashMap 不承诺键的排序遍历
B. TreeMap 可按键排序
C. LinkedHashMap 可维护可预测的迭代顺序
D. 所有 Map 实现都允许 null 键

### JAVA-284（多选题）

关于自然顺序与外部比较器，哪些说法正确？

A. Comparable 由被比较类型实现
B. Comparator 可定义多套顺序
C. 排序比较结果为 0 应与业务使用方式慎重协调
D. Comparator 必须修改被比较类源码

### JAVA-285（多选题）

一个可靠 Comparator 应满足哪些基本性质？

A. 比较同一对象时返回 0
B. 交换参数后结果符号相反
C. 比较关系具有传递性
D. 可以随机返回 -1 或 1 以实现洗牌

### JAVA-286（多选题）

以下哪些 Collections 操作会直接修改传入的可修改 List？

A. reverse
B. fill
C. swap
D. binarySearch

### JAVA-287（多选题）

先用自定义 Comparator 排序后再二分查找，哪些做法正确？

A. 搜索时使用与排序一致的 Comparator
B. 确保列表在搜索期间保持该顺序
C. 可把负返回值还原为插入点
D. 改用完全相反的比较器也保证正确

### JAVA-288（多选题）

`List<String> view = Arrays.asList(array)` 后，哪些操作会相互可见？

A. array[0] 的替换会反映到 view
B. view.set 会改动底层数组
C. view.add 会扩展底层数组
D. view.sort 可重排底层数组

### JAVA-289（多选题）

读取和保存 Properties 时，哪些做法合理？

A. 用 try-with-resources 管理 Reader/Writer
B. 用 getProperty 读取字符串值
C. store 可写出属性和注释
D. 假定缺少键时 getProperty 自动抛异常

### JAVA-290（多选题）

使用参数化集合而不是原始类型，通常有哪些收益？

A. 编译期发现不兼容元素
B. 读取时减少显式强制转换
C. API 意图更清楚
D. 让所有集合操作在运行时更快

### JAVA-291（多选题）

在 `class Pair<K,V>` 内，K 和 V 可用于哪些位置？

A. 字段类型
B. 方法参数类型
C. 方法返回类型
D. static 字段的类型并直接引用类级 K

### JAVA-292（多选题）

实现 `Pair<K,V>` 时，哪些方式合法？

A. 实现类继续声明 K、V
B. 实现时固定为 Pair<Integer,String>
C. 实现类使用不同类型变量名再映射
D. 省略所有类型信息并声称仍有完整编译期安全

### JAVA-293（多选题）

关于 Java 参数化类型的继承关系，哪些结论正确？

A. List<Integer> 不是 List<Number> 的子类型
B. ArrayList<Integer> 是 List<Integer> 的子类型
C. List<Integer> 可赋给 List<? extends Number>
D. List<Number> 可安全赋给 List<Integer>

### JAVA-294（多选题）

关于泛型方法，哪些说法正确？

A. 非泛型类也可声明泛型方法
B. 方法类型参数作用域限于该方法
C. static 方法可拥有自己的类型参数
D. 方法必须使用类的类型参数才算泛型方法

### JAVA-295（多选题）

声明 `<T extends Base & Runnable & Comparable<T>>` 后，方法内可安全做哪些事？

A. 把 T 当 Base 使用
B. 调用 run()
C. 调用 compareTo
D. 把任意 Object 赋给 T

### JAVA-296（多选题）

按照“生产者 extends、消费者 super”，哪些声明与用途匹配？

A. 从 List<? extends Number> 读取 Number
B. 向 List<? super Integer> 写入 Integer
C. 从 List<? super Integer> 读取时只能安全当 Object
D. 向 List<? extends Number> 写入任意 Number

### JAVA-297（多选题）

比较 `List<?>` 与 `List<Object>`，哪些说法正确？

A. List<?> 可引用 List<String>
B. List<Object> 可加入任意对象
C. List<Object> 不能直接引用 List<String>
D. 两者都可随意加入任意非 null 对象

### JAVA-298（多选题）

由于类型擦除，哪些结论通常成立？

A. 运行时不能用 instanceof 区分 List<String> 与 List<Integer>
B. 不同类型实参通常共享同一泛型类字节码
C. 编译器可能在读取处插入强制转换
D. 泛型在编译期完全不做类型检查

### JAVA-299（多选题）

代码库出现原始 `List` 时，哪些风险或处理判断合理？

A. 可能产生 unchecked 警告
B. 可能把错误类型写入参数化集合
C. 应尽量在边界处转换并消除原始类型
D. 使用原始类型后运行时绝不可能 ClassCastException

### JAVA-300（多选题）

泛型代码中哪些写法受擦除限制而通常不能直接使用？

A. new T()
B. new List<String>[10]
C. obj instanceof List<String>
D. 声明 List<String> 变量

## 判断题

### JAVA-301（判断题）

判断：Map 是 Collection 的子接口，因此 Map 对象可直接传给任何只接收 Collection 的方法。

- [ ] 正确
- [ ] 错误

### JAVA-302（判断题）

判断：List 保留元素顺序，并且通常允许多个彼此 equals 的元素同时存在。

- [ ] 正确
- [ ] 错误

### JAVA-303（判断题）

判断：HashSet 的遍历顺序就是插入顺序，业务代码可以长期依赖这一点。

- [ ] 正确
- [ ] 错误

### JAVA-304（判断题）

判断：TreeSet 使用排序比较判断元素位置，因此 compare 返回 0 的两个对象可能只保留一个，即使它们不是同一引用。

- [ ] 正确
- [ ] 错误

### JAVA-305（判断题）

判断：Collections.copy 会自动扩展目标列表，所以目标列表为空也能复制任意非空源列表。

- [ ] 正确
- [ ] 错误

### JAVA-306（判断题）

判断：Collections.binarySearch 返回负数时，不仅表示未找到，还可由返回值计算目标的插入点。

- [ ] 正确
- [ ] 错误

### JAVA-307（判断题）

判断：Arrays.asList 返回的列表不能改变大小，但 set 元素通常会同步修改底层数组。

- [ ] 正确
- [ ] 错误

### JAVA-308（判断题）

判断：Java 泛型可直接写 `List<int>`，因此不需要 Integer 包装类。

- [ ] 正确
- [ ] 错误

### JAVA-309（判断题）

判断：`List<String> names = new ArrayList<>();` 中，编译器可从赋值上下文推断构造器类型实参。

- [ ] 正确
- [ ] 错误

### JAVA-310（判断题）

判断：因为 Integer 是 Number 的子类，所以 List<Integer> 也是 List<Number> 的子类。

- [ ] 正确
- [ ] 错误

### JAVA-311（判断题）

判断：对 `List<? extends Number>` 可以安全读取 Number，但不能安全加入任意一个非 null 的 Number。

- [ ] 正确
- [ ] 错误

### JAVA-312（判断题）

判断：从 `List<? super Integer>` 读取元素时，可以不经检查直接赋给 Integer 变量。

- [ ] 正确
- [ ] 错误

### JAVA-313（判断题）

判断：Java 会为 Box<String> 和 Box<Integer> 分别生成两份独立的 Box.class。

- [ ] 正确
- [ ] 错误

### JAVA-314（判断题）

判断：把参数化集合交给原始 List 引用后加入错误类型，编译器可能只给 unchecked 警告，而异常延迟到按原类型读取时出现。

- [ ] 正确
- [ ] 错误

### JAVA-315（判断题）

判断：运行时可以用 `obj instanceof List<String>` 精确确认列表中所有元素都是 String。

- [ ] 正确
- [ ] 错误

# 第6讲：多线程与并发

## 单选题

### JAVA-316（单选题）

同一 Java 进程中的两个线程通常具有什么关系？

A. 各自拥有完全隔离的进程地址空间
B. 共享进程资源，但各有执行栈
C. 只能通过 Socket 交换数据
D. 每个线程都必须启动一个 JVM

### JAVA-317（单选题）

GUI 点击后要执行耗时网络请求，较合理的设计是什么？

A. 在界面事件线程同步等待
B. 交给后台任务，界面线程继续响应
C. 不断提高界面线程优先级
D. 调用 yield 直到网络返回

### JAVA-318（单选题）

两个线程同时执行共享变量 `count++`，结果偶尔少于预期，根因最可能是什么？

```java
count++;
```

A. 自增是不可分割操作
B. 发生了读-改-写竞态
C. 线程一定按创建顺序运行
D. JVM 禁止共享整数

### JAVA-319（单选题）

用任务对象创建线程时，该任务通常实现哪个接口？

A. Runnable
B. AutoCloseable
C. Comparable
D. Iterable

### JAVA-320（单选题）

已有 `Thread t`，要让 JVM 调度新线程执行其任务，应调用什么？

```java
t.start();
```

A. t.run()
B. t.start()
C. t.join()
D. t.wait()

### JAVA-321（单选题）

主线程直接执行 `t.run()` 的效果是什么？

```java
t.run();
```

A. 一定创建新线程
B. 通常在主线程中同步执行 run 内容
C. 使 t 进入等待集
D. 关闭线程池

### JAVA-322（单选题）

同一个 Thread 对象已成功调用过 start，再次调用 start 会怎样？

A. 重新从 run 开头执行
B. 抛出 IllegalThreadStateException
C. 自动创建副本
D. 静默忽略

### JAVA-323（单选题）

业务类已经继承某个父类，又希望将其实例作为线程任务，优先选择什么？

A. 再继承 Thread
B. 实现 Runnable
C. 覆盖 Object.wait
D. 创建 ThreadGroup

### JAVA-324（单选题）

已创建但尚未调用 start 的线程处于什么状态？

A. NEW
B. RUNNABLE
C. WAITING
D. TERMINATED

### JAVA-325（单选题）

线程的 run 方法正常返回后，线程进入什么状态？

A. NEW
B. BLOCKED
C. TERMINATED
D. 可再次 start

### JAVA-326（单选题）

线程持有对象监视器时调用 Thread.sleep，锁会怎样？

A. 自动释放
B. 仍由该线程持有
C. 转交给优先级最高者
D. 永久销毁

### JAVA-327（单选题）

调用 Thread.yield 后，最稳妥的预期是什么？

A. 当前线程永久停止
B. 给调度器一个让出执行机会的提示
C. 低优先级线程必然立即运行
D. 释放所有锁

### JAVA-328（单选题）

线程 A 调用 `b.join()` 时表达的依赖是什么？

```java
b.join();
```

A. B 等待 A
B. A 等待 B 终止
C. A 中断 B
D. A 与 B 交换优先级

### JAVA-329（单选题）

对正在 sleep 的线程调用 interrupt，通常会发生什么？

A. 直接强杀线程
B. sleep 抛出 InterruptedException
C. 线程对象变为 null
D. 自动重启 run

### JAVA-330（单选题）

循环任务捕获 InterruptedException 后决定退出，较合适的处理是什么？

A. 忽略后无限继续
B. 清理资源并返回，必要时恢复中断标志
C. 调用 Thread.stop
D. 再次 start 当前线程

### JAVA-331（单选题）

哪个方法会检测并清除当前线程的中断状态？

A. isAlive()
B. isInterrupted()
C. Thread.interrupted()
D. getState()

### JAVA-332（单选题）

对一个已创建但未 start 的线程调用 isAlive，结果是什么？

A. true
B. false
C. 抛出异常
D. 取决于优先级

### JAVA-333（单选题）

为什么不应使用 Thread.stop 强制结束业务线程？

A. 它只能用于主线程
B. 可能在任意点终止并破坏共享状态一致性
C. 它会提高线程优先级
D. 它只适用于线程池

### JAVA-334（单选题）

创建 Thread 时未显式指定 ThreadGroup，通常会怎样？

A. 线程不属于任何组
B. 继承创建它的线程所属组
C. 总进入系统组且不可查询
D. 每次随机选择组

### JAVA-335（单选题）

大量短任务使用线程池的主要收益是什么？

A. 保证任务按提交顺序完成
B. 复用线程并限制并发资源
C. 消除所有竞态
D. 让每个任务独占 CPU

### JAVA-336（单选题）

Executor 框架将哪两件事解耦？

A. 源代码与字节码
B. 任务提交与任务执行
C. 对象创建与垃圾回收
D. 锁获取与异常处理

### JAVA-337（单选题）

`newFixedThreadPool(3)` 最直接表示什么？

A. 永远只接收三个任务
B. 最多以三个池线程并发处理任务
C. 每个任务创建三个线程
D. 三秒后关闭

### JAVA-338（单选题）

ExecutorService 调用 shutdown 后，哪项描述正确？

A. 立即强制停止全部正在运行任务
B. 不再接收新任务，并有序完成已提交任务
C. 等待完成后自动重新开放
D. 清空所有 Future 结果

### JAVA-339（单选题）

相较 Runnable，Callable 的突出能力是什么？

A. 只能在主线程运行
B. 可返回结果并抛出受检异常
C. 自动获得对象锁
D. 不需要线程池

### JAVA-340（单选题）

提交 Callable 得到 Future 后，调用 get 的典型语义是什么？

A. 立即取消任务
B. 等待并取得计算结果
C. 提高任务优先级
D. 释放任务持有的锁

### JAVA-341（单选题）

实例 synchronized 方法进入前获取哪一个监视器？

A. 当前实例 this
B. 当前 Thread 对象
C. 方法的 ClassLoader
D. 任意新建 Object

### JAVA-342（单选题）

static synchronized 方法使用的锁是什么？

A. 任意实例的 this
B. 声明该方法的 Class 对象
C. 当前线程的栈
D. 线程池队列

### JAVA-343（单选题）

只需保护方法中的余额更新，缩小 synchronized 范围的主要意义是什么？

A. 让更新不再互斥
B. 减少持锁时间，提高无关代码并发度
C. 使异常无法抛出
D. 保证严格公平

### JAVA-344（单选题）

100 个不同 Runnable 实例共同修改同一个 account，在各自 run 中 `synchronized(this)` 为什么无效？

A. this 不是对象
B. 线程锁住了不同 Runnable 实例，未形成共同互斥
C. synchronized 只能修饰方法
D. account 不允许加锁

### JAVA-345（单选题）

使用 ReentrantLock 时，释放锁最稳妥的结构是什么？

A. lock 后直接 return
B. lock 后以 try/finally 在 finally 中 unlock
C. 只在 catch 中 unlock
D. 交给 GC 自动 unlock

### JAVA-346（单选题）

`new ReentrantLock(true)` 中 true 表示什么？

A. 锁可跨进程共享
B. 启用公平获取策略
C. 锁永不阻塞
D. 自动检测死锁

### JAVA-347（单选题）

Condition 对象通常如何获得？

A. new Condition()
B. 由 Lock.newCondition() 创建
C. 由 Thread.currentThread() 返回
D. 由 Future.get() 返回

### JAVA-348（单选题）

等待余额充足时为什么应使用 `while (balance < amount) await()` 而不是 if？

A. while 会自动加锁
B. 线程醒来后必须重新检查条件
C. if 不能写在 try 中
D. await 只允许循环调用

### JAVA-349（单选题）

线程调用对象的 wait 前必须满足什么条件？

A. 持有该对象的监视器
B. 线程优先级为 10
C. 对象实现 Runnable
D. 线程属于 main 组

### JAVA-350（单选题）

线程在 `synchronized(lock)` 内执行 `lock.wait()` 后，监视器怎样变化？

A. 继续持有直到超时
B. 释放 lock 监视器并进入等待集
C. 锁被永久删除
D. 自动转给调用 notify 的线程

### JAVA-351（单选题）

多个消费者可能等待不同条件变化时，生产者通常为何更适合 notifyAll？

A. 它会让所有线程同时持锁
B. 避免只唤醒不满足当前条件的等待者而无人继续推进
C. 它按优先级完成所有任务
D. 它不要求持有监视器

### JAVA-352（单选题）

Semaphore 最适合解决哪类问题？

A. 限制同时访问稀缺资源的线程数
B. 确保字符串不可变
C. 创建线程组
D. 保证任务提交顺序

### JAVA-353（单选题）

成功 acquire 一个许可后，任务结束时通常应做什么？

A. 再次 acquire
B. 在 finally 中 release
C. 调用 wait 代替
D. 销毁 Semaphore

### JAVA-354（单选题）

两个线程分别先持有 A、B，再互相等待对方锁，形成了什么？

A. 活锁
B. 死锁
C. 线程安全
D. 无锁算法

### JAVA-355（单选题）

多个线程需同时获得两把锁时，哪种措施最直接降低死锁风险？

A. 随机决定加锁顺序
B. 所有线程按统一全局顺序获取锁
C. 提高所有线程优先级
D. 在持锁时无限 sleep

### JAVA-356（单选题）

从 Collections.synchronizedList 得到列表后进行整体迭代，通常还应怎样做？

A. 不需任何措施
B. 按其约定在返回列表对象上同步迭代过程
C. 复制每个元素到 ThreadLocal
D. 调用 Thread.stop 阻止写线程

### JAVA-357（单选题）

并发账户中读取余额、计算新余额并写回的不可交错部分称为什么？

A. 守护区
B. 临界区
C. 类路径
D. 线程组

### JAVA-358（单选题）

把共享计数器声明为 volatile 后执行 `count++`，能否保证无丢失更新？

A. 能，volatile 让复合操作原子化
B. 不能，volatile 提供可见性但不把读改写变为原子操作
C. 能，因为整数永远线程安全
D. 不能，因为 volatile 变量不可写

### JAVA-359（单选题）

ThreadLocal 更适合哪种需求？

A. 让每个线程保存彼此隔离的上下文副本
B. 让所有线程原子递增同一计数器
C. 限制并发连接数
D. 等待另一个线程结束

### JAVA-360（单选题）

Callable 在执行时抛出异常，调用 Future.get 的线程通常如何获知？

A. 异常被永久吞掉
B. 收到以 ExecutionException 包装的失败
C. Future 自动改为 null
D. 线程池立即销毁

## 多选题

### JAVA-361（多选题）

关于同一进程内多个线程，哪些说法正确？

A. 共享堆中的对象
B. 各自拥有调用栈
C. 变量共享后无需同步
D. 线程切换通常比进程切换轻量

### JAVA-362（多选题）

哪些场景通常能从合理的多线程设计中受益？

A. 网络等待期间处理其他工作
B. 后台计算避免阻塞 GUI
C. 无条件让任意线程同时写同一文件
D. 在多核上并行独立计算

### JAVA-363（多选题）

与继承 Thread 相比，实现 Runnable 的优点有哪些？

A. 任务与线程机制分离
B. 业务类仍可继承其他类
C. 保证任务无竞态
D. 便于交给线程池执行

### JAVA-364（多选题）

哪些操作可能让当前线程暂时不再运行？

A. Thread.sleep
B. 在目标线程上 join
C. 等待监视器条件的 wait
D. 读取普通局部变量

### JAVA-365（多选题）

关于 sleep 与 wait，哪些说法正确？

A. sleep 是 Thread 的静态方法
B. wait 定义在 Object 中
C. wait 会释放调用对象的监视器
D. sleep 必然释放全部已持有锁

### JAVA-366（多选题）

适合使用 join 的场景有哪些？

A. 汇总线程等待各工作线程完成
B. 任务 B 的输入依赖任务 A 的输出
C. 限制最多三个线程访问连接池
D. 重新启动已终止线程

### JAVA-367（多选题）

关于 Java 中断机制，哪些说法正确？

A. interrupt 通常请求协作而非强杀
B. 阻塞方法可能抛 InterruptedException
C. isInterrupted 查询时必然清除标志
D. 任务代码应明确决定如何响应

### JAVA-368（多选题）

关于线程优先级，哪些工程判断合理？

A. 可用 MIN/NORM/MAX 常量表达
B. 高优先级不应作为正确性保证
C. 不同平台调度细节可能不同
D. 优先级可消除数据竞争

### JAVA-369（多选题）

关于 ThreadGroup，哪些说法符合课件？

A. 可在创建线程时指定所属组
B. 线程启动后可任意换组
C. 可对组中活动线程发出 interrupt
D. 默认情况下子线程继承创建者线程组

### JAVA-370（多选题）

线程池相对每任务新建线程的优势有哪些？

A. 复用工作线程
B. 控制并发数量
C. 统一关闭管理
D. 保证任何共享对象线程安全

### JAVA-371（多选题）

服务停止接单后希望尽量完成已提交任务，合理步骤有哪些？

A. 调用 shutdown
B. 使用 awaitTermination 等待一段时间
C. 超时后按策略考虑 shutdownNow
D. 关闭后继续提交新任务

### JAVA-372（多选题）

关于 Callable 与 Future，哪些说法正确？

A. Callable 可产生结果
B. Future 可查询是否完成
C. Future.get 可能阻塞
D. Future 保证任务不会失败

### JAVA-373（多选题）

关于 `future.cancel(true)`，哪些理解合理？

A. 表示尝试取消任务
B. true 允许中断正在运行的任务
C. 保证任务已在任意指令点强制终止
D. 任务仍需正确响应中断

### JAVA-374（多选题）

线程持有对象 x 的监视器时，哪些说法正确？

A. 其他线程不能进入以 x 为锁的同步块
B. 当前线程可重入同一监视器
C. 其他线程仍可调用 x 的非同步方法
D. 自动锁住所有其他对象

### JAVA-375（多选题）

要修复账户 deposit 的丢失更新，哪些方案可能正确？

A. 同步整个 deposit 方法
B. 仅对共同 account 对象同步读改写块
C. 使用同一个 Lock 包围读改写
D. 每个任务各锁自己的 this

### JAVA-376（多选题）

设计 synchronized 块时，哪些做法通常有助于正确性与吞吐？

A. 只覆盖共享状态的不变量更新
B. 所有参与者约定同一锁对象
C. 在锁内执行不相关的慢网络调用
D. 明确锁保护哪些字段

### JAVA-377（多选题）

显式 Lock 的典型正确用法包含哪些步骤？

A. 调用 lock 获取锁
B. 在 finally 中 unlock
C. 在未获得锁时无条件 unlock
D. 把受保护更新放在 try 中

### JAVA-378（多选题）

调用 Condition.await/signal 前，通常必须满足哪些要求？

A. 持有关联 Lock
B. 条件由该 Lock 创建
C. 等待谓词放在 while 中重检
D. 先释放所有 Java 对象引用

### JAVA-379（多选题）

关于对象监视器协作，哪些说法正确？

A. wait 需在持有该对象锁时调用
B. notify 唤醒后被唤醒者仍需重新竞争锁
C. notifyAll 使等待者立即并行进入临界区
D. 等待条件应循环检查

### JAVA-380（多选题）

账户余额不足时的提款协作中，哪些设计合理？

A. 提款线程等待余额条件
B. 存款后发出条件信号
C. 提款醒来后重新检查余额
D. 提款线程忙循环且永不让出锁

### JAVA-381（多选题）

一个有 10 个连接的连接池使用 Semaphore(10)，哪些说法正确？

A. 成功 acquire 后才能占用连接
B. 归还连接时应 release
C. 最多约束十个同时持有许可者
D. 许可会让连接操作自动线程安全

### JAVA-382（多选题）

哪些做法可降低多锁代码的死锁风险？

A. 统一锁获取顺序
B. 避免持锁时调用不可控外部代码
C. 使用可超时的锁获取并回退
D. 每次随机交换锁顺序

### JAVA-383（多选题）

使用同步包装 List 时，哪些操作仍应关注复合原子性？

A. 先检查不存在再添加
B. 遍历整个列表
C. 单独调用 size
D. 跨多个方法保持业务不变量

### JAVA-384（多选题）

关于 volatile，哪些说法正确？

A. 可改善线程间可见性
B. 不保证 count++ 原子性
C. 适合所有多字段不变量
D. 常用于简单状态标志

### JAVA-385（多选题）

哪些策略可用于获得线程安全？

A. 避免共享可变状态
B. 用一致的锁保护不变量
C. 采用原子类处理合适的单变量更新
D. 假设测试没复现竞态就算安全

### JAVA-386（多选题）

规划线程池大小时，应考虑哪些因素？

A. 任务是 CPU 密集还是 I/O 密集
B. 可用 CPU 核心和下游容量
C. 任务时延与队列积压
D. 只把线程数设为 Integer.MAX_VALUE

### JAVA-387（多选题）

测试共享计数器竞态时，哪些判断正确？

A. 一次结果正确不能证明线程安全
B. 增加并发和重复次数可能提高复现概率
C. sleep 可用于放大窗口但不是修复
D. 只在单核成功即可证明多核安全

## 判断题

### JAVA-388（判断题）

同一进程中的线程通常可以访问该进程内的共享对象，因此通信方便，但也可能产生数据竞争。

- [ ] 正确
- [ ] 错误

### JAVA-389（判断题）

对同一个 Thread 实例，可以在每次 run 方法结束后再次调用 start 来复用它。

- [ ] 正确
- [ ] 错误

### JAVA-390（判断题）

直接调用某 Thread 对象的 run 方法，通常不会创建新的执行线程。

- [ ] 正确
- [ ] 错误

### JAVA-391（判断题）

只要给线程设置最高优先级，就能保证它一定先于所有低优先级线程完成。

- [ ] 正确
- [ ] 错误

### JAVA-392（判断题）

当前线程调用 Thread.sleep 时，会自动释放它持有的全部对象监视器。

- [ ] 正确
- [ ] 错误

### JAVA-393（判断题）

在线程 A 中调用 B.join()，会使 A 等待 B 结束后再继续。

- [ ] 正确
- [ ] 错误

### JAVA-394（判断题）

调用 interrupt 必然在调用点立即终止目标线程。

- [ ] 正确
- [ ] 错误

### JAVA-395（判断题）

ExecutorService.shutdown() 的含义是停止接收新任务，并允许已提交任务有序完成。

- [ ] 正确
- [ ] 错误

### JAVA-396（判断题）

Future.get 在计算尚未完成时可能阻塞调用线程。

- [ ] 正确
- [ ] 错误

### JAVA-397（判断题）

两个不同 Account 实例的 synchronized 实例方法必然使用同一把锁。

- [ ] 正确
- [ ] 错误

### JAVA-398（判断题）

static synchronized 方法锁定的是声明该方法的 Class 对象。

- [ ] 正确
- [ ] 错误

### JAVA-399（判断题）

多个任务修改同一账户时，每个任务都对自己的 this 加锁即可保证账户更新互斥。

- [ ] 正确
- [ ] 错误

### JAVA-400（判断题）

ReentrantLock 的 unlock 通常应放在 finally 中，以免异常路径遗留锁。

- [ ] 正确
- [ ] 错误

### JAVA-401（判断题）

线程从 Condition.await 返回后，可以不检查条件就直接假设业务谓词成立。

- [ ] 正确
- [ ] 错误

### JAVA-402（判断题）

notifyAll 被调用后，所有等待线程会立刻同时持有该对象监视器并执行临界区。

- [ ] 正确
- [ ] 错误

### JAVA-403（判断题）

Semaphore.release 应与成功获得的许可配对，否则可能破坏并发数量约束。

- [ ] 正确
- [ ] 错误

### JAVA-404（判断题）

让所有线程按一致的全局顺序获取多把锁，可以破坏形成循环等待的机会。

- [ ] 正确
- [ ] 错误

### JAVA-405（判断题）

volatile 可以保证其他线程看到较新的值，但不能单独保证 count++ 的复合原子性。

- [ ] 正确
- [ ] 错误

# 第7讲：UML 类图

## 单选题

### JAVA-406（单选题）

类图属性前的 `-` 表示什么可见性？

A. private
B. public
C. protected
D. package

### JAVA-407（单选题）

`calculateTotal(qty: int): double` 中，double 表示什么？

A. 方法返回类型
B. 方法可见性
C. 参数默认值
D. 类的父类型

### JAVA-408（单选题）

在 UML 类图中，成员名称带下划线通常表示什么？

A. static 成员
B. abstract 成员
C. final 成员
D. 构造方法

### JAVA-409（单选题）

`SavingsAccount` 是 `Account` 的一种，类图应优先使用哪种关系？

A. 泛化
B. 组合
C. 依赖
D. 聚合

### JAVA-410（单选题）

类 `CsvExporter` 实现接口 `Exporter`，类图中应使用什么关系？

A. 实现
B. 关联
C. 组合
D. 依赖

### JAVA-411（单选题）

OrderService 的一个方法临时接收 EmailSender 参数，但不长期保存它。最贴近哪种关系？

A. 依赖
B. 组合
C. 聚合
D. 泛化

### JAVA-412（单选题）

一个 Department 可关联 0 到多个 Employee，哪种多重性最合适？

A. 0..*
B. 1
C. 0..1
D. 1..1

## 多选题

### JAVA-413（多选题）

阅读 UML 类成员时，哪些对应关系正确？

A. + 表示 public
B. # 表示 protected
C. ~ 表示 package 可见
D. 斜体表示 static

### JAVA-414（多选题）

以下哪些属于课件列出的类之间关系？

A. 泛化
B. 实现
C. 关联
D. 编译

### JAVA-415（多选题）

区分依赖与关联时，哪些判断有帮助？

A. 方法局部临时使用通常是依赖
B. 对象把另一对象长期保存为字段通常更接近关联
C. 关联一般比依赖表达更稳定的联系
D. 只要两个类出现在同一文件就必然是组合

### JAVA-416（多选题）

关于整体-部分关系，哪些说法正确？

A. 聚合中的部分可脱离整体存在
B. 组合通常由整体负责部分生命周期
C. 空心菱形表示聚合
D. 实心菱形应画在部分一端

### JAVA-417（多选题）

哪些场景的 UML 关系选择合理？

A. Dog 继承 Animal 用泛化
B. ArrayList 实现 List 用实现
C. Controller 方法调用 Validator 用依赖
D. Car 与 Engine 生命周期强绑定却只画成泛化

## 判断题

### JAVA-418（判断题）

判断：UML 类图中，下划线成员通常表示 static。

- [ ] 正确
- [ ] 错误

### JAVA-419（判断题）

判断：聚合要求部分对象必须与整体同时销毁，绝不能独立存在。

- [ ] 正确
- [ ] 错误

### JAVA-420（判断题）

判断：组合关系使用实心菱形，并且菱形位于表示整体的一端。

- [ ] 正确
- [ ] 错误

# 第8讲：输入输出与数据库连接

## 单选题

### JAVA-421（单选题）

程序从文件取得数据时，相对程序而言该流属于什么？

A. 输入流
B. 输出流
C. 随机流
D. 事务流

### JAVA-422（单选题）

复制 PNG 图片时，优先选择哪组抽象流体系？

A. Reader/Writer
B. InputStream/OutputStream
C. Scanner/Formatter
D. Console/PrintWriter

### JAVA-423（单选题）

读取 UTF-8 文本并明确指定字符集，哪种组合最合适？

A. new FileInputStream(path) 直接当字符读
B. new InputStreamReader(new FileInputStream(path), UTF_8)
C. new DataInputStream(path)
D. new ObjectInputStream(path)

### JAVA-424（单选题）

`InputStream.read()` 返回 -1 表示什么？

A. 读到字节 255
B. 到达流末尾
C. 暂时没有换行
D. 流已自动关闭

### JAVA-425（单选题）

用 BufferedInputStream 包装 FileInputStream 的主要目的是什么？

A. 自动把二进制变成对象
B. 减少底层小粒度读操作次数
C. 让文件永久不被删除
D. 绕过所有 IOException

### JAVA-426（单选题）

`new BufferedReader(new FileReader(file))` 体现了什么设计？

A. 用处理流包装节点流扩展按行和缓冲能力
B. 创建两个互不相关的数据源
C. 把字符流强制转成字节流
D. 让文件内容驻留数据库

### JAVA-427（单选题）

哪种写法最可靠地保证文件流在正常或异常路径都被关闭？

A. 只在方法最后调用 close
B. try-with-resources
C. 依赖 finalize
D. 调用 System.gc

### JAVA-428（单选题）

关闭最外层 BufferedWriter 后，通常对其包装的 FileWriter 有何影响？

A. 底层 writer 也被关闭
B. 底层永远保持打开
C. 文件自动删除
D. 只清空缓冲但不关闭

### JAVA-429（单选题）

网络或文件输出尚未关闭但需要尽快提交缓冲数据，应调用什么？

A. mark()
B. flush()
C. reset()
D. available()

### JAVA-430（单选题）

用 DataOutputStream.writeInt 写入后，匹配读取方式是什么？

A. readLine
B. readInt
C. readObject
D. nextInt

### JAVA-431（单选题）

Java 标准错误输出通过哪个对象访问？

A. System.in
B. System.out
C. System.err
D. System.console

### JAVA-432（单选题）

读取密码时使用 Console.readPassword 的典型优势是什么？

A. 返回数据库连接
B. 可避免在终端回显密码
C. 自动加密并存库
D. 保证 System.console 永不为 null

### JAVA-433（单选题）

连续调用 `nextInt()` 后立刻调用 `nextLine()`，为何可能得到空字符串？

A. nextInt 删除了整个文件
B. 整数后的行分隔符仍待 nextLine 消费
C. Scanner 只能读取一次
D. nextLine 只读数字

### JAVA-434（单选题）

将浮点数按两位小数输出，合适的格式说明是什么？

A. %d
B. %.2f
C. %s2
D. %c.2

### JAVA-435（单选题）

普通业务类的对象要被 ObjectOutputStream.writeObject 写出，类通常需实现什么接口？

A. Runnable
B. Serializable
C. Closeable
D. Comparable

### JAVA-436（单选题）

字段声明为 transient 的直接含义是什么？

A. 默认序列化时跳过该字段
B. 字段永久不可修改
C. 字段自动成为 static
D. 字段只允许数据库使用

### JAVA-437（单选题）

执行 `new File("report.txt")` 时，哪项一定成立？

A. 磁盘文件立即创建
B. 仅创建抽象路径对象
C. 文件内容被读入内存
D. 父目录自动创建

### JAVA-438（单选题）

父目录均不存在时，要一次创建多级目录应优先调用什么？

A. createNewFile
B. mkdir
C. mkdirs
D. listRoots

### JAVA-439（单选题）

调用 File.delete 删除一个非空目录，典型结果是什么？

A. 递归删除成功
B. 返回 false，目录内容仍在
C. 抛出 SQL 异常
D. 自动移到回收站

### JAVA-440（单选题）

现代 NIO 中，读取路径元数据或操作文件通常使用哪组类型？

A. Path 与 Files
B. Reader 与 DriverManager
C. Statement 与 File
D. Console 与 ResultSet

### JAVA-441（单选题）

RandomAccessFile.seek(100) 的作用是什么？

A. 把文件截断为 100 字节
B. 将文件指针移到距开头 100 字节处
C. 读取接下来 100 行
D. 把内容排序

### JAVA-442（单选题）

建立 JDBC 数据库会话后，代表该会话的核心对象是什么？

A. Connection
B. File
C. Scanner
D. Console

### JAVA-443（单选题）

执行 `SELECT id,name FROM user`，Statement 最适合调用哪个方法？

A. executeUpdate
B. executeQuery
C. writeObject
D. createNewFile

### JAVA-444（单选题）

取得 ResultSet 后，读取第一行字段前通常必须先做什么？

A. 调用 next()
B. 调用 commit()
C. 调用 seek(0)
D. 调用 flush()

### JAVA-445（单选题）

接收用户输入条件查询时，哪种写法最有助于避免 SQL 注入？

A. 拼接输入到 SQL 字符串
B. 使用 PreparedStatement 占位符并绑定参数
C. 先写入文本文件
D. 使用 Statement.addBatch 拼接

### JAVA-446（单选题）

转账需两条 UPDATE 要么都成功要么都失败，首要设置是什么？

A. setAutoCommit(false)
B. setReadOnly(true)
C. close()
D. clearWarnings()

### JAVA-447（单选题）

显式事务中第二条更新失败，保持数据一致性的合适操作是什么？

A. 继续 commit
B. 调用 rollback
C. 只关闭 ResultSet
D. 重新执行 SELECT 即可

### JAVA-448（单选题）

要把 id=7 的用户姓名改为 Li，哪条 SQL 合适？

A. SELECT name FROM users WHERE id=7
B. UPDATE users SET name='Li' WHERE id=7
C. DELETE FROM users WHERE id=7
D. ALTER TABLE users ADD name

## 多选题

### JAVA-449（多选题）

以下哪些匹配关系正确？

A. 图片复制使用字节流
B. 文本解码使用 Reader
C. OutputStream 面向字节输出
D. Writer 适合直接输出任意序列化对象图

### JAVA-450（多选题）

关于缓冲输出流，哪些说法正确？

A. flush 可提交缓冲数据
B. close 通常会先刷新再关闭
C. 缓冲能减少底层写调用
D. 使用缓冲后永远不会抛 IOException

### JAVA-451（多选题）

哪些资源适合声明在 try-with-resources 中？

A. 实现 AutoCloseable 的 InputStream
B. JDBC Connection
C. JDBC Statement
D. 普通 int 局部变量

### JAVA-452（多选题）

关于处理流，哪些说法正确？

A. 常包装另一条流
B. 可增加缓冲或数据类型读写能力
C. 必然直接连接磁盘文件
D. 关闭外层通常应释放整条流链

### JAVA-453（多选题）

关于 Scanner，哪些说法正确？

A. 默认按空白分隔 token
B. nextInt 可解析下一个整数 token
C. nextLine 读取当前行剩余内容
D. 关闭包装 System.in 的 Scanner 永远不会影响 System.in

### JAVA-454（多选题）

关于 Java 默认序列化，哪些说法正确？

A. 类通常实现 Serializable
B. transient 字段通常不写入默认序列化数据
C. readObject 返回 Object，常需类型转换
D. 序列化天然适合作为长期稳定跨版本数据库格式

### JAVA-455（多选题）

仅创建 `File f=new File(path)` 后，哪些判断仍需调用方法或访问文件系统才能确定？

A. 路径是否存在
B. 它是否是普通文件
C. 它是否是目录
D. 变量 f 是否为 File 类型

### JAVA-456（多选题）

关于 Path/Files，哪些说法正确？

A. Path 可表示文件系统路径
B. Files.exists 可检查存在性
C. Files.copy 可复制文件
D. Path 对象创建必然同步创建磁盘文件

### JAVA-457（多选题）

关于 RandomAccessFile，哪些说法正确？

A. 可用 seek 改变文件指针
B. getFilePointer 返回当前位置
C. 读写后指针通常随字节数移动
D. 只能从文件头顺序读到文件尾

### JAVA-458（多选题）

典型 JDBC 查询流程涉及哪些对象？

A. Connection
B. Statement 或 PreparedStatement
C. ResultSet
D. ObjectOutputStream

### JAVA-459（多选题）

哪些 SQL 通常使用 executeUpdate 并返回受影响行数或 0？

A. INSERT
B. UPDATE
C. DELETE
D. SELECT

### JAVA-460（多选题）

遍历 ResultSet 时，哪些做法正确？

A. 用 while(rs.next()) 逐行前进
B. 在 next 返回 true 后读取当前行列值
C. 可按列名读取字段
D. 未经 next 就默认位于第一行

### JAVA-461（多选题）

使用 PreparedStatement 的合理收益有哪些？

A. 参数绑定降低注入风险
B. 相同 SQL 结构可重复执行不同参数
C. 可用 setInt/setString 表达类型
D. 允许把表名作为普通 ? 参数任意替换

### JAVA-462（多选题）

手动事务模式下，哪些做法合理？

A. 所有操作成功后 commit
B. 捕获失败后 rollback
C. finally 或 try-with-resources 关闭连接
D. 每条语句前重新 setAutoCommit(true)

### JAVA-463（多选题）

哪些语句若遗漏 WHERE 可能影响表中大量记录？

A. UPDATE users SET active=0
B. DELETE FROM users
C. SELECT * FROM users
D. CREATE TABLE users(id INT)

### JAVA-464（多选题）

查询完成后通常需要关闭哪些资源？

A. ResultSet
B. Statement
C. Connection
D. SQL 字符串对象必须调用 close

## 判断题

### JAVA-465（判断题）

输入流和输出流的方向是以运行中的程序为参照定义的。

- [ ] 正确
- [ ] 错误

### JAVA-466（判断题）

Reader/Writer 主要面向字符数据，InputStream/OutputStream 主要面向字节数据。

- [ ] 正确
- [ ] 错误

### JAVA-467（判断题）

使用 BufferedReader 后，底层读取就不可能再发生 IOException。

- [ ] 正确
- [ ] 错误

### JAVA-468（判断题）

只要对象最终会被垃圾回收，就无需显式关闭文件流。

- [ ] 正确
- [ ] 错误

### JAVA-469（判断题）

transient 字段默认不会作为对象持久状态写入 ObjectOutputStream。

- [ ] 正确
- [ ] 错误

### JAVA-470（判断题）

构造一个 File 对象就会在磁盘上立即创建对应文件。

- [ ] 正确
- [ ] 错误

### JAVA-471（判断题）

RandomAccessFile 可以用 seek 把记录指针移到指定字节偏移。

- [ ] 正确
- [ ] 错误

### JAVA-472（判断题）

ResultSet 创建后游标已默认停在第一行，可以不调用 next 直接读取。

- [ ] 正确
- [ ] 错误

### JAVA-473（判断题）

把用户输入直接拼接进 SQL，与占位符参数绑定具有同等的注入防护效果。

- [ ] 正确
- [ ] 错误

### JAVA-474（判断题）

关闭自动提交后，多条更新可在成功时统一 commit，失败时 rollback。

- [ ] 正确
- [ ] 错误

### JAVA-475（判断题）

执行不带 WHERE 的 DELETE FROM users 通常会删除表中的全部记录，而不是删除表结构。

- [ ] 正确
- [ ] 错误

# 第9讲：反射机制与网络编程

## 单选题

### JAVA-476（单选题）

已知类型名 `Order`，不创建对象即可获得其 Class 对象的写法是哪一项？

```java
Class<Order> type = Order.class;
```

A. Order.class
B. new Class(Order)
C. Order.reflect()
D. Class.newInstance(Order)

### JAVA-477（单选题）

配置文件只提供全限定类名时，通常用什么获取对应 Class？

A. Class.forName(name)
B. name.getClass()
C. new Class(name)
D. System.loadClass(name)

### JAVA-478（单选题）

运行时已有对象 `service`，取得其实际运行时 Class 的直接方法是什么？

A. service.getClass()
B. service.class
C. Class.of(service)
D. service.getType()

### JAVA-479（单选题）

现代 Java 中通过无参构造器反射创建实例，推荐哪种写法？

```java
Object value = clazz.getDeclaredConstructor().newInstance();
```

A. clazz.newInstance()
B. clazz.getDeclaredConstructor().newInstance()
C. new clazz()
D. Constructor.create(clazz)

### JAVA-480（单选题）

希望获得当前类自己声明的全部字段，包括非 public 字段，应调用什么？

A. getFields()
B. getDeclaredFields()
C. getAllFields()
D. fields()

### JAVA-481（单选题）

要取得 public 方法 `send(String,int)`，哪项调用能准确区分重载？

A. getMethod("send")
B. getMethod("send", String.class, int.class)
C. getDeclaredMethods("send")
D. getMethod(String.class, int.class)

### JAVA-482（单选题）

要获取当前类声明的私有 `User(String)` 构造器，应选择什么？

A. getConstructor(String.class)
B. getDeclaredConstructor(String.class)
C. getMethod("User")
D. getDeclaredField("User")

### JAVA-483（单选题）

只想读取元素上直接声明的某个 `Audit` 注解，应优先调用什么？

A. getDeclaredAnnotation(Audit.class)
B. getAnnotation(String.class)
C. getDeclaredField(Audit.class)
D. Class.forName("Audit")

### JAVA-484（单选题）

已取得实例方法对应的 Method m，要在对象 target 上以参数 x 调用它，应写什么？

A. m.invoke(target, x)
B. target.invoke(m, x)
C. m.run(target, x)
D. Class.invoke(m, target)

### JAVA-485（单选题）

对高频、签名固定的核心业务调用，为什么通常不应无差别改成反射？

A. 反射完全不能调用 public 方法
B. 会增加类型检查、异常处理和维护成本，并可能影响性能
C. 反射代码一定无法编译
D. 反射只能用于网络类

### JAVA-486（单选题）

需要可靠、有序的字节流并先建立连接，应选择哪种传输协议？

A. UDP
B. TCP
C. ARP
D. ICMP

### JAVA-487（单选题）

TCP 服务器调用 ServerSocket.accept() 后，成功时返回什么？

A. 用于该客户端连接通信的 Socket
B. 一个 DatagramPacket
C. 服务器 IP 字符串
D. 新的 ServerSocket

## 多选题

### JAVA-488（多选题）

哪些写法可以取得某个对象或类型对应的 Class 对象？

A. Customer.class
B. customer.getClass()
C. Class.forName("com.example.Customer")
D. new Class<Customer>()

### JAVA-489（多选题）

关于 `getFields` 与 `getDeclaredFields`，哪些说法正确？

A. getFields 可返回可见的 public 字段并考虑继承
B. getDeclaredFields 包含本类声明的非 public 字段
C. getDeclaredFields 自动包含父类全部私有字段
D. 发现字段不等于一定有权读写它

### JAVA-490（多选题）

使用 Constructor.newInstance 或 Method.invoke 时，调用方应考虑哪些问题？

A. 目标成员可能不存在
B. 访问可能不被允许
C. 被调用代码的异常可能被包装传播
D. 编译器可保证运行时字符串签名永远正确

### JAVA-491（多选题）

哪些需求通常适合合理使用反射？

A. 框架按配置装配实现类
B. 扫描运行时注解建立映射
C. 插件按类名动态加载
D. 固定数学函数的每次普通调用

### JAVA-492（多选题）

关于 TCP，哪些描述正确？

A. 面向连接
B. 提供可靠有序传输
C. 面向字节流
D. 天然支持一对多无连接广播

### JAVA-493（多选题）

关于 UDP，哪些描述正确？

A. 以独立数据报为单位
B. 不保证按序到达
C. 发送前必须完成 TCP 三次握手
D. 适合可容忍少量丢失且重视时效的数据

### JAVA-494（多选题）

关于 IP 地址和端口，哪些说法正确？

A. IP 用于标识网络主机或接口地址
B. 端口用于区分主机上的网络应用端点
C. 端口有效范围为 0 到 65535
D. 同一主机所有进程可无条件同时独占绑定同一地址端口

### JAVA-495（多选题）

下列 Java 网络类与用途的对应关系中，哪些正确？

A. ServerSocket—监听 TCP 连接
B. Socket—TCP 连接端点
C. DatagramPacket—UDP 数据报内容与地址信息
D. DatagramSocket—只解析 HTTP URL

## 判断题

### JAVA-496（判断题）

新代码应优先使用 `clazz.getDeclaredConstructor().newInstance()`，而不是已弃用的 `clazz.newInstance()`。

- [ ] 正确
- [ ] 错误

### JAVA-497（判断题）

只要使用反射，就可以在任何运行环境中无条件访问所有 private 成员。

- [ ] 正确
- [ ] 错误

### JAVA-498（判断题）

TCP 服务器可以让监听线程持续 accept，并把每个已连接 Socket 交给独立任务处理。

- [ ] 正确
- [ ] 错误

### JAVA-499（判断题）

DatagramSocket 发送成功即可证明数据报已经按序到达接收端。

- [ ] 正确
- [ ] 错误

### JAVA-500（判断题）

URL 可以包含协议、主机、可选端口和资源路径；省略端口时通常采用协议默认端口。

- [ ] 正确
- [ ] 错误
