# Part 2
1. Line 12 will print 3 since the loop runs in terms of the length of prices which is 3.
2. Line 13 will print 150. Because var has function scope, it can be read outside of the for loop, the last value assigned to discountedPrice before the loop terminates would be 150.
3. Line 14 will print 150. Because var has function scope, it can be read outside of the for loop, the last value assigned to finalPrice before the loop terminates would be 150.
4. The function will return [50, 100, 150]. The function applies the discount from the incoming arguments to each price, rounds them to the nearest cent,  and pushes the new discounted price into the discounted array.
5. Line 12 will cause an error. Now that i is a let datatype, it is unable to be accessed outside of the same block it was declared in.
6. Line 13 will cause an error. Now that discountedPrice is a let datatype, it is unable to be accessed outside of the same block it was declared in.
7. Line 14 will print 150. This is because the block of code that finalPrice was declared in was the function, so finalPrice is still within scope at line 14 resulting in a normal print.
8. The function will return [50, 100, 150], this is because the code runs without issue, and every variable is evaluated and used within its scope.
9. Line 11 will cause an error, as the scope of i is only within the for loop block. Line 11 attempts to access i beyond its scope as a let causing an error.
10. Line 12 will print 3. This is because the length is a const variable and has not been changed since it was declared to be eual to prices.length which is 3.
11. The function will return [50, 100, 150]. No const data types are reassigned and i is used within its proper scope, so the function returns normally.
12. a. `student.name` will access the value of the name property in the student object. \
    b. `student['Grad Year']` will access the value of the Grad Year property in the student object \
    c. `student.greeting()` will call the function for the greeting property in the student object. \
    d. `student['Favorite Teacher'].name` will access the name property of the Favorite Teacher property in student. \
    e. `student.courseLoad[0]` will access index 0 in the courseLoad array. 
13. a. '32', this is because the int 2 is converted to string followed by concatenation. \
    b. 1, this is because the string 3 is converted to an int in order for subtraction to occur. \
    c. 3, this is because null is converted to 0. \
    d. '3null', this is because null is converted to a string and concatenated. \
    e. 4, this is because true is converted to 1. \
    f. 0, this is because both false and null are converted to 0 and added. \
    g. '3undefined', this is because undefined is converted to a string and concatenated. \
    h. NaN, this is because undefined is converted to NaN, and any operation with NaN returns NaN. 
14. a.
    
    
