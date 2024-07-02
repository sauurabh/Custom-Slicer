import powerbi from "powerbi-visuals-api";
import "./../style/visual.less";
import VisualConstructorOptions = powerbi.extensibility.visual.VisualConstructorOptions;
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import IVisual = powerbi.extensibility.visual.IVisual;
export declare class Visual implements IVisual {
    private target;
    private reactRoot;
    private formattingSettings;
    private formattingSettingsService;
    private data;
    private selectedData;
    private basicFilter;
    private host;
    private handleFilter;
    private handleSelect;
    private handleRemove;
    constructor(options: VisualConstructorOptions);
    update(options: VisualUpdateOptions): void;
    private clear;
    getFormattingModel(): powerbi.visuals.FormattingModel;
}
