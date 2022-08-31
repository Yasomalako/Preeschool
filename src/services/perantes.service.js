export default async function ParentesSerive(){
    try{
        return await fetch(`https://my-json-server.typicode.com/Yasomalako/json.api/db`)
        .then(response=> response.json())
    }catch(error){
        console.log(error)
    }
}