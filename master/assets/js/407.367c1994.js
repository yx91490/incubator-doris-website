(window.webpackJsonp=window.webpackJsonp||[]).push([[407],{794:function(t,n,a){"use strict";a.r(n);var s=a(43),e=Object(s.a)({},(function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"get-tablets-distribution-between-different-disks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-tablets-distribution-between-different-disks"}},[t._v("#")]),t._v(" GET TABLETS DISTRIBUTION BETWEEN DIFFERENT DISKS")]),t._v(" "),a("p",[t._v("获取BE节点上每一个partition下的tablet在不同磁盘上的分布情况")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("curl -X GET http://be_host:webserver_port/api/tablets_distribution?group_by=partition\n")])])]),a("p",[t._v("返回值就是BE节点上每一个partition下的tablet在各个磁盘上的数量分布，只包含tablet数量。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('{\n    msg: "OK",\n    code: 0,\n    data: {\n        host: "***",\n        tablets_distribution: [\n            {\n                partition_id:***,\n                disks:[\n                    {\n                        disk_path:"***",\n                        tablets_num:***,\n                    },\n                    {\n                        disk_path:"***",\n                        tablets_num:***,\n                    },\n\n                    ...\n\n                ]\n            },\n            {\n                partition_id:***,\n                disks:[\n                    {\n                        disk_path:"***",\n                        tablets_num:***,\n                    },\n                    {\n                        disk_path:"***",\n                        tablets_num:***,\n                    },\n\n                    ...\n\n                ]\n            },\n\n            ...\n\n        ]\n    },\n    count: ***\n}\n')])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("curl -X GET http://be_host:webserver_port/api/tablets_distribution?group_by=partition&partition_id=xxx\n")])])]),a("p",[t._v("返回值就是BE节点上指定id的partition下的tablet在各个磁盘上的分布，包含tablet数量以及每一个tablet的id、schema hash和tablet size信息。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('{\n    msg: "OK",\n    code: 0,\n    data: {\n        host: "***",\n        tablets_distribution: [\n            {\n                partition_id:***,\n                disks:[\n                    {\n                        disk_path:"***",\n                        tablets_num:***,\n                        tablets:[\n                            {\n                                tablet_id:***,\n                                schema_hash:***,\n                                tablet_size:***\n                            },\n\n                            ...\n\n                        ]\n                    },\n\n                    ...\n\n                ]\n            }\n        ]\n    },\n    count: ***\n}\n')])])])])}),[],!1,null,null,null);n.default=e.exports}}]);