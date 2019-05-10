---
layout: default
---

<div class="codurance-header" markdown="1">
## Showcase
</div>


{% capture items %}
Table of Contents

- [Button](#button)
- [Icon](#icon)
- [Notification](#notification)
- [Progress Bar](#progress-bar)
- [Tag](#tag)
- [Dark Background](#dark-background)
- [Codurance Header](#codurance-header)
- [Bullet Point](#bullet-point)
- [Modal](#modal)
- [Card](#card)
- [Breadcrumb](#breadcrumb)
- [Tabs](#tabs)
- [Table](#table)
{% endcapture %}
{% include sidebar.html content=items %}

### Button
{% capture button %}
<a class="button is-primary">Primary</a>
<a class="button is-link">Link</a>
<a class="button is-info">Info</a>
<a class="button is-success">Success</a>
<a class="button is-warning">Warning</a>
<a class="button is-danger">Danger</a>
{% endcapture %}
{% include showcase-item.html content=button %}

### Icon
{% capture icon  %}
<span class="icon">
    <i class="fas fa-home"></i>
</span>
{% endcapture %}
{% include showcase-item.html content=icon %}
 
### Notification
{% capture notification %}
<div class="notification is-success">
    <button class="delete"></button>
    Primar lorem ipsum dolor sit amet, consectetur
    adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Sit amet,
    consectetur adipiscing elit
</div>
{% endcapture %}
{% include showcase-item.html content=notification %}


### Progress Bar
{% capture progressbar %}
<progress class="progress is-warning" value="15" max="100">
    15%
</progress> 
{% endcapture %}
{% include showcase-item.html content=progressbar %}

### Tag
{% capture tag %}
<div class="field is-grouped is-grouped-multiline">
    <div class="control">
        <div class="tags has-addons">
            <a class="tag is-link has-background-success">Technology</a>
            <a class="tag is-delete"></a>
        </div>
    </div>
    <div class="control">
        <div class="tags has-addons">
            <a class="tag is-link has-background-success">CSS</a>
            <a class="tag is-delete"></a>
        </div>
    </div>
    <div class="control">
        <div class="tags has-addons">
            <a class="tag is-link has-background-success">Flexbox</a>
            <a class="tag is-delete"></a>
        </div>
    </div>
    <div class="control">
        <div class="tags has-addons">
            <a class="tag is-link has-background-success">Web Design</a>
            <a class="tag is-delete"></a>
        </div>
    </div>
</div>
{% endcapture %}
{% include showcase-item.html content=tag %}

### Dark Background
{% capture dark-background %}
<div class="dark-background">
    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
    <h4>Heading 4</h4>
    <h5>Heading 5</h5>
    <h6>Heading 6</h6>        
    <p>This is a regular piece of text inside a paragraph</p>
</div>
{% endcapture %}
{% include showcase-item.html content=dark-background %}

### Codurance Header
{% capture header %}
<div class="codurance-header">
    <h1>Regular</h1>
</div>
{% endcapture %}
{% include showcase-item.html content=header %}

{% capture header %}
<div class="codurance-header dark-background">
    <h1>Dark Background</h1>
</div>
{% endcapture %}
{% include showcase-item.html content=header %}

{% capture header %}
<div class="codurance-header has-text-centered">
    <h1>Centered Text</h1>
</div>
{% endcapture %}
{% include showcase-item.html content=header %}

{% capture header %}
<div class="codurance-header__strong">
    <h1>Strong Header</h1>
</div>
{% endcapture %}
{% include showcase-item.html content=header %}


### Bullet Point
{% capture bullet-point %}
<div class="bullet-point">
    <h4>Bullet point</h4>
    <p>text for that bullet point</p>
</div>            
{% endcapture %}
{% include showcase-item.html content=bullet-point %}

{% capture bullet-point %}
<div class="dark-background">
    <div class="bullet-point">
        <h4>Bullet point</h4>
        <p>text for that bullet point</p>
    </div>
</div>
{% endcapture %}
{% include showcase-item.html content=bullet-point %}

### Modal
{% capture modal %}
<button class="button is-primary" data-toggle="modal" data-target="exampleModal">
        Open Modal
</button>
<div class="modal" id="exampleModal">
    <div class="modal-background"></div>
    <div class="modal-card">
        <header class="modal-card-head">
            <p class="modal-card-title">Modal title</p>
            <button class="delete" aria-label="close"></button>
        </header>
        <section class="modal-card-body">
            Content ...
        </section>
        <footer class="modal-card-foot">
            <button class="button is-success">Save changes</button>
            <button class="button">Cancel</button>
        </footer>
    </div>    
</div>
{% endcapture %}
{% include showcase-item.html content=modal %}

### Card
{% capture card %}
<div class="card">
  <header class="card-header">
    <p class="card-header-title">
      Component
    </p>
    <a href="#" class="card-header-icon" aria-label="more options">
      <span class="icon">
        <i class="fas fa-angle-down" aria-hidden="true"></i>
      </span>
    </a>
  </header>
  <div class="card-content">
    <div class="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
      <a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
      <br>
      <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
    </div>
  </div>
  <footer class="card-footer">
    <a href="#" class="card-footer-item">Save</a>
    <a href="#" class="card-footer-item">Edit</a>
    <a href="#" class="card-footer-item">Delete</a>
  </footer>
</div>
{% endcapture %}
{% include showcase-item.html content=card %}

### Breadcrumb
{% capture breadcrumb %}
<nav class="breadcrumb" aria-label="breadcrumbs">
  <ul>
    <li>
      <a href="#">
        <span class="icon is-small">
          <i class="fas fa-home" aria-hidden="true"></i>
        </span>
        <span>Codurance</span>
      </a>
    </li>
    <li>
      <a href="#">
        <span class="icon is-small">
          <i class="fas fa-book" aria-hidden="true"></i>
        </span>
        <span>Documentation</span>
      </a>
    </li>
    <li>
      <a href="#">
        <span class="icon is-small">
          <i class="fas fa-puzzle-piece" aria-hidden="true"></i>
        </span>
        <span>Components</span>
      </a>
    </li>
    <li class="is-active">
      <a href="#">
        <span class="icon is-small">
          <i class="fas fa-thumbs-up" aria-hidden="true"></i>
        </span>
        <span>Breadcrumb</span>
      </a>
    </li>
  </ul>
</nav>
{% endcapture %}
{% include showcase-item.html content=breadcrumb %}


### Tabs
{% capture tabs %}
<div class="tabs is-toggle is-toggle-rounded">
  <ul>
    <li class="is-active">
      <a>
        <span class="icon is-small"><i class="fas fa-image"></i></span>
        <span>Pictures</span>
      </a>
    </li>
    <li>
      <a>
        <span class="icon is-small"><i class="fas fa-music"></i></span>
        <span>Music</span>
      </a>
    </li>
    <li>
      <a>
        <span class="icon is-small"><i class="fas fa-film"></i></span>
        <span>Videos</span>
      </a>
    </li>
    <li>
      <a>
        <span class="icon is-small"><i class="fas fa-file-alt"></i></span>
        <span>Documents</span>
      </a>
    </li>
  </ul>
</div>
{% endcapture %}
{% include showcase-item.html content=tabs %}

### Table
{% capture table %}
<table>
  <thead>
    <tr>
      <th><abbr title="Position">Pos</abbr></th>
      <th>Team</th>
      <th><abbr title="Played">Pld</abbr></th>
      <th><abbr title="Won">W</abbr></th>
      <th><abbr title="Drawn">D</abbr></th>
      <th><abbr title="Lost">L</abbr></th>
      <th><abbr title="Goals for">GF</abbr></th>
      <th><abbr title="Goals against">GA</abbr></th>
      <th><abbr title="Goal difference">GD</abbr></th>
      <th><abbr title="Points">Pts</abbr></th>
      <th>Qualification or relegation</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>1</th>
      <td>
        <a href="https://en.wikipedia.org/wiki/Leicester_City_F.C." title="Leicester City F.C.">Leicester City</a> 
        <strong>(C)</strong>
      </td>
      <td>38</td>
      <td>23</td>
      <td>12</td>
      <td>3</td>
      <td>68</td>
      <td>36</td>
      <td>+32</td>
      <td>81</td>
      <td>
        Qualification for the
        <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage" title="2016–17 UEFA Champions League">
          Champions League group stage
        </a>
      </td>
    </tr>
    <tr>
      <th>2</th>
      <td><a href="https://en.wikipedia.org/wiki/Arsenal_F.C." title="Arsenal F.C.">Arsenal</a></td>
      <td>38</td>
      <td>20</td>
      <td>11</td>
      <td>7</td>
      <td>65</td>
      <td>36</td>
      <td>+29</td>
      <td>71</td>
      <td>
        Qualification for the 
        <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage" title="2016–17 UEFA Champions League">
          Champions League group stage
        </a>
      </td>
    </tr>
    <tr>
      <th>3</th>
      <td><a href="https://en.wikipedia.org/wiki/Tottenham_Hotspur_F.C." title="Tottenham Hotspur F.C.">Tottenham Hotspur</a></td>
      <td>38</td>
      <td>19</td>
      <td>13</td>
      <td>6</td>
      <td>69</td>
      <td>35</td>
      <td>+34</td>
      <td>70</td>
      <td>
        Qualification for the 
        <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage" title="2016–17 UEFA Champions League">
          Champions League group stage
        </a>
      </td>
    </tr>
    <tr class="is-selected">
      <th>4</th>
      <td><a href="https://en.wikipedia.org/wiki/Manchester_City_F.C." title="Manchester City F.C.">Manchester City</a></td>
      <td>38</td>
      <td>19</td>
      <td>9</td>
      <td>10</td>
      <td>71</td>
      <td>41</td>
      <td>+30</td>
      <td>66</td>
      <td>
        Qualification for the 
        <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Play-off_round" title="2016–17 UEFA Champions League">
          Champions League play-off round
        </a>
      </td>
    </tr>
  </tbody>
</table>
{% endcapture %}
{% include showcase-item.html content=table %}