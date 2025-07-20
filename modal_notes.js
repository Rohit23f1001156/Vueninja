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


**************************** PROPS IN VUE *********************************************************************

we can pass props from a parent component to a child component
props make code more reusable and modular, so we only have to define the common data at one single place 
we can pass props to a child component using the v-bind directive
the v-bind directive is used to bind a data property to a prop in the child component


************
this.$emit is used to emit an event from a child component to a parent component
this is useful to notify the parent component that something has changed in the child component,
and the parent component can then update its state accordingly


***********
when using click events, if we have click event on parent, then the child also reacts to the click event
like for the modal example, we wanted the modal to close when we click outside the modal, 
but it also gets closed when we click inside the modal, so to avoid this, we can use click event modifiers
eg are: @click.right, @click.alt etc
to solve our problem we use, @click.self

*************
we cant pass the whole form as prop to the modal component, so instead  we use slots
slots are very useful to pass custom templates into a component
so props for simple data, and slots for complex templates
slots are used to pass content from a parent component to a child component
we can use the <slot> tag to define a slot in the child component, and then
we can pass content to that slot from the parent component
rather than having a self closing tag as we have used till now
we now have a separate opening and closing tag for the modal component 

so the custom template defined in the parent component will be passed to the slot in the child component
and the child component can then render that template inside the modal
we can also use named slots to pass multiple templates to a child component 



********** teleport in Vue *********************************************************************
teleport is a feature in Vue that allows us to render a component in a different part of the DOM
this is useful for modals, tooltips, and other components that need to be rendered outside of the normal flow of the document
we can use the <teleport> tag to define a teleport in the child component, and then
we can pass the target element to the teleport
the target element is the element where the component will be rendered
we can use the to prop to specify the target element
the target element can be an id, a class, or any other valid CSS selector
the teleport will then render the component in the target element, and the component will be able to
access the DOM elements in the target element.

eg in my project:
we know that everything is inside the app, which is  <div id="app"></div>, all the files are injected here.
but we can create a new div for the modal, and then use teleport to render the modal in that div
this way, the modal will be rendered outside of the app div, and we can style it.

syntax:
<teleport to=".modals" v-if="showModal2==true">     <!-- replaced div with teleport -->
      <Modal  @close = "toggleModal2">
          <template v-slot:links >
            <a href="#">Sign up now</a>   
            <br>
            <a href="#">More info</a>
          </template>
          <h1>Modal 2 Header</h1>
          <p>Modal 2 text</p>    
      </Modal>      
  </teleport>
*/