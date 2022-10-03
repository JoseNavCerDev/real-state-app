import path from 'path';

export default {
    mode: 'development',
    entry:{
        map:'./src/js/map.js',
        adImage: './src/js/adImage.js',
        showMap: './src/js/showMap.js',
        startMap: './src/js/startMap.js'
    },output:{
        filename:'[name].js',
        path: path.resolve('public/js')
    }
}