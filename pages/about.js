import Link from 'next/link';
import React from 'react';


const about = ({ data }) => {
    return (
        <div>
            <h1> total users={data.length}</h1>
            {data.map(u => <div key={u.id}>
                <p> {u.name} <Link href={`/user/${u.id}`}> <button>Explore</button> </Link> </p>
            </div>)}
        </div>
    );
};

export default about;

export async function getStaticProps(context) {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json();

    return {
        props: { data }, // will be passed to the page component as props
    }
}