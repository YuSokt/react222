
import { Image } from "./Image"
import { Table1line } from "./table1line";
import { Table2line } from "./table2line";
import { Table3line } from "./table3line";




export const Table = () => {
    return (
        <table border="1" className='Table'>
        <tr >
         <th>Наименование</th>
         <th>Изображение</th>
         <th>Граммовка</th>
         <th>Цена</th>
        </tr>
        <Table1line/>
        <Table2line/>
        <Table3line/>
  
       </table>
    )
}