var app=angular.module("myApp",[]);
app.directive("demoDirective",function()
								{
									var directObj={};
									directObj.restrict="EA";
									directObj.template="<h1>Welcome to Kalyaan</h1>";
									return directObj;
								});
app.directive("empList",function()
								{
									var directObj={};
									directObj.restrict="E";
									directObj.templateUrl="template.html";
									return directObj;
								});
app.controller("DemoController",function($scope)
								{
									
									emps=[	
											{empno:101,ename:"Kalyaan",sal:15000},
											{empno:102,ename:"Syam",sal:12500},
											{empno:103,ename:"Venkat",sal:13000},
											{empno:104,ename:"Ram",sal:15800},
											{empno:105,ename:"Tendulkar",sal:14900},
											{empno:106,ename:"Sundar",sal:14500},
											{empno:107,ename:"Kumar",sal:13900}
										 ];
								});