
window.iazi = window.iazi || {};
iazi.maps = iazi.maps || {};
iazi.maps = function (container,key,path) {
  
    var obj = JSON.parse(path);
    path = obj.basePath;
	
	sessionStorage.setItem('iazimappath', path);
	
    iazi.maps.loadContainer(container);

    var head = document.getElementById(container);
    var script = document.createElement('script');

    script = document.createElement('script');
    script.type = 'text/javascript';
    script.innerHTML = 'document.write("<base href=\'" + document.location.pathname + "\' />");';
    head.appendChild(script);

    var scripts = [path + '/inline.bundle.js', path + '/polyfills.bundle.js', path + '/main.bundle.js'];

    var hrefs = [path + '/styles.bundle.css'];

    iazi.maps.loadScript(scripts, container);
    iazi.maps.loadCSS(hrefs, container);

    setTimeout(function () { iazi.maps.setKey(key); }, 5000)
}



iazi.maps.loadContainer =  function(container) {
    document.getElementById(container).innerHTML = "<iazi-map-root></iazi-map-root>";
}

iazi.maps.loadScript = function(scripts, container) {
    for (i = 0; i < scripts.length; i++) {
        var head = document.getElementById(container);
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = scripts[i];
        head.appendChild(script);
    }
}

iazi.maps.loadCSS = function(hrefs, container) {
   
    for (i = 0; i < hrefs.length; i++) {
        var head = document.getElementById(container);
        var css = document.createElement('link');
        css = document.createElement('link');
        css.rel = 'stylesheet';
        css.href = hrefs[i];
        head.appendChild(css);
    }
}


iazi.maps.setKey = function(key) {
    my.namespace.setApiKey(key);
}

iazi.maps.setLanguage = function(language) {
    my.namespace.publicFunc(language);
}

iazi.maps.getMicro = function () {
    return my.namespace.quality;
}

/*! https://mths.be/startswith v0.2.0 by @mathias */
if (!String.prototype.startsWith) {
    (function () {
        'use strict'; // needed to support `apply`/`call` with `undefined`/`null`
        var defineProperty = (function () {
            // IE 8 only supports `Object.defineProperty` on DOM elements
            try {
                var object = {};
                var $defineProperty = Object.defineProperty;
                var result = $defineProperty(object, object, object) && $defineProperty;
            } catch (error) { }
            return result;
        }());
        var toString = {}.toString;
        var startsWith = function (search) {
            if (this == null) {
                throw TypeError();
            }
            var string = String(this);
            if (search && toString.call(search) == '[object RegExp]') {
                throw TypeError();
            }
            var stringLength = string.length;
            var searchString = String(search);
            var searchLength = searchString.length;
            var position = arguments.length > 1 ? arguments[1] : undefined;
            // `ToInteger`
            var pos = position ? Number(position) : 0;
            if (pos != pos) { // better `isNaN`
                pos = 0;
            }
            var start = Math.min(Math.max(pos, 0), stringLength);
            // Avoid the `indexOf` call if no match is possible
            if (searchLength + start > stringLength) {
                return false;
            }
            var index = -1;
            while (++index < searchLength) {
                if (string.charCodeAt(start + index) != searchString.charCodeAt(index)) {
                    return false;
                }
            }
            return true;
        };
        if (defineProperty) {
            defineProperty(String.prototype, 'startsWith', {
                'value': startsWith,
                'configurable': true,
                'writable': true
            });
        } else {
            String.prototype.startsWith = startsWith;
        }
    }());
}

/*! https://mths.be/endswith v0.2.0 by @mathias */
if (!String.prototype.endsWith) {
    (function () {
        'use strict'; // needed to support `apply`/`call` with `undefined`/`null`
        var defineProperty = (function () {
            // IE 8 only supports `Object.defineProperty` on DOM elements
            try {
                var object = {};
                var $defineProperty = Object.defineProperty;
                var result = $defineProperty(object, object, object) && $defineProperty;
            } catch (error) { }
            return result;
        }());
        var toString = {}.toString;
        var endsWith = function (search) {
            if (this == null) {
                throw TypeError();
            }
            var string = String(this);
            if (search && toString.call(search) == '[object RegExp]') {
                throw TypeError();
            }
            var stringLength = string.length;
            var searchString = String(search);
            var searchLength = searchString.length;
            var pos = stringLength;
            if (arguments.length > 1) {
                var position = arguments[1];
                if (position !== undefined) {
                    // `ToInteger`
                    pos = position ? Number(position) : 0;
                    if (pos != pos) { // better `isNaN`
                        pos = 0;
                    }
                }
            }
            var end = Math.min(Math.max(pos, 0), stringLength);
            var start = end - searchLength;
            if (start < 0) {
                return false;
            }
            var index = -1;
            while (++index < searchLength) {
                if (string.charCodeAt(start + index) != searchString.charCodeAt(index)) {
                    return false;
                }
            }
            return true;
        };
        if (defineProperty) {
            defineProperty(String.prototype, 'endsWith', {
                'value': endsWith,
                'configurable': true,
                'writable': true
            });
        } else {
            String.prototype.endsWith = endsWith;
        }
    }());
}