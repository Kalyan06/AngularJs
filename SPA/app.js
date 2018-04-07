var app=angular.module("myApp",["ngRoute"]);
app.config(function($routeProvider)
					{
						$routeProvider.when("/Students",
												{
													templateUrl:"Students.html",
													controller:"StudentsController"
												})
									.when("/Home",
												{
													templateUrl:"Home.html",
													controller:""
												})
									.when("/Contact us",
												{
													templateUrl:"Contact us.html",
													controller:""
												})
									.when("/Courses",
												{
													templateUrl:"Courses.html",
													controller:"CoursesController"
												})
									.otherwise({
										redirectTo:"/Home"
									});
					});
/*var blink = angular.module('blink', [])
    .directive('blink', function($timeout) {
    return {
        restrict: 'E',
        transclude: true,
        scope: {},
        controller: function($scope, $element) {
            function showElement() {
                $element.css("display", "inline");
                $timeout(hideElement, 1000);
            }

            function hideElement() {
                $element.css("display", "none");
                $timeout(showElement, 1000);
            }
            showElement();
        },
        template: '<span ng-transclude></span>',
        replace: true
    };
});*/					
app.directive('blink',function()
								{
									var obj={};
									obj.restrict='E';
									obj.controller=function($timeout,$element)
													{
														function show()
														{
															$element.css("display","inline");
															$timeout(hide,1000);
														};
														function hide()
														{
															$element.css("display","none");
															$timeout(show,400);
														};
														show();
													};
									return obj;
								});
app.controller("StudentsController",function($scope)
								{
									$scope.ar=[
												{sno:101,sname:"Kalyaan"},
												{sno:102,sname:"Syam"},
												{sno:103,sname:"Venkat"},
												{sno:104,sname:"Ram"},
												{sno:105,sname:"Tendulkar"},
												{sno:106,sname:"Sundar"},
												{sno:107,sname:"Kumar"}
											  ];
								});
app.controller("CoursesController",function($scope)
								{
									$scope.ar=["HTML5","CSS3","AngularJS","JavaScript","Bootstrap","jQuery","JSP"];
								});
