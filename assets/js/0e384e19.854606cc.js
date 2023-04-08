"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[671],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>y});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=u(n),d=r,y=c["".concat(s,".").concat(d)]||c[d]||p[d]||o;return n?a.createElement(y,i(i({ref:t},m),{},{components:n})):a.createElement(y,i({ref:t},m))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},59881:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const o={},i="About",l={unversionedId:"intro",id:"intro",title:"About",description:"Immut offers a simpler way to deal with immutable data structures. Unlike other",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/immut/docs/intro",draft:!1,editUrl:"https://github.com/SolarHorizon/immut/edit/master/docs/intro.md",tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar"},s={},u=[{value:"Comparison",id:"comparison",level:2},{value:"Manually",id:"manually",level:3},{value:"Other libraries",id:"other-libraries",level:3},{value:"Immut",id:"immut",level:3},{value:"How It Works",id:"how-it-works",level:2},{value:"Some caveats",id:"some-caveats",level:2}],m={toc:u},c="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"about"},"About"),(0,r.kt)("p",null,"Immut offers a simpler way to deal with immutable data structures. Unlike other\nlibraries which can sometimes require a substantial amount of boilerplate to\nachieve your desired end result, Immut allows you to write code in the same way\nyou would if you weren't concerned with immutability."),(0,r.kt)("h2",{id:"comparison"},"Comparison"),(0,r.kt)("p",null,"Let's imagine we're making a game that has an immutable inventory system. We're\ngoing to decrease the durability of the player's sword by 10 and give them a\nhealth potion."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"local inventory = {\n    weapons = {\n        sword = {\n            damage = 10,\n            durability = 100,\n        },\n    },\n    consumables = {\n        staminaPotion = {\n            value = 100,\n            stamina = 20,\n        },\n    },\n}\n")),(0,r.kt)("h3",{id:"manually"},"Manually"),(0,r.kt)("p",null,"We can opt do this ourselves by using ",(0,r.kt)("inlineCode",{parentName:"p"},"table.clone"),", but we will need to be\ncareful and make sure that we clone any table we intend to make changes to.\nThis gets more and more difficult the deeper your state is nested."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"local newInventory = table.clone(inventory)\n\n-- let's handle the sword first\nnewInventory.weapons = table.clone(inventory.weapons)\nnewInventory.weapons.sword = table.clone(newInventory.weapons.sword)\nnewInventory.weapons.sword.durability -= 10\n\n-- now for the potion\nnewInventory.consumables = table.clone(inventory.consumables)\nnewInventory.consumables.healthPotion = {\n    value = 100,\n    health = 20,\n}\n")),(0,r.kt)("h3",{id:"other-libraries"},"Other libraries"),(0,r.kt)("p",null,"There's a few existing libraries that can help us out with this. They do a\ngreat job and make solving this problem way easier. Unfortunately, just like\nthe manual method, they do have a bit of boilerplate. In this example, we're\nnot using a specific library, but we're copying some common patterns they use."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'local Immutable = require(ReplicatedStorage.Immutable)\n\nlocal Dictionary = Immutable.Dictionary\n\nlocal newInventory = Dictionary.merge(inventory, {\n    weapons = Dictionary.merge(inventory.weapons, {\n        sword = Dictionary.update(\n            inventory.weapons.sword,\n            "durability",\n            function(value)\n                return value - 10\n            end,\n        )\n    }),\n    consumables = Dictionary.merge(inventory.consumables, {\n        healthPotion = {\n            value = 100,\n            health = 20,\n        }\n    })\n})\n\n')),(0,r.kt)("h3",{id:"immut"},"Immut"),(0,r.kt)("p",null,"With Immut, we can solve this problem as if we weren't concerned with mutation\nat all. This makes it trivial."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"local Immut = require(ReplicatedStorage.Immut)\n\nlocal newInventory = Immut.produce(inventory, function(draft)\n    inventory.weapons.sword.durability -= 10\n    inventory.consumables.healthPotion = {\n        value = 100,\n        health = 20,\n    }\nend)\n")),(0,r.kt)("h2",{id:"how-it-works"},"How It Works"),(0,r.kt)("p",null,"Immut makes use of metatables to hide a lot of the complexity of working with\nimmutable data in Luau. The first time you make a change to a draft, the\noriginal table is cloned and your changes are applied to that clone. When\nreading values from a draft, it will first try to read from a clone, and fall\nback to the original table if one doesn't exist. Immut won't clone anything if\nit doesn't need to."),(0,r.kt)("h2",{id:"some-caveats"},"Some caveats"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A draft is not the same as your original table! Keep that in mind when\ndirectly comparing two tables inside of a producer."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"produce(state, function(draft)\n    print(state == draft) -- false\nend)\n\nproduce(state, function(draft)\n    print(original(draft) == state) -- true\nend)\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Nested tables are automatically turned into drafts. This can be convenient\nwhen dealing with nested state, like in our example above, but may not always\nbe what you want. To rememedy this, you can opt out of using a draft with\n",(0,r.kt)("inlineCode",{parentName:"p"},"Immut.original"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Luau's ",(0,r.kt)("inlineCode",{parentName:"p"},"table")," library does not respect metatables. If you want to use\n",(0,r.kt)("inlineCode",{parentName:"p"},"table.insert")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"table.remove"),", Immut comes with ",(0,r.kt)("inlineCode",{parentName:"p"},"Immut.insert")," and\n",(0,r.kt)("inlineCode",{parentName:"p"},"Immut.remove"),", which are draft-safe alternatives that offer the same\nfunctionality."))))}p.isMDXComponent=!0}}]);