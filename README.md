
# ICT Skills 2 Assignment.

Name: [Egle Budinaviciute]

## Overview.

A React.js Web Application allowing to view popular,upcoming, toprated movies. You cna also view a list of actors in the movie detail section. You can favourite the movies and also add them to playlist. There is a fantasy movie feature to create your own fantasy movie.

Added Features:

Popular Movies
Top Rated Movies
    - new icon to add to fantasy list (placeholder)
Upcoming Movies

Actors Page
    - Actors Bio page (placeholder)
    - Actor Movies Page
    - popularity
Movie info Actors list:
    - Actors Bio (pop up)
    - Cast Details Component added to Movie Details Page (hyperlinking)

Fantasy Movie Page
    - Fantasy Movie List
    - Fantasy Movie Form
    - multiselect-react-dropdown for dropdown menus in fantasy movie feature.



## Setup requirements.

-Clone this repo.
-Open it in your IDE.
-run npm install
-sign up for a TMDB account here, go to settings and an API key. Add this to a .env file which you will add to the base folder of the application. Set REACT_APP_TMDB_KEY= variable to this value.
-run npm run start to run application on local host 3000
-run npm run storybook to run storybook on local host 6006

## App Design.

### Routing/Navigation.

Routes added:

/movies/popular - lists popular movies.
/movies/toprated - lists top rated movies.
/movies/playlist - shows the must watch or playlist list.
/actors - lists popular actors.
/actorsMovieDetails - shows actors for each movie.
/actorsBioPage - shows more details on selected actor.
/movies/fantasy - shows listfantasy movies if created, and a form to add a fantasy movie.


### Views/Pages.

Playlist Page - Lists movies that user has added to playlist. Items can be removed from list, user can write a review, or view more info on the movie. This movie list can also be filtered by genre. All movie list pages have this filter and sort functionality. 


![][d1]

Filter - movie can be filtered genre. It does not work for actors.

![][d2]

Shows detailed information on a specific movie. There is a list of cast below with a plus sign to see more info.

![][detail]

![][detail2]

The pop up with bio show details of each actor.

![][detail3]

There is a seperate page in the site header showing the list of actors. It shows actors popularity ratings. Attempt was maded here to show actors biography.

![][detail4]

Top Rated movies - lists the movies from the top popular movie API endpoint. A user can add a movie to their favourites, and there was attempt maded there to add movies to fantasy list.

![][detail5]

Fantasy Movie - showing a list of fantasy movies if added, and a form to add a fantasy movie.

![][detail6]

### Component catalogue.

[ Use the Storybook UI to highlight the new components for which you developed stories.]
e.g.

![][stories]

## Caching.

[ List the TMDB server state cached by the app. Include a screenshot(s) of the react-query dev tools to validate your list.]

e.g.
+ Discover movies (pagination support)
+ Movie details
 + etc
+ etc

![][caching]

## Authentication (if relevant).

[Briefly state how you implemented authentication for the app, e.g. basic, Firebase, etc. Also, list the routes that are private/protected.]

e.g.
+ /reviews/:id
+ /movies/favourites

## Server-side persistence (if relevant)

[ Specify the persistence 
platform your app uses (e.g. TMDB lists, Firestore) and itemize the data it persists.]

## Additional features (if relevant),

[Mention any additional user features of your app that may not be obvious from the previous sections, e.g. pagination, extended filtering/sorting, searching.]

## Independent learning (if relevant),

[Briefly explain any aspects of your assignment work that required independent learning (i.e. not addressed in the lectures or labs) on your behalf., e.g. 3rd-party components, libraries, tools. Include source code references.]

[d1]: ./public/discover1.png
[d2]: ./public/discover2.png
[detail]: ./public/detail.png
[caching]: ./public/caching.png
[stories]: ./public/stories.png