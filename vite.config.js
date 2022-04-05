const { resolve } = require('path')
module.exports = {     
    root: './',     
    build: {       
       outDir: 'dist',
       sourcemap: true,
       rollupOptions:{
           input:{
            main: resolve(__dirname, 'index.html'),
            nested: resolve(__dirname, 'nested/page.html')
           }
       }
            },     
    publicDir: 'public' ,
    publicPath: "/public/",
 } 