var app=angular.module("myApp",[]);
app.filter("genderFilter",function()
							{
								var gender=function(input)
											{
												var output="";
												if(input=="M" || input=="m")
												{output="Male";}
												if(input=="F" || input=="f")
												{output="Female";}
												return output;
											};
									return gender;
							});
							