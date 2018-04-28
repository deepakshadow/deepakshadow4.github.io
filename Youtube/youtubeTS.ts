//youtube video class assignments

class YoutubeVdo{
    //fields or properties
    title: string;
    channelName: string;
    views: number;
    duration: number; //in minutes

    //initialization
    constructor(title?: string, channelName?: string, views?: number, duration?: number){
        this.title = title;
        this.channelName = channelName;
        this.views = views;
        this.duration = duration;

    }
    //method
    getViewsOfVideo = () => {
        console.log(`${this.title} video has ${this.views} views.`);
    }
    getDurationOfVideo = () => {
        console.log(`The Channel name is ${this.channelName}`);
    }

    
}

//similarVdos extends the base class
class SimilarVdos extends YoutubeVdo{
    alike: string;
    alikeChannels : string[];

    constructor(alike: string, alikeChannels: string[]){
        
        super();
        this.alike = alike;
        this.alikeChannels = alikeChannels;

    }
    getRelatedVideos = () => {
        console.log(`Related Video is ${this.alike}`);
    }
    getRelatedChannels = () => {
        console.log(`Related channels are ${this.alikeChannels}`);
    } 
}

//popularity extends the base class
class Popularity extends YoutubeVdo{
    likes: string;
    disLikes: string;
    subscription: string;

    constructor(title: string, channelName: string, likes: string, disLikes: string, subscription: string){
        super(title, channelName);
        this.likes = likes;
        this.disLikes = disLikes;
        this.subscription = subscription;
    }

    getSubscription = () => {
        console.log(`${this.channelName} has gained ${this.subscription} subscriptions.`)
    }

    getLikes = () => {
        console.log(`${this.likes} people liked ${this.title} video`);
    }
}

//Details of the video
let dramaVideo = new YoutubeVdo('TVFs Indian Institute of Papa Mummy', 'The Viral Video', 124343, 190);
dramaVideo.getViewsOfVideo();
dramaVideo.getDurationOfVideo();
//similar videos
let alikeVideos = new SimilarVdos('TVFs Monitor Ho Toh Aisa', ["MediocreFilms", "TheHungamaFilms"]);
alikeVideos.getRelatedVideos();
alikeVideos.getRelatedChannels();
//popularity of videos
let favourOfVideo = new Popularity('Be Free (Pallivaalu Bhadravattakam) ft. Vandana Iyer', 'Vidya Vox', '456k', '21k', '467k');
favourOfVideo.getSubscription();
favourOfVideo.getLikes();