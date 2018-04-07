var app=angular.module("myApp",[]);
app.service("arthsrv",function()
							{
								this.add=function(n1,n2)
										{
											return parseInt(n1)+parseInt(n2);
										};
								this.mul=function(n1,n2)
										{
											var r=parseInt(n1)*parseFloat(n2);
											return r.toFixed(2);
										};
							});
app.controller("DemoController",function($scope,arthsrv)
							{
								$scope.s1="";
								$scope.s2="";
								$scope.s3="";
								$scope.f1=function()
										{
											$scope.result=arthsrv.add($scope.s1,$scope.s2);
										};
								$scope.f2=function()
										{
											$scope.s4=$scope.s3;
											$scope.result="Total "+arthsrv.mul($scope.s1,$scope.s2);
										};
							});