import style from "../../fetch.module.css";
import Link from "next/link";

export default async function ID(){

    async function getData(){
        const res = await fetch('https://jsonplaceholder.typicode.com/comments')
        return res.json()
    }

    const data = await getData()

    return(
        <>
            <h3> Data Fetching</h3>

            {data.map(d => {
                return(
                    <>
                        <div className={style.link} key={d.id}>
                            <Link href={`/fetch/comments/${d.id}`}>{d.id}</Link>
                        </div>
                    </>
                )
            })}

        </>
    )
}
