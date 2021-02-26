(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{500:function(t,e,a){"use strict";a.r(e);var n=a(43),i=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"orthogonal-bitmap-calculation-udaf"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#orthogonal-bitmap-calculation-udaf"}},[t._v("#")]),t._v(" Orthogonal BITMAP calculation UDAF")]),t._v(" "),a("h2",{attrs:{id:"background"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#background"}},[t._v("#")]),t._v(" Background")]),t._v(" "),a("p",[t._v("The original bitmap aggregate function designed by Doris is more general, but it has poor performance for the intersection and union of bitmap large cardinality above 100 million level. There are two main reasons for checking the bitmap aggregate function logic of the back-end be. First, when the bitmap cardinality is large, if the bitmap data size exceeds 1g, the network / disk IO processing time is relatively long; second, after the scan data, all the back-end be instances are transmitted to the top-level node for intersection and union operation, which brings pressure on the top-level single node and becomes the processing bottleneck.")]),t._v(" "),a("p",[t._v("The solution is to divide the bitmap column values according to the range, and the values of different ranges are stored in different buckets, so as to ensure that the bitmap values of different buckets are orthogonal and the data distribution is more uniform. In the case of query, the orthogonal bitmap in different buckets is firstly aggregated and calculated, and then the top-level node directly combines and summarizes the aggregated calculated values and outputs them. This will greatly improve the computing efficiency and solve the bottleneck problem of the top single node computing.")]),t._v(" "),a("h2",{attrs:{id:"user-guide"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#user-guide"}},[t._v("#")]),t._v(" User guide")]),t._v(" "),a("ol",[a("li",[t._v("Create a table and add hid column to represent bitmap column value ID range as hash bucket column")]),t._v(" "),a("li",[t._v("Data tank library: When loading data, divide the range of bitmap column values")]),t._v(" "),a("li",[t._v("Compile UDAF and produce. So dynamic library")]),t._v(" "),a("li",[t._v("Register the UDAF in DORIS, which loads the.so library at run time")]),t._v(" "),a("li",[t._v("Usage scenarios")])]),t._v(" "),a("h3",{attrs:{id:"create-table"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-table"}},[t._v("#")]),t._v(" Create table")]),t._v(" "),a("p",[t._v("We need to use the aggregation model when building tables. The data type is bitmap, and the aggregation function is bitmap_ union")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('CREATE TABLE `user_tag_bitmap` (\n  `tag` bigint(20) NULL COMMENT "user tag",\n  `hid` smallint(6) NULL COMMENT "Bucket ID",\n  `user_id` bitmap BITMAP_UNION NULL COMMENT ""\n) ENGINE=OLAP\nAGGREGATE KEY(`tag`, `hid`)\nCOMMENT "OLAP"\nDISTRIBUTED BY HASH(`hid`) BUCKETS 3\n')])])]),a("p",[t._v("The HID column is added to the table schema to indicate the ID range as a hash bucket column.")]),t._v(" "),a("p",[t._v("Note: the HID number and buckets should be set reasonably, and the HID number should be set at least 5 times of buckets, so as to make the data hash bucket division as balanced as possible")]),t._v(" "),a("h3",{attrs:{id:"data-load"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data-load"}},[t._v("#")]),t._v(" Data Load")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("LOAD LABEL user_tag_bitmap_test\n(\nDATA INFILE('hdfs://abc')\nINTO TABLE user_tag_bitmap\nCOLUMNS TERMINATED BY ','\n(tmp_tag, tmp_user_id)\nSET (\ntag = tmp_tag,\nhid = ceil(tmp_user_id/5000000),\nuser_id = to_bitmap(tmp_user_id)\n)\n)\n...\n")])])]),a("p",[t._v("Data format:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("11111111,1\n11111112,2\n11111113,3\n11111114,4\n...\n")])])]),a("p",[t._v("Note: the first column represents the user tags, which have been converted from Chinese into numbers")]),t._v(" "),a("p",[t._v("When loading data, vertically cut the bitmap value range of the user. For example, the hid value of the user ID in the range of 1-5000000 is the same, and the row with the same HID value will be allocated into a sub-bucket, so that the bitmap value in each sub-bucket is orthogonal. On the UDAF implementation of bitmap, the orthogonal feature of bitmap value in the bucket can be used to perform intersection union calculation, and the calculation results will be shuffled to the top node for aggregation.")]),t._v(" "),a("h3",{attrs:{id:"source-code-and-compilation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#source-code-and-compilation"}},[t._v("#")]),t._v(" Source code and compilation")]),t._v(" "),a("p",[t._v("Source code:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("contrib/udf/src/udaf_orthogonal_bitmap/\n|-- bitmap_value.h\n|-- CMakeLists.txt\n|-- orthogonal_bitmap_function.cpp\n|-- orthogonal_bitmap_function.h\n -- string_value.h\n")])])]),a("p",[t._v("Compile udaf:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$cd contrib/udf\n$ sh build_udf.sh\n\n")])])]),a("p",[t._v("libudaf_orthogonal_bitmap.so output directory:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("output/contrib/udf/lib/udaf_orthogonal_bitmap/libudaf_orthogonal_bitmap.so\n")])])]),a("h3",{attrs:{id:"register-the-udaf-with-doris"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#register-the-udaf-with-doris"}},[t._v("#")]),t._v(" Register the UDAF with DORIS")]),t._v(" "),a("p",[t._v("Setting parameters before Doris query")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("set parallel_fragment_exec_instance_num=5\n")])])]),a("p",[t._v("Note: set concurrency parameters according to cluster conditions to improve concurrent computing performance")]),t._v(" "),a("p",[t._v("The new UDAF aggregate function is created in mysql client link Session. It is created by registering the function symbol, which is loaded as a dynamic library.")]),t._v(" "),a("h4",{attrs:{id:"orthogonal-bitmap-intersect"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#orthogonal-bitmap-intersect"}},[t._v("#")]),t._v(" orthogonal_bitmap_intersect")]),t._v(" "),a("p",[t._v("The bitmap intersection function")]),t._v(" "),a("p",[t._v("Syntax:")]),t._v(" "),a("p",[t._v("orthogonal_bitmap_intersect(bitmap_column, column_to_filter, filter_values)")]),t._v(" "),a("p",[t._v("Parameters:")]),t._v(" "),a("p",[t._v("the first parameter is the bitmap column, the second parameter is the dimension column for filtering, and the third parameter is the variable length parameter, which means different values of the filter dimension column")]),t._v(" "),a("p",[t._v("Explain:")]),t._v(" "),a("p",[t._v("on the basis of this table schema, this udaf has two levels of aggregation in query planning. In the first layer, be nodes (update and serialize) first press filter_ Values are used to hash aggregate the keys, and then the bitmaps of all keys are intersected. The results are serialized and sent to the second level be nodes (merge and finalize). In the second level be nodes, all the bitmap values from the first level nodes are combined circularly")]),t._v(" "),a("p",[t._v("Create UDAF:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('drop FUNCTION orthogonal_bitmap_intersect(BITMAP,BIGINT,BIGINT, ...);\nCREATE AGGREGATE FUNCTION orthogonal_bitmap_intersect(BITMAP,BIGINT,BIGINT, ...) RETURNS BITMAP INTERMEDIATE varchar(1)\nPROPERTIES (\n"init_fn"="_ZN9doris_udf25OrthogonalBitmapFunctions21bitmap_intersect_initIlNS_9BigIntValEEEvPNS_15FunctionContextEPNS_9StringValE",\n"update_fn"="_ZN9doris_udf25OrthogonalBitmapFunctions23bitmap_intersect_updateIlNS_9BigIntValEEEvPNS_15FunctionContextERKNS_9StringValERKT0_iPS9_PS6_",\n"serialize_fn"="_ZN9doris_udf25OrthogonalBitmapFunctions30bitmap_intersect_and_serializeIlEENS_9StringValEPNS_15FunctionContextERKS2_",\n"merge_fn"="_ZN9doris_udf25OrthogonalBitmapFunctions12bitmap_unionEPNS_15FunctionContextERKNS_9StringValEPS3_",\n"finalize_fn"="_ZN9doris_udf25OrthogonalBitmapFunctions16bitmap_serializeEPNS_15FunctionContextERKNS_9StringValE",\n"object_file"="http://ip:port/libudaf_orthogonal_bitmap.so" );\n\n')])])]),a("p",[t._v("Note:")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("column_to_filter, filter_values column is set to bigint type here;")])]),t._v(" "),a("li",[a("p",[t._v('the function symbol passes through nm /xxx/xxx/libudaf_orthogonal_bitmap.so|grep "bitmap_"')])])]),t._v(" "),a("p",[t._v("Example:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("select BITMAP_COUNT(orthogonal_bitmap_intersect(user_id, tag, 13080800, 11110200)) from user_tag_bitmap  where tag in (13080800, 11110200);\n\n")])])]),a("h4",{attrs:{id:"orthogonal-bitmap-intersect-count"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#orthogonal-bitmap-intersect-count"}},[t._v("#")]),t._v(" orthogonal_bitmap_intersect_count")]),t._v(" "),a("p",[t._v("To calculate the bitmap intersection count function, the syntax is the same as the original Intersect_Count, but the implementation is different")]),t._v(" "),a("p",[t._v("Syntax:")]),t._v(" "),a("p",[t._v("orthogonal_bitmap_intersect_count(bitmap_column, column_to_filter, filter_values)")]),t._v(" "),a("p",[t._v("Parameters:")]),t._v(" "),a("p",[t._v("The first parameter is the bitmap column, the second parameter is the dimension column for filtering, and the third parameter is the variable length parameter, which means different values of the filter dimension column")]),t._v(" "),a("p",[t._v("Explain:")]),t._v(" "),a("p",[t._v("on the basis of this table schema, the query planning aggregation is divided into two layers. In the first layer, be nodes (update and serialize) first press filter_ Values are used to hash aggregate the keys, and then the intersection of bitmaps of all keys is performed, and then the intersection results are counted. The count values are serialized and sent to the second level be nodes (merge and finalize). In the second level be nodes, the sum of all the count values from the first level nodes is calculated circularly")]),t._v(" "),a("p",[t._v("Create UDAF:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('drop FUNCTION orthogonal_bitmap_intersect_count(BITMAP,BIGINT,BIGINT, ...);\nCREATE AGGREGATE FUNCTION orthogonal_bitmap_intersect_count(BITMAP,BIGINT,BIGINT, ...) RETURNS BIGINT INTERMEDIATE varchar(1)\nPROPERTIES (\n"init_fn"="_ZN9doris_udf25OrthogonalBitmapFunctions27bitmap_intersect_count_initIlNS_9BigIntValEEEvPNS_15FunctionContextEPNS_9StringValE",\n"update_fn"="_ZN9doris_udf25OrthogonalBitmapFunctions23bitmap_intersect_updateIlNS_9BigIntValEEEvPNS_15FunctionContextERKNS_9StringValERKT0_iPS9_PS6_",\n"serialize_fn"="_ZN9doris_udf25OrthogonalBitmapFunctions32bitmap_intersect_count_serializeIlEENS_9StringValEPNS_15FunctionContextERKS2_",\n"merge_fn"="_ZN9doris_udf25OrthogonalBitmapFunctions18bitmap_count_mergeEPNS_15FunctionContextERKNS_9StringValEPS3_",\n"finalize_fn"="_ZN9doris_udf25OrthogonalBitmapFunctions21bitmap_count_finalizeEPNS_15FunctionContextERKNS_9StringValE",\n"object_file"="http://ip:port/libudaf_orthogonal_bitmap.so" );\n')])])]),a("h4",{attrs:{id:"orthogonal-bitmap-union-count"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#orthogonal-bitmap-union-count"}},[t._v("#")]),t._v(" orthogonal_bitmap_union_count")]),t._v(" "),a("p",[t._v("Figure out the bitmap union count function, syntax with the original bitmap_union_count, but the implementation is different.")]),t._v(" "),a("p",[t._v("Syntax:")]),t._v(" "),a("p",[t._v("orthogonal_bitmap_union_count(bitmap_column)")]),t._v(" "),a("p",[t._v("Explain:")]),t._v(" "),a("p",[t._v("on the basis of this table schema, this udaf is divided into two layers. In the first layer, be nodes (update and serialize) merge all the bitmaps, and then count the resulting bitmaps. The count values are serialized and sent to the second level be nodes (merge and finalize). In the second layer, the be nodes are used to calculate the sum of all the count values from the first level nodes")]),t._v(" "),a("p",[t._v("Create UDAF:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('drop FUNCTION orthogonal_bitmap_union_count(BITMAP);\nCREATE AGGREGATE FUNCTION orthogonal_bitmap_union_count(BITMAP) RETURNS BIGINT INTERMEDIATE varchar(1)\nPROPERTIES (\n"init_fn"="_ZN9doris_udf25OrthogonalBitmapFunctions23bitmap_union_count_initEPNS_15FunctionContextEPNS_9StringValE",\n"update_fn"="_ZN9doris_udf25OrthogonalBitmapFunctions12bitmap_unionEPNS_15FunctionContextERKNS_9StringValEPS3_",\n"serialize_fn"="_ZN9doris_udf25OrthogonalBitmapFunctions22bitmap_count_serializeEPNS_15FunctionContextERKNS_9StringValE",\n"merge_fn"="_ZN9doris_udf25OrthogonalBitmapFunctions18bitmap_count_mergeEPNS_15FunctionContextERKNS_9StringValEPS3_",\n"finalize_fn"="_ZN9doris_udf25OrthogonalBitmapFunctions21bitmap_count_finalizeEPNS_15FunctionContextERKNS_9StringValE",\n"object_file"="http://ip:port/libudaf_orthogonal_bitmap.so" );\n')])])]),a("h3",{attrs:{id:"suitable-for-the-scene"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#suitable-for-the-scene"}},[t._v("#")]),t._v(" Suitable for the scene")]),t._v(" "),a("p",[t._v("It is consistent with the scenario of orthogonal calculation of bitmap, such as calculation retention, funnel, user portrait, etc.")]),t._v(" "),a("p",[t._v("Crowd selection:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("select orthogonal_bitmap_intersect_count(user_id, tag, 13080800, 11110200) from user_tag_bitmap where tag in (13080800, 11110200);\n\nNote: 13080800 and 11110200 represent user labels\n")])])]),a("p",[t._v("Calculate the deduplication value for user_id:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("select orthogonal_bitmap_union_count(user_id) from user_tag_bitmap where tag in (13080800, 11110200);\n")])])])])}),[],!1,null,null,null);e.default=i.exports}}]);