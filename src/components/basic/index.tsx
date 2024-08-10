import { IPhraseItem, IExtraInfo } from "../enum";
type RenderWordComponentProps = {
  word: string,
  phoneticSymbol: string,
  translate: string | React.ReactNode
}
export const RenderWordComponent = (
  { word, phoneticSymbol, translate }: RenderWordComponentProps
) => (
  <>
    <div>{word}</div>
    <div>{phoneticSymbol}</div>
    <div>{translate}</div>
  </>
);

type RenderExtraComponentProps = {
  list: Array<IExtraInfo>
}
export const RenderExtraComponent = ({ list }: RenderExtraComponentProps) =>
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
