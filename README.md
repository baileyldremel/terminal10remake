# Terminal 10 Remake

A complete redo and overhaul of an old university project called **Terminal-10** ([Click here to view the old project](https://github.com/baileyldremel/typefacesampler))

## Why remake the project?

One of the key problems with the old project was that it was not optimised *in any way* for mobile. It was listening to key inputs and had no way for mobile users to type commands as there wasn't a place to type anything into. Basically, it could only be used with a physical keyboard.

You could say that it was sort of the intention of the typeface, *'a display font that is based on old computers and ones and zeroes'* so it should be viewed on desktop. On the other side, majority of people view websites on their phones and not having compatibility for mobile is a huge loss.

I could just optimise the code, but how it was built was entirely through using Javascript via p5js with minimal html and css code. With what I know now, I found it easier to start from scratch.

## How It's Made

**HTML, CSS and JavaScript with the p5js library**

I am familiar with these three languages and they allow me the freedom to create what I want. The **[p5js library](https://github.com/processing/p5.js)** is especially helpful as it makes animation easy to do, plus it's what I am familiar with.

## Key focuses

**Mobile Compatibility - Allowing User Input**

The main reason for starting from scratch was to ensure mobile compatibility. The first problem was user input, which was implemented via a form element that allows for mobile user to enter text into the form. 

A plus with using the form is that, by preventing the default action using JavaScript, I was able to allow the enter button on the mobile keyboard to act submit the text. There is a backup enter button as well just in case.

**Responsive Design**

Making it responsive is key as well. This was easy for desktop, but tricky for mobile. The main input field constantly sits at the bottom of the screen/page. On mobile, once someone taps the field, the on screen keyboard appears and blocks the input field. 

This is my first time using interactive widgets in the meta data which will push all the content upwards when the mobile keyboard appears. It's a lifesaver and prevented weird work around such as changing the CSS of the input field and main text field when the input field is in focus.

**Interactivity and Animation**

With all the changes to how the bones of the project were constructed, the animation and interactivity aspect of the sampler were relatively easy to re-implement. Slight adjustments were made for code efficiency but it's mostly the same as before, at least the bones of it are.

The main difference in animation is instead of animating line by line, I am animating word by word. I was sort of inspired by how AI chat bots like ChatGPT and Gemini display text word by word so I made that change.

The main difference in interactivity is the commands are full words instead of just 4 letters. This is still a work in progress and would need to result in a commands list being implemented to guide users.

## What's next?

The bones of the project are built and ready to go, but there is still a way to go for the project.

Here are some of the things I wish to implement:

- ~~The ability for users to change elements through their input, such as changing the font size by entering numbers.~~ [DONE as of 29/01](https://github.com/baileyldremel/terminal10remake/commit/f94647fe767994b0cd6ebc72b0d3713748120550)
- ~~A command list that can be accessed via a command or through a item in the menu bar.~~ [DONE as of 11/02](https://github.com/baileyldremel/terminal10remake/commit/fa43d621ae174cd4bc3f21d60e1b515804dec211)
- Sound effects, which were included in the previous version of Terminal-10.
- A new typeface to go along with the updated sampler