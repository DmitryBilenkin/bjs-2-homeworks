// Задача 1
class PrintEditionItem {
    constructor(name, releaseDate, pagesCount){
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }
    
    fix(){
        this.state = this.state * 1.5;        
    }

    set state(newState){
        if (newState <= 0) {
            this._state = 0;
        } else if (newState >= 100) {
            this._state = 100;
         } else {
            this._state = newState;
         }
    }

    get state(){
        return  this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
        this.type = 'magazine';
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = 'book';
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = 'novel';
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = 'fantastic';
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = 'detective';
    }
}

// Задача 2

class Library {
    constructor(name){
        this.name = name;
        this.books = [];
    }

    addBook(book){
        this.book = book;
        if (this.book.state >= 30){
            this.books.push(book);
        } else {
            console.log('Издание в плохом состоянии');
        }
    }

    findBookBy(type, value){
        for(let i = 0; i < this.books.length; i++){
            if (this.books[i][type] === value){
                return this.books[i];
            } 
        }
        return null;        
    }   
    
        
      giveBookByName(bookName){
        for (let i = 0; i < this.books.length; i++){
            if (this.books[i].name === bookName){
            let ourBook = this.books.splice(i, 1);   
            return ourBook[0];                                        
            }
        }
        return null      
    }
}

// Задача 3

class Student{
    constructor (name, gender, age){
    this.name = name;
    this.gender = gender;
    this.age = age;
    }
    
    addMark(mark, subjectName){
        if (mark >= 1 && mark <= 5){
            if (this.marksForSubjects === undefined){
            this.marksForSubjects = [[subjectName, mark]];
            } else {
            this.marksForSubjects.push([subjectName, mark]);
            } 
        } else {
        console.log('Ошибка, оценка должна быть числом от 1 до 5')
        }
    }
       
    getAverageBySubject(subjectName){
        let sum = 0;
        let countSubjects = 0;
        for(let i = 0; i < this.marksForSubjects.length; i++) {
            if(this.marksForSubjects[i].includes(subjectName)){
                sum += this.marksForSubjects[i][1];
                countSubjects++;            
            } else if(!this.marksForSubjects[i].includes(subjectName)){
               return 'Несуществующий предмет'
            }
        }

        return sum / countSubjects;  
    }

    getAverage(){
        let sum = 0;
        for (let i = 0; i < this.marksForSubjects.length; i++) {
            sum += this.marksForSubjects[i][1];
        }
        return sum / this.marksForSubjects.length;
    }

    exclude(reason){
        delete this.marksForSubjects;
        this.excluded = reason
    }

}













    
