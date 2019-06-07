# Print-PDF

This repository contains a method to print an HTML page using jQuery.

- [HTML](#html)
- [jQuery](#jquery)
	- [Common](#common)
	- [Specific](#specific)
- [Screenshots](#screenshots)

---
### HTML

The `form.html` file allows the selection of several forms for the creation of documents.
```html
<button data-toggle="collapse" data-target="#divForm">Form Name</button>

<div class="collapse" id="divForm">
	<form method="POST">...</form>
</div>
```

---
### jQuery

When the form is submitted, the `print.js` code creates a new page for print. Part of the page content is the same for all documents and another part is specific to the form.

#### Common

Header images:
``` javascript
const logoUEPG = "<img src='...'>";
const logoHU = "<img src='...'>";
```

CSS style from the new document page:
``` javascript
var style = "<style>...</style >";
```

Function to get the current date and set the desired format:
``` javascript
var writeDate = function () {
	var newDate = new Date();
	var currentDate = "<p>...</p>";
	return currentDate;
}
```

Function to create a new page and add the HTML formatting of the document to be printed:
``` javascript
var printPDF = function (content) {
	var win = window.open('', '', 'height=700,width=700');
	win.document.write('<html>...</html>');
	win.document.close();
	win.print();
}
```

#### Specific

Function executed after submitting the form. Reads the form data and inserts in the body of the document:
``` javascript
$("#id.class").click(function () {
	var content = "<p>...</p>";
	printPDF(content);
});
```

---
### Screenshots

HTML form:

![HTML Screenshot (1)]( assets/screenshot(1).png)

New page and print:

![HTML Screenshot (2)]( assets/screenshot(2).png)
