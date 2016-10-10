		
var clock;
var clock2;
var audio = new
Audio('http://scambuster.info/audio/time_up.wav');

//Web-notification
//different notifications and options

var askPermission = {
    title: "Hi, this is Timey!",
    options:{
        body:"I will send you notifications, alerts, and motivational quotes to help you work!",
        icon:"timey-default.png",
    }
};

var workTimesUp = {
    title: "Time is up",
    options:{
        body:"Time is up, you can stop working now",
        icon:"timey-alert.png",
    }
};

var workTimesHalf = {
    title: "You have 15 Minutes left",
    options:{
        body:"You are half way there, keep going!",
        icon:"timey-cheer.png",
    }
};

var workTimesOne = {
    title:"You have 5 Minutes left",
    options:{
        body:"you only got 5 minutes left, you should finish up your work!",
        icon:"timey-default.png",
    }
}

var breakTimesUp = {
    title:"Time is up",
    options:{
        body:"Time is up, you ready to get back to work?",
        icon:"timey-alert.png",
    }
};

var breakTimesHalf = {
    title:"3 Minutes left",
    options:{
        body:"You have 3 minutes left in your break",
        icon:"timey-default.png",
    }
};

var breakTimesOne = {
    title:"1 Minute left",
    options:{
        body:"you have a minute left, ready to get to work?",
        icon:"timey-cheer.png",
    }
};

		$(document).ready(function() {
//Ask permission on load            
            
setTimeout(
function ()
    {
        $("#notification").easyNotify(askPermission);
    },3000);
            
//Clock1 default setting
			clock = $('.clock').FlipClock(1800, {
		        clockFace: 'MinuteCounter',
		        countdown: true,
		        autoStart: false,
                destroy: true,
                reset: true,
		        callbacks: {
		        	start: function() {
		        		$('.message').html("Alright, let's get to work!");
		        	},
                    
                    stop: function() {
		        		$('.message').html('You wanna stop for a minute? Sure!');
		        	},
                    
                    
                    interval: function (){
                        var time= clock.getTime().time;
                        if (time === 0){
                            audio.play();
                            $(".loadImage").attr('id','timey-alert');
                            $("#notification").easyNotify(workTimesUp);
                            
                        }
                        
                        
                        if (time===1){
                            
                            audio.play();
                        }
                        
                        if (time===900){
                            $('.message').html('You have 15 minutes to go! Keep it up!');
                            $(".loadImage").attr('id','timey-cheer');
                            $("#notification").easyNotify(workTimesHalf);
                        }
                        
                        if (time===300){
                            $('.message').html('You have 5 minutes left, you should finish up your work!');
                        }
                    }
		        }
                
		    });
//Clock2 Default setting
            clock2 = $('.clock2').FlipClock(420, {
		        clockFace: 'MinuteCounter',
		        countdown: true,
		        autoStart: false,
                reset: true,
		        callbacks: {
		        	start: function() {
		        		$('.message').html('It is time for a Break! Take a sip of water, stretch out, walk around!');
		        	},
                    
                    stop: function() {
		        		$('.message').html('You stopped the break, is there a problem?');
		        	},
                    
                    
                    interval: function (){
                        var time= clock2.getTime().time;
                        if (time === 0){
                            audio.play();
                            $('.message').html('Ready to get back to work yet?');
                            $(".loadImage").attr('id','timey-alert');
                            $("#notification").easyNotify(breakTimesUp);
                        }
                        
                        
                        if (time===210){
                            $('.message').html('You have 3 minutes left in your break');
                            $("#notification").easyNotify(breakTimesHalf);
                        }
                        
                        if (time===60){
                            $('.message').html('You only have a minute left, better finish up your break');
                            $("#notification").easyNotify(breakTimesOne);
                        }
                    }
		        }
                
		    });

//Clock1 Function
		    $('.start').click(function() {

		    	clock.start();
                $(".loadImage").attr('id','timey-nerd');
		    });
            
            $('.stop').click(function(){
                clock.stop();
                $(".loadImage").attr('id','timey');
            });

           $('.reset').click(function(){
        
                clock.setTime(1800);
                clock.stop();
               $('.message').html("You just reset the work clock, are you ready?");
               $(".loadImage").attr('id','timey-cheer');
            });
            
            
            
//Clock2 Function
            $('.start2').click(function(e) {

		    	clock2.start();
                $(".loadImage").attr('id','timey-party');
                
		    });
            
            $('.stop2').click(function(e){
                clock2.stop();
                $(".loadImage").attr('id','timey');
            });

           $('.reset2').click(function(){
        
                clock2.setTime(420);
                clock2.stop();
               $('.message').html("Time for another break!? Let's do it. ");
               $(".loadImage").attr('id','timey');
            });

		});


//Tooltip & Select Menu

$(document).ready(function(){
    $("select").change(function(){
        $(".response").text($(this).val());
    });
});

