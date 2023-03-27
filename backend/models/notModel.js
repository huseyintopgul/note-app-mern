const mongoose = require('mongoose')


const Sema = mongoose.Schema


const notSema = Sema({
    baslik:{
        type:String,
        required:[true, 'Başlık zorunlu olarak girilmelidir.']
    },
    aciklama:{
        type:String,
        required:[true, 'Açıklama zorunlu olarak girilmelidir.']
    }
}, {
    timestamps:true
})

module.exports=mongoose.model('Not', notSema)