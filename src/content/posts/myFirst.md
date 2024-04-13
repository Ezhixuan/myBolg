---
title: 一些格式模板
published: 2024-04-13
description: 'some of tamplate'
image: ''
tags: [模板]
category: '模板'
draft: false 
---

## 视频格式

```
---
title: Include Video in the Post
published: 2023-10-19
// ...
---

<iframe width="100%" height="468" src="https://www.youtube.com/embed/5gIf0_xpFPI?si=N1WTorLKL0uwLsU_" title="YouTube video player" frameborder="0" allowfullscreen></iframe>
```

## Front-matter of Posts

```yaml
---
title: My First Blog Post
published: 2023-09-09
description: This is the first post of my new Astro blog.
image: ./cover.jpg
tags: [Foo, Bar]
category: Front-end
draft: false
---
```

| Attribute     | Description                                                  |
| ------------- | ------------------------------------------------------------ |
| `title`       | The title of the post.                                       |
| `published`   | The date the post was published.                             |
| `description` | A short description of the post. Displayed on index page.    |
| `image`       | The cover image path of the post.<br/>1. Start with `http://` or `https://`: Use web image<br/>2. Start with `/`: For image in `public` dir<br/>3. With none of the prefixes: Relative to the markdown file |
| `tags`        | The tags of the post.                                        |
| `category`    | The category of the post.                                    |
| `draft`       | If this post is still a draft, which won't be displayed.     |

## Where to Place the Post Files



Your post files should be placed in `src/content/posts/` directory. You can also create sub-directories to better organize your posts and assets.

```
src/content/posts/
├── post-1.md
└── post-2/
    ├── cover.png
    └── index.md
```
