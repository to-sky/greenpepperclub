(function () {
  var styleTag = document.createElement('style');
  styleTag.type = 'text/css';
  styleTag.setAttribute('id', 'vce-flickr-widget-classes');
  if (!document.getElementById('vce-flickr-widget-classes')) {
    var flickrStyles = '@media (max-width: 720px) {.vce-flickr-widget-wrapper {width: 100% !important;}}';

    if (styleTag.styleSheet) {
      styleTag.styleSheet.cssText = flickrStyles;
    } else {
      styleTag.appendChild(document.createTextNode(flickrStyles));
    }

    document.getElementsByTagName('head')[ 0 ].appendChild(styleTag);
  }
}());
