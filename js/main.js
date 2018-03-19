$(function(){
  $("#section").change(function(event){
        var selectVal = $(this).val();
        $(".NYlogo").css({
          "width" : "80px",
          "top" : "5px",
          "height" : "80px",
        });
        $("#section").css({
          "width" : "100px",
          "top" : "40px",
          "left" : "150px",
        });
        $("h3").css({
          "top" : "17px",
          "left" : "150px",
        });
        $(".wrapping").css({
          "height" : "100px",
        });
        $("#news").empty();
        var url = "https://api.nytimes.com/svc/topstories/v2/"+selectVal+".json";
    url += '?' + $.param({
      'api-key': "f6e3ac6ce7af477f9fd1254b4b7dd29f"
    });
    
    $.ajax({
      url: url,
      method: 'GET',
// if value = Section pull info only from that section
    }).done(function(data) {
      $.each(data.results, function(key, value){
        console.log(data)
        var arr = [value.results];
        if (value.multimedia && value.multimedia[4]){
          $("#news").append("<li class='news-story'>"+"<img src="+value.multimedia[4].url+">"+"<p class='newsHD'>"+value.abstract+"</p>"+"</li>")
        }
        if (arr<=11){
          return true
        }
        else {
          return false
        }
    });
    }).fail(function(err) {
      throw err;
    });
  });
  $("#news").on("mouseenter", "li", function(event) {
    $(event.currentTarget).find(".newsHD").slideDown();
  });
// if possible fix speed
  $("#news").on("mouseleave", "li", function(event) {
    $(event.currentTarget).find(".newsHD").slideUp();
  });  
});
// When clicking each button open images and title.