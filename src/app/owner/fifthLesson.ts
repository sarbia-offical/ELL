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
                translate: '你看起来很好/非常棒/令人难以置信/才华横溢'
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
                originText: 'it is hear like hot air',
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
    }
]
export const fifthLesson: ILessonInfo = {
    title: 'Lesson fifth[ɑː][ɔ:]',
    swaggy: {
        originText: '',
        points: []
    },
    wordList: [wordList]
}