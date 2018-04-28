var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//social class facebook
var Facebook = /** @class */ (function () {
    // property initialization
    function Facebook(fullName, nickName, emailId, phoneNo, birthDay, age, quotes) {
        var _this = this;
        //method
        this.getPersonDetails = function () {
            console.log("My name is " + _this.fullName + ".\nEmail id: " + _this.emailId + ".\nPhone no: " + _this.phoneNo + ".\nBirthDay: " + _this.birthDay + ".\nQuote: " + _this.quotes);
        };
        this.getAgeOfPerson = function () {
            console.log("Age: " + _this.age);
        };
        this.setAge = function (totalAge) {
            _this.age = totalAge;
        };
        this.fullName = fullName;
        this.nickName = nickName;
        this.emailId = emailId;
        this.phoneNo = phoneNo;
        this.birthDay = birthDay;
        this.quotes = quotes;
    }
    return Facebook;
}());
//Extending the superclass/baseclass with eduationdetails
var Eduaction = /** @class */ (function (_super) {
    __extends(Eduaction, _super);
    function Eduaction(matriculation, interMediate, graduation, postGraduation) {
        var _this = _super.call(this) || this;
        _this.getEducationDetails = function () {
            console.log("Matriculation: " + _this.matriculation + ".\nIntermediate: " + _this.interMediate + ".\nGraduation: " + _this.graduation + ".\npostgraduation: " + _this.postGraduation);
        };
        _this.matriculation = matriculation;
        _this.interMediate = interMediate;
        _this.graduation = graduation;
        _this.postGraduation = postGraduation;
        return _this;
    }
    return Eduaction;
}(Facebook));
//extending the base class with friends
var Friends = /** @class */ (function (_super) {
    __extends(Friends, _super);
    function Friends(friendsList, numberOfFriends) {
        var _this = _super.call(this) || this;
        _this.getFriendsList = function () {
            console.log("FriendsList: " + _this.friendsList);
        };
        _this.getNoOfFriends = function () {
            console.log("No of Friends: " + _this.numberOfFriends);
        };
        _this.friendsList = friendsList;
        _this.numberOfFriends = numberOfFriends;
        return _this;
    }
    return Friends;
}(Facebook));
//details about the person
var goodMan = new Facebook('Kevin Mile', 'Vin', 'Kevin@gmail.com', 9999999999, '21/11/1980', null, 'Live like a king');
goodMan.getPersonDetails();
goodMan.setAge(38);
goodMan.getAgeOfPerson();
//Eduation details of the person
var educationOfKevin = new Eduaction('St. Mary school, Denmark', 'St. Craft College, USA', 'Havard University', 'Oxford University');
educationOfKevin.getEducationDetails();
//friends list of the person
var FriendsOfThePerson = new Friends(['John Doe', 'Brad Traversy', 'Mosh merdana', 'Johnson Kyle'], 999);
FriendsOfThePerson.getFriendsList();
FriendsOfThePerson.getNoOfFriends();
