import { Image } from "./Image"
const pizza = "https://img.freepik.com/premium-photo/traditional-italian-pasta-with-tomato-sauce-basil-and-cheese-on-the-black-background-top-down-view-with-copy-space_221774-9149.jpg?w=2000";

export const Table3line = ()=>{
    return (
        <tr><td className='Text_menyu'>Пицца</td><td><Image src={pizza} /></td><td>400</td><td>500 руб.</td></tr>
    )
}