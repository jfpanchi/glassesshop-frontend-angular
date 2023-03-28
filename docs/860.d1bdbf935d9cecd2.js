"use strict";(self.webpackChunkglassesshop_frontend_angular=self.webpackChunkglassesshop_frontend_angular||[]).push([[860],{860:(x,l,o)=>{o.r(l),o.d(l,{ShopModule:()=>v});var r=o(895),a=o(322),e=o(256);const p=[{id:"GLA1",img:"/assets/glasses/glasse-1.png",precio:30,color:"#211526",description:"Gafas Redondas"},{id:"GLA2",img:"./assets/glasses/glasse-2.png",precio:35,color:"#261109",description:"Gafas Aviador"},{id:"GLA3",img:"./assets/glasses/glasse-3.png",precio:35,color:"#0D0D0D",description:"Gafas Cuadradas"},{id:"GLA4",img:"./assets/glasses/glasse-4.png",precio:30,color:"#261109",description:"Gafas Ovaladas"},{id:"GLA5",img:"./assets/glasses/glasse-5.png",precio:30,color:"#211526",description:"Gafas Redondas"},{id:"GLA6",img:"./assets/glasses/glasse-6.png",precio:25,color:"#262626",description:"Gafas Fiesta"}];let d=(()=>{class t{constructor(){this._data=p}get data(){return this._data}getGlasse(s){return this._data[s]}}return t.\u0275fac=function(s){return new(s||t)},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const h=function(t){return{"background-color":t}},g=function(t){return{disabled:t}};let u=(()=>{class t{constructor(s,n,c){this.activateRouter=s,this.router=n,this.glassesDataService=c,this.glasse=[],this.isDisabledNext=!1,this.isDisabledPreview=!1,this.activateRouter.params.subscribe(({id:C})=>{this.id=C,this.isDisabledNext=!(this.id<this.glassesDataService.data.length-1),this.isDisabledPreview=!(this.id>0),this.glasse=this.glassesDataService.getGlasse(this.id)})}ngOnInit(){}next(){++this.id,this.router.navigate(["/shop/glasse",this.id])}preview(){--this.id,this.router.navigate(["/shop/glasse",this.id])}}return t.\u0275fac=function(s){return new(s||t)(e.Y36(a.gz),e.Y36(a.F0),e.Y36(d))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-glasse"]],decls:24,vars:13,consts:[[1,"glasse"],[1,"glasse-content"],[1,"img-glasse"],[3,"src"],[1,"glasse-details"],[1,"details"],[1,"price"],[1,"divider"],["width","2px","noshade","noshade",1,"line"],[1,"color"],[1,"color-container"],[1,"color-select",3,"ngStyle"],[1,"product"],[1,"buy"],[1,"buttons"],[1,"next"],[3,"ngClass","click"],[1,"fa-solid","fa-chevron-right","fa-6x"],[1,"preview"],[1,"fa-solid","fa-chevron-left","fa-6x"]],template:function(s,n){1&s&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e._UZ(3,"img",3),e.qZA()(),e.TgZ(4,"div",4)(5,"div",5)(6,"div",6),e._uU(7),e.ALo(8,"currency"),e.qZA(),e.TgZ(9,"div",7),e._UZ(10,"hr",8),e.qZA(),e.TgZ(11,"div",9)(12,"div",10),e._UZ(13,"div",11),e.qZA()(),e._UZ(14,"div",12),e.TgZ(15,"a",13),e._uU(16,"COMPRAR"),e.qZA()()()(),e.TgZ(17,"div",14)(18,"div",15)(19,"a",16),e.NdJ("click",function(){return n.next()}),e._UZ(20,"i",17),e.qZA()(),e.TgZ(21,"div",18)(22,"a",16),e.NdJ("click",function(){return n.preview()}),e._UZ(23,"i",19),e.qZA()()()),2&s&&(e.xp6(3),e.Q6J("src",n.glasse.img,e.LSH),e.xp6(4),e.hij(" GLASSES ",e.lcZ(8,5,n.glasse.precio)," "),e.xp6(6),e.Q6J("ngStyle",e.VKq(7,h,n.glasse.color)),e.xp6(6),e.Q6J("ngClass",e.VKq(9,g,n.isDisabledNext)),e.xp6(3),e.Q6J("ngClass",e.VKq(11,g,n.isDisabledPreview)))},dependencies:[r.mk,r.PC,r.H9],styles:[".glasse[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;flex-direction:column}.glasse-content[_ngcontent-%COMP%]{width:100%;height:80%;display:flex;align-items:center;flex-direction:row;justify-content:center}.img-glasse[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:700px;height:300px}.glasse-details[_ngcontent-%COMP%]{width:100%;height:20%;display:flex;align-items:center;justify-content:center;padding:10px}.details[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;background-color:#fff}.price[_ngcontent-%COMP%]{margin:0 20px;font-size:1.5rem;font-weight:700}.divider[_ngcontent-%COMP%]{margin:0 20px}.divider[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]{height:40px}.color[_ngcontent-%COMP%]{margin:0 30px}.color-container[_ngcontent-%COMP%]{border:2px solid black;border-radius:50%}.color-select[_ngcontent-%COMP%]{width:30px;height:30px;border:5px outset white;border-radius:50%}.buy[_ngcontent-%COMP%]{padding:20px;background-color:#000;color:#fff;cursor:pointer;font-size:1.5rem}.disabled[_ngcontent-%COMP%]{pointer-events:none;opacity:.5}.buttons[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;flex-direction:column;padding:0 40px}@media screen and (max-width: 1000px){.img-glasse[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:500px;height:200px}}@media screen and (max-width: 500px){.img-glasse[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:300px;height:100px}.buy[_ngcontent-%COMP%], .price[_ngcontent-%COMP%]{font-size:1rem}}"]}),t})();const f=[{path:"glasse/:id",component:(()=>{class t{constructor(s,n){this.glassesDataService=s,this.router=n,this.data=[],this.param=1}ngOnInit(){this.data=this.glassesDataService.data}next(){this.router.navigate(["/shop/glasse/4"])}}return t.\u0275fac=function(s){return new(s||t)(e.Y36(d),e.Y36(a.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-shop"]],decls:2,vars:0,consts:[[1,"shop-container"],[1,"shop"]],template:function(s,n){1&s&&(e.TgZ(0,"div",0),e._UZ(1,"app-glasse",1),e.qZA())},dependencies:[u],styles:[".shop-container[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;align-items:center;justify-content:center}.shop[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}"]}),t})()},{path:"**",redirectTo:"glasse/0"}];let m=(()=>{class t{}return t.\u0275fac=function(s){return new(s||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[a.Bz.forChild(f),a.Bz]}),t})(),v=(()=>{class t{}return t.\u0275fac=function(s){return new(s||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[r.ez,m]}),t})()}}]);