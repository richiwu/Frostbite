var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    console.log("Hello World from controller");


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
				flavId:'baby_monkey.jpg'
			},
			{
				alt: 'black cherry',
				flavId:'black_cherry.jpg'
			},
			{
				alt: 'butterscotch ripple',
				flavId:'butterscotch_ripple.jpg'
			},
			{
				alt: 'chocolate peanut butter',
				flavId:'c_pb.jpg'
			},
			{
				alt: 'chocolate rasberry',
				flavId:'c_ras.jpg'
			},
			{
				alt: 'chocolate chip cookie dough',
				flavId:'cc_cookie_dough.jpg'
			},
			{
				alt: 'chai tea',
				flavId:'chai_tea.jpg'
			},
			{
				alt: 'cookies and cream',
				flavId:'cookies_cream.jpg'
			},
			{
				alt: 'creme brule',
				flavId:'creme_brule.jpg'
			},
			{
				alt: 'green tea',
				flavId:'green_tea.jpg'
			},
			{
				alt: 'guava grapefruit',
				flavId:'guava_grapefruit.jpg'
			},
			{
				alt: 'chocolate chip cookie dough',
				flavId:'cc_cookie_dough.jpg'
			},
			{
				alt: 'chocolate',
				flavId:'just_choco.jpg'
			},
			{
				alt: 'coconut',
				flavId:'just_coconut.jpg'
			},
			{
				alt: 'expresso',
				flavId:'just_expresso.jpg'
			},
			{
				alt: 'smores',
				flavId:'just_mores.jpg'
			},
			{
				alt: 'mud pie',
				flavId:'just_mud.jpg'
			},
			{
				alt: 'pistachio',
				flavId:'just_pistach.jpg'
			},
			{
				alt: 'smarties',
				flavId:'just_smarties.jpg'
			},
			{
				alt: 'strawberry',
				flavId:'just_straberry.jpg'
			},
			{
				alt: 'vanilla',
				flavId:'just_vanilla.jpg'
			},
			{
				alt: 'maple walnut',
				flavId:'maple_walnut.jpg'
			},
			{
				alt: 'mint chocolate chip',
				flavId:'mint_choco.jpg'
			},
			{
				alt: 'mint oreo',
				flavId:'mint_oreo.jpg'
			},
			{
				alt: 'mixed berry',
				flavId:'mixed_berry.jpg'
			},
			{
				alt: 'new york cheesecake',
				flavId:'ny_cheecake.jpg'
			},
			{
				alt: 'pralines and cream',
				flavId:'pralines_cream.jpg'
			},
			{
				alt: 'rolo',
				flavId:'rolo_yolo.jpg'
			},
			{
				alt: 'rum and raison',
				flavId:'rum_raison.jpg'
			},
			{
				alt: 'lemon',
				flavId:'s_just_lemon.jpg'
			},
			{
				alt: 'litchi',
				flavId:'s_just_litchi.jpg'
			},
			{
				alt: 'mango',
				flavId:'s_just_mango.jpg'
			},
			{
				alt: 'mojito',
				flavId:'s_just_mojito.jpg'
			},
			{
				alt: 'orange',
				flavId:'s_sorange.jpg'
			},
			{
				alt: 'strawberry daquiri',
				flavId:'s_str_dq.jpg'
			},
			{
				alt: 'triple chocolate',
				flavId:'triple_choco.jpg'
			}
			// {
			// 	alt: 'tornado',
			// 	flavId:'triple_tornado.jpg'
			// }

		];

		$scope.employees = [
			{
				name: 'Jess',
				major: 'Electrical Engineering',
				home_town: 'Kingston',
				fav_icecream: 'Mint Oreo',
				hobby: 'nothing',
				music: 'country',
				fact: 'nothing',
				img: 'richard.png'
			},
			{
				name: 'Josh',
				major: '',
				home_town: '',
				fav_icecream: '',
				hobby: '',
				music: '',
				fact: '',
				img: 'richard.png'
			},
			{
				name: 'Sam',
				major: '',
				home_town: '',
				fav_icecream: '',
				hobby: '',
				music: '',
				fact: '',
				img: 'richard.png'
			},
			{
				name: 'Richard',
				major: '',
				home_town: '',
				fav_icecream: '',
				hobby: '',
				music: '',
				fact: '',
				img: 'richard.png'
			},
			{
				name: 'Jacqui',
				major: '',
				home_town: '',
				fav_icecream: '',
				hobby: '',
				music: '',
				fact: '',
				img: 'richard.png'
			},
			{
				name: 'Justin',
				major: '',
				home_town: '',
				fav_icecream: '',
				hobby: '',
				music: '',
				fact: '',
				img: 'richard.png'
			},
			{
				name: 'Emma',
				major: '',
				home_town: '',
				fav_icecream: '',
				hobby: '',
				music: '',
				fact: '',
				img: 'richard.png'
			},
			{
				name: 'Jacob',
				major: '',
				home_town: '',
				fav_icecream: '',
				hobby: '',
				music: '',
				fact: '',
				img: 'richard.png'
			}
		]



}]);﻿

	// 	$scope.flavours = [
	// 		{
	// 			alt: 'baby monkey',
	// 			flavId:'baby_monkey.jpg'
	// 		},
	// 		{
	// 			alt: 'black cherry',
	// 			flavId:'black_cherry.jpg'
	// 		},
	// 		{
	// 			alt: 'butterscotch ripple',
	// 			flavId:'butterscotch_ripple.jpg'
	// 		},
	// 		{
	// 			alt: 'chocolate peanut butter',
	// 			flavId:'c_pb.jpg'
	// 		},
	// 		{
	// 			alt: 'chocolate rasberry',
	// 			flavId:'c_ras.jpg'
	// 		},
	// 		{
	// 			alt: 'chocolate chip cookie dough',
	// 			flavId:'cc_cookie_dough.jpg'
	// 		}
	// 	];

	// 	$scope.employees = [
	// 		{
	// 			name: 'Jess',
	// 			major: 'Electrical Engineering',
	// 			home_town: 'Kingston',
	// 			fav_icecream: 'Mint Oreo',
	// 			hobby: 'nothing',
	// 			music: 'country',
	// 			fact: 'nothing'
	// 		},
	// 		{
	// 			name: 'Josh',
	// 			major: '',
	// 			home_town: '',
	// 			fav_icecream: '',
	// 			hobby: '',
	// 			music: '',
	// 			fact: ''
	// 		},
	// 		{
	// 			name: 'Sam',
	// 			major: '',
	// 			home_town: '',
	// 			fav_icecream: '',
	// 			hobby: '',
	// 			music: '',
	// 			fact: ''
	// 		},
	// 		{
	// 			name: 'Richard',
	// 			major: '',
	// 			home_town: '',
	// 			fav_icecream: '',
	// 			hobby: '',
	// 			music: '',
	// 			fact: ''
	// 		},
	// 		{
	// 			name: 'Jacqui',
	// 			major: '',
	// 			home_town: '',
	// 			fav_icecream: '',
	// 			hobby: '',
	// 			music: '',
	// 			fact: ''
	// 		},
	// 		{
	// 			name: 'Justin',
	// 			major: '',
	// 			home_town: '',
	// 			fav_icecream: '',
	// 			hobby: '',
	// 			music: '',
	// 			fact: ''
	// 		},
	// 		{
	// 			name: 'Emma',
	// 			major: '',
	// 			home_town: '',
	// 			fav_icecream: '',
	// 			hobby: '',
	// 			music: '',
	// 			fact: ''
	// 		},
	// 		{
	// 			name: 'Jacob',
	// 			major: '',
	// 			home_town: '',
	// 			fav_icecream: '',
	// 			hobby: '',
	// 			music: '',
	// 			fact: ''
	// 		}
	// 	]



	// function AppCtrl($scope) {

	// 	console.log("hello from control");


		





