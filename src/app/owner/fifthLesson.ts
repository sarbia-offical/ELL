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