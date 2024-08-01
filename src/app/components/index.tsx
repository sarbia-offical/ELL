export interface IPhraseItem {
  originText: string;
  translate: string;
}
export interface IExtraInfo {
  wordComponent: React.ReactNode;
  phraseList: Array<IPhraseItem>;
}

export const RenderWordComponent = (
  word: string,
  phoneticSymbol: string,
  translate: string | React.ReactNode
) => {
  return (
    <>
      <div>{word}</div>
      <div>{phoneticSymbol}</div>
      <div>{translate}</div>
    </>
  );
};
export const RenderExtraComponent = (list: Array<IExtraInfo>) =>
  list.map((item: IExtraInfo, index: number) => (
    <tr key={index}>
      <td>{item.wordComponent}</td>
      <td>
        {item.phraseList.map((item2: IPhraseItem, index2: number) => {
          return (
            <div key={index2}>
              <div>{item2.originText}</div>
              <div>{item2.translate}</div>
            </div>
          );
        })}
      </td>
    </tr>
  ));
