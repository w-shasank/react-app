

 const data = async ()=>{
    const response =fetch('http://127.0.0.1:5500/try.html')
    const data = await response.text()
    console.log(data)
 }