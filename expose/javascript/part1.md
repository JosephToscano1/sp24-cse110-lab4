# Part 1 answers
1. Line 9 will print `values added: 20`. This is because result is dynamically determined to be a variable of type int, so the line will not print each value that was added, but it will print their summation.
2. Line 13 will print `final result: 20`. This is because the value of result within the function is set to 20, and a var has function-wide scope.
3. Line 9 will print `values added: 20`. This is because result is dynamically determined to be a variable of type int, so the line will not print each value that was added, but it will print their summation.
4. Line 13 will return an error. Because result is a let data type, its scope is limited to the same block, this being the if statement. Line 13 attempts to read result outside of the block in which it has scope, causing an error.
5. Line 9 will not be run by the program, so nothing will be printed. Because result is type const, the variable cannot be reassigned after it is declared. Line 7 attempts to reassign result and causes an error, and the program stops running.
6.  Line 13 will not be run by the program, so nothing will be printed. Because result is type const, the variable cannot be reassigned after it is declared. Line 7 attempts to reassign result and causes an error, and the program stops running.
