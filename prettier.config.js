module.exports = {
    printWidth: 100, // 每行代码长度（默认80）
    tabWidth: 4, // 每个tab相当于多少个空格（默认2）
    useTabs: false, // 是否使用tab进行缩进（默认false）
    semi: false, // 声明结尾使用分号(默认true)
    singleQuote: false, // 使用单引号（默认false）
    jsxSingleQuote: false, // 在 JSX 中使用单引号（默认false）
    trailingComma: "es5", // 多行使用拖尾逗号（默认es5）
    bracketSpacing: true, // 对象字面量的大括号间使用空格（默认true）
    bracketSameLine: false, // 将多行 HTML（HTML、JSX、Vue、Angular）元素放在最后一行的末尾，而不是单独放在下一行
    jsxBracketSameLine: false, // 多行JSX中的>放置在最后一行的结尾，而不是另起一行（默认false）
    arrowParens: "avoid", // 只有一个参数的箭头函数的参数是否带圆括号（默认always）
    vueIndentScriptAndStyle: false, //vue文件中的script和style标签是否缩进（默认false）
    endOfLine: "crlf", // 换行符，默认auto，可选值：auto、lf、crlf、cr
    singleAttributePerLine: false, // HTML、Vue 和 JSX 中 单个属性是否换行（默认false）
}
