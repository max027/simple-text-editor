import { originalSettings } from "../import/settings";
import render from "../import/render.js";
import settings from "../import/settings";
import server from "../server/server";
import dataParser from "./dataParser";
import settingsTemplate from "../templates/settings";

export default function settingHandler() {
  $("._nb-setting").click(function() {
    render(settingsTemplate);
    configurationSettingSetup(true);
    settingBoth();
    filter();
    $(document).click(function(e) {
      !$(e.target).is(".filter-input, .fa-cheverone") &&
        $(".__fontField").removeClass("active");
    });
    $(".boxtoggle").click(function(event) {
      var value = $(event.target).text();
      $(this).prevAll("input").val(value);
      server(dataParser(
        {[$(this).prevAll("input").attr("name")]: value}
      ));
    });
    $(".fa-cheverone").click(function() {
      $(".fa-cheverone")
        .not(this).parent().removeClass("active");
      $(this).parent().toggleClass("active");
    });
    $(".__setting-optinner").on("transitionend", function(e) {
      $(this).filter(e.target).parent().toggleClass("active");
    });
  });
}

function settingBoth() {
  // Handle wordWrap and colorThme settings
  $("._2SDW-both, #wordWrap").on("change", function() {
    server(dataParser(
      {[this.name]: this.checked ? this.value : 'off'}
    ));
  });
}

const backups = {};

function filter() {
  $(".filter-input").on("focus", function() {
    if (backups.elem!==this) {
      backups.matches=undefined;
    }
    this.select();
    if (!backups.elem || backups.elem!==this) {
      backups.elem=this;
      backups.text=this.value.trim();
    }
  });
  $(".filter-input").on("blur", function() {
    backups.textLength=undefined;
    $(this).val(backups.matches || backups.text);
    if ($(this).val()!==backups.text) {
      server(dataParser({
        [this.name]: backups.matches || backups.text
      }));
    }
  });
  $(".filter-input").on("input", function() {
    configurationSettingSetup.filter(this, $(this).next().next());
  });
}

function configurationSettingSetup(auto_call) {
  return new configurationSettingSetup.prototype.init(auto_call);
}

configurationSettingSetup.prototype = {
  constructor: configurationSettingSetup,
  init: function(auto_call) {
    auto_call && (
      configurationSettingSetup.App_theme(),
      configurationSettingSetup.Font(),
      configurationSettingSetup.Word_wrap()
    );
  }
};

$.extend(configurationSettingSetup, {
  App_theme: function() {
    $("#" + originalSettings["editor.colorTheme"]).attr("checked", true);
    $(".settings-content i").each(function(_i, elem) {
      var style = $(elem).attr("style");
      var css = style.replace(/dark|light/, $("body").attr("data-color-theme"));
      $(elem).attr("style", css);
    });
  },
  Font: function() {
    const copy = {}, styles = {};
    $.each(originalSettings, function(setting, value) {
      copy[setting]=value;
    });

    $.extend(styles, {
      mediumOblique: 'Medium Oblique',
      boldItalic: 'Bold Italic',
      medium: 'Medium',
      normal: 'Regular',
      italic: 'Italic',
      bold: 'Bold',
      oblique: 'Oblique',
      mediumItalic: 'Medium Italic',
      boldOblique: 'Bold Oblique'
    });

    var fontWeight = copy["editor.fontWeight"];
    var fontStyle = copy["editor.fontStyle"];
  
    var style = fontWeight + "-" + fontStyle;
    style = (fontStyle=='normal' ||
      fontWeight==='regular' && fontStyle!=='normal') ? style.replace('regular-', '') : style;

    this.fontSetup(styles);
    $("#font_style").val(styles[$.camelCase(style)]);
    $("#fsize").val(copy["editor.fontSize"]);
    $("#family").val(copy["editor.fontFamily"]);
  },
  Word_wrap: function() {
    var checked = originalSettings["editor.wordWrap"]=='on' ? true : false;
    $("#switch").length && ($("#switch")[0].checked=checked);
    $("#wordWrap").length && ($("#wordWrap")[0].checked=checked);
  },
  filter: function(input, lists) {
    var matches = [];
    var searchElem = $(lists).find("ul li");
    var curText = $(input).val();
    var text = curText.trim().toLowerCase();

    this.search(searchElem, text, matches);
    backups.matches = !!matches.length && text;

    if (matches.length &&
      (backups.textLength < curText.length)) {
      backups.matches=matches[0];
      $(input).val(matches[0]);
      input.setSelectionRange(curText.length, matches[0].length);
      input.focus();
    }

    backups.textLength = (curText || '').length;
  },
  search: function(searchElem, text, seed) {
    var matches = [],
      i = 0, currentText, list;
    while((list = searchElem[i])) {
      i++;
      currentText = $(list).text().toLowerCase();
      if (text.length===1) {
        if (text[0]===currentText[0]) {
          matches.push(list.textContent);
          break;
        }
        continue;
      }
      else if (currentText.indexOf(text) > -1) {
        matches.push(list.textContent);
        break;
      }
    }
    matches.length && [].push.apply(seed, matches);
  },
  fontSetup: function(style_source) {
    var styleList = document.createElement("ul");
    var sizeList = document.createElement("ul");
    var fontsList = document.createElement("ul");

    $.each(style_source, function(style, value) {
      $(styleList)
        .append(`<li data-filter="${style.toLowerCase()}" data-value="${style}">${value}</li>`);
    });

    for(var i=8; i <= 30; i++) {
      $(sizeList).append(`<li data-filter="${i}" data-value="${i}">${i}</li>`);
    }

    $.each(settings.fontSetup, function(Font, Family) {
      $(fontsList)
        .append(`<li data-filter="${Font.toLowerCase()}" data-value="${Family}">${Font}</li>`);
    });

    $(".---font-family").empty().append(fontsList);
    $(".----font-size").empty().append(sizeList);
    $(".----font-style").empty().append(styleList);
  }
});

configurationSettingSetup.prototype.init.prototype = configurationSettingSetup.prototype;
export { configurationSettingSetup, settingBoth };