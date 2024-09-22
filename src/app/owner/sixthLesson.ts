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
            }
        ]
    },
]
export const sixthLesson: ILessonInfo = {
    title: 'Lesson sixth[u][u:]',
    swaggy: {
        originText: '',
        points: []
    },
    wordList: [wordList]
}