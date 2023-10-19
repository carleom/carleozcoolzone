---
title: A personal music player progress log
description: 
slug: a-music-player
created: 2023-10-19T12:21
updated: 2023-10-19T16:04
---
# Links
- [Github Repo](https://github.com/carleom/a-music-player)
- [Musify](https://github.com/gokadzev/Musify)
- [Flutter](https://flutter.dev/)

# Story
Whenever I am in the car listening to music, all of my music apps keep doing this annoying predictive shuffle? Where it will play the first few songs of the album I picked, but then after like 3-4 songs it will start playing music I never requested. This has led me to cancel all of my music streaming services out of frustration and decide to make my own.

I originally was going to use react native since I have some more experience using that, but I haven't been able to get it running on my linux machine without a bunch of headache. Where as flutter has been really easy to get up and running.

# Plan
- [x] Find an open source music player built with flutter
- [x] Remake UI
- [x] Remove excessive features
- [x] Reskin to gruvbox theme
- [ ] Implement an RSS feed to follow different band pages and blogs

# Progress 
- I decided on using [this](https://github.com/gokadzev/Musify) project called Musify by Gokadzev. I got it running on my local machine pretty easily and it has all of the features I was looking for.
- App seems to not run when I run it in 'Linux' or 'Chrome' mode. I get an "HiveBox Not Found" error.
- Got the app running by starting up a phone emulator (see note) and then running with `flutter run --flavor github`. 
- I don't think I need to reskin with gruvbox anymore. It looks nice enough using the gruvbox colors and material3. Any more effort in that department I think would be wasted time since it looks good as is.
- I also don't need to modify the UI as much as I was planning. Its really just adding an RSS feed.
- Hitting some dependency issues when setting up the RSS feed. The music app seems to not play nicely with the pre written RSS feed plugins.
- Finally found an updated rss flutter package for flutter 3
- RSS Feed is pulled into widget. Need to build widget based on the pulled data now.

# Notes
- Bottom right hand of vscode has where you start up the phone emulators. Once a phone emulator is spun up, when you run `flutter run` you can pick the phone from the list.
- App styling under `lib/style/app_themes.dart`