/**
 * Javascript primitives:
 * undefined, null, boolean, number or string
 */
'use strict';

var A = function(song) {
    this.song = song;
}

A.prototype.printSong = function() {
    console.log(this.song);
}


var B = function(theSong) {
    var song = theSong;

    function printSong() {
        console.log(song);
    }

    return {
        printSong: printSong
    };
}

//new A('song').printSong();
//new B('queen').printSong();

function run(Class, label) {
    var i = 0;
    var start = Date.now();
    var end = 0;
    var clazz;

    console.log(`Running ${label}`);

    for (i = 0; i < 1000000; i += 1) {
        // NOTE. Changing the Class for one of the declared classes increases
        // the execution time.
        // clazz = new A('song');
        clazz = new Class('song');
    }

    clazz.printSong();
    end = Date.now();

    console.log(`${end} - ${start} = ${end - start}`);
}

class C {
    constructor => (song) {
        this.song = song;
    }

    printSong() {
        console.log(this.song);
    }
}

run(A, 'prototype');
run(B, 'function');

var c = new C('nook');
