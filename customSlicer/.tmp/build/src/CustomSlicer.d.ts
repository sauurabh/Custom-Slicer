import React from "react";
export interface Props {
    onSelect: (selectedItems: any[]) => void;
    onRemove: (selectedItems: any[]) => void;
}
export interface State {
    data: any;
    maxSelection: number;
}
export declare var initialState: State;
export declare class CustomSlicer extends React.Component<Props, State> {
    private static updateCallback;
    static update(newState: State): void;
    state: State;
    componentWillMount(): void;
    componentWillUnmount(): void;
    constructor(props: any);
    private handleSelectionChange;
    render(): React.JSX.Element;
}
export default CustomSlicer;
