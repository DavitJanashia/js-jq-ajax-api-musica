$(document).ready(init);

function init(){
  getAlbums();
}
// ********************************************************

function getAlbums(){
  $.ajax({

    url: 'https://flynn.boolean.careers/exercises/api/array/music',
    method: 'GET',
    success: function (data, state){
      var arrayAlbums = data['response'];


      // ********************************************************
      // handlebar template
      var template = $('#template').html();
      var compiled = Handlebars.compile(template);
      var target = $('.cds-container');

      for (var i = 0; i < 10; i++) {
        var singleAlbum = arrayAlbums[i];
        console.log(singleAlbum);
        target.append(compiled(singleAlbum));
      }



      // ********************************************************
      // select
      var mySelect = $('#my-select').val();
      var myGenre = $('.genre');
      var myPopCd = $('.genre.Pop').parent();
      var myRockCd = $('.genre.Rock').parent();
      var myMetalCd = $('.genre.Metal').parent();
      var myJazzCd = $('.genre.Jazz').parent();
      // console.log(myGenre);

      $('#popMy').click(function(){
        $('.cd').removeClass('show');
        myPopCd.addClass('show');
      });

      $('#rockMy').click(function(){
        $('.cd').removeClass('show');
        myRockCd.addClass('show');
      });


      $('#metalMy').click(function(){
        $('.cd').removeClass('show');
        myMetalCd.addClass('show');
      });


      $('#jazzMy').click(function(){
        $('.cd').removeClass('show');
        myJazzCd.addClass('show');
      });


      $('#allMy').click(function(){
        $('.cd').addClass('show');
      });

      // ********************************************************

    },

    error: function (request, state, error){
      console.log('error!');
      console.log(request);
      console.log(state);
      console.log(error);
    }
  });

}
