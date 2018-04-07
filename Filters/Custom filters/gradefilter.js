var app=angular.module("myApp",[]);
app.filter("gradeFilter",function()
							{
								var grade=function(input)
											{
												var output="";
												switch(input)
												{
													case 1:output="Outstanding";break;
													case 2:output="Excellent";break;
													case 3:output="Good";break;
													case 4:output="Average";break;
												}
												return output;
											};
									return grade;
							});
app.controller("DemoController",function($scope)
								{
									$scope.emp='Kalyaan';
									$scope.gender='M';
									$scope.grade=1;
								});