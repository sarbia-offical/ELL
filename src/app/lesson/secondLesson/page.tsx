/*
 * @Description:
 * @version:
 * @Author: zouwenqin
 * @Date: 2024-07-30 00:22:58
 * @LastEditors: zouwenqin
 * @LastEditTime: 2024-08-10 22:36:08
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
} from "../../components/index";
import { list } from "../../owner/proverb";
import { partOfSpeech } from "../../owner/partOfSpeech";

export default function Home() {
  const [thirdLessonExtraInfo, setThirdLessonExtraInfo] = useState<
    Array<IExtraInfo>
  >([
    {
      wordComponent: (
        <RenderWordComponent
          word={"fat"}
          phoneticSymbol={"[fæt]"}
          translate={<>{"adj. 肥胖"}</>}
        />
      ),
      phraseList: [
        {
          originText: "This cat is very fat",
          translate: "这只猫很肥",
        },
        {
          originText: "Eating to much junk foot can make you fat",
          translate: "吃太多垃圾食品会让你变胖",
        },
      ],
    },
    {
      wordComponent: (
        <RenderWordComponent
          word={"apple"}
          phoneticSymbol={"['æpl]"}
          translate={<>{"n. 苹果"}</>}
        />
      ),
      phraseList: [
        {
          originText: "You are the apple of my eyes",
          translate: "你是我最珍重的人",
        },
        {
          originText: "An apple a day, the doctor away",
          translate: "一天一个苹果，医生远离我",
        },
      ],
    },
    {
      wordComponent: (
        <RenderWordComponent
          word={"tanned"}
          phoneticSymbol={"[tænd]"}
          translate={<>{"adj. 晒黑的"}</>}
        />
      ),
      phraseList: [
        {
          originText: "Get tanned",
          translate: "美黑",
        },
        {
          originText: "Tanning Machine",
          translate: "美黑机",
        },
        {
          originText: "The darker the sexier",
          translate: "越黑越性感",
        },
      ],
    },
    {
      wordComponent: (
        <RenderWordComponent
          word={"stand"}
          phoneticSymbol={"/stænd/"}
          translate={
            <>
              {"n. 立场/态度/观点"}
              <br />
              {"v. 站立/直立/忍受"}
            </>
          }
        />
      ),
      phraseList: [
        {
          originText: "stand by",
          translate: "袖手旁观/随时待命",
        },
        {
          originText: "How can you stand by",
          translate: "你怎么能袖手旁观呢",
        },
        {
          originText: "stand for",
          translate: "代表/象征",
        },
        {
          originText: "What dose the 'S' stand for? stupid!",
          translate: "这个‘S’代表什么？代表傻逼！",
        },
        {
          originText: "What dose that stand for?",
          translate: "那个代表什么意思？",
        },
        {
          originText: "Stand somebody up",
          translate: "放某人鸽子/失约",
        },
        {
          originText: "Don't stand me up!",
          translate: "别放我鸽子！",
        },
      ],
    },
    {
      wordComponent: (
        <RenderWordComponent
          word={"Stand In"}
          phoneticSymbol={"/stænd/ [ɪn]"}
          translate={<>{"阻碍/代表"}</>}
        />
      ),
      phraseList: [
        {
          originText: "I'll not stand in his way",
          translate: "我不会阻碍",
        },
        {
          originText:
            "He has ambitions for the throne, but his brother's four children stand in his way",
          translate: "他有争夺王位的野心，但是他的四个兄弟的孩子阻碍了他",
        },
        {
          originText:
            "If a bloke want to commit suicide, Who am i to stand in his way",
          translate: "如果一个小伙想要自杀，我有什么资格阻拦他呢",
        },
        {
          originText:
            "I don't want to commit suicide, I just want someone can help me ",
          translate: "我不想自杀，我只是想要一个人可以帮帮我",
        },
        {
          originText: "And i promise, If he's gay, I won't stand in his way",
          translate: "我保证，如果他是同性恋，我不会阻碍他的",
        },
        {
          originText:
            "I understand and i support his choices. And I promise If he's gay, i won’t stand in his way",
          translate:
            "我理解并且支持他的选择，如果他是gay。 而且我保证，如果他是同性恋，我是不会阻碍他的",
        },
      ],
    },
    {
      wordComponent: (
        <RenderWordComponent
          word={"stand to"}
          phoneticSymbol={"/stænd tə/"}
          translate={<>{"坚守"}</>}
        />
      ),
      phraseList: [
        {
          originText: "Stand to your post, soldier!",
          translate: "坚守你的岗位，士兵！",
        },
      ],
    },
    {
      wordComponent: (
        <RenderWordComponent
          word={"stand up for"}
          phoneticSymbol={"/stænd ʌp fɔr/"}
          translate={<>{"为...辩护/支持"}</>}
        />
      ),
      phraseList: [
        {
          originText: "Stand up for yourself",
          translate: "为你自己/捍卫你自己的尊严",
        },
        {
          originText:
            "Stand up for what you believe in, Even if it means standing alone.",
          translate: "为你所相信的东西站出来，即使这意味着你要孤身一人。",
        },
      ],
    },
  ]);

  const [fourthLessonExtraInfo, setFourthLessonExtraInfo] = useState<
    Array<IExtraInfo>
  >([
    {
      wordComponent: (
        <RenderWordComponent
          word={"bed"}
          phoneticSymbol={"[bed]"}
          translate={
            <>
              {"n. 床"}
              <br />
              {"v. 把…固定在；与（某人）发生性关系"}
            </>
          }
        />
      ),
      phraseList: [
        {
          originText: "You are bedding with your enemy",
          translate: "你在与敌同眠",
        },
        {
          originText: "Sorry, the bed's full",
          translate: "对不起，床已经满了",
        },
      ],
    },
    {
      wordComponent: (
        <RenderWordComponent
          word={"Bless"}
          phoneticSymbol={"/bles/"}
          translate={<>{"v. 祝福; 保佑"}</>}
        />
      ),
      phraseList: [
        {
          originText: "God bless you",
          translate: "上帝保佑你",
        },
      ],
    },
    {
      wordComponent: (
        <RenderWordComponent
          word={"Ready"}
          phoneticSymbol={"/redi/"}
          translate={<>{"adj. 准备好的"}</>}
        />
      ),
      phraseList: [
        {
          originText: "I’ so ready for the football season",
          translate: "我已经为足球赛季做好了准备",
        },
      ],
    },
    {
      wordComponent: (
        <RenderWordComponent
          word={"Set"}
          phoneticSymbol={"[set]"}
          translate={
            <>
              {"vt. 放置"}
              <br />
              {"n. 一套"}
              <br />
              {"a. 固定的"}
            </>
          }
        />
      ),
      phraseList: [
        {
          originText: "She set the table for dinner",
          translate: "她摆好了桌子，准备吃晚饭",
        },
      ],
    },
    {
      wordComponent: (
        <RenderWordComponent
          word={"Set out"}
          phoneticSymbol={"/sɛt aʊt/"}
          translate={<>{"n. 出发/陈列/摆出来"}</>}
        />
      ),
      phraseList: [
        {
          originText: "We are about to set out",
          translate: "我们即将出发",
        },
        {
          originText: "We are ready to set out",
          translate: "我们准备好出发了",
        },
        {
          originText: "We are about to",
          translate: "我们即将（表示某件事即将发生）",
        },
      ],
    },
    {
      wordComponent: (
        <RenderWordComponent
          word={"Set on fire"}
          phoneticSymbol={"/sɛt ɑn faɪər/"}
          translate={<>{"na. 放火/点燃"}</>}
        />
      ),
      phraseList: [
        {
          originText: "You set the building on fire",
          translate: "你把这栋大楼点燃了",
        },
        {
          originText: "You set her heart on fire",
          translate: "你点燃了她的心/你让她心潮澎湃",
        },
      ],
    },
    {
      wordComponent: (
        <RenderWordComponent
          word={"Set up"}
          phoneticSymbol={"/sɛt ʌp/"}
          translate={<>{"na. 创建/安排/陷害"}</>}
        />
      ),
      phraseList: [
        {
          originText:
            "Please set up a meeting before three'o clock with the guest",
          translate: "请在三点前和客人安排一次会议",
        },
        {
          originText: "They set me up in this apartment",
          translate: "他们给我安排了这间公寓",
        },
        {
          originText:
            "They set me up in this apartment by planting illegal item",
          translate: "他们在这间公寓里通过放置违法物品陷害了我",
        },
        {
          originText: "Establish a set of rules",
          translate: "建立一套标准",
        },
        {
          originText: "I was hoping to establish relationship with her",
          translate: "我希望能与她建立关系",
        },
      ],
    },
    {
      wordComponent: 
      (
        <RenderWordComponent
          word={"Set back"}
          phoneticSymbol={"/sɛt bæk/"}
          translate={<>{"na. 延迟/阻碍/倒退"}</>}
        />
      ),
      phraseList: [
        {
          originText: "You set us back many months",
          translate: "你让我们的进度延迟了好几个月",
        },
        {
          originText: "It's just a minor set-back",
          translate: "这只是一个小阻碍",
        },
      ],
    },
    {
      wordComponent: 
      (
        <RenderWordComponent
          word={"Set free"}
          phoneticSymbol={"/sɛt friː/"}
          translate={<>{"na. 释放"}</>}
        />
      ),
      phraseList: [
        {
          originText: "Set me free",
          translate: "放我自由",
        },
        {
          originText: "set free your potential",
          translate: "释放你的潜能",
        },
        {
          originText:
            "The are looking for potential buyers for the new product",
          translate: "他们在寻找新产品的潜在买家",
        },
        {
          originText: "The bird set free from cage",
          translate: "鸟儿从笼子里面被放飞了",
        },
      ],
    },
  ]);

  const [secondLessonSwaggy, setSecondLessonSwaggy] = useState<
    Array<IExtraInfo>
  >([
    {
      wordComponent: (
        <RenderWordComponent
          word={"vacation"}
          phoneticSymbol={"/və'keɪʃn/"}
          translate={<>{"n. 休假/度假"}</>}
        />
      ),
      phraseList: [
        {
          originText: "They planed a late summary vacation in Europe",
          translate: "他们计划了一个夏末在欧洲的休假",
        },
        {
          originText: "enjoy your vacation",
          translate: "享受你的假期/祝你假期愉快",
        },
        {
          originText:
            "Daddy, I’m so boring, Me to, This is why I shouldn't come into work between vacations",
          translate: "爸爸，我好无聊，我也是，所以我不该在假期之间来工作",
        },
      ],
    },
    {
      wordComponent: 
      (
        <RenderWordComponent
          word={"puppy"}
          phoneticSymbol={"/'pʌpɪ/"}
          translate={<>{"n. 幼犬/小狗"}</>}
        />
      ),
      phraseList: [
        {
          originText: "My mother gave me a puppy",
          translate: "我妈妈送了我一条小狗",
        },
      ],
    },
    {
      wordComponent: (
        <RenderWordComponent
          word={"finally"}
          phoneticSymbol={"[ˈfaɪn(ə)li]"}
          translate={<>{"终于/可以理解为盼星星盼月亮"}</>}
        />
      ),
      phraseList: [
        {
          originText: "You finally came back",
          translate: "你终于回来了",
        },
        {
          originText:
            "After searching months, We finally to found this old certification",
          translate: "搜索了几个月，我们终于找到了这张旧证书",
        },
      ],
    },
    {
      wordComponent: (
        <RenderWordComponent
          word={"missed"}
          phoneticSymbol={""}
          translate={<>{"v. 想念/错过"}</>}
        />
      ),
      phraseList: [
        {
          originText: "We missed you so much",
          translate: "我们非常想念你",
        },
        {
          originText: "I missed the bus this morning",
          translate: "我今早错过了公交车",
        },
      ],
    },
    {
      wordComponent: (
        <RenderWordComponent
          word={"Where did you get..."}
          phoneticSymbol={""}
          translate={<>{"你从哪弄来的..."}</>}
        />
      ),
      phraseList: [
        {
          originText: "Where did you get the dog?",
          translate: "你从哪弄来的狗？",
        },
        {
          originText: "Where did you get that money?",
          translate: "你从哪弄来的钱？",
        },
      ],
    },
    {
      wordComponent: (
        <RenderWordComponent
          word={"Get rid of"}
          phoneticSymbol={""}
          translate={<>{"拜托/去除"}</>}
        />
      ),
      phraseList: [
        {
          originText: "Get rid of now",
          translate: "立即处理掉",
        },
        {
          originText: "They trying to get rid of his unnecessary expenses",
          translate: "他正在试图去除不必要的开支",
        },
      ],
    },
    {
      wordComponent: (
        <RenderWordComponent
          word={"Be allowed to"}
          phoneticSymbol={""}
          translate={<>{"被允许"}</>}
        />
      ),
      phraseList: [
        {
          originText:
            "Please leave the dog outside, You are not allowed to step into this room with that dog",
          translate: "请把那条狗留在外面，你不能带那条狗进这个房间",
        },
        {
          originText: "They are allowed to buy that expensive necklace",
          translate: "他们被允许买那条昂贵的项链",
        },
      ],
    },
  ]);

  return (
    <main className={styles.main}>
      {PartOfSpeechComponent(partOfSpeech)}
      <table className={styles.table}>
        <thead>
          <tr>
            <th colSpan={2}>[æ]</th>
          </tr>
        </thead>
        <tbody>{<RenderExtraComponent list={thirdLessonExtraInfo}/>}</tbody>
      </table>

      <table className={styles.table}>
        <thead>
          <tr>
            <th colSpan={2}>[e]</th>
          </tr>
        </thead>
        <tbody>{<RenderExtraComponent list={fourthLessonExtraInfo}/>}</tbody>
      </table>

      <div className={styles.scene}>
        <p className={styles.swaggyEnglish}>Swaggy English(Lesson two)</p>
        <p>
          Today is the first day of my{" "}
          <span style={{ color: "red" }}>vacation</span>, I’m going to take my{" "}
          <span style={{ color: "red" }}>puppy</span> home. MoM, dad! On! sweet
          heart, you <span style={{ color: "red" }}>finally</span> came back, we{" "}
          <span style={{ color: "red" }}>missed</span> you so much! What!{" "}
          <span style={{ color: "red" }}>where did you get the dog?</span>
          <span style={{ color: "red" }}>Get rid of</span> now! You{" "}
          <span style={{ color: "red" }}>are not allowed to</span> step into
          this room with that dog!
        </p>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <th colSpan={2}>Lesson two swaggy</th>
          </tr>
        </thead>
        <tbody>{<RenderExtraComponent list={secondLessonSwaggy}/>}</tbody>
      </table>
      {ProverbComponent(list)}
    </main>
  );
}
