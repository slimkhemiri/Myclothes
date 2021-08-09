var myClothes=function (){
	var clothes={}
	clothes.tShirts=0,
	clothes.pants=0,
	clothes.shoes=0,
	clothes.shorts=0
	clothes.addTShirts = addTShirts
	clothes.removeTshirts = removeTshirts
	clothes.addPants = addPants
	clothes.removePants = removePants
	clothes.addShoes = addShoes
	clothes.removeShoes = removeShoes
	clothes.addShorts = addShorts
	clothes.removeShorts = removeShorts
	return clothes
}

var addTShirts= function(number){
	 this.tShirts=this.tShirts+number
}
var removeTshirts=function(number){
	 this.tShirts=this.tShirts-number
}



var addPants= function(number){
	 this.pants=this.pants+number
}
var removePants=function(number){
	 this.pants=this.pants-number
}



var addShoes= function(number){
	 this.shoes=this.shoes+number
}
var removeShoes=function(number){
	 this.shoes=this.shoes-number
}



var addShorts = function(number){
	this.shorts =this.shorts+number
}
var removeShorts=function(number){
	this.shorts=this.shorts-number
}



var reset