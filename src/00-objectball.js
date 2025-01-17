
const gameObject = () => {
    let obj = {
      home: {
        teamName: "Brooklyn Nets",
        colors: ["black", "white"],
        players: {
          "Alan Anderson": {
            number: 0,
            shoe: 16,
            points: 22,
            rebounds: 12,
            assists: 12,
            steals: 3,
            blocks: 1,
            slamDunks: 1,
          },
          "Reggie Evans": {
            number: 30,
            shoe: 14,
            points: 12,
            rebounds: 12,
            assists: 12,
            steals: 12,
            blocks: 12,
            slamDunks: 7,
          },
          "Brook Lopez": {
            number: 11,
            shoe: 17,
            points: 17,
            rebounds: 19,
            assists: 10,
            steals: 3,
            blocks: 1,
            slamDunks: 15,
          },
          "Mason Plumlee": {
            number: 1,
            shoe: 19,
            points: 26,
            rebounds: 12,
            assists: 6,
            steals: 3,
            blocks: 8,
            slamDunks: 5,
          },
          "Jason Terry": {
            number: 31,
            shoe: 15,
            points: 19,
            rebounds: 2,
            assists: 2,
            steals: 4,
            blocks: 11,
            slamDunks: 1,
          },
        },
      },
      away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
          "Jeff Adrien": {
            number: 4,
            shoe: 18,
            points: 10,
            rebounds: 1,
            assists: 1,
            steals: 2,
            blocks: 7,
            slamDunks: 2,
          },
          "Bismak Biyombo": {
            number: 0,
            shoe: 16,
            points: 12,
            rebounds: 4,
            assists: 7,
            steals: 7,
            blocks: 15,
            slamDunks: 10,
          },
          "DeSagna Diop": {
            number: 2,
            shoe: 21,
            points: 24,
            rebounds: 12,
            assists: 12,
            steals: 4,
            blocks: 5,
            slamDunks: 5,
          },
          "Ben Gordon": {
            number: 8,
            shoe: 15,
            points: 33,
            rebounds: 3,
            assists: 2,
            steals: 1,
            blocks: 1,
            slamDunks: 0,
          },
          "Brendan Haywood": {
            number: 33,
            shoe: 15,
            points: 6,
            rebounds: 12,
            assists: 12,
            steals: 22,
            blocks: 5,
            slamDunks: 12,
          },
        },
      },
    };
    return obj;
  };


function numPointsScored(name) {
    let obj = gameObject();
    
    if (obj.home.players[name]) {
        return obj.home.players[name].points;
    } else if (obj.away.players[name]) {
        return obj.away.players[name].points;
    } else {
        return "Player not found";
    }
}

console.log(numPointsScored("Freddie Moala"));

const shoeSize = (name) => {
    let obj = gameObject();
    
    if (obj.home.players[name]) {
        return obj.home.players[name].shoe;
    } else if (obj.away.players[name]) {
        return obj.away.players[name].shoe;
    } else {
        return "Player not found";
    }
}

console.log(shoeSize());

const teamColors = (teamName) => {
    let obj = gameObject();
    
    if (obj.home.teamName === teamName) {
        return obj.home.colors;
    } else if (obj.away.teamName === teamName) {
        return obj.away.colors;
    } else {
        return "Team not found";
    }
}

console.log(teamColors("Brooklyn Nets"));

const teamNames = () => {
    let obj = gameObject();
    return [obj.home.teamName, obj.away.teamName];
}

console.log(teamNames());

const playerNumbers = (teamName) => {
    let obj = gameObject();
    let numbers = [];
    if (obj.home.teamName === teamName) {
        for (let player in obj.home.players) {
            numbers.push(obj.home.players[player].number);
        }
    } else if (obj.away.teamName === teamName) {
        for (let player in obj.away.players) {
            numbers.push(obj.away.players[player].number);
        }
    } else {
        return "Team not found";
    }
    return numbers;
}

console.log(playerNumbers("Charlotte Hornets"));

const playerStats = (name) => {
    let obj = gameObject();
    if (obj.home.players[name]) {
        return obj.home.players[name];
    } else if (obj.away.players[name]) {
        return obj.away.players[name];
    } else {
        return "Player not found";
    }
}

console.log(playerStats("Ben Gordon"));

function bigShoeRebounds() {
    let obj = gameObject();
    let player = "";
    let shoeSize = 0;
    let rebounds = 0;
    for (let player in obj.home.players) {
        if (obj.home.players[player].shoe > shoeSize) {
            shoeSize = obj.home.players[player].shoe;
            rebounds = obj.home.players[player].rebounds;
        }
    }
    for (let player in obj.away.players) {
        if (obj.away.players[player].shoe > shoeSize) {
            shoeSize = obj.away.players[player].shoe;
            rebounds = obj.away.players[player].rebounds;
        }
    }
    return rebounds;
}

console.log(bigShoeRebounds());

