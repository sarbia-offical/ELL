/*
 * @Description:
 * @version:
 * @Author: zouwenqin
 * @Date: 2024-07-30 00:22:58
 * @LastEditors: zouwenqin
 * @LastEditTime: 2024-07-31 00:26:42
 */
"use client";
import Image from "next/image";
import styles from "./page.module.css";
import React, { useEffect, useState } from "react";
const $ = require("jquery");
interface IPhraseItem {
  originText: string;
  translate: string;
}
interface IExtraInfo {
  wordComponent: React.ReactNode;
  phraseList: Array<IPhraseItem>;
}

const RenderWordComponent = (
  word: string,
  phoneticSymbol: string,
  translate: string | React.ReactNode
) => {
  return (
    <>
      <div>{word}</div>
      <div>{phoneticSymbol}</div>
      <div>{translate}</div>
    </>
  );
};
const RenderExtraComponent = (list: Array<IExtraInfo>) =>
  list.map((item: IExtraInfo, index: number) => (
    <tr key={index}>
      <td>{item.wordComponent}</td>
      <td>
        {item.phraseList.map((item2: IPhraseItem, index2: number) => {
          return (
            <div key={index2}>
              <div>{item2.originText}</div>
              <div>{item2.translate}</div>
            </div>
          );
        })}
      </td>
    </tr>
  ));

export default function Home() {
  const [partOfSpeechList, setPartOfSpeechList] = useState<
    Array<{ label: string; info: string }>
  >([
    { label: "Noun", info: "(n.) - 名词" },
    { label: "Pronoun", info: "(pron.) - 代词" },
    { label: "Verb", info: "(v.) - 动词" },
    { label: "transitive verb", info: "(vt.) - 及物动词" },
    { label: "intransitive verb", info: "(vi.) - 不及物动词" },
    { label: "Adjective", info: "(adj.) - 形容词" },
    { label: "Adverb", info: "(adv.) - 副词" },
    { label: "Preposition", info: "(prep.) - 介词" },
    { label: "Conjunction", info: "(conj.) - 连词" },
    { label: "Interjection", info: "(interj.) - 感叹词" },
    { label: "Article", info: "(art.) -冠词" },
    { label: "determiner", info: "(det.) - 限定词" },
    { label: "Auxiliary Verb", info: "(aux.) - 助动词" },
    { label: "Modal Verb", info: "(modal.) - 情态动词" },
    { label: "Gerund", info: "(ger.) - 动名词" },
    { label: "Participle", info: "(part.) - 分词" },
    { label: "Infinitive", info: "(inf.) - 不定式" },
  ]);
  const [firstLessonExtraInfo, setFirstLessonExtraInfo] = useState<
    Array<IExtraInfo>
  >([
    {
      wordComponent: RenderWordComponent("sheep", "[ʃi:p]", "n. 绵羊"),
      phraseList: [
        {
          originText: "Have you seen my sheep?",
          translate: "你有看到我的绵羊吗？",
        },
      ],
    },
    {
      wordComponent: RenderWordComponent(
        "cheap",
        "[tʃi:p]",
        "adj. 便宜的/小气的"
      ),
      phraseList: [
        {
          originText: "He is a cheap person.",
          translate: "他是个小气鬼",
        },
      ],
    },
    {
      wordComponent: RenderWordComponent(
        "believe",
        "[bɪˈli:v]",
        "v. 相信/认定/信任"
      ),
      phraseList: [
        {
          originText: "I believe i can fly",
          translate: "我相信我能飞翔",
        },
      ],
    },
    {
      wordComponent: RenderWordComponent(
        "magazine",
        "[ˈmæɡəziːn]",
        "n. 杂志/期刊"
      ),
      phraseList: [
        {
          originText:
            "Forbes magazine is a great source of information on business",
          translate: "《福布斯》杂志是商业信息的绝佳来源",
        },
      ],
    },
    {
      wordComponent: RenderWordComponent(
        "see",
        "/si:/",
        <>
          {"vt. 看见/领会"}
          <br />
          {"vi. 看/领会"}
        </>
      ),
      phraseList: [
        {
          originText: "See for yourself",
          translate: "亲自看/亲自核实",
        },
        {
          originText: "Come and see for yourself",
          translate: "来亲眼看看",
        },
        {
          originText: "see .... coming",
          translate: "预料到",
        },
        {
          originText: "I didn’t see that coming (*didn’t = did not)",
          translate: "我真没料到这",
        },
        {
          originText: "see somebody off",
          translate: "送别",
        },
        {
          originText: "I will see you off tomorrow",
          translate: "我明天送你离开",
        },
        {
          originText: "see out",
          translate: "离开",
        },
        {
          originText: "I will see myself out",
          translate: "我自己走，不用送了",
        },
        {
          originText: "see through",
          translate: "看穿/看透/识破",
        },
        {
          originText: "I see through your tricks",
          translate: "我看穿了你的把戏",
        },
        {
          originText: "See about",
          translate: "安排/办理",
        },
        {
          originText: "We will see about that",
          translate:
            "我们走着瞧！（对某事生气的时候，意思是后面你 要重新安排，阻止之前的）",
        },
      ],
    },
  ]);

  const [secondLessonExtraInfo, setSecondLessonExtraInfo] = useState<
    Array<IExtraInfo>
  >([
    {
      wordComponent: RenderWordComponent(
        "chip",
        "[tʃɪp]",
        <>
          {"n. 薯片"}
          <br />
          {"v. 打破"}
          <br />
          {"adj. (雀,栗鼠等)唧唧叫的"}
        </>
      ),
      phraseList: [
        {
          originText: "Buy potato chips",
          translate: "购买薯片",
        },
        {
          originText: "Buy a bag of potato chips",
          translate: "购买一包薯片"
        }
      ],
    },
    {
      wordComponent: RenderWordComponent(
        "ticket",
        "[ˈtɪkɪt]",
        "n. 票/罚单"
      ),
      phraseList: [
        {
          originText: "I got a ticket（got，get的过去式和过去分词）",
          translate: "我获得了一张罚单",
        },
      ],
    },
    {
      wordComponent: RenderWordComponent(
        "comedy",
        "[ˈkɒmədi]",
        "n. 喜剧"
      ),
      phraseList: [
        {
          originText: "King of comedy",
          translate: "喜剧之王",
        },
      ],
    },
    {
      wordComponent: RenderWordComponent(
        "give",
        "/giv/",
        "vt. 给；产生；让步；举办；授予"
      ),
      phraseList: [
        {
          originText: "Give away",
          translate: "泄密/赠送",
        },
        {
          originText: "Can not give away your position",
          translate: "不能泄露你的位置"
        },
        {
          originText: "The only thing im give away, is your personal information",
          translate: "我唯一要泄露的就是你的个人信息"
        },
        {
          originText: "You shouldn't give it away ",
          translate: "你不应该把它送出去"
        },
        {
          originText: "Give up",
          translate: "放弃"
        },
        {
          originText: 'Never give up',
          translate: '永不言弃'
        },
        {
          originText: 'Give in',
          translate: '退缩/让步/屈服/投降'
        },
        {
          originText: 'Just give in',
          translate: '就放弃吧'
        },
        {
          originText: 'Give off',
          translate: '散发出（气体 光 烟雾 水 味道等）'
        },
        {
          originText: "I don't want to give off a bad vibe",
          translate: "我不想散发出不好的气氛。这个句子表示你不想给别人带来负面的感觉或印象。"
        },
        {
          originText: "Give a hand",
          translate: "帮帮忙"
        },
        {
          originText: "Give me a hand?",
          translate: "能帮帮我吗？"
        },
        {
          originText: "Give it a go",
          translate: "试一试"
        },
        {
          originText: "Your wanna give it a go?",
          translate: "你想试一试吗？"
        }
      ],
    },
  ]);

  const handleClick = () => {
    const $partOfSpeechDOM = $(".page_partOfSpeech__nzTPw");
    $partOfSpeechDOM.slideToggle();
  };
  return (
    <main className={styles.main}>
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
      <table className={styles.table}>
        <thead>
          <tr>
            <th colSpan={2}>[i:](发音类似于中文 咦~ )</th>
          </tr>
        </thead>
        <tbody>{RenderExtraComponent(firstLessonExtraInfo)}</tbody>
      </table>

      <table className={styles.table}>
        <thead>
          <tr>
            <th colSpan={2}>[i](发音类似于中文 诶~ )</th>
          </tr>
        </thead>
        <tbody>{RenderExtraComponent(secondLessonExtraInfo)}</tbody>
      </table>
    </main>
  );
}
