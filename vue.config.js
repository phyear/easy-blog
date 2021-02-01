module.exports = {
    devServer:{
        port: 3000,
        open: true,
        proxy: {
            '/api': {
                target: 'http://localhost:18000',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}