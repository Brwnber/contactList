var friends = {
    bill: {
        firstName: "Bill",
        lastName: "Gates",
        number: "405-678-3241",
        address: ["Microsoft Way", "Los Angeles", "CA", "98710"],
    },
    steve: {
        firstName: "Steve",
        lastName: "Jobs",
        number: "934-0912-5343",
        address: ["Apple Rd", "San Franscisco", "CA", "95412"],
    },
    linus: {
        firstName: "Linus",
        lastName: "Torvalds",
        number: "645-213-4555",
        address: ["Linux Blvd", "New York", "New York", "10856"],
    }
    
}

friends.list = function() {
    for (let key in this) {
        console.log(this[key]);
    }
}

friends.search = function(searchName) {
    for (var key in this) {
        var friend = this[key];
        if (friend.firstName === searchName) {
            console.log(friend);
        }
    }
}

friends.search("Steve");
friends.list()