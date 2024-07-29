/*
 * @Description:
 * @version:
 * @Author: zouwenqin
 * @Date: 2024-07-30 00:22:58
 * @LastEditors: zouwenqin
 * @LastEditTime: 2024-07-30 01:22:40
 */
"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
const $ = require('jquery');
export default function Home() {
  const [partOfSpeechList, setPartOfSpeechList] = useState<Array<{label: string, info: string}>>([
    { label: 'Noun', info: '(n.) - 名词' },
    { label: 'Pronoun', info: '(pron.) - 代词' },
    { label: 'Verb', info: '(v.) - 动词' },
    { label: 'transitive verb', info: '(vt.) - 及物动词' },
    { label: 'intransitive verb', info: '(vi.) - 不及物动词' },
    { label: 'Adjective', info: '(adj.) - 形容词' },
    { label: 'Adverb', info: '(adv.) - 副词' },
    { label: 'Preposition', info: '(prep.) - 介词' },
    { label: 'Conjunction', info: '(conj.) - 连词' },
    { label: 'Interjection', info: '(interj.) - 感叹词' },
    { label: 'Article', info: '(art.) -冠词' },
    { label: 'determiner', info: '(det.) - 限定词' },
    { label: 'Auxiliary Verb', info: '(aux.) - 助动词' },
    { label: 'Modal Verb', info: '(modal.) - 情态动词' },
    { label: 'Gerund', info: '(ger.) - 动名词' },
    { label: 'Participle', info: '(part.) - 分词' },
    { label: 'Infinitive', info: '(inf.) - 不定式' }
  ]);
  const handleClick = () => {
    const $partOfSpeechDOM =$('.page_partOfSpeech__nzTPw');
    $partOfSpeechDOM.slideToggle();
  }
  return (
    <main className={styles.main}>
      <button onClick={ handleClick }>展开/收起单词词性表</button>
      <div className={styles.partOfSpeech}>
        {
          partOfSpeechList.map((ele, index: number) => {
            return (
              <div key={index} className={styles.speechItem}>
                { ele.label }<b>{ ele.info }</b>
              </div>
            )
          })
        }
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th colSpan={2}>[i:](发音类似于中文 咦~ )</th>
          </tr>
        </thead>
        <tbody>
        <tr>
          <td>
            sheep
            <br /> [ʃi:p] <br />
            n. 绵羊
          </td>
          <td>
            Have you seen my sheep
            <br />
            你有看到我的绵羊吗？
          </td>
        </tr>
        <tr>
          <td>
            cheap
            <br /> [tʃi:p] <br />
            adj. 便宜的/小气的
          </td>
          <td>
            He is a cheap person.
            <br />
            他是个小气鬼
          </td>
        </tr>
        <tr>
          <td>
            believe
            <br /> [bɪˈli:v] <br />
            v. 相信/认定/信任
          </td>
          <td>
            I believe i can fly
            <br />
            我相信我能飞翔
          </td>
        </tr>
        <tr>
          <td>
            magazine
            <br /> [ˈmæɡəziːn] <br />
            n. 杂志/期刊
          </td>
          <td>
            Forbes magazine is a great source of information on business
            <br />
            《福布斯》杂志是商业信息的绝佳来源
          </td>
        </tr>
        <tr>
          <td>
            see
            <br /> /si:/ <br />
            vt. 看见/领会
            <br />
            vi. 看/领会
          </td>
          <td>
            Come and see for yourself
            <br />
            来亲眼看看
            <br />
            See for yourself
            <br />
            亲自看/亲自核实
            <br />
            see .... coming
            <br />
            预料到
            <br />I didn’t see that coming{" "}
            <span style={{ color: "red" }}>(*didn’t = did not)</span>
            <br />
            我真没料到这个
            <br />
            see somebody off
            <br />
            送别
            <br />
            I will see you off tomorrow
            <br />
            我明天送你离开
            <br />
            see out
            <br />
            离开
            <br />
            I will see myself out
            <br />
            我自己走，不用送了
            <br />
            see through
            <br />
            看穿/看透/识破
            <br />
            I see through your tricks
            <br />
            我看穿了你的把戏
            <br />
            see about
            <br />
            办理/安排
            <br />
            we will see about that!
            <br />
            我们走着瞧！（对某事生气的时候，意思是后面你
            要重新安排，阻止之前的）
          </td>
        </tr>
        </tbody>
      </table>
    </main>
  );
}
