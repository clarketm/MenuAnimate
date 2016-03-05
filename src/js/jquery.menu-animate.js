/*!
 * MenuAnimate.scss v1.1.0 (http://www.clarketravis.com)
 * Copyright 2015 Travis Clarke
 * Licensed under the MIT license
 */
;(function(window, $, undefined) {

    $.fn.menuAnimate = function(icon) {

        return this.each(function() {
            $(this)
                .addClass($.fn.menuAnimate.containerClass)
                .addClass(icon || $.fn.menuAnimate.icon)
                .append($.fn.menuAnimate.template)
                .on("click", function(e) {
                    $(this).toggleClass($.fn.menuAnimate.toggledClass);
                    return false;
                });
        });

    };

    // Define the plugin default properties.
    $.fn.menuAnimate.icon = "line";
    $.fn.menuAnimate.iconClass = "icon";
    $.fn.menuAnimate.iconTag = "div";

    $.fn.menuAnimate.containerClass = "navicon";
    $.fn.menuAnimate.toggledClass = "open";

    $.fn.menuAnimate.template = $("<"+$.fn.menuAnimate.iconTag+">", {class: $.fn.menuAnimate.iconClass });

}(window, jQuery));