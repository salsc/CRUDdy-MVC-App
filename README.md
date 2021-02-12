# Project Overview


## Project Description

Use this section to describe your final project and perhaps any links to relevant sites that help convey the concept and\or functionality.

## Project Links

- [github repo](https://github.com/salsc/CRUDdy-MVC-App)
- [deployment](https://cruddy-mvc-app.herokuapp.com/)

## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe.

- [wireframes]()
- [react architecture]()
Dual lists. Catalog on the left, select to add to selected items list on the right.



Define the the React components and the architectural design of your app.

### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP EXAMPLE
- Establish database tables 
- Render data on page 
- Allow user to interact with the page

#### PostMVP EXAMPLE

- Add user specific selection lists or 'shopping cart'

## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| App | This will interface with postgreSQL database for dual lists| 
| Header | This will render the header include the nav | 
| Footer | This will render the header include the nav | 

<!-- ## Time Frames

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 3hrs| 3.5hrs | 3.5hrs |
| Working with API | H | 3hrs| 2.5hrs | 2.5hrs |
| Total | H | 6hrs| 5hrs | 5hrs | -->

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project such as Axios, ReactStrap, D3, etc.
 [Github] - Repository
 [Heroku] - Deployment
 [Express] - Separation of functions, controllers

## Code Snippet

<!-- Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  Code snippet should not be greater than 10 lines of code.  -->

```
.then((selection)=>{
    if (selection === null){
      Selection.create({itemId:req.params.itemId,quantity:1}).then(()=>{
        })
    } else {
      selection.quantity += 1;
      selection.save();
    }
    res.redirect('/item');
  })
```
This code is pretty neat because it checks to see if there is an entry in Selection for that Item already. If there is not an entry, one is created. If there is an entry, the quantity is incremented.

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object

## User Stories
1. As a user, I want to be able to add items to the master list so that I can make custom subsets later.
2. As a user, I want to edit existing items in the catalog to keep them useful.
3. As a user, I want to be able to delete unwanted items from the catalog so that the curated list is relevant.
4. As a user, I want to be able to track the quantity of a given item in my list of selections so I do not have to count duplicate entries.
5. As a user, I want to be able to view and print my list of selections on a clean page, printer friendly, so that it is more readable.
6. As a user, I want to be able to directly edit the quantity of a selected item so that I can avoid repeated clicks.
7. As a user, I want to be able to access the app publicly via herokuapp so that I can access it freely.
8. As a user, I want to be able to quicly select items without fear of accidentally deleting them from the master list so I can avoid damaging the catalog.
9. As a user, I want to be able to quickly delete items from the list of selections so that I can tailor the list quickly.
10. As a user, I want to be able to have my own list of selections and to be able to compare with other users so that we can determine common entries as well as unique entries.