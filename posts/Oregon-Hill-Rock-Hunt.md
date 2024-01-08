---
created: 2024-01-08T13:02
updated: 2024-01-08T14:37
---
# About
When I was a child, I was really obsessed with treasure hunts. I remember reading about how to make a treasure map and hide it in the "Dangerous Book for Boys". I was sold on the idea that hiding maps to treasure was just something everyone did at some point and the world was full of them. Id comb the neighborhood with a metal detector and pull out loose bricks expecting to find some sort of hint to start an adventure. Unfortunately no adventures ever came, but the spirit of it all stuck with me. I wanted to do something similar for the handful of kids / people in my neighborhood so I came up with the 'Oregon Hill Rock Hunt'. 

The premise: I put some NFC tags on a handful of painted rocks, then scattered them around my neighborhood. From the website you can go to a rocks coordinates, then scan the NFC tag to pull up its unique 'claim' page. After you can peel the sticker off and do whatever you want with the rock. 

# How it's made
## Frontend
Frontend tech stack:
- [React](https://react.dev/)
- [Chakra UI](https://chakra-ui.com/)
- [Tailwind CSS](https://tailwindcss.com/)

I don't know if this is my ideal frontend tech stack. I wouldn't have minded making all my own components by hand but I have been wanting to try out different component libraries to get an idea of what an ideal user experience would be for a future project. Chakra UI comes pretty close! All of the components worked exactly as expected and the default styling options were usually enough for this use case. Tailwind in combination with a component library felt like a bit of an overkill but I don't really like managing CSS files. So for the few times I wanted to more control over the styling tailwind did the job nicely. The frontend is hosted on [Netlify](https://www.netlify.com/) . I used to host everything with a small linux server on DigitalOcean/Heroku/AWS but for the past few projects it has been with Netlify due to its ease of use.
## Backend
Backend Tech Stack: 
- [Pocketbase](https://pocketbase.io/)

I love pocketbase! Usually getting the backend setup is my least favorite part of a project but pocketbase made it hardly any effort. I currently have it running on a linode instance but will migrate it to https://pockethost.io/ after my free credits are up.

# Other Thoughts
I wanted all the orange ones to kinda be like 'ads'. I hid them in plain sight around a childs eye level in hopes they'd find them and kinda start the hunt. Then once they went to the website they could see some of the cooler looking rocks and then set out to find those. Hopefully the plan works and I can keep painting/hiding rocks with each season. I have couple more ideas of themes to do once winter is over. I also figured if it wasn't getting the traction I expected to start putting up some posters around the neighborhood.

I also didn't obscure the 'ID' of the rocks too well. You could find the 'ID' necessary to claim a rock on the rock image URL. And then from there you can claim any rock. I have a plan to scramble the IDs. But I figured I would cross that bridge once someone actually abuses the website.
# Closing Thoughts
This was a good project for me to get back into coding for fun! After a few years of only doing it for work I kinda lost my passion for it. But this has reminded me how easy it is to make fun things. 
