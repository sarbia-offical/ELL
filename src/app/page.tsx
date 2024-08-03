/*
 * @Description:
 * @version:
 * @Author: zouwenqin
 * @Date: 2024-07-30 00:22:58
 * @LastEditors: zouwenqin
 * @LastEditTime: 2024-08-04 01:09:26
 */
"use client";
import Image from "next/image";
import styles from "./page.module.css";
import React, { useEffect, useState } from "react";
import { RenderWordComponent, RenderExtraComponent,  IExtraInfo } from "./components/index"
const $ = require("jquery");

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

  const [thirdLessonExtraInfo, setThirdLessonExtraInfo] = useState<
    Array<IExtraInfo>
  >([
    {
      wordComponent: RenderWordComponent(
        "fat",
        "[fæt]",
        <>
          {"adj. 肥胖"}
        </>),
        phraseList: [
          {
            originText: 'This cat is very fat',
            translate: '这只猫很肥'
          },
          {
            originText: 'Eating to much junk foot can make you fat',
            translate: '吃太多垃圾食品会让你变胖'
          }
        ]
    },
    {
      wordComponent: RenderWordComponent(
        "apple",
        "['æpl]",
        <>
          {"n. 苹果"}
        </>),
        phraseList: [
          {
            originText: "You are the apple of my eyes",
            translate: "你是我最珍重的人"
          },
          {
            originText: "An apple a day, the doctor away",
            translate: "一天一个苹果，医生远离我"
          }
        ]
    },
    {
      wordComponent: RenderWordComponent(
        "tanned",
        "[tænd]",
        <>
          {"adj. 晒黑的"}
        </>),
        phraseList: [
          {
            originText: "Get tanned",
            translate: "美黑"
          },
          {
            originText: "Tanning Machine",
            translate: "美黑机"
          },
          {
            originText: "The darker the sexier",
            translate: "越黑越性感"
          }
        ]
    },
    {
      wordComponent: RenderWordComponent(
        "stand",
        "/stænd/",
        <>
          {"n. 立场/态度/观点"}
          <br/>
          {"v. 站立/直立/忍受"}
        </>),
        phraseList: [
          {
            originText: "stand by",
            translate: "袖手旁观/随时待命"
          },
          {
            originText: "How can you stand by",
            translate: "你怎么能袖手旁观呢"
          },
          {
            originText: "stand for",
            translate: "代表/象征"
          },
          {
            originText: "What dose the 'S' stand for? stupid!",
            translate: "这个‘S’代表什么？代表傻逼！"
          },
          {
            originText: "What dose that stand for?",
            translate: "那个代表什么意思？"
          },
          {
            originText: "Stand somebody up",
            translate: "放某人鸽子/失约"
          },
          {
            originText: "Don't stand me up!",
            translate: "别放我鸽子！"
          }
        ]
    },
    {
      wordComponent: RenderWordComponent(
        "Stand In",
        "/stænd/ [ɪn]",
        <>
          {'阻碍/代表'}
        </>
      ),
      phraseList: [
        {
          originText: "I'll not stand in his way",
          translate: "我不会阻碍"
        },
        {
          originText: "He has ambitions for the throne, but his brother's four children stand in his way",
          translate: "他有争夺王位的野心，但是他的四个兄弟的孩子阻碍了他"
        },
        {
          originText: "If a bloke want to commit suicide, Who am i to stand in his way",
          translate: "如果一个小伙想要自杀，我有什么资格阻拦他呢"
        },
        {
          originText: "I don't want to commit suicide, I just want someone can help me ",
          translate: "我不想自杀，我只是想要一个人可以帮帮我"
        },
        {
          originText: "And i promise, If he's gay, I won't stand in his way",
          translate: "我保证，如果他是同性恋，我不会阻碍他的"
        },
        {
          originText: "I understand and i support his choices. And I promise If he's gay, i won’t stand in his way",
          translate: "我理解并且支持他的选择，如果他是gay。 而且我保证，如果他是同性恋，我是不会阻碍他的"
        }
      ]
    },
    {
      wordComponent: RenderWordComponent(
        "stand to",
        "/stænd tə/",
        <>
          {"坚守"}
        </>),
      phraseList: [
        {
          originText: "Stand to your post, soldier!",
          translate: "坚守你的岗位，士兵！"
        }
      ]
    },
    {
      wordComponent: RenderWordComponent(
        "stand up for",
        "/stænd ʌp fɔr/",
        <>
          {"为...辩护/支持"}
        </>),
        phraseList: [
          {
            originText: "Stand up for yourself",
            translate: "为你自己/捍卫你自己的尊严"
          },
          {
            originText: "Stand up for what you believe in, Even if it means standing alone.",
            translate: "为你所相信的东西站出来，即使这意味着你要孤身一人。"
          }
        ]
    }
  ])

  const [fifthLessonExtraInfo, setFifthLessonExtraInfo] = useState<
    Array<IExtraInfo>
  >([
    {
      wordComponent: RenderWordComponent(
        "bed",
        "[bed]",
        <>
          {"n. 床"}
          <br/>
          {"v. 把…固定在；与（某人）发生性关系"}
        </>),
      phraseList: [
        {
          originText: "You are bedding with your enemy",
          translate: "你在与敌同眠"
        },
        {
          originText: "Sorry, the bed's full",
          translate: "对不起，床已经满了"
        }
      ]
    },
    {
      wordComponent: RenderWordComponent(
        "Bless",
        "/bles/",
        <>
          {"v. 祝福; 保佑"}
        </>),
      phraseList: [
        {
          originText: "God bless you",
          translate: "上帝保佑你"
        }
      ]
    },
    {
      wordComponent: RenderWordComponent(
        "Ready",
        "/redi/",
        <>
          {"adj. 准备好的"}
        </>),
      phraseList: [
        {
          originText: "I’ so ready for the football season",
          translate: "我已经为足球赛季做好了准备"
        }
      ]
    }
  ])

  const [firstLessonSwaggy, setFirstLessonSwaggy] = useState<Array<IExtraInfo>>([
    {
      wordComponent: RenderWordComponent('be straight with', '' , '坦白/实话实说'),
      phraseList: [
        {
          originText: 'I respect your honesty, so i’ll just be straight with you',
          translate: '我欣赏你的诚实，那我就实话和你说了'
        },
        {
          originText: 'He is straight',
          translate: 'straight也有直男直女的意思'
        }
      ]
    },
    {
      wordComponent: RenderWordComponent('Apartment', '[əˈpɑːtmənt]' , 'n. 公寓'),
      phraseList: [
        {
          originText: 'We rented an apartment',
          translate: '我们租了一套公寓'
        },
        {
          originText: 'You got it a ready?, Is it big enough?',
          translate: '你已经准备好了？他够大吗？'
        },
        {
          originText: 'This is your apartment, Peter',
          translate: '这是你的公寓，彼得'
        }
      ]
    },
    {
      wordComponent: RenderWordComponent('Even if', '' , '就算，即使'),
      phraseList: [
        {
          originText: 'Even if you have a dark skin, you still need sunblock',
          translate: '就算你皮肤黑，那也仍然需要防晒霜'
        },
      ]
    },
    {
      wordComponent: RenderWordComponent('property', '[ˈprɒpəti] ' , '房产/财产'),
      phraseList: [
        {
          originText: 'The bought a piece of property by the lake',
          translate: '他们在湖边买了一处房产（by the lake 在湖边）'
        },
      ]
    },
    {
      wordComponent: RenderWordComponent('ownership', '[ˈəʊnəʃɪp] ' , '所有权'),
      phraseList: [
        {
          originText: 'Who has the ownership of this house?',
          translate: '谁有这所房子的所有权？'
        }
      ]
    },
    {
      wordComponent: RenderWordComponent('certificate', ' [səˈtɪfɪkət]', '证书'),
      phraseList: [
        {
          originText: 'High-level certificate',
          translate: '高级证书'
        }
      ]
    },
    {
      wordComponent: RenderWordComponent('property ownership certificate', '', '房产证'),
      phraseList: [
        {
          originText: 'I had property ownership certificate before ten years ago',
          translate: '十年前我就有房产证了'
        }
      ]
    },
    {
      wordComponent: RenderWordComponent('necessarily ', 'Necessarily', 'adv .必要的 必然的'),
      phraseList: [
        {
          originText: 'He way lying, of course. Not necessarily',
          translate: '他肯定在说谎。不一定'
        }
      ]
    }
  ])

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

      <div className={styles.scene}>
        <p className={styles.swaggyEnglish}>Swaggy English（Lesson one）</p>
        <p>
          En heh,<span style={{"color": "red"}}> I’ll just be straight with you</span>, we have not bought a <span style={{"color": "red"}}>apartment</span> yet, <span>Even if</span> we did, 
          we don’t put your name into the <span style={{"color": "red"}}>property ownership certificate anyway.</span>
          it’s ok, we don’t <span style={{"color": "red"}}>necessarily</span> to buy one, renting ones would be fine.
          cars will be cheaper in the next few years, so we do not intend to buy one either.
          will, public transportation is way more convenient and eco-friendly anyway.
        </p>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <th colSpan={2}>First lesson swaggy</th>
          </tr>
        </thead>
        <tbody>{RenderExtraComponent(firstLessonSwaggy)}</tbody>
      </table>

      <table className={styles.table}>
        <thead>
          <tr>
            <th colSpan={2}>[æ]</th>
          </tr>
        </thead>
        <tbody>{RenderExtraComponent(thirdLessonExtraInfo)}</tbody>
      </table>

      <table className={styles.table}>
        <thead>
          <tr>
            <th colSpan={2}>[e]</th>
          </tr>
        </thead>
        <tbody>{RenderExtraComponent(fifthLessonExtraInfo)}</tbody>
      </table>
      
      <div className={styles.scene}>
        <p className={styles.swaggyEnglish}>Proverb</p>
        <p>
          The best time to plant a tree was teen years ago, the second time is today
        </p>
        <p>
          种一棵树最好的时间是十年前，其次是现在
        </p>
        <p>
          We choose to go to the moon in this decade and do other things, not because they are easy, but because they are hard.
        </p>
        <p>
          我们选择在这一年代登月，并做其他事情，不是因为它们简单，而是因为它们困难
        </p>
        <p>
          If you are good for something, never do if for free
        </p>
        <p>
          如果你很擅长某事，永远不要免费做
        </p>
        <p>
          I do the best i can with what i have
        </p>
        <p>
          我尽我所能，用我所拥有的
        </p>
      </div>
    </main>
  );
}
