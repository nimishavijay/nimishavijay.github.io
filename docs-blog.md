14/09/2021 13:38
Tuesday 

# Documenting documentation

## TL;DR
* What: Updating the design documentation used by developers
* Why: The one that existed at the time was outdated by several years
* Who: Jan (the design lead) and me
* When: July-September 2021
* Before: https://docs.nextcloud.com/server/latest/developer_manual/html_css_design/index.html
* After: https://docs.nextcloud.com/server/latest/developer_manual/design/index.html
* Biggest takeaway: Design systems are constantly evolving


One of the first bigger projects I took up at Nextcloud is updating the design part of the documentation. The one that had existed at the time was outdated by a few years, riddled with broken links and dusty HTML examples. The least I could do was make sure it reflected what principles we currently follow.

Thus began my journey of my first documentation project. This was also a good project for someone new because it would give me a nice big picture of all the design concerns we have. 

## Some context

Nextcloud is an open source organisation, meaning anyone can contribute to the codebase. Nextcloud also allows custom apps, plugins, and integration with other softwares, which allows anyone to not only improve the existing software, but build entirely new features and apps. 

These developers who help build Nextcloud are the audience. This documentation should make it easier for regular maintainers of the software to review contributors' work, and for new contributors to easily make design decisions. 

## What I set out to do

I started out with a goal: make myself obsolete. As a designer in an open source organisation, a lot of my work was reviewing designs that a developer had come up with, or propose a design myself for a new feature. Improving the design documentation and guidelines would be an attempt to help devs review their designs and come up with new designs on their own. 

A secondary goal that came up during the process was to help any design contributor understand how design works at Nextcloud — this went hand in hand with the Nextcloud website design page, since it's where anyone looking for info about design would find first. 

## What already exists

There did already exist a set of **design guidelines**, but it was very old. So old that the technology that was used to build the software had since been changed from HTML/CSS/JS to Vue.js. Vue.js is a Javascript library which allows you to easily build encapsulated components that can be reused. Nextcloud already had a library of pre-built components that devs can use to build their app. This was the main reference point.

**The Nextcloud design page** also had information about design at Nextcloud. Although outdated, it contained some broader principles about Nextcloud design. While working on the actual documentation, this was also redesigned to have more relevant content.

Lastly there was a **style guide for marketing** with guidelines about colour, typography and wording for marketing posts but much of this was still relevant to the design of the software. 

## But it didn't work because...

- It was outdated: The biggest problem with the existing documentation was that it was from years ago. The techonolgy used had changed and the way the docs talked about design and components was very different to how devs use it now.

- It was code heavy: The old documentation had examples of code (that was outdated by several) for each component that it explained, making it look messy. 

- It had no context: It had a couple of components and general advice, with no contect about how these would fit together or examples of how and where to use them.

- Not suited to different platforms: There are Nextcloud apps for many platforms like web, Android, iOS and desktop clients, but the docs did not address designing for any of those. It also didn't consider responsiveness for different browsers and browser sizes. 

- It did not address any of the core elements of design like colour, typography, spacing, and icons.

Ultimately, it did not help the developers with design on any app they build, and this is the main goal kept in mind when writing the documentation. 

## What I had to do

This was not about creating a design system — many of the atomic elements already existed. The main goal was to help a developer use these elements correctly and effectively. 

There were a couple of sections that were a must:
- Higher level design principles to keep in mind like simple software, accessiblity, and minimal configuration.
- How atomic elements of design are used like colour, fonts, etc. 
- Components from the Vue library

<version-1-picture> <version-2-picture>

When deciding the structure for the document, I took a top-down approach by looking at the larger patterns in layout, and then break those down and look at the components that made them up. The reason for this approach instead of a bottom-up approach (where you'd start with the atomic components and work your way up to the layout) was because this was how a developer would build an app too. You'd implement the broader aspects of your app before coming to the nitty gritty, and the new docs reflected that.



## Feedback rounds!
After the first draft of the docs there were several rounds of feedback with the engineers, who are the ones who would actually use this. Here are some points that came up that I found interesting:

- Understanding how components are used: many specs that I originally thought were to be set by a developer were actually just baked into the component on the Vue backend. For example, I had assumed a developer would have to make sure their navigation in the app could be accessed through tabbing on the keyboard, but turns out the navigation Vue component would already have keyboard accessible elements built into it. 

- Code snippets are useful: With each component included, it is useful to have a link to the corresponding code snippet in the Vue docs so that the dev can quickly use it, without cluttering the docs with the actual code itself.

- Gaps in the components: Such a thorough examination of the components in the library exposed some technical flaws in the existing components and made it clear that there were a few new ones that are necessary.

- Guidelines for copy: It is useful to have tips about the wording of the content of the app, for example, avoid using first person pronouns such as "I", "my", etc.

- Keep it simple, stupid: I have a bad habit of filling the space up with words.


## Challenges
- A recurring roadbump was about how this documentation had to strike a balance between what existed and what would ideally exist. There were several components that were not perfect but were used in many apps due to legacy reasons. There were components that were part of the Nextcloud component library but weren't used anywhere because it simply wasn't that useful. We were sometimes being idealistic in the design guide and nudging devs to make smarter design decisions but we also had to make sure the docs reflected the current design of the software. 

- Another challenge was finding the balance between imposing rules on how to design something and giving devs the freedom to explore it themselves. As an open source organisation, many Nextcloud apps were developed by contributors. It's important to not enforce rigid rules about every aspect of designing something but lay out some guidelines or suggestions on how to make their app usable and look consistent.

- Android and iOS have their own platform-specific design guidelines and formalising how to balance these with Nextcloud design guidelines was something I found to be a bit tricky. 


## Conclusion

What started out as just a documentation project ended up being a formalisation of the design system of Nextcloud, with 


