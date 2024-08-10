/*
 * @Description:
 * @version:
 * @Author: zouwenqin
 * @Date: 2024-07-30 00:22:58
 * @LastEditors: zouwenqin
 * @LastEditTime: 2024-08-10 22:56:31
 */
"use client";
import styles from "./page.module.css";
import React, { useEffect, useState } from "react";
import {
  RenderWordComponent,
  RenderExtraComponent,
  ProverbComponent,
  PartOfSpeechComponent,
  IExtraInfo,
} from "../../components/index";
import { list } from "../../owner/proverb";
import { partOfSpeech } from "../../owner/partOfSpeech";

export default function Home() {
  const [firstLessonExtraInfo, setFirstLessonExtraInfo] = useState<
    Array<IExtraInfo>
  >([
    {
      wordComponent: (
        <RenderWordComponent
          word={"sheep"}
          phoneticSymbol={"[ʃi:p]"}
          translate={"n. 绵羊"}
        />
      ),
      phraseList: [
        {
          originText: "Have you seen my sheep?",
          translate: "你有看到我的绵羊吗？",
        },
      ],
    },
    {
      wordComponent: (
        <RenderWordComponent
          word={"cheap"}
          phoneticSymbol={"[tʃi:p]"}
          translate={"adj. 便宜的/小气的"}
        />
      ),
      phraseList: [
        {
          originText: "He is a cheap person.",
          translate: "他是个小气鬼",
        },
      ],
    },
    {
      wordComponent: (
        <RenderWordComponent
          word={"believe"}
          phoneticSymbol={"[bɪˈli:v]"}
          translate={"v. 相信/认定/信任"}
        />
      ),
      phraseList: [
        {
          originText: "I believe i can fly",
          translate: "我相信我能飞翔",
        },
      ],
    },
    {
      wordComponent: (
        <RenderWordComponent
          word={"magazine"}
          phoneticSymbol={"[ˈmæɡəziːn]"}
          translate={"n. 杂志/期刊"}
        />
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
      wordComponent: (
        <RenderWordComponent
          word={"see"}
          phoneticSymbol={"/si:/"}
          translate={
            <>
              {"vt. 看见/领会"}
              <br />
              {"vi. 看/领会"}
            </>
          }
        />
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
      wordComponent: (
        <RenderWordComponent
          word={"chip"}
          phoneticSymbol={"[tʃɪp]"}
          translate={
            <>
              {"n. 薯片"}
              <br />
              {"v. 打破"}
              <br />
              {"adj. (雀,栗鼠等)唧唧叫的"}
            </>
          }
        />
      ),
      phraseList: [
        {
          originText: "Buy potato chips",
          translate: "购买薯片",
        },
        {
          originText: "Buy a bag of potato chips",
          translate: "购买一包薯片",
        },
      ],
    },
    {
      wordComponent: (
        <RenderWordComponent
          word={"ticket"}
          phoneticSymbol={"[ˈtɪkɪt]"}
          translate={"n. 票/罚单"}
        />
      ),
      phraseList: [
        {
          originText: "I got a ticket（got，get的过去式和过去分词）",
          translate: "我获得了一张罚单",
        },
      ],
    },
    {
      wordComponent: (
        <RenderWordComponent
          word={"comedy"}
          phoneticSymbol={"[ˈkɒmədi]"}
          translate={"n. 喜剧"}
        />
      ),
      phraseList: [
        {
          originText: "King of comedy",
          translate: "喜剧之王",
        },
      ],
    },
    {
      wordComponent: (
        <RenderWordComponent
          word={"give"}
          phoneticSymbol={"/giv/"}
          translate={"vt. 给；产生；让步；举办；授予"}
        />
      ),
      phraseList: [
        {
          originText: "Give away",
          translate: "泄密/赠送",
        },
        {
          originText: "Can not give away your position",
          translate: "不能泄露你的位置",
        },
        {
          originText:
            "The only thing im give away, is your personal information",
          translate: "我唯一要泄露的就是你的个人信息",
        },
        {
          originText: "You shouldn't give it away ",
          translate: "你不应该把它送出去",
        },
        {
          originText: "Give up",
          translate: "放弃",
        },
        {
          originText: "Never give up",
          translate: "永不言弃",
        },
        {
          originText: "Give in",
          translate: "退缩/让步/屈服/投降",
        },
        {
          originText: "Just give in",
          translate: "就放弃吧",
        },
        {
          originText: "Give off",
          translate: "散发出（气体 光 烟雾 水 味道等）",
        },
        {
          originText: "I don't want to give off a bad vibe",
          translate:
            "我不想散发出不好的气氛。这个句子表示你不想给别人带来负面的感觉或印象。",
        },
        {
          originText: "Give a hand",
          translate: "帮帮忙",
        },
        {
          originText: "Give me a hand?",
          translate: "能帮帮我吗？",
        },
        {
          originText: "Give it a go",
          translate: "试一试",
        },
        {
          originText: "Your wanna give it a go?",
          translate: "你想试一试吗？",
        },
      ],
    },
  ]);

  const [firstLessonSwaggy, setFirstLessonSwaggy] = useState<Array<IExtraInfo>>(
    [
      {
        wordComponent: (
          <RenderWordComponent
            word={"be straight with"}
            phoneticSymbol={""}
            translate={"坦白/实话实说"}
          />
        ),
        phraseList: [
          {
            originText:
              "I respect your honesty, so i’ll just be straight with you",
            translate: "我欣赏你的诚实，那我就实话和你说了",
          },
          {
            originText: "He is straight",
            translate: "straight也有直男直女的意思",
          },
          {
            originText: "let me get this straight",
            translate: "让我搞明白这件事",
          },
        ],
      },
      {
        wordComponent: (
          <RenderWordComponent
            word={"Apartment"}
            phoneticSymbol={"[əˈpɑːtmənt]"}
            translate={"n. 公寓"}
          />
        ),
        phraseList: [
          {
            originText: "We rented an apartment",
            translate: "我们租了一套公寓",
          },
          {
            originText: "You got it a ready?, Is it big enough?",
            translate: "你已经准备好了？他够大吗？",
          },
          {
            originText: "This is your apartment, Peter",
            translate: "这是你的公寓，彼得",
          },
        ],
      },
      {
        wordComponent: (
          <RenderWordComponent
            word={"Even if"}
            phoneticSymbol={""}
            translate={"就算，即使"}
          />
        ),
        phraseList: [
          {
            originText: "Even if you have a dark skin, you still need sunblock",
            translate: "就算你皮肤黑，那也仍然需要防晒霜",
          },
        ],
      },
      {
        wordComponent: (
          <RenderWordComponent
            word={"property"}
            phoneticSymbol={"[ˈprɒpəti]"}
            translate={"房产/财产"}
          />
        ),
        phraseList: [
          {
            originText: "The bought a piece of property by the lake",
            translate: "他们在湖边买了一处房产（by the lake 在湖边）",
          },
        ],
      },
      {
        wordComponent: (
          <RenderWordComponent
            word={"ownership"}
            phoneticSymbol={"[ˈəʊnəʃɪp]"}
            translate={"所有权"}
          />
        ),
        phraseList: [
          {
            originText: "Who has the ownership of this house?",
            translate: "谁有这所房子的所有权？",
          },
        ],
      },
      {
        wordComponent: (
          <RenderWordComponent
            word={"certificate"}
            phoneticSymbol={"[səˈtɪfɪkət]"}
            translate={"证书"}
          />
        ),
        phraseList: [
          {
            originText: "High-level certificate",
            translate: "高级证书",
          },
        ],
      },
      {
        wordComponent: (
          <RenderWordComponent
            word={"property ownership certificate"}
            phoneticSymbol={""}
            translate={"房产证"}
          />
        ),
        phraseList: [
          {
            originText:
              "I had property ownership certificate before ten years ago",
            translate: "十年前我就有房产证了",
          },
        ],
      },
      {
        wordComponent: (
          <RenderWordComponent
            word={"necessarily"}
            phoneticSymbol={"[ˌnesəˈserəli]"}
            translate={"adv .必要的 必然的"}
          />
        ),
        phraseList: [
          {
            originText: "He way lying, of course. Not necessarily",
            translate: "他肯定在说谎。不一定",
          },
        ],
      },
      {
        wordComponent: (
          <RenderWordComponent
            word={"necessary"}
            phoneticSymbol={"[ˈnesəˌseri]"}
            translate={
              <>
                {"n.必需品"}
                <br />
                {"adj. 必须的/必要的"}
              </>
            }
          />
        ),
        phraseList: [
          {
            originText: "This banana is necessary for the monkey",
            translate: "这根香蕉对猴子来说是必要的",
          },
          {
            originText:
              "this property ownership certificate is necessary for me",
            translate: "这个房产证对我来说是必须的",
          },
        ],
      },
    ]
  );
  return (
    <main className={styles.main}>
      {PartOfSpeechComponent(partOfSpeech)}
      <table className={styles.table}>
        <thead>
          <tr>
            <th colSpan={2}>[i:](发音类似于中文 咦~ )</th>
          </tr>
        </thead>
        <tbody>
          <RenderExtraComponent list={firstLessonExtraInfo} />
        </tbody>
      </table>

      <table className={styles.table}>
        <thead>
          <tr>
            <th colSpan={2}>[i](发音类似于中文 诶~ )</th>
          </tr>
        </thead>
        <tbody>
          <RenderExtraComponent list={secondLessonExtraInfo} />
        </tbody>
      </table>

      <div className={styles.scene}>
        <p className={styles.swaggyEnglish}>Swaggy English(Lesson one)</p>
        <p>
          En heh,
          <span style={{ color: "red" }}> I’ll just be straight with you</span>,
          we have not bought a <span style={{ color: "red" }}>apartment</span>{" "}
          yet, <span>Even if</span> we did, we don’t put your name into the{" "}
          <span style={{ color: "red" }}>
            property ownership certificate anyway.
          </span>
          it’s ok, we don’t <span style={{ color: "red" }}>necessarily</span> to
          buy one, renting ones would be fine. cars will be cheaper in the next
          few years, so we do not intend to buy one either. will, public
          transportation is way more convenient and eco-friendly anyway.
        </p>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <th colSpan={2}>Lesson one swaggy</th>
          </tr>
        </thead>
        <tbody>
          <RenderExtraComponent list={firstLessonSwaggy} />
        </tbody>
      </table>
      {ProverbComponent(list)}
    </main>
  );
}
