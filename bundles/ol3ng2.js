System.registerDynamic("src/layers/tile", ["@angular/core", "../map", "./layer"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
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
  var map_1 = $__require('../map');
  var layer_1 = $__require('./layer');
  var Tile = (function(_super) {
    __extends(Tile, _super);
    function Tile(map) {
      _super.call(this, map);
      this.useInterimTilesOnErrorChange = new core_1.EventEmitter();
    }
    Object.defineProperty(Tile.prototype, "useInterimTilesOnError", {
      get: function() {
        return this._useInterimTilesOnError;
      },
      set: function(value) {
        this._useInterimTilesOnError = value;
        if (this.olInstance) {
          this.olInstance.setUseInterimTilesOnError(value);
        }
      },
      enumerable: true,
      configurable: true
    });
    Tile.prototype.ngAfterContentInit = function() {
      var _this = this;
      this.olInstance = new ol.layer.Tile({
        opacity: this.opacity,
        source: this.source,
        visible: this.visible,
        extent: this.extent,
        zIndex: this.zIndex,
        minResolution: this.minResolution,
        maxResolution: this.maxResolution
      });
      this.olInstance.on(['propertychange'], function(event) {
        _this.onLayerPropertyChange(event);
        if (event.key === 'useinterimtilesonerror') {
          setTimeout(function() {
            _this.useInterimTilesOnErrorChange.emit(_this.olInstance.getUseInterimTilesOnError());
          }, 10);
          return;
        }
      });
      if (this._map.olInstance) {
        this._map.olInstance.addLayer(this.olInstance);
      }
    };
    Tile.prototype.ngOnDestroy = function() {
      this._map.olInstance.removeLayer(this.olInstance);
    };
    Tile = __decorate([core_1.Component({
      selector: 'map > tile',
      template: ' ',
      styles: [],
      directives: [],
      inputs: ['opacity', 'visible', 'extent', 'zIndex', 'minResolution', 'maxResolution', 'source', 'useInterimTilesOnError'],
      outputs: ['opacity', 'visible', 'extent', 'zIndex', 'minResolution', 'maxResolution', 'source', 'useInterimTilesOnError']
    }), __param(0, core_1.Host()), __param(0, core_1.Inject(core_1.forwardRef(function() {
      return map_1.Map;
    }))), __metadata('design:paramtypes', [map_1.Map])], Tile);
    return Tile;
  }(layer_1.Layer));
  exports.Tile = Tile;
  return module.exports;
});

System.registerDynamic("src/layers/base", ["@angular/core"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var core_1 = $__require('@angular/core');
  var Base = (function() {
    function Base(_map) {
      this._map = _map;
      this.opacityChange = new core_1.EventEmitter();
      this.visibleChange = new core_1.EventEmitter();
      this.extentChange = new core_1.EventEmitter();
      this.zIndexChange = new core_1.EventEmitter();
      this.minResolutionChange = new core_1.EventEmitter();
      this.maxResolutionChange = new core_1.EventEmitter();
    }
    Object.defineProperty(Base.prototype, "opacity", {
      get: function() {
        return this._opacity;
      },
      set: function(value) {
        this._opacity = value;
        if (this.olInstance) {
          this.olInstance.setOpacity(value);
        }
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Base.prototype, "visible", {
      get: function() {
        return this._visible;
      },
      set: function(value) {
        this._visible = value;
        if (this.olInstance) {
          this.olInstance.setVisible(value);
        }
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Base.prototype, "extent", {
      get: function() {
        return this._extent;
      },
      set: function(value) {
        this._extent = value;
        if (this.olInstance) {
          this.olInstance.setExtent(value);
        }
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Base.prototype, "zIndex", {
      get: function() {
        return this._zIndex;
      },
      set: function(value) {
        this._zIndex = value;
        if (this.olInstance) {
          this.olInstance.setZIndex(value);
        }
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Base.prototype, "minResolution", {
      get: function() {
        return this._minResolution;
      },
      set: function(value) {
        this._minResolution = value;
        if (this.olInstance) {
          this.olInstance.setMinResolution(value);
        }
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Base.prototype, "maxResolution", {
      get: function() {
        return this._minResolution;
      },
      set: function(value) {
        this._maxResolution = value;
        if (this.olInstance) {
          this.olInstance.setMaxResolution(value);
        }
      },
      enumerable: true,
      configurable: true
    });
    Base.prototype.onBasePropertyChange = function(event) {
      var _this = this;
      if (event.key === 'extent') {
        setTimeout(function() {
          _this.extentChange.emit(_this.olInstance.getExtent());
        }, 10);
        return;
      }
      if (event.key === 'maxresolution') {
        setTimeout(function() {
          _this.maxResolutionChange.emit(_this.olInstance.getMaxResolution());
        }, 10);
        return;
      }
      if (event.key === 'minresolution') {
        setTimeout(function() {
          _this.minResolutionChange.emit(_this.olInstance.getMinResolution());
        }, 10);
        return;
      }
      if (event.key === 'opacity') {
        setTimeout(function() {
          _this.opacityChange.emit(_this.olInstance.getOpacity());
        }, 10);
        return;
      }
      if (event.key === 'visible') {
        setTimeout(function() {
          _this.visibleChange.emit(_this.olInstance.getVisible());
        }, 10);
        return;
      }
      if (event.key === 'zindex') {
        setTimeout(function() {
          _this.visibleChange.emit(_this.olInstance.getVisible());
        }, 10);
        return;
      }
    };
    return Base;
  }());
  exports.Base = Base;
  return module.exports;
});

System.registerDynamic("src/layers/layer", ["@angular/core", "./base"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var core_1 = $__require('@angular/core');
  var base_1 = $__require('./base');
  var Layer = (function(_super) {
    __extends(Layer, _super);
    function Layer(_map) {
      _super.call(this, _map);
      this.sourceChange = new core_1.EventEmitter();
    }
    Object.defineProperty(Layer.prototype, "source", {
      get: function() {
        return this._source;
      },
      set: function(value) {
        this._source = value;
        if (this.olInstance) {
          this.olInstance.setSource(value);
        }
      },
      enumerable: true,
      configurable: true
    });
    Layer.prototype.onLayerPropertyChange = function(event) {
      var _this = this;
      this.onBasePropertyChange(event);
      if (event.key === 'source') {
        setTimeout(function() {
          _this.sourceChange.emit(_this.olInstance.getSource());
        }, 10);
        return;
      }
    };
    return Layer;
  }(base_1.Base));
  exports.Layer = Layer;
  return module.exports;
});

System.registerDynamic("src/layers/vector", ["@angular/core", "../map", "./layer"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
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
  var map_1 = $__require('../map');
  var layer_1 = $__require('./layer');
  var Vector = (function(_super) {
    __extends(Vector, _super);
    function Vector(map) {
      _super.call(this, map);
      this.useInterimTilesOnErrorChange = new core_1.EventEmitter();
    }
    Object.defineProperty(Vector.prototype, "renderBuffer", {
      set: function(value) {
        this._renderBuffer = value;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Vector.prototype, "updateWhileInteracting", {
      set: function(value) {
        this._updateWhileInteracting = value;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Vector.prototype, "updateWhileAnimating", {
      set: function(value) {
        this._updateWhileAnimating = value;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Vector.prototype, "style", {
      get: function() {
        return this._style;
      },
      set: function(value) {
        this._style = value;
        if (this.olInstance) {
          this.olInstance.setStyle(value);
        }
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Vector.prototype, "map", {
      get: function() {
        return this._map;
      },
      set: function(value) {
        this._map = value;
        if (this.olInstance) {
          this.olInstance.setMap(this._map.olInstance);
        }
      },
      enumerable: true,
      configurable: true
    });
    Vector.prototype.ngAfterContentInit = function() {
      var _this = this;
      this.olInstance = new ol.layer.Vector({
        opacity: this.opacity,
        source: (this.source),
        visible: this.visible,
        extent: this.extent,
        zIndex: this.zIndex,
        minResolution: this.minResolution,
        maxResolution: this.maxResolution,
        style: this._style,
        map: this.map.olInstance,
        renderBuffer: this._renderBuffer,
        updateWhileAnimating: this._updateWhileAnimating,
        updateWhileInteracting: this._updateWhileInteracting
      });
      this.olInstance.on(['propertychange'], function(event) {
        _this.onLayerPropertyChange(event);
      });
      if (this._map.olInstance) {
        this._map.olInstance.addLayer(this.olInstance);
      }
    };
    Vector.prototype.ngOnDestroy = function() {
      this._map.olInstance.removeLayer(this.olInstance);
    };
    Vector = __decorate([core_1.Component({
      selector: 'vector',
      template: ' ',
      styles: [],
      directives: [],
      inputs: ['opacity', 'visible', 'extent', 'zIndex', 'minResolution', 'maxResolution', 'source', 'map', 'renderBuffer', 'style', 'updateWhileAnimating', 'updateWhileInteracting'],
      outputs: ['opacity', 'visible', 'extent', 'zIndex', 'minResolution', 'maxResolution', 'source']
    }), __param(0, core_1.Host()), __param(0, core_1.Inject(core_1.forwardRef(function() {
      return map_1.Map;
    }))), __metadata('design:paramtypes', [map_1.Map])], Vector);
    return Vector;
  }(layer_1.Layer));
  exports.Vector = Vector;
  return module.exports;
});

System.registerDynamic("src/map", ["@angular/core", "./layers/tile", "./layers/vector", "./view"], true, function($__require, exports, module) {
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
  var tile_1 = $__require('./layers/tile');
  var vector_1 = $__require('./layers/vector');
  var view_1 = $__require('./view');
  var Map = (function() {
    function Map(_el) {
      this._el = _el;
    }
    Map.prototype.ngAfterViewInit = function() {
      var _this = this;
      this.olInstance = new ol.Map({
        layers: [],
        target: this._el.nativeElement,
        view: this._view.olInstance
      });
      this._tileLayers.forEach(function(item) {
        _this.olInstance.addLayer(item.olInstance);
      });
      this._vectorLayers.forEach(function(item) {
        _this.olInstance.addLayer(item.olInstance);
      });
    };
    Map.prototype.ngAfterContentInit = function() {};
    __decorate([core_1.ContentChildren(tile_1.Tile), __metadata('design:type', core_1.QueryList)], Map.prototype, "_tileLayers", void 0);
    __decorate([core_1.ContentChildren(vector_1.Vector), __metadata('design:type', core_1.QueryList)], Map.prototype, "_vectorLayers", void 0);
    __decorate([core_1.ContentChild(view_1.View), __metadata('design:type', view_1.View)], Map.prototype, "_view", void 0);
    Map = __decorate([core_1.Component({
      selector: 'map',
      template: ' ',
      styles: [':host{display:block;}'],
      directives: [tile_1.Tile, view_1.View]
    }), __metadata('design:paramtypes', [core_1.ElementRef])], Map);
    return Map;
  }());
  exports.Map = Map;
  return module.exports;
});

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
      this.centerChange = new core_1.EventEmitter();
      this.zoomChange = new core_1.EventEmitter();
      this._map = map;
    }
    View.prototype.ngAfterContentInit = function() {
      var _this = this;
      this.olInstance = new ol.View({
        center: this.center,
        zoom: this._zoom
      });
      this.olInstance.on(['propertychange'], function(event) {
        if (event.key === 'resolution') {
          setTimeout(function() {
            _this.zoomChange.emit(_this.olInstance.getZoom());
          }, 10);
        }
        if (event.key === 'center') {
          setTimeout(function() {
            _this.centerChange.emit(_this.olInstance.getCenter());
          }, 10);
        }
      });
      if (this._map.olInstance) {
        this._map.olInstance.setView(this.olInstance);
      }
    };
    Object.defineProperty(View.prototype, "center", {
      get: function() {
        return this._center;
      },
      set: function(value) {
        this._center = value;
        if (this.olInstance) {
          this.olInstance.setCenter(value);
        }
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(View.prototype, "zoom", {
      get: function() {
        return this._zoom;
      },
      set: function(value) {
        this._zoom = value;
        if (this.olInstance) {
          this.olInstance.setZoom(value);
        }
      },
      enumerable: true,
      configurable: true
    });
    __decorate([core_1.Output(), __metadata('design:type', core_1.EventEmitter)], View.prototype, "centerChange", void 0);
    __decorate([core_1.Output(), __metadata('design:type', core_1.EventEmitter)], View.prototype, "zoomChange", void 0);
    __decorate([core_1.Input(), __metadata('design:type', Object)], View.prototype, "center", null);
    __decorate([core_1.Input(), __metadata('design:type', Number)], View.prototype, "zoom", null);
    View = __decorate([core_1.Component({
      selector: 'map > view',
      template: ' ',
      styles: [],
      directives: [],
      inputs: ['center', 'zoom']
    }), __param(0, core_1.Host()), __param(0, core_1.Inject(core_1.forwardRef(function() {
      return map_1.Map;
    }))), __metadata('design:paramtypes', [map_1.Map])], View);
    return View;
  }());
  exports.View = View;
  return module.exports;
});

System.registerDynamic("ol3ng2", ["./src/map", "./src/layers/tile", "./src/view"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var map_1 = $__require('./src/map');
  var tile_1 = $__require('./src/layers/tile');
  var view_1 = $__require('./src/view');
  exports.Ol3Ng2 = [map_1.Map, tile_1.Tile, view_1.View];
  return module.exports;
});
