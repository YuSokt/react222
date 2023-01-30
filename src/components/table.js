
import { Image } from "./Image"
const buuzy = "https://static.wixstatic.com/media/1a29ad_a0df4b0292824b73887b363c2ac6596d~mv2_d_1871_1871_s_2.jpg/v1/fill/w_315,h_298,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/1a29ad_a0df4b0292824b73887b363c2ac6596d~mv2_d_1871_1871_s_2.jpg";
const pasta = "https://ir.ozone.ru/s3/club-storage/images/article_image_1632x1000/386/44b74902-2d41-4394-8325-69c02e307974.jpeg";
const pizza = "https://img.freepik.com/premium-photo/traditional-italian-pasta-with-tomato-sauce-basil-and-cheese-on-the-black-background-top-down-view-with-copy-space_221774-9149.jpg?w=2000";

export const Table = () => {
    return (
        <table border="1" className='Table'>
        <tr >
         <th>Наименование</th>
         <th>Изображение</th>
         <th>Граммовка</th>
         <th>Цена</th>
        </tr>
        <tr><td className='Text_menyu'>Буузы</td><td><Image src={buuzy} /></td><td>150</td><td>220 руб.</td></tr>
        <tr><td className='Text_menyu'>Паста</td><td><Image src={pasta} /></td><td>290</td><td>460 руб.</td></tr>
        <tr><td className='Text_menyu'>Пицца</td><td><Image src={pizza} /></td><td>400</td><td>500 руб.</td></tr>
  
       </table>
    )
}