const temp = [];

$.getJSON("https://raw.githubusercontent.com/zyang888/html300/master/lesson03/assignment/data/data.json", function(data) {
  $.each(data, function(idx, obj){
          temp.push(obj);
  });
  const resHTML = temp.map((person)=>`
      <article class="main">
  			<section class="profile">
  				<img src="./img/unsplash-headshot.jpg" alt="profile-picture">
  				<h1> ${person.name}</h1>
  				<p> ${person.jobTitle}</p>
  			</section>
  			<section class="info">
  				<p><b>Company:</b> ${person.company}</p>
  				<p><b>Experience:</b> ${person.experience}</p>
  				<p><b>School:</b> ${person.school}</p>
  				<p><b>Major:</b> ${person.major}</p>
  				<p><b>Email:</b> ${person.email}</p>
  				<div><img src="./img/linkedin.svg" alt=""><a href=""> ${person.linkedInUrl}</a></div>
          <p><b>Code Languages:</b> ${person.codeLanguages}</p>
  			</section>
  		</article>`);
  $("main").append(resHTML);
});
