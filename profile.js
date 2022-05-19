const users = {
    "CodemaniaChica_92": {
      "firstName": "Melanie",
      "lastName": "Campbell",
      "uid": "CodemaniaChica_92",
      "password": "HelloWorld123$",
      "posts": [{
        "id": "BD5BE432-7674-49AA-847C-EE71C7CF843E",
        "uid": "CodemaniaChica_92",
        "content": "Silly Rabbit, trixs are for kids",
        "time": "09/30/2021"
      },{
        "id": "434D4D90-2C6A-4E9E-B6A5-F9AA5D2CCF71",
        "uid": "CodemainaChica_92",
        "content": "New Shoes! You like?",
        "time": "03/25/2022"
      }]
    },
    "Nicolesew": {
      "firstName": "Nicole",
      "lastName": "Sewell",
      "uid": "Nicolesew",
      "password": "NS123!",
      "posts": [{
        "id": "4EF353D4-CFB0-4C70-9A9F-0806F59F632A",
        "uid": "Nicolesew",
        "content": "Hey there, how are you?",
        "time": "06/12/1999"
      },{
        "id": "7D80F403-4921-4ED1-A3B0-EC7334940106",
        "uid": "Nicolesew",
        "content": "Hey, again",
        "time": "06/12/1999"
      }]
    },
    "demowi8": {
      "firstName": "Desmond",
      "lastName": "Williams",
      "uid": "demowi8",
      "password": "Frank123",
      "posts": [{
        "id": "709FCDFD-D3CC-4896-AB03-3C283F2428BE",
        "uid": "demowi8",
        "content": "Another day another dollar.",
        "time": "05/18/2022"
      },{
        "id": "E75450B7-0044-46BA-A077-89B6C0C86CE6",
        "uid": "demowi8",
        "content": "Two birds one stone",
        "time": "05/18/2022"
      }]
    }
  };
  
  $(function(){
    let currentUser = users.demowi8;
  
   
    
    $("#profilecardname").text(`${currentUser.firstName} ${currentUser.lastName}`);
    $("#profilecarduid").text(`@${currentUser.uid}`);
  
    // Display all user posts
    /*
      users already defined, want to target each user and each user's posts
      users.foreach(user => {
        user.posts.foreach(post => {
          return `<li class="tweetcontainer">
                <img src="http://3.bp.blogspot.com/-JCYefwq__2U/TxCfC3s1ZpI/AAAAAAAAKcM/u5mw7qPAL0w/s300-c/Camilla-Belle-6.jpg" alt="Profile picture" class="tweetprofimg">
                
                <span class="tweetprofuid">'@${post.uid}'</span>
                
                <div class="m158px">
                  <p style="margin: 0px">`${post.content}`</p>
                  <div class="mt10px">
                    <span class="retweet tweetstats">
                      <i class="fa fa-retweet"></i>
                      <span class="tweetstatcount">0</span>
                    </span>
                    <span class="like tweetstates">
                      <i class="fa fa-heart-o"></i>
                      <span class="tweetstatscount">0</span>
                    </span>
                  </div>
                </div>
              </li>`
        })
      })
    */
      function tweetitem(users) {
        let newPost = `<li class="tweetcontainer">
          <img src="http://3.bp.blogspot.com/-JCYefwq__2U/TxCfC3s1ZpI/AAAAAAAAKcM/u5mw7qPAL0w/s300-c/Camilla-Belle-6.jpg" alt="Profile picture" class="tweetprofimg">
          
          <span class="tweetprofuid">'@${post.uid}'</span>
          
          <div class="m158px">
            <p style="margin: 0px">${post.content}</p>
            <div class="mt10px">
              <span class="retweet tweetstats">
                <i class="fa fa-retweet"></i>
                <span class="tweetstatcount">0</span>
              </span>
              <span class="like tweetstates">
                <i class="fa fa-heart-o"></i>
                <span class="tweetstatscount">0</span>
              </span>
            </div>
          </div>
        </li>`
  
        users.foreach(user => {
            user.posts.foreach(post => {
  
                return newPost;
            })
        })
       $('#tweetscontainer').append(newPost);
      }
  
    // Related to posting new tweet
    $statslistitemcount = $('#statslistitemcount');
      $totalchars = $('#totalchars');	
      $posttweetta = $('#posttweetta');	
      $tweetscontainer = $('#tweetscontainer');
  
  })
  
  