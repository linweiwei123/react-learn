export interface IHelloProps {
    name: string,
    level?: number,
    onIncrement?: () => void,
    onDecrement?: () => void,
    clickCounts?: number,
    addClickCounts?: () => void
}

export interface IHelloState {
    currentLevel:number
}