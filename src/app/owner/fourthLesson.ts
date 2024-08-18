/*
 * @Description:
 * @version:
 * @Author: zouwenqin
 * @Date: 2024-08-11 00:12:41
 * @LastEditors: zouwenqin
 * @LastEditTime: 2024-08-19 00:53:43
 */
import { IWordInfo, ILessonInfo, ISwaggy } from "./enum";
export const wordList: Array<IWordInfo> = [
  {
    word: {
      originalWord: "Banana",
      phoneticSymbol: "/bəˈnænə/",
      translate: ["n. 香蕉"],
    },
    phraseList: [
      {
        originText: "Eat more bananas for helping your health",
        translate: "多吃香蕉以帮助你的健康，for后面接名词或动名词(ing)，而不是动词原形",
      },
      {
        originText: "Eat more bananas to help your health",
        translate: "多吃香蕉有助于你的健康"
      }
    ],
  },
  {
    word: {
      originalWord: "Go bananas/Went bananas",
      phoneticSymbol: "/ɡoʊ bəˈnænəz/",
      translate: ["发疯/失去理智", "(俚语表达，想象一下猴子见到香蕉)"]
    },
    phraseList: [
      {
        originText: "Don't talk about math anymore, I will go bananas",
        translate: "别和我谈数学，我要发疯了"
      },
      {
        originText: "He went bananas when he saw the surprise party",
        translate: "当他看到惊喜派对时，他激动的快疯了（went是go的过去时）"
      }
    ]
  },
  {
    word: {
      originalWord: "Yesterday",
      phoneticSymbol: "/ˈjestərdeɪ/",
      translate: ["n.昨天/过去/往昔", "adv.	昨天/近来"]
    },
    phraseList: [
      {
        originText: "Yesterday, All my troubles seemed so far away",
        translate: "昨天，我所有的烦恼似乎都那么遥远。(tips: 来自The Beatles的 yesterday)"
      },
      {
        originText: "Yesterday, Love was such an ease game to play",
        translate: "昨天，爱曾经是如此简单的游戏"
      },
      {
        originText: "It was nice and warm yesterday / Yesterday, It was nice and warm",
        translate: "昨天很温暖，天气很好。/ 昨天，天气很好而且温暖。"
      },
      {
        originText: "Yesterday, The letter was sent",
        translate: "昨天，信被寄走了。 (sent是send的过去时和过去分词)"
      }
    ]
  },
  {
    word: {
      originalWord: "Today",
      phoneticSymbol: "/tə'deɪ/",
      translate: ["n. 今天"]
    },
    phraseList: [
      {
        originText: "How are you today.",
        translate: "你今天感觉如何。"
      },
      {
        originText: "Today, we will go to the park.",
        translate: "今天，我们要去公园。"
      },
      {
        originText: "we are going to the park today.",
        translate: "我们今天要去公园。"
      },
      {
        originText: "I have a meeting today.",
        translate: "我今天有一个会议。"
      },
      {
        originText: "We will visit the museum today.",
        translate: "我们今天将去参观博物馆。"
      },
      {
        originText: "Today, we are visiting the museum.",
        translate: "今天，我们要去参观博物馆。（are后面的动词或其他形式的动词be, 加ing形成现在进行时）"
      }
    ]
  },
  {
    word: {
      originalWord: "Tomorrow",
      phoneticSymbol: "/təˈmɒrəʊ/",
      translate: ["n. 明天/明日/将来"]
    },
    phraseList: [
      {
        originText: "Tomorrow incense",
        translate: "明日香（大雾）"
      },
      {
        originText: "See you tomorrow",
        translate: "明天见"
      },
      {
        originText: "I am having dinner with Rachel tomorrow night",
        translate: "我明晚要和瑞秋一起吃晚餐。(having dinner 固定搭配 吃晚餐)"
      },
      {
        originText: "Tomorrow is friday",
        translate: "明天是周五"
      }
    ]
  },
  {
    word: {
      originalWord: "Arrive",
      phoneticSymbol: "/ə'raɪv/",
      translate: ["v. 到达"]
    },
    phraseList: [
      {
        originText: "My package has arrived",
        translate: "我的包裹到了"
      },
      {
        originText: "They had left before i arrived",
        translate: "他们在我到达之前离开了（Left 是动词 leave 的过去式和过去分词形式）"
      },
      {
        originText: "By the time we arrived, she had left",
        translate: "我们到达时，她已经离开了"
      },
      {
        originText: "She had left the party before we arrived",
        translate: "我们到达之前，她已经离开了聚会"
      }
    ]
  }
];
export const swaggyList: Array<IWordInfo> = [];
export const fourthLesson: ILessonInfo = {
  title: "Lesson four [ə]/[ə:]",
  swaggy: {
    originText:
      "",
    points: [],
  },
  wordList: [wordList, swaggyList],
};
