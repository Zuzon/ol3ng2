System.registerDynamic("src/map", ["@angular/core"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1 = $__require('@angular/core');
  var Map = (function() {
    function Map(_el) {
      this._el = _el;
    }
    Map.prototype.ngAfterViewInit = function() {
      this.olInstance = new ol.Map({
        layers: [new ol.layer.Tile({source: new ol.source.OSM()})],
        controls: ol.control.defaults({attributionOptions: ({collapsible: false})}),
        target: this._el.nativeElement,
        view: new ol.View({
          center: [0, 0],
          zoom: 2
        })
      });
    };
    Map = __decorate([core_1.Component({
      selector: 'map',
      template: ' ',
      styles: [':host{display:block;}'],
      directives: []
    }), __metadata('design:paramtypes', [core_1.ElementRef])], Map);
    return Map;
  }());
  exports.Map = Map;
  return module.exports;
});

System.registerDynamic("ol3ng2", ["./src/map"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var map_1 = $__require('./src/map');
  exports.Ol3Ng2 = [map_1.Map];
  return module.exports;
});
