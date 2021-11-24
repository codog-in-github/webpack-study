console.log('process.env.NODE_ENV :', process.env.NODE_ENV)
if(process.env.NODE_ENV === 'development'){
    console.log(1)
}else{
    console.log(2)
}