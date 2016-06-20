System.registerDynamic("src/view", ["@angular/core", "./map"], true, function($__require, exports, module) {
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
  var __param = (this && this.__param) || function(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  };
  var core_1 = $__require('@angular/core');
  var map_1 = $__require('./map');
  var View = (function() {
    function View(map) {
      console.log('init view');
      this._map = map;
    }
    View.prototype.ngAfterContentInit = function() {
      this.olInstance = new ol.View({
        center: this.center,
        zoom: this._zoom
      });
      if (this._map.olInstance) {
        this._map.olInstance.setView(this.olInstance);
      }
    };
    Object.defineProperty(View.prototype, "zoom", {
      get: function() {
        return this._zoom;
      },
      set: function(value) {
        this._zoom = value;
      },
      enumerable: true,
      configurable: true
    });
    View = __decorate([core_1.Component({
      selector: 'map > view',
      template: ' ',
      styles: [],
      directives: [],
      inputs: ['center', 'zoom'],
      outputs: []
    }), __param(0, core_1.Host()), __param(0, core_1.Inject(core_1.forwardRef(function() {
      return map_1.Map;
    }))), __metadata('design:paramtypes', [map_1.Map])], View);
    return View;
  }());
  exports.View = View;
  return module.exports;
});

System.registerDynamic("src/map", ["@angular/core", "./layer", "./view"], true, function($__require, exports, module) {
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
  var layer_1 = $__require('./layer');
  var view_1 = $__require('./view');
  var Map = (function() {
    function Map(_el) {
      this._el = _el;
    }
    Map.prototype.ngAfterViewInit = function() {
      var _this = this;
      console.log('after view init', this._layers.length);
      this.olInstance = new ol.Map({
        layers: [],
        target: this._el.nativeElement,
        view: this._view.olInstance
      });
      this._layers.forEach(function(item) {
        _this.olInstance.addLayer(item.olInstance);
      });
    };
    Map.prototype.ngAfterContentInit = function() {
      console.log('after content init', this._layers);
    };
    __decorate([core_1.ContentChildren(layer_1.Layer), __metadata('design:type', core_1.QueryList)], Map.prototype, "_layers", void 0);
    __decorate([core_1.ContentChild(view_1.View), __metadata('design:type', view_1.View)], Map.prototype, "_view", void 0);
    Map = __decorate([core_1.Component({
      selector: 'map',
      template: ' ',
      styles: [':host{display:block;}'],
      directives: [layer_1.Layer, view_1.View]
    }), __metadata('design:paramtypes', [core_1.ElementRef])], Map);
    return Map;
  }());
  exports.Map = Map;
  return module.exports;
});

System.registerDynamic("src/layer", ["@angular/core", "./map"], true, function($__require, exports, module) {
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
  var __param = (this && this.__param) || function(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  };
  var core_1 = $__require('@angular/core');
  var map_1 = $__require('./map');
  var Layer = (function() {
    function Layer(map) {
      this._map = map;
    }
    Layer.prototype.ngAfterContentInit = function() {
      this.olInstance = new this._type({source: new ol.source.OSM()});
      if (this._map.olInstance) {
        this._map.olInstance.addLayer(this.olInstance);
      }
    };
    Layer.prototype.ngOnDestroy = function() {
      this._map.olInstance.removeLayer(this.olInstance);
    };
    Object.defineProperty(Layer.prototype, "type", {
      get: function() {
        return this._type;
      },
      set: function(value) {
        this._type = value;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Layer.prototype, "source", {
      get: function() {
        return this._source;
      },
      set: function(value) {
        this._source = value;
      },
      enumerable: true,
      configurable: true
    });
    Layer = __decorate([core_1.Component({
      selector: 'map > layer',
      template: ' ',
      styles: [],
      directives: [],
      inputs: ['type', 'source']
    }), __param(0, core_1.Host()), __param(0, core_1.Inject(core_1.forwardRef(function() {
      return map_1.Map;
    }))), __metadata('design:paramtypes', [map_1.Map])], Layer);
    return Layer;
  }());
  exports.Layer = Layer;
  return module.exports;
});

System.registerDynamic("ol3ng2", ["./src/map", "./src/layer"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var map_1 = $__require('./src/map');
  var layer_1 = $__require('./src/layer');
  exports.Ol3Ng2 = [map_1.Map, layer_1.Layer];
  return module.exports;
});
