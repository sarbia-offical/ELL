/*
 * @Description: 
 * @version: 
 * @Author: zouwenqin
 * @Date: 2024-08-17 15:51:32
 * @LastEditors: zouwenqin
 * @LastEditTime: 2024-08-18 14:21:32
 */
"use client"
import React, { useEffect } from "react";
import styles from "./index.module.scss";


export interface IWaterFallItem {
  component: React.ReactElement
};

const WaterFall = (InnerComponents: React.ComponentType) => {
  const WrapperComponent = () => {
    return <div className={styles['water-fall']}>
        <InnerComponents/>
    </div>;
  };
  return WrapperComponent;
}

const WaterFallItem = (props: IWaterFallItem) => {
  return (
    <div className={styles['water-fall-item']}>
      { props.component }
    </div>
  )
}

export {
  WaterFall,
  WaterFallItem
}
