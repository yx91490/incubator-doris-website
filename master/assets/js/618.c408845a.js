(window.webpackJsonp=window.webpackJsonp||[]).push([[618],{1005:function(t,e,a){"use strict";a.r(e);var n=a(43),s=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"alter-view"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#alter-view"}},[t._v("#")]),t._v(" ALTER VIEW")]),t._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" description")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v('该语句用于修改一个view的定义\n语法：\n\tALTER VIEW\n    [db_name.]view_name\n    (column1[ COMMENT "col comment"][, column2, ...])\n    AS query_stmt\n    \n说明：\n    1. 视图都是逻辑上的，其中的数据不会存储在物理介质上，在查询时视图将作为语句中的子查询，因此，修改视图的定义等价于修改query_stmt。\n    2. query_stmt 为任意支持的 SQL\n')])])]),a("h2",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" example")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v('1、修改example_db上的视图example_view\n\n\tALTER VIEW example_db.example_view\n\t(\n\t\tc1 COMMENT "column 1",\n\t\tc2 COMMENT "column 2",\n\t\tc3 COMMENT "column 3"\n\t)\n\tAS SELECT k1, k2, SUM(v1) FROM example_table \n\tGROUP BY k1, k2\n')])])])])}),[],!1,null,null,null);e.default=s.exports}}]);