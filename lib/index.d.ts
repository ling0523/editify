import { default as Editify } from './editify/editify.vue';
import { FunctionPlugin } from 'vue';

export type { ButtonTypeType, ButtonOptionsItemType, ButtonSelectConfigType, ButtonDisplayConfigType } from './components/button/props';
export type { MenuButtonType, MenuSelectButtonType, MenuDisplayButtonType, MenuImageButtonType, MenuVideoButtonType, MenuTableButtonType, MenuCustomButtonType, CodeBlockToolbarType, TextToolbarType, ToolbarConfigType, MenuSequenceType, MenuModeType, MenuConfigType, PluginType, PluginResultType } from './core/tool';
export type { InsertImageUploadErrorType } from './components/insertImage/props';
export type { InsertVideoUploadErrorType } from './components/insertVideo/props';
export type { AttachmentOptionsType } from './plugins/attachment';
export { getParsedomElementByElement, getCurrentParsedomElement, elementIsInList, elementIsInTask, isList, isTask, hasPreInRange, isRangeInPre, hasQuoteInRange, isRangeInQuote, hasListInRange, isRangeInList, hasTaskInRange, isRangeInTask, hasLinkInRange, hasTableInRange, hasImageInRange, hasVideoInRange, queryTextStyle, queryTextMark, getRangeText, setIndentIncrease, setIndentDecrease, setQuote, setAlign, setList, setTask, setTextStyle, setTextMark, removeTextStyle, removeTextMark, setLineHeight, insertLink, insertImage, insertVideo, insertTable, insertCodeBlock } from './core/function';
declare const install: FunctionPlugin;
declare const version = "0.1.22";
export { AlexElement } from 'alex-editor';
export { install as default, install, Editify, version };
export { attachment } from './plugins/attachment';
