import { AboutIconType } from "../enums/about-icon-type.enums";
import { ColorType } from "../enums/color-type.enums";

export interface AboutCard {
    icon: AboutIconType,
    color: ColorType,
    text: string
}