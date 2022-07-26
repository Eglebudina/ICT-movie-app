
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

+ Discover movies (pagination support)
+ actors
+ getActors
+ toprated
+ upcoming
+ popular

![][caching]

## Authentication (if relevant).


## Server-side persistence (if relevant)


## Additional features (if relevant),

My Fantasy Movie - use of multiselect drop down menus using multiselect-react-dropdown.
This allows a user to choose multiple actors/genres from the list given and search by typing in the 'choose genres/choose actors' fields in the form.

## Independent learning (if relevant),

Independent learning and research when using third party components in the Fantasy Movie form which included multiselect-react-dropdown.


[d1]: ./public/discover1.png
[d2]: ./public/discover2.png
[detail]: ./public/detail.png
[detail2]: ./public/detail2.png
[detail3]: ./public/detail3.png
[detail4]: ./public/detail4.png
[detail5]: ./public/detail5.png
[detail6]: ./public/detail6.png
[caching]: ./public/cache.png
[stories]: ./public/stories.png
