$(document).ready(function() {

  var leagueForm = $("#league");
  var leagueName = $("#leagueName");
  var games = $("#numberOfGames");
  var name = $("#name");
  var commander = $("#commander");
  var league = "Austinerds";

  getLeagueData(league);
  // $(leagueForm).on("click", ".btn-primary", getLeagueData);
  var url = window.location.search;
  var gameId;
  var LeagueId;

  $(".name").on("click", ".addPlayer", newPlayer);

  function newPlayer(event){
    event.preventDefault();
    console.log("NEW PLAYER")
    if (!name.val().trim()) {
      return;
    }
    var playerData = {
      playerName: name.val().trim(),
      checkedIn: true,
      points: 0
    };
    submitPlayer(playerData);
  };

  

  function getLeagueData() {
    $.get("/api/gameInfo", renderPlayerList);
  }


  function renderPlayerList(data) {
    console.log(data);
    console.log(data.length);
    for (var i = 0; i < data.length; i++) {
      var player = $("<div class='form-check'>");
      var inputElement = $("<input class='form-check-input checkbox position-static' type='checkbox'>");
      var labelElement = $("<label for='leagueName'>"+data[i].playerName+"</label>")
      player.append(inputElement);
      player.append(labelElement);
      $("#playerList").append(player);
    };
  }

  $("#playerList").click(function() {
    $(this).prop("checked");
    console.log("checked");
  });


});
