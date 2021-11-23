$(document).ready(function() {
    $("#stream1_btn").mouseleave(function() { // mouseleave click mouseenter
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream1").addClass('highlight_stream');
   });
   $("#stream2_btn").on("click", function() {
        $(".stream1").show(); // can use show or hide slide Toggle fadeToggle fadeIn fadeOut fadeTo method
        $(".stream2").hide("slow");
        $(".stream3").hide("medium");
        $(".stream1").fadeIn("fast");
        $(".stream1").slideToggle(1000); //milisecond
        $(".stream1").fadeTo(1000, 0.5); //milisecond

   });
   $("#stream3_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream3").addClass('highlight_stream');
   });
}); 