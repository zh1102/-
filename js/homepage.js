window.onload = function(){
	
//	$('.search_i').click({
//		window.location.href = "searchPage.html";
//	})
	
	
	
	
	var needIndex = 0;
	var allUl = $('.content')[0].children[0];
	var allDiv = $('.title')[0].children;
	var oldX = 0;
	var newX = 0;
//	console.log($('.content')[0].children)
	//鼠标滑动事件
	$(".main_cont")[0].addEventListener('touchstart',function(e){
		oldX = e.touches[0].clientX;
		
	},false);
	$(".main_cont")[0].addEventListener('touchmove',function(e){
		newX = e.touches[0].clientX - oldX;
	},false);
	$(".main_cont")[0].addEventListener('touchend',function(){
		if(newX < -100){
			if (needIndex == 4) {
				needIndex = 4;
			} else{
				needIndex++;
			};
			$('.content')[0].style.transition = '0.7s';
			$('.content')[0].style.transform = 'translateX('+ (allUl.offsetWidth * (-needIndex)) + 'px)';
			for (var i = 0;i < allDiv.length;i++) {
				allDiv[i].className = '';
			}
			allDiv[needIndex].className = "active";
		}else if(newX > 100){
			if (needIndex == 0) {
				needIndex = 0;
			} else{
				needIndex--
			};
			$('.content')[0].style.transition = '0.7s';
			$('.content')[0].style.transform = 'translateX('+ (allUl.offsetWidth * (-needIndex)) + 'px)';
			for(var i=0;i<allDiv.length;i++){
				allDiv[i].className='';
			}
			allDiv[needIndex].className='active'
		}else{
			$('.content')[0].style.transition = '0.7s';
			
			for(var i=0;i<allDiv.length;i++){
				allDiv[i].className=''
			}
			allDiv[needIndex].className='active';
		}
	},false);
	for (var i = 0;i < allDiv.length;i++) {
		allDiv[i].index = i;
		allDiv[i].onclick = function(){
			for (var j = 0;j < allDiv.length;j++) {
				allDiv[j].className = '';
				needIndex = this.index;
			};
			$('.content')[0].style.transition = '0s';
			$('.content')[0].style.transform = 'translateX('+ (allUl.offsetWidth * (-needIndex)) + 'px)';
			allDiv[needIndex].className = "active";
		}
	}
	
}
