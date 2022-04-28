"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[7616],{59479:function(e){e.exports=JSON.parse('{"pluginId":"community","version":"current","label":"Next","banner":null,"badge":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"How to Subscribe","href":"/community/how-to-subscribe","docId":"how-to-subscribe"},{"type":"link","label":"How to Use Email List","href":"/community/how-to-email","docId":"how-to-email"},{"type":"link","label":"How to Participate in Project Contribution","href":"/community/how-to-contribute","docId":"how-to-contribute"},{"type":"link","label":"How to Participate in the Official Website Contribution","href":"/community/how-to-contribute-to-website","docId":"how-to-contribute-to-website"},{"type":"link","label":"How to Release","href":"/community/how-to-release","docId":"how-to-release"},{"type":"link","label":"How to Verify","href":"/community/how-to-verify","docId":"how-to-verify"},{"type":"link","label":"Security","href":"/community/security","docId":"security"},{"type":"link","label":"How to Vote New Committer/PPMC","href":"/community/how-to-vote-a-committer-ppmc","docId":"how-to-vote-a-committer-ppmc"},{"type":"link","label":"ICLA Signing Process","href":"/community/how-to-sign-apache-icla","docId":"how-to-sign-apache-icla"},{"type":"link","label":"PPMC/Committer Related Permission Configuration","href":"/community/ppmc-related-permission-configuration","docId":"ppmc-related-permission-configuration"},{"type":"category","label":"Development Specification","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Overview","href":"/community/development_specification/overview","docId":"development_specification/overview"},{"type":"link","label":"License Notes","href":"/community/development_specification/license","docId":"development_specification/license"},{"type":"link","label":"Programming Specification","href":"/community/development_specification/programming_specification","docId":"development_specification/programming_specification"},{"type":"link","label":"Log Specification","href":"/community/development_specification/log","docId":"development_specification/log"},{"type":"link","label":"Exception Catch Specification","href":"/community/development_specification/exception_catch","docId":"development_specification/exception_catch"},{"type":"link","label":"API Specification","href":"/community/development_specification/api","docId":"development_specification/api"},{"type":"link","label":"Concurrent Specification","href":"/community/development_specification/concurrent","docId":"development_specification/concurrent"},{"type":"link","label":"Path Usage Specification","href":"/community/development_specification/path_usage","docId":"development_specification/path_usage"},{"type":"link","label":"Test Specification","href":"/community/development_specification/unit_test","docId":"development_specification/unit_test"},{"type":"link","label":"Version and New Feature Specification","href":"/community/development_specification/version_feature_specifications","docId":"development_specification/version_feature_specifications"},{"type":"link","label":"Release-Notes Writing Specification","href":"/community/development_specification/release-notes","docId":"development_specification/release-notes"}]},{"type":"link","label":"How to Write Unit Test Code","href":"/community/how-to-write-unit-test-code","docId":"how-to-write-unit-test-code"},{"type":"link","label":"Division of Microservices","href":"/community/microservice-division","docId":"microservice-division"}]},"docs":{"development_specification/api":{"id":"development_specification/api","title":"API Specification","description":"When Contributor contributes new RESTful interfaces to Linkis, it is required to follow the following interface specifications for interface development.","sidebar":"tutorialSidebar"},"development_specification/concurrent":{"id":"development_specification/concurrent","title":"Concurrent Specification","description":"1. [Compulsory] Make sure getting a singleton object to be thread-safe. Operating inside singletons should also be kept thread-safe.","sidebar":"tutorialSidebar"},"development_specification/exception_catch":{"id":"development_specification/exception_catch","title":"Exception Catch Specification","description":"1. [Mandatory] For the exception of each small module, a special exception class should be defined to facilitate the subsequent generation of error codes for users. It is not allowed to throw any RuntimeException or directly throw Exception.","sidebar":"tutorialSidebar"},"development_specification/license":{"id":"development_specification/license","title":"License Notes","description":"Note: This article applies to Apache projects only.","sidebar":"tutorialSidebar"},"development_specification/log":{"id":"development_specification/log","title":"Log Specification","description":"1.\\t[Convention] Linkis chooses SLF4J and Log4J2 as the log printing framework, removing the logback in the Spring-Cloud package. Since SLF4J will randomly select a logging framework for binding, it is necessary to exclude bridging packages such as SLF4J-LOG4J after introducing new Maven packages in the future, otherwise log printing will be a problem. However, if the newly introduced Maven package depends on a package such as Log4J, do not exclude, otherwise the code may run with an error.","sidebar":"tutorialSidebar"},"development_specification/overview":{"id":"development_specification/overview","title":"Overview","description":"In order to standardize Linkis\'s community development environment, improve the output quality of subsequent development iterations of Linkis, and standardize the entire development and design process of Linkis, it is strongly recommended that Contributors follow the following development specifications:","sidebar":"tutorialSidebar"},"development_specification/path_usage":{"id":"development_specification/path_usage","title":"Path Usage Specification","description":"Please note: Linkis provides a unified Storage module, so you must follow the Linkis path specification when using the path or configuring the path in the configuration file.","sidebar":"tutorialSidebar"},"development_specification/programming_specification":{"id":"development_specification/programming_specification","title":"Programming Specification","description":"1. Naming Convention","sidebar":"tutorialSidebar"},"development_specification/release-notes":{"id":"development_specification/release-notes","title":"Release-Notes Writing Specification","description":"Before each version is released, the release-notes for this version need to be organized by the release manager or developer to briefly describe the specific changes included in the new version update.","sidebar":"tutorialSidebar"},"development_specification/unit_test":{"id":"development_specification/unit_test","title":"Test Specification","description":"1. [Mandatory] Tool classes and internal interfaces of services must have test case.","sidebar":"tutorialSidebar"},"development_specification/version_feature_specifications":{"id":"development_specification/version_feature_specifications","title":"Version and New Feature Specification","description":"1. New version specification","sidebar":"tutorialSidebar"},"how-to-contribute":{"id":"how-to-contribute","title":"How to Participate in Project Contribution","description":"| Version Management Information Form | |","sidebar":"tutorialSidebar"},"how-to-contribute-to-website":{"id":"how-to-contribute-to-website","title":"How to Participate in the Official Website Contribution","description":"Branch","sidebar":"tutorialSidebar"},"how-to-email":{"id":"how-to-email","title":"How to Use Email List","description":"Introduces mailing list usage guidelines and reference examples","sidebar":"tutorialSidebar"},"how-to-release":{"id":"how-to-release","title":"How to Release","description":"This article takes the release of 1.0.3 Apache version as an example. If it is a non-Apache version, please refer to the detailed information https://incubator.apache.org/guides/releasemanagement.html","sidebar":"tutorialSidebar"},"how-to-sign-apache-icla":{"id":"how-to-sign-apache-icla","title":"ICLA Signing Process","description":"Apache Sign ICLA Guide","sidebar":"tutorialSidebar"},"how-to-subscribe":{"id":"how-to-subscribe","title":"How to Subscribe","description":"Apache has configured a series of mailing lists for each project. Mailing lists are an important form of communication in the Apache community.","sidebar":"tutorialSidebar"},"how-to-verify":{"id":"how-to-verify","title":"How to Verify","description":"For detailed check list, please refer to the official check list","sidebar":"tutorialSidebar"},"how-to-vote-a-committer-ppmc":{"id":"how-to-vote-a-committer-ppmc","title":"How to Vote New Committer/PPMC","description":"Introduce the selection requirements and process for Committer and PPMC. Official guidelines can be found at//community.apache.org/newcommitter.html","sidebar":"tutorialSidebar"},"how-to-write-unit-test-code":{"id":"how-to-write-unit-test-code","title":"How to Write Unit Test Code","description":"Frame Selection","sidebar":"tutorialSidebar"},"microservice-division":{"id":"microservice-division","title":"Division of Microservices","description":"Introduction to service","sidebar":"tutorialSidebar"},"ppmc-related-permission-configuration":{"id":"ppmc-related-permission-configuration","title":"PPMC/Committer Related Permission Configuration","description":"PPMC (Podling Project Management Committee)/Committer member, bind github account process/and main email subscription","sidebar":"tutorialSidebar"},"security":{"id":"security","title":"Security","description":"The Apache Software Foundation takes a rigorous stance on eliminating security issues in its software projects. Likewise, Apache Linkis is also vigilant and takes security issues related to its features and functionality into the highest consideration.","sidebar":"tutorialSidebar"}}}')}}]);