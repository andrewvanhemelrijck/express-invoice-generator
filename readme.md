#Express Invoice Generator

This is a small invoice generator I made to help me create invoices for my web design work. It’s built on the Express framework for Node.js with Jade/Pug templating. It’s simple, but it serves a purpose for me - turn variable inputs (client information, billable hours) into a polished invoice that I can send out to clients. At this point data is manually entered into a javascript object and operated on by a few functions that generate the totals etc., but I can envision this app as a small part of a larger app that manages a lot more of my client data and operations. Let me know what you think.

##How to use it

1. Client data is entered into a javascript object in the data/data.js file. The object can take the client’s name and contact info, and details about the work being completed.

2. Run `npm start` in the console and check [localhost:3000](http://localhost:3000) in the browser. You should see the data compiled into an invoice. The `views/index.jade` file can be edited to customize the look & feel of the template. Company logo, address etc. is all handled here.