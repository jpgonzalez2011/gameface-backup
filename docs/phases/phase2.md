# Phase 2: Flux Architecture for User Profiles, Post CRUD.

## Rails
### Models
  - Profile Photo
  - Cover Photo
  - Post

### Controllers
  - Profile Photos
  - Cover Photos
  - Posts

### Views
  - ProfilePhotos - jbuilder
  - CoverPhotos - jbuilder
  - Posts - jbuilder

## Flux
### Views (React Components)
  - App
    - Main
      - Navigation Header 
    - Profile
      - Cover Photo
      - Left Profile Information
        - Profile Picture
        - Friends Container
      - Right Content Container
        - Navigation Bar (About, Wall, Friends)
          - Wall
            - Post Form
            - Posts Display/Index
          - About
            - Left Navigation Pane
              - Right Content Pane
          - Friends
            - Friends Listing
### Stores
- Profile

### Flux API Actions
  Receive Profile
  
###Flux API Util
  - Fetch Profile
  - Edit Profile
  - Fetch Profile Photo
  - Edit Profile Photo
  - Fetch Cover Photo
  - Edit Cover Photo

###Flux Libraries
 React Router
