/*!
 * MenuAnimate.scss v1.1.2 (https://www.travismclarke.com)
 * Copyright 2016 Travis Clarke
 * Licensed under the MIT license
 */
;(function(window, $, undefined) {

    $.fn.menuAnimate = function(icon) {

        return this.each(function() {
            $(this)
                .addClass($.fn.menuAnimate.containerClass)
                .addClass(icon || $.fn.menuAnimate.icon)
                .append($.fn.menuAnimate.template.clone())
                .on("click", function(e) {
                    $(this).toggleClass($.fn.menuAnimate.toggledClass);
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