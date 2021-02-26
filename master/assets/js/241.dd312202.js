(window.webpackJsonp=window.webpackJsonp||[]).push([[241],{627:function(t,e,s){"use strict";s.r(e);var a=s(43),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"admin-check-tablet"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#admin-check-tablet"}},[t._v("#")]),t._v(" ADMIN CHECK TABLET")]),t._v(" "),s("h2",{attrs:{id:"description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" description")]),t._v(" "),s("p",[t._v("This statement is used to perform a specified check operation on a list of tablets.")]),t._v(" "),s("p",[t._v("Syntax:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('ADMIN CHECK TABLE (tablet_id1, tablet_id2, ...)\nPROPERTIES("type" = "...");\n')])])]),s("p",[t._v("Note:")]),t._v(" "),s("ol",[s("li",[s("p",[t._v('You must specify the list of tablet ids and the "type" property in PROPERTIES.')])]),t._v(" "),s("li",[s("p",[t._v('Currently "type" only supports:')]),t._v(" "),s("ul",[s("li",[t._v('consistency: Check the consistency of the replicas of the tablet. This command is asynchronous. After sending, Doris will start to perform the consistency check job of the corresponding tablet. The final result will be reflected in the "InconsistentTabletNum" column in the result of `SHOW PROC" / statistic ";')])])])]),t._v(" "),s("h2",{attrs:{id:"example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" example")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Perform a replica consistency check on a specified set of tablets")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('ADMIN CHECK TABLET (10000, 10001)\nPROPERTIES("type" = "consistency");\n')])])])])]),t._v(" "),s("h2",{attrs:{id:"keyword"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[t._v("#")]),t._v(" keyword")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("ADMIN,CHECK,TABLET\n")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);