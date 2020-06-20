// structure of TypeScript/JavaScript classes, their respective constructors and their display() function(s) 
class Locations {
    created : any;
    name : string;
    city : string;
    zipcode: number;
    address: string;
    image: any;

    constructor(created, name,city,zipcode,address,image) {
    this.created = created;
    this.name = name;
    this.city = city;
    this.zipcode = zipcode;
    this.address = address;
    this.image = image;
    }

displayLoc(){
    return `
    <div class="col-sm-12 col-md-6 col-lg-3">
        <div class="card mb-4 bg-secondary text-white">
        <img src="${this.image}" class="card-img-top img-same d-none d-md-block" alt="...">
            <div class="card-body">
            <p class="float-right"><b>Created: </b>${this.created}</p><br>
            <p></p>
            <h4 class="card-title">${this.name}</h4>
            <p><b>City:</b> ${this.city}</p>
            <p><b>ZIP-Code:</b> ${this.zipcode}</p>
            <p><b>Address:</b> <br>${this.address}</p>
        </div>  
    </div>
    </div>`
    }
}

class Restaurants extends Locations {
    tel: any;
    type: string;
    website: any;

    constructor(created,name,city,zipcode,address,image,tel,type,website) {
	    super(created,name,city,zipcode,address,image);
		this.tel = tel;
		this.type = type;
        this.website = website;
    }

displayRest(){
    return `
    <div class="col-sm-12 col-md-6 col-lg-3" >
        <div class="card mb-4 bg-success text-white">
        <img src="${this.image}" class="card-img-top img-same d-none d-md-block" alt="...">
            <div class="card-body">
            <p class="float-right"><b>Created: </b>${this.created}</p><br>
            <p></p>
            <h4 class="card-title">${this.name}</h4>
            <p><b>City:</b> ${this.city}</p>
            <p><b>ZIP-Code:</b> ${this.zipcode}</p>
            <p><b>Address:</b> <br>${this.address}</p>
            <p><b>Phone:</b> ${this.tel}</p>
            <p><b>Type:</b> ${this.type}</p>
            <p><b>Website: </b><a class="text-white" href="${this.website}">Web</a></p><br>
            </div>
        </div>
    </div>`
    }
}

class Events extends Locations {
    eventdate: any;
    eventtype: string;
    ticketprice: any;

    constructor(created,name,city,zipcode,address,image,eventdate,eventtype,ticketprice) {
        super(created,name,city,zipcode,address,image);
        this.eventdate = eventdate;
        this.eventtype = eventtype;
        this.ticketprice = ticketprice;
    }

displayEven() {
        return `
        <div class="col-sm-12 col-md-6 col-lg-3" >
        <div class="card mb-4 bg-info text-white">
        <img src="${this.image}" class="card-img-top img-same d-none d-md-block" alt="...">
                <div class="card-body">
                <p class="float-right"><b>Created: </b>${this.created}</p><br>
                <p></p>
                <h4 class="card-title">${this.name}</h4>
                        <p><b>City:</b> ${this.city}</p>
                        <p><b>ZIP-Code:</b> ${this.zipcode}</p>
                        <p><b>Address:</b> <br>${this.address}</p>
                        <p><b>Event Date:</b> ${this.eventdate}</p>
                        <p><b>Event Type:</b> ${this.eventtype}</p>
                        <p><b>Ticket Price :</b> <br>${this.ticketprice}</p>
                </div>
        </div>
        </div>`
}
}

var locData = new Array();
// name,city,zipcode,address,image
locData[0] = new Locations("June 1,2020 19:00","AzW", "Vienna", 1070, "Museumsplatz 1",  "img/azw.jpg");
locData[1] = new Locations("June 2,2020 19:00","Kunsthalle", "Vienna", 1070, "Museumsplatz 1", "img/kunsthalle.jpg");
locData[2] = new Locations("June 3,2020 19:00","LeopoldMuseum", "Vienna", 1070, "Museumsplatz 1", "img/leopold.jpg");
locData[3] = new Locations("June 4,2020 19:00","Tanzquartier", "Vienna", 1070, "Museumsplatz 1", "img/tqw.jpg");

var restData = new Array();
// name,city,zipcode,address,image,tel,type,website 
restData[0] = new Restaurants("June 5,2020 19:00","Biosk", "Vienna", 1070, "Museumsplatz 1", "img/biosk.jpg", "01 5854890", "Icecream", "https://www.facebook.com/BIOSKMQ")
restData[1] = new Restaurants("June 6,2020 19:00","Corbaci", "Vienna", 1070, "Museumsplatz 1", "img/corbaci.jpg", "0664 7363 0036", "Urban", "https://corbaci.at") 
restData[2] = new Restaurants("June 7,2020 19:00","Glacisbeisl", "Vienna", 1070, "Museumsplatz 1", "img/glacis_beisl.jpg", "01 5265660", "Viennese", "http://www.glacisbeisl.at")
restData[3] = new Restaurants("June 8,2020 19:00","Kantine", "Vienna", 1070, "Museumsplatz 1",  "img/kantine.jpg", "01 5238239", "Comfort Food", "http://www.mq-kantine.at")

var evenData = new Array();
// name,city,zipcode,address,image,eventdate,eventtype,ticketprice 
evenData[0] = new Events("June 13,2020 19:00","Cybernetics", "Vienna", 1070, "Museumsplatz 1", "img/cybernetics.jpg", "<br>Dec 4, 2020 - Feb 3, 2021", "exhibition", "8€",)
evenData[1] = new Events("June 10,2020 19:00","Misfitting", "Vienna", 1070, "Museumsplatz 1", "img/misfitting.jpg", "<br>July 1, 2020 - Jan 6, 2021", "exhibition", "13€", )
evenData[2] = new Events("June 12,2020 19:00","WAMP Market", "Vienna", 1070, "Museumsplatz 1", "img/wamp.jpg", "<br>September 19, 2020", "market", "free")
evenData[3] = new Events("June 11,2020 19:00","Nippon Nation", "Vienna", 1070, "Museumsplatz 1", "img/nipponnation.jpg",  "<br>August 13-15, 2020   ", "convention", "42€")


// looping functionality to display the objects saved in the array 
for (let i=0; i<locData.length; i++){
    $("#loc").append(`${locData[i].displayLoc()}`)
}

for (let i=0; i<restData.length; i++){
    $("#rest").append(`${restData[i].displayRest()}`)
}

for (let i=0; i<evenData.length; i++){
    $("#even").append(`${evenData[i].displayEven()}`)
}

