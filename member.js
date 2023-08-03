function skillsMember() {
  return {
    restrict: 'E',
    templateUrl: 'components/member/member.html',
    controller: 'MemberController',
    controllerAs: 'memberCtrl',
    bindToController: true,
    scope: {
      member: '='
    }
  };
}