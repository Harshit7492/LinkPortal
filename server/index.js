const express=require('express')
const app=express()
const cors=require('cors')
const mongoose =require('mongoose')  
mongoose.set('strictQuery', false);
const {getUserData}=require('./controllers/getUserData')
const {dashboardData} =require('./controllers/dashboard')
const {registerUser, loginUser}=require('./controllers/auth')
require('dotenv').config();
const {saveSocials,saveProfile, saveLinks} =require('./controllers/saveItems')
const {loadLinks,loadSocials} =require('./controllers/loadPrevious')

app.use(cors());
app.use(express.json())


mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected successfully');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });
app.post('/api/register',registerUser)
app.post('/data/dashboard',dashboardData)
app.get('/get/:handle',getUserData)
app.post("/save/socials", saveSocials);
app.post("/save/profile", saveProfile);
app.post("/save/links", saveLinks);
app.post("/load/socials", loadSocials);
app.post("/load/links", loadLinks);

app.post('/api/login',loginUser)


app.get('/',(req,res)=>{
    res.send(`server is running on port no ${port}`)
})  


const port=process.env.PORT || 8080;

app.listen(port,()=>{
    console.log(`Server is running is on the port ${port}`)
})