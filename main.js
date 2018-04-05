
window.iazi = window.iazi || {};
iazi.maps = iazi.maps || {};
iazi.maps = function (container,key,path) {
  
    var obj = JSON.parse(path);
    path = obj.basePath;
	
	sessionStorage.setItem('iazimappath', path);
	iazi.maps.setMainContainerStyle(container);
	iazi.maps.setMainContainerHeight(container);
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
		 
   window.addEventListener("load", function () {
    iazi.maps.setChildContainersHeight(container);
    iazi.maps.setKey(key);
   });
		
	 window.addEventListener("resize", function () {
	  iazi.maps.setMainContainerHeight(container);
      iazi.maps.setChildContainersHeight(container);
    });
}

iazi.maps.setMainContainerStyle = function (container){
	var containerEl = document.getElementById(container);
    containerEl.className += "IAZI-body";
}

iazi.maps.setMainContainerHeight = function (container) {
    var containerEl = document.getElementById(container);
    var parentElHeight = containerEl.parentElement.offsetHeight;
    containerEl.style.height = (parentElHeight + "px");
}

iazi.maps.setChildContainersHeight = function (container) {
    var ElHeight = document.getElementById(container).offsetHeight;
    var ElHeight = document.getElementById(container).offsetHeight;
    var targetElStartup = document.getElementsByClassName('container-background');
	if(targetElStartup.length >0){
		targetElStartup[0].style.height = (ElHeight + "px");
	}
	
	var targetElHome = document.getElementsByClassName('full-height');
	if(targetElHome.length >0){
		targetElHome[0].style.height = (ElHeight + "px");
		targetElHome[1].style.height = (ElHeight + "px");
	}
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

