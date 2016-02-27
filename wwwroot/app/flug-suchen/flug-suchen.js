System.register(['angular2/core', '../services/flug-manager', '../pipes/ort-pipe', 'angular2/router'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, flug_manager_1, ort_pipe_1, router_1;
    var FlugSuchen;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (flug_manager_1_1) {
                flug_manager_1 = flug_manager_1_1;
            },
            function (ort_pipe_1_1) {
                ort_pipe_1 = ort_pipe_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            FlugSuchen = (function () {
                /*
                private flugService: FlugService;
            
                constructor(flugService: FlugService) {
                    this.flugService = flugService;
                }
                */
                function FlugSuchen(flugManager) {
                    this.flugManager = flugManager;
                    this.von = "Graz";
                    this.nach = "Hamburg";
                }
                FlugSuchen.prototype.suchen = function () {
                    this.flugManager
                        .load(this.von, this.nach);
                };
                Object.defineProperty(FlugSuchen.prototype, "fluege", {
                    // public fluege: Array<IFlug> = new Array<IFlug>();
                    get: function () {
                        return this.flugManager.fluege;
                    },
                    enumerable: true,
                    configurable: true
                });
                FlugSuchen.prototype.selectFlug = function (flug) {
                    this.selectedFlug = flug;
                };
                FlugSuchen = __decorate([
                    core_1.Component({
                        selector: 'flug-suchen',
                        templateUrl: 'app/flug-suchen/flug-suchen.html',
                        pipes: [ort_pipe_1.OrtPipe],
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [flug_manager_1.FlugManager])
                ], FlugSuchen);
                return FlugSuchen;
            })();
            exports_1("FlugSuchen", FlugSuchen);
        }
    }
});
//# sourceMappingURL=flug-suchen.js.map