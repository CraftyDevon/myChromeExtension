'use strict';

console.log("Imma fork your mom in the githubz");

$(function() {
    $.getJSON("http://food2fork.com/api/search?key=29b6c52c8f3661dd1e5a8b3dd142eecc&q=chocolate%20chip%20cookies",
      function(response) {
      	console.log(response);
      		console.log(response.recipes[1].publisher);
      		 $.each(response.recipes, function (i,recipes) {
            	$("#therecipes").append("<li>"+"<img class='img1' src="+recipes.image_url+">" + "<span>" + recipes.title + "</span>" + "<br />" + "<br />" + "<a target='_blank' href=" + recipes.source_url + ">" + "Get the recipe" + "</a>" +  "<div class='clear'>" + "</div>" + "</li>");
              	// $("#therecipes").append("<img class='img1' src="+recipes.image_url+">");
              	// $("#therecipes").append("<a href="+recipes.source_url+">" + 'Get The recipe' + "</a>");

        });
        });

    });
    
    // Not working
    



