## *JavaScript简史*

### ***1.JavaScript历史回顾***

​	***JavaScript诞生于1995年。当时，他的目的是处理以前由服务器端语言负责的输入验证操作。***

​	***在JavaScript问世之前，必须把表单数据发送到服务器端才能确定用户是否填写某个必填域，是否填入了无效的***

***值，JavaScript也在这种情况下，应运而生。***



### *2.JavaScript定义*

​	***JavaScript实现必须由下面三个不同的部分组成***

>1.核心 ECMAScript
>2.文档对象模型(DOM)
>3.浏览器对象模型(BOM)

#### *1.ECMAScript*
```
	我们常见的web浏览器只是ECMAScript实现可能的宿主环境之一
	宿主环境不仅提供基础的ECMAScript实现，也会包括语言的扩展，以便语言和环境之间互相交互
而这些扩展则利用ECMAScript的核心功能和语法实现更多的功能。其他的环境包括Node和Adobe Flash
	
ECMAScript定义了什么？
1.语法
2.类型
3.语句
4.关键字
5.保留字
6.操作符
7.对象
```



#### *2.DOM*

```
	文档对象模型DOM，是针对XML但经过扩展用于HTML的应用程序接口，DOM把页面映射成一个多层节点结构
HTML或者XML页面的每个组成部分是某种类型的节点，这些节点包含了不同类型的数据。

<html>
	<head>
		<title>Sample Page</title>
	</head>
	<body>
		<p>hello world</p>
	</body>
</html>

DOM1分为DOM core和DOM html
DOM2引入了下列新模块
DOM视图　DOM事件 DOM样式 DOM遍历和范围
DOM3对DOM进一步进行了扩展
新增DOM Load and Save
和DOM验证 DOM Validation
```



#### *3.BOM*

```
BOM的功能如下
1.弹出新浏览器的功能
2.移动缩放和关闭浏览器窗口的功能
3.提供浏览器详细信息的navigator
4.提供浏览器加载界面的详细信息的location对象
5.提供用户显示器分辨率详细信息的screen
6.对cookies的支持
7.对XMLhttpRequest的支持
```



## *1.JavaScript And Html*

### *1.`<script>`元素*

```
 按照惯例 script元素需要放在head中
 但是这样，会影响页面的加载效率，在脚本很多的情况下，放在body里面
```