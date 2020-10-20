module.exports = {
    configureWebpack:{
        resolve:{//解决路径问题
           
            alias:{//配置别名
                //@是默认别名--src
                'asset':'@assets',
                'components':'@components',
                'common':'@common',
                'network':'@network',
                'views':'@views',
            }

        }
    }
}