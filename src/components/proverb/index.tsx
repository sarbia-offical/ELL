import styles from "./index.module.css";
import { IProverb } from "../enum";
export const ProverbComponent = (list?: Array<IProverb<string>>) => (
  <div className={styles.scene}>
    <p className={styles.swaggyEnglish}>Proverb</p>
    {(list || []).map((ele, index) => (
      <div key={index}>
        <p>{ele.originalText}</p>
        <p>{ele.translation}</p>
      </div>
    ))}
  </div>
);
