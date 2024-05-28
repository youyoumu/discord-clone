# Discord Clone

React app created with Next.js and Ruby on Rails backend.

<p align=center>
<img src="https://github.com/youyoumu/discord-clone/blob/main/preview_1.png" width="720" height="auto" >
</p>

## Feature

- User account
- Create server and channel
- Discover server made by other users
- Set user and server profile
- Set avatar, icon, banner picture with direct url
- Send, edit, and delete message
- View server members with their last login
- Light and Dark mode

### Future plan

- [ ] Markdown support (image, url, code block)
- [ ] Emoji
- [ ] Drag and sort server/channel
- [ ] Chat room pagination
- [ ] Admin role to delete member's message
- [ ] Read only channel

## Technology Used

- Ruby on Rails
- Next.js
- Shadcn

## Installation

Clone this repository
```
git clone git@github.com:youyoumu/discord-clone.git
cd discord-clone
```
Install required gem
```
bundle install
```
Setup database
```
rails db:create
rails db:migrate
```
Precompile assets
```
rails assets:precompile
```
Setup Next.js
```
cd nextjs
npm install
```

## Usage
To run the app in development enviroment
```
rails server
```
Open new terminal and
```
cd nextjs
npm run dev
```
