/*:
 * @plugindesc This plugin helps making language pack for L10nMV plugin.
 * Version : Development version
 * Commit hash : -
 * @author Creta Park (https://creft.me/cretapark)
 *
 * @help
 * 
 * |                                                                  |
 * |                  ===== L10nMVEditor.js =====                     |
 * |                                                                  |
 * | This plugin helps making new language pack for L10nMV plugin.    |
 * | Created by Creta Park (https://creft.me/cretapark)               |
 * | License : MIT                                                    |
 * | GitHub page : https://github.com/Creta5164/L10nMV.js             |
 * | Recommanded MV version : 1.6.2^                                  |
 * |                                                                  |
 * | Step to exporting language pack template :                       |
 * | 0. Finish your game after completing the inspection of your game |
 * |    (THIS IS IMPORTANT FOR QUALITY OF YOUR GAME)                  |
 * | 1. Enable this plugin into your project. (you've already does!)  |
 * | 2. Start test play.                                              |
 * | 3. Open developer console. (press F12)                           |
 * | 4. In `Console` tab, type `L10nMVEditor.CreateTemplate()`.       |
 * | 5. When it's done, `lang/exported` directory is created in your  |
 * |    project. This is everything of your project's text data.      |
 * | 6. Change `exported` directory to localization target country    |
 * |    code. (ISO 639-1)                                             |
 * |    i.e. : ko, en, jp, ca, ru...                                  |
 * | 7. Open the files in the folder with a text editor and edit the  |
 * |    text according to localize them what do you want.             |
 * | 8. If you want your game allow translate from unofficial,        |
 * |    you leave exported language pack in your public release build |
 * |    for make help them translate easy way your game.              |
 * |                                                                  |
 * | Note. If you need make font atlas (image based font set),        |
 * |       Open developer console as same step 3, and type            |
 * |       `L10nMVEditor.CreateAllUsedGlyphFromPack("iso682-1 code")` |
 * |       Then L10nMVEditor generates all text of language pack.     |
 * |       For example :                                              |
 * |       `L10nMVEditor.CreateAllUsedGlyphFromPack("en")`            |
 * |       -> exports texts to english(en) language pack.             |
 * |                                                                  |
 * |       `L10nMVEditor.CreateAllUsedGlyphFromPack("ja")`            |
 * |       -> exports texts to japanese(ja) language pack.            |
 * |                                                                  |
 * 
 * @param whitelist-plugins
 * @text Whitelisted plugins
 * @type text[]
 * @desc Add plugins name you want to replace plugins parameters.
 */

function L10nMVEditor() {
    throw new Error("This is a static class.");
}

alert(
    "You activated L10nMVEditor.js plugin in this game.\n" + 
    "If you testing in your game for production side, must exclude this editor-side plugin later.\n\n" +
    "Plugin manual are in plugin description."
);

L10nMVEditor.VERSION     = "Development version";
L10nMVEditor.COMMIT_HASH = "-";

L10nMVEditor.DATA_DIR     = "./data";
L10nMVEditor.LANG_DIR     = "./lang";
L10nMVEditor.DEFAULT      = "/exported";
L10nMVEditor.EXPORT_PATH  = L10nMVEditor.LANG_DIR + L10nMVEditor.DEFAULT;
L10nMVEditor.REG_MAP_FILE = /Map\d{3}\.json/;

L10nMVEditor.IsPlayTest = Utils.isOptionValid('test');
L10nMVEditor.MapData = null;
L10nMVEditor.CommonEventData = null;

L10nMVEditor.ExportedObjects = null;
    
L10nMVEditor.IOFile = require('fs');

L10nMVEditor.EventCode = {
    "Dialog": 401,
    "Choice": 102,
    "ChoiceWhen": 402,
};

L10nMVEditor.CodeEvent = {
    401: "Dialog",
    102: "Choice",
    402: "ChoiceWhen"
};

L10nMVEditor.CreateTemplate = function() {
    
    console.info(
        " 🌐🔧 L10nMVEditor.js\n" + 
        "    Version : " + this.VERSION + "\n" + 
        "Commit hash : " + this.COMMIT_HASH
    );
    console.info(" 🌐🔧 L10nMVEditor : Starting export project string data...");
    console.info("                    : This may take a few minutes.");
    console.info("                    : String json files will be stored into './lang/exported'.");
    
    if (!L10nMVEditor.IsPlayTest) {
        
        console.error("❗ L10nMVEditor : Current session is production mode.");
        return;
    }
    
    L10nMVEditor.MapData = [];
    L10nMVEditor.CommonEventData = [];
    
    try {
        
        if (!L10nMVEditor.IOFile.existsSync(L10nMVEditor.LANG_DIR))
            L10nMVEditor.IOFile.mkdirSync(L10nMVEditor.LANG_DIR);
        
        if (L10nMVEditor.IOFile.existsSync(L10nMVEditor.EXPORT_PATH)) {
            
            L10nMVEditor.RemoveDirectory(L10nMVEditor.EXPORT_PATH);
            
            var delay = 10000;
            while (delay-- > 0);
        }
        
        L10nMVEditor.IOFile.mkdirSync(L10nMVEditor.EXPORT_PATH);
        
        L10nMVEditor.ExportedObjects = {};
        L10nMVEditor.CreateTemplateSystemString(L10nMVEditor.ExportedObjects);
        L10nMVEditor.CreateTemplateCommonEventsString(L10nMVEditor.ExportedObjects);
        L10nMVEditor.CreateTemplatePluginParametersString(L10nMVEditor.ExportedObjects);
        L10nMVEditor.CreateTemplateMapEventsString(L10nMVEditor.ExportedObjects);
        
        L10nMVEditor.CreatePeekerFile();
        L10nMVEditor.CreateUnofficialTransitionGuideFile();
        
    } catch (e) {
        
        console.error("❗ L10nMVEditor : An exception has occured while creating template files.");
        (console.error || console.log).call(console, e.stack || e);
        return;
    }
    
    console.info(" 🌐🔧 L10nMVEditor : Creating template language pack is successfully created.");
    console.info("                    : String json files will be stored into './lang/exported'.");
};
    
L10nMVEditor.RemoveDirectory = function(path) {
    
    var files = L10nMVEditor.IOFile.readdirSync(path);
    var fullPath;
    
    for (var filePath of files) {
        
        fullPath = path + "/" + filePath;
        if (L10nMVEditor.IOFile.lstatSync(fullPath).isDirectory())
            
            L10nMVEditor.RemoveDirectory(fullPath);
            
        else
            L10nMVEditor.IOFile.unlinkSync(fullPath);
    }
    
    var delay = 10000;
    while (delay-- > 0);
    
    L10nMVEditor.IOFile.rmdirSync(path);
};

L10nMVEditor.CreateTemplateSystemString = function(exportData) {
    
    var data, strings, json;
    for (var pair of L10nMVEditor.SystemDataPair) {
        
        if (!L10nMVEditor.IOFile.existsSync(L10nMVEditor.DATA_DIR + '/' + pair.src)) {
            
            console.warn("🛑 L10nMVEditor : 'data/" + pair.src + "' not found.");
            return;
        }
        
        data = L10nMVEditor.IOFile.readFileSync(L10nMVEditor.DATA_DIR + '/' + pair.src);
        data = JSON.parse(data);
        
        if (!data)
            continue;
        
        strings = L10nMVEditor.CopyStringsFromObject(data);
        if (!strings)
            continue;
        
        exportData[pair.src] = strings;
        json = JSON.stringify(strings, null, 4);
        
        L10nMVEditor.IOFile.writeFileSync(
            L10nMVEditor.EXPORT_PATH + '/' + pair.src,
            json
        );
        
        console.info(
            "✅ L10nMVEditor : System strings '" +
            pair.src.substring(0, pair.src.length - 5) +
            "' successfully exported."
        );
        
    }
};

L10nMVEditor.CreateTemplateCommonEventsString = function(exportData) {
    
    var root = {};
    var data, index = 0;
    
    if (!L10nMVEditor.IOFile.existsSync(L10nMVEditor.DATA_DIR + "/CommonEvents.json")) {
        
        console.warn("🛑 L10nMVEditor : Common events not found.");
        return;
    }
    
    var json = L10nMVEditor.IOFile.readFileSync(L10nMVEditor.DATA_DIR + "/CommonEvents.json");
    json = JSON.parse(json);
    
    for (var commonEvent of json) {
        
        if (!commonEvent || !commonEvent.list || commonEvent.list.length === 0) {
            
            index++;
            continue;
        }
        
        data = L10nMVEditor.ExtractFromEventList(commonEvent.list);
        
        if (Object.keys(data).length === 0) {
            
            index++;
            continue;
        }
        
        root[index] = data;
        index++;
    }
    
    exportData['CommonEvents.json'] = root;
    var json = JSON.stringify(root, null, 4);
    
    L10nMVEditor.IOFile.writeFileSync(
        L10nMVEditor.EXPORT_PATH + "/CommonEvents.json",
        json
    );
    
    console.info("✅ L10nMVEditor : Common events successfully exported.");
};

L10nMVEditor.CreateTemplatePluginParametersString = function(exportData) {
    
    var pluginOption = PluginManager.parameters("L10nMVEditor");
    
    var ignoreList;
    try {
        
        ignoreList = JSON.parse(pluginOption["whitelist-plugins"]);
        
    } catch (e) {
        
        ignoreList = null;
    }
    
    if (!ignoreList) {
        
        console.warn("🛑 L10nMVEditor : Plugins whitelist is empty.");
        return;
    }
    
    if (ignoreList.length === 1 &&
        ignoreList[0] === '') {
    
        console.warn("🛑 L10nMVEditor : Plugins whitelist is empty.");
        return;
    }
    
    var plugins = {};
    var plugin;
    
    var firstChar, lastChar;
    
    for (var i = 0; i < $plugins.length; i++) {
        
        plugin = $plugins[i];
        
        if (!plugin.status || !ignoreList.includes(plugin.name))
            continue;
        
        plugins[plugin.name] = L10nMVEditor.CopyStringsFromObject(plugin.parameters);
        
        if (!plugins[plugin.name]) {
            
            delete plugins[plugin.name];
            continue;
        }
        
        for (var key in plugins[plugin.name]) {
            
            value = plugins[plugin.name][key];
            
            firstChar = value.charAt(0);
            lastChar  = value.charAt(value.length - 1);
            
            if ((firstChar === '{' && lastChar === '}') ||
                (firstChar === '[' && lastChar === ']') ||
                (firstChar === '"' && lastChar === '"'))
                plugins[plugin.name][key] = L10nMVEditor.JSONparseRecursively(value);
        }
    }
    
    if (Object.keys(plugins).length === 0) {
        
        console.warn("🛑 L10nMVEditor : Plugins are empty data or not contains whitelist.");
        return;
    }
    
    exportData['Plugins.json'] = plugins;
    var json = JSON.stringify(plugins, null, 4);
    
    L10nMVEditor.IOFile.writeFileSync(
        L10nMVEditor.EXPORT_PATH + "/Plugins.json",
        json
    );
        
    console.info("✅ L10nMVEditor : Plugins successfully exported.");
};

L10nMVEditor.CreatePeekerFile = function() {
    
    L10nMVEditor.IOFile.writeFileSync(
        L10nMVEditor.EXPORT_PATH + "/Info.json",
        JSON.stringify({
            version: L10nMVEditor.VERSION,
            hash: L10nMVEditor.COMMIT_HASH
        })
    );
};

L10nMVEditor.CreateUnofficialTransitionGuideFile = function() {
    
    if (PluginManager.parameters("L10nMV")["ignore-decrypt-language-pack"] !== "true") {
        
        console.warn("🛑 L10nMVEditor : Ignored creating Readme.txt because L10nMV parameter 'Ignore decrypt language pack files' is disabled.")
        return;
    }
    
    L10nMVEditor.IOFile.writeFileSync(
        L10nMVEditor.LANG_DIR + "/README.txt",
        "Hi, there.\n" +
        "I'm Creta Park, creator of L10nMV.js.\n" +
        "\n" +
        "This game is using L10nMV.js, it's featuring able text localization and replacing audio and images without modifying game files!\n" +
        "\n" +
        "Of course, you can also make your own localized language pack.\n" +
        "If not, there was no reason to open this file... right?\n" +
        "\n" +
        "You can read more guide at L10nMV.js's GitHub page : \n" +
        "https://github.com/Creta5164/L10nMV.js"
    );
};

L10nMVEditor.JSONparseRecursively = function(string) {
    
    try {
        
        var result = JSON.parse(string);
        
    } catch (e) {
        
        return string;
    }
    
    if (typeof result !== 'object')
        return result;
    
    var value, firstChar, lastChar;
    
    for (var key in result) {
        
        value = result[key];
        firstChar = value.charAt(0);
        lastChar  = value.charAt(value.length - 1);
        
        if ((firstChar === '{' && lastChar === '}') ||
            (firstChar === '[' && lastChar === ']') ||
            (firstChar === '"' && lastChar === '"'))
            result[key] = L10nMVEditor.JSONparseRecursively(value);
    }
    
    return result;
};

L10nMVEditor.CreateTemplateMapEventsString = function(exportData) {
    
    var files = L10nMVEditor.IOFile.readdirSync(L10nMVEditor.DATA_DIR)
        .filter((path) => L10nMVEditor.REG_MAP_FILE.test(path));
    
    var json, events;
    
    var mapData, eventStrings, pageStrings;
    var eventIndex, pageIndex;
    var allPageIsNull;
    
    for (var path of files) {
        
        json = L10nMVEditor.IOFile.readFileSync(L10nMVEditor.DATA_DIR + '/' + path);
        
        try {
            json = JSON.parse(json);
            
            if (!json.events || json.events.length === 0) {
                
                console.warn("🛑 L10nMVEditor : '" + path + "' hasn't any events.");
                continue;
            }
            
        } catch (e) {
            
            console.warn("🛑 L10nMVEditor : Failed to load map data : '" + path + "'");
            continue;
        }
        
        mapData = {};
        eventIndex = 0;
        events = json.events;
        
        for (var event of events) {
            
            if (!event) {
                
                eventIndex++;
                continue;
            }
            
            eventStrings = {};
            pageIndex = 0;
            allPageIsNull = true;
            
            for (var page of event.pages) {
                
                pageStrings = L10nMVEditor.ExtractFromEventList(page.list);
                
                if (pageStrings.length !== 0) {
                    
                    eventStrings[pageIndex] = pageStrings;
                    allPageIsNull = false;
                }
                
                pageIndex++;
            }
            
            if (!allPageIsNull && eventStrings.length !== 0)
                mapData[eventIndex] = eventStrings;
            
            eventIndex++;
        }
        
        if (Object.keys(mapData).length === 0) {
            
            console.warn("🛑 L10nMVEditor : '" + path + "' hasn't any events.");
            continue;
        }
        
        exportData[path] = mapData;
        json = JSON.stringify(mapData, null, 4);
        
        L10nMVEditor.IOFile.writeFileSync(
            L10nMVEditor.EXPORT_PATH + '/' + path,
            json
        );
        
        console.info(
            "✅ L10nMVEditor : '" +
            path +
            "' data successfully exported."
        );
    }
};

L10nMVEditor.CreateAllUsedGlyphFromPack = function(languageTarget) {
    
    var path = L10nMVEditor.LANG_DIR + '/' + languageTarget;
    if (!L10nMVEditor.IOFile.existsSync(path))
        console.warn("🛑 L10nMVEditor : '" + languageTarget + "' language pack doesn't exist.");
    
    var files = L10nMVEditor.IOFile.readdirSync(path);
    var fullPath;
    
    var json;
    
    //ASCII default
    var result = ' !\"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~…';
    
    if (L10nMV && L10nMV.AvailableLanguages) {
        
        result += L10nMV.ISO639_1Names[L10nMV.GlobalLanguage];
        result += L10nMV.GetOptionText(L10nMV.GlobalLanguage);
        result += L10nMV.GetRestartMessage(L10nMV.GlobalLanguage);
        
        for (var lang of L10nMV.AvailableLanguages) {
            
            if (lang === L10nMV.GlobalLanguage)
                continue;
            
            if (lang in L10nMV.ISO639_1Names)
                result += L10nMV.ISO639_1Names[lang];
            
            if (lang in L10nMV.ISO639_1OptionTexts)
                result += L10nMV.ISO639_1OptionTexts[lang];
            
            if (lang in L10nMV.ISO639_1RestartMessages)
                result += L10nMV.ISO639_1RestartMessages[lang];
        }
    }
    
    for (var filename of files) {
        
        if (!filename.endsWith('.json') || filename === 'Info.json')
            continue;
        
        fullPath = path + '/' + filename;
        
        try {
            
            json = L10nMVEditor.IOFile.readFileSync(fullPath);
            json = JSON.parse(json);
            
        } catch (e) {
            
            console.warn("🛑 L10nMVEditor : Failed to open/parse '" + filename + "' file, skipping...");
            continue;
        }
        
        result += L10nMVEditor.MergeAllStrings(json);
        console.info(
            "✅ L10nMVEditor : Finished to collect '" +
            filename +
            "' content text."
        );
    }
    
    
    L10nMVEditor.IOFile.writeFileSync(
        path + '/TextCharacters.txt',
        result
    );
    
    console.info(
        "✅ L10nMVEditor : All characters of '" +
        languageTarget +
        "' is successfully exported in same directory. (TextCharacters.txt)"
    );
};

L10nMVEditor.MergeAllStrings = function(json) {
    
    var result = '';
    for (var key in json) {
        
        if (!json[key])
            continue;
        
        switch (typeof json[key]) {
            
            case 'object':
                result += L10nMVEditor.MergeAllStrings(json[key]);
                break;
            
            default:
                result += json[key];
                break;
        }
    }
    
    return result;
};

L10nMVEditor.ExtractFromEventList = function(eventList) {
    
    if (!eventList || !Array.isArray(eventList) || eventList.length === 0)
        return null;
    
    var result = [];
    var index = 0;
    var textData;
    
    for (var event of eventList) {
        
        textData = null;
        
        switch (event.code) {
            
            default: break;
            
            case L10nMVEditor.EventCode.Dialog:
            case L10nMVEditor.EventCode.Choice:
                
                textData = event.parameters[0];
                break;
        }
        
        if (!textData)
            continue;
        
        result[index++] = textData;
    }
    
    return result;
};

L10nMVEditor.CopyStringsFromObject = function(target) {
    
    if (!target)
        return null;
    
    var result;
    var isArray = Array.isArray(target);
    
    if (isArray)
        result = [];
    
    else if (typeof target === "object")
        result = {};
    
    else
        return target;
    
    for (var key in target) {
        
        if (L10nMVEditor.IsFilteredKeyword(key) || !L10nMVEditor.IsValidValue(target[key]))
            continue;
        
        if (typeof target[key] === "object") {
            
            result[key] = L10nMVEditor.CopyStringsFromObject(target[key]);
            
            if (!result[key])
                delete result[key];
            
            else if (Array.isArray(result[key]) && result[key].length === 0)
                delete result[key];
            
            else if (Object.keys(result[key]).length === 0)
                delete result[key];
        }
        
        else {
            
            if (!target[key])
                continue;
            
            result[key] = target[key];
        }
    }
    
    if (isArray && result.length === 0)
        return null;
    
    else if (Object.keys(result).length === 0)
        return null;
    
    return result;
};

L10nMVEditor.IsFilteredKeyword = function(key) {
    
    switch (key) {
        
        default: return false;
        
        //Common keywords
        case "damage":
        case "bgm":
        case "bgs":
        case "me":
        case "se":
        
        //Actors
        case "characterName":
        
        //Map
        
        //Animation
        case "animation1Name": case "animation2Name":
        
        //System
        case "battleBgm":
        case "defeatMe":
        case "gameoverMe":
        case "titleBgm":
        case "title1Name":
        case "victoryMe":
        case "locale":
        case "sounds":
        case "switches":
        case "variables":
        case "battleback1Name": case "battleback2Name":
        case "battlerName":
        case "encryptionKey":
            return true;
    }
};

L10nMVEditor.IsValidValue = function(value) {
    
    if (!value)
        return false;
    
    var type = typeof value;
    
    return type === "string" || type === "object";
};

L10nMVEditor.SystemDataPair =  [
    { name: '$dataActors',       src: 'Actors.json'       },
    { name: '$dataClasses',      src: 'Classes.json'      },
    { name: '$dataSkills',       src: 'Skills.json'       },
    { name: '$dataItems',        src: 'Items.json'        },
    { name: '$dataWeapons',      src: 'Weapons.json'      },
    { name: '$dataArmors',       src: 'Armors.json'       },
    { name: '$dataEnemies',      src: 'Enemies.json'      },
    { name: '$dataTroops',       src: 'Troops.json'       },
    { name: '$dataStates',       src: 'States.json'       },
    { name: '$dataAnimations',   src: 'Animations.json'   },
    //{ name: '$dataTilesets',     src: 'Tilesets.json'     },
    //{ name: '$dataCommonEvents', src: 'CommonEvents.json' },
    { name: '$dataSystem',       src: 'System.json'       }
    //{ name: '$dataMapInfos',     src: 'MapInfos.json'     }
];