Run Tests
---

In the terminal/powershell window clone the repository into the folder of your choice:
1. `git clone https://github.com/tombrereton/project-leapyear-calculator.git`
2. `cd project-leapyear-calculator`

---

### Javascript
3. Navigate to the `js` folder and run npm install to install the dependencies from the package.json
```
cd js
npm install
```
4. Open VS Code in this folder by typing `code .`
5. Open the VS Code extension pane (Ctrl+Shift+x), search for "Jest" and install the first one
6. Once installed, open `tests/leapyear-calculator.test.js` and you should see green dots next to the tests which means they passed
7. Try changing the code `src/leapyear-calculator.js` to make it fail

---
### C#
3. Open Visual Studio and open the project via File > Open Project then navigate to folder and double click on the `.sln` file
4. Build the projects by typing `ctrl+shift+b`
5. Click on the test project and run all the test by typing `ctrl+u, ctrl+l` or going through the menu Resharper > Unit Tests > Run all unit tests
