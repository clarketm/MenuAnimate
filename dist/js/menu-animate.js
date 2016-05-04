/*!
 * MenuAnimate.scss v1.1.2 (http://www.clarketravis.com)
 * Copyright 2015 Travis Clarke
 * Licensed under the MIT license
 */
var MenuAnimate = (function (window, undefined) {
    'use strict';

    //// DEFAULTS
    var _container = "navicon",
        _icon = "icon",
        _type = "line",

    //// INIT
        init = function () {
            var pattern = /^[#.]/,
                type = _type,
                selector = "." + _container;

            for (var i = 0; i < arguments.length; i++) {
                pattern.test(arguments[i]) ? selector = arguments[i] : type = arguments[i];
            }
            createNodes(type, selector)
        },

    //// CREATE NODES
        createNodes = function (type, selector) {
            var el = window.document.querySelectorAll(selector),
                template = '<div class="' + _icon + '"></div>';

            for (var i = 0; i < el.length; i++) {
                el[i].className = _container + " " + type;
                el[i].insertAdjacentHTML('beforeend', template);
                addHandler(el[i]);
            }
        },

    //// EVENT HANDLER
        addHandler = function (el) {
            el.addEventListener("click", function (e) {
                el.classList.toggle("collapsed");
            });
        };

    return init;

}(window));

