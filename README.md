# Phase 2 Practice Code Challenge: Comicbook Collector

## Demo

Use this gif as an example of how the app should work.

![Demo GIF](./demo.gif)

## Instructions

This is the Comicbook Collector, a chance for you to share your comicbook collection with the world! Here you can see your comics collection and add new comics, however some of the functionality isn't quite there yet and it's up to you to make it work...

Your job will be to make our app work according to the user stories you will find the [Core Deliverables](#Core-Deliverables) section.

## Setup

After unbundling the project:

1. Run `npm install` in your terminal.
2. Run `npm run server`. This will run your backend on port `8004`.
3. In a new terminal, run `npm start`. This will run your React app on port `8000`.

Make sure to open [http://localhost:8004/comics](http://localhost:8004/comics) in the browser to verify that your backend is working before you proceed!

The base URL for your backend is: `http://localhost:8004`

## Core Deliverables

As a user:

1. When the app starts, I can see all currently added comics.
2. When I click on a comic book's image or title, it toggles between showing the image and the title / issue number.
3. I can create comics and they are still there when I refresh the page.
4. I can remove a comic from the collection by clicking "Remove" and it will persist when the page is reloaded.

### Endpoints for Core Deliverables

#### GET /comics

Example Response:

```json
[
  {
    "id": 1,
    "title": "The Incredible Hulk",
    "issue": "1",
    "image_url": "https://i.annihil.us/u/prod/marvel/i/mg/9/a0/59933ea5b5c2e/clean.jpg"
  },
  {
    "id": 2,
    "title": "The Incredible Spiderman",
    "issue": "1",
    "image_url": "https://i.annihil.us/u/prod/marvel/i/mg/d/40/5196582d03800/clean.jpg"
  }
]
```

#### POST `/comics`

Required Headers:

```js
{
  "Content-Type": "application/json"
}
```

Request Object:

```json
{
  "title": "string",
  "issue": "string",
  "img_url": "string"
}
```

Example Response:

```json
{
  "id": 1,
  "title": "Detective Comics",
  "issue": "1",
  "img_url": "http://batman-image-here.png"
}
```

#### DELETE /comics/:id

Example Response:

```json
{}
```

## Advanced Deliverables

These deliverables are not required to pass the code challenge, but if you have the extra time, or even after the code challenge, they are a great way to stretch your skills.

As a user:

1. I can click a button to bring up a form to edit the comic. This change persists.
2. I can click a button to 'favorite' a comic and this is marked in some way. This persists.
