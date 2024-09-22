import { IWordInfo, ILessonInfo, ISwaggy } from "./enum";
export const wordList: Array<IWordInfo> = [
    {
        word: {
            originalWord: 'Wood',
            phoneticSymbol: ' [wʊd]',
            translate: ['n. 木材/木头/树林', 'v. 植树造林/收集木头']
        },
        phraseList: [
            {
                originText: 'Hard Wood',
                translate: '硬木头'
            },
            {
                originText: 'Soft Wood',
                translate: '软木'
            },
            {
                originText: 'This table is made of hard wood',
                translate: '这张桌子是硬木制作的'
            },
            {
                originText: 'This chair is crafted from hard wood',
                translate: '这张椅子是由硬木精心制作做的'
            }
        ]
    },
    {
        word: {
            originalWord: 'Book',
            phoneticSymbol: '[bʊk]',
            translate: ['n. 书籍/书本/著作', 'V. 预订/预约']
        },
        phraseList: [
            {
                originText: 'A small artist’s book will be published',
                translate: '一本艺术书籍将要被出版'
            },
            {
                originText: 'He buy a new book',
                translate: '他买了一本新书'
            },
            {
                originText: 'The book is on the hard wood table',
                translate: '书在硬木桌子上'
            },
            {
                originText: 'I’m reading a new book',
                translate: '我在读一本新书'
            }
        ]
    },
    {
        word: {
            originalWord: 'Good',
            phoneticSymbol: ' [ɡʊd]',
            translate: ['adv. 好', 'n. 好处/好人/益处', 'adj. 有好处']
        },
        phraseList: [
            {
                originText: 'A good book',
                translate: '一本好书'
            },
            {
                originText: 'My life is good, really good',
                translate: '我的生活很好，真的好'
            },
            {
                originText: 'For good',
                translate: '永远的'
            },
            {
                originText: 'He left the city for good, never looked back',
                translate: '他离开了这座城市，永远也没有回头'
            },
            {
                originText: 'He had this property for good',
                translate: '它永远地拥有这座房产'
            },
            {
                originText: 'I’m leaving you for good',
                translate: '我将永远离开你'
            }
        ]
    },
    {
        word: {
            originalWord: 'push',
            phoneticSymbol: '[pʊʃ]',
            translate: ['v. 推动/推进/按', 'n. 推动/激励']
        },
        phraseList: [
            {
                originText: 'The door says push, not pull',
                translate: '这张门上面写着 “推” 而不是 “拉” '
            },
            {
                originText: 'They push him into this car',
                translate: '他们将他推进了这辆车里面'
            },
            {
                originText: 'Don’t push me',
                translate: '别催我/别推我/别逼我（试情况而定）'
            },
            {
                originText: 'Pushy people',
                translate: '咄咄逼人的人'
            },
            {
                originText: 'I don’t like working with pushy people',
                translate: '我不喜欢和咄咄逼人的人一起工作'
            },
            {
                originText: 'He is a pushy people',
                translate: '他是一个咄咄逼人的人'
            }
        ]
    },
    {
        word: {
            originalWord: 'Look',
            phoneticSymbol: '[lʊk]',
            translate: ['n. 看/外观/查看/瞧', 'v. 看/寻找']
        },
        phraseList: [
            {
                originText: 'Hey doctor, Looking this guy',
                translate: '嘿 大夫，看看这个家伙'
            },
            {
                originText: 'Look after',
                translate: '互相照顾'
            },
            {
                originText: 'We look after each other',
                translate: '我们互相照顾彼此'
            },
            {
                originText: 'I will just be straight with you, Maybe we can look after our parents each other',
                translate: '我实话和你说吧，我们也许可以互相照顾彼此的父母'
            },
            {
                originText: 'Look at',
                translate: '看着'
            },
            {
                originText: 'Look at me! you are so suck',
                translate: '看着我吧！你真差劲'
            },
            {
                originText: 'He just looks at this disaster happening',
                translate: '他只是看着这灾难发生'
            },
            {
                originText: 'Look back',
                translate: '回顾/回头看'
            },
            {
                originText: 'I never look back',
                translate: '我永远也不回头'
            },
            {
                originText: 'I’m never looking back, Maybe you can look back, We care about you',
                translate: '我永远也不回头，也许你可以回头看看，我们都很关心你(looking back和前面的am构成现在进行时，can是情态动词后面接原型)'
            },
            {
                originText: 'I’m apologize for being so rude to my mother',
                translate: '我很抱歉我对我的母亲这么粗鲁'
            },
            {
                originText: 'Look forward to',
                translate: '期待/再次'
            },
            {
                originText: 'I’m really looking forward to see you again',
                translate: '我真的很期待能再次看到你'
            },
            {
                originText: 'Look into',
                translate: '调查/查看'
            },
            {
                originText: 'I will look into this property ownership certificate',
                translate: '我会调查这张房产证的'
            },
            {
                originText: 'Without looking into it, there’s no truth',
                translate: '不去调查，就没有真相'
            },
            {
                originText: 'Look like',
                translate: '看起来像'
            },
            {
                originText: 'You look like superman',
                translate: '你看起来像超人'
            },
            {
                originText: '一般现在时中第三人称单数(he,she,it后面的动词要在原型后面接s)',
                translate: 'He runs every morning/She likes pizza/The dog barks loudly'
            },
            {
                originText: 'I,We,You,They保持动词原型',
                translate: 'I like ice cream/We like pizza/You like dog/They like bark'
            }
        ]
    },
    {
        word: {
            originalWord: 'Put',
            phoneticSymbol: '[put]',
            translate: ['v. 放/安置/说', 'n. 推/投']
        },
        phraseList: [
            {
                originText: 'Put it there/Put it here/Put it away/Put it down',
                translate: '放在那里/放在这里/收起来/放下'
            },
            {
                originText: 'Stay put',
                translate: '保持不动/不许动'
            },
            {
                originText: 'Put your hands above your head, And stay put',
                translate: '将你的手放在头顶上，不许动'
            },
            {
                originText: 'Do you have any weapons',
                translate: '你有什么武器吗'
            },
            {
                originText: 'Freeze',
                translate: '视情况而定（冻住/冻结/停止/霜冻/）'
            },
            {
                originText: 'Stay still',
                translate: '保持这样/别动'
            },
            {
                originText: 'Put on',
                translate: '穿上'
            },
            {
                originText: 'Put on your coat',
                translate: '穿上你的外套'
            },
            {
                originText: 'Put on some music',
                translate: '放点音乐'
            },
            {
                originText: 'Put on some pressure',
                translate: '加点压力'
            },
            {
                originText: 'Put off',
                translate: '推迟'
            },
            {
                originText: 'Maybe you should put off',
                translate: '也许你该推迟一下'
            },
            {
                originText: 'If i put off this interview, someone else is going to get this job',
                translate: '如果我推迟了这次面试，那其他人就会获得这个工作'
            },
            {
                originText: 'Don’t put off for tomorrow',
                translate: '不要推迟到明天'
            },
            {
                originText: 'But he didn’t seem to want to be put off',
                translate: '但他看起来不想推迟'
            },
            {
                originText: 'You can go if you have to, it’s nothing i can put it off',
                translate: '你想去就去吧，我没法推迟'
            },
            {
                originText: 'Put out',
                translate: '熄灭'
            },
            {
                originText: 'Put out the lighter',
                translate: '把打火机熄灭了'
            },
            {
                originText: 'Put ot this tanning machine light',
                translate: '关掉这个美黑机的灯'
            },
            {
                originText: 'Put oneself together',
                translate: '振作起来/冷静下来'
            },
            {
                originText: 'This bless/pep talk is nothing, put yourself together',
                translate: '这个祝福/鼓舞士气的话没什么用，振作起来吧'
            }
        ]
    }
]
export const sixthLesson: ILessonInfo = {
    title: 'Lesson sixth[u][u:]',
    swaggy: {
        originText: '',
        points: []
    },
    wordList: [wordList]
}