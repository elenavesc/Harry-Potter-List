# Harry Potter

This App consists of developing a search engine for characters from the Harry Potter saga. To do this, first, we must ensure that we are in the correct house (Gryffindor, Slytherin, Ravenclaw, Hufflepuff). However, we also have two additional options for other wizards for those who are not Hogwarts students or Muggles for characters in the saga who are not wizards.

Additionally, we can also filter by gender. Note that all filters are interconnected, and we have a RESET button to clear all fields at once.

## Structure

The app consists of a landing page where we get information from an information API about the characters in the saga.

### Landing Page
![landing_page-0001](https://github.com/elenavesc/Harry-Potter-List/assets/147326237/8b8a12a5-e7d0-4dbe-9e3e-73e1c9c008d6)

You can search for the character through different filters...
![búsqueda](https://github.com/elenavesc/Harry-Potter-List/assets/147326237/eb13ad7a-a5e4-48ad-920c-7ca3e8da96cb)

Even by name.

![busqueda2](https://github.com/elenavesc/Harry-Potter-List/assets/147326237/1bb34f7f-54e3-49c9-a75e-152f602d323c)

### Card

Once you click on the character, a card will appear with more information about them.

![carta](https://github.com/elenavesc/Harry-Potter-List/assets/147326237/176e8dc9-6adb-4ef6-b798-61c46b1dcef3)



## Project Design

Working always under the MobileFirst methodology, a design has been created that adapts to screens of different devices.
Tools Used 🛠️
For the realization of this project, we worked with REACT and VITE for task execution. Also, as in other occasions, node, SASS, and flexbox were used.

Steps to follow if you want to start the project locally ⚙️
1. Download the project. Remember, downloading is not cloning, as cloning will prevent you from adding commits.
2. Open a terminal in the root folder where you saved it.
3. Install local dependencies by running the command in the terminal:
   ```
   npm install
   ```
   NOTE: This will generate a folder called node_modules, and you only need to execute it once. Once the folder appears, it will not be necessary to run it again.

Once you have installed the dependencies, let's start the project. You need to start the project every time you start programming. To do this, execute the command:
   ```
   npm run dev
   ```
   This command:
   - Opens a browser window and displays the web page.

After running `npm run dev`, you can start editing all the files inside the src/ folder and program comfortably.

Folder Structure
The folder structure in the project is as follows:

- public
- src
  ├─ components
  |  ├─ Characters
  |  └─ Filters
  ├─ images
  ├─ scss
  |  ├─ core
  |  └─ layout
  └─ services

I hope you liked the contribution!
