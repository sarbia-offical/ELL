import { IWordInfo, ILessonInfo, ISwaggy } from "./enum";
export const wordList: Array<IWordInfo> = [
    {
        word: {
            originalWord: 'Job',
            phoneticSymbol: '/dʒɑːb/',
            translate: ['n. 工作/职位', 'v. 承包']
        },
        phraseList: [
            {
                originText: 'Good job!',
                translate: '干得好！/干的漂亮'
            },
            {
                originText: 'I give up my job',
                translate: '我放弃了我的工作/我辞职了'
            },
            {
                originText: 'Even if you really need this job, You don’t have high-level certificate',
                translate: '即使你是真的需要这份工作，但是没有高级证书'
            },
            {
                originText: 'The job is over',
                translate: '这份工作结束了'
            }
        ]
    },
    {
        word: {
            originalWord: 'Culture point',
            phoneticSymbol: '',
            translate: ['文化要点（夸赞他人）']
        },
        phraseList: [
            {
                originText: 'you look good/great/incredible/unbelievable/brilliant',
                translate: '你看起来很好/非常棒/不可思议/令人难以置信/才华横溢'
            },
            {
                originText: 'That’s awesome',
                translate: '那真是太棒了'
            },
            {
                originText: 'Nice shoes/dress/headphones',
                translate: '衣服/裙子/耳机不错'
            },
            {
                originText: 'Good taste',
                translate: '好品味'
            }
        ]
    },
    {
        word: {
            originalWord: 'Shot',
            phoneticSymbol: '[ʃɑt]',
            translate: ['n. 铅球/射击/射门', 'adj. 毁坏']
        },
        phraseList: [
            {
                originText: 'Give it a shot',
                translate: '尝试一下'
            },
            {
                originText: 'long shot',
                translate: '视语境而言，不太可能成功的尝试/尝试的成功可能性较低/一种拍摄技巧'
            },
            {
                originText: 'Getting the job might be a long shot, because it requires a high-level certificate',
                translate: '获得这份工作是非常困难的，因为它需要高级证书'
            },
            {
                originText: 'long shot of city skyline',
                translate: '城市天际线的远景镜头'
            }
        ]
    },
    {
        word: {
            originalWord: 'Sorry',
            phoneticSymbol: '[ˈsɔri]',
            translate: ['adj. 抱歉的/遗憾的']
        },
        phraseList: [
            {
                originText: 'I’so sorry about that',
                translate: '我很遗憾/抱歉'
            },
            {
                originText: 'I’m so sorry to hear that',
                translate: '听到这些我很抱歉'
            },
            {
                originText: 'I will make you sorry',
                translate: '我会让你后悔的'
            }
        ]
    },
    {
        word: {
            originalWord: 'Hot',
            phoneticSymbol: '/hɒt/',
            translate: ['adj. 热的/性感的/热情的（视语境而定）']
        },
        phraseList: [
            {
                originText: 'It’s hot day',
                translate: '今天很热'
            },
            {
                originText: 'The girl is so hot',
                translate: '这个女孩很性感'
            },
            {
                originText: 'This people is so hot',
                translate: '这些人太热情了'
            }
        ]
    },
    {
        word: {
            originalWord: 'Hot air',
            phoneticSymbol: '/hɑt ɛr/',
            translate: ['n. 吹牛/热风']
        },
        phraseList: [
            {
                originText: 'You just talk nothing but hot air',
                translate: '你只是在说大话'
            },
            {
                originText: 'it is sounds like hot air',
                translate: '它听起来像胡说八道'
            },
            {
                originText: 'There’s some hot air blowing in here',
                translate: '这里有些热空气吹过/这里有些空洞的言辞（视语境而言）'
            }
        ]
    },
    {
        word: {
            originalWord: 'Hot and bothered',
            phoneticSymbol: '/hɑt ənd ˈbɑðərd/',
            translate: ['生气和焦躁不安的']
        },
        phraseList: [
            {
                originText: 'What’s got you so hot and bothered',
                translate: '你为什么如此焦躁不安'
            },
            {
                originText: 'I’m so hot and bothered',
                translate: '我很焦躁不安'
            },
            {
                originText: 'The horse is so bothered',
                translate: '这匹马非常不安'
            },
            {
                originText: 'She is so hot and bothered about you',
                translate: '她对你感到非常的激动和焦躁不安'
            }
        ]
    },
    {
        word: {
            originalWord: 'Have the hot for ...',
            phoneticSymbol: '',
            translate: ['喜欢/感兴趣...']
        },
        phraseList: [
            {
                originText: 'You have the hots for the girl',
                translate: '你对那个女孩感兴趣'
            },
            {
                originText: 'You have the hots for her',
                translate: '你喜欢它'
            },
            {
                originText: 'Tom has the hot for the new nurse',
                translate: '汤姆对新来的护士感兴趣'
            }
        ]
    },
    {
        word: {
            originalWord: 'Red hot',
            phoneticSymbol: '/rɛd hɑt/',
            translate: ['滚烫的/高温的/极端']
        },
        phraseList: [
            {
                originText: 'Red hot air',
                translate: '高温空气/激烈的空洞言辞'
            },
            {
                originText: 'Red hot water',
                translate: '滚烫的水'
            },
            {
                originText: 'The weather is so red hot',
                translate: '今天的天气极端高温'
            },
            {
                originText: 'Red hot！How about some red hot peanuts',
                translate: '烫手的！来点烫手的花生吧'
            },
            {
                originText: 'Red hots gates of hell',
                translate: '滚烫的地狱之门（可用来形容极端的环境/无法忍受的困境，用于文学作品表达）'
            }
        ]
    },
    {
        word: {
            originalWord: 'More',
            phoneticSymbol: '[mɔ:(r)]',
            translate: ['adv. 更多的；更大的', 'adj. 更多的/many的比较级']
        },
        phraseList: [
            {
                originText: 'Less is More',
                translate: '少即是多'
            },
            {
                originText: 'People always like more money',
                translate: '人们总想要更多的财富'
            },
            {
                originText: 'Would you like more food',
                translate: '你还想要更多的食物吗'
            }
        ]
    },
    {
        word: {
            originalWord: 'Call',
            phoneticSymbol: '[kɔːl]',
            translate: ['n. 打电话/呼唤/呼吁', 'v. 呼唤']
        },
        phraseList: [
            {
                originText: 'Your call',
                translate: '你说了算'
            },
            {
                originText: 'Call me late',
                translate: '等会打电话给我'
            },
            {
                originText: 'She calls her father to ask about the test results',
                translate: '她打电话给他爸爸问考试成绩'
            },
            {
                originText: 'The Boss called Tom about the new mate at night',
                translate: '老板晚上打电话给Tom，关于这个新同事'
            }
        ]
    },
    {
        word: {
            originalWord: 'Culture point',
            phoneticSymbol: '',
            translate: ['文化要点（付账）']
        },
        phraseList: [
            {
                originText: 'Should we pay separately or together',
                translate: '咱是各付各的还是一起付呢？'
            },
            {
                originText: 'Split the bill, please',
                translate: '各付各的(AA)'
            },
            {
                originText: 'My treat',
                translate: '我请客(你想请客)'
            },
            {
                originText: 'I will get us next round',
                translate: '下轮我请客(有人请了你)'
            }
        ]
    },
    {
        word: {
            originalWord: 'Ball',
            phoneticSymbol: '/bɔːl/',
            translate: ['n. 球；球状物/胆识/睾丸/舞会', 'v. 做成球状/和(女性)交媾']
        },
        phraseList: [
            {
                originText: 'hand ball',
                translate: '手球'
            },
            {
                originText: 'Handball is popular sport in Europe',
                translate: '手球在欧洲很流行'
            },
            {
                originText: 'He doesn’t have the balls to do it',
                translate: '他没有胆识这么干'
            },
            {
                originText: 'She left the ball and went to see the sea witch',
                translate: '她离开了舞会，去找了海巫婆（童话故事美人鱼）'
            }
        ]
    },
    {
        word: {
            originalWord: 'Door',
            phoneticSymbol: '/dɔː/',
            translate: ['n. 门/门口']
        },
        phraseList: [
            {
                originText: 'He finally finds the door handle',
                translate: '他终于找到了门把手'
            },
            {
                originText: 'When you leave, please close the door',
                translate: '当你离开时，请关上门'
            }
        ]
    },
    {
        word: {
            originalWord: 'Talk',
            phoneticSymbol: '[tɔk]',
            translate: ['v. 说话', 'n. 谈话/讨论']
        },
        phraseList: [
            {
                originText: 'Money talks',
                translate: '有钱能使鬼推磨',
            },
            {
                originText: 'Pep talk',
                translate: '动员词/鸡汤/鼓励的话'
            },
            {
                originText: 'Thanks for the pep talk',
                translate: '谢谢你的鼓励/鸡汤'
            },
            {
                originText: 'Talk to/Talk with',
                translate: '和...谈话'
            },
            {
                originText: 'I would like to talk with you',
                translate: '我想和你谈谈(I would like to 我想)'
            },
            {
                originText: 'How to talk with your daughter',
                translate: '如何与你的女儿沟通'
            },
            {
                originText: 'Talk about',
                translate: '谈及/讨论'
            },
            {
                originText: 'Talk about that later',
                translate: '一会再聊'
            },
            {
                originText: 'small talk',
                translate: '闲聊'
            },
            {
                originText: 'I hate small talk, i want to talk about science',
                translate: '我讨厌闲聊，我想讨论科学'
            },
            {
                originText: 'Talk somebody into ...',
                translate: '说服某人做什么'
            },
            {
                originText: 'We will talk him into it',
                translate: '我们会说服他去做这个的'
            },
            {
                originText: 'The leader used the speech to talk the country into the war',
                translate: '领导者通过演讲说服国家参战'
            }
        ]
    },
    {
        word: {
            originalWord: "Manager",
            phoneticSymbol: "[ˈmænɪdʒər]",
            translate: ["n. 经理"]
        },
        phraseList: [
            {
                originText: "I will be your new manager starting today",
                translate: "从今天起，我就是你们的新经理了"
            }
        ]
    },
    {
        word: {
            originalWord: "Have waited for",
            phoneticSymbol: "/hæv ˈweɪ.tɪd fɔːr/",
            translate: ["从某个时间一直等到现在"]
        },
        phraseList: [
            {
                originText: "I have waited for you an hour",
                translate: "我等了你一个小时了"
            },
            {
                originText: "I have waited for this show for a long time",
                translate: "我等这个节目等很久了"
            }
        ]
    },
    {
        word: {
            originalWord: "Dish",
            phoneticSymbol: "/dɪʃ/",
            translate: ["n. 菜品/菜/碟子"]
        },
        phraseList: [
            {
                originText: "Cold Dish",
                translate: "凉菜"
            },
            {
                originText: "Bowls and Dish",
                translate: "碗和碟子"
            },
            {
                originText: "He washed the dish",
                translate: "他洗掉了碟子"
            }
        ]
    },
    {
        word: {
            originalWord: "Care to explain",
            phoneticSymbol: "/keər tə ɪkˈspleɪn/",
            translate: ["可以解释一下吗"]
        },
        phraseList: [
            {
                originText: "Care to marry me?",
                translate: "愿意嫁给我吗（married是已婚的意思，所以这里marry）"
            },
            {
                originText: "She is married",
                translate: "她已经结婚了"
            },
            {
                originText: "Care to hold the door for me?",
                translate: "介意帮我扶一下门吗？"
            },
            {
                originText: "Care to dance",
                translate: "可以跳一支舞吗"
            }
        ]
    },
    {
        word: {
            originalWord: "apologize",
            phoneticSymbol: "[əˈpɒləˌdʒaɪz]",
            translate: ["v. 道歉"]
        },
        phraseList: [
            {
                originText: "Deepest apologies",
                translate: "诚恳的道歉"
            },
            {
                originText: "apologize for",
                translate: "为...道歉（apologize for更诚恳，sorry的程度更轻）"
            },
            {
                originText: "I apologize for being late",
                translate: "我为我的迟到道歉"
            },
            {
                originText: "Sorry, My apologies",
                translate: "对不起，我道歉"
            }
        ]
    },
    {
        word: {
            originalWord: "Make it up",
            phoneticSymbol: "/meɪk ɪt ʌp/",
            translate: ["和解/弥补/编造"]
        },
        phraseList: [
            {
                originText: "I hope i can make it up",
                translate: "我希望我能赶上进度/弥补"
            },
            {
                originText: "I don’t believer you, you make it up",
                translate: "我不相信你，这是你编造的"
            },
            {
                originText: "Make-up",
                translate: "化妆品"
            }
        ]
    },
    {
        word: {
            originalWord: "On the house",
            phoneticSymbol: "/ɒn ðə haʊs/",
            translate: ["免费赠送/老板请客"]
        },
        phraseList: [
            {
                originText: "Everybody! Drink tonight is on the house",
                translate: "各位！今晚店家请客"
            }
        ]
    },
    {
        word: {
            originalWord: "Regret",
            phoneticSymbol: " [rɪˈɡret]",
            translate: ["n. 道歉", "v. 懊恼"]
        },
        phraseList: [
            {
                originText: "It’s too late to regret",
                translate: "后悔已经太迟了"
            },
            {
                originText: "But it’s too late to say you are sorry",
                translate: "但是现在说抱歉已经太晚了",
            },
            {
                originText: "My man’s got a heart like a rock cast in the sea",
                translate: "我的男人有一颗深海中的磐石般的心",
            },
            {
                originText: "Regret to do",
                translate: "对要做的事情后悔（还未做）"
            },
            {
                originText: "I regret to tell you that, you are fired",
                translate: "我很遗憾告诉你这个，你被解雇了"
            },
            {
                originText: "Regret doing",
                translate: "对已经做的事情后悔"
            },
            {
                originText: "I regret telling her the truth",
                translate: "我后悔告诉了她真相"
            }
        ]
    }
]
export const fifthLesson: ILessonInfo = {
    title: 'Lesson fifth[ɑː][ɔ:]',
    swaggy: {
        originText: 'Hello sir I’m the [0], [1], And i got a wrong [2]. [3] Oh! I’m so sorry you have my [4], I will [5] to you, This meal will be [6]. Sure! My deepest [7] i won’t happen again',
        points: [
            {
                word: {
                    originalWord: "manager",
                    phoneticSymbol: '[ˈmænɪdʒər]',
                    translate: ["n. 经理"]
                },
                phraseList: [
                    {
                        originText: "I will be your new manager starting today",
                        translate: "从今天起，我就是你们的新经理"
                    }
                ]
            },
            {
                word: {
                    originalWord: "I have already waited here for almost 1 hour",
                    phoneticSymbol: "",
                    translate: ["我已经在这里等了快一小时了"]
                },
                phraseList: [
                    {
                        originText: "I have already waited here for almost 1 hour",
                        translate: "我已经在这里等了一个小时了"
                    },
                    {
                        originText: "I have waited here for almost 1 hour",
                        translate: "我在这里等了一个小时了"
                    }
                ]
            },
            {
                word: {
                    originalWord: "dish",
                    phoneticSymbol: "/dɪʃ/",
                    translate: ["n. 菜品/菜/碟子"]
                },
                phraseList: [
                    {
                        originText: "bowls and dish",
                        translate: "碗和碟子"
                    },
                    {
                        originText: "He washed the dishes",
                        translate: "他洗掉了那些碟子"
                    },
                    {
                        originText: "Cold Dish",
                        translate: "凉菜"
                    }
                ]
            },
            {
                word: {
                    originalWord: "Care to explain?",
                    phoneticSymbol: "/keər tə ɪkˈspleɪn/",
                    translate: ["可以解释一下吗"]
                },
                phraseList: [
                    {
                        originText: "Care to marry me？",
                        translate: "可以嫁给我吗（married是已婚的意思）"
                    },
                    {
                        originText: "She is married",
                        translate: "她已婚了"
                    },
                    {
                        originText: "Care to hold the door for me?",
                        translate: "可以帮我扶一下门吗"
                    },
                    {
                        originText: "Care to dance?",
                        translate: "可以跳一支舞吗"
                    }
                ]
            },
            {
                word: {
                    originalWord: "deepest apologies",
                    phoneticSymbol: "/ˈdiː.pɪst əˈpɒl.ə.dʒiz/",
                    translate: ["诚挚的道歉"]
                },
                phraseList: [
                    {
                        originText: "Apologize for",
                        translate: "为...道歉（apologize for的诚意更深，sorry就相当于 不好意思 对不起 ）" 
                    },
                    {
                        originText: "I apologize for being late",
                        translate: "我为迟到而道歉"
                    },
                    {
                        originText: "Sorry, My apologies",
                        translate: "对不起，我的错"
                    }
                ]
            },
            {
                word: {
                    originalWord: "make it up",
                    phoneticSymbol: "/meɪk ɪt ʌp/",
                    translate: ["和解/弥补/编造"]
                },
                phraseList: [
                    {
                        originText: "I hope I can make it up",
                        translate: "我希望我能赶上进度/弥补"
                    },
                    {
                        originText: "I don’t believer you, you make it up",
                        translate: "我不相信你，这是你编造的"
                    },
                    {
                        originText: "Make-up",
                        translate: "化妆品"
                    }
                ]
            },
            {
                word: {
                    originalWord: "On the house",
                    phoneticSymbol: "/ɒn ðə haʊs/",
                    translate: ["免单/老板请客"]
                },
                phraseList: [
                    {
                        originText: "Everybody! Drinks tonight is on the house",
                        translate: "各位！今晚店家请客"
                    }
                ]
            },
            {
                word: {
                    originalWord: "regrets",
                    phoneticSymbol: "[rɪˈɡret]",
                    translate: ["n. 遗憾/歉意", "v. 后悔/对...遗憾"]
                },
                phraseList: [
                    {
                        originText: "It’s too late to regret",
                        translate: "后悔已经太迟了"
                    },
                    {
                        originText: "But it’s too late to say you are sorry",
                        translate: "但是现在说抱歉已经太晚了",
                    },
                    {
                        originText: "My man’s got a heart like a rock cast in the sea",
                        translate: "我的男人有一颗深海中的磐石般的心",
                    },
                    {
                        originText: "Regret to do",
                        translate: "对要做的事情遗憾（未发生）"
                    },
                    {
                        originText: "I regret to tell you, you are fired",
                        translate: "我很遗憾的告诉你，你被解雇了"
                    },
                    {
                        originText: "Regret doing",
                        translate: "对做的事情遗憾（已经做了）"
                    },
                    {
                        originText: "I regret to telling her the truth",
                        translate: "我后悔告诉她真相"
                    },
                    {
                        originText: "Shit happens",
                        translate: "人生难免有失意时"
                    }
                ]
            }
        ]
    },
    wordList: [wordList]
}