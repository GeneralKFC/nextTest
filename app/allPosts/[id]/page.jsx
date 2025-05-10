import Post from "../../../app/components/Post.jsx";


async function IdPost(id) {
    const res=await fetch('https://jsonplaceholder.typicode.com/posts/'+ id);
    const result= await res.json();
    return result;
}

export default async function PagePost({params}){
    const res=await IdPost(params.id);
    return(
        <div style={{width:"100%"}} className="post">
        <Post res={res}/>
        </div>
    );
}
