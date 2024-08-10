import { IPartOfSpeech } from "../enum"
import styles from "./index.module.css"
const $ = require("jquery");

const PartOfSpeechComponent = (partOfSpeechList: Array<IPartOfSpeech>) => {

  const handleClick = () => {
    const $partOfSpeechDOM = $(".partOfSpeech_partOfSpeech___upnk");
    $partOfSpeechDOM.slideToggle();
  };

  return (
    <>
      <button onClick={handleClick}>展开/收起单词词性表</button>
      <div className={styles.partOfSpeech}>
        {partOfSpeechList.map((ele, index: number) => {
          return (
            <div key={index} className={styles.speechItem}>
              {ele.label}
              <b>{ele.info}</b>
            </div>
          );
        })}
      </div>
    </>
  );
};
export { PartOfSpeechComponent };
