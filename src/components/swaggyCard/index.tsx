/*
 * @Description:
 * @version:
 * @Author: zouwenqin
 * @Date: 2024-08-11 20:44:52
 * @LastEditors: zouwenqin
 * @LastEditTime: 2024-09-08 20:51:07
 */
"use client";
import { ISwaggy, IWordInfo } from "../../app/owner/enum";
import { Typography } from "@mui/material";
import TooltipInfo from "../tooltipInfo";
import styles from "./index.module.scss";
import ReactDOM from "react-dom";
import React, { useEffect, useState } from "react";

interface PortalProps {
  children: React.ReactNode;
}
const Portal: React.FC<PortalProps> = ({ children }: PortalProps) => {
  const [portalElement, setPortalElement] = useState<React.ReactPortal | null>();
  useEffect(() => {
    if (typeof document !== "undefined") {
      console.log('document', document);
      
      let element = document.querySelector(".layout_inner-container__5WfI0")
      setPortalElement(element ? ReactDOM.createPortal(children, element) : null);
    }
  }, [children]);
  return portalElement;
};

interface IProps {
  info: ISwaggy;
}
const renderOriginText = (
  originText: string,
  arr: Array<IWordInfo>,
  bindClick: (
    position: {
      x: number;
      y: number;
    },
    item?: IWordInfo
  ) => void
): any => {
  const parts = originText.split(/\[\d\]/g);
  const list: any[] = [];
  parts.forEach((ele: string, index: number) => {
    list.push(ele);
    if (index < arr.length) {
      const item = arr[index];
      list.push(
        <span
          className={styles["tooltip"]}
          key={index}
          onClick={(event: React.MouseEvent<HTMLSpanElement>) => {
            const x = event.clientX;
            const y = event.clientY;
            bindClick({ x, y }, item);
          }}
        >
          {item.word.originalWord}
        </span>
      );
    }
  });
  return list;
};

const SwaggyCard = (props: IProps) => {
  const [chooseItem, setChooseItem] = useState<IWordInfo>();
  const [x, setX] = useState<number>(0);
  const [y, setY] = useState<number>(0);
  const bindClick = (position: { x: number; y: number }, item?: IWordInfo) => {
    console.log("position", position);
    console.log("item", item);
    setChooseItem(item);
    setX(position.x);
    setY(position.y);
  };
  return (
    <div className={styles["swaggy-card"]}>
      <div className={styles.quote}>
        <Typography
          variant="subtitle2"
          gutterBottom
          className={styles["quote-text"]}
        >
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <>
            {renderOriginText(
              props?.info?.originText,
              props?.info?.points,
              bindClick
            )}
          </>
        </Typography>
      </div>
      {/* <Portal>
        <TooltipInfo item={chooseItem} position={{ x: x, y: y }} />
      </Portal> */}
    </div>
  );
};
export default SwaggyCard;
