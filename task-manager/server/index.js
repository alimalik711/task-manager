const express = require('express');
const pool = require('./config/db');
const cors = require('cors')
const routes = require('./routes/authRoutes')
const taskRoutes = require('./routes/taskRoutes')
const adminRoutes = require('./routes/adminRoutes')

const app = express();



app.use(express.json())
app.use(cors())
app.use('/api/auth',routes)
app.use('/api/tasks',taskRoutes)
app.use('/api/admin',adminRoutes)



const getdate = async ()=> { 
    
    try{
    const result = await pool.query('SELECT NOW()')
    console.log(result.rows[0].now)

    

}
catch{
console.log(error);


}
}
getdate()



app.get('/', (req, res) => {
    res.send('Hello, World!');
});


const PORT = process.env.PORT || 5000


app.listen(PORT , ()=>
{
 
    console.log("server is running")

})

