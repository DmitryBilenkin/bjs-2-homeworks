function Student(name, gender, age){
    this.name = name;
    this.gender = gender;
    this.age = age;
}

let student3 = new Student('Dmitriy', 'male', 24);
let student4 = new Student('Elena', 'female', 23);

Student.prototype.setSubject = function(subjectName){
  this.subject = subjectName;
}

student3.setSubject('Literature');
student4.setSubject('English');

Student.prototype.addMark = function(mark){
  if (this.marks === undefined){
    this.marks = [mark];
  } else {
    this.marks.push(mark);
  }
}

student3.addMark(3);
student3.addMark(4);
student3.addMark(3);

student4.addMark(5);
student4.addMark(5);
student4.addMark(5);

Student.prototype.addMarks = function (...someMarks){
  if (this.marks === undefined){
    this.marks = someMarks;
  } else {
    for (let i = 0; i < someMarks.length; i++){
      this.marks.push(someMarks[i]);
    }    
  }
}

student3.addMarks(5,5,5);

Student.prototype.getAverage = function(){
  let sum = 0;
  for(mark of this.marks) {
    sum += mark;
  }

  return avg = sum / this.marks.length;  
}

Student.prototype.exclude = function(reason){
  delete this.subject;
  delete this.marks;

  this.excluded = reason
}





