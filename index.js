// Your code here

class Polygon {

    constructor(arr) {
        this.sides = arr
    }
   
    get countSides() {
        return this.sides.length
    }

    get perimeter() {
        let sum = 0
        for (let i=0; i < this.sides.length; i++) {
            sum = sum + this.sides[i] 
        }
        return sum
    }
}

class Triangle extends Polygon {

    get isValid() {
        let sides = this.sides 
        let side1 = sides[0] 
        let side2 = sides[1] 
        let side3 = sides[2] 
        
        return (side1 + side2 > side3 && side2 + side3 > side1 && side1 + side3 > side2)
    }
}

class Square extends Polygon {

    get isValid() {
        let sides = this.sides 
        let side1 = sides[0] 
        let side2 = sides[1] 
        let side3 = sides[2] 
        let side4 = sides[3]

        return (side1 === side2 && side2 === side3 && side3 === side4)
    }

    get area() {
        let side = this.sides[1]

        if (this.isValid) {
            return side * side
        } else {
            return "Invalid"
        }
    }
}