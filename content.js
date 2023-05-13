// One  Time Warning
if (!localStorage.getItem('NoWeidianSSOalertShown')) {
    alert(
`ONLY DISPLAYED ONCE,PLEASE READ CAREFULLY.

No Weidian SSO Extension: 
    
Blocking the redirect is a continuous cat and mouse game. Currently, we need to fallback to this temporary solution.

How it works: It will ask you if you want to leave, to which you can say 'no'.
To activate it, you need to click somewhere on the weidian 
page, before the redirect happens.
If you have a fast connection, look into throtting chrome because you need to be faster.
You have to beat it every time you open a weidian page.
If you think this is dumb, just don't play along, this won't harm you. But I want to offer some way to deal with it.`
);
    localStorage.setItem('NoWeidianSSOalertShown', 'true');
}


// Inject redirect block.
var script = document.createElement('script');
script.src = chrome.runtime.getURL('injected.js');
(document.head||document.documentElement).appendChild(script);
script.onload = function() {
    this.remove();
};