"use strict";

import { formattingSettings } from "powerbi-visuals-utils-formattingmodel";

import FormattingSettingsCard = formattingSettings.SimpleCard;
import FormattingSettingsSlice = formattingSettings.Slice;
import FormattingSettingsModel = formattingSettings.Model;


class DataPointCardSettings extends FormattingSettingsCard {
    maxSelection = new formattingSettings.NumUpDown({
        name: "MaxSelection",
        displayName: "MaxSelection",
        description: "Max Number Of Selection.",
        value: 3
    });

    name: string = "Slicer";
    displayName: string = "Slicer";
    slices: Array<FormattingSettingsSlice> = [this.maxSelection];
}


export class VisualFormattingSettingsModel extends FormattingSettingsModel {
    slicerCard = new DataPointCardSettings();
    cards = [this.slicerCard];
}
