# General

Link to the Site: https://ukidevelopers.co.uk

All merges into master will trigger a new build. Pull requests will be merged by Graeme in the future, Florian will merge them before we go live.

# Installation and Development
Install: 
```bash
	brew install hugo
```
Get repo and start development server:
```bash 
	git clone https://github.com/florianmoss/uki-redhat-developers.git
	cd uki-redhat-developers
	hugo -D server
```

# Adding content - Automatically 
Simply submit a new response to this [form](https://docs.google.com/forms/d/e/1FAIpQLSfdqhggSHTDHcXGvrOJzi4uqd2NPy3pdXF69kuUtYQLP-lGEQ/viewform?usp=sf_link). Every response will trigger a new build and automatically create a new blog post. Nothing else to do.

# Adding content - Manually

If you want to add new content in the form of a Blog post, you can do so by adding a new post to `/uki-redhat-developers/content/blog`. Simply add a new post with the next available Integer. Each blog post has metadata in the form of:
```
---
title: "Title of your Post"
# Example Date
date: 2020-10-19T10:07:47+06:00
# If set to true, the post will not appear on the site, only the development server
draft: false

# post thumbnail - add your image the /uki-redhat-developers/static/images/post directory
image: "images/post/<filename>"

# meta description
description: "Some desc...."

# taxonomies are 1 or more Red Hat Products such as: OpenShift, Advanced Cluster Management, Fuse
categories:
  - "OpenShift"
# tags are 1 or more topics such as: Machine Learning, Middleware, Beginner Friendly
tags:
  - "Introduction"

# post type, this can be 'post' or 'featured' - a featured post will be prominent on the page.
type: "post"
---
```

The actual content for your post can be written in markdown. Images can be added in the same way as thumbnail images are added. 
Some example are:
```
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6

<hr>

##### Emphasis

Emphasis, aka italics, with *asterisks* or _underscores_.

Strong emphasis, aka bold, with **asterisks** or __underscores__.

Combined emphasis with **asterisks and _underscores_**.

Strikethrough uses two tildes. ~~Scratch this.~~

<hr>

##### Link
[I'm an inline-style link](https://www.google.com)

[I'm an inline-style link with title](https://www.google.com "Google's Homepage")

[I'm a reference-style link][Arbitrary case-insensitive reference text]

[I'm a relative reference to a repository file](../blob/master/LICENSE)

[You can use numbers for reference-style link definitions][1]

Or leave it empty and use the [link text itself].

URLs and URLs in angle brackets will automatically get turned into links.
http://www.example.com or <http://www.example.com> and sometimes
example.com (but not on Github, for example).

Some text to show that the reference links can follow later.

[arbitrary case-insensitive reference text]: https://www.mozilla.org
[1]: http://slashdot.org
[link text itself]: http://www.reddit.com

<hr>

##### Paragraph

Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nihil enim maxime corporis cumque totam aliquid nam sint inventore optio modi neque laborum officiis necessitatibus, facilis placeat pariatur! Voluptatem, sed harum pariatur adipisci voluptates voluptatum cumque, porro sint minima similique magni perferendis fuga! Optio vel ipsum excepturi tempore reiciendis id quidem? Vel in, doloribus debitis nesciunt fugit sequi magnam accusantium modi neque quis, vitae velit, pariatur harum autem a! Velit impedit atque maiores animi possimus asperiores natus repellendus excepturi sint architecto eligendi non, omnis nihil. Facilis, doloremque illum. Fugit optio laborum minus debitis natus illo perspiciatis corporis voluptatum rerum laboriosam.

<hr>

##### List

1. List item
2. List item
3. List item
4. List item
5. List item

##### Unordered List

* List item
* List item
* List item
* List item
* List item

<hr>

##### Blockquote

> This is a blockquote example.

<hr>

##### Inline HTML

You can also use raw HTML in your Markdown, and it'll mostly work pretty well.

<dl>
  <dt>Definition list</dt>
  <dd>Is something people use sometimes.</dd>

  <dt>Markdown in HTML</dt>
  <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</dl>


<hr>

##### Tables

Colons can be used to align columns.

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

There must be at least 3 dashes separating each header cell.
The outer pipes (|) are optional, and you don't need to make the
raw Markdown line up prettily. You can also use inline Markdown.

Markdown | Less | Pretty
--- | --- | ---
*Still* | `renders` | **nicely**
1 | 2 | 3

<hr>

##### Image

![image](../../images/post/post-1.jpg)

<hr>

##### YouTube Video
{{< youtube rAsfStufbTw >}}
```

# Style changes
If you encounter any issues with styling, you can make changes under `themes/liva/hugo/assets/scss/_variables.scss`.
