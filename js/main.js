$(()=> {
  $('#section').on('change', function() {
        const selectVal = $(this).val();
        $('.NYlogo').css({
          'width' : '80px',
          'top' : '5px',
          'height' : '80px',
        });
        $('#section').css({
          'width' : '100px',
          'top' : '40px',
          'left' : '150px',
        });
        $('h3').css({
          'top' : '17px',
          'left' : '150px',
        });
        $('.wrapping').css({
          'height' : '100px',
        });
        $('#news').empty();
        let url = `https://api.nytimes.com/svc/topstories/v2/${selectVal}.json`;
        let apiKey = $.param({'api-key': 'f6e3ac6ce7af477f9fd1254b4b7dd29f'});
        
        url += `?${apiKey}`
    
    $.ajax({
      url: url,
      method: 'GET',
    }).done((data)=> {
      $.each(data.results, (key, value)=> {
        let arr = $('li').length;
        if (value.multimedia && value.multimedia[4] && arr <= [11]){
          $('#news').append(`<li class='news-story'><img src=${value.multimedia[4].url}><p class='newsHD'>${value.abstract}</p></li>`);
        }
    });
    }).fail((err)=> {
      throw err;
    });
  });


  $('#news').on('mouseenter', 'li', (event)=> {
    $(event.currentTarget).find('.newsHD').slideDown();
  });
  $('#news').on('mouseleave', 'li', (event)=> {
    $(event.currentTarget).find('.newsHD').slideUp();
  });  
});
