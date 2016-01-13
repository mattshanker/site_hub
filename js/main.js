

var ht = $('#htitle');
var h = $('#header');

$(window).load(function (){
  $('#work').toggleClass('hide');
  console.log('work section hidden')
});
$('#btnWork').click(function (e){
  e.preventDefault();
  $('#work').toggleClass('hide');
  console.log('show work');
});

$("#modalt1").click(function (e) {
 		e.preventDefault();
    $('#inbound').velocity({
      top:"100"
   },{
      display: "none",
   });
    $("#devel").velocity({
      top:"-100"
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
    $('#devel').toggleClass('hide');
    console.log('display is block')
  }
    $("#inbound").velocity({
      top: "-100"
    },{
      duration: 500,
      display: "block",
      easing: "easeInOut",
      complete: console.log('inbound section triggered')
    });
 			$("#scone").velocity({
        opacity: "0",
        top: "100"
      },{
        duration: 300,
        display:"none",
        complete:function() {console.log('dev section is gone!')}
      }
    );
    $(h).velocity({
      backgroundColor:"#9FB8AD"
    },{
      complete:function () {$(ht).html("Inbound")}
    });

 	});


 	console.log('functional function!');
