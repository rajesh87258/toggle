var outer =document.getElementById('main');
var toggBut = document.getElementById('toggel');
var toggleMe = function() {
	//console.log('i hace clicked')
	//toggleMe.style.transform = "tra" 

	var butTobeTOgg = document.getElementById('toggel')
	//butTobeTOgg.style.transform ="translateX(100%)"
	console.log(document.getElementById('toggel').style);
		
		 if(document.getElementById('toggel').style.cssText ==""){
		butTobeTOgg.style.left ="70%";
		
	}else if(document.getElementById('toggel').style.cssText =="left: 70%;"){
		butTobeTOgg.style.left ="";	
		
	}
	console.log(document.getElementsByTagName('body')[0].style.backgroundColor);
	if(document.getElementsByTagName('body')[0].style.backgroundColor==''){
		document.getElementsByTagName('body')[0].style.backgroundColor = 'black'
		
	}else if(document.getElementsByTagName('body')[0].style.backgroundColor == 'black'){
		document.getElementsByTagName('body')[0].style.backgroundColor =''

	}
	event.stopPropagation()
 }

outer.addEventListener('click',function(){
	console.log('hey i have called')
})



var changePara = function() {
	var paraName= document.getElementsByClassName('para')
	console.log(paraName[0].style.color)
	if(paraName[0].style.color == ''){
		paraName[0].style.color = 'white';
	}else{
		paraName[0].style.color = '';
	}
}
toggBut.addEventListener('click',toggleMe)
toggBut.addEventListener('click',changePara)


