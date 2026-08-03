const reels = [
  {
    username: "Kavita",
    likeCount: 1200,
    isLiked: false,
    commentCount: 320,
    caption: "Living my best life ✨ #reels #instagram",
    video: "v1.mp4",
    userProfile: "https://picsum.photos/id/64/50/50",
    shareCount: 150,
    isFollowed: false,
  },
  {
    username: "Bhavesh",
    likeCount: 2400,
    isLiked: true,
    commentCount: 410,
    caption: "Weekend vibes 🌤️ #reels #instagram",
    video: "v2.mp4",
    userProfile: "https://picsum.photos/id/65/50/50",
    shareCount: 98,
    isFollowed: true,
  },
  {
    username: "Rahul",
    likeCount: 860,
    isLiked: false,
    commentCount: 142,
    caption: "New drop just landed 🔥 #reels #instagram",
    video: "v3.mp4",
    userProfile: "https://picsum.photos/id/91/50/50",
    shareCount: 57,
    isFollowed: false,
  },
  {
    username: "Priya",
    likeCount: 3200,
    isLiked: true,
    commentCount: 512,
    caption: "Sunset chasing 🌅 #reels #instagram",
    video: "v4.mp4",
    userProfile: "https://picsum.photos/id/103/50/50",
    shareCount: 210,
    isFollowed: true,
  },
  {
    username: "Arjun",
    likeCount: 540,
    isLiked: false,
    commentCount: 76,
    caption: "Gym day 💪 #reels #instagram",
    video: "v2.mp4",
    userProfile: "https://picsum.photos/id/177/50/50",
    shareCount: 34,
    isFollowed: false,
  },
  {
    username: "Sneha",
    likeCount: 1780,
    isLiked: false,
    commentCount: 289,
    caption: "Coffee and calm ☕ #reels #instagram",
    video: "v1.mp4",
    userProfile: "https://picsum.photos/id/219/50/50",
    shareCount: 121,
    isFollowed: true,
  },
  {
    username: "Vikram",
    likeCount: 990,
    isLiked: true,
    commentCount: 154,
    caption: "Road trip diaries 🚗 #reels #instagram",
    video: "v2.mp4",
    userProfile: "https://picsum.photos/id/338/50/50",
    shareCount: 67,
    isFollowed: false,
  },
  {
    username: "Ananya",
    likeCount: 4100,
    isLiked: false,
    commentCount: 623,
    caption: "Dance it out 💃 #reels #instagram",
    video:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    userProfile: "https://picsum.photos/id/342/50/50",
    shareCount: 305,
    isFollowed: false,
  },
  {
    username: "Rohit",
    likeCount: 720,
    isLiked: false,
    commentCount: 98,
    caption: "Late night coding 💻 #reels #instagram",
    video: "v4.mp4",
    userProfile: "https://picsum.photos/id/366/50/50",
    shareCount: 41,
    isFollowed: true,
  },
  {
    username: "Meera",
    likeCount: 2650,
    isLiked: true,
    commentCount: 401,
    caption: "Art and chill 🎨 #reels #instagram",
    video:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    userProfile: "https://picsum.photos/id/416/50/50",
    shareCount: 178,
    isFollowed: false,
  },
];

let addReels = document.querySelector(".reels");

function addData() {
  let sum = "";
  reels.forEach((element, idx) => {
    sum += `<div class="reel">
            <video src="${element.video}" autoplay loop muted playsinline></video>
            <div class="top">
              <h3>Reels</h3>
              <span><svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg></span>
            </div>
            <div class="actions">
              <div id=${idx} class="like">
                ${
                  element.isLiked
                    ? "<i class='ri-heart-fill red'></i>"
                    : "<i class='ri-heart-line'></i>"
                }
                <h6>${element.likeCount}</h6>
              </div>
              <div class="comment">
                <i class="ri-chat-3-line"></i>
                <h6>${element.commentCount}</h6>
              </div>
              <div class="share">
              <i class="ri-share-forward-line"></i>                <h6>${element.shareCount}</h6>
              </div>
              <div class="more">
                <i class="ri-more-2-fill"></i>
              </div>
            </div>
            <div class="bottom">
              <div class="user">
                <img src="${element.userProfile}" alt="user" />
                <h4>${element.username}</h4>
                <button class = "follow" id = ${idx}> ${element.isFollowed ? "Unfollow" : "Follow"}</button>
              </div>
              <p class="caption">${element.caption}</p>
              <div class="audio">
                <span><svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg></span>
                <p>Original audio - ${element.username}</p>
              </div>
            </div>
          </div>`;
  });
  addReels.innerHTML = sum;
}

addData();

addReels.addEventListener("click", (dets) => {
  let like = dets.target.closest(".like");
  if (like) {
    let singleReel = reels[like.id];
    if (!singleReel.isLiked) {
      singleReel.likeCount++;
      singleReel.isLiked = true;
    } else {
      singleReel.likeCount--;
      singleReel.isLiked = false;
    }
  }

  let followbtn = dets.target.closest(".follow");
  if (followbtn) {
    let fllw = reels[followbtn.id];
    fllw.isFollowed = !fllw.isFollowed;  // it's like toggle follow ko unfollow and vice versa
  }

  addData();
});
