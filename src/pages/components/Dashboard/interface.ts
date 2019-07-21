import { IArticle } from '../../../actions/home';

export interface IHelloProps {
  name: string,
  level: number,
  articles: IArticle[]
  onIncrement: () => void,
  onDecrement: () => void,
  clickCounts: number,
  addClickCounts: () => void,
  onLoad: (payload: Promise<any>) => void
}

export interface IHelloState {
  currentLevel: number
}