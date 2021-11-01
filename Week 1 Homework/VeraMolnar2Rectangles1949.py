#Python 3
#my turtle is always called "bim"

import turtle 
from random import randint 
from turtle import Screen
bim = turtle.Turtle()


def initializeTurtle():
     
    screen = Screen() 
    screen.colormode(255) 
    turtle.screensize(canvwidth=800, canvheight=800,
                  bg="white")
def startBim1():
    bim.penup()
    bim.goto(-250,-200)
    bim.pendown()
def blackRectangle():
    startBim1()
    bim.color('black')
    bim.begin_fill()
    bim.color('black')
    bim.forward(100)
    bim.left(90)
    bim.forward(250)
    bim.left(90)
    bim.forward(100)
    bim.left(90)
    bim.forward(250)
    bim.end_fill()
    bim.penup()
def moveBim():
    bim.goto(150, 200)
def bluRectangle():
    bim.color('blue')
    bim.begin_fill()
    bim.color('blue')
    bim.pendown()
    bim.forward(250)
    bim.right(90)
    bim.forward(100)
    bim.right(90)
    bim.forward(250)
    bim.right(90)
    bim.forward(100)
    bim.end_fill()
    bim.hideturtle()

def MolnarTwoRectangles():
    initializeTurtle()
    startBim1()
    blackRectangle()
    moveBim()
    bluRectangle()
