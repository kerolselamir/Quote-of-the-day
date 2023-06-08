
var arr= [
    // 1
   `“Be yourself; everyone else is already taken.”
   <br>
    <br>
   <img src="img/1.jpg"  alt=""> Oscar Wilde  `,
// 2
    `
    “I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”
    <br>
     <br>
    <img src="img/2.jpg"  alt=""> Marilyn Monroe `,
// 3
   `
  “Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”
  <br>
   <br>
<img src="img/3.jpg"  alt=""> Albert Einstein  `,
// 4
   `“So many books, so little time.”
   <br>
    <br>
<img src="img/4.jpg"  alt=""> Frank Zappa  `,
// 5
    `
“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”
<br>
 <br>
<img src="img/5.jpg"  alt=""> Bernard M. Baruch `
,
// 6
    `
William W. Purkey
“You've gotta dance like there's nobody watching,
Love like you'll never be hurt,
Sing like there's nobody listening,
And live like it's heaven on earth.”
<br>
 <br>
<img src="img/6.jpg"  alt=""> William W. Purkey  `
,
// 7
`“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”
<br>
 <br>
<img src="img/7.jpg"  alt=""> Dr. Seuss `
,
// 8
`“You only live once, but if you do it right, once is enough.”
<br>
 <br>
<img src="img/8.jpg"  alt=""> Mae West  `
 ,
 // 9
 `
 “In three words I can sum up everything I've learned about life: it goes on.”
 <br>
  <br>
 <img src="img/9.jpg"  alt=""> Robert Frost  `
 ,
// 10
`“Be the change that you wish to see in the world.”
<br>
<br>
<img src="img/10.jpg"  alt=""> Mahatma Gandhi  `
,
// 11
`“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”
<br>
<br>
<img src="img/11.jpg"  alt="">  J.K. Rowling, Harry Potter and the Goblet of Fire   `
,
// 12
`“Don’t walk in front of me… I may not follow
Don’t walk behind me… I may not lead
Walk beside me… just be my friend” 
<br>
<br>
<img src="img/12.jpg"  alt=""> Albert Camus   `
,
// 13
`“If you tell the truth, you don't have to remember anything.” 
<br>
<br>
<img src="img/13.jpg"  alt=""> Mark Twain   `
,
// 14
`
“Friendship ... is born at the moment when one man says to another "What! You too? I thought that no one but myself . . .” 
<br>
<br>
<img src="img/14.jpg"  alt=""> C.S. Lewis, The Four Loves   ` ,
// 15
`“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.” 
<br>
<br>
<img src="img/15.jpg"  alt="">  Maya Angelou  `
,
// 16
`“A friend is someone who knows all about you and still loves you.” 
<br>
<br>
<img src="img/16.jpg"  alt=""> Elbert Hubbard   `


 
 

]




 function randomQ()
{

  var quoate_index= Math.trunc(Math.random()*15) 

  var quoate= arr[quoate_index]
document.getElementById('qote-of-day').innerHTML=quoate


}

