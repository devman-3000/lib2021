function Parallax(options){
    options = options || {};
    this.nameSpaces = {
        wrapper: options.wrapper || '.parallax',
        layers: options.layers || '.parallax-layer',
        deep: options.deep || 'data-parallax-deep'
    };
    this.init = function() {
        var self = this,
            parallaxWrappers = document.querySelectorAll(this.nameSpaces.wrapper);
      	for(var i = 0; i < parallaxWrappers.length; i++){
			(function(i){
				parallaxWrappers[i].addEventListener('mousemove', function(e){
					var x = e.clientX,
						y = e.clientY,
						layers = parallaxWrappers[i].querySelectorAll(self.nameSpaces.layers);
					for(var j = 0; j < layers.length; j++){
            (function(j){
              var deep = layers[j].getAttribute(self.nameSpaces.deep),
                  disallow = layers[j].getAttribute('data-parallax-disallow'),
                  itemX = (disallow && disallow === 'x') ? 0 : x / deep,
                  itemY = (disallow && disallow === 'y') ? 0 : y / deep;
                  if(disallow && disallow === 'both') return;
                  layers[j].style.transform = 'translateX(' + itemX + '%) translateY(' + itemY + '%)';
            })(j);  
					}
				})
			})(i);
      	}
    };
    this.init();
    return this;
}

window.addEventListener('load', function(){
    new Parallax();
});



