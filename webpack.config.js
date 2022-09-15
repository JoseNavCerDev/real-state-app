import path from 'path';

export default {
    mode: 'development',
    entry:{
        map:'./src/js/map.js'
    },output:{
        filename:'[name]',
        path: path.resolve('public/js')
    }
}