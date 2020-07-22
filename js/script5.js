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
        // console.log(singleAlbum);
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


      $(document).ready(function (){
        if(mySelect == 'pop'){
          // console.log('its pop');
          $('.cd').removeClass('show');
          myPopCd.addClass('show');

        } else if(mySelect == 'rock'){
          // console.log('its rock');
          $('.cd').removeClass('show');
          myRockCd.addClass('show');

        } else if(mySelect == 'metal'){
          // console.log('its metal');
          $('.cd').removeClass('show');
          myMetalCd.addClass('show');

        } else if(mySelect == 'jazz'){
          // console.log('its jazz');
          $('.cd').removeClass('show');
          myJazzCd.addClass('show');

        } else {
          // console.log('all');
          if(myGenre.hasClass('Pop')){
            $('.cd').addClass('show');
          }
        }
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

// //snack 1
//
//
// $(document).ready(init);
//
// function init(){
//   getNewListener();
// }
//
//
// function getNewListener(){
//   $.ajax({
//
//     url: 'https://flynn.boolean.careers/exercises/api/array/integers?min=50&max=100&items=10',
//     method: 'GET',
//     success: function (data, state){
//       // console.log(data);
//       var targetPair = $('#pair');
//       var targetOdd = $('#odd');
//       var myArray = data['response'];
//       // console.log(myArray);
//       for (var i = 0; i < myArray.length; i++) {
//         console.log(myArray[i]);
//         if(myArray[i] % 2 == 0){
//           targetPair.append(myArray[i] + '<br>');
//           // console.log(myArray[i] + 'pair');
//         } else {
//           targetOdd.append(myArray[i] + '<br>');
//           // console.log(myArray[i] + 'odd');
//         }
//       }
//     },
//
//     error: function (request, state, error){
//       console.log('error!');
//       console.log(request);
//       console.log(state);
//       console.log(error);
//     }
//   });
//
// }


//snack 2

//
// $(document).ready(init);
//
// var utenteN = prompt('inserisci un numero');
//
// function init(){
//   for (var i = 0; i < utenteN; i++) {
//     getNewListener();
//   }
// }
//
//
// function getNewListener(){
//   $.ajax({
//
//     url: 'https://flynn.boolean.careers/exercises/api/random/word',
//     method: 'GET',
//     success: function (data, state){
//
//       var target = $('#frase');
//       // console.log(data);
//       // var success = data['success'];
//
//       var value = data['response'];
//       target.append('<span>' + value + ' ' + '</span>');
//       console.log(value);
//
//     },
//
//     error: function (request, state, error){
//       console.log('error!');
//       console.log(request);
//       console.log(state);
//       console.log(error);
//     }
//   });

// }

// // snack 3
//
// $(document).ready(init);
//
// function init(){
//   generateArray();
//   myPro();
// }
//
// var list = [];
// function generateArray(){
//   for (var i = 0; i < 10; i++) {
//     generateName();
//   }
// }
//
// console.log(list);
//
// function myPro (){
//   var myPrompt = prompt('il tuo nome');
//   if(list.includes(myPrompt)){
//     console.log('benvenuti');
//   } else {
//     console.log('accesso negato');
//   }
// }
//
//
// function generateName(){
//   $.ajax({
//
//     url: 'https://flynn.boolean.careers/exercises/api/random/name',
//     method: 'GET',
//     success: function(data, state){
//       var nome = data['response'];
//       list.push(nome);
//     },
//     error: function (request, state, error){
//       console.log(request, state, error);
//     },
//   });
// }

// // snack 4
// var myPrompt = prompt('quanti numeri?');
// var string = 'https://flynn.boolean.careers/exercises/api/array/integers?min=1&max=100&items=' + myPrompt;
//
// $.ajax({
//
//   url: string,
//   method: 'GET',
//   success: function (data, state){
//     var numbers = data['response'];
//     // console.log(numbers);
//     arraySum(numbers);
//
//   },
//   error: function (request, state, error){
//     console.log(request, state, error);
//   },
//
// });
//
// function arraySum(numbers){
//   var sum = 0;
//   for (var i = 0; i < numbers.length; i++) {
//     var elem = numbers[i];
//     sum += elem;
//   }
//
//   console.log(numbers);
//   console.log(sum);
// }


 // PROVA: PORTARE FUORI AJAX IL RISULTATO
//
// var ar = [];
//
//  var ciao = {
//
//  url: 'https://flynn.boolean.careers/exercises/api/array/integers?min=1&max=100&items=10',
//  method: 'GET',
//  success: function (data, state){
//    var numbers = data['response'];
//    // console.log(numbers);
//    ar = numbers;
//    getResult(ar);
//
//
//  },
//  error: function (request, state, error){
//    console.log(request, state, error);
//  },
//
// }
//
// $.ajax(ciao);
// var al = alert('wait!!')
//
// console.log($.ajax(ciao['success']));
//
// function getResult(ar) {
//   // console.log(ar);
// }
//
// console.log(ar);

// function callAr(){
//     console.log(ar);
// }

// setTimeout(callAr, 5000);

// console.log($.ajax(ciao['success']));

// snack 5

// $(document).ready(init);
//
// function init(){
//   numberSs();
// }
//
//
// function numberSs(){
//   $.ajax({
//
//     url: 'https://flynn.boolean.careers/exercises/api/array/integers?min=1&max=100&items=50',
//     method: 'GET',
//     success: function (data, state){
//       var array = data['response'];
//       console.log(array);
//       utente(array);
//     },
//
//     error: function (request, state, error){
//       console.log('error!');
//       console.log(request);
//       console.log(state);
//       console.log(error);
//     }
//   });
//
// }
//
// function utente(array){
//
//   // console.log(numeroU);
//   // console.log(array.includes(numeroU));
//
//   var corrects = [];
//   var includesss = true;
//
//   while(includesss == true){
//     var numeroU = parseInt(prompt('inserisci un numero'));
//
//     if(array.includes(numeroU)){
//       corrects.push(numeroU);
//     } else {
//       includesss = false;
//     }
//
//   }
//   console.log(corrects);
//   console.log(corrects.length);
//
// }

//********
// alternativa zemotastvis kargad gavigo rogoraa dawerili

// function getRandomInt() {
//     $.ajax({
//         url: 'https://flynn.boolean.careers/exercises/api/array/integers?min=1&max=100&items=50',
//         method: 'GET',
//         success: function(data) {
//             var success = data['success'];
//             var arr = data['response'];
//             userRandomIntTest(arr);
//         },
//         error: function(err) {
//             console.log('err', err);
//         }
//     });
// }
// function userRandomIntTest(arr) {
//     console.log('arr', arr);
//     var cont = true;
//     while(cont) {
//         var number = parseInt(prompt('get me integer number'));
//         var indexOfNumber = arr.indexOf(number);
//         console.log(indexOfNumber);
//         if (indexOfNumber >= 0) {
//             console.log('ok');
//             arr.splice(indexOfNumber, 1);
//             if (arr.length < 1) {
//                 cont = false;
//             }
//         } else {
//             cont = false;
//         }
//     }
//     console.log('the end w/ ' + (50 - arr.length));
// }
