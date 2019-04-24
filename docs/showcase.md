---
layout: default
---

# Showcase

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
<div class="notification is-success" style="max-width: 38rem; margin: -0.5rem">
    <button class="delete"></button>
    Primar lorem ipsum dolor sit amet, consectetur
    adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Sit amet,
    consectetur adipiscing elit
</div>
{% endcapture %}
{% include showcase-item.html content=notification %}


### Progress Bar
{% capture progressbar %}
<progress class="progress is-warning" value="15" max="100" style="max-width: 36rem; margin: -0.5rem">
    15%
</progress> 
{% endcapture %}
{% include showcase-item.html content=progressbar %}

### Tag
{% capture tag %}
<div class="field is-grouped is-grouped-multiline">
    <div class="control">
        <div class="tags has-addons">
            <a class="tag is-link">Technology</a>
            <a class="tag is-delete"></a>
        </div>
    </div>
    <div class="control">
        <div class="tags has-addons">
            <a class="tag is-link">CSS</a>
            <a class="tag is-delete"></a>
        </div>
    </div>
    <div class="control">
        <div class="tags has-addons">
            <a class="tag is-link">Flexbox</a>
            <a class="tag is-delete"></a>
        </div>
    </div>
    <div class="control">
        <div class="tags has-addons">
            <a class="tag is-link">Web Design</a>
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