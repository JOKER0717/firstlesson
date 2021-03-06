let http=require('http');
let url=require('url');
let fs=require('fs')
let fsPromise=fs.promises;
function readjson(){
    return fsPromise.readFile('./good.json','utf8').then(data=>{
        return JSON.parse(data)
    })
}
//引入轮播图 
let banner=require('./banner')
http.createServer((req,res)=>{
    //允许哪个域名跨域 
res.setHeader('Access-Control-Allow-Origin',"*");
//允许哪个方法跨域
res.setHeader('Access-Control-Allow-Methods','PUT,POST,GET,DELETE')
//预检测存活时间，单位是s
res.setHeader('Access-Control-Max-Age',6)
res.setHeader('Content-Type','text/json;charset=utf8')
if(req.method==='OPITIONS'){
   res.end()//OPITIONS请求不做任何处理
} 
let{pathname,query}=url.parse(req.url,true);
//轮播接口
if(pathname==='/slider'){
    res.end(JSON.stringify({
        code:200,
        data:banner,   
    }))
    return
}
//首页接口
if(pathname==='/hot'){
    readjson().then(data=>{
        let hotdata=data.slice(0,6)
        // console.log(hotdata)
        setTimeout(() => {
            res.end(JSON.stringify({
                code:200,
                data:hotdata
            })) 
        },3000)
    }) 
    return
}
//列表接口
if(pathname==='/list'){
    let page=parseInt(query.page); //取出前端传过来的页数
    // 把所有的数据拿出来 第一页1~5 第二页5~10
    // console.log(page)
    readjson().then(data=>{
        let maxlength=(page+1)*5
        let pagedata=data.slice(maxlength-5,maxlength)
        console.log(pagedata)
        //判断是否有下一页 maxlength>=data.length  没有下一页
        let hasMore=maxlength>=data.length?false:true
        res.end(JSON.stringify({
            code:200,
            data:{
                hasMore,
                pagedata
            }
        }))
    })
    return  
}
//详情接口
if(pathname==='/detail'){
    let id = query.id;
    console.log(id)
    readjson().then(data=>{
        let single = data.find(item=>item.id==id)
        if(!single){
            res.end(JSON.stringify({
                code:201,
                data:{}
            }))
            return
        }
        res.end(JSON.stringify({
            code:200,
            data:single
        }))
    })
    return
}
res.end('404')
}).listen(3000)