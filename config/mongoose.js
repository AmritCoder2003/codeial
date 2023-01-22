const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/codeial_development');
const db=mongoose.connection;
db.on('err',console.error.bind(console,"error connecting to mongodb"));
db.once('open',function(){
    console.log('connected to db :: MongoDB');
});

module.exports=db;


