<h1>What is fakeLoader.js</h1>
<p>
fakeLoader.js is a lightweight jQuery plugin that helps you create an animated spinner with a fullscreen loading mask to simulate the page preloading effect.
</p>
<p>
本库fork自fakeLoader.js，并将其改为了面向对象的方式，增加了几个位置相关的特性（主要是各种居中），用起来更方便。
</p>
<h1>1. Include Styles</h1>
<p>Inside &lt;head&gt; tag </p>
<pre><p>&lt;link rel="stylesheet" href="yourPath/fakeLoader.css"&gt;</p></pre>
<h1>2. Include Folowing Libraries</h1>
<p>JQuery reference and the fakeLoader.js</p>
<pre>
<p>&lt;script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"&gt;</p><p>&lt;script src="yourPath/fakeLoader.min.js"&gt;</p>
</pre>

<h1>3. Basic Initialize</h1>
<p>Include in bottom of your  &lt;body&gt; tag</p>
<pre>
<code>
    &lt;script type="text/javascript"&gt;
        var  fakeLoader = new FakeLoader({
                    bgColor:"#e74c3c",
                    spinner:"spinner2",
					width:'20%',
					height:'20%'
                });
			fakeLoader.mask();	
			fakeLoader.hide();
			fakeLoader.mask();
    &lt;/script&gt;
</code>
</pre>
<p>可以多次调用mask和hide方法。这里的特性如下：
hide调用之前调用了多少次mask就必须调用多少次hide才能隐藏。内部维护的这个次数，不会为负数，也就是说连着调用了100次hide方法，接着调用一次mask方法，mask也会出现。
一般来说，一个页面需要new一个FakeLoader对象。<p>
<h1>4. Options</h1>
<pre>
<code><p>&lt;script type="text/javascript"&gt;</p>
    var  fakeLoader = new FakeLoader({
            timeToHide:-1, // Default Time to hide fakeLoader
            pos:'fixed',// Default Position
            top:'0px',  // Default Top value
            left:'0px', // Default Left value
			right:'0px',
			bottom:'0px',
            width:'100%', // Default width 
            height:'100%', // Default Height
            zIndex: '9999',  // Default zIndex 
            bgColor: '#2ecc71', // Default background color
            spinner:'spinner7', // Default Spinner
			border_radius: '5px',
            imagePath:'' // Default Path custom image
            
    });
     &lt;/script&gt;
</code>
</pre>
<p>配置与官方的JQ版本是一致的，改了几个参数的特性。例如timeToHide=-1时，此参数不管用。不为-1时，不用调用hide方法，mask指定的时间就会消失。</p>

