// Задача 1
function parseCount(arg) {
    let value = Number.parseInt(arg);
    if (isNaN(value)){
       throw new Error ('Невалидное значение'); 
    } else {
       return value; 
    }          
}  

function validateCount(arg){
    try {
       return parseCount(arg);
    } catch (error){
        return error;
    }
}

// Задача 2

class Triangle{
    constructor(a,b,c){
        if ((a + b < c) || (a + c < b) || (b + c < a)){
            throw new Error ('Треугольник с такими сторонами не существует');
        }

        this.a = a;
        this.b = b;
        this.c = c;
    }

    getPerimeter(){
        return this.a + this.b + this.c;
    }

    getArea(){
        let semiPerimeter = (this.getPerimeter())/ 2;
        return +(Math.sqrt(semiPerimeter * (semiPerimeter - this.a) * (semiPerimeter - this.b) * (semiPerimeter - this.c))).toFixed(3);
    }    
}

function getTriangle (a,b,c){
    try{
        return new Triangle(a,b,c);
    } catch {
        let errorObject = {
            getPerimeter(){
                return 'Ошибка! Треугольник не существует';
            },

            getArea(){
                return 'Ошибка! Треугольник не существует'
            }    
        } 
        return errorObject;  
    }
}

