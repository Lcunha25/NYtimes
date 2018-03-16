$(function(){
  $("#news").on("mouseenter", "li", function(event) {
    $(event.currentTarget).find(".newsHD").slideDown();
  });
// if possible fix speed
  $("#news").on("mouseleave", "li", function(event) {
    $(event.currentTarget).find(".newsHD").slideUp();
  });

  $("#section").click(function(event){
    event.preventDefault();
        var url = "https://api.nytimes.com/svc/topstories/v2/world.json";
    url += '?' + $.param({
      'api-key': "f6e3ac6ce7af477f9fd1254b4b7dd29f"
    });
    $.ajax({
      url: url,
      method: 'GET',
// if value = Section pull info only from that section
    }).done(function(data) {
      $.each(data.results, function(key, value){
        if (value.multimedia[4]){
        $("#news").append("<li class='news-story'>"+"<img src="+value.multimedia[4].url+">"+"<p class='newsHD'>"+value.title+"</p>"+"</li>")
        }
      });
    }).fail(function(err) {
      throw err;
    });
  });
  
});
// When clicking each button open images and title.