(this.webpackJsonptodoapp=this.webpackJsonptodoapp||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var c=n(1),i=n.n(c),a=n(3),s=n.n(a),l=(n(13),n(6)),r=n(4),o=n(5),u=n(8),d=n(7),j=(n(14),n(0)),h=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;return Object(r.a)(this,n),(t=e.call(this)).handleSubmit=function(e){e.preventDefault();var n=t.state.value;t.setState({items:[].concat(Object(l.a)(t.state.items),[n]),value:""})},t.handleChange=function(e){t.setState({value:e.target.value})},t.deleteClick=function(e){t.state.items.splice(e,1),t.setState({Items:t.state.items})},t.clickEdit=function(){},t.state={value:"",items:[]},t}return Object(o.a)(n,[{key:"render",value:function(){var t=this,e=this.state,n=e.value,c=e.items;return Object(j.jsxs)("div",{className:"todo-container",children:[Object(j.jsxs)("form",{className:"input-container",onSubmit:this.handleSubmit,children:[Object(j.jsx)("h1",{children:"TodoApp"}),Object(j.jsx)("input",{type:"text",value:n,placeholder:"Enter the inputs",onChange:this.handleChange})]}),Object(j.jsx)("ul",{children:c.map((function(e,n){return Object(j.jsxs)("li",{children:[Object(j.jsx)("input",{type:"checkbox"}),e,Object(j.jsxs)("div",{className:"image-container",children:[Object(j.jsx)("i",{id:"edit",className:"far fa-edit",onClick:function(){return t.clickEdit(n)}}),Object(j.jsx)("i",{className:"fas fa-trash-alt",onClick:function(){return t.deleteClick(n)}})]})]},n)}))})]})}}]),n}(c.Component),b=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(h,{})})},p=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,a=e.getLCP,s=e.getTTFB;n(t),c(t),i(t),a(t),s(t)}))};s.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(b,{})}),document.getElementById("root")),p()}},[[16,1,2]]]);
//# sourceMappingURL=main.904da3b9.chunk.js.map