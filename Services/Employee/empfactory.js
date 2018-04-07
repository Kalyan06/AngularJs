var app=angular.module("myApp",[]);
app.factory("EmpFactory",function()
					{
						var factObj={};
						factObj.emps=[];
						factObj.getEmps=function()
									{
										factObj.emps=[
														{empno:101,ename:"Kalyaan",sal:15000},
														{empno:102,ename:"Syam",sal:12500},
														{empno:103,ename:"Venkat",sal:13000},
														{empno:104,ename:"Ram",sal:15800},
														{empno:105,ename:"Tendulkar",sal:14900},
														{empno:106,ename:"Sundar",sal:14500},
														{empno:107,ename:"Kumar",sal:13900}
													 ];
										return factObj.emps;
									};
						factObj.getEmp=function(n)
									{
										return factObj.emps[n];
									};
						factObj.deleteEmp=function(n)
									{
										factObj.emps.splice(n,1);
									};
						factObj.addEmp=function(obj)
									{
										factObj.emps.push(obj);
									};
						factObj.editEmp=function(index,s2,s3)
									{
										factObj.emps[index].ename=s2;
										factObj.emps[index].sal=s3;
									};	
						return factObj;
					});
app.controller("DemoController",function($scope,EmpFactory)
					{
						$scope.ar=[];
						$scope.f1=function()
									{
										$scope.ar=EmpFactory.getEmps();
									};
						$scope.f2=function()
									{
										var obj={};
										obj.empno=$scope.s1;
										obj.ename=$scope.s2;
										obj.sal=$scope.s3;
										EmpFactory.addEmp(obj);
										$scope.clearData();
									}
						$scope.f3=function(n)
									{
										var obj=EmpFactory.getEmp(n);
										$scope.s1=obj.empno;
										$scope.s2=obj.ename;
										$scope.s3=obj.sal;
										$scope.index=n;
										
									};
						$scope.f4=function(n)
									{
										EmpFactory.deleteEmp(n);
									};
						$scope.f5=function()
									{
										EmpFactory.editEmp($scope.index,$scope.s2,$scope.s3);
										$scope.clearData();
									};			
						$scope.clearData=function()
									{
										$scope.s1="";
										$scope.s2="";
										$scope.s3="";
									};
					});