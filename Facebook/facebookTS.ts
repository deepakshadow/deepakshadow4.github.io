//social class facebook
class Facebook{
    //field or property
    private fullName: string;
    private nickName: string;
    private emailId: string;
    private phoneNo: number;
    private birthDay: string;
    age: number;
    private quotes: string;
    // property initialization

    constructor(fullName?: string, nickName?: string, emailId?: string, phoneNo?: number, birthDay?: string, age?: number, quotes?:string){

        this.fullName = fullName;
        this.nickName = nickName;
        this.emailId = emailId;
        this.phoneNo = phoneNo;
        this.birthDay = birthDay;
        this.quotes = quotes;
    }
    //method
    getPersonDetails = () => {
        console.log(`My name is ${this.fullName}.\nEmail id: ${this.emailId}.\nPhone no: ${this.phoneNo}.\nBirthDay: ${this.birthDay}.\nQuote: ${this.quotes}`);
    }
    getAgeOfPerson = () => {
        console.log(`Age: ${this.age}`);
    }
    setAge = (totalAge: number) => {
        this.age = totalAge;
    }
}

//Extending the superclass/baseclass with eduationdetails
class Eduaction extends Facebook{
    matriculation: string;
    interMediate: string;
    graduation: string;
    postGraduation: string;

    constructor(matriculation: string, interMediate: string, graduation: string, postGraduation: string){
        super();
        this.matriculation = matriculation;
        this.interMediate = interMediate;
        this.graduation = graduation;
        this.postGraduation = postGraduation;

    }
    getEducationDetails = () => {
        console.log(`Matriculation: ${this.matriculation}.\nIntermediate: ${this.interMediate}.\nGraduation: ${this.graduation}.\npostgraduation: ${this.postGraduation}`);
    }
}

//extending the base class with friends
class Friends extends Facebook{
    friendsList: string[];
    numberOfFriends: number;

    constructor(friendsList: string[], numberOfFriends: number){
        super();
        this.friendsList = friendsList;
        this.numberOfFriends = numberOfFriends;
    }
    getFriendsList = () => {
        console.log(`FriendsList: ${this.friendsList}`);
    }
    getNoOfFriends = () => {
        console.log(`No of Friends: ${this.numberOfFriends}`);
    }


}
//details about the person
let goodMan = new Facebook('Kevin Mile', 'Vin', 'Kevin@gmail.com', 9999999999, '21/11/1980', null, 'Live like a king');
goodMan.getPersonDetails();
goodMan.setAge(38);
goodMan.getAgeOfPerson();
//Eduation details of the person
let educationOfKevin = new Eduaction('St. Mary school, Denmark', 'St. Craft College, USA', 'Havard University', 'Oxford University');
educationOfKevin.getEducationDetails();
//friends list of the person
let FriendsOfThePerson = new Friends(['John Doe', 'Brad Traversy', 'Mosh merdana', 'Johnson Kyle'], 999);
FriendsOfThePerson.getFriendsList();
FriendsOfThePerson.getNoOfFriends();
