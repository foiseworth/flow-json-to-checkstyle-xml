var tape = require('tape');
var flowToCheckstyle = require('./index.js');

var flowJsonFailed = `{
  "passed": false,
  "errors": [
    {
      "message": [
        {
          "descr": "string",
          "level": "error",
          "path": "\/Users\/andrew\/Projects\/bet\/bet-webapp\/client\/stores\/betslip-helpers.js",
          "line": 64,
          "endline": 64,
          "start": 10,
          "end": 13
        },
        {
          "descr": "This type is incompatible with",
          "level": "error",
          "path": "",
          "line": 0,
          "endline": 0,
          "start": 1,
          "end": 0
        },
        {
          "descr": "boolean",
          "level": "error",
          "path": "\/Users\/andrew\/Projects\/sky-bet\/bet-webapp\/client\/stores\/betslip-helpers.js",
          "line": 63,
          "endline": 63,
          "start": 59,
          "end": 65
        }
      ],
      "kind": "infer"
    },
    {
      "message": [
        {
          "descr": "",
          "level": "warning",
          "path": "\/Users\/andrew\/Projects\/bet\/bet-webapp\/client\/stores\/betslip-helpers.js",
          "line": 65,
          "endline": 65,
          "start": 3,
          "end": 47
        },
        {
          "descr": "unreachable code",
          "level": "warning",
          "path": "",
          "line": 0,
          "endline": 0,
          "start": 1,
          "end": 0
        }
      ],
      "kind": "infer"
    },
    {
      "message": [
        {
          "descr": "",
          "level": "warning",
          "path": "\/Users\/andrew\/Projects\/bet\/bet-webapp\/client\/stores\/betslip-store.js",
          "line": 67,
          "endline": 71,
          "start": 3,
          "end": 6
        },
        {
          "descr": "unreachable code",
          "level": "warning",
          "path": "",
          "line": 0,
          "endline": 0,
          "start": 1,
          "end": 0
        }
      ],
      "kind": "infer"
    }
  ],
  "version": "59d090c1390486bcf585e65f2cfe0214ee74f773 Dec 18 2015 16:49:22"
}`

var flowJsonPassed = {"passed":true,"errors":[],"version":"59d090c1390486bcf585e65f2cfe0214ee74f773 Dec 18 2015 16:49:22"};

var expectedCheckstyleXmlFailed = '<?xml version="1.0" encoding="utf-8"?>\n'+
'<checkstyle version="4.3">\n'+
'<file name="\/Users\/andrew\/Projects\/bet\/bet-webapp\/client\/stores\/betslip-helpers.js">\n'+
'<error line="64" column="10" severity="error" message="string This type is incompatible with boolean" />\n'+
'<error line="65" column="3" severity="warning" message="unreachable code" />\n'+
'</file>\n'+
'<file name="\/Users\/andrew\/Projects\/bet\/bet-webapp\/client\/stores\/betslip-store.js">\n'+
'<error line="67" column="3" severity="warning" message="unreachable code" />\n'+
'</file>\n'+
'</checkstyle>';

var expectedCheckstyleXmlPassed = '<?xml version="1.0" encoding="utf-8"?>\n'+
'<checkstyle version="4.3">\n\n'+
'</checkstyle>';

tape('flow-json-to-checkstyle-xml', function(t) {
  t.plan(2);
  
  t.equal(flowToCheckstyle(flowJsonFailed), expectedCheckstyleXmlFailed)
  
  t.equal(flowToCheckstyle(flowJsonPassed), expectedCheckstyleXmlPassed)
})
