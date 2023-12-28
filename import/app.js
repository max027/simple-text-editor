import clearUndoDataOnRefresh from '../exports/clearUndo';
import settingHandler from '../exports/settings_setup';
import contextStatusBar from '../exports/contextStatusBar';
import onlineOffline from './onlineOffline';
import clickToZoomHandler from './ctozoom';
import previewPageContent from './preveiw';
import download from '../exports/download';
import settings from './settings';
import NBSinit from './NBSinit';
import render from './render';
import structure from './structure';
import includeStatusBar from './statusbar';
import lineIncrement from './line-increament';
import SBLogic from './SBLogic';
import { showHideFileType } from './statusbar';
import preloader from './preloader';
import colorTheme from '../exports/colorTheme';
import { settingBoth } from '../exports/settings_setup';
import controlScroller from './controlScroller';
import controlNavigation from './controllNavigation';
import controlHoverList from './controlHoverList';
import insertDate from '../exports/insertDate';
import Undo from '../exports/undo';
import multiTaskHandler from '../exports/multiTaskHandler';
import disabledContext from '../exports/disabledContext';

NBSinit(settings, colorTheme);

import keyboardShortcuts from '../mapping/keyboardShortcuts';
import saveAs from '../components/save_as';
import save from '../components/save';
import initializeSettings from '../components/initializeSettings';
import printPage from '../components/print';
import tabOpener from '../components/tab_open';
import fopener from '../components/open';
import alertSaveChanges from '../exports/alertSaveChanges';
import findReplace from '../filter/findReplace';
import contextOption from '../exports/contextOption';

clearUndoDataOnRefresh();

render(
  preloader,
  structure,
  settings.editorSetup["editor.statusBar"]==="on" &&
  {render:".editor-content", html:includeStatusBar}
).execute(
  contextStatusBar,
  disabledContext,
  contextOption,
  lineIncrement,
  SBLogic,
  showHideFileType,
  onlineOffline,
  previewPageContent,
  tabOpener,
  fopener,
  printPage,
  keyboardShortcuts,
  clickToZoomHandler,
  initializeSettings,
  settingHandler,
  settingBoth,
  save,
  saveAs,
  insertDate,
  Undo,
  multiTaskHandler,
  download,
  alertSaveChanges,
  findReplace
);

controlScroller(), controlNavigation(), controlHoverList();