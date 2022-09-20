import path from 'path';

export default {
    mode: 'development',
    entry:{
        map:'./src/js/map.js',
        adImage: '/src/js/adImage.js'
    },output:{
        filename:'[name].js',
        path: path.resolve('public/js')
    }
}