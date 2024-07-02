"use strict";

import powerbi from "powerbi-visuals-api";
import { FormattingSettingsService } from "powerbi-visuals-utils-formattingmodel";
import "./../style/visual.less";

import VisualConstructorOptions = powerbi.extensibility.visual.VisualConstructorOptions;
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import IVisual = powerbi.extensibility.visual.IVisual;
import IVisualHost = powerbi.extensibility.visual.IVisualHost

import { VisualFormattingSettingsModel } from "./settings";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { CustomSlicer, initialState } from "./CustomSlicer"
import { IBasicFilter, FilterType } from "powerbi-models"
import { transformData, VData } from "./transformData"

export class Visual implements IVisual {
    private target: HTMLElement;
    private reactRoot: React.ComponentElement<any, any>;
    private formattingSettings: VisualFormattingSettingsModel;
    private formattingSettingsService: FormattingSettingsService;
    //for selection
    private data: VData
    private selectedData: any
    private basicFilter: IBasicFilter
    private host: IVisualHost;
    //--------------------

    private handleFilter(data: any) {
        this.basicFilter = {
            $schema: "https://powerbi.com/product/schema#basic",
            target: {
                table: "hospitalDatasetNew",
                column: this.data.column
            },
            operator: "In",
            values: null,
            filterType: FilterType.Basic
        }
        this.basicFilter.values = this.selectedData
        if (this.selectedData.length <= 0) {
            this.host.applyJsonFilter(this.basicFilter, "general", "filter", powerbi.FilterAction.remove)
        }
        else {
            this.host.applyJsonFilter(this.basicFilter, "general", "filter", powerbi.FilterAction.merge)
        }

    }
    private handleSelect = (selectedItems: string[]) => {
        this.selectedData = selectedItems
        this.handleFilter(this.selectedData)

    };

    private handleRemove = (selectedItems: string[]) => {
        this.selectedData = selectedItems
        this.handleFilter(this.selectedData)

    };
    constructor(options: VisualConstructorOptions) {
        this.host = options.host
        this.data = null

        this.formattingSettingsService = new FormattingSettingsService();
        this.reactRoot = React.createElement(CustomSlicer,
            {
                onSelect: this.handleSelect,
                onRemove: this.handleRemove
            }
        );
        this.target = options.element;
        ReactDOM.render(this.reactRoot, this.target);
    }

    public update(options: VisualUpdateOptions) {
        if ((options.dataViews && options.dataViews[0])) {
            this.formattingSettings = this.formattingSettingsService.populateFormattingSettingsModel(VisualFormattingSettingsModel,
                options.dataViews[0]);
            const containerSettings = this.formattingSettings.slicerCard
            this.data = transformData(options)
            CustomSlicer.update({
                maxSelection: containerSettings.maxSelection.value,
                data: this.data.values,
            });
        }
        else {
            this.clear()
        }

    }
    private clear() {
        CustomSlicer.update(initialState);
    }
    public getFormattingModel(): powerbi.visuals.FormattingModel {
        return this.formattingSettingsService.buildFormattingModel(this.formattingSettings);
    }
}