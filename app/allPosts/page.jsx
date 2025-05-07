import AllPosts from "../components/AllPosts";
async function fetchData() {
    const res=await fetch('https://jsonplaceholder.typicode.com/posts')
    const result=await res.json();
    return result;
}
export default async function AllPost() {
    const res=await fetchData();
    return(
        <div>

            <AllPosts res={res}/>

        </div>
    )
} 