/*:
 * @plugindesc This plugin provides localization feature to RPG Maker MV.
 * Version : Development version
 * Commit hash : -
 * @author Creta Park (https://creft.me/cretapark)
 *
 * @help
 * 
 * |                                                                  |
 * |              ===== L10nMV_YanflyExtension.js =====               |
 * |                                                                  |
 * | This plugin supports L10nMV to use YEP_OptionsCore plugin.       |
 * | Created by Creta Park (https://creft.me/cretapark)               |
 * | License : MIT                                                    |
 * | GitHub page : https://github.com/Creta5164/L10nMV.js             |
 * | Recommanded MV version : 1.6.2^                                  |
 * |                                                                  |
 * | - How to setup ------------------------------------------------- |
 * | 1. Add this plugin right after L10nMV in plugins list like this. |
 * | ---------------------------------------------------------------- |
 * | L10nMV                 | ON       | ...                          |
 * | L10nMV_YanflyExtension | ON       | ...                          |
 * | L10nMVEditor           | OFF      | ...                          |
 * | ...                    |          |                              |
 * | YEP_OptionsCore        | ON       | ...                          |
 * | ...                    |          |                              |
 * | ---------------------------------------------------------------- |
 * | 2. Also add whitelist this plugin to L10nMV and L10nMVEditor.    |
 * | 3. Open YEP_OptionsCore plugin settings.                         |
 * | 4. Goto Options Categories you want to add L10nMV option.        |
 * | 5. Create new option.                                            |
 * | 6. Setting up like below :                                       |
 * | ---------------------------------------------------------------- |
 * | Name : Language                                                  |
 * | [-] ---Settings---                                               |
 * | Help Description : (Write description in project's language)     |
 * |           Symbol : L10nMV.LocalLanguage                          |
 * |        Show/Hide : show = true;                                  |
 * |           Enable : enabled = true;                               |
 * |              Ext : ext = 0;                                      |
 * | [-] ---Functions---                                              |
 * |    Make Option Code : L10nMV.OptionWindow_CreateCommand(this);   |
 * |    Draw Option Code : L10nMV.YanflyExt_DrawContent(this, index); |
 * |     Process OK Code : L10nMV.OptionWindow_CursorRight(this);     |
 * |   Cursor Right Code : L10nMV.OptionWindow_CursorRight(this);     |
 * |    Cursor Left Code : L10nMV.OptionWindow_CursorLeft(this);      |
 * | Default Config Code :                                            |
 * |    Save Config Code : L10nMV.CreateConfigData(config);           |
 * |    Load Config Code : L10nMV.ApplyToConfig(config);              |
 * | ---------------------------------------------------------------- |
 * |                                                                  |
 */

if (typeof(L10nMV) === undefined)
    throw "Dependency 'L10nMV' not found.";

(function() {
    
    L10nMV.YanflyExt_DrawContent = function(context, index) {
        
        var rect = context.itemRectForText(index);

        context.resetTextColor();
        context.changePaintOpacity(L10nMV.OptionWindow_IsEnabled());

        context.drawTextEx(
            L10nMV.GetOptionText(L10nMV.ChangedLanguage),
            rect.x,
            rect.y
        );

        context.drawText(
            L10nMV.Iso639_1Names[L10nMV.ChangedLanguage],
            rect.width - context.statusWidth(),
            rect.y,
            rect.width / 2,
            'center'
        );
    }
    
})();