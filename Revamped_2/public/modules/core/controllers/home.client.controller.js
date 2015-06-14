'use strict';


angular.module('core').controller('HomeController', ['$scope', 'Authentication',
	function($scope, Authentication) {
		// This provides Authentication context.
		$scope.authentication = Authentication;

		$scope.flavours = [
			{
				alt: "baby monkey",
				flavId:"baby_monkey.jpg"
			},
			{
				alt: "black cherry",
				flavId:"black_cherry.jpg"
			},
			{
				alt: "butterscotch ripple",
				flavId:"butterscotch_ripple.jpg"
			},
			{
				alt: "chocolate peanut butter",
				flavId:"c_pb.jpg"
			},
			{
				alt: "chocolate rasberry",
				flavId:"c_ras.jpg"
			},
			{
				alt: "chocolate chip cookie dough",
				flavId:"cc_cookie_dough.jpg"
			}
		];

		$scope.employees = [
			{
				name: "Jess",
				major: "Electrical Engineering",
				home_town: "Kingston",
				fav_icecream: "Mint Oreo",
				hobby: "nothing",
				music: "country",
				fact: "nothing"
			},
			{
				name: "Josh",
				major: "",
				home_town: "",
				fav_icecream: "",
				hobby: "",
				music: "",
				fact: ""
			},
			{
				name: "Sam",
				major: "",
				home_town: "",
				fav_icecream: "",
				hobby: "",
				music: "",
				fact: ""
			},
			{
				name: "Richard",
				major: "",
				home_town: "",
				fav_icecream: "",
				hobby: "",
				music: "",
				fact: ""
			},
			{
				name: "Emma",
				major: "",
				home_town: "",
				fav_icecream: "",
				hobby: "",
				music: "",
				fact: ""
			},
			{
				name: "Justin",
				major: "",
				home_town: "",
				fav_icecream: "",
				hobby: "",
				music: "",
				fact: ""
			},
			{
				name: "Jacqui",
				major: "",
				home_town: "",
				fav_icecream: "",
				hobby: "",
				music: "",
				fact: ""
			},
			{
				name: "Jacob",
				major: "",
				home_town: "",
				fav_icecream: "",
				hobby: "",
				music: "",
				fact: ""
			}
		]


	}
]);



