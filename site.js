var createTable = function(){
	'use strict';

	var  users = [{
			"name":"Qi Zhang",
			"gitname": "QiZhang79",
		    "id": "001",		    
		    "location": "Chicago",
		    "social_media":"facebook"
		},{
			"name":"JunFeng Wang",
			"gitname": "jwang206",
		    "id": "002",
		    "location": "Chicago",
		    "social_media":"insgram"
		},{
			"name":"Sara Lopez",
			"gitname": "slopez12",
		    "id": "003",
		    "location": "Chicago",
		    "social_media":"insgram"
		},{
			"name":"Meiqi Zhao",
			"gitname": "mzhao22",
		    "id": "004",
		    "location": "Chicago",
		    "social_media":"facebook"
		}      
	];

	

	$('#result').hide();
	$('#button').on("click",function(e){
		$('#result').show();
		var container = ["name", "gitname", "id", "loaction"];

		for(var i = 0; i < users.length; i++){
			var $row = '<tr>';
			var tbody = $("#user_table");

			// for(var j = 0; j < 4; j++ ){
			// 	$row += "<td>" + users[i]["name"] + "</td>";

			// }
			$row += "<td>" + users[i]["name"] + "</td>";
			$row += '<td><a href="https://github.com/' 
  				+ users[i]["gitname"] + '">' + users[i]["gitname"] + '</a></td>'
			$row += "<td>" + users[i]["id"] + "</td>";
			$row += "<td>" + users[i]["location"] + "</td>";
			$row += "<td>" + users[i]["social_media"] + "</td>";


			$row += "</tr>";
			tbody.append($row);
		}
		
	});
};

$(document).ready(createTable);

// var createTable = function(){
// 	'use strict';

// 	var  user = [{
// 			"name":"Qi Zhang",
// 			"gitname": "QiZhang79",
// 		    "id": "001",
// 		    "giturl":"https://github.com/QiZhang79",
// 		    "location": "Chicago",
// 		    "created_at": "2016-08-24 05:08:13",
// 		    "social_media":[
// 		    	"wechat",
// 		    	"facebook"
// 			] 
// 		},{
// 			"name":"JunFeng Wang",
// 			"gitname": "jwang206",
// 		    "id": "002",
// 		   	"giturl":"https://github.com/jwang206",
// 		    "location": "Chicago",
// 		    "created_at": "2016-08-24 05:08:13",
// 		    "social_media":[
// 		    	"wechat",
// 		    	"facebook"
// 		    ] 	
// 		}  
// 	]


// 	$('#button').on("click",function(e){
// 		$('#result').show();
// 		$("#result").append("<table>");
// 		for(var i = 0; i < user.length; i++){
// 			$('#result').append("<tr><td>" + user[i]["id"] + "</td></tr>");
// 			$('#result').append("<tr><td>" + '<a href="https://github.com/'+user[i]["gitname"]+'">' + user[i]["name"] + '</a>'+ "</td></t>");
// 			$('#result').append("<tr><td>" + user[i]["location"]+ "</td></tr>");
		
// 		}
		
// 	});
// };

// $(document).ready(createTable);




// $('#result').show();
// $('#result').append('<img src="' + user["avatar_url"] + '" />');
// $('#name').append('<a href="https://github.com/'+user["name"]+'">' + user["name"] + '</a>');
// $('#id').append(user["id"]);
// $('#location').append(user["location"]);
// $('#start').append(user["created_at"]);