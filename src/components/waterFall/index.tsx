/*
 * @Description: 
 * @version: 
 * @Author: zouwenqin
 * @Date: 2024-08-17 15:51:32
 * @LastEditors: zouwenqin
 * @LastEditTime: 2024-08-17 23:26:27
 */
"use client"
import React, { useEffect } from "react";
import styles from "./index.module.scss";


export interface IWaterFallItem {
  wordLength: number
  component: React.ReactElement
};

const WaterFall = (InnerComponents: React.ComponentType) => {
  useEffect(() => {
    console.log('InnerComponents', InnerComponents);
  }, [InnerComponents])
  const WrapperComponent = () => {
    return <div className={styles['water-fall']}>
        <InnerComponents/>
    </div>;
  };
  return WrapperComponent;
}

const WaterFallItem = (props: IWaterFallItem) => {
  console.log('props.wordLength', props.wordLength);
  const length = props.wordLength
  let index = length >= 50 ? 4
    : length >= 30 && length < 50 ? 4
    : length > 10 && length < 30 ? 3
    : 2;
  console.log('length', length);
  console.log('index', index);
  return (
    <div className={styles['water-fall-item']} style={{'gridRow': `auto / span ${index}`}}>
      { props.component }
    </div>
  )
}

export {
  WaterFall,
  WaterFallItem
}
