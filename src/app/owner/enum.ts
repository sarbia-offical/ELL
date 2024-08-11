interface IWord{
    originalWord: string
    phoneticSymbol: string
    translate: Array<string>
}
interface IPhraseItem {
    originText: string
    translate: string
}
export interface IWordInfo {
    word: IWord,
    phraseList: Array<IPhraseItem>
}
export interface ILessonInfo {
    title: string,
    swaggy: ISwaggy,
    wordList: Array<Array<IWordInfo>>
}
export interface ISwaggy {
    originText: string,
    points: Array<IWordInfo>
}