var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {

var refresh = function() {
  $http.get('/testimonials').success(function(response) {
    console.log("I got the data I requested");
    $scope.testimonials = response;
    $scope.testimonial = "";
  });
};

refresh();

$scope.addTestimonial = function() {
  console.log($scope.testimonial);
  $http.post('/testimonials', $scope.testimonial).success(function(response) {
    console.log(response);
    refresh();
  });
};

$scope.remove = function(id) {
  console.log(id);
  $http.delete('/testimonials/' + id).success(function(response) {
    refresh();
  });
};

$scope.edit = function(id) {
  console.log(id);
  $http.get('/testimonials/' + id).success(function(response) {
    $scope.testimonial = response;
  });
};  

$scope.update = function() {
  console.log($scope.testimonial._id);
  $http.put('/testimonials/' + $scope.testimonial._id, $scope.testimonial).success(function(response) {
    refresh();
  })
};

$scope.deselect = function() {
  $scope.testimonial = "";
}

	$scope.flavours = [
			{
				alt: 'baby monkey',
				flavId:'baby_monkey.jpg',
				description: 'No monkeys were harmed in the making of this ice cream'
			},
			{
				alt: 'black cherry',
				flavId:'black_cherry.jpg',
				description: 'Better than white cherry. ya dig?'
			},
			{
				alt: 'butterscotch ripple',
				flavId:'butterscotch_ripple.jpg',
				description: 'Grandmas butterscotch pie has stiff competition'
			},
			{
				alt: 'chocolate peanut butter',
				flavId:'c_pb.jpg',
				description: 'The best party in your mouth, you already know'
			},
			{
				alt: 'chocolate rasberry',
				flavId:'c_ras.jpg',
				description: 'Kinda tastes like chocolate and rasberries, yoloswag'
			},
			{
				alt: 'chocolate chip cookie dough',
				flavId:'cc_cookie_dough.jpg',
				description: 'A classic to get you through the day'
			},
			{
				alt: 'chai tea',
				flavId:'chai_tea.jpg',
				description: 'Damnnnnnnn this is next level exotic'
			},
			{
				alt: 'cookies and cream',
				flavId:'cookies_cream.jpg',
				description: 'Eating cookies just got a lot better'
			},
			{
				alt: 'creme brule',
				flavId:'creme_brule.jpg',
				description: 'OUI OUI OUI... très tasty'
			},
			{
				alt: 'green tea',
				flavId:'green_tea.jpg',
				description: 'Irrelevant opinon: Green tea isnt the best flavour'
			},
			{
				alt: 'guava grapefruit',
				flavId:'guava_grapefruit.jpg',
				description: 'Equivalent to the recommended 3 servings of fruit per day'
			},
			{
				alt: 'chocolate chip cookie dough',
				flavId:'cc_cookie_dough.jpg',
				description: 'The perfect remedy for cookie cravings'
			},
			{
				alt: 'chocolate',
				flavId:'just_choco.jpg',
				description: 'Doesnt get much better than classic chocolate'
			},
			{
				alt: 'coconut',
				flavId:'just_coconut.jpg',
				description: 'Im in love with the COCO, ya dig?'
			},
			{
				alt: 'expresso',
				flavId:'just_expresso.jpg',
				description: 'Makes me wanna run through the 6 w/ my woes'
			},
			{
				alt: 'smores',
				flavId:'just_mores.jpg',
				description: 'Guaranteed to have you singing campfire songs'
			},
			{
				alt: 'mud pie',
				flavId:'just_mud.jpg',
				description: 'Almost as good as the mud pies you used to make when you were 3'
			},
			{
				alt: 'pistachio',
				flavId:'just_pistach.jpg',
				description: 'its the bomb.com'
			},
			{
				alt: 'smarties',
				flavId:'just_smarties.jpg',
				description: 'Proven to make you smarter, a must-have before any exam'
			},
			{
				alt: 'strawberry',
				flavId:'just_straberry.jpg',
				description: 'Cant go wrong with this classic crowd-pleaser'
			},
			{
				alt: 'vanilla',
				flavId:'just_vanilla.jpg',
				description: 'Vanilla ice ice baby'
			},
			{
				alt: 'maple walnut',
				flavId:'maple_walnut.jpg',
				description: 'This ones for all you walnut lovers out there'
			},
			{
				alt: 'mint chocolate chip',
				flavId:'mint_choco.jpg',
				description: 'Bruuuuuuuuhhhhh, stayin real gucci with this flavour'
			},
			{
				alt: 'mint oreo',
				flavId:'mint_oreo.jpg',
				description: 'Reminds me of those days when I used to eat oreos and chew on mint plants..'
			},
			{
				alt: 'mixed berry',
				flavId:'mixed_berry.jpg',
				description: 'A perfect mix of all the good things in life'
			},
			{
				alt: 'new york cheesecake',
				flavId:'ny_cheecake.jpg',
				description: 'NEW YOOOORRK, concrete jungle wet dream tomatoooo'
			},
			{
				alt: 'pralines and cream',
				flavId:'pralines_cream.jpg',
				description: 'Creamy and praline-y, mmmmm SO GOOD'
			},
			{
				alt: 'rolo',
				flavId:'rolo_yolo.jpg',
				description: '25 sittin on 25 mil'
			},
			{
				alt: 'rum and raison',
				flavId:'rum_raison.jpg',
				description: 'Does anyone even like this flavour for the raisins?'
			},
			{
				alt: 'lemon',
				flavId:'s_just_lemon.jpg',
				description: 'When life gives you lemons, make ice cream'
			},
			{
				alt: 'litchi',
				flavId:'s_just_litchi.jpg',
				description: 'Better than actual litchi mmmmm'
			},
			{
				alt: 'mango',
				flavId:'s_just_mango.jpg',
				description: 'The Beyonce of ice creams... cant hate on mango ya feel?'
			},
			{
				alt: 'mojito',
				flavId:'s_just_mojito.jpg',
				description: 'Why bother even going to a bar?'
			},
			{
				alt: 'orange',
				flavId:'s_sorange.jpg',
				description: 'Orange you down for some?'
			},
			{
				alt: 'strawberry daquiri',
				flavId:'s_str_dq.jpg',
				description: '10/10 say this is the best daquiri theyve ever tasted'
			},
			{
				alt: 'triple chocolate',
				flavId:'triple_choco.jpg',
				description: 'Triple the swag and triple the fun'
			}
			// {
			// 	alt: 'tornado',
			// 	flavId:'triple_tornado.jpg'
            //  description: 'You ain't ready for this storm'
			// }

		];

		$scope.employees = [
			{
				name: 'Jess',
				major: 'Electrical Engineering',
				home_town: 'Mississauga, Ontario',
				fav_icecream: 'There is too many to choose from!',
				hobby: 'Cooking and baking',
				music: 'Depends on the day',
				fact: ' I climb mountains in Slovenia',
				img: 'jess.png'
			},
			{
				name: 'Josh',
				major: 'Materials Engineering',
				home_town: 'Calgary, Alberta',
				fav_icecream: 'Mint Oreo',
				hobby: 'Musical Theatre',
				music: 'Jazz/Pop',
				fact: 'I brought my mom to Blues Pub and OAP',
				img: 'josh.jpg'
			},
			{
				name: 'Sam',
				major: 'Electrical Engineering',
				home_town: 'Kingston, Ontario',
				fav_icecream: 'Mint Oreo',
				hobby: 'Riding pony and licking ice cream',
				music: 'Happy songs hehe',
				fact: 'Statistics show that I play better music than Richard',
				img: 'samantha.jpg'
			},
			{
				name: 'Richard',
				major: 'Electrical Engineering',
				home_town: 'Mississauga, Ontario',
				fav_icecream: 'Expresso',
				hobby: 'Pretending to be gangster',
				music: 'Hood music: rap, hip hop, trap, ghetto tunes',
				fact: '2Chainz and Waka Flacka are my heros',
				img: 'richard.png'
			},
			{
				name: 'Justin',
				major: 'Mechanical Engineering',
				home_town: 'Vancouver, British Columbia',
				fav_icecream: 'the most ratchet one...chocolate',
				hobby: 'Staying Fly',
				music: 'Hannah Montana',
				fact: 'I pray to Based God',
				img: 'justin.jpg'
				
			},
			{
				name: 'Jacqui',
				major: 'Chemical Engineering',
				home_town: 'Calgary, Alberta',
				fav_icecream: 'Green Tea',
				hobby: ' Playing guitar and pretending I can sing really well',
				music: 'All about the slow jams, ed sheeran, john mayer, sam smith, hozier',
				fact: 'I can lick my elbow..ask me to show you!',
				img: 'jacqui.jpg'
			},
			{
				name: 'Emma',
				major: 'Chemical Engineering',
				home_town: 'Westmoorings, Trinidad',
				fav_icecream: 'Pralines & Cream',
				hobby: 'Baking',
				music: 'Raggae, turn up mon',
				fact: 'When I was 3 I was photographed eating icecream for a calendar. Looks like it is  meant to be',
				img: 'emma.jpg'
			},
			{
				name: 'Jacob',
				major: 'Mining Engineering',
				home_town: 'Ottawa, Ontario',
				fav_icecream: 'Coaticook Mint Chip',
				hobby: 'The beauty of mathematics and starting mosh pits',
				music: 'Weirdo punk',
				fact: 'I have seen every episode of Seinfeld',
				img: 'jacob.jpg'
			}
		]



}]);﻿

	

		





