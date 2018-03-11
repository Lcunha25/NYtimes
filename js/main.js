// $(function(){
  
//     $("#album-search").submit(function(event){
//       event.preventDefault();
//       var artistName = $('#artist-name').val().replace(" ","+");
//       $.ajax({method:"get",url:"https://itunes.apple.com/search?entity=album&limit=6&term="+artistName,
//         dataType:"JSONP"})
//       .done(function(data){
//         $.each(data.results, function(key, value){
//         $(".album-list").append("<li>"+"<img src="+value.artworkUrl60
//   +">"+"</li>").append("<p>"+value.artistName
//   +"</p>")
//         });
//       });
//     });
//   });

  $(function(){

  var url = "https://api.nytimes.com/svc/topstories/v2/home.json";
url += '?' + $.param({
  'api-key': "f6e3ac6ce7af477f9fd1254b4b7dd29f"
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
}).fail(function(err) {
  throw err;
});

});