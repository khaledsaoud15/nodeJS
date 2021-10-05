const express  = require('express')
const path = require('path')



const app = express()



const Hours = new Date().getHours()
const Days = new Date().getDay()

app.get('/',(req, res)=>{
    res.sendFile(path.join(__dirname, 'home.html'));
})

if((Hours < 9) || (Hours >17) && (Days ==0) || (Days == 6)){
    app.get('/closed', (req, res)=>{
        res.sendFile(path.join(__dirname,'closed.html'));
    })
}else{
    app.get('/open', (req, res)=>{
        res.sendFile(path.join(__dirname, 'open.html'));
    })
}

app.listen(3000);