const mongoose =require('mongoose')
const app=require('./app.js')


const url='mongodb+srv://$_USERNAME_$:$_PASSWORD_$@backenddb.s9aopqm.mongodb.net/$_DB_NAME_$?retryWrites=true&w=majority&appName=BackendDb'
const databaseUser='abhithakur8808';
const databasePassword='243Ha6R5qqVec15o';
const databaseName='img_generator';

let dbLink=url.replace("$_USERNAME_$",databaseUser);
dbLink=dbLink.replace("$_PASSWORD_$",databasePassword);
dbLink=dbLink.replace("$_DB_NAME_$",databaseName);
mongoose.connect(dbLink)
.then(() => console.log('Database Connected!'));

app.listen(8000,()=> {
    console.log('----------- App Started -----------')
});