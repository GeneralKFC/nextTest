'use client'

import Header from "./Header";
import { useEffect, useState } from "react";

export default function HeaderWrapper() {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        async function loadComments() {
            const res = await fetch('https://jsonplaceholder.typicode.com/comments');
            const data = await res.json();
            setComments(data);
        }
        loadComments();
    }, []);

    return <Header comm={comments} />;
}