

var ht = $('#htitle');
var h = $('#header');

$(window).load(function (){
  $('#nav').addClass('hide');
  
});

$("#toggle").click(function(){
  $("#nav").toggleClass('hide');
});

$("#modalt1").click(function (e) {
	e.preventDefault();
    $('#inbound').velocity({
      top:"100"
   },{
      display: "none",
   });
    $("#devel").velocity({
      top:"-90"
    },{
      duration: 500,
      display: "block",
      easing:"easeOut"
        });
  $(h).velocity({
    backgroundColor: "#1976D2"
  },{
    complete: function(){$(ht).text('web dev');}
  });
    console.log("dev clicked");
 	});

 	$("#modalt2").click(function (e) {
 		e.preventDefault();
  var d = $('#devel').css('display');
  console.log(d);
  if (d == 'block'|'flex') {
    $("#devel").velocity({
      top:"100"
    },{
      duration: 300,
      display: "",
      easing:"easeOut"
        });
    console.log('display is none')
  } else{
    $('#devel').fadeToggle('hide');
    console.log('display is block')
  }
    $("#inbound").velocity({
      top: "-90"
    },{
      duration: 500,
      display: "block",
      easing: "easeInOut",
      complete: console.log('inbound section triggered')
    });

    $(h).velocity({
      backgroundColor:"#9FB8AD"
    },{
      complete:function () {$(ht).html("Inbound")}
    });

 	});


 	console.log('functional function!');
