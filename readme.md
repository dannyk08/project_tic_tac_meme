Overall

	This tic tac toe will be based on memes/pictures but will have the usual/general rules 

	The functionality will be based on the traditional 3x3 board but instead of Xs & Os, they'll be replaced with 9GAG memes to make the players have a good laugh even if they loose

		X will be replaced by random fox picture, nicholas cage, or a newer 9gag meme
		O will be replaced by derp memes: poker face, oh gawd, derpina, rage derp

		Users will be able to choose which meme they want to be/ play with 

	The goal of this game is to match a line of 3 memes in a horizontal/vertical/diagonal fashion to win
		
		if the players don't match a line and the game board has no more empty slots then the game is considered a draw

	There will be a tally to keep track of scores and a little record that will be deleted once the tab is refreshed
	//Unless I have time to make it into a little cookie that will store the player's reccord
	//Also I want to have the option to let the user input data like his name so that the player1 is actually replaced by the name string
	//I'll need to prevent the users from inputting values without it being their turn

CSS

	The game will have a very fresh young look and feel.
	buttons will be "pimped" out and have 3D effects
		they will also display the picture of the meme that has been applied with some border radius to make it round
		//What I mean is that it won't look like a 5 year old's tic tac toe game... This is more for teens and people with a better understanding of sense of humor*

Javascript

	I think/believe that the buttons will be called/addressed by being attached to an id or class and be called through a function
		the function could be to start the game, push on buttons of pictures/memes

---------------------------------- REQUIREMENTS -------------------------------

Make sure to do all of the following with your app.

	* Render a game board in the browser

		- object Board
			- attr

			- behav

		- object Pictures/memes
			- attr

			- behav

		- object box
			- attr

			- behav

		- object Player1
			- attr

			- behav

		- object Player1
			- attr

			- behav

	* Switch turns between X and O (or whichever markers you select)

	* Declare a winner if a player gets three in a row, cat's game if neither does

	* Allow for two players to compete on separate devices
