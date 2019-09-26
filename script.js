$(document).hover(function(){
  var elem = $(".partTwo").css("top");
  $(".one").animate({top:elem}, 'slow');
});

$(document).hover(function(){
  var elem = $(".partTwo").css("bottom");
  $(".two").animate({top:elem}, 'slow');
});

$(document).hover(function(){
  var elem = $(".partTwo").css("right");
  $(".three").animate({left:elem}, 'slow');
});

$(document).hover(function(){
  var elem = $(".partOne").css("right");
  $(".four").animate({left:elem}, 'slow');
});

$(document).hover(function(){
  var elem = $(".sub_head").css("bottom");
  $(".h").animate({top:elem}, 'slow');
});

$(document).ready(function(){
  var elem = $(".partTwo").css("top");
  var enter = $("input").css("top");
  $(".enterButton").hover(
    function(){
      $(".one").animate({top:enter}, 'medium');
    },
    function(){
      $(".one").animate({top:elem}, 'medium');
    },
  );
});

$(document).ready(function(){
  var elem = $(".partTwo").css("bottom");
  var enter = $(".selector").css("top");
  $(".enterButton").hover(
    function(){
      $(".two").animate({top:enter}, 'medium');
    },
    function(){
      $(".two").animate({top:elem}, 'medium');
    },
  );
});

$(document).ready(function(){
  var elem = $(".partTwo").css("right");
  var enter = $("input").css("left");
  $(".enterButton").hover(
    function(){
      $(".three").animate({left:enter}, 'medium');
    },
    function(){
      $(".three").animate({left:elem}, 'medium');
    },
  );
});

$(document).ready(function(){
  var elem = $(".partOne").css("right");
  var enter = $("input").css("right");
  $(".enterButton").hover(
    function(){
      $(".four").animate({left:enter}, 'medium');
    },
    function(){
      $(".four").animate({left:elem}, 'medium');
    },
  );
});
