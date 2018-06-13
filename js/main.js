$(()=> {
  $('#section').on('change', function() {
        const selectVal = $(this).val();
        $('.NYlogo').css({
          'height' : '80px',
        });
        $('#section').css({
          'width' : '100px',
          'top' : '40px',
          'left' : '150px',
        });
        $('.text-wrapping').css({
          'display': 'flex',
          'flex-direction': 'column',
          'align-items': 'center'
        });
        $('.wrapping').css({
          'margin' : '20px 40px',
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
          $('#news').append(`<li class='news-story'><img src=${value.multimedia[4].url}><p class='newsHD'><a href=${value.url}>${value.abstract}</a></p></li>`);
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
