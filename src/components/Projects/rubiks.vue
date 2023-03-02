<template>
    <span class="projectContent">
        <h1 class="projectTitle">WebGL Rubik's Cube</h1>
        <h2 class="projectSubTitle">An Online Rubik's Cube Built with WebGL and GLSL</h2> 
        <a href="https://bonnywang.github.io/RubiksCube/">
            <button class="playOnline"><b>Click Here to Play!</b></button>
        </a>
        <br>
        <p>
            This project experiments with low-level computer graphics and WebGL.
            <br>
            <br>
            At the initial of the program, the vertex coordinates of the 27 small cubes is passed to the vertex shader. Then users can specify the plane and direction they want to rotate. All rotations (matrix multiplications) are handled in the vertex shader by passing the sequential rotation operations.
            <br>
            <br>
            Input data to the vertex shader:
            <br>
            1. vertex position [x, y, z]
            <br>
            2. vertex color [r, g, b]
            <br>
            3. turn number x
            <br>
            4. Sequential rotations of 9 planes 
            <br>
            &ensp;E.g.
            <br>
            [
            <br>
                 &ensp;[
                <br>
                     &ensp; &ensp;[0,0,0],
                    <br>
                     &ensp; &ensp;[0,0,pi/2],
                    <br>
                     &ensp; &ensp;[0,0,0],
                    <br>
                 &ensp;],
                <br>
                 &ensp;[
                <br>
                     &ensp; &ensp;[0,pi/2,0],
                    <br>
                     &ensp; &ensp;[0,0,0],
                    <br>
                     &ensp; &ensp;[0,0,0],
                    <br>
                &ensp;],
                <br>
                &ensp;...
                <br>
            ] 
        </p>
        <h3>
            Main User Interface:
        </h3>
        <img src="/ImgOriginal/RubiksInterface.png"/>
        <h3>
            Sample Play:
        </h3>
        <img src="/ImgOriginal/rubiks.gif"/>
        <h3>
            Broken Rubik's Cube:
        </h3>
        <img src="/ImgOriginal/rubiksCrap.gif"/>
    </span>
</template>

<script>
export default {
    name:"rubiks"
}
</script>

<style>

</style>