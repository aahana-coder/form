var database,playercount,form,player,game
var gamestate=0

function setup (){
database=firebase.database()//connecting database
createCanvas(400,400)
form =new Form()



}

function draw(){
background("white")
drawSprites()
form.display()
}



