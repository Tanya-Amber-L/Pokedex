# Pokedex

## Description
The client has always been a big fan of the original 151 Pokémon, and would like to have an app that can serve as their Pokédex. They’d like to browse through the Pokemon, search, manage their favourites, and more.

## Screenshot of the project
![Home Page - Phone view](./Pokedex%20Home.jpg)

## Functionnalities
A basic list of functionality the app should have:
- Trainers can see a list of Pokémon with some general information, such as name, number, picture and types. => ok
- Trainers can search for Pokémon by name and number.
- Trainers can see the details of a Pokémon, with the general info (name, number, picture, types) but also things like abilities, move set and stats. => ok
- Trainers can see a bigger version of the picture of a Pokémon (from the details of one). Include zoom & pan. (for web: we’re looking for a lightbox component) => ok
- Trainers can mark a Pokémon as favourite (or remove it from favourites). => ok
- Trainers have a separate list with only their favourite Pokémon. => ok


<details>
  <summary>Nice to have</summary>
  
  - [ ] Besides their favourites, trainers would also like to manage their team of Pokémon. A trainer’s team is limited to 6 Pokémon.
  - [ ] Quite a few trainers have small devices. The list header (title + search) is quite large, it should collapse when scrolling.
  - [ ] Trainers would like to see more than one picture for Pokémon if available on the detail screen (think carousel like UI).
  - [ ] Trainers would like to see the evolutions of a Pokémon if available, from the detail screen.
  - [ ] Trainers are always on the road in search of new Pokémon so they don’t always have the best connection. The customer would like to have loading and error indicators when data can not be found or it takes long too long. 
  - [ ] Some trainers have large devices. Your implementation should scale gracefully to larger screens. Even better would be to have a “split view”, with the list of Pokémon on the left, and the details of one on the right.
  - [ ] Some trainers are forgetful, and don’t remember the name or number of a pokemon. Searching by type (such as “fire”) should also be possible.
  - [ ] Trainers are used to seeing the stats of a Pokémon in the typical hexagon graph.

  </details>

## Tech Requirements
- Working with a JS Framework => Vue  => ok
- Usage of a package manager (npm, pnpm…)  => ok
- Make use of routing to reflect the currently selected Pokémon in the URL. => Make sure the correct Pokémon is displayed when navigating directly to said URL.  => ok
- Make the website responsive for different screen sizes (mobile first) => Make the mobile design a priority
- Make sure the user-specific data (eg: liked Pokémon, etc…) persist between browser sessions  => ok
- Make use of the essentials of your framework (when applicable) such as : Components, Lifecycle hooks, Global state management, Reactivity, Data binding, Props / slots, Routing  => ok
- Use of external libraries when applicable (Axios)  => ok

<details>
  <summary>Nice to have</summary>
  
  - [x] Configure a linter to keep your code clean and consistent
  - [x] Use of utility based css frameworks (TailWind)
  - [ ] Create a ‘404’ page for navigating to URL’s that don’t exist or are invalid
  - [ ] Use event debouncing/throttling when applicable
  - [x] Make sure there is an indicator when loading new data, and make sure no old data is visible when changing selected Pokémon

  </details>
