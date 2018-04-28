//youtube video class assignments
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
var YoutubeVdo = /** @class */ (function () {
    //initialization
    function YoutubeVdo(title, channelName, views, duration) {
        var _this = this;
        //method
        this.getViewsOfVideo = function () {
            console.log(_this.title + " video has " + _this.views + " views.");
        };
        this.getDurationOfVideo = function () {
            console.log("The Channel name is " + _this.channelName);
        };
        this.title = title;
        this.channelName = channelName;
        this.views = views;
        this.duration = duration;
    }
    return YoutubeVdo;
}());
//similarVdos extends the base class
var SimilarVdos = /** @class */ (function (_super) {
    __extends(SimilarVdos, _super);
    function SimilarVdos(alike, alikeChannels) {
        var _this = _super.call(this) || this;
        _this.getRelatedVideos = function () {
            console.log("Related Video is " + _this.alike);
        };
        _this.getRelatedChannels = function () {
            console.log("Related channels are " + _this.alikeChannels);
        };
        _this.alike = alike;
        _this.alikeChannels = alikeChannels;
        return _this;
    }
    return SimilarVdos;
}(YoutubeVdo));
//popularity extends the base class
var Popularity = /** @class */ (function (_super) {
    __extends(Popularity, _super);
    function Popularity(title, channelName, likes, disLikes, subscription) {
        var _this = _super.call(this, title, channelName) || this;
        _this.getSubscription = function () {
            console.log(_this.channelName + " has gained " + _this.subscription + " subscriptions.");
        };
        _this.getLikes = function () {
            console.log(_this.likes + " people liked " + _this.title + " video");
        };
        _this.likes = likes;
        _this.disLikes = disLikes;
        _this.subscription = subscription;
        return _this;
    }
    return Popularity;
}(YoutubeVdo));
//Details of the video
var dramaVideo = new YoutubeVdo('TVFs Indian Institute of Papa Mummy', 'The Viral Video', 124343, 190);
dramaVideo.getViewsOfVideo();
dramaVideo.getDurationOfVideo();
//similar videos
var alikeVideos = new SimilarVdos('TVFs Monitor Ho Toh Aisa', ["MediocreFilms", "TheHungamaFilms"]);
alikeVideos.getRelatedVideos();
alikeVideos.getRelatedChannels();
//popularity of videos
var favourOfVideo = new Popularity('Be Free (Pallivaalu Bhadravattakam) ft. Vandana Iyer', 'Vidya Vox', '456k', '21k', '467k');
favourOfVideo.getSubscription();
favourOfVideo.getLikes();
