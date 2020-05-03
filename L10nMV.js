/*:
 * @plugindesc This plugin provides localization feature to RPG Maker MV.
 * Version : Development version
 * Commit hash : -
 * @author Creta Park (https://creft.me/cretapark)
 *
 * @help
 * 
 * |                                                                  |
 * |                     ===== L10nMV.js =====                        |
 * |                                                                  |
 * | This plugin provides localization feature to RPG Maker MV.       |
 * | Created by Creta Park (https://creft.me/cretapark)               |
 * | License : MIT                                                    |
 * | GitHub page : https://github.com/Creta5164/L10nMV.js             |
 * |                                                                  |
 * | - Update from old version guide -------------------------------- |
 * | 1. Double-click L10nMV in plugin management menu                 |
 * | 2. Change to other plugin and restore it to L10nMV.              |
 * |    (Doesn't need re-writting plugin parameters!)                 |
 * | 3. Click 'OK' to apply and save your project.                    |
 * | 4. Run your game and check developer console                     |
 * |                                                                  |
 * | - Table of content --------------------------------------------- |
 * |  1. Preparation                                                  |
 * |  2. How to use                                                   |
 * |    2.1. Generate template language pack                          |
 * |    2.2. Replace images, sounds                                   |
 * |    2.3. Apply to extra plugins                                   |
 * |  3. Plugin options                                               |
 * |                                                                  |
 * | 1. Preparation ------------------------------------------------- |
 * | Create 'lang' directory in your MV project.                      |
 * |                                                                  |
 * | 2. How to use  ------------------------------------------------- |
 * | Basically, L10nMV automatically links localized text from lang   |
 * | directory files to game.                                         |
 * | If player uses default-language value then L10nMV uses default   |
 * | resources in your game.                                          |
 * |                                                                  |
 * | If you want to support other languages must add language pack    |
 * | directory in 'lang' directory.                                   |
 * | language pack directory name must be ISO 639-1 code.             |
 * | (i.e. en, ko, ja, es, ru...)                                     |
 * |                                                                  |
 * | It's should be like this :                                       |
 * |                                                                  |
 * | /'Your project directory'                                        |
 * |    /audio                                                        |
 * |    /data                                                         |
 * |    /icon                                                         |
 * |    /img                                                          |
 * |    /js                                                           |
 * | +  /lang                                                         |
 * | +     /en                                                        |
 * | +     /ja                                                        |
 * |    /movies                                                       |
 * |    /save                                                         |
 * |    /Game.rpgproject                                              |
 * |    /index.html                                                   |
 * |                                                                  |
 * | 2.1. Generate template language pack --------------------------- |
 * | Template language pack is that text scripts from your project.   |
 * | You can make that using by L10nMVEditor.js plugin.               |
 * | Just follow instruction of plugin then you can localize every    |
 * | text from your project.                                          |
 * |                                                                  |
 * | 2.2. Replace images, sounds ------------------------------------ |
 * | Replacing image and sound is easy to do.                         |
 * | Create the same folder in the language pack folder as the        |
 * | project's resource folder.                                       |
 * |                                                                  |
 * | For example, if you want to replace bgm, se, and some picture... |
 * |                                                                  |
 * |    /lang                  # English version has dubbed version!  |
 * |       /en                 # Oh, and also dubbed voicelines!      |
 * | +        /audio                                                  |
 * | +           /bgm                                                 |
 * | +              /EndingSong.ogg                                   |
 * | +           /se                                                  |
 * | +              /HeroAttackSound_1.ogg                            |
 * | +              /HeroDefeated_1.ogg                               |
 * | +              /HeroDefeated_2.ogg                               |
 * | +        /img           # I need replace some pictures!          |
 * | +           /pictures                                            |
 * | +              /StandingCG_HeroIdle.png                          |
 * |                                                                  |
 * | If you put a resource with the name of the resource you want to  |
 * | replace into this directory, L10nMV will take over that resource |
 * | in the directory instead of the original resource by state of    |
 * | current language.                                                |
 * |                                                                  |
 * | - When default language and current language is same :           |
 * |   L10nMV will take original resources.                           |
 * |     > img/pictures/myImage.png                                   |
 * |     > audio/me/victory.ogg                                       |
 * |                                                                  |
 * | - But if not same language :                                     |
 * |   (i.e. current language is 'ja', default language is 'en')      |
 * |   L10nMV will find alternative resources.                        |
 * |     > lang/ja/img/pictures/myImage.png                           |
 * |     > lang/ja/audio/me/victory.ogg                               |
 * |                                                                  |
 * | * Note that replacing audio is great for dubbed game scenario.   |
 * |                                                                  |
 * | 2.3. Apply to extra plugins ------------------------------------ |
 * |                                                                  |
 * | [ IMPORTANT ] If you want to use localization plugins feature    |
 * |               you must put this plugin at top of plugin list.    |
 * |                                                                  |
 * | Plugins that you want to localize them should be added to plugin |
 * | whitelist of this plugin's parameters.                           |
 * |                                                                  |
 * | L10nMV take replace values only whitelisted plugin.              |
 * |                                                                  |
 * | 3. Plugin options ---------------------------------------------- |
 * |                                                                  |
 * | Default language                                                 |
 * | > Default language you've written in your project.               |
 * | > Must be use ISO 639-1 code. (i.e. ko, en...)                   |
 * |                                                                  |
 * | Global language                                                  |
 * | > This is fallbacks if player uses not supported language.       |
 * | > Must be use ISO 639-1 code. (i.e. ko, en...)                   |
 * |                                                                  |
 * | Strict mode                                                      |
 * | > Basically, when L10nMV can't find same pair of language pack   |
 * | > file, then L10nMV uses default resources in your project.      |
 * | > If you use strict mode, L10nMV throws error instead using      |
 * | > default resources.                                             |
 * |                                                                  |
 * | Whitelisted plugins                                              |
 * | > L10nMV doesn't apply replacing every plugins parameters.       |
 * | > you must add whitelist plugin's name into here.                |
 * |                                                                  |
 * | 4. Third-party library/sources notice                            |
 * |                                                                  |
 * | deep-merge.js                                                    |
 * | > https://gist.github.com/ahtcx/0cd94e62691f539160b32ecda18af3d6 |
 * |                                                                  |
 * 
 * @param lang
 * @text Default language
 * @desc Read more information in help page's
 * 3. Plugin options section.
 * @default ko
 * 
 * @param global-lang
 * @text Global language
 * @desc Read more information in help page's
 * 3. Plugin options section.
 * @default en
 * 
 * @param strict
 * @text Strict mode
 * @type boolean
 * @desc Read more information in help page's
 * 3. Plugin options section.
 * @default false
 * 
 * @param whitelist-plugins
 * @text Whitelisted plugins
 * @type text[]
 * @desc Add plugins name you want to replace plugins parameters.
 */

function L10nMV() {
    throw new Error("This is a static class.");
}

L10nMV.VERSION     = "Development version";
L10nMV.COMMIT_HASH = "-";

if (L10nMV.COMMIT_HASH === "-")
    alert(
        "L10nMV.js notice :\n" + 
        "You have using development version of L10nMV.js.\n" +
        "This is may unstable, so strongly recommended to use release version of L10nMV.js."
    );

L10nMV.NAME_DATA_COMMON_EVENTS = "$dataCommonEvents";
L10nMV.NAME_DATA_MAP           = "$dataMap";

L10nMV.LANG_ROOT = "lang/";
L10nMV.PEEK_FILE = "/Info.json";

//Array
L10nMV.AvailableLanguages = null;

//String
L10nMV.ProjectLanguage = null;
L10nMV.LocalLanguage   = null;
L10nMV.GlobalLanguage  = null;
L10nMV.ChangedLanguage = null;

//Object
L10nMV.PluginStrings = null;

//Bool
L10nMV.IsProjectLanguage = false;
L10nMV.RequireRestart    = false;

L10nMV.Initialize = function(isReload) {
    
    DataManager.loadDatabase = L10nMV.LoadDatabase;
    DataManager.loadDataFile = L10nMV.LoadDataFile;
    
    var pluginOption = PluginManager.parameters("L10nMV");
    
    L10nMV.StrictMode         = pluginOption["strict"] === "true";
    L10nMV.ProjectLanguage    = pluginOption["lang"];
    L10nMV.GlobalLanguage     = pluginOption["global-lang"];
    
    try {
        
        L10nMV.WhitelistedPlugins = JSON.parse(pluginOption["whitelist-plugins"]);
        
    } catch (e) {
        
        L10nMV.WhitelistedPlugins = null;
    }
    
    if (!(L10nMV.ProjectLanguage in L10nMV.ISO639_1Names)) {
        
        throw new Error(
            "Cannot find specific default language code : "
            + L10nMV.ProjectLanguage
        );
    }
    
    if (!(L10nMV.GlobalLanguage in L10nMV.ISO639_1Names)) {
        
        throw new Error(
            "Cannot find specific global(fallback) language code : "
            + L10nMV.GlobalLanguage
        );
    }
    
    if (!isReload) {
        
        L10nMV.LoadAvailableLanguagePackList();
        ConfigManager.load();
    
        console.info(
            "          🌐 L10nMV.js\n" + 
            "         Version : " + this.VERSION + "\n" + 
            "     Commit hash : " + this.COMMIT_HASH + "\n" + 
            "Default language : " + L10nMV.GetIsoCodeWithName(this.ProjectLanguage) + "\n" + 
            "   User language : " + L10nMV.GetIsoCodeWithName(this.LocalLanguage) + "\n" + 
            " Global language : " + L10nMV.GetIsoCodeWithName(this.GlobalLanguage)
        );
    }
    
    if (!L10nMV.IsProjectLanguage) {
        
        if (L10nMV.CheckPluginFeature())
            L10nMV.InitializePluginLocalization();
    }
};

L10nMV.CheckPluginFeature = function() {
    
    if (!L10nMV.WhitelistedPlugins || L10nMV.WhitelistedPlugins.length === 0)
        return false;
    
    var firstPluginDescription = $plugins[0].description;
    var hashLocation = firstPluginDescription.indexOf("Commit hash : ");
    
    var pluginFeatureDisabledMessage =
        "⚠ L10nMV : Plugin localization feature disabled.\n" + 
        "             If you want to use this feature,\n" +
        "             please set this plugin to be first item in the plugins list\n" +
        "             and add plugins to whitelist you want to localize them.";
    
    if (hashLocation === -1) {
        
        console.warn(pluginFeatureDisabledMessage);
        return false;
    }
    
    hashLocation += 14; //'Commit hash : ' length
    
    var descriptionHash   = firstPluginDescription.substring(hashLocation);
    
    var match = L10nMV.COMMIT_HASH === descriptionHash;
    
    if (!match) {
        
        console.warn(pluginFeatureDisabledMessage);
        console.warn(
            "⚠ L10nMV : This was occured because version hash is incorrect.\n" +
            "             So L10nMV disabled plugin feature-\n" +
            "             because not sure about this plugin is executed at first.\n" +
            "\n" +
            "                 Detected hash value : " + descriptionHash + "\n" +
            "                 Plugin hash value   : " + L10nMV.COMMIT_HASH + "\n" +
            "\n" +
            "             If you had new L10nMV version, make sure\n" +
            "             you have tried 'Update guide' in plugin description."
        );
    }
            
    return match;
};

L10nMV.GetIsoCodeWithName = function(code) {
    
    return code + " (" + L10nMV.ISO639_1Names[code] + ")";
};

L10nMV.LoadDatabase = function() {
    
    var testMode = DataManager.isBattleTest() || DataManager.isEventTest();
    var prefix = testMode ? "Test_" : "";
    var isDefault = L10nMV.IsProjectLanguage;
    
    var name, src;
    
    if (!testMode) {
        
        for (var i = 0; i < DataManager._databaseFiles.length; i++) {
            
            name = DataManager._databaseFiles[i].name;
            src  = DataManager._databaseFiles[i].src;
            L10nMV.LoadDataFile(name, prefix + src, isDefault);
        }
        
    } else {
        
        for (var i = 0; i < DataManager._databaseFiles.length; i++) {
            
            name = DataManager._databaseFiles[i].name;
            src  = DataManager._databaseFiles[i].src;
            L10nMV.LoadDataFile(name, prefix + src);
        }
        
        if (DataManager.isEventTest())
            L10nMV.LoadDataFile('$testEvent', prefix + 'Event.json');
        
        console.warn("⚠ L10nMV : Disabled cause test mode.");
    }
};

L10nMV.LoadDataFile = function(name, src, isDefault) {
    
    isDefault = isDefault || false;
    
    var xhr = new XMLHttpRequest();
    var url = 'data/' + src;
    
    xhr.open('GET', url);
    xhr.overrideMimeType('application/json');
    
    xhr.onload = function() {
        
        if (xhr.status < 400) {
            
            window[name] = JSON.parse(xhr.responseText);
            DataManager.onLoad(window[name]);
            
            if (!isDefault)
                L10nMV.LoadL10nDataFile(name, src);
        }
    };
    
    xhr.onerror = DataManager._mapLoader || function() {
        DataManager._errorUrl = DataManager._errorUrl || url;
    };
    
    window[name] = null;
    xhr.send();
};

L10nMV.LoadL10nDataFile = function(name, src) {
    
    var xhr = new XMLHttpRequest();
    var url = L10nMV.LANG_ROOT + L10nMV.LocalLanguage + '/' + src;
    xhr.open('GET', url);
    xhr.overrideMimeType('application/json');
    
    xhr.onload = function() {
        
        if (xhr.status < 400) {
            
            try {
                
                var parsedData = JSON.parse(xhr.responseText);
                
                switch (name) {
                    
                    default:
                        
                        L10nMV.FilterStringsFromObject(parsedData);
                        window[name] = merge(window[name], parsedData);
                        break;
                        
                    case L10nMV.NAME_DATA_COMMON_EVENTS:
                        
                        L10nMV.MergeCommonEventsData(parsedData);
                        break;
                    
                    case L10nMV.NAME_DATA_MAP:
                        
                        L10nMV.MergeMapEventsData(parsedData);
                        break;
                }
                
                
                DataManager.onLoad(window[name]);
                
            } catch (e) {
                
                L10nMV.ThrowException("Failed to parse data '" + src + "'.");
            }
        }
    };
    
    xhr.onerror = L10nMV.LoadFailedL10nDataFile;
    
    xhr.send();
};

L10nMV.LoadFailedL10nDataFile = function(e) {
    
    L10nMV.ThrowException("Failed to load language pack file.");
};

L10nMV.FilterStringsFromObject = function(object) {
    
    var type;
    for (var key in object) {
        
        type = typeof object[key];
        switch (type) {
            
            default:
                
                delete object[key];
                break;
                
            case "object":
                
                L10nMV.FilterStringsFromObject(object[key]);
                break;
                
            case "string":
                continue;
        }
    }
};

L10nMV.ThrowException = function(message) {
    
    if (L10nMV.StrictMode)
        throw new Error("⚠ L10nMV : " + message);
    
    console.warn("⚠ L10nMV : " + message);
};

L10nMV.MergeCommonEventsData = function(strings) {
    
    if (!strings || strings.length === 0) {
        
        L10nMV.ThrowException("Common events string data is empty.");
        return;
    }
    
    var dataCommonEvents = window[L10nMV.NAME_DATA_COMMON_EVENTS];
    
    var pairData;
    var pairStrings;
    var pairDataIndex;
    var pairDataEvents;
    
    for (var keyIndex in strings) {
        
        pairStrings = strings[keyIndex];
        
        if (!(keyIndex in dataCommonEvents)) {
            
            L10nMV.ThrowException("Event strings exists but target common event is not exist. (number " + keyIndex + ")");
            continue;
        }
        
        pairData = dataCommonEvents[keyIndex];
        
        pairDataEvents = pairData.list;
        if (!pairDataEvents || pairDataEvents.length === 0) {
            
            L10nMV.ThrowException("Event strings exists but target common event is empty. (number " + keyIndex + ")");
            continue;
        }
        
        pairDataIndex = 0;
        
        for (var index = 0; index < pairStrings.length; index++) {
            
            //Seeking next match event for replacing strings.
            
            if (pairDataIndex >= pairDataEvents.length &&
                index < pairStrings.length) {
                
                L10nMV.ThrowException("Event and strings pair count are not match. (number " + keyIndex + ")");
                
                break;
            }
            
            switch (L10nMV.ApplyToEventList(pairStrings, pairDataEvents)) {
                
                default:
                case L10nMV.ApplyStatus.OK: break;
                
                case L10nMV.ApplyStatus.CountNotMatch:
                    
                    L10nMV.ThrowException("Common event's events and strings count not match. (number " + keyIndex + ")");
                    break;
                
                case L10nMV.ApplyStatus.EventsNotValid:
                    
                    L10nMV.ThrowException("Common event is not valid. (number " + keyIndex + ")");
                    break;
                
                case L10nMV.ApplyStatus.StringsNotValid:
                    
                    L10nMV.ThrowException("Common events strings not valid. (number " + keyIndex + ")");
                    break;
            }
        }
    };
    
    window[L10nMV.NAME_DATA_COMMON_EVENTS] = dataCommonEvents;
    
};

L10nMV.MergeMapEventsData = function(strings) {
    
    var dataMap = window[L10nMV.NAME_DATA_MAP];
    var dataMapEvents = dataMap.events;
    
    if (!dataMapEvents || dataMapEvents.length === 0) {
        
        L10nMV.ThrowException("Event strings exists but current map events is not exist.");
        return;
    }
    
    var eventData;
    var eventPageStrings;
    var eventDataPages;
    
    var pageData;
    var pageStrings;
    var pageEvents;
    
    for (var keyIndex in strings) {
        
        eventPageStrings = strings[keyIndex];
        
        if (!(keyIndex in dataMapEvents)) {
            
            L10nMV.ThrowException("Event strings exists but current map event is not exist. (event number " + keyIndex + ")");
            continue;
        }
        
        eventData      = dataMapEvents[keyIndex];
        eventDataPages = eventData.pages;
        
        if (!eventDataPages || eventDataPages.length === 0) {
            
            L10nMV.ThrowException("Event strings exists but current map event is empty. (event number " + keyIndex + ")");
            continue;
        }
        
        for (var eventPageStringIndex in eventPageStrings) {
                
            if (!(eventPageStringIndex in eventDataPages)) {
                
                L10nMV.ThrowException("Event strings exists but target event's page is not exist. (event number " + keyIndex + ", page " + eventPageStringIndex + ")");
                continue;
            }
            
            pageData   = eventDataPages[eventPageStringIndex];
            pageEvents = pageData.list;
            
            if (!pageEvents || pageEvents.length === 0) {
                
                L10nMV.ThrowException("Event page strings exists but target event's page is empty. (event number " + keyIndex + ", page " + eventPageStringIndex + ")");
            }
            
            pageStrings = eventPageStrings[eventPageStringIndex];
            switch (L10nMV.ApplyToEventList(pageStrings, pageEvents)) {
                
                default:
                case L10nMV.ApplyStatus.OK: break;
                
                case L10nMV.ApplyStatus.CountNotMatch:
                    
                    L10nMV.ThrowException("Event page events and strings count not match. (event number " + keyIndex + ", page " + eventPageStringIndex + ")");
                    break;
                
                case L10nMV.ApplyStatus.EventsNotValid:
                    
                    L10nMV.ThrowException("Events not valid. (event number " + keyIndex + ", page " + eventPageStringIndex + ")");
                    break;
                
                case L10nMV.ApplyStatus.StringsNotValid:
                    
                    L10nMV.ThrowException("Strings not valid. (event number " + keyIndex + ", page " + eventPageStringIndex + ")");
                    break;
            }
        }
    };
    
    window[L10nMV.NAME_DATA_MAP] = dataMap;
};

L10nMV.ApplyStatus = {
    OK:              0,
    StringsNotValid: 1,
    EventsNotValid:  2,
    CountNotMatch:   3
};

L10nMV.ApplyToEventList = function(strings, eventList) {
    
    if (!strings ||!Array.isArray(strings) || strings.length === 0)
        return L10nMV.ApplyStatus.StringsNotValid;
    
    if (!eventList || !Array.isArray(eventList) || eventList.length === 0)
        return L10nMV.ApplyStatus.EventsNotValid;
    
    var stringIndex = 0;
    var choices;
    var choicesIndex = -1;
    
    for (var event of eventList) {
        
        switch (event.code) {
            
            default: continue;
            
            case L10nMV.EventCode.Dialog:
                
                event.parameters[0] = strings[stringIndex];
                break;
            
            case L10nMV.EventCode.Choice:
                
                choices = strings[stringIndex];
                event.parameters[0] = choices.clone();
                
                choicesIndex = 0;
                
                break;
            
            case L10nMV.EventCode.ChoiceWhen:
                
                if (choicesIndex === -1)
                    continue;
                
                if (choicesIndex < choices.length) {
                    
                    event.parameters[1] = choices[choicesIndex];
                    
                    choicesIndex++;
                    
                    if (choicesIndex === choices.length) {
                        
                        choices = null;
                        choicesIndex = -1;
                    }
                }
                
                continue;
        }
        
        stringIndex++;
        
        if (stringIndex > strings.length)
            return L10nMV.ApplyStatus.CountNotMatch;
    }
    
    if (stringIndex < strings.length)
        return L10nMV.ApplyStatus.CountNotMatch;
    
    return L10nMV.ApplyStatus.OK;
};

L10nMV.IsStringEvent = function(event) {
    
    return event.code in L10nMV.CodeEvent;
};

// Handle settings ====================================

L10nMV.LoadAvailableLanguagePackList = function() {
    
    L10nMV.AvailableLanguages = [ L10nMV.ProjectLanguage ];
    for (var lang in L10nMV.ISO639_1Names) {
        
        if (lang === L10nMV.ProjectLanguage)
            continue;
        
        if (L10nMV.AssetExists(L10nMV.LANG_ROOT + lang + L10nMV.PEEK_FILE))
            L10nMV.AvailableLanguages.push(lang);
    }
};

L10nMV.GetDeviceLanguage = function() {
    
    var language = navigator.language || navigator.userLanguage;
    
    var fullCodeIndecator = language.indexOf('-');
    
    if (fullCodeIndecator !== -1)
        language = language.substring(0, fullCodeIndecator);
    
    return language;
};

L10nMV.ConfigManager_applyData = ConfigManager.applyData;
ConfigManager.applyData = function(config) {
    
    L10nMV.ConfigManager_applyData.call(this, config);
    
    var l10nMV = config.L10nMV;
    
    if (l10nMV) {
        
        L10nMV.LocalLanguage = l10nMV.LocalLanguage;
    
        if (!(L10nMV.LocalLanguage in L10nMV.ISO639_1Names))
            L10nMV.LocalLanguage = L10nMV.GlobalLanguage;
        
        L10nMV.IsProjectLanguage = L10nMV.LocalLanguage === L10nMV.ProjectLanguage;
    }
};

L10nMV.ConfigManager_makeData = ConfigManager.makeData;
ConfigManager.makeData = function() {
    
    var config = L10nMV.ConfigManager_makeData.call(this);
    config.L10nMV = L10nMV.GetCurrentConfigurableData();
    
    return config;
};

L10nMV.Scene_Title_fadeSpeed = Scene_Title.prototype.fadeSpeed;
Scene_Title.prototype.fadeSpeed = function() {
    return L10nMV.RequireRestart ? 0.01 : L10nMV.Scene_Title_fadeSpeed.call(this);
};

L10nMV.Scene_Title_createCommandWindow = Scene_Title.prototype.createCommandWindow;
Scene_Title.prototype.createCommandWindow = function() {
    
    if (L10nMV.RequireRestart) {
        
        this._commandWindow = new Window_TitleCommand();
        
        this._requireRestartMessage = new Window_Message();
        this.addWindow(this._requireRestartMessage);
        this._requireRestartMessage.subWindows().forEach(function(window) {
            this.addWindow(window);
        }, this);
        
        var message = L10nMV.GetRestartMessage(L10nMV.ChangedLanguage);
        var width = this._requireRestartMessage.contents.measureTextWidth(message);
        
        if (width > this._requireRestartMessage.width) {
            
            var split = (message.length / 3) * 2;
            split = message.indexOf(' ', split);
            
            if (split === -1) {
                
                split = message.lastIndexOf(' ');
                
                //last fallback
                if (split === -1)
                    split = (message.length / 3) * 2;
            }
            
            var firstLine  = message.substring(0, split) + '-';
            var secondLine = message.substring(split + 1);
            
            $gameMessage.add(firstLine);
            $gameMessage.add(secondLine);
        }
        else
            $gameMessage.add(message);
        
        $gameMessage.setBackground(1);
        $gameMessage.setPositionType(1);
        
        $gameMessage.setChoices(['OK'], 0, 0);
        $gameMessage.setChoiceBackground(1);
        $gameMessage.setChoicePositionType(1);
        
        var scene = this;
        $gameMessage.setChoiceCallback(function() { L10nMV.RestartGame(scene); });
    }
    else
        L10nMV.Scene_Title_createCommandWindow.call(this);
};

L10nMV.RestartGame = function(sender) {
    
    if (!sender) return;
    
    L10nMV.RequireRestart = false;
    sender.fadeOutAll();
    setTimeout(function() { window.location.reload(); }, 1000);
};

//L10nMV.SceneBase_terminate = Scene_Base.prototype.terminate;
Scene_Base.prototype.terminate = function() {
    
    L10nMV.LastScene = this.constructor;
    //L10nMV.SceneBase_terminate.call(this);
};

L10nMV.Scene_Options_terminate = Scene_Options.prototype.terminate;
Scene_Options.prototype.terminate = function() {
    
    L10nMV.Scene_Options_terminate.call(this);
    
    if (L10nMV.LocalLanguage !== L10nMV.ChangedLanguage)
        L10nMV.RequireRestart = true;
};

L10nMV.SceneBase_terminate = Scene_Base.prototype.terminate;
Scene_Base.prototype.terminate = function() {
    
    L10nMV.LastScene = this.constructor;
    L10nMV.SceneBase_terminate.call(this);
};

L10nMV.GetCurrentConfigurableData = function() {
    
    var localLanguage = L10nMV.ChangedLanguage || L10nMV.GetDeviceLanguage();
    
    if (!L10nMV.AvailableLanguages.contains(localLanguage))
        localLanguage = L10nMV.GlobalLanguage;
    
    return {
        LocalLanguage: localLanguage
    };
};

L10nMV.Window_Options_makeCommandList = Window_Options.prototype.makeCommandList;
Window_Options.prototype.makeCommandList = function() {
    
    L10nMV.Window_Options_makeCommandList.call(this);
    
    L10nMV.ChangedLanguage = L10nMV.LocalLanguage;
    
    this.addCommand(
        L10nMV.GetOptionText(L10nMV.ChangedLanguage),
        'L10nMV.LocalLanguage',
        L10nMV.LastScene === Scene_Title
    );
};

L10nMV.Window_Options_processOk = Window_Options.prototype.processOk;
Window_Options.prototype.processOk = function() {
    
    var index = this.index();
    var symbol = this.commandSymbol(index);
    
    if (!this.isCommandEnabled(index)) {
        
        SoundManager.playBuzzer();
        return;
    }
    
    if (!symbol.startsWith("L10nMV.")) {
        
        L10nMV.Window_Options_processOk.call(this);
        return;
    }
    
    switch (symbol) {
        
        default:
            SoundManager.playBuzzer();
            break;    
        
        case "L10nMV.LocalLanguage":
            L10nMV.ChangeToNextLanguage();
            this._list[index].name = L10nMV.GetOptionText(L10nMV.ChangedLanguage);
            this.redrawItem(index);
            break;
    }
};

L10nMV.Window_Options_cursorRight = Window_Options.prototype.cursorRight;
Window_Options.prototype.cursorRight = function(wrap) {
    
    var index = this.index();
    var symbol = this.commandSymbol(index);
    
    if (!this.isCommandEnabled(index)) {
        
        SoundManager.playBuzzer();
        return;
    }
    
    if (!symbol.startsWith("L10nMV.")) {
        
        L10nMV.Window_Options_cursorRight.call(this);
        return;
    }
    
    switch (symbol) {
        
        default:
            SoundManager.playBuzzer();
            break;    
        
        case "L10nMV.LocalLanguage":
            L10nMV.ChangeToNextLanguage();
            this._list[index].name = L10nMV.GetOptionText(L10nMV.ChangedLanguage);
            this.redrawItem(index);
            break;
    }
};

L10nMV.Window_Options_cursorLeft = Window_Options.prototype.cursorLeft;
Window_Options.prototype.cursorLeft = function(wrap) {
    
    var index = this.index();
    var symbol = this.commandSymbol(index);
    
    if (!this.isCommandEnabled(index)) {
        
        SoundManager.playBuzzer();
        return;
    }
    
    if (!symbol.startsWith("L10nMV.")) {
        
        L10nMV.Window_Options_cursorLeft.call(this);
        return;
    }
    
    switch (symbol) {
        
        default:
            SoundManager.playBuzzer();
            break;    
        
        case "L10nMV.LocalLanguage":
            L10nMV.ChangeToPreviousLanguage();
            this._list[index].name = L10nMV.GetOptionText(L10nMV.ChangedLanguage);
            this.redrawItem(index);
            break;
    }
};

L10nMV.Window_Options_statusText = Window_Options.prototype.statusText;
Window_Options.prototype.statusText = function(index) {
    
    var symbol = this.commandSymbol(index);
    
    if (!symbol.startsWith("L10nMV.")) {
        
        return L10nMV.Window_Options_statusText.call(this, index);
    }
    
    switch (symbol) {
        
        default:
            SoundManager.playBuzzer();
            break;    
        
        case "L10nMV.LocalLanguage":
            return L10nMV.ISO639_1Names[L10nMV.ChangedLanguage];
    }
};

L10nMV.ChangeToNextLanguage = function() {
    
    var index = L10nMV.AvailableLanguages.indexOf(L10nMV.ChangedLanguage);
    index++;
    
    if (index >= L10nMV.AvailableLanguages.length)
        index = 0;
    
    L10nMV.ChangeLanguage(L10nMV.AvailableLanguages[index]);
    SoundManager.playCursor();
};

L10nMV.ChangeToPreviousLanguage = function() {
    
    var index = L10nMV.AvailableLanguages.indexOf(L10nMV.ChangedLanguage);
    index--;
    
    if (index < 0)
        index = L10nMV.AvailableLanguages.length - 1;
    
    L10nMV.ChangeLanguage(L10nMV.AvailableLanguages[index]);
    SoundManager.playCursor();
};

L10nMV.ChangeLanguage = function(language) {
    
    if (!(language in L10nMV.ISO639_1Names))
        language = L10nMV.GlobalLanguage;
    
    L10nMV.ChangedLanguage = language;
    
    L10nMV.IsProjectLanguage = L10nMV.ChangedLanguage === L10nMV.ProjectLanguage;
};

// Handle resource files ==============================

L10nMV.CachedExists = {};
L10nMV.Peeker = new XMLHttpRequest();
L10nMV.AssetExists = function(url) {
    
    if (url in L10nMV.CachedExists)
        return L10nMV.CachedExists[url];
    
    L10nMV.Peeker.open("GET", url, false);
    L10nMV.Peeker.setRequestHeader("Range", "bytes=0-0");
    
    try {
        
        L10nMV.Peeker.send();
        L10nMV.CachedExists[url] = L10nMV.Peeker.readyState === XMLHttpRequest.DONE;
        return L10nMV.CachedExists[url];
        
    } catch (ex) {
        
        L10nMV.CachedExists[url] = false;
        return false;
    }
};

L10nMV.GetSelectLocalAssetPath = function(path) {
            
    var position = path.lastIndexOf('/');
    var l10nPath = L10nMV.LANG_ROOT + L10nMV.LocalLanguage + '/'
                 + path.substring(0, position + 1)
                 + path.substring(position + 1);
    
    if (L10nMV.AssetExists(l10nPath))
        return l10nPath;
    
    return path;
};

L10nMV.WebAudio_Load = WebAudio.prototype._load;
WebAudio.prototype._load = function(url) {
    
    if (WebAudio._context) {
        var xhr = new XMLHttpRequest();
        
        if(Decrypter.hasEncryptedAudio)
            url = Decrypter.extToEncryptExt(url);
        
        if (!L10nMV.IsProjectLanguage)
            url = L10nMV.GetSelectLocalAssetPath(url);
        
        xhr.open('GET', url);
        xhr.responseType = 'arraybuffer';
        xhr.onload = function() {
            if (xhr.status < 400) {
                this._onXhrLoad(xhr);
            }
        }.bind(this);
        xhr.onerror = this._loader || function(){this._hasError = true;}.bind(this);
        xhr.send();
    }
};

L10nMV.Decrypter_DecryptImg = Decrypter.decryptImg;
Decrypter.decryptImg = function(url, bitmap) {
    
    url = this.extToEncryptExt(url);
        
    if (!L10nMV.IsProjectLanguage)
        url = L10nMV.GetSelectLocalAssetPath(url);

    var requestFile = new XMLHttpRequest();
    requestFile.open("GET", url);
    requestFile.responseType = "arraybuffer";
    requestFile.send();

    requestFile.onload = function () {
        if(this.status < Decrypter._xhrOk) {
            var arrayBuffer = Decrypter.decryptArrayBuffer(requestFile.response);
            bitmap._image.src = Decrypter.createBlobUrl(arrayBuffer);
            bitmap._image.addEventListener('load', bitmap._loadListener = Bitmap.prototype._onLoad.bind(bitmap));
            bitmap._image.addEventListener('error', bitmap._errorListener = bitmap._loader || Bitmap.prototype._onError.bind(bitmap));
        }
    };

    requestFile.onerror = function () {
        if (bitmap._loader) {
            bitmap._loader();
        } else {
            bitmap._onError();
        }
    };
};

L10nMV.Bitmap_RequestImage = Bitmap.prototype._requestImage;
Bitmap.prototype._requestImage = function(url){
    if(Bitmap._reuseImages.length !== 0){
        this._image = Bitmap._reuseImages.pop();
    }else{
        this._image = new Image();
    }

    if (this._decodeAfterRequest && !this._loader) {
        this._loader = ResourceHandler.createLoader(url, this._requestImage.bind(this, url), this._onError.bind(this));
    }

    this._image = new Image();
    
    if (!L10nMV.IsProjectLanguage)
        url = L10nMV.GetSelectLocalAssetPath(url);
    
    this._url = url;
    this._loadingState = 'requesting';

    if(!Decrypter.checkImgIgnore(url) && Decrypter.hasEncryptedImages) {
        this._loadingState = 'decrypting';
        Decrypter.decryptImg(url, this);
    } else {
        this._image.src = url;

        this._image.addEventListener('load', this._loadListener = Bitmap.prototype._onLoad.bind(this));
        this._image.addEventListener('error', this._errorListener = this._loader || Bitmap.prototype._onError.bind(this));
    }
};

L10nMV.ImageManager_LoadBitmap = ImageManager.loadBitmap;
ImageManager.loadBitmap = function(folder, filename, hue, smooth) {
    if (filename) {
        var path = folder + encodeURIComponent(filename) + '.png';
    
        if (!L10nMV.IsProjectLanguage)
            path = L10nMV.GetSelectLocalAssetPath(path);
        
        var bitmap = this.loadNormalBitmap(path, hue || 0);
        bitmap.smooth = smooth;
        return bitmap;
    } else {
        return this.loadEmptyBitmap();
    }
};

L10nMV.ImageManager_ReserveNormalBitmap = ImageManager.reserveNormalBitmap;
ImageManager.reserveNormalBitmap = function(path, hue, reservationId){
    
    if (!L10nMV.IsProjectLanguage)
        path = L10nMV.GetSelectLocalAssetPath(path);
    
    var bitmap = this.loadNormalBitmap(path, hue);
    this._imageCache.reserve(this._generateCacheKey(path, hue), bitmap, reservationId);

    return bitmap;
};

// Handle plugin strings ==============================

L10nMV.InitializePluginLocalization = function() {
    
    var plugins;
    
    var xhr = new XMLHttpRequest();
    var url = L10nMV.LANG_ROOT + L10nMV.LocalLanguage + '/Plugins.json';
    xhr.open('GET', url, false);
    xhr.overrideMimeType('application/json');
    
    xhr.onerror = L10nMV.LoadFailedL10nDataFile;
    
    try {
        
        xhr.send();
    
        if (xhr.status < 400) {
        
            plugins = JSON.parse(xhr.responseText);
        
        } else {
            
            L10nMV.ThrowException("Failed to parse plugins file.");
        }
        
    } catch (e) {
            
        L10nMV.ThrowException("Failed to load plugins data.");
    }
    
    if (!plugins || Object.keys(plugins).length === 0)
        L10nMV.ThrowException("Plugin data is empty.");
    
    L10nMV.PluginStrings = plugins;
    
    $plugins.forEach(function(plugin) {
        
        if (plugin.status)
            this.setParameters(plugin.name, plugin.parameters);
        
    }, PluginManager);
};

L10nMV.PluginManager_SetParameters = PluginManager.setParameters;
PluginManager.setParameters = function(name, parameters) {
    
    if (L10nMV.PluginStrings && name in L10nMV.PluginStrings) {
        
        var strings = L10nMV.PluginStrings[name];
        for (var key in parameters) {
            
            if (key in strings && strings[key]) {
                
                parameters[key] = strings[key];
                
                if (typeof parameters[key] === 'object')
                    parameters[key] = L10nMV.JSONstringifyRecursively(parameters[key]);
            }
        }
    }
    
    L10nMV.PluginManager_SetParameters.call(this, name, parameters);
};

L10nMV.JSONstringifyRecursively = function(object) {
    
    if (typeof object !== 'object')
        return JSON.stringify(object);
    
    for (var key in object) {
        
        if (typeof object[key] === 'object')
            object[key] = L10nMV.JSONstringifyRecursively(object[key]);
    }
    
    return JSON.stringify(object);
};

L10nMV.EventCode = {
    "Dialog": 401,
    "Choice": 102,
    "ChoiceWhen": 402,
};

L10nMV.CodeEvent = {
    401: "Dialog",
    102: "Choice",
    402: "ChoiceWhen"
};

L10nMV.ISO639_1Names = {
    "ab": "аҧсуа бызшәа, аҧсшәа",
    "aa": "Afaraf",
    "af": "Afrikaans",
    "ak": "Akan",
    "sq": "Shqip",
    "am": "አማርኛ",
    "ar": "العربية",
    "an": "aragonés",
    "hy": "Հայերեն",
    "as": "অসমীয়া",
    "av": "авар мацӀ, магӀарул мацӀ",
    "ae": "avesta",
    "ay": "aymar aru",
    "az": "azərbaycan dili",
    "bm": "bamanankan",
    "ba": "башҡорт теле",
    "eu": "euskara, euskera",
    "be": "беларуская мова",
    "bn": "বাংলা",
    "bh": "भोजपुरी",
    "bi": "Bislama",
    "bs": "bosanski jezik",
    "br": "brezhoneg",
    "bg": "български език",
    "my": "ဗမာစာ",
    "ca": "català, valencià",
    "ch": "Chamoru",
    "ce": "нохчийн мотт",
    "ny": "chiCheŵa, chinyanja",
    "zh": "中文 (Zhōngwén), 汉语, 漢語",
    "cv": "чӑваш чӗлхи",
    "kw": "Kernewek",
    "co": "corsu, lingua corsa",
    "cr": "ᓀᐦᐃᔭᐍᐏᐣ",
    "hr": "hrvatski jezik",
    "cs": "čeština, český jazyk",
    "da": "dansk",
    "dv": "ދިވެހި",
    "nl": "Nederlands, Vlaams",
    "dz": "རྫོང་ཁ",
    "en": "English",
    "eo": "Esperanto",
    "et": "eesti, eesti keel",
    "ee": "Eʋegbe",
    "fo": "føroyskt",
    "fj": "vosa Vakaviti",
    "fi": "suomi, suomen kieli",
    "fr": "français, langue française",
    "ff": "Fulfulde, Pulaar, Pular",
    "gl": "Galego",
    "ka": "ქართული",
    "de": "Deutsch",
    "el": "ελληνικά",
    "gn": "Avañe'ẽ",
    "gu": "ગુજરાતી",
    "ht": "Kreyòl ayisyen",
    "ha": "(Hausa) هَوُسَ",
    "he": "עברית",
    "hz": "Otjiherero",
    "hi": "हिन्दी, हिंदी",
    "ho": "Hiri Motu",
    "hu": "magyar",
    "ia": "Interlingua",
    "id": "Bahasa Indonesia",
    "ie": "Interlingue",
    "ga": "Gaeilge",
    "ig": "Asụsụ Igbo",
    "ik": "Iñupiaq, Iñupiatun",
    "io": "Ido",
    "is": "Íslenska",
    "it": "Italiano",
    "iu": "ᐃᓄᒃᑎᑐᑦ",
    "ja": "日本語",
    "jv": "ꦧꦱꦗꦮ, Basa Jawa",
    "kl": "kalaallisut, kalaallit oqaasii",
    "kn": "ಕನ್ನಡ",
    "kr": "Kanuri",
    "ks": "कश्मीरी, كشميري‎",
    "kk": "қазақ тілі",
    "km": "ខ្មែរ, ខេមរភាសា, ភាសាខ្មែរ",
    "ki": "Gĩkũyũ",
    "rw": "Ikinyarwanda",
    "ky": "Кыргызча, Кыргыз тили",
    "kv": "коми кыв",
    "kg": "Kikongo",
    "ko": "한국어",
    "ku": "Kurdî, کوردی‎",
    "kj": "Kuanyama",
    "la": "latine, lingua latina",
    "lb": "Lëtzebuergesch",
    "lg": "Luganda",
    "li": "Limburgs",
    "ln": "Lingála",
    "lo": "ພາສາລາວ",
    "lt": "lietuvių kalba",
    "lu": "Kiluba",
    "lv": "latviešu valoda",
    "gv": "Gaelg, Gailck",
    "mk": "македонски јазик",
    "mg": "fiteny malagasy",
    "ms": "Bahasa Melayu, بهاس ملايو‎",
    "ml": "മലയാളം",
    "mt": "Malti",
    "mi": "te reo Māori",
    "mr": "मराठी",
    "mh": "Kajin M̧ajeļ",
    "mn": "Монгол хэл",
    "na": "Dorerin Naoero",
    "nv": "Diné bizaad",
    "nd": "isiNdebele",
    "ne": "नेपाली",
    "ng": "Owambo",
    "nb": "Norsk Bokmål",
    "nn": "Norsk Nynorsk",
    "no": "Norsk",
    "ii": "ꆈꌠ꒿ Nuosuhxop",
    "nr": "isiNdebele",
    "oc": "occitan, lenga d'òc",
    "oj": "ᐊᓂᔑᓈᐯᒧᐎᓐ",
    "cu": "ѩзыкъ словѣньскъ",
    "om": "Afaan Oromoo",
    "or": "ଓଡ଼ିଆ",
    "os": "ирон æвзаг",
    "pa": "ਪੰਜਾਬੀ, پنجابی‎",
    "pi": "पालि, पाळि",
    "fa": "فارسی",
    "pl": "język polski, polszczyzna",
    "ps": "پښتو",
    "pt": "Português",
    "qu": "Runa Simi, Kichwa",
    "rm": "Rumantsch Grischun",
    "rn": "Ikirundi",
    "ro": "Română",
    "ru": "русский",
    "sa": "संस्कृतम्",
    "sc": "sardu",
    "sd": "सिन्धी, سنڌي، سندھی‎",
    "se": "Davvisámegiella",
    "sm": "gagana fa'a Samoa",
    "sg": "yângâ tî sängö",
    "sr": "српски језик",
    "gd": "Gàidhlig",
    "sn": "chiShona",
    "si": "සිංහල",
    "sk": "Slovenčina, Slovenský Jazyk",
    "sl": "Slovenski Jezik, Slovenščina",
    "so": "Soomaaliga, af Soomaali",
    "st": "Sesotho",
    "es": "Español",
    "su": "Basa Sunda",
    "sw": "Kiswahili",
    "ss": "SiSwati",
    "sv": "Svenska",
    "ta": "தமிழ்",
    "te": "తెలుగు",
    "tg": "тоҷикӣ, toçikī, تاجیکی‎",
    "th": "ไทย",
    "ti": "ትግርኛ",
    "bo": "བོད་ཡིག",
    "tk": "Türkmen, Түркмен",
    "tl": "Wikang Tagalog",
    "tn": "Setswana",
    "to": "Faka Tonga",
    "tr": "Türkçe",
    "ts": "Xitsonga",
    "tt": "татар теле, tatar tele",
    "tw": "Twi",
    "ty": "Reo Tahiti",
    "ug": "ئۇيغۇرچە‎, Uyghurche",
    "uk": "Українська",
    "ur": "اردو",
    "uz": "Oʻzbek, Ўзбек, أۇزبېك‎",
    "ve": "Tshivenḓa",
    "vi": "Tiếng Việt",
    "vo": "Volapük",
    "wa": "Walon",
    "cy": "Cymraeg",
    "wo": "Wollof",
    "fy": "Frysk",
    "xh": "isiXhosa",
    "yi": "ייִדיש",
    "yo": "Yorùbá",
    "za": "Saɯ cueŋƅ, Saw cuengh",
    "zu": "isiZulu"
};

L10nMV.GetOptionText = function(isoCode) {
    
    if (isoCode in L10nMV.ISO639_1OptionTexts)
        return L10nMV.ISO639_1OptionTexts[isoCode];
    
    return L10nMV.ISO639_1OptionTexts['en'];
};

L10nMV.ISO639_1OptionTexts = {
    "af": "Taal",
    "sq": "Gjuhë",
    "am": "ቋንቋ",
    "ar": "لغة",
    "hy": "Լեզու",
    "az": "Dil",
    "eu": "Hizkuntza",
    "be": "Мова",
    "bn": "ভাষা",
    "bs": "Jezik",
    "bg": "Език",
    "my": "ဘာသာစကား",
    "ca": "Idioma",
    "ny": "Language",
    "zh": "语言",
    "co": "Lingua",
    "hr": "Jezik",
    "cs": "Jazyk",
    "da": "Sprog",
    "nl": "Taal",
    "en": "Language",
    "eo": "Lingvo",
    "et": "Keel",
    "fi": "Kieli",
    "fr": "Langue",
    "gl": "Idioma",
    "ka": "Ენა",
    "de": "Sprache",
    "el": "Γλώσσα",
    "gu": "ભાષાની",
    "ht": "Lang",
    "ha": "Harshe",
    "he": "שפה",
    "hi": "भाषा",
    "hu": "Nyelv",
    "id": "Bahasa",
    "ga": "Teanga",
    "ig": "Language",
    "is": "Tungumál",
    "it": "Lingua",
    "ja": "言語",
    "jv": "Language",
    "kn": "ಭಾಷಾ",
    "kk": "Тіл",
    "km": "ភាសា",
    "rw": "Ururimi",
    "ky": "Тил",
    "ko": "언어",
    "ku": "Ziman",
    "la": "Lingua",
    "lb": "Sprooch",
    "lo": "ພາສາ",
    "lt": "Kalba",
    "lv": "Valoda",
    "mk": "Јазик",
    "mg": "Fiteny",
    "ms": "Bahasa",
    "ml": "ഭാഷ",
    "mt": "Lingwa",
    "mi": "Reo",
    "mr": "भाषा",
    "mn": "Хэл",
    "ne": "भाषा",
    "nb": "Språk",
    "no": "Språk",
    "or": "ଭାଷା",
    "pa": "ਭਾਸ਼ਾ",
    "fa": "زبان",
    "pl": "Język",
    "ps": "ژبه",
    "pt": "Idioma",
    "ro": "Limbă",
    "ru": "Язык",
    "sd": "ٻولي",
    "sm": "Gagana",
    "sr": "Језик",
    "gd": "Cànain",
    "sn": "Mutauro",
    "si": "භාෂාව",
    "sk": "Jazyk",
    "sl": "Jezik",
    "so": "Language",
    "st": "Puo",
    "es": "Idioma",
    "su": "Basa",
    "sw": "Lugha",
    "sv": "Språk",
    "ta": "மொழி",
    "te": "భాషా",
    "tg": "Забон",
    "th": "ภาษา",
    "tk": "Dil",
    "tl": "Wika",
    "tr": "Dil",
    "tt": "Тел",
    "ug": "تىل",
    "uk": "Мова",
    "ur": "زبان",
    "uz": "Til",
    "vi": "Ngôn ngữ",
    "cy": "Iaith",
    "fy": "Taal",
    "xh": "Language",
    "yi": "שפּראַך",
    "yo": "Language",
    "zu": "Ulimi"
};

L10nMV.GetRestartMessage = function(isoCode) {
    
    if (isoCode in L10nMV.ISO639_1RestartMessages)
        return L10nMV.ISO639_1RestartMessages[isoCode];
    
    return L10nMV.ISO639_1RestartMessages['en'];
};

L10nMV.ISO639_1RestartMessages = {
    "af" : "Die wedstryd sal begin word vir die veranderinge om in werking.",
    "sq" : "Loja do të riniset për ndryshimet të hyjnë në fuqi.",
    "am" : "ጨዋታው ይውሰዳት ውጤት ወደ ለውጦች ምክንያት ዳግም ይሆናል.",
    "ar" : "سيتم إعادة تشغيل اللعبة لتصبح التغييرات سارية المفعول.",
    "hy" : "Խաղը կվերսկսվի համար փոփոխությունների ուժի մեջ է մտնում:",
    "az" : "Oyun take təsiri dəyişikliklər üçün yenidən olacaq.",
    "eu" : "Partida izango du eragina aldaketak berrabiarazi egingo da.",
    "be" : "Гульня будзе адноўленая для змены ўступілі ў сілу.",
    "bn" : "খেলা কার্যকর করার পরিবর্তনের জন্য পুনরায় আরম্ভ করা হবে না।",
    "bs" : "Igra će biti ponovo pokrenut da bi promjene stupile na snagu.",
    "bg" : "Играта ще бъде рестартиран за промените да влязат в сила.",
    "my" : "အဆိုပါဂိမ်းယူအကျိုးသက်ရောက်မှုမှအပြောင်းအလဲတွေများအတွက်ပြန်လည်စတင်လိမ့်မည်။",
    "ca" : "El joc es reiniciarà perquè els canvis tinguin efecte.",
    "ny" : "masewera adzakhala restarted kwa kusintha kuti zotsatira kudzachitika.",
    "zh" : "本场比赛将重新启动，以使更改生效。",
    "co" : "U ghjocu serà capitaliserez di i cambiamenti di effettu sbarcu.",
    "hr" : "Igra će biti nastavljena za promjene stupile na snagu.",
    "cs" : "Hra bude restartován, aby se změny projevily.",
    "da" : "Spillet vil blive genstartet for at ændringerne kan træde i kraft.",
    "nl" : "Het spel zal worden opgestart om de wijzigingen te effect.",
    "en" : "The game will be restarted for the changes to take effect.",
    "eo" : "La ludo estos rekomencita por la ŝanĝoj al preni efikon.",
    "et" : "Mäng taaskäivitatakse, et muudatused jõustuvad.",
    "fi" : "Peli käynnistettävä uudelleen, jotta muutokset tulevat voimaan.",
    "fr" : "Le jeu sera redémarré pour que les modifications à l'effet de prendre.",
    "gl" : "O xogo reiniciarase para que os cambios teñen efecto.",
    "ka" : "თამაში იქნება გადატვირთვა ცვლილებები ძალაში.",
    "de" : "Das Spiel wird für die Änderungen wirksam neu gestartet werden.",
    "el" : "Το παιχνίδι θα ξαναρχίσει τις αλλαγές να τεθούν σε ισχύ.",
    "gu" : "રમત પ્રભાવમાં લાવવા માટે ફેરફારો માટે ને પુનઃપ્રારંભ કરવામાં આવશે.",
    "ht" : "Pral jwèt la dwe rekòmanse pou fè chanjman yo yo pran efè.",
    "ha" : "A game za a restarted ga canje-canje ya dauki sakamako.",
    "he" : "המשחק יופעל מחדש כדי שהשינויים אפקט לקחת.",
    "hi" : "खेल परिवर्तनों को प्रभावी करने के लिए पुन: प्रारंभ कर दिया जाएगा।",
    "hu" : "A játék újra kell indítani a módosítások érvénybe lépjenek.",
    "id" : "Permainan akan restart untuk perubahan efek take.",
    "ga" : "Beidh an cluiche a atosú chun na hathruithe ar theacht éifeacht.",
    "ig" : "The egwuregwu ga-restarted maka mgbanwe-mmetụta.",
    "is" : "Leikurinn verður að endurræsa til að breytingarnar taki gildi.",
    "it" : "Il gioco sarà riavviato per le modifiche diventano effettive.",
    "ja" : "変更を適用するために、ゲームが再開されます。",
    "jv" : "Game bakal diwiwiti kanggo owah-owahan kanggo efek njupuk.",
    "kn" : "ಆಟದ ಕಾರ್ಯಗತವಾಗುತ್ತವೆ ಬದಲಾವಣೆಗಳು ಮರಳಿ ಆರಂಭಗೊಳ್ಳುತ್ತದೆ.",
    "kk" : "ойын күшіне өзгерістер үшін қайта іске асырылатын болады.",
    "km" : "ការប្រកួតនេះនឹងត្រូវបានចាប់ផ្ដើមឡើងវិញសម្រាប់ការផ្លាស់ប្តូរដើម្បីឱ្យមានប្រសិទ្ធិយកបាន។",
    "rw" : "umukino izaba restarted kuko Amahinduka INGARUKA gufata.",
    "ky" : "оюн алып тийиштүү өзгөртүүлөрдү киргизүү керек болот.",
    "ko" : "변경사항을 적용하기 위해 게임이 재시작됩니다.",
    "ku" : "Lîstik dê ji bo guhertinên di bandora take ji nû ve.",
    "la" : "In ludo est restarted et mutationes ad effectum.",
    "lb" : "De Match gëtt fir d'Ännerungen ze huelen Effekt restarted ginn.",
    "lo" : "ເກມຈະໄດ້ຮັບການເລີ່ມຕົ້ນໃຫມ່ສໍາລັບການປ່ຽນແປງທີ່ຈະມີຜົນກະທົບທີ່ເອົາມາ.",
    "lt" : "Žaidimas bus paleista iš įsigaliotų pakeitimai.",
    "lv" : "Spēle būs jāatsāk, lai izmaiņas stātos spēkā.",
    "mk" : "Играта ќе се рестартира за да имаат промените ефект.",
    "mg" : "Ny lalao dia ho averina alefa ny fiovana ho nanan-kery.",
    "ms" : "permainan akan dimulakan semula untuk perubahan akan berkuat kuasa.",
    "ml" : "ഗെയിം എടുത്തു പ്രഭാവം മാറ്റങ്ങൾ പുനരാരംഭിക്കും ചെയ്യും.",
    "mt" : "Il-logħba se jerġa 'jinbeda għall-bidliet għall jidħlu fis-seħħ.",
    "mi" : "Ka te kēmu kia tīmata anō hoki te huringa ki te pānga tango.",
    "mr" : "खेळ परिणाम बदल पुन्हा सुरू होईल.",
    "mn" : "тоглоом авах нөлөө өөрчлөлт нь дахин эхлүүлэх болно.",
    "ne" : "खेल ले प्रभाव परिवर्तन लागि पुनः सुरु गरिनेछ।",
    "nb" : "Spillet vil bli startet på nytt for at endringene skal tre i kraft.",
    "no" : "Spillet vil bli startet på nytt for at endringene skal tre i kraft.",
    "or" : "ଖେଳ ପ୍ରଭାବିତ କୁ ପରିବର୍ତ୍ତନର ପୁନରାରମ୍ଭ ହେବ।",
    "pa" : "ਖੇਡ ਨੂੰ ਤਬਦੀਲੀ ਨੂੰ ਲਾਗੂ ਕਰਨ ਲਈ ਮੁੜ ਚਾਲੂ ਹੋ ਜਾਵੇਗਾ.",
    "fa" : "این بازی خواهد شد برای تغییرات اثر را راه اندازی مجدد.",
    "pl" : "Gra zostanie wznowiona, aby zmiany efektu podjąć.",
    "ps" : "دا لوبه به د ته يوسئ اغېز بدلونونه پيل شي.",
    "pt" : "O jogo será reiniciado para que as alterações têm efeito.",
    "ro" : "Jocul va fi repornit pentru ca modificările să aibă efect.",
    "ru" : "Игра будет перезапущена для изменения вступили в силу.",
    "sd" : "شڪار اثر وٺڻ جي تبديلين لاء restarted ڪيو ويندو.",
    "sm" : "a restarted le taaloga mo le suiga i aafiaga ave.",
    "sr" : "Утакмица ће се поново покренути за промене ступе на снагу.",
    "gd" : "Thèid an gèam a thòiseachadh as ùr airson na h-atharrachaidhean a ghabhail buaidh.",
    "sn" : "Game vachapiwa ritangezve kuchinja kutora maturo.",
    "si" : "ක්රීඩාව ගනිත් ක්රියාත්මක කිරීමට වෙනස්කම් සඳහා නැවත ආරම්භ කරනු ඇත.",
    "sk" : "Hra sa reštartuje, aby sa zmeny prejavili.",
    "sl" : "Igra se bo ponovno za spremembe začele veljati.",
    "so" : "Ciyaarta ayaa la bilaabmay doonaa isbedelada in uu saamayn qaadataan.",
    "st" : "papali e tla qadilwe botjha bakeng sa liphetoho ho e le hantle tsa nka.",
    "es" : "El juego se reiniciará para que los cambios surtan efecto.",
    "su" : "Kaulinan bakal restarted keur parobahan pangaruh nyokot.",
    "sw" : "mchezo kuanzishwa upya ili mabadiliko athari kuchukua.",
    "sv" : "Spelet kommer att startas för att ändringarna ska träda i kraft.",
    "ta" : "விளையாட்டு செயல்படத்துவங்கும் மாற்றங்கள் மறுதொடக்கம் செய்யப்பட வேண்டும்.",
    "te" : "గేమ్ ప్రభావానికి మార్పులు పునఃప్రారంభించారు చేయబడుతుంది.",
    "tg" : "Дар бозии мешавад, барои ворид намудани тағйирот ба таъсири бигирад шурўъ.",
    "th" : "เกมจะเริ่มต้นใหม่เพื่อให้การเปลี่ยนแปลงมีผลบังคับใช้",
    "tk" : "Oýun take täsiri üýtgeşmeler gaýtadan işlener.",
    "tl" : "Ang laro ay ma-restart para sa mga pagbabago upang magkabisa.",
    "tr" : "Oyun almak etkisine değişiklikler için yeniden başlatılacak.",
    "tt" : "Уен ачылу тәэсир үзгәрешләр өчен янады булачак.",
    "ug" : "ئويۇن ئۆتكۈزۈۋېلىش ئۈنۈمگە ئۆزگىرىش قايتىدىن بولىدۇ.",
    "uk" : "Гра буде перезапущено для зміни вступили в силу.",
    "ur" : "کھیل لے اثر میں تبدیلی کے لئے دوبارہ شروع کیا جائے گا.",
    "uz" : "O'yin take ta'sir o'zgarishlar qayta boshlanadi.",
    "vi" : "Trò chơi sẽ được khởi động lại để thay đổi có hiệu lực thi hành mất.",
    "cy" : "Bydd y gêm yn cael ei ailgychwyn i'r newidiadau ddod i rym.",
    "fy" : "De wedstriid wurdt op gong brocht om de feroaringen troch te fieren.",
    "xh" : "Lo mdlalo uya iqaliswe ukuze notshintsho isiphumo athathe.",
    "yi" : "דער שפּיל וועט זיין ריסטאַרטיד פֿאַר די ענדערונגען צו נעמען ווירקונג.",
    "yo" : "Awọn ere yoo wa ni tun fun awọn ayipada lati Ya awọn ipa.",
    "zu" : "Lo mdlalo uzobe kabusha ukuze izinguquko kuyoba nomphumela."
};

// Third-party library : deep-merge.js
// Merge a `source` object to a `target` recursively
function merge(target, source) {
    // Iterate through `source` properties and if an `Object` set property to merge of `target` and `source` properties
    for (var key of Object.keys(source))
        if (source[key] instanceof Object)
            Object.assign(source[key], merge(target[key], source[key]));
  
    // Join `target` and modified `source`
    Object.assign(target || {}, source);
    return target;
}

Scene_Boot.prototype.create = function() {
    Scene_Base.prototype.create.call(this);
    DataManager.loadDatabase();
    this.loadSystemWindowImage();
};

L10nMV.Initialize();