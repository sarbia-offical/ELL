/*
 * @Description:
 * @version:
 * @Author: zouwenqin
 * @Date: 2024-08-11 20:44:52
 * @LastEditors: zouwenqin
 * @LastEditTime: 2024-08-11 22:06:26
 */
import { ISwaggy, IWordInfo } from "../../app/owner/enum";
import { Typography } from "@mui/material";
import styles from "./index.module.scss";
interface IProps {
  info: ISwaggy;
}
const renderOriginText = (originText: string, arr: Array<IWordInfo>): any => {
  const parts = originText.split(/\[\d\]/g);
  const list: any[] = [];
  parts.forEach((ele: string, index: number) => {
    list.push(ele)
    if(index < arr.length){
      list.push(
        <span className={styles['tooltip']} key={index}>
          {arr[index].word.originalWord}
        </span>
      )
    }
  })
  return list;
}
const SwaggyCard = (props: IProps) => {
  return (
    <div className={styles["swaggy-card"]}>
      <div className={styles.quote}>
        <Typography variant="subtitle2" gutterBottom className={styles["quote-text"]}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<>{renderOriginText(props?.info?.originText, props?.info?.points)}</>
        </Typography>
      </div>
    </div>
  );
};
export default SwaggyCard;
