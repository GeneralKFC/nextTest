import AllPosts from "../components/AllPosts";
import Header from "../components/Header";
import HeaderWrapper from "../components/HeaderWrapper";
async function fetchData() {
    const res=await fetch('https://jsonplaceholder.typicode.com/posts');
    const result=await res.json();
    return result;
}
async function fetchDataCommends() {
    const comm=await fetch('https://jsonplaceholder.typicode.com/comments');
    const comments=await comm.json();
    return comments;
}
export default async function AllPost() {
    const res=await fetchData();
    const comm=await fetchDataCommends();
    return(
        <div>

            <AllPosts res={res} />

        </div>
    )
} 