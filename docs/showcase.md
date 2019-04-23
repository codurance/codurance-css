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