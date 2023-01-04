
import Button from "../../components/Button/Button";
import Link from "next/link";

export default async function Fetch(){

    async function getData(){
        const res = await fetch('https://jsonplaceholder.typicode.com/comments')
        return res.json()
    }

    const data = await getData()

    return(
        <>
            <h3> Data Fetching</h3>

            <p>Loading...</p>

        </>
    )
}


// {data.map(d => {
//
//     return(
//         <>
//             <div key={d.id}>
//
//                 <Link href={`/fetch/${d.id}`}>{d.email}</Link>
//             </div>
//         </>
//     )
// })}