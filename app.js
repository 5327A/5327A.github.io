angular.module('tournamentApp', ['ngRoute'])
.config(['$routeProvider', '$locationProvider',
	function($routeProvider, $locationProvider){
		$routeProvider
			.when('/:tournament', {
				templateUrl: "/tournamentView.html",
				controller: "tournamentController"
			})
			.otherwise({
				redirectTo: '/'
			})
	$locationProvider.html5Mode(true);
}])
.controller('tournamentController', ['$scope', '$routeParams', function($scope, $routeParams){
	this.params = $routeParams;
	$scope.tournaments = [
		{ name : 'Dougherty Valley', rank : '7', wlt : '5-1-0', elimRank : 'Semifinalist (4th Seed)', match : [{ number : 'Q11', red : '5327A and 1000A', blue : '1868J and 1868D', score : '22-11', style : "#3498db"}, { number : 'Q18', red : '5327C and 5776', blue : '5327A and 5776B', score : '3-33', style : "#3498db"}, { number : 'Q26', red : '254F and 5327A', blue : '1868A and 6B', score : '19-18', style : "#3498db"}, { number : 'Q45', red : '6A and 7805', blue : '5327A and 4649B', score : '13-31', style : "#3498db"}, { number : 'Q51', red : '5327B and 9378W', blue : '5327A and 1868Z', score : '9-34', style : "#3498db"}, { number : 'Q72', red : '5327A and 8000B', blue : '5369 and 4649C', score : '32-36', style : "#e67e22"}, { number : 'QF 2-1', red : '5327A and 8000B', blue : '5776Y and 254G', score : '22-14', style : "#3498db"}, { number : 'QF 2-2', red : '5327A and 8000B', blue : '5776Y and 254G', score : '22-15', style : "#3498db"}, { number : 'SF 1-1', red : '8000A and 5369', blue : '5327A and 8000B', score : '57-39', style : "#e67e22"}, { number : 'SF 1-2', red : '8000A and 5327B', blue : '5327A and 8000B', score : '36-33', style : "#e67e22"}], awards : "Excellence Award (Qualifies for NorCal Championships)"},
		{ name : 'Bellarmine', rank : '4', wlt : '6-0-0', elimRank : 'Semifinalist (3rd Seed)', match : [{ number : 'Q1', red : '254C and 5327A', blue : '254E and 1868Z', score : '43-15', style : "#3498db"}, { number : 'Q16', red : '5675K and 254F', blue : '5297B and 5327A', score : '32-37', style : "#3498db"}, { number : 'Q34', red : '5327A and 5327B', blue : '824D and 5776B', score : '57-6', style : "#3498db"}, { number : 'Q57', red : '5655B and 2059B', blue : '5327A and 9378T', score : '2-25', style : "#3498db"}, { number : 'Q64', red : '5327A and 5772', blue : '5297C and 7579', score : '28-23', style : "#3498db"}, { number : 'Q76', red : '973A and 824C', blue : '5327A and 9378W', score : '12-32', style : "#3498db"}, { number : 'QF 4-1', red : '5327A and 5327C', blue : '5772 and 254C', score : '56-45', style : "#3498db"}, { number : 'SF 2-1', red : '5369 and 5776C', blue : '5327A and 5327C', score : '69-52', style : "#e67e22"}], awards : "Excellence Award (Qualifies for NorCal Championships), Robot Skills Award (35 Points GG Navneedh)"},
		{ name : 'Modesto', rank : '9', wlt : '4-1-0', elimRank : 'Quarterfinalist (1st Seed)', match : [{ number : 'Q10', red : '5655B and 5327A', blue : '3947C and 8000D', score : '16-8', style : "#3498db"}, { number : 'Q17', red : '4768B and 824E', blue : '5327A and 824B', score : '19-25', style : "#3498db"}, { number : 'Q42', red : '9378X and 4768D', blue : '8000B and 5327A', score : '20-38', style : "#3498db"}, { number : 'Q49', red : '7579C and 5327A', blue : '5327C and 4768C', score : '19-39', style : "#e67e22"}, { number : 'Q68', red : '5327A and 920C', blue : '8784 and 7579B', score : '30-17', style : "#3498db"}, { number : 'QF 1-1', red : '5327C and 5776', blue : '4649A and 4649D', score : '0-26', style : "black"}, { number : 'QF 1-2', red : '5327C and 5327A', blue : '4649A and 4649D', score : '0-40', style : "black"}], awards : "N/A"},
		{ name : 'Tracy', rank : '52', wlt : '1-4-0', elimRank : 'Quarterfinalist (Not Even Seed)', match : [{ number : 'Q14', red : '5327A and 5675J', blue : '254C and 3947C', score : '25-32', style : "#e67e22"}, { number : 'Q32', red : '9378A and 5776Y', blue : '5327A and 1155A', score : '49-24', style : "#e67e22"}, { number : 'Q48', red : '5675K and 2059A', blue : '5327A and 2456', score : '28-23', style : "#e67e22"}, { number : 'Q60', red : '5327A and 6B', blue : '254E and 674G', score : '21-38', style : "#e67e22"}, { number : 'Q76', red : '5327D and 5958', blue : '5327A and 8000B', score : '34-63', style : "#3498db"}, { number : 'QF 1-2', red : '5369 and 254A', blue : '5776Y and 5327A', score : '73-49', style : "#e67e22"}], awards : "Judges Award (Tyty Billy)"}
	];
	for(var i = 0; i < $scope.tournaments.length; i++){
		if($scope.tournaments[i].name.toUpperCase() == this.params.tournament.toUpperCase()){
			$scope.tournamentDisplay = $scope.tournaments[i];
		}
	}
}]);