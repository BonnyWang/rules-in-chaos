<template>
    <span class="projectContent">
        <h1 class="projectTitle">
            Home Cat
        </h1>
        <h2 class="projectSubTitle">
            Created during the 48-hour rct AI GAMEHACK 2021 and Won the Top Prize
        </h2>
        <a href="https://bonnywang.github.io/GameHack2021/">
            <button class="playOnline"><b>Click Here to Play!</b></button>
        </a>
        <p>
            In collaboration with Yuqian Sun (Visual Artist), Enduro Wang (Developer), Hong Zhang (Visual Artist), Jiayu Wu (Musician), Morty (Developer) and Xuan (Desginer/Writer)
        </p>
        <p>Github Repo Address: <a href="https://github.com/GameHack2021/GameHack2021-Unity">https://github.com/GameHack2021/GameHack2021-Unity</a>
        </p>
        <h3>
            Background:
        </h3>
        <p>
            In the cyberpunk future world, you encounter a cat, a creature that hasn't been seen in a long time. You are attracted to its cute appearance. Therefore, you brought the cat to your home. You can only communicate freely with the cat through a translator at home. Due to the limitations of the translator, the conversations are not always logical. As you chat more with the cat, your feelings for the cat become stronger. However, because the cat generates so many kittens, you have to send the kittens to other people's homes. In the process of sending cats, you understand better the concept of home. From thinking that home was just a broken basement to a warm place you share with the cat. At the same time, you hope to let others feel the same healing effect that cats can bring, reviving people's emotions in this cold cyberpunk world.
        </p>
        <h3>
            Technologies Used:
        </h3>
        <p>
            Unity Game Engine and GPT-3 API
            <br>
            <br>
            * The initial backend which connected to the rct AI's API is no longer available. GPT-3 is used instead for generating the cat's reply in the game. The use of GPT-3 enables full freedom of conversations with the cat.
        </p>
        <h3>
            Core Loop:
        </h3>
        <p>
            Chat to build up your connection with the cat -> Go outside -> Find doors to people's homes -> Try to deliver kittens -> Return to the first step
        </p>
        <h3>
            Game concept art:
        </h3>
        <img style="image-rendering: pixelated;" src="\ImgThumbNail\endCG.jpg">
        <img style="image-rendering: pixelated;" src="\ImgThumbNail\OpenCG.jpeg">
        <h3>
            Gameplay video:
        </h3>
        <iframe width="80%" height="315" src="https://www.youtube.com/embed/Z7h5IpA_8do" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        
    </span>
  
</template>

<script>
export default {
    name:"catHome"

}
</script>

<style>
    
</style>