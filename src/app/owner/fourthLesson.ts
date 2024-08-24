/*
 * @Description:
 * @version:
 * @Author: zouwenqin
 * @Date: 2024-08-11 00:12:41
 * @LastEditors: zouwenqin
 * @LastEditTime: 2024-08-23 00:38:36
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
      },
      {
        originText: "She is about to leave",
        translate: "她马上要走了"
      },
      {
        originText: "A great thing is about to happen",
        translate: "伟大的事情即将发生"
      },
      {
        originText: "A great things are about to happen",
        translate: "许多伟大的事情即将发生（单数is复数are）"
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
  },
  {
    word: {
      originalWord: "Sir",
      phoneticSymbol: "/sɜː/",
      translate: ["n. 先生/阁下"]
    },
    phraseList: [
      {
        originText: "After you, sir",
        translate: "你先请"
      },
      {
        originText: "Excuse me, sir, could you help me?",
        translate: "先生，不好意思，能帮帮我吗"
      },
      {
        originText: "Sorry sir, We are leaving work now",
        translate: "对不起先生，我们下班了"
      }
    ]
  },
  {
    word: {
      originalWord: "Early",
      phoneticSymbol: "/‘ɜːlɪ/",
      translate: ["adj. 早的", "adv.	提前"]
    },
    phraseList: [
      {
        originText: "She agreed to let me go early",
        translate: "她同意我早点走"
      }
    ]
  },
  {
    word: {
      originalWord: "Dirty",
      phoneticSymbol: "/'dɜːtɪ/",
      translate: ["adj. 卑鄙的/肮脏的"]
    },
    phraseList: [
      {
        originText: "That's a dirty move",
        translate: "这招儿够损的"
      },
      {
        originText: "That's a dirty T-shirt",
        translate: "这是件脏T恤"
      }
    ]
  },
  {
    word: {
      originalWord: "Birthday",
      phoneticSymbol: "[ˈbɜrθˌdeɪ]",
      translate: ["n.	生日"]
    },
    phraseList: [
      {
        originText: "Happy birthday, I'm only here for the cake",
        translate: "生日快乐，我来这只是为了蛋糕"
      },
      {
        originText: "On my birthday, my mother sent me a perfect necklace",
        translate: "在我的生日那天，我妈妈送了我一条完美的项链"
      }
    ]
  },
  {
    word: {
      originalWord: "Work",
      phoneticSymbol: "[wɜːk]",
      translate: ["n. 工作", "vi. 作用"]
    },
    phraseList: [
      {
        originText: "People always do dirty work",
        translate: "人们总是做费力不讨好的事情"
      },
      {
        originText: "Work out",
        translate: "解决/健身"
      },
      {
        originText: "We will work out this problem",
        translate: "我们会解决这个问题"
      },
      {
        originText: "Things will work out",
        translate: "事情终将解决/车到山前必有路"
      },
      {
        originText: "I work out there too",
        translate: "我也在那健身（有健身的意思）"
      },
      {
        originText: "Work on",
        translate: "忙于/有用",
      },
      {
        originText: "It didn't work on us",
        translate: "这对我们没用"
      },
      {
        originText: "You should work on your work",
        translate: "你应该在工作上花更多时间"
      },
      {
        originText: "Get worked up",
        translate: "不安的/紧张的/激动的/生气的"
      },
      {
        originText: "I get a little worked up",
        translate: "我有一点点不安/紧张/激动/生气"
      },
      {
        originText: "I'm so worked up",
        translate: "我很不安/紧张/激动/生气"
      },
      {
        originText: "Get down to work",
        translate: "办正事"
      },
      {
        originText: "Let's get down to work",
        translate: "我们办正事吧/开始干活吧"
      }
    ]
  }
];
export const swaggyList: Array<IWordInfo> = [
  {
    word: {
      originalWord: "looking forward to",
      phoneticSymbol: "/ˈlʊkɪŋ ˈfɔːrwərd/",
      translate: ["期盼/盼望"],
    },
    phraseList: [
      {
        originText: "I'm look forward to this show",
        translate: "我期待着这场演出"
      },
      {
        originText: "I'm looking forward to seeing you again",
        translate: "我期待着再次见到你"
      }
    ],
  },
  {
    word: {
      originalWord: "stay over",
      phoneticSymbol: "/steɪ ˈoʊvər/",
      translate: ['留宿/过夜']
    },
    phraseList: [
      {
        originText: "You can stay over if you want",
        translate: "如果你愿意，你可以在这留宿"
      }
    ]
  },
  {
    word: {
      originalWord: "Get out to here",
      phoneticSymbol: "/get aʊt tə hɪər/",
      translate: ["从这里离开/试语境可翻译为滚出去"]
    },
    phraseList: [
      {
        originText: "Please get out to here as soon as possible",
        translate: "请尽快从这里出去"
      },
      {
        originText: "as soon as possible/ASAP",
        translate: "尽快"
      }
    ]
  },
  {
    word: {
      originalWord: "rude",
      phoneticSymbol: "[rud]",
      translate: ["adj. 粗鲁的"]
    },
    phraseList: [
      {
        originText: "Why are you so rude to your mother",
        translate: "你为什么对你妈妈这么粗鲁"
      }
    ]
  },
  {
    word: {
      originalWord: "irresistible",
      phoneticSymbol: "/ˌɪrɪˈzɪstəbl/",
      translate: ["adj. 不可抗拒的"]
    },
    phraseList: [
      {
        originText: "Her smile is irresistible",
        translate: "她的微笑是不可抗拒的"
      }
    ]
  },
  {
    word: {
      originalWord: "anyway",
      phoneticSymbol: "[ˈeniˌweɪ]",
      translate: ["adv.	反正/总之/总而言之"]
    },
    phraseList: [
      {
        originText: "Anyway, I really need this necklace",
        translate: "总而言之，我真的需要那条项链"
      }
    ]
  }
];
export const fourthLesson: ILessonInfo = {
  title: "Lesson four [ə]/[ə:]",
  swaggy: {
    originText: `
    I'm really [0] having you again. Oh it's getting late now. you can [1] if you don't want to go home, 
    [2], You are so [3]! , Oh really? Alright, That's a really [4] offer, I don't have enough cash for a taxi [5]`,
    points: [
      {
        word: {
          originalWord: "looking forward to",
          phoneticSymbol: "/ˈlʊkɪŋ ˈfɔːrwərd/",
          translate: ["期盼/盼望"]
        },
        phraseList: [
          {
            originText: "I'm look forward to this show",
            translate: "我期待着这场演出"
          },
          {
            originText: "I'm looking forward to seeing you again",
            translate: "我期待着再次见到你"
          }
        ]
      },
      {
        word: {
          originalWord: "stay over",
          phoneticSymbol: "/steɪ ˈoʊvər/",
          translate: ["留宿/过夜"]
        },
        phraseList: [
          {
            originText: "You can stay over if you want",
            translate: "如果你愿意，你可以留宿"
          }
        ]
      },
      {
        word: {
          originalWord: "Get out to here",
          phoneticSymbol: "/get aʊt tə hɪər/",
          translate: ["从这里离开/试语境可翻译为滚出去"]
        },
        phraseList: [
          {
            originText: "Please get out to here as soon as possible",
            translate: "请尽快离开这里"
          },
          {
            originText: "as soon as possible/ASAP",
            translate: "尽快"
          }
        ]
      },
      {
        word: {
          originalWord: "rude",
          phoneticSymbol: "[rud]",
          translate: ["adj. 粗鲁的"]
        },
        phraseList: [
          {
            originText: "Why are you so rude to your mother",
            translate: "你为什么对你妈妈这么粗鲁"
          }
        ]
      },
      {
        word: {
          originalWord: "irresistible",
          phoneticSymbol: "/ˌɪrɪˈzɪstəbl/",
          translate: ["adj. 不可抗拒的"]
        },
        phraseList: [
          {
            originText: "Her smile is irresistible",
            translate: "她的微笑是不可抗拒的"
          }
        ]
      },
      {
        word: {
          originalWord: "anyway",
          phoneticSymbol: "[ˈeniˌweɪ]",
          translate: ["adv.	反正/总之/总而言之"]
        },
        phraseList: [
          {
            originText: "Anyway, I really need this necklace",
            translate: "总而言之，我真的需要那条项链"
          }
        ]
      }
    ],
  },
  wordList: [wordList, swaggyList],
};
