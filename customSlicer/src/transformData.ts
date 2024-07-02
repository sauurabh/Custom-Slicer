'use strict'
import powerbi from "powerbi-visuals-api";
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import PrimitiveValue = powerbi.PrimitiveValue

export interface VData {
    values: PrimitiveValue[],
    table: string,
    column: string
}

export function transformData(options: VisualUpdateOptions): VData {
    let data: VData

    try {
        const values = options.dataViews[0].categorical.categories[0].values;
        const queryName = options.dataViews[0].categorical.categories[0].source.queryName;
        const dotIndex = queryName?.indexOf(".");

        data = {
            values,
            table: queryName?.substring(0, dotIndex),
            column: queryName?.substring(dotIndex + 1)

        }



    } catch (error) {
        data = {
            values: [],
            table: "",
            column: ""
        }

    }
    return data

}