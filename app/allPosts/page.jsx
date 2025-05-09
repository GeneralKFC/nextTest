import AllPosts from "../components/AllPosts";
import Header from "../components/Header";
async function fetchData() {
    const res=await fetch('https://jsonplaceholder.typicode.com/posts');
    const result=await res.json();
    return result;
}
async function fetchDataCommends() {
    const res=await fetch('https://jsonplaceholder.typicode.com/comments');
    const result=await res.json();
    return result;
}
export default async function AllPost() {
    const res=await fetchData();
    const comm=await fetchDataCommends();
    return(
        <div>

            <AllPosts res={res} comm={comm}/>

        </div>
    )
} 