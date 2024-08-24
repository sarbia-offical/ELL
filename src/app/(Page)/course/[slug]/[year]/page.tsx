/*
 * @Description: 
 * @version: 
 * @Author: zouwenqin
 * @Date: 2024-08-24 15:26:08
 * @LastEditors: zouwenqin
 * @LastEditTime: 2024-08-24 15:59:29
 */
interface IProps {
    params: {
        year: string
    }
}
const Year = (props : IProps) => {
    console.log('进入二级路由 course/[slug]/[year] >>>', props);
    return (
        <div>
        </div>
    )
}

export default Year;