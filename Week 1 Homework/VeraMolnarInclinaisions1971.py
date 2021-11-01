import turtle 
from random import randint 
from turtle import Screen
bim = turtle.Turtle() #sets turtle as "bim", what I call the turtle
screen = Screen() 
screen.colormode(255) #sets screen color mode in case I want to use it
#default turtle screen size is (400,300)

turtle.clearscreen() #clears the screen even of the turtle, since it imports with visible turtle
bim.speed(9) #sets drawing speed
bim.width(.2) #sets pen width, though this doesn't seem to make a difference
bim.hideturtle() #hide turtle as it draws so it goes faster

#the for loop starts by picking a random range of lines to draw. Less than 300 seems
#a bit "light", but more than 500 gets busy and too dark in comparison.
#The angle of the line is also random, as is the location starting point.
#The angle and penup and starting points could possibly be in a different order, but
#it works as is...

for line in range (randint(300,500)):
    bim.left(randint(0,360))
    bim.penup()
    bim.goto(randint(-300,300), randint(-200,200))
    bim.pendown()
    bim.forward(150)
