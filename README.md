# HackerNews visual representation using d3.js

## Elements
It should be noted that the radius and opacity of the bubbles are re-calculated
on a linear scale for each page reload. So the palest on the *newest* might be
25 minutes old vs. 7 days on the *best* page. The same logic applies for radii.

### Radius
The radius of a circle is directly proportionnal to its score

### Opacity
Opacity should represent the post's age. The older a post is, the paler it becomes.

### Actions
* A click on a post should follow the url of the post.

* Mouse over should display complete information of the post.

## Contributing
If you use this program and want to make it better, feel free to fork and make a
pull request, I will be glad to integrate enhancements.

## Credits
Some of the code present in this visualisation was inspired from a [blog post by
Jim Vallandingham](http://vallandingham.me/bubble_charts_in_d3.html). Big thanks
to Jim for a very clear and informative tutorial.

## Data source
The data used by this program comes from and unofficial Hacker News JSON API
hosted on http://hndroidapi.appspot.com. The API source code is available [here](https://github.com/glebpopov/Hacker-News-Droid-API).

## License

Copyright (C) 2013 Marc-Olivier Ricard

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see http://www.gnu.org/licenses/.
