<template>
    <span class="projectContent">
        <h1 class="projectTitle">
            Digital Logic Design: “Whac-a-Mole”
        </h1>
        <h2 class="projectSubTitle">
            A circuit designed with fundamental electronic components including timers, counters, flip-flops, decoders, and logic gates
        </h2>
        <p>
            In collaboration with Zikai Wang
        </p>
        <h3>
            Overall circuits:
        </h3>
        <img style="image-rendering: pixelated;" src="\ImgThumbNail\DLDWhole.jpg">
        <h3>
            Introduction:
        </h3>
        <p>
            A Whac-A-Mole game that has 2 different levels of difficulties. There are six LEDs used to represent the six holes in the game. When the LED light up, it means the mole comes out of the hole and the user needs to press the corresponding button for a certain period of time depending on the level they choose to trigger the action of hitting the mole. If the user successfully hit the button while the LED is on, scores will be recorded and then displayed. In order to win, the user needs to hit 9 moles in 20 seconds. The 2 levels of difficulties will differ from the time you have to hit the mole. In level 2, the users need to hit the mole in a shorter period of time otherwise they cannot gain the score. To accomplish the goal of this project, we utilized timers, counters, flip-flops, decoders, and logic gates to achieve the logic behind this game.
        </p>
        <h3>User Interaction:</h3>
        <ul>
            <li>Buttons(Corresponding to the Mole)</li>
            <li>LEDs to represent the Mole </li>
            <li>Button(To start the game)</li>
            <li>Switch(To change the difficulty of the game)</li>
        </ul>
        <h3>Mole Generator:</h3>
        <ul>
            <li>555 timer(Very High  frequency)</li>
            <li>555 timer(Control how often one mole will come out)</li>
            <li>D flipflop(choose the number only when the clock signal of the second 555 timer is high)</li>
            <li>4-bit counter</li>
            <li>Decoder(the output)</li>
        </ul>
        <h3>Level Management:</h3>
        <ul>
            <li>Use of switch to change the capacity of the 555 timer to achieve different time period</li>
        </ul>
        <h3>Win Pattern Control(Game Cycle control):</h3>
        <ul>
            <li>SR latches(one for score counter, one for time counter)</li>
            <li>Button(To start the game)</li>
            <li>AND Gate</li>
            <li>LED(Represent the victory of the game)</li>
        </ul>
        <h3>Time Management:</h3>
        <ul>
            <li>555 Timer(period of 1s)</li>
            <li>4-bit counter</li>
            <li>2 Decoders</li>
            <li>2 Segment displays</li>
        </ul>
        <p>
            Game play video:
        </p>
        <iframe width="80%" height="315" src="https://youtube.com/embed/0gD4PNapg4I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        
    </span>
  
</template>

<script>
export default {
    name:"DLD"

}
</script>

<style scoped>
ul{
    list-style-type:square
}
li{
    display: list-item;
    width: auto;
    list-style-type:square
}
    
</style>