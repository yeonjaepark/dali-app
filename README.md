# Lab 4
## Redux Blog

### What I did
In this lab, I made a blog using React and Redux. It has three containers, new post, post, and posts, in which posts is the main default display that you see on the homepage. I made it similar to the mockup that was shown in the lab. I made it so that if you click on the New Post button, it brings you to a new page with the fields that you can fill in to create a post. There is a button at the bottom that creates that post and returns you to the previous page. Also, in the navigation bar, by clicking the blog title, it will always bring you back to the homepage. The posts are also all clickable so that once you click on a post, it brings you to a new page that loads that entire post with the content. To edit any of the fields, simply click on the text, which will open up a textarea. To save what you edited, just click outside of the textarea. I used onBlur for this, so you must first focus the textarea by clicking on it to change it before you click outside of it. Once you click outside of the text area, it will push your updates and store it. There is also a delete button at the bottom of the screen that will delete that post and bring you back to the previous page. To return to the homepage at any time, you can simply click on the blog title (Puppy Love).

### Extra credit
* can only create a new form if all the fields have been filled in (stays on the page until you fill in all fields or you return to the homepage)
