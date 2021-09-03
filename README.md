An attempt at making a layout for my blog.

**Problem**

Assume there are three types of articles: `post`, `link`, and `media`. The blog engine renders them in the usual reverse chronological order. Find a way to

* Create a one-column list of articles &leq; some breakpoint
* Create a two-column list of articles above this breakpoint
  - The left column should only have articles of type `post`
  - The right column should have the remaining article types
    + grouped by type
    + and sorted by date/order
* OK if it's one-column when JS is disabled

**Solution**

We tried to do this only with CSS but that proved impossible. [Rob's solution was more elegant](https://codepen.io/rglazebrook/pen/9aaeec83036cd27a50711f98f5ae9ac1) and involved a minimum of JS but it did split the content into `main` and `aside`. [I just cloned things](https://codepen.io/afreeorange/pen/bGRePdw) 🤣 🐑 
