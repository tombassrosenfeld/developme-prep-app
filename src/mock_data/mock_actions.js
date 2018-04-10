import {UPDATE_CREDENTIALS, USER_DATA, TOPICS_DATA, USER_PROGRESS, USER_ASSESSMENT_DATA, SET_STUDENTS} from '../data/actions_API';
import {ONCLICK_ICON} from '../data/actions';
import {fromJS, Map, List} from 'immutable';

/***********************************
MOCK API DATA
***********************************/

const onClickIcon = (state, { id }) => {
	
}

export const updateSelectedTopic = {
	type: ONCLICK_ICON,
	id: 1,
}

export const updateCredentialsAction = {
	type: UPDATE_CREDENTIALS,
	data: {
		token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvcmVzb3VyY2VzLmRldmVsb3BtZS50cmFpbmluZyIsImlhdCI6MTUyMjE0MTgxMCwibmJmIjoxNTIyMTQxODEwLCJleHAiOjE1MjI3NDY2MTAsImRhdGEiOnsidXNlciI6eyJpZCI6IjE0In19fQ.Q3t0aaD9vW6Eql0LDYmdq7dXofR4opeLQeBXHXYqFpw",
	user_display_name: "test student",
	user_email: "test@gmail.com",
	user_nicename: "teststudent2",
	}
}

export const setStudents = {
	type: SET_STUDENTS,
	data: fromJS([  
	  {  
	    "id":13,
	    "username":"peteTestStudent",
	    "name":"Student User",
	    "first_name":"Student",
	    "last_name":"User",
	    "email":"peteTestStudent@gmail.com",
	    "url":"",
	    "description":"",
	    "link":"https:\/\/resources.developme.training\/author\/peteteststudent\/",
	    "locale":"en_GB",
	    "nickname":"peteTestStudent",
	    "slug":"peteteststudent",
	    "roles":[  
	      "student"
	    ],
	    "registered_date":"2018-03-02T14:26:12+00:00",
	    "capabilities":{  
	      "edit_users":true,
	      "list_users":true,
	      "student":true
	    },
	    "extra_capabilities":{  
	      "student":true
	    },
	    "avatar_urls":{  
	      "24":"https:\/\/secure.gravatar.com\/avatar\/9ff2ba8630e5788d8e4edfd9f976bd18?s=24&d=mm&r=g",
	      "48":"https:\/\/secure.gravatar.com\/avatar\/9ff2ba8630e5788d8e4edfd9f976bd18?s=48&d=mm&r=g",
	      "96":"https:\/\/secure.gravatar.com\/avatar\/9ff2ba8630e5788d8e4edfd9f976bd18?s=96&d=mm&r=g"
	    },
	    "meta":[  

	    ],
	    "userProgress":[  
	      "PHP.0",
	      "SQL.assess.0",
	      "SQL.0",
	      "Equipment.0",
	      "HTML.assess.0",
	      "JS.assess.0"
	    ],
	    "userAssessmentData":{  
	      "PHP":[  
	        {  
	          "answers":[  
	            2
	          ]
	        }
	      ],
	      "SQL":[  
	        {  
	          "answers":[  
	            0,
	            0,
	            2,
	            3
	          ],
	          "result":3
	        }
	      ],
	      "HTML":[  
	        {  
	          "answers":[  
	            0,
	            1,
	            1,
	            0,
	            1,
	            2,
	            0,
	            0
	          ],
	          "result":6
	        }
	      ],
	      "JS":[  
	        {  
	          "answers":[  
	            2,
	            0,
	            2,
	            3,
	            1,
	            0
	          ],
	          "result":2
	        }
	      ]
	    },
	    "cohort":"CF01",
	    "_links":{  
	      "self":[  
	        {  
	          "href":"https:\/\/resources.developme.training\/wp-json\/wp\/v2\/users\/13"
	        }
	      ],
	      "collection":[  
	        {  
	          "href":"https:\/\/resources.developme.training\/wp-json\/wp\/v2\/users"
	        }
	      ]
	    }
	  },
	  {  
	    "id":14,
	    "username":"testStudent2",
	    "name":"test student",
	    "first_name":"test",
	    "last_name":"student",
	    "email":"test@gmail.com",
	    "url":"",
	    "description":"",
	    "link":"https:\/\/resources.developme.training\/author\/teststudent2\/",
	    "locale":"en_GB",
	    "nickname":"testStudent2",
	    "slug":"teststudent2",
	    "roles":[  
	      "student"
	    ],
	    "registered_date":"2018-03-02T15:27:54+00:00",
	    "capabilities":{  
	      "edit_users":true,
	      "list_users":true,
	      "student":true
	    },
	    "extra_capabilities":{  
	      "student":true
	    },
	    "avatar_urls":{  
	      "24":"https:\/\/secure.gravatar.com\/avatar\/1aedb8d9dc4751e229a335e371db8058?s=24&d=mm&r=g",
	      "48":"https:\/\/secure.gravatar.com\/avatar\/1aedb8d9dc4751e229a335e371db8058?s=48&d=mm&r=g",
	      "96":"https:\/\/secure.gravatar.com\/avatar\/1aedb8d9dc4751e229a335e371db8058?s=96&d=mm&r=g"
	    },
	    "meta":[  

	    ],
	    "userProgress":[  
	      "JS.assess.0",
	      "JS.0",
	      "JS.1",
	      "Equipment.0",
	      "PHP.0",
	      "PHP.assess.0",
	      "Command Line.0",
	      "CSS.0",
	      "Command Line.assess.0"
	    ],
	    "userAssessmentData":{  
	      "JS":[  
	        {  
	          "answers":[  
	            3,
	            2,
	            1,
	            3,
	            0,
	            3
	          ],
	          "result":1
	        }
	      ],
	      "PHP":[  
	        {  
	          "answers":[  
	            1,
	            0,
	            1,
	            0,
	            2
	          ],
	          "result":4
	        }
	      ],
	      "Command Line":[  
	        {  
	          "answers":[  
	            0,
	            0,
	            0,
	            0,
	            1
	          ],
	          "result":3
	        }
	      ]
	    },
	    "cohort":"CF02",
	    "_links":{  
	      "self":[  
	        {  
	          "href":"https:\/\/resources.developme.training\/wp-json\/wp\/v2\/users\/14"
	        }
	      ],
	      "collection":[  
	        {  
	          "href":"https:\/\/resources.developme.training\/wp-json\/wp\/v2\/users"
	        }
	      ]
	    }
	  }
	])
}

export const updateUserAssessmentData = {
	type: USER_ASSESSMENT_DATA,
	data: {  
      "JS":[  
        {  
          "answers":[  
            3,
            2,
            1,
            3,
            0,
            3
          ],
          "result":1
        }
      ],
      "PHP":[  
        {  
          "answers":[  
            1,
            0,
            1,
            0,
            2
          ],
          "result":4
        }
      ],
      "Command Line":[  
        {  
          "answers":[  
            0,
            0,
            0,
            0,
            1
          ],
          "result":3
        }
      ]
    },
}


export const userDataAction = {
	type: USER_DATA,
 	data: [{"id":14,"username":"testStudent2","name":"test student","first_name":"test","last_name":"student","email":"test@gmail.com","url":"","description":"","link":"https:\/\/resources.developme.training\/author\/teststudent2\/","locale":"en_GB","nickname":"testStudent2","slug":"teststudent2","roles":["student"],"registered_date":"2018-03-02T15:27:54+00:00","capabilities":{"edit_users":true,"list_users":true,"student":true},"extra_capabilities":{"student":true},"avatar_urls":{"24":"https:\/\/secure.gravatar.com\/avatar\/1aedb8d9dc4751e229a335e371db8058?s=24&d=mm&r=g","48":"https:\/\/secure.gravatar.com\/avatar\/1aedb8d9dc4751e229a335e371db8058?s=48&d=mm&r=g","96":"https:\/\/secure.gravatar.com\/avatar\/1aedb8d9dc4751e229a335e371db8058?s=96&d=mm&r=g"},"meta":[],"userProgress":["JS.assess.0","JS.0","JS.1","Equipment.0","PHP.0","PHP.assess.0"],"userAssessmentData":{"JS":[{"answers":[3,2,1,3,0,3],"result":1}],"PHP":[{"answers":[1,0,1,0,2],"result":4}]},"cohort":"CF02","_links":{"self":[{"href":"https:\/\/resources.developme.training\/wp-json\/wp\/v2\/users\/14"}],"collection":[{"href":"https:\/\/resources.developme.training\/wp-json\/wp\/v2\/users"}]}}]
}

export const setTopicsAction = {
    type: TOPICS_DATA,
    data: [{"id":402,"date":"2018-03-01T16:13:38","date_gmt":"2018-03-01T16:13:38","guid":{"rendered":"http:\/\/resources.developme.training\/?post_type=cf_preparation&#038;p=402"},"modified":"2018-03-26T11:31:35","modified_gmt":"2018-03-26T10:31:35","slug":"php-hypertext-processor","status":"publish","type":"cf_preparation","link":"https:\/\/resources.developme.training\/cf-preparation\/php-hypertext-processor\/","title":{"rendered":"PHP Hypertext Processor"},"content":{"rendered":"","protected":false},"excerpt":{"rendered":"","protected":false},"featured_media":0,"template":"","acfs":{"short_title":"PHP","description":"<p>PHP is used by over 244 million websites across the world and is a great first server-side language to pick up. Complete these tasks to learn one of the most popular back end scripting languages.<\/p>\n","tasks":[{"task":"PHP Basics","description":"<p>Use the resources below to start learning PHP.<\/p>\n","resources":[{"title":"Laracasts - PHP beginners","resource_type":"fa-wifi","description":"This is an excellent introduction to PHP, where you will learn everything you need to know to write your first script.","link":"https:\/\/laracasts.com\/series\/php-for-beginners"},{"title":"Codecademy - PHP","resource_type":"fa-wifi","description":"Learn and code PHP at the same time with Codecademy.","link":"https:\/\/www.codecademy.com\/en\/tracks\/php"},{"title":"Learn-PHP interactive tutorial","resource_type":"fa-wifi","description":"Interactive PHP tutorial with embedded text editor for instant feedback on your code.","link":"http:\/\/www.learn-php.org\/"},{"title":"CodeCourse - Learn PHP","resource_type":"fa-eye","description":"YouTube video series designed to teach you the basics of PHP.","link":"https:\/\/www.youtube.com\/playlist?list=PLfdtiltiRHWFD41D_LDomY1Fb-O9MtFqq"}]}],"assessment":[{"assessment_title":"PHP Basics","questions":[{"question":"Which delimiters surround PHP scripts?","answer_type":"Multiple Choice","answers":[{"answer_choice":"<script><\/script>"},{"answer_choice":"<?php ?>"},{"answer_choice":"<?php><\/?>"},{"answer_choice":"<&><\/&>"},{"answer_choice":""}],"correct_answer":"2"},{"question":"How do you print \"Hello World\" in PHP?","answer_type":"Multiple Choice","answers":[{"answer_choice":"echo \"Hello World\";"},{"answer_choice":"console.log(\"Hello World\");"},{"answer_choice":"print \"Hello World\";"},{"answer_choice":"document.write(\"Hello World\");"},{"answer_choice":""}],"correct_answer":"1"},{"question":"Which of the below is valid syntax for a PHP variable declaration?","answer_type":"Multiple Choice","answers":[{"answer_choice":"const $foo = 'bar';"},{"answer_choice":"$foo = 'bar';"},{"answer_choice":"var foo = 'bar';"},{"answer_choice":""},{"answer_choice":""}],"correct_answer":"2"},{"question":"PHP will throw an error if you do not end each statement with a semi-colon.","answer_type":"Multiple Choice","answers":[{"answer_choice":"True"},{"answer_choice":"False"},{"answer_choice":""},{"answer_choice":""},{"answer_choice":""}],"correct_answer":"1"},{"question":"What is the correct way to create a function in PHP?","answer_type":"Multiple Choice","answers":[{"answer_choice":"new_function myFunction() {};"},{"answer_choice":"function myFunction() {}"},{"answer_choice":"create myFunction() {}"},{"answer_choice":""},{"answer_choice":""}],"correct_answer":"2"}]}],"topic_order":"6"},"_links":{"self":[{"href":"https:\/\/resources.developme.training\/wp-json\/wp\/v2\/cf_preparation\/402"}],"collection":[{"href":"https:\/\/resources.developme.training\/wp-json\/wp\/v2\/cf_preparation"}],"about":[{"href":"https:\/\/resources.developme.training\/wp-json\/wp\/v2\/types\/cf_preparation"}],"wp:attachment":[{"href":"https:\/\/resources.developme.training\/wp-json\/wp\/v2\/media?parent=402"}],"curies":[{"name":"wp","href":"https:\/\/api.w.org\/{rel}","templated":true}]}},{"id":399,"date":"2018-03-01T12:38:54","date_gmt":"2018-03-01T12:38:54","guid":{"rendered":"http:\/\/resources.developme.training\/?post_type=cf_preparation&#038;p=399"},"modified":"2018-03-26T11:33:06","modified_gmt":"2018-03-26T10:33:06","slug":"structured-query-language","status":"publish","type":"cf_preparation","link":"https:\/\/resources.developme.training\/cf-preparation\/structured-query-language\/","title":{"rendered":"Structured Query Language"},"content":{"rendered":"","protected":false},"excerpt":{"rendered":"","protected":false},"featured_media":0,"template":"","acfs":{"short_title":"SQL","description":"<p>Learn how to use SQL to store, query, and manipulate data. SQL is a special-purpose programming language designed for managing data in a database, and is used by a huge number of apps and organisations.<\/p>\n","tasks":[{"task":"Learn the basics of SQL","description":"<p>Understanding the basics of SQL would benefit you greatly coming into the Coding Fellowship. We will build projects that use MySQL at their core to store and manage data.<\/p>\n","resources":[{"title":"Codecademy - Learn SQL","resource_type":"fa-eye","description":"Code and learn at the same time with Codecademy's Learn SQL course.","link":"https:\/\/www.codecademy.com\/learn\/learn-sql"}]}],"assessment":[{"assessment_title":"SQL Basics","questions":[{"question":"Which SQL statement is used to display data from a table?","answer_type":"Multiple Choice","answers":[{"answer_choice":"SELECT"},{"answer_choice":"EXTRACT"},{"answer_choice":"SHOW"},{"answer_choice":"USE"},{"answer_choice":"GET"}],"correct_answer":"1"},{"question":"Which SQL statement is used to update data in a table?","answer_type":"Multiple Choice","answers":[{"answer_choice":"UPDATE"},{"answer_choice":"MODIFY"},{"answer_choice":"PUT"},{"answer_choice":"CHANGE"},{"answer_choice":""}],"correct_answer":"1"},{"question":"How would you select all rows from the table `users`?","answer_type":"Multiple Choice","answers":[{"answer_choice":"SHOW data in `users`;"},{"answer_choice":"GET data from `users`;"},{"answer_choice":"SELECT * FROM `users`;"},{"answer_choice":"SELECT `users` data;"},{"answer_choice":""}],"correct_answer":"3"},{"question":"How would you insert a new row into a table?","answer_type":"Multiple Choice","answers":[{"answer_choice":"ADD RECORD"},{"answer_choice":"ADD NEW"},{"answer_choice":"INSERT INTO"},{"answer_choice":"PUSH"},{"answer_choice":""}],"correct_answer":"3"}]}],"topic_order":"7"},"_links":{"self":[{"href":"https:\/\/resources.developme.training\/wp-json\/wp\/v2\/cf_preparation\/399"}],"collection":[{"href":"https:\/\/resources.developme.training\/wp-json\/wp\/v2\/cf_preparation"}],"about":[{"href":"https:\/\/resources.developme.training\/wp-json\/wp\/v2\/types\/cf_preparation"}],"wp:attachment":[{"href":"https:\/\/resources.developme.training\/wp-json\/wp\/v2\/media?parent=399"}],"curies":[{"name":"wp","href":"https:\/\/api.w.org\/{rel}","templated":true}]}},{"id":398,"date":"2018-03-01T12:27:18","date_gmt":"2018-03-01T12:27:18","guid":{"rendered":"http:\/\/resources.developme.training\/?post_type=cf_preparation&#038;p=398"},"modified":"2018-03-26T11:31:17","modified_gmt":"2018-03-26T10:31:17","slug":"command-line","status":"publish","type":"cf_preparation","link":"https:\/\/resources.developme.training\/cf-preparation\/command-line\/","title":{"rendered":"Command Line"},"content":{"rendered":"","protected":false},"excerpt":{"rendered":"","protected":false},"featured_media":0,"template":"","acfs":{"short_title":"Command Line","description":"<p>The command line, also called terminal, bash, SSH or PuTTY (on Windows), is used to textually administer computers, usually servers.<\/p>\n","tasks":[{"task":"Getting familiar with the command line","description":"","resources":[{"title":"Learn Enough\u2019s Command Line tutorial","resource_type":"fa-wifi","description":"Follow the tutorial and run some of these commands in Terminal (Mac) or Git Bash (Windows)","link":"https:\/\/www.learnenough.com\/command-line-tutorial"},{"title":"Codecademy - Learn the Command Line","resource_type":"fa-eye","description":"By the end of the course, you will be able to navigate, access, and modify files and folders on your computer\u2014all without a mouse!","link":"https:\/\/www.codecademy.com\/learn\/learn-the-command-line"}]}],"assessment":[{"assessment_title":"Command Line assessment","questions":[{"question":"Which command would you use to show the current directory?","answer_type":"Multiple Choice","answers":[{"answer_choice":"pwd"},{"answer_choice":"swd"},{"answer_choice":"dir"},{"answer_choice":""},{"answer_choice":""}],"correct_answer":"1"},{"question":"How do you change directory?","answer_type":"Multiple Choice","answers":[{"answer_choice":"mv"},{"answer_choice":"cd"},{"answer_choice":"change"},{"answer_choice":""},{"answer_choice":""}],"correct_answer":"2"},{"question":"List all of the files in the current directory","answer_type":"Multiple Choice","answers":[{"answer_choice":"touch"},{"answer_choice":"cp"},{"answer_choice":"ls"},{"answer_choice":""},{"answer_choice":""}],"correct_answer":"3"},{"question":"The rm command removes specified files.","answer_type":"Multiple Choice","answers":[{"answer_choice":"True"},{"answer_choice":"False"},{"answer_choice":""},{"answer_choice":""},{"answer_choice":""}],"correct_answer":"1"},{"question":"How do you make a directory?","answer_type":"Multiple Choice","answers":[{"answer_choice":"dir -make"},{"answer_choice":"mkdir"},{"answer_choice":"directory --create"},{"answer_choice":""},{"answer_choice":""}],"correct_answer":"2"}]}],"topic_order":"5"},"_links":{"self":[{"href":"https:\/\/resources.developme.training\/wp-json\/wp\/v2\/cf_preparation\/398"}],"collection":[{"href":"https:\/\/resources.developme.training\/wp-json\/wp\/v2\/cf_preparation"}],"about":[{"href":"https:\/\/resources.developme.training\/wp-json\/wp\/v2\/types\/cf_preparation"}],"wp:attachment":[{"href":"https:\/\/resources.developme.training\/wp-json\/wp\/v2\/media?parent=398"}],"curies":[{"name":"wp","href":"https:\/\/api.w.org\/{rel}","templated":true}]}},{"id":396,"date":"2018-03-01T10:39:13","date_gmt":"2018-03-01T10:39:13","guid":{"rendered":"http:\/\/resources.developme.training\/?post_type=cf_preparation&#038;p=396"},"modified":"2018-03-26T11:30:59","modified_gmt":"2018-03-26T10:30:59","slug":"javascript","status":"publish","type":"cf_preparation","link":"https:\/\/resources.developme.training\/cf-preparation\/javascript\/","title":{"rendered":"JavaScript"},"content":{"rendered":"","protected":false},"excerpt":{"rendered":"","protected":false},"featured_media":0,"template":"","acfs":{"short_title":"JS","description":"<p>JavaScript is the most popular programming language in web development and when applied to a web page, it can provide dynamic interactivity. Complete the Tasks and Assessments below to learn how to bring web pages to life.<\/p>\n","tasks":[{"task":"Introduction to JavaScript","description":"<p>Learn the JavaScript syntax and write your first few lines of code.<\/p>\n","resources":[{"title":"JavaScript Essentials","resource_type":"fa-eye","description":"A comprehensive JavaScript tutorial which consists of short but very informative videos.","link":"https:\/\/www.youtube.com\/playlist?list=PLGC-hHIh7l5vs0uDGlQEXQGQR2hW8Gcwl"},{"title":"Eloquent JavaScript","resource_type":"fa-file-o","description":"A free online programming in JavaScript book. Chapters 1-3 will be particularly useful.","link":"http:\/\/eloquentjavascript.net\/"},{"title":"JavaScript: Understanding the Weird Parts","resource_type":"fa-eye","description":"An excellent look at how JavaScript works under the hood. You can buy the full course here - https:\/\/www.udemy.com\/understand-javascript\/learn\/v4\/overview","link":"https:\/\/www.youtube.com\/watch?v=Bv_5Zv5c-Ts"},{"title":"Codecademy - make an interactive website","resource_type":"fa-wifi","description":"Learn JavaScript by coding along with this excellent Codecademy course.","link":"https:\/\/www.codecademy.com\/skills\/make-an-interactive-website"},{"title":"Write JS with FreeCodeCamp","resource_type":"fa-eye","description":"Follow the Basic JavaScript section of the Front End Development Certification","link":"https:\/\/www.freecodecamp.org\/map"}]},{"task":"Coding challenges","description":"<p>The best way to learn how to program, is to program. Challenge yourself with projects and CodeWars but don&#8217;t beat yourself up if you struggle, we will help you every step of the way on the Coding Fellowship.<\/p>\n","resources":[{"title":"FreeCodeCamp - Basic front-end projects","resource_type":"fa-eye","description":"Build a tribute page or even your own portfolio site! ","link":"https:\/\/www.freecodecamp.org\/map"},{"title":"CodeWars","resource_type":"fa-wifi","description":"Coding challenges designed to test your logical process, these aren't meant to be easy!","link":"https:\/\/www.codewars.com\/"}]}],"assessment":[{"assessment_title":"JavaScript Basics","questions":[{"question":"Which HTML tag is used to add JavaScript to a web page?","answer_type":"Multiple Choice","answers":[{"answer_choice":"<head>"},{"answer_choice":"<script src=\"script.js\">"},{"answer_choice":"<link href=\"script.js\">"},{"answer_choice":"<javascript  src=\"script.js\">"},{"answer_choice":""}],"correct_answer":"2"},{"question":"What is the best place to add JavaScript to a HTML document?","answer_type":"Multiple Choice","answers":[{"answer_choice":"<body>"},{"answer_choice":"<head>"},{"answer_choice":"Inside individual HTML elements"},{"answer_choice":""},{"answer_choice":""}],"correct_answer":"1"},{"question":"How do you print to the console in a browser's development tools?","answer_type":"Multiple Choice","answers":[{"answer_choice":"document.write();"},{"answer_choice":"console.textContent = '';"},{"answer_choice":"console.write();"},{"answer_choice":"console.log();"},{"answer_choice":""}],"correct_answer":"4"},{"question":"How do you create a variable in JavaScript ES6? ","answer_type":"Multiple Choice","answers":[{"answer_choice":"let variableName = 'value'; "},{"answer_choice":"$variableName = 'value';"},{"answer_choice":"string variableName = 'value';"},{"answer_choice":"variableName: 'value'"},{"answer_choice":""}],"correct_answer":"1"},{"question":"External JavaScript files should include the script tag.","answer_type":"Multiple Choice","answers":[{"answer_choice":"True"},{"answer_choice":"False"},{"answer_choice":""},{"answer_choice":""},{"answer_choice":""}],"correct_answer":"2"},{"question":"How would you call a function named 'greeting'?","answer_type":"Multiple Choice","answers":[{"answer_choice":"(greeting);"},{"answer_choice":"function greeting;"},{"answer_choice":"call greeting;"},{"answer_choice":"greeting();"},{"answer_choice":"document.call(greeting)"}],"correct_answer":"4"}]}],"topic_order":"4"},"_links":{"self":[{"href":"https:\/\/resources.developme.training\/wp-json\/wp\/v2\/cf_preparation\/396"}],"collection":[{"href":"https:\/\/resources.developme.training\/wp-json\/wp\/v2\/cf_preparation"}],"about":[{"href":"https:\/\/resources.developme.training\/wp-json\/wp\/v2\/types\/cf_preparation"}],"wp:attachment":[{"href":"https:\/\/resources.developme.training\/wp-json\/wp\/v2\/media?parent=396"}],"curies":[{"name":"wp","href":"https:\/\/api.w.org\/{rel}","templated":true}]}},{"id":374,"date":"2018-02-28T16:38:29","date_gmt":"2018-02-28T16:38:29","guid":{"rendered":"http:\/\/resources.developme.training\/?post_type=cf_preparation&#038;p=374"},"modified":"2018-03-26T11:30:41","modified_gmt":"2018-03-26T10:30:41","slug":"cascading-style-sheets","status":"publish","type":"cf_preparation","link":"https:\/\/resources.developme.training\/cf-preparation\/cascading-style-sheets\/","title":{"rendered":"Cascading Style Sheets"},"content":{"rendered":"","protected":false},"excerpt":{"rendered":"","protected":false},"featured_media":0,"template":"","acfs":{"short_title":"CSS","description":"<p>Great &#8211; you&#8217;ve learned this basics of HTML. You&#8217;re probably thinking that these web pages look awful! Here you&#8217;ll be introduced to CSS, which in conjunction with HTML will allow you to create well structured and presentable web pages.<\/p>\n","tasks":[{"task":"Introduction to CSS","description":"<p>CSS is the stylesheet language used to describe the presentation of a HTML document. Here you will be introduced to the CSS syntax, as well as using some of its properties to style HTML elements.<\/p>\n","resources":[{"title":"CSS introduction","resource_type":"fa-eye","description":"A quick recap of HTML and an introduction to CSS","link":"https:\/\/css-tricks.com\/video-screencasts\/58-html-css-the-very-basics\/"},{"title":"Codecademy - Learn CSS","resource_type":"fa-wifi","description":"Learn and code CSS at the same with Codecademy.","link":"https:\/\/www.codecademy.com\/learn\/learn-css"},{"title":"CSS Selectors","resource_type":"fa-wifi","description":"Understand how styles are applied to HTML elements.","link":"https:\/\/css-tricks.com\/how-css-selectors-work\/"},{"title":"CSS syntax","resource_type":"fa-wifi","description":"A closer look at CSS syntax.","link":"https:\/\/css-tricks.com\/css-basics-syntax-matters-syntax-doesnt\/"},{"title":"CSS layout","resource_type":"fa-wifi","description":"","link":"http:\/\/learnlayout.com\/"}]},{"task":"CSS Crash Course","description":"<p>This tutorial will give you a look at styles, selectors and declarations. You will build a CSS cheat sheet and a basic website layout. Cheat sheets will really help you throughout the course and we would highly recommend that you come to the Fellowship with a cheat sheet already in place.<\/p>\n","resources":[{"title":"Crash Course","resource_type":"fa-eye","description":"","link":"https:\/\/www.youtube.com\/watch?v=yfoY53QXEnI"}]}],"assessment":false,"topic_order":"3"},"_links":{"self":[{"href":"https:\/\/resources.developme.training\/wp-json\/wp\/v2\/cf_preparation\/374"}],"collection":[{"href":"https:\/\/resources.developme.training\/wp-json\/wp\/v2\/cf_preparation"}],"about":[{"href":"https:\/\/resources.developme.training\/wp-json\/wp\/v2\/types\/cf_preparation"}],"wp:attachment":[{"href":"https:\/\/resources.developme.training\/wp-json\/wp\/v2\/media?parent=374"}],"curies":[{"name":"wp","href":"https:\/\/api.w.org\/{rel}","templated":true}]}},{"id":371,"date":"2018-02-28T14:49:34","date_gmt":"2018-02-28T14:49:34","guid":{"rendered":"http:\/\/resources.developme.training\/?post_type=cf_preparation&#038;p=371"},"modified":"2018-03-26T12:23:23","modified_gmt":"2018-03-26T11:23:23","slug":"tools-for-the-job","status":"publish","type":"cf_preparation","link":"https:\/\/resources.developme.training\/cf-preparation\/tools-for-the-job\/","title":{"rendered":"Tools for the job"},"content":{"rendered":"","protected":false},"excerpt":{"rendered":"","protected":false},"featured_media":0,"template":"","acfs":{"short_title":"Equipment","description":"<p>We appreciate that our students can\u2019t always afford a top-spec laptop. However, our experience has been that a lot of students with older machines become increasingly frustrated with them throughout the course, and end up upgrading them eventually, as they find they really hold them back.<\/p>\n<p>Please consider if this might be you, and think about upgrading before the course rather than at the end. The price of a new machine is small compared to your course fees. If you are considering upgrading we suggest you talk to us first.<\/p>\n<p>That said, if at all possible\u00a0<strong>we strongly recommend using a Mac with at least 8GB of Ram<\/strong>.<\/p>\n<p>You\u2019ll want to be comfortable on the computer you\u2019ll be using during lessons as you\u2019ll be using it heavily every day. When you\u2019re trying to concentrate on a new topic the last thing you want is to struggle with the computer too!<\/p>\n<p>You\u2019ll want a reliable machine (that is going to turn on each day!) and a familiar computer that isn\u2019t going to be a distraction.<\/p>\n<p>You\u2019ll want to be very comfortable with the keyboard, especially how to get some of the unusual characters that web development requires, like these: &lt; &gt; { } [ ] \u201d \u2018 ` | $ *<\/p>\n","tasks":[{"task":"Hardware","description":"<p>Although expensive hardware isn\u2019t needed for most web development, it is well worth investing in a powerful high spec laptop. It will make your life on the course and as a web developer much easier. We\u2019ve found that cheap, underpowered laptops can really struggle when running virtual computers in the later weeks of the course. This means tasks take longer and can be more frustrating to complete, creating distraction from the task at hand and making it harder to keep up with the class.<\/p>\n<p>The virtual machines we use run inside your computer requiring their own CPU and RAM resources and can start to tax laptops, especially if you\u2019re also trying to use Photoshop and a few browser windows too!<\/p>\n<p>We\u2019d therefore recommend at least\u00a0<strong>8GB of RAM<\/strong>, and this can be a cheap upgrade (\u00a330-50) that will improve the overall performance of your machine.<\/p>\n<p>Replacing an HDD with an SSD can also be a reasonable upgrade (~\u00a380) to put life back into an older machine.<\/p>\n","resources":false}],"assessment":false,"topic_order":"1"},"_links":{"self":[{"href":"https:\/\/resources.developme.training\/wp-json\/wp\/v2\/cf_preparation\/371"}],"collection":[{"href":"https:\/\/resources.developme.training\/wp-json\/wp\/v2\/cf_preparation"}],"about":[{"href":"https:\/\/resources.developme.training\/wp-json\/wp\/v2\/types\/cf_preparation"}],"wp:attachment":[{"href":"https:\/\/resources.developme.training\/wp-json\/wp\/v2\/media?parent=371"}],"curies":[{"name":"wp","href":"https:\/\/api.w.org\/{rel}","templated":true}]}},{"id":365,"date":"2018-02-15T16:14:13","date_gmt":"2018-02-15T16:14:13","guid":{"rendered":"http:\/\/resources.developme.training\/?post_type=cf_preparation&#038;p=365"},"modified":"2018-03-26T11:30:23","modified_gmt":"2018-03-26T10:30:23","slug":"preparation","status":"publish","type":"cf_preparation","link":"https:\/\/resources.developme.training\/cf-preparation\/preparation\/","title":{"rendered":"Hyper Text Markup Language"},"content":{"rendered":"<p>HTy<\/p>\n","protected":false},"excerpt":{"rendered":"<p>HTy<\/p>\n","protected":false},"featured_media":0,"template":"","acfs":{"short_title":"HTML","description":"<p>To build websites, you should know about HTML \u2014 the fundamental technology used to define the structure of a webpage. HTML is used to specify whether your web content should be recognised as a paragraph, list, heading, link, image, multimedia player, form, or one of many other available elements or even a new element that you define.<\/p>\n","tasks":[{"task":"HTML fundamentals","description":"<p>Understanding HTML and how to write it is key to building well structured and accessible websites. Use the resources below to learn about the fundamentals of HTML and even write some yourself.<\/p>\n","resources":[{"title":"Codecademy - Learn HTML ","resource_type":"fa-wifi","description":"HTML fundamentals course","link":"https:\/\/www.codecademy.com\/learn\/learn-html"},{"title":"HTML & CSS by Jon Duckett","resource_type":"fa-file-o","description":"An easy to read HTML and CSS reference for anyone looking to get into coding.","link":"http:\/\/www.htmlandcssbook.com\/"},{"title":"Khan Academy - Intro to HTML","resource_type":"fa-eye","description":"Instructional videos with challenges.","link":"https:\/\/www.khanacademy.org\/computing\/computer-programming\/html-css\/intro-to-html\/v\/making-webpages-intro"},{"title":"FreeCodeCamp","resource_type":"fa-wifi","description":"Sign up to FreeCodeCamp and complete their HTML challenges","link":"https:\/\/www.freecodecamp.org\/"}]},{"task":"CHALLENGE - Create an article page","description":"<p>When learning to code it is important to continuously build things.<\/p>\n<p>Create an article in HTML, it will need to have:<\/p>\n<p>&#8211; title \\n<br \/>\n&#8211; 3 paragraphs \\n<br \/>\n&#8211; main image \\n<br \/>\n&#8211; list of links to related articles<\/p>\n","resources":false}],"assessment":[{"assessment_title":"HTML Basics","questions":[{"question":"What does HTML stand for? ","answer_type":"Multiple Choice","answers":[{"answer_choice":"Hyper Transfer Machine Language"},{"answer_choice":"Hashed Text Markup Language"},{"answer_choice":"Hyperlinks and Text Markup Language"},{"answer_choice":"Hyper Text Markup Language"},{"answer_choice":""}],"correct_answer":"4"},{"question":"What is the correct tag for the largest header on a page?","answer_type":"Multiple Choice","answers":[{"answer_choice":"<header>"},{"answer_choice":"<h1>"},{"answer_choice":"<head>"},{"answer_choice":"<h6>"},{"answer_choice":""}],"correct_answer":"2"},{"question":"In which tag should all of the visible web page content be contained?","answer_type":"Multiple Choice","answers":[{"answer_choice":"<main>"},{"answer_choice":"<body>"},{"answer_choice":"<head>"},{"answer_choice":"<script>"},{"answer_choice":"<p>"}],"correct_answer":"2"},{"question":"Which of the below is using the correct markup for a hyperlink?","answer_type":"Multiple Choice","answers":[{"answer_choice":"<link to=\"\/home\">Home<\/link>"},{"answer_choice":"<a href=\"\/home \/>"},{"answer_choice":"<a href=\"\/home\">Home<\/a>"},{"answer_choice":"<a>Home<\/a>"},{"answer_choice":""}],"correct_answer":"3"},{"question":"Which set of tags would you use to create an unordered list of items?","answer_type":"Multiple Choice","answers":[{"answer_choice":"<div>, <li>"},{"answer_choice":"<ul>, <li>"},{"answer_choice":"<list>, <item>"},{"answer_choice":"<ul>, <bullet>, <li>"},{"answer_choice":""}],"correct_answer":"2"},{"question":"What is the HTML5 DOCTYPE declaration?","answer_type":"Multiple Choice","answers":[{"answer_choice":"<!DOCTYPE 5>"},{"answer_choice":"<!html5>"},{"answer_choice":"<!DOCTYPE html>"},{"answer_choice":""},{"answer_choice":""}],"correct_answer":"3"},{"question":"What is the correct HTML for making a checkbox?","answer_type":"Multiple Choice","answers":[{"answer_choice":"<input type=\"checkbox\"\/>"},{"answer_choice":"<checkbox\/>"},{"answer_choice":"<check\/>"},{"answer_choice":"<select checkbox><\/select>"},{"answer_choice":""}],"correct_answer":"1"},{"question":"What is the correct HTML for creating a dropdown list?","answer_type":"Multiple Choice","answers":[{"answer_choice":"<select><option><\/option><\/select>"},{"answer_choice":"<select><li><\/li><\/select>"},{"answer_choice":"<ul><option><\/option><\/ul>"},{"answer_choice":"<dropdown><\/dropdown>"},{"answer_choice":""}],"correct_answer":"1"}]}],"topic_order":"2"},"_links":{"self":[{"href":"https:\/\/resources.developme.training\/wp-json\/wp\/v2\/cf_preparation\/365"}],"collection":[{"href":"https:\/\/resources.developme.training\/wp-json\/wp\/v2\/cf_preparation"}],"about":[{"href":"https:\/\/resources.developme.training\/wp-json\/wp\/v2\/types\/cf_preparation"}],"wp:attachment":[{"href":"https:\/\/resources.developme.training\/wp-json\/wp\/v2\/media?parent=365"}],"curies":[{"name":"wp","href":"https:\/\/api.w.org\/{rel}","templated":true}]}}]
};

export const userProgressAction = {
	type: USER_PROGRESS,
	data: ["JS.assess.0","JS.0","JS.1","Equipment.0","PHP.0","PHP.assess.0","Command Line.0"],
}
