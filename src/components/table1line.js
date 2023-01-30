import { Image } from "./Image"
const buuzy = "https://static.wixstatic.com/media/1a29ad_a0df4b0292824b73887b363c2ac6596d~mv2_d_1871_1871_s_2.jpg/v1/fill/w_315,h_298,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/1a29ad_a0df4b0292824b73887b363c2ac6596d~mv2_d_1871_1871_s_2.jpg";

export const Table1line = ()=>{
    return (
        <tr><td className='Text_menyu'>Буузы</td><td><Image src={buuzy} /></td><td>150</td><td>220 руб.</td></tr>
    )
}