/*
 * @Description:
 * @version:
 * @Author: zouwenqin
 * @Date: 2024-07-30 00:22:58
 * @LastEditors: zouwenqin
 * @LastEditTime: 2024-08-13 23:09:13
 */
"use client";
import Image from "next/image";
import styles from "./page.module.css";
import React, { useEffect, useState } from "react";
import {
  RenderWordComponent,
  RenderExtraComponent,
  ProverbComponent,
  PartOfSpeechComponent,
  IExtraInfo,
} from "../../../components/index";
import { list } from "../../owner/proverb";
import { partOfSpeech } from "../../owner/partOfSpeech";

export default function Home() {
  const [fifthLessonExtraInfo, setFifthLessonExtraInfo] = useState<
    Array<IExtraInfo>
  >([
    {
      wordComponent: (
        <RenderWordComponent
          word={"Father"}
          phoneticSymbol={"/ˈfɑ:ðə(r)/"}
          translate={
            <>
              {"n. 父亲/爸爸/天父"}
              <br />
              {"v. 成为父亲/做父亲"}
            </>
          }
        />
      ),
      phraseList: [
        {
          originText: "My father works hard to support our family",
          translate: "我的父亲努力工作用以维持我们的家庭",
        },
        {
          originText: "He look up to his father as a role model",
          translate: "他把他的父亲当成榜样",
        },
        {
          originText: "look up to",
          translate: "仰望...",
        },
        {
          originText: "She called her father to ask for how to ride a bike",
          translate: "她打电话给她父亲问他如何骑单车",
        },
      ],
    },
    {
      wordComponent: (
        <RenderWordComponent
          word={"hard"}
          phoneticSymbol={"/ha：(r)d/"}
          translate={
            <>
              {"adv. 努力的/艰难的"}
              <br />
              {"adj. 坚固的/"}
            </>
          }
        />
      ),
      phraseList: [
        {
          originText: "The wall is so hard, I can't to broke it with my hands",
          translate: "这墙十分坚硬，我没法用手将它打破",
        },
        {
          originText: "Staying alive is very hard",
          translate: "活着很困难",
        },
        {
          originText: "Learn a new Language can be very hard",
          translate: "学习一门语言可能是非常困难的",
        },
      ],
    },
    {
      wordComponent: (
        <RenderWordComponent
          word={"sharp"}
          phoneticSymbol={"[ʃɑːrp]"}
          translate={<>{"adj. 锋利的/尖的"}</>}
        />
      ),
      phraseList: [
        {
          originText: "Be careful of the knife, it's very sharp",
          translate: "小心刀子，这很锋利",
        },
        {
          originText: "The meeting started at eight'o clock sharp",
          translate: "会议八点整开始",
        },
      ],
    },
    {
      wordComponent: (
        <RenderWordComponent
          word={"start"}
          phoneticSymbol={"/ stɑːt/"}
          translate={
            <>
              {"vt. 开始/启动"}
              <br />
              {"vi. 出发"}
              <br />
              {"n. 开始;起点"}
            </>
          }
        />
      ),
      phraseList: [
        {
          originText: "Head start",
          translate: "领先",
        },
        {
          originText: "We have three-minute head start",
          translate: "我们有三分钟的领先",
        },
        {
          originText: "start over",
          translate: "重新开始",
        },
        {
          originText: "Let's start our relationship over",
          translate: "重新开始我们的关系",
        },
        {
          originText: "Fresh start",
          translate: "崭新的开始",
        },
        {
          originText: "new week, fresh start",
          translate: "新的一周，新的开始",
        },
        {
          originText: "start out/off",
          translate: "开始",
        },
        {
          originText: "We all start out equal",
          translate: "我们生来平等",
        },
        {
          originText: "We will start out slow",
          translate: "我们会慢慢开始",
        },
      ],
    },
  ]);

  const [sixthLessonExtraInfo, setSixthLessonExtraInfo] = useState<
    Array<IExtraInfo>
  >([
    {
      wordComponent: (
        <RenderWordComponent
          word={"love"}
          phoneticSymbol={"/lʌv/"}
          translate={
            <>
              {"n. 爱/爱情"}
              <br />
              {"v. 爱/喜欢"}
            </>
          }
        />
      ),
      phraseList: [
        {
          originText: "I love you",
          translate: "我爱你",
        },
        {
          originText: "He loves classical music, especially Bach",
          translate: "他热爱古典音乐，尤其是巴赫",
        },
        {
          originText: "They love each other very much",
          translate: "他们非常相爱",
        },
        {
          originText: "She loves paint in her free time",
          translate: "她喜欢在空余时间画画",
        },
        {
          originText: "I love you more than cupcakes",
          translate: "我爱你胜过纸杯蛋糕",
        },
        {
          originText:
            "Do you know how much i love you? I love you more than heaven, more than the stars. Even a one thousand red roes cannot compare to your beauty",
          translate:
            "你知道我有多爱你吗，我爱你胜过天堂，胜过星星，即使是一千多红玫瑰也无法和你的美丽相比",
        },
        {
          originText: "Your beauty is greater than a thousand red rose",
          translate:
            "你的美丽胜过一千多玫瑰（greater是great的比较级，意思为更大，常用于两者之间的比较，一个比另一个更大或者其他）",
        },
      ],
    },
    {
      wordComponent: (
        <RenderWordComponent
          word={"cup"}
          phoneticSymbol={"/kʌp/"}
          translate={
            <>
              {"n. 杯子/一杯"}
              <br />
              {"v. 使手窝成杯状"}
            </>
          }
        />
      ),
      phraseList: [
        {
          originText: "A cup of coffee",
          translate: "一杯咖啡",
        },
        {
          originText: "A cup of coffee in the morning helps me wake up",
          translate: "一杯咖啡有助于我早上起来",
        },
      ],
    },
    {
      wordComponent: (
        <RenderWordComponent
          word={"up"}
          phoneticSymbol={"/ʌp/"}
          translate={
            <>
              {"adv. 起床/向上/出现"}
              <br />
              {"adj. 向上的/往上移动的"}
              <br />
              {"n. 上面/高处"}
            </>
          }
        />
      ),
      phraseList: [
        {
          originText: "Drink up",
          translate: "干杯/喝完",
        },
        {
          originText: "Drink up you beer",
          translate: "喝完你的啤酒",
        },
        {
          originText: "Eat up",
          translate: "吃完",
        },
        {
          originText: "Eat up your dinner quickly",
          translate: "快速吃完你的午餐",
        },
        {
          originText: "Shut up!",
          translate: "闭嘴!",
        },
        {
          originText: "I will shut him up",
          translate: "我会让他闭嘴的（干掉 冷酷~）",
        },
        {
          originText: "Put up",
          translate: "搭建/张贴/设立",
        },
        {
          originText: "You can put up the reward poster",
          translate: "你可以张贴悬赏海报了",
        },
        {
          originText: "They put up a fence",
          translate: "他们设立了一个障碍",
        },
        {
          originText: "Cheer up",
          translate: "振作",
        },
        {
          originText: "Winning to cheer the team up",
          translate: "胜利可以让你的团队振作起来",
        },
        {
          originText: "Hurry up",
          translate: "快点",
        },
        {
          originText: "Hurry up！I will be late for the meeting",
          translate: "快点！我会议要迟到了",
        },
        {
          originText: "what's up",
          translate: "打招呼（怎么样）",
        },
        {
          originText: "What's up with the project? how's it going",
          translate: "新项目怎么样了，进展如何",
        },
      ],
    },
  ]);

  const [thirdLessonSwaggy, setThirdLessonSwaggy] = useState<Array<IExtraInfo>>(
    [
      {
        wordComponent: (
          <RenderWordComponent
            word={"You know what?"}
            phoneticSymbol={""}
            translate={<>{"你知道吗？"}</>}
          />
        ),
        phraseList: [
          {
            originText: "You know what? she is married",
            translate: "你知道吗，她结婚了",
          },
          {
            originText:
              "You know what, I think we should take a vacation next month",
            translate: "你知道吗，我觉得我们应该下个月去度假",
          },
          {
            originText:
              "You know what, I have changed my mind about this meeting",
            translate: "你知道吗，我改变了对这个会议的想法",
          },
          {
            originText:
              "You know what, I think i need some help with this illegal item",
            translate: "你知道吗，我觉得我需要一些帮助来处理这些违禁品",
          },
        ],
      },
      {
        wordComponent: (
          <RenderWordComponent
            word={"Word on the street"}
            phoneticSymbol={""}
            translate={<>{"坊间谣言/据说"}</>}
          />
        ),
        phraseList: [
          {
            originText:
              "Word on the street is that, Trump is not going to be the next president",
            translate: "据说，特朗普不会成为下一届美国总统",
          },
          {
            originText: "not going to be",
            translate: "不会成为",
          },
        ],
      },
      {
        wordComponent: 
        (
          <RenderWordComponent
            word={"be engaged to"}
            phoneticSymbol={""}
            translate={<>{"和...订婚"}</>}
          />
        ),
        phraseList: [
          {
            originText: "We got engaged on my eighteenth birthday",
            translate: "在18岁生日那天我们订婚了",
          },
          {
            originText: "He is engaged to his college sweetheart",
            translate: "他和他大学的恋人结婚了",
          },
        ],
      },
      {
        wordComponent: 
        (
          <RenderWordComponent
            word={"I knew it"}
            phoneticSymbol={""}
            translate={<>{"我早就知道，我早看出来了"}</>}
          />
        ),
        phraseList: [
          {
            originText: "It was her! I knew it",
            translate: "就是她！我早就知道了！"
          },
          {
            originText: "After seeing the test results, Tom smiled and said, 'I knew it，I studied so hard for this exam'",
            translate: "在看到考试结果后，tom微笑着说：我早就知道了，为了这次考试我很努力的学习了"
          }
        ]
      },
      {
        wordComponent: 
        (
          <RenderWordComponent
            word={"Perfect"}
            phoneticSymbol={"/ˈpɜ:fɪkt/"}
            translate={<>{"adj. 完美的；正确的 v 使完美 (是强化形容词,没有程度上的区别,因此,一般不用very等词来修饰,也不用于比较等级。)"}</>}
          />
        ),
        phraseList: [
          {
            originText: "It was a perfect day for picnic, And we are about to set out",
            translate: "今天是野餐的好天气，我们即将出发"
          },
          {
            originText: "He tries to perfect english",
            translate: "他尝试让自己的英语完美"
          }
        ]
      }
    ]
  );

  useEffect(() => {
   console.log('fifthLessonExtraInfo', fifthLessonExtraInfo)
   console.log('sixthLessonExtraInfo', sixthLessonExtraInfo)
   console.log('thirdLessonSwaggy', thirdLessonSwaggy)
  }, [
    fifthLessonExtraInfo,
    sixthLessonExtraInfo,
    thirdLessonSwaggy,
  ])

  return (
    <main className={styles.main}>
      {PartOfSpeechComponent(partOfSpeech)}

      <table className={styles.table}>
        <thead>
          <tr>
            <th colSpan={2}>[a:]</th>
          </tr>
        </thead>
        <tbody>{<RenderExtraComponent list={fifthLessonExtraInfo}/>}</tbody>
      </table>

      <table className={styles.table}>
        <thead>
          <tr>
            <th colSpan={2}>[ʌ]</th>
          </tr>
        </thead>
        <tbody><RenderExtraComponent list={sixthLessonExtraInfo}/></tbody>
      </table>

      <div className={styles.scene}>
        <p className={styles.swaggyEnglish}>Swaggy English(Lesson three)</p>
        <p>
          Let me tell you secret. Janet is dating Will Really?
          <span style={{ color: "red" }}>You know what</span>?{" "}
          <span style={{ color: "red" }}>Word on the street</span> is that,
          Jeans is already engaged to Will, in secret congratulation! <span style={{ color: "red" }}>I knew it!</span>
          you two always looked <span style={{ color: "red" }}>prefect</span> together. when’s the weeding, Where will
          you go for your honeymoon
        </p>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <th colSpan={2}>Lesson three swaggy</th>
          </tr>
        </thead>
        <tbody><RenderExtraComponent list={thirdLessonSwaggy}/></tbody>
      </table>
      {ProverbComponent(list)}
    </main>
  );
}
