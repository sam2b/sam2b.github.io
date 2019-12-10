/*
 * Author: Sam Brendel modified starter code example.
 * 3/8/2019, TCSS491 Computational Worlds, Professor Chris Marriott
 * Conway's Game of Life (save/load from database)
 * https://sam2b.github.io/compworlds3
 */
 
var socket = io.connect("http://24.16.255.56:8888"); //24.16.255.56  // The database server.
const STUD_NAME = "Sam Brendel";
const STATE_NAME = "LifeStateC";
var bigData = [];

window.onload = function () {
    console.log("Starting up client sheild...");

    // Catches messages from the server.
    socket.on("message", function (obj) {
        if (obj.message) {
            console.log("Server Message: " + obj.message);
        } else {
            console.log("No message from server.");
        }
    });

    // Catches the data from the server.
    socket.on("load", function (obj) {
        console.log("Server replied with load.");
        //console.log(d);
        if(obj.data.length > 0) {
            clearBoard();
            for(var i=0; i<height; i++) {
                for(var j=0; j<width; j++) {
                    if(obj.data[i][j].state == alive) {
                        GAME_ENGINE.generation.add(i, j);
                    }
                }
            }
        } else {
            console.error("null data received on load! Length = " + d.length);
        }
    });

    // window.onkeydown = function (e) {
    //     if (e.keyCode === 13) { // the Enter key.
    //         console.log("You pressed the enter key.  Saved to database.");
    //         socket.emit("save", { studentname: STUD_NAME, statename: "testState", data: "craper" });

    //     } else if (e.keyCode === 32) { // space bar.
    //         console.log("You pressed the space bar.  Loaded from database.");
    //         socket.emit("load", { studentname: STUD_NAME, statename: "testState"});
    //     }
    // };

    socket.on("connect", function () {
        console.log("Socket connected.")
    });
    socket.on("disconnect", function () {
        console.log("Socket disconnected.")
    });
    socket.on("reconnect", function () {
        console.log("Socket reconnected.")
    });

};
