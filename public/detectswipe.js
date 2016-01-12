		function detectswipe(el,func) {
		      swipe_det = {};
		      swipe_det.startX = 0;
		      swipe_det.endX = 0;
		      
		      var min_x = 20;  
		      var max_x = 40;  
		       
		      var direction = "";
					var time = new Date();
					var starttime = 0;
					var endtime = 0;
					var speed,dt;
					console.log("Current time: "+time.valueOf());
					var element = document.getElementById('Toucharea');
					var content = document.getElementsByClassName('ta');
					//var peaceful = content[0].style.transform = translateX(); //usage of tranform 
					var divWidth = element.clientWidth;
					var divcount = element.getElementsByTagName('div').length;
					console.log(divcount);
					console.log(content.length);
					element.style.width = divWidth * divcount + 'px';
		      ele = document.getElementById(el);
					
		      
					ele.addEventListener('touchstart',function(e){
						console.log("touchstarted");
						starttime = new Date().valueOf();
						console.log("Time when touch event started:"+starttime.valueOf());
		        var t = e.touches[0];
		        swipe_det.startX = t.screenX; 
		        
						console.log("The x coordinate when touchevnt started: "+swipe_det.startX);
						
		      },false);
					
		      ele.addEventListener('touchmove',function(e){
		        e.preventDefault();
		        var t = e.touches[0];
		        swipe_det.endX = t.screenX; 
						console.log("the end coordinates are:"+swipe_det.endX);
						var distance_travelled = (swipe_det.endX - swipe_det.startX);
						console.log("Distance swiped:"+distance_travelled);
						element.style.left = distance_travelled +"px";   
		      },false);
		      ele.addEventListener('touchend',function(e){
		        //horizontal detection
						console.log("X Coordinate at touch end:"+swipe_det.endX);
						endtime = new Date().valueOf();
						console.log("the time at touchend: "+endtime);
						dt = (endtime - starttime)/1000;
						var ds = swipe_det.endX - swipe_det.startX;
						speed = ds / dt;
						console.log("the speed of swiping is: "+speed+" coordinates/sec");
						console.log("the time taken to traverse: "+dt); 
						console.log(ele.style.width);
		        if ((swipe_det.endX - min_x > swipe_det.startX) || (swipe_det.endX + min_x < swipe_det.startX)) {
		          if(swipe_det.endX > swipe_det.startX) {
								direction = "r";
								
							}
		          else {
								direction = "l";
								console.log(element.style.left);
								
							}
		        }
		       	console.log(swipe_det);
						
    			
		        
						if (direction !== "") {
		          if(typeof func == 'function') 
								func(el,direction);
		        }
		        direction = "";
		      },false);  
		    }

		    function myfunction(el,d) {
		      
					console.log("you swiped on element with id '"+el+"' to "+d+" direction");
					
		    }