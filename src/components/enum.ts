export interface IPhraseItem {
    originText: string;
    translate: string;
}
export interface IExtraInfo {
    wordComponent: React.ReactNode;
    phraseList: Array<IPhraseItem>;
}
export interface IProverb<T> {
    originalText: string,
    translation: Array<T>
}
export interface IPartOfSpeech {
    label: string,
    info: string
}