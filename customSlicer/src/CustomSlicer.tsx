import React from "react";
import Multiselect from 'multiselect-react-dropdown';
export interface Props {
    onSelect: (selectedItems: any[]) => void;
    onRemove: (selectedItems: any[]) => void;
}

export interface State {
    data: any;
    maxSelection: number;
}
export var initialState: State = {
    maxSelection: 3,
    data: [],
}

export class CustomSlicer extends React.Component<Props, State> {
    private static updateCallback: (data: object) => void = null;

    public static update(newState: State) {
        if (typeof CustomSlicer.updateCallback === "function") {
            CustomSlicer.updateCallback(newState);
        }
    }

    public state: State = initialState;

    public componentWillMount() {
        CustomSlicer.updateCallback = (newState: State): void => {
            this.setState(newState);
        };
    }

    public componentWillUnmount() {
        CustomSlicer.updateCallback = null;
    }

    constructor(props: any) {
        super(props);
        this.state = initialState;
    }
    private handleSelectionChange = (selectedList: any[], selectedItem: any) => {

        const valuesSelected = selectedList.map(item => item.value);

        if (selectedItem) {
            this.props.onSelect(valuesSelected);
        } else {
            this.props.onRemove(valuesSelected);
        }
    };


    render() {
        const { maxSelection, data } = this.state;
        const style = {
            multiselectContainer: { // To change css for multiselect (Width,height,etc..)
            },
            searchBox: { // To change search box element look
                border: "none",
                fontSize: "10px",
                minHeight: "50px"
            },
            inputField: { // To change input field position or margin
                margin: "5px"
            },
            chips: { // To change css chips(Selected options)
                background: "red"
            },
            optionContainer: { // To change css for option container 
                border: "2px solid"
            },
            option: { // To change css for dropdown options
                color: "blue",
                fontSize: "20px"
            },
            groupHeading: { // To change group heading style

            }
        };
        const options = data.map(name => ({ value: name, label: name }));


        return (
            <Multiselect
                options={options}
                displayValue="value"
                showCheckbox={true}
                onSelect={this.handleSelectionChange}
                onRemove={this.handleSelectionChange}
                selectionLimit={maxSelection}
                style={style}
            />
        )
    }
}

export default CustomSlicer;
