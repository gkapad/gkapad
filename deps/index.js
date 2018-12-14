'use strict';

let el=(s)=>{
	this.dom=document.querySelector(s);
	this.text=(t)=>{if(this.dom)this.dom.innerText=t;return(this);}
	this.html=(h)=>{if(this.dom)this.dom.innerHTML=h;return(this);}
	this.attr=(k,v)=>{if(this.dom)this.dom.setAttribute(k,v);return(this);}
	this.js=(src)=>{
		if(!this.dom) this.dom=document.head;
		let f=this.dom.getElementsByTagName('script')[0], j=document.createElement('script');
		j.async=true;j.setAttribute('type','application/javascript');j.src=src;
		f.parentNode.insertBefore(j,f);
		return(this);
		};
	this.style=(src)=>{
		if(!this.dom) this.dom=document.head;
		let f=this.dom.getElementsByTagName('link')[0], j=document.createElement('link');
		j.setAttribute('href',src);j.setAttribute('rel','stylesheet');j.setAttribute('type','text/css');
		f.parentNode.insertBefore(j,f);
		return(this);
		};
	return(this);
	};


function x(html,delay){
	let intro=el('#intro').dom;
	delay=delay||500;
	intro.innerText='';
	for(let c of html)
		requestAnimationFrame(()=>setTimeout(()=>{intro.innerHTML+=c},delay));
}



window.addEventListener('load',(e)=>{
	console.log('gkapad@', new Date());
	console.log('gkapad@', location.origin, location.pathname);

	el().style('./cdn/fa5.1/css/all.css');
	el().style('./cdn/FiraCode/fira_code.css');

	let icon_url='https://avatars1.githubusercontent.com/u/17152917?s=96&v=4';
	let title='gkapad@/'+location.host.replace('gkapad.','');

	document.title=title;
	el('#intro').html('<i class="fa fas fa-2x fa-spin fa-spinner"></i>');
	el('#host').text(document.title);
	el('#update').text(TIMESTAMP);
	el('#icon').attr('data',icon_url);

	el('head link[rel="icon"]').attr('href',icon);
	el('head link[rel="shortcut icon"]').attr('href',icon);

	fetch('./README.md')
	.then((res)=>{if(!res.ok)throw(res);res.text().then(html=>{x(html)})})
	.catch(error=>{el('#intro').text('')});
});