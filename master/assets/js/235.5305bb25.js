(window.webpackJsonp=window.webpackJsonp||[]).push([[235],{621:function(e,t,s){"use strict";s.r(t);var a=s(43),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"revoke"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#revoke"}},[e._v("#")]),e._v(" REVOKE")]),e._v(" "),s("h2",{attrs:{id:"description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" Description")]),e._v(" "),s("p",[e._v("The REVOKE command is used to revoke the rights specified by the specified user or role.\nSyntax\nREVOKE privilege_list ON db_name[.tbl_name] FROM user_identity [ROLE role_name]")]),e._v(" "),s("p",[e._v("user_identity:")]),e._v(" "),s("p",[e._v("The user_identity syntax here is the same as CREATE USER. And you must create user_identity for the user using CREATE USER. The host in user_identity can be a domain name. If it is a domain name, the revocation time of permission may be delayed by about one minute.")]),e._v(" "),s("p",[e._v("You can also revoke the permission of the specified ROLE, which must exist for execution.")]),e._v(" "),s("h2",{attrs:{id:"example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" example")]),e._v(" "),s("ol",[s("li",[e._v("Revoke the rights of user Jack database testDb")])]),e._v(" "),s("p",[e._v("REVOKE SELECT_PRIV ON db1.* FROM 'jack'@'192.%';")]),e._v(" "),s("h2",{attrs:{id:"keyword"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[e._v("#")]),e._v(" keyword")]),e._v(" "),s("p",[e._v("REVOKE")])])}),[],!1,null,null,null);t.default=r.exports}}]);