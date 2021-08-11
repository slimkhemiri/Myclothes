var myClothes=function (){
	var clothes={}
	clothes.tShirts={
		vneck:0,
		ringer:0,
		pocket:0
	}
	clothes.pants={
		bootcut:0,
		bush:0,
		straight:40
	}
	clothes.shoes={
		chuka:0,
		chelsea:0,
		sneakers:0
	} 
	clothes.shorts={
		leather:0,
		pleated:0,
		running:0
	}
	clothes.addTShirtsVneck = addTShirtsVneck
	clothes.addTShirtsRinger = addTShirtsRinger
	clothes.addTShirtsPocket = addTShirtsPocket
	clothes.removeTShirtsVneck = removeTShirtsVneck
	clothes.removeTShirtsRinger = removeTShirtsRinger
	clothes.removeTShirtsPocket = removeTShirtsPocket
	clothes.addPantsBootcut = addPantsBootcut
	clothes.addPantsBush = addPantsBush
	clothes.addPantsStraight = addPantsStraight
	clothes.removePantsBootcut = removePantsBootcut
	clothes.removePantsBush = removePantsBush
	clothes.removePantsStraight = removePantsStraight
	clothes.addShoesChuka = addShoesChuka
	clothes.addShoesChelsea = addShoesChelsea
	clothes.addShoesSneakers = addShoesSneakers
	clothes.removeShoesChuka = removeShoesChuka
	clothes.removeShoesChelsea = removeShoesChelsea
	clothes.removeShoesSneakers = removeShoesSneakers
	clothes.addShortsLeather = addShortsLeather
	clothes.addShortsPleated = addShortsPleated
	clothes.addShortsRunning = addShortsRunning
	clothes.removeShortsLeather = removeShortsLeather
	clothes.removeShortsPleated = removeShortsPleated
	clothes.removeShortsRunning = removeShortsRunning
	return clothes
}

var addTShirtsVneck= function(number){
	 this.tShirts.vneck =this.tShirts.vneck +number
}
var removeTShirtsVneck= function(number){
	 this.tShirts.vneck =this.tShirts.vneck -number
}
var addTShirtsRinger= function(number){
	 this.tShirts.ringer =this.tShirts.ringer +number
}
var removeTShirtsRinger= function(number){
	 this.tShirts.ringer =this.tShirts.ringer -number
}
var addTShirtsPocket= function(number){
	 this.tShirts.pocket =this.tShirts.pocket +number
}
var removeTShirtsPocket= function(number){
	 this.tShirts.pocket =this.tShirts.pocket -number
}



var addPantsBootcut= function(number){
	 this.pants.bootcut=this.pantsbootcut+number
}
var addPantsBush= function(number){
	 this.pants.bush=this.pants.bush+number
}
var addPantsStraight=function(number){
	 this.pants.straight=this.pants.straight+number
}
var removePantsBootcut= function(number){
	 this.pants.bootcut=this.pantsbootcut-number
}
var removePantsBush= function(number){
	 this.pants.bush=this.pants.bush-number
}
var removePantsStraight=function(number){
	 this.pants.straight=this.pants.straight-number
}



var addShoesChuka= function(number){
	 this.shoes.chuka=this.shoes.chuka+number
}
var addShoesChelsea= function(number){
	 this.shoes.chelsea=this.shoes.chelsea+number
}
var addShoesSneakers= function(number){
	 this.shoes.sneakers=this.shoes.sneakers+number
}
var removeShoesSneakers=function(number){
	 this.shoes.sneakers=this.shoes.sneakers-number
}
var removeShoesChelsea=function(number){
	 this.shoes.chelsea=this.shoes.chelsea-number
}
var removeShoesChuka=function(number){
	 this.shoes.chuka=this.shoes.chuka-number
}



var addShortsLeather= function(number){
	 this.shorts.leather=this.shorts.leather+number
}
var addShortsPleated= function(number){
	 this.shorts.pleated=this.shorts.pleated+number
}
var addShortsRunning= function(number){
	 this.shorts.running=this.shorts.running+number
}
var removeShortsRunning= function(number){
	 this.shorts.running=this.shorts.running-number
}
var removeShortsLeather= function(number){
	this.shorts.leather=this.shorts.leather-number
}
var removeShortsPleated= function(number){
	this.shorts.pleated=this.shorts.pleated-number
}

$('#add-straight').click(function(){
	clothes.addPantsStraight( parseInt($('#input').val()))
	alert('You have ' + clothes.pants.straight + '  Straight Pants in stock')
	})
	$('#remove-straight').click(function(){
		clothes.removePantsStraight( parseInt($('#input').val()))
		alert('You have ' + clothes.pants.straight + ' Straight Pants in stock')
		})
		var clothes = myClothes()

		$('#check').click(function(){
			alert('Your stock of straight pants is '+clothes.pants.straight)
		})