const express=require('express');
const cookieParser= require('cookie-parser');


const app= express();
const adminRoute= express();

// express.json() use for post method json data.
app.use(express.json());
app.use(cookieParser());

app.get('/', (req, res)=>{
    console.log(req.originalUrl); //   /
    console.log(req.url);  //   /
    console.log(req.path); //   /
    console.log(req.hostname);//  localhost
    console.log(req.method); //   GET
    console.log(req.protocol); //  http
    console.log(req.cookies); // { myCookie_1: 'cookies data' }
    console.log(req.secure); // false bcz http=false & https = true
    res.send('Home Page');
})

adminRoute.get('/dashboard', (req, res)=>{
    console.log(req.originalUrl); //  /admin/dashboard
    console.log(req.url);   //    /dashboard
    console.log(req.path); //     /dashboard
    res.send('Admin Dashboard.');
})
app.use('/admin', adminRoute);

app.post('/user', (req, res)=>{
    console.log(req.body); //{ id: 1, name: 'Nazmul' }
    res.send('All user POST here');
})

app.get('/user/:id', (req, res)=>{
    console.log(req.params); // { id: '5' }
    console.log(req.params.id);// 5
    console.log(req.query); //{ filter: 'name' } for url= user/5?filter=name
    res.send('Single user.');
})



app.listen(5000, ()=>{
    console.log('Server running on port 5000');
})