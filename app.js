/*

we start, by creating a vue app, it is the job of the bue app to control either the full website or a part of it.

with the Vue app var we created, we get access to the method called mount:
mount method tells the app, at what point in the DOM to mount this app.

*/
const app = Vue.createApp({         // we pass an object to createApp method,
    data(){
        return { 
            showBooks: true,                   // return an object from the data method
            //PART3
            books:[
                { title: "The Final Empire", author: "Brandon Sanderson" },  // each book is an object with properties
                { title: "The Well of Ascension", author: "Brandon Sanderson"},
                { title: "Harry Potter and the Philosopher's Stone", author: "J.K. Rowling"},
                { title: "The Hobbit", author: "J.R.R. Tolkien"},
                { title: "The Name of the Wind", author: "Patrick Rothfuss"},
            ]
            
            // PART 1,2
            // title: "The Final Empire",  // this is the data that will be used in the app
            // author: "Brandon Sanderson",  // another piece of data
            // age: 45,  // another piece of data
            // x : 0,
            // y : 0,
        }   
    },
    methods: {                     // we can also define methods in the app
        changeTitle(title){             // this method will change the title
            this.title = title;  // change the title to a new value
        },
        toggleShowBooks(){              // this method will toggle the showBooks variable
            this.showBooks = !this.showBooks;  // if it is true, it will become false and vice versa
        },
        handleEvent(e, data){         // e is the event object that is passed automatically by Vue when an event occurs
            console.log(e);      // log the event object to the console
            console.log(e.type);  // log the type of the event (e.g. mouseover, mouseleave, dblclick)
            console.log("Event");

            if (data){  // if data is passed to the method
                console.log("Data: " + data);  // log the data passed to the method
            }
        },
        handleMouseMove(e){
            console.log("Mouse is moving!");  // log a message when the mouse is moving over the element
            this.x = e.offsetX;  // get the x coordinate of the mouse relative to the element
            this.y = e.offsetY;  // get the y coordinate of the mouse relative to
        }

    }
})
app.mount("#app")   // mount the app to the element with id "app"
console.log("Hello Vue")