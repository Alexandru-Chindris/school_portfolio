/* ============================== typing animation ============================ */
var typed = new Typed(".typing",{
    strings:["sistemista","web developer", "appassionato di informatica"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})
/* ============================== Aside ============================ */
const nav = document.querySelector(".nav"),
      navList = nav.querySelectorAll("li"),
      totalNavList = navList.length,
      allSection = document.querySelectorAll(".section"),
      totalSection = allSection.length;
      for(let i=0; i<totalNavList; i++)
      {
          const a = navList[i].querySelector("a");
          a.addEventListener("click", function()
          {
              removeBackSection();
              for(let j=0; j<totalNavList; j++)
              {
                  if(navList[j].querySelector("a").classList.contains("active"))
                  {
                      addBackSection(j);
                     // allSection[j].classList.add("back-section");
                  }
                  navList[j].querySelector("a").classList.remove("active");
              }
              this.classList.add("active")
              showSection(this);
              if(window.innerWidth < 1200)
              {
                  asideSectionTogglerBtn();
              }
          })
      }
      function removeBackSection()
      {
        for(let i=0; i<totalSection; i++)
        {
            allSection[i].classList.remove("back-section");
        }   
      }
      function addBackSection(num)
      {
        allSection[num].classList.add("back-section");
      }
      function showSection(element)
      {
          for(let i=0; i<totalSection; i++)
          {
              allSection[i].classList.remove("active");
          }
          const target = element.getAttribute("href").split("#")[1];
          document.querySelector("#" + target).classList.add("active")
      }
      function updateNav(element)
      {
          for(let i=0; i<totalNavList; i++)
          {
              navList[i].querySelector("a").classList.remove("active");
              const target = element.getAttribute("href").split("#")[1];
              if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1])
              {
                navList[i].querySelector("a").classList.add("active");
              }
          }
      }
      const navTogglerBtn = document.querySelector(".nav-toggler"),
            aside = document.querySelector(".aside");
            navTogglerBtn.addEventListener("click", () => 
            {
                asideSectionTogglerBtn();
            })
            function asideSectionTogglerBtn()
            {
                aside.classList.toggle("open");
                navTogglerBtn.classList.toggle("open");
                for(let i=0; i<totalSection; i++ )
                {
                    allSection[i].classList.toggle("open");
                }
            }
// balls background in Home
// Some random colors
const colors = ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"];

const numBalls = 50;
const balls = [];

for (let i = 0; i < numBalls; i++) {
  let ball = document.createElement("div");
  ball.classList.add("ball");
  ball.style.background = colors[Math.floor(Math.random() * colors.length)];
  ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
  ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
  ball.style.transform = `scale(${Math.random()})`;
  ball.style.width = `${Math.random()}em`;
  ball.style.height = ball.style.width;
  
  balls.push(ball);
  document.body.append(ball);
}

// Keyframes
balls.forEach((el, i, ra) => {
  let to = {
    x: Math.random() * (i % 2 === 0 ? -11 : 11),
    y: Math.random() * 12
  };

  let anim = el.animate(
    [
      { transform: "translate(0, 0)" },
      { transform: `translate(${to.x}rem, ${to.y}rem)` }
    ],
    {
      duration: (Math.random() + 1) * 2000, // random duration
      direction: "alternate",
      fill: "both",
      iterations: Infinity,
      easing: "ease-in-out"
    }
  );
});