// What is common to a place, event and restaurant? A location. Since you know about classes, you decided that your base(main) class Location should hold information about the city, ZIP-code, address (single line like “Kettenbrueckengasse 23”), and a teaser image. That base class has the function display() which is used for displaying the object’s properties on the screen as HTML.

// A restaurant must also display a telephone number, type (“chinese”, “indian”, “viennese”, …)  and a web address. Restaurant objects inherit their basic properties (like ZIP-code) from the Location class. The display function must of course be updated.   

// Same goes for the events - they have their additional properties like EventDate (“12.10.2020”) and EventTime (“17:00”) and ticket price (in EUR) that also need to be displayed in addition to the base class’ location properties.  

// you need to create a structure of TypeScript/JavaScript classes, their respective constructors and their display() function(s) that will display the relevant data of places, events and restaurants that you have visited.


// Regular points:
// (5 points) Creation of a GitHub project (Repository name: CFLMS-YourName-CodeReview-06), successful “push” to the repository and correct information to CodeFactory through the learning management system (https://lms.codefactory.live/) with the GitHub link for the cloning procedure.

// (15 points) Create a data model of Location based on the specification above.

// (20 points) Create at least 2 location objects by invoking a constructor call and save them in an array (class constructors usage is mandatory, do not use JSON and parsing).

// (10 points) Add the display() function to the Location class that can display Location objects as an HTML string. Use Bootstrap to solve design and responsiveness issues in an easy manner.

// (10 points) Use looping functionality to display the objects saved in the array on the screen.

// (20 points) Create the classes Restaurant and Events with their respective properties. Invoke constructors, and save resulting objects in the same array used for the location objects. Check the rendering (i.e. how you display it).  

// (10 points) Create a display() function for the classes Restaurant and Event respectively. display() is capable of displaying relevant information of its class as an HTML. Again, use Bootstrap to solve design and responsiveness.

// (10 points) Assure that rendering of the array is done in the following manner: for small screens, you see the teaser of one object (without the image) in a row. On medium screens, you see two objects in a row (with image). On large screens, you see four objects in a row (with image).

// Bonus Points:
// (10 points) You have decided to add additional date/time for every location that you visited. You add that information “Created: 24.10.2020 12:45” to the respective teaser displays.

// (10 points)  You want to use the newly added entry to add two additional pages to your system index-asc.html  and index-desc.html Those pages are sorting the array of locations (places, events, restaurant) ascending/descending based on the “Created” date/time property.

class Locations {
    name : string;
    city : string;
    zipcode: number;
    address: string;
    image: any;
    // created: 24.10.2020 12:45;

    constructor(name,city,zipcode,address,image) {
    this.name = name;
    this.city = city;
    this.zipcode = zipcode;
    this.address = address;
    this.image = image;
    }
}

class Restaurants extends Locations {
    tel: string;
    type: string;
    website: any;

    constructor(name,city,zipcode,address,image,tel,type,website) {
	    super(name,city,zipcode,address,image);
		this.tel = tel;
		this.type = type;
        this.website = website;
    }
}

class Events extends Locations {
    eventdate: string;
    eventtype: string;
    ticketprice: any;

    constructor(name,city,zipcode,address,image,eventdate,eventtype,ticketprice) {
        super(name,city,zipcode,address,image);
        this.eventdate = eventdate;
        this.eventtype = eventtype;
        this.ticketprice = ticketprice;
    }
}

var placesData = new Array();
// name,city,zipcode,address,image > 5 arguments
placesData[0] = new Locations("Eiffel Tower", "Paris",  75007, "5 avenue Anatole France", "img/eiffel.jpg")
placesData[1] = new Locations("St. Stephens Cathedral", "Vienna, Austria",  1010, "Stephansplatz 3, 1010 Wien", "img/stephansdom.jpg")
placesData[2] = new Locations("Chichen Itza", "Yucatán, Mexico",  "unknown", "unknown", "img/mayatemple.jpg")
placesData[3] = new Locations("Broadway Theatre", "New York City",  10036, "Theater District, Manhattan", "img/broadway.jpg")

var restaurantData = new Array();
// name,city,zipcode,address,image,tel,type,website > 8 arguments
restaurantData[0] = new Restaurants("DO & CO Restaurant", "Vienna, Austria", 1010, "Stephansplatz 12", "img/doco.jpg", "01 5353969", "Luxury", "https://www.docohotel.com")
restaurantData[1] = new Restaurants("TGI Fridays", "Vienna, Austria", 1010, "Schubertring 13", "img/tgi.jpg", " 01 7148995", "Fast Food", "https://www.tgifridays.at/")
restaurantData[2] = new Restaurants("La Rive", "Amsterdam, Netherlands", 1018, "Professor Tulpplein 1", "img/rive.jpg", "+31 20 520 3264", "Upper Class", "https://www.restaurantlarive.nl")
restaurantData[3] = new Restaurants("Schweizerhaus", "Vienna, Austria", 1020, "Prater 116", "img/schweizerhaus.jpg", "01 7148995", "Traditional Austrian Food", "http://www.schweizerhaus.at")

var eventData = new Array();

// name,city,zipcode,address,image,eventdate,eventtype,ticketprice --> 8 arguments
eventData[0] = new Events("Cybernetics of the Poor", "Vienna", 1070, "Museumsplatz 1", "img/lenny.jpg", "December 4, 2020 - January 31, 2021", "exhibition", 8)
eventData[1] = new Events("Misfitting Together", "Vienna", 1070, "Museumsplatz 1", "img/tomorrowland.jpg", "July 1,2020 - January 6, 2021", "exhibition", 13)
eventData[2] = new Events("Nippon Nation", "Vienna", 1070, "Museumsplatz 1", "img/donauinselfest.jpg", "convention", "August 13-15, 2020", 42)
eventData[3] = new Events("WAMP Design Market", "Vienna", 1070, "Museumsplatz 1", "img/alpaka.png", "September 19, 2020", "market", 0)
