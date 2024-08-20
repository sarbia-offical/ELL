/*
 * @Description:
 * @version:
 * @Author: zouwenqin
 * @Date: 2024-08-11 00:12:41
 * @LastEditors: zouwenqin
 * @LastEditTime: 2024-08-21 00:16:22
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
  },
  {
    word: {
      originalWord: "Delivery",
      phoneticSymbol: "[dɪˈlɪv(ə)ri]",
      translate: ["n. 分娩/交付/交货"],
    },
    phraseList: [
      {
        originText: "The delivery man sent my package this morning",
        translate: "快递小哥今早送来了我的快递"
      },
      {
        originText: "Delivering a package to a private residence",
        translate: "将货物送到私人住处"
      }
    ]
  },
  {
    word: {
      originalWord: "be + adj + about",
      phoneticSymbol: "[əˈbaʊt]",
      translate: ["为/对...感到..."]
    },
    phraseList: [
      {
        originText: "She is happy/excited/worried/nervous about this exam",
        translate: "她对这次考试感到很高兴/兴奋/担忧/紧张 （be happy/excited/worried/nervous about）"
      },
      {
        originText: "They will be excited about learning",
        translate: "他们将会对学习感到兴奋"
      },
      {
        originText: "You have to be excited about that",
        translate: "你应该对此感到兴奋"
      },
      {
        originText: "But should i be worried about you",
        translate: "我应该为你感到担心吗"
      },
      {
        originText: "There is nothing to be worried about",
        translate: "这没什么好担心的"
      },
      {
        originText: "You should be happy about that",
        translate: "你应该为此感到高兴"
      },
      {
        originText: "She won't be happy about that",
        translate: "她不会为此高兴的"
      },
      {
        originText: "Don't be nervous about your speech",
        translate: "不要对你的演讲感到紧张"
      },
      {
        originText: "You have nothing to be nervous about",
        translate: "你没什么可紧张的"
      },
      {
        originText: "There is noting to be worried about",
        translate: "没什么值得紧张的"
      },
      {
        originText: "Maybe sometimes you are worried about your work",
        translate: "也许有时你会对你的工作感到担忧（be worried about 对某事担心）"
      },
      {
        originText: "I'm just so worried about us losing the key",
        translate: "我只是担心我们会丢掉钥匙"
      },
      {
        originText: "I'm just so worried about our having lost the key",
        translate: "我非常担心我们已经丢掉了钥匙"
      }
    ]
  },
  {
    word: {
      originalWord: "be about to do sth",
      phoneticSymbol: "[əˈbaʊt]",
      translate: ["正要做某事"]
    },
    phraseList: [
      {
        originText: "We are about to leave",
        translate: "我们准备离开了"
      },
      {
        originText: "I'm about to start this game",
        translate: "我准备开始这个游戏"
      },
      {
        originText: "The movie is about to start",
        translate: "这个电影要开始了"
      },
      {
        originText: "When you are about to leave work, But your boss says 'before you go, please do this work'",
        translate: "在你快要下班的时候，你老板说‘走之前，请完成这项任务’"
      }
    ]
  },
  {
    word: {
      originalWord: "verb + about",
      phoneticSymbol: "[əˈbaʊt]",
      translate: ["关于"]
    },
    phraseList: [
      {
        originText: "Think about",
        translate: "考虑"
      },
      {
        originText: "I will think about",
        translate: "我会考虑的"
      },
      {
        originText: "Don't think about it, think about your face",
        translate: "不要考虑它，考虑下你的表情"
      },
      {
        originText: "Talk about",
        translate: "讨论"
      },
      {
        originText: "Talk about what",
        translate: "讨论什么"
      },
      {
        originText: "Talk about anything",
        translate: "什么都可以讨论"
      },
      {
        originText: "Talk about pressure",
        translate: "讨论一下压力"
      },
      {
        originText: "Care about",
        translate: "在意/关心"
      },
      {
        originText: "We care about you",
        translate: "我们很关心你"
      },
      {
        originText: "I don't care about Mobile phones",
        translate: "我不关心手机"
      },
      {
        originText: "You should complain about that",
        translate: "你应该对此不满"
      },
      {
        originText: "What else did i complain about",
        translate: "我还对什么表达过不满"
      },
      {
        originText: "Move about",
        translate: "移动/走动"
      },
      {
        originText: "You are free now to move about the cabin",
        translate: "你现在可以自由地在机舱内走动了"
      },
      {
        originText: "Move your arms about",
        translate: "摆动你的手臂"
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
