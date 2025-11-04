import{$ as E,Aa as dn,Ab as oe,Ba as ae,Bb as dt,Cb as ft,Fb as ht,H as Pe,I as _,J as ct,K as z,L as X,N as Te,Pb as fn,Ua as H,X as ln,Z as re,_ as ge,a as w,aa as ye,ac as hn,b as V,cb as ut,e as rn,h as an,k as on,ma as ve,na as h,nb as b,o as sn,ra as G,sa as g,ta as v,wa as K,ya as cn,za as un,zb as P}from"./chunk-3KMOHGR5.js";var xn=(()=>{class t{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,i){this._renderer=e,this._elementRef=i}setProperty(e,i){this._renderer.setProperty(this._elementRef.nativeElement,e,i)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(i){return new(i||t)(h(ve),h(ye))};static \u0275dir=g({type:t})}return t})(),Me=(()=>{class t extends xn{static \u0275fac=(()=>{let e;return function(r){return(e||(e=E(t)))(r||t)}})();static \u0275dir=g({type:t,features:[v]})}return t})(),J=new X(""),pr={provide:J,useExisting:_(()=>gr),multi:!0},gr=(()=>{class t extends Me{writeValue(e){this.setProperty("checked",e)}static \u0275fac=(()=>{let e;return function(r){return(e||(e=E(t)))(r||t)}})();static \u0275dir=g({type:t,selectors:[["input","type","checkbox","formControlName",""],["input","type","checkbox","formControl",""],["input","type","checkbox","ngModel",""]],hostBindings:function(i,r){i&1&&H("change",function(o){return r.onChange(o.target.checked)})("blur",function(){return r.onTouched()})},standalone:!1,features:[b([pr]),v]})}return t})(),yr={provide:J,useExisting:_(()=>Mn),multi:!0};function vr(){let t=ht()?ht().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var _r=new X(""),Mn=(()=>{class t extends xn{_compositionMode;_composing=!1;constructor(e,i,r){super(e,i),this._compositionMode=r,this._compositionMode==null&&(this._compositionMode=!vr())}writeValue(e){let i=e??"";this.setProperty("value",i)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(i){return new(i||t)(h(ve),h(ye),h(_r,8))};static \u0275dir=g({type:t,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(i,r){i&1&&H("input",function(o){return r._handleInput(o.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(o){return r._compositionEnd(o.target.value)})},standalone:!1,features:[b([yr]),v]})}return t})();function yt(t){return t==null||vt(t)===0}function vt(t){return t==null?null:Array.isArray(t)||typeof t=="string"?t.length:t instanceof Set?t.size:null}var S=new X(""),de=new X(""),br=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,mn=class{static min(n){return Vn(n)}static max(n){return Cr(n)}static required(n){return En(n)}static requiredTrue(n){return Ar(n)}static email(n){return Dr(n)}static minLength(n){return Fn(n)}static maxLength(n){return In(n)}static pattern(n){return wr(n)}static nullValidator(n){return je()}static compose(n){return Tn(n)}static composeAsync(n){return Rn(n)}};function Vn(t){return n=>{if(n.value==null||t==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e<t?{min:{min:t,actual:n.value}}:null}}function Cr(t){return n=>{if(n.value==null||t==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e>t?{max:{max:t,actual:n.value}}:null}}function En(t){return yt(t.value)?{required:!0}:null}function Ar(t){return t.value===!0?null:{required:!0}}function Dr(t){return yt(t.value)||br.test(t.value)?null:{email:!0}}function Fn(t){return n=>{let e=n.value?.length??vt(n.value);return e===null||e===0?null:e<t?{minlength:{requiredLength:t,actualLength:e}}:null}}function In(t){return n=>{let e=n.value?.length??vt(n.value);return e!==null&&e>t?{maxlength:{requiredLength:t,actualLength:e}}:null}}function wr(t){if(!t)return je;let n,e;return typeof t=="string"?(e="",t.charAt(0)!=="^"&&(e+="^"),e+=t,t.charAt(t.length-1)!=="$"&&(e+="$"),n=new RegExp(e)):(e=t.toString(),n=t),i=>{if(yt(i.value))return null;let r=i.value;return n.test(r)?null:{pattern:{requiredPattern:e,actualValue:r}}}}function je(t){return null}function Sn(t){return t!=null}function On(t){return un(t)?an(t):t}function kn(t){let n={};return t.forEach(e=>{n=e!=null?w(w({},n),e):n}),Object.keys(n).length===0?null:n}function Nn(t,n){return n.map(e=>e(t))}function xr(t){return!t.validate}function Pn(t){return t.map(n=>xr(n)?n:e=>n.validate(e))}function Tn(t){if(!t)return null;let n=t.filter(Sn);return n.length==0?null:function(e){return kn(Nn(e,n))}}function _t(t){return t!=null?Tn(Pn(t)):null}function Rn(t){if(!t)return null;let n=t.filter(Sn);return n.length==0?null:function(e){let i=Nn(e,n).map(On);return sn(i).pipe(on(kn))}}function bt(t){return t!=null?Rn(Pn(t)):null}function pn(t,n){return t===null?[n]:Array.isArray(t)?[...t,n]:[t,n]}function jn(t){return t._rawValidators}function Ln(t){return t._rawAsyncValidators}function mt(t){return t?Array.isArray(t)?t:[t]:[]}function Le(t,n){return Array.isArray(t)?t.includes(n):t===n}function gn(t,n){let e=mt(n);return mt(t).forEach(r=>{Le(e,r)||e.push(r)}),e}function yn(t,n){return mt(n).filter(e=>!Le(t,e))}var ze=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(n){this._rawValidators=n||[],this._composedValidatorFn=_t(this._rawValidators)}_setAsyncValidators(n){this._rawAsyncValidators=n||[],this._composedAsyncValidatorFn=bt(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(n){this._onDestroyCallbacks.push(n)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(n=>n()),this._onDestroyCallbacks=[]}reset(n=void 0){this.control&&this.control.reset(n)}hasError(n,e){return this.control?this.control.hasError(n,e):!1}getError(n,e){return this.control?this.control.getError(n,e):null}},A=class extends ze{name;get formDirective(){return null}get path(){return null}},Z=class extends ze{_parent=null;name=null;valueAccessor=null},Ge=class{_cd;constructor(n){this._cd=n}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},Mr={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},Os=V(w({},Mr),{"[class.ng-submitted]":"isSubmitted"}),ks=(()=>{class t extends Ge{constructor(e){super(e)}static \u0275fac=function(i){return new(i||t)(h(Z,2))};static \u0275dir=g({type:t,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(i,r){i&2&&ut("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},standalone:!1,features:[v]})}return t})(),Ns=(()=>{class t extends Ge{constructor(e){super(e)}static \u0275fac=function(i){return new(i||t)(h(A,10))};static \u0275dir=g({type:t,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(i,r){i&2&&ut("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},standalone:!1,features:[v]})}return t})();var _e="VALID",Re="INVALID",se="PENDING",be="DISABLED",U=class{},He=class extends U{value;source;constructor(n,e){super(),this.value=n,this.source=e}},Ae=class extends U{pristine;source;constructor(n,e){super(),this.pristine=n,this.source=e}},De=class extends U{touched;source;constructor(n,e){super(),this.touched=n,this.source=e}},le=class extends U{status;source;constructor(n,e){super(),this.status=n,this.source=e}},Ue=class extends U{source;constructor(n){super(),this.source=n}},xe=class extends U{source;constructor(n){super(),this.source=n}};function Ct(t){return(Ye(t)?t.validators:t)||null}function Vr(t){return Array.isArray(t)?_t(t):t||null}function At(t,n){return(Ye(n)?n.asyncValidators:t)||null}function Er(t){return Array.isArray(t)?bt(t):t||null}function Ye(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function zn(t,n,e){let i=t.controls;if(!(n?Object.keys(i):i).length)throw new Pe(1e3,"");if(!i[e])throw new Pe(1001,"")}function Gn(t,n,e){t._forEachChild((i,r)=>{if(e[r]===void 0)throw new Pe(1002,"")})}var ce=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(n,e){this._assignValidators(n),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(n){this._rawValidators=this._composedValidatorFn=n}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(n){this._rawAsyncValidators=this._composedAsyncValidatorFn=n}get parent(){return this._parent}get status(){return P(this.statusReactive)}set status(n){P(()=>this.statusReactive.set(n))}_status=oe(()=>this.statusReactive());statusReactive=re(void 0);get valid(){return this.status===_e}get invalid(){return this.status===Re}get pending(){return this.status==se}get disabled(){return this.status===be}get enabled(){return this.status!==be}errors;get pristine(){return P(this.pristineReactive)}set pristine(n){P(()=>this.pristineReactive.set(n))}_pristine=oe(()=>this.pristineReactive());pristineReactive=re(!0);get dirty(){return!this.pristine}get touched(){return P(this.touchedReactive)}set touched(n){P(()=>this.touchedReactive.set(n))}_touched=oe(()=>this.touchedReactive());touchedReactive=re(!1);get untouched(){return!this.touched}_events=new rn;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(n){this._assignValidators(n)}setAsyncValidators(n){this._assignAsyncValidators(n)}addValidators(n){this.setValidators(gn(n,this._rawValidators))}addAsyncValidators(n){this.setAsyncValidators(gn(n,this._rawAsyncValidators))}removeValidators(n){this.setValidators(yn(n,this._rawValidators))}removeAsyncValidators(n){this.setAsyncValidators(yn(n,this._rawAsyncValidators))}hasValidator(n){return Le(this._rawValidators,n)}hasAsyncValidator(n){return Le(this._rawAsyncValidators,n)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(n={}){let e=this.touched===!1;this.touched=!0;let i=n.sourceControl??this;this._parent&&!n.onlySelf&&this._parent.markAsTouched(V(w({},n),{sourceControl:i})),e&&n.emitEvent!==!1&&this._events.next(new De(!0,i))}markAllAsDirty(n={}){this.markAsDirty({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(n))}markAllAsTouched(n={}){this.markAsTouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(n))}markAsUntouched(n={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=n.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:i})}),this._parent&&!n.onlySelf&&this._parent._updateTouched(n,i),e&&n.emitEvent!==!1&&this._events.next(new De(!1,i))}markAsDirty(n={}){let e=this.pristine===!0;this.pristine=!1;let i=n.sourceControl??this;this._parent&&!n.onlySelf&&this._parent.markAsDirty(V(w({},n),{sourceControl:i})),e&&n.emitEvent!==!1&&this._events.next(new Ae(!1,i))}markAsPristine(n={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=n.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:n.emitEvent})}),this._parent&&!n.onlySelf&&this._parent._updatePristine(n,i),e&&n.emitEvent!==!1&&this._events.next(new Ae(!0,i))}markAsPending(n={}){this.status=se;let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new le(this.status,e)),this.statusChanges.emit(this.status)),this._parent&&!n.onlySelf&&this._parent.markAsPending(V(w({},n),{sourceControl:e}))}disable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=be,this.errors=null,this._forEachChild(r=>{r.disable(V(w({},n),{onlySelf:!0}))}),this._updateValue();let i=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new He(this.value,i)),this._events.next(new le(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(V(w({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=_e,this._forEachChild(i=>{i.enable(V(w({},n),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent}),this._updateAncestors(V(w({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(n,e){this._parent&&!n.onlySelf&&(this._parent.updateValueAndValidity(n),n.skipPristineCheck||this._parent._updatePristine({},e),this._parent._updateTouched({},e))}setParent(n){this._parent=n}getRawValue(){return this.value}updateValueAndValidity(n={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===_e||this.status===se)&&this._runAsyncValidator(i,n.emitEvent)}let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new He(this.value,e)),this._events.next(new le(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!n.onlySelf&&this._parent.updateValueAndValidity(V(w({},n),{sourceControl:e}))}_updateTreeValidity(n={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(n)),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?be:_e}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(n,e){if(this.asyncValidator){this.status=se,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:n!==!1};let i=On(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:e,shouldHaveEmitted:n})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let n=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,n}return!1}setErrors(n,e={}){this.errors=n,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(n){let e=n;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((i,r)=>i&&i._find(r),this)}getError(n,e){let i=e?this.get(e):this;return i&&i.errors?i.errors[n]:null}hasError(n,e){return!!this.getError(n,e)}get root(){let n=this;for(;n._parent;)n=n._parent;return n}_updateControlsErrors(n,e,i){this.status=this._calculateStatus(),n&&this.statusChanges.emit(this.status),(n||i)&&this._events.next(new le(this.status,e)),this._parent&&this._parent._updateControlsErrors(n,e,i)}_initObservables(){this.valueChanges=new K,this.statusChanges=new K}_calculateStatus(){return this._allControlsDisabled()?be:this.errors?Re:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(se)?se:this._anyControlsHaveStatus(Re)?Re:_e}_anyControlsHaveStatus(n){return this._anyControls(e=>e.status===n)}_anyControlsDirty(){return this._anyControls(n=>n.dirty)}_anyControlsTouched(){return this._anyControls(n=>n.touched)}_updatePristine(n,e){let i=!this._anyControlsDirty(),r=this.pristine!==i;this.pristine=i,this._parent&&!n.onlySelf&&this._parent._updatePristine(n,e),r&&this._events.next(new Ae(this.pristine,e))}_updateTouched(n={},e){this.touched=this._anyControlsTouched(),this._events.next(new De(this.touched,e)),this._parent&&!n.onlySelf&&this._parent._updateTouched(n,e)}_onDisabledChange=[];_registerOnCollectionChange(n){this._onCollectionChange=n}_setUpdateStrategy(n){Ye(n)&&n.updateOn!=null&&(this._updateOn=n.updateOn)}_parentMarkedDirty(n){let e=this._parent&&this._parent.dirty;return!n&&!!e&&!this._parent._anyControlsDirty()}_find(n){return null}_assignValidators(n){this._rawValidators=Array.isArray(n)?n.slice():n,this._composedValidatorFn=Vr(this._rawValidators)}_assignAsyncValidators(n){this._rawAsyncValidators=Array.isArray(n)?n.slice():n,this._composedAsyncValidatorFn=Er(this._rawAsyncValidators)}},ue=class extends ce{constructor(n,e,i){super(Ct(e),At(i,e)),this.controls=n,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(n,e){return this.controls[n]?this.controls[n]:(this.controls[n]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(n,e,i={}){this.registerControl(n,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(n,e={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(n,e,i={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],e&&this.registerControl(n,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(n){return this.controls.hasOwnProperty(n)&&this.controls[n].enabled}setValue(n,e={}){Gn(this,!0,n),Object.keys(n).forEach(i=>{zn(this,!0,i),this.controls[i].setValue(n[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(n,e={}){n!=null&&(Object.keys(n).forEach(i=>{let r=this.controls[i];r&&r.patchValue(n[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(n={},e={}){this._forEachChild((i,r)=>{i.reset(n?n[r]:null,{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new xe(this))}getRawValue(){return this._reduceChildren({},(n,e,i)=>(n[i]=e.getRawValue(),n))}_syncPendingControls(){let n=this._reduceChildren(!1,(e,i)=>i._syncPendingControls()?!0:e);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){Object.keys(this.controls).forEach(e=>{let i=this.controls[e];i&&n(i,e)})}_setUpControls(){this._forEachChild(n=>{n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(n){for(let[e,i]of Object.entries(this.controls))if(this.contains(e)&&n(i))return!0;return!1}_reduceValue(){let n={};return this._reduceChildren(n,(e,i,r)=>((i.enabled||this.disabled)&&(e[r]=i.value),e))}_reduceChildren(n,e){let i=n;return this._forEachChild((r,a)=>{i=e(i,r,a)}),i}_allControlsDisabled(){for(let n of Object.keys(this.controls))if(this.controls[n].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(n){return this.controls.hasOwnProperty(n)?this.controls[n]:null}};var pt=class extends ue{};var Ve=new X("",{providedIn:"root",factory:()=>qe}),qe="always";function Xe(t,n){return[...n.path,t]}function Be(t,n,e=qe){Dt(t,n),n.valueAccessor.writeValue(t.value),(t.disabled||e==="always")&&n.valueAccessor.setDisabledState?.(t.disabled),Ir(t,n),Or(t,n),Sr(t,n),Fr(t,n)}function vn(t,n,e=!0){let i=()=>{};n.valueAccessor&&(n.valueAccessor.registerOnChange(i),n.valueAccessor.registerOnTouched(i)),$e(t,n),t&&(n._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function We(t,n){t.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(n)})}function Fr(t,n){if(n.valueAccessor.setDisabledState){let e=i=>{n.valueAccessor.setDisabledState(i)};t.registerOnDisabledChange(e),n._registerOnDestroy(()=>{t._unregisterOnDisabledChange(e)})}}function Dt(t,n){let e=jn(t);n.validator!==null?t.setValidators(pn(e,n.validator)):typeof e=="function"&&t.setValidators([e]);let i=Ln(t);n.asyncValidator!==null?t.setAsyncValidators(pn(i,n.asyncValidator)):typeof i=="function"&&t.setAsyncValidators([i]);let r=()=>t.updateValueAndValidity();We(n._rawValidators,r),We(n._rawAsyncValidators,r)}function $e(t,n){let e=!1;if(t!==null){if(n.validator!==null){let r=jn(t);if(Array.isArray(r)&&r.length>0){let a=r.filter(o=>o!==n.validator);a.length!==r.length&&(e=!0,t.setValidators(a))}}if(n.asyncValidator!==null){let r=Ln(t);if(Array.isArray(r)&&r.length>0){let a=r.filter(o=>o!==n.asyncValidator);a.length!==r.length&&(e=!0,t.setAsyncValidators(a))}}}let i=()=>{};return We(n._rawValidators,i),We(n._rawAsyncValidators,i),e}function Ir(t,n){n.valueAccessor.registerOnChange(e=>{t._pendingValue=e,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&Hn(t,n)})}function Sr(t,n){n.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&Hn(t,n),t.updateOn!=="submit"&&t.markAsTouched()})}function Hn(t,n){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),n.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function Or(t,n){let e=(i,r)=>{n.valueAccessor.writeValue(i),r&&n.viewToModelUpdate(i)};t.registerOnChange(e),n._registerOnDestroy(()=>{t._unregisterOnChange(e)})}function Un(t,n){t==null,Dt(t,n)}function kr(t,n){return $e(t,n)}function Bn(t,n){if(!t.hasOwnProperty("model"))return!1;let e=t.model;return e.isFirstChange()?!0:!Object.is(n,e.currentValue)}function Nr(t){return Object.getPrototypeOf(t.constructor)===Me}function Wn(t,n){t._syncPendingControls(),n.forEach(e=>{let i=e.control;i.updateOn==="submit"&&i._pendingChange&&(e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function $n(t,n){if(!n)return null;Array.isArray(n);let e,i,r;return n.forEach(a=>{a.constructor===Mn?e=a:Nr(a)?i=a:r=a}),r||i||e||null}function Pr(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}var Tr={provide:A,useExisting:_(()=>Rr)},Ce=Promise.resolve(),Rr=(()=>{class t extends A{callSetDisabledState;get submitted(){return P(this.submittedReactive)}_submitted=oe(()=>this.submittedReactive());submittedReactive=re(!1);_directives=new Set;form;ngSubmit=new K;options;constructor(e,i,r){super(),this.callSetDisabledState=r,this.form=new ue({},_t(e),bt(i))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){Ce.then(()=>{let i=this._findContainer(e.path);e.control=i.registerControl(e.name,e.control),Be(e.control,e,this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){Ce.then(()=>{let i=this._findContainer(e.path);i&&i.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){Ce.then(()=>{let i=this._findContainer(e.path),r=new ue({});Un(r,e),i.registerControl(e.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){Ce.then(()=>{let i=this._findContainer(e.path);i&&i.removeControl(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,i){Ce.then(()=>{this.form.get(e.path).setValue(i)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),Wn(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new Ue(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(i){return new(i||t)(h(S,10),h(de,10),h(Ve,8))};static \u0275dir=g({type:t,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(i,r){i&1&&H("submit",function(o){return r.onSubmit(o)})("reset",function(){return r.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[b([Tr]),v]})}return t})();function _n(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}function bn(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var we=class extends ce{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(n=null,e,i){super(Ct(e),At(i,e)),this._applyFormState(n),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Ye(e)&&(e.nonNullable||e.initialValueIsDefault)&&(bn(n)?this.defaultValue=n.value:this.defaultValue=n)}setValue(n,e={}){this.value=this._pendingValue=n,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(n,e={}){this.setValue(n,e)}reset(n=this.defaultValue,e={}){this._applyFormState(n),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new xe(this))}_updateValue(){}_anyControls(n){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(n){this._onChange.push(n)}_unregisterOnChange(n){_n(this._onChange,n)}registerOnDisabledChange(n){this._onDisabledChange.push(n)}_unregisterOnDisabledChange(n){_n(this._onDisabledChange,n)}_forEachChild(n){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(n){bn(n)?(this.value=this._pendingValue=n.value,n.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=n}};var jr=t=>t instanceof we,Lr=(()=>{class t extends A{_parent;ngOnInit(){this._checkParentType(),this.formDirective.addFormGroup(this)}ngOnDestroy(){this.formDirective&&this.formDirective.removeFormGroup(this)}get control(){return this.formDirective.getFormGroup(this)}get path(){return Xe(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}static \u0275fac=(()=>{let e;return function(r){return(e||(e=E(t)))(r||t)}})();static \u0275dir=g({type:t,standalone:!1,features:[v]})}return t})();var zr={provide:Z,useExisting:_(()=>Gr)},Cn=Promise.resolve(),Gr=(()=>{class t extends Z{_changeDetectorRef;callSetDisabledState;control=new we;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new K;constructor(e,i,r,a,o,s){super(),this._changeDetectorRef=o,this.callSetDisabledState=s,this._parent=e,this._setValidators(i),this._setAsyncValidators(r),this.valueAccessor=$n(this,a)}ngOnChanges(e){if(this._checkForErrors(),!this._registered||"name"in e){if(this._registered&&(this._checkName(),this.formDirective)){let i=e.name.previousValue;this.formDirective.removeControl({name:i,path:this._getPath(i)})}this._setUpControl()}"isDisabled"in e&&this._updateDisabled(e),Bn(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){Be(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(e){Cn.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){let i=e.isDisabled.currentValue,r=i!==0&&ft(i);Cn.then(()=>{r&&!this.control.disabled?this.control.disable():!r&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?Xe(e,this._parent):[e]}static \u0275fac=function(i){return new(i||t)(h(A,9),h(S,10),h(de,10),h(J,10),h(dt,8),h(Ve,8))};static \u0275dir=g({type:t,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[b([zr]),v,ge]})}return t})();var Ts=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=g({type:t,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return t})(),Hr={provide:J,useExisting:_(()=>Ur),multi:!0},Ur=(()=>{class t extends Me{writeValue(e){let i=e??"";this.setProperty("value",i)}registerOnChange(e){this.onChange=i=>{e(i==""?null:parseFloat(i))}}static \u0275fac=(()=>{let e;return function(r){return(e||(e=E(t)))(r||t)}})();static \u0275dir=g({type:t,selectors:[["input","type","number","formControlName",""],["input","type","number","formControl",""],["input","type","number","ngModel",""]],hostBindings:function(i,r){i&1&&H("input",function(o){return r.onChange(o.target.value)})("blur",function(){return r.onTouched()})},standalone:!1,features:[b([Hr]),v]})}return t})();var Yn=new X("");var Br={provide:A,useExisting:_(()=>qn)},qn=(()=>{class t extends A{callSetDisabledState;get submitted(){return P(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=oe(()=>this._submittedReactive());_submittedReactive=re(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];form=null;ngSubmit=new K;constructor(e,i,r){super(),this.callSetDisabledState=r,this._setValidators(e),this._setAsyncValidators(i)}ngOnChanges(e){e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&($e(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(e){let i=this.form.get(e.path);return Be(i,e,this.callSetDisabledState),i.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),i}getControl(e){return this.form.get(e.path)}removeControl(e){vn(e.control||null,e,!1),Pr(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}getFormArray(e){return this.form.get(e.path)}updateModel(e,i){this.form.get(e.path).setValue(i)}onSubmit(e){return this._submittedReactive.set(!0),Wn(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new Ue(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0,i={}){this.form.reset(e,i),this._submittedReactive.set(!1)}_updateDomValue(){this.directives.forEach(e=>{let i=e.control,r=this.form.get(e.path);i!==r&&(vn(i||null,e),jr(r)&&(Be(r,e,this.callSetDisabledState),e.control=r))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let i=this.form.get(e.path);Un(i,e),i.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){if(this.form){let i=this.form.get(e.path);i&&kr(i,e)&&i.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){Dt(this.form,this),this._oldForm&&$e(this._oldForm,this)}static \u0275fac=function(i){return new(i||t)(h(S,10),h(de,10),h(Ve,8))};static \u0275dir=g({type:t,selectors:[["","formGroup",""]],hostBindings:function(i,r){i&1&&H("submit",function(o){return r.onSubmit(o)})("reset",function(){return r.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[b([Br]),v,ge]})}return t})(),Wr={provide:A,useExisting:_(()=>Xn)},Xn=(()=>{class t extends Lr{name=null;constructor(e,i,r){super(),this._parent=e,this._setValidators(i),this._setAsyncValidators(r)}_checkParentType(){Zn(this._parent)}static \u0275fac=function(i){return new(i||t)(h(A,13),h(S,10),h(de,10))};static \u0275dir=g({type:t,selectors:[["","formGroupName",""]],inputs:{name:[0,"formGroupName","name"]},standalone:!1,features:[b([Wr]),v]})}return t})(),$r={provide:A,useExisting:_(()=>Kn)},Kn=(()=>{class t extends A{_parent;name=null;constructor(e,i,r){super(),this._parent=e,this._setValidators(i),this._setAsyncValidators(r)}ngOnInit(){Zn(this._parent),this.formDirective.addFormArray(this)}ngOnDestroy(){this.formDirective?.removeFormArray(this)}get control(){return this.formDirective.getFormArray(this)}get formDirective(){return this._parent?this._parent.formDirective:null}get path(){return Xe(this.name==null?this.name:this.name.toString(),this._parent)}static \u0275fac=function(i){return new(i||t)(h(A,13),h(S,10),h(de,10))};static \u0275dir=g({type:t,selectors:[["","formArrayName",""]],inputs:{name:[0,"formArrayName","name"]},standalone:!1,features:[b([$r]),v]})}return t})();function Zn(t){return!(t instanceof Xn)&&!(t instanceof qn)&&!(t instanceof Kn)}var Yr={provide:Z,useExisting:_(()=>qr)},qr=(()=>{class t extends Z{_ngModelWarningConfig;_added=!1;viewModel;control;name=null;set isDisabled(e){}model;update=new K;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,i,r,a,o){super(),this._ngModelWarningConfig=o,this._parent=e,this._setValidators(i),this._setAsyncValidators(r),this.valueAccessor=$n(this,a)}ngOnChanges(e){this._added||this._setUpControl(),Bn(e,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}get path(){return Xe(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_setUpControl(){this.control=this.formDirective.addControl(this),this._added=!0}static \u0275fac=function(i){return new(i||t)(h(A,13),h(S,10),h(de,10),h(J,10),h(Yn,8))};static \u0275dir=g({type:t,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},standalone:!1,features:[b([Yr]),v,ge]})}return t})();var Xr={provide:J,useExisting:_(()=>Qn),multi:!0};function Jn(t,n){return t==null?`${n}`:(n&&typeof n=="object"&&(n="Object"),`${t}: ${n}`.slice(0,50))}function Kr(t){return t.split(":")[0]}var Qn=(()=>{class t extends Me{value;_optionMap=new Map;_idCounter=0;set compareWith(e){this._compareWith=e}_compareWith=Object.is;appRefInjector=Te(dn).injector;destroyRef=Te(ln);cdr=Te(dt);_queuedWrite=!1;_writeValueAfterRender(){this._queuedWrite||this.appRefInjector.destroyed||(this._queuedWrite=!0,cn({write:()=>{this.destroyRef.destroyed||(this._queuedWrite=!1,this.writeValue(this.value))}},{injector:this.appRefInjector}))}writeValue(e){this.cdr.markForCheck(),this.value=e;let i=this._getOptionId(e),r=Jn(i,e);this.setProperty("value",r)}registerOnChange(e){this.onChange=i=>{this.value=this._getOptionValue(i),e(this.value)}}_registerOption(){return(this._idCounter++).toString()}_getOptionId(e){for(let i of this._optionMap.keys())if(this._compareWith(this._optionMap.get(i),e))return i;return null}_getOptionValue(e){let i=Kr(e);return this._optionMap.has(i)?this._optionMap.get(i):e}static \u0275fac=(()=>{let e;return function(r){return(e||(e=E(t)))(r||t)}})();static \u0275dir=g({type:t,selectors:[["select","formControlName","",3,"multiple",""],["select","formControl","",3,"multiple",""],["select","ngModel","",3,"multiple",""]],hostBindings:function(i,r){i&1&&H("change",function(o){return r.onChange(o.target.value)})("blur",function(){return r.onTouched()})},inputs:{compareWith:"compareWith"},standalone:!1,features:[b([Xr]),v]})}return t})(),Rs=(()=>{class t{_element;_renderer;_select;id;constructor(e,i,r){this._element=e,this._renderer=i,this._select=r,this._select&&(this.id=this._select._registerOption())}set ngValue(e){this._select!=null&&(this._select._optionMap.set(this.id,e),this._setElementValue(Jn(this.id,e)),this._select._writeValueAfterRender())}set value(e){this._setElementValue(e),this._select&&this._select._writeValueAfterRender()}_setElementValue(e){this._renderer.setProperty(this._element.nativeElement,"value",e)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select._writeValueAfterRender())}static \u0275fac=function(i){return new(i||t)(h(ye),h(ve),h(Qn,9))};static \u0275dir=g({type:t,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"},standalone:!1})}return t})(),Zr={provide:J,useExisting:_(()=>ei),multi:!0};function An(t,n){return t==null?`${n}`:(typeof n=="string"&&(n=`'${n}'`),n&&typeof n=="object"&&(n="Object"),`${t}: ${n}`.slice(0,50))}function Jr(t){return t.split(":")[0]}var ei=(()=>{class t extends Me{value;_optionMap=new Map;_idCounter=0;set compareWith(e){this._compareWith=e}_compareWith=Object.is;writeValue(e){this.value=e;let i;if(Array.isArray(e)){let r=e.map(a=>this._getOptionId(a));i=(a,o)=>{a._setSelected(r.indexOf(o.toString())>-1)}}else i=(r,a)=>{r._setSelected(!1)};this._optionMap.forEach(i)}registerOnChange(e){this.onChange=i=>{let r=[],a=i.selectedOptions;if(a!==void 0){let o=a;for(let s=0;s<o.length;s++){let d=o[s],u=this._getOptionValue(d.value);r.push(u)}}else{let o=i.options;for(let s=0;s<o.length;s++){let d=o[s];if(d.selected){let u=this._getOptionValue(d.value);r.push(u)}}}this.value=r,e(r)}}_registerOption(e){let i=(this._idCounter++).toString();return this._optionMap.set(i,e),i}_getOptionId(e){for(let i of this._optionMap.keys())if(this._compareWith(this._optionMap.get(i)._value,e))return i;return null}_getOptionValue(e){let i=Jr(e);return this._optionMap.has(i)?this._optionMap.get(i)._value:e}static \u0275fac=(()=>{let e;return function(r){return(e||(e=E(t)))(r||t)}})();static \u0275dir=g({type:t,selectors:[["select","multiple","","formControlName",""],["select","multiple","","formControl",""],["select","multiple","","ngModel",""]],hostBindings:function(i,r){i&1&&H("change",function(o){return r.onChange(o.target)})("blur",function(){return r.onTouched()})},inputs:{compareWith:"compareWith"},standalone:!1,features:[b([Zr]),v]})}return t})(),js=(()=>{class t{_element;_renderer;_select;id;_value;constructor(e,i,r){this._element=e,this._renderer=i,this._select=r,this._select&&(this.id=this._select._registerOption(this))}set ngValue(e){this._select!=null&&(this._value=e,this._setElementValue(An(this.id,e)),this._select.writeValue(this._select.value))}set value(e){this._select?(this._value=e,this._setElementValue(An(this.id,e)),this._select.writeValue(this._select.value)):this._setElementValue(e)}_setElementValue(e){this._renderer.setProperty(this._element.nativeElement,"value",e)}_setSelected(e){this._renderer.setProperty(this._element.nativeElement,"selected",e)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}static \u0275fac=function(i){return new(i||t)(h(ye),h(ve),h(ei,9))};static \u0275dir=g({type:t,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"},standalone:!1})}return t})();function ti(t){return typeof t=="number"?t:parseInt(t,10)}function Qr(t){return typeof t=="number"?t:parseFloat(t)}var Ke=(()=>{class t{_validator=je;_onChange;_enabled;ngOnChanges(e){if(this.inputName in e){let i=this.normalizeInput(e[this.inputName].currentValue);this._enabled=this.enabled(i),this._validator=this._enabled?this.createValidator(i):je,this._onChange&&this._onChange()}}validate(e){return this._validator(e)}registerOnValidatorChange(e){this._onChange=e}enabled(e){return e!=null}static \u0275fac=function(i){return new(i||t)};static \u0275dir=g({type:t,features:[ge]})}return t})();var ea={provide:S,useExisting:_(()=>ta),multi:!0},ta=(()=>{class t extends Ke{min;inputName="min";normalizeInput=e=>Qr(e);createValidator=e=>Vn(e);static \u0275fac=(()=>{let e;return function(r){return(e||(e=E(t)))(r||t)}})();static \u0275dir=g({type:t,selectors:[["input","type","number","min","","formControlName",""],["input","type","number","min","","formControl",""],["input","type","number","min","","ngModel",""]],hostVars:1,hostBindings:function(i,r){i&2&&ae("min",r._enabled?r.min:null)},inputs:{min:"min"},standalone:!1,features:[b([ea]),v]})}return t})(),na={provide:S,useExisting:_(()=>ia),multi:!0};var ia=(()=>{class t extends Ke{required;inputName="required";normalizeInput=ft;createValidator=e=>En;enabled(e){return e}static \u0275fac=(()=>{let e;return function(r){return(e||(e=E(t)))(r||t)}})();static \u0275dir=g({type:t,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(i,r){i&2&&ae("required",r._enabled?"":null)},inputs:{required:"required"},standalone:!1,features:[b([na]),v]})}return t})();var ra={provide:S,useExisting:_(()=>aa),multi:!0},aa=(()=>{class t extends Ke{minlength;inputName="minlength";normalizeInput=e=>ti(e);createValidator=e=>Fn(e);static \u0275fac=(()=>{let e;return function(r){return(e||(e=E(t)))(r||t)}})();static \u0275dir=g({type:t,selectors:[["","minlength","","formControlName",""],["","minlength","","formControl",""],["","minlength","","ngModel",""]],hostVars:1,hostBindings:function(i,r){i&2&&ae("minlength",r._enabled?r.minlength:null)},inputs:{minlength:"minlength"},standalone:!1,features:[b([ra]),v]})}return t})(),oa={provide:S,useExisting:_(()=>sa),multi:!0},sa=(()=>{class t extends Ke{maxlength;inputName="maxlength";normalizeInput=e=>ti(e);createValidator=e=>In(e);static \u0275fac=(()=>{let e;return function(r){return(e||(e=E(t)))(r||t)}})();static \u0275dir=g({type:t,selectors:[["","maxlength","","formControlName",""],["","maxlength","","formControl",""],["","maxlength","","ngModel",""]],hostVars:1,hostBindings:function(i,r){i&2&&ae("maxlength",r._enabled?r.maxlength:null)},inputs:{maxlength:"maxlength"},standalone:!1,features:[b([oa]),v]})}return t})();var ni=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=G({type:t});static \u0275inj=z({})}return t})(),gt=class extends ce{constructor(n,e,i){super(Ct(e),At(i,e)),this.controls=n,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;at(n){return this.controls[this._adjustIndex(n)]}push(n,e={}){Array.isArray(n)?n.forEach(i=>{this.controls.push(i),this._registerControl(i)}):(this.controls.push(n),this._registerControl(n)),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}insert(n,e,i={}){this.controls.splice(n,0,e),this._registerControl(e),this.updateValueAndValidity({emitEvent:i.emitEvent})}removeAt(n,e={}){let i=this._adjustIndex(n);i<0&&(i=0),this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),this.controls.splice(i,1),this.updateValueAndValidity({emitEvent:e.emitEvent})}setControl(n,e,i={}){let r=this._adjustIndex(n);r<0&&(r=0),this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),this.controls.splice(r,1),e&&(this.controls.splice(r,0,e),this._registerControl(e)),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(n,e={}){Gn(this,!1,n),n.forEach((i,r)=>{zn(this,!1,r),this.at(r).setValue(i,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(n,e={}){n!=null&&(n.forEach((i,r)=>{this.at(r)&&this.at(r).patchValue(i,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(n=[],e={}){this._forEachChild((i,r)=>{i.reset(n[r],{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new xe(this))}getRawValue(){return this.controls.map(n=>n.getRawValue())}clear(n={}){this.controls.length<1||(this._forEachChild(e=>e._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:n.emitEvent}))}_adjustIndex(n){return n<0?n+this.length:n}_syncPendingControls(){let n=this.controls.reduce((e,i)=>i._syncPendingControls()?!0:e,!1);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){this.controls.forEach((e,i)=>{n(e,i)})}_updateValue(){this.value=this.controls.filter(n=>n.enabled||this.disabled).map(n=>n.value)}_anyControls(n){return this.controls.some(e=>e.enabled&&n(e))}_setUpControls(){this._forEachChild(n=>this._registerControl(n))}_allControlsDisabled(){for(let n of this.controls)if(n.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(n){n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)}_find(n){return this.at(n)??null}};function Dn(t){return!!t&&(t.asyncValidators!==void 0||t.validators!==void 0||t.updateOn!==void 0)}var Ls=(()=>{class t{useNonNullable=!1;get nonNullable(){let e=new t;return e.useNonNullable=!0,e}group(e,i=null){let r=this._reduceControls(e),a={};return Dn(i)?a=i:i!==null&&(a.validators=i.validator,a.asyncValidators=i.asyncValidator),new ue(r,a)}record(e,i=null){let r=this._reduceControls(e);return new pt(r,i)}control(e,i,r){let a={};return this.useNonNullable?(Dn(i)?a=i:(a.validators=i,a.asyncValidators=r),new we(e,V(w({},a),{nonNullable:!0}))):new we(e,i,r)}array(e,i,r){let a=e.map(o=>this._createControl(o));return new gt(a,i,r)}_reduceControls(e){let i={};return Object.keys(e).forEach(r=>{i[r]=this._createControl(e[r])}),i}_createControl(e){if(e instanceof we)return e;if(e instanceof ce)return e;if(Array.isArray(e)){let i=e[0],r=e.length>1?e[1]:null,a=e.length>2?e[2]:null;return this.control(i,r,a)}else return this.control(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=ct({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var ii=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:Ve,useValue:e.callSetDisabledState??qe}]}}static \u0275fac=function(i){return new(i||t)};static \u0275mod=G({type:t});static \u0275inj=z({imports:[ni]})}return t})(),ri=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:Yn,useValue:e.warnOnNgModelWithFormControl??"always"},{provide:Ve,useValue:e.callSetDisabledState??qe}]}}static \u0275fac=function(i){return new(i||t)};static \u0275mod=G({type:t});static \u0275inj=z({imports:[ni]})}return t})();function la(t,n,e){return(n=ua(n))in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function ai(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);n&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),e.push.apply(e,i)}return e}function l(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?ai(Object(e),!0).forEach(function(i){la(t,i,e[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):ai(Object(e)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(e,i))})}return t}function ca(t,n){if(typeof t!="object"||!t)return t;var e=t[Symbol.toPrimitive];if(e!==void 0){var i=e.call(t,n||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(t)}function ua(t){var n=ca(t,"string");return typeof n=="symbol"?n:n+""}var oi=()=>{},$t={},Oi={},ki=null,Ni={mark:oi,measure:oi};try{typeof window<"u"&&($t=window),typeof document<"u"&&(Oi=document),typeof MutationObserver<"u"&&(ki=MutationObserver),typeof performance<"u"&&(Ni=performance)}catch{}var{userAgent:si=""}=$t.navigator||{},W=$t,y=Oi,li=ki,Ze=Ni,Hs=!!W.document,j=!!y.documentElement&&!!y.head&&typeof y.addEventListener=="function"&&typeof y.createElement=="function",Pi=~si.indexOf("MSIE")||~si.indexOf("Trident/"),da=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,fa=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Ti={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},ha={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Ri=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],C="classic",it="duotone",ma="sharp",pa="sharp-duotone",ji=[C,it,ma,pa],ga={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},ya={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},va=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),_a={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},ba=["fak","fa-kit","fakd","fa-kit-duotone"],ci={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Ca=["kit"],Aa={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},Da=["fak","fakd"],wa={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},ui={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Je={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},xa=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Ma=["fak","fa-kit","fakd","fa-kit-duotone"],Va={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Ea={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},Fa={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},Ft={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},Ia=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],It=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...xa,...Ia],Sa=["solid","regular","light","thin","duotone","brands"],Li=[1,2,3,4,5,6,7,8,9,10],Oa=Li.concat([11,12,13,14,15,16,17,18,19,20]),ka=[...Object.keys(Fa),...Sa,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Je.GROUP,Je.SWAP_OPACITY,Je.PRIMARY,Je.SECONDARY].concat(Li.map(t=>"".concat(t,"x"))).concat(Oa.map(t=>"w-".concat(t))),Na={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},T="___FONT_AWESOME___",St=16,zi="fa",Gi="svg-inline--fa",ee="data-fa-i2svg",Ot="data-fa-pseudo-element",Pa="data-fa-pseudo-element-pending",Yt="data-prefix",qt="data-icon",di="fontawesome-i2svg",Ta="async",Ra=["HTML","HEAD","STYLE","SCRIPT"],Hi=(()=>{try{return!0}catch{return!1}})();function ke(t){return new Proxy(t,{get(n,e){return e in n?n[e]:n[C]}})}var Ui=l({},Ti);Ui[C]=l(l(l(l({},{"fa-duotone":"duotone"}),Ti[C]),ci.kit),ci["kit-duotone"]);var ja=ke(Ui),kt=l({},_a);kt[C]=l(l(l(l({},{duotone:"fad"}),kt[C]),ui.kit),ui["kit-duotone"]);var fi=ke(kt),Nt=l({},Ft);Nt[C]=l(l({},Nt[C]),wa.kit);var Xt=ke(Nt),Pt=l({},Ea);Pt[C]=l(l({},Pt[C]),Aa.kit);var Us=ke(Pt),La=da,Bi="fa-layers-text",za=fa,Ga=l({},ga),Bs=ke(Ga),Ha=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],wt=ha,Ua=[...Ca,...ka],Fe=W.FontAwesomeConfig||{};function Ba(t){var n=y.querySelector("script["+t+"]");if(n)return n.getAttribute(t)}function Wa(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}y&&typeof y.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(n=>{let[e,i]=n,r=Wa(Ba(e));r!=null&&(Fe[i]=r)});var Wi={styleDefault:"solid",familyDefault:C,cssPrefix:zi,replacementClass:Gi,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Fe.familyPrefix&&(Fe.cssPrefix=Fe.familyPrefix);var me=l(l({},Wi),Fe);me.autoReplaceSvg||(me.observeMutations=!1);var c={};Object.keys(Wi).forEach(t=>{Object.defineProperty(c,t,{enumerable:!0,set:function(n){me[t]=n,Ie.forEach(e=>e(c))},get:function(){return me[t]}})});Object.defineProperty(c,"familyPrefix",{enumerable:!0,set:function(t){me.cssPrefix=t,Ie.forEach(n=>n(c))},get:function(){return me.cssPrefix}});W.FontAwesomeConfig=c;var Ie=[];function $a(t){return Ie.push(t),()=>{Ie.splice(Ie.indexOf(t),1)}}var B=St,O={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Ya(t){if(!t||!j)return;let n=y.createElement("style");n.setAttribute("type","text/css"),n.innerHTML=t;let e=y.head.childNodes,i=null;for(let r=e.length-1;r>-1;r--){let a=e[r],o=(a.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(i=a)}return y.head.insertBefore(n,i),t}var qa="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Se(){let t=12,n="";for(;t-- >0;)n+=qa[Math.random()*62|0];return n}function pe(t){let n=[];for(let e=(t||[]).length>>>0;e--;)n[e]=t[e];return n}function Kt(t){return t.classList?pe(t.classList):(t.getAttribute("class")||"").split(" ").filter(n=>n)}function $i(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Xa(t){return Object.keys(t||{}).reduce((n,e)=>n+"".concat(e,'="').concat($i(t[e]),'" '),"").trim()}function rt(t){return Object.keys(t||{}).reduce((n,e)=>n+"".concat(e,": ").concat(t[e].trim(),";"),"")}function Zt(t){return t.size!==O.size||t.x!==O.x||t.y!==O.y||t.rotate!==O.rotate||t.flipX||t.flipY}function Ka(t){let{transform:n,containerWidth:e,iconWidth:i}=t,r={transform:"translate(".concat(e/2," 256)")},a="translate(".concat(n.x*32,", ").concat(n.y*32,") "),o="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),s="rotate(".concat(n.rotate," 0 0)"),d={transform:"".concat(a," ").concat(o," ").concat(s)},u={transform:"translate(".concat(i/2*-1," -256)")};return{outer:r,inner:d,path:u}}function Za(t){let{transform:n,width:e=St,height:i=St,startCentered:r=!1}=t,a="";return r&&Pi?a+="translate(".concat(n.x/B-e/2,"em, ").concat(n.y/B-i/2,"em) "):r?a+="translate(calc(-50% + ".concat(n.x/B,"em), calc(-50% + ").concat(n.y/B,"em)) "):a+="translate(".concat(n.x/B,"em, ").concat(n.y/B,"em) "),a+="scale(".concat(n.size/B*(n.flipX?-1:1),", ").concat(n.size/B*(n.flipY?-1:1),") "),a+="rotate(".concat(n.rotate,"deg) "),a}var Ja=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function Yi(){let t=zi,n=Gi,e=c.cssPrefix,i=c.replacementClass,r=Ja;if(e!==t||i!==n){let a=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(n),"g");r=r.replace(a,".".concat(e,"-")).replace(o,"--".concat(e,"-")).replace(s,".".concat(i))}return r}var hi=!1;function xt(){c.autoAddCss&&!hi&&(Ya(Yi()),hi=!0)}var Qa={mixout(){return{dom:{css:Yi,insertCss:xt}}},hooks(){return{beforeDOMElementCreation(){xt()},beforeI2svg(){xt()}}}},R=W||{};R[T]||(R[T]={});R[T].styles||(R[T].styles={});R[T].hooks||(R[T].hooks={});R[T].shims||(R[T].shims=[]);var k=R[T],qi=[],Xi=function(){y.removeEventListener("DOMContentLoaded",Xi),tt=1,qi.map(t=>t())},tt=!1;j&&(tt=(y.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(y.readyState),tt||y.addEventListener("DOMContentLoaded",Xi));function eo(t){j&&(tt?setTimeout(t,0):qi.push(t))}function Ne(t){let{tag:n,attributes:e={},children:i=[]}=t;return typeof t=="string"?$i(t):"<".concat(n," ").concat(Xa(e),">").concat(i.map(Ne).join(""),"</").concat(n,">")}function mi(t,n,e){if(t&&t[n]&&t[n][e])return{prefix:n,iconName:e,icon:t[n][e]}}var to=function(n,e){return function(i,r,a,o){return n.call(e,i,r,a,o)}},Mt=function(n,e,i,r){var a=Object.keys(n),o=a.length,s=r!==void 0?to(e,r):e,d,u,f;for(i===void 0?(d=1,f=n[a[0]]):(d=0,f=i);d<o;d++)u=a[d],f=s(f,n[u],u,n);return f};function no(t){let n=[],e=0,i=t.length;for(;e<i;){let r=t.charCodeAt(e++);if(r>=55296&&r<=56319&&e<i){let a=t.charCodeAt(e++);(a&64512)==56320?n.push(((r&1023)<<10)+(a&1023)+65536):(n.push(r),e--)}else n.push(r)}return n}function Tt(t){let n=no(t);return n.length===1?n[0].toString(16):null}function io(t,n){let e=t.length,i=t.charCodeAt(n),r;return i>=55296&&i<=56319&&e>n+1&&(r=t.charCodeAt(n+1),r>=56320&&r<=57343)?(i-55296)*1024+r-56320+65536:i}function pi(t){return Object.keys(t).reduce((n,e)=>{let i=t[e];return!!i.icon?n[i.iconName]=i.icon:n[e]=i,n},{})}function Rt(t,n){let e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},{skipHooks:i=!1}=e,r=pi(n);typeof k.hooks.addPack=="function"&&!i?k.hooks.addPack(t,pi(n)):k.styles[t]=l(l({},k.styles[t]||{}),r),t==="fas"&&Rt("fa",n)}var{styles:Oe,shims:ro}=k,Ki=Object.keys(Xt),ao=Ki.reduce((t,n)=>(t[n]=Object.keys(Xt[n]),t),{}),Jt=null,Zi={},Ji={},Qi={},er={},tr={};function oo(t){return~Ua.indexOf(t)}function so(t,n){let e=n.split("-"),i=e[0],r=e.slice(1).join("-");return i===t&&r!==""&&!oo(r)?r:null}var nr=()=>{let t=i=>Mt(Oe,(r,a,o)=>(r[o]=Mt(a,i,{}),r),{});Zi=t((i,r,a)=>(r[3]&&(i[r[3]]=a),r[2]&&r[2].filter(s=>typeof s=="number").forEach(s=>{i[s.toString(16)]=a}),i)),Ji=t((i,r,a)=>(i[a]=a,r[2]&&r[2].filter(s=>typeof s=="string").forEach(s=>{i[s]=a}),i)),tr=t((i,r,a)=>{let o=r[2];return i[a]=a,o.forEach(s=>{i[s]=a}),i});let n="far"in Oe||c.autoFetchSvg,e=Mt(ro,(i,r)=>{let a=r[0],o=r[1],s=r[2];return o==="far"&&!n&&(o="fas"),typeof a=="string"&&(i.names[a]={prefix:o,iconName:s}),typeof a=="number"&&(i.unicodes[a.toString(16)]={prefix:o,iconName:s}),i},{names:{},unicodes:{}});Qi=e.names,er=e.unicodes,Jt=at(c.styleDefault,{family:c.familyDefault})};$a(t=>{Jt=at(t.styleDefault,{family:c.familyDefault})});nr();function Qt(t,n){return(Zi[t]||{})[n]}function lo(t,n){return(Ji[t]||{})[n]}function Q(t,n){return(tr[t]||{})[n]}function ir(t){return Qi[t]||{prefix:null,iconName:null}}function co(t){let n=er[t],e=Qt("fas",t);return n||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function $(){return Jt}var rr=()=>({prefix:null,iconName:null,rest:[]});function uo(t){let n=C,e=Ki.reduce((i,r)=>(i[r]="".concat(c.cssPrefix,"-").concat(r),i),{});return ji.forEach(i=>{(t.includes(e[i])||t.some(r=>ao[i].includes(r)))&&(n=i)}),n}function at(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{family:e=C}=n,i=ja[e][t];if(e===it&&!t)return"fad";let r=fi[e][t]||fi[e][i],a=t in k.styles?t:null;return r||a||null}function fo(t){let n=[],e=null;return t.forEach(i=>{let r=so(c.cssPrefix,i);r?e=r:i&&n.push(i)}),{iconName:e,rest:n}}function gi(t){return t.sort().filter((n,e,i)=>i.indexOf(n)===e)}function ot(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{skipLookups:e=!1}=n,i=null,r=It.concat(Ma),a=gi(t.filter(p=>r.includes(p))),o=gi(t.filter(p=>!It.includes(p))),s=a.filter(p=>(i=p,!Ri.includes(p))),[d=null]=s,u=uo(a),f=l(l({},fo(o)),{},{prefix:at(d,{family:u})});return l(l(l({},f),go({values:t,family:u,styles:Oe,config:c,canonical:f,givenPrefix:i})),ho(e,i,f))}function ho(t,n,e){let{prefix:i,iconName:r}=e;if(t||!i||!r)return{prefix:i,iconName:r};let a=n==="fa"?ir(r):{},o=Q(i,r);return r=a.iconName||o||r,i=a.prefix||i,i==="far"&&!Oe.far&&Oe.fas&&!c.autoFetchSvg&&(i="fas"),{prefix:i,iconName:r}}var mo=ji.filter(t=>t!==C||t!==it),po=Object.keys(Ft).filter(t=>t!==C).map(t=>Object.keys(Ft[t])).flat();function go(t){let{values:n,family:e,canonical:i,givenPrefix:r="",styles:a={},config:o={}}=t,s=e===it,d=n.includes("fa-duotone")||n.includes("fad"),u=o.familyDefault==="duotone",f=i.prefix==="fad"||i.prefix==="fa-duotone";if(!s&&(d||u||f)&&(i.prefix="fad"),(n.includes("fa-brands")||n.includes("fab"))&&(i.prefix="fab"),!i.prefix&&mo.includes(e)&&(Object.keys(a).find(m=>po.includes(m))||o.autoFetchSvg)){let m=va.get(e).defaultShortPrefixId;i.prefix=m,i.iconName=Q(i.prefix,i.iconName)||i.iconName}return(i.prefix==="fa"||r==="fa")&&(i.prefix=$()||"fas"),i}var jt=class{constructor(){this.definitions={}}add(){for(var n=arguments.length,e=new Array(n),i=0;i<n;i++)e[i]=arguments[i];let r=e.reduce(this._pullDefinitions,{});Object.keys(r).forEach(a=>{this.definitions[a]=l(l({},this.definitions[a]||{}),r[a]),Rt(a,r[a]);let o=Xt[C][a];o&&Rt(o,r[a]),nr()})}reset(){this.definitions={}}_pullDefinitions(n,e){let i=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(i).map(r=>{let{prefix:a,iconName:o,icon:s}=i[r],d=s[2];n[a]||(n[a]={}),d.length>0&&d.forEach(u=>{typeof u=="string"&&(n[a][u]=s)}),n[a][o]=s}),n}},yi=[],fe={},he={},yo=Object.keys(he);function vo(t,n){let{mixoutsTo:e}=n;return yi=t,fe={},Object.keys(he).forEach(i=>{yo.indexOf(i)===-1&&delete he[i]}),yi.forEach(i=>{let r=i.mixout?i.mixout():{};if(Object.keys(r).forEach(a=>{typeof r[a]=="function"&&(e[a]=r[a]),typeof r[a]=="object"&&Object.keys(r[a]).forEach(o=>{e[a]||(e[a]={}),e[a][o]=r[a][o]})}),i.hooks){let a=i.hooks();Object.keys(a).forEach(o=>{fe[o]||(fe[o]=[]),fe[o].push(a[o])})}i.provides&&i.provides(he)}),e}function Lt(t,n){for(var e=arguments.length,i=new Array(e>2?e-2:0),r=2;r<e;r++)i[r-2]=arguments[r];return(fe[t]||[]).forEach(o=>{n=o.apply(null,[n,...i])}),n}function te(t){for(var n=arguments.length,e=new Array(n>1?n-1:0),i=1;i<n;i++)e[i-1]=arguments[i];(fe[t]||[]).forEach(a=>{a.apply(null,e)})}function Y(){let t=arguments[0],n=Array.prototype.slice.call(arguments,1);return he[t]?he[t].apply(null,n):void 0}function zt(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:n}=t,e=t.prefix||$();if(n)return n=Q(e,n)||n,mi(ar.definitions,e,n)||mi(k.styles,e,n)}var ar=new jt,_o=()=>{c.autoReplaceSvg=!1,c.observeMutations=!1,te("noAuto")},bo={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return j?(te("beforeI2svg",t),Y("pseudoElements2svg",t),Y("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:n}=t;c.autoReplaceSvg===!1&&(c.autoReplaceSvg=!0),c.observeMutations=!0,eo(()=>{Ao({autoReplaceSvgRoot:n}),te("watch",t)})}},Co={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Q(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){let n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],e=at(t[0]);return{prefix:e,iconName:Q(e,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(c.cssPrefix,"-"))>-1||t.match(La))){let n=ot(t.split(" "),{skipLookups:!0});return{prefix:n.prefix||$(),iconName:Q(n.prefix,n.iconName)||n.iconName}}if(typeof t=="string"){let n=$();return{prefix:n,iconName:Q(n,t)||t}}}},M={noAuto:_o,config:c,dom:bo,parse:Co,library:ar,findIconDefinition:zt,toHtml:Ne},Ao=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:n=y}=t;(Object.keys(k.styles).length>0||c.autoFetchSvg)&&j&&c.autoReplaceSvg&&M.dom.i2svg({node:n})};function st(t,n){return Object.defineProperty(t,"abstract",{get:n}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(e=>Ne(e))}}),Object.defineProperty(t,"node",{get:function(){if(!j)return;let e=y.createElement("div");return e.innerHTML=t.html,e.children}}),t}function Do(t){let{children:n,main:e,mask:i,attributes:r,styles:a,transform:o}=t;if(Zt(o)&&e.found&&!i.found){let{width:s,height:d}=e,u={x:s/d/2,y:.5};r.style=rt(l(l({},a),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:n}]}function wo(t){let{prefix:n,iconName:e,children:i,attributes:r,symbol:a}=t,o=a===!0?"".concat(n,"-").concat(c.cssPrefix,"-").concat(e):a;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:l(l({},r),{},{id:o}),children:i}]}]}function en(t){let{icons:{main:n,mask:e},prefix:i,iconName:r,transform:a,symbol:o,title:s,maskId:d,titleId:u,extra:f,watchable:p=!1}=t,{width:m,height:D}=e.found?e:n,L=Da.includes(i),q=[c.replacementClass,r?"".concat(c.cssPrefix,"-").concat(r):""].filter(ie=>f.classes.indexOf(ie)===-1).filter(ie=>ie!==""||!!ie).concat(f.classes).join(" "),F={children:[],attributes:l(l({},f.attributes),{},{"data-prefix":i,"data-icon":r,class:q,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(m," ").concat(D)})},N=L&&!~f.classes.indexOf("fa-fw")?{width:"".concat(m/D*16*.0625,"em")}:{};p&&(F.attributes[ee]=""),s&&(F.children.push({tag:"title",attributes:{id:F.attributes["aria-labelledby"]||"title-".concat(u||Se())},children:[s]}),delete F.attributes.title);let x=l(l({},F),{},{prefix:i,iconName:r,main:n,mask:e,maskId:d,transform:a,symbol:o,styles:l(l({},N),f.styles)}),{children:I,attributes:ne}=e.found&&n.found?Y("generateAbstractMask",x)||{children:[],attributes:{}}:Y("generateAbstractIcon",x)||{children:[],attributes:{}};return x.children=I,x.attributes=ne,o?wo(x):Do(x)}function vi(t){let{content:n,width:e,height:i,transform:r,title:a,extra:o,watchable:s=!1}=t,d=l(l(l({},o.attributes),a?{title:a}:{}),{},{class:o.classes.join(" ")});s&&(d[ee]="");let u=l({},o.styles);Zt(r)&&(u.transform=Za({transform:r,startCentered:!0,width:e,height:i}),u["-webkit-transform"]=u.transform);let f=rt(u);f.length>0&&(d.style=f);let p=[];return p.push({tag:"span",attributes:d,children:[n]}),a&&p.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),p}function xo(t){let{content:n,title:e,extra:i}=t,r=l(l(l({},i.attributes),e?{title:e}:{}),{},{class:i.classes.join(" ")}),a=rt(i.styles);a.length>0&&(r.style=a);let o=[];return o.push({tag:"span",attributes:r,children:[n]}),e&&o.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),o}var{styles:Vt}=k;function Gt(t){let n=t[0],e=t[1],[i]=t.slice(4),r=null;return Array.isArray(i)?r={tag:"g",attributes:{class:"".concat(c.cssPrefix,"-").concat(wt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(c.cssPrefix,"-").concat(wt.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(c.cssPrefix,"-").concat(wt.PRIMARY),fill:"currentColor",d:i[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:n,height:e,icon:r}}var Mo={found:!1,width:512,height:512};function Vo(t,n){!Hi&&!c.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(n,'" is missing.'))}function Ht(t,n){let e=n;return n==="fa"&&c.styleDefault!==null&&(n=$()),new Promise((i,r)=>{if(e==="fa"){let a=ir(t)||{};t=a.iconName||t,n=a.prefix||n}if(t&&n&&Vt[n]&&Vt[n][t]){let a=Vt[n][t];return i(Gt(a))}Vo(t,n),i(l(l({},Mo),{},{icon:c.showMissingIcons&&t?Y("missingIconAbstract")||{}:{}}))})}var _i=()=>{},Ut=c.measurePerformance&&Ze&&Ze.mark&&Ze.measure?Ze:{mark:_i,measure:_i},Ee='FA "6.7.2"',Eo=t=>(Ut.mark("".concat(Ee," ").concat(t," begins")),()=>or(t)),or=t=>{Ut.mark("".concat(Ee," ").concat(t," ends")),Ut.measure("".concat(Ee," ").concat(t),"".concat(Ee," ").concat(t," begins"),"".concat(Ee," ").concat(t," ends"))},tn={begin:Eo,end:or},Qe=()=>{};function bi(t){return typeof(t.getAttribute?t.getAttribute(ee):null)=="string"}function Fo(t){let n=t.getAttribute?t.getAttribute(Yt):null,e=t.getAttribute?t.getAttribute(qt):null;return n&&e}function Io(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(c.replacementClass)}function So(){return c.autoReplaceSvg===!0?et.replace:et[c.autoReplaceSvg]||et.replace}function Oo(t){return y.createElementNS("http://www.w3.org/2000/svg",t)}function ko(t){return y.createElement(t)}function sr(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{ceFn:e=t.tag==="svg"?Oo:ko}=n;if(typeof t=="string")return y.createTextNode(t);let i=e(t.tag);return Object.keys(t.attributes||[]).forEach(function(a){i.setAttribute(a,t.attributes[a])}),(t.children||[]).forEach(function(a){i.appendChild(sr(a,{ceFn:e}))}),i}function No(t){let n=" ".concat(t.outerHTML," ");return n="".concat(n,"Font Awesome fontawesome.com "),n}var et={replace:function(t){let n=t[0];if(n.parentNode)if(t[1].forEach(e=>{n.parentNode.insertBefore(sr(e),n)}),n.getAttribute(ee)===null&&c.keepOriginalSource){let e=y.createComment(No(n));n.parentNode.replaceChild(e,n)}else n.remove()},nest:function(t){let n=t[0],e=t[1];if(~Kt(n).indexOf(c.replacementClass))return et.replace(t);let i=new RegExp("".concat(c.cssPrefix,"-.*"));if(delete e[0].attributes.id,e[0].attributes.class){let a=e[0].attributes.class.split(" ").reduce((o,s)=>(s===c.replacementClass||s.match(i)?o.toSvg.push(s):o.toNode.push(s),o),{toNode:[],toSvg:[]});e[0].attributes.class=a.toSvg.join(" "),a.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",a.toNode.join(" "))}let r=e.map(a=>Ne(a)).join(`
`);n.setAttribute(ee,""),n.innerHTML=r}};function Ci(t){t()}function lr(t,n){let e=typeof n=="function"?n:Qe;if(t.length===0)e();else{let i=Ci;c.mutateApproach===Ta&&(i=W.requestAnimationFrame||Ci),i(()=>{let r=So(),a=tn.begin("mutate");t.map(r),a(),e()})}}var nn=!1;function cr(){nn=!0}function Bt(){nn=!1}var nt=null;function Ai(t){if(!li||!c.observeMutations)return;let{treeCallback:n=Qe,nodeCallback:e=Qe,pseudoElementsCallback:i=Qe,observeMutationsRoot:r=y}=t;nt=new li(a=>{if(nn)return;let o=$();pe(a).forEach(s=>{if(s.type==="childList"&&s.addedNodes.length>0&&!bi(s.addedNodes[0])&&(c.searchPseudoElements&&i(s.target),n(s.target)),s.type==="attributes"&&s.target.parentNode&&c.searchPseudoElements&&i(s.target.parentNode),s.type==="attributes"&&bi(s.target)&&~Ha.indexOf(s.attributeName))if(s.attributeName==="class"&&Fo(s.target)){let{prefix:d,iconName:u}=ot(Kt(s.target));s.target.setAttribute(Yt,d||o),u&&s.target.setAttribute(qt,u)}else Io(s.target)&&e(s.target)})}),j&&nt.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Po(){nt&&nt.disconnect()}function To(t){let n=t.getAttribute("style"),e=[];return n&&(e=n.split(";").reduce((i,r)=>{let a=r.split(":"),o=a[0],s=a.slice(1);return o&&s.length>0&&(i[o]=s.join(":").trim()),i},{})),e}function Ro(t){let n=t.getAttribute("data-prefix"),e=t.getAttribute("data-icon"),i=t.innerText!==void 0?t.innerText.trim():"",r=ot(Kt(t));return r.prefix||(r.prefix=$()),n&&e&&(r.prefix=n,r.iconName=e),r.iconName&&r.prefix||(r.prefix&&i.length>0&&(r.iconName=lo(r.prefix,t.innerText)||Qt(r.prefix,Tt(t.innerText))),!r.iconName&&c.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function jo(t){let n=pe(t.attributes).reduce((r,a)=>(r.name!=="class"&&r.name!=="style"&&(r[a.name]=a.value),r),{}),e=t.getAttribute("title"),i=t.getAttribute("data-fa-title-id");return c.autoA11y&&(e?n["aria-labelledby"]="".concat(c.replacementClass,"-title-").concat(i||Se()):(n["aria-hidden"]="true",n.focusable="false")),n}function Lo(){return{iconName:null,title:null,titleId:null,prefix:null,transform:O,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Di(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},{iconName:e,prefix:i,rest:r}=Ro(t),a=jo(t),o=Lt("parseNodeAttributes",{},t),s=n.styleParser?To(t):[];return l({iconName:e,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:O,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:s,attributes:a}},o)}var{styles:zo}=k;function ur(t){let n=c.autoReplaceSvg==="nest"?Di(t,{styleParser:!1}):Di(t);return~n.extra.classes.indexOf(Bi)?Y("generateLayersText",t,n):Y("generateSvgReplacementMutation",t,n)}function Go(){return[...ba,...It]}function wi(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!j)return Promise.resolve();let e=y.documentElement.classList,i=f=>e.add("".concat(di,"-").concat(f)),r=f=>e.remove("".concat(di,"-").concat(f)),a=c.autoFetchSvg?Go():Ri.concat(Object.keys(zo));a.includes("fa")||a.push("fa");let o=[".".concat(Bi,":not([").concat(ee,"])")].concat(a.map(f=>".".concat(f,":not([").concat(ee,"])"))).join(", ");if(o.length===0)return Promise.resolve();let s=[];try{s=pe(t.querySelectorAll(o))}catch{}if(s.length>0)i("pending"),r("complete");else return Promise.resolve();let d=tn.begin("onTree"),u=s.reduce((f,p)=>{try{let m=ur(p);m&&f.push(m)}catch(m){Hi||m.name==="MissingIcon"&&console.error(m)}return f},[]);return new Promise((f,p)=>{Promise.all(u).then(m=>{lr(m,()=>{i("active"),i("complete"),r("pending"),typeof n=="function"&&n(),d(),f()})}).catch(m=>{d(),p(m)})})}function Ho(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ur(t).then(e=>{e&&lr([e],n)})}function Uo(t){return function(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=(n||{}).icon?n:zt(n||{}),{mask:r}=e;return r&&(r=(r||{}).icon?r:zt(r||{})),t(i,l(l({},e),{},{mask:r}))}}var Bo=function(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:e=O,symbol:i=!1,mask:r=null,maskId:a=null,title:o=null,titleId:s=null,classes:d=[],attributes:u={},styles:f={}}=n;if(!t)return;let{prefix:p,iconName:m,icon:D}=t;return st(l({type:"icon"},t),()=>(te("beforeDOMElementCreation",{iconDefinition:t,params:n}),c.autoA11y&&(o?u["aria-labelledby"]="".concat(c.replacementClass,"-title-").concat(s||Se()):(u["aria-hidden"]="true",u.focusable="false")),en({icons:{main:Gt(D),mask:r?Gt(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:p,iconName:m,transform:l(l({},O),e),symbol:i,title:o,maskId:a,titleId:s,extra:{attributes:u,styles:f,classes:d}})))},Wo={mixout(){return{icon:Uo(Bo)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=wi,t.nodeCallback=Ho,t}}},provides(t){t.i2svg=function(n){let{node:e=y,callback:i=()=>{}}=n;return wi(e,i)},t.generateSvgReplacementMutation=function(n,e){let{iconName:i,title:r,titleId:a,prefix:o,transform:s,symbol:d,mask:u,maskId:f,extra:p}=e;return new Promise((m,D)=>{Promise.all([Ht(i,o),u.iconName?Ht(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(L=>{let[q,F]=L;m([n,en({icons:{main:q,mask:F},prefix:o,iconName:i,transform:s,symbol:d,maskId:f,title:r,titleId:a,extra:p,watchable:!0})])}).catch(D)})},t.generateAbstractIcon=function(n){let{children:e,attributes:i,main:r,transform:a,styles:o}=n,s=rt(o);s.length>0&&(i.style=s);let d;return Zt(a)&&(d=Y("generateAbstractTransformGrouping",{main:r,transform:a,containerWidth:r.width,iconWidth:r.width})),e.push(d||r.icon),{children:e,attributes:i}}}},$o={mixout(){return{layer(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{classes:e=[]}=n;return st({type:"layer"},()=>{te("beforeDOMElementCreation",{assembler:t,params:n});let i=[];return t(r=>{Array.isArray(r)?r.map(a=>{i=i.concat(a.abstract)}):i=i.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(c.cssPrefix,"-layers"),...e].join(" ")},children:i}]})}}}},Yo={mixout(){return{counter(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{title:e=null,classes:i=[],attributes:r={},styles:a={}}=n;return st({type:"counter",content:t},()=>(te("beforeDOMElementCreation",{content:t,params:n}),xo({content:t.toString(),title:e,extra:{attributes:r,styles:a,classes:["".concat(c.cssPrefix,"-layers-counter"),...i]}})))}}}},qo={mixout(){return{text(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:e=O,title:i=null,classes:r=[],attributes:a={},styles:o={}}=n;return st({type:"text",content:t},()=>(te("beforeDOMElementCreation",{content:t,params:n}),vi({content:t,transform:l(l({},O),e),title:i,extra:{attributes:a,styles:o,classes:["".concat(c.cssPrefix,"-layers-text"),...r]}})))}}},provides(t){t.generateLayersText=function(n,e){let{title:i,transform:r,extra:a}=e,o=null,s=null;if(Pi){let d=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();o=u.width/d,s=u.height/d}return c.autoA11y&&!i&&(a.attributes["aria-hidden"]="true"),Promise.resolve([n,vi({content:n.innerHTML,width:o,height:s,transform:r,title:i,extra:a,watchable:!0})])}}},Xo=new RegExp('"',"ug"),xi=[1105920,1112319],Mi=l(l(l(l({},{FontAwesome:{normal:"fas",400:"fas"}}),ya),Na),Va),Wt=Object.keys(Mi).reduce((t,n)=>(t[n.toLowerCase()]=Mi[n],t),{}),Ko=Object.keys(Wt).reduce((t,n)=>{let e=Wt[n];return t[n]=e[900]||[...Object.entries(e)][0][1],t},{});function Zo(t){let n=t.replace(Xo,""),e=io(n,0),i=e>=xi[0]&&e<=xi[1],r=n.length===2?n[0]===n[1]:!1;return{value:Tt(r?n[0]:n),isSecondary:i||r}}function Jo(t,n){let e=t.replace(/^['"]|['"]$/g,"").toLowerCase(),i=parseInt(n),r=isNaN(i)?"normal":i;return(Wt[e]||{})[r]||Ko[e]}function Vi(t,n){let e="".concat(Pa).concat(n.replace(":","-"));return new Promise((i,r)=>{if(t.getAttribute(e)!==null)return i();let o=pe(t.children).filter(m=>m.getAttribute(Ot)===n)[0],s=W.getComputedStyle(t,n),d=s.getPropertyValue("font-family"),u=d.match(za),f=s.getPropertyValue("font-weight"),p=s.getPropertyValue("content");if(o&&!u)return t.removeChild(o),i();if(u&&p!=="none"&&p!==""){let m=s.getPropertyValue("content"),D=Jo(d,f),{value:L,isSecondary:q}=Zo(m),F=u[0].startsWith("FontAwesome"),N=Qt(D,L),x=N;if(F){let I=co(L);I.iconName&&I.prefix&&(N=I.iconName,D=I.prefix)}if(N&&!q&&(!o||o.getAttribute(Yt)!==D||o.getAttribute(qt)!==x)){t.setAttribute(e,x),o&&t.removeChild(o);let I=Lo(),{extra:ne}=I;ne.attributes[Ot]=n,Ht(N,D).then(ie=>{let hr=en(l(l({},I),{},{icons:{main:ie,mask:rr()},prefix:D,iconName:x,extra:ne,watchable:!0})),lt=y.createElementNS("http://www.w3.org/2000/svg","svg");n==="::before"?t.insertBefore(lt,t.firstChild):t.appendChild(lt),lt.outerHTML=hr.map(mr=>Ne(mr)).join(`
`),t.removeAttribute(e),i()}).catch(r)}else i()}else i()})}function Qo(t){return Promise.all([Vi(t,"::before"),Vi(t,"::after")])}function es(t){return t.parentNode!==document.head&&!~Ra.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Ot)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Ei(t){if(j)return new Promise((n,e)=>{let i=pe(t.querySelectorAll("*")).filter(es).map(Qo),r=tn.begin("searchPseudoElements");cr(),Promise.all(i).then(()=>{r(),Bt(),n()}).catch(()=>{r(),Bt(),e()})})}var ts={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=Ei,t}}},provides(t){t.pseudoElements2svg=function(n){let{node:e=y}=n;c.searchPseudoElements&&Ei(e)}}},Fi=!1,ns={mixout(){return{dom:{unwatch(){cr(),Fi=!0}}}},hooks(){return{bootstrap(){Ai(Lt("mutationObserverCallbacks",{}))},noAuto(){Po()},watch(t){let{observeMutationsRoot:n}=t;Fi?Bt():Ai(Lt("mutationObserverCallbacks",{observeMutationsRoot:n}))}}}},Ii=t=>{let n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((e,i)=>{let r=i.toLowerCase().split("-"),a=r[0],o=r.slice(1).join("-");if(a&&o==="h")return e.flipX=!0,e;if(a&&o==="v")return e.flipY=!0,e;if(o=parseFloat(o),isNaN(o))return e;switch(a){case"grow":e.size=e.size+o;break;case"shrink":e.size=e.size-o;break;case"left":e.x=e.x-o;break;case"right":e.x=e.x+o;break;case"up":e.y=e.y-o;break;case"down":e.y=e.y+o;break;case"rotate":e.rotate=e.rotate+o;break}return e},n)},is={mixout(){return{parse:{transform:t=>Ii(t)}}},hooks(){return{parseNodeAttributes(t,n){let e=n.getAttribute("data-fa-transform");return e&&(t.transform=Ii(e)),t}}},provides(t){t.generateAbstractTransformGrouping=function(n){let{main:e,transform:i,containerWidth:r,iconWidth:a}=n,o={transform:"translate(".concat(r/2," 256)")},s="translate(".concat(i.x*32,", ").concat(i.y*32,") "),d="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),u="rotate(".concat(i.rotate," 0 0)"),f={transform:"".concat(s," ").concat(d," ").concat(u)},p={transform:"translate(".concat(a/2*-1," -256)")},m={outer:o,inner:f,path:p};return{tag:"g",attributes:l({},m.outer),children:[{tag:"g",attributes:l({},m.inner),children:[{tag:e.icon.tag,children:e.icon.children,attributes:l(l({},e.icon.attributes),m.path)}]}]}}}},Et={x:0,y:0,width:"100%",height:"100%"};function Si(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||n)&&(t.attributes.fill="black"),t}function rs(t){return t.tag==="g"?t.children:[t]}var as={hooks(){return{parseNodeAttributes(t,n){let e=n.getAttribute("data-fa-mask"),i=e?ot(e.split(" ").map(r=>r.trim())):rr();return i.prefix||(i.prefix=$()),t.mask=i,t.maskId=n.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(n){let{children:e,attributes:i,main:r,mask:a,maskId:o,transform:s}=n,{width:d,icon:u}=r,{width:f,icon:p}=a,m=Ka({transform:s,containerWidth:f,iconWidth:d}),D={tag:"rect",attributes:l(l({},Et),{},{fill:"white"})},L=u.children?{children:u.children.map(Si)}:{},q={tag:"g",attributes:l({},m.inner),children:[Si(l({tag:u.tag,attributes:l(l({},u.attributes),m.path)},L))]},F={tag:"g",attributes:l({},m.outer),children:[q]},N="mask-".concat(o||Se()),x="clip-".concat(o||Se()),I={tag:"mask",attributes:l(l({},Et),{},{id:N,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[D,F]},ne={tag:"defs",children:[{tag:"clipPath",attributes:{id:x},children:rs(p)},I]};return e.push(ne,{tag:"rect",attributes:l({fill:"currentColor","clip-path":"url(#".concat(x,")"),mask:"url(#".concat(N,")")},Et)}),{children:e,attributes:i}}}},os={provides(t){let n=!1;W.matchMedia&&(n=W.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){let e=[],i={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};e.push({tag:"path",attributes:l(l({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});let a=l(l({},r),{},{attributeName:"opacity"}),o={tag:"circle",attributes:l(l({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||o.children.push({tag:"animate",attributes:l(l({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:l(l({},a),{},{values:"1;0;1;1;0;1;"})}),e.push(o),e.push({tag:"path",attributes:l(l({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:l(l({},a),{},{values:"1;0;0;0;0;1;"})}]}),n||e.push({tag:"path",attributes:l(l({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:l(l({},a),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:e}}}},ss={hooks(){return{parseNodeAttributes(t,n){let e=n.getAttribute("data-fa-symbol"),i=e===null?!1:e===""?!0:e;return t.symbol=i,t}}}},ls=[Qa,Wo,$o,Yo,qo,ts,ns,is,as,os,ss];vo(ls,{mixoutsTo:M});var Ws=M.noAuto,cs=M.config,$s=M.library,us=M.dom,ds=M.parse,Ys=M.findIconDefinition,qs=M.toHtml,fs=M.icon,Xs=M.layer,hs=M.text,ms=M.counter;var dr=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=G({type:t});static \u0275inj=z({})}return t})();var fr=class t{static \u0275fac=function(e){return new(e||t)};static \u0275mod=G({type:t});static \u0275inj=z({imports:[fn,hn,dr,ii,ri]})};export{gr as a,Mn as b,mn as c,ks as d,Ns as e,Rr as f,Gr as g,Ts as h,Ur as i,qn as j,Xn as k,Kn as l,qr as m,Qn as n,Rs as o,js as p,ta as q,ia as r,aa as s,sa as t,Ls as u,ii as v,ri as w,dr as x,fr as y};
