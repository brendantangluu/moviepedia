import {useState} from 'react'

function Reviews({ reviewData }) {

  const [isOpen, setIsOpen] = useState(false);
  const lineClamp = 'line-clamp-5';

    return (
      <div>
        <div className='px-2'>
            {reviewData.author_details.rating > 1 && (
                <>
                    <h3>{reviewData.author}</h3>
                    <div className='flex align-middle'>
                      <p>{reviewData.author_details.rating.toFixed(1)}</p>
                      <svg className="ml-1 self-center" xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 24 26" fill="yellow">
                                    <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>
                                  </svg>
                    </div>
                    <p className={`${!isOpen ? lineClamp : ''}`}>{reviewData.content}</p>
                    <button onClick = {() => setIsOpen(!isOpen)} className="mb-10 mt-2 text-logo">{isOpen ? 'Read Less...' : 'Read More...'}</button>    
                </>
            )}
        </div>
      </div>
    ); 
  }
  
  export default Reviews;
  
  
  // [
  //   {
  //       "author": "CinemaSerf",
  //       "author_details": {
  //           "name": "CinemaSerf",
  //           "username": "Geronimo1967",
  //           "avatar_path": "/1kks3YnVkpyQxzw36CObFPvhL5f.jpg",
  //           "rating": 7
  //       },
  //       "content": "The opening bars of \"Pure Imagination\" give us a clue as to what's coming next, and for the most part it's a strong testament to the engaging and charismatic man playing the eponymous chocolatier. He arrives is a town controlled by a chocolate cartel that is determined to use any means possible to ensure he can't fulfil his dream. That dream? Well ever since he was a child, he has wanted to make chocolate as well as his mother (Sally Hawkins). To do that, though, he needs a shop - and without a silver sovereign to his name that's not going to happen. It's winter, so his first order of business is somewhere to sleep. Luckily (?!?) \"Bleacher\" (Tom Davis) finds him on a cold bench and takes him to the welcoming arms of \"Mrs. Scrubbit\" (Olivia Colman) who offers him a bed for the night, though pretty soon he realises it's more of a bed in return for a life of indentured laundry servitude. Still, he's ingenious and he doesn't lose sight of his goal, so together with his fellow inmate \"Noodle\" (Calah Lane) and book-keeper \"Abacus Crunch\" (Jim Carter) they concoct a plan to addict the population to the young man's sweets whilst bringing down the evil trio of truffle terrorisers and ensuring \"Scrubbit\" and \"Bleacher' get their comeuppance too!. Meantime \"Wonka\" has other problem. Someone is pinching his product! An elaborate trap and a large jar introduce us to a tiny \"Oompa-Loompa\" (Hugh Grant) who looks like he's spent way too long on the sun-bed. With his own debt to pay, the two agree an alliance that - well we all know what happens to that. It's a little over-choreographed, I think, and the original songs are not especially memorable, but it doesn't hang about and there's no doubting that Chalamet is enjoying himself, and that's a little bit contagious and we head to a denouement that takes fondue to a ridiculous level... It features a strong and well matched ensemble cast and though maybe a little too long, I did enjoy it.",
  //       "created_at": "2023-12-11T11:10:25.698Z",
  //       "id": "6576ee219451e70fea6e5a6d",
  //       "updated_at": "2023-12-11T11:10:25.818Z",
  //       "url": "https://www.themoviedb.org/review/6576ee219451e70fea6e5a6d"
  //   },
  //   {
  //       "author": "r96sk",
  //       "author_details": {
  //           "name": "",
  //           "username": "r96sk",
  //           "avatar_path": null,
  //           "rating": 8
  //       },
  //       "content": "Enjoyed this!\r\n\r\n2023's <em>'Wonka'</em> is very good! It's an original story based upon the Roald Dahl novel, so it isn't an adaptation as such like the 1971 and 2005 flicks. With that I didn't find it quite as interesting as what's portrayed in the aforementioned films, but I do appreciate (and prefer, tbh) that they went a different way with it here. And it comes out nicely.\r\n\r\nTimothée Chalamet gives a strong performance in the lead role. Those behind Chalamet are entertaining, from Calah Lane to Keegan-Michael Key to the trio of Paterson Joseph, Matt Lucas and Mathew Baynton - the latter three's dance number for the Chief of Police near the beginning is amusing. The musical elements in general are solid.\r\n\r\nTom Davis and Olivia Colman are fun too. All characters played by those mentioned above after Lane could've easily have been extremely cringey, but thankfully I didn't find that to be the case for any of them at all - very well written, shown and cast in that regard.\r\n\r\nSomeone I have yet to mention is a certain someone as Lofty, an Oompa-Loompa. Hugh Grant is excellent as the orange-skinned, green-haired fellow, even if they did use Grant's best bits in the trailers; which I usually avoid due to those sort of (albeit minor) spoilers, but evidently failed to do so here.\r\n\r\nAll in all, I'd say this is a success. Credit to them for delivering, especially as I was kinda nonplussed by the already noted trailers (Grant aside).",
  //       "created_at": "2023-12-13T17:49:55.027Z",
  //       "id": "6579eec34bfa545d010ab597",
  //       "updated_at": "2023-12-13T17:49:55.163Z",
  //       "url": "https://www.themoviedb.org/review/6579eec34bfa545d010ab597"
  //   },
  //   {
  //       "author": "Manuel São Bento",
  //       "author_details": {
  //           "name": "Manuel São Bento",
  //           "username": "msbreviews",
  //           "avatar_path": null,
  //           "rating": 7
  //       },
  //       "content": "FULL SPOILER-FREE REVIEW @ https://www.firstshowing.net/2023/review-paul-kings-wonka-musical-is-a-truly-delightful-origin-story/\r\n\r\n\"Wonka offers a fresh perspective on the iconic character while paying homage to Roald Dahl's timeless tale of morality.\r\n\r\nPaul King succeeds in delivering a jolly, entertaining, visually dazzling take on the origins of Willy Wonka, featuring a fearlessly committed cast, tons of humor, and colorful, immersive technical achievements.\r\n\r\nDespite the predictable, formulaic narrative lacking the same creativity of other filmmaking departments, it remains a sweet, harmonious, satisfying viewing experience that should be seen on the big screen.\"\r\n\r\nRating: B+",
  //       "created_at": "2023-12-15T16:50:33.850Z",
  //       "id": "657c83d9e93e95218eac6a44",
  //       "updated_at": "2023-12-15T16:50:33.956Z",
  //       "url": "https://www.themoviedb.org/review/657c83d9e93e95218eac6a44"
  //   },
  //   {
  //       "author": "betterlikethat",
  //       "author_details": {
  //           "name": "",
  //           "username": "betterlikethat",
  //           "avatar_path": null,
  //           "rating": null
  //       },
  //       "content": "**A Sweet Delight for All Ages - Wonka Movie Review**\r\nI recently had the pleasure of watching the latest cinematic treat, Wonka, and I must say it's a delightful experience that caters to audiences of all ages. As a busy software engineer with a penchant for quality family time, I couldn't have asked for a better choice for our movie night.\r\n\r\nFrom the moment the film began, it whisked us away on a whimsical journey into the magical world of Wonka's chocolate factory. The visual spectacle and attention to detail were captivating, and I found myself marveling at the creativity on screen. The vibrant colors and imaginative set designs truly brought the beloved story to life.\r\n\r\nWhat sets Wonka apart is its ability to strike a perfect balance between nostalgia for those familiar with the classic tale and a fresh, modern twist that keeps the storyline engaging. The characters are charming, and the casting choices are spot-on. Timothee Chalamet as Wonka brings a new energy to the character, and his performance is both endearing and entertaining.\r\n\r\nI came across this movie at :\r\nhttps://mustwatchmovies.xyz/movie/114901/wonka\r\n\r\nOne aspect that stood out to me, as someone deeply involved in technology, was the seamless integration of CGI and practical effects. The visual effects team did a commendable job, creating a world that felt both magical and believable. The attention to detail, from the intricate machinery in the factory to the playful Oompa Loompas, was truly commendable.\r\n\r\nWonka is not just a feast for the eyes; it also delivers a heartwarming message about the importance of imagination, creativity, and the joy of shared experiences. As someone who manages an affiliate network and values family time, I can confidently recommend this movie for a fun-filled outing with loved ones.\r\n\r\nIn conclusion, Wonka is a cinematic delight that appeals to the child in all of us. Whether you're a parent looking for a wholesome family film or just someone who appreciates a well-crafted story, this movie is a must-see. Grab your tickets, some popcorn, and treat yourself to a heartwarming adventure that will leave you with a sweet taste of nostalgia.",
  //       "created_at": "2023-12-21T11:09:34.407Z",
  //       "id": "65841cee55bc35577c181963",
  //       "updated_at": "2023-12-22T22:10:13.067Z",
  //       "url": "https://www.themoviedb.org/review/65841cee55bc35577c181963"
  //   },
  //   {
  //       "author": "farthington",
  //       "author_details": {
  //           "name": "",
  //           "username": "farthington",
  //           "avatar_path": null,
  //           "rating": null
  //       },
  //       "content": "Unfortunately, this movie fails marvelously. It has such incredible potential. The imagined prequel is consistent with Ronald Dahl's charm and wit. Timothee Chalamet’s performance was sensational. The supporting cast including Keegan Michael Keye, Patterson Joseph, Hugh Grant, Olivia Coleman and Jim Carter were all at their best.\r\n\r\nThe film falls short with the casting director's (Nina Gold's) attempt to find new talent in a novice actress named Calah Lane who stars in the movie opposite Timothee Chalamet as the character known as Noodle. The character itself is drawn well but the performance is so dreadful by Lane that it single-handedly destroys what could and should have been a classic prequel to Dahls original masterpiece. Lane throws out all her lines without any emotion and spends no time listening to her supporting cast. The writing becomes meaningless and almost immediately you do not find yourself caring about the Noodle character at all. This becomes quickly distracting to any audience member who has an inclination to invest in the story or other characters in the movie. The film completely dies and falls short on this one performance because the character of Noodle is drawn in such a way that her present and future well-being is central to the strength of the story's momentum.\r\n\r\nOne has to blame the casting director Nina Gold first. Nina Gold's work on projects like Bad Sisters, Game of Thrones and The Crown has been quite exceptional but in terms of finding new talent for this prospective cinema masterpiece just is not consistent with her previous achievements. I would also say that the failure of this film should also fall on Director Paul King's shoulders who also needs to bare the burden of this complete and utter disaster of a decision to put poor Calah Lane in this role and have all of us suffer this miserable performance and ultimately crushing blow to Roald Dahl's reputation as a storyteller and great wit.",
  //       "created_at": "2024-01-02T19:31:45.754Z",
  //       "id": "659464a1ebb99d5f1a9eacab",
  //       "updated_at": "2024-01-05T18:55:27.423Z",
  //       "url": "https://www.themoviedb.org/review/659464a1ebb99d5f1a9eacab"
  //   },
  //   {
  //       "author": "BornKnight",
  //       "author_details": {
  //           "name": "",
  //           "username": "BornKnight",
  //           "avatar_path": null,
  //           "rating": 8
  //       },
  //       "content": "After so many years I wonder if the majority of people have seen the original (comedy / musical) movie of 71, that is a classic. I myself was a bit worried when I saw the announce for this one (haven't watchet a single trailer).\r\n\r\nOh how I was wrong - Timothée Chalamet's Willy Wonka is just perfect on how he emulates the original Wonka by Richard Gere plus the musical and dance scenes aren't bad at all. \r\n\r\nTo those who knew the original movie, this gets the start of life of Wonka as a chocolatier, and fill many gaps on the original story - but not all, one being the personality he achieved later and the later relation with the OOmpa Loompa.\r\n\r\nThe movie is just a delight - every little character have its little part and backstory and the story is a family friendly one with all the magic of the original. Even the secondary characters are good choices and all relates in perfect tune. \r\n\r\nTo those who don't know, the character was original from a book \"Charlie and the Chocolate Factory' a 1964 children's novel by Roald Dahl, that had a sequence (a crazy one btw, in 1972). Many politically incorrect terms were already omitted in the 1971 book. \r\n\r\nThe movie gets outside of those, being more a spiritual prequel film for the 71 one, exploring Willy Wonka's origins in 2023. And remembering the 2005 remake of the original by Tim Burton and starring Johnny Depp as Willy Wonka.\r\n\r\nAs a complimentary note, the Dahl's family agreed with Netflix to expand the Wonka universe on a series of animations for the streaming channel.\r\n\r\nThe movie gets a 7.7 out of 10.o for be a B+.",
  //       "created_at": "2024-01-23T14:37:12.184Z",
  //       "id": "65afcf18bd588b00ebaecb6b",
  //       "updated_at": "2024-01-23T14:37:12.289Z",
  //       "url": "https://www.themoviedb.org/review/65afcf18bd588b00ebaecb6b"
  //   },
  //   {
  //       "author": "BornKnight",
  //       "author_details": {
  //           "name": "",
  //           "username": "BornKnight",
  //           "avatar_path": null,
  //           "rating": 8
  //       },
  //       "content": "After so many years I wonder if the majority of people have seen the original (comedy / musical) movie of 71, that is a classic. I myself was a bit worried when I saw the announce for this one (haven't watchet a single trailer).\r\n\r\nOh how I was wrong - Timothée Chalamet's Willy Wonka is just perfect on how he emulates the original Wonka by Richard Gere plus the musical and dance scenes aren't bad at all. \r\n\r\nTo those who knew the original movie, this gets the start of life of Wonka as a chocolatier, and fill many gaps on the original story - but not all, one being the personality he achieved later and the later relation with the OOmpa Loompa.\r\n\r\nThe movie is just a delight - every little character have its little part and backstory and the story is a family friendly one with all the magic of the original. Even the secondary characters are good choices and all relates in perfect tune. \r\n\r\nTo those who don't know, the character was original from a book \"Charlie and the Chocolate Factory' a 1964 children's novel by Roald Dahl, that had a sequence (a crazy one btw, in 1972). Many politically incorrect terms were already omitted in the 1971 book. \r\n\r\nThe movie gets outside of those, being more a spiritual prequel film for the 71 one, exploring Willy Wonka's origins in 2023. And remembering the 2005 remake of the original by Tim Burton and starring Johnny Depp as Willy Wonka.\r\n\r\nAs a complimentary note, the Dahl's family agreed with Netflix to expand the Wonka universe on a series of animations for the streaming channel.\r\n\r\nThe movie gets a 7.7 out of 10.o for be a B+.",
  //       "created_at": "2024-01-23T14:37:21.761Z",
  //       "id": "65afcf213e2ec800cb6d9b49",
  //       "updated_at": "2024-01-23T14:37:21.862Z",
  //       "url": "https://www.themoviedb.org/review/65afcf213e2ec800cb6d9b49"
  //   }
  // ]