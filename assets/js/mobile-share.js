window.onload = function() {
    const postUrl = encodeURI(document.location.href);
    const postTitle = encodeURI(document.title);

    const url = document.location.href;
    const title = document.title;

    const mobilePlatformButtons = document.getElementsByClassName('minion');
    const desktopPlatformButtons = document.getElementsByClassName('btn');
    const commander = document.getElementById('commander-id');
    

    // [0] facebook
    mobilePlatformButtons[0].href = `https://www.facebook.com/sharer.php?u=${postUrl}`
    desktopPlatformButtons[0].href = `https://www.facebook.com/sharer.php?u=${postUrl}`

    // [1] twitter
    mobilePlatformButtons[1].href = `https://twitter.com/share?url=${postUrl}&text=${postTitle}`
    desktopPlatformButtons[1].href = `https://twitter.com/share?url=${postUrl}&text=${postTitle}`

    // [2] linkedin
    mobilePlatformButtons[2].href = `https://www.linkedin.com/shareArticle?url=${postUrl}&title=${postTitle}`
    desktopPlatformButtons[2].href = `https://www.linkedin.com/shareArticle?url=${postUrl}&title=${postTitle}`

    commander.addEventListener('click', () => {
        if(navigator.share){
            navigator.share({
                title: `${title}`,
                url: `${url}`
            }).catch(console.error);
        } else {
            commander.classList.toggle('open');
            commander.children[0].classList.toggle('fa-share-alt');
            commander.children[0].classList.toggle('fa-times');

            for(let i=0; i<mobilePlatformButtons.length; i++) {
                mobilePlatformButtons[i].classList.toggle('hidden');
            }
        }

    });

    //commander.onclick = function () {
        //commander.classList.toggle('open');
        //commander.children[0].classList.toggle('fa-share-alt');
        //commander.children[0].classList.toggle('fa-times');

        //for(let i=0; i<mobilePlatformButtons.length; i++) {
            //mobilePlatformButtons[i].classList.toggle('hidden');
        //}

    //}
}
