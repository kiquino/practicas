class PersonDefault {
    constructor(){
        this.age = 0;
        this.name = "";
        this.dni = 0;
        this.sex = "M";
    }
    
  
     
    
   
}
class PersonEdit {
   
    constructor(name,age,dni,sex){
        this.age = age;
        this.name = name;
        this.dni = dni;
        this.sex = sex;

        this.createDNI();
    }
  
     
     isAdult(){
      
            if (this.age >=  18) {
                return 1;
            }else{
                return 0;
            }
         

     }
     calculateIMC (weight,height) {
        let result = (weight/(Math.sqrt(height)));
        if (result < 20) {
            return 1;
        }else if (result >= 20 && result <=25 ){
return 0;
        }else if(result > 25){
            return -1;
        }
    
}

    checkSex(sex){
       
            
            if(sex == this.sex){
                console.log("Already Correctly Assigned sex");
                return;
            }else{
               return this.sex = "M";
            }
        
    }
    toString(){
        return "Hi, my name is"+this.name+", i have "+this.age+" years old. \t my sex is: "+this.sex+"\t My DNI is:"+this.dni;
    }

    createDNI(){
        let max = 99999999;
        let min = 10000000;
        let random = Math.random()*( max - min) + min;
        this.dni = Math.floor(random) ;
    }

    setSEX(sex){
        this.sex = sex.toString();
    }
    setName(name){
        this.name = name;
    }
    setAge(age){
        this.age = age;
    }


     }

     class RunnablePerson{
         constructor(age,name,sex,weight,height){
             this.age = 0;
             this.name = "";
             this.sex = "";
             this.weight = 0;
             this.height = 0;
             
            this.Run(age,name,sex,weight,height);
            
         }
         Run(name,age,sex,weight,height){
           name = prompt("What is your Name?");   
          this.name = name.toString();
           age = prompt("What is your age?");
          this.age = age;
           sex = prompt("Are you Male (M) or Female (F)?");
          this.sex = sex.toString();
           weight = prompt("What is your Weight?");
          this.weight = weight;
           height = prompt ("What is your height?");
          this.height = height;
         }
         toString(){
             console.log( "Name: "+this.name +"\t"+"Age: "+this.age+"\t"+"Sex: "+this.sex+"\t"+"Weight: "+this.weight+"\t"+"Height: "+this.height+"\t"+this.isAdult()+"\t"+this.calculateIMC());
         }
         calculateIMC () {
            let result = (this.weight/(Math.sqrt(this.height)));
            if (result < 20) {
                console.log(this.name+"is OverWeight") ;
                return this.name+"is OverWeight"
            }else if (result >= 20 && result <=25 ){
    console.log(this.name+"is IdealWeight");
    return this.name+"is IdealWeight";
            }else if(result > 25){
               
               console.log(this.name + "is UnderWeight");
               return this.name + "is UnderWeight";
            }
        
        }
        isAdult(){
      
            if (this.age >=  18) {
                console.log(this.name+" is an Adult") ;
                return this.name+" is an Adult";
            }else{
                console.log("Not an Adult") ;
                return this.name+" is not an Adult";
            }
         

     }
     setName(){
         let name = prompt("New Name");
         this.name = name.toString();
     }
     setAge(){
         let age = prompt("New Age");
         this.age = age;
     }
     setWeight(){
         let weight = prompt("New Weight");
         this.weight = weight;
     }
     setHeight(){
         let height = prompt("New Height");
        this.height = height;
     }
     


     }
     let person1 = new RunnablePerson();
     let person2 = new RunnablePerson();
     let person3 = new RunnablePerson();

     person1.calculateIMC();
     person1.isAdult();

     person2.calculateIMC();
     person2.isAdult();

     person3.setAge();
     person3.setName();
     person3.setWeight();
     person3.setHeight();
     person3.calculateIMC();
     person3.isAdult();
     
     person1.toString();
     person2.toString();
     person3.toString();
     

    

 
