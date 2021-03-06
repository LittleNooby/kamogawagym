  $(function(){
		var zIndex= 2, endTop=0, endLeft=300;

		function randRotation(el){
			var rot = Math.round( Math.random() * 90-45);
			return $(el).css({
				'-webkit-transform':'rotate('+rot+'deg)'
				,'-moz-transform':'rotate('+rot+'deg)'
				,'transform':'rotate('+rot+'deg)'
			});
		}

		$('.photogallery li').each(function(){
			randRotation(this).css({
				top:Math.round(Math.random()*50-25)
				,left:Math.round(Math.random()*50-25)
				,'zIndex': zIndex++
			})
			.click(function(){
				var myZindex = $(this).css('zIndex');
				$('.photogallery li').not(this).each(function(){
					if( $(this).css('zIndex') > myZindex ){
						$(this).css('zIndex',$(this).css('zIndex')-1);
					}
				});
				if(! $(this).is('.active')){
					$(this).toggleClass('active')
					.animate({
						top:endTop
						,left:endLeft
					})
					.css({zIndex:$('.photogallery li').length });
					var activated=$('.photogallery .active').not(this);
					activated.length && activated.click();
				}else{
					$('.photogallery li').each(function(){$(this).css('zIndex',parseInt($(this).css('zIndex'),10)+1)});
					randRotation($(this).toggleClass('active'))
					.animate({
						top:Math.round(Math.random()*50-25)
						,left:Math.round(Math.random()*50-25)
					}).css({zIndex:2});
				}
			});
		});
	});
var th = document.getElementById('thumbnails');

th.addEventListener('click', function(e) {
  var t = e.target, new_src = t.parentNode.href, 
      large = document.getElementById('large'),
      cl = large.classList,
      lgwrap = document.getElementById('lg-wrap');
  lgwrap.style.backgroundImage = 'url(' +large.src + ')';
  if(cl) cl.add('hideme');
  window.setTimeout(function(){
    large.src = new_src;
    if(cl) cl.remove('hideme');
  }, 50);
  e.preventDefault();
}, false);
