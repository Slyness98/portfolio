const Data = [
  {
    skillName: "JavaScript",
    gradient: "linear-gradient(45deg, rgb(255, 147, 5) 0%, rgb(242, 206, 2) 34%, rgb(255, 179, 0) 100%)",
    image: "./images/thumbnails/skillbtns/js.png",
    details: [
      `Say what you will about the syntax, dynamically-typed nature, and unique quirks of JavaScript, but it is the backbone of the web.
       As with any task, it's all about using the proper tool for the job and when it comes to web development JS has most certainly 
       matured into that. 
      `,
      
      `The evolution of this language is unlike that of any other. From it's early and juvenile days when the first versions of ECMAScript
       were being drafted, to its wide adoption at the peak of Internet Explorer in the early 2000s (remember that annoying pop up asking you if
       you'd like to enable JavaScript), to somewhat of a renaissance period triggered by AJAX and JQuery, and past circa 2008 with the 
       release of Google Chrome and its V8 JavaScript Engine, JS has become unrecognizable compared to where it was at its 
       inception.`,
       
      `While still often written off as a 'toy-language' by some who haven't taken the time to learn the modern features of the language,
       ES6(released back in 2015) really changed the game. New syntax for imports, functions, and objects made 
       reading and writing JS even simpler; arrow functions and especially the spread(...) operator for objects have made a 
       world of difference. Template literals have made string interpolation a breeze. Class support was finally added as well. 
       Also, chief among the new additions came the advent of promises; a convenient replacement of XMLHttpRequests.`,

       `Those features have only improved over sebsequent ECMAScript releases. Promises written with the fetch API are easily chained 
        together. Promises have even been given syntactic sugar (via the async...await keywords) to make that asynchronous code look more 
        synchronous. It's a tremendous accomplishment to have that boilerplate shell of async...await take all of about five lines of 
        code in order to make a request to fetch external resources.`,

      `All of this to say that JS has become an incredibly concise, powerful, and extensible language in its own right even without 
       all of the modern frameworks that have taken the web development community by storm over the last half decade. That's quite a 
       remarkable evolution for a language originally slapped together in ten days, never designed or intended to be used as it is now.
       I, for one, am excited to keep up with it as it continues to evolve.`
    ]
  },
  {
    skillName: "React",
    gradient: "radial-gradient(circle, rgb(11, 32, 40) 0%, rgb(2, 14, 18) 93%, rgb(0, 150, 163) 100%)",
    image: "./images/thumbnails/skillbtns/react.png",
    details: [
      `The web development community has been flooded with a wealth of JavaScript frameworks over the better part of the last decade.
       After tinkering around with a couple of them after I first learned the basics of vanilla JS, I felt inclined to stick with React... 
       and why not? When I was first getting started JS was experiencing a monumental shift and React was the cool new kid on the block.
       It was an attractive solution to break your UI down into manageable components that update independently, only when they need to, 
       without a page refresh. I decided to pick a framework and stick with it rather than split my time up between several of them. 
       They all propose their own unique solutions for at least the 'view' in the MVC pattern, if not fully end-to-end, but staying 
       with React has allowed me to specialize and keep up to date with its unique implementation. So much has changed.`,

       `State used to have to be set in a class component's constructor(). There was no supported way of adding state 
        to a functional component and any side effects had to be dealt with in explicit lifecycle methods belonging to a certain phase. 
        The lifecycle of a component is fairly easy to grasp, but the way one taps into it differs between
        functional components and class components. There are three main phases of a component's lifecycle. Those phases are mounting,
        updating, and unmounting. The render method (or a return statement in functional components) is the only required method of any component. 
        It contains JSX which compiles to the actual HTML rendered into the DOM.`,

       `For the mounting phase, the main lifecycle methods utilized 
        by a class component are the constructor() of the class itself, componentDidMount(), and render(). Additionally, there is a method 
        called getDerivedStateFromProps() exposed both in the mounting phase and the updating phase. This one is used less often, but it will run 
        directly before render() and trigger an update if the props passed to the component change. 
        The updating phase additionally carries componentDidUpdate() as its main lifecycle method, and exposes the lesser used 
        shouldComponentUpdate() and getSnapshotBeforeUpdate(). The snapshot is passed to componentDidUpdate() as an optional third argument if used
        and is only ever used when you need to measure some part of the current DOM before it changes again. shouldComponentUpdate() is a little more
        self explanatory, and exists as a performance optimization in certain rare circumstances to determine if it's necessary to 
        trigger a re-render based on a change of props or state. It is less of a guaruntee of re-render prevention and more of a suggestion to React.
        The unmounting phase is the most straightforward and only utilizes componentWillUnmount(). As implied, this is called directly before unmounting
        and it is used for subscription cleanup, cancelled requests, and other similar cleanup processes.`,

       `...Did you get all that? Great, because it's all just as relevant in React functional components. But instead of all of those individual
       lifecycle methods we now have "hooks"! What's a hook? Conceptually, you can quite literally think of it as what allows a functional component 
       to 'hook' into state and certain points of its lifecycle.... and it's a lot more concise than its class counterpart! Take all of those main lifecycle methods, mounting and
       unmounting, and updates based on certain prop and state changes, and throw it all in a useEffect() hook! The anatomy of useEffect() might be 
       confusing at first, but essentially it comes in three parts. A function as the first argument, and a dependency array [] as the second. The 
       function body envokes the behavior of the mounting phase and componentDidMount(); Its return statement envokes the behavior of componentWillUnmount().
       Set up subscriptions and clean them up just as you would in a class component. The dependency array acts as the updating phase and is 
       passed whatever prop(s) you wish to perform some side effect with when said prop(s) changes.`,

       `That covers a broad overview of the lifecycle implementation of functional components. There's still useState() which, obviously, allows for the 
       addition of state to a functional component, which was previously impossible. There's useRef(), for when you need node references and need to watch
       a value wihtout triggering a re-render on change. Recurring tasks can be extrapolated into custom hooks. For example, I've created my own useKeyPress() 
       hook for mapping functions to keys that will trigger when any of the provided keys in the array are pressed with the option of having functions
       fire once per press or for as long as it is held down. React-Use is an entire library of hooks, with some really interesting ones such as useGeoLocation()
       and useIntersectionObserver()... the possibility for useful extrapolations are nearly endless. You are not limited to just one of each hook either; 
       use as many as you need and split up unique side effects into their own hooks.`,

       `All of this barely scratches the surface of all the ins and outs of react. There's too much about this framework to cover, and it's only going to 
        change even more substantially with a focus on Server Side Rendering to take the workload off of the client. But I've grown to love react's 
        solution of utilizing a virtual DOM to compare with the DOM and compare the object that is either the class or functional component itself to
        identify changes, which then tells it what needs to update independently of other UI elements.`
    ]
  }, 
  {
    skillName: "Redux",
    gradient: "linear-gradient(90deg, rgb(86, 67, 137) 0%, rgb(74, 47, 101) 100%)",
    image: "./images/thumbnails/skillbtns/redux.jpg",
    details: [
      `State management has always been a heavily involved topic and there are a slough of considerations to take into account when
      picking which state management strategy is appropriate for your project/application/service. Solutions outside of what react 
      originally offered have presented themselves over the last several years. Small projects with less complicated needs may just 
      leverage what react has always offered or, perhaps, also utilize its Context API to help make playing within the construct of 
      one-way, top-down data flow more convenient, predictable, and maintainable. Redux is another such solution that is a reliable, 
      battle-tested library for projects that require complex synchronicity between several components that are often reliant on 
      dynamic data that can't always be predictable. Thus, edge-cases and variations of (un)successful network requests present 
      themselves and need to be handled by the application in an acceptable manner. Redux is popularly used
      in conjunction with react, but it can be included in stacks utilizing a different framework all the same.`,

      `Top-down, one-way data flow is a core principle of react; a philosophy it shares with the Flux pattern (that makes sense, as 
       both were introduced by Facebook and flux was the design pattern that emerged from Facebook's efforts to make react state 
       manageable). Redux is simply a flux implementation with a top-level 'store' object; a state container that 
       wraps around an entire application. Components throughout the application tree can read from this store object without requiring the 
       information relevant to them be passed explicitly via props from parent components (or from even higher up 
       the tree via cumbersome prop drilling).`,

      `The store itself is a read-only object. Data is not directly mutated by components via calls to setState() or useState(). 
      Rather, specific 'actions' are created as objects containing a 'type'; a set label describing the action to trigger.
      Those actions are passed by a centralized manager called a 'dispatcher', which, in the flux pattern itself, 
      is what notifies individual stores that subscribe to that data that there's been change they care about. 
      The convention in Redux's implementation, however, is a single store and as such, dispatching is largely baked into the API and
      just requires a call to redux's provided dispatch() method.`,
      
      `Dispatched actions flow through a 'reducer'. A reducer can be thought of as a function in charge of a slice of the store's state. 
      When an action is dispatched to a reducer, the reducer calculates a new copy of state based on the action type specified and the function tied to that action. 
      The old state is replaced with the copy containing the change in state and is then supplied to the store. In this way, 
      the state contained by the store is immutable. 
      `,

      `That's a semi-involved pattern; one that adds overhead to the codebase and comes with a mid-sized learning curve... and that's the trade-off
       that needs to be considered amongst teams on individual projects. If the needs are anything advanced, or requires a lot of communication 
       between multiple components throughout the tree in tandem, it is a worthwhile option to consider. What you sacrifice in short term
       productivity is made up for later with easier testability and maintainability of existing features, allowing for focus on adding
       features instead of messy debugging and fear of breaking unrelated bits of code. On the other hand, maybe redux is overkill for
       the project. React's Context API does wonders for lifting state up and avoiding prop-drilling. Combined with some pre-planning of 
       what components rely on the same pieces of state, redux may be unneccessary.  
       `
    ]
  },
  {
    skillName: "Redux-Saga",
    gradient: "linear-gradient(180deg, rgb(56, 143, 104) 0%, rgb(28, 63, 54) 2%, rgb(148, 148, 148) 3%)",
    image: "./images/thumbnails/skillbtns/redux-saga2.png",
    details: [
    `Redux provides a structured pipeline for managing changes to state, but often times the actions
    that we want to make involve side effects and by nature those side effects break the purity of the reducer functions that make
    redux so valuable to state synchronicity and predictability. If reducers aren't the place to make API calls, authentication requests,
    customizing and managing effect call behavior, and imperitively triggering additional actions, where is the appropriate place to include all
    of these side effects? Enter redux-saga; a side-effect manager in the form of generator functions that yield objects refered to as 
    'effects'.`,

    `Any useful application is going to heavily involve side-effects. Reaching out and integrating is what makes a real-world application 
    worth using. The generator functions(sagas) don't actually call out to anything just yet; rather the 'effect' objects they yield are instructions for 
    the saga describing how to make those calls. This is an important distinction. Unlike regular functions, generator functions do
    not necessarily run all contents contained in their scope at once. Instead they can be stopped and resumed at will. This, 
    combined with attaching calls to APIs to the resulting effect object instead of calling them directly in the function body, gives teams a 
    powerful option for managing effects concurrently, racing effects, or perhaps conditionally dispatching further actions to reducers based on some
    resolved asynchronous action.`,
    
    `The fact that instructions are what is yielded vs. executing the actual effects right away, as well as having these effects
     managed by a fairly simple API with only a handful of commands, also makes these complex asynchronous tasks more testable. Really, there's
     just a need to test that the effect object yielded was composed as expected. When feeding customized functions via saga's call() , 
     those functions should have already been unit tested individually anyways. Running the saga as a whole instead of stopping and starting to
     check the yield at each step makes tests less brittle. Personally, I found this to be counter-intuitive when I was first started 
     learning about sagas and how to test them. I felt an urge to unit test each step of the generator because that's been the mantra I've been exposed to 
     with writing other tests; test small pieces at a time. Be concise and thorough with edge cases and errors. But upon further research (and after 
     getting sick of calling .next() a hundred times over), by and large it is best to test a saga as a whole and just let it run. Testing per yield 
     may make tests fragile as order of operations, but not necessarily output, change.`
    ]
  },
  {
    skillName: "Web Components",
    gradient: "radial-gradient(circle, rgb(170, 170, 170) 92%, rgb(29, 60, 98) 93%, rgb(43, 184, 15) 96%, rgb(0, 0, 0) 100%)",
    image: "./images/thumbnails/skillbtns/webcomponents2.jpg",
    details: [
      `Everybody has their favorite front-end frameworks. But that requires all of us to draw a line in the sand 
       between what the browser natively understands and our own implementation... Say hello to 'Web Components'; 
       a cross-browser, framework-agnostic way to develop UI components as classes that extend the HTMLElement interface.`,
      
      `Frameworks are a great help and we're all comfortable with at least one of them... but now the team as a whole, the project manager,
      or whomever else is calling the shots wants to switch gears and try that hot new framework that came out six months ago and has 
      gained recent traction.... That's cool and most developers, including myself, are all for trying out new tools. But damned if 
      I want to make that carousel component that I just finished on the last project from scratch again. With web components, the 
      components that are written are natively understood by the browser. They're just ES6 Classes. Make your own HTML tag; 
      <profile-image>, <carousel>, or whatever else you want to define. This way, you can plug it into whatever framework you wish; 
      No need for a total re-write.`,

      `But if these components are natively understood just as well as any other HTML tag, what about keeping their behavior encapsulated,
      especially as the codebase starts to utilize third-party libraries/services? Don't worry! The same shadowDOM that you may know as
      the thing that made authoring your custom scrollbar implementation harder than it should have been, or gets in the way of some 
      custom video UI, or the thing that <iframe>s render from is also the same shadowDOM that is going to keep your web component
      encapsulated.`,

      `The shadowDOM functions essentially the same way as the DOM, but a web component with an attached shadowDOM instance is an isolated 
      container with a DOM of its own. Stylesheets/classnames used in the component don't leak out and affect the rest of the document 
      that the component is actually rendered in. This sounds like it would take some effort to set up but it is as easy as instantiating
      any new element you wish and calling attachShadow({ mode: open }) on that element's reference. The mode property's 'open' value 
      indicates that the shadow host node belonging to the original DOM can be referenced by the JavaScript that runs in the original DOM.
      If 'closed' is specified, there will be no way to further access and manipulate the web component from the DOM it was rendered into.`,

      `Awesome! So we should just convert everything into web components and ditch frameworks altogether!... well not so fast. It's not 
      either/or and I for one know that I'd miss out on all of the pros my prefered framework has to offer. Svelte, react, vue, or angular, 
      it doesn't matter. They can all play nicely and add to the behavior of the web components we make; Plug, play, and extend.`,
      
      `The real tradeoff between web components and just following the regular conventions of whatever framework you usually use is that 
      making them involves some repetitive, semi-verbose setup that can bloat some files. The decision to make a web component also 
      depends on how comfortable everybody touching the code is using nothing but vanilla JS and sticking to Classes; and I'm not just 
      talking knowledge but mostly preferences and willingness to commit to maintaining and writing elements in that manner.`
  ]
  },
  {
    skillName: "Node.js",
    gradient: "radial-gradient(circle, rgb(165, 165, 165) 0%, rgb(101, 164, 126) 2%, rgb(165, 165, 165) 2%)",
    image: "./images/thumbnails/skillbtns/nodejs2.png",
    details: [
      `JS was growing as an ecosystem already with ECMAScript releasing a brand new major version and Google Chrome dropping onto 
      the market with its new V8 JS engine. Soon after, Node.js, a JS runtime environment, came onto the scene in 2009. Broken down, 
      it's a C Program that acts as a shell for the V8 Engine so that JS may run outside of the browser. This really drove the 
      exponential growth of JS that we've experienced for more than a decade now, both as a language and as an ecosystem that can 
      exist independant of a browser.`,

      `As it's its own runtime environment, Node.js made it possible for servers to be scripted in JS. It wasn't the first server-side JS environment,
      but it was the first one with considerable widespread success across operating systems, presenting viable performance for the
      growing needs of web applications. It opened a whole new can of worms for the JS ecosystem and the web as a whole. Devs no 
      longer have to entirely switch gears and write in another language when working on the server vs. the client.`,

      `While JS doesn't have file I/O built into the language, Node.js provides its own 'fs' (file system) module. This provides a
       way to create, read, update, and delete files with JS and plugs a big hole in its viability as a back-end language. Additionally,
       it encourages creating child processes that branch off as new threads, which pool together into the 'worker pool', helping to
       free up the main thread for load balancing, taking advantage of the multiple cores the local machine has to offer.`,

       `However, balancing threads across multiple cores isn't done directly, of course. Node features a single-threaded event loop. 
        When at all possible, Node utilizes asynchronous system APIs available to it. When those aren't available for a certain task,
        node utilizes the libuv library in order to branch off and create a new thread. Libuv pools 
       the threads together into what's refered to as the 'worker pool' and helps handle the asynchronous I/O operations in a manner 
       that doesn't block the main thread of the event loop. Depending on your needs, you can specify a larger pool size and the OS 
       you are using can be left to determine how to distribute thread loads across the cores your machine has available, as is its charge.`, 

      `Alternatively, you can take a more involved, yet still indirect, approach and utilize node's 'cluster' module, which 
       will spawn individual child Node processes with a main thread and seperate event loop of their own. Of course, being that they are
       seperate, individual processes of Node.js that does mean you're entirely disconnected from the other actions occuring in the original
       process's main thread. Essentially, you can think of it as being tantamount to spawning a seperate server entirely... which may
       be desirable for your use case or it might not be. Keep in mind spinning up new child processes entirely is expensive to your machine
       and in order to keep communicate between them you'd have to create your own implementation with c++ add-ons as well as have a working knowledge of
       the V8 engine in depth... certainly not an easy, cheap, or probably worthwhile way to go about things. It should only be used when
       a seperate process for a labor-intensive task is desirable.`,

       `Instead, Node presented an alternative that addresses the concern of having access to a thread, but still preserving the ability to 
       communicate the results of the tasks ran by that thread to the main thread by keeping it all in the same process. We don't manage tasks 
       like Node does automatically with libuv; it's just a library that Node uses to keep the main thread unblocked by tasks that have no 
       asynchronous sytems API available for Node to take advantage of, thereby necessitating Node to make its own with help from the libuv library. 
       All of this is managed for us. If we need explicit access to the thread being added to the worker pool via JS but we don't want to lose 
       communication back to the main thread by creating an entirely new process with 'cluster', we'll have to go about it a different way. One can 
       also use the 'worker_thread' module and instantiate a new Worker class. That Worker instance will be added to the worker pool. Results of the
       task can still be relayed to the main thread because its all still part of the same process.`,
    ]
  },
  {
    skillName: "Express.js",
    gradient: "linear-gradient(0deg, rgb(81, 189, 88) 1%, rgb(0,0,0) 2%, rgb(206, 206, 206) 3%,rgb(206, 206, 206) 96%, rgb(0, 0, 0) 96%, rgb(81, 189, 88) 100%)",
    image: "./images/thumbnails/skillbtns/express.png",
    details: [`As with all great new tools, devs tinker with it and immediately want to make it more convenient; hence a new abstraction layer is born 
    via a new framework. Such is the case with Node.js and the most popular framework associated with it, Express.js. Express is a thin, unopinionated 
    framework for building out the server-side of web applications. It contains a handful of methods for easily managing HTTP requests and responses, 
    error handling those requests, page routing and associated route handles, and ultimately, is used for building APIs.`,

    `The express framework streamlines working with client request bodies and structuring the server's response to those requests. It exposes a small API
     that logically and syntactically lines logical URL endpoints up really well with implementing basic CRUD operations with respect to the HTTP methods
     that complement those operations (i.e Create, Read, Update, Delete => POST, GET, PUT, DELETE). Although, one shouldn't dogmatically equate 
     'Update' with 'PUT'. The appropriate usage when 'Updating' depends on aligning what you truly intend to have happen by 'Updating' to the true 
     difference between the POST and PUT methods, which is that a PUT request lacks additional side effects triggered by successive, repeat requests where as
     POST implies additional side effects after repeating the same request. So ask, should this update action trigger additional side effects if it is 
     repeated?  `, 
     
     `The objects exposed by Express's API are easy enough to utilize and compose server endpoints and middleware. By convention, declare a variable 'app', 
      which is an instance of express(). From there, the basic endpoint looks like 'app.HTTPMETHOD('URLpathname', function (req, res) {callback})'. 
      Broken down, app.HTTPMETHOD is one of several methods named after, and corresponding to, the HTTP method you want to use to execute the callback 
      function you provide. That callback is executed when a request is made to the matching URL endpoint via the same HTTP method.`,
      
      `The 'app' object also has a .use() method for utilizing middleware. Middleware is just functions that run in between the request/response lifecycle.
      Middleware can also be scoped to matching URL pathnames and involves pretty much the same syntax as composing app.METHOD endpoints. However, there 
      are extra considerations to make when composing middleware. The order in which blocks of middleware functions are placed is important to execution order
      of matching routes. Also, on emust call next(), the third parameter passed to .use(), in order to pass route control on to the next matching handle.
      There are many more methods belonging to express's app object, but this is the core of developing with express.`,
     
     `Express also lends itself well to lining up with the REST architectural pattern (REpresentational State Transfer). However, many APIs that claim to 
      be RESTful don't really go the full distance in being a REST API. Many are just simply APIs mapping CRUD operations to complementary 
      HTTP methods and the buck stops there. They don't actually adhere to the last bit of REST's philosophy and that is the 'State Transfer' portion. REST
      stresses that hypermedia drives application state; the API presents related resources/actions to its consumer as actions are completed. The consumer 
      may follow through with those actions and in turn that drives the 'Transfer' of the application's 'State' over time. For example,
      if I request to book a doctor's appointment online, a RESTful API may go about its business to complete the action, and when it is done present the option
      to re-schedule the appointment ('Update' the record) or cancel it altogether ('Delete' the record).`,
      
     `The former point might seem like a nitpicky distinction to make, but its effect can be felt when the team designing the API is not part of the 
      same organization developing the client. When a team is implementing both client and "RESTful" API, they can skimp on driving application state 
      solely via the RESTful API. You can drive the state of an application client-side instead, only relying on data from/to the server to populate
      it/interact with it. When developing APIs in a RESTful style as a third party that other clients are consuming, one can't make such assumptions 
      about what that client is doing with the data and must rely on the options that it, itself exposes to drive the transfer of state across 
      its RESTful service.`
  ]
  },
  {
    skillName: "Handlebars",
    gradient: "linear-gradient(270deg, rgb(207, 142, 104) 1%, rgb(0, 0, 0) 2%, rgb(187, 197, 170) 3%)",
    image: "./images/thumbnails/skillbtns/handlebars.png",
    details: [
      `Sometimes there are benefits to leveraging a server-side rendering approach, either in partnership with or completely in lieu of a 
      client-side rendering approach. For those times, we have templating engines to pre-render the view for the client. Handlebars is one such engine 
      (another one I've grown fond of, and am even starting to prefer is EJS).`,

      `Working with either handlebars or EJS is a breeze when utilizing Express.Js. Simply take your 'app' instance and set the 'view engine' like so;
      app.set('view engine', 'hbs'). This is the setting for handlebars, but you could just as well swap out 'hbs' for 'ejs'. Set up a couple more 
      configurations with app.engine(), like public directory where static CSS resources are kept, and the root directory of where these template files 
      are kept and you're pretty much good to go. From there, simply set up endpoints with app.get(), take the response object, and res.render() with the name of the template from the directory you keep template files in. 
      I.e "app.get('/about', (req, res) => {res.render('about')})" refers to a file in your template directory called about.hbs.`,

      `The template contains an html-like syntax, but with placeholders delineated by double-brackets {{ }} (hey, those kinda look like handlebars!). These
       handlebars denote what data should be plugged into the template. The data to be plugged in is evaluated by the server and is then sent as
       pre-rendered HTML to the client so that the client has less work to do on the initial load of a page. This also comes with the added advantage of 
       browsers being able to crawl your site in a meaningful way, giving a boost to your SEO rankings.`,
       
       `Crawling and indexing of sites that use a CSR approach for rendering their view is better than it was in the past but still enjoys
       nowhere near the same results as those that use the SSR approach. However, CSR limits the load put on the server because it limits
       the number of requests. Most of the compilation work is shifted to the browser, which may be a desirable trade-off for your project or perhaps not. 
       With browser caching, subsequent page refreshes and re-visits are typically faster, while SSR must go through the same cycle each time (though it also can implement
       caching mechanisms for faster subsequent results as well). It all highly depends on individual use-cases and the type of product being developed.
       It's an age-old argument that will rage on for the foreseeable future. Perhaps frameworks like gatsby or next.js, which utilize hybrid approaches, 
       are appropriate to look into if its worth putting in the work to get the best of both worlds. Heck, even react is making a push for SSR components in
       the near future, and I have to say the demos I've watched about them look fabulous.`,

      `But assuming we find benefit in choosing to work with templates to give to the client, handlebars is a solid choice. Learning the syntax of any of these popular
      templating languages is relatively easy and they all look much the same; the choice mostly comes down to which syntax you prefer working with. Want to
      run a quick each loop for a list? <ul> {{#each shoppingList}} <li> {{item}} </li> {{/each}} </ul>. Trying to destructure objects so you don't have
      repeatedly type out the same dot notation to access what you need from that object? {{#with car}}<p> We have a shipment of brand new {{make + ' ' + model}} 
      on the lot, starting at {{price}}. Hurry in! </p> {{/with}}. We can even define our own helpers and utilize them with much the same syntax as this 'with'
      helper.`

    ]
  },
  {
    skillName: "HTML5",
    gradient: "linear-gradient(90deg, hsla(4, 95%, 70%, 0.9) 0%, hsla(18, 93%, 65%, 1) 15%, hsla(29, 75%, 51%, 0.9) 100%)",
    image: "./images/thumbnails/skillbtns/html.jpg",
    details: [
      `HyperText Markup Language (HTML) is used to compose the markup of a web page (document). HTML elements, deliniated as <tags> in a HTML document, 
      form the skeletal structure of the document that a user views in their browser. It also informs the browser how to contruct the DOM 
      (Document Object Model); a nested, tree-like structure where each node of the tree is an object that represents an element of the document.`,
    
      `Different tags convey different meanings; Some are about actual Document structure, such as <head> for specifying meta-data and linking out to 
      reference external resources, such as CSS stylesheets, via the aptly named <link> tag; not everything HTML outlines in a document strictly refers to the 
      actual 'view' that visitors to a web page see. The majority of tags, however, do.`,

      `Tags are not the lone component of HTML markup; tags also have attributes associated with them. Attributes are added to the opening tag of HTML elements
      in the form of attribute_name = "attribute_value". There are different, generalized groups of tags; some are standard, and are commonly shared amongst 
      many tags, at least where they are applicable. Examples of these are the "id" and "class" attributes. Attaching an id and/or a class name is applicable
      to the vast majority of tags as a means of reference to it, usually for either further manipulation of the node via JS or styling via CSS. Another group is
      event attributes, which extend functionality of the element by attacing event listeners to it. Popular examples of those are 'onkeypress', 'onclick', and
      'onmouseover', each containing a callback function defined in a <script> to execute when the corresponding event is triggered. The other major group
      of attributes are 'required' attributes. Some tags carry no meaning without certain attributes. Anchor tags, used for defining hyperlinks, don't function
      without an 'href' attribute containing a URL to navigate to; ergo 'href' is a required attribute of the <a> tag.`,

      `Aside from the meanings HTML tags convey by definition, some tags convey a greater semantic meaning. A <div> tag has long been the de-facto tag to use as a 
       container for nesting other elements, but no longer is it necessarily the appropriate tag to reach for when you want to make some sort of container. There
       are now tags that represent and imply "landmark regions" of the document. Tags such as <main>, <section>, and <aside> function essentially the same as a
       <div>. They imply a container of sorts. However, the one you choose conveys a different semantic meaning as to what type of container it conceptually
       represents. The <main> tag implies the top-level "main" content of a page, and as such only one should ever be present on a document at a time. 
       A <section> tag implies a conceptually/visually discernable chunk of the document layout, of which there can be several present. Paying attention
       to the special semantic meaning is one concept of following semantic HTML markup.`,

      `Another concept of semantic HTML is simply using the proper tool for the job. Especially while first learning, I'm sure we've all been guilty of
       using a <div> when we really want to specify a <button> at one time or another. It's an understandable mistake at first when one considers nesting the markup
       to specify an icon for said button. But in reality what this does is rob us of functionality that browsers provide to automatically, and worse yet a 
       good portion of that functionality is vital to making pages accessible to users with disabilities. For example, if a <div> is utilized in place of a 
       <button>, the default behavior of executing the functionality tied to that button when the 'enter' or 'space' keys are pressed is lost. You could go
       to the trouble of implementing it manually with JS, but why? All this does is risk improper implementation or missing behavior altogether. Just use
       the proper tool for the job. Every tag has its place.`
  ]
  },
  {
    skillName: "A11Y / Mindful of ARIA compliance",
    gradient: "linear-gradient(140deg, hsl(180deg 11% 67%) 0%, hsl(335deg 10% 71%) 100%)",
    image: "./images/thumbnails/skillbtns/a11y.png",
    details: [
      `Accessibility is a core part of the experience that developers are hired
       to create; vital to both end-users with a wide range of impairments and to the 
       business/entity's representation of themselves as an organization that takes 
       inclusivity, equal access, and customer service seriously.`,

       `First and foremost, semantic HTML is key when it comes to accessibility. In terms of developer workload, following established 
        semantics of markup provides behaviors to web pages that disabled users have come to expect as standard, practically for free. 
        It is the best tool in a dev's arsenal when it comes to delivering an experience that everyone can access and reasonably use.`,

       `Aside from the typical core landmark regions, links, and buttons, sometimes there aren't semantic tags for custom widgets that 
        developers are tasked with creating. This is where combining ARIA attributes with semantic HTML can create a robust experience for
        disabled users.`,

       `Along with clear and concise labels it is also important to communicate the state of certain elements; 'Pressed' and 'expanded' 
        are common and helpful states to include with buttons and expandable widgets, such as accordians.`,

       `Managing focus on elements is another important aspect of accessibility, particularly to those with visual impairments. 
        It's important to think about the context of the information being presented and how it is being presented. You wouldn't 
        want focus to be left on an element that moves offscreen or becomes collapsed in an expandable widget. Likewise, a tabbing
        experience that jumps around the page in an illogical manner is also undesirable.`,

       `With all of these possible ARIA attributes one can add to their markup to make it more accessible, one must also remember not
        to go overboard. Redundancy, long labels/descriptions, and improper usage of ARIA attributes (especially aria-hidden) has
        the potential to create a worse experience for users than if nothing was added to the markup at all! Testing with screen
        readers and consulting the WAI-ARIA documentation are invaluable when conducting accessibility reviews.`,

       `From the business side of things, accessibility should never be an afterthought for a development team. An estimated 15% of users have
        some form of disability ranging from minor to severe. Not only is providing equal access across the web the right thing to do, 
        but as a business can you really afford to provide inadequate service to ~15% of potential customers coming across your online 
        service (and if you feel you can, what does that say about you as a company)? There's major incentive for everyone to treat this
        as a priority and thankfully it seems to be gaining the attention it deserves amongst developers.`,

       `As a final point, I'll paraphrase Léonie Watson of the W3C advisory board; When it comes to accessibility, "it doesn't need
        to be perfect. Perfect is very much the enemy of good... Just try and fix one thing, two things, another thing tomorrow, and it'll 
        make a difference to someone in your audience... Accessibility isn't about legislation, conformance, guidelines, or even the technology 
        itself. But it is about putting time and effort into the things we build, giving a damn about the things we build, but most importantly 
        giving a damn about the people who are going to be using the things we build." If I ever get to the position of hiring front-end 
        developers/designers I would make her lecture on Youtube 'ARIA, Accessibility APIs and coding like you give a damn!' a 
        requirement to watch after the onboarding process. A big thank you to her for that lecture, which inspired me to take accessibility 
        seriously when I was first starting to learn how to code.`
    ]
  },
  {
    skillName: "CSS",
    gradient: "linear-gradient(90deg, hsla(202, 71%, 27%, 1) 0%, hsla(176, 45%, 66%, 1) 100%)",
    image: "./images/thumbnails/skillbtns/css2.jpg",
    details: [
      `The language that needs no introduction, responsible for making the web appeasing to the human eye; Cascading Style Sheets.
       CSS has grown over the years from a preposed specification that had logistical trouble implementing font-style control to a cornerstone
       technology of the web with relatively complex pseudo-selectors/pseudo-classes, media queries, animation/transition support, and a whole 
       bunch of other features we now take for granted. Together, it all makes the visual intake of digital information more palpable than the plain 
       white screen with black, left-aligned text that we'd be otherwise be left with by default.`,

      `CSS has had game changing additions added to it over the last several years. CSS 'flexbox' and 'grid' have made achieving envisioned layouts
      easier than ever. Grid is great for overall, sectional layout of containers with its ability to simultaneously define the behavior of columns
      and rows with ease. Flexbox, on the other hand, is more simplistic for when you just want to stick to defining the flow of an element's layout in a 
      one-dimensional manner; either a column or a row. Think of it as favoring grid when laying out a collection of elements, and perhaps favoring
      flexbox when defining the flow of the inner box model of those elements.`,

      `Psuedo-selectors have also made life for front-end developers easier. Specifying styles in an :nth-child relationship defined 
      by simple arithmetic expressions, such as :nth-child(2n+1) for an 'odd numbered child' relationship, is highly convenient.
      You can even swap that out for :nth-child(odd) now! The introduction of a negation selector, :not(), has made defining 
      exceptions to rules in a straightforward way, rather than closely paying attention to and relying on CSS's cascading, 
      overriding nature. These and many other additional selectors have been integral in defining more complex designs in a more 
      manageable, organized, and legible fashion than in the past, and it's only getting better. Now if we can just somehow add in 
      that elusive parent selector that we've all been clamoring for all these years, that'd be great...`,

      `Media queries are the backbone of responsive design. While I don't know anyone who looks at plain CSS media queries and thinks, 
      'that's intuitive and in no way repetitive', they've held the utmost importance in designing for a wide array of device resolutions
      and users with different viewing needs/preferences. They've gone from being very viewport-dimension centric expressions like max or min
      width, height, and/or aspect-ratio to expressions that are a little more sophisticated, taking into account user preferences and accessibility; 
      (prefers-reduced-motion: reduce), (prefers-color-scheme: light/dark), (prefers-contrast: high/low) are all shining examples of the improvements 
      introduced that have improved both the developer and user experience.`,

      `While certainly not perfect, and now with a bounty of competition from JavaScript animation libraries offering other solutions, CSS animations
      and transitions undoubtedly have one big pro in their favor; they sure have been made easy. Transitions, especially, have made a 
      big impact on micro-interactions that give UIs that subtle, yet engaging spark of life that drives user engagement. Specify some, 
      none, or all transitionable values in a single 'transition' property, and it easily 'animates' color, dimension, and other highly 
      engaging visual cues, by transitioning their repsective values from zero units to the value specified by the transitioned property.
      Used well, they go a long way in helping to leave the impression of a more modern feel. Though, whenever these are used one 
      should remember to keep motion-sensitive users in mind and make sure (prefers-reduced-motion: reduce) is utilized where appropriate.`,

      `CSS has definitely given more stable features in recent years but by nature it can still grow into an untameable beast if left
      unkempt. It's going nowhere and we're all thankful for it, but writing plain CSS from scratch and keeping it in line has been and
      will always be a tall order, even with the best of organization and naming conventions. Luckily, we have lovely pre-processors and 
      even other alternatives that mimic those pre-processors' syntax and benefits, but add some other features of their own... these
      tools really help fill the void that maintenance and scoping issues create, which are unlikely to be solved by further evolution 
      of this language's specifications any time soon; those really all just have to do with its cascading nature.`
    ]
  },
  {
    skillName: "SASS/SCSS",
    gradient: "linear-gradient(45deg, hsla(337, 69%, 66%, 0.9) 0%, hsla(347, 50%, 76%, 0.9) 100%)",
    image: "./images/thumbnails/skillbtns/sass2.png",
    details: [
    `Syntactically Awesome Style Sheets; a CSS preprocessor that has taken a considerable load off of traditional CSS maintenance 
    challenges and boasts a bounty of features that makes CSS more extensible... I don't think any front-end developer
    who comes across it for the first time hasn't had their lives change immediately for the better. It's that powerful of an extension.
    `,
    
    `By nature of its nested syntax, SASS brings a much-needed visual hierarchy of selectors that makes CSS inheritance more clear. This
    syntactical benefit would be reason enough for me to use a pre-processor on just about every project, but this is just the tip of 
    the iceberg when it comes to the benefits SASS, and other pre-processors like it, have to offer. SASS offers a suite of built-in 
    function modules, including more complex mathematical functions than CSS's native calc(). Other noteable features offered by SASS 
    are its collection of various 'at-rules' such as @mixin and @function, interpolation of expression results with #{} notation, and 
    neater (IMHO) variable declaration syntax. Not to mention, SASS variables go further than what one can do with CSS variables in 
    CSS alone (if that's not made obvious already with the presence of an @function rule); you simply have the opportunity to do 
    more with them.`,

    `The modules SASS offers contain built-in functions and a couple of stray mixins for not just mathematical computation, but also 
    color and string manipulation, a 'selector' module for enhanced inspection and manipulation of selectors, a 'meta' module, and 
    perhaps most exciting and useful of all, a 'list' and 'map' module that really go a long way in introducing complex functions/mixins
    that can save a lot of stylesheet bloat. For instance, nobody likes writing '@media only screen and (max-width: 600px) {}', and 
    often other more complex media queries, over and over again throughout all CSS files or SASS _partials. Why not make a map to store
    the breakpoints you use on your project, nickname the actual media queries whatever you want as the map key, and create a 
    mixin to generate media queries that are annoying to repeatedly type out?`, 
    
    `I did just that and now I write media queries with my own "bp" (short for breakpoint) mixin. Tell me "@include bp('phonelg') {}" isn't 
    better than the media query above when you have to type it out dozens of times across a bunch of SCSS partials. But wait, 
    take that same 'bp' mixin, get creative with the string and math modules, and you get what I call "MQ Modifiers". Simply put, stick to 
    boiling down the breakpoints defined in the map to simple max/min width media queries. From there, you can attach a modifier to the map
    key name (such as 'phonelg'), prefixing the modifier with "--".`,
    
    `For instance, I made a modifier referred to as "ar" for when one might want to specify 
    an aspect-ratio media query in addition to a defined breakpoint. Simply "@include bp(phonelg--ar16/9)" and it will yield 
    "@media only screen and (max-width: 600px) and (aspect-ratio: 16/9)". Insert whatever fraction you want after "--ar" and that's the value. 
    Go on to support other modifiers such as device-orientation and a handful of other basics, and it's a rather useful utility for about 
    90% of what you're doing. If there are new media query specifications that become hard to support, you can always cheat a little and
    add it to the original map as one of the main keys you refer to or write it out as normal (heaven forbid).`,

    `The tools SASS provides also makes theming a task that is now feasibly manageable. Again, with the power of maps, one can declare
    multiple theme names as map keys and those keys can contain a theme object defining not just color values, but perhaps different images,
    borders, font-families... really properties you want to define the new theme. Put in whatever theme selection mechanism 
    you wish and attach the active theme class name to the document root.`,

    `In summation, SASS doesn't have much to it; just a handful of strong 'at-rules' and modules that give us the tools to change the 
    dynamics of how we write our stylesheets; individual project's stylesheet architecture and extra features can be as simple or as complicated as the
    developer(s) want to make it.`
   ]
  },
  {
    skillName: "Styled-Components",
    gradient: "linear-gradient(45deg, hsla(329, 84%, 68%, 0.9) 0%, hsla(29, 100%, 44%, 0.9) 100%)",
    image: "./images/thumbnails/skillbtns/sc3.jpg",
    details: [
      `Personally, I love the CSS-in-JS approach to styling. I know such libraries are not everybody's cup of tea but I've found 
      them enjoyable to work with. Styled-components is a CSS-in-JS library for styling React components. The syntax is very close to
      that of SCSS, but unlike SCSS it's actually JavaScript that compiles into CSS, which is scoped to the individual
      component being styled; encapsulation of styles by default!`,

      `Just import the 'styled' object from styled-components and choose the helper method corresponding to the HTML tag you want
      outputted to the DOM. That method is followed by a JS template literal describing the styles. For example, a h1 tag would look
      something like"styled.h1\`font-size: 6rem;\` ". That method will generate a StyledComponent, which is just a React component
      with encapsulated styles attached to it. It generates a unique class name for each component rendered, eliminating the worry of style 
      conflicts and by the same token, when a component is not being utilized, neither are its styles. Get rid of the component and 
      you get rid of unneeded CSS.`,

      `But styled-components are more than all that; because it's all actually just JavaScript, we still have all the built-in power of the 
      language at our disposal. Calculate styles based off of the length of data pulled in, such as pagination styles, css grid rows and 
      columns, color fading effects, and just about anything else under the sun. Go back and forth interpolating css styles and JS expressions
      and function calls. With styles being scoped to the component, you're really only limited by imagination.`,

      `If styles are scoped to components, they must be pretty hard to re-use... Nope! Styles are easily extended! The import 'styled'
      also comes as a function that takes any component as an argument, from which the new component will inherit the same styles and may 
      override/add on any styles in its own attached template literal block of styles. Or, if there's only need to re-use styles from a styled component
      that generates a different HTML tag from what is desired, one can add an 'as' attribute that will specify an alternative tag to render with the same styles; 
      Say, render a <ul> tag as an <ol>.`,

      `Essentially, anything do-able in SASS in do-able in styled-components. How about that 'bp' mixin I made with SASS? Say hello to
      the 'bp' object! Make a map of breakpoints and use JS's .reduce() method to find the key and generate the associated media query!
      "bp.phonelg\`{Media query styles here}\`". Bam! Equivalent base functionality. Additionally, it's easier to adapt styles based
      on props and state.`,

      `One of the main arguments I've heard from CSS-in-JS naysayers is "seperation of concerns", with which I whole-heartedly agree.
      We should have a seperation of concerns; decoupling the view from the business logic. "Seperation of concerns" has been dogmatically
      equated with "thou shalt not mix CSS with any other technology". With the tools at our disposal today, this is a false equivalency.
      The styles can still be kept seperate from the component file. What stops you from creating a folder on a per-component basis, one 
      file for the actual react component, and one "component.styled.jsx" file for the associated styled-component? The "concerns" are 
      still seperated... and the styles are now encapsulated with the option to be extended and shared as seen fit. In my book that's an improvement, but I can respect and understand if the whole concept feels 
      sort of 'dirty', off-putting, or if you just plain don't like it.`
    ] 
  },
  {
    skillName: "PHP",
    gradient: "linear-gradient(45deg, hsla(290, 43%, 27%, 1) 0%, hsla(289, 100%, 87%, 1) 100%)",
    image: "./images/thumbnails/skillbtns/php.jpg",
    details: [
      `PHP Hypertext Preprocessor (PHP) ceded a lot of popularity amongst developers after the introduction of Node and ever improving
      language specifications for JS. However, its wide adoption, established position as the backbone of WordPress, and recent improvements from PHP7
      have sparked a resurgence in the language and given it a new lease on life; not that it was going anywhere in the first place.`,

      `PHP scripts are executed server-side. Along with the PHP code in between the "<?php ?>" tags, PHP files also accept the usual HTML, CSS,
      JavaScript, and/or plain text. It's not just used to generate HTML, but it can also perform CRUD operations on connected databases 
      as well as files on servers. Of course, these are rather serious operations, so a standard way of encrypting and securely 
      carrying out these actions is certainly needed.`,
      
      `For that we have "prepared statements". Prepared statements are scaffolded SQL statements that decouple the action from data. Placeholders are 
      put in place of the data to be created/selected/updated/deleted. When the prepared statement and the accompanying data are verified together the 
      statement is then executed. If all checks out, this prevents SQL injection attacks. There are two ways to make them; MySQLi and PDO (PHP Data Objects).`,

      `MySQLi was released as an improved (hence the "i") extension to the flawed MySQL extension, which 
      has been deprecated for a while now. PDO is an entirely seperate abstraction layer that has emerged as the succeeding method over MySQLi.
      Not only does it support a larger collection of database drivers than MySQLi, but the real benefit is that it's just plain more convenient to use.
      For one, when binding data parameters of the statement to the statement with MySQLi, one would have to count the number of parameters and note the
      data types of each one and feed the bind_param() method a string argument of single-character representations of those data types. For instance, four
      strings and an integer would be "bind_param('ssssi')", followed by the four string and single integer variables passed as the remaining parameters.
      This tedious "count & type track" flow of parameterizing data isn't necessary with PDO.`
    ]
  },
  {
    skillName: "SQL",
    gradient: "linear-gradient(to bottom,rgb(45,54,67) 96%,rgb(68,101,167) 97%,rgb(80,86,98) 98%)",
    image: "./images/thumbnails/skillbtns/sql.png",
    details: [
      `Structured Query Language; a topic with more depth than breadth, this language is meant to both query and carry out changes in
      a relational database.`,

      `SQL, at its most basic, is just a query language allowing us to talk to and interface with a database in order to perform CRUD operations on 
      the data we store. But it's more than that. SQL forms relationships. It provides deeper insight than what is told by that piece of data's original
      column.`,

      `From a grossly oversimplified view, there is not much more to SQL than selecting, restricting, and relating data. But identifying and properly 
      expressing relationships via SQL statements provides the raw content that make the applications we build worth using, either providing an essential 
      service or essential knowledge to drive internal business operations/solutions.`,

     `An SQL statement can be broken down into several sections. A "keyword" refers to individual commands and a "clause" is a combination of a keyword
     and the data it's acting upon. That data is specified by "predicates"; a true/false expression that filters data. Multiple predicates can
     be used to filter/join data together in order to select a specific subset of data. A "statement" is a combination of at least two clauses. The nature of an individual clause in relation to its 
     associated data may take on several forms, including but not limited to, selecting unfiltered data, specify an action to take place (on an adjacent clause specifying a data set, thus forming a statement),
     restrict the source that data is pulled from, restrict the data input/output, or order a data set in a specified fashion.`,
     
     `From there, combining clauses yields the statement's full behavior as one that JOINs, UPDATEs, DROPs, SELECTs, GROUPs, or any other one of a score 
     of other possible actions, data (often filtered in some significant way, also by clauses). Together these actions and specially limited/arranged 
     data sets come together to form greater meaning out the data stored. Depending on how the data is read/combined/altered, the meaning we pull from 
     data drives logistics, tracking services, advanced new features for users, and deeper understanding of the needs/habits of both users and the 
     internal organization keeping the database.`

    ]
  },
  {
    skillName: "PostgreSQL",
    gradient: "linear-gradient(180deg, hsla(0, 0%, 90%, 1) 0%, hsla(218, 78%, 76%, 1) 45%)",
    image: "./images/thumbnails/skillbtns/postgresql.png",
    details: [
      `A popular relational database`,

      `PostgreSQL (or simply "postgres"), like other relational databases, stores data in tables as columns and rows with the potential to define and retrieve 
      data in terms of special, interconnected relationships. Tables, more often than not, contain unique primary keys (i.e a user ID). They also usually 
      contain information that is conceptually related to another table. One can take the column of a table specifying the primary key and include it in 
      a seperate table, giving that table what's called a "foreign key". This is the basis of forming a relationship between data tables. Not all 
      relationships are between seperate tables though; some table relationships are self-referencing.`,

      `SQL JOINS are the popular way of specifying relationships, along with other conditional/logical clauses that bolster/refine content included in
      the JOIN. Relationships can take on one of several different natures; one-to-one, one-to-many, many-to-many, or self-referencing. One-to-one
      relationships are the least common; one column of a table corresponds with exactly one column in another table. Most of the time, in practice this can be made into a 
      self-referencing relationship and everything can be stored in the same table. An example of a one-to-one relationship is a country and its capital city;
      it only has one.`,

      `The others are a little more representative of the typical relationships we think of when modeling real-world business/service transactions.
      One-to-many is probably the most comon type of relationship to form between data. An example is one customer can have many orders, but two customers
      can not share the same order.`,
      
      `Many-to-many is also a common relationship to define, but also probably the most hazardous. It poses the highest risk
      for creating redundant/duplicate data between tables and, if not properly set up, for making it difficult to create/delete records without affecting 
      other data by mistake or truncating records altogther that other data relies on. I.E A doctor, who can prescribe multiple drugs, may have many 
      patients who may have several prescriptions.`,
      
      `Self-referencing relationships are just relationships between columns that belong to the same table, and as such can be one-to-one, one-to-many, 
      or many-to-many. It's just all contained within the same table.`,

      `Postgres stands out against other relational databases with several special data types that make storage of things like dates, IP addresses (CIDR data type), and 
      other notoriously hard to store pieces of information easier. Besides additional data types that other relational databases don't support, postgres
      allows for user-defined data types as well. It also boasts some of the highest limits of memory per row, table, and indeed, for entire databases.`
    ]
  },
  {
    skillName: "Firestore/No-SQL",
    gradient: "linear-gradient(270deg, hsla(36, 95%, 76%, 1) 0%, hsla(37, 38%, 72%, 1) 95%)",
    image: "./images/thumbnails/skillbtns/firebase3.png",
    details: [
      `Firestore is a no-sql database provided by Google, part of its greater Backend-as-a-Service platform, "Firebase".`,

      `No-sql databases are "non-relational"; this simply means data is not stored in the typical tabular fashion of rows and columns. Different
       non-relational DBs utilize different data models for storage. The four main data-models used with non-relational DBs are key-value, column-based, 
       graph, and document/collection. Firestore stores data as collections and documents. For instance, there can be a "user" collection, and each unique 
       user is stored as a "document" in that collection. These documents and collections can store data as just plain JSON, allowing for a readily-consumable 
       format for the data our client applications consume; objects utilized on the client can be mapped directly to these documents.`,

      `Firestore is part of Google's Firebase platform; a suite of backend products that take much of the load off of back-end development, allowing teams 
      to grow and improve the core experience and features of their applications. Client applications leverage the Firebase SDK to interact with these tools.
      One of the biggest pros is easy to include, out-of-the-box authentication with OAuth2. This allows your client app to outsource its authentication needs 
      and let users sign in with Google, FaceBook, Twitter, GitHub, and other accounts via a tried and true token-based system. It even has UI components for 
      this sign-in process, ready to customize and go. Beyond this, Firebase offers solutions for application hosting, storage of static files (such as images),
      A/B application testing, and integration with other popular Google products (such as Google Analytics).`,

     `Firebase not only makes things easy to get up and running quickly, but it also makes integration with other popular services nearly effortless. Of course,
     everything comes at a price and all decisions have their trade-offs. Firebase scales exceptionally well, but as your success grows so do your costs. 
     Firebase has a pretty generous free tier and fair pay-as-you-go plan, but should your app grow a user base so large that it starts to affect your bottom-line,
     it'd be a shame to be so heavily integrated and locked into a single vendor. Also, you're fully dependant on Google for storing and backing up your
     organization's data; this heavy reliance may or may not be acceptable/worthwhile to you. It's something you'll have to weigh when considering your needs.`,

     `Firebase seems to be great when you need real-time data that scales, all on a low-budget. It's a perfect fit for small apps with a clear image of document
     structure (keeping the queries, and therfore bill, to a minimum) or for proof-of-concepts that need to garner attention. You get off the ground quickly,
     but upon success, pay for it more later. Just understand the extent of your needs and, if you suddenly gain traction, understand the possible impact of 
     migrating away and suddenly needing to implement your own custom solutions for everything you've been dependant on from Firebase.`,

     `Shifting back to just document-based no-sql DBs, a popular alternative is MongoDB. If you still want to follow a document structure, want to spend 
     more time developing your own infrastructure up-front, leverage an open-source DB rather than a DB within a proprietary platform, and enjoy more freedom
     with platform-independance, this might be a appropriate alternative for your storage needs.`
    ]
  },
  {
    skillName: "App Deployment",
    gradient: "radial-gradient(circle, hsla(202, 41%, 70%, 1) 0%, hsla(200, 43%, 77%, 1) 5%, hsla(214, 35%, 64%, 1) 80%)",
    image: "./images/thumbnails/skillbtns/deployment.jpg",
    details: [
     `There's a myriad of services to deploy web applications and the best one is highly dependant on your scale and tech stack. Of course, I haven't
     needed to launch the next "Uber" or anything of that magnitude, but I've at least had to consider the small scale of my projects and pick something that fits the tech
     stack I use and my non-existant budget; it may be small, humble experience but it still involves research and weighing pros against cons to fit what
     I need.`,

     `Heroku was the first Platform-as-a-Service I was introduced to when launching a small react/node application. It's highly convenient, especially
     if your project is versioned in a GitHub repo. You can connect your account and the project repo, and even enable automatic deployments after git commits to
     the project's main branch (or whichever branch you specify). Heroku isolates your app in a container refered to as a "dyno", gives it a unique project ID, 
     and their shared servers host your application.`,
     
     `Your project likely contains a seperate server of its own as well as a database. Configure the database under "add-ons" and specify the matching service; 
     in my case I was using PostgreSQL, so I configured Heroku-Postgres. Specify any buildpacks your project needs, which in my case included Node.js and the mars/create-react-app-buildpack
     hosted on GitHub. Heroku will now be able to build the projects on deployment. Directly above the buildpacks setting, specify configuration variables
     in the config vars setting (including API keys). Specify the commands for starting the application, either in a Procfile in the project root directory, 
     or do nothing and let Heroku run the start script found in the project's package.json file. You're online.`,

     `Beyond Heroku, I've also had to build projects and host them through more traditional hosting platforms; namely Bluehost. Like many other comparable 
     hosts (extensive focus on WordPress aside) files are managed with cPanel. Public facing files are held in the public_html directory. .htaccess files
     make redirection rules and other similar web traffic rules easy to create. Sensitive files, like .ini and other config files are held outside the 
     public directory. Bluehost also has options for configuring PostgreSQL databases, or for managing MySQL or MariaDB via phpMyAdmin... unfortunately, 
     that about sums up the totality of your database options. As I go on and use different tools not supported by Bluehost and aim to make more serious 
     projects than just one-offs that give me practice, my needs have outgrown this host. However, it remains a great option for WordPress sites 
     (*shudders*), but if it's anything more serious than that I wouldn't recommend it.`
    ]
  },
  {
    skillName: "API Integration",
    gradient: "linear-gradient(90deg, hsla(245, 11%, 56%, 1) 0%, hsla(35, 40%, 60%, 1) 46%, hsla(37, 62%, 64%, 1) 100%)",
    image: "./images/thumbnails/skillbtns/api.png",
    details: [
      `"Application Programming Interface(s)" vary in nature and in what they offer. However, they all share an identity as tools that expose open 
      endpoints of external services to developers. They provide meaningful connections and augmentations to the applications they are utilized in. 
      The bottom line is that, in some manner, they allow us to integrate with external services.`,
      
      `Some APIs serve to enhance development in some way and others serve to provide features for end-users. 
      They expose an interface of commands for developers to use in order to link their application up with the services; the nature of 
      which is entirely dependant on the API itself and which pieces of it are actually being utilized by the application consuming it.`,

      `Some APIs are for integrating user features into our applications; Google Maps, provided by APIs from Google's maps platform, is a common feature 
      a business might utilize on its website in order to provide directions to its physical address. Other features might include 
      signing in with/tagging/posting with social media accounts via twitter's, facebook's, etc. API.`,

      `Others provide features purely for developers to use. They might make accomplishing common tasks easier, provide a wrapper for bundling seperate 
      services made that now need to be bundled together and execute in a more congruent/predictable manner, or share code/data/results internally or 
      with certain partners; the possibilities of what exactly is provided are pretty much endless. A common one, at least when using JavaScipt,
      is the "fetch" web API. It makes external requests easier/more intuitive to construct and then further handle via JS Promises.`,

      `While the nature of an API might either be geared towards developers themselves or end-users, the ones discussed up above are all public.
       Anyone with the technical know-how and a connection can use them. Other APIs are developed by businesses/organizations for internal use only, 
       and help integrate with/operate/use other services developed in-house (hope they had the foresight, will, and courtesy to document it for when
       turnover inevitably occurs). Not all APIs are meant to be public.`,

      `The key to any useful API is good documentation. APIs are meant for other developers, not just yourself. If there's no general idea of how to use it
       or even what it's for, what use is it? I can import it, log things out and waste time trying to figure out how it works, but documentation would save a lot of time
       and clear up a lot of confusion as to how to utilize it. Undocumented features are asking to be abused. By the same token, if documentation is 
       available it's on the developer to actually comb through it, understand it, and answer their own questions as well as they can.`
    ]
  },
  {
    skillName: "Postman",
    gradient: "linear-gradient(270deg, hsla(34, 100%, 63%, 1) 0%, hsla(21, 100%, 64%, 1) 100%)",
    image: "./images/thumbnails/skillbtns/postman.png",
    details: [
      `Postman is an API testing/development platform, with both a desktop application and an API of its own.`,

      `With the Postman application, it's easy to construct APIs of your own or make requests to APIs you're utilizing and view the responses they give 
      to requests made to specific endpoints.`,

      `The Postman client application has a simple GUI for making individual, or whole collections of, requests. Create a new http request under a collection
       and select an HTTP method from the provided dropdown and the full URL you intend to request, endpoints and query parameters included.`,

      `Postman makes it easy to define and scope variables as key-value pairs. Variables can be scoped to one of five levels; global, collection, environment,
      local, and data. Precedence goes from the bottom, up (i.e. an environment variable of the same name as a global variable will override the global). Globally scoped variables are exactly as they sound; any request and its associated tests/scripts has access to them, regardless of the collection that request is 
      grouped in or the environment it was made from. Unlike the other variable scopes, collection variables are only declared via the Postman GUI, rather than
      the option of either the GUI or the Postman API. Collections are just arbitrary groupings of individual requests, and as such don't have a part when 
      taking a scripting approach to use Postman. Collection variables, as the name implies, can be accessed by any request grouped into a specific collection. Within the collection (or when
      using the Postman API), environmental variables can be set. Certain configurations might differ between development and production, such as base urls 
      and API keys.`,

      `Next down the chain comes local variables. This refers to variables that are available only within the context of an individual request. 
       Finally we have "data" variables... the vague, semi-redundant naming for this scope is actually a special case compared to the rest; these variables
       are defined externally in CSV or JSON files. They can't be declared wiht/in Postman, only referred to when running through collections. Additionally,
       Postman provides dynamic variables that generate values when a request is made; i.e. randomFirstName, randomInt, etc. These placeholders can be utilized 
       anywhere to generate random data on the fly.`,

      `Besides easily crafting requests and viewing responses, the Postman application also has a tab that provides a sandbox for writing tests. Make any assertions about the request
      you need to confirm/test against and the tests will run when the request is made. However, the application groups all tests into a request. Some requests
      with a lot of complex logic/moving parts might benefit from testing outside the Postman application with a library like Jest to keep testing scoped to
      tighter units or clearer e2e tests. However, for simpler tasks, testing within the Postman app shouldn't be discounted; it's a nice all-in-one view.`,

      `Once requests have been contructed and adequately tested, Postman is capable of generating documentation for your API. Provide descriptions to each part of the 
      hierarchy in your collection, whether it be a handful of individual requests, or more sophisticated sub-groups. From there, based on the general aforementioned
      hierarchy rules, both relating to structure and variable declaration, documentation is generated and the markdown it follows provides a nice visual outline
      of how your API is structured, what it expects/is capable of handling, what sort of configurations are needed on a case-by-case basis, and everything else
      needed to give a full explanation needed for others to grasp how to use the API.`
    ]
  },
  {
    skillName: "Git/Github",
    gradient: "linear-gradient(270deg, hsla(21, 100%, 73%, 1) 0%, hsla(21, 52%, 56%, 1) 100%)",
    image: "./images/thumbnails/skillbtns/git.png",
    details: [
      `The infamous version control software and its notorious visual partner-in-crime, GitHub; a GUI for viewing/managing/collaborating on git repositories.`,

      `Git is a distributed version control software; key word "distributed". Every .git folder within a project directory is its own repository tracking changes to 
      the files within or descending from that directory. The entire directory can be exported and shared along with its .git folder, and the version control 
      system will have all the same up-to-date information, as well as the same immutable commit history, on the computer(s) it's shared with.`,

      `Git makes it easy to create a new branch on a per-patch or new-feature basis and merging that branch back into the master branch. Start a new branch with 
      "git branch *branchName*" from the command line/terminal, commit changes to the branch as neccessary, and when development of that branch is complete,
      simply switch to the target branch with "git checkout *targetBranch*" and "git merge *branchName*". If there is a conflict in files between the branches, the merge will fail to complete. Fix the conflict, stage the file(s) in the target branch, 
      and continue with the merge with "git commit". However, before committing there is a code review process I'll touch on below. Committing code directly 
      is like driving and running a red light.`,

      `GitHub is a cloud-based repository hosting service built on top of Git, extending its own features and providing a GUI for repository collaboration. It
      was released in early 2008, gained exponential popularity over the following decade, and was acquired by MicroSoft in 2018. Any public repository can
      be forked into your own new repo and/or cloned onto your local machine, though there are rules on a per-repository basis on how to contribute to the 
      original repo.`,

      `In the way of direct contributors of a repo, lets refocus on that collaboration/code review process. First things first; don't boot up your IDE and 
      start off coding right away. Look for changes made since the last time you worked. Pull any changes, make your hot fixes or develop a feature on a
      seperate branch, stage it, commit it, and finally make a pull request (PR). A pull request is as it sounds; a request to pull code from the branch it
      originated from into the target branch the PR is requesting to merge code into. This is where code review takes place; either it passes the reviewer's 
      standards, they accept the request, and close out the PR or they are free to comment on what else needs to be edited/added and reject the PR. 
      In that case, make the necessary changes, submit a new PR, and repeat the process.`,

      `PRs are one of the main areas where GitHub really stands out as an incredibly useful extension of git. When a PR is made, file diffs are available
      for review directly inside the PR itself. As with other diffing tools, the changed/new files are listed and each one's additions are highlighted in
      green and its deletions are highlighted in red. In a GitHub PR, comments can be made directly inline with a line of code. Team members can go back and
      forth, commenting directly in the differnces outlined by GitHub.`,

      `Simply using GitHub can yield extra benefits if you choose to make use of them. By virtue of its mass use, GitHub is integrated with other services 
      in order to make it easier to leverage those services in a project. It could be linking up with an IDE such as VSCode, connecting a repository to a 
      services like Heroku or Firebase for automatic deployment, or for setting up a CI/CD pipeline for the project.`
    ]
  },
  {
    skillName: "Soft Skills",
    gradient: "linear-gradient(270deg, hsla(153, 59%, 46%, 1) 70%, hsla(157, 33%, 47%, 1) 100%)",
    image: "./images/thumbnails/skillbtns/softskills2.png",
    details: [
      `Programming knowledge is important but so are interpersonal skills and the ability to work toward common goals in a team setting.`,

      `Irrespective of exact field, the tools/services we use grow at a breakneck pace. Change is inevitable and frequent. Development team members
      need to be maleable and accepting of new tools, features, and best practices as the team evolves and moves to try new things in order to stay up 
      to date. This neccessitates an attitude that flows in stride with an affinity to "always be learning". It is from this innate drive that all of the 
      other amazing qualities of a stellar team member/new hire stem from.`,

      `"Always be learning" and the sense of natural curiosity that comes with it fosters a winning culture in development teams. When it is the shared 
      mentality, it implies a shared understanding amongst each other that not everybody you work with knows everything you know and vice versa. In turn, this implies and 
      impresses the role of both teacher and student (albeit to varying degrees) on every developer. A teacher/student relationship is one of patience,
      understanding, and respect.`,
      
      `See how the right attitude is cascading down and forming all of the qualities treasured by teams? It leads to breakthrough moments for everybody 
      on both a personal and collective level. This type of attitude and the culture that stems from it leaves little reason to be defensive about errors 
      we all make. When it has been pointed out to me, I'll be the first to admit that I've done something dumb. As it is in most lines of work, a perfectionistic
      ego is cancer; even if it somehow doesn't affect your team members it most certainly affects you by encouraging you to stay stagnant and to not learn anything.
      All I ask is you point out my shortcomings respectfully as you would want when you mess up.`
    ]
  },
  {
    skillName: "Mindful of Security",
    gradient: "linear-gradient(270deg, hsla(292, 68%, 78%, 1) 0%, hsla(205, 65%, 66%, 1) 65%)",
    image: "./images/thumbnails/skillbtns/security2.png",
    details: [
      `End users trust us with their data; it's all up to us to make sure that trust is well-founded and their data remains secure.`,

      `I'm no hacker; I'm not the world's foremost cyber-security expert. But I do know which features/actions I develop pose a danger if I leave it to
      be misused by unauthorized, malicious users. If it's transferred over a network, is a key piece of data (such as a web token, API key, etc.), 
      shared data, or interacts with a connected database in any way, it's a risk... If it's at all useful to somebody in the real world, it's a risk...
      pretty inconvenient, huh?`,

      `In the way of communication, generating an SSL certificate is easy for allowing your service to utilize HTTPS protocol; though of course that is a 
      basic need and in no way an all encompassing measure. Cross-origin communication is typically a vital necessity, yet opens the doors for many attack 
      vectors. Exploits can surface when others take advantage of improperly set/lacking HTTP headers, not communicating over TLS, insecure storage of sensitive data client-side
      via browser local/session storage, or by doing everything right on your end, but the third-party resources you're fetching are already compromised
      themselves.`,
      
      `A primary concern for web developers is cross-site scripting, or XSS. There's a few methods to execute a script on a site; include it in the url as a 
      query parameter that the server is known to process, submit that request to the server, and if the server doesn't do its due diligence and escape/vet its 
      incoming data, it could reflect the script you embedded in the query parameter in the response, thus executing it on the client. Another way is when at-risk
      JS object properties like .innerHtml() and .write() are used. Depending on the context, one can attempt to add maliciously crafted event listeners in order
      to execute JS code. Another alternative is submitting content that an application might store, such as a comment, but with html that can execute a script. 
      That way, whenever the page is reloaded and that comment is brought from a database to be displayed it sends the stored scipt you submitted via that comment.`,

      `I already touched on a similar, yet still unique, type of injection attack under the 'PHP' skill; SQL injection. Instead of embedding JavaScript in 
      unsanitized user data input fields (or query parameters), one might write an SQL statement in forms that write collected data to a database via SQL. Just
      escape the statement being written by the author with closing parentheses and write a statement of your own; here we have the classic "Bobby Tables" 
      dilemma of unsanitized user inputs. Data can be altered or dropped altogether. Escaping user input and writing SQL statements as prepared statements 
      helps prevent this type of attack.`,

      `Not all security risks are caused by malicious users actively seeking to gain sensitive information; sometimes that data is served up on a silver platter.
      Don't upload config files containing sensitive API keys (and similar data) to public GitHub repositories, for example. JWTs (JSON Web Tokens) are also 
      common pieces of sensitive data used for authenticating (and thereby determining user privileges)... and you'd be suprised how many tutorials I've run into 
      storing these things in browser sessionStorage, or worse yet, localStorage for lengthy persistence. You can imagine the havoc that could cause. Anyone that
      knows how to open chrome devtools and look at the 'Application' tab's storage area can see what you are storing client side. In short, store nothing important
      in either local or session storage. About the only thing those are good for are variables to influence UI display/interaction or for storing user preferences.`
    ]
  }
];

export default Data;