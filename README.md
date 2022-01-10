# 项目启动

npm install -> npm run serve -> npm run build



# 环境变量

约定法，不需要做任何额外的配置，只需要按照规定起名就可以。

文件名：.env, .env.development, .env.production 三个中的一个

可用的变量名：NODE_ENV, BASE_URL, 和其他以VUE_APP_开头的变量。



开发环境会合并.env和.env.development, 生产环境会合并.env 和 .env.production。



> 注意.env在任何环境下都会加载



.env内容

```
NODE_ENV=development
```

如果想要获取生产环境的代码，需要手动更改此配置项为 production 



.development和.production里有BASE_URL的配置。之后其他你在应用程序用到的使用VUE_APP_XXX命名就可以。



通过以上规范设置的环境变量在程序中可以直接通过process.env.xxx访问到。









