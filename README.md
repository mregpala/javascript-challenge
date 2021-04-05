
# Javascript Challenge (The Truth Is Out There)
![Ufo Image](UFO-level-1/static/images/truth_is_out_there.jpg)

## Purpose - Utilizing Javascript to Manipulate HTML Table:

### Part 1: Maniupulating HTML Table with Input Element and Button
For the first exercize the requirement was to load JSON formatted data from a file into a table using Javascript and D3 in order to maniupuate DOM.  The javascript script utilzies D3 in order to reference location to populate HTML table, which a loop is utilized to create  record (TR) and data  tags (TD) to write the contents of the array.  The script also creates an event listener on the button, which will initiate an event handler function when the button is clicked.  The event handler utilizes the contents of the input field to filter the HTML dataset's datetime field.

**Part 1 Website Link:**  (UFO Part 1 Link)[https://mregpala.github.io/javascript-challenge/UFO-level-1/


### Part 2: Manipulating HTML with multiple drop down lists
This section of the assignment was pretty tricky. Similar to the part 1 assignmet,  but instead of filtering by input value on button click, the assignment called for filtering table utilizng multiple drop down lists, which will filter the current table each time an "on change" event handler is initiated when drop down item is selected.  I was able to get it working by breaking down the assignment into the following tasks:
1.  Create a function to populate HTML table.  The function will be called when script runs initially and each time the "on change" event handler is callled.  
2. Create a function to populate the drop down lists.  The function has a parameter, which the data contents is passed.  The function creates sorted, unique arrays for each of the following fields: datetime; city; state; country and shape.  D3 is then utilized to reference location in HTML document to create list item tags within an unordered list.  The reference will be used in conjunction with iteration loop to create select and option elements within referenced unordered list/item tags.  A value of "All Values" was manually added to each of the drop down list.
3. Create event handler to filter HTML table data when item in drop down list selected.  The event handler will utilize D3 to capture the selected values from each of the drop down lists.  The captured values are utilized to filter intial dataset and then call the HTML table population function (step 1).  Initially, I was trying to create cascading filters, which would repopulate the drop down lists each time an item is selected.  Unfortunately,  I ran into issues and had to move on.

**Part 2 Website Link:**  (UFO Part 1 Link)[https://mregpala.github.io/javascript-challenge/UFO-level-2/

