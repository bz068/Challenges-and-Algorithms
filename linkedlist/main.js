const LinkedList = require("./app");

let l = new LinkedList();
l.insertLast(1);
l.insertLast(2);
l.insertLast(3);
l.insertLast(4);
l.insertLast(5);
l.insertLast(1);

l.removeAt(4);
