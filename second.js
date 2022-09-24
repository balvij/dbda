const fs=require('fs');
var counter=1;
function write(){
    counter++;
    var message="wellcome "+ counter;
    fs.writeFile("hello.txt",message,()=>{
        console.log('content is written in file successfully')


});
}

function read(){
    fs.readFile("hello.txt",(err,data)=>{
        var str=data.toString();
        console.log(str);
    });

}



setInterval(write,5000);
setInterval(read,10000);