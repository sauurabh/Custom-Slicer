import powerbi from "powerbi-visuals-api";
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import PrimitiveValue = powerbi.PrimitiveValue;
export interface VData {
    values: PrimitiveValue[];
    table: string;
    column: string;
}
export declare function transformData(options: VisualUpdateOptions): VData;
