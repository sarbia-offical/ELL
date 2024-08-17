/*
 * @Description:
 * @version:
 * @Author: zouwenqin
 * @Date: 2024-08-02 00:19:36
 * @LastEditors: zouwenqin
 * @LastEditTime: 2024-08-17 17:14:57
 */

import { IPhraseItem, IExtraInfo, IProverb, IPartOfSpeech } from "./enum";
import { RenderWordComponent, RenderExtraComponent } from "./basic"
import { ProverbComponent } from "./proverb";
import { PartOfSpeechComponent } from "./partOfSpeech";
import CourseCard from "./courseCard";
import SwaggyCard from "./swaggyCard"
import { WaterFall, WaterFallItem, IWaterFallItem } from "./waterFall";
export type { IPhraseItem, IExtraInfo, IProverb, IPartOfSpeech, IWaterFallItem };
export { 
    RenderExtraComponent, 
    RenderWordComponent, 
    ProverbComponent, 
    PartOfSpeechComponent, 
    CourseCard, 
    SwaggyCard, 
    WaterFall,
    WaterFallItem
}
