Thorax todo with Backbone.localStorage
=======================================

Up and running quickly with Thorax and [backbone.localStorage.js](https://github.com/jeromegn/Backbone.localStorage)

Add [backbone.localStorage.js](https://github.com/jeromegn/Backbone.localStorage) to public folder

1) In index.html just before the closing body tag and after ```<script type="text/javascript" src="/modules/base.js"></script>``` add  ```<script src="backbone.localStorage.js"></script>```

2) When creating a collection specify ```localStorage: new Backbone.LocalStorage("collection-name")```

3) Use create(), save(), fetch(), destroy() etc. on collection and models

4) ???

5) Profit!





