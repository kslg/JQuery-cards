$(document).ready(function() {
    
    // $("#stream1_btn").hover(function(){
    //     $('#stream1_btn').css('color','red');
    // });
	
	$("#stream1_btn").hover(function(){
		$(this).css("background-color", "yellow");
		}, function(){
		$(this).css("background-color", "#eee");
	});	
	$("#stream2_btn").hover(function(){
		$(this).css("background-color", "yellow");
		}, function(){
		$(this).css("background-color", "#eee");
	});	
	$("#stream3_btn").hover(function(){
		$(this).css("background-color", "yellow");
		}, function(){
		$(this).css("background-color", "#eee");
	});	

	// Create the slideToggle effects each of the paragraphs and
    // buttons
    $("#button_effects1").click(function(){
        $('#par1').slideToggle('1000');
    });
    // $("#button_effects2").click(function(){
    //     $('#par2').slideToggle('1000');
    // });
    $("#button_effects3").click(function(){
        $('#par3').slideToggle('1000');
    });
    $("#button_effects4").click(function(){
        $('#par4').slideToggle('1000');
    });
    $("#button_effects5").click(function(){
        $('#par5').slideToggle('1000');
    });
    $("#button_effects6").click(function(){
        $('#par6').slideToggle('1000');
    });

    // Use the fadeTo effect when the mouse hovers over a specific button
    // and fadeTo again when the mouse is no longer hovering over the button
    $("#button_effects1").mouseenter(function(){
        $('#button_effects1').fadeTo(1000, 0.5);
    });
    $("#button_effects1").mouseleave(function(){
        $('#button_effects1').fadeTo(1000, 1);
    });

    // $("#button_effects2").mouseenter(function(){
    //     $('#button_effects2').fadeTo(1000, 0.5);
    // });
    // $("#button_effects2").mouseleave(function(){
    //     $('#button_effects2').fadeTo(1000, 1);
    // });

	$("#button_effects2").mouseenter(function(){
        $("#button_effects2").removeClass("bottom_button").addClass("button_hover");
    });
    $("#button_effects2").mouseleave(function(){
        $("#button_effects2").removeClass("button_hover").addClass("bottom_button");
    });

    $("#button_effects3").mouseenter(function(){
        $('#button_effects3').fadeTo(1000, 0.5);
    });
    $("#button_effects3").mouseleave(function(){
        $('#button_effects3').fadeTo(1000, 1);
    });

    $("#button_effects4").mouseenter(function(){
        $('#button_effects4').fadeTo(1000, 0.5);
    });
    $("#button_effects4").mouseleave(function(){
        $('#button_effects4').fadeTo(1000, 1);
    });

    $("#button_effects5").mouseenter(function(){
        $('#button_effects5').fadeTo(1000, 0.5);
    });
    $("#button_effects5").mouseleave(function(){
        $('#button_effects5').fadeTo(1000, 1);
    });

    $("#button_effects6").mouseenter(function(){
        $('#button_effects6').fadeTo(1000, 0.5);
    });
    $("#button_effects6").mouseleave(function(){
        $('#button_effects6').fadeTo(1000, 1);
    });

    $("#myButton").removeClass("blueBox").addClass("border");
    $("p").css("color", "blue").slideUp(2000).slideDown(2000);
    $("a").attr("href", "http://www.example.com");
}); 