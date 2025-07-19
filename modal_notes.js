/*
**********************************   talking about modal-project folder  *************************************************************

inside modal-project folder
node modules folder:
this is where dependencies are stored
package.json file:
this is where the dependencies are listed
package-lock.json file:
this is where the exact versions of the dependencies are stored

main.js file:
this is the main entry point of the application, this where we are rendering the main window
when we mount the app inside main.js, all of the templates inside App.vue are loaded inside the index.html file

assets folder:
this is where the static assets are stored, such as images, fonts, etc.

components folder:
this is where the Vue components are stored, if there are multiple components, they are stored inside this folder

App.vue file:
this is the main Vue component that is loaded in the main window, it contains the main layout of the application

babel.config.js file:
this contains the Babel configuration, which is used to transpile the code to a version of JavaScript that is compatible with older browsers


index.html file:
this is the main HTML file that is loaded in the main window

*************************************    REGARDING VUE   *********************************************************************

LIKE IN JS, WE USED TO USE QUERY SELECTORS TO SELECT ELEMENTS
IN VUE, WE USE THE VUE REFERENCE SYSTEM TO SELECT ELEMENTS(TEMPLATE REFS)
after selecting using template refs, we can access the elements in the script using normal JavaScript methods
we can use the $refs property to access the elements in the script
WE CAN USE THE VUE REFERENCE SYSTEM TO SELECT ELEMENTS IN THE TEMPLATE AND IN THE SCRIPT

*** extra info: by copilot  ***
we can also use the v-model directive to bind the value of an input element to a data property
the v-model directive is a two-way data binding, which means that if the value of the input element changes, 
the data property will also change, and vice versa
we can also use the v-on directive to listen for events on an element, such as a click event
the v-on directive is used to bind an event listener to an element, which will call a method in the script when the event is triggered
we can also use the v-if directive to conditionally render an element based on a data property

*************************************   VUE FILES STRUCTURE   *********************************************************************

Vue files are single file components, which means that they contain the template, script, and style in a single file
the template is the HTML part of the component, the script is the JavaScript part of the component, and the style is the CSS part of the component
the template is defined using the <template> tag, the script is defined using the <script> tag, and the style is defined
using the <style> tag

************************
scoped means that the styles are only applied to the elements inside the component, and not to the elements outside the component
this is useful to avoid conflicts with other styles in the application
how it does this?
it adds a unique attribute to the elements inside the component, and then applies the styles to that attribute
this way, the styles are only applied to the elements inside the component, and not to the elements outside the component
eg: data-v-701ac82d, added to modal in my project

if we want to aplly styles globally, we can create a css file in the assets folder and import it in the main.js file


*/