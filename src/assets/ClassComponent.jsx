
function ClassComponent(){
    class Student {
        constructor(name, age, gender) {
            this.name = name;
            this.age = age;
            this.gender = gender;
        }

        introduce() {
            return (`${name}is ${age} years old and ${gender}`)
        }
    }

    const student1 = new Student('Pintu', 25, 'Sardar');
    console.log(student1.introduce());
}
export default Student;