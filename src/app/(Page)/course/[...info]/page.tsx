/*
 * @Description: 
 * @version: 
 * @Author: zouwenqin
 * @Date: 2024-08-24 15:50:42
 * @LastEditors: zouwenqin
 * @LastEditTime: 2024-08-24 15:58:01
 */
import React from "react";

interface IProps {
    params: {
        info: any
    }
}
const Page = ({ params }: IProps) => {
    console.log('进入多级路由/course/[...params] >>>', params);
    return (
        <div></div>
    )
}

export default Page;