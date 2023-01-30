import { Image } from "./Image"
const pasta = "https://ir.ozone.ru/s3/club-storage/images/article_image_1632x1000/386/44b74902-2d41-4394-8325-69c02e307974.jpeg";

export const Table2line = ()=>{
    return (
        <tr><td className='Text_menyu'>Паста</td><td><Image src={pasta} /></td><td>290</td><td>460 руб.</td></tr>
    )
}