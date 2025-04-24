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
 * | Recommended MV version : 1.6.2^                                  |
 * |                                                                  |
 * | - Update from old version guide -------------------------------- |
 * | 1. Double-click L10nMV in plugin management menu                 |
 * | 2. Change to other plugin and restore it to L10nMV.              |
 * |    (Doesn't need re-writing plugin parameters!)                  |
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
 * | language pack directory name must be IETF BCP 47 code.           |
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
 * |       /en                 # Oh, and also dubbed voice lines!     |
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
 * | > Must be use IETF BCP 47 code.                                  |
 * | > (i.e. ko, en, ja...)                                           |
 * |                                                                  |
 * | Global language                                                  |
 * | > This is fallbacks if player uses not supported language.       |
 * | > Must be use IETF BCP 47 code.                                  |
 * | > (i.e. ko, en, ja...)                                           |
 * |                                                                  |
 * | Specified supported language pack list                           |
 * | > * Strongly recommended for Web, Mobile, UWP environment.       |
 * | > This list is used when limited modding environment.            |
 * | > (Unofficial translation is cannot try on Web and Mobile)       |
 * | > If you hosting your game in limited environment, consider use  |
 * | > this option.                                                   |
 * | > Must be use IETF BCP 47 code.                                  |
 * | > (i.e. ko, en, ja, zh-CN, zh-TW...)                             |
 * |                                                                  |
 * | Resource strings                                                 |
 * | > You might have text in plugin commands or scripts              |
 * | > that you want to localize.                                     |
 * | > This option allows you to put in the text you want             |
 * | > and have the plugin command or script use $strings(number)     |
 * | > to get the text you put there.                                 |
 * | > For example, check out below.                                  |
 * | >                                                                |
 * | > +Script : SomePluginScript.command(32, $strings(2));           |
 * | > +Plugin command : DISPLAY_TEXT $strings(3)                     |
 * |                                                                  |
 * | Use first setup scene                                            |
 * | > When player start your game first time, L10nMV will show       |
 * | > language setup dialogue.                                       |
 * |                                                                  |
 * | Option available condition                                       |
 * | > This is used like when skipping the title scene and-           |
 * | > displaying the title screen on the map.                        |
 * | > In that case, replace the content inside with...               |
 * | > '$gameMap.mapId() === <Map ID of the title screen>'            |
 * | >                                                                |
 * | > If your map is to act as a title,                              |
 * | > create an empty event with 'Autorun' trigger-                  |
 * | > and fill it with the structure below.                          |
 * | >                                                                |
 * | > +If : Script : L10nMV.RequireRestart                           |
 * | >   +Script : L10nMV.ShowRequiresRestartMessageOnMap();          |
 * | >   +Loop                                                        |
 * | >     +Wait : 1 frame(s)                                         |
 * | >     : End                                                      |
 * | > +Erase Event                                                   |
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
 * | Ignore decrypt language pack files                               |
 * | > Basically, RPG MV supports encrypt files in distribution.      |
 * | > this option supports replace files in language pack easily.    |
 * | > but if you want presenting fully official language only-       |
 * | > then turn off this option.                                     |
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
 * @param specified-languages
 * @text Specified supported language pack list
 * @type text[]
 * @desc Read more information in help page's
 * 3. Plugin options section.
 * 
 * @param resource-strings
 * @text Resource strings
 * @type note[]
 * @desc A collection of customized text that can be used in
 * plugin commands, script, etc. (see 3. Plugin options)
 * 
 * @param use-first-setup
 * @text Use first setup scene
 * @type boolean
 * @desc Read more information in help page's
 * 3. Plugin options section.
 * @default false
 * 
 * @param option-available-condition
 * @text Option available condition
 * @type text
 * @desc The conditional expression under which the setting is activated.
 * @default L10nMV.LastScene === Scene_Title
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
 * 
 * @param ignore-decrypt-language-pack
 * @text Ignore decrypt language pack files
 * @type boolean
 * @desc Read more information in help page's
 * 3. Plugin options section.
 * @default true
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

L10nMV.LANG_ROOT = "./lang/";
L10nMV.PEEK_FILE = "/Info.json";

//Bool
L10nMV.IsProjectLanguage              = false;
L10nMV.RequireRestart                 = false;
L10nMV.MapStringsLoaded               = false;
L10nMV.IgnoreDecryptLanguagePackFiles = false;
L10nMV.UseFirstSetup                  = false;
L10nMV.NeedSetup                      = false;

//String
L10nMV.ProjectLanguage = null;
L10nMV.LocalLanguage   = null;
L10nMV.GlobalLanguage  = null;
L10nMV.ChangedLanguage = null;

//Array
L10nMV.AvailableLanguages = null;
L10nMV.DatabaseStringsLoadStatus = null;
L10nMV.SpecifiedLanguages = null;
L10nMV.ResourceStrings = null;

//Object
L10nMV.PluginStrings = null;

if (Utils.isNwjs()) {
    
    L10nMV.IOFile = require('fs');
    L10nMV.IOPath = require('path');
    L10nMV.IORoot = L10nMV.IOPath.dirname(process.mainModule.filename);
}

else {
    
    L10nMV.IOFile = null;
    L10nMV.IOPath = null;
    L10nMV.IORoot = null;
}

L10nMV.Initialize = function(isReload) {
    
    DataManager.isDatabaseLoaded = L10nMV.isDatabaseLoaded;
    DataManager.isMapLoaded      = L10nMV.isMapLoaded;
    
    L10nMV.DatabaseStringsLoadStatus = [];
    
    var pluginOption = PluginManager.parameters("L10nMV");
    
    L10nMV.StrictMode                     = pluginOption["strict"] === "true";
    L10nMV.ProjectLanguage                = pluginOption["lang"];
    L10nMV.GlobalLanguage                 = pluginOption["global-lang"];
    L10nMV.IgnoreDecryptLanguagePackFiles = pluginOption["ignore-decrypt-language-pack"] === "true";
    L10nMV.UseFirstSetup                  = pluginOption["use-first-setup"] === "true";
    
    try {
        
        if (!pluginOption["option-available-condition"])
            throw new Error();
        
        L10nMV.IsOptionAvailable = eval('(function(){return ' + pluginOption["option-available-condition"] + '})');
        
    } catch (e) {
        
        L10nMV.IsOptionAvailable = function() { return L10nMV.LastScene === Scene_Title };
    }
    
    try {
        
        L10nMV.WhitelistedPlugins = JSON.parse(pluginOption["whitelist-plugins"]);
        
    } catch (e) {
        
        L10nMV.WhitelistedPlugins = null;
    }
    
    try {
        
        L10nMV.SpecifiedLanguages = JSON.parse(pluginOption["specified-languages"]);
        
    } catch (e) {
        
        L10nMV.SpecifiedLanguages = null;
    }
    
    if (!(L10nMV.ProjectLanguage in L10nMV.IetfBcp47Names)) {
        
        throw new Error(
            "Cannot find specific default language code : "
            + L10nMV.ProjectLanguage
        );
    }
    
    if (!(L10nMV.GlobalLanguage in L10nMV.IetfBcp47Names)) {
        
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
            "         Version : " + this.VERSION     + "\n" + 
            "     Commit hash : " + this.COMMIT_HASH + "\n" + 
            "Default language : " + L10nMV.GetIetfBcpCodeWithName(this.ProjectLanguage) + "\n" + 
            "   User language : " + L10nMV.GetIetfBcpCodeWithName(this.LocalLanguage)   + "\n" + 
            " Global language : " + L10nMV.GetIetfBcpCodeWithName(this.GlobalLanguage)
        );
    }
    
    L10nMV.InitializeResourceStrings(pluginOption["resource-strings"]);
    
    if (!L10nMV.IsProjectLanguage) {
        
        if (L10nMV.CheckPluginFeature())
            L10nMV.InitializePluginLocalization();
    }
}

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
            "⚠ L10nMV : This was occurred because version hash is incorrect.\n" +
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
}

L10nMV.GetIetfBcpCodeWithName = function(code) {
    
    return code + " (" + L10nMV.IetfBcp47Names[code] + ")";
}

L10nMV.DataManager_loadDatabase = DataManager.loadDatabase;
DataManager.loadDatabase = function() {
    
    L10nMV.DataManager_loadDatabase.call(this);
    
    L10nMV.MapStringsLoaded = L10nMV.IsProjectLanguage;
    
    if (L10nMV.IsProjectLanguage)
        return;
    
    var test = this.isBattleTest() || this.isEventTest();
    var prefix = test ? 'Test_' : '';
    
    for (var kvPair of this._databaseFiles)
        L10nMV.LoadL10nDataFile(kvPair.name, prefix + kvPair.src);
    
    if (this.isEventTest()) {
        L10nMV.LoadL10nDataFile('$testEvent', prefix + 'Event.json');
    }
}

L10nMV.DataManager_loadMapData = DataManager.loadMapData;
DataManager.loadMapData = function(mapId) {
    
    L10nMV.DataManager_loadMapData.call(this, mapId);
    
    L10nMV.MapStringsLoaded = L10nMV.IsProjectLanguage;
    
    if (L10nMV.MapStringsLoaded || mapId <= 0)
        return;
    
    var filename = 'Map%1.json'.format(mapId.padZero(3));
    L10nMV.LoadL10nDataFile('$dataMap', filename);
}

L10nMV.isMapLoaded = function() {
    DataManager.checkError();
    return !!$dataMap && L10nMV.MapStringsLoaded;
}

L10nMV.isDatabaseLoaded = function() {
    DataManager.checkError();
    for (var i = 0; i < DataManager._databaseFiles.length; i++) {
        if (!window[DataManager._databaseFiles[i].name] &&
            !(DataManager._databaseFiles[i].name in L10nMV.DatabaseStringsLoadStatus)) {
            return false;
        }
    }
    return true;
}

L10nMV.LoadL10nDataFile = function(name, src) {
    
    var cancelToken = setInterval(function() {
        
        if (window[name] === null || window[name] === undefined)
            return;
        
        clearInterval(cancelToken);
        
        var url = L10nMV.LANG_ROOT + L10nMV.LocalLanguage + '/' + src;
        
        if (!L10nMV.AssetExists(url)) {
            
            L10nMV.ThrowException("Language pack file '" + src + "' not exist.");
                    
            if (name === L10nMV.NAME_DATA_MAP)
                L10nMV.MapStringsLoaded = true;
            
            else
                L10nMV.DatabaseStringsLoadStatus.push(name);
            
            return;
        }
        
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.overrideMimeType('application/json');
        
        xhr.onload = function() {
            
            if (xhr.status < 400) {
                
                try {
                    
                    var parsedData = JSON.parse(xhr.responseText);
                    
                    switch (name) {
                        
                        default:
                            
                            L10nMV.DatabaseStringsLoadStatus.push(name);
                            L10nMV.FilterStringsFromObject(parsedData);
                            window[name] = merge(window[name], parsedData);
            
                            break;
                            
                        case L10nMV.NAME_DATA_COMMON_EVENTS:
                            
                            L10nMV.DatabaseStringsLoadStatus.push(name);
                            L10nMV.MergeCommonEventsData(parsedData);
                            break;
                        
                        case L10nMV.NAME_DATA_MAP:
                            
                            L10nMV.MapStringsLoaded = true;
                            L10nMV.MergeMapEventsData(parsedData);
                            break;
                    }
                    
                    DataManager.onLoad(window[name]);
                    
                } catch (e) {
                    
                    if (name === L10nMV.NAME_DATA_MAP)
                        L10nMV.MapStringsLoaded = true;
                    
                    else
                        L10nMV.DatabaseStringsLoadStatus.push(name);
                    
                    L10nMV.ThrowException("Failed to parse data '" + src + "'.");
                }
            }
        };
        
        xhr.source = name;
        xhr.onerror = L10nMV.LoadFailedL10nDataFile;
        
        xhr.send();
    });
}

L10nMV.LoadFailedL10nDataFile = function(e) {
    
    if (e.currentTarget.source === L10nMV.NAME_DATA_MAP)
        L10nMV.MapStringsLoaded = true;
    
    else
        L10nMV.DatabaseStringsLoadStatus.push(e.currentTarget.source);
    
    L10nMV.ThrowException("Failed to load language pack file.");
}

L10nMV.FilterStringsFromObject = function(object) {
    
    var type;
    for (var key in object) {
        
        if (!object.hasOwnProperty(key))
            continue;
        
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
}

L10nMV.ThrowException = function(message) {
    
    if (L10nMV.StrictMode)
        throw new Error("⚠ L10nMV : " + message);
    
    console.warn("⚠ L10nMV : " + message);
}

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
        
        if (!strings.hasOwnProperty(keyIndex))
            continue;
        
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
    }
    
    window[L10nMV.NAME_DATA_COMMON_EVENTS] = dataCommonEvents;
    
}

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
        
        if (!strings.hasOwnProperty(keyIndex))
            continue;
        
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
        
            if (!eventPageStrings.hasOwnProperty(eventPageStringIndex))
                continue;
                
            if (!(eventPageStringIndex in eventDataPages)) {
                
                L10nMV.ThrowException("Event strings exists but target event's page is not exist. (event number " + keyIndex + ", page " + eventPageStringIndex + ")");
                continue;
            }
            
            pageData   = eventDataPages[eventPageStringIndex];
            pageEvents = pageData.list;
            
            if (!pageEvents || pageEvents.length === 0) {
                
                L10nMV.ThrowException("Event page strings exists but target event's page is empty. (event number " + keyIndex + ", page " + eventPageStringIndex + ")");
                continue;
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
    }
    
    window[L10nMV.NAME_DATA_MAP] = dataMap;
}

L10nMV.ApplyStatus = {
    OK:              0,
    StringsNotValid: 1,
    EventsNotValid:  2,
    CountNotMatch:   3
}

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
            case L10nMV.EventCode.ScrollText:
                
                if (event.parameters[0])
                    event.parameters[0] = strings[stringIndex];
                
                else
                    stringIndex--;
                
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
}

L10nMV.IsStringEvent = function(event) {
    
    return event.code in L10nMV.CodeEvent;
}

// Handle settings ====================================

L10nMV.LoadAvailableLanguagePackList = function() {
    
    if (L10nMV.SpecifiedLanguages !== null && L10nMV.SpecifiedLanguages.length !== 0) {
        
        if (!L10nMV.SpecifiedLanguages.contains(L10nMV.ProjectLanguage))
            L10nMV.SpecifiedLanguages.push(L10nMV.ProjectLanguage);
        
        if (!L10nMV.SpecifiedLanguages.contains(L10nMV.GlobalLanguage))
            L10nMV.SpecifiedLanguages.push(L10nMV.GlobalLanguage);
        
        L10nMV.AvailableLanguages = L10nMV.SpecifiedLanguages;
        return;
    }
    
    L10nMV.AvailableLanguages = [ L10nMV.ProjectLanguage ];
    for (var lang in L10nMV.IetfBcp47Names) {
        
        if (!L10nMV.IetfBcp47Names.hasOwnProperty(lang))
            continue;
        
        if (lang === L10nMV.ProjectLanguage)
            continue;
        
        if (L10nMV.AssetExists(L10nMV.LANG_ROOT + lang + L10nMV.PEEK_FILE))
            L10nMV.AvailableLanguages.push(lang);
    }
}

L10nMV.GetDeviceLanguage = function() {
    
    var language = navigator.language || navigator.userLanguage;
    
    var fullCodeIndicator = language.indexOf('-');
    
    if (fullCodeIndicator !== -1)
        language = language.substring(0, fullCodeIndicator);
    
    return language;
}

L10nMV.ConfigManager_applyData = ConfigManager.applyData;
ConfigManager.applyData = function(config) {
    
    L10nMV.ConfigManager_applyData.call(this, config);
    L10nMV.ApplyFromConfig(config);
}

L10nMV.ApplyFromConfig = function(config) {
    
    var l10nMV = config.L10nMV;
    
    if (!l10nMV) {
        
        if (L10nMV.UseFirstSetup)
            L10nMV.NeedSetup = true;
        
        l10nMV = config.L10nMV = L10nMV.GetCurrentConfigurableData();
    }
    
    L10nMV.LocalLanguage = l10nMV.LocalLanguage;
    
    if (!(L10nMV.LocalLanguage in L10nMV.IetfBcp47Names))
        L10nMV.LocalLanguage = L10nMV.GlobalLanguage;
    
    L10nMV.IsProjectLanguage = L10nMV.LocalLanguage === L10nMV.ProjectLanguage;
}

L10nMV.ConfigManager_makeData = ConfigManager.makeData;
ConfigManager.makeData = function() {
    
    var config = L10nMV.ConfigManager_makeData.call(this);
    L10nMV.CreateConfigData(config);
    
    return config;
}

L10nMV.CreateConfigData = function(config) {
    
    config.L10nMV = L10nMV.GetCurrentConfigurableData();
}

L10nMV.Scene_Title_fadeSpeed = Scene_Title.prototype.fadeSpeed;
Scene_Title.prototype.fadeSpeed = function() {
    return L10nMV.RequireRestart ? 0.01 : L10nMV.Scene_Title_fadeSpeed.call(this);
}

L10nMV.Scene_Title_create = Scene_Title.prototype.create;
Scene_Title.prototype.create = function() {
    
    L10nMV.Scene_Title_create.call(this);
    
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
}

L10nMV.ShowRequiresRestartMessageOnMap = function() {
    
    var scene = SceneManager._scene;
    if (!(scene instanceof Scene_Map)) {
        
        L10nMV.ThrowException("L10nMV.ShowRequiresRestartMessageOnMap only works in map.");
        return;
    }
    
    var message = L10nMV.GetRestartMessage(L10nMV.ChangedLanguage);
    var messageWindow = scene._messageWindow;
    var width = messageWindow.contents.measureTextWidth(message);

    if (width > messageWindow.width) {
        
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

    var scene = SceneManager._scene;
    $gameMessage.setChoiceCallback(function() { L10nMV.RestartGame(scene); });
}

L10nMV.RestartGame = function(sender) {
    
    if (!sender) return;
    
    L10nMV.RequireRestart = false;
    sender.fadeOutAll();
    setTimeout(function() { window.location.reload(); }, 1000);
}

L10nMV.Scene_Options_terminate = Scene_Options.prototype.terminate;
Scene_Options.prototype.terminate = function() {
    
    L10nMV.Scene_Options_terminate.call(this);
    
    if (L10nMV.LocalLanguage !== L10nMV.ChangedLanguage)
        L10nMV.RequireRestart = true;
}

L10nMV.SceneBase_terminate = Scene_Base.prototype.terminate;
Scene_Base.prototype.terminate = function() {
    
    L10nMV.LastScene = this.constructor;
    L10nMV.SceneBase_terminate.call(this);
}

L10nMV.GetCurrentConfigurableData = function() {
    
    var localLanguage = L10nMV.ChangedLanguage || L10nMV.GetDeviceLanguage();
    
    if (!L10nMV.AvailableLanguages.contains(localLanguage))
        localLanguage = L10nMV.GlobalLanguage;
    
    return {
        LocalLanguage: localLanguage
    }
}

L10nMV.Window_Options_makeCommandList = Window_Options.prototype.makeCommandList;
Window_Options.prototype.makeCommandList = function() {
    
    L10nMV.Window_Options_makeCommandList.call(this);
    L10nMV.OptionWindow_Create(this);
}

L10nMV.OptionWindow_IsEnabled = function() {
    
    if (typeof L10nMV.IsOptionAvailable !== 'function')
        return L10nMV.LastScene === Scene_Title;
    
    return L10nMV.IsOptionAvailable();
}

L10nMV.OptionWindow_Create = function(context) {
    
    if (!context._L10nMVLang) {
        context._L10nMVLang = true;
        L10nMV.ChangedLanguage = L10nMV.LocalLanguage;
    }
    
    context.addCommand(
        L10nMV.GetOptionText(L10nMV.ChangedLanguage),
        'L10nMV.LocalLanguage',
        L10nMV.OptionWindow_IsEnabled()
    );
}

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
            L10nMV.OptionWindow_CursorRight(this);
            break;
    }
}

L10nMV.OptionWindow_CursorRight = function(context) {
    
    if (!L10nMV.OptionWindow_IsEnabled()) {
        
        SoundManager.playBuzzer();
        return;
    }
    
    var index = context.index();
    L10nMV.ChangeToNextLanguage();
    context._list[index].name = L10nMV.GetOptionText(L10nMV.ChangedLanguage);
    context.redrawItem(index);
}

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
            L10nMV.OptionWindow_CursorRight(this);
            break;
    }
}

L10nMV.OptionWindow_CursorLeft = function(context) {
    
    if (!L10nMV.OptionWindow_IsEnabled()) {
        
        SoundManager.playBuzzer();
        return;
    }
    
    var index = context.index();
    L10nMV.ChangeToPreviousLanguage();
    context._list[index].name = L10nMV.GetOptionText(L10nMV.ChangedLanguage);
    context.redrawItem(index);
}

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
            L10nMV.OptionWindow_CursorLeft(this);
            break;
    }
}

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
            return L10nMV.IetfBcp47Names[L10nMV.ChangedLanguage];
    }
}

L10nMV.ChangeToNextLanguage = function() {
    
    var index = L10nMV.AvailableLanguages.indexOf(L10nMV.ChangedLanguage);
    index++;
    
    if (index >= L10nMV.AvailableLanguages.length)
        index = 0;
    
    L10nMV.ChangeLanguage(L10nMV.AvailableLanguages[index]);
    SoundManager.playCursor();
}

L10nMV.ChangeToPreviousLanguage = function() {
    
    var index = L10nMV.AvailableLanguages.indexOf(L10nMV.ChangedLanguage);
    index--;
    
    if (index < 0)
        index = L10nMV.AvailableLanguages.length - 1;
    
    L10nMV.ChangeLanguage(L10nMV.AvailableLanguages[index]);
    SoundManager.playCursor();
}

L10nMV.ChangeLanguage = function(language) {
    
    if (!(language in L10nMV.IetfBcp47Names))
        language = L10nMV.GlobalLanguage;
    
    L10nMV.ChangedLanguage = language;
    
    L10nMV.IsProjectLanguage = L10nMV.ChangedLanguage === L10nMV.ProjectLanguage;
}

// Handle resource files ==============================

L10nMV.CachedExists = {}

L10nMV.AssetExists = function(url) {
    
    if (url in L10nMV.CachedExists)
        return L10nMV.CachedExists[url];
    
    if (L10nMV.IORoot) {
        
        var url = L10nMV.IOPath.join(L10nMV.IORoot, url);
        return L10nMV.IOFile.existsSync(url);
    }
    
    L10nMV.Pecker = new XMLHttpRequest();
    L10nMV.Pecker.open("GET", url, false);
    L10nMV.Pecker.setRequestHeader("Range", "bytes=0-0");
    
    try {
        
        L10nMV.Pecker.send();
        L10nMV.CachedExists[url]
            = L10nMV.Pecker.readyState === XMLHttpRequest.DONE
           && Math.floor(L10nMV.Pecker.status / 100) === 2;
        
    } catch (ex) {
        
        L10nMV.CachedExists[url] = false;
        return false;
    }
    
    return L10nMV.CachedExists[url];
}

L10nMV.GetL10nAssetPath = function(path) {
    
    var position = path.lastIndexOf('/');
    
    return L10nMV.LANG_ROOT + L10nMV.LocalLanguage + '/'
         + path.substring(0, position + 1)
         + path.substring(position + 1);
}

L10nMV.GetSelectLocalAssetPath = function(path) {
    
    var l10nPath = L10nMV.GetL10nAssetPath(path);
    
    if (L10nMV.AssetExists(l10nPath))
        return l10nPath;
    
    return path;
}

L10nMV.WebAudio_Load = WebAudio.prototype._load;
WebAudio.prototype._load = function(url) {
    
    if (WebAudio._context) {
        var xhr = new XMLHttpRequest();
        
        if (!L10nMV.IsProjectLanguage) {
            
            url = L10nMV.GetSelectLocalAssetPath(url);
            
            if (Decrypter.hasEncryptedAudio &&
               (!L10nMV.IgnoreDecryptLanguagePackFiles || !url.startsWith(L10nMV.LANG_ROOT)))
                url = Decrypter.extToEncryptExt(url);
            
        } else if (Decrypter.hasEncryptedAudio)
            url = Decrypter.extToEncryptExt(url);
        
        xhr.open('GET', url);
        xhr.responseType = 'arraybuffer';
        xhr.onload = function() {
            if (xhr.status < 400) {
                xhr.isEncryptedFile = Decrypter.hasEncryptedAudio
                    && (!L10nMV.IgnoreDecryptLanguagePackFiles || !url.startsWith(L10nMV.LANG_ROOT));
                this._onXhrLoad(xhr);
            }
        }.bind(this);
        xhr.onerror = this._loader || function(){this._hasError = true;}.bind(this);
        xhr.send();
    }
}

/**
 * @method _onXhrLoad
 * @param {XMLHttpRequest} xhr
 * @private
 */
WebAudio.prototype._onXhrLoad = function(xhr) {
    var array = xhr.response;
    if (xhr.isEncryptedFile) array = Decrypter.decryptArrayBuffer(array);//Decrypter.hasEncryptedAudio
    this._readLoopComments(new Uint8Array(array));
    WebAudio._context.decodeAudioData(array, function(buffer) {
        this._buffer = buffer;
        this._totalTime = buffer.duration;
        if (this._loopLength > 0 && this._sampleRate > 0) {
            this._loopStart /= this._sampleRate;
            this._loopLength /= this._sampleRate;
        } else {
            this._loopStart = 0;
            this._loopLength = this._totalTime;
        }
        this._onLoad();
    }.bind(this));
}

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
    }

    requestFile.onerror = function () {
        if (bitmap._loader) {
            bitmap._loader();
        } else {
            bitmap._onError();
        }
    }
}

L10nMV.Bitmap_RequestImage = Bitmap.prototype._requestImage;
Bitmap.prototype._requestImage = function(url) {
    if(Bitmap._reuseImages.length !== 0){
        this._image = Bitmap._reuseImages.pop();
    }else{
        this._image = new Image();
    }

    if (this._decodeAfterRequest && !this._loader) {
        this._loader = ResourceHandler.createLoader(url, this._requestImage.bind(this, url), this._onError.bind(this));
    }

    this._image = new Image();
    
    var isEncryptedFile = Decrypter.hasEncryptedImages
        && (!L10nMV.IgnoreDecryptLanguagePackFiles || !url.startsWith(L10nMV.LANG_ROOT));
    
    if (!L10nMV.IsProjectLanguage)
        url = L10nMV.GetSelectLocalAssetPath(url);
    
    else
        isEncryptedFile = Decrypter.hasEncryptedImages;
    
    this._url = url;
    this._loadingState = 'requesting';
    
    if(!Decrypter.checkImgIgnore(url) && isEncryptedFile) {//Decrypter.hasEncryptedImages
        this._loadingState = 'decrypting';
        Decrypter.decryptImg(url, this);
    } else {
        this._image.src = url;

        this._image.addEventListener('load', this._loadListener = Bitmap.prototype._onLoad.bind(this));
        this._image.addEventListener('error', this._errorListener = this._loader || Bitmap.prototype._onError.bind(this));
    }
}

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
}

L10nMV.ImageManager_ReserveNormalBitmap = ImageManager.reserveNormalBitmap;
ImageManager.reserveNormalBitmap = function(path, hue, reservationId){
    
    if (!L10nMV.IsProjectLanguage)
        path = L10nMV.GetSelectLocalAssetPath(path);
    
    var bitmap = this.loadNormalBitmap(path, hue);
    this._imageCache.reserve(this._generateCacheKey(path, hue), bitmap, reservationId);

    return bitmap;
}

L10nMV.InitializeResourceStrings = function(resourceStrings) {
    
    if (L10nMV.IsProjectLanguage) {
        
        try {
            
            if (!resourceStrings)
                throw new Error();
            
            resourceStrings = JSON.parse(resourceStrings) || [];
            
            for (var index = 0; index < resourceStrings.length; index++)
                resourceStrings[index] = JSON.parse(resourceStrings[index]);
            
            L10nMV.ResourceStrings = resourceStrings;
            
        } catch (e) {
            
            console.warn("⚠ L10nMV : Failed to load resource strings data.");
        }
            
        if (!resourceStrings || resourceStrings.length === 0) {
            
            L10nMV.ResourceStrings = [];
            console.warn("⚠ L10nMV : No any resource strings found.");
            return;
        }
        
        L10nMV.ResourceStrings = resourceStrings;
        return;
    }
    
    var xhr = new XMLHttpRequest();
    var url = L10nMV.LANG_ROOT + L10nMV.LocalLanguage + '/Strings.json';
    xhr.open('GET', url, false);
    xhr.overrideMimeType('application/json');
    
    xhr.onerror = L10nMV.LoadFailedL10nDataFile;
    
    try {
        
        xhr.send();
    
        if (xhr.status < 400) {
        
            resourceStrings = JSON.parse(xhr.responseText);
        
        } else {
            
            L10nMV.ThrowException("Failed to parse resource strings file. (" + url + ")");
        }
        
    } catch (e) {
        
        L10nMV.ThrowException("Failed to load resource strings data. (" + url + ")");
    }
    
    if (!resourceStrings || resourceStrings.length === 0) {
        
        L10nMV.ResourceStrings = [];
        console.warn("⚠ L10nMV : No any resource strings found.");
        return;
    }
    
    L10nMV.ResourceStrings = resourceStrings;
}

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
            
            L10nMV.ThrowException("Failed to parse plugins file. (" + url + ")");
        }
        
    } catch (e) {
            
        L10nMV.ThrowException("Failed to load plugins data. (" + url + ")");
    }
    
    if (!plugins || Object.keys(plugins).length === 0)
        L10nMV.ThrowException("Plugin data is empty.");
    
    L10nMV.PluginStrings = plugins;
    
    $plugins.forEach(function(plugin) {
        
        if (plugin.status)
            this.setParameters(plugin.name, plugin.parameters);
        
    }, PluginManager);
}

L10nMV.PluginManager_SetParameters = PluginManager.setParameters;
PluginManager.setParameters = function(name, parameters) {
    
    if (L10nMV.PluginStrings && name in L10nMV.PluginStrings) {
        
        var strings = L10nMV.PluginStrings[name];
        for (var key in parameters) {
            
            if (!parameters.hasOwnProperty(key))
                continue;
            
            if (key in strings && strings[key]) {
                
                parameters[key] = strings[key];
                
                if (typeof parameters[key] === 'object')
                    parameters[key] = L10nMV.JsonStringifyRecursively(parameters[key]);
            }
        }
    }
    
    L10nMV.PluginManager_SetParameters.call(this, name, parameters);
}

L10nMV.JsonStringifyRecursively = function(object) {
    
    if (typeof object !== 'object')
        return JSON.stringify(object);
    
    for (var key in object) {
            
        if (!object.hasOwnProperty(key))
            continue;
        
        if (typeof object[key] === 'object')
            object[key] = L10nMV.JsonStringifyRecursively(object[key]);
    }
    
    return JSON.stringify(object);
}

L10nMV.EventCode = {
    Dialog: 401,
    Choice: 102,
    ChoiceWhen: 402,
    ScrollText: 405
}

L10nMV.CodeEvent = {
    401: "Dialog",
    102: "Choice",
    402: "ChoiceWhen",
    405: "ScrollText"
}

L10nMV.IetfBcp47Names = {
    "af":    "Afrikaans",
    "am":    "አማርኛ",
    "ar":    "العربية",
    "ar-SA": "العربية",
    "az":    "azərbaycan dili",
    "be":    "беларуская мова",
    "bg":    "български език",
    "bn":    "বাংলা",
    "bn-BD": "বাংলা",
    "bn-IN": "বাংলা",
    "bs":    "bosanski jezik",
    "ca":    "català, valencià",
    "co":    "corsu, lingua corsa",
    "cs":    "čeština, český jazyk",
    "cs-CZ": "čeština",
    "cy":    "Cymraeg",
    "da":    "dansk",
    "da-DK": "dansk",
    "de":    "Deutsch",
    "de-AT": "Deutsch",
    "de-CH": "Deutsch",
    "de-DE": "Deutsch",
    "el":    "ελληνικά",
    "el-GR": "Ελληνικά",
    "en":    "English",
    "en-AU": "English",
    "en-CA": "English",
    "en-GB": "English",
    "en-IE": "English",
    "en-IN": "English",
    "en-NZ": "English",
    "en-US": "English",
    "en-ZA": "English",
    "eo":    "Esperanto",
    "es":    "Español",
    "es-AR": "español",
    "es-CL": "español",
    "es-CO": "español",
    "es-ES": "español",
    "es-MX": "español",
    "es-US": "español",
    "et":    "eesti, eesti keel",
    "eu":    "euskara, euskera",
    "fa":    "فارسی",
    "fi":    "suomi, suomen kieli",
    "fi-FI": "suomi",
    "fr":    "français, langue française",
    "fr-BE": "français",
    "fr-CA": "français",
    "fr-CH": "français",
    "fr-FR": "français",
    "fy":    "Frysk",
    "ga":    "Gaeilge",
    "gd":    "Gàidhlig",
    "gl":    "Galego",
    "gu":    "ગુજરાતી",
    "ha":    "(Hausa) هَوُسَ",
    "he":    "עברית",
    "he-IL": "עברית",
    "hi":    "हिन्दी, हिंदी",
    "hi-IN": "हिन्दी",
    "hr":    "hrvatski jezik",
    "ht":    "Kreyòl ayisyen",
    "hu":    "magyar",
    "hu-HU": "magyar",
    "hy":    "Հայերեն",
    "id":    "Bahasa Indonesia",
    "id-ID": "Bahasa Indonesia",
    "ig":    "Asụsụ Igbo",
    "is":    "Íslenska",
    "it":    "Italiano",
    "it-CH": "italiano",
    "it-IT": "italiano",
    "ja":    "日本語",
    "ja-JP": "日本語",
    "jv":    "ꦧꦱꦗꦮ, Basa Jawa",
    "ka":    "ქართული",
    "kk":    "қазақ тілі",
    "km":    "ខ្មែរ, ខេមរភាសា, ភាសាខ្មែរ",
    "kn":    "ಕನ್ನಡ",
    "ko":    "한국어",
    "ko-KR": "한국어",
    "ku":    "Kurdî, کوردی‎",
    "ky":    "Кыргызча, Кыргыз тили",
    "la":    "latine, lingua latina",
    "lb":    "Lëtzebuergesch",
    "lo":    "ພາສາລາວ",
    "lt":    "lietuvių kalba",
    "lv":    "latviešu valoda",
    "mg":    "fiteny malagasy",
    "mi":    "te reo Māori",
    "mk":    "македонски јазик",
    "ml":    "മലയാളം",
    "mn":    "Монгол хэл",
    "mr":    "मराठी",
    "ms":    "Bahasa Melayu, بهاس ملايو‎",
    "mt":    "Malti",
    "my":    "ဗမာစာ",
    "nb":    "Norsk Bokmål",
    "ne":    "नेपाली",
    "nl":    "Nederlands, Vlaams",
    "nl-BE": "Nederlands",
    "nl-NL": "Nederlands",
    "no":    "Norsk",
    "no-NO": "norsk",
    "ny":    "chiCheŵa, chinyanja",
    "or":    "ଓଡ଼ିଆ",
    "pa":    "ਪੰਜਾਬੀ, پنجابی‎",
    "pl":    "język polski, polszczyzna",
    "pl-PL": "polski",
    "ps":    "پښتو",
    "pt":    "Português",
    "pt-BR": "português",
    "pt-PT": "português",
    "ro":    "Română",
    "ro-RO": "română",
    "ru":    "русский",
    "ru-RU": "русский",
    "rw":    "Ikinyarwanda",
    "sd":    "सिन्धी, سنڌي، سندھی‎",
    "si":    "සිංහල",
    "sk":    "Slovenčina, Slovenský Jazyk",
    "sk-SK": "slovenčina",
    "sl":    "Slovenski Jezik, Slovenščina",
    "sm":    "gagana fa'a Samoa",
    "sn":    "chiShona",
    "so":    "Soomaaliga, af Soomaali",
    "sq":    "Shqip",
    "sr":    "српски језик",
    "st":    "Sesotho",
    "su":    "Basa Sunda",
    "sv":    "Svenska",
    "sv-SE": "svenska",
    "sw":    "Kiswahili",
    "ta":    "தமிழ்",
    "ta-IN": "தமிழ்",
    "ta-LK": "தமிழ்",
    "te":    "తెలుగు",
    "tg":    "тоҷикӣ, toçikī, تاجیکی‎",
    "th":    "ไทย",
    "th-TH": "ไทย",
    "tk":    "Türkmen, Түркмен",
    "tl":    "Wikang Tagalog",
    "tr":    "Türkçe",
    "tr-TR": "Türkçe",
    "tt":    "татар теле, tatar tele",
    "ug":    "ئۇيغۇرچە‎, Uyghurche",
    "uk":    "Українська",
    "ur":    "اردو",
    "uz":    "Oʻzbek, Ўзбек, أۇزبېك‎",
    "vi":    "Tiếng Việt",
    "xh":    "isiXhosa",
    "yi":    "ייִדיש",
    "yo":    "Yorùbá",
    "zh":    "中文",
    "zh-CN": "简体中文",
    "zh-HK": "繁體中文",
    "zh-TW": "繁體中文",
    "zu":    "isiZulu",
    "aa":    "Afaraf",
    "ab":    "аҧсуа бызшәа, аҧсшәа",
    "ae":    "avesta",
    "ak":    "Akan",
    "an":    "aragonés",
    "as":    "অসমীয়া",
    "av":    "авар мацӀ, магӀарул мацӀ",
    "ay":    "aymar aru",
    "ba":    "башҡорт теле",
    "bh":    "भोजपुरी",
    "bi":    "Bislama",
    "bm":    "bamanankan",
    "bo":    "བོད་ཡིག",
    "br":    "brezhoneg",
    "ce":    "нохчийн мотт",
    "ch":    "Chamoru",
    "cr":    "ᓀᐦᐃᔭᐍᐏᐣ",
    "cu":    "ѩзыкъ словѣньскъ",
    "cv":    "чӑваш чӗлхи",
    "dv":    "ދިވެހި",
    "dz":    "རྫོང་ཁ",
    "ee":    "Eʋegbe",
    "ff":    "Fulfulde, Pulaar, Pular",
    "fj":    "vosa Vakaviti",
    "fo":    "føroyskt",
    "gn":    "Avañe'ẽ",
    "gv":    "Gaelg, Gailck",
    "ho":    "Hiri Motu",
    "hz":    "Otjiherero",
    "ia":    "Interlingua",
    "ie":    "Interlingue",
    "ii":    "ꆈꌠ꒿ Nuosuhxop",
    "ik":    "Iñupiaq, Iñupiatun",
    "io":    "Ido",
    "iu":    "ᐃᓄᒃᑎᑐᑦ",
    "kg":    "Kikongo",
    "ki":    "Gĩkũyũ",
    "kj":    "Kuanyama",
    "kl":    "kalaallisut, kalaallit oqaasii",
    "kr":    "Kanuri",
    "ks":    "कश्मीरी, كشميري‎",
    "kv":    "коми кыв",
    "kw":    "Kernewek",
    "lg":    "Luganda",
    "li":    "Limburgs",
    "ln":    "Lingála",
    "lu":    "Kiluba",
    "mh":    "Kajin M̧ajeļ",
    "na":    "Dorerin Naoero",
    "nd":    "isiNdebele",
    "ng":    "Owambo",
    "nn":    "Norsk Nynorsk",
    "nr":    "isiNdebele",
    "nv":    "Diné bizaad",
    "oc":    "occitan, lenga d'òc",
    "oj":    "ᐊᓂᔑᓈᐯᒧᐎᓐ",
    "om":    "Afaan Oromoo",
    "os":    "ирон æвзаг",
    "pi":    "पालि, पाळि",
    "qu":    "Runa Simi, Kichwa",
    "rm":    "Rumantsch Grischun",
    "rn":    "Ikirundi",
    "sa":    "संस्कृतम्",
    "sc":    "sardu",
    "se":    "Davvisámegiella",
    "sg":    "yângâ tî sängö",
    "ss":    "SiSwati",
    "ti":    "ትግርኛ",
    "tn":    "Setswana",
    "to":    "Faka Tonga",
    "ts":    "Xitsonga",
    "tw":    "Twi",
    "ty":    "Reo Tahiti",
    "ve":    "Tshivenḓa",
    "vo":    "Volapük",
    "wa":    "Walon",
    "wo":    "Wollof",
    "za":    "Saɯ cueŋƅ, Saw cuengh"
}

L10nMV.GetOptionText = function(ietfBcpCode) {
    
    if (ietfBcpCode in L10nMV.IetfBcp47OptionTexts)
        return L10nMV.IetfBcp47OptionTexts[ietfBcpCode];
    
    return L10nMV.IetfBcp47OptionTexts['en'];
}

L10nMV.IetfBcp47OptionTexts = {
    "af":    "Taal",
    "am":    "ቋንቋ",
    "ar":    "لغة",
    "ar-SA": "لغة",
    "az":    "Dil",
    "be":    "Мова",
    "bg":    "Език",
    "bn":    "ভাষা",
    "bn-BD": "ভাষা",
    "bn-IN": "ভাষা",
    "bs":    "Jezik",
    "ca":    "Idioma",
    "co":    "Lingua",
    "cs":    "Jazyk",
    "cs-CZ": "jazyk",
    "cy":    "Iaith",
    "da":    "Sprog",
    "da-DK": "sprog",
    "de":    "Sprache",
    "de-AT": "Sprache",
    "de-CH": "Sprache",
    "de-DE": "Sprache",
    "el":    "Γλώσσα",
    "el-GR": "γλώσσα",
    "en":    "Language",
    "en-AU": "language",
    "en-CA": "language",
    "en-GB": "language",
    "en-IE": "language",
    "en-IN": "language",
    "en-NZ": "language",
    "en-US": "language",
    "en-ZA": "language",
    "eo":    "Lingvo",
    "es":    "Idioma",
    "es-AR": "idioma",
    "es-CL": "idioma",
    "es-CO": "idioma",
    "es-ES": "idioma",
    "es-MX": "idioma",
    "es-US": "idioma",
    "et":    "Keel",
    "eu":    "Hizkuntza",
    "fa":    "زبان",
    "fi":    "Kieli",
    "fi-FI": "kieli",
    "fr":    "Langue",
    "fr-BE": "langue",
    "fr-CA": "langue",
    "fr-CH": "langue",
    "fr-FR": "langue",
    "fy":    "Taal",
    "ga":    "Teanga",
    "gd":    "Cànain",
    "gl":    "Idioma",
    "gu":    "ભાષાની",
    "ha":    "Harshe",
    "he":    "שפה",
    "he-IL": "שפה",
    "hi":    "भाषा",
    "hi-IN": "भाषा",
    "hr":    "Jezik",
    "ht":    "Lang",
    "hu":    "Nyelv",
    "hu-HU": "nyelv",
    "hy":    "Լեզու",
    "id":    "Bahasa",
    "id-ID": "bahasa",
    "ig":    "Language",
    "is":    "Tungumál",
    "it":    "Lingua",
    "it-CH": "lingua",
    "it-IT": "lingua",
    "ja":    "言語",
    "ja-JP": "言語",
    "jv":    "Language",
    "ka":    "Ენა",
    "kk":    "Тіл",
    "km":    "ភាសា",
    "kn":    "ಭಾಷಾ",
    "ko":    "언어",
    "ko-KR": "언어",
    "ku":    "Ziman",
    "ky":    "Тил",
    "la":    "Lingua",
    "lb":    "Sprooch",
    "lo":    "ພາສາ",
    "lt":    "Kalba",
    "lv":    "Valoda",
    "mg":    "Fiteny",
    "mi":    "Reo",
    "mk":    "Јазик",
    "ml":    "ഭാഷ",
    "mn":    "Хэл",
    "mr":    "भाषा",
    "ms":    "Bahasa",
    "mt":    "Lingwa",
    "my":    "ဘာသာစကား",
    "nb":    "Språk",
    "ne":    "भाषा",
    "nl":    "Taal",
    "nl-BE": "taal",
    "nl-NL": "taal",
    "no":    "Språk",
    "no-NO": "språk",
    "ny":    "Language",
    "or":    "ଭାଷା",
    "pa":    "ਭਾਸ਼ਾ",
    "pl":    "Język",
    "pl-PL": "język",
    "ps":    "ژبه",
    "pt":    "Idioma",
    "pt-BR": "idioma",
    "pt-PT": "língua",
    "ro":    "Limbă",
    "ro-RO": "limbă",
    "ru":    "Язык",
    "ru-RU": "язык",
    "rw":    "Ururimi",
    "sd":    "ٻولي",
    "si":    "භාෂාව",
    "sk":    "Jazyk",
    "sk-SK": "jazyk",
    "sl":    "Jezik",
    "sm":    "Gagana",
    "sn":    "Mutauro",
    "so":    "Language",
    "sq":    "Gjuhë",
    "sr":    "Језик",
    "st":    "Puo",
    "su":    "Basa",
    "sv":    "Språk",
    "sv-SE": "språk",
    "sw":    "Lugha",
    "ta":    "மொழி",
    "ta-IN": "மொழி",
    "ta-LK": "மொழி",
    "te":    "భాషా",
    "tg":    "Забон",
    "th":    "ภาษา",
    "th-TH": "ภาษา",
    "tk":    "Dil",
    "tl":    "Wika",
    "tr":    "Dil",
    "tr-TR": "dil",
    "tt":    "Тел",
    "ug":    "تىل",
    "uk":    "Мова",
    "ur":    "زبان",
    "uz":    "Til",
    "vi":    "Ngôn ngữ",
    "xh":    "Language",
    "yi":    "שפּראַך",
    "yo":    "Language",
    "zh":    "语言",
    "zh-CN": "语言",
    "zh-HK": "語言",
    "zh-TW": "語言",
    "zu":    "Ulimi"
}

L10nMV.GetRestartMessage = function(ietfBcpCode) {
    
    if (ietfBcpCode in L10nMV.IetfBcp47RestartMessages)
        return L10nMV.IetfBcp47RestartMessages[ietfBcpCode];
    
    return L10nMV.IetfBcp47RestartMessages['en'];
}

L10nMV.IetfBcp47RestartMessages = {
    "af":    "Die wedstryd sal begin word vir die veranderinge om in werking.",
    "am":    "ጨዋታው ይውሰዳት ውጤት ወደ ለውጦች ምክንያት ዳግም ይሆናል.",
    "ar":    "سيتم إعادة تشغيل اللعبة لتصبح التغييرات سارية المفعول.",
    "ar-SA": "ستتم إعادة تشغيل اللعبة لتطبيق التغييرات.",
    "az":    "Oyun take təsiri dəyişikliklər üçün yenidən olacaq.",
    "be":    "Гульня будзе адноўленая для змены ўступілі ў сілу.",
    "bg":    "Играта ще бъде рестартиран за промените да влязат в сила.",
    "bn":    "খেলা কার্যকর করার পরিবর্তনের জন্য পুনরায় আরম্ভ করা হবে না।",
    "bn-BD": "পরিবর্তনগুলি প্রয়োগ করতে গেমটি পুনরায় চালু হবে।",
    "bn-IN": "परिवर्तन लागू करने के लिए गेम पुनः आरंभ होगा।",
    "bs":    "Igra će biti ponovo pokrenut da bi promjene stupile na snagu.",
    "ca":    "El joc es reiniciarà perquè els canvis tinguin efecte.",
    "co":    "U ghjocu serà capitaliserez di i cambiamenti di effettu sbarcu.",
    "cs":    "Hra bude restartován, aby se změny projevily.",
    "cs-CZ": "Hra bude restartována, aby se změny projevily.",
    "cy":    "Bydd y gêm yn cael ei ailgychwyn i'r newidiadau ddod i rym.",
    "da":    "Spillet vil blive genstartet for at ændringerne kan træde i kraft.",
    "da-DK": "Spillet genstartes for at anvende ændringerne.",
    "de":    "Das Spiel wird für die Änderungen wirksam neu gestartet werden.",
    "de-AT": "Das Spiel wird neu gestartet, um die Änderungen zu übernehmen.",
    "de-CH": "Das Spiel wird neu gestartet, um die Änderungen zu übernehmen.",
    "de-DE": "Das Spiel wird neu gestartet, um die Änderungen zu übernehmen.",
    "el":    "Το παιχνίδι θα ξαναρχίσει τις αλλαγές να τεθούν σε ισχύ.",
    "el-GR": "Το παιχνίδι θα επανεκκινηθεί για να εφαρμοστούν οι αλλαγές.",
    "en":    "The game will be restarted for the changes to take effect.",
    "en-AU": "The game will restart to apply the changes.",
    "en-CA": "The game will restart to apply the changes.",
    "en-GB": "The game will restart to apply the changes.",
    "en-IE": "The game will restart to apply the changes.",
    "en-IN": "The game will restart to apply the changes.",
    "en-NZ": "The game will restart to apply the changes.",
    "en-US": "The game will restart to apply the changes.",
    "en-ZA": "The game will restart to apply the changes.",
    "eo":    "La ludo estos rekomencita por la ŝanĝoj al preni efikon.",
    "es":    "El juego se reiniciará para que los cambios surtan efecto.",
    "es-AR": "El juego se reiniciará para aplicar los cambios.",
    "es-CL": "El juego se reiniciará para aplicar los cambios.",
    "es-CO": "El juego se reiniciará para aplicar los cambios.",
    "es-ES": "El juego se reiniciará para aplicar los cambios.",
    "es-MX": "El juego se reiniciará para aplicar los cambios.",
    "es-US": "El juego se reiniciará para aplicar los cambios.",
    "et":    "Mäng taaskäivitatakse, et muudatused jõustuvad.",
    "eu":    "Partida izango du eragina aldaketak berrabiarazi egingo da.",
    "fa":    "این بازی خواهد شد برای تغییرات اثر را راه اندازی مجدد.",
    "fi":    "Peli käynnistettävä uudelleen, jotta muutokset tulevat voimaan.",
    "fi-FI": "Peli käynnistyy uudelleen muutosten käyttöönottamiseksi.",
    "fr":    "Le jeu sera redémarré pour que les modifications à l'effet de prendre.",
    "fr-BE": "Le jeu va redémarrer pour appliquer les changements.",
    "fr-CA": "Le jeu redémarrera pour appliquer les changements.",
    "fr-CH": "Le jeu va redémarrer pour appliquer les changements.",
    "fr-FR": "Le jeu va redémarrer pour appliquer les changements.",
    "fy":    "De wedstriid wurdt op gong brocht om de feroaringen troch te fieren.",
    "ga":    "Beidh an cluiche a atosú chun na hathruithe ar theacht éifeacht.",
    "gd":    "Thèid an gèam a thòiseachadh as ùr airson na h-atharrachaidhean a ghabhail buaidh.",
    "gl":    "O xogo reiniciarase para que os cambios teñen efecto.",
    "gu":    "રમત પ્રભાવમાં લાવવા માટે ફેરફારો માટે ને પુનઃપ્રારંભ કરવામાં આવશે.",
    "ha":    "A game za a restarted ga canje-canje ya dauki sakamako.",
    "he":    "המשחק יופעל מחדש כדי שהשינויים אפקט לקחת.",
    "he-IL": "המשחק יופעל מחדש כדי להחיל את השינויים.",
    "hi":    "खेल परिवर्तनों को प्रभावी करने के लिए पुन: प्रारंभ कर दिया जाएगा।",
    "hi-IN": "परिवर्तन लागू करने के लिए गेम पुनः आरंभ होगा।",
    "hr":    "Igra će biti nastavljena za promjene stupile na snagu.",
    "ht":    "Pral jwèt la dwe rekòmanse pou fè chanjman yo yo pran efè.",
    "hu":    "A játék újra kell indítani a módosítások érvénybe lépjenek.",
    "hu-HU": "A játék újraindul a változtatások alkalmazásához.",
    "hy":    "Խաղը կվերսկսվի համար փոփոխությունների ուժի մեջ է մտնում:",
    "id":    "Permainan akan restart untuk perubahan efek take.",
    "id-ID": "Game akan dimulai ulang untuk menerapkan perubahan.",
    "ig":    "The egwuregwu ga-restarted maka mgbanwe-mmetụta.",
    "is":    "Leikurinn verður að endurræsa til að breytingarnar taki gildi.",
    "it":    "Il gioco sarà riavviato per le modifiche diventano effettive.",
    "it-CH": "Il gioco verrà riavviato per applicare le modifiche.",
    "it-IT": "Il gioco verrà riavviato per applicare le modifiche.",
    "ja":    "変更を適用するために、ゲームが再開されます。",
    "ja-JP": "変更を適用するためにゲームが再起動します。",
    "jv":    "Game bakal diwiwiti kanggo owah-owahan kanggo efek njupuk.",
    "ka":    "თამაში იქნება გადატვირთვა ცვლილებები ძალაში.",
    "kk":    "ойын күшіне өзгерістер үшін қайта іске асырылатын болады.",
    "km":    "ការប្រកួតនេះនឹងត្រូវបានចាប់ផ្ដើមឡើងវិញសម្រាប់ការផ្លាស់ប្តូរដើម្បីឱ្យមានប្រសិទ្ធិយកបាន។",
    "kn":    "ಆಟದ ಕಾರ್ಯಗತವಾಗುತ್ತವೆ ಬದಲಾವಣೆಗಳು ಮರಳಿ ಆರಂಭಗೊಳ್ಳುತ್ತದೆ.",
    "ko":    "변경사항을 적용하기 위해 게임이 재시작됩니다.",
    "ko-KR": "변경사항을 적용하기 위해 게임이 재시작됩니다.",
    "ku":    "Lîstik dê ji bo guhertinên di bandora take ji nû ve.",
    "ky":    "оюн алып тийиштүү өзгөртүүлөрдү киргизүү керек болот.",
    "la":    "In ludo est restarted et mutationes ad effectum.",
    "lb":    "De Match gëtt fir d'Ännerungen ze huelen Effekt restarted ginn.",
    "lo":    "ເກມຈະໄດ້ຮັບການເລີ່ມຕົ້ນໃຫມ່ສໍາລັບການປ່ຽນແປງທີ່ຈະມີຜົນກະທົບທີ່ເອົາມາ.",
    "lt":    "Žaidimas bus paleista iš įsigaliotų pakeitimai.",
    "lv":    "Spēle būs jāatsāk, lai izmaiņas stātos spēkā.",
    "mg":    "Ny lalao dia ho averina alefa ny fiovana ho nanan-kery.",
    "mi":    "Ka te kēmu kia tīmata anō hoki te huringa ki te pānga tango.",
    "mk":    "Играта ќе се рестартира за да имаат промените ефект.",
    "ml":    "ഗെയിം എടുത്തു പ്രഭാവം മാറ്റങ്ങൾ പുനരാരംഭിക്കും ചെയ്യും.",
    "mn":    "тоглоом авах нөлөө өөрчлөлт нь дахин эхлүүлэх болно.",
    "mr":    "खेळ परिणाम बदल पुन्हा सुरू होईल.",
    "ms":    "permainan akan dimulakan semula untuk perubahan akan berkuat kuasa.",
    "mt":    "Il-logħba se jerġa 'jinbeda għall-bidliet għall jidħlu fis-seħħ.",
    "my":    "အဆိုပါဂိမ်းယူအကျိုးသက်ရောက်မှုမှအပြောင်းအလဲတွေများအတွက်ပြန်လည်စတင်လိမ့်မည်။",
    "nb":    "Spillet vil bli startet på nytt for at endringene skal tre i kraft.",
    "ne":    "खेल ले प्रभाव परिवर्तन लागि पुनः सुरु गरिनेछ।",
    "nl":    "Het spel zal worden opgestart om de wijzigingen te effect.",
    "nl-BE": "De game wordt opnieuw opgestart om de wijzigingen toe te passen.",
    "nl-NL": "De game wordt opnieuw opgestart om de wijzigingen toe te passen.",
    "no":    "Spillet vil bli startet på nytt for at endringene skal tre i kraft.",
    "no-NO": "Spillet starter på nytt for å bruke endringene.",
    "ny":    "masewera adzakhala restarted kwa kusintha kuti zotsatira kudzachitika.",
    "or":    "ଖେଳ ପ୍ରଭାବିତ କୁ ପରିବର୍ତ୍ତନର ପୁନରାରମ୍ଭ ହେବ।",
    "pa":    "ਖੇਡ ਨੂੰ ਤਬਦੀਲੀ ਨੂੰ ਲਾਗੂ ਕਰਨ ਲਈ ਮੁੜ ਚਾਲੂ ਹੋ ਜਾਵੇਗਾ.",
    "pl":    "Gra zostanie wznowiona, aby zmiany efektu podjąć.",
    "pl-PL": "Gra zostanie uruchomiona ponownie, aby zastosować zmiany.",
    "ps":    "دا لوبه به د ته يوسئ اغېز بدلونونه پيل شي.",
    "pt":    "O jogo será reiniciado para que as alterações têm efeito.",
    "pt-BR": "O jogo será reiniciado para aplicar as alterações.",
    "pt-PT": "O jogo será reiniciado para aplicar as alterações.",
    "ro":    "Jocul va fi repornit pentru ca modificările să aibă efect.",
    "ro-RO": "Jocul va reporni pentru a aplica modificările.",
    "ru":    "Игра будет перезапущена для вступления изменений в силу.",
    "ru-RU": "Игра будет перезапущена для вступления изменений в силу.",
    "rw":    "umukino izaba restarted kuko Amahinduka INGARUKA gufata.",
    "sd":    "شڪار اثر وٺڻ جي تبديلين لاء restarted ڪيو ويندو.",
    "si":    "ක්රීඩාව ගනිත් ක්රියාත්මක කිරීමට වෙනස්කම් සඳහා නැවත ආරම්භ කරනු ඇත.",
    "sk":    "Hra sa reštartuje, aby sa zmeny prejavili.",
    "sk-SK": "Hra sa reštartuje, aby sa aplikovali zmeny.",
    "sl":    "Igra se bo ponovno za spremembe začele veljati.",
    "sm":    "a restarted le taaloga mo le suiga i aafiaga ave.",
    "sn":    "Game vachapiwa ritangezve kuchinja kutora maturo.",
    "so":    "Ciyaarta ayaa la bilaabmay doonaa isbedelada in uu saamayn qaadataan.",
    "sq":    "Loja do të riniset për ndryshimet të hyjnë në fuqi.",
    "sr":    "Утакмица ће се поново покренути за промене ступе на снагу.",
    "st":    "papali e tla qadilwe botjha bakeng sa liphetoho ho e le hantle tsa nka.",
    "su":    "Kaulinan bakal restarted keur parobahan pangaruh nyokot.",
    "sv":    "Spelet kommer att startas för att ändringarna ska träda i kraft.",
    "sv-SE": "Spelet kommer att starta om för att tillämpa ändringarna.",
    "sw":    "mchezo kuanzishwa upya ili mabadiliko athari kuchukua.",
    "ta":    "விளையாட்டு செயல்படத்துவங்கும் மாற்றங்கள் மறுதொடக்கம் செய்யப்பட வேண்டும்.",
    "ta-IN": "மாற்றங்களைப் பயன்படுத்த விளையாட்டு மறுதொடக்கம் செய்யப்படும்.",
    "ta-LK": "மாற்றங்களைப் பயன்படுத்த விளையாட்டு மறுதொடக்கம் செய்யப்படும்.",
    "te":    "గేమ్ ప్రభావానికి మార్పులు పునఃప్రారంభించారు చేయబడుతుంది.",
    "tg":    "Дар бозии мешавад, барои ворид намудани тағйирот ба таъсири бигирад шурўъ.",
    "th":    "เกมจะเริ่มต้นใหม่เพื่อให้การเปลี่ยนแปลงมีผลบังคับใช้",
    "th-TH": "เกมจะรีสตาร์ทเพื่อใช้การเปลี่ยนแปลง",
    "tk":    "Oýun take täsiri üýtgeşmeler gaýtadan işlener.",
    "tl":    "Ang laro ay ma-restart para sa mga pagbabago upang magkabisa.",
    "tr":    "Oyun almak etkisine değişiklikler için yeniden başlatılacak.",
    "tr-TR": "Değişiklikleri uygulamak için oyun yeniden başlatılacak.",
    "tt":    "Уен ачылу тәэсир үзгәрешләр өчен янады булачак.",
    "ug":    "ئويۇن ئۆتكۈزۈۋېلىش ئۈنۈمگە ئۆزگىرىش قايتىدىن بولىدۇ.",
    "uk":    "Гра буде перезапущено для зміни вступили в силу.",
    "ur":    "کھیل لے اثر میں تبدیلی کے لئے دوبارہ شروع کیا جائے گا.",
    "uz":    "O'yin take ta'sir o'zgarishlar qayta boshlanadi.",
    "vi":    "Trò chơi sẽ được khởi động lại để thay đổi có hiệu lực thi hành mất.",
    "xh":    "Lo mdlalo uya iqaliswe ukuze notshintsho isiphumo athathe.",
    "yi":    "דער שפּיל וועט זיין ריסטאַרטיד פֿאַר די ענדערונגען צו נעמען ווירקונג.",
    "yo":    "Awọn ere yoo wa ni tun fun awọn ayipada lati Ya awọn ipa.",
    "zh":    "本场比赛将重新启动，以使更改生效。",
    "zh-CN": "游戏将重新启动以应用更改。",
    "zh-HK": "遊戲將重新啟動以套用變更。",
    "zh-TW": "遊戲將重新啟動以套用變更。",
    "zu":    "Lo mdlalo uzobe kabusha ukuze izinguquko kuyoba nomphumela."
}

// Third-party library : deep-merge.js
// Merge a `source` object to a `target` recursively
function merge(target, source) {
    // Iterate through `source` properties and if an `Object` set property to merge of `target` and `source` properties
    for (var key of Object.keys(source))
        if (source.hasOwnProperty(key) && source[key] instanceof Object)
            Object.assign(source[key], merge(target[key], source[key]));
        
        else if (source[key] !== undefined && source[key] !== null)
            target[key] = source[key];
  
    // Join `target` and modified `source`
    //Object.assign(target || {}, source);
    return target;
}

L10nMV.Initialize();

L10nMV.GetResourceString = function(locNumber) {
        
    if (isNaN(locNumber)) {
            
        Graphics.printError("$strings has invalid argument.", "'" + argValue.slice(9, -1) + "' is not a number.");
        SceneManager.stop();
        return null;
    }
    
    locNumber -= 1;
    
    if (locNumber < 0 || locNumber >= L10nMV.ResourceStrings.length) {
        
        Graphics.printError("$strings has invalid argument.", "'" + (locNumber + 1) + "' is out of range.");
        SceneManager.stop();
        return null;
    }
    
    return L10nMV.ResourceStrings[locNumber];
}

window.$strings = L10nMV.GetResourceString;

var Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
    
    for (var argsIndex = 0; argsIndex < args.length; argsIndex++) {
        
        var argValue = args[argsIndex];
        
        if (typeof argValue !== 'string')
            continue;
        
        if (!argValue.toLowerCase().startsWith('$strings(') || !argValue.endsWith(')'))
            continue;
        
        var locNumber = parseInt(argValue.slice(9, -1));
        args[argsIndex] = L10nMV.GetResourceString(locNumber);
    }
    
    Game_Interpreter_pluginCommand.call(this, command, args);
}

L10nMV.SceneManager_goto = SceneManager.goto;
SceneManager.goto = function(sceneClass) {
    
    if (sceneClass !== Scene_Boot && L10nMV.NeedSetup) {
        
        L10nMV.SceneManager_goto.call(this, Scene_LanguageSetup);
        return;
    }
    
    L10nMV.SceneManager_goto.call(this, sceneClass);
}

function Scene_LanguageSetup() {
    this.initialize.apply(this, arguments);
}

//region Scene_LanguageSetup
    Scene_LanguageSetup.prototype = Object.create(Scene_Base.prototype);
    Scene_LanguageSetup.prototype.constructor = Scene_LanguageSetup;
    
    Scene_LanguageSetup.prototype.initialize = function() {
        
        Scene_Base.prototype.initialize.call(this);
        DataManager.setupNewGame();
        this.createWindowLayer();
    }
    
    Scene_LanguageSetup.prototype.createWindowLayer = function() {
        
        Scene_Base.prototype.createWindowLayer.call(this);
        
        this._window = new Window_LanguageSetup();
        this.addWindow(this._window);
        this._window.open();
    }
    
    Scene_LanguageSetup.prototype.isReady = function() {
        return $gameSystem !== null && Scene_Base.prototype.isReady.call(this);
    };
//endregion

function Window_LanguageSetup() {
    this.initialize.apply(this, arguments);
}

//region Window_LanguageSetup
    function Window_LanguageSetup() {
        this.initialize.apply(this, arguments);
    }
    Window_LanguageSetup.prototype = Object.create(Window_Command.prototype);
    Window_LanguageSetup.prototype.constructor = Window_LanguageSetup;
    Window_LanguageSetup.prototype.initialize = function() {
        
        Window_Command.prototype.initialize.call(this, 0, 0);
        this.updatePlacement();
        this.openness = 0;
        
        this.refresh();
        this.updateCursor();
    }
    
    Window_LanguageSetup.prototype.updatePlacement = function() {
        this.width = Graphics.boxWidth / 2;
        if (this.width > 480)
            this.width = 480;
        
        this.x = Graphics.boxWidth / 2  - this.width  / 2;
        this.y = Graphics.boxHeight / 2 - this.height / 2;
    }

    Window_LanguageSetup.prototype.itemHeight = function() {
        return this.lineHeight();
    }
    
    Window_LanguageSetup.prototype.maxItems = function() {
        return 2;
    }

    Window_LanguageSetup.prototype.callOkHandler = function() {
        var symbol = this.currentSymbol();
        if (this.isHandled(symbol)) {
            this.callHandler(symbol);
        } else if (this.isHandled('ok')) {
            Window_Selectable.prototype.callOkHandler.call(this);
        } else {
            this.activate();
        }
    }

    Window_LanguageSetup.prototype.makeCommandList = function() {
        
        var localLanguage = L10nMV.GetDeviceLanguage();
        
        if (!L10nMV.AvailableLanguages.contains(localLanguage))
            localLanguage = L10nMV.GlobalLanguage;
        
        L10nMV.ChangedLanguage = L10nMV.LocalLanguage = localLanguage;
        
        this.addCommand(
            L10nMV.GetOptionText(L10nMV.ChangedLanguage),
            'L10nMV.LocalLanguage',
            true
        );
        
        this.addCommand(
            'OK',
            'confirm'
        );
    }

    Window_LanguageSetup.prototype.statusWidth = function() {
        return 120;
    }
    
    Window_LanguageSetup.prototype.drawItem = function(index) {
        
        if (index >= this._list.length)
            return;
        
        var rect = this.itemRectForText(index);
        var statusWidth = this.statusWidth();
        var titleWidth = rect.width - statusWidth;
        this.resetTextColor();
        this.changePaintOpacity(this.isCommandEnabled(index));
        var symbol = this.commandSymbol(index);
        
        switch (symbol) {
            
            default:
                
                this.drawText('< ' + this.commandName(index), rect.x, rect.y, titleWidth, 'left');
                this.drawText(this.statusText(index) + ' >', titleWidth, rect.y, statusWidth, 'right');
                break;
            
            case 'confirm':
                this.drawText(this.commandName(index), rect.x, rect.y, rect.width, 'center');
                break;
        }
    }
    
    Window_LanguageSetup.prototype.statusText = function(index) {
        
        var symbol = this.commandSymbol(index);
        
        switch (symbol) {
        
            case "L10nMV.LocalLanguage":
                return L10nMV.IetfBcp47Names[L10nMV.ChangedLanguage];
        }
        
        return '';
    }
    
    Window_LanguageSetup.prototype.cursorLeft = function(wrap) {
        var index = this.index();
        var symbol = this.commandSymbol(index);
        
        switch (symbol) {
            
            case "L10nMV.LocalLanguage":
                L10nMV.ChangeToPreviousLanguage();
                this._list[index].name = L10nMV.GetOptionText(L10nMV.ChangedLanguage);
                this.redrawItem(index);
                break;
        }
    }
    
    Window_LanguageSetup.prototype.cursorRight = function(wrap) {
        var index = this.index();
        var symbol = this.commandSymbol(index);
        
        switch (symbol) {
            
            case "L10nMV.LocalLanguage":
                L10nMV.ChangeToNextLanguage();
                this._list[index].name = L10nMV.GetOptionText(L10nMV.ChangedLanguage);
                this.redrawItem(index);
                break;
        }
    }

    Window_LanguageSetup.prototype.processOk = function() {
        
        var index = this.index();
        var symbol = this.commandSymbol(index);
        
        switch (symbol) {
        
            case "L10nMV.LocalLanguage":
                
                L10nMV.ChangeToNextLanguage();
                this._list[index].name = L10nMV.GetOptionText(L10nMV.ChangedLanguage);
                this.redrawItem(index);
                break;
            
            case 'confirm':
                
                ConfigManager.save();
                SoundManager.playOk();
                this.close();
                
                setTimeout(function() {
                    
                    window.location.reload();
                }, 2000);
                
                break;
        }
    }
    
//endregion