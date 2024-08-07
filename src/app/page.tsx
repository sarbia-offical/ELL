/*
 * @Description:
 * @version:
 * @Author: zouwenqin
 * @Date: 2024-07-30 00:22:58
 * @LastEditors: zouwenqin
 * @LastEditTime: 2024-08-09 00:37:32
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

  const [fourthLessonExtraInfo, setFourthLessonExtraInfo] = useState<
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
    },
    {
      wordComponent: RenderWordComponent(
        "Set",
        "[set]",
        <>
          {"vt. 放置"}
          <br/>
          {"n. 一套"}
          <br/>
          {"a. 固定的"}
        </>),
      phraseList: [
        {
          originText: "She set the table for dinner",
          translate: "她摆好了桌子，准备吃晚饭"
        }
      ]
    },
    {
      wordComponent: RenderWordComponent(
        "Set out",
        "/sɛt aʊt/",
        <>
          {"n. 出发/陈列/摆出来"}
        </>),
      phraseList: [
        {
          originText: "We are about to set out",
          translate: "我们即将出发"
        },
        {
          originText: "We are ready to set out",
          translate: "我们准备好出发了"
        },
        {
          originText: "We are about to",
          translate: "我们即将（表示某件事即将发生）"
        }
      ]
    },
    {
      wordComponent: RenderWordComponent(
        "Set on fire",
        "/sɛt ɑn faɪər/",
        <>
          {"na. 放火/点燃"}
        </>),
      phraseList: [
        {
          originText: "You set the building on fire",
          translate: "你把这栋大楼点燃了"
        },
        {
          originText: "You set her heart on fire",
          translate: "你点燃了她的心/你让她心潮澎湃"
        }
      ]
    },
    {
      wordComponent: RenderWordComponent(
        "Set up",
        "/sɛt ʌp/",
        <>
          {"na. 创建/安排/陷害"}
        </>),
      phraseList: [
        {
          originText: "Please set up a meeting before three'o clock with the guest",
          translate: "请在三点前和客人安排一次会议"
        },
        {
          originText: "They set me up in this apartment",
          translate: "他们给我安排了这间公寓"
        },
        {
          originText: "They set me up in this apartment by planting illegal item",
          translate: "他们在这间公寓里通过放置违法物品陷害了我"
        },
        {
          originText: "Establish a set of rules",
          translate: "建立一套标准"
        }
      ]
    },
    {
      wordComponent: RenderWordComponent(
        "Set back",
        "/sɛt bæk/",
        <>
          {"na. 延迟/阻碍/倒退"}
        </>),
      phraseList: [
        {
          originText: "You set us back many months",
          translate: "你让我们的进度延迟了好几个月"
        },
        {
          originText: "It's just a minor set-back",
          translate: "这只是一个小阻碍"
        }
      ]
    },
    {
      wordComponent: RenderWordComponent(
        "Set free",
        "/sɛt friː/",
        <>
          {"na. 释放"}
        </>),
        phraseList: [
          {
            originText: "Set me free",
            translate: "放我自由"
          },
          {
            originText: "set free your potential",
            translate: "释放你的潜能"
          },
          {
            originText: "The are looking for potential buyers for the new product",
            translate: "他们在寻找新产品的潜在买家"
          },
          {
            originText: "The bird set free from cage",
            translate: "鸟儿从笼子里面被放飞了"
          }
        ]
    }
  ])

  const [fifthLessonExtraInfo, setFifthLessonExtraInfo] = useState<
    Array<IExtraInfo>
  >([{
    wordComponent: RenderWordComponent(
      "Father",
      "/ˈfɑ:ðə(r)/",
      <>
        {"n. 父亲/爸爸/天父"}
        <br/>
        {"v. 成为父亲/做父亲"}
      </>),
    phraseList: [
      {
        originText: "My father works hard to support our family",
        translate: "我的父亲努力工作用以维持我们的家庭"
      },
      {
        originText: "He look up to his father as a role model",
        translate: "他把他的父亲当成榜样"
      },
      {
        originText: "look up to",
        translate: "仰望..."
      },
      {
        originText: "She called her father to ask for how to ride a bike",
        translate: "她打电话给她父亲问他如何骑单车"
      }
    ]
  },
  {
    wordComponent: RenderWordComponent(
      "hard",
      "/ha：(r)d/",
      <>
        {"adv. 努力的/艰难的"}
        <br/>
        {"adj. 坚固的/"}
      </>),
      phraseList: [
        {
          originText: "The wall is so hard, I can't to broke it with my hands",
          translate: "这墙十分坚硬，我没法用手将它打破"
        },
        {
          originText: "Staying alive is very hard",
          translate: "活着很困难"
        },
        {
          originText: "Learn a new Language can be very hard",
          translate: "学习一门语言可能是非常困难的"
        }
      ]
  },
  {
    wordComponent: RenderWordComponent(
      "sharp",
      "[ʃɑːrp]",
      <>
        {"adj. 锋利的/尖的"}
      </>
    ),
    phraseList: [
      {
        originText: "Be careful of the knife, it's very sharp",
        translate: "小心刀子，这很锋利"
      },
      {
        originText: "The meeting started at eight'o clock sharp",
        translate: "会议八点整开始"
      }
    ]
  },
  {
    wordComponent: RenderWordComponent(
      "start",
      "/ stɑːt/",
      <>
        {"vt. 开始/启动"}
        <br/>
        {"vi. 出发"}
        <br/>
        {"n. 开始;起点"}
      </>),
    phraseList: [
      {
        originText: "Head start",
        translate: "领先"
      },
      {
        originText: "We have three-minute head start",
        translate: "我们有三分钟的领先"
      },
      {
        originText: "start over",
        translate: "重新开始"
      },
      {
        originText: "Let's start our relationship over",
        translate: "重新开始我们的关系"
      },
      {
        originText: "Fresh start",
        translate: "崭新的开始"
      },
      {
        originText: "new week, fresh start",
        translate: "新的一周，新的开始"
      },
      {
        originText: "start out/off",
        translate: "开始"
      },
      {
        originText: "We all start out equal",
        translate: "我们生来平等"
      },
      {
        originText: "We will start out slow",
        translate: "我们会慢慢开始"
      }
    ]
  }
  ]);

  const [sixthLessonExtraInfo, setSixthLessonExtraInfo] = useState<
    Array<IExtraInfo>
  >([
    {
    wordComponent: RenderWordComponent(
      "love",
      "/lʌv/",
      <>
        {"n. 爱/爱情"}
        <br/>
        {"v. 爱/喜欢"}
      </>),
    phraseList: [
      {
        originText: "I love you",
        translate: "我爱你"
      },
      {
        originText: "He loves classical music, especially Bach",
        translate: "他热爱古典音乐，尤其是巴赫"
      },
      {
        originText: "They love each other very much",
        translate: "他们非常相爱"
      },
      {
        originText: "She loves paint in her free time",
        translate: "她喜欢在空余时间画画"
      },
      {
        originText: "I love you more than cupcakes",
        translate: "我爱你胜过纸杯蛋糕"
      },
      {
        originText: "Do you know how much i love you? I love you more than heaven, more than the stars. Even a one thousand red roes cannot compare to your beauty",
        translate: "你知道我有多爱你吗，我爱你胜过天堂，胜过星星，即使是一千多红玫瑰也无法和你的美丽相比"
      },
      {
        originText: "Your beauty is greater than a thousand red rose",
        translate: "你的美丽胜过一千多玫瑰（greater是great的比较级，意思为更大，常用于两者之间的比较，一个比另一个更大或者其他）"
      }
    ]
    },
    {
      wordComponent: RenderWordComponent(
        "cup",
        "/kʌp/",
        <>
          {"n. 杯子/一杯"}
          <br/>
          {"v. 使手窝成杯状"}
        </>),
      phraseList: [
        {
          originText: "A cup of coffee",
          translate: "一杯咖啡"
        },
        {
          originText: "A cup of coffee in the morning helps me wake up",
          translate: "一杯咖啡有助于我早上起来"
        }
      ]
    },
    {
      wordComponent: RenderWordComponent(
        "up",
        "/ʌp/",
        <>
          {"adv. 起床/向上/出现"}
          <br/>
          {"adj. 向上的/往上移动的"}
          <br/>
          {"n. 上面/高处"}
        </>),
      phraseList: [
        {
          originText: "Drink up",
          translate: "干杯/喝完"
        },
        {
          originText: "Drink up you beer",
          translate: "喝完你的啤酒"
        },
        {
          originText: "Eat up",
          translate: "吃完"
        },
        {
          originText: "Eat up your dinner quickly",
          translate: "快速吃完你的午餐"
        },
        {
          originText: "Shut up!",
          translate: "闭嘴!"
        },
        {
          originText: "I will shut him up",
          translate: "我会让他闭嘴的（干掉 冷酷~）"
        },
        {
          originText: "Put up",
          translate: "搭建/张贴/设立"
        },
        {
          originText: "You can put up the reward poster",
          translate: "你可以张贴悬赏海报了"
        },
        {
          originText: "They put up a fence",
          translate: "他们设立了一个障碍"
        },
        {
          originText: "Cheer up",
          translate: "振作"
        },
        {
          originText: "Winning to cheer the team up",
          translate: "胜利可以让你的团队振作起来"
        },
        {
          originText: "Hurry up",
          translate: "快点"
        },
        {
          originText: "Hurry up！I will be late for the meeting",
          translate: "快点！我会议要迟到了"
        },
        {
          originText: "what's up",
          translate: "打招呼（怎么样）"
        },
        {
          originText: "What's up with the project? how's it going",
          translate: "新项目怎么样了，进展如何"
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
        },
        {
          originText: "let me get this straight",
          translate: "让我搞明白这件事"
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
      wordComponent: RenderWordComponent('necessarily ', '[ˌnesəˈserəli]', 'adv .必要的 必然的'),
      phraseList: [
        {
          originText: 'He way lying, of course. Not necessarily',
          translate: '他肯定在说谎。不一定'
        }
      ]
    },
    {
      wordComponent: RenderWordComponent("necessary", "[ˈnesəˌseri]", <>
        {"n.必需品"}
        <br/>
        {"adj. 必须的/必要的"}
      </>),
      phraseList: [
        {
          originText: "This banana is necessary for the monkey",
          translate: "这根香蕉对猴子来说是不必要的"
        },
        {
          originText: "this property ownership certificate is necessary for me",
          translate: "这个房产证对我来说是必须的"
        }
      ]
    }
  ])

  const [secondLessonSwaggy, setSecondLessonSwaggy] = useState<Array<IExtraInfo>>([
    {
      wordComponent: RenderWordComponent(
        "vacation",
        "/və'keɪʃn/",
        <>
          {"n. 休假/度假"}
        </>),
      phraseList: [
        {
          originText: "They planed a late summary vacation in Europe",
          translate: "他们计划了一个夏末在欧洲的休假"
        },
        {
          originText: "enjoy your vacation",
          translate: "享受你的假期/祝你假期愉快"
        },
        {
          originText: "Daddy, I’m so boring, Me to, This is why I shouldn't come into work between vacations",
          translate: "爸爸，我好无聊，我也是，所以我不该在假期之间来工作"
        }
      ]
    },
    {
      wordComponent: RenderWordComponent(
        "puppy",
        "/'pʌpɪ/",
        <>
          {"n. 幼犬/小狗"}
        </>),
      phraseList: [
        {
          originText: "My mother gave me a puppy",
          translate: "我妈妈送了我一条小狗"
        }
      ]
    },
    {
      wordComponent: RenderWordComponent(
        "finally",
        " [ˈfaɪn(ə)li]",
        <>
          {"终于/可以理解为盼星星盼月亮"}
        </>),
      phraseList: [
        {
          originText: "You finally came back",
          translate: "你终于回来了"
        },
        {
          originText: "After searching months, We finally to found this old certification",
          translate: "搜索了几个月，我们终于找到了这张旧证书"
        }
      ]
    },
    {
      wordComponent: RenderWordComponent(
        "missed",
        "",
        <>
          {"v. 想念/错过"}
        </>),
        phraseList: [
          {
            originText: "We missed you so much",
            translate: "我们非常想念你"
          },
          {
            originText: "I missed the bus this morning",
            translate: "我今早错过了公交车"
          }
        ]
    },
    {
      wordComponent: RenderWordComponent(
        "Where did you get...",
        "",
        <>{"你从哪弄来的..."}</>),
      phraseList: [
        {
          originText: "Where did you get the dog?",
          translate: "你从哪弄来的狗？"
        },
        {
          originText: "Where did you get that money?",
          translate: "你从哪弄来的钱？"
        }
      ]
    },
    {
      wordComponent: RenderWordComponent(
        "Get rid of",
        "",
        <>{"拜托/去除"}</>),
      phraseList: [
        {
          originText: "Get rid of now",
          translate: "立即处理掉"
        },
        {
          originText: "They trying to get rid of his unnecessary expenses",
          translate: "他正在试图去除不必要的开支"
        }
      ]
    },
    {
      wordComponent: RenderWordComponent(
        "Be allowed to",
        "",
        <>
          {"被允许"}
        </>),
      phraseList: [
        {
          originText: "Please leave the dog outside, You are not allowed to step into this room with that dog",
          translate: "请把那条狗留在外面，你不能带那条狗进这个房间"
        },
        {
          originText: "They are allowed to buy that expensive necklace",
          translate: "他们被允许买那条昂贵的项链"
        }
      ]
    }
  ])

  const [thirdLessonSwaggy, setThirdLessonSwaggy] = useState<Array<IExtraInfo>>([
    {
      wordComponent: RenderWordComponent(
        "You know what?",
        "",
        <>
          {"你知道吗？"}
        </>),
      phraseList: [
        {
          originText: "You know what? she is married",
          translate: "你知道吗，她结婚了"
        },
        {
          originText: "You know what, I think we should take a vacation next month",
          translate: "你知道吗，我觉得我们应该下个月去度假"
        },
        {
          originText: "You know what, I have changed my mind about this meeting",
          translate: "你知道吗，我改变了对这个会议的想法"
        },
        {
          originText: "You know what, I think i need some help with this illegal item",
          translate: "你知道吗，我觉得我需要一些帮助来处理这些违禁品"
        }
      ]
    },
    {
      wordComponent: RenderWordComponent(
        "Word on the street",
        "",
        <>
          {"坊间谣言/据说"}
        </>),
      phraseList: [
        {
          originText: "Word on the street is that, Trump is not going to be the next president",
          translate: "据说，特朗普不会成为下一届美国总统"
        },
        {
          originText: "not going to be",
          translate: "不会成为"
        }
      ]
    },
    {
      wordComponent: RenderWordComponent(
        "be engaged to",
        "",
        <>{"和...订婚"}</>),
      phraseList: [
        {
          originText: "We got engaged on my eighteenth birthday",
          translate: "在18岁生日那天我们订婚了"
        },
        {
          originText: "He is engaged to his college sweetheart",
          translate: "他和他大学的恋人结婚了"
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
        <p className={styles.swaggyEnglish}>Swaggy English(Lesson one)</p>
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
            <th colSpan={2}>Lesson one swaggy</th>
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
        <tbody>{RenderExtraComponent(fourthLessonExtraInfo)}</tbody>
      </table>
      
      <div className={styles.scene}>
        <p className={styles.swaggyEnglish}>Swaggy English(Lesson two)</p>
        <p>
          Today is the first day of my <span style={{"color": "red"}}>vacation</span>, I’m going to take my <span style={{"color": "red"}}>puppy</span> home.
          MoM, dad!
          On! sweet heart, you <span style={{"color": "red"}}>finally</span> came back, we <span style={{"color": "red"}}>missed</span> you so much!
          What! <span style={{"color": "red"}}>where did you get the dog?</span>
          <span style={{"color": "red"}}>Get rid of</span> now!
          You <span style={{"color": "red"}}>are not allowed to</span> step into this room with that dog!
        </p>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <th colSpan={2}>Lesson two swaggy</th>
          </tr>
        </thead>
        <tbody>{RenderExtraComponent(secondLessonSwaggy)}</tbody>
      </table>

      <table className={styles.table}>
        <thead>
          <tr>
            <th colSpan={2}>[a:]</th>
          </tr>
        </thead>
        <tbody>{RenderExtraComponent(fifthLessonExtraInfo)}</tbody>
      </table>

      <table className={styles.table}>
        <thead>
          <tr>
            <th colSpan={2}>[ʌ]</th>
          </tr>
        </thead>
        <tbody>{RenderExtraComponent(sixthLessonExtraInfo)}</tbody>
      </table>

      <div className={styles.scene}>
        <p className={styles.swaggyEnglish}>Swaggy English(Lesson three)</p>
        <p>
          Let me tell you secret. Janet is dating Will
          Really? 
          <span style={{"color": "red"}}>You know what</span>? <span style={{"color": "red"}}>Word on the street</span> is that, Jeans is already engaged to Will, in secret
          congratulation! I knew it! you two always looked prefect together. when’s the weeding, Where will you go for your honeymoon
        </p>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <th colSpan={2}>Lesson three swaggy</th>
          </tr>
        </thead>
        <tbody>{RenderExtraComponent(thirdLessonSwaggy)}</tbody>
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
