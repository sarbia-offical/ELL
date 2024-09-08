import styles from "./index.module.scss";
import { ISwaggy, IWordInfo } from "../../app/owner/enum";
import { useEffect, useState } from "react";

interface IProps {
  item?: IWordInfo;
  position: {
    x: number;
    y: number;
  };
}
const TooltipInfo = ({ item, position }: IProps) => {
  const [validX, setValidX] = useState(position.x);
  const [validY, setValidY] = useState(position.y);

  useEffect(() => {
    console.log('position', position);
    
    const maxWidth = window.innerWidth;
    const maxHeight = window.innerHeight;
    setValidX(Math.max(0, Math.min(position.x, maxWidth)));
    setValidY(Math.max(0, Math.min(position.y, maxHeight)));
  }, [position]);

  return item ? (
    <div
      className={styles["tooltip-info-container"]}
      style={{ top: `${validY}px`, left: `${validX}px` }}
    >
      <span className={styles["info"]}>
        <span className={styles["pronounce"]}>
          {item.word.originalWord}/{item.word.phoneticSymbol}
        </span>
        <span className={styles["text"]}></span>
      </span>
    </div>
  ) : (
    ""
  );
};
export default TooltipInfo;
