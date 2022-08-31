export async function studentApi(){
    try{
        return await fetch(``)
        .then(res => res.json())
    }catch(error){console.log(error);}
}