(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{445:function(e,t,o){"use strict";o.r(t);var a=o(43),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"setting-fe-dev-env-using-eclipse"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#setting-fe-dev-env-using-eclipse"}},[e._v("#")]),e._v(" Setting FE dev env using Eclipse")]),e._v(" "),o("h2",{attrs:{id:"preparation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#preparation"}},[e._v("#")]),e._v(" Preparation")]),e._v(" "),o("ul",[o("li",[e._v("JDK 1.8+")]),e._v(" "),o("li",[e._v("Maven 3.x+")]),e._v(" "),o("li",[e._v("Eclipse，with "),o("a",{attrs:{href:"http://www.eclipse.org/m2e/",target:"_blank",rel:"noopener noreferrer"}},[e._v("M2Eclipse"),o("OutboundLink")],1),e._v(" installed")])]),e._v(" "),o("h3",{attrs:{id:"code-generation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#code-generation"}},[e._v("#")]),e._v(" Code Generation")]),e._v(" "),o("p",[e._v("The FE module requires part of the generated code, such as Thrift, Protobuf, Jflex, CUP and other frameworks.")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Under Linux, enter the source code directory "),o("code",[e._v("fe")]),e._v(" and execute the following command:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v(" mvn  generate-sources\n")])])])]),e._v(" "),o("li",[o("p",[e._v("If use windows as development environment, then package the generated "),o("code",[e._v("fe/fe-core/target/generated-sources")]),e._v(" directory:")]),e._v(" "),o("p",[o("code",[e._v("fe/fe-core/target/ && tar czf java.tar.gz generated-sources/")])])]),e._v(" "),o("li",[o("p",[e._v("Copy "),o("code",[e._v("java.tar.gz")]),e._v(" to the "),o("code",[e._v("fe/fe-core/target/")]),e._v(" directory of the development environment and unzip")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("cp java.tar.gz /path/to/doris/fe/fe-core/target/\ncd /path/to/doris/fe/fe-core/target/ && tar xzf java.tar.gz\n")])])])])]),e._v(" "),o("h2",{attrs:{id:"import-fe-project"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#import-fe-project"}},[e._v("#")]),e._v(" Import FE project")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("In the "),o("code",[e._v("fe/")]),e._v(" directory of the development environment, execute the following command to generate the Eclipse project file:")]),e._v(" "),o("p",[o("code",[e._v("cd /path/to/doris/fe/ && mvn -npr eclipse:eclipse -Dskip.plugin=true")])]),e._v(" "),o("p",[e._v("After the execution is completed, the "),o("code",[e._v(".project")]),e._v(" and "),o("code",[e._v(".classpath")]),e._v(" files will be generated in the "),o("code",[e._v("fe/")]),e._v(" directory.")])]),e._v(" "),o("li",[o("p",[e._v("Import FE project")]),e._v(" "),o("ul",[o("li",[e._v("Open Eclipse，choose "),o("code",[e._v("File -> Import")]),e._v(".")]),e._v(" "),o("li",[e._v("Choose "),o("code",[e._v("General -> Existing Projects into Workspace")]),e._v(".")]),e._v(" "),o("li",[o("code",[e._v("Select root directory")]),e._v(" and choose "),o("code",[e._v("fe/")]),e._v(" directory，click "),o("code",[e._v("Finish")]),e._v(" to finish.")]),e._v(" "),o("li",[e._v("Right click the project, and choose "),o("code",[e._v("Build Path -> Configure Build Path")]),e._v(".")]),e._v(" "),o("li",[e._v("In the "),o("code",[e._v("Java Build Path")]),e._v(" dialog, choose the "),o("code",[e._v("Source")]),e._v(" tab, click "),o("code",[e._v("Add Folder")]),e._v(", and select the "),o("code",[e._v("java/")]),e._v(" directory that was copied and unzipped before adding.")]),e._v(" "),o("li",[e._v("Click "),o("code",[e._v("Apply and Close")]),e._v(" to finish.")])])])]),e._v(" "),o("p",[e._v("At this point, FE project import is complete. The project directory in Eclipse is roughly as follows:")]),e._v(" "),o("img",{attrs:{src:e.$withBase("/images/eclipse-import-fe-project-1.png"),alt:""}}),e._v(" "),o("h2",{attrs:{id:"run-unit-test"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#run-unit-test"}},[e._v("#")]),e._v(" Run Unit Test")]),e._v(" "),o("p",[e._v("Right-click on the unit test file you want to run and select "),o("code",[e._v("Run As -> JUnit Test")]),e._v(". (If you want to debug, select "),o("code",[e._v("Debug As -> JUnit Test")]),e._v(").")]),e._v(" "),o("p",[e._v("If the following error occurs:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("java.lang.Exception: Method xxxx should have no parameters\n")])])]),o("p",[e._v("Then right-click the unit test file and select "),o("code",[e._v("Run As -> Run Configurations...")]),e._v(". (If you want to debug, select "),o("code",[e._v("Debug As -> Debug Configurations...")]),e._v(").")]),e._v(" "),o("p",[e._v("Add to the "),o("code",[e._v("VM arguments")]),e._v(" in the "),o("code",[e._v("Arguments")]),e._v(" tab:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("-javaagent:${settings.localRepository}/org/jmockit/jmockit/1.48/jmockit-1.48.jar\n")])])]),o("p",[e._v("Among them, "),o("code",[e._v("${settings.localRepository}")]),e._v(" should be replaced with the path of the maven library path, such as:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("-javaagent:/Users/cmy/.m2/repository/org/jmockit/jmockit/1.48/jmockit-1.48.jar\n")])])]),o("p",[e._v("Then just run "),o("code",[e._v("Run/Debug")]),e._v(".")]),e._v(" "),o("h2",{attrs:{id:"run-fe"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#run-fe"}},[e._v("#")]),e._v(" Run FE")]),e._v(" "),o("p",[e._v("You can directly start an FE process in Ecplise to facilitate debugging the code.")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Create a runtime directory")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("mkdir /path/to/doris/fe/run/\ncd /path/to/doris/fe/run/\nmkdir conf/ log/ palo-meta/\n")])])])]),e._v(" "),o("li",[o("p",[e._v("Create configuration file")]),e._v(" "),o("p",[e._v("Create the configuration file "),o("code",[e._v("fe.conf")]),e._v(" in the "),o("code",[e._v("conf/")]),e._v(" directory created in the first step. You can directly copy "),o("code",[e._v("conf/fe.conf")]),e._v(" in the source directory and make simple changes.")])]),e._v(" "),o("li",[o("p",[e._v("Find the "),o("code",[e._v("src/main/java/org/apache/doris/PaloFe.java")]),e._v(" file in Ecplise, right-click and select "),o("code",[e._v("Run As -> Run Configurations...")]),e._v(". Add the following environment variables to the "),o("code",[e._v("Environment")]),e._v(" tab:")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("DORIS_HOME: /path/to/doris/fe/run/")])]),e._v(" "),o("li",[o("code",[e._v("PID_DIR: /path/to/doris/fe/run/")])]),e._v(" "),o("li",[o("code",[e._v("LOG_DIR: /path/to/doris/fe/run/log")])])])]),e._v(" "),o("li",[o("p",[e._v("Right-click "),o("code",[e._v("PaloFe.java")]),e._v(" and select "),o("code",[e._v("Run As -> Java Application")]),e._v(" to start FE.")])])]),e._v(" "),o("h2",{attrs:{id:"code-update"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#code-update"}},[e._v("#")]),e._v(" Code Update")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Update lexical and grammar files or proto and thrift files")]),e._v(" "),o("p",[e._v("If you modified "),o("code",[e._v("fe/src/main/cup/sql_parser.cup")]),e._v(" or "),o("code",[e._v("fe/src/main/jflex/sql_scanner.flex")]),e._v(" file or proto and thrift files. You need to execute the following commands in the "),o("code",[e._v("fe/")]),e._v(" directory:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("mvn  generate-sources\n")])])]),o("p",[e._v("Then refresh the project in Eclipse.")])]),e._v(" "),o("li",[o("p",[e._v("Update maven dependencies")]),e._v(" "),o("p",[e._v("If you update the dependency in "),o("code",[e._v("fe/pom.xml")]),e._v(", you need to execute the following command in the "),o("code",[e._v("fe/")]),e._v(" directory:")]),e._v(" "),o("p",[o("code",[e._v("mvn -npr eclipse:eclipse -Dskip.plugin=true")])]),e._v(" "),o("p",[e._v("Then refresh the project in Eclipse. If it cannot be updated, it is recommended to delete the project and import it again according to this document.")])])]),e._v(" "),o("h2",{attrs:{id:"imports-order"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#imports-order"}},[e._v("#")]),e._v(" Imports Order")]),e._v(" "),o("p",[e._v("In order to maintain the Imports order of Java, please perform the following operations to set the Imports Order of the project.")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Create the file "),o("code",[e._v("fe_doris.importorder")]),e._v(" and write the following:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("#Organize Import Order\n#Wed Jul 01 16:42:47 CST 2020\n4=javax\n3=java\n2=org\n1=com\n0=org.apache.doris\n")])])])]),e._v(" "),o("li",[o("p",[e._v("Open Eclipse Preferences, select "),o("code",[e._v("Java -> Code Style -> Organize Imports")]),e._v(". Click "),o("code",[e._v("Import")]),e._v(" to import the above file.")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);