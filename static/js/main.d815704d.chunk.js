(this.webpackJsonptodoapp=this.webpackJsonptodoapp||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var i=n(1),a=n.n(i),c=n(5),s=n.n(c),l=(n(14),n(3)),u=n(6),r=n(7),o=n(9),d=n(8),h=(n(15),n(4),n(0));function j(e){return e.trigger?Object(h.jsxs)("div",{className:"popup-container",children:[Object(h.jsxs)("div",{className:"popup-box",children:[Object(h.jsx)("input",{type:"text",className:"update-section",value:e.value,placeholder:"Enter the new inputs",onChange:e.handleChange}),Object(h.jsx)("button",{className:"Update",onClick:e.clickUpdate,children:"Update"})]}),Object(h.jsx)("div",{className:"close-button",children:Object(h.jsx)("i",{className:"far fa-times-circle",onClick:e.closeButton})})]}):""}function b(e){return Object(h.jsxs)("div",{className:"todo-container",children:[Object(h.jsx)(j,{listitems:e.items}),Object(h.jsx)("div",{className:"input-container",children:Object(h.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(h.jsx)("h1",{children:"TodoApp"}),Object(h.jsx)("input",{type:"text",className:"input-section",value:e.value,placeholder:"Enter the inputs",onChange:e.handleChange})]})}),Object(h.jsx)("ul",{children:e.items.map((function(t,n){return Object(h.jsxs)("li",{children:[Object(h.jsx)("input",{type:"checkbox"}),t,Object(h.jsxs)("div",{className:"image-container",children:[Object(h.jsx)("i",{id:"edit",className:"far fa-edit",onClick:function(){return e.clickEdit(n)}}),Object(h.jsx)("i",{className:"fas fa-trash-alt",onClick:function(){return e.deleteClick(n)}})]})]},n)}))})]})}var p=function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(u.a)(this,n),(e=t.call(this)).handleSubmit=function(t){t.preventDefault();var n=e.state.value;e.setState({items:[].concat(Object(l.a)(e.state.items),[n]),value:""})},e.handleChange=function(t){e.setState({value:t.target.value})},e.deleteClick=function(t){e.state.items.splice(t,1),e.setState({Items:e.state.items})},e.clickEdit=function(t){e.state.items;e.setState({trigger:!0,Items:e.state.items,indexValue:t})},e.clickUpdate=function(){e.state.items.splice(e.indexValue,1);var t=e.state.value;e.setState({items:[].concat(Object(l.a)(e.state.items),[t]),value:"",trigger:!1})},e.closeButton=function(){e.setState({trigger:!1})},e.state={value:"",items:[],trigger:!1,indexValue:""},e}return Object(r.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)(b,{value:this.state.value,clickEdit:this.clickEdit,items:this.state.items,handleSubmit:this.handleSubmit,handleChange:this.handleChange,deleteClick:this.deleteClick}),Object(h.jsx)(j,{indexValue:this.state.indexValue,closeButton:this.closeButton,clickUpdate:this.clickUpdate,trigger:this.state.trigger,handleChange:this.handleChange,value:this.state.value})]})}}]),n}(i.Component),m=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(p,{})})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),i(e),a(e),c(e),s(e)}))};s.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(m,{})}),document.getElementById("root")),x()},4:function(e,t,n){}},[[17,1,2]]]);
//# sourceMappingURL=main.d815704d.chunk.js.map