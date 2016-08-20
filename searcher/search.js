// Your use of the YouTube API must comply with the Terms of Service:
// https://developers.google.com/youtube/terms
var indexPos = 0;


var names = [

"Bad Girl Good Girl",
"We Fell in Love (우리 사랑하게 됐어요)",
"2 Different Tears",
"Nagging (잔소리)",
"Good Day (좋은 날)",
"Can't Let You Go Even If I Die (죽어도 못 보내)",
"Lupin (루팡)",
"I Go Crazy Because of You (너 때문에 미쳐)",
"Run Devil Run",
"Go Away",
"Always (언제나)",
"Oh!",
"Try to Follow Me (날 따라 해봐요)",
"Love Song (널 붙잡을 노래)",
"Swing (그네)",
"Chitty Chitty Bang Bang",
"Without U",
"Spiteful Words (이 거지같은 말)",
"Nu ABO (NU 예삐오)",
"Time Please Stop (시간아 멈춰라)",
"Sick Enough to Die (죽을 만큼 아파서)",
"I'm a Guy Like This (나 이런사람이야)",
"I Was Able to Eat Well (밥만 잘 먹더라)",
"Madonna",
"I Was Able to Eat Well (밥만 잘 먹더라)",
"Love Love Love (사랑 사랑 사랑)",
"Why (왜)",
"It's You (그대네요)",
"Then Then Then (그땐 그땐 그땐)",
"Irreversible (돌이킬 수 없는)",
"By Instinct (본능적으로) (feat. Swings)",
"Hoot (훗)",
"You Wouldn't Answer My Calls (전활 받지 않는 너에게)",
"Like A Star (별처럼)",
"If It's Same (똑같다면)",

 ];

var artist = [

"miss A",
"Ga In and Jo Kwon",
"Wonder Girls",
"IU with. Seulong",
"IU",
"2AM",
"Kara",
"T-ara",
"Girls' Generation",
"2NE1",
"Huh Gak",
"Girls' Generation",
"2NE1",
"Rain",
"Lee Hyori feat. Gary",
"Lee Hyori feat. Ceejay",
"2PM",
"Seo Young Eun feat. Jung Yup",
"f(x)",
"Davichi",
"MC Mong feat. Mellow",
"DJ DOC",
"HOMME (Changmin & Lee Hyun)",
"Secret",
"HOMME (Changmin & Lee Hyun)",
"F.T Island",
"Supreme Team feat. Young Jun",
"Sung Si Kyung feat. IU",
"Supreme Team feat. Young Jun",
"Ga In",
"Kang Seung Yoon",
"Girls' Generation",
"2AM",
"Taeyeon & The One",
"Browneyed Soul",

];




// Called automatically when JavaScript client library is loaded.
function onClientLoad() {
    gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
}

// Called automatically when YouTube API interface is loaded (see line 9).
function onYouTubeApiLoad() {
    // This API key is intended for use only in this lesson.
    // See http://goo.gl/PdPA1 to get a key for your own applications.
    gapi.client.setApiKey('AIzaSyDe9ZSCSvexOmI52bDCEMNGU8vg-TtZjpo');

 

 //    var arrayLength = songs.length;
	
	// for (var i = 0; i < arrayLength; i++) {
	// var raw = songs[i];
	// var clean = raw.replace(/\W/g, '');

 //    search(clean);
	// }


 //   search(	"Thrift Shop Macklemore and Ryan Lewis featuring Wanz");
 	  searchNext();
}


function search(query) {
    // Use the JavaScript client library to create a search.list() API call.
    var request = gapi.client.youtube.search.list({
        part: 'snippet',
        q: query,
        type: 'video',
        maxResults: 1
  

    });
    
    // Send the request to the API server,
    // and invoke onSearchRepsonse() with the response.
    request.execute(onSearchResponse);
}

// Called automatically with the response of the YouTube API request.
function onSearchResponse(response) {
    showResponse(response);

}

// Helper function to display JavaScript value on HTML page.
function showResponse(response) {
   var responseString = JSON.stringify(response, '', 2);
   //document.getElementById('response').innerHTML += responseString;
   var data = JSON.parse(responseString);

   // if(!data){
   //  document.getElementById('response').innerHTML += "Data not found?";
   //  return;
   // }
   console.log(data);
   var videoId = (data.items[0].id.videoId);
   var one = "&lt;div class=\"vid\" onclick=\"loadVideo($(this));\" data-id=\"";
   var two = "\"&gt;&lt;a href=\"https://www.youtube.com/watch?v=";
   var three = "\"&gt;&lt;/a&gt;&lt;div&gt;&lt;h3&gt;";
   var four = "&lt;br&gt;"
   var five	= "&lt;span&gt;"
   var six = "&lt;/span&gt;&lt;/h3&gt;&lt;/div&gt;&lt;/div&gt;\n";

  // var linkElement = one + videoId + two + videoId + three  + names[indexPos-1] + four + five + artist[indexPos-1] + six  ;
   var linkElement = '["' + artist[indexPos-1] + '","' + names[indexPos-1] + '","' + videoId + '"],\n';

   document.getElementById('response').innerHTML += linkElement;
   searchNext();
}

function searchNext(){


    if (artist.length != indexPos){
      var name = names[indexPos];
      name = name.replace("\'",""); // remove single quotes
      name = name.replace("\"",""); // remove double quotes

      var artistName = artist[indexPos];
      artistName = artistName.replace("\'","");
      artistName = artistName.replace("\"","");


    	search(artistName + " " + name);
		indexPos++;
    }else{
    	alert("SWAG");
    }

}