

var h = $('#htitle');

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
        display: "block",
          easing:"easeOut"
        });

    h.innerText = 'web dev';
               console.log("dev clicked");
 	});

 	$("#modalt2").click(function (e) {
 		e.preventDefault();
    $("#inbound").velocity({
      top: "-100"
    },{ duration: 500,
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
    $('#services').velocity({
      backgroundColor:"#9FB8AD"
    });

 	});

 	console.log('functional function!');
