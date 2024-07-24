document.addEventListener('DOMContentLoaded', () => {

    const activities = [
        "Go for a walk and look for a pretty rock to take home!",
        "Read a book",
        "Create a playlist in tune with how you are feeling in the moment",
        "Try a new recipe",
        "Watch a movie that's been on your list",
        "Call a friend or loved one just to say hi <3",
        "Meditate for 10 minutes",
        "Write in your journal",
        "Play a board game",
        "Create a pet rock",
        "Treat yourself to some yummy boba!",
        "Try a new flavor of ice cream",
        "Closet refresh! You can sell and donate clothes that no longer serve you",
        "Make a smoothie...yum!", 
        "Do something you loved to do as a kid (:",
        "Pizze night!",
        "Play sodoku (its fun i swear)",
        "Make your bed",
        "Get some fresh air and take 3 deep breaths as you close your eyes",
        "Are you tired? Take a little nap",
        "Take care of that little task you've been putting off. Relax after!",
        "Enjoy a charcuterie board and reality tv",
        "Learn a few phrases in a new language", 
        "Doodle!", 
        "Have a mini dance party in your room", 
        "Do a random act of kindness for someone", 
        "Plant a seed and watch it grow", 
        "Take a photo walk and capture interesting sights", 
        "Bake cookies and share them with your neighbors", 
        "Write a letter to your future self", 
        "Organize a small area of your home", 
        "Listen to a podcast on a topic you're curious about",  
        "Cook a meal from a different culture", 
        "Write down three things you're grateful for",
        "Listen to calming music or nature sounds",
        "Practice deep breathing exercises",,
         "Spend time in nature and observe your surroundings",
         "Practice mindfulness by focusing on the present moment",
    "Write a positive letter to yourself",
    "Create a calming space in your home",
    "Do a digital detox for a few hours",
    "Practice yoga or gentle stretching",
    "Take a break to do some light stretching or physical activity",
    "Create a list of positive affirmations and read them aloud",
    "Try art therapy activities like coloring or painting",
    "Set a small, achievable goal for the day",
    "Do a gratitude meditation",
    "Spend time with a pet or visit an animal shelter",
    "Take a moment to ground yourself by feeling your feet on the floor",
    "Try aromatherapy with essential oils",
    "Engage in a hobby that you love",
    "Explore our website",
    "Explore our website for more mental health tips and activities",

    ];



    
    


     // Get references to the button and the paragraph // suggestions is name of button and 
     // let suggestActivityButton could also be replaced by const and is 
     // creating a pathway from HTML to JS
     let suggestActivityButton = document.getElementById('suggestions');
     let activitySuggestion = document.getElementById('activitySuggestion');

     // this is placed under the button in JS <p id="activitySuggestion"></p> 
     // basically telling where the suggestions should go 

 
     // Add an event listener to the button
     suggestActivityButton.addEventListener('click', () => {
         // Get a random activity from the array
         const randomIndex = Math.floor(Math.random() * activities.length);
    //Math.random() generates a random number between 0 (inclusive) and 1 (exclusive).
    //Multiplying Math.random() by activities.length scales this number 
    //to the range from 0 to the length of the activities array.
    //Math.floor() rounds this number down to the nearest whole number (integer). 
    //This ensures that randomIndex is a valid index for the activities array.
        const randomActivity = activities[randomIndex];

//This line uses the random index generated in the previous step to select 
//a random activity from the activities array.

 
         // Update the content of the paragraph
         activitySuggestion.textContent = randomActivity;
     });
 });