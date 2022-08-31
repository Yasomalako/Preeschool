
export default async function TeacheresContext(){
    try{
        return await fetch(`https://my-json-server.typicode.com/Yasomalako/json.api/db`).then(response.json())
    }catch(error){console.log(error);}
    finally{}
}