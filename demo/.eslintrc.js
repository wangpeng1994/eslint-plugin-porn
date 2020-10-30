module.exports = {
    // eslint内置规则集默认都是关闭的，通过以下来启用推荐的规则（内置规则集的子集）
    // extends: 'eslint:recommended',

    // 一个plugin中会定义若干个rule，如果rules字段来指定启用。
    plugins: [
      'porn'
    ],
    // 除了extends一批rules外，还可以继续引入plugins，并通过rules进行启用，
    // 或者对extends中的规则进行修改。
    rules: {
        // 'eqeqeq' : ['error', 'always'], //
        'porn/no-console-log': 2
    }
};
