const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile_img');
const name = document.getElementById('name');
const date = document.getElementById('date');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_texts = document.querySelectorAll('.animated-bg');

setTimeout(getData, 2500);

function getData() {
	header.querySelector('img').style.display = 'block';
	title.innerHTML = 'Lorem ipsum dolor sit amet'
	excerpt.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, sint.'
	profile_img.innerHTML = `<img src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?auto=format&fit=crop&q=80&w=1856&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />`
	name.innerHTML = 'Yuvraj singh';
	date.innerHTML = 'Oct 30 , 2023';
	
	animated_bgs.forEach(bgs => { bgs.classList.remove('animated-bg') });
	animated_bg_texts.forEach(bgs => { bgs.classList.remove('animated-bg-text') });
}